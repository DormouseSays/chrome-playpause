console.log('playpause.js injected');

//FYI, you can use *://*/* instead of http://*/* and https://*/* to set permissions for all urls

var elems = document.getElementsByTagName('video'), i;
for (i in elems) {
	if( elems[i].className && elems[i].className.indexOf('html5-main-video') > -1) {
		console.log('found element ' + elems[i]);
		if(elems[i].paused) {
			elems[i].play();
		} else {
			elems[i].pause();
		}
	}
}