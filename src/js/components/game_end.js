/**
 * restart clicked
 * 
 */
AFRAME.registerComponent('game_end', {
    dependencies: ['raycaster'],
    init: function () {
      this.el.addEventListener('raycaster-intersection', (event) => {
        scene.dispatchEvent(endGame);
      });
    }
  });