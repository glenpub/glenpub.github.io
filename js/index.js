var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("C58E09F5CC25499CA9F8BA67AFCF47D6");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function ipXTest(){
	if (navigator.userAgent.match(/(iPhone)/)){
	  if((screen.availHeight > 685) && (screen.availWidth == 375)){
	  	return true;
	  }
	}
	return false;
}
function handleFileLoad(evt, comp) {
	var propress = evt.target.progress;
	setTimeout(function(){
		$(".page-loading .text").html(propress*100+"%");
	},100);
	$(".page-loading .spider").css("top",(-6.5+6.5*propress)+"rem").css("opacity",1);
	var img=comp.getImages();	
	if (evt && (evt.item.type == "image")) { img[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.cook();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.timingMode = createjs.Ticker.RAF;
		createjs.Ticker.addEventListener("tick", stage);
		createjs.Touch.enable(stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			if(ipXTest()){
				canvas.style.height = "12.06rem";
			} 
//			canvas.style.width = anim_container.style.width = dom_overlay_container.style.width =  w*sRatio+'px';				
//			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height =  h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(true,'both',true,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	setTimeout(function(){
		$(".page-loading").addClass("hide");
		fnStartAnimation();
		setTimeout(function(){
			$(".page-loading").remove();
		},300);
	},500);
}



//点击抽奖按钮事件
var btnDraw ;

$(function(){
	init();
	
	$(".dialog .btn-close").on("click",function(){
		$(".dialog").removeClass("show");
	});
	

	btnDraw = function(){
		$(".dialog").addClass("show");
	}
});
