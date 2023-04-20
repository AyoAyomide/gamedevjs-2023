/**
 * start clicked
 * 
 */
AFRAME.registerComponent('game_started', {
  dependencies: ['raycaster'],
  init: function () {
    this.el.addEventListener('raycaster-intersection', (event) => {
      console.log(event);
      scene.dispatchEvent(startGame);
    });
  }
});