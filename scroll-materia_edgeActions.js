/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${buttonscroll2}", "click", function(sym, e) {
         sym.play(6500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${buttonscroll1}", "click", function(sym, e) {
         sym.play(4000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6499, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'buttonscroll2'
   (function(symbolName) {   
   
   })("buttonscroll2");
   //Edge symbol end:'buttonscroll2'

   //=========================================================
   
   //Edge symbol: 'buttonscroll1'
   (function(symbolName) {   
   
   })("buttonscroll1");
   //Edge symbol end:'buttonscroll1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-127331680");