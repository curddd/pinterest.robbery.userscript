
/*
<img alt="Dies enthält ein Bild von: " class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src="https://i.pinimg.com/236x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg" srcset="https://i.pinimg.com/236x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 1x, https://i.pinimg.com/474x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 2x, https://i.pinimg.com/736x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 3x, https://i.pinimg.com/originals/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 4x">

*/


"use strict"
var known_srcs = [];
var zoom_level = "2x";
var my_target_url = "https://schizo.life/hot_links"


setInterval(function(){

	let imgs = document.getElementsByTagName("img")
	for(let i=0; i<imgs.length; i++){
		let img = imgs[i];
		if(!img.srcset){
			return;
		}

		img = img.srcset.split(` `+zoom_level)[0];
		img = img.split(` 1x, `)[1];

		if(known_srcs.indexOf(img)==-1){
			known_srcs.push(img);
			console.log(img);
			sendToDest(img);
		}

	}
	window.scrollTo(0, document.body.scrollHeight);
},1000)


function sendToDest(url){
	let xhr = new XMLHttpRequest("");
	xhr.open("POST", my_target_url);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(`link=${url}`);
}