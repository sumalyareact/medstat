(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default-app-bar"],{"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["h"])("spacer","div","v-spacer")},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("fe6c"),r=i("58df");function o(t,e=[]){return Object(r["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"5e23":function(t,e,i){},6088:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{staticClass:"v-bar--underline",attrs:{id:"default-app-bar",app:"",absolute:"",color:"transparent","clipped-left":t.$vuetify.rtl,"clipped-right":!t.$vuetify.rtl,height:"70",flat:""}},[i("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),i("default-drawer-toggle",{staticClass:"hidden-sm-and-down"}),i("v-toolbar-title",{staticClass:"font-weight-light text-h5",domProps:{textContent:t._s(t.name)}}),i("v-spacer"),i("default-go-home"),i("default-notifications"),i("default-account")],1)},r=[],o=(i("d3b7"),i("5530")),n=i("7ffd"),a={name:"DefaultBar",components:{DefaultAccount:function(){return Promise.all([i.e("default-account~default-notifications~default-settings~views-Dashboard"),i.e("default-account")]).then(i.bind(null,"38ef"))},DefaultDrawerToggle:function(){return i.e("default-drawer-toggle").then(i.bind(null,"954c"))},DefaultGoHome:function(){return i.e("default-go-home").then(i.bind(null,"9cdb"))},DefaultNotifications:function(){return Promise.all([i.e("default-account~default-notifications~default-settings~views-Dashboard"),i.e("default-notifications")]).then(i.bind(null,"d9bb"))}},computed:Object(o["a"])({},Object(n["d"])("app",["drawer","mini"]),{name:Object(n["b"])("route/name")})},l=a,c=i("0c7c"),h=i("6544"),d=i.n(h),p=(i("8b0d"),i("5e23"),i("8dd9")),u=i("adda"),m=i("80d2"),g=i("d9bd"),v=p["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...p["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(m["g"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(g["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(m["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(u["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(m["g"])(this.computedContentHeight)}},Object(m["r"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(m["g"])(this.extensionHeight)}},Object(m["r"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}});function f(t,e){const{self:i=!1}=e.modifiers||{},s=e.value,r="object"===typeof s&&s.options||{passive:!0},o="function"===typeof s||"handleEvent"in s?s:s.handler,n=i?t:e.arg?document.querySelector(e.arg):window;n&&(n.addEventListener("scroll",o,r),t._onScroll={handler:o,options:r,target:i?void 0:n})}function b(t){if(!t._onScroll)return;const{handler:e,options:i,target:s=t}=t._onScroll;s.removeEventListener("scroll",e,i),delete t._onScroll}const S={inserted:f,unbind:b};var O=S,y=i("3a66"),_=i("2b0e"),w=_["a"].extend({name:"scrollable",directives:{Scroll:S},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(g["c"])("Unable to locate element with identifier "+this.scrollTarget,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),x=i("d10f"),T=i("f2e7"),j=i("58df");const $=Object(j["a"])(v,w,x["a"],T["a"],Object(y["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var B=$.extend({name:"v-app-bar",directives:{Scroll:O},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return w.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...v.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return v.options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,s=i-e,r=s/this.computedScrollThreshold,o=this.currentScroll*r;return Math.max(e,i-o)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=v.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:v.options.computed.isCollapsed.call(this)},isProminent(){return v.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...v.options.computed.styles.call(this),fontSize:Object(m["g"])(this.computedFontSize,"rem"),marginTop:Object(m["g"])(this.computedMarginTop),transform:`translateY(${Object(m["g"])(this.computedTransform)})`,left:Object(m["g"])(this.computedLeft),right:Object(m["g"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=v.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=v.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),C=i("9d26"),E=i("8336"),A=_["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:r}){const o=Object.assign(r,{staticClass:("v-app-bar__nav-icon "+(r.staticClass||"")).trim(),props:{...s,icon:!0},on:i}),n=e().default;return t(E["a"],o,n||[t(C["a"],"$menu")])}}),H=i("2fa4");const z=Object(m["h"])("v-toolbar__title");Object(m["h"])("v-toolbar__items");var P=Object(c["a"])(l,s,r,!1,null,null,null);e["default"]=P.exports;d()(P,{VAppBar:B,VAppBarNavIcon:A,VSpacer:H["a"],VToolbarTitle:z})},"78d7":function(t,e,i){"use strict";var s=i("6b53");e["a"]=s["a"]},"8b0d":function(t,e,i){},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";function s(t,e){const i=e.modifiers||{},s=e.value,{handler:o,options:n}="object"===typeof s?s:{handler:s,options:{}},a=new IntersectionObserver((e=[],s)=>{if(t._observe){if(o&&(!i.quiet||t._observe.init)){const t=Boolean(e.find(t=>t.isIntersecting));o(e,s,t)}t._observe.init&&i.once?r(t):t._observe.init=!0}},n);t._observe={init:!1,observer:a},a.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}const o={inserted:s,unbind:r};e["a"]=o},adda:function(t,e,i){"use strict";i("8efc");var s=i("90a2"),r=i("78d7"),o=i("7560"),n=i("58df"),a=i("d9f7"),l=i("d9bd");const c="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(r["a"],o["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!c||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(l["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,t.src=this.normalisedSrc.src,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):null!=e&&!this.hasError&&setTimeout(i,e)};i()},genContent(){const t=r["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=r["a"].options.render.call(this,t),i=Object(a["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:c?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})}}]);
//# sourceMappingURL=default-app-bar.831aac86.js.map