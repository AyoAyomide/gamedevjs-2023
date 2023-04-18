let gameStarted = false;
let gamePassed = false;
let gameLevel = 1;

// start event
const startGame = new Event("gameStarted");
const endGame = new Event("gameEnded");


window.onload = () => {
    // available everywhere

    // scene element
    const scene = document.querySelector('#scene');
    // player elements
    const player = document.querySelector('#rig');
    const camera = document.querySelector('#vr_camera');
    // maze ui elements
    const startButton = document.querySelector('#maze_button');
    const startUiEntity = document.querySelector('#maze_ui');
    const startUiText = document.querySelector('#maze_intro');
    // counter ui elements
    const counterText = document.querySelector('#counter_ui');


    // Listen for the event.
    scene.addEventListener("gameStarted",
        () => {
            // enable movement
            player.setAttribute('movement-controls', "enabled", "true");
        },
        false
    );

    // Listen for start event.
    scene.addEventListener("gameStarted",
        () => {
            gameStarted = true;
            // start bgm
            camera.setAttribute('sound', 'src', '#bgm');
            // enable movement
            player.setAttribute('movement-controls', "enabled", "true");



            // simulate game over
            setTimeout(() => {
                // dispatch event
                scene.dispatchEvent(endGame);
                console.log("game ended");
            }, 2000);
        },
        false
    );

    // Listen for end event.
    scene.addEventListener("gameEnded",
        () => {
            gameStarted = false;
            // stop bgm
            camera.setAttribute('sound', 'src', '#noise');
            // disable movement
            player.setAttribute('movement-controls', "enabled", "false");
        },
        false
    );



};




