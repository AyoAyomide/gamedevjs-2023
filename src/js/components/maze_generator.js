import { maze } from "../maze_level";

AFRAME.registerComponent('maze_generator', {
    schema: {

    },

    init: function () {
        const parent = this.el;
        // Append child according to maze data
        this.maze_gen(parent);
    },
    maze_gen: function (parent) {
        const centerPos = (maze.level1[0].length - 1) * 0.5;
        // Append child according to maze data
        maze.level1.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                if (cell === 1) {
                    let wall = document.createElement('a-entity');
                    wall.setAttribute('geometry', "primitive: box; buffer: false");
                    wall.setAttribute('position', `${centerPos - cellIndex} 1.25 ${rowIndex + 0.5}`);
                    wall.setAttribute('scale', '1 2.5 1');
                    wall.setAttribute('static-body', "");
                    parent.appendChild(wall);
                }
            });
        });
    }
});
