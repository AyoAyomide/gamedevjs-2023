
AFRAME.registerComponent('game_start', {

    init: function () {
      this.timeOut = 5;
      // Do something when component first attached.
      this.speed = 5000;
    },

    update: function(old){
      console.log('game_start updated');
    },

});
