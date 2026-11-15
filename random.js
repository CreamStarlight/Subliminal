


function f(){
	const e=document.getElementById("DESULTORYTIMER");
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
			if(i==1){
				s=s+Math.floor(Math.random()*2).toString();
			}else if(i%5==1){
				s=s+Math.floor(Math.random()*6).toString();
			}else{
				s=s+Math.floor(Math.random()*10).toString();
			}
		}
	}
	e.textContent=s;
    return 0;
}

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

if(f()==0){
	setInterval(f,200);
}
if(o()==0){
	setInterval(o,200);
}