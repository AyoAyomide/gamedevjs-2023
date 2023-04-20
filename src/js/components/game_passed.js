/**
 * player passed the game
 */
AFRAME.registerComponent('game_passed', {
    init: function () {
        this.el.lastElementChild.object3D.position.y = -100;
        this.el.addEventListener('hitstart', (e) => {
            this.el.lastElementChild.object3D.position.y = 1.5;
            this.el.lastElementChild.components.sound.playSound();

            gamePassed = true;
            gameStarted = false;

            globalScene.camera.components.sound.stopSound();
            setTimeout(() => {
                globalScene.camera.setAttribute('sound', 'src', '#noise');
            }, 5000);

        });

        this.el.firstElementChild.addEventListener('raycaster-intersection', (event) => {
            console.log(event);
            globalScene.scene.dispatchEvent(endGame);
        });
    },
});
