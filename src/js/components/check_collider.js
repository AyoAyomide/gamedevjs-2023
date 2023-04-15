/**
 * Check if the raycaster is intersecting with an object.
 */

AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', (event) => {
      let el = event.detail.els[0];
      el.setAttribute('value', 'Touched');
      gameStarted = true;
      this.hideUI();
      this.startCounter();
    });
  },
  hideUI: function () {
    // Hide intro ui
    let maze_ui = document.querySelector('#maze_ui');
    maze_ui.setAttribute('visible', 'false');
  },
  startCounter: function () {
    let i = 5;
    let counterUI = document.querySelector('#counter_ui');
    let counter = setInterval(() => {
      if (gamePassed === true) {
        clearInterval(counter);
        counterUI.setAttribute('value', "Congratulations!!!");
      } else {
        counterUI.setAttribute('value', i);
        i--;
        if (i < 0) {
          // Game over
          clearInterval(counter);
          if (gamePassed === false) counterUI.setAttribute('value', "Game Over");
        }
      }
    }, 1500);
  }
});