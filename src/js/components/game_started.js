/**
 * start clicked
 * 
 */
AFRAME.registerComponent('game_started', {
  dependencies: ['raycaster'],
  init: function () {
    this.el.addEventListener('raycaster-intersection', (event) => {
      is_intersecting = true;
    });
    this.el.addEventListener('raycaster-intersected-cleared', (event) => {
      is_intersecting = false;
    });
  },
});