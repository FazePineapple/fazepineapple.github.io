export function createAudio() {
  let context, output, ambient, enabled=true, masterVolume=1;
  const voices={
    fart:[['sawtooth',96,37,.38,.13],['triangle',121,51,.23,.09]],
    burp:[['sawtooth',145,61,.26,.12]],
    laugh:[['triangle',330,270,.13,.09],['triangle',360,280,.13,.09,.15],['triangle',390,270,.18,.09,.30]],
    scream:[['triangle',520,290,.31,.11],['sawtooth',650,400,.21,.035]],
    bell:[['sine',880,880,.8,.12],['triangle',1320,1319,.5,.045],['sine',880,879,.8,.12,.48]],
    botDeath:[['sawtooth',210,32,.48,.09],['triangle',99,35,.57,.11]],
    botHit:[['triangle',250,110,.15,.10]],
    botAttack:[['square',135,68,.19,.065]],
    foam:[['triangle',360,160,.17,.085],['sawtooth',215,92,.13,.022]],
    shot:[['sawtooth',170,45,.14,.11]],
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
      if(!context||!enabled)return;
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
