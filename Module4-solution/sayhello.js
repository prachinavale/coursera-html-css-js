(function (window) {
	var helloGreeter = {};
	var say = "Hello ";
	helloGreeter.speak = function (name) {
		console.log(say + name + " !!")
	}

	window.helloGreeter = helloGreeter;

})(window);

