function spotEachRebel(rebels) {
  let spottedRebelCalls = []

  /** 
   * @BUG ALERT - We need to be pushing 'Look! Rebel scum!' once for each rebel spotted
   * Fixed, added a forEach loop to add in a phrase for each rebel
   */
  // eslint-disable-next-line no-unused-vars
  rebels.forEach(function (rebel) {
    spottedRebelCalls.push('Look! Rebel scum!')
  })

  return spottedRebelCalls
}

/**
  Always include 4 fired "pew" shots
 */
function shootAtNothing() {
  let shotsAtNothing = []

  /** @BUG ALERT - Looping is not quite correct */
  /** Fixed, set i =0 instead of 1 so that it counts 4 times not 3  */
  for (let i = 0; i < 4; i++) {
    shotsAtNothing.push('pew')
  }

  return shotsAtNothing
}

/**
 * Get lines from different movie roles
 * Use the Array `concat` method to put all of the movie script lines together in one
 */
function deliverStormTroopersEscapeScene(rebels) {
  /** combine results form each part of the scene  */
  const sceneSequence = [...spotEachRebel(rebels), ...shootAtNothing()]

  return sceneSequence
}

/** 
  We are not exporting an object.
  We are exporting a single function.
  Only the exported function can be directly used by code that requires this module.
 */
module.exports = deliverStormTroopersEscapeScene
