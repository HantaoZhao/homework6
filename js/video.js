var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	// document.getElementById("myVideo").innerHTML="<h1>????</h1>";
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume * 100 +"%";
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate*=0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate*=1.25;
  	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	let vid = document.getElementById("myVideo");
	vid.currentTime = vid.currentTime<vid.duration-60 ? vid.currentTime+60 : 0;

	console.log("Current location is "+ vid.currentTime);
} 

function mute() { 
  	if (video.muted){
  		console.log("Changing to Unmuted");
  		document.getElementById('mute').innerHTML="Mute";
  	}
  	else{
      	console.log("Changing to Muted");
      	document.getElementById('mute').innerHTML="Unmute";
  	}

  	video.muted^=1;	
}

function changeVolume() {
	let volume = document.querySelector("#volumeSlider").value;
	video.volume = (volume*0.01)

	console.log("Volume is "+video.volume);


	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 +"%";
}
       

function gray() { 
	var vid_color=document.getElementById("myVideo");
	if (vid_color.classList.length==0){
		vid_color.classList.toggle("grayscale")
	}

	console.log("In grayscale")
}

function color() {
	var vid_color=document.getElementById("myVideo");
	if (vid_color.classList.length==1){
		vid_color.classList.toggle("grayscale")
	}

	console.log("In color") 
}
