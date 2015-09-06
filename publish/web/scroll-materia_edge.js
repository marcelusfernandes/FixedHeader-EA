
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x5='rgba(0,0,0,0)',g='image',x12='39px',x15='true',x13='auto',e9='${materia3}',x16='bscroll2',x8='rgba(255,255,255,1)',tp='top',m='rect',x10='bscroll1',x4='horizontal',x11='0px',i='none';var g6='materia.png',g7='bannerfull.png',g17='bscroll2.png',g14='bscroll1.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:x4,rI:n,cn:{dom:[{id:'materia3',t:g,r:['0px','140px','1400px','2409px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'buttonscroll2',symbolName:'buttonscroll2',t:m,r:['102px','292px','39','39','auto','auto']},{id:'buttonscroll1',symbolName:'buttonscroll1',t:m,r:['102px','351px','39','39','auto','auto']},{id:'bannerfull2',t:g,r:['0px','0px','1400px','141px','auto','auto'],f:[x5,im+g7,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','1400px','2000px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:8000,a:y,data:[["eid42",tp,4000,2499,"linear",e9,'140px','-920px'],["eid44",tp,6499,1501,"linear",e9,'-920px','140px']]}},"buttonscroll2":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x10,t:g,r:[x11,x11,x12,x12,x13,x13],f:[x5,im+g14,x11,x11]}],style:{'${symbolSelector}':{isStage:x15,r:[undefined,undefined,x12,x12]}}},tt:{d:0,a:y,data:[]}},"buttonscroll1":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x16,t:g,r:[x11,x11,x12,x12,x13,x13],f:[x5,im+g17,x11,x11]}],style:{'${symbolSelector}':{isStage:x15,r:[undefined,undefined,x12,x12]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-127331680");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${buttonscroll2}","click",function(sym,e){sym.play(6500);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${buttonscroll1}","click",function(sym,e){sym.play(4000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6499,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'buttonscroll2'
(function(symbolName){})("buttonscroll2");
//Edge symbol end:'buttonscroll2'

//=========================================================

//Edge symbol: 'buttonscroll1'
(function(symbolName){})("buttonscroll1");
//Edge symbol end:'buttonscroll1'
})})(AdobeEdge.$,AdobeEdge,"EDGE-127331680");