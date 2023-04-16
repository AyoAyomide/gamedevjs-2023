AFRAME.registerComponent('game_passed', {
    schema: {

    },

    init: function () {
        let counterUI = document.querySelector('#counter_ui');
        let rightHand = document.querySelector('#rightHand');
        this.el.addEventListener('hitstart', (e) => {
            gamePassed = true;
            gameStarted = false;
            let children = this.el.children;
            for (let i = 0; i < children.length; i++) {
                let child = children[i];
                child.setAttribute('visible', 'true')
            }
        });
    },
});
