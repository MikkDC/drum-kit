// assign each sound to a key
// kick, snare, openhihat, hihat, ride, tink, tom, boom, clap

// creating the variables for button clicks
const button = document.querySelector("button");

const kickBtn = document.getElementById("kickBtn");
const snareBtn = document.getElementById("snareBtn");
const ohatBtn = document.getElementById("ohatBtn");
const hihatBtn = document.getElementById("hihatBtn");
const rideBtn = document.getElementById("rideBtn");
const tinkBtn = document.getElementById("tinkBtn");
const tomBtn = document.getElementById("tomBtn");
const boomBtn = document.getElementById("boomBtn");
const clapBtn = document.getElementById("clapBtn");

// creating the variables for the sounds to play
const kickSound = document.getElementById("kickSound");
const snareSound = document.getElementById("snareSound");
const ohatSound = document.getElementById("ohatSound");
const hihatSound = document.getElementById("hihatSound");
const rideSound = document.getElementById("rideSound");
const tinkSound = document.getElementById("tinkSound");
const tomSound = document.getElementById("tomSound");
const boomSound = document.getElementById("boomSound");
const clapSound = document.getElementById("clapSound");


document.addEventListener("keydown", (evt) => {
	if (evt.key == "v") {
		kickSound.src = "wavs/kick.wav";
		kickBtn.style.borderRadius="14px";
	}
	else if (evt.key == "g") {
		snareSound.src = "wavs/snare.wav"
		snareBtn.style.borderRadius="14px";
	}
	else if (evt.key == "h") {
		ohatSound.src = "wavs/openhat.wav"
		ohatBtn.style.borderRadius="14px";
	}
	else if (evt.key == "j") {
		hihatSound.src = "wavs/hihat.wav"
		hihatBtn.style.borderRadius="14px";
	}
	else if (evt.key == "k") {
		rideSound.src = "wavs/ride.wav"
		rideBtn.style.borderRadius="14px";
	}
	else if (evt.key == "f") {
		tinkSound.src = "wavs/tink.wav"
		tinkBtn.style.borderRadius="14px";
	}
	else if (evt.key == "d") {
		tomSound.src = "wavs/tom.wav"
		tomBtn.style.borderRadius="14px";
	}
	else if (evt.key == "b") {
		boomSound.src = "wavs/boom.wav"
		boomBtn.style.borderRadius="14px";
	}
	else if (evt.key == "s") {
		clapSound.src = "wavs/clap.wav"
		clapBtn.style.borderRadius="14px";
	}
});

// kick, snare, openhihat, hihat, ride, tink, tom, boom, clap
kickBtn.addEventListener("click", () => {
	kickSound.src = "wavs/kick.wav";
});

snareBtn.addEventListener("click", () => {
	snareSound.src = "wavs/snare.wav";
});

ohatBtn.addEventListener("click", () => {
	ohatSound.src = "wavs/openhat.wav";
});

hihatBtn.addEventListener("click", () => {
	hihatSound.src = "wavs/hihat.wav";
});

rideBtn.addEventListener("click", () => {
	rideSound.src = "wavs/ride.wav";
});

tinkBtn.addEventListener("click", () => {
	tinkSound.src = "wavs/tink.wav";
});

tomBtn.addEventListener("click", () => {
	tomSound.src = "wavs/tom.wav";
});

boomBtn.addEventListener("click", () => {
	boomSound.src = "wavs/boom.wav";
});

clapBtn.addEventListener("click", () => {
	clapSound.src = "wavs/clap.wav";
});

// resets animation of buttons borders
document.addEventListener("keyup", () => {
	
	kickBtn.style.borderRadius="35px";
	snareBtn.style.borderRadius="35px";
	ohatBtn.style.borderRadius="35px";
	hihatBtn.style.borderRadius="35px";
	rideBtn.style.borderRadius="35px";
	tinkBtn.style.borderRadius="35px";
	tomBtn.style.borderRadius="35px";
	boomBtn.style.borderRadius="35px";	
	clapBtn.style.borderRadius ="35px";
});
