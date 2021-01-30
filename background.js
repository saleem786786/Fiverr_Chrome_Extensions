
setInterval(function(){ 
     var audio = new Audio();
        audio.src = "alarm.mp3";
        var isPlaying = false;


function display_h2 (results){

      counter = results;

      if(counter > 0){
        // check audio play or not
        return audio.paused ? audio.play() : audio.pause();
      
      } else {
          audio.paused;
      }
 ////// document.querySelector("#id1").innerHTML = "<p>dom h1: " + counter + "</p>";
}

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  ///tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.querySelector(".unread-count").innerHTML'
  }, display_h2);
});


}, 3000);