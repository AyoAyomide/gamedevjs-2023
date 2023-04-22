/**
 * player passed the game
 */
AFRAME.registerComponent('game_passed', {
    init: function () {
        this.el.addEventListener('hitstart', (e) => {
            this.el.lastElementChild.object3D.position.y = 1.5;
            this.el.lastElementChild.setAttribute('visible', 'true');
            this.el.lastElementChild.components.sound.playSound();

            gamePassed = true;
            gameStarted = false;

            globalScene.camera.components.sound.stopSound();
            setTimeout(() => {
                globalScene.camera.setAttribute('sound', 'src', '#noise');
                globalScene.camera.setAttribute('sound', 'volume', '0.1');
            }, 5000);
        });
    },
});
