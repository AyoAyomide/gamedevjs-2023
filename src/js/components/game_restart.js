/**
 * restart clicked
 * 
 */
AFRAME.registerComponent('restart_button', {
    dependencies: ['raycaster'],
    init: function () {
        this.el.addEventListener('raycaster-intersection', (event) => {
            globalScene.finishUiEntity.setAttribute('visible', 'false');
            globalScene.finishUiEntity.object3D.position.y = -100;
        });
    }
});