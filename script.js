var sb_width="250px";

var lang='en';

function setData(name,value){
	localStorage.setItem(name, value);		
}
function getData(name){
	return localStorage.getItem(name);
}
function eraseData(name){
	localStorage.removeItem(name);
}
function resetData(){
	localStorage.clear();
}

function dataChecker(){
	var l=getData("language");
	if(l==null || l==""){
		console.log("Language data not found; creating data.");
		lang='en';
		setData('language','en');
	}else{
		console.log("Language data fetched: "+l);
		lang=l;
	}
}

//---//---//---//---//

let localization={
	elements:[
		{
			en: "content",
			zhHans: "contentCN",
			default: "content"
		},
		{
			en: "menu",
			zhHans: "menuCN",
			default: "menu"
		}
	]
}

let defaultStyle={
	content: "block",
	menu: "flex"
}

let sidebarTable=[
	{
		type: "a",
		url: "settings.html",
		content: "CONFIGURATION",
		contentCN: "设置"
	},
	{
		type: "p",
		content: "LOCAL FILES",
		contentCN: "本地文件"
	},
	{
		type: "a",
		url: "index.html",
		content: "INDEX",
		contentCN: "目录"
	},
	{
		type: "a",
		url: "overview.html",
		content: "PROJECT OVERVIEW",
		contentCN: "项目总览"
	},
	{
		type:"a",
		url:"worlds.html",
		content: "WORLD OVERVIEW",
		contentCN: "世界总览"
	},
	{
		type:"a",
		url:"places.html",
		content:"IMPORTANT PLACES",
		contentCN: "重要地点"
	},
	{
		type:"p",
		content:"EXTERNAL LANDINGS",
		contentCN: "外部网站"
	},
	{
		type:"a",
		url:"https://creamstarlight.github.io/",
		content:"THE STARRY STOP",
		contentCN: "星河小站"
	},
	{
		type:"a",
		url:"https://github.com/CreamStarlight/",
		content: "GITHUB",
		contentCN: "GitHub"
	},
	{
		type:"a",
		url:"https://forums.terraria.org/index.php?members/268730/",
		content: "TERRARIA FORUMS",
		contentCN: "泰拉瑞亚社区论坛"
	},
	{
		type:"a",
		url:"https://xkcd.com",
		content:"XKCD",
		contentCN: "xkcd"
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
		var ins;
		if(lang=='zhHans'){
			ins=tab.contentCN;
		}else{
			ins=tab.content;
		}
		switch(typ){
			case "p":
				insertion=insertion+"<p";
				if(tab.prop){
					insertion=insertion+" "+tab.prop;
				}
				if(tab.alt){
					insertion=insertion+" title='"+tab.alt+"'"
				}
				insertion=insertion+">"+ins+"</p>";
				break;
			case "a":
				if(window.location.href.includes(tab.url)){
					insertion=insertion+"<a href='#'><strong>"+ins+"</strong></a>";
				}else{
					insertion=insertion+"<a href='"+tab.url+"'>"+ins+"</a>";
				}
				
				break;
		}
	});
	document.getElementById('sidebar').innerHTML=document.getElementById('sidebar').innerHTML+insertion;
}

function localize(){
	localization.elements.forEach(elem=>{
		var sanity=document.getElementById(elem.default);
		if(!sanity){
			console.log(elem.default+' localization: check unsuccessful; ignored');
			return;
		}

		var match="";
		for(let la in elem){
			if(la===lang){
				match=elem[la];
			}else{
				if(la==='default'){
					//does nothing
				}else{
					var i=document.getElementById(elem[la]);
					if(i){
						i.style.display='none';
					}
				}
			}
		}
		var styled=defaultStyle[elem.default];
		if(match==""){
			console.log(elem.default+' localization: no target language found; resorting to default');
			document.getElementById(elem.default).style.display=styled;
		}else{
			var i=document.getElementById(match);
			if(i){
				console.log(elem.default+' localization: localized');
				i.style.display=styled;
			}else{
				console.log(elem.default+' localization: unable to reach target language; resorting to default');
				document.getElementById(elem.default).style.display=styled;
			}
		}
	});

}

//---//---//---//---//

if(startTime()==0){
	setInterval(startTime, 500);
}

__introduction__();

dataChecker();
sidebarMaker();
localize();