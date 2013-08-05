if (Meteor.isClient) {
  Template.sarn.greeting = function () {
    return "Welcome to Sarndeep Simulator 1.0.";
  };

  Meteor.startup(function() {
    setInterval(playRandom, 11000);
  });

  Template.sarn.events({
    'click img' : function() {
      playRandom();
    }
  });

  var playRandom = function() {
    var randomnumber=Math.floor(Math.random()*5);
    switch (randomnumber) {
      case 1:
        yayyay();
        break;
      case 2:
        talking();
        break;
      case 3:
        mutha();
        break;
      case 4:
        smokeweed();
        break;
      }
  };

  var yayyay = function() {
    var sample = document.getElementById('yayyay');
    sample.play();
    var timing = [500, 500, 50, 500];
    animate(timing);
  };

  var talking = function() {
    var sample = document.getElementById('talking');
    sample.play()
    var timing = [500, 500,100,500,100, 500];
    animate(timing);
  };  

  var mutha = function() {
    var sample = document.getElementById('mutha');
    sample.play();
    var timing = [500, 500, 50, 500];
    animate(timing);
  };  

  var smokeweed = function() {
    var sample = document.getElementById('smokeweed');
    sample.play(); 
    var timing = [500, 200,100, 200,100, 200,100, 200];
    animate(timing);   
  }

  var animate = function(timing) {
    // timing should be an array of milliseconds
    // initial state = mouth closed.
    // In timing[0] milliseconds the mouth will open
    // In timing[0] + timing[1] milliseconds the mouth will close, etc
    // timing should contain an even number of elements so that the mouth closes at the end

    var when = 0;
    for (var i = 0; i < timing.length; i++) {
      when += timing[i];
      openMouthLater(when);
      // console.log('sarndeep-open in ' + when);
      i++;

      if (i >= timing.length) {
        break;
      } 

      when += timing[i];
      closeMouthLater(when);
      // console.log('sarndeep in ' + when);
    }
  }

  var openMouthLater = function(millisecondsInTheFuture) {
    setTimeout(function() { displayFace('sarndeep-open.jpg'); }, millisecondsInTheFuture);
  };

  var closeMouthLater = function(millisecondsInTheFuture) {
    setTimeout(function() { displayFace('sarndeep.jpg'); }, millisecondsInTheFuture);
  }
  var displayFace = function (filename) {
      document.getElementById('sarn-image').src = filename;
  };
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
