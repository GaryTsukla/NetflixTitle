try{
	let checkTitle = function(c=0) {
		let h2=document.querySelector('h2');
		console.log(h2);
		if(!h2 || h2.id=='pc-title'){
			if(c<20){
				c++;
				setTimeout(()=>{checkTitle(c);}, 400);
				return;
			}
			if(h2.id=='pc-title'){
				let r=window.localStorage.getItem('show-title');
				document.title=r;
				console.log('retrieved title: '+r);
			}
			return;
		}
		let t=h2.innerText.slice(0,100);
		let cl=h2.className+' '+t;
		setTimeout(()=>{
			if(h2 && h2.innerText){
				t=h2.innerText.slice(0,100);
				c=h2.className+' '+t;
			}
			document.title = t;
			window.localStorage.setItem('show-title',t);
			console.log('stored title: '+t);
			
			{// Keep a log of all the classnames we see, just curious if there is a pattern
				let r=window.localStorage.getItem('classes-of-title');
				if(!r){
					r=[];
				}else{
					r=r.split('\n');
				}
				r.push(cl);
				console.log('Classes stored: '+r.length);
				while(r.length>100){
					r.shift();// Don't want to store too much
				}
				
				// remove duplicates
				r=[...new Set(r)];
				
				r=r.join('\n');
				window.localStorage.setItem('classes-of-title',r);
				console.log(r);
			}
		},400);
	}
	setTimeout(checkTitle,400);
}catch(e){
	console.log(e);
}