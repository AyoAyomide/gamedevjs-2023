// available everywhere

let gameStarted = false;
let gamePassed = false;
let gameLevel = 1;

// start event
const startGame = new Event("gameStarted");
const endGame = new Event("gameEnded");


window.onload = () => {

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
    // maze elements
    const maze = document.querySelector('#grid');

    // init functions
    setPosition(player,3);
    setPosition(startUiEntity);

    // Listen for start event.
    scene.addEventListener("gameStarted",
        () => {
            let timeout = 5;
            let countDown = 1000;
            gameStarted = true;
            // set counter text
            counterText.setAttribute('value', timeout);
            // start bgm
            camera.setAttribute('sound', 'src', '#bgm');
            // enable movement
            player.setAttribute('movement-controls', "enabled", "true");
            // hide maze ui
            startUiEntity.setAttribute('visible', 'false');
            startUiEntity.object3D.position.y = -100;

            // count down
            const gameLoop = setInterval(() => {
                if (!gamePassed && timeout > 0) {
                    counterText.setAttribute('value', timeout);
                    timeout--;
                } else {
                    clearInterval(gameLoop);
                    counterText.setAttribute('value', "Game Over");
                    // dispatch end event
                    scene.dispatchEvent(endGame);
                }
            }, countDown);
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
            // show maze ui
            startUiEntity.setAttribute('visible', 'true');
            startUiEntity.object3D.position.y = 0;
            // set player position
            setPosition(player,3);
        },
        false
    );

    function setPosition(entity,distance = 0) {
        // set player position
        entity.object3D.position.set(0, 0, maze.firstElementChild.object3D.position.z * 1.5 + distance)
    }
};

