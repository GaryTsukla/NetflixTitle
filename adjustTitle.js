let checkTitle = function() {
	let h2=document.querySelector('h2');
	document.title = h2.innerText.slice(0,100);
}
setTimeout(checkTitle,5000);