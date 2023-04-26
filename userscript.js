
/*
<img alt="Dies enthält ein Bild von: " class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src="https://i.pinimg.com/236x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg" srcset="https://i.pinimg.com/236x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 1x, https://i.pinimg.com/474x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 2x, https://i.pinimg.com/736x/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 3x, https://i.pinimg.com/originals/bc/31/02/bc31028b9b77471638baf3e0bce8f3a5.jpg 4x">

*/


/*
<img alt="Kate Moss moment" class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src="https://i.pinimg.com/236x/48/09/6a/48096a503ec12ef699601a0ae27d1749.jpg" srcset="https://i.pinimg.com/236x/48/09/6a/48096a503ec12ef699601a0ae27d1749.jpg 1x, https://i.pinimg.com/474x/48/09/6a/48096a503ec12ef699601a0ae27d1749.jpg 2x, https://i.pinimg.com/736x/48/09/6a/48096a503ec12ef699601a0ae27d1749.jpg 3x, https://i.pinimg.com/originals/48/09/6a/48096a503ec12ef699601a0ae27d1749.jpg 4x">

"<img alt=\"Dies enthält ein Bild von: \" class=\"hCL kVc L4E MIw\" fetchpriority=\"auto\" loading=\"auto\" src=\"https://i.pinimg.com/236x/a5/5a/ee/a55aee676718053e6548c245f20df18e.jpg\" srcset=\"https://i.pinimg.com/236x/a5/5a/ee/a55aee676718053e6548c245f20df18e.jpg 1x, https://i.pinimg.com/474x/a5/5a/ee/a55aee676718053e6548c245f20df18e.jpg 2x, https://i.pinimg.com/736x/a5/5a/ee/a55aee676718053e6548c245f20df18e.jpg 3x, https://i.pinimg.com/originals/a5/5a/ee/a55aee676718053e6548c245f20df18e.jpg 4x\">"

*/


"use strict"
var known_srcs = [];
var zoom_level = "2x";
var my_target_url = "https://schizo.life/hot_schlinks"


setInterval(()=>{

	let imgs = document.getElementsByTagName("img");
	console.log(imgs);
	for(let i=0; i<imgs.length; i++){
		let img = imgs[i];
		if(!img.srcset){
			continue;
		}

		img = img.srcset.split(` `+zoom_level)[0];
		img = img.split(` 1x, `)[1];

		if(known_srcs.indexOf(img)==-1){
			known_srcs.push(img);
			console.log(img);
			//sendToDest(img);
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