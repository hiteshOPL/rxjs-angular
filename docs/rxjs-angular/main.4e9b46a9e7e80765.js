"use strict";(self.webpackChunkrxjs_angular=self.webpackChunkrxjs_angular||[]).push([[179],{784:()=>{function J(e){return"function"==typeof e}function li(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Mo=li(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,i)=>`${i+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function dr(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class it{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const o of n)o.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(J(r))try{r()}catch(o){t=o instanceof Mo?o.errors:[o]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const o of i)try{Qd(o)}catch(s){t=t??[],s instanceof Mo?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Mo(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Qd(t);else{if(t instanceof it){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&dr(n,t)}remove(t){const{_finalizers:n}=this;n&&dr(n,t),t instanceof it&&t._removeParent(this)}}it.EMPTY=(()=>{const e=new it;return e.closed=!0,e})();const Wd=it.EMPTY;function qd(e){return e instanceof it||e&&"closed"in e&&J(e.remove)&&J(e.add)&&J(e.unsubscribe)}function Qd(e){J(e)?e():e.unsubscribe()}const Un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},To={setTimeout(e,t,...n){const{delegate:r}=To;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=To;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Kd(e){To.setTimeout(()=>{const{onUnhandledError:t}=Un;if(!t)throw e;t(e)})}function Ao(){}const jC=ja("C",void 0,void 0);function ja(e,t,n){return{kind:e,value:t,error:n}}let Hn=null;function xo(e){if(Un.useDeprecatedSynchronousErrorHandling){const t=!Hn;if(t&&(Hn={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=Hn;if(Hn=null,n)throw r}}else e()}class Va extends it{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,qd(t)&&t.add(this)):this.destination=GC}static create(t,n,r){return new ci(t,n,r)}next(t){this.isStopped?Ba(function $C(e){return ja("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?Ba(function VC(e){return ja("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Ba(jC,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const UC=Function.prototype.bind;function $a(e,t){return UC.call(e,t)}class HC{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Ro(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Ro(r)}else Ro(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Ro(n)}}}class ci extends Va{constructor(t,n,r){let i;if(super(),J(t)||!t)i={next:t??void 0,error:n??void 0,complete:r??void 0};else{let o;this&&Un.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=()=>this.unsubscribe(),i={next:t.next&&$a(t.next,o),error:t.error&&$a(t.error,o),complete:t.complete&&$a(t.complete,o)}):i=t}this.destination=new HC(i)}}function Ro(e){Un.useDeprecatedSynchronousErrorHandling?function BC(e){Un.useDeprecatedSynchronousErrorHandling&&Hn&&(Hn.errorThrown=!0,Hn.error=e)}(e):Kd(e)}function Ba(e,t){const{onStoppedNotification:n}=Un;n&&To.setTimeout(()=>n(e,t))}const GC={closed:!0,next:Ao,error:function zC(e){throw e},complete:Ao},Ua="function"==typeof Symbol&&Symbol.observable||"@@observable";function wn(e){return e}function Zd(e){return 0===e.length?wn:1===e.length?e[0]:function(n){return e.reduce((r,i)=>i(r),n)}}let ue=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,i){const o=function QC(e){return e&&e instanceof Va||function qC(e){return e&&J(e.next)&&J(e.error)&&J(e.complete)}(e)&&qd(e)}(n)?n:new ci(n,r,i);return xo(()=>{const{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=Jd(r))((i,o)=>{const s=new ci({next:a=>{try{n(a)}catch(u){o(u),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[Ua](){return this}pipe(...n){return Zd(n)(this)}toPromise(n){return new(n=Jd(n))((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return e.create=t=>new e(t),e})();function Jd(e){var t;return null!==(t=e??Un.Promise)&&void 0!==t?t:Promise}const KC=li(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let ze=(()=>{class e extends ue{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Yd(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new KC}next(n){xo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){xo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){xo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:i,observers:o}=this;return r||i?Wd:(this.currentObservers=null,o.push(n),new it(()=>{this.currentObservers=null,dr(o,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:i,isStopped:o}=this;r?n.error(i):o&&n.complete()}asObservable(){const n=new ue;return n.source=this,n}}return e.create=(t,n)=>new Yd(t,n),e})();class Yd extends ze{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:Wd}}function Xd(e){return J(e?.lift)}function fe(e){return t=>{if(Xd(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function he(e,t,n,r,i){return new ZC(e,t,n,r,i)}class ZC extends Va{constructor(t,n,r,i,o,s){super(t),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(u){t.error(u)}}:super._next,this._error=i?function(a){try{i(a)}catch(u){t.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function P(e,t){return fe((n,r)=>{let i=0;n.subscribe(he(r,o=>{r.next(e.call(t,o,i++))}))})}function zn(e){return this instanceof zn?(this.v=e,this):new zn(e)}function XC(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,r=n.apply(e,t||[]),o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(f){r[f]&&(i[f]=function(h){return new Promise(function(g,v){o.push([f,h,g,v])>1||a(f,h)})})}function a(f,h){try{!function u(f){f.value instanceof zn?Promise.resolve(f.value.v).then(l,c):d(o[0][2],f)}(r[f](h))}catch(g){d(o[0][3],g)}}function l(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),o.shift(),o.length&&a(o[0][0],o[0][1])}}function e_(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function nf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,u){!function i(o,s,a,u){Promise.resolve(u).then(function(l){o({value:l,done:a})},s)}(a,u,(s=e[o](s)).done,s.value)})}}}const za=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function rf(e){return J(e?.then)}function sf(e){return J(e[Ua])}function af(e){return Symbol.asyncIterator&&J(e?.[Symbol.asyncIterator])}function uf(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const lf=function n_(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function cf(e){return J(e?.[lf])}function df(e){return XC(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:i}=yield zn(n.read());if(i)return yield zn(void 0);yield yield zn(r)}}finally{n.releaseLock()}})}function ff(e){return J(e?.getReader)}function gt(e){if(e instanceof ue)return e;if(null!=e){if(sf(e))return function r_(e){return new ue(t=>{const n=e[Ua]();if(J(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(za(e))return function i_(e){return new ue(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(rf(e))return function o_(e){return new ue(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Kd)})}(e);if(af(e))return hf(e);if(cf(e))return function s_(e){return new ue(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(ff(e))return function a_(e){return hf(df(e))}(e)}throw uf(e)}function hf(e){return new ue(t=>{(function u_(e,t){var n,r,i,o;return function JC(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(c){try{l(r.next(c))}catch(d){s(d)}}function u(c){try{l(r.throw(c))}catch(d){s(d)}}function l(c){c.done?o(c.value):function i(o){return o instanceof n?o:new n(function(s){s(o)})}(c.value).then(a,u)}l((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=e_(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=n.return)&&(yield o.call(n))}finally{if(i)throw i.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function en(e,t,n,r=0,i=!1){const o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function Ae(e,t,n=1/0){return J(t)?Ae((r,i)=>P((o,s)=>t(r,o,i,s))(gt(e(r,i))),n):("number"==typeof t&&(n=t),fe((r,i)=>function l_(e,t,n,r,i,o,s,a){const u=[];let l=0,c=0,d=!1;const f=()=>{d&&!u.length&&!l&&t.complete()},h=v=>l<r?g(v):u.push(v),g=v=>{o&&t.next(v),l++;let C=!1;gt(n(v,c++)).subscribe(he(t,w=>{i?.(w),o?h(w):t.next(w)},()=>{C=!0},void 0,()=>{if(C)try{for(l--;u.length&&l<r;){const w=u.shift();s?en(t,s,()=>g(w)):g(w)}f()}catch(w){t.error(w)}}))};return e.subscribe(he(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,i,e,n)))}function fr(e=1/0){return Ae(wn,e)}const tn=new ue(e=>e.complete());function pf(e){return e&&J(e.schedule)}function Ga(e){return e[e.length-1]}function di(e){return pf(Ga(e))?e.pop():void 0}function gf(e,t=0){return fe((n,r)=>{n.subscribe(he(r,i=>en(r,e,()=>r.next(i),t),()=>en(r,e,()=>r.complete(),t),i=>en(r,e,()=>r.error(i),t)))})}function mf(e,t=0){return fe((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function yf(e,t){if(!e)throw new Error("Iterable cannot be null");return new ue(n=>{en(n,t,()=>{const r=e[Symbol.asyncIterator]();en(n,t,()=>{r.next().then(i=>{i.done?n.complete():n.next(i.value)})},0,!0)})})}function re(e,t){return t?function v_(e,t){if(null!=e){if(sf(e))return function h_(e,t){return gt(e).pipe(mf(t),gf(t))}(e,t);if(za(e))return function g_(e,t){return new ue(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(rf(e))return function p_(e,t){return gt(e).pipe(mf(t),gf(t))}(e,t);if(af(e))return yf(e,t);if(cf(e))return function m_(e,t){return new ue(n=>{let r;return en(n,t,()=>{r=e[lf](),en(n,t,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){return void n.error(s)}o?n.complete():n.next(i)},0,!0)}),()=>J(r?.return)&&r.return()})}(e,t);if(ff(e))return function y_(e,t){return yf(df(e),t)}(e,t)}throw uf(e)}(e,t):gt(e)}function vf(e={}){const{connector:t=(()=>new ze),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=e;return o=>{let s,a,u,l=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=u=void 0,c=d=!1},g=()=>{const v=s;h(),v?.unsubscribe()};return fe((v,C)=>{l++,!d&&!c&&f();const w=u=u??t();C.add(()=>{l--,0===l&&!d&&!c&&(a=Wa(g,i))}),w.subscribe(C),!s&&l>0&&(s=new ci({next:E=>w.next(E),error:E=>{d=!0,f(),a=Wa(h,n,E),w.error(E)},complete:()=>{c=!0,f(),a=Wa(h,r),w.complete()}}),gt(v).subscribe(s))})(o)}}function Wa(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new ci({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
/**
       * @license Angular v14.2.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ie(e){for(let t in e)if(e[t]===ie)return t;throw Error("Could not find renamed property on target object.")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oe(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(oe).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function Qa(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const C_=ie({__forward_ref__:ie});function Ka(e){return e.__forward_ref__=Ka,e.toString=function(){return oe(this())},e}function j(e){return function Za(e){return"function"==typeof e&&e.hasOwnProperty(C_)&&e.__forward_ref__===Ka}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class T extends Error{constructor(t,n){super(function No(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function B(e){return"string"==typeof e?e:null==e?"":String(e)}function Po(e,t){throw new T(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function st(e,t){null==e&&function ee(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function V(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Tt(e){return{providers:e.providers||[],imports:e.imports||[]}}function Oo(e){return Df(e,Fo)||Df(e,_f)}function Df(e,t){return e.hasOwnProperty(t)?e[t]:null}function Cf(e){return e&&(e.hasOwnProperty(Ja)||e.hasOwnProperty(A_))?e[Ja]:null}const Fo=ie({\u0275prov:ie}),Ja=ie({\u0275inj:ie}),_f=ie({ngInjectableDef:ie}),A_=ie({ngInjectorDef:ie});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var F=(()=>((F=F||{})[F.Default=0]="Default",F[F.Host=1]="Host",F[F.Self=2]="Self",F[F.SkipSelf=4]="SkipSelf",F[F.Optional=8]="Optional",F))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ya;function mt(e){const t=Ya;return Ya=e,t}function wf(e,t,n){const r=Oo(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&F.Optional?null:void 0!==t?t:void Po(oe(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function bn(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var At=(()=>((At=At||{})[At.OnPush=0]="OnPush",At[At.Default=1]="Default",At))(),Bt=(()=>{return(e=Bt||(Bt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Bt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const se=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),hr={},X=[],ko=ie({\u0275cmp:ie}),Xa=ie({\u0275dir:ie}),eu=ie({\u0275pipe:ie}),bf=ie({\u0275mod:ie}),rn=ie({\u0275fac:ie}),fi=ie({__NG_ELEMENT_ID__:ie});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let R_=0;function le(e){return bn(()=>{const n=!0===e.standalone,r={},i={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===At.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||X,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Bt.Emulated,id:"c"+R_++,styles:e.styles||X,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.dependencies,s=e.features;return i.inputs=Sf(e.inputs,r),i.outputs=Sf(e.outputs),s&&s.forEach(a=>a(i)),i.directiveDefs=o?()=>("function"==typeof o?o():o).map(Ef).filter(If):null,i.pipeDefs=o?()=>("function"==typeof o?o():o).map(We).filter(If):null,i})}function Ef(e){return te(e)||Ge(e)}function If(e){return null!==e}function Ut(e){return bn(()=>({type:e.type,bootstrap:e.bootstrap||X,declarations:e.declarations||X,imports:e.imports||X,exports:e.exports||X,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Sf(e,t){if(null==e)return hr;const n={};for(const r in e)if(e.hasOwnProperty(r)){let i=e[r],o=i;Array.isArray(i)&&(o=i[1],i=i[0]),n[i]=r,t&&(t[i]=o)}return n}const je=le;function et(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function te(e){return e[ko]||null}function Ge(e){return e[Xa]||null}function We(e){return e[eu]||null}function at(e,t){const n=e[bf]||null;if(!n&&!0===t)throw new Error(`Type ${oe(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const G=11;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tt(e){return Array.isArray(e)&&"object"==typeof e[1]}function Rt(e){return Array.isArray(e)&&!0===e[1]}function ru(e){return 0!=(8&e.flags)}function $o(e){return 2==(2&e.flags)}function Bo(e){return 1==(1&e.flags)}function Nt(e){return null!==e.template}function L_(e){return 0!=(256&e[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Kn(e,t){return e.hasOwnProperty(rn)?e[rn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $_{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zn(){return Af}function Af(e){return e.type.prototype.ngOnChanges&&(e.setInput=U_),B_}function B_(){const e=Rf(this),t=e?.current;if(t){const n=e.previous;if(n===hr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function U_(e,t,n,r){const i=Rf(e)||function H_(e,t){return e[xf]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:hr,current:null}),o=i.current||(i.current={}),s=i.previous,a=this.declaredInputs[n],u=s[a];o[a]=new $_(u&&u.currentValue,t,s===hr),e[r]=t}Zn.ngInherit=!0;const xf="__ngSimpleChanges__";function Rf(e){return e[xf]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function be(e){for(;Array.isArray(e);)e=e[0];return e}function Uo(e,t){return be(t[e])}function Dt(e,t){return be(t[e.index])}function uu(e,t){return e.data[t]}function vr(e,t){return e[t]}function lt(e,t){const n=t[e];return tt(n)?n:n[0]}function Ho(e){return 64==(64&e[2])}function En(e,t){return null==t?null:e[t]}function Nf(e){e[18]=0}function lu(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const $={lFrame:zf(null),bindingsEnabled:!0};function Of(){return $.bindingsEnabled}function _(){return $.lFrame.lView}function K(){return $.lFrame.tView}function xe(){let e=Lf();for(;null!==e&&64===e.type;)e=e.parent;return e}function Lf(){return $.lFrame.currentTNode}function Ht(e,t){const n=$.lFrame;n.currentTNode=e,n.isParent=t}function cu(){return $.lFrame.isParent}function du(){$.lFrame.isParent=!1}function Dr(){return $.lFrame.bindingIndex++}function sn(e){const t=$.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function iw(e,t){const n=$.lFrame;n.bindingIndex=n.bindingRootIndex=e,fu(t)}function fu(e){$.lFrame.currentDirectiveIndex=e}function Bf(){return $.lFrame.currentQueryIndex}function pu(e){$.lFrame.currentQueryIndex=e}function sw(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Uf(e,t,n){if(n&F.SkipSelf){let i=t,o=e;for(;!(i=i.parent,null!==i||n&F.Host||(i=sw(o),null===i||(o=o[15],10&i.type))););if(null===i)return!1;t=i,e=o}const r=$.lFrame=Hf();return r.currentTNode=t,r.lView=e,!0}function gu(e){const t=Hf(),n=e[1];$.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Hf(){const e=$.lFrame,t=null===e?null:e.child;return null===t?zf(e):t}function zf(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Gf(){const e=$.lFrame;return $.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Wf=Gf;function mu(){const e=Gf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Qe(){return $.lFrame.selectedIndex}function In(e){$.lFrame.selectedIndex=e}function ve(){const e=$.lFrame;return uu(e.tView,e.selectedIndex)}function zo(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const o=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:l,ngOnDestroy:c}=o;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),u&&(e.viewHooks||(e.viewHooks=[])).push(-n,u),l&&((e.viewHooks||(e.viewHooks=[])).push(n,l),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,l)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function Go(e,t,n){qf(e,t,3,n)}function Wo(e,t,n,r){(3&e[2])===n&&qf(e,t,n,r)}function yu(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function qf(e,t,n,r){const o=r??-1,s=t.length-1;let a=0;for(let u=void 0!==r?65535&e[18]:0;u<s;u++)if("number"==typeof t[u+1]){if(a=t[u],null!=r&&a>=r)break}else t[u]<0&&(e[18]+=65536),(a<o||-1==o)&&(gw(e,n,t,u),e[18]=(4294901760&e[18])+u+2),u++}function gw(e,t,n,r){const i=n[r]<0,o=n[r+1],a=e[i?-n[r]:n[r]];if(i){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{o.call(a)}finally{}}}else try{o.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vi{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function qo(e,t,n){let r=0;for(;r<n.length;){const i=n[r];if("number"==typeof i){if(0!==i)break;r++;const o=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,o)}else{const o=i,s=n[++r];Kf(o)?e.setProperty(t,o,s):e.setAttribute(t,o,s),r++}}return r}function Qf(e){return 3===e||4===e||6===e}function Kf(e){return 64===e.charCodeAt(0)}function Qo(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const i=t[r];"number"==typeof i?n=i:0===n||Zf(e,n,i,null,-1===n||2===n?t[++r]:null)}}return e}function Zf(e,t,n,r,i){let o=0,s=e.length;if(-1===t)s=-1;else for(;o<e.length;){const a=e[o++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=o-1;break}}}for(;o<e.length;){const a=e[o];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==i&&(e[o+1]=i));if(r===e[o+1])return void(e[o+2]=i)}o++,null!==r&&o++,null!==i&&o++}-1!==s&&(e.splice(s,0,t),o=s+1),e.splice(o++,0,n),null!==r&&e.splice(o++,0,r),null!==i&&e.splice(o++,0,i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jf(e){return-1!==e}function Cr(e){return 32767&e}function _r(e,t){let n=function Cw(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Du=!0;function Ko(e){const t=Du;return Du=e,t}let _w=0;const zt={};function Ci(e,t){const n=_u(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Cu(r.data,e),Cu(t,null),Cu(r.blueprint,null));const i=Zo(e,t),o=e.injectorIndex;if(Jf(i)){const s=Cr(i),a=_r(i,t),u=a[1].data;for(let l=0;l<8;l++)t[o+l]=a[s+l]|u[s+l]}return t[o+8]=i,o}function Cu(e,t){e.push(0,0,0,0,0,0,0,0,t)}function _u(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Zo(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,i=t;for(;null!==i;){if(r=sh(i),null===r)return-1;if(n++,i=i[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Jo(e,t,n){!function ww(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(fi)&&(r=n[fi]),null==r&&(r=n[fi]=_w++);const i=255&r;t.data[e+(i>>5)]|=1<<i}(e,t,n)}function eh(e,t,n){if(n&F.Optional||void 0!==e)return e;Po()}function th(e,t,n,r){if(n&F.Optional&&void 0===r&&(r=null),0==(n&(F.Self|F.Host))){const i=e[9],o=mt(void 0);try{return i?i.get(t,r,n&F.Optional):wf(t,r,n&F.Optional)}finally{mt(o)}}return eh(r,0,n)}function nh(e,t,n,r=F.Default,i){if(null!==e){if(1024&t[2]){const s=function Tw(e,t,n,r,i){let o=e,s=t;for(;null!==o&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=rh(o,s,n,r|F.Self,zt);if(a!==zt)return a;let u=o.parent;if(!u){const l=s[21];if(l){const c=l.get(n,zt,r);if(c!==zt)return c}u=sh(s),s=s[15]}o=u}return i}(e,t,n,r,zt);if(s!==zt)return s}const o=rh(e,t,n,r,zt);if(o!==zt)return o}return th(t,n,r,i)}function rh(e,t,n,r,i){const o=function Iw(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(fi)?e[fi]:void 0;return"number"==typeof t?t>=0?255&t:Sw:t}(n);if("function"==typeof o){if(!Uf(t,e,r))return r&F.Host?eh(i,0,r):th(t,n,r,i);try{const s=o(r);if(null!=s||r&F.Optional)return s;Po()}finally{Wf()}}else if("number"==typeof o){let s=null,a=_u(e,t),u=-1,l=r&F.Host?t[16][6]:null;for((-1===a||r&F.SkipSelf)&&(u=-1===a?Zo(e,t):t[a+8],-1!==u&&oh(r,!1)?(s=t[1],a=Cr(u),t=_r(u,t)):a=-1);-1!==a;){const c=t[1];if(ih(o,a,c.data)){const d=Ew(a,t,n,s,r,l);if(d!==zt)return d}u=t[a+8],-1!==u&&oh(r,t[1].data[a+8]===l)&&ih(o,a,t)?(s=c,a=Cr(u),t=_r(u,t)):a=-1}}return i}function Ew(e,t,n,r,i,o){const s=t[1],a=s.data[e+8],c=Yo(a,s,n,null==r?$o(a)&&Du:r!=s&&0!=(3&a.type),i&F.Host&&o===a);return null!==c?_i(t,s,c,a):zt}function Yo(e,t,n,r,i){const o=e.providerIndexes,s=t.data,a=1048575&o,u=e.directiveStart,c=o>>20,f=i?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const g=s[h];if(h<u&&n===g||h>=u&&g.type===n)return h}if(i){const h=s[u];if(h&&Nt(h)&&h.type===n)return u}return null}function _i(e,t,n,r){let i=e[n];const o=t.data;if(function mw(e){return e instanceof vi}(i)){const s=i;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function __(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new T(-200,`Circular dependency in DI detected for ${e}${n}`)}(function Y(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():B(e)}(o[n]));const a=Ko(s.canSeeViewProviders);s.resolving=!0;const u=s.injectImpl?mt(s.injectImpl):null;Uf(e,r,F.Default);try{i=e[n]=s.factory(void 0,o,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pw(e,t,n){const{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=t.type.prototype;if(r){const s=Af(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}i&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,i),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,o))}(n,o[n],t)}finally{null!==u&&mt(u),Ko(a),s.resolving=!1,Wf()}}return i}function ih(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function oh(e,t){return!(e&F.Self||e&F.Host&&t)}class wr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return nh(this._tNode,this._lView,t,r,n)}}function Sw(){return new wr(xe(),_())}function sh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Er="__parameters__";function Sr(e,t,n){return bn(()=>{const r=function bu(e){return function(...n){if(e){const r=e(...n);for(const i in r)this[i]=r[i]}}}(t);function i(...o){if(this instanceof i)return r.apply(this,o),this;const s=new i(...o);return a.annotation=s,a;function a(u,l,c){const d=u.hasOwnProperty(Er)?u[Er]:Object.defineProperty(u,Er,{value:[]})[Er];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),u}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class k{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=V({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ct(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),ct(r,t)):t!==e&&t.push(r)}return t}function an(e,t){e.forEach(n=>Array.isArray(n)?an(n,t):t(n))}function uh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Xo(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function dt(e,t,n){let r=Mr(e,t);return r>=0?e[1|r]=n:(r=~r,function Nw(e,t,n,r){let i=e.length;if(i==t)e.push(n,r);else if(1===i)e.push(r,e[0]),e[0]=n;else{for(i--,e.push(e[i-1],e[i]);i>t;)e[i]=e[i-2],i--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Iu(e,t){const n=Mr(e,t);if(n>=0)return e[1|n]}function Mr(e,t){return function dh(e,t,n){let r=0,i=e.length>>n;for(;i!==r;){const o=r+(i-r>>1),s=e[o<<n];if(t===s)return o<<n;s>t?i=o:r=o+1}return~(i<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Si={},Mu="__NG_DI_FLAG__",ts="ngTempTokenPath",$w=/\n/gm,fh="__source";let Mi;function Tr(e){const t=Mi;return Mi=e,t}function Uw(e,t=F.Default){if(void 0===Mi)throw new T(-203,!1);return null===Mi?wf(e,void 0,t):Mi.get(e,t&F.Optional?null:void 0,t)}function A(e,t=F.Default){return(function x_(){return Ya}()||Uw)(j(e),t)}function Ce(e,t=F.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),A(e,t)}function Tu(e){const t=[];for(let n=0;n<e.length;n++){const r=j(e[n]);if(Array.isArray(r)){if(0===r.length)throw new T(900,!1);let i,o=F.Default;for(let s=0;s<r.length;s++){const a=r[s],u=Hw(a);"number"==typeof u?-1===u?i=a.token:o|=u:i=a}t.push(A(i,o))}else t.push(A(r))}return t}function Ti(e,t){return e[Mu]=t,e.prototype[Mu]=t,e}function Hw(e){return e[Mu]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ai=Ti(Sr("Optional"),8),xi=Ti(Sr("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xu;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ih{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Mn(e){return e instanceof Ih?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const hb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Ee=(()=>((Ee=Ee||{})[Ee.NONE=0]="NONE",Ee[Ee.HTML=1]="HTML",Ee[Ee.STYLE=2]="STYLE",Ee[Ee.SCRIPT=3]="SCRIPT",Ee[Ee.URL=4]="URL",Ee[Ee.RESOURCE_URL=5]="RESOURCE_URL",Ee))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Lu(e){const t=function Fi(){const e=_();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Ee.URL,e)||"":function Pi(e,t){const n=function lb(e){return e instanceof Ih&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Mn(e):function Pu(e){return(e=String(e)).match(hb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(B(e))}const ju=new k("ENVIRONMENT_INITIALIZER"),Ph=new k("INJECTOR",-1),Oh=new k("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fh{get(t,n=Si){if(n===Si){const r=new Error(`NullInjectorError: No provider for ${oe(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Mb(...e){return{\u0275providers:kh(0,e)}}function kh(e,...t){const n=[],r=new Set;let i;return an(t,o=>{const s=o;Vu(s,n,[],r)&&(i||(i=[]),i.push(s))}),void 0!==i&&Lh(i,n),n}function Lh(e,t){for(let n=0;n<e.length;n++){const{providers:i}=e[n];an(i,o=>{t.push(o)})}}function Vu(e,t,n,r){if(!(e=j(e)))return!1;let i=null,o=Cf(e);const s=!o&&te(e);if(o||s){if(s&&!s.standalone)return!1;i=e}else{const u=e.ngModule;if(o=Cf(u),!o)return!1;i=u}const a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){const u="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const l of u)Vu(l,t,n,r)}}else{if(!o)return!1;{if(null!=o.imports&&!a){let l;r.add(i);try{an(o.imports,c=>{Vu(c,t,n,r)&&(l||(l=[]),l.push(c))})}finally{}void 0!==l&&Lh(l,t)}if(!a){const l=Kn(i)||(()=>new i);t.push({provide:i,useFactory:l,deps:X},{provide:Oh,useValue:i,multi:!0},{provide:ju,useValue:()=>A(i),multi:!0})}const u=o.providers;null==u||a||an(u,c=>{t.push(c)})}}return i!==e&&void 0!==e.providers}const Tb=ie({provide:String,useValue:ie});function $u(e){return null!==e&&"object"==typeof e&&Tb in e}function Jn(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Bu=new k("Set Injector scope."),as={},xb={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Uu;function us(){return void 0===Uu&&(Uu=new Fh),Uu}class Tn{}class $h extends Tn{constructor(t,n,r,i){super(),this.parent=n,this.source=r,this.scopes=i,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,zu(t,s=>this.processProvider(s)),this.records.set(Ph,Rr(void 0,this)),i.has("environment")&&this.records.set(Tn,Rr(void 0,this));const o=this.records.get(Bu);null!=o&&"string"==typeof o.value&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Oh.multi,X,F.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=Tr(this),r=mt(void 0);try{return t()}finally{Tr(n),mt(r)}}get(t,n=Si,r=F.Default){this.assertNotDestroyed();const i=Tr(this),o=mt(void 0);try{if(!(r&F.SkipSelf)){let a=this.records.get(t);if(void 0===a){const u=function Fb(e){return"function"==typeof e||"object"==typeof e&&e instanceof k}(t)&&Oo(t);a=u&&this.injectableDefInScope(u)?Rr(Hu(t),as):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&F.Self?us():this.parent).get(t,n=r&F.Optional&&n===Si?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[ts]=s[ts]||[]).unshift(oe(t)),i)throw s;return function zw(e,t,n,r){const i=e[ts];throw t[fh]&&i.unshift(t[fh]),e.message=function Gw(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let i=oe(t);if(Array.isArray(t))i=t.map(oe).join(" -> ");else if("object"==typeof t){let o=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];o.push(s+":"+("string"==typeof a?JSON.stringify(a):oe(a)))}i=`{${o.join(", ")}}`}return`${n}${r?"("+r+")":""}[${i}]: ${e.replace($w,"\n  ")}`}("\n"+e.message,i,n,r),e.ngTokenPath=i,e[ts]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{mt(o),Tr(i)}}resolveInjectorInitializers(){const t=Tr(this),n=mt(void 0);try{const r=this.get(ju.multi,X,F.Self);for(const i of r)i()}finally{Tr(t),mt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(oe(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new T(205,!1)}processProvider(t){let n=Jn(t=j(t))?t:j(t&&t.provide);const r=function Nb(e){return $u(e)?Rr(void 0,e.useValue):Rr(function Bh(e,t,n){let r;if(Jn(e)){const i=j(e);return Kn(i)||Hu(i)}if($u(e))r=()=>j(e.useValue);else if(function Vh(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Tu(e.deps||[]));else if(function jh(e){return!(!e||!e.useExisting)}(e))r=()=>A(j(e.useExisting));else{const i=j(e&&(e.useClass||e.provide));if(!function Pb(e){return!!e.deps}(e))return Kn(i)||Hu(i);r=()=>new i(...Tu(e.deps))}return r}(e),as)}(t);if(Jn(t)||!0!==t.multi)this.records.get(n);else{let i=this.records.get(n);i||(i=Rr(void 0,as,!0),i.factory=()=>Tu(i.multi),this.records.set(n,i)),n=t,i.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===as&&(n.value=xb,n.value=n.factory()),"object"==typeof n.value&&n.value&&function Ob(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=j(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Hu(e){const t=Oo(e),n=null!==t?t.factory:Kn(e);if(null!==n)return n;if(e instanceof k)throw new T(204,!1);if(e instanceof Function)return function Rb(e){const t=e.length;if(t>0)throw function Ii(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new T(204,!1);const n=function M_(e){const t=e&&(e[Fo]||e[_f]);if(t){const n=function T_(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new T(204,!1)}function Rr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function kb(e){return!!e.\u0275providers}function zu(e,t){for(const n of e)Array.isArray(n)?zu(n,t):kb(n)?zu(n.\u0275providers,t):t(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Uh{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Vb{resolveComponentFactory(t){throw function jb(e){const t=Error(`No component factory found for ${oe(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let ki=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new Vb,e})();function $b(){return Nr(xe(),_())}function Nr(e,t){return new An(Dt(e,t))}let An=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=$b,e})();function Bb(e){return e instanceof An?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zh{}let ls=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function Ub(){const e=_(),n=lt(xe().index,e);return(tt(n)?n:e)[G]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),Hb=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=V({token:e,providedIn:"root",factory:()=>null}),e})();class cs{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const zb=new cs("14.2.2"),Gu={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zu(e){return e.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Pr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&Zu(t);for(;n&&Zu(n);)n=Zu(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ju=new Map;let nE=0;const Xu="__ngContext__";function Be(e,t){tt(t)?(e[Xu]=t[20],function iE(e){Ju.set(e[20],e)}(t)):e[Xu]=t}function ln(e){return e instanceof Function?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var nt=(()=>((nt=nt||{})[nt.Important=1]="Important",nt[nt.DashCase=2]="DashCase",nt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function tl(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ji(e){const t=e[3];return Rt(t)?t[3]:t}function nl(e){return ip(e[13])}function rl(e){return ip(e[4])}function ip(e){for(;null!==e&&!Rt(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fr(e,t,n,r,i){if(null!=r){let o,s=!1;Rt(r)?o=r:tt(r)&&(s=!0,r=r[0]);const a=be(r);0===e&&null!==n?null==i?cp(t,n,a):Yn(t,n,a,i||null,!0):1===e&&null!==n?Yn(t,n,a,i||null,!0):2===e?function yp(e,t,n){const r=ds(e,t);r&&function RE(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=o&&function OE(e,t,n,r,i){const o=n[7];o!==be(n)&&Fr(t,e,r,o,i);for(let a=10;a<n.length;a++){const u=n[a];Vi(u[1],u,e,t,r,o)}}(t,e,o,n,i)}}function ol(e,t,n){return e.createElement(t,n)}function sp(e,t){const n=e[9],r=n.indexOf(t),i=t[3];512&t[2]&&(t[2]&=-513,lu(i,-1)),n.splice(r,1)}function sl(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const i=r[17];null!==i&&i!==e&&sp(i,r),t>0&&(e[n-1][4]=r[4]);const o=Xo(e,10+t);!function bE(e,t){Vi(e,t,t[G],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=o[19];null!==s&&s.detachView(o[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function ap(e,t){if(!(128&t[2])){const n=t[G];n.destroyNode&&Vi(e,t,n,3,null,null),function SE(e){let t=e[13];if(!t)return al(e[1],e);for(;t;){let n=null;if(tt(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)tt(t)&&al(t[1],t),t=t[3];null===t&&(t=e),tt(t)&&al(t[1],t),n=t&&t[4]}t=n}}(t)}}function al(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function xE(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const i=t[n[r]];if(!(i instanceof vi)){const o=n[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){const a=i[o[s]],u=o[s+1];try{u.call(a)}finally{}}else try{o.call(i)}finally{}}}}(e,t),function AE(e,t){const n=e.cleanup,r=t[7];let i=-1;if(null!==n)for(let o=0;o<n.length-1;o+=2)if("string"==typeof n[o]){const s=n[o+1],a="function"==typeof s?s(t):be(t[s]),u=r[i=n[o+2]],l=n[o+3];"boolean"==typeof l?a.removeEventListener(n[o],u,l):l>=0?r[i=l]():r[i=-l].unsubscribe(),o+=2}else{const s=r[i=n[o+1]];n[o].call(s)}if(null!==r){for(let o=i+1;o<r.length;o++)(0,r[o])();t[7]=null}}(e,t),1===t[1].type&&t[G].destroy();const n=t[17];if(null!==n&&Rt(t[3])){n!==t[3]&&sp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function oE(e){Ju.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function up(e,t,n){return function lp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const i=e.data[r.directiveStart].encapsulation;if(i===Bt.None||i===Bt.Emulated)return null}return Dt(r,n)}(e,t.parent,n)}function Yn(e,t,n,r,i){e.insertBefore(t,n,r,i)}function cp(e,t,n){e.appendChild(t,n)}function dp(e,t,n,r,i){null!==r?Yn(e,t,n,r,i):cp(e,t,n)}function ds(e,t){return e.parentNode(t)}let pp=function hp(e,t,n){return 40&e.type?Dt(e,n):null};function fs(e,t,n,r){const i=up(e,r,t),o=t[G],a=function fp(e,t,n){return pp(e,t,n)}(r.parent||t[6],r,t);if(null!=i)if(Array.isArray(n))for(let u=0;u<n.length;u++)dp(o,i,n[u],a,!1);else dp(o,i,n,a,!1)}function hs(e,t){if(null!==t){const n=t.type;if(3&n)return Dt(t,e);if(4&n)return ll(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return hs(e,r);{const i=e[t.index];return Rt(i)?ll(-1,i):be(i)}}if(32&n)return tl(t,e)()||be(e[t.index]);{const r=mp(e,t);return null!==r?Array.isArray(r)?r[0]:hs(ji(e[16]),r):hs(e,t.next)}}return null}function mp(e,t){return null!==t?e[16][6].projection[t.projection]:null}function ll(e,t){const n=10+e+1;if(n<t.length){const r=t[n],i=r[1].firstChild;if(null!==i)return hs(r,i)}return t[7]}function cl(e,t,n,r,i,o,s){for(;null!=n;){const a=r[n.index],u=n.type;if(s&&0===t&&(a&&Be(be(a),r),n.flags|=4),64!=(64&n.flags))if(8&u)cl(e,t,n.child,r,i,o,!1),Fr(t,e,i,a,o);else if(32&u){const l=tl(n,r);let c;for(;c=l();)Fr(t,e,i,c,o);Fr(t,e,i,a,o)}else 16&u?vp(e,t,r,n,i,o):Fr(t,e,i,a,o);n=s?n.projectionNext:n.next}}function Vi(e,t,n,r,i,o){cl(n,r,e.firstChild,t,i,o,!1)}function vp(e,t,n,r,i,o){const s=n[16],u=s[6].projection[r.projection];if(Array.isArray(u))for(let l=0;l<u.length;l++)Fr(t,e,i,u[l],o);else cl(e,t,u,s[3],i,o,!0)}function Dp(e,t,n){e.setAttribute(t,"style",n)}function dl(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cp(e,t,n){let r=e.length;for(;;){const i=e.indexOf(t,n);if(-1===i)return i;if(0===i||e.charCodeAt(i-1)<=32){const o=t.length;if(i+o===r||e.charCodeAt(i+o)<=32)return i}n=i+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _p="ng-template";function kE(e,t,n){let r=0;for(;r<e.length;){let i=e[r++];if(n&&"class"===i){if(i=e[r],-1!==Cp(i.toLowerCase(),t,0))return!0}else if(1===i){for(;r<e.length&&"string"==typeof(i=e[r++]);)if(i.toLowerCase()===t)return!0;return!1}}return!1}function wp(e){return 4===e.type&&e.value!==_p}function LE(e,t,n){return t===(4!==e.type||n?e.value:_p)}function jE(e,t,n){let r=4;const i=e.attrs||[],o=function BE(e){for(let t=0;t<e.length;t++)if(Qf(e[t]))return t;return e.length}(i);let s=!1;for(let a=0;a<t.length;a++){const u=t[a];if("number"!=typeof u){if(!s)if(4&r){if(r=2|1&r,""!==u&&!LE(e,u,n)||""===u&&1===t.length){if(Pt(r))return!1;s=!0}}else{const l=8&r?u:t[++a];if(8&r&&null!==e.attrs){if(!kE(e.attrs,l,n)){if(Pt(r))return!1;s=!0}continue}const d=VE(8&r?"class":u,i,wp(e),n);if(-1===d){if(Pt(r))return!1;s=!0;continue}if(""!==l){let f;f=d>o?"":i[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==Cp(h,l,0)||2&r&&l!==f){if(Pt(r))return!1;s=!0}}}}else{if(!s&&!Pt(r)&&!Pt(u))return!1;if(s&&Pt(u))continue;s=!1,r=u|1&r}}return Pt(r)||s}function Pt(e){return 0==(1&e)}function VE(e,t,n,r){if(null===t)return-1;let i=0;if(r||!n){let o=!1;for(;i<t.length;){const s=t[i];if(s===e)return i;if(3===s||6===s)o=!0;else{if(1===s||2===s){let a=t[++i];for(;"string"==typeof a;)a=t[++i];continue}if(4===s)break;if(0===s){i+=4;continue}}i+=o?1:2}return-1}return function UE(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function bp(e,t,n=!1){for(let r=0;r<t.length;r++)if(jE(e,t[r],n))return!0;return!1}function Ep(e,t){return e?":not("+t.trim()+")":t}function zE(e){let t=e[0],n=1,r=2,i="",o=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?i+="."+s:4&r&&(i+=" "+s);else""!==i&&!Pt(s)&&(t+=Ep(o,i),i=""),r=s,o=o||!Pt(r);n++}return""!==i&&(t+=Ep(o,i)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const U={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function x(e){Ip(K(),_(),Qe()+e,!1)}function Ip(e,t,n,r){if(!r)if(3==(3&t[2])){const o=e.preOrderCheckHooks;null!==o&&Go(t,o,n)}else{const o=e.preOrderHooks;null!==o&&Wo(t,o,0,n)}In(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ap(e,t=null,n=null,r){const i=xp(e,t,n,r);return i.resolveInjectorInitializers(),i}function xp(e,t=null,n=null,r,i=new Set){const o=[n||X,Mb(e)];return r=r||("object"==typeof e?void 0:oe(e)),new $h(o,t||us(),r||null,i)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let Ct=(()=>{class e{static create(n,r){if(Array.isArray(n))return Ap({name:""},r,n,"");{const i=n.name??"";return Ap({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Si,e.NULL=new Fh,e.\u0275prov=V({token:e,providedIn:"any",factory:()=>A(Ph)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function M(e,t=F.Default){const n=_();return null===n?A(e,t):nh(xe(),n,j(e),t)}function ml(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gs(e,t){return e<<17|t<<2}function Ot(e){return e>>17&32767}function yl(e){return 2|e}function cn(e){return(131068&e)>>2}function vl(e,t){return-131069&e|t<<2}function Dl(e){return 1|e}function qp(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const i=n[r],o=n[r+1];if(-1!==o){const s=e.data[o];pu(i),s.contentQueries(2,t[o],o)}}}function vs(e,t,n,r,i,o,s,a,u,l,c){const d=t.blueprint.slice();return d[0]=i,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),Nf(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[G]=a||e&&e[G],d[12]=u||e&&e[12]||null,d[9]=l||e&&e[9]||null,d[6]=o,d[20]=function rE(){return nE++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function Lr(e,t,n,r,i){let o=e.data[t];if(null===o)o=function Ml(e,t,n,r,i){const o=Lf(),s=cu(),u=e.data[t]=function M0(e,t,n,r,i,o){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:i,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?o:o&&o.parent,n,t,r,i);return null===e.firstChild&&(e.firstChild=u),null!==o&&(s?null==o.child&&null!==u.parent&&(o.child=u):null===o.next&&(o.next=u)),u}(e,t,n,r,i),function rw(){return $.lFrame.inI18n}()&&(o.flags|=64);else if(64&o.type){o.type=n,o.value=r,o.attrs=i;const s=function yi(){const e=$.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();o.injectorIndex=null===s?-1:s.injectorIndex}return Ht(o,!0),o}function jr(e,t,n,r){if(0===n)return-1;const i=t.length;for(let o=0;o<n;o++)t.push(r),e.blueprint.push(r),e.data.push(null);return i}function Tl(e,t,n){gu(t);try{const r=e.viewQuery;null!==r&&kl(1,r,n);const i=e.template;null!==i&&Qp(e,t,i,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&qp(e,t),e.staticViewQueries&&kl(2,e.viewQuery,n);const o=e.components;null!==o&&function E0(e,t){for(let n=0;n<t.length;n++)H0(e,t[n])}(t,o)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,mu()}}function Ds(e,t,n,r){const i=t[2];if(128!=(128&i)){gu(t);try{Nf(t),function Vf(e){return $.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Qp(e,t,n,2,r);const s=3==(3&i);if(s){const l=e.preOrderCheckHooks;null!==l&&Go(t,l,null)}else{const l=e.preOrderHooks;null!==l&&Wo(t,l,0,null),yu(t,0)}if(function B0(e){for(let t=nl(e);null!==t;t=rl(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const i=n[r],o=i[3];0==(512&i[2])&&lu(o,1),i[2]|=512}}}(t),function $0(e){for(let t=nl(e);null!==t;t=rl(t))for(let n=10;n<t.length;n++){const r=t[n],i=r[1];Ho(r)&&Ds(i,r,i.template,r[8])}}(t),null!==e.contentQueries&&qp(e,t),s){const l=e.contentCheckHooks;null!==l&&Go(t,l)}else{const l=e.contentHooks;null!==l&&Wo(t,l,1),yu(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function w0(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const i=n[r];if(i<0)In(~i);else{const o=i,s=n[++r],a=n[++r];iw(s,o),a(2,t[o])}}}finally{In(-1)}}(e,t);const a=e.components;null!==a&&function b0(e,t){for(let n=0;n<t.length;n++)U0(e,t[n])}(t,a);const u=e.viewQuery;if(null!==u&&kl(2,u,r),s){const l=e.viewCheckHooks;null!==l&&Go(t,l)}else{const l=e.viewHooks;null!==l&&Wo(t,l,2),yu(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,lu(t[3],-1))}finally{mu()}}}function Qp(e,t,n,r,i){const o=Qe(),s=2&r;try{In(-1),s&&t.length>22&&Ip(e,t,22,!1),n(r,i)}finally{In(o)}}function Kp(e,t,n){if(ru(t)){const i=t.directiveEnd;for(let o=t.directiveStart;o<i;o++){const s=e.data[o];s.contentQueries&&s.contentQueries(1,n[o],o)}}}function Al(e,t,n){!Of()||(function N0(e,t,n,r){const i=n.directiveStart,o=n.directiveEnd;e.firstCreatePass||Ci(n,t),Be(r,t);const s=n.initialInputs;for(let a=i;a<o;a++){const u=e.data[a],l=Nt(u);l&&L0(t,n,u);const c=_i(t,e,a,n);Be(c,t),null!==s&&j0(0,a-i,c,u,0,s),l&&(lt(n.index,t)[8]=c)}}(e,t,n,Dt(n,t)),128==(128&n.flags)&&function P0(e,t,n){const r=n.directiveStart,i=n.directiveEnd,o=n.index,s=function ow(){return $.lFrame.currentDirectiveIndex}();try{In(o);for(let a=r;a<i;a++){const u=e.data[a],l=t[a];fu(a),(null!==u.hostBindings||0!==u.hostVars||null!==u.hostAttrs)&&ng(u,l)}}finally{In(-1),fu(s)}}(e,t,n))}function xl(e,t,n=Dt){const r=t.localNames;if(null!==r){let i=t.index+1;for(let o=0;o<r.length;o+=2){const s=r[o+1],a=-1===s?n(t,e):e[s];e[i++]=a}}}function Zp(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Rl(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Rl(e,t,n,r,i,o,s,a,u,l){const c=22+r,d=c+i,f=function I0(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:U);return n}(c,d),h="function"==typeof l?l():l;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:u,consts:h,incompleteFirstPass:!1}}function Jp(e,t,n,r){const i=ag(t);null===n?i.push(r):(i.push(n),e.firstCreatePass&&ug(e).push(r,i.length-1))}function Yp(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const i=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,i):n[r]=[t,i]}return n}function Xp(e,t){const r=t.directiveEnd,i=e.data,o=t.attrs,s=[];let a=null,u=null;for(let l=t.directiveStart;l<r;l++){const c=i[l],d=c.inputs,f=null===o||wp(t)?null:V0(d,o);s.push(f),a=Yp(d,l,a),u=Yp(c.outputs,l,u)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=u}function eg(e,t){const n=lt(t,e);16&n[2]||(n[2]|=32)}function Nl(e,t,n,r){let i=!1;if(Of()){const o=function O0(e,t,n){const r=e.directiveRegistry;let i=null;if(r)for(let o=0;o<r.length;o++){const s=r[o];bp(n,s.selectors,!1)&&(i||(i=[]),Jo(Ci(n,t),e,s.type),Nt(s)?(rg(e,n),i.unshift(s)):i.push(s))}return i}(e,t,n),s=null===r?null:{"":-1};if(null!==o){i=!0,ig(n,e.data.length,o.length);for(let c=0;c<o.length;c++){const d=o[c];d.providersResolver&&d.providersResolver(d)}let a=!1,u=!1,l=jr(e,t,o.length,null);for(let c=0;c<o.length;c++){const d=o[c];n.mergedAttrs=Qo(n.mergedAttrs,d.hostAttrs),og(e,n,t,l,d),k0(l,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!u&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),u=!0),l++}Xp(e,n)}s&&function F0(e,t,n){if(t){const r=e.localNames=[];for(let i=0;i<t.length;i+=2){const o=n[t[i+1]];if(null==o)throw new T(-301,!1);r.push(t[i],o)}}}(n,r,s)}return n.mergedAttrs=Qo(n.mergedAttrs,n.attrs),i}function tg(e,t,n,r,i,o){const s=o.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const u=~t.index;(function R0(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=u&&a.push(u),a.push(r,i,s)}}function ng(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function rg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function k0(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Nt(t)&&(n[""]=e)}}function ig(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function og(e,t,n,r,i){e.data[r]=i;const o=i.factory||(i.factory=Kn(i.type)),s=new vi(o,Nt(i),M);e.blueprint[r]=s,n[r]=s,tg(e,t,0,r,jr(e,n,i.hostVars,U),i)}function L0(e,t,n){const r=Dt(t,e),i=Zp(n),o=e[10],s=Cs(e,vs(e,i,null,n.onPush?32:16,r,t,o,o.createRenderer(r,n),null,null,null));e[t.index]=s}function Gt(e,t,n,r,i,o){const s=Dt(e,t);!function Pl(e,t,n,r,i,o,s){if(null==o)e.removeAttribute(t,i,n);else{const a=null==s?B(o):s(o,r||"",i);e.setAttribute(t,i,a,n)}}(t[G],s,o,e.value,n,r,i)}function j0(e,t,n,r,i,o){const s=o[t];if(null!==s){const a=r.setInput;for(let u=0;u<s.length;){const l=s[u++],c=s[u++],d=s[u++];null!==a?r.setInput(n,d,l,c):n[c]=d}}}function V0(e,t){let n=null,r=0;for(;r<t.length;){const i=t[r];if(0!==i)if(5!==i){if("number"==typeof i)break;e.hasOwnProperty(i)&&(null===n&&(n=[]),n.push(i,e[i],t[r+1])),r+=2}else r+=2;else r+=4}return n}function sg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function U0(e,t){const n=lt(t,e);if(Ho(n)){const r=n[1];48&n[2]?Ds(r,n,r.template,n[8]):n[5]>0&&Ol(n)}}function Ol(e){for(let r=nl(e);null!==r;r=rl(r))for(let i=10;i<r.length;i++){const o=r[i];if(Ho(o))if(512&o[2]){const s=o[1];Ds(s,o,s.template,o[8])}else o[5]>0&&Ol(o)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const i=lt(n[r],e);Ho(i)&&i[5]>0&&Ol(i)}}function H0(e,t){const n=lt(t,e),r=n[1];(function z0(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Tl(r,n,n[8])}function Cs(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Fl(e){for(;e;){e[2]|=32;const t=ji(e);if(L_(e)&&!t)return e;e=t}return null}function _s(e,t,n,r=!0){const i=t[10];i.begin&&i.begin();try{Ds(e,t,e.template,n)}catch(s){throw r&&cg(t,s),s}finally{i.end&&i.end()}}function kl(e,t,n){pu(0),t(e,n)}function ag(e){return e[7]||(e[7]=[])}function ug(e){return e.cleanup||(e.cleanup=[])}function cg(e,t){const n=e[9],r=n?n.get(Pr,null):null;r&&r.handleError(t)}function Ll(e,t,n,r,i){for(let o=0;o<n.length;){const s=n[o++],a=n[o++],u=t[s],l=e.data[s];null!==l.setInput?l.setInput(u,i,r,a):u[a]=i}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ws(e,t,n){let r=n?e.styles:null,i=n?e.classes:null,o=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?o=a:1==o?i=Qa(i,a):2==o&&(r=Qa(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=i:e.classesWithoutHost=i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bs(e,t,n,r,i=!1){for(;null!==n;){const o=t[n.index];if(null!==o&&r.push(be(o)),Rt(o))for(let a=10;a<o.length;a++){const u=o[a],l=u[1].firstChild;null!==l&&bs(u[1],u,l,r)}const s=n.type;if(8&s)bs(e,t,n.child,r);else if(32&s){const a=tl(n,t);let u;for(;u=a();)r.push(u)}else if(16&s){const a=mp(t,n);if(Array.isArray(a))r.push(...a);else{const u=ji(t[16]);bs(u[1],u,a,r,!0)}}n=i?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $i{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return bs(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Rt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(sl(t,r),Xo(n,r))}this._attachedToViewContainer=!1}ap(this._lView[1],this._lView)}onDestroy(t){Jp(this._lView[1],this._lView,null,t)}markForCheck(){Fl(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){_s(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new T(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function IE(e,t){Vi(e,t,t[G],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new T(902,!1);this._appRef=t}}class G0 extends $i{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;_s(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jl extends ki{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=te(t);return new Bi(n,this.ngModule)}}function dg(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class q0{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const i=this.injector.get(t,Gu,r);return i!==Gu||n===Gu?i:this.parentInjector.get(t,n,r)}}class Bi extends Uh{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function GE(e){return e.map(zE).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return dg(this.componentDef.inputs)}get outputs(){return dg(this.componentDef.outputs)}create(t,n,r,i){let o=(i=i||this.ngModule)instanceof Tn?i:i?.injector;o&&null!==this.componentDef.getStandaloneInjector&&(o=this.componentDef.getStandaloneInjector(o)||o);const s=o?new q0(t,o):t,a=s.get(zh,null);if(null===a)throw new T(407,!1);const u=s.get(Hb,null),l=a.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",d=r?function S0(e,t,n){return e.selectRootElement(t,n===Bt.ShadowDom)}(l,r,this.componentDef.encapsulation):ol(a.createRenderer(null,this.componentDef),c,function W0(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(c)),f=this.componentDef.onPush?288:272,h=Rl(0,null,null,1,0,null,null,null,null,null),g=vs(null,h,null,f,null,null,a,l,u,s,null);let v,C;gu(g);try{const w=function Z0(e,t,n,r,i,o){const s=n[1];n[22]=e;const u=Lr(s,22,2,"#host",null),l=u.mergedAttrs=t.hostAttrs;null!==l&&(ws(u,l,!0),null!==e&&(qo(i,e,l),null!==u.classes&&dl(i,e,u.classes),null!==u.styles&&Dp(i,e,u.styles)));const c=r.createRenderer(e,t),d=vs(n,Zp(t),null,t.onPush?32:16,n[22],u,r,c,o||null,null,null);return s.firstCreatePass&&(Jo(Ci(u,n),s,t.type),rg(s,u),ig(u,n.length,1)),Cs(n,d),n[22]=d}(d,this.componentDef,g,a,l);if(d)if(r)qo(l,d,["ng-version",zb.full]);else{const{attrs:E,classes:D}=function WE(e){const t=[],n=[];let r=1,i=2;for(;r<e.length;){let o=e[r];if("string"==typeof o)2===i?""!==o&&t.push(o,e[++r]):8===i&&n.push(o);else{if(!Pt(i))break;i=o}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);E&&qo(l,d,E),D&&D.length>0&&dl(l,d,D.join(" "))}if(C=uu(h,22),void 0!==n){const E=C.projection=[];for(let D=0;D<this.ngContentSelectors.length;D++){const N=n[D];E.push(null!=N?Array.from(N):null)}}v=function J0(e,t,n,r){const i=n[1],o=function x0(e,t,n){const r=xe();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),og(e,r,t,jr(e,t,1,null),n),Xp(e,r));const i=_i(t,e,r.directiveStart,r);Be(i,t);const o=Dt(r,t);return o&&Be(o,t),i}(i,n,t);if(e[8]=n[8]=o,null!==r)for(const a of r)a(o,t);if(t.contentQueries){const a=xe();t.contentQueries(1,o,a.directiveStart)}const s=xe();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(In(s.index),tg(n[1],s,0,s.directiveStart,s.directiveEnd,t),ng(t,o)),o}(w,this.componentDef,g,[Y0]),Tl(h,g,null)}finally{mu()}return new K0(this.componentType,v,Nr(C,g),g,C)}}class K0 extends class Lb{}{constructor(t,n,r,i,o){super(),this.location=r,this._rootLView=i,this._tNode=o,this.instance=n,this.hostView=this.changeDetectorRef=new G0(i),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let i;if(null!==r&&(i=r[t])){const o=this._rootLView;Ll(o[1],o,i,t,n),eg(o,this._tNode.index)}}get injector(){return new wr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function Y0(){const e=xe();zo(_()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Es=null;function Xn(){if(!Es){const e=se.Symbol;if(e&&e.iterator)Es=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Es=r)}}}return Es}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ui(e){return!!$l(e)&&(Array.isArray(e)||!(e instanceof Map)&&Xn()in e)}function $l(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ue(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ss(e,t,n,r){const i=_();return Ue(i,Dr(),t)&&(K(),Gt(ve(),i,e,t,n,r)),Ss}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $r(e,t,n,r){return Ue(e,Dr(),n)?t+B(n)+r:U}function _e(e,t,n,r,i,o,s,a){const u=_(),l=K(),c=e+22,d=l.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function cI(e,t,n,r,i,o,s,a,u){const l=t.consts,c=Lr(t,e,4,s||null,En(l,a));Nl(t,n,c,En(l,u)),zo(t,c);const d=c.tViews=Rl(2,c,r,i,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,l,u,t,n,r,i,o,s):l.data[c];Ht(d,!1);const f=u[G].createComment("");fs(l,u,f,d),Be(f,u),Cs(u,u[c]=sg(f,u,f,d)),Bo(d)&&Al(l,u,d),null!=s&&xl(u,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ae(e,t,n){const r=_();return Ue(r,Dr(),t)&&function ft(e,t,n,r,i,o,s,a){const u=Dt(t,n);let c,l=t.inputs;!a&&null!=l&&(c=l[r])?(Ll(e,n,c,r,i),$o(t)&&eg(n,t.index)):3&t.type&&(r=function T0(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),i=null!=s?s(i,t.value||"",r):i,o.setProperty(u,r,i))}(K(),ve(),r,e,t,r[G],n,!1),ae}function Bl(e,t,n,r,i){const s=i?"class":"style";Ll(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function y(e,t,n,r){const i=_(),o=K(),s=22+e,a=i[G],u=i[s]=ol(a,t,function hw(){return $.lFrame.currentNamespace}()),l=o.firstCreatePass?function fI(e,t,n,r,i,o,s){const a=t.consts,l=Lr(t,e,2,i,En(a,o));return Nl(t,n,l,En(a,s)),null!==l.attrs&&ws(l,l.attrs,!1),null!==l.mergedAttrs&&ws(l,l.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,l),l}(s,o,i,0,t,n,r):o.data[s];Ht(l,!0);const c=l.mergedAttrs;null!==c&&qo(a,u,c);const d=l.classes;null!==d&&dl(a,u,d);const f=l.styles;return null!==f&&Dp(a,u,f),64!=(64&l.flags)&&fs(o,i,u,l),0===function J_(){return $.lFrame.elementDepthCount}()&&Be(u,i),function Y_(){$.lFrame.elementDepthCount++}(),Bo(l)&&(Al(o,i,l),Kp(o,l,i)),null!==r&&xl(i,l),y}function p(){let e=xe();cu()?du():(e=e.parent,Ht(e,!1));const t=e;!function X_(){$.lFrame.elementDepthCount--}();const n=K();return n.firstCreatePass&&(zo(n,e),ru(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function vw(e){return 0!=(16&e.flags)}(t)&&Bl(n,t,_(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function Dw(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&Bl(n,t,_(),t.stylesWithoutHost,!1),p}function b(e,t,n,r){return y(e,t,n,r),p(),b
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Ms(e,t,n){const r=_(),i=K(),o=e+22,s=i.firstCreatePass?function hI(e,t,n,r,i){const o=t.consts,s=En(o,r),a=Lr(t,e,8,"ng-container",s);return null!==s&&ws(a,s,!0),Nl(t,n,a,En(o,i)),null!==t.queries&&t.queries.elementStart(t,a),a}(o,i,r,t,n):i.data[o];Ht(s,!0);const a=r[o]=r[G].createComment("");return fs(i,r,a,s),Be(a,r),Bo(s)&&(Al(i,r,s),Kp(i,s,r)),null!=n&&xl(r,s),Ms}function Ts(){let e=xe();const t=K();return cu()?du():(e=e.parent,Ht(e,!1)),t.firstCreatePass&&(zo(t,e),ru(e)&&t.queries.elementEnd(e)),Ts}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function As(e){return!!e&&"function"==typeof e.then}function Sg(e){return!!e&&"function"==typeof e.subscribe}const Mg=Sg;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ht(e,t,n,r){const i=_(),o=K(),s=xe();return function Ag(e,t,n,r,i,o,s,a){const u=Bo(r),c=e.firstCreatePass&&ug(e),d=t[8],f=ag(t);let h=!0;if(3&r.type||a){const C=Dt(r,t),w=a?a(C):C,E=f.length,D=a?Z=>a(be(Z[r.index])):r.index;let N=null;if(!a&&u&&(N=function pI(e,t,n,r){const i=e.cleanup;if(null!=i)for(let o=0;o<i.length-1;o+=2){const s=i[o];if(s===n&&i[o+1]===r){const a=t[7],u=i[o+2];return a.length>u?a[u]:null}"string"==typeof s&&(o+=2)}return null}(e,t,i,r.index)),null!==N)(N.__ngLastListenerFn__||N).__ngNextListenerFn__=o,N.__ngLastListenerFn__=o,h=!1;else{o=Rg(r,t,d,o,!1);const Z=n.listen(w,i,o);f.push(o,Z),c&&c.push(i,D,E,E+1)}}else o=Rg(r,t,d,o,!1);const g=r.outputs;let v;if(h&&null!==g&&(v=g[i])){const C=v.length;if(C)for(let w=0;w<C;w+=2){const ge=t[v[w]][v[w+1]].subscribe(o),cr=f.length;f.push(o,ge),c&&c.push(i,r.index,cr,-(cr+1))}}}(o,i,i[G],s,e,t,0,r),ht}function xg(e,t,n,r){try{return!1!==n(r)}catch(i){return cg(e,i),!1}}function Rg(e,t,n,r,i){return function o(s){if(s===Function)return r;Fl(2&e.flags?lt(e.index,t):t);let u=xg(t,0,r,s),l=o.__ngNextListenerFn__;for(;l;)u=xg(t,0,l,s)&&u,l=l.__ngNextListenerFn__;return i&&!1===u&&(s.preventDefault(),s.returnValue=!1),u}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fn(e=1){return function aw(e){return($.lFrame.contextLView=function uw(e,t){for(;e>0;)t=t[15],e--;return t}(e,$.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bg(e,t,n,r,i){const o=e[n+1],s=null===t;let a=r?Ot(o):cn(o),u=!1;for(;0!==a&&(!1===u||s);){const c=e[a+1];CI(e[a],t)&&(u=!0,e[a+1]=r?Dl(c):yl(c)),a=r?Ot(c):cn(c)}u&&(e[n+1]=r?yl(o):Dl(o))}function CI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Mr(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ne={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Ug(e){return e.substring(Ne.key,Ne.keyEnd)}function _I(e){return e.substring(Ne.value,Ne.valueEnd)}function zg(e,t){const n=Ne.textEnd;let r=Ne.key=Qr(e,t,n);return n===r?-1:(r=Ne.keyEnd=function II(e,t,n){let r;for(;t<n&&(45===(r=e.charCodeAt(t))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)t++;return t}(e,r,n),r=Wg(e,r,n),r=Ne.value=Qr(e,r,n),r=Ne.valueEnd=function SI(e,t,n){let r=-1,i=-1,o=-1,s=t,a=s;for(;s<n;){const u=e.charCodeAt(s++);if(59===u)return a;34===u||39===u?a=s=qg(e,u,s,n):t===s-4&&85===o&&82===i&&76===r&&40===u?a=s=qg(e,41,s,n):u>32&&(a=s),o=i,i=r,r=-33&u}return a}(e,r,n),Wg(e,r,n))}function Qr(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function Wg(e,t,n,r){return(t=Qr(e,t,n))<n&&t++,t}function qg(e,t,n,r){let i=-1,o=n;for(;o<r;){const s=e.charCodeAt(o++);if(s==t&&92!==i)return o;i=92==s&&92===i?0:s}throw new Error}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function zi(e,t,n){return function Ft(e,t,n,r){const i=_(),o=K(),s=sn(2);o.firstUpdatePass&&Zg(o,e,s,r),t!==U&&Ue(i,s,t)&&Yg(o,o.data[Qe()],i,i[G],e,i[s+1]=function FI(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=oe(Mn(e)))),e}(t,n),r,s)}(e,t,n,!1),zi}function qt(e){!function kt(e,t,n,r){const i=K(),o=sn(2);i.firstUpdatePass&&Zg(i,null,o,r);const s=_();if(n!==U&&Ue(s,o,n)){const a=i.data[Qe()];if(em(a,r)&&!Kg(i,o)){let u=r?a.classesWithoutHost:a.stylesWithoutHost;null!==u&&(n=Qa(u,n||"")),Bl(i,a,s,n,r)}else!function OI(e,t,n,r,i,o,s,a){i===U&&(i=X);let u=0,l=0,c=0<i.length?i[0]:null,d=0<o.length?o[0]:null;for(;null!==c||null!==d;){const f=u<i.length?i[u+1]:void 0,h=l<o.length?o[l+1]:void 0;let v,g=null;c===d?(u+=2,l+=2,f!==h&&(g=d,v=h)):null===d||null!==c&&c<d?(u+=2,g=c):(l+=2,g=d,v=h),null!==g&&Yg(e,t,n,r,g,v,s,a),c=u<i.length?i[u]:null,d=l<o.length?o[l]:null}}(i,a,s,s[G],s[o+1],s[o+1]=function PI(e,t,n){if(null==n||""===n)return X;const r=[],i=Mn(n);if(Array.isArray(i))for(let o=0;o<i.length;o++)e(r,i[o],!0);else if("object"==typeof i)for(const o in i)i.hasOwnProperty(o)&&e(r,o,i[o]);else"string"==typeof i&&t(r,i);return r}(e,t,n),r,o)}}(Jg,MI,e,!1)}function MI(e,t){for(let n=function bI(e){return function Gg(e){Ne.key=0,Ne.keyEnd=0,Ne.value=0,Ne.valueEnd=0,Ne.textEnd=e.length}(e),zg(e,Qr(e,0,Ne.textEnd))}(t);n>=0;n=zg(t,n))Jg(e,Ug(t),_I(t))}function Kg(e,t){return t>=e.expandoStartIndex}function Zg(e,t,n,r){const i=e.data;if(null===i[n+1]){const o=i[Qe()],s=Kg(e,n);em(o,r)&&null===t&&!s&&(t=!1),t=function AI(e,t,n,r){const i=function hu(e){const t=$.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let o=r?t.residualClasses:t.residualStyles;if(null===i)0===(r?t.classBindings:t.styleBindings)&&(n=Gi(n=Hl(null,e,t,n,r),t.attrs,r),o=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==i)if(n=Hl(i,e,t,n,r),null===o){let u=function xI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==cn(r))return e[Ot(r)]}(e,t,r);void 0!==u&&Array.isArray(u)&&(u=Hl(null,e,t,u[1],r),u=Gi(u,t.attrs,r),function RI(e,t,n,r){e[Ot(n?t.classBindings:t.styleBindings)]=r}(e,t,r,u))}else o=function NI(e,t,n){let r;const i=t.directiveEnd;for(let o=1+t.directiveStylingLast;o<i;o++)r=Gi(r,e[o].hostAttrs,n);return Gi(r,t.attrs,n)}(e,t,r)}return void 0!==o&&(r?t.residualClasses=o:t.residualStyles=o),n}(i,o,t,r),function vI(e,t,n,r,i,o){let s=o?t.classBindings:t.styleBindings,a=Ot(s),u=cn(s);e[r]=n;let c,l=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Mr(d,c)>0)&&(l=!0)}else c=n;if(i)if(0!==u){const f=Ot(e[a+1]);e[r+1]=gs(f,a),0!==f&&(e[f+1]=vl(e[f+1],r)),e[a+1]=function f0(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=gs(a,0),0!==a&&(e[a+1]=vl(e[a+1],r)),a=r;else e[r+1]=gs(u,0),0===a?a=r:e[u+1]=vl(e[u+1],r),u=r;l&&(e[r+1]=yl(e[r+1])),Bg(e,c,r,!0),Bg(e,c,r,!1),function DI(e,t,n,r,i){const o=i?e.residualClasses:e.residualStyles;null!=o&&"string"==typeof t&&Mr(o,t)>=0&&(n[r+1]=Dl(n[r+1]))}(t,c,e,r,o),s=gs(a,u),o?t.classBindings=s:t.styleBindings=s}(i,o,t,n,s,r)}}function Hl(e,t,n,r,i){let o=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(o=t[a],r=Gi(r,o.hostAttrs,i),o!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function Gi(e,t,n){const r=n?1:2;let i=-1;if(null!==t)for(let o=0;o<t.length;o++){const s=t[o];"number"==typeof s?i=s:i===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),dt(e,s,!!n||t[++o]))}return void 0===e?null:e}function Jg(e,t,n){dt(e,t,Mn(n))}function Yg(e,t,n,r,i,o,s,a){if(!(3&t.type))return;const u=e.data,l=u[a+1];xs(function Vp(e){return 1==(1&e)}(l)?Xg(u,t,n,i,cn(l),s):void 0)||(xs(o)||function jp(e){return 2==(2&e)}(l)&&(o=Xg(u,null,n,i,a,s)),function FE(e,t,n,r,i){if(t)i?e.addClass(n,r):e.removeClass(n,r);else{let o=-1===r.indexOf("-")?void 0:nt.DashCase;null==i?e.removeStyle(n,r,o):("string"==typeof i&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=nt.Important),e.setStyle(n,r,i,o))}}(r,s,Uo(Qe(),n),i,o))}function Xg(e,t,n,r,i,o){const s=null===t;let a;for(;i>0;){const u=e[i],l=Array.isArray(u),c=l?u[1]:u,d=null===c;let f=n[i+1];f===U&&(f=d?X:void 0);let h=d?Iu(f,r):c===r?f:void 0;if(l&&!xs(h)&&(h=Iu(u,r)),xs(h)&&(a=h,s))return a;const g=e[i+1];i=s?Ot(g):cn(g)}if(null!==t){let u=o?t.residualClasses:t.residualStyles;null!=u&&(a=Iu(u,r))}return a}function xs(e){return void 0!==e}function em(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function m(e,t=""){const n=_(),r=K(),i=e+22,o=r.firstCreatePass?Lr(r,i,1,t,null):r.data[i],s=n[i]=function il(e,t){return e.createText(t)}(n[G],t);fs(r,n,s,o),Ht(o,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ne(e){return hn("",e,""),ne}function hn(e,t,n){const r=_(),i=$r(r,e,t,n);return i!==U&&function dn(e,t,n){const r=Uo(t,e);!function op(e,t,n){e.setValue(t,n)}(e[G],r,n)}(r,Qe(),i),hn}const Zr="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let bm=Zr;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class nr{}class Km{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Zm extends nr{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new jl(this);const r=at(t);this._bootstrapComponents=ln(r.bootstrap),this._r3Injector=xp(t,n,[{provide:nr,useValue:this},{provide:ki,useValue:this.componentFactoryResolver}],oe(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Zl extends Km{constructor(t){super(),this.moduleType=t}create(t){return new Zm(this.moduleType,t)}}class tM extends nr{constructor(t,n,r){super(),this.componentFactoryResolver=new jl(this),this.instance=null;const i=new $h([...t,{provide:nr,useValue:this},{provide:ki,useValue:this.componentFactoryResolver}],n||us(),r,new Set(["environment"]));this.injector=i,i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Fs(e,t,n=null){return new tM(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let nM=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=kh(0,n.type),i=r.length>0?Fs([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,i)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=V({token:e,providedIn:"environment",factory:()=>new e(A(Tn))}),e})();function Jm(e){e.getStandaloneInjector=t=>t.get(nM).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function iy(e,t,n,r,i,o){const s=t+n;return Ue(e,s,i)?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wt(e,t,n){return e[t]=n}(e,s+1,o?r.call(o,i):r(i)):function Ji(e,t){const n=e[t];return n===U?void 0:n}(e,s+1)}function cy(e,t,n){const r=e+22,i=_(),o=vr(i,r);return function Yi(e,t){return e[1].data[t].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(i,r)?iy(i,function qe(){const e=$.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),t,o.transform,n,o):o.transform(n)}function Yl(e){return t=>{setTimeout(e,void 0,t)}}const Je=class SM extends ze{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let i=t,o=n||(()=>null),s=r;if(t&&"object"==typeof t){const u=t;i=u.next?.bind(u),o=u.error?.bind(u),s=u.complete?.bind(u)}this.__isAsync&&(o=Yl(o),i&&(i=Yl(i)),s&&(s=Yl(s)));const a=super.subscribe({next:i,error:o,complete:s});return t instanceof it&&t.add(a),a}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function MM(){return this._results[Xn()]()}class Xl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Xn(),r=Xl.prototype;r[n]||(r[n]=MM)}get changes(){return this._changes||(this._changes=new Je)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const i=ct(t);(this._changesDetected=!function xw(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],o=t[r];if(n&&(i=n(i),o=n(o)),o!==i)return!1}return!0}(r._results,i,n))&&(r._results=i,r.length=i.length,r.last=i[this.length-1],r.first=i[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let pn=(()=>{class e{}return e.__NG_ELEMENT_ID__=xM,e})();const TM=pn,AM=class extends TM{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,i=vs(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);i[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(i[19]=s.createEmbeddedView(r)),Tl(r,i,t),new $i(i)}};function xM(){return ks(xe(),_())}function ks(e,t){return 4&e.type?new AM(t,e,Nr(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Lt=(()=>{class e{}return e.__NG_ELEMENT_ID__=RM,e})();function RM(){return hy(xe(),_())}const NM=Lt,dy=class extends NM{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Nr(this._hostTNode,this._hostLView)}get injector(){return new wr(this._hostTNode,this._hostLView)}get parentInjector(){const t=Zo(this._hostTNode,this._hostLView);if(Jf(t)){const n=_r(t,this._hostLView),r=Cr(t);return new wr(n[1].data[r+8],n)}return new wr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=fy(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let i,o;"number"==typeof r?i=r:null!=r&&(i=r.index,o=r.injector);const s=t.createEmbeddedView(n||{},o);return this.insert(s,i),s}createComponent(t,n,r,i,o){const s=t&&!function Ei(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,i=d.projectableNodes,o=d.environmentInjector||d.ngModuleRef}const u=s?t:new Bi(te(t)),l=r||this.parentInjector;if(!o&&null==u.ngModule){const f=(s?l:this.parentInjector).get(Tn,null);f&&(o=f)}const c=u.create(l,i,void 0,o);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,i=r[1];if(function Z_(e){return Rt(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new dy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const o=this._adjustIndex(n),s=this._lContainer;!function ME(e,t,n,r){const i=10+r,o=n.length;r>0&&(n[i-1][4]=t),r<o-10?(t[4]=n[i],uh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function TE(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(i,r,s,o);const a=ll(o,s),u=r[G],l=ds(u,s[7]);return null!==l&&function EE(e,t,n,r,i,o){r[0]=i,r[6]=t,Vi(e,r,n,1,i,o)}(i,s[6],u,r,l,a),t.attachToViewContainerRef(),uh(ec(s),o,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=fy(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=sl(this._lContainer,n);r&&(Xo(ec(this._lContainer),n),ap(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=sl(this._lContainer,n);return r&&null!=Xo(ec(this._lContainer),n)?new $i(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function fy(e){return e[8]}function ec(e){return e[8]||(e[8]=[])}function hy(e,t){let n;const r=t[e.index];if(Rt(r))n=r;else{let i;if(8&e.type)i=be(r);else{const o=t[G];i=o.createComment("");const s=Dt(e,t);Yn(o,ds(o,s),i,function NE(e,t){return e.nextSibling(t)}(o,s),!1)}t[e.index]=n=sg(r,t,i,e),Cs(t,n)}return new dy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class tc{constructor(t){this.queryList=t,this.matches=null}clone(){return new tc(this.queryList)}setDirty(){this.queryList.setDirty()}}class nc{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,i=[];for(let o=0;o<r;o++){const s=n.getByIndex(o);i.push(this.queries[s.indexInDeclarationView].clone())}return new nc(i)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==vy(t,n).matches&&this.queries[n].setDirty()}}class py{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class rc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const i=null!==n?n.length:0,o=this.getByIndex(r).embeddedTView(t,i);o&&(o.indexInDeclarationView=r,null!==n?n.push(o):n=[o])}return null!==n?new rc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class ic{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new ic(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];this.matchTNodeWithReadOption(t,n,FM(n,o)),this.matchTNodeWithReadOption(t,n,Yo(n,t,o,!1,!1))}else r===pn?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Yo(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const i=this.metadata.read;if(null!==i)if(i===An||i===Lt||i===pn&&4&n.type)this.addMatch(n.index,-2);else{const o=Yo(n,t,i,!1,!1);null!==o&&this.addMatch(n.index,o)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function FM(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function LM(e,t,n,r){return-1===n?function kM(e,t){return 11&e.type?Nr(e,t):4&e.type?ks(e,t):null}(t,e):-2===n?function jM(e,t,n){return n===An?Nr(t,e):n===pn?ks(t,e):n===Lt?hy(t,e):void 0}(e,t,r):_i(e,e[1],n,t)}function gy(e,t,n,r){const i=t[19].queries[r];if(null===i.matches){const o=e.data,s=n.matches,a=[];for(let u=0;u<s.length;u+=2){const l=s[u];a.push(l<0?null:LM(t,o[l],s[u+1],n.metadata.read))}i.matches=a}return i.matches}function oc(e,t,n,r){const i=e.queries.getByIndex(n),o=i.matches;if(null!==o){const s=gy(e,t,i,n);for(let a=0;a<o.length;a+=2){const u=o[a];if(u>0)r.push(s[a/2]);else{const l=o[a+1],c=t[-u];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&oc(f[1],f,l,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const h=d[f];oc(h[1],h,l,r)}}}}}return r}function Kt(e){const t=_(),n=K(),r=Bf();pu(r+1);const i=vy(n,r);if(e.dirty&&function K_(e){return 4==(4&e[2])}(t)===(2==(2&i.metadata.flags))){if(null===i.matches)e.reset([]);else{const o=i.crossesNgTemplate?oc(n,t,r,[]):gy(n,t,i,r);e.reset(o,Bb),e.notifyOnChanges()}return!0}return!1}function Nn(e,t,n){const r=K();r.firstCreatePass&&(function yy(e,t,n){null===e.queries&&(e.queries=new rc),e.queries.track(new ic(t,n))}(r,new py(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),function my(e,t,n){const r=new Xl(4==(4&n));Jp(e,t,r,r.destroy),null===t[19]&&(t[19]=new nc),t[19].queries.push(new tc(r))}(r,_(),t)}function Zt(){return function VM(e,t){return e[19].queries[t].queryList}(_(),Bf())}function vy(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function js(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vs=new k("Application Initializer");let $s=(()=>{class e{constructor(n){this.appInits=n,this.resolve=js,this.reject=js,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,i)=>{this.resolve=r,this.reject=i})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let i=0;i<this.appInits.length;i++){const o=this.appInits[i]();if(As(o))n.push(o);else if(Mg(o)){const s=new Promise((a,u)=>{o.subscribe({complete:a,error:u})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(i=>{this.reject(i)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(A(Vs,8))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const eo=new k("AppId",{providedIn:"root",factory:function Ly(){return`${dc()}${dc()}${dc()}`}});function dc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const jy=new k("Platform Initializer"),Bs=new k("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Vy=new k("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let aT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gn=new k("LocaleId",{providedIn:"root",factory:()=>Ce(gn,F.Optional|F.SkipSelf)||function uT(){return typeof $localize<"u"&&$localize.locale||Zr}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class cT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let fc=(()=>{class e{compileModuleSync(n){return new Zl(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),o=ln(at(n).declarations).reduce((s,a)=>{const u=te(a);return u&&s.push(new Bi(u)),s},[]);return new cT(r,o)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const hT=(()=>Promise.resolve(0))();function hc(e){typeof Zone>"u"?hT.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ie{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Je(!1),this.onMicrotaskEmpty=new Je(!1),this.onStable=new Je(!1),this.onError=new Je(!1),typeof Zone>"u")throw new T(908,!1);Zone.assertZonePatched();const i=this;if(i._nesting=0,i._outer=i._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const o=Zone.AsyncStackTaggingZoneSpec;i._inner=i._inner.fork(new o("Angular"))}Zone.TaskTrackingZoneSpec&&(i._inner=i._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(i._inner=i._inner.fork(Zone.longStackTraceZoneSpec)),i.shouldCoalesceEventChangeDetection=!r&&n,i.shouldCoalesceRunChangeDetection=r,i.lastRequestAnimationFrameId=-1,i.nativeRequestAnimationFrame=function pT(){let e=se.requestAnimationFrame,t=se.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function yT(e){const t=()=>{!function mT(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(se,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,gc(e),e.isCheckStableRunning=!0,pc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),gc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,i,o,s,a)=>{try{return Uy(e),n.invokeTask(i,o,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===o.type||e.shouldCoalesceRunChangeDetection)&&t(),Hy(e)}},onInvoke:(n,r,i,o,s,a,u)=>{try{return Uy(e),n.invoke(i,o,s,a,u)}finally{e.shouldCoalesceRunChangeDetection&&t(),Hy(e)}},onHasTask:(n,r,i,o)=>{n.hasTask(i,o),r===i&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,gc(e),pc(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(n,r,i,o)=>(n.handleError(i,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(i)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Ie.isInAngularZone())throw new T(909,!1)}static assertNotInAngularZone(){if(Ie.isInAngularZone())throw new T(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,i){const o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,t,gT,js,js);try{return o.runTask(s,n,r)}finally{o.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const gT={};function pc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function gc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Uy(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Hy(e){e._nesting--,pc(e)}class vT{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Je,this.onMicrotaskEmpty=new Je,this.onStable=new Je,this.onError=new Je}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,i){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zy=new k(""),Us=new k("");let vc,mc=(()=>{class e{constructor(n,r,i){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,vc||(function DT(e){vc=e}(i),i.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Ie.assertNotInAngularZone(),hc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())hc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,i){let o=-1;r&&r>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:o,updateCb:i})}whenStable(n,r,i){if(i&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,i),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,i){return[]}}return e.\u0275fac=function(n){return new(n||e)(A(Ie),A(yc),A(Us))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})(),yc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return vc?.findTestabilityInTree(this,n,r)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Pn=null;const Gy=new k("AllowMultipleToken"),Dc=new k("PlatformDestroyListeners");class Wy{constructor(t,n){this.name=t,this.token=n}}function Qy(e,t,n=[]){const r=`Platform: ${t}`,i=new k(r);return(o=[])=>{let s=Cc();if(!s||s.injector.get(Gy,!1)){const a=[...n,...o,{provide:i,useValue:!0}];e?e(a):function wT(e){if(Pn&&!Pn.get(Gy,!1))throw new T(400,!1);Pn=e;const t=e.get(Zy);(function qy(e){const t=e.get(jy,null);t&&t.forEach(n=>n())})(e)}(function Ky(e=[],t){return Ct.create({name:t,providers:[{provide:Bu,useValue:"platform"},{provide:Dc,useValue:new Set([()=>Pn=null])},...e]})}(a,r))}return function ET(e){const t=Cc();if(!t)throw new T(401,!1);return t}()}}function Cc(){return Pn?.get(Zy)??null}let Zy=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const i=function Yy(e,t){let n;return n="noop"===e?new vT:("zone.js"===e?void 0:e)||new Ie(t),n}(r?.ngZone,function Jy(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),o=[{provide:Ie,useValue:i}];return i.run(()=>{const s=Ct.create({providers:o,parent:this.injector,name:n.moduleType.name}),a=n.create(s),u=a.injector.get(Pr,null);if(!u)throw new T(402,!1);return i.runOutsideAngular(()=>{const l=i.onError.subscribe({next:c=>{u.handleError(c)}});a.onDestroy(()=>{zs(this._modules,a),l.unsubscribe()})}),function Xy(e,t,n){try{const r=n();return As(r)?r.catch(i=>{throw t.runOutsideAngular(()=>e.handleError(i)),i}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(u,i,()=>{const l=a.injector.get($s);return l.runInitializers(),l.donePromise.then(()=>(function Em(e){st(e,"Expected localeId to be defined"),"string"==typeof e&&(bm=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(gn,Zr)||Zr),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const i=ev({},r);return function CT(e,t,n){const r=new Zl(n);return Promise.resolve(r)}(0,0,n).then(o=>this.bootstrapModuleFactory(o,i))}_moduleDoBootstrap(n){const r=n.injector.get(Hs);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>r.bootstrap(i));else{if(!n.instance.ngDoBootstrap)throw new T(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new T(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Dc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(A(Ct))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function ev(e,t){return Array.isArray(t)?t.reduce(ev,e):{...e,...t}}let Hs=(()=>{class e{constructor(n,r,i){this._zone=n,this._injector=r,this._exceptionHandler=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const o=new ue(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new ue(a=>{let u;this._zone.runOutsideAngular(()=>{u=this._zone.onStable.subscribe(()=>{Ie.assertNotInAngularZone(),hc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const l=this._zone.onUnstable.subscribe(()=>{Ie.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{u.unsubscribe(),l.unsubscribe()}});this.isStable=function D_(...e){const t=di(e),n=function f_(e,t){return"number"==typeof Ga(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?gt(r[0]):fr(n)(re(r,t)):tn}(o,s.pipe(vf()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const i=n instanceof Uh;if(!this._injector.get($s).done)throw!i&&function pr(e){const t=te(e)||Ge(e)||We(e);return null!==t&&t.standalone}(n),new T(405,false);let s;s=i?n:this._injector.get(ki).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function _T(e){return e.isBoundToModule}(s)?void 0:this._injector.get(nr),l=s.create(Ct.NULL,[],r||s.selector,a),c=l.location.nativeElement,d=l.injector.get(zy,null);return d?.registerApplication(c),l.onDestroy(()=>{this.detachView(l.hostView),zs(this.components,l),d?.unregisterApplication(c)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new T(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;zs(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Vy,[]).concat(this._bootstrapListeners).forEach(i=>i(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>zs(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new T(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(A(Ie),A(Tn),A(Pr))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function zs(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let nv=!0,_c=(()=>{class e{}return e.__NG_ELEMENT_ID__=MT,e})();function MT(e){return function TT(e,t,n){if($o(e)&&!n){const r=lt(e.index,t);return new $i(r,r)}return 47&e.type?new $i(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(xe(),_(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class av{constructor(){}supports(t){return Ui(t)}create(t){return new OT(t)}}const PT=(e,t)=>t;class OT{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||PT}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,i=0,o=null;for(;n||r;){const s=!r||n&&n.currentIndex<lv(r,i,o)?n:r,a=lv(s,i,o),u=s.currentIndex;if(s===r)i--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)i++;else{o||(o=[]);const l=a-i,c=u-i;if(l!=c){for(let f=0;f<l;f++){const h=f<o.length?o[f]:o[f]=0,g=h+f;c<=g&&g<l&&(o[f]=h+1)}o[s.previousIndex]=c-l}}a!==u&&t(s,a,u)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!Ui(t))throw new T(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let i,o,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)o=t[a],s=this._trackByFn(a,o),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,o,s,a)),Object.is(n.item,o)||this._addIdentityChange(n,o)):(n=this._mismatch(n,o,s,a),r=!0),n=n._next}else i=0,function aI(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Xn()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(i,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,i)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,i),r=!0),n=n._next,i++}),this.length=i;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,i){let o;return null===t?o=this._itTail:(o=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,o,i)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,i))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,o,i)):t=this._addAfter(new FT(n,r),o,i),t}_verifyReinsertion(t,n,r,i){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==o?t=this._reinsertAfter(o,t._prev,i):t.currentIndex!=i&&(t.currentIndex=i,this._addToMoves(t,i)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const i=t._prevRemoved,o=t._nextRemoved;return null===i?this._removalsHead=o:i._nextRemoved=o,null===o?this._removalsTail=i:o._prevRemoved=i,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const i=null===n?this._itHead:n._next;return t._next=i,t._prev=n,null===i?this._itTail=t:i._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new uv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new uv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class FT{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class kT{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class uv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new kT,this.map.set(n,r)),r.add(t)}get(t,n){const i=this.map.get(t);return i?i.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function lv(e,t,n){const r=e.previousIndex;if(null===r)return r;let i=0;return n&&r<n.length&&(i=n[r]),r+t+i
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class cv{constructor(){}supports(t){return t instanceof Map||$l(t)}create(){return new LT}}class LT{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||$l(t)))throw new T(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,i)=>{if(n&&n.key===i)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const o=this._getOrCreateRecordForKey(i,r);n=this._insertBeforeOrAppend(n,o)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const i=this._records.get(t);this._maybeAddToChanges(i,n);const o=i._prev,s=i._next;return o&&(o._next=s),s&&(s._prev=o),i._next=null,i._prev=null,i}const r=new jT(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class jT{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dv(){return new qs([new av])}let qs=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const i=r.factories.slice();n=n.concat(i)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||dv()),deps:[[e,new xi,new Ai]]}}find(n){const r=this.factories.find(i=>i.supports(n));if(null!=r)return r;throw new T(901,!1)}}return e.\u0275prov=V({token:e,providedIn:"root",factory:dv}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fv(){return new to([new cv])}let to=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const i=r.factories.slice();n=n.concat(i)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||fv()),deps:[[e,new xi,new Ai]]}}find(n){const r=this.factories.find(i=>i.supports(n));if(r)return r;throw new T(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=V({token:e,providedIn:"root",factory:fv}),e})();const BT=Qy(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let UT=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(A(Hs))},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xr(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Qs=null;function On(){return Qs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Xe=new k("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Sc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:function(){return function WT(){return A(hv)}()},providedIn:"platform"}),e})();const qT=new k("Location Initialized");let hv=(()=>{class e extends Sc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return On().getBaseHref(this._doc)}onPopState(n){const r=On().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=On().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,i){pv()?this._history.pushState(n,r,i):this.location.hash=i}replaceState(n,r,i){pv()?this._history.replaceState(n,r,i):this.location.hash=i}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(A(Xe))},e.\u0275prov=V({token:e,factory:function(){return function QT(){return new hv(A(Xe))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()},providedIn:"platform"}),e})();function pv(){return!!window.history.pushState}function Mc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function gv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function yn(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ir=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:function(){return Ce(yv)},providedIn:"root"}),e})();const mv=new k("appBaseHref");let yv=(()=>{class e extends ir{constructor(n,r){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??Ce(Xe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Mc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+yn(this._platformLocation.search),i=this._platformLocation.hash;return i&&n?`${r}${i}`:r}pushState(n,r,i,o){const s=this.prepareExternalUrl(i+yn(o));this._platformLocation.pushState(n,r,s)}replaceState(n,r,i,o){const s=this.prepareExternalUrl(i+yn(o));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}}return e.\u0275fac=function(n){return new(n||e)(A(Sc),A(mv,8))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),KT=(()=>{class e extends ir{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Mc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,i,o){let s=this.prepareExternalUrl(i+yn(o));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,i,o){let s=this.prepareExternalUrl(i+yn(o));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}}return e.\u0275fac=function(n){return new(n||e)(A(Sc),A(mv,8))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})(),Tc=(()=>{class e{constructor(n){this._subject=new Je,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=gv(vv(r)),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+yn(r))}normalize(n){return e.stripTrailingSlash(function JT(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,vv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",i=null){this._locationStrategy.pushState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+yn(r)),i)}replaceState(n,r="",i=null){this._locationStrategy.replaceState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+yn(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(i=>i(n,r))}subscribe(n,r,i){return this._subject.subscribe({next:n,error:r,complete:i})}}return e.normalizeQueryParams=yn,e.joinWithSlash=Mc,e.stripTrailingSlash=gv,e.\u0275fac=function(n){return new(n||e)(A(ir))},e.\u0275prov=V({token:e,factory:function(){return function ZT(){return new Tc(A(ir))}()},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vv(e){return e.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Mv(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const r=n.indexOf("="),[i,o]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jc=(()=>{class e{constructor(n,r,i,o){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=i,this._renderer=o,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(Ui(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${oe(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}}return e.\u0275fac=function(n){return new(n||e)(M(qs),M(to),M(An),M(ls))},e.\u0275dir=je({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class F1{constructor(t,n,r,i){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=i}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let io=(()=>{class e{constructor(n,r,i){this._viewContainer=n,this._template=r,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((i,o,s)=>{if(null==i.previousIndex)r.createEmbeddedView(this._template,new F1(i.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===o?void 0:o);else if(null!==o){const a=r.get(o);r.move(a,s),xv(a,i)}});for(let i=0,o=r.length;i<o;i++){const a=r.get(i).context;a.index=i,a.count=o,a.ngForOf=this._ngForOf}n.forEachIdentityChange(i=>{xv(r.get(i.currentIndex),i)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(M(Lt),M(pn),M(qs))},e.\u0275dir=je({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function xv(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ei=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new L1,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Rv("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Rv("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(M(Lt),M(pn))},e.\u0275dir=je({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class L1{constructor(){this.$implicit=null,this.ngIf=null}}function Rv(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${oe(t)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class H1{createSubscription(t,n){return t.subscribe({next:n,error:r=>{throw r}})}dispose(t){t.unsubscribe()}}class z1{createSubscription(t,n){return t.then(n,r=>{throw r})}dispose(t){}}const G1=new z1,W1=new H1;let Pv=(()=>{class e{constructor(n){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){return this._obj?n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue:(n&&this._subscribe(n),this._latestValue)}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,r=>this._updateLatestValue(n,r))}_selectStrategy(n){if(As(n))return G1;if(Sg(n))return W1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
throw function $t(e,t){return new T(2100,!1)}()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,r){n===this._obj&&(this._latestValue=r,this._ref.markForCheck())}}return e.\u0275fac=function(n){return new(n||e)(M(_c,16))},e.\u0275pipe=et({name:"async",type:e,pure:!1,standalone:!0}),e})(),Fv=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const kv="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let hA=(()=>{class e{}return e.\u0275prov=V({token:e,providedIn:"root",factory:()=>new pA(A(Xe),window)}),e})();class pA{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function gA(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let i=r.currentNode;for(;i;){const o=i.shadowRoot;if(o){const s=o.getElementById(t)||o.querySelector(`[name="${t}"]`);if(s)return s}i=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,i=n.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(r-o[0],i-o[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=Lv(this.window.history)||Lv(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Lv(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class jv{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Gc extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class PA extends class GT{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function zT(e){Qs||(Qs=e)}(new Gc)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function OA(){return so=so||document.querySelector("base"),so?so.getAttribute("href"):null}();return null==n?null:function FA(e){oa=oa||document.createElement("a"),oa.setAttribute("href",e);const t=oa.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){so=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Mv(document.cookie,t)}}let oa,so=null;const Uv=new k("TRANSITION_ID"),LA=[{provide:Vs,useFactory:function kA(e,t,n){return()=>{n.get($s).donePromise.then(()=>{const r=On(),i=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let o=0;o<i.length;o++)r.remove(i[o])})}},deps:[Uv,Xe,Ct],multi:!0}];let VA=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sa=new k("EventManagerPlugins");let aa=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(i=>i.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,i){return this._findPluginFor(r).addEventListener(n,r,i)}addGlobalEventListener(n,r,i){return this._findPluginFor(r).addGlobalEventListener(n,r,i)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const i=this._plugins;for(let o=0;o<i.length;o++){const s=i[o];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(A(sa),A(Ie))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();class Hv{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const i=On().getGlobalEventTarget(this._doc,t);if(!i)throw new Error(`Unsupported event target ${i} for event ${n}`);return this.addEventListener(i,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zv=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(i=>{this._stylesSet.has(i)||(this._stylesSet.add(i),r.add(i))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})(),ao=(()=>{class e extends zv{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,i){n.forEach(o=>{const s=this._doc.createElement("style");s.textContent=o,i.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(Gv),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,i)=>{this._addStylesToHost(n,i,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(Gv))}}return e.\u0275fac=function(n){return new(n||e)(A(Xe))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();function Gv(e){On().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},qc=/%COMP%/g;function ua(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];Array.isArray(i)?ua(e,i,n):(i=i.replace(qc,e),n.push(i))}return n}function Qv(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let Qc=(()=>{class e{constructor(n,r,i){this.eventManager=n,this.sharedStylesHost=r,this.appId=i,this.rendererByCompId=new Map,this.defaultRenderer=new Kc(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Bt.Emulated:{let i=this.rendererByCompId.get(r.id);return i||(i=new GA(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,i)),i.applyToHost(n),i}case 1:case Bt.ShadowDom:return new WA(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const i=ua(r.id,r.styles,[]);this.sharedStylesHost.addStyles(i),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(A(aa),A(ao),A(eo))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();class Kc{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(Wc[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(Zv(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(Zv(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,i){if(i){n=i+":"+n;const o=Wc[i];o?t.setAttributeNS(o,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const i=Wc[r];i?t.removeAttributeNS(i,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,i){i&(nt.DashCase|nt.Important)?t.style.setProperty(n,r,i&nt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&nt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,Qv(r)):this.eventManager.addEventListener(t,n,Qv(r))}}function Zv(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class GA extends Kc{constructor(t,n,r,i){super(t),this.component=r;const o=ua(i+"-"+r.id,r.styles,[]);n.addStyles(o),this.contentAttr=function UA(e){return"_ngcontent-%COMP%".replace(qc,e)}(i+"-"+r.id),this.hostAttr=function HA(e){return"_nghost-%COMP%".replace(qc,e)}(i+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class WA extends Kc{constructor(t,n,r,i){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const o=ua(i.id,i.styles,[]);for(let s=0;s<o.length;s++){const a=document.createElement("style");a.textContent=o[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let qA=(()=>{class e extends Hv{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,i){return n.addEventListener(r,i,!1),()=>this.removeEventListener(n,r,i)}removeEventListener(n,r,i){return n.removeEventListener(r,i)}}return e.\u0275fac=function(n){return new(n||e)(A(Xe))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Jv=["alt","control","meta","shift"],QA={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},KA={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let ZA=(()=>{class e extends Hv{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,i){const o=e.parseEventName(r),s=e.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>On().onAndCancel(n,o.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),i=r.shift();if(0===r.length||"keydown"!==i&&"keyup"!==i)return null;const o=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Jv.forEach(l=>{const c=r.indexOf(l);c>-1&&(r.splice(c,1),s+=l+".")}),s+=o,0!=r.length||0===o.length)return null;const u={};return u.domEventName=i,u.fullKey=s,u}static matchEventFullKeyCode(n,r){let i=QA[n.key]||n.key,o="";return r.indexOf("code.")>-1&&(i=n.code,o="code."),!(null==i||!i)&&(i=i.toLowerCase()," "===i?i="space":"."===i&&(i="dot"),Jv.forEach(s=>{s!==i&&(0,KA[s])(n)&&(o+=s+".")}),o+=i,o===r)}static eventCallback(n,r,i){return o=>{e.matchEventFullKeyCode(o,n)&&i.runGuarded(()=>r(o))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(A(Xe))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ex=Qy(BT,"browser",[{provide:Bs,useValue:kv},{provide:jy,useValue:function JA(){Gc.makeCurrent()},multi:!0},{provide:Xe,useFactory:function XA(){return function tb(e){xu=e}(document),document},deps:[]}]),eD=new k(""),tD=[{provide:Us,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class jA{addToWindow(t){se.getAngularTestability=(r,i=!0)=>{const o=t.findTestabilityInTree(r,i);if(null==o)throw new Error("Could not find testability for element.");return o},se.getAllAngularTestabilities=()=>t.getAllTestabilities(),se.getAllAngularRootElements=()=>t.getAllRootElements(),se.frameworkStabilizers||(se.frameworkStabilizers=[]),se.frameworkStabilizers.push(r=>{const i=se.getAllAngularTestabilities();let o=i.length,s=!1;const a=function(u){s=s||u,o--,0==o&&r(s)};i.forEach(function(u){u.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?On().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:zy,useClass:mc,deps:[Ie,yc,Us]},{provide:mc,useClass:mc,deps:[Ie,yc,Us]}],nD=[{provide:Bu,useValue:"root"},{provide:Pr,useFactory:function YA(){return new Pr},deps:[]},{provide:sa,useClass:qA,multi:!0,deps:[Xe,Ie,Bs]},{provide:sa,useClass:ZA,multi:!0,deps:[Xe]},{provide:Qc,useClass:Qc,deps:[aa,ao,eo]},{provide:zh,useExisting:Qc},{provide:zv,useExisting:ao},{provide:ao,useClass:ao,deps:[Xe]},{provide:aa,useClass:aa,deps:[sa,Ie]},{provide:jv,useClass:VA,deps:[]},[]];let tx=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:eo,useValue:n.appId},{provide:Uv,useExisting:eo},LA]}}}return e.\u0275fac=function(n){return new(n||e)(A(eD,12))},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({providers:[...nD,...tD],imports:[Fv,UT]}),e})(),rD=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(A(Xe))},e.\u0275prov=V({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rx(){return new rD(A(Xe))}(),r},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function R(...e){return re(e,di(e))}function kn(e,t){return J(t)?Ae(e,t,1):Ae(e,1)}function Et(e,t){return fe((n,r)=>{let i=0;n.subscribe(he(r,o=>e.call(t,o,i++)&&r.next(o)))})}
/**
       * @license Angular v14.2.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */typeof window<"u"&&window;class sD{}class aD{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Dn{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const i=n.slice(0,r),o=i.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(i,o),this.headers.has(o)?this.headers.get(o).push(s):this.headers.set(o,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(n=>{let r=t[n];const i=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(i,r),this.maybeSetNormalizedName(n,i))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof Dn?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new Dn;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof Dn?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const i=("a"===t.op?this.headers.get(n):void 0)||[];i.push(...r),this.headers.set(n,i);break;case"d":const o=t.value;if(o){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===o.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dx{encodeKey(t){return uD(t)}encodeValue(t){return uD(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const hx=/%(\d[a-f0-9])/gi,px={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function uD(e){return encodeURIComponent(e).replace(hx,(t,n)=>px[n]??t)}function la(e){return`${e}`}class Ln{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new dx,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function fx(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{const o=i.indexOf("="),[s,a]=-1==o?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,o)),t.decodeValue(i.slice(o+1))],u=n.get(s)||[];u.push(a),n.set(s,u)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],i=Array.isArray(r)?r.map(la):[la(r)];this.map.set(n,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const i=t[r];Array.isArray(i)?i.forEach(o=>{n.push({param:r,value:o,op:"a"})}):n.push({param:r,value:i,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new Ln({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(la(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const i=r.indexOf(la(t.value));-1!==i&&r.splice(i,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gx{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lD(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function cD(e){return typeof Blob<"u"&&e instanceof Blob}function dD(e){return typeof FormData<"u"&&e instanceof FormData}class uo{constructor(t,n,r,i){let o;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function mx(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||i?(this.body=void 0!==r?r:null,o=i):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new Dn),this.context||(this.context=new gx),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new Ln,this.urlWithParams=n}serializeBody(){return null===this.body?null:lD(this.body)||cD(this.body)||dD(this.body)||function yx(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Ln?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||dD(this.body)?null:cD(this.body)?this.body.type||null:lD(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Ln?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const n=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,s=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,l=t.params||this.params;const c=t.context??this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((d,f)=>d.set(f,t.setHeaders[f]),u)),t.setParams&&(l=Object.keys(t.setParams).reduce((d,f)=>d.set(f,t.setParams[f]),l)),new uo(n,r,o,{params:l,headers:u,context:c,reportProgress:a,responseType:i,withCredentials:s})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Te=(()=>((Te=Te||{})[Te.Sent=0]="Sent",Te[Te.UploadProgress=1]="UploadProgress",Te[Te.ResponseHeader=2]="ResponseHeader",Te[Te.DownloadProgress=3]="DownloadProgress",Te[Te.Response=4]="Response",Te[Te.User=5]="User",Te))();class Yc{constructor(t,n=200,r="OK"){this.headers=t.headers||new Dn,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class Xc extends Yc{constructor(t={}){super(t),this.type=Te.ResponseHeader}clone(t={}){return new Xc({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class ca extends Yc{constructor(t={}){super(t),this.type=Te.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new ca({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class fD extends Yc{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ed(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let hD=(()=>{class e{constructor(n){this.handler=n}request(n,r,i={}){let o;if(n instanceof uo)o=n;else{let u,l;u=i.headers instanceof Dn?i.headers:new Dn(i.headers),i.params&&(l=i.params instanceof Ln?i.params:new Ln({fromObject:i.params})),o=new uo(n,r,void 0!==i.body?i.body:null,{headers:u,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials})}const s=R(o).pipe(kn(u=>this.handler.handle(u)));if(n instanceof uo||"events"===i.observe)return s;const a=s.pipe(Et(u=>u instanceof ca));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(P(u=>{if(null!==u.body&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return a.pipe(P(u=>{if(null!==u.body&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return a.pipe(P(u=>{if(null!==u.body&&"string"!=typeof u.body)throw new Error("Response is not a string.");return u.body}));default:return a.pipe(P(u=>u.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new Ln).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,i={}){return this.request("PATCH",n,ed(i,r))}post(n,r,i={}){return this.request("POST",n,ed(i,r))}put(n,r,i={}){return this.request("PUT",n,ed(i,r))}}return e.\u0275fac=function(n){return new(n||e)(A(sD))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pD{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const gD=new k("HTTP_INTERCEPTORS");let vx=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Dx=/^\)\]\}',?\n/;let mD=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ue(r=>{const i=this.xhrFactory.build();if(i.open(n.method,n.urlWithParams),n.withCredentials&&(i.withCredentials=!0),n.headers.forEach((h,g)=>i.setRequestHeader(h,g.join(","))),n.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&i.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();i.responseType="json"!==h?h:"text"}const o=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=i.statusText||"OK",g=new Dn(i.getAllResponseHeaders()),v=function Cx(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(i)||n.url;return s=new Xc({headers:g,status:i.status,statusText:h,url:v}),s},u=()=>{let{headers:h,status:g,statusText:v,url:C}=a(),w=null;204!==g&&(w=typeof i.response>"u"?i.responseText:i.response),0===g&&(g=w?200:0);let E=g>=200&&g<300;if("json"===n.responseType&&"string"==typeof w){const D=w;w=w.replace(Dx,"");try{w=""!==w?JSON.parse(w):null}catch(N){w=D,E&&(E=!1,w={error:N,text:w})}}E?(r.next(new ca({body:w,headers:h,status:g,statusText:v,url:C||void 0})),r.complete()):r.error(new fD({error:w,headers:h,status:g,statusText:v,url:C||void 0}))},l=h=>{const{url:g}=a(),v=new fD({error:h,status:i.status||0,statusText:i.statusText||"Unknown Error",url:g||void 0});r.error(v)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let g={type:Te.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(g.total=h.total),"text"===n.responseType&&!!i.responseText&&(g.partialText=i.responseText),r.next(g)},f=h=>{let g={type:Te.UploadProgress,loaded:h.loaded};h.lengthComputable&&(g.total=h.total),r.next(g)};return i.addEventListener("load",u),i.addEventListener("error",l),i.addEventListener("timeout",l),i.addEventListener("abort",l),n.reportProgress&&(i.addEventListener("progress",d),null!==o&&i.upload&&i.upload.addEventListener("progress",f)),i.send(o),r.next({type:Te.Sent}),()=>{i.removeEventListener("error",l),i.removeEventListener("abort",l),i.removeEventListener("load",u),i.removeEventListener("timeout",l),n.reportProgress&&(i.removeEventListener("progress",d),null!==o&&i.upload&&i.upload.removeEventListener("progress",f)),i.readyState!==i.DONE&&i.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(A(jv))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const td=new k("XSRF_COOKIE_NAME"),nd=new k("XSRF_HEADER_NAME");class yD{}let _x=(()=>{class e{constructor(n,r,i){this.doc=n,this.platform=r,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Mv(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(A(Xe),A(Bs),A(td))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})(),rd=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const i=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||i.startsWith("http://")||i.startsWith("https://"))return r.handle(n);const o=this.tokenService.getToken();return null!==o&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,o)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(A(yD),A(nd))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})(),wx=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(gD,[]);this.chain=r.reduceRight((i,o)=>new pD(i,o),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(A(aD),A(Ct))},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})(),bx=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:rd,useClass:vx}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:td,useValue:n.cookieName}:[],n.headerName?{provide:nd,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({providers:[rd,{provide:gD,useExisting:rd,multi:!0},{provide:yD,useClass:_x},{provide:td,useValue:"XSRF-TOKEN"},{provide:nd,useValue:"X-XSRF-TOKEN"}]}),e})(),Ex=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({providers:[hD,{provide:sD,useClass:wx},mD,{provide:aD,useExisting:mD}],imports:[bx.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class It extends ze{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const da=li(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:Ix}=Array,{getPrototypeOf:Sx,prototype:Mx,keys:Tx}=Object;const{isArray:Rx}=Array;function vD(e){return P(t=>function Nx(e,t){return Rx(t)?e(...t):e(t)}(e,t))}function id(...e){const t=di(e),n=function d_(e){return J(Ga(e))?e.pop():void 0}(e),{args:r,keys:i}=function Ax(e){if(1===e.length){const t=e[0];if(Ix(t))return{args:t,keys:null};if(function xx(e){return e&&"object"==typeof e&&Sx(e)===Mx}(t)){const n=Tx(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}(e);if(0===r.length)return re([],t);const o=new ue(function Ox(e,t,n=wn){return r=>{DD(t,()=>{const{length:i}=e,o=new Array(i);let s=i,a=i;for(let u=0;u<i;u++)DD(t,()=>{const l=re(e[u],t);let c=!1;l.subscribe(he(r,d=>{o[u]=d,c||(c=!0,a--),a||r.next(n(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,i?s=>function Px(e,t){return e.reduce((n,r,i)=>(n[r]=t[i],n),{})}(i,s):wn));return n?o.pipe(vD(n)):o}function DD(e,t,n){e?en(n,e,t):t()}function fa(...e){return function Fx(){return fr(1)}()(re(e,di(e)))}function CD(e){return new ue(t=>{gt(e()).subscribe(t)})}function lo(e,t){const n=J(e)?e:()=>e,r=i=>i.error(n());return new ue(t?i=>t.schedule(r,0,i):r)}function od(){return fe((e,t)=>{let n=null;e._refCount++;const r=he(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const i=e._connection,o=n;n=null,i&&(!o||i===o)&&i.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class _D extends ue{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Xd(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new it;const n=this.getSubject();t.add(this.source.subscribe(he(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=it.EMPTY)}return t}refCount(){return od()(this)}}function St(e,t){return fe((n,r)=>{let i=null,o=0,s=!1;const a=()=>s&&!i&&r.complete();n.subscribe(he(r,u=>{i?.unsubscribe();let l=0;const c=o++;gt(e(u,c)).subscribe(i=he(r,d=>r.next(t?t(u,d,c,l++):d),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function Jt(e){return e<=0?()=>tn:fe((t,n)=>{let r=0;t.subscribe(he(n,i=>{++r<=e&&(n.next(i),e<=r&&n.complete())}))})}function sd(...e){const t=di(e);return fe((n,r)=>{(t?fa(e,n,t):fa(e,n)).subscribe(r)})}function ha(e){return fe((t,n)=>{let r=!1;t.subscribe(he(n,i=>{r=!0,n.next(i)},()=>{r||n.next(e),n.complete()}))})}function wD(e=kx){return fe((t,n)=>{let r=!1;t.subscribe(he(n,i=>{r=!0,n.next(i)},()=>r?n.complete():n.error(e())))})}function kx(){return new da}function jn(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Et((i,o)=>e(i,o,r)):wn,Jt(1),n?ha(t):wD(()=>new da))}function Oe(e,t,n){const r=J(e)||t||n?{next:e,error:t,complete:n}:e;return r?fe((i,o)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;i.subscribe(he(o,u=>{var l;null===(l=r.next)||void 0===l||l.call(r,u),o.next(u)},()=>{var u;a=!1,null===(u=r.complete)||void 0===u||u.call(r),o.complete()},u=>{var l;a=!1,null===(l=r.error)||void 0===l||l.call(r,u),o.error(u)},()=>{var u,l;a&&(null===(u=r.unsubscribe)||void 0===u||u.call(r)),null===(l=r.finalize)||void 0===l||l.call(r)}))}):wn}function Vn(e){return fe((t,n)=>{let o,r=null,i=!1;r=t.subscribe(he(n,void 0,void 0,s=>{o=gt(e(s,Vn(e)(t))),r?(r.unsubscribe(),r=null,o.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(n))})}function bD(e,t,n,r,i){return(o,s)=>{let a=n,u=t,l=0;o.subscribe(he(s,c=>{const d=l++;u=a?e(u,c,d):(a=!0,c),r&&s.next(u)},i&&(()=>{a&&s.next(u),s.complete()})))}}function ad(e,t){return fe(bD(e,t,arguments.length>=2,!0))}function pa(e){return e<=0?()=>tn:fe((t,n)=>{let r=[];t.subscribe(he(n,i=>{r.push(i),e<r.length&&r.shift()},()=>{for(const i of r)n.next(i);n.complete()},void 0,()=>{r=null}))})}function ED(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Et((i,o)=>e(i,o,r)):wn,pa(1),n?ha(t):wD(()=>new da))}function ID(e){return P(()=>e)}function ud(e){return fe((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
/**
       * @license Angular v14.2.2
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const W="primary",co=Symbol("RouteTitle");class jx{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function ti(e){return new jx(e)}function Vx(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const i={};for(let o=0;o<r.length;o++){const s=r[o],a=e[o];if(s.startsWith(":"))i[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:i}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yt(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let i;for(let o=0;o<n.length;o++)if(i=n[o],!SD(e[i],t[i]))return!1;return!0}function SD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((i,o)=>r[o]===i)}return e===t}function MD(e){return Array.prototype.concat.apply([],e)}function TD(e){return e.length>0?e[e.length-1]:null}function ke(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function $n(e){return Mg(e)?e:As(e)?re(Promise.resolve(e)):R(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ux={exact:function RD(e,t,n){if(!sr(e.segments,t.segments)||!ga(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!RD(e.children[r],t.children[r],n))return!1;return!0},subset:ND},AD={exact:function Hx(e,t){return Yt(e,t)},subset:function zx(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>SD(e[n],t[n]))},ignored:()=>!0};function xD(e,t,n){return Ux[n.paths](e.root,t.root,n.matrixParams)&&AD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function ND(e,t,n){return PD(e,t,t.segments,n)}function PD(e,t,n,r){if(e.segments.length>n.length){const i=e.segments.slice(0,n.length);return!(!sr(i,n)||t.hasChildren()||!ga(i,n,r))}if(e.segments.length===n.length){if(!sr(e.segments,n)||!ga(e.segments,n,r))return!1;for(const i in t.children)if(!e.children[i]||!ND(e.children[i],t.children[i],r))return!1;return!0}{const i=n.slice(0,e.segments.length),o=n.slice(e.segments.length);return!!(sr(e.segments,i)&&ga(e.segments,i,r)&&e.children[W])&&PD(e.children[W],t,o,r)}}function ga(e,t,n){return t.every((r,i)=>AD[n](e[i].parameters,r.parameters))}class or{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ti(this.queryParams)),this._queryParamMap}toString(){return qx.serialize(this)}}class q{constructor(t,n){this.segments=t,this.children=n,this.parent=null,ke(n,(r,i)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ma(this)}}class fo{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=ti(this.parameters)),this._parameterMap}toString(){return LD(this)}}function sr(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let OD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:function(){return new cd},providedIn:"root"}),e})();class cd{parse(t){const n=new nR(t);return new or(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${ho(t.root,!0)}`,r=function Zx(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(i=>`${ya(n)}=${ya(i)}`).join("&"):`${ya(n)}=${ya(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function Qx(e){return encodeURI(e)}(t.fragment)}`:""}`}}const qx=new cd;function ma(e){return e.segments.map(t=>LD(t)).join("/")}function ho(e,t){if(!e.hasChildren())return ma(e);if(t){const n=e.children[W]?ho(e.children[W],!1):"",r=[];return ke(e.children,(i,o)=>{o!==W&&r.push(`${o}:${ho(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function Wx(e,t){let n=[];return ke(e.children,(r,i)=>{i===W&&(n=n.concat(t(r,i)))}),ke(e.children,(r,i)=>{i!==W&&(n=n.concat(t(r,i)))}),n}(e,(r,i)=>i===W?[ho(e.children[W],!1)]:[`${i}:${ho(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[W]?`${ma(e)}/${n[0]}`:`${ma(e)}/(${n.join("//")})`}}function FD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ya(e){return FD(e).replace(/%3B/gi,";")}function dd(e){return FD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function va(e){return decodeURIComponent(e)}function kD(e){return va(e.replace(/\+/g,"%20"))}function LD(e){return`${dd(e.path)}${function Kx(e){return Object.keys(e).map(t=>`;${dd(t)}=${dd(e[t])}`).join("")}(e.parameters)}`}const Jx=/^[^\/()?;=#]+/;function Da(e){const t=e.match(Jx);return t?t[0]:""}const Yx=/^[^=?&#]+/,eR=/^[^&#]+/;class nR{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new q([],{}):new q([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[W]=new q(t,n)),r}parseSegment(){const t=Da(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(t),new fo(va(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=Da(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const i=Da(this.remaining);i&&(r=i,this.capture(r))}t[va(n)]=va(r)}parseQueryParam(t){const n=function Xx(e){const t=e.match(Yx);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function tR(e){const t=e.match(eR);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const i=kD(n),o=kD(r);if(t.hasOwnProperty(i)){let s=t[i];Array.isArray(s)||(s=[s],t[i]=s),s.push(o)}else t[i]=o}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Da(this.remaining),i=this.remaining[r.length];if("/"!==i&&")"!==i&&";"!==i)throw new T(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=W);const s=this.parseChildren();n[o]=1===Object.keys(s).length?s[W]:new q([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new T(4011,!1)}}function fd(e){return e.segments.length>0?new q([],{[W]:e}):e}function Ca(e){const t={};for(const r of Object.keys(e.children)){const o=Ca(e.children[r]);(o.segments.length>0||o.hasChildren())&&(t[r]=o)}return function rR(e){if(1===e.numberOfChildren&&e.children[W]){const t=e.children[W];return new q(e.segments.concat(t.segments),t.children)}return e}(new q(e.segments,t))}function ar(e){return e instanceof or}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function sR(e,t,n,r,i){if(0===n.length)return ni(t.root,t.root,t.root,r,i);const o=function $D(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new VD(!0,0,e);let t=0,n=!1;const r=e.reduce((i,o,s)=>{if("object"==typeof o&&null!=o){if(o.outlets){const a={};return ke(o.outlets,(u,l)=>{a[l]="string"==typeof u?u.split("/"):u}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return"string"!=typeof o?[...i,o]:0===s?(o.split("/").forEach((a,u)=>{0==u&&"."===a||(0==u&&""===a?n=!0:".."===a?t++:""!=a&&i.push(a))}),i):[...i,o]},[]);return new VD(n,t,r)}(n);return o.toRoot()?ni(t.root,t.root,new q([],{}),r,i):function s(u){const l=function uR(e,t,n,r){if(e.isAbsolute)return new ri(t.root,!0,0);if(-1===r)return new ri(n,n===t.root,0);return function BD(e,t,n){let r=e,i=t,o=n;for(;o>i;){if(o-=i,r=r.parent,!r)throw new T(4005,!1);i=r.segments.length}return new ri(r,!1,i-o)}(n,r+(po(e.commands[0])?0:1),e.numberOfDoubleDots)}(o,t,e.snapshot?._urlSegment,u),c=l.processChildren?mo(l.segmentGroup,l.index,o.commands):pd(l.segmentGroup,l.index,o.commands);return ni(t.root,l.segmentGroup,c,r,i)}(e.snapshot?._lastPathIndex)}function po(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function go(e){return"object"==typeof e&&null!=e&&e.outlets}function ni(e,t,n,r,i){let s,o={};r&&ke(r,(u,l)=>{o[l]=Array.isArray(u)?u.map(c=>`${c}`):`${u}`}),s=e===t?n:jD(e,t,n);const a=fd(Ca(s));return new or(a,o,i)}function jD(e,t,n){const r={};return ke(e.children,(i,o)=>{r[o]=i===t?n:jD(i,t,n)}),new q(e.segments,r)}class VD{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&po(r[0]))throw new T(4003,!1);const i=r.find(go);if(i&&i!==TD(r))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class ri{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function pd(e,t,n){if(e||(e=new q([],{})),0===e.segments.length&&e.hasChildren())return mo(e,t,n);const r=function cR(e,t,n){let r=0,i=t;const o={match:!1,pathIndex:0,commandIndex:0};for(;i<e.segments.length;){if(r>=n.length)return o;const s=e.segments[i],a=n[r];if(go(a))break;const u=`${a}`,l=r<n.length-1?n[r+1]:null;if(i>0&&void 0===u)break;if(u&&l&&"object"==typeof l&&void 0===l.outlets){if(!HD(u,l,s))return o;r+=2}else{if(!HD(u,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}(e,t,n),i=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const o=new q(e.segments.slice(0,r.pathIndex),{});return o.children[W]=new q(e.segments.slice(r.pathIndex),e.children),mo(o,0,i)}return r.match&&0===i.length?new q(e.segments,{}):r.match&&!e.hasChildren()?gd(e,t,n):r.match?mo(e,0,i):gd(e,t,n)}function mo(e,t,n){if(0===n.length)return new q(e.segments,{});{const r=function lR(e){return go(e[0])?e[0].outlets:{[W]:e}}(n),i={};return ke(r,(o,s)=>{"string"==typeof o&&(o=[o]),null!==o&&(i[s]=pd(e.children[s],t,o))}),ke(e.children,(o,s)=>{void 0===r[s]&&(i[s]=o)}),new q(e.segments,i)}}function gd(e,t,n){const r=e.segments.slice(0,t);let i=0;for(;i<n.length;){const o=n[i];if(go(o)){const u=dR(o.outlets);return new q(r,u)}if(0===i&&po(n[0])){r.push(new fo(e.segments[t].path,UD(n[0]))),i++;continue}const s=go(o)?o.outlets[W]:`${o}`,a=i<n.length-1?n[i+1]:null;s&&a&&po(a)?(r.push(new fo(s,UD(a))),i+=2):(r.push(new fo(s,{})),i++)}return new q(r,{})}function dR(e){const t={};return ke(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=gd(new q([],{}),0,n))}),t}function UD(e){const t={};return ke(e,(n,r)=>t[r]=`${n}`),t}function HD(e,t,n){return e==n.path&&Yt(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Cn{constructor(t,n){this.id=t,this.url=n}}class md extends Cn{constructor(t,n,r="imperative",i=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class ur extends Cn{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class _a extends Cn{constructor(t,n,r,i){super(t,n),this.reason=r,this.code=i,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class zD extends Cn{constructor(t,n,r,i){super(t,n),this.error=r,this.target=i,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class fR extends Cn{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class hR extends Cn{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class pR extends Cn{constructor(t,n,r,i,o){super(t,n),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class gR extends Cn{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class mR extends Cn{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class yR{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class vR{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class DR{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class CR{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class _R{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class wR{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class GD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class WD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=yd(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=yd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=vd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(i=>i.value).filter(i=>i!==t)}pathFromRoot(t){return vd(t,this._root).map(n=>n.value)}}function yd(e,t){if(e===t.value)return t;for(const n of t.children){const r=yd(e,n);if(r)return r}return null}function vd(e,t){if(e===t.value)return[t];for(const n of t.children){const r=vd(e,n);if(r.length)return r.unshift(t),r}return[]}class _n{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function ii(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class qD extends WD{constructor(t,n){super(t),this.snapshot=n,Dd(this,t)}toString(){return this.snapshot.toString()}}function QD(e,t){const n=function ER(e,t){const s=new wa([],{},{},"",{},W,t,null,e.root,-1,{});return new ZD("",new _n(s,[]))}(e,t),r=new It([new fo("",{})]),i=new It({}),o=new It({}),s=new It({}),a=new It(""),u=new lr(r,i,s,a,o,W,t,n.root);return u.snapshot=n.root,new qD(new _n(u,[]),n)}class lr{constructor(t,n,r,i,o,s,a,u){this.url=t,this.params=n,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.title=this.data?.pipe(P(l=>l[co]))??R(void 0),this._futureSnapshot=u}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(P(t=>ti(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(P(t=>ti(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function KD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const i=n[r],o=n[r-1];if(i.routeConfig&&""===i.routeConfig.path)r--;else{if(o.component)break;r--}}return function IR(e){return e.reduce((t,n)=>({params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...n.routeConfig?.data,...n._resolvedData}}),{params:{},data:{},resolve:{}})}(n.slice(r))}class wa{constructor(t,n,r,i,o,s,a,u,l,c,d,f){this.url=t,this.params=n,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.title=this.data?.[co],this.routeConfig=u,this._urlSegment=l,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=ti(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ti(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class ZD extends WD{constructor(t,n){super(n),this.url=t,Dd(this,n)}toString(){return JD(this._root)}}function Dd(e,t){t.value._routerState=e,t.children.forEach(n=>Dd(e,n))}function JD(e){const t=e.children.length>0?` { ${e.children.map(JD).join(", ")} } `:"";return`${e.value}${t}`}function Cd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Yt(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),Yt(t.params,n.params)||e.params.next(n.params),function $x(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Yt(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),Yt(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function _d(e,t){const n=Yt(e.params,t.params)&&function Gx(e,t){return sr(e,t)&&e.every((n,r)=>Yt(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||_d(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yo(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const i=function MR(e,t,n){return t.children.map(r=>{for(const i of n.children)if(e.shouldReuseRoute(r.value,i.value.snapshot))return yo(e,r,i);return yo(e,r)})}(e,t,n);return new _n(r,i)}{if(e.shouldAttach(t.value)){const o=e.retrieve(t.value);if(null!==o){const s=o.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>yo(e,a)),s}}const r=function TR(e){return new lr(new It(e.url),new It(e.params),new It(e.queryParams),new It(e.fragment),new It(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),i=t.children.map(o=>yo(e,o));return new _n(r,i)}}const wd="ngNavigationCancelingError";function YD(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=ar(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,i=XD(!1,0,t);return i.url=n,i.navigationBehaviorOptions=r,i}function XD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[wd]=!0,r.cancellationCode=t,n&&(r.url=n),r}function eC(e){return tC(e)&&ar(e.url)}function tC(e){return e&&e[wd]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class AR{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new vo,this.attachRef=null}}let vo=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const i=this.getOrCreateContext(n);i.outlet=r,this.contexts.set(n,i)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new AR,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ba=!1;let Ea=(()=>{class e{constructor(n,r,i,o,s){this.parentContexts=n,this.location=r,this.changeDetector=o,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new Je,this.deactivateEvents=new Je,this.attachEvents=new Je,this.detachEvents=new Je,this.name=i||W,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,ba);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,ba);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,ba);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new T(4013,ba);this._activatedRoute=n;const i=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,u=new xR(n,a,i.injector);if(r&&function RR(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const l=r.resolveComponentFactory(s);this.activated=i.createComponent(l,i.length,u)}else this.activated=i.createComponent(s,{index:i.length,injector:u,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(M(vo),M(Lt),function wi(e){return function bw(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let i=0;for(;i<r;){const o=n[i];if(Qf(o))break;if(0===o)i+=2;else if("number"==typeof o)for(i++;i<r&&"string"==typeof n[i];)i++;else{if(o===t)return n[i+1];i+=2}}}return null}(xe(),e)}("name"),M(_c),M(Tn))},e.\u0275dir=je({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class xR{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===lr?this.route:t===vo?this.childContexts:this.parent.get(t,n)}}let bd=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["ng-component"]],standalone:!0,features:[Jm],decls:1,vars:0,template:function(n,r){1&n&&b(0,"router-outlet")},dependencies:[Ea],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nC(e,t){return e.providers&&!e._injector&&(e._injector=Fs(e.providers,t,`Route: ${e.path}`)),e._injector??t}function Id(e){const t=e.children&&e.children.map(Id),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==W&&(n.component=bd),n}function Mt(e){return e.outlet||W}function rC(e,t){const n=e.filter(r=>Mt(r)===t);return n.push(...e.filter(r=>Mt(r)!==t)),n}function Do(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){const n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kR{constructor(t,n,r,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=i}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Cd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const i=ii(n);t.children.forEach(o=>{const s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),ke(i,(o,s)=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(t,n,r){const i=t.value,o=n?n.value:null;if(i===o)if(i.component){const s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else o&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),i=r&&t.value.component?r.children:n,o=ii(t);for(const s of Object.keys(o))this.deactivateRouteAndItsChildren(o[s],i);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),i=r&&t.value.component?r.children:n,o=ii(t);for(const s of Object.keys(o))this.deactivateRouteAndItsChildren(o[s],i);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const i=ii(n);t.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new wR(o.value.snapshot))}),t.children.length&&this.forwardEvent(new CR(t.value.snapshot))}activateRoutes(t,n,r){const i=t.value,o=n?n.value:null;if(Cd(i),i===o)if(i.component){const s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(i.component){const s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){const a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Cd(a.route.value),this.activateChildRoutes(t,null,s.children)}else{const a=Do(i.snapshot),u=a?.get(ki)??null;s.attachRef=null,s.route=i,s.resolver=u,s.injector=a,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(t,null,s.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class iC{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class Ia{constructor(t,n){this.component=t,this.route=n}}function LR(e,t,n){const r=e._root;return Co(r,t?t._root:null,n,[r.value])}function oi(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function S_(e){return null!==Oo(e)}(e)?t.get(e):e:r}function Co(e,t,n,r,i={canDeactivateChecks:[],canActivateChecks:[]}){const o=ii(t);return e.children.forEach(s=>{(function VR(e,t,n,r,i={canDeactivateChecks:[],canActivateChecks:[]}){const o=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){const u=function $R(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!sr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!sr(e.url,t.url)||!Yt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!_d(e,t)||!Yt(e.queryParams,t.queryParams);default:return!_d(e,t)}}(s,o,o.routeConfig.runGuardsAndResolvers);u?i.canActivateChecks.push(new iC(r)):(o.data=s.data,o._resolvedData=s._resolvedData),Co(e,t,o.component?a?a.children:null:n,r,i),u&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Ia(a.outlet.component,s))}else s&&_o(t,a,i),i.canActivateChecks.push(new iC(r)),Co(e,null,o.component?a?a.children:null:n,r,i)})(s,o[s.value.outlet],n,r.concat([s.value]),i),delete o[s.value.outlet]}),ke(o,(s,a)=>_o(s,n.getContext(a),i)),i}function _o(e,t,n){const r=ii(e),i=e.value;ke(r,(o,s)=>{_o(o,i.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new Ia(i.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,i))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wo(e){return"function"==typeof e}function Sd(e){return e instanceof da||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Sa=Symbol("INITIAL_VALUE");function si(){return St(e=>id(e.map(t=>t.pipe(Jt(1),sd(Sa)))).pipe(P(t=>{for(const n of t)if(!0!==n){if(n===Sa)return Sa;if(!1===n||n instanceof or)return n}return!0}),Et(t=>t!==Sa),Jt(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oC(e){return function WC(...e){return Zd(e)}(Oe(t=>{if(ar(t))throw YD(0,t)}),P(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Md={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function sC(e,t,n,r,i){const o=Td(e,t,n);return o.matched?function rN(e,t,n,r){const i=t.canMatch;return i&&0!==i.length?R(i.map(s=>{const a=oi(s,e);return $n(function WR(e){return e&&wo(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(si(),oC()):R(!0)}(r=nC(t,r),t,n).pipe(P(s=>!0===s?o:{...Md})):R(o)}function Td(e,t,n){if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...Md}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||Vx)(n,e,t);if(!i)return{...Md};const o={};ke(i.posParams,(a,u)=>{o[u]=a.path});const s=i.consumed.length>0?{...o,...i.consumed[i.consumed.length-1].parameters}:o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Ma(e,t,n,r,i="corrected"){if(n.length>0&&function sN(e,t,n){return n.some(r=>Ta(e,t,r)&&Mt(r)!==W)}(e,n,r)){const s=new q(t,function oN(e,t,n,r){const i={};i[W]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const o of n)if(""===o.path&&Mt(o)!==W){const s=new q([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,i[Mt(o)]=s}return i}(e,t,r,new q(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function aN(e,t,n){return n.some(r=>Ta(e,t,r))}(e,n,r)){const s=new q(e.segments,function iN(e,t,n,r,i,o){const s={};for(const a of r)if(Ta(e,n,a)&&!i[Mt(a)]){const u=new q([],{});u._sourceSegment=e,u._segmentIndexShift="legacy"===o?e.segments.length:t.length,s[Mt(a)]=u}return{...i,...s}}(e,t,n,r,e.children,i));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const o=new q(e.segments,e.children);return o._sourceSegment=e,o._segmentIndexShift=t.length,{segmentGroup:o,slicedSegments:n}}function Ta(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function aC(e,t,n,r){return!!(Mt(e)===r||r!==W&&Ta(t,n,e))&&("**"===e.path||Td(t,e,n).matched)}function uC(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Aa=!1;class xa{constructor(t){this.segmentGroup=t||null}}class lC{constructor(t){this.urlTree=t}}function bo(e){return lo(new xa(e))}function cC(e){return lo(new lC(e))}class dN{constructor(t,n,r,i,o){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=i,this.config=o,this.allowRedirects=!0}apply(){const t=Ma(this.urlTree.root,[],[],this.config).segmentGroup,n=new q(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,W).pipe(P(o=>this.createUrlTree(Ca(o),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Vn(o=>{if(o instanceof lC)return this.allowRedirects=!1,this.match(o.urlTree);throw o instanceof xa?this.noMatchError(o):o}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,W).pipe(P(i=>this.createUrlTree(Ca(i),t.queryParams,t.fragment))).pipe(Vn(i=>{throw i instanceof xa?this.noMatchError(i):i}))}noMatchError(t){return new T(4002,Aa)}createUrlTree(t,n,r){const i=fd(t);return new or(i,n,r)}expandSegmentGroup(t,n,r,i){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(P(o=>new q([],o))):this.expandSegment(t,r,n,r.segments,i,!0)}expandChildren(t,n,r){const i=[];for(const o of Object.keys(r.children))"primary"===o?i.unshift(o):i.push(o);return re(i).pipe(kn(o=>{const s=r.children[o],a=rC(n,o);return this.expandSegmentGroup(t,a,s,o).pipe(P(u=>({segment:u,outlet:o})))}),ad((o,s)=>(o[s.outlet]=s.segment,o),{}),ED())}expandSegment(t,n,r,i,o,s){return re(r).pipe(kn(a=>this.expandSegmentAgainstRoute(t,n,r,a,i,o,s).pipe(Vn(l=>{if(l instanceof xa)return R(null);throw l}))),jn(a=>!!a),Vn((a,u)=>{if(Sd(a))return uC(n,i,o)?R(new q([],{})):bo(n);throw a}))}expandSegmentAgainstRoute(t,n,r,i,o,s,a){return aC(i,n,o,s)?void 0===i.redirectTo?this.matchSegmentAgainstRoute(t,n,i,o,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,i,o,s):bo(n):bo(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,i,o,s){return"**"===i.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,i,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,i,o,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,i){const o=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?cC(o):this.lineralizeSegments(r,o).pipe(Ae(s=>{const a=new q(s,{});return this.expandSegment(t,a,n,s,i,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,i,o,s){const{matched:a,consumedSegments:u,remainingSegments:l,positionalParamSegments:c}=Td(n,i,o);if(!a)return bo(n);const d=this.applyRedirectCommands(u,i.redirectTo,c);return i.redirectTo.startsWith("/")?cC(d):this.lineralizeSegments(i,d).pipe(Ae(f=>this.expandSegment(t,n,r,f.concat(l),s,!1)))}matchSegmentAgainstRoute(t,n,r,i,o){return"**"===r.path?(t=nC(r,t),r.loadChildren?(r._loadedRoutes?R({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(P(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new q(i,{})))):R(new q(i,{}))):sC(n,r,i,t).pipe(St(({matched:s,consumedSegments:a,remainingSegments:u})=>s?this.getChildConfig(t=r._injector??t,r,i).pipe(Ae(c=>{const d=c.injector??t,f=c.routes,{segmentGroup:h,slicedSegments:g}=Ma(n,a,u,f),v=new q(h.segments,h.children);if(0===g.length&&v.hasChildren())return this.expandChildren(d,f,v).pipe(P(D=>new q(a,D)));if(0===f.length&&0===g.length)return R(new q(a,{}));const C=Mt(r)===o;return this.expandSegment(d,v,f,g,C?W:o,!0).pipe(P(E=>new q(a.concat(E.segments),E.children)))})):bo(n)))}getChildConfig(t,n,r){return n.children?R({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?R({routes:n._loadedRoutes,injector:n._loadedInjector}):function nN(e,t,n,r){const i=t.canLoad;return void 0===i||0===i.length?R(!0):R(i.map(s=>{const a=oi(s,e);return $n(function UR(e){return e&&wo(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(si(),oC())}(t,n,r).pipe(Ae(i=>i?this.configLoader.loadChildren(t,n).pipe(Oe(o=>{n._loadedRoutes=o.routes,n._loadedInjector=o.injector})):function lN(e){return lo(XD(Aa,3))}())):R({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],i=n.root;for(;;){if(r=r.concat(i.segments),0===i.numberOfChildren)return R(r);if(i.numberOfChildren>1||!i.children[W])return lo(new T(4e3,Aa));i=i.children[W]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,i){const o=this.createSegmentGroup(t,n.root,r,i);return new or(o,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return ke(t,(i,o)=>{if("string"==typeof i&&i.startsWith(":")){const a=i.substring(1);r[o]=n[a]}else r[o]=i}),r}createSegmentGroup(t,n,r,i){const o=this.createSegments(t,n.segments,r,i);let s={};return ke(n.children,(a,u)=>{s[u]=this.createSegmentGroup(t,a,r,i)}),new q(o,s)}createSegments(t,n,r,i){return n.map(o=>o.path.startsWith(":")?this.findPosParam(t,o,i):this.findOrReturn(o,r))}findPosParam(t,n,r){const i=r[n.path.substring(1)];if(!i)throw new T(4001,Aa);return i}findOrReturn(t,n){let r=0;for(const i of n){if(i.path===t.path)return n.splice(r),i;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class hN{}class mN{constructor(t,n,r,i,o,s,a,u){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=i,this.url=o,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=u}recognize(){const t=Ma(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,W).pipe(P(n=>{if(null===n)return null;const r=new wa([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},W,this.rootComponentType,null,this.urlTree.root,-1,{}),i=new _n(r,n),o=new ZD(this.url,i);return this.inheritParamsAndData(o._root),o}))}inheritParamsAndData(t){const n=t.value,r=KD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(i=>this.inheritParamsAndData(i))}processSegmentGroup(t,n,r,i){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,i)}processChildren(t,n,r){return re(Object.keys(r.children)).pipe(kn(i=>{const o=r.children[i],s=rC(n,i);return this.processSegmentGroup(t,s,o,i)}),ad((i,o)=>i&&o?(i.push(...o),i):null),function Lx(e,t=!1){return fe((n,r)=>{let i=0;n.subscribe(he(r,o=>{const s=e(o,i++);(s||t)&&r.next(o),!s&&r.complete()}))})}(i=>null!==i),ha(null),ED(),P(i=>{if(null===i)return null;const o=dC(i);return function yN(e){e.sort((t,n)=>t.value.outlet===W?-1:n.value.outlet===W?1:t.value.outlet.localeCompare(n.value.outlet))}(o),o}))}processSegment(t,n,r,i,o){return re(n).pipe(kn(s=>this.processSegmentAgainstRoute(s._injector??t,s,r,i,o)),jn(s=>!!s),Vn(s=>{if(Sd(s))return uC(r,i,o)?R([]):R(null);throw s}))}processSegmentAgainstRoute(t,n,r,i,o){if(n.redirectTo||!aC(n,r,i,o))return R(null);let s;if("**"===n.path){const a=i.length>0?TD(i).parameters:{},u=hC(r)+i.length;s=R({snapshot:new wa(i,a,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,gC(n),Mt(n),n.component??n._loadedComponent??null,n,fC(r),u,mC(n),u),consumedSegments:[],remainingSegments:[]})}else s=sC(r,n,i,t).pipe(P(({matched:a,consumedSegments:u,remainingSegments:l,parameters:c})=>{if(!a)return null;const d=hC(r)+u.length;return{snapshot:new wa(u,c,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,gC(n),Mt(n),n.component??n._loadedComponent??null,n,fC(r),d,mC(n),d),consumedSegments:u,remainingSegments:l}}));return s.pipe(St(a=>{if(null===a)return R(null);const{snapshot:u,consumedSegments:l,remainingSegments:c}=a;t=n._injector??t;const d=n._loadedInjector??t,f=function vN(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:h,slicedSegments:g}=Ma(r,l,c,f.filter(C=>void 0===C.redirectTo),this.relativeLinkResolution);if(0===g.length&&h.hasChildren())return this.processChildren(d,f,h).pipe(P(C=>null===C?null:[new _n(u,C)]));if(0===f.length&&0===g.length)return R([new _n(u,[])]);const v=Mt(n)===o;return this.processSegment(d,f,h,g,v?W:o).pipe(P(C=>null===C?null:[new _n(u,C)]))}))}}function DN(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function dC(e){const t=[],n=new Set;for(const r of e){if(!DN(r)){t.push(r);continue}const i=t.find(o=>r.value.routeConfig===o.value.routeConfig);void 0!==i?(i.children.push(...r.children),n.add(i)):t.push(r)}for(const r of n){const i=dC(r.children);t.push(new _n(r.value,i))}return t.filter(r=>!n.has(r))}function fC(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function hC(e){let t=e,n=t._segmentIndexShift??0;for(;t._sourceSegment;)t=t._sourceSegment,n+=t._segmentIndexShift??0;return n-1}function gC(e){return e.data||{}}function mC(e){return e.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yC(e){return"string"==typeof e.title||null===e.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ad(e){return St(t=>{const n=e(t);return n?re(n).pipe(P(()=>t)):R(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vC=(()=>{class e{buildTitle(n){let r,i=n.root;for(;void 0!==i;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===W);return r}getResolvedTitleForRoute(n){return n.data[co]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:function(){return Ce(DC)},providedIn:"root"}),e})(),DC=(()=>{class e extends vC{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(A(rD))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class MN{}class AN extends class TN{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Na=new k("",{providedIn:"root",factory:()=>({})}),xd=new k("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return R(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=$n(n.loadComponent()).pipe(Oe(o=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o}),ud(()=>{this.componentLoaders.delete(n)})),i=new _D(r,()=>new ze).pipe(od());return this.componentLoaders.set(n,i),i}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return R({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const o=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(P(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let u,l,c=!1;Array.isArray(a)?l=a:(u=a.create(n).injector,l=MD(u.get(xd,[],F.Self|F.Optional)));return{routes:l.map(Id),injector:u}}),ud(()=>{this.childrenLoaders.delete(r)})),s=new _D(o,()=>new ze).pipe(od());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return $n(n()).pipe(Ae(r=>r instanceof Km||Array.isArray(r)?R(r):re(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(A(Ct),A(fc))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class RN{}class NN{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function PN(e){throw e}function ON(e,t,n){return t.parse("/")}const FN={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},kN={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function _C(){const e=Ce(OD),t=Ce(vo),n=Ce(Tc),r=Ce(Ct),i=Ce(fc),o=Ce(xd,{optional:!0})??[],s=Ce(Na,{optional:!0})??{},a=Ce(DC),u=Ce(vC,{optional:!0}),l=Ce(RN,{optional:!0}),c=Ce(MN,{optional:!0}),d=new Le(null,e,t,n,r,i,MD(o));return l&&(d.urlHandlingStrategy=l),c&&(d.routeReuseStrategy=c),d.titleStrategy=u??a,function LN(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(s,d),d}let Le=(()=>{class e{constructor(n,r,i,o,s,a,u){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=i,this.location=o,this.config=u,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new ze,this.errorHandler=PN,this.malformedUriErrorHandler=ON,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>R(void 0),this.urlHandlingStrategy=new NN,this.routeReuseStrategy=new AN,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Rd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new vR(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new yR(f)),this.ngModule=s.get(nr),this.console=s.get(aT);const d=s.get(Ie);this.isNgZoneEnabled=d instanceof Ie&&Ie.isInAngularZone(),this.resetConfig(u),this.currentUrlTree=function Bx(){return new or(new q([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=QD(this.currentUrlTree,this.rootComponentType),this.transitions=new It({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(Et(i=>0!==i.id),P(i=>({...i,extractedUrl:this.urlHandlingStrategy.extract(i.rawUrl)})),St(i=>{let o=!1,s=!1;return R(i).pipe(Oe(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),St(a=>{const u=this.browserUrlTree.toString(),l=!this.navigated||a.extractedUrl.toString()!==u||u!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||l)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return wC(a.source)&&(this.browserUrlTree=a.extractedUrl),R(a).pipe(St(d=>{const f=this.transitions.getValue();return r.next(new md(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?tn:Promise.resolve(d)}),function fN(e,t,n,r){return St(i=>function cN(e,t,n,r,i){return new dN(e,t,n,r,i).apply()}(e,t,n,i.extractedUrl,r).pipe(P(o=>({...i,urlAfterRedirects:o}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Oe(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},i.urlAfterRedirects=d.urlAfterRedirects}),function _N(e,t,n,r,i,o){return Ae(s=>function gN(e,t,n,r,i,o,s="emptyOnly",a="legacy"){return new mN(e,t,n,r,i,s,a,o).recognize().pipe(St(u=>null===u?function pN(e){return new ue(t=>t.error(e))}(new hN):R(u)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,i,o).pipe(P(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),Oe(d=>{if(i.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new fR(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(l&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:g,restoredState:v,extras:C}=a,w=new md(f,this.serializeUrl(h),g,v);r.next(w);const E=QD(h,this.rootComponentType).snapshot;return R(i={...a,targetSnapshot:E,urlAfterRedirects:h,extras:{...C,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),tn}),Oe(a=>{const u=new hR(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(u)}),P(a=>i={...a,guards:LR(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function QR(e,t){return Ae(n=>{const{targetSnapshot:r,currentSnapshot:i,guards:{canActivateChecks:o,canDeactivateChecks:s}}=n;return 0===s.length&&0===o.length?R({...n,guardsResult:!0}):function KR(e,t,n,r){return re(e).pipe(Ae(i=>function tN(e,t,n,r,i){const o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return o&&0!==o.length?R(o.map(a=>{const u=Do(t)??i,l=oi(a,u);return $n(function GR(e){return e&&wo(e.canDeactivate)}(l)?l.canDeactivate(e,t,n,r):u.runInContext(()=>l(e,t,n,r))).pipe(jn())})).pipe(si()):R(!0)}(i.component,i.route,n,t,r)),jn(i=>!0!==i,!0))}(s,r,i,e).pipe(Ae(a=>a&&function BR(e){return"boolean"==typeof e}(a)?function ZR(e,t,n,r){return re(t).pipe(kn(i=>fa(function YR(e,t){return null!==e&&t&&t(new DR(e)),R(!0)}(i.route.parent,r),function JR(e,t){return null!==e&&t&&t(new _R(e)),R(!0)}(i.route,r),function eN(e,t,n){const r=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(s=>function jR(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>CD(()=>R(s.guards.map(u=>{const l=Do(s.node)??n,c=oi(u,l);return $n(function zR(e){return e&&wo(e.canActivateChild)}(c)?c.canActivateChild(r,e):l.runInContext(()=>c(r,e))).pipe(jn())})).pipe(si())));return R(o).pipe(si())}(e,i.path,n),function XR(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return R(!0);const i=r.map(o=>CD(()=>{const s=Do(t)??n,a=oi(o,s);return $n(function HR(e){return e&&wo(e.canActivate)}(a)?a.canActivate(t,e):s.runInContext(()=>a(t,e))).pipe(jn())}));return R(i).pipe(si())}(e,i.route,n))),jn(i=>!0!==i,!0))}(r,o,e,t):R(a)),P(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),Oe(a=>{if(i.guardsResult=a.guardsResult,ar(a.guardsResult))throw YD(0,a.guardsResult);const u=new pR(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(u)}),Et(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Ad(a=>{if(a.guards.canActivateChecks.length)return R(a).pipe(Oe(u=>{const l=new gR(u.id,this.serializeUrl(u.extractedUrl),this.serializeUrl(u.urlAfterRedirects),u.targetSnapshot);this.triggerEvent(l)}),St(u=>{let l=!1;return R(u).pipe(function wN(e,t){return Ae(n=>{const{targetSnapshot:r,guards:{canActivateChecks:i}}=n;if(!i.length)return R(n);let o=0;return re(i).pipe(kn(s=>function bN(e,t,n,r){const i=e.routeConfig,o=e._resolve;return void 0!==i?.title&&!yC(i)&&(o[co]=i.title),function EN(e,t,n,r){const i=function IN(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===i.length)return R({});const o={};return re(i).pipe(Ae(s=>function SN(e,t,n,r){const i=Do(t)??r,o=oi(e,i);return $n(o.resolve?o.resolve(t,n):i.runInContext(()=>o(t,n)))}(e[s],t,n,r).pipe(jn(),Oe(a=>{o[s]=a}))),pa(1),ID(o),Vn(s=>Sd(s)?tn:lo(s)))}(o,e,t,r).pipe(P(s=>(e._resolvedData=s,e.data=KD(e,n).resolve,i&&yC(i)&&(e.data[co]=i.title),null)))}(s.route,r,e,t)),Oe(()=>o++),pa(1),Ae(s=>o===i.length?R(n):tn))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Oe({next:()=>l=!0,complete:()=>{l||(this.restoreHistory(u),this.cancelNavigationTransition(u,"",2))}}))}),Oe(u=>{const l=new mR(u.id,this.serializeUrl(u.extractedUrl),this.serializeUrl(u.urlAfterRedirects),u.targetSnapshot);this.triggerEvent(l)}))}),Ad(a=>{const u=l=>{const c=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(l.routeConfig).pipe(Oe(d=>{l.component=d}),P(()=>{})));for(const d of l.children)c.push(...u(d));return c};return id(u(a.targetSnapshot.root)).pipe(ha(),Jt(1))}),Ad(()=>this.afterPreactivation()),P(a=>{const u=function SR(e,t,n){const r=yo(e,t._root,n?n._root:void 0);return new qD(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return i={...a,targetRouterState:u}}),Oe(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>P(r=>(new kR(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),Oe({next(){o=!0},complete(){o=!0}}),ud(()=>{o||s||this.cancelNavigationTransition(i,"",1),this.currentNavigation?.id===i.id&&(this.currentNavigation=null)}),Vn(a=>{if(s=!0,tC(a)){eC(a)||(this.navigated=!0,this.restoreHistory(i,!0));const u=new _a(i.id,this.serializeUrl(i.extractedUrl),a.message,a.cancellationCode);if(r.next(u),eC(a)){const l=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),c={skipLocationChange:i.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||wC(i.source)};this.scheduleNavigation(l,"imperative",null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}else i.resolve(!1)}else{this.restoreHistory(i,!0);const u=new zD(i.id,this.serializeUrl(i.extractedUrl),a,i.targetSnapshot??void 0);r.next(u);try{i.resolve(this.errorHandler(a))}catch(l){i.reject(l)}}return tn}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{const i={replaceUrl:!0},o=n.state?.navigationId?n.state:null;if(o){const a={...o};delete a.navigationId,delete a.\u0275routerPageId,0!==Object.keys(a).length&&(i.state=a)}const s=this.parseUrl(n.url);this.scheduleNavigation(s,r,o,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map(Id),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:u}=r,l=i||this.routerState.root,c=u?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...o};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}return null!==d&&(d=this.removeEmptyProps(d)),sR(l,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const i=ar(n)?n:this.parseUrl(n),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function jN(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new T(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(i){r=this.malformedUriErrorHandler(i,this.urlSerializer,n)}return r}isActive(n,r){let i;if(i=!0===r?{...FN}:!1===r?{...kN}:r,ar(n))return xD(this.currentUrlTree,n,i);const o=this.parseUrl(n);return xD(this.currentUrlTree,o,i)}removeEmptyProps(n){return Object.keys(n).reduce((r,i)=>{const o=n[i];return null!=o&&(r[i]=o),r},{})}processNavigations(){this.navigations.subscribe(n=>{this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new ur(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,u,l;s?(a=s.resolve,u=s.reject,l=s.promise):l=new Promise((f,h)=>{a=f,u=h});const c=++this.navigationId;let d;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(i=this.location.getState()),d=i&&i.\u0275routerPageId?i.\u0275routerPageId:o.replaceUrl||o.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):d=0,this.setTransition({id:c,targetPageId:d,source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:o,resolve:a,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(f=>Promise.reject(f))}setBrowserUrl(n,r){const i=this.urlSerializer.serialize(n),o={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(i)||r.extras.replaceUrl?this.location.replaceState(i,"",o):this.location.go(i,"",o)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){const i=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===i?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===i&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(i)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,i){const o=new _a(n.id,this.serializeUrl(n.extractedUrl),r,i);this.triggerEvent(o),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){ml()},e.\u0275prov=V({token:e,factory:function(){return _C()},providedIn:"root"}),e})();function wC(e){return"imperative"!==e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Eo=(()=>{class e{constructor(n,r,i){this.router=n,this.route=r,this.locationStrategy=i,this._preserveFragment=!1,this._skipLocationChange=!1,this._replaceUrl=!1,this.commands=null,this.href=null,this.onChanges=new ze,this.subscription=n.events.subscribe(o=>{o instanceof ur&&this.updateTargetUrlAndHref()})}set preserveFragment(n){this._preserveFragment=Xr(n)}get preserveFragment(){return this._preserveFragment}set skipLocationChange(n){this._skipLocationChange=Xr(n)}get skipLocationChange(){return this._skipLocationChange}set replaceUrl(n){this._replaceUrl=Xr(n)}get replaceUrl(){return this._replaceUrl}set routerLink(n){this.commands=null!=n?Array.isArray(n)?n:[n]:null}ngOnChanges(n){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(n,r,i,o,s){return!!(0!==n||r||i||o||s||"string"==typeof this.target&&"_self"!=this.target||null===this.urlTree)||(this.router.navigateByUrl(this.urlTree,{skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state}),!1)}updateTargetUrlAndHref(){this.href=null!==this.urlTree?this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}}return e.\u0275fac=function(n){return new(n||e)(M(Le),M(lr),M(ir))},e.\u0275dir=je({type:e,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(n,r){1&n&&ht("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),2&n&&Ss("target",r.target)("href",r.href,Lu)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",routerLink:"routerLink"},standalone:!0,features:[Zn]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bC{}let BN=(()=>{class e{constructor(n,r,i,o,s){this.router=n,this.injector=i,this.preloadingStrategy=o,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(Et(n=>n instanceof ur),kn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const i=[];for(const o of r){o.providers&&!o._injector&&(o._injector=Fs(o.providers,n,`Route: ${o.path}`));const s=o._injector??n,a=o._loadedInjector??s;o.loadChildren&&!o._loadedRoutes&&void 0===o.canLoad||o.loadComponent&&!o._loadedComponent?i.push(this.preloadConfig(s,o)):(o.children||o._loadedRoutes)&&i.push(this.processRoutes(a,o.children??o._loadedRoutes))}return re(i).pipe(fr())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let i;i=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):R(null);const o=i.pipe(Ae(s=>null===s?R(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(s.injector??n,s.routes))));return r.loadComponent&&!r._loadedComponent?re([o,this.loader.loadComponent(r)]).pipe(fr()):o})}}return e.\u0275fac=function(n){return new(n||e)(A(Le),A(fc),A(Tn),A(bC),A(Rd))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Pd=new k("");let EC=(()=>{class e{constructor(n,r,i={}){this.router=n,this.viewportScroller=r,this.options=i,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},i.scrollPositionRestoration=i.scrollPositionRestoration||"disabled",i.anchorScrolling=i.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof md?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof ur&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof GD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new GD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){ml()},e.\u0275prov=V({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ai(e,t){return{\u0275kind:e,\u0275providers:t}}function Od(e){return[{provide:xd,multi:!0,useValue:e}]}function SC(){const e=Ce(Ct);return t=>{const n=e.get(Hs);if(t!==n.components[0])return;const r=e.get(Le),i=e.get(MC);1===e.get(Fd)&&r.initialNavigation(),e.get(TC,null,F.Optional)?.setUpPreloading(),e.get(Pd,null,F.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),i.next(),i.complete()}}const MC=new k("",{factory:()=>new ze}),Fd=new k("",{providedIn:"root",factory:()=>1});const TC=new k("");function GN(e){return ai(0,[{provide:TC,useExisting:BN},{provide:bC,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const AC=new k("ROUTER_FORROOT_GUARD"),WN=[Tc,{provide:OD,useClass:cd},{provide:Le,useFactory:_C},vo,{provide:lr,useFactory:function IC(e){return e.routerState.root},deps:[Le]},Rd];function qN(){return new Wy("Router",Le)}let xC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[WN,[],Od(n),{provide:AC,useFactory:JN,deps:[[Le,new Ai,new xi]]},{provide:Na,useValue:r||{}},r?.useHash?{provide:ir,useClass:KT}:{provide:ir,useClass:yv},{provide:Pd,useFactory:()=>{const e=Ce(Le),t=Ce(hA),n=Ce(Na);return n.scrollOffset&&t.setOffset(n.scrollOffset),new EC(e,t,n)}},r?.preloadingStrategy?GN(r.preloadingStrategy).\u0275providers:[],{provide:Wy,multi:!0,useFactory:qN},r?.initialNavigation?YN(r):[],[{provide:RC,useFactory:SC},{provide:Vy,multi:!0,useExisting:RC}]]}}static forChild(n){return{ngModule:e,providers:[Od(n)]}}}return e.\u0275fac=function(n){return new(n||e)(A(AC,8))},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({imports:[bd]}),e})();function JN(e){return"guarded"}function YN(e){return["disabled"===e.initialNavigation?ai(3,[{provide:Vs,multi:!0,useFactory:()=>{const t=Ce(Le);return()=>{t.setUpLocationChangeListener()}}},{provide:Fd,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?ai(2,[{provide:Fd,useValue:0},{provide:Vs,multi:!0,deps:[Ct],useFactory:t=>{const n=t.get(qT,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(o=>{const s=t.get(Le),a=t.get(MC);(function i(o){t.get(Le).events.pipe(Et(a=>a instanceof ur||a instanceof _a||a instanceof zD),P(a=>a instanceof ur||a instanceof _a&&(0===a.code||1===a.code)&&null),Et(a=>null!==a),Jt(1)).subscribe(()=>{o()})})(()=>{o(!0),r=!0}),s.afterPreactivation=()=>(o(!0),r||a.closed?R(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const RC=new k("");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let eP=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["app-async-subject"]],decls:2,vars:0,template:function(n,r){1&n&&(y(0,"p"),m(1,"async-subject works!"),p())}}),e})();const kd={now:()=>(kd.delegate||Date).now(),delegate:void 0};class NC extends ze{constructor(t=1/0,n=1/0,r=kd){super(),this._bufferSize=t,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,n)}next(t){const{isStopped:n,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;n||(r.push(t),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(t),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!t.closed;s+=r?1:2)t.next(o[s]);return this._checkFinalizedStatuses(t),n}_trimBuffer(){const{_bufferSize:t,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*t;if(t<1/0&&o<r.length&&r.splice(0,r.length-o),!i){const s=n.now();let a=0;for(let u=1;u<r.length&&r[u]<=s;u+=2)a=u;a&&r.splice(0,a+1)}}}let pt=(()=>{class e{constructor(){this.exclusive=new ze,this.username=new It("Behave"),this.videoEmit=new NC(3,5e3)}print(n,r){const i=document.createElement("li");i.innerText=n,document.getElementById(r).appendChild(i)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),tP=(()=>{class e{constructor(n){this.designUtilityService=n}ngOnInit(){new ue(l=>{setTimeout(()=>{l.next("Java")},1e3),setTimeout(()=>{l.next("Angular")},2e3),setTimeout(()=>{l.next("React")},3e3),setTimeout(()=>{l.next("JQuery")},4e3),setTimeout(()=>{l.next("MySQL"),l.complete()},5e3)}).subscribe(l=>{this.designUtilityService.print(l,"elContainer")},l=>{this.techStatus="error"},()=>{this.techStatus="completed"});const r=["MySQL","JQuery","React","Angular","Java"];let i=0;const o=new ue(l=>{setInterval(()=>{l.next(r[i]),i>=4&&l.complete(),i++},1e3)});this.cusObj2Subs=o.subscribe(l=>{this.designUtilityService.print(l,"elContainer2")},l=>{this.techStatus2="error"},()=>{this.techStatus2="completed"});const s=["Roy","Will","Rosanna","Eduardo","Dav","Florry","Allayne"];let a=0;const u=new ue(l=>{setInterval(()=>{l.next(s[a]),a>=3&&l.error(),a>=5&&l.complete(),a++},1e3),this.cusObj3Subs=u.subscribe(c=>{console.log("res: ",c),this.currentName=c},c=>{this.techStatus2="error"},()=>{this.techStatus2="completed"})})}ngOnDestroy(){this.cusObj2Subs.unsubscribe(),this.cusObj3Subs.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-custom"]],decls:33,vars:3,consts:[[1,"my-3"],[1,"row"],[1,"col-md-6"],["id","elContainer",1,"techList",3,"ngClass"],["id","elContainer2",1,"techList",3,"ngClass"],[1,"col-md-12"],[1,"bg-light","py-2","px-3","border","rounded"],[1,"text-success"],[1,"badge","text-bg-success"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"Of & From"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"strong"),m(7,"Ex - 01 (Manual)"),p(),b(8,"hr")(9,"ul",3),p(),y(10,"div",2)(11,"strong"),m(12,"Ex - 01 (Custom Interval)"),p(),b(13,"hr")(14,"ul",4),p()(),b(15,"br"),y(16,"div",1)(17,"div",5)(18,"strong"),m(19,"Ex - 03 (Random Names)"),p(),b(20,"br")(21,"br"),y(22,"p",6)(23,"strong"),m(24,"Random Names : "),p(),m(25," 'Roy', 'Will', 'Rosanna', 'Eduardo', 'Dav', 'Florry', 'Allayne' "),p(),b(26,"hr"),y(27,"p"),m(28,"Current Name: "),y(29,"strong",7),m(30),p()(),y(31,"span",8),m(32,"Success"),p()()()()),2&n&&(x(9),ae("ngClass","completed"===r.techStatus?"completed":"error"===r.techStatus?"error":""),x(5),ae("ngClass","completed"===r.techStatus2?"completed":"error"===r.techStatus2?"error":""),x(16),ne(r.currentName))},dependencies:[jc]}),e})();const nP=["addListener","removeListener"],rP=["addEventListener","removeEventListener"],iP=["on","off"];function Xt(e,t,n,r){if(J(n)&&(r=n,n=void 0),r)return Xt(e,t,n).pipe(vD(r));const[i,o]=function aP(e){return J(e.addEventListener)&&J(e.removeEventListener)}(e)?rP.map(s=>a=>e[s](t,a,n)):function oP(e){return J(e.addListener)&&J(e.removeListener)}(e)?nP.map(PC(e,t)):function sP(e){return J(e.on)&&J(e.off)}(e)?iP.map(PC(e,t)):[];if(!i&&za(e))return Ae(s=>Xt(s,t,n))(gt(e));if(!i)throw new TypeError("Invalid event target");return new ue(s=>{const a=(...u)=>s.next(1<u.length?u:u[0]);return i(a),()=>o(a)})}function PC(e,t){return n=>r=>e[n](t,r)}class uP extends it{constructor(t,n){super()}schedule(t,n=0){return this}}const ka={setInterval(e,t,...n){const{delegate:r}=ka;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=ka;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};class Io{constructor(t,n=Io.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Io.now=kd.now;const La=new class cP extends Io{constructor(t,n=Io.now){super(t,n),this.actions=[],this._active=!1,this._scheduled=void 0}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class lP extends uP{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){if(this.closed)return this;this.state=t;const r=this.id,i=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(i,r,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return ka.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;ka.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let i,r=!1;try{this.work(t)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,dr(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}}),dP=La;function OC(e,t=La){return fe((n,r)=>{let i=null,o=null,s=null;const a=()=>{if(i){i.unsubscribe(),i=null;const l=o;o=null,r.next(l)}};function u(){const l=s+e,c=t.now();if(c<l)return i=this.schedule(void 0,l-c),void r.add(i);a()}n.subscribe(he(r,l=>{o=l,s=t.now(),i||(i=t.schedule(u,e),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function hP(e,t){return e===t}function ui(e=0,t,n=dP){let r=-1;return null!=t&&(pf(t)?n=t:r=t),new ue(i=>{let o=function pP(e){return e instanceof Date&&!isNaN(e)}(e)?+e-n.now():e;o<0&&(o=0);let s=0;return n.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function mP(e,t){if(1&e&&(y(0,"div",3),b(1,"div",4),p()),2&e){const n=fn(2);x(1),zi("width",n.diameter)("height",n.diameter)}}function yP(e,t){if(1&e&&b(0,"div",5),2&e){const n=fn().ngIf,r=fn();zi("background",r.color)("height",r.height)("width",n+"%")}}function vP(e,t){if(1&e&&(Ms(0),_e(1,mP,2,4,"div",1),_e(2,yP,1,6,"div",2),Ts()),2&e){const n=fn();x(1),ae("ngIf",n.includeSpinner),x(1),ae("ngIf",n.includeBar)}}class DP{constructor(t={}){this.config=t,this.state={action:null,value:0,initialValue:0},this.requests=null,this.disabled=!1,this.stream$=new ze,this._value$=null,this.timer$=n=>{let r=R(n);switch(n.action){case"start":case"increment":case"set":"start"===n.action&&0===this.config.latencyThreshold&&0===n.value&&(n.value=n.initialValue),this.requests>0&&(r=ui(this.config.latencyThreshold,250).pipe(P(i=>({...n,value:0===i?this.state.value||n.initialValue:this._increment()}))));break;case"complete":case"stop":r=0===n.value?R({...n}):ui(0,500).pipe(Jt(2),P(i=>({value:0===i?100:0})))}return r.pipe(P(i=>({...i,action:"set"})),Oe(i=>this.next(i,!1)))},this.config={latencyThreshold:0,...t}}get value$(){return this._value$?this._value$:this._value$=this.stream$.pipe(sd(this.state),St(t=>this.timer$(t)),function gP(e,t,n){let r,i=!1;return e&&"object"==typeof e?({bufferSize:r=1/0,windowTime:t=1/0,refCount:i=!1,scheduler:n}=e):r=e??1/0,vf({connector:()=>new NC(r,t,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}(),P(t=>t.value))}start(t=2){this.disabled||this.next({action:"start",initialValue:t})}stop(){this.next({action:"stop"})}complete(){this.next({action:"complete"})}disable(){this.disabled=!0}set(t){this.next({action:"set",value:t})}increment(t=0){this.next({action:"increment",value:t})}next(t,n=!0){switch(t.action){case"start":this.requests=(this.requests||0)+1;break;case"complete":if(this.requests=(this.requests||1)-1,this.requests>0)return;break;case"stop":this.requests=0;break;case"increment":t.value=this._increment(t.value)}this.state={...this.state,action:null,...t},n&&this.stream$.next(this.state)}_increment(t=0){const n=this.state.value;return n>=99&&(t=0),0===t&&(t=n>=0&&n<25?3*Math.random()+3:n>=25&&n<65?3*Math.random():n>=65&&n<90?2*Math.random():n>=90&&n<99?.5:0),t+n}}const CP=new k("LOADING_BAR_CONFIG");let FC=(()=>{class e{constructor(n,r={},i){this.platformId=n,this.config=r,this.zone=i,this.refs={},this.streams$=new ze,this.value$=this.streams$.pipe(sd(null),St(()=>id(Object.keys(this.refs).map(o=>this.refs[o].value$))),function _P(e){return e?t=>new ue(n=>t.subscribe(r=>e.run(()=>n.next(r)),r=>e.run(()=>n.error(r)),()=>e.run(()=>n.complete()))):t=>t}(this.zone),P(o=>Math.max(0,...o)))}get progress$(){return this.value$}start(n=2){this.useRef().start(n)}set(n){this.useRef().set(n)}increment(n){this.useRef().increment(n)}complete(){this.useRef().complete()}stop(){this.useRef().stop()}useRef(n="default"){return this.refs[n]||(this.refs[n]=new DP(this.config),this.streams$.next(),function fA(e){return e===kv}(this.platformId)||this.refs[n].disable()),this.refs[n]}}return e.\u0275fac=function(n){return new(n||e)(A(Bs),A(CP,8),A(Ie,8))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),wP=(()=>{class e{constructor(n){this.loader=n,this.includeSpinner=!0,this.includeBar=!0,this.fixed=!0,this.color="#29d"}get value$(){return this.ref?this.loader.useRef(this.ref).value$:this.loader.value$}}return e.\u0275fac=function(n){return new(n||e)(M(FC))},e.\u0275cmp=le({type:e,selectors:[["ngx-loading-bar"]],hostVars:3,hostBindings:function(n,r){2&n&&(Ss("fixed",r.fixed),zi("color",r.color))},inputs:{includeSpinner:"includeSpinner",includeBar:"includeBar",fixed:"fixed",color:"color",value:"value",ref:"ref",height:"height",diameter:"diameter"},decls:2,vars:3,consts:[[4,"ngIf"],["class","ngx-spinner",4,"ngIf"],["class","ngx-bar",3,"background","height","width",4,"ngIf"],[1,"ngx-spinner"],[1,"ngx-spinner-icon"],[1,"ngx-bar"]],template:function(n,r){1&n&&(_e(0,vP,3,2,"ng-container",0),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ly(e,t){const n=K();let r;const i=e+22;n.firstCreatePass?(r=function _M(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[i]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(i,r.onDestroy)):r=n.data[i];const o=r.factory||(r.factory=Kn(r.type)),s=mt(M);try{const a=Ko(!1),u=o();return Ko(a),function dI(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,_(),i,u),u}finally{mt(s)}}(1,"async")),2&n&&ae("ngIf",null!=r.value?r.value:cy(1,1,r.value$))},dependencies:[ei,Pv],styles:["[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0px}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:loading-bar-spinner .4s linear infinite;animation:loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@-webkit-keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],changeDetection:0}),e})(),bP=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({imports:[[Fv]]}),e})();const EP=["myInput"],IP=["myInput2"];function SP(e,t){if(1&e&&(y(0,"span"),m(1,"Requested Data : "),y(2,"strong",11),m(3),p()()),2&e){const n=fn();x(3),ne(n.reqData)}}function MP(e,t){if(1&e&&(y(0,"span"),m(1,"Requested Data : "),y(2,"strong",11),m(3),p()()),2&e){const n=fn();x(3),ne(n.reqData2)}}let TP=(()=>{class e{constructor(n){this.loadingBarService=n,this.loader=this.loadingBarService.useRef("core")}ngAfterViewInit(){Xt(this.myInput.nativeElement,"keyup").pipe(P(i=>i.target.value),OC(500)).subscribe(i=>{console.log("res: ",i),this.reqData=i,this.loader.start(),setTimeout(()=>{this.reqData2=null,this.loader.complete()},1e3)}),Xt(this.myInput2.nativeElement,"keyup").pipe(P(i=>i.target.value),OC(500),function fP(e,t=wn){return e=e??hP,fe((n,r)=>{let i,o=!0;n.subscribe(he(r,s=>{const a=t(s);(o||!e(i,a))&&(o=!1,i=a,r.next(s))}))})}()).subscribe(i=>{console.log("res: ",i),this.reqData2=i,this.loadingBarService.start(),setTimeout(()=>{this.reqData2=null,this.loadingBarService.stop()},1e3)})}}return e.\u0275fac=function(n){return new(n||e)(M(FC))},e.\u0275cmp=le({type:e,selectors:[["app-debounce"]],viewQuery:function(n,r){if(1&n&&(Nn(EP,5),Nn(IP,5)),2&n){let i;Kt(i=Zt())&&(r.myInput=i.first),Kt(i=Zt())&&(r.myInput2=i.first)}},decls:31,vars:2,consts:[[1,"my-3"],[1,"row"],[1,"col-md-6"],[1,"text-primary"],["for","colFormLabelLg",1,"col-sm-2","col-form-label","col-form-label-lg"],[1,"col-sm-10"],["type","text","id","colFormLabelLg","placeholder","Search...",1,"form-control","form-control-lg"],["myInput",""],[4,"ngIf"],[1,"text-warning"],["myInput2",""],[1,"text-success"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"DebouneTime & DistinctUntilChanged"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"strong"),m(7,"Ex - 01 "),y(8,"span",3),m(9,"DebounceTime"),p()(),b(10,"hr"),y(11,"div",1)(12,"label",4),m(13,"Search..."),p(),y(14,"div",5),b(15,"input",6,7),p()(),_e(17,SP,4,1,"span",8),p(),y(18,"div",2)(19,"strong"),m(20,"Ex - 02 "),y(21,"span",9),m(22,"DitinctUntilChnged"),p()(),b(23,"hr"),y(24,"div",1)(25,"label",4),m(26,"Search..."),p(),y(27,"div",5),b(28,"input",6,10),p()(),_e(30,MP,4,1,"span",8),p()()()),2&n&&(x(17),ae("ngIf",r.reqData),x(13),ae("ngIf",r.reqData2))},dependencies:[ei]}),e})();const xP=(e,t)=>(e.push(t),e);function Bn(){return fe((e,t)=>{(function AP(e,t){return fe(bD(e,t,arguments.length>=2,!1,!0))})(xP,[])(e).subscribe(t)})}const RP=[{id:1,first_name:"Minna",last_name:"Kildea",email:"mkildea0@acquirethisname.com",gender:"Female",ip_address:"203.2.7.114"},{id:2,first_name:"Christabel",last_name:"Morriarty",email:"cmorriarty1@ft.com",gender:"Female",ip_address:"222.209.8.224"},{id:3,first_name:"Corty",last_name:"Clemenzo",email:"cclemenzo2@jalbum.net",gender:"Male",ip_address:"88.169.182.127"},{id:4,first_name:"Austin",last_name:"Sturridge",email:"asturridge3@seattletimes.com",gender:"Male",ip_address:"92.251.134.151"},{id:5,first_name:"Cornelle",last_name:"Pinching",email:"cpinching4@telegraph.co.uk",gender:"Female",ip_address:"241.217.145.42"},{id:6,first_name:"Paulie",last_name:"Kingzett",email:"pkingzett5@redcross.org",gender:"Male",ip_address:"64.138.98.66"},{id:7,first_name:"Cecile",last_name:"Jouanny",email:"cjouanny6@skype.com",gender:"Female",ip_address:"64.207.184.122"},{id:8,first_name:"Chadwick",last_name:"Rainbird",email:"crainbird7@wordpress.org",gender:"Male",ip_address:"150.82.67.91"},{id:9,first_name:"Kerwin",last_name:"Maundrell",email:"kmaundrell8@sbwire.com",gender:"Male",ip_address:"148.179.48.180"},{id:10,first_name:"Valina",last_name:"Eymor",email:"veymor9@ifeng.com",gender:"Female",ip_address:"0.99.79.1"}];function NP(e,t){if(1&e&&(y(0,"tr")(1,"td"),m(2),p(),y(3,"td"),m(4),p(),y(5,"td"),m(6),p()()),2&e){const n=t.$implicit;x(2),ne(n.id),x(2),ne(n.first_name),x(2),ne(n.gender)}}function PP(e,t){if(1&e&&(y(0,"tr")(1,"td"),m(2),p(),y(3,"td"),m(4),p(),y(5,"td"),m(6),p()()),2&e){const n=t.$implicit;x(2),ne(n.id),x(2),ne(n.first_name),x(2),ne(n.gender)}}function OP(e,t){if(1&e&&(y(0,"tr")(1,"td"),m(2),p(),y(3,"td"),m(4),p(),y(5,"td"),m(6),p()()),2&e){const n=t.$implicit;x(2),ne(n.id),x(2),ne(n.first_name),x(2),ne(n.gender)}}let FP=(()=>{class e{constructor(){this.ary1=[],this.ary2=[],this.ary3=[],this.data=RP}ngOnInit(){const n=re(this.data);n.pipe(Et(r=>r.first_name.length>6),Bn()).subscribe(r=>{this.ary1=r}),n.pipe(Et(r=>"Male"===r.gender),Bn()).subscribe(r=>{this.ary2=r}),n.pipe(Et(r=>r.id<=6),Bn()).subscribe(r=>{this.ary3=r})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["app-filter"]],decls:59,vars:3,consts:[[1,"my-3"],[1,"row"],[1,"col-md-4"],[1,"bg-light","py-2","px-3","border","rounded"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"Filter"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"strong"),m(7,"Ex - 01"),p(),b(8,"hr"),y(9,"p",3)(10,"strong"),m(11,"Filter"),p(),m(12," by length "),p(),b(13,"br"),y(14,"table",4)(15,"tr")(16,"th"),m(17,"Id"),p(),y(18,"th"),m(19,"Name"),p(),y(20,"th"),m(21,"Gender"),p()(),_e(22,NP,7,3,"tr",5),p()(),y(23,"div",2)(24,"strong"),m(25,"Ex - 02"),p(),b(26,"hr"),y(27,"p",3)(28,"strong"),m(29,"Filter"),p(),m(30," by Gender "),p(),b(31,"br"),y(32,"table",4)(33,"tr")(34,"th"),m(35,"Id"),p(),y(36,"th"),m(37,"Name"),p(),y(38,"th"),m(39,"Gender"),p()(),_e(40,PP,7,3,"tr",5),p()(),y(41,"div",2)(42,"strong"),m(43,"Ex - 02"),p(),b(44,"hr"),y(45,"p",3)(46,"strong"),m(47,"Filter"),p(),m(48," by nth item "),p(),b(49,"br"),y(50,"table",4)(51,"tr")(52,"th"),m(53,"Id"),p(),y(54,"th"),m(55,"Name"),p(),y(56,"th"),m(57,"Gender"),p()(),_e(58,OP,7,3,"tr",5),p()()()()),2&n&&(x(22),ae("ngForOf",r.ary1),x(18),ae("ngForOf",r.ary2),x(18),ae("ngForOf",r.ary3))},dependencies:[io]}),e})();const kP=["addBtn"];let LP=(()=>{class e{constructor(n){this.designUtilityService=n}ngAfterViewInit(){let n=1;Xt(this.addBtn.nativeElement,"click").subscribe(r=>{let i="Video "+n++;this.designUtilityService.print(i,"elContainer"),this.designUtilityService.print(i,"elContainer2")})}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-from-event"]],viewQuery:function(n,r){if(1&n&&Nn(kP,5),2&n){let i;Kt(i=Zt())&&(r.addBtn=i.first)}},decls:25,vars:0,consts:[[1,"my-3"],[1,"row"],[1,"col-md-4"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"btn","btn-primary"],["addBtn",""],["id","elContainer"],["id","elContainer2"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"From Event"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"div",3)(7,"div",4),m(8,"Add Video"),p(),y(9,"div",5)(10,"button",6,7),m(12," Add "),p()()()(),y(13,"div",2)(14,"div",3)(15,"div",4),m(16,"List"),p(),y(17,"div",5),b(18,"ul",8),p()()(),y(19,"div",2)(20,"div",3)(21,"div",4),m(22,"List"),p(),y(23,"div",5),b(24,"ul",9),p()()()()())}}),e})();const jP=["addBtn"];let VP=(()=>{class e{constructor(n){this.designUtilityService=n}ngAfterViewInit(){Xt(this.addBtn.nativeElement,"click").subscribe(n=>{let r=1;const i=ui(5e3,1e3);this.videosubscription=i.subscribe(o=>{const s="Video "+r++;this.designUtilityService.print(s,"elContainer")})})}stop(){this.videosubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-interval"]],viewQuery:function(n,r){if(1&n&&Nn(jP,5),2&n){let i;Kt(i=Zt())&&(r.addBtn=i.first)}},decls:21,vars:0,consts:[[1,"my-3"],[1,"row"],[1,"col-md-4"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"btn","btn-primary"],["addBtn",""],[1,"btn","btn-primary","ml-2",3,"click"],["id","elContainer"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"Interval"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"div",3)(7,"div",4),m(8,"Add Video"),p(),y(9,"div",5)(10,"button",6,7),m(12," Start "),p(),y(13,"button",8),ht("click",function(){return r.stop()}),m(14," Stop "),p()()()(),y(15,"div",2)(16,"div",3)(17,"div",4),m(18,"User1"),p(),y(19,"div",5),b(20,"ul",9),p()()()()())}}),e})(),$P=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["app-list"]],decls:48,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"list"],["routerLink","fromEvent"],["routerLink","interval"],["routerLink","of-from"],["routerLink","to-array"],["routerLink","custom"],["routerLink","map"],["routerLink","pluck"],["routerLink","filter"],["routerLink","tap"],["routerLink","take"],["routerLink","retry"],["routerLink","debounce"],["routerLink","subject"],["routerLink","replay-subject"],["routerLink","async-subject"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li")(4,"a",3),m(5,"from"),p()(),y(6,"li")(7,"a",4),m(8,"Interval & Timer"),p()(),y(9,"li")(10,"a",5),m(11,"Of & From"),p()(),y(12,"li")(13,"a",6),m(14,"toArray"),p()(),y(15,"li")(16,"a",7),m(17,"Custom Observable"),p()(),y(18,"li")(19,"a",8),m(20,"Map"),p()(),y(21,"li")(22,"a",9),m(23,"pluck"),p()(),y(24,"li")(25,"a",10),m(26,"filter"),p()(),y(27,"li")(28,"a",11),m(29,"tap"),p()(),y(30,"li")(31,"a",12),m(32,"take, takeLast, takeUntil"),p()(),y(33,"li")(34,"a",13),m(35,"retry, retryWhen, scan, delay"),p()(),y(36,"li")(37,"a",14),m(38,"debounce"),p()(),y(39,"li")(40,"a",15),m(41,"subject"),p()(),y(42,"li")(43,"a",16),m(44,"replay-subject"),p()(),y(45,"li")(46,"a",17),m(47,"async-subject"),p()()()()())},dependencies:[Eo],styles:["ul.list[_ngcontent-%COMP%]{list-style-type:none;margin:40px 0 0;padding:0;display:flex;flex-wrap:wrap}ul.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(25% - 20px);margin:10px}ul.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#f8f8f8;color:#6296bb;border-radius:5px;width:100%;text-align:center;border:1px solid #6296bb;transition:.3s ease all;line-height:1;min-height:120px;display:flex;justify-content:center;align-items:center}ul.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#e3f2fd;color:#477698;box-shadow:0 0 60px #b3cada inset;text-decoration:none}"]}),e})();function So(e=0,t=La){return e<0&&(e=0),ui(e,e,t)}let BP=(()=>{class e{constructor(n){this.designUtilityService=n}ngOnInit(){const n=So(1e3);this.sub1=n.pipe(P(i=>"Video "+i)).subscribe(i=>{this.msg1=i}),setTimeout(()=>{this.sub1.unsubscribe()},1e4),this.sub2=n.pipe(P(i=>"Video "+10*i)).subscribe(i=>{this.msg2=i}),setTimeout(()=>{this.sub2.unsubscribe()},1e4),re([{id:1,name:"Arliene"},{id:2,name:"Wiley"},{id:3,name:"Garek"},{id:4,name:"Greggory"},{id:5,name:"Toiboid"},{id:6,name:"Hinze"},{id:7,name:"Lorne"}]).pipe(P(i=>i.name)).subscribe(i=>{this.designUtilityService.print(i,"elContainer")})}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-map"]],decls:41,vars:2,consts:[[1,"my-3"],[1,"row"],[1,"col-md-4"],[1,"bg-light","py-2","px-3","border","rounded"],[1,"text-success"],["id","elContainer"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"map"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"strong"),m(7,"Ex - 01"),p(),b(8,"hr"),y(9,"p",3)(10,"strong"),m(11,"Map"),p(),m(12," 'Video' + data "),p(),b(13,"br"),y(14,"p"),m(15,"Message "),y(16,"strong",4),m(17),p()()(),y(18,"div",2)(19,"strong"),m(20,"Ex - 02"),p(),b(21,"hr"),y(22,"p",3)(23,"strong"),m(24,"Map"),p(),m(25," 'Video' + (data*10) "),p(),b(26,"br"),y(27,"p"),m(28,"Message "),y(29,"strong",4),m(30),p()()(),y(31,"div",2)(32,"strong"),m(33,"Ex - 03"),p(),b(34,"hr"),y(35,"p",3)(36,"strong"),m(37,"Map"),p(),m(38," Map Data "),p(),b(39,"br")(40,"ul",5),p()()()),2&n&&(x(17),ne(r.msg1),x(13),ne(r.msg2))}}),e})(),UP=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["app-observable"]],decls:1,vars:0,template:function(n,r){1&n&&b(0,"router-outlet")},dependencies:[Ea]}),e})(),HP=(()=>{class e{constructor(n){this.designUtilityService=n}ngOnInit(){R("Anup","Shekhar","Sharma").subscribe(u=>{this.designUtilityService.print(u,"elContainer")}),R({a:"Anup",b:"Shekhar",c:"Sharma"}).subscribe(u=>{this.obsMsg=u}),re(["Lance","Pearce","Sianna"]).subscribe(u=>{this.designUtilityService.print(u,"elContainer3")}),re(new Promise(u=>{setTimeout(()=>{u("Promise Resolved")},3e3)})).subscribe(u=>{this.designUtilityService.print(u,"elContainer4")}),re("RxJS Testing").subscribe(u=>{this.designUtilityService.print(u,"elContainer5")})}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-of-from"]],decls:68,vars:3,consts:[[1,"my-3"],[1,"row"],[1,"col-md-6"],[1,"bg-light","py-2","px-3","border","rounded"],["id","elContainer"],[1,"col-md-4"],["id","elContainer3"],["id","elContainer4"],["id","elContainer5"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"Of & From"),p(),b(3,"br"),y(4,"strong"),m(5,"Ex - 01 (Of)"),p(),b(6,"hr"),y(7,"div",1)(8,"div",2)(9,"p",3)(10,"strong"),m(11,"Data : "),p(),m(12,"of('Anup', 'Shekhar', 'Sharma') "),p(),b(13,"hr")(14,"ul",4),p(),y(15,"div",2)(16,"p",3)(17,"strong"),m(18,"Data : "),p(),m(19,"of({'Anup', 'Shekhar', 'Sharma'}) "),p(),b(20,"hr"),y(21,"ul")(22,"li")(23,"strong"),m(24,"a : "),p(),m(25),p(),y(26,"li")(27,"strong"),m(28,"b : "),p(),m(29),p(),y(30,"li")(31,"strong"),m(32,"c : "),p(),m(33),p()()()(),y(34,"strong"),m(35,"Ex - 02 (From)"),p(),b(36,"hr"),y(37,"div",1)(38,"div",5)(39,"strong"),m(40,"Array"),p(),b(41,"hr"),y(42,"p",3)(43,"strong"),m(44,"Data : "),p(),m(45,"from(['Lance', 'Pearce', 'Sianna']) "),p(),b(46,"hr")(47,"ul",6),p(),y(48,"div",5)(49,"strong"),m(50,"Promise"),p(),b(51,"hr"),y(52,"p",3)(53,"strong"),m(54,"Data : "),p(),m(55,"Promise to Observable "),p(),b(56,"hr")(57,"ul",7),p(),y(58,"div",5)(59,"strong"),m(60,"String"),p(),b(61,"hr"),y(62,"p",3)(63,"strong"),m(64,"Data : "),p(),m(65,"String to Observable "),p(),b(66,"hr")(67,"ul",8),p()()()),2&n&&(x(25),ne(r.obsMsg.a),x(4),ne(r.obsMsg.b),x(4),ne(r.obsMsg.c))}}),e})();function kC(...e){const t=e.length;if(0===t)throw new Error("list of properties cannot be empty.");return P(n=>{let r=n;for(let i=0;i<t;i++){const o=r?.[e[i]];if(!(typeof o<"u"))return;r=o}return r})}function zP(e,t){if(1&e&&(y(0,"tr")(1,"td"),m(2),p()()),2&e){const n=t.$implicit;x(2),ne(n)}}function GP(e,t){if(1&e&&(y(0,"tr")(1,"td"),m(2),p()()),2&e){const n=t.$implicit;x(2),ne(n)}}let WP=(()=>{class e{constructor(){this.data=[{name:"Fonz",skill:"Angular",job:{title:"UI Developer",exp:"2 Years"}},{name:"Budd",skill:"Javascript",job:{title:"Javascript Developer",exp:"7 Years"}},{name:"Bunnie",skill:"Java",job:{title:"Java Developer",exp:"5 Years"}},{name:"Noe",skill:"MySQL",job:{title:"DBA",exp:"4 Years"}}],this.ary1=[],this.ary2=[]}ngOnInit(){re(this.data).pipe(kC("name"),Bn()).subscribe(n=>{this.ary1=n}),re(this.data).pipe(kC("job","title"),Bn()).subscribe(n=>{this.ary2=n})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["app-pluck"]],decls:43,vars:2,consts:[[1,"my-3"],[1,"row"],[1,"col-md-4"],[1,"bg-light","py-2","px-3","border","rounded"],[1,"table"],[4,"ngFor","ngForOf"],["id","elContainer"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"pluck"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"strong"),m(7,"Ex - 01"),p(),b(8,"hr"),y(9,"p",3)(10,"strong"),m(11,"Map"),p(),m(12," By Property "),p(),b(13,"br"),y(14,"table",4)(15,"tr")(16,"th"),m(17,"Name"),p()(),_e(18,zP,3,1,"tr",5),p()(),y(19,"div",2)(20,"strong"),m(21,"Ex - 02"),p(),b(22,"hr"),y(23,"p",3)(24,"strong"),m(25,"Map"),p(),m(26," By Nested Property "),p(),b(27,"br"),y(28,"table",4)(29,"tr")(30,"th"),m(31,"Job"),p()(),_e(32,GP,3,1,"tr",5),p()(),y(33,"div",2)(34,"strong"),m(35,"Ex - 03"),p(),b(36,"hr"),y(37,"p",3)(38,"strong"),m(39,"Map"),p(),m(40," Map Data "),p(),b(41,"br")(42,"ul",6),p()()()),2&n&&(x(18),ae("ngForOf",r.ary1),x(14),ae("ngForOf",r.ary2))},dependencies:[io]}),e})();function qP(e,t){if(1&e){const n=function Ig(){return _()}();y(0,"div",11)(1,"div",7),b(2,"input",12,13),p(),y(4,"div",14)(5,"button",15),ht("click",function(){!function Ff(e){return $.lFrame.contextLView=e,e[8]}(n);const i=function bg(e){return vr(function nw(){return $.lFrame.contextLView}(),22+e)}(3);return function kf(e){return $.lFrame.contextLView=null,e}(fn().onVideoAdd(i.value))}),m(6,"Add Video"),p()()()}}function QP(e,t){1&e&&b(0,"hr")}function KP(e,t){if(1&e&&(y(0,"li")(1,"strong"),m(2,"Video : "),p(),m(3),p()),2&e){const n=t.$implicit;x(3),hn(" ",n," ")}}function ZP(e,t){if(1&e&&(y(0,"li")(1,"strong"),m(2,"Video : "),p(),m(3),p()),2&e){const n=t.$implicit;x(3),hn(" ",n," ")}}function JP(e,t){if(1&e&&(y(0,"li")(1,"strong"),m(2,"Video : "),p(),m(3),p()),2&e){const n=t.$implicit;x(3),hn(" ",n," ")}}let YP=(()=>{class e{constructor(n){this.designUtilityService=n,this.user1List=[],this.user2List=[],this.user3List=[],this.subMode2=!1,this.subMode3=!1,this.methodInterval=!1}ngOnInit(){this.designUtilityService.videoEmit.subscribe(n=>{this.user1List.push(n)})}onVideoAdd(n){this.designUtilityService.videoEmit.next(n)}user2Subscribe(){this.subMode2?this.subscription2.unsubscribe():this.subscription2=this.designUtilityService.videoEmit.subscribe(n=>{this.user2List.push(n)}),this.subMode2=!this.subMode2}user3Subscribe(){this.subMode3?this.subscription3.unsubscribe():this.subscription3=this.designUtilityService.videoEmit.subscribe(n=>{this.user3List.push(n)}),this.subMode3=!this.subMode3}toggleMethod(){const n=So(1e3);this.methodInterval?this.intSubscription.unsubscribe():this.intSubscription=n.subscribe(r=>{this.designUtilityService.videoEmit.next("Video "+r)}),this.methodInterval=!this.methodInterval}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-replay-subject"]],decls:37,vars:10,consts:[[1,"my-3"],[1,"row"],[1,"col"],[1,"col","text-right"],[1,"btn","btn-warning",3,"click"],["class","row justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"col-md-4"],[1,"video-list"],[4,"ngFor","ngForOf"],[1,"btn",3,"ngClass","click"],[1,"row","justify-content-center"],["type","text",1,"form-control"],["video",""],[1,"col-md-3"],[1,"btn","btn-success",3,"click"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"Replay Subject"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"h3"),m(7),p()(),y(8,"div",3)(9,"button",4),ht("click",function(){return r.toggleMethod()}),m(10,"Toggle Method"),p()()(),b(11,"hr"),_e(12,qP,7,0,"div",5),_e(13,QP,1,0,"hr",6),y(14,"div",1)(15,"div",7)(16,"strong"),m(17,"User - 01"),p(),b(18,"hr"),y(19,"ul",8),_e(20,KP,4,1,"li",9),p()(),y(21,"div",7)(22,"strong"),m(23,"User - 02"),p(),b(24,"hr"),y(25,"ul",8),_e(26,ZP,4,1,"li",9),p(),y(27,"button",10),ht("click",function(){return r.user2Subscribe()}),m(28),p()(),y(29,"div",7)(30,"strong"),m(31,"User - 03"),p(),b(32,"hr"),y(33,"ul",8),_e(34,JP,4,1,"li",9),p(),y(35,"button",10),ht("click",function(){return r.user3Subscribe()}),m(36),p()()()()),2&n&&(x(7),ne(r.methodInterval?"Interval Started":"Add Video"),x(5),ae("ngIf",!r.methodInterval),x(1),ae("ngIf",!r.methodInterval),x(7),ae("ngForOf",r.user1List),x(6),ae("ngForOf",r.user2List),x(1),ae("ngClass",r.subMode2?"btn-danger":"btn-success"),x(1),hn(" ",r.subMode2?"Unsubscribe":"Subscribe"," "),x(6),ae("ngForOf",r.user3List),x(1),ae("ngClass",r.subMode3?"btn-danger":"btn-success"),x(1),hn(" ",r.subMode3?"Unsubscribe":"Subscribe"," "))},dependencies:[jc,io,ei],styles:["ul.video-list[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0}ul.video-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#f8f9fa;border:1px solid #ddd;border-radius:5px;padding:10px;margin-bottom:10px}"]}),e})();function LC(e,t){return t?n=>fa(t.pipe(Jt(1),function eO(){return fe((e,t)=>{e.subscribe(he(t,Ao))})}()),n.pipe(LC(e))):Ae((n,r)=>e(n,r).pipe(Jt(1),ID(n)))}function nO(e,t){1&e&&b(0,"span",5)}function rO(e,t){1&e&&b(0,"span",6)}function iO(e,t){if(1&e&&(y(0,"tr")(1,"td"),m(2),p(),y(3,"td"),m(4),p()()),2&e){const n=t.$implicit;x(2),ne(n.state_id),x(2),ne(n.state_name)}}function oO(e,t){if(1&e&&(y(0,"div",7)(1,"div",8),b(2,"hr"),y(3,"table",9)(4,"tr")(5,"th"),m(6,"Id"),p(),y(7,"th"),m(8,"State"),p()(),_e(9,iO,5,2,"tr",10),p()()()),2&e){const n=fn();x(9),ae("ngForOf",n.stateAry)}}let sO=(()=>{class e{constructor(n){this.http=n,this.stateAry=[],this.fetching=!1,this.status="No data"}fetchDetails(){this.stateAry=[];let n=0;this.fetching=!0,this.status="Fetching data...",this.http.get("https://cdn-api.co-vin.in/api/v2/admin/location/states").pipe(function XP(e){return fe((t,n)=>{let r,o,i=!1;const s=()=>{r=t.subscribe(he(n,void 0,void 0,a=>{o||(o=new ze,e(o).subscribe(he(n,()=>r?s():i=!0))),o&&o.next(a)})),i&&(r.unsubscribe(),r=null,i=!1,s())};s()})}(r=>r.pipe(function tO(e,t=La){const n=ui(e,t);return LC(()=>n)}(3e3),ad(i=>{if(console.log(i),n>=5)throw r;return n+=1,console.log("retryCount: ",n),this.status="Retrying Attemp #"+n,n})))).subscribe(r=>{console.log(r),this.stateAry=r.states,this.status="Data fetched",this.fetching=!1},r=>{console.log("err: ",r),this.fetching=!1,this.status="Problem fetching data"})}}return e.\u0275fac=function(n){return new(n||e)(M(hD))},e.\u0275cmp=le({type:e,selectors:[["app-retry"]],decls:15,vars:6,consts:[[1,"my-3"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["class","spinner-grow spinner-grow-sm text-warning","role","status",4,"ngIf"],["class","row",4,"ngIf"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["role","status",1,"spinner-grow","spinner-grow-sm","text-warning"],[1,"row"],[1,"col-md-6"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"retry, retryWhen, scan, delay"),p(),b(3,"br"),y(4,"button",1),ht("click",function(){return r.fetchDetails()}),_e(5,nO,1,0,"span",2),m(6),p(),b(7,"br")(8,"br"),y(9,"p"),m(10," Status: "),y(11,"strong"),m(12),p(),_e(13,rO,1,0,"span",3),p(),_e(14,oO,10,1,"div",4),p()),2&n&&(x(4),ae("disabled",r.fetching),x(1),ae("ngIf",r.fetching),x(1),hn(" ",r.fetching?"Fetching...":"Fetch Data"," "),x(6),ne(r.status),x(1),ae("ngIf",r.fetching),x(1),ae("ngIf",(null==r.stateAry?null:r.stateAry.length)>0))},dependencies:[io,ei]}),e})();const aO=["uname"];let uO=(()=>{class e{constructor(n){this.designUtilityService=n,n.username.subscribe(r=>{this.username=r})}ngAfterViewInit(){Xt(this.uname.nativeElement,"keyup").pipe(P(n=>n.target.value)).subscribe(n=>{this.username=n})}change(){this.designUtilityService.username.next(this.username)}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-comp1"]],viewQuery:function(n,r){if(1&n&&Nn(aO,5),2&n){let i;Kt(i=Zt())&&(r.uname=i.first)}},decls:12,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[1,"text-primary"],["type","text",1,"form-control","mb-2"],["uname",""],[1,"btn","btn-primary",3,"click"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"div",1),m(2," Comp 1 "),p(),y(3,"div",2)(4,"h5",3),m(5,"Username is "),y(6,"span",4),m(7),p()(),b(8,"input",5,6),y(10,"button",7),ht("click",function(){return r.change()}),m(11,"Change"),p()()()),2&n&&(x(7),ne(r.username))}}),e})();const lO=["uname"];let cO=(()=>{class e{constructor(n){this.designUtilityService=n,n.username.subscribe(r=>{this.username=r})}ngAfterViewInit(){Xt(this.uname.nativeElement,"keyup").pipe(P(n=>n.target.value)).subscribe(n=>{this.username=n})}change(){this.designUtilityService.username.next(this.username)}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-comp2"]],viewQuery:function(n,r){if(1&n&&Nn(lO,5),2&n){let i;Kt(i=Zt())&&(r.uname=i.first)}},decls:12,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[1,"text-primary"],["type","text",1,"form-control","mb-2"],["uname",""],[1,"btn","btn-primary",3,"click"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"div",1),m(2," Comp 2 "),p(),y(3,"div",2)(4,"h5",3),m(5,"Username is "),y(6,"span",4),m(7),p()(),b(8,"input",5,6),y(10,"button",7),ht("click",function(){return r.change()}),m(11,"Change"),p()()()),2&n&&(x(7),ne(r.username))}}),e})();const dO=["uname"];let fO=(()=>{class e{constructor(n){this.designUtilityService=n,n.username.subscribe(r=>{this.username=r})}ngAfterViewInit(){Xt(this.uname.nativeElement,"keyup").pipe(P(n=>n.target.value)).subscribe(n=>{this.username=n})}change(){this.designUtilityService.username.next(this.username)}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-comp3"]],viewQuery:function(n,r){if(1&n&&Nn(dO,5),2&n){let i;Kt(i=Zt())&&(r.uname=i.first)}},decls:12,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[1,"text-primary"],["type","text",1,"form-control","mb-2"],["uname",""],[1,"btn","btn-primary",3,"click"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"div",1),m(2," Comp 3 "),p(),y(3,"div",2)(4,"h5",3),m(5,"Username is "),y(6,"span",4),m(7),p()(),b(8,"input",5,6),y(10,"button",7),ht("click",function(){return r.change()}),m(11,"Change"),p()()()),2&n&&(x(7),ne(r.username))}}),e})(),hO=(()=>{class e{constructor(n){this.designUtilityService=n,n.username.subscribe(r=>{console.log(r),this.username=r})}ngOnInit(){this.designUtilityService.exclusive.next(!0)}ngOnDestroy(){this.designUtilityService.exclusive.next(!1)}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-subject"]],decls:17,vars:1,consts:[[1,"my-3"],[1,"text-primary"],[1,"row"],[1,"col-md-4"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"Subject"),p(),b(3,"hr"),y(4,"h3"),m(5,"Username is "),y(6,"span",1),m(7),p()(),b(8,"hr")(9,"br"),y(10,"div",2)(11,"div",3),b(12,"app-comp1"),p(),y(13,"div",3),b(14,"app-comp2"),p(),y(15,"div",3),b(16,"app-comp3"),p()()()),2&n&&(x(7),ne(r.username))},dependencies:[uO,cO,fO]}),e})();const gO=[{path:"observable",component:UP,children:[{path:"",component:$P},{path:"fromEvent",component:LP},{path:"interval",component:VP},{path:"of-from",component:HP},{path:"to-array",component:(()=>{class e{constructor(){this.data=[{name:"Moss",gender:"Male"},{name:"Stephenie",gender:"Female"},{name:"Eolande",gender:"Female"},{name:"Harmony",gender:"Female"},{name:"Keely",gender:"Female"}]}ngOnInit(){const n=So(1e3);this.sourceSub=n.pipe(Jt(5),Bn()).subscribe(o=>{console.log("sourceSub: ",o)}),re(this.data).pipe(Bn()).subscribe(o=>{console.log("fromObs: ",o)}),R("Dwayne","Garnette","Kelsy","Marcile","Lethia").pipe(Bn()).subscribe(o=>{console.log("res: ",o)})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["app-to-array"]],decls:2,vars:0,template:function(n,r){1&n&&(y(0,"p"),m(1,"to-array works!"),p())}}),e})()},{path:"custom",component:tP},{path:"map",component:BP},{path:"pluck",component:WP},{path:"filter",component:FP},{path:"tap",component:(()=>{class e{constructor(n){this.designUtilityService=n,this.color="white"}ngOnInit(){const n=So(1e3),r=["Lurlene","Bernadina","Park","Gavan","Celle","Gabi"];let i;i=n.pipe(Oe(a=>{4===a&&i.unsubscribe()}),P(a=>r[a])).subscribe(a=>{this.designUtilityService.print(a,"elContainer")});const o=["Red","Yellow","Green","Pink","blanchedalmond","brown"];let s;s=n.pipe(Oe(a=>{6===a&&s.unsubscribe()}),P(a=>o[a])).subscribe(a=>{this.color=a,this.designUtilityService.print(a,"elContainer2")})}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-tap"]],decls:13,vars:3,consts:[[1,"my-3"],[1,"row"],[1,"col-md-6"],["id","elContainer"],["id","elContainer2"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"Filter"),p(),b(3,"br"),y(4,"div",1)(5,"div",2)(6,"strong"),m(7,"Ex - 01"),p(),b(8,"ul",3),p(),y(9,"div",2)(10,"strong"),m(11,"Ex - 02"),p(),b(12,"ul",4),p()()()),2&n&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lm(e,t,n){qt($r(_(),e,t,n))}("background-color: ",r.color,";")}}),e})()},{path:"take",component:(()=>{class e{constructor(n){this.designUtilityService=n,this.randomNames=["Caspar","Willi","Wenonah","Silvanus","Malinda","Eadie","Alister","Kay"]}ngOnInit(){let n=re(this.randomNames);n.pipe(Jt(5)).subscribe(s=>{this.designUtilityService.print(s,"elContainer")}),n.pipe(pa(5)).subscribe(s=>{this.designUtilityService.print(s,"elContainer2")});const r=So(1e3);ui(4e3);let o=Xt(document,"click");r.pipe(P(s=>"Number "+s),function pO(e){return fe((t,n)=>{gt(e).subscribe(he(n,()=>n.complete(),Ao)),!n.closed&&t.subscribe(n)})}(o)).subscribe(s=>{this.designUtilityService.print(s,"elContainer3")})}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-take"]],decls:25,vars:0,consts:[[1,"my-3"],[1,"bg-light","d-inline-block","py-2","px-3","border-rounded"],[1,"row"],[1,"col-md-4"],["id","elContainer"],["id","elContainer2"],["id","elContainer3"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"h2"),m(2,"take"),p(),b(3,"br"),y(4,"p",1)(5,"strong"),m(6,"Random Names : "),p(),m(7," 'Caspar','Willi','Wenonah','Silvanus','Malinda','Eadie','Alister','Kay' "),p(),b(8,"hr"),y(9,"div",2)(10,"div",3)(11,"strong"),m(12,"Ex - 01 | Take(5)"),p(),b(13,"hr")(14,"ul",4),p(),y(15,"div",3)(16,"strong"),m(17,"Ex - 02 | TakeLast(5)"),p(),b(18,"hr")(19,"ul",5),p(),y(20,"div",3)(21,"strong"),m(22,"Ex - 03 | TakeUntil()"),p(),b(23,"hr")(24,"ul",6),p()()())}}),e})()},{path:"retry",component:sO},{path:"debounce",component:TP},{path:"subject",component:hO},{path:"replay-subject",component:YP},{path:"async-subject",component:eP}]},{path:"**",redirectTo:"observable"}];let mO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ut({type:e}),e.\u0275inj=Tt({imports:[xC.forRoot(gO,{useHash:!0}),xC]}),e})();function yO(e,t){1&e&&(y(0,"strong",7),m(1,"Exclusive"),p())}let vO=(()=>{class e{constructor(n){this.designUtilityService=n,this.exclusive=!1,this.designUtilityService.exclusive.subscribe(r=>{console.log(r),this.exclusive=r})}}return e.\u0275fac=function(n){return new(n||e)(M(pt))},e.\u0275cmp=le({type:e,selectors:[["app-header"]],decls:9,vars:1,consts:[[1,"col-md-12"],[1,"navbar","navbar-expand-lg",2,"background-color","#e3f2fd"],[1,"container-fluid"],["routerLink","observable",1,"navbar-brand"],["class","badge text-bg-primary",4,"ngIf"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarText","aria-controls","navbarText","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],[1,"badge","text-bg-primary"]],template:function(n,r){1&n&&(y(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3)(4,"h5"),m(5,"RxJS "),_e(6,yO,2,0,"strong",4),p()(),y(7,"button",5),b(8,"span",6),p()()()()),2&n&&(x(6),ae("ngIf",r.exclusive))},dependencies:[ei,Eo]}),e})(),DO=(()=>{class e{constructor(){this.title="rxjs-angular"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=le({type:e,selectors:[["app-root"]],decls:3,vars:0,consts:[["ref","core"]],template:function(n,r){1&n&&b(0,"ngx-loading-bar",0)(1,"app-header")(2,"router-outlet")},dependencies:[Ea,wP,vO]}),e})(),CO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ut({type:e,bootstrap:[DO]}),e.\u0275inj=Tt({imports:[tx,mO,Ex,bP]}),e})();(function ST(){nv=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(),ex().bootstrapModule(CO).catch(e=>console.error(e))}},J=>{J(J.s=784)}]);