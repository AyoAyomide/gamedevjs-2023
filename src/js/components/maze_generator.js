/**
 * The maze
 */
import { maze } from "../maze_level";

AFRAME.registerComponent('maze_generator', {
    init: function () {
        const parent = this.el;
        // Append child according to maze data
        this.maze_gen(parent);
    },
    maze_gen: function (parent) {
        const mazeWidth = 15;
        const mazeHeight = 100;
        const mazeDepth = 15;
        const centerPosX = (maze.level1[0].length - 1) * (mazeWidth / 2);
        const centerPosZ = (maze.level1.length - 1) * (mazeDepth / 2);
        let wallPosition;

        // Append child according to maze data
        maze.level1.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                if (cell === 1) {
                    let wall = document.createElement('a-entity');
                    wallPosition = {
                        z: centerPosX - (cellIndex * mazeWidth),
                        y: mazeHeight / 2,
                        x: centerPosZ - (rowIndex * mazeDepth)
                    }
                    wall.setAttribute('geometry', "primitive: box;");
                    wall.setAttribute('position', `${wallPosition.z} ${wallPosition.y} ${wallPosition.x}`);
                    wall.setAttribute('scale', `${mazeWidth} ${mazeHeight} ${mazeDepth}`);
                    wall.setAttribute('class', 'box');
                    wall.setAttribute('material', 'src:#color;normalMap:#normal;ambientOcclusionMap:#ambient;roughnessMap:#roughness;repeat:0.5 1.5;roughness:1;');
                    parent.appendChild(wall);
                }
            });
        });

        // set finish line position
        let line = document.querySelector('#finish_line');
        line.setAttribute('position', `-60 0 ${wallPosition.x * 1.2 - 0.5}`);
    },
});
