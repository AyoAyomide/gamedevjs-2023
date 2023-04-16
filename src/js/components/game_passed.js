AFRAME.registerComponent('game_passed', {
    schema: {

    },

    init: function () {
        let passedImage = document.querySelector('#passed_image');
        let vr_camera = document.querySelector('#vr_camera');
        this.el.addEventListener('hitstart', (e) => {
            gamePassed = true;
            gameStarted = false;
            let children = this.el.children;
            for (let i = 0; i < children.length; i++) {
                let child = children[i];
                child.setAttribute('visible', 'true')
            }
            passedImage.components.sound.playSound();
            vr_camera.components.sound.stopSound();
            setTimeout(() => {
                vr_camera.setAttribute('sound', 'src', '#noise');
            }, 5000);
        });
    },
});
