
var page = new Vue({
	el:'#pagebox',
	data:{
		wodestl:"color:rgba(0,0,0,0.5);",
		faxianstl:"color:rgba(0,0,0,0.5);",
		yuyuestl:"color:rgba(255,99,56,1);",
		yuyuehuiimgstl:"opacity:0",
		yuyueimgstl:"opacity:1",
		faxianhuiimgstl:"opacity:1",
		faxianimgstl:"opacity:0",
		wodehuiimgstl:"opacity:1",
		wodeimgstl:"opacity:0",
		yuyuepagestl:"left:0;display:block",
		faxianpagestl:"left:100%;display:none",
		wodepagestl:"left:200%;display:none",
		swiper:[
			"img/slider/0.jpg",
			"img/slider/1.jpg",
			"img/slider/3.jpg"
		],
		anliimg:[
			"img/x1/z1.png",
			"img/x1/z2.png",
			"img/x1/z3.png",
			"img/x1/z4.png",
			"img/x1/z1.png",
			"img/x1/z2.png",
			"img/x1/z3.png",
			"img/x1/z4.png",
			"img/x1/z1.png",
			"img/x1/z2.png",
			"img/x1/z3.png",
			"img/x1/z4.png",
			"img/x1/z1.png",
			"img/x1/z2.png",
			"img/x1/z3.png",
			"img/x1/z4.png"
		],
		faxian:[
			{
				faxianlistimg:"img/slider/0.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"今天",
				faxianlistyuedu:"328"
			},
			{
				faxianlistimg:"img/slider/1.jpg",
				faxianlisttitle:"旅行中的独特记忆",
				faxianlisttime:"昨天",
				faxianlistyuedu:"1350"
			},
			{
				faxianlistimg:"img/slider/3.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"10.26",
				faxianlistyuedu:"450"
			},
			{
				faxianlistimg:"img/slider/0.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"今天",
				faxianlistyuedu:"328"
			},
			{
				faxianlistimg:"img/slider/1.jpg",
				faxianlisttitle:"旅行中的独特记忆",
				faxianlisttime:"昨天",
				faxianlistyuedu:"1350"
			},
			{
				faxianlistimg:"img/slider/3.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"10.26",
				faxianlistyuedu:"450"
			},
			{
				faxianlistimg:"img/slider/0.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"今天",
				faxianlistyuedu:"328"
			},
			{
				faxianlistimg:"img/slider/1.jpg",
				faxianlisttitle:"旅行中的独特记忆",
				faxianlisttime:"昨天",
				faxianlistyuedu:"1350"
			},
			{
				faxianlistimg:"img/slider/3.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"10.26",
				faxianlistyuedu:"450"
			},
			{
				faxianlistimg:"img/slider/0.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"今天",
				faxianlistyuedu:"328"
			},
			{
				faxianlistimg:"img/slider/1.jpg",
				faxianlisttitle:"旅行中的独特记忆",
				faxianlisttime:"昨天",
				faxianlistyuedu:"1350"
			},
			{
				faxianlistimg:"img/slider/3.jpg",
				faxianlisttitle:"让未来多一点可能",
				faxianlisttime:"10.26",
				faxianlistyuedu:"450"
			},
		],
		userlogo:"img/x1/y1.png",
		username:"回形针"
	},
	methods:{
		yuyuepage(){
			scroll(0,0);
			this.$data.yuyuestl = "color:rgba(255,99,56,1);";
			this.$data.faxianstl = "color:rgba(0,0,0,0.5);";
			this.$data.wodestl = "color:rgba(0,0,0,0.5);";
			this.$data.yuyuehuiimgstl = "opacity:0";
			this.$data.yuyueimgstl = "opacity:1";
			this.$data.faxianhuiimgstl = "opacity:1";
			this.$data.faxianimgstl = "opacity:0";
			this.$data.wodehuiimgstl = "opacity:1";
			this.$data.wodeimgstl = "opacity:0";
			this.$data.yuyuepagestl = "left:0;display:block";
			this.$data.faxianpagestl = "left:100%;display:none";
			this.$data.wodepagestl = "left:200%;display:none";
		},
		faxianpage(){
			scroll(0,0);
			this.$data.yuyuestl = "color:rgba(0,0,0,0.5);";
			this.$data.faxianstl = "color:rgba(255,99,56,1);";
			this.$data.wodestl = "color:rgba(0,0,0,0.5);";
			this.$data.yuyuehuiimgstl = "opacity:1";
			this.$data.yuyueimgstl = "opacity:0";
			this.$data.faxianhuiimgstl = "opacity:0";
			this.$data.faxianimgstl = "opacity:1";
			this.$data.wodehuiimgstl = "opacity:1";
			this.$data.wodeimgstl = "opacity:0";
			this.$data.yuyuepagestl = "left:-100%;display:none";
			this.$data.faxianpagestl = "left:0;display:block";
			this.$data.wodepagestl = "left:100%;display:none";
		},
		wodepage(){
			scroll(0,0);
			this.$data.yuyuestl = "color:rgba(0,0,0,0.5);";
			this.$data.faxianstl = "color:rgba(0,0,0,0.5);";
			this.$data.wodestl = "color:rgba(255,99,56,1);";
			this.$data.yuyuehuiimgstl = "opacity:1";
			this.$data.yuyueimgstl = "opacity:0";
			this.$data.faxianhuiimgstl = "opacity:1";
			this.$data.faxianimgstl = "opacity:0";
			this.$data.wodehuiimgstl = "opacity:0";
			this.$data.wodeimgstl = "opacity:1";
			this.$data.yuyuepagestl = "left:-200%;display:none";
			this.$data.faxianpagestl = "left:-100%;display:none";
			this.$data.wodepagestl = "left:0;display:block";
		},
    },
					
});
var page = document.getElementsByClassName("page");
var pageW = window.screen.width;
window.onload(function(){
	for(i=0;i<page.length;i++){
		page[i].style.left = pageW/2 - page/2 + "px";
	};
});