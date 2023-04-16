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
        const mazeWidth = 15;
        const mazeHeight = 30;
        const mazeDepth = 15;
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
                    // wall.setAttribute('shadow','');
                    wall.setAttribute('class', 'box');
                    wall.setAttribute('material', 'src:#color;normalMap:#normal;ambientOcclusionMap:#ambient;roughnessMap:#roughness;repeat:2 2;');
                    parent.appendChild(wall);
                }
            });
        });
        // set ui position from parent first child
        let ui = document.querySelector('#maze_ui');
        let player = document.querySelector('#rig');
        let firstChildPos = parent.firstElementChild.object3D.position;
        setTimeout(() => {
            // player.setAttribute('position',`0 0 ${firstChildPos.z * 2.3}`)
            player.object3D.position.z = firstChildPos.z * 2.3;
            ui.object3D.position.z = firstChildPos.z * 1.6;
        }, 1);

        // set finish line position
        let line = document.querySelector('#finish_line');
        line.setAttribute('position', `0 0 ${pos.x + -2}`);

    },
});
