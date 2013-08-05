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
    var sum = 0;
    for (var i = 0; i < timing.length; i++) {
      var time = timing[i];
      sum += time;
      setTimeout(function() { displayFace('sarndeep-open.jpg'); }, sum);
      // console.log('sarndeep-open in ' + sum);
      i++;

      if (i >= timing.length) {
        break;
      } 

      time = timing[i];
      
      sum += time;
      setTimeout(function() { displayFace('sarndeep.jpg'); }, sum);
      // console.log('sarndeep in ' + sum);
    }
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
