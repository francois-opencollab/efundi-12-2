!function($){function simulateMouseEvent(event,simulatedType){if(!(event.originalEvent.touches.length>1)){event.preventDefault();var touch=event.originalEvent.changedTouches[0],simulatedEvent=document.createEvent("MouseEvents");simulatedEvent.initMouseEvent(simulatedType,!0,!0,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,!1,!1,!1,!1,0,null),event.target.dispatchEvent(simulatedEvent)}}if($.support.touch="ontouchend"in document,$.support.touch){var touchHandled,mouseProto=$.ui.mouse.prototype,_mouseInit=mouseProto._mouseInit;mouseProto._touchStart=function(event){var self=this;!touchHandled&&self._mouseCapture(event.originalEvent.changedTouches[0])&&(touchHandled=!0,self._touchMoved=!1,simulateMouseEvent(event,"mouseover"),simulateMouseEvent(event,"mousemove"),simulateMouseEvent(event,"mousedown"))},mouseProto._touchMove=function(event){touchHandled&&(this._touchMoved=!0,simulateMouseEvent(event,"mousemove"))},mouseProto._touchEnd=function(event){touchHandled&&(simulateMouseEvent(event,"mouseup"),simulateMouseEvent(event,"mouseout"),this._touchMoved||simulateMouseEvent(event,"click"),touchHandled=!1)},mouseProto._mouseInit=function(){var self=this;self.element.bind("touchstart",$.proxy(self,"_touchStart")).bind("touchmove",$.proxy(self,"_touchMove")).bind("touchend",$.proxy(self,"_touchEnd")),_mouseInit.call(self)}}}(jQuery);