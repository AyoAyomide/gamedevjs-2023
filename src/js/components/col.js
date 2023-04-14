/*
         * prevent the camera from entering a 3d entity
         * coded by Synn ( https://github.com/chabloz )
         */
AFRAME.registerComponent('sphere-collider-constraint', {
    schema: {
        selector: {
            default: '',
        },
        distance: {
            default: 0.5,
        },
    },

    init: function () {
        this.lastPosition = new THREE.Vector3()
        this.el.object3D.getWorldPosition(this.lastPosition)

        this.myPos = new THREE.Vector3()
        this.el.object3D.getWorldPosition(this.myPos)

        this.targetPos = new THREE.Vector3()

        this.el.addEventListener('hitstart', (e)=> {
            // move to last know position
            console.log('Player has collided with body');
            this.didHit = true;

        });

    },

    tick: function () {
        // if haven't moved since last tick, do nothing
        this.el.object3D.getWorldPosition(this.myPos)
        if (this.myPos.distanceTo(this.lastPosition) === 0) return

        // let didHit = true

        // for (const obj of document.querySelectorAll(this.data.selector)) {
        //     obj.object3D.getWorldPosition(this.targetPos)
        //     const distanceTo = this.myPos.distanceTo(this.targetPos)
        //     if (distanceTo <= obj.components.geometry.data.radius + this.data.distance) {
        //         didHit = true
        //         break
        //     }
        // }
        console.log(this.didHit);
        if (this.didHit) {
            this.el.object3D.position.copy(this.lastPosition)
            this.el.object3D.parent.worldToLocal(this.el.object3D.position)
        } else {
            this.el.object3D.getWorldPosition(this.lastPosition)
        }
    },
})