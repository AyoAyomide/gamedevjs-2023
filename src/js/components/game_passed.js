AFRAME.registerComponent('game_passed', {
    schema: {

    },

    init: function () {
        let counterUI = document.querySelector('#counter_ui');
        this.el.addEventListener('hitstart', function (e) {
            gamePassed = true;
            
        });
    },
});
