/**
 * A js component that move player in the direction of the thumbstick
 * and prevent the player from entering a 3d entity
 */

AFRAME.registerComponent('player_controller', {
    init: function () {
        var thumbstick = this.el.sceneEl.querySelector('[thumbstick]');
        thumbstick.addEventListener('thumbstickmoved', function (event) {
            var camera = document.querySelector('[camera]');
            var rotation = camera.getAttribute('rotation');
            rotation.y += event.detail.x;
            camera.setAttribute('rotation', rotation);
            var position = camera.getAttribute('position');
            var direction = new THREE.Vector3(0, 0, -1);
            direction.applyQuaternion(camera.object3D.quaternion);
            position.add(direction.multiplyScalar(event.detail.y));
            camera.setAttribute('position', position);
        });
    }
});

