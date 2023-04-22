AFRAME.registerComponent('get_intersection', {
    dependencies: ['raycaster'],
    init: function () {
        this.el.addEventListener('raycaster-intersected', (event) => {
            is_intersected = true;
            setTimeout(() => {
                if (is_intersected && is_intersecting) {
                    this.el.components.sound.playSound();
                    if (this.el.id === "start_button") {
                        // dispatch start event
                        scene.dispatchEvent(startGame);
                    } else if (this.el.id === "restart_button") {
                        // dispatch end event
                        scene.dispatchEvent(endGame);
                        globalScene.counterText.setAttribute('value', "");
                        globalScene.finishUiEntity.setAttribute('visible', 'false');
                        globalScene.finishUiEntity.object3D.position.y = -100;
                    }
                }
            }, 1);
        });
        this.el.addEventListener('raycaster-intersected-cleared', (event) => {
            is_intersected = false;
        });
    }
});
