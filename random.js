
function o(){
	const e=document.getElementById("DESULTORYSIGNALS");
	if(!e){return 1;}
	const p=Math.floor(Math.random()*10+15);
	var s="";
	for(var i=1;i<=p;i++){
		s=s+String.fromCharCode(Math.floor(Math.random()*93.999)+33);
	}
	e.textContent=s;
    return 0;
}

function f(){
	const e=document.getElementById("DESULTORYTIMER");
	console.log("Huh")
	if(!e){
		console.log("function failed to find element");
		return 1;
	}
	var s="";
	for(var i=1;i<=17;i++){
		if(i%5==4){
			s=s+":";
		}else if(i%5==3 || i%5==0){
			s=s+" "
		}else{
			s=s+Math.floor(Math.random()*9.99999).toString();
		}
	}
	e.textContent=s;
    return 0;
}
setInterval(f,200);