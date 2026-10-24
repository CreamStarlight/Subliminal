var sb_width="250px";

//---//---//---//---//

function __introduction__(){
	return;
}

//---//---//---//---//

function widthCompat(){
	if (window.innerWidth <= 768) {
		return "100%";
	} else{
		return sb_width;
	}
}

function sbShow() {
    document.getElementById("sidebar").style.width = widthCompat();
    document.getElementById("sidebar").style.borderRight = "2px solid white";
}

function sbHide() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.borderRight = "none";
}

//This function might not have many uses as of now.
function startTime(){

	const tmr=document.getElementById("time");
	if(!tmr){
		console.log("Time module not found...");
		return 1;
	}

	var today=new Date();

    var yr=today.getFullYear();
    var mo=today.getMonth()+1;
    var da=today.getDate();

	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();

    h=checkTime(h);
	m=checkTime(m);
	s=checkTime(s);

	tmr.textContent=yr+"/"+mo+"/"+da+" "+h+":"+m+":"+s;
	return 0;
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

function secretpage_darkmode(){
	var bg = document.body;
	var cont = document.getElementsByClassName("content")[0];
	if (document.getElementById('l/d').innerHTML=="☀️"){
		bg.style.backgroundColor = "#211b3e";
		cont.style.color="#ffffff";
		document.getElementById('l/d').innerHTML="🌙";
	}else{
		bg.style.backgroundColor = "#ecd8c3";
		cont.style.color="#000000";
		document.getElementById('l/d').innerHTML="☀️";
	}
	return;
}

//---//---//---//---//

if(startTime()==0){
	setInterval(startTime, 500);
}

__introduction__();

