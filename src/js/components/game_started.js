/**
 * start clicked
 * 
 */
AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],
  init: function () {
    this.el.addEventListener('raycaster-intersection', (event) => {
      scene.dispatchEvent(startGame);
    });
  }
});