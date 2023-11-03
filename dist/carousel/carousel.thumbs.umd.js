!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";const e=(t,...i)=>{const s=i.length;for(let n=0;n<s;n++){const s=i[n]||{};Object.entries(s).forEach((([i,s])=>{const n=Array.isArray(s)?[]:{};var r;t[i]||Object.assign(t,{[i]:n}),"object"==typeof(r=s)&&null!==r&&r.constructor===Object&&"[object Object]"===Object.prototype.toString.call(r)?Object.assign(t[i],e(n,s)):Array.isArray(s)?Object.assign(t,{[i]:[...s]}):Object.assign(t,{[i]:s})}))}return t},i=t=>`${t||""}`.split(" ").filter((t=>!!t)),s=(t,e)=>{t&&i(e).forEach((e=>{t.classList.add(e)}))},n=(t,e)=>{t&&i(e).forEach((e=>{t.classList.remove(e)}))},r=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class o{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?e({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let i=r(t,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...e)),i}optionFor(t,e,i,...s){let n=r(e,t);var o;"string"!=typeof(o=n)||isNaN(o)||isNaN(parseFloat(o))||(n=parseFloat(n)),"true"===n&&(n=!0),"false"===n&&(n=!1),n&&"function"==typeof n&&(n=n.call(this,this,t,...s));let a=r(e,this.options);return a&&"function"==typeof a?n=a.call(this,this,t,...s,n):void 0===n&&(n=a),void 0===n?i:n}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let s="";return i?s=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(s=this.option(`l10n.${e}`)),s||(s=t),s}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(o,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.25"}),Object.defineProperty(o,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class a extends o{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}var l,c;!function(t){t[t.Init=0]="Init",t[t.Error=1]="Error",t[t.Ready=2]="Ready",t[t.Panning=3]="Panning",t[t.Mousemove=4]="Mousemove",t[t.Destroy=5]="Destroy"}(l||(l={})),function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroy=2]="Destroy"}(c||(c={}));const h=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),u={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};t.States=void 0,function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Hidden=2]="Hidden"}(t.States||(t.States={}));const d="thumbWidth",f="thumbHeight",b="thumbClipWidth";class p extends a{constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:t.States.Init})}get isModern(){return"modern"===this.type}onInitSlide(t,e){const i=e.el?e.el.dataset:void 0;i&&(e.thumbSrc=i.thumbSrc||e.thumbSrc||"",e[b]=parseFloat(i[b]||"")||e[b]||0,e[f]=parseFloat(i.thumbHeight||"")||e[f]||0),this.addSlide(e)}onInitSlides(){this.build()}onTransform(){var t,e,s;if(!this.isModern)return;const r=this.instance,o=this.carousel,a=o?o.panzoom:null;if(o&&a&&(null===(t=r.panzoom)||void 0===t?void 0:t.isDragging)){let t=(null===(e=o.pages[o.page])||void 0===e?void 0:e.pos)||0;t+=r.getProgress()*this[b];let i=a.getBounds();-1*t>i.x.min&&-1*t<i.x.max&&a.panTo({x:-1*t,friction:.75}),n(this.container,this.cn("isResting"))}else l=this.container,c=this.cn("isResting"),h=null===(s=r.panzoom)||void 0===s?void 0:s.isResting,l&&i(c).forEach((t=>{l.classList.toggle(t,h||!1)}));var l,c,h;this.shiftModern()}onRefresh(){this.updateProps();for(const t of this.instance.slides||[])this.resizeModernSlide(t);this.shiftModern()}isDisabled(){const t=this.option("minCount")||0;if(t){const e=this.instance;let i=0;for(const t of e.slides||[])t.thumbSrc&&i++;if(i<t)return!0}const e=this.option("type");return["modern","classic"].indexOf(e)<0}getThumb(t){const e=this.option("thumbTpl")||"";return{html:this.instance.localize(e,[["%i",t.index],["%d",t.index+1],["%s",t.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}}addSlide(t){const e=this.carousel;e&&e.addSlide(t.index,this.getThumb(t))}getSlides(){const t=[];for(const e of this.instance.slides||[])t.push(this.getThumb(e));return t}resizeModernSlide(t){var e,i;if(!this.isModern)return;if(!(null===(i=null===(e=this.carousel)||void 0===e?void 0:e.slides[t.index])||void 0===i?void 0:i.el))return;const s=t[b]&&t[f]?Math.round(this[f]*(t[b]/t[f])):this[d];t[d]=s}updateProps(){const t=this.container;if(!t)return;const e=e=>parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-"+e))||0;this.thumbGap=e("gap"),this.thumbExtraGap=e("extra-gap"),this[d]=e("width")||40,this[b]=e("clip-width")||40,this[f]=e("height")||40}build(){if(this.state!==t.States.Init)return;if(this.isDisabled())return;const i=this.instance,n=i.container,r=this.getSlides(),o=this.option("type");this.type=o;const a=document.createElement("div");s(a,this.cn("container")),s(a,`is-${o}`),s(a,this.cn("isResting"));const l=this.option("parentEl");l?l.appendChild(a):n.after(a),s(n,this.cn("hasThumbs")),this.container=a,this.updateProps();const c=document.createElement("div");s(c,this.cn("track")),a.appendChild(c),this.track=c;const h=e({},{track:c,infinite:!1,center:!0,fill:"classic"===o,dragFree:!0,slidesPerPage:1,transition:!1,preload:.25,friction:.12,Panzoom:{maxVelocity:0},Dots:!1,Navigation:!1,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},this.option("Carousel")||{},{Sync:{target:i},slides:r}),u=new i.constructor(a,h);u.on("createSlide",((t,e)=>{this.setProps(e.index),this.emit("createSlide",e,e.el)})),u.on("ready",(()=>{this.shiftModern(),this.emit("ready")})),u.on("refresh",(()=>{this.shiftModern()})),u.on("Panzoom.click",((t,e,i)=>{this.onClick(i)})),this.carousel=u,this.state=t.States.Ready}onClick(t){t.preventDefault(),t.stopPropagation();const e=this.instance,{pages:i,page:s}=e,n=t=>{if(t){const e=t.closest("[data-carousel-index]");if(e)return[parseInt(e.dataset.carouselIndex||"",10)||0,e]}return[-1,void 0]},r=(t,e)=>{const i=document.elementFromPoint(t,e);return i?n(i):[-1,void 0]};let[o,a]=n(t.target);if(o>-1)return;const l=this[b],c=t.clientX,h=t.clientY;let[u,d]=r(c-l,h),[f,p]=r(c+l,h);d&&p?(o=Math.abs(c-d.getBoundingClientRect().right)<Math.abs(c-p.getBoundingClientRect().left)?u:f,o===s&&(o=o===u?f:u)):d?o=u:p&&(o=f),o>-1&&i[o]&&e.slideTo(o)}getShift(t){var e;const{instance:i}=this,s=this.carousel;if(!i||!s)return 0;const n=this[d],r=this[b],o=this.thumbGap,a=this.thumbExtraGap;if(!(null===(e=s.slides[t])||void 0===e?void 0:e.el))return 0;const l=.5*(n-r),c=i.pages.length-1;let h=i.getProgress(0),u=i.getProgress(c),f=i.getProgress(t,!1,!0),p=0,m=l+a+o;return 0===t?p=m*Math.abs(h):t===c?p=m*Math.abs(u)*-1:h<0&&h>-1||u>0&&u<1?(p=-1*m,p+=m*Math.abs(h),p+=m*(1-Math.abs(u))):p=m*f,p}setProps(t){if(!this.isModern)return;const{instance:e}=this,i=this.carousel;if(e&&i){const s=i.slides[t].el;if(s&&s.childNodes.length){let i=h(1-Math.abs(e.getProgress(t))),n=h(this.getShift(t));s.style.setProperty("--progress",i?i+"":""),s.style.setProperty("--shift",n+"")}}}shiftModern(){if(!this.isModern)return;const{instance:t,track:e}=this,i=t.panzoom,s=this.carousel;if(!(t&&e&&i&&s))return;if(i.state===l.Init||i.state===l.Destroy)return;for(const e of t.slides)this.setProps(e.index);let n=(this[b]+this.thumbGap)*(s.slides.length||0);e.style.setProperty("--width",n+"")}cleanup(){this.carousel&&this.carousel.destroy(),this.carousel=null,this.container&&this.container.remove(),this.container=null,this.track&&this.track.remove(),this.track=null,this.state=t.States.Init,n(this.instance.container,this.cn("hasThumbs"))}attach(){const t=this,e=t.instance;e.on("initSlide",t.onInitSlide),e.state===c.Init?e.on("initSlides",t.onInitSlides):t.onInitSlides(),e.on("Panzoom.afterTransform",t.onTransform),e.on("Panzoom.refresh",t.onRefresh)}detach(){const t=this,e=t.instance;e.off("initSlide",t.onInitSlide),e.off("initSlides",t.onInitSlides),e.off("Panzoom.afterTransform",t.onTransform),e.off("Panzoom.refresh",t.onRefresh),t.cleanup()}}Object.defineProperty(p,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:u}),t.Thumbs=p,t.defaultOptions=u}));
