/** Everything that describes Rom right now. Shared by the player systems. */
export function createPlayerState() {
  return {
    // Look direction (camera yaw/pitch) and walk cycle.
    yaw:0, pitch:0, stride:0, firstPerson:false,
    // Vitals.
    health:100, stamina:100, exhausted:false, recovery:0,
    meters:{bladder:0, gas:0, bowel:0},
    timers:{dizzy:0, gas:0, bladder:0},
    pressureTime:0, gasDelay:0, puffTime:0,
    // Movement.
    airborne:false, verticalSpeed:0, landingTime:0,
    moving:false, running:false, thrust:false,
    climbing:null, jetpack:false,
    equipment:{jetpack:false},
    // Actions and animation.
    deathTime:0, attackTime:0, swing:0,
    emote:null, emoteTime:0, pickupMotion:null, drinkMotion:null,
  };
}

/** True while an animation or state prevents starting another action. */
export const isBusy = state => Boolean(state.deathTime || state.emote || state.pickupMotion || state.drinkMotion);
