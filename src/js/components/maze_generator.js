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
                    wall.setAttribute('class', 'navmesh-hole');
                    wall.setAttribute('material', 'side: double;color: #fff; metalness: 0.5; roughness: 0.5;');
                    parent.appendChild(wall);
                }else{
                    // Add nav-mesh for path
                    let wall_nav_mesh = document.createElement('a-entity');
                    wall_nav_mesh.setAttribute('geometry', "primitive: plane; buffer: false");
                    wall_nav_mesh.setAttribute('position', `${centerPos - cellIndex} 0.01 ${rowIndex + 0.5}`);
                    wall_nav_mesh.setAttribute('scale', '1 1 1');
                    wall_nav_mesh.setAttribute('rotation', '-90 0 0');
                    wall_nav_mesh.setAttribute('class', 'box');
                    // parent.appendChild(wall_nav_mesh);
                }
            });
        });
    },
});
