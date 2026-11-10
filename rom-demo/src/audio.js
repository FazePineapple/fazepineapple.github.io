export function createAudio() {
  let context, output, ambient, engine, engineGain, enabled=true, masterVolume=1;
  const voices={
    fart:[['sawtooth',96,37,.38,.13],['triangle',121,51,.23,.09]],
    burp:[['sawtooth',145,61,.26,.12]],
    laugh:[['triangle',330,270,.13,.09],['triangle',360,280,.13,.09,.15],['triangle',390,270,.18,.09,.30]],
    scream:[['triangle',520,290,.31,.11],['sawtooth',650,400,.21,.035]],
    bell:[['sine',880,880,.8,.12],['triangle',1320,1319,.5,.045],['sine',880,879,.8,.12,.48]],
    botDeath:[['sawtooth',210,32,.48,.09],['triangle',99,35,.57,.11]],
    botHit:[['triangle',250,110,.15,.10]],
    botAttack:[['square',135,68,.19,.065]],
    foam:[['triangle',151,94,.48,.055],['sawtooth',72,58,.42,.018]],
    cough:[['sawtooth',180,87,.13,.085],['triangle',162,75,.16,.085,.18]],
    shot:[['sawtooth',170,45,.14,.11]],
    spit:[['square',620,180,.07,.05],['triangle',300,120,.05,.04]],
    clap:[['square',1400,900,.04,.07],['square',1300,800,.04,.07,.18],['square',1450,950,.04,.07,.36],['square',1350,850,.04,.07,.54]],
    cry:[['triangle',440,330,.45,.07],['triangle',415,300,.5,.07,.55],['triangle',400,280,.6,.06,1.15]],
    vomit:[['sawtooth',120,48,.7,.13],['sawtooth',95,40,.55,.1,.35]],
    chew:[['triangle',190,150,.08,.07],['triangle',170,130,.07,.06,.1]],
    swish:[['sawtooth',900,240,.12,.035]],
    shutter:[['square',2400,1800,.03,.06],['square',1600,900,.05,.05,.06]],
    horn:[['square',392,392,.35,.08],['square',494,494,.35,.06]],
    crash:[['sawtooth',160,40,.35,.14],['square',90,40,.3,.08]],
    thud:[['sine',140,55,.14,.12],['triangle',90,45,.1,.06]],
    questStart:[['triangle',523,523,.16,.08],['triangle',659,659,.22,.08,.12]],
    questComplete:[['triangle',523,523,.14,.08],['triangle',659,659,.14,.08,.11],['triangle',784,784,.32,.09,.22]],
  };
  function start() {
    if(!context && window.AudioContext) {
      context=new AudioContext();
      output=context.createGain();output.connect(context.destination);
      ambient=context.createGain();ambient.gain.value=0;ambient.connect(output);
      const wind=context.createBuffer(1,context.sampleRate*4,context.sampleRate);
      const samples=wind.getChannelData(0);
      let filtered=0;
      for(let i=0;i<samples.length;i++){
        filtered=.97*filtered+.03*(Math.random()*2-1);
        samples[i]=filtered*Math.min(1,i/800,(samples.length-i)/800);
      }
      const source=context.createBufferSource();
      source.buffer=wind;source.loop=true;source.connect(ambient);source.start();
    }
    context?.resume().catch(()=>{});
    if(output)output.gain.value=enabled?masterVolume:0;
  }
  return {
    start,
    /** Continuous car engine hum; level 0 (off) to 1 (full speed). */
    engine(level) {
      if(!context)return;
      if(!engine && level>0) {
        engine=context.createOscillator();engine.type='sawtooth';
        const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=420;
        engineGain=context.createGain();engineGain.gain.value=0;
        engine.connect(filter);filter.connect(engineGain);engineGain.connect(output);engine.start();
      }
      if(!engine)return;
      engine.frequency.setTargetAtTime(48+level*95,context.currentTime,.08);
      engineGain.gain.setTargetAtTime(level>0?.05+level*.07:0,context.currentTime,.1);
    },
    ambience(active,indoors=false) {
      if(!context)return;
      ambient.gain.setTargetAtTime(active?(indoors?.04:.19):0,context.currentTime,.16);
    },
    setVolume(value) {
      masterVolume=value;
      if(output)output.gain.value=enabled?masterVolume:0;
    },
    setMuted(muted) {
      enabled=!muted;
      if(output)output.gain.value=enabled?masterVolume:0;
    },
    play(name) {
      if(!context||!enabled||!voices[name])return;
      for(const [type,from,to,duration,volume,delay=0] of voices[name]) {
        const now=context.currentTime+delay;
        const oscillator=context.createOscillator(), gain=context.createGain();
        oscillator.type=type;
        oscillator.frequency.setValueAtTime(from,now);
        oscillator.frequency.exponentialRampToValueAtTime(to,now+duration);
        gain.gain.setValueAtTime(.001,now);
        gain.gain.linearRampToValueAtTime(volume,now+.025);
        gain.gain.exponentialRampToValueAtTime(.001,now+duration);
        oscillator.connect(gain);gain.connect(output);
        oscillator.start(now);oscillator.stop(now+duration+.01);
      }
    },
  };
}
