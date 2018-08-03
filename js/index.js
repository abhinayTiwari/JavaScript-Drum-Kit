	window.addEventListener('keydown', function(e){
		//console.log(e.keyCode);
		const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
		const key  =  document.querySelector(`.key[data-key='${e.keyCode}']`);
		if(!audio) return; // base case
		key.classList.add('playing');
		audio.currentTime = 0;
		audio.play();

	});
	

	const keys = document.querySelectorAll(".key");
	keys.forEach(key=> key.addEventListener('transitionend', function(e){
		if(e.propertyName !== "transform") return;

		this.classList.remove('playing');
	}))
