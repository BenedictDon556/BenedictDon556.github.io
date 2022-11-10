var main = function() {
  var volume;
  //The PLAY button
$('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
});
  //The PAUSE button
$('#pause').click(function(){
    $('#message').text("Track paused");
    $('#player').trigger("pause");
});
  //The MUTE button
$('#mute').click(function(){
    $('#message').text("Muted");
   // $('#player').trigger("mute");
     muted = $("#player").prop('muted');
     $("#player").prop('muted', true);
});
  //The UNMUTE button
$('#unmute').click(function(){
    $('#message').text("Unmuted");
   // $('#player').trigger("unmute");
     //unmuted = $("#player").prop('muted');
     //unmuted = false;
     $("#player").prop('muted', false);
});
  //The STOP button
$('#stop').click(function(){
    $('#message').text("Track Stopped");
    $('#player').trigger("stop");
     $("#player").prop('currentTime', 0);
});
  //The VolumeUp button
$('#volUp').click(function(){
  debugger
    $('#player').trigger("volUp");
    
     VolumeUp = $("#player").prop('volume');
     $("#player").prop('volume',VolumeUp+0.1);
});
  //The VolumeDown button
$('#volDown').click(function(){
    $('#player').trigger("volDown");
    
     VolumeDown = $("#player").prop('volume',0.1);
     $("#player").prop('volume',VolumeDown-0.1);
});
}
$(document).ready(main);
