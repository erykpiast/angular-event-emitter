angular.module("angular-event-emitter",[]).factory("EventEmitter",["$exceptionHandler",function(a){function b(){this._eventsHandlers={}}return angular.extend(b.prototype,{on:function(b,c){angular.isString(b)||a(new Error("event name must be a string")),angular.isFunction(c)||a(Error("event handler must be a function"));var d=this._eventsHandlers[b]||(this._eventsHandlers[b]=[]);d.push(c);var e=!1;return function(){if(!e)for(var a=0,b=d.length;b>a;a++)if(d[a]===c){d[a]=null,e=!0;break}}},emit:function(b,c,d,e,f,g,h,i,j,k){angular.isString(b)||a(new Error("event name must be a string")),arguments.length>10&&a(new Error("at most 9 arguments can be passed"));var l=this._eventsHandlers[b];if(l){var m,n,o,p={name:b,defaultPrevented:!1,stopImmediatePropagation:function(){m=!0},preventDefault:function(){this.defaultPrevented=!0}};for(o=0,n=l.length;n>o;o++)if(l[o]){try{l[o].call(null,p,c,d,e,f,g,h,i,j,k)}catch(q){a(q)}if(m)break}else l.splice(o,1),o--,n--}}}),b}]);