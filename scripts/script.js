// Left Side Way Points
var startWaypointLeft = new Waypoint({
  element: document.getElementById('startLeft'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#magnify').css('opacity',1);
  }
});
var magnifyWaypoint = new Waypoint({
  element: document.getElementById('magnify'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#leftP1').css('opacity',1);
  }
});
var leftP1Waypoint = new Waypoint({
  element: document.getElementById('leftP1'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#globe').css('opacity',1);
  }
});
var globeWaypoint = new Waypoint({
  element: document.getElementById('globe'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#leftP2').css('opacity',1);
  }
});
var leftP2Waypoint = new Waypoint({
  element: document.getElementById('leftP2'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#arrow').css('opacity',1);
  }
});
var arrowWaypoint = new Waypoint({
  element: document.getElementById('arrow'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#leftP3').css('opacity',1);
  }
});
var leftP3Waypoint = new Waypoint({
  element: document.getElementById('leftP3'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#leftH1').css('opacity',1);
  }
});
var leftH1Waypoint = new Waypoint({
  element: document.getElementById('leftH1'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#leftP4').css('opacity',1);
  }
});
var leftP4Waypoint = new Waypoint({
  element: document.getElementById('leftP4'),
  handler: function() {
    $('.left aside').css('opacity',0);
    $('#leftH2').css('opacity',1);
  }
});

// Right Side Waypoints
var startWaypointRight = new Waypoint({
  element: document.getElementById('startRight'),
  handler: function() {
    $('.right aside').css('opacity',0);
    $('#rightP1').css('opacity',1);
  }
});
var rightP1Waypoint = new Waypoint({
  element: document.getElementById('rightP1'),
  handler: function() {
    $('.right aside').css('opacity',0);
    $('#rightP2').css('opacity',1);
  }
});
var rightP2Waypoint = new Waypoint({
  element: document.getElementById('rightP2'),
  handler: function() {
    $('.right aside').css('opacity',0);
    $('#rightH1').css('opacity',1);
  }
});
var rightH1Waypoint = new Waypoint({
  element: document.getElementById('rightH1'),
  handler: function() {
    $('.right aside').css('opacity',0);
    $('#rightP3').css('opacity',1);
  }
});
var rightP3Waypoint = new Waypoint({
  element: document.getElementById('rightP3'),
  handler: function() {
    $('.right aside').css('opacity',0);
    $('#rightP4').css('opacity',1);
  }
});
var rightP4Waypoint = new Waypoint({
  element: document.getElementById('rightP4'),
  handler: function() {
    $('.right aside').css('opacity',0);
    $('#computer').css('opacity',1);
  }
});
var computer = new Waypoint({
  element: document.getElementById('computer'),
  handler: function() {
    $('.right aside').css('opacity',0);
    $('#rightP5').css('opacity',1);
  }
});
