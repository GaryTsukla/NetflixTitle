let checkTitle = function() {
	let h2=document.querySelector('h2');
	if(!h2){return;}
	console.log(h2);
	if(h2.id=='pc-title'){
		let r=window.localStorage.getItem('show-title');
		document.title=r;
		console.log('retrieved title: '+r);
		return;
	}
	let t=h2.innerText.slice(0,100);
	document.title = t;
	window.localStorage.setItem('show-title',t);
	console.log('stored title: '+t);
}
setTimeout(checkTitle,5000);