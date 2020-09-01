(function (window) {
	var byeGreeter = {};
	var say = "Good bye ";
	byeGreeter.speak = function (name) {
		console.log(say + name + " !!")
	}

	window.byeGreeter = byeGreeter;

})(window);