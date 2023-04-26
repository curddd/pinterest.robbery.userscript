
/*
<img class="RoN4R tPU70 xhGbM" srcset="https://64.media.tumblr.com/b076708e968f632ff61d43afc388d047/796400d2ce4fe765-21/s100x200/a0415e85defedb87eeb46db2a37f2b3e23d937a5.jpg 100w, https://64.media.tumblr.com/b076708e968f632ff61d43afc388d047/796400d2ce4fe765-21/s250x400/70a609e6c1c8e47a8149eed8bd7eb325b540a8a3.jpg 225w, https://64.media.tumblr.com/b076708e968f632ff61d43afc388d047/796400d2ce4fe765-21/s400x600/28036db5d1614a686ab1bf3c58da7f5469fe5feb.jpg 338w, https://64.media.tumblr.com/b076708e968f632ff61d43afc388d047/796400d2ce4fe765-21/s500x750/89aa5efc1156ff4b4097b86a22278e2eeeb646e4.jpg 422w, https://64.media.tumblr.com/b076708e968f632ff61d43afc388d047/796400d2ce4fe765-21/s540x810/44096c12a74869fe72ad34533c21ef85aa8f7d80.jpg 456w, https://64.media.tumblr.com/b076708e968f632ff61d43afc388d047/796400d2ce4fe765-21/s640x960/6f36c5cc3d6ff4eebaa6c58888718a29ffbd2d15.jpg 540w, https://64.media.tumblr.com/b076708e968f632ff61d43afc388d047/796400d2ce4fe765-21/s1280x1920/fa5c042527decbf97fd2ecdc28df861fd2209f6d.jpg 1080w" sizes="150px" alt="Image" loading="lazy">
*/


"use strict"
var known_srcs = [];
var zoom_level = 3;
var my_target_url = "https://schizo.life/hot_schlinks"


setInterval(()=>{

	let imgs = document.getElementsByTagName("img");
	//console.log(imgs);
	for(let i=0; i<imgs.length; i++){
		let img = imgs[i];
		if(!img.srcset){
			continue;
		}

		img = img.srcset.split(`,`);
		if(img.length<zoom_level){
			continue;
		}
		img = img[zoom_level-1];
		img = img.split(" ");
		if(img.length==3){
			img = img[1];
		}
		else{
			img = img[0]
		}


		if(known_srcs.indexOf(img)==-1){
			known_srcs.push(img);
			console.log(img);
			sendToDest(img);
		}

	}
	
	window.scrollTo(0, 0);
	window.scrollTo(0, document.body.scrollHeight);
},5000)


function sendToDest(url){
	let xhr = new XMLHttpRequest("");
	xhr.open("POST", my_target_url);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(`link=${url}`);
}