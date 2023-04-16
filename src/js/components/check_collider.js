/**
 * Check if the raycaster is intersecting with an object.
 */

AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', (event) => {
      let maze_button = document.querySelector('#maze_button');
      let vr_camera = document.querySelector('#vr_camera');
      maze_button.components.sound.playSound();
      vr_camera.setAttribute('sound', 'src', '#bgm');
      gameStarted = true;
      this.allowMovement();
      this.hideUI();
      this.startCounter();
    });
  },
  allowMovement: function () {
    let player = document.querySelector('#rig');
    player.setAttribute('movement-controls', "enabled", "true");
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
          this.gameOver(counterUI);
        }
      }
    }, 1500);
  },
  gameOver: function (counterUI) {
    let player = document.querySelector('#rig');
    let maze_text = document.querySelector('#maze_button');
    let maze_intro = document.querySelector('#maze_intro');
    let maze_ui = document.querySelector('#maze_ui');
    if (gamePassed === false) {
      gameStarted = false;
      counterUI.setAttribute('value', "Game Over");
      player.object3D.position.set(0, 0, 10);
      player.setAttribute('movement-controls', "enabled", "false");
      maze_ui.setAttribute('visible', 'true');
      maze_text.setAttribute('value', "Restart");
      maze_intro.setAttribute('value', "You failed to find the treasure in time. Try again!");
    }
  }
});