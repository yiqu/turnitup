webpackJsonp([1],{"+h1B":function(n,l,u){"use strict";var t=u("/oeL"),e=u("aR8+"),r=u("wQAS"),o=u("q4dy"),i=u("qbdv"),c=u("fc+i"),a=u("bm2B"),s=u("CPp0"),d=u("OaKm"),f=u("SQp2"),_=u("QhO2");u.d(l,"a",function(){return p});var p=t.b(e.a,[r.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[o.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,i.a,i.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,c.b,c.c,[c.d]),t.d(6144,t.q,null,[c.b]),t.d(4608,c.e,c.f,[]),t.d(5120,c.g,function(n,l,u,t){return[new c.h(n),new c.i(l),new c.j(u,t)]},[c.d,c.d,c.d,c.e]),t.d(4608,c.k,c.k,[c.g,t.r]),t.d(135680,c.l,c.l,[c.d]),t.d(4608,c.m,c.m,[c.k,c.l]),t.d(6144,t.s,null,[c.m]),t.d(6144,c.n,null,[c.l]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,c.o,c.o,[c.d]),t.d(4608,c.p,c.p,[c.d]),t.d(4608,a.a,a.a,[]),t.d(4608,s.a,s.a,[]),t.d(4608,s.b,s.c,[]),t.d(5120,s.d,s.e,[]),t.d(4608,s.f,s.f,[s.a,s.b,s.d]),t.d(4608,s.g,s.h,[]),t.d(5120,s.i,s.j,[s.f,s.g]),t.d(512,i.c,i.c,[]),t.d(1024,t.u,c.q,[]),t.d(1024,t.v,function(n,l){return[c.r(n,l)]},[[2,c.s],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,c.t,c.t,[[3,c.t]]),t.d(512,d.a,d.a,[]),t.d(512,a.b,a.b,[]),t.d(512,a.c,a.c,[]),t.d(512,s.k,s.k,[]),t.d(512,f.a,f.a,[]),t.d(512,_.a,_.a,[]),t.d(512,e.a,e.a,[])])})},"/ypq":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=["h1[_ngcontent-%COMP%]{font-size:2rem;letter-spacing:-5px}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Press Start\\ 2P,cursive}p[_ngcontent-%COMP%]{font-size:.6rem;line-height:1rem;letter-spacing:-1px}"]},0:function(n,l,u){n.exports=u("cDNt")},"3VKe":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=["body[_ngcontent-%COMP%]{background:#f9f9f9}#volume-slider[_ngcontent-%COMP%]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px 0;width:300px}.volume-icon[_ngcontent-%COMP%]{cursor:pointer;height:60px;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center left;transform-origin:center left;width:60px;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;user-select:none}button[_ngcontent-%COMP%]{background-color:#fff;border:none}.volume-icon[_ngcontent-%COMP%]   .volume-icon-bg[_ngcontent-%COMP%]{fill:#cbc8ce;transition:fill .3s}.volume-icon[_ngcontent-%COMP%]:hover   .volume-icon-bg[_ngcontent-%COMP%]{fill:#b6aebf}#circle-mask-shape[_ngcontent-%COMP%]{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.volume-track[_ngcontent-%COMP%]{background-color:#e1dee5;border-radius:3px;-webkit-box-flex:1;-ms-flex:1;flex:1;height:4px;margin-left:5px;position:relative}.volume-indicator[_ngcontent-%COMP%]{background-color:#6e33a5;border-radius:50%;height:12px;left:0;position:absolute;top:-4px;transition:visibility .1s,opacity .1s;width:12px}"]},"5FTt":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".cat[_ngcontent-%COMP%]{background-image:url(cat.08a66abbc51c8f0fbc18.png);height:260px;background-repeat:no-repeat;margin-left:-50px}"]},"7kqf":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.gameTitle="Turn It Up!"}return n.ctorParameters=function(){return[]},n}()},"93ao":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.scoreTitle="Score"}return n.ctorParameters=function(){return[]},n}()},"9exB":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n.prototype.ngOnInit=function(){this.slider=document.getElementById("volume-slider"),this.icon=document.getElementById("volume-icon"),this.indicator=document.getElementById("volume-indicator"),this.shape=document.getElementById("circle-mask-shape"),this.input=document.getElementById("volume-input"),this._lock=!1,this._charging=!1,this._charge=0,this._volume=0,this.input.value=this._volume},n.prototype.mouseDown=function(n){n.stopPropagation(),this.charge()},n.prototype.mouseUp=function(n){n.stopPropagation(),this.release(this._charge)},n.prototype.charge=function(){var n=this;if(this._lock)return!1;this._lock=!0,this._charge=0,this._charging=!0,this.indicator.style.visibility="hidden",this.indicator.style.opacity="0";var l=function(){n._charging&&++n._charge<100&&requestAnimationFrame(function(){l()}),n.shape.style.transform="scale("+n._charge/100+")",n.icon.style.transform="rotate("+-.35*n._charge+"deg)"};setTimeout(function(){return l()},100)},n.prototype.release=function(n){var l=this;this._charging=!1,requestAnimationFrame(function(){l.shape.style.transform="scale(0)"});var u,t=.35*n,e=-.3*n,r=2*n,o=20+4*n,i=(new Date).getTime(),c=this._volume,a=.55*o,s=a,d=o-a,f=e,_=-t,p=t-e,m=r,g=r-10;this.indicator.style.visibility="visible",this.indicator.style.opacity="1";var h=function(){var a=(new Date).getTime()-i;a<o?(requestAnimationFrame(function(){h()}),f=a<s?l.easeOut(a,e,_,s):l.easeIn(a-s,e-t,p,d),m=l.linearTween(a,0,g,o),u=l.easeInOut(a,-.35*l._charge,.35*l._charge,o),l._volume=l.easeOut(a,c,n-c,o)):(l._lock=!1,m=r,f=0,u=0,l._volume=n),l.icon.style.transform="rotate("+u+"deg)",l.indicator.style.transform="translateX("+m+"px) translateY("+f+"px)",l.input.value=l._volume};h()},n.prototype.linearTween=function(n,l,u,t){return u*n/t+l},n.prototype.easeIn=function(n,l,u,t){return n/=t,u*n*n*n+l},n.prototype.easeOut=function(n,l,u,t){return n/=t,n--,u*(n*n*n+1)+l},n.prototype.easeInOut=function(n,l,u,t){return(n/=t/2)<1?u/2*n*n*n+l:(n-=2,u/2*(n*n*n+2)+l)},n.ctorParameters=function(){return[]},n}()},CTiS:function(n,l,u){"use strict";function t(n){return o._16(0,[(n()(),o._17(0,null,null,4,"div",[["class","wrap center"]],null,null,null,null,null)),(n()(),o._19(null,["\n  "])),(n()(),o._17(0,null,null,1,"div",[["class","cat"]],null,null,null,null,null)),(n()(),o._19(null,[" "])),(n()(),o._19(null,["\n"]))],null,null)}function e(n){return o._16(0,[(n()(),o._17(0,null,null,1,"game-score",[],null,null,null,t,a)),o._18(49152,null,0,i.a,[],null,null)],null,null)}var r=u("5FTt"),o=u("/oeL"),i=u("93ao");u.d(l,"b",function(){return a}),l.a=t;var c=[r.a],a=o._15({encapsulation:0,styles:c,data:{}});o._20("game-score",i.a,e,{},{},[])},ExDh:function(n,l,u){"use strict";function t(n){return o._16(0,[(n()(),o._17(0,null,null,1,"h1",[["class","wrap center"]],null,null,null,null,null)),(n()(),o._19(null,["",""])),(n()(),o._19(null,["\n"])),(n()(),o._17(0,null,null,3,"p",[["class","wrap center"]],null,null,null,null,null)),(n()(),o._19(null,["Press the speaker to charge up, let go when you are ready. Higher the charge, higher the volumn!\n  "])),(n()(),o._17(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._19(null,["Give W.B. the volumn she desires!\n"]))],null,function(n,l){n(l,1,0,l.component.gameTitle)})}function e(n){return o._16(0,[(n()(),o._17(0,null,null,1,"game-title",[],null,null,null,t,a)),o._18(49152,null,0,i.a,[],null,null)],null,null)}var r=u("/ypq"),o=u("/oeL"),i=u("7kqf");u.d(l,"b",function(){return a}),l.a=t;var c=[r.a],a=o._15({encapsulation:0,styles:c,data:{}});o._20("game-title",i.a,e,{},{},[])},NhKt:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},OaKm:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},QhO2:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},SQp2:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},"aR8+":function(n,l,u){"use strict";var t=u("rgUS");u.n(t);u.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},cDNt:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),r=u("+h1B"),o=u("fc+i");e.a.production&&u.i(t.a)(),u.i(o.a)().bootstrapModuleFactory(r.a)},p5Ee:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,u){"use strict";function t(n){return o._16(0,[(n()(),o._17(0,null,null,1,"game-title",[],null,null,null,i.a,i.b)),o._18(49152,null,0,c.a,[],null,null),(n()(),o._19(null,["\n"])),(n()(),o._17(0,null,null,1,"controller",[],null,null,null,a.a,a.b)),o._18(114688,null,0,s.a,[],null,null),(n()(),o._19(null,["\n"])),(n()(),o._17(0,null,null,1,"game-score",[],null,null,null,d.a,d.b)),o._18(49152,null,0,f.a,[],null,null),(n()(),o._19(null,["\n\n\n"]))],function(n,l){n(l,4,0)},null)}function e(n){return o._16(0,[(n()(),o._17(0,null,null,1,"app-root",[],null,null,null,t,m)),o._18(49152,null,0,_.a,[],null,null)],null,null)}var r=u("NhKt"),o=u("/oeL"),i=u("ExDh"),c=u("7kqf"),a=u("svAp"),s=u("9exB"),d=u("CTiS"),f=u("93ao"),_=u("wQAS");u.d(l,"a",function(){return g});var p=[r.a],m=o._15({encapsulation:0,styles:p,data:{}}),g=o._20("app-root",_.a,e,{},{},[])},qtrl:function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="qtrl"},svAp:function(n,l,u){"use strict";function t(n){return o._16(0,[(n()(),o._17(0,null,null,38,"div",[["class","wrap"],["id","volume-slider"]],null,null,null,null,null)),(n()(),o._19(null,["\n  "])),(n()(),o._17(0,null,null,28,"button",[],null,[[null,"mousedown"],[null,"mouseup"]],function(n,l,u){var t=!0,e=n.component;if("mousedown"===l){t=!1!==e.mouseDown(u)&&t}if("mouseup"===l){t=!1!==e.mouseUp(u)&&t}return t},null,null)),(n()(),o._19(null,["\n  "])),(n()(),o._17(0,null,null,25,":svg:svg",[["class","volume-icon"],["id","volume-icon"],["viewBox","-1 0 33 32"]],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._17(0,null,null,18,":svg:defs",[],null,null,null,null,null)),(n()(),o._19(null,["\n      "])),(n()(),o._17(0,null,null,3,":svg:mask",[["height","32"],["id","circle-mask"],["width","33"],["x","-1"],["y","0"]],null,null,null,null,null)),(n()(),o._19(null,["\n        "])),(n()(),o._17(0,null,null,0,":svg:circle",[["cx","-1"],["cy","16"],["fill","white"],["id","circle-mask-shape"],["r","33"]],null,null,null,null,null)),(n()(),o._19(null,["\n      "])),(n()(),o._19(null,["\n\n      "])),(n()(),o._17(0,null,null,3,":svg:mask",[["height","32"],["id","volume-mask"],["width","33"],["x","-1"],["y","0"]],null,null,null,null,null)),(n()(),o._19(null,["\n        "])),(n()(),o._17(0,null,null,0,":svg:path",[["d","M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439zM13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"],["fill","white"],["mask","url(#circle-mask)"]],null,null,null,null,null)),(n()(),o._19(null,["\n      "])),(n()(),o._19(null,["\n\n      "])),(n()(),o._17(0,null,null,5,":svg:linearGradient",[["id","grad-1"],["x1","0"],["x2","1"],["y1","0"],["y2","0"]],null,null,null,null,null)),(n()(),o._19(null,["\n        "])),(n()(),o._17(0,null,null,0,":svg:stop",[["offset","20%"],["stop-color","#9a88aa"]],null,null,null,null,null)),(n()(),o._19(null,["\n        "])),(n()(),o._17(0,null,null,0,":svg:stop",[["offset","100%"],["stop-color","#6e33a5"]],null,null,null,null,null)),(n()(),o._19(null,["\n      "])),(n()(),o._19(null,["\n    "])),(n()(),o._19(null,["\n\n    "])),(n()(),o._17(0,null,null,0,":svg:path",[["class","volume-icon-bg"],["d","M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439zM13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"],["fill","#cbc8ce"]],null,null,null,null,null)),(n()(),o._19(null,["\n\n    "])),(n()(),o._17(0,null,null,0,":svg:rect",[["fill","url(#grad-1)"],["height","32"],["mask","url(#volume-mask)"],["width","33"],["x","-1"],["y","0"]],null,null,null,null,null)),(n()(),o._19(null,["\n  "])),(n()(),o._19(null,["\n  "])),(n()(),o._19(null,["\n\n  "])),(n()(),o._17(0,null,null,5,"div",[["class","volume-track"]],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._17(0,null,null,0,"span",[["class","volume-indicator"],["id","volume-indicator"]],null,null,null,null,null)),(n()(),o._19(null,["\n    "])),(n()(),o._17(0,null,null,0,"input",[["id","volume-input"],["name","volume"],["type","hidden"]],null,null,null,null,null)),(n()(),o._19(null,["\n  "])),(n()(),o._19(null,["\n"])),(n()(),o._19(null,["\n"]))],null,null)}function e(n){return o._16(0,[(n()(),o._17(0,null,null,1,"controller",[],null,null,null,t,a)),o._18(114688,null,0,i.a,[],null,null)],function(n,l){n(l,1,0)},null)}var r=u("3VKe"),o=u("/oeL"),i=u("9exB");u.d(l,"b",function(){return a}),l.a=t;var c=[r.a],a=o._15({encapsulation:0,styles:c,data:{}});o._20("controller",i.a,e,{},{},[])},wQAS:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()}},[0]);