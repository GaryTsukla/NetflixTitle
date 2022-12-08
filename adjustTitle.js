try{
	console.log('checking title now');
	let checkTitle=function(c=0){
		let div=document.body.firstChild;
		let h2=div.querySelector('h2');
		console.log(h2);
		let text='';
		if(h2){
			text=h2.innerText.slice(0,100);
		}else{
			failedTitle(c);
			return;
		}
		if(text=='Privacy Preference Center' || text=='' || text.slice(0,5)=='https'){
			failedTitle(c);
			return;
		}
		document.title = text;
		window.localStorage.setItem('show-title',text);
		console.log('stored title: '+text);
	};
	let failedTitle=function(c){
		if(c<80){
			c++;
			setTimeout(()=>{checkTitle(c);}, 400);
			return;
		}
		let r=window.localStorage.getItem('show-title');
		document.title=r;
		console.log('retrieved title: '+r);
		return;
	};
	setTimeout(checkTitle,400);
}catch(e){
	console.log(e);
}