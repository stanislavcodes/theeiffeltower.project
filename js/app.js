function smoothScroll(target,duration) {
	var target = document.getElementById(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;
	
	function animation(currentTime) {
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
		
	function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
	}
		
	requestAnimationFrame(animation);
}

var moreButton = document.getElementById('more-button');
var more = document.getElementById('more');
var homeButton = document.getElementById('home-button');
var home = document.getElementById('home');
	
moreButton.addEventListener('click', function(){
	smoothScroll('more', 1000);
});
homeButton.addEventListener('click', function(){
	smoothScroll('home', 1500);
});

//smoothScroll(".section2", 1000);