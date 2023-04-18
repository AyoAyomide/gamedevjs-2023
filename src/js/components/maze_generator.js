import { maze } from "../maze_level";
// import { nextTick } from 'aframe';

AFRAME.registerComponent('maze_generator', {
    schema: {

    },

    init: function () {
        const parent = this.el;
        // Append child according to maze data
        this.maze_gen(parent);
    },
    maze_gen: function (parent) {
        const mazeWidth = 1;
        const mazeHeight = 1;
        const mazeDepth = 1;
        const centerPosX = (maze.level1[0].length - 1) * (mazeWidth / 2);
        const centerPosZ = (maze.level1.length - 1) * (mazeDepth / 2);
        let pos;
        // Append child according to maze data
        maze.level1.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                if (cell === 1) {
                    let wall = document.createElement('a-entity');
                    pos = {
                        z: centerPosX - (cellIndex * mazeWidth),
                        y: mazeHeight / 2,
                        x: centerPosZ - (rowIndex * mazeDepth)
                    }
                    wall.setAttribute('geometry', "primitive: box; buffer: false");
                    wall.setAttribute('position', `${pos.z} ${pos.y} ${pos.x}`);
                    wall.setAttribute('scale', `${mazeWidth} ${mazeHeight} ${mazeDepth}`);
                    wall.setAttribute('class', 'box');
                    wall.setAttribute('material', 'src:#color;normalMap:#normal;ambientOcclusionMap:#ambient;roughnessMap:#roughness;repeat:0.5 1.5;roughness:1;');
                    parent.appendChild(wall);
                }
            });
        });
        // src:#color;normalMap:#normal;ambientOcclusionMap:#ambient;roughnessMap:#roughness;repeat:2 2;

        // set ui position from parent first child
        let ui = document.querySelector('#maze_ui');
        let player = document.querySelector('#rig');
        let firstChildPos = parent.firstElementChild.object3D.position;
        setTimeout(() => {
            // player.object3D.position.z = firstChildPos.z * 1.7;
            // ui.object3D.position.z = firstChildPos.z * 1.6;
        }, 1);

        // set finish line position
        let line = document.querySelector('#finish_line');
        line.setAttribute('position', `0 0 ${pos.x + -2}`);

    },
});
