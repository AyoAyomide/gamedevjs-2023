AFRAME.registerComponent('check_collision', {
    schema: {

    },

    init: function () {
        const player = document.querySelector('#rig');

        this.el.addEventListener('hitstart', function (e) {
            // move to last know position
            console.log(player.components);
            console.log('Player has collided with body');
        });
    },
});
