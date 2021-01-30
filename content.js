var alarmsound =  document.querySelector("#myAudio");
function display_h1 (results){
	var alarmsound =  document.querySelector("#myAudio");
  		counter = results;
  		if(counter > 0){
  			 alarmsound.play(); 
  		}
  document.querySelector("#id1").innerHTML = "<p>dom h1: " + counter + "</p>";
}


chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  ///tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.querySelector(".unread-count").innerHTML'
  }, display_h1);
});

