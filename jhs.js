(function(doc,win){  
    	 var docEl =doc.documentElement,  
             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
             recalc = function(){  
                 var clientWidth = docEl.clientWidth>12242 ? 1242 :docEl.clientWidth;  
                 if (!clientWidth) {return};  
                 docEl.style.fontSize = 100 * (clientWidth/1242) + 'px';  
             };  
	     recalc();  
	     if (!doc.addEventListener) return;  
	     win.addEventListener(resizeEvt, recalc, false);  
	     doc.addEventListener('DOMContentLoaded', recalc, false);  
	 })(document,window) 