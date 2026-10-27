var sb_width="250px";

//---//---//---//---//

let sidebarTable=[
	{
		type: "p",
		prop:'title="...Go to CreamStarlight/Subliminal for that."',
		content: "LOCAL FILES"
	},
	{
		type: "a",
		url: "index.html",
		content: "INDEX"
	},
	{
		type: "a",
		url: "overview.html",
		content: "PROJECT OVERVIEW"
	},
	{
		type:"a",
		url:"worlds.html",
		content: "WORLD OVERVIEW"
	},
	{
		type:"a",
		url:"places.html",
		content:"IMPORTANT PLACES"
	},
	{
		type:"p",
		content:"EXTERNAL LANDINGS"
	},
	{
		type:"a",
		url:"https://creamstarlight.github.io/",
		content:"THE STARRY STOP"
	},
	{
		type:"a",
		url:"https://github.com/CreamStarlight",
		content: "GITHUB"
	},
	{
		type:"a",
		url:"https://forums.terraria.org/index.php?members/268730/",
		content: "TERRARIA FORUMS"
	},
	{
		type:"a",
		url:"https://xkcd.com",
		content:"XKCD"
	}
]

/*

    <div id="sidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="sbHide()">&lt;&lt; ◇☰</a>
        <p>LOCAL FILES</p>
        <a href="#"><strong>INDEX</strong></a>
        <a href="overview.html">PROJECT OVERVIEW</a>
        <a href="places.html">IMPORTANT PLACES</a>
        <p>EXTERNAL LANDINGS</p>
        <a href="https://creamstarlight.github.io/">THE STARRY STOP</a>
        <a href="https://github.com/CreamStarlight">GITHUB</a>
        <a href="https://forums.terraria.org/index.php?members/268730/">TERRARIA FORUMS</a>
        <a href="https://xkcd.com">XKCD</a>
    </div>

*/

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

function sidebarMaker(){
	var insertion="";
	sidebarTable.forEach(tab => {
		var typ=tab.type;
		switch(typ){
			case "p":
				insertion=insertion+"<p";
				if(tab.prop){
					insertion=insertion+" "+tab.prop;
				}
				if(tab.alt){
					insertion=insertion+" title='"+tab.alt+"'"
				}
				insertion=insertion+">"+tab.content+"</p>";
				break;
			case "a":
				if(window.location.href.includes(tab.url)){
					insertion=insertion+"<a href='#'><strong>"+tab.content+"</strong></a>";
				}else{
					insertion=insertion+"<a href='"+tab.url+"'>"+tab.content+"</a>";
				}
				
				break;
		}
	});
	document.getElementById('sidebar').innerHTML=document.getElementById('sidebar').innerHTML+insertion;
}

//---//---//---//---//

if(startTime()==0){
	setInterval(startTime, 500);
}

__introduction__();

sidebarMaker();