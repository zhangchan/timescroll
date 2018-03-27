function TimeScroll (data) {
	this.init(data);
}

TimeScroll.prototype = {
	"init" : function(data){
		var me = this;
		this.createHtml(data.data,data.clickEvt);
		this.resetWidth(data.data);
		window.onresize = function () {
			me.resetWidth(data.data);
		}
	},
	"createEle" : function(msg,pos,clickEvt){
		var html = '';
		var ele = document.createElement("div");
		ele.className = !pos ? "ele" : "ele bot";
		var eletxt = document.createElement("div");
		var time = document.createElement("div");
		var title = document.createElement("div");
		var circle = document.createElement("div");
		var img = document.createElement("img");
		var triangle = document.createElement("div");
		var line = document.createElement("div");
		var titletxt = document.createElement("p");
		this.setClass([eletxt,time,titletxt,title,triangle,line,circle],["eletxt","time","titletxt","title","triangle","line","circle"]);
		time.innerHTML = "<span>"+this.formatTime(msg.time);
		time.setAttribute("shover",'<span>'+msg.time.replace(/\-/,"年").replace(/\-/,"月").replace(/\ /,"日</span>"));
		time.setAttribute("scg",'<span>'+this.formatTime(msg.time));

		titletxt.style.lineHeight = /\n/.test(msg.title) ? "20px" : "40px";
		titletxt.innerText = msg.title;
		title.title = msg.title;
		if(msg.SFJDDG||msg.SFJDDG=='true'){
			img.src="static/SJZ/img/select/"+ msg.type + ".png";
		}else{
			img.src="static/SJZ/img/unselect/"+ msg.type + ".png";
		}
		var scolor = this.getColor(msg.type);
		time.style.backgroundColor = line.style.backgroundColor = eletxt.style.borderColor = circle.style.borderColor = triangle.style.borderRightColor = scolor;
		circle.appendChild(img);
		title.appendChild(titletxt);
		this.appendAll(eletxt,[triangle,line]);
		if(!pos){
			this.appendAll(eletxt,[time,title]);
			this.appendAll(ele,[eletxt,circle]);
		}else{
			this.appendAll(eletxt,[title,time]);
			this.appendAll(ele,[circle,eletxt]);
		}
		if (msg.icon) {
			var icon = document.createElement("img");
	        titletxt.className +=" p";                    
	        icon.className = "img";
	        icon.src=msg.icon;
			ele.appendChild(icon);
	    }
		eletxt.onmouseover = function(){
			time.innerHTML = time.getAttribute("shover");
			eletxt.style.width = "180px";
			eletxt.style.left = "-128px";
		};
		eletxt.onmouseout = function(){
			time.innerHTML = time.getAttribute("scg");
			eletxt.style.width = "120px";
			eletxt.style.left = "-68px";
		};
		ele.onclick = function(){
			var eles = document.querySelector(".srollContent").querySelectorAll(".ele");
			for (var i = 0; i < eles.length; i++) {
				eles[i].querySelector(".circle").style.border = "#fff";
				//eles[i].querySelector(".circle").style.backgroundColor = "#fff";
				//eles[i].querySelector("img").src= eles[i].querySelector("img").src.replace(/\/select/,"/unselect");
			};
			circle.style.border ="2px solid" + (scolor ? scolor : "#ffcc00");
			circle.style.backgroundColor = scolor ? scolor : "#ffcc00";
			// if(msg.SFJDDG||msg.SFJDDG=='true'){
			// 	img.src="../img/select/"+ msg.type + ".png";
			// }else{
			// 	img.src="/img/select/"+ msg.type + ".png";
			// }
			clickEvt(msg)
		};
		return ele;
	},
	"createCol" : function(data,year,clickEvt){
		if(this.isEmptyObject(data)){
			return false;
		}
		var cola = document.createElement("div");
		var yearDiv = document.createElement("div");
		this.setClass([cola,yearDiv],["cola","colYear"]);
		yearDiv.innerText = year.replace(/年/,"");
		cola.appendChild(yearDiv);
		for (var i = 0; i < data.length; i++) {
			cola.appendChild(this.createEle(data[i],i%2,clickEvt));
		}
		return cola;
	},
	"createHtml" : function(data,clickEvt){
		var me = this;
		var scene = document.getElementById("timeScroll");
		scene.innerHTML="";
		var srollLeft = document.createElement("div");
		var srollMain = document.createElement("div");
		var srollContent = document.createElement("div");
		var srollright = document.createElement("div");
        var d = document.createElement("div"); 
        scene.appendChild(d);  
		this.setClass([srollLeft,srollMain,srollContent,srollright,d],["srollLeft","srollMain","srollContent","srollright","d"]);
		var nn = 0;
		for(var year in data){
			srollContent.appendChild(this.createCol(data[year],year,clickEvt));
			nn+=data[year].length;               
		}
        var arrs = [],i=0;
        var timeScroll = document.querySelector("#timeScroll");
        var smW = timeScroll.offsetWidth - 101;
        var scroomain = smW;   
        for(var key in data){
        	arrs[i]=document.createElement("h6");
        	arrs[i].innerHTML=key.substr(0,4);
        	arrs[i].className = 'h60'+(i+1);
        	arrs[i].id = 'h60'+(i+1);
        	arrs[i].style.width = scroomain * data[key].length/nn+"px"; 	
        	i++;    
        }
		srollMain.appendChild(srollContent);
		this.appendAll(d,arrs);
		this.appendAll(scene,[srollLeft,srollMain,srollright]);
	},
	"formatTime" : function(time){
		return time.slice(5).replace(/\-/,"月").replace(/\ /,"日</span>");
	},
	"resetWidth" : function(data){
		var width=0,lastCol;
		var timeScroll = document.querySelector("#timeScroll");
		var eles = timeScroll.querySelectorAll(".ele");
		var cols = timeScroll.querySelectorAll(".cola");
		var years = timeScroll.querySelectorAll(".colYear");
		var srollMain = timeScroll.querySelector(".srollMain");
		var srollContent = timeScroll.querySelector(".srollContent");
		var smW = timeScroll.offsetWidth - 101;
		 if(timeScroll.offsetWidth ==0&&document.getElementById("anniu_id")){
		 	 smW = document.getElementById("anniu_id").offsetWidth-101-160;
		 	if(smW<900){ smW = 799; }
		 }
		if(this.isEmptyObject(data)){
			width = 0;
		}else{
			width = eles.length*eles[0].offsetWidth + years.length*(years[0].offsetWidth+20)+90;
		}
		console.info("smW:"+smW);
		console.info("width:"+width);

		srollMain.style.width = smW +"px";
		srollContent.style.width = (smW > width ? smW : width) +"px";
		//对时间轴上的年进行动态的改变值
		var nn = 0,i =1 ;
		for(var year in data){ nn+=data[year].length;  }
	    for(var key in data){
		 var tempD =  document.getElementById("h60"+i);
		 if(tempD){
			 tempD.style.width = smW * data[key].length/nn+"px"; 
			 i++; 
		   }
        }
	},
	"isEmptyObject" : function(e){
	    for (var k in e){
	    	return false; 
	    }    
	    return true;
	},
	"getColor" : function(type){
		var color = {
				"51CH":"#ffc100",
				"Account":"#4590f4",
				"airplane":"#0094ff",
				"ALWW":"#47adfb",
				"ATM-256":"#353e9e",
				"Bodyguard":"#0ca305",
				"cabinet":"#ec0000",
				"car":"#ffb400",
				"Case":"#f02b14",
				"cellfone":"#4376f8",
				"CFT":"#089dea",
				"Checkpoint":"#ee3939",
				"Criminal Organization":"#488cfd",
				"Data Package":"#1e9acc",
				"DD":"#3d79f5",
				"dna":"#56ce02",
				"DXS":"#517dfa",
				"email":"#269ae7",
				"FACEBOOK":"#3b5b98",
				"FEIXIN":"#e553a2",
				"FJ":"#00bff6",
				"Flat":"#00cd4e",
				"fngrprnt":"#ff1f1f",
				"FQ":"#fab246",
				"fugitive":"#f91d27",
				"FW":"#0f92d6",
				"FWH":"#b15be8",
				"general":"#6086dc",
				"general":"#6086dc",
				"GXT":"#5fdd03",
				"HC":"#ed3838",
				"Hotel":"#1274dd",
				"house":"#1c9bc7",
				"Id":"#4c77e4",
				"IMEI":"#f23939",
				"Insurgent":"#008d16",
				"ITAPQQZP":"#fca907",
				"ITAP_GTLJ":"#488cfd",
				"ITAP_GXQ":"#19c508",
				"ITAP_HD":"#05de00",
				"ITAP_LSTX":"#2ce742",
				"ITAP_QBBS":"#1f50ea",
				"ITAP_QBDD":"#00aeef",
				"ITAP_SJHC":"#4ea0f2",
				"ITAP_SJQZ":"#39c10f",
				"ITAP_WBGJZ":"#f8e968",
				"ITAP_WDXS":"#37d70d",
				"ITAP_ZAGL":"#f3cc13",
				"ITAP_ZD":"#9be770",
				"jigou":"#2753d3",
				"jizhe":"#e93e33",
				"JWHM":"#ff9630",
				"JY":"#e9e100",
				"KQ":"#bf0009",
				"line":"#3de40d",
				"LKL":"#00b1ed",
				"LT":"#e8e50f",
				"MAC":"#9020de",
				"ML":"#01db12",
				"MM":"#0b6ed3",
				"MMFWQIP":"#fa2121",
				"MSN":"#02c7e5",
				"Package":"#5487d2",
				"Person (Shaded Shirt)":"#1448e7",
				"Phone":"#2096d5",
				"place":"#f40c0c",
				"POS-256":"#248ae7",
				"Prisoner":"#1061d5",
				"QQ":"#fe2400",
				"QQqun":"#50a5eb",
				"QX":"#ee3a42",
				"shiwu":"#8ab8f6",
				"SHWB":"#e40e15",
				"SIM":"#4a9dfb",
				"SJAPP":"#51d75e",
				"SJIAN":"#0ec32e",
				"SKYPE":"#12b3f3",
				"spy":"#e9e100",
				"TALKBOX":"#2574b0",
				"TXWB":"#3b97ed",
				"URL":"#1173b7",
				"VOXER":"#f56700",
				"WANGXIN":"#2fbcf2",
				"WD":"#699fea",
				"weibo":"#e83441",
				"weixin":"#40c508",
				"whatsapp":"#29da06",
				"WY":"#00b1ed",
				"WYPP":"#ffc91c",
				"WYWB":"#ca2216",
				"wz":"#900808",
				"XLUC":"#e75e1f",
				"XLWB":"#f30814",
				"XSDX":"#3f6ff6",
				"YCKZ":"#24c4eb",
				"YHT":"#ffcb33",
				"YHZZ":"#3faad7",
				"YP":"#88f225",
				"YX":"#ef0f0f",
				"YY":"#faaf09",
				"ZD":"#3497e8",
				"zhifubao":"#06abfe",
				"zhishi":"#f24e33",
				"zhuti":"#3897e1",
				"zuozhe":"#3069d2"
		};
		return color[type];
	},
	"appendAll" : function(obj,arr){
		for (var i = 0; i < arr.length; i++) {
			obj.appendChild(arr[i]);
		}
	},
	"setClass" : function(objs,classes){
		for (var i = 0; i < objs.length; i++) {
			objs[i].className = classes[i];
		}
	}
};

export {TimeScroll};
