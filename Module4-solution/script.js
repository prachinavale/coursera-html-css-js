var names = ["Yaakov","John","jen","Jason","Paul","Frank","Larry","Paula","Laura","jim"];

for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0);
	if (firstLetter === "J" || firstLetter === "j") {
		byeGreeter.speak(names[i]);
	} 
	else {
		helloGreeter.speak(names[i]);
	}
}