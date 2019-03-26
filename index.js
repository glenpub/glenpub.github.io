(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("An7H8QjSjTAAkpQAAkpDSjSQDSjTEpAAQEqAADSDTQDSDSAAEpQAAEpjSDTQjSDSkqABQkpgBjSjSg");
	this.shape.setTransform(360,1128.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AnlIMQjajJgLkoQgLknDKjZQDKjaEogLQEngLDZDKQDZDJALEoQALEnjJDaQjLDZknALIgeABQkVAAjNjAg");
	this.shape_1.setTransform(327.3,1083.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AnRIcQjgjAgVknQgXkmDCjfQDBjhEmgWQEmgVDfDAQDgDCAXEmQAVEljADgQjBDhknAVQgeADgdAAQkBAAjKiug");
	this.shape_2.setTransform(294.5,1038.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("Am7ItQjni4ghklQghkkC4jnQC4jnElghQEkghDnC4QDnC4AhElQAhEki4DnQi4DnkmAhQgsAFgqAAQjxAAjDicg");
	this.shape_3.setTransform(261.8,992.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AmmI+QjuiwgskkQgrkiCvjuQCvjtEkgsQEjgtDtCvQDuCwArEjQAsEkivDtQivDukkArQg6AJg4AAQjgAAi+iLg");
	this.shape_4.setTransform(229,947.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AmRJOQj0ing3kiQg3khCnj1QCmj0Eig3QEig3D0CmQD0CnA3EiQA3EhimD1QinD0kiA3QhIAOhFAAQjRAAi4h9g");
	this.shape_5.setTransform(196.3,901.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("Al8JeQj7iehCkhQhBkgCdj7QCej6EhhDQEghCD7CeQD7CeBBEhQBCEfidD8QieD6khBCQhVAUhRAAQjDAAiyhvg");
	this.shape_6.setTransform(163.5,856.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AlmJuQkCiVhNkfQhNkeCVkCQCVkCEfhNQEfhNECCVQEBCVBNEfQBNEeiVECQiVECkfBNQhiAaheAAQi2AAiqhig");
	this.shape_7.setTransform(130.8,810.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// 图层_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("EgeGAjnMAAAhHNMA8NAAAMAAABHNg");
	this.shape_8.setTransform(360,364.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(527.3,777,385.4,1063.8);
// library properties:
lib.properties = {
	id: '21C6AAD25D69364D8CE294CB58A32F8F',
	width: 720,
	height: 1280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['21C6AAD25D69364D8CE294CB58A32F8F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;