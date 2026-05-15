import{s as We,d,i as g,k as $e,x as ie,b as Le,e as te,f as S,j as N,m as oe,n as be,l as Me,p as V,t as he,c as Ie,g as T,o as C,P as Ft,$ as De,a0 as Ve,C as Ze,D as Je,E as xe,F as et,h as Rt,q as ct,r as Mt,u as At,v as Nt,w as Vt}from"../chunks/scheduler.CZBgomDe.js";import{S as Pe,i as je,t as p,a as _,g as x,c as ee,d as h,m as $,b as w,e as k}from"../chunks/index.DQ4MBb5L.js";import{n as Dt,S as Ye,U as Et,V as Ht,W as Wt,X as Tt,Y as mt,Z as Pt,_ as Ct,$ as tt,Q as se,N as at,R as nt,a0 as rt,a1 as jt,a2 as Lt,c as Gt,h as Ae,b as He,a3 as Qt,a4 as Ot,D as lt,a as Ut,s as Yt,p as zt,v as fe,r as _t,C as Bt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.aiDgkADM.js";import{w as Xt}from"../chunks/entry.BqLyO7mB.js";import{A as qt}from"../chunks/Alert.BED-HHnj.js";import{h as me}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as Kt,a as Ke,b as Ne}from"../chunks/Details.BmEx9CVa.js";import{p as Zt}from"../chunks/stores.R5GJ3d2-.js";import{G as It}from"../chunks/Grid.B6rv522c.js";import{Q as Fe}from"../chunks/QueryViewer._MZG-Fyv.js";import{p as Jt}from"../chunks/profile.BW8tN6E9.js";function xt(s){let t,a;return t=new Pt({props:{error:s[3]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&8&&(n.error=e[3]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function ea(s){let t,a=mt(s[2],s[4])+"",e,r,n,l=s[1]&&ut(s);return{c(){t=V("span"),e=he(a),r=C(),l&&l.c(),this.h()},l(o){t=N(o,"SPAN",{style:!0});var c=oe(t);e=be(c,a),r=T(c),l&&l.l(c),c.forEach(d),this.h()},h(){Ie(t,"color",s[5])},m(o,c){g(o,t,c),te(t,e),te(t,r),l&&l.m(t,null),n=!0},p(o,c){(!n||c&20)&&a!==(a=mt(o[2],o[4])+"")&&Le(e,a),o[1]?l?(l.p(o,c),c&2&&_(l,1)):(l=ut(o),l.c(),_(l,1),l.m(t,null)):l&&(x(),p(l,1,1,()=>{l=null}),ee()),(!n||c&32)&&Ie(t,"color",o[5])},i(o){n||(_(l),n=!0)},o(o){p(l),n=!1},d(o){o&&d(t),l&&l.d()}}}function ta(s){let t,a,e,r,n,l="Placeholder: no data currently referenced.";return{c(){t=V("span"),a=he("["),e=he(s[0]),r=he("]"),n=V("span"),n.textContent=l,this.h()},l(o){t=N(o,"SPAN",{class:!0});var c=oe(t);a=be(c,"["),e=be(c,s[0]),r=be(c,"]"),n=N(c,"SPAN",{class:!0,"data-svelte-h":!0}),Me(n)!=="svelte-ddarzq"&&(n.textContent=l),c.forEach(d),this.h()},h(){S(n,"class","error-msg svelte-1qvl5jp"),S(t,"class","placeholder svelte-1qvl5jp")},m(o,c){g(o,t,c),te(t,a),te(t,e),te(t,r),te(t,n)},p(o,c){c&1&&Le(e,o[0])},i:ie,o:ie,d(o){o&&d(t)}}}function ut(s){let t,a;return t=new Ct({props:{description:s[1]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&2&&(n.description=e[1]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function aa(s){let t,a,e,r;const n=[ta,ea,xt],l=[];function o(c,i){return c[0]?0:c[3]?2:1}return t=o(s),a=l[t]=n[t](s),{c(){a.c(),e=$e()},l(c){a.l(c),e=$e()},m(c,i){l[t].m(c,i),g(c,e,i),r=!0},p(c,[i]){let u=t;t=o(c),t===u?l[t].p(c,i):(x(),p(l[u],1,1,()=>{l[u]=null}),ee(),a=l[t],a?a.p(c,i):(a=l[t]=n[t](c),a.c()),_(a,1),a.m(e.parentNode,e))},i(c){r||(_(a),r=!0)},o(c){p(a),r=!1},d(c){c&&d(e),l[t].d(c)}}}function na(s,t,a){let e,r,n=ie,l=()=>(n(),n=Ft(e,F=>a(15,r=F)),e);s.$$.on_destroy.push(()=>n());const{resolveColor:o}=Dt();let{data:c=null}=t,{row:i=0}=t,{column:u=null}=t,{value:f=null}=t,{placeholder:y=null}=t,{description:E=void 0}=t,{fmt:q=void 0}=t,Y,G,z,{color:M=void 0}=t,I="",{redNegatives:D=!1}=t,R;return s.$$set=F=>{"data"in F&&a(7,c=F.data),"row"in F&&a(10,i=F.row),"column"in F&&a(8,u=F.column),"value"in F&&a(11,f=F.value),"placeholder"in F&&a(0,y=F.placeholder),"description"in F&&a(1,E=F.description),"fmt"in F&&a(12,q=F.fmt),"color"in F&&a(13,M=F.color),"redNegatives"in F&&a(9,D=F.redNegatives)},s.$$.update=()=>{var F;if(s.$$.dirty&2304&&a(8,u=u??f),s.$$.dirty&21897)try{if(a(3,z=void 0),!y)if(c){if(typeof c=="string")throw Error(`Received: data=${c}, expected: data={${c}}`);if(Array.isArray(c)||a(7,c=[c]),isNaN(i))throw Error("row must be a number (row="+i+")");try{Object.keys(c[i])[0]}catch{throw Error("Row "+i+" does not exist in the dataset")}a(8,u=u??Object.keys(c[i])[0]),Ye(c,[u]),a(14,R=Et(c,"array"));const Q=R.filter(A=>{var K;return A.type==="date"&&!(((K=c[0])==null?void 0:K[A.id])instanceof Date)}).map(A=>A.id);for(let A=0;A<Q.length;A++)a(7,c=Ht(c,Q[A]));a(2,G=c[i][u]),a(14,R=R.filter(A=>A.id===u)),q?a(4,Y=Wt(q,(F=R[0].format)==null?void 0:F.valueType)):a(4,Y=R[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(Q){if(a(3,z=Q.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${z}`),Tt)throw z}s.$$.dirty&2304&&f&&u&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),s.$$.dirty&8192&&l(a(6,e=o(M))),s.$$.dirty&512&&a(9,D=D==="true"||D===!0),s.$$.dirty&33284&&(D||r)&&(D&&G<0?a(5,I="rgb(220 38 38)"):r&&a(5,I=r))},[y,E,G,z,Y,I,e,c,u,D,i,f,q,M,R,r]}class ra extends Pe{constructor(t){super(),je(this,t,na,aa,We,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function la(s){let t;const a=s[7].default,e=Ze(a,s,s[8],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,n){e&&e.m(r,n),t=!0},p(r,n){e&&e.p&&(!t||n&256)&&Je(e,a,r,r[8],t?et(a,r[8],n,null):xe(r[8]),null)},i(r){t||(_(e,r),t=!0)},o(r){p(e,r),t=!1},d(r){e&&e.d(r)}}}function sa(s){let t,a;const e=[s[4],{data:se.isQuery(s[11])?Array.from(s[11]):s[11]}];let r={$$slots:{default:[la]},$$scope:{ctx:s}};for(let n=0;n<e.length;n+=1)r=De(r,e[n]);return t=new ra({props:r}),{c(){k(t.$$.fragment)},l(n){w(t.$$.fragment,n)},m(n,l){$(t,n,l),a=!0},p(n,l){const o=l&2064?at(e,[l&16&&nt(n[4]),l&2048&&{data:se.isQuery(n[11])?Array.from(n[11]):n[11]}]):{};l&256&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){a||(_(t.$$.fragment,n),a=!0)},o(n){p(t.$$.fragment,n),a=!1},d(n){h(t,n)}}}function pt(s){let t,a;return t=new rt({props:{emptyMessage:s[2],emptySet:s[1],chartType:ca,isInitial:s[3]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&4&&(n.emptyMessage=e[2]),r&2&&(n.emptySet=e[1]),r&8&&(n.isInitial=e[3]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function ia(s){let t,a,e=!s[4].placeholder&&pt(s);return{c(){t=V("span"),e&&e.c(),this.h()},l(r){t=N(r,"SPAN",{slot:!0});var n=oe(t);e&&e.l(n),n.forEach(d),this.h()},h(){S(t,"slot","empty")},m(r,n){g(r,t,n),e&&e.m(t,null),a=!0},p(r,n){r[4].placeholder?e&&(x(),p(e,1,1,()=>{e=null}),ee()):e?(e.p(r,n),n&16&&_(e,1)):(e=pt(r),e.c(),_(e,1),e.m(t,null))},i(r){a||(_(e),a=!0)},o(r){p(e),a=!1},d(r){r&&d(t),e&&e.d()}}}function oa(s){let t,a="Loading...";return{c(){t=V("span"),t.textContent=a,this.h()},l(e){t=N(e,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),Me(t)!=="svelte-89gxhc"&&(t.textContent=a),this.h()},h(){S(t,"slot","skeleton"),S(t,"class","text-base-content-muted")},m(e,r){g(e,t,r)},p:ie,d(e){e&&d(t)}}}function fa(s){let t,a;return t=new tt({props:{data:s[0],$$slots:{skeleton:[oa],empty:[ia],default:[sa,({loaded:e})=>({11:e}),({loaded:e})=>e?2048:0]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,[r]){const n={};r&1&&(n.data=e[0]),r&2334&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}let ca="Value";function ma(s,t,a){let e,{$$slots:r={},$$scope:n}=t,{data:l}=t,{column:o}=t,{agg:c}=t;const i=se.isQuery(l)?l.hash:void 0;let u=(l==null?void 0:l.hash)===i,{emptySet:f=void 0}=t,{emptyMessage:y=void 0}=t;return s.$$set=E=>{a(10,t=De(De({},t),Ve(E))),"data"in E&&a(0,l=E.data),"column"in E&&a(5,o=E.column),"agg"in E&&a(6,c=E.agg),"emptySet"in E&&a(1,f=E.emptySet),"emptyMessage"in E&&a(2,y=E.emptyMessage),"$$scope"in E&&a(8,n=E.$$scope)},s.$$.update=()=>{s.$$.dirty&97&&c&&a(0,l=l.groupBy(void 0).agg({[c]:{col:o,as:o}})),s.$$.dirty&1&&a(3,u=(l==null?void 0:l.hash)===i),a(4,e=Object.fromEntries(Object.entries(t).filter(([,E])=>E!==void 0)))},t=Ve(t),[l,f,y,u,e,o,c,r,n]}class Ge extends Pe{constructor(t){super(),je(this,t,ma,fa,We,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}function _a(s){let t;const a=s[6].default,e=Ze(a,s,s[7],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,n){e&&e.m(r,n),t=!0},p(r,n){e&&e.p&&(!t||n&128)&&Je(e,a,r,r[7],t?et(a,r[7],n,null):xe(r[7]),null)},i(r){t||(_(e,r),t=!0)},o(r){p(e,r),t=!1},d(r){e&&e.d(r)}}}function ua(s){let t,a;const e=[s[4],{data:se.isQuery(s[10])?Array.from(s[10]):s[10]},{queryID:s[5]}];let r={$$slots:{default:[_a]},$$scope:{ctx:s}};for(let n=0;n<e.length;n+=1)r=De(r,e[n]);return t=new jt({props:r}),{c(){k(t.$$.fragment)},l(n){w(t.$$.fragment,n)},m(n,l){$(t,n,l),a=!0},p(n,l){const o=l&1072?at(e,[l&16&&nt(n[4]),l&1024&&{data:se.isQuery(n[10])?Array.from(n[10]):n[10]},l&32&&{queryID:n[5]}]):{};l&128&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){a||(_(t.$$.fragment,n),a=!0)},o(n){p(t.$$.fragment,n),a=!1},d(n){h(t,n)}}}function pa(s){let t,a;return t=new rt({props:{slot:"empty",emptyMessage:s[2],emptySet:s[1],chartType:s[4].chartType,isInitial:s[3]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&4&&(n.emptyMessage=e[2]),r&2&&(n.emptySet=e[1]),r&16&&(n.chartType=e[4].chartType),r&8&&(n.isInitial=e[3]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function da(s){let t,a;return t=new Lt({props:{slot:"error",title:ga,error:s[10].error.message}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&1024&&(n.error=e[10].error.message),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function ya(s){let t,a;return t=new tt({props:{data:s[0],$$slots:{error:[da,({loaded:e})=>({10:e}),({loaded:e})=>e?1024:0],empty:[pa],default:[ua,({loaded:e})=>({10:e}),({loaded:e})=>e?1024:0]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,[r]){const n={};r&1&&(n.data=e[0]),r&1182&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}let ga="Sparkline";function va(s,t,a){let e,{$$slots:r={},$$scope:n}=t,{data:l}=t;const o=se.isQuery(l)?l.hash:void 0;let c=(l==null?void 0:l.hash)===o,{emptySet:i=void 0}=t,{emptyMessage:u=void 0}=t,f=l==null?void 0:l.id;return s.$$set=y=>{a(9,t=De(De({},t),Ve(y))),"data"in y&&a(0,l=y.data),"emptySet"in y&&a(1,i=y.emptySet),"emptyMessage"in y&&a(2,u=y.emptyMessage),"$$scope"in y&&a(7,n=y.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&a(3,c=(l==null?void 0:l.hash)===o),a(4,e={...Object.fromEntries(Object.entries(t).filter(([,y])=>y!==void 0))})},t=Ve(t),[l,i,u,c,e,f,r,n]}class ba extends Pe{constructor(t){super(),je(this,t,va,ya,We,{data:0,emptySet:1,emptyMessage:2})}}function ha(s){let t,a,e,r,n,l,o,c,i,u,f,y,E,q=s[23]&&dt(s);const Y=[ka,wa],G=[];function z(D,R){return D[22]?0:1}o=z(s),c=G[o]=Y[o](s);let M=s[8]&&yt(s),I=s[7]&&gt(s);return{c(){t=V("p"),a=he(s[3]),e=C(),q&&q.c(),n=C(),l=V("div"),c.c(),i=C(),M&&M.c(),f=C(),I&&I.c(),y=$e(),this.h()},l(D){t=N(D,"P",{class:!0});var R=oe(t);a=be(R,s[3]),e=T(R),q&&q.l(R),R.forEach(d),n=T(D),l=N(D,"DIV",{class:!0});var F=oe(l);c.l(F),i=T(F),M&&M.l(F),F.forEach(d),f=T(D),I&&I.l(D),y=$e(),this.h()},h(){S(t,"class",r=Ae("text-sm align-top leading-none",s[19])),S(l,"class",u=Ae("relative text-xl font-medium mt-1.5",s[20]))},m(D,R){g(D,t,R),te(t,a),te(t,e),q&&q.m(t,null),g(D,n,R),g(D,l,R),G[o].m(l,null),te(l,i),M&&M.m(l,null),g(D,f,R),I&&I.m(D,R),g(D,y,R),E=!0},p(D,R){(!E||R&8)&&Le(a,D[3]),D[23]?q?(q.p(D,R),R&8388608&&_(q,1)):(q=dt(D),q.c(),_(q,1),q.m(t,null)):q&&(x(),p(q,1,1,()=>{q=null}),ee()),(!E||R&524288&&r!==(r=Ae("text-sm align-top leading-none",D[19])))&&S(t,"class",r);let F=o;o=z(D),o===F?G[o].p(D,R):(x(),p(G[F],1,1,()=>{G[F]=null}),ee(),c=G[o],c?c.p(D,R):(c=G[o]=Y[o](D),c.c()),_(c,1),c.m(l,i)),D[8]?M?(M.p(D,R),R&256&&_(M,1)):(M=yt(D),M.c(),_(M,1),M.m(l,null)):M&&(x(),p(M,1,1,()=>{M=null}),ee()),(!E||R&1048576&&u!==(u=Ae("relative text-xl font-medium mt-1.5",D[20])))&&S(l,"class",u),D[7]?I?(I.p(D,R),R&128&&_(I,1)):(I=gt(D),I.c(),_(I,1),I.m(y.parentNode,y)):I&&(x(),p(I,1,1,()=>{I=null}),ee())},i(D){E||(_(q),_(c),_(M),_(I),E=!0)},o(D){p(q),p(c),p(M),p(I),E=!1},d(D){D&&(d(t),d(n),d(l),d(f),d(y)),q&&q.d(),G[o].d(),M&&M.d(),I&&I.d(D)}}}function $a(s){let t,a;return t=new Gt({props:{inputType:"BigValue",error:s[24],width:"148",height:"28"}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&16777216&&(n.error=e[24]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function dt(s){let t,a;return t=new Ct({props:{description:s[23],size:"3"}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&8388608&&(n.description=e[23]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function wa(s){let t,a;return t=new Ge({props:{data:s[0],column:s[6],fmt:s[13]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&1&&(n.data=e[0]),r&64&&(n.column=e[6]),r&8192&&(n.fmt=e[13]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function ka(s){let t,a,e,r;return a=new Ge({props:{data:s[0],column:s[6],fmt:s[13]}}),{c(){t=V("a"),k(a.$$.fragment),this.h()},l(n){t=N(n,"A",{class:!0,href:!0});var l=oe(t);w(a.$$.fragment,l),l.forEach(d),this.h()},h(){S(t,"class","hover:bg-base-200"),S(t,"href",e=He(s[22]))},m(n,l){g(n,t,l),$(a,t,null),r=!0},p(n,l){const o={};l&1&&(o.data=n[0]),l&64&&(o.column=n[6]),l&8192&&(o.fmt=n[13]),a.$set(o),(!r||l&4194304&&e!==(e=He(n[22])))&&S(t,"href",e)},i(n){r||(_(a.$$.fragment,n),r=!0)},o(n){p(a.$$.fragment,n),r=!1},d(n){n&&d(t),h(a)}}}function yt(s){let t,a;return t=new ba({props:{height:"15",data:s[0],dateCol:s[8],valueCol:s[6],type:s[9],interactive:"true",color:s[25],valueFmt:s[13]??s[10],dateFmt:s[11],yScale:s[2],connectGroup:s[12]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&1&&(n.data=e[0]),r&256&&(n.dateCol=e[8]),r&64&&(n.valueCol=e[6]),r&512&&(n.type=e[9]),r&33554432&&(n.color=e[25]),r&9216&&(n.valueFmt=e[13]??e[10]),r&2048&&(n.dateFmt=e[11]),r&4&&(n.yScale=e[2]),r&4096&&(n.connectGroup=e[12]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function gt(s){let t,a,e,r;const n=[Da,Sa],l=[];function o(c,i){return c[1]?0:1}return t=o(s),a=l[t]=n[t](s),{c(){a.c(),e=$e()},l(c){a.l(c),e=$e()},m(c,i){l[t].m(c,i),g(c,e,i),r=!0},p(c,i){let u=t;t=o(c),t===u?l[t].p(c,i):(x(),p(l[u],1,1,()=>{l[u]=null}),ee(),a=l[t],a?a.p(c,i):(a=l[t]=n[t](c),a.c()),_(a,1),a.m(e.parentNode,e))},i(c){r||(_(a),r=!0)},o(c){p(a),r=!1},d(c){c&&d(e),l[t].d(c)}}}function Sa(s){let t,a,e,r,n,l,o;const c=[Ta,Ea],i=[];function u(f,y){return f[22]?0:1}return a=u(s),e=i[a]=c[a](s),{c(){t=V("p"),e.c(),r=C(),n=V("span"),l=he(s[4]),this.h()},l(f){t=N(f,"P",{class:!0});var y=oe(t);e.l(y),r=T(y),n=N(y,"SPAN",{});var E=oe(n);l=be(E,s[4]),E.forEach(d),y.forEach(d),this.h()},h(){S(t,"class","text-xs font-sans /60 pt-[0.5px]")},m(f,y){g(f,t,y),i[a].m(t,null),te(t,r),te(t,n),te(n,l),o=!0},p(f,y){let E=a;a=u(f),a===E?i[a].p(f,y):(x(),p(i[E],1,1,()=>{i[E]=null}),ee(),e=i[a],e?e.p(f,y):(e=i[a]=c[a](f),e.c()),_(e,1),e.m(t,r)),(!o||y&16)&&Le(l,f[4])},i(f){o||(_(e),o=!0)},o(f){p(e),o=!1},d(f){f&&d(t),i[a].d()}}}function Da(s){let t,a,e,r;return a=new Qt({props:{data:s[0],column:s[7],fmt:s[14],fontClass:"text-xs",symbolPosition:"left",neutralMin:s[15],neutralMax:s[16],text:s[4],downIsGood:s[5]}}),{c(){t=V("p"),k(a.$$.fragment),this.h()},l(n){t=N(n,"P",{class:!0});var l=oe(t);w(a.$$.fragment,l),l.forEach(d),this.h()},h(){S(t,"class",e=Ae("text-xs font-sans mt-1",s[21]))},m(n,l){g(n,t,l),$(a,t,null),r=!0},p(n,l){const o={};l&1&&(o.data=n[0]),l&128&&(o.column=n[7]),l&16384&&(o.fmt=n[14]),l&32768&&(o.neutralMin=n[15]),l&65536&&(o.neutralMax=n[16]),l&16&&(o.text=n[4]),l&32&&(o.downIsGood=n[5]),a.$set(o),(!r||l&2097152&&e!==(e=Ae("text-xs font-sans mt-1",n[21])))&&S(t,"class",e)},i(n){r||(_(a.$$.fragment,n),r=!0)},o(n){p(a.$$.fragment,n),r=!1},d(n){n&&d(t),h(a)}}}function Ea(s){let t,a;return t=new Ge({props:{data:s[0],column:s[7],fmt:s[14]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r&1&&(n.data=e[0]),r&128&&(n.column=e[7]),r&16384&&(n.fmt=e[14]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function Ta(s){let t,a,e,r;return a=new Ge({props:{data:s[0],column:s[7],fmt:s[14]}}),{c(){t=V("a"),k(a.$$.fragment),this.h()},l(n){t=N(n,"A",{class:!0,href:!0});var l=oe(t);w(a.$$.fragment,l),l.forEach(d),this.h()},h(){S(t,"class","hover:bg-base-200"),S(t,"href",e=He(s[22]))},m(n,l){g(n,t,l),$(a,t,null),r=!0},p(n,l){const o={};l&1&&(o.data=n[0]),l&128&&(o.column=n[7]),l&16384&&(o.fmt=n[14]),a.$set(o),(!r||l&4194304&&e!==(e=He(n[22])))&&S(t,"href",e)},i(n){r||(_(a.$$.fragment,n),r=!0)},o(n){p(a.$$.fragment,n),r=!1},d(n){n&&d(t),h(a)}}}function Ca(s){let t,a,e,r,n;const l=[$a,ha],o=[];function c(i,u){return i[24].length>0?0:1}return a=c(s),e=o[a]=l[a](s),{c(){t=V("div"),e.c(),this.h()},l(i){t=N(i,"DIV",{class:!0,style:!0});var u=oe(t);e.l(u),u.forEach(d),this.h()},h(){S(t,"class","inline-block font-sans pt-2 pb-3 pl-0 mr-3 items-center align-top"),S(t,"style",r=`
        min-width: ${s[18]};
        max-width: ${s[17]};
		`)},m(i,u){g(i,t,u),o[a].m(t,null),n=!0},p(i,[u]){let f=a;a=c(i),a===f?o[a].p(i,u):(x(),p(o[f],1,1,()=>{o[f]=null}),ee(),e=o[a],e?e.p(i,u):(e=o[a]=l[a](i),e.c()),_(e,1),e.m(t,null)),(!n||u&393216&&r!==(r=`
        min-width: ${i[18]};
        max-width: ${i[17]};
		`))&&S(t,"style",r)},i(i){n||(_(e),n=!0)},o(i){p(e),n=!1},d(i){i&&d(t),o[a].d()}}}function qa(s,t,a){let e;const{resolveColor:r}=Dt();let{data:n}=t,{value:l=null}=t,{comparison:o=null}=t,{comparisonDelta:c=!0}=t,{sparkline:i=null}=t,{sparklineType:u="line"}=t,{sparklineColor:f=void 0}=t,{sparklineValueFmt:y=void 0}=t,{sparklineDateFmt:E=void 0}=t,{sparklineYScale:q=!1}=t,{connectGroup:Y=void 0}=t,{fmt:G=void 0}=t,{comparisonFmt:z=void 0}=t,{title:M=null}=t,{comparisonTitle:I=null}=t,{downIsGood:D=!1}=t,{neutralMin:R=0}=t,{neutralMax:F=0}=t,{maxWidth:Q="none"}=t,{minWidth:A="18%"}=t,{titleClass:K=void 0}=t,{valueClass:ce=void 0}=t,{comparisonClass:ge=void 0}=t,{link:le=null}=t,{description:we=void 0}=t,ae=[];return s.$$set=b=>{"data"in b&&a(0,n=b.data),"value"in b&&a(6,l=b.value),"comparison"in b&&a(7,o=b.comparison),"comparisonDelta"in b&&a(1,c=b.comparisonDelta),"sparkline"in b&&a(8,i=b.sparkline),"sparklineType"in b&&a(9,u=b.sparklineType),"sparklineColor"in b&&a(26,f=b.sparklineColor),"sparklineValueFmt"in b&&a(10,y=b.sparklineValueFmt),"sparklineDateFmt"in b&&a(11,E=b.sparklineDateFmt),"sparklineYScale"in b&&a(2,q=b.sparklineYScale),"connectGroup"in b&&a(12,Y=b.connectGroup),"fmt"in b&&a(13,G=b.fmt),"comparisonFmt"in b&&a(14,z=b.comparisonFmt),"title"in b&&a(3,M=b.title),"comparisonTitle"in b&&a(4,I=b.comparisonTitle),"downIsGood"in b&&a(5,D=b.downIsGood),"neutralMin"in b&&a(15,R=b.neutralMin),"neutralMax"in b&&a(16,F=b.neutralMax),"maxWidth"in b&&a(17,Q=b.maxWidth),"minWidth"in b&&a(18,A=b.minWidth),"titleClass"in b&&a(19,K=b.titleClass),"valueClass"in b&&a(20,ce=b.valueClass),"comparisonClass"in b&&a(21,ge=b.comparisonClass),"link"in b&&a(22,le=b.link),"description"in b&&a(23,we=b.description)},s.$$.update=()=>{if(s.$$.dirty&2&&a(1,c=c==="true"||c===!0),s.$$.dirty&67108864&&a(25,e=r(f)),s.$$.dirty&4&&a(2,q=q==="true"||q===!0),s.$$.dirty&32&&a(5,D=D==="true"||D===!0),s.$$.dirty&16777689)try{Array.isArray(n)||a(0,n=[n]),Ye(n,[l]);let b=Et(n,"array"),B=b.find(X=>X.id===l);if(a(3,M=M??(B?B.title:null)),o!==null){Ye(n,[o]);let X=b.find(ue=>ue.id===o);a(4,I=I??(X?X.title:null))}i!==null&&Ye(n,[i])}catch(b){if(a(24,ae=[...ae,b]),Tt)throw ae}},[n,c,q,M,I,D,l,o,i,u,y,E,Y,G,z,R,F,Q,A,K,ce,ge,le,we,ae,e,f]}let Ia=class extends Pe{constructor(t){super(),je(this,t,qa,Ca,We,{data:0,value:6,comparison:7,comparisonDelta:1,sparkline:8,sparklineType:9,sparklineColor:26,sparklineValueFmt:10,sparklineDateFmt:11,sparklineYScale:2,connectGroup:12,fmt:13,comparisonFmt:14,title:3,comparisonTitle:4,downIsGood:5,neutralMin:15,neutralMax:16,maxWidth:17,minWidth:18,titleClass:19,valueClass:20,comparisonClass:21,link:22,description:23})}};function Fa(s){let t;const a=s[6].default,e=Ze(a,s,s[7],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,n){e&&e.m(r,n),t=!0},p(r,n){e&&e.p&&(!t||n&128)&&Je(e,a,r,r[7],t?et(a,r[7],n,null):xe(r[7]),null)},i(r){t||(_(e,r),t=!0)},o(r){p(e,r),t=!1},d(r){e&&e.d(r)}}}function Ra(s){let t,a;const e=[s[4],{data:se.isQuery(s[9])?Array.from(s[9]):s[9]}];let r={$$slots:{default:[Fa]},$$scope:{ctx:s}};for(let n=0;n<e.length;n+=1)r=De(r,e[n]);return t=new Ia({props:r}),{c(){k(t.$$.fragment)},l(n){w(t.$$.fragment,n)},m(n,l){$(t,n,l),a=!0},p(n,l){const o=l&528?at(e,[l&16&&nt(n[4]),l&512&&{data:se.isQuery(n[9])?Array.from(n[9]):n[9]}]):{};l&128&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){a||(_(t.$$.fragment,n),a=!0)},o(n){p(t.$$.fragment,n),a=!1},d(n){h(t,n)}}}function Ma(s){let t,a,e,r;return a=new Ot({props:{error:s[9].error.message}}),{c(){t=V("div"),k(a.$$.fragment),this.h()},l(n){t=N(n,"DIV",{slot:!0,class:!0,style:!0});var l=oe(t);w(a.$$.fragment,l),l.forEach(d),this.h()},h(){S(t,"slot","error"),S(t,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),S(t,"style",e=`
				min-width: ${s[5].minWidth};
				max-width: ${s[5].maxWidth};
		`)},m(n,l){g(n,t,l),$(a,t,null),r=!0},p(n,l){const o={};l&512&&(o.error=n[9].error.message),a.$set(o),(!r||l&32&&e!==(e=`
				min-width: ${n[5].minWidth};
				max-width: ${n[5].maxWidth};
		`))&&S(t,"style",e)},i(n){r||(_(a.$$.fragment,n),r=!0)},o(n){p(a.$$.fragment,n),r=!1},d(n){n&&d(t),h(a)}}}function Aa(s){let t,a,e,r;return a=new rt({props:{emptyMessage:s[2],emptySet:s[1],chartType:Ha,isInitial:s[3]}}),{c(){t=V("div"),k(a.$$.fragment),this.h()},l(n){t=N(n,"DIV",{slot:!0,class:!0,style:!0});var l=oe(t);w(a.$$.fragment,l),l.forEach(d),this.h()},h(){S(t,"slot","empty"),S(t,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),S(t,"style",e=`
				min-width: ${s[5].minWidth};
				max-width: ${s[5].maxWidth};
		`)},m(n,l){g(n,t,l),$(a,t,null),r=!0},p(n,l){const o={};l&4&&(o.emptyMessage=n[2]),l&2&&(o.emptySet=n[1]),l&8&&(o.isInitial=n[3]),a.$set(o),(!r||l&32&&e!==(e=`
				min-width: ${n[5].minWidth};
				max-width: ${n[5].maxWidth};
		`))&&S(t,"style",e)},i(n){r||(_(a.$$.fragment,n),r=!0)},o(n){p(a.$$.fragment,n),r=!1},d(n){n&&d(t),h(a)}}}function Na(s){let t,a,e=(s[5].title??" ")+"",r,n,l,o,c;return l=new Ge({props:{column:s[5].value,fmt:s[5].fmt,data:s[9]}}),{c(){t=V("div"),a=V("p"),r=he(e),n=C(),k(l.$$.fragment),this.h()},l(i){t=N(i,"DIV",{class:!0,style:!0,slot:!0});var u=oe(t);a=N(u,"P",{class:!0});var f=oe(a);r=be(f,e),f.forEach(d),n=T(u),w(l.$$.fragment,u),u.forEach(d),this.h()},h(){S(a,"class","text-sm"),S(t,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),S(t,"style",o=`
			min-width: ${s[5].minWidth};
			max-width: ${s[5].maxWidth};
		`),S(t,"slot","skeleton")},m(i,u){g(i,t,u),te(t,a),te(a,r),te(t,n),$(l,t,null),c=!0},p(i,u){(!c||u&32)&&e!==(e=(i[5].title??" ")+"")&&Le(r,e);const f={};u&32&&(f.column=i[5].value),u&32&&(f.fmt=i[5].fmt),u&512&&(f.data=i[9]),l.$set(f),(!c||u&32&&o!==(o=`
			min-width: ${i[5].minWidth};
			max-width: ${i[5].maxWidth};
		`))&&S(t,"style",o)},i(i){c||(_(l.$$.fragment,i),c=!0)},o(i){p(l.$$.fragment,i),c=!1},d(i){i&&d(t),h(l)}}}function Va(s){let t,a;return t=new tt({props:{data:s[0],$$slots:{skeleton:[Na,({loaded:e})=>({9:e}),({loaded:e})=>e?512:0],empty:[Aa],error:[Ma,({loaded:e})=>({9:e}),({loaded:e})=>e?512:0],default:[Ra,({loaded:e})=>({9:e}),({loaded:e})=>e?512:0]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,[r]){const n={};r&1&&(n.data=e[0]),r&702&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}let Ha="Big Value";function Wa(s,t,a){let e,{$$slots:r={},$$scope:n}=t,{data:l}=t;const o=se.isQuery(l)?l.hash:void 0;let c=(l==null?void 0:l.hash)===o,{emptySet:i=void 0}=t,{emptyMessage:u=void 0}=t;return s.$$set=f=>{a(5,t=De(De({},t),Ve(f))),"data"in f&&a(0,l=f.data),"emptySet"in f&&a(1,i=f.emptySet),"emptyMessage"in f&&a(2,u=f.emptyMessage),"$$scope"in f&&a(7,n=f.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&a(3,c=(l==null?void 0:l.hash)===o),a(4,e=Object.fromEntries(Object.entries(t).filter(([,f])=>f!==void 0)))},t=Ve(t),[l,i,u,c,e,t,r,n]}class Ue extends Pe{constructor(t){super(),je(this,t,Wa,Va,We,{data:0,emptySet:1,emptyMessage:2})}}function Pa(s){let t,a=W.title+"",e;return{c(){t=V("h1"),e=he(a),this.h()},l(r){t=N(r,"H1",{class:!0});var n=oe(t);e=be(n,a),n.forEach(d),this.h()},h(){S(t,"class","title")},m(r,n){g(r,t,n),te(t,e)},p:ie,d(r){r&&d(t)}}}function ja(s){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:ie,p:ie,d:ie}}function La(s){let t,a,e,r,n;return document.title=t=W.title,{c(){a=C(),e=V("meta"),r=C(),n=V("meta"),this.h()},l(l){a=T(l),e=N(l,"META",{property:!0,content:!0}),r=T(l),n=N(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;S(e,"property","og:title"),S(e,"content",((l=W.og)==null?void 0:l.title)??W.title),S(n,"name","twitter:title"),S(n,"content",((o=W.og)==null?void 0:o.title)??W.title)},m(l,o){g(l,a,o),g(l,e,o),g(l,r,o),g(l,n,o)},p(l,o){o&0&&t!==(t=W.title)&&(document.title=t)},d(l){l&&(d(a),d(e),d(r),d(n))}}}function Ga(s){var n,l;let t,a,e=(W.description||((n=W.og)==null?void 0:n.description))&&Qa(),r=((l=W.og)==null?void 0:l.image)&&Oa();return{c(){e&&e.c(),t=C(),r&&r.c(),a=$e()},l(o){e&&e.l(o),t=T(o),r&&r.l(o),a=$e()},m(o,c){e&&e.m(o,c),g(o,t,c),r&&r.m(o,c),g(o,a,c)},p(o,c){var i,u;(W.description||(i=W.og)!=null&&i.description)&&e.p(o,c),(u=W.og)!=null&&u.image&&r.p(o,c)},d(o){o&&(d(t),d(a)),e&&e.d(o),r&&r.d(o)}}}function Qa(s){let t,a,e,r,n;return{c(){t=V("meta"),a=C(),e=V("meta"),r=C(),n=V("meta"),this.h()},l(l){t=N(l,"META",{name:!0,content:!0}),a=T(l),e=N(l,"META",{property:!0,content:!0}),r=T(l),n=N(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o,c;S(t,"name","description"),S(t,"content",W.description??((l=W.og)==null?void 0:l.description)),S(e,"property","og:description"),S(e,"content",((o=W.og)==null?void 0:o.description)??W.description),S(n,"name","twitter:description"),S(n,"content",((c=W.og)==null?void 0:c.description)??W.description)},m(l,o){g(l,t,o),g(l,a,o),g(l,e,o),g(l,r,o),g(l,n,o)},p:ie,d(l){l&&(d(t),d(a),d(e),d(r),d(n))}}}function Oa(s){let t,a,e;return{c(){t=V("meta"),a=C(),e=V("meta"),this.h()},l(r){t=N(r,"META",{property:!0,content:!0}),a=T(r),e=N(r,"META",{name:!0,content:!0}),this.h()},h(){var r,n;S(t,"property","og:image"),S(t,"content",He((r=W.og)==null?void 0:r.image)),S(e,"name","twitter:image"),S(e,"content",He((n=W.og)==null?void 0:n.image))},m(r,n){g(r,t,n),g(r,a,n),g(r,e,n)},p:ie,d(r){r&&(d(t),d(a),d(e))}}}function vt(s){let t,a;return t=new Fe({props:{queryID:"g_agency",queryResult:s[0]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&1&&(n.queryResult=e[0]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function bt(s){let t,a;return t=new Fe({props:{queryID:"g_fy",queryResult:s[1]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&2&&(n.queryResult=e[1]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function Ua(s){let t,a;return t=new Ne({props:{value:"%",valueLabel:"All Years"}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p:ie,i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function Ya(s){let t,a;return t=new Ne({props:{value:"%",valueLabel:"All Agencies"}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p:ie,i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function za(s){let t,a,e,r,n,l,o,c;return t=new Ne({props:{value:"10",valueLabel:">10% deviation"}}),e=new Ne({props:{value:"25",valueLabel:">25% deviation"}}),n=new Ne({props:{value:"50",valueLabel:">50% deviation"}}),o=new Ne({props:{value:"100",valueLabel:">100% deviation"}}),{c(){k(t.$$.fragment),a=C(),k(e.$$.fragment),r=C(),k(n.$$.fragment),l=C(),k(o.$$.fragment)},l(i){w(t.$$.fragment,i),a=T(i),w(e.$$.fragment,i),r=T(i),w(n.$$.fragment,i),l=T(i),w(o.$$.fragment,i)},m(i,u){$(t,i,u),g(i,a,u),$(e,i,u),g(i,r,u),$(n,i,u),g(i,l,u),$(o,i,u),c=!0},p:ie,i(i){c||(_(t.$$.fragment,i),_(e.$$.fragment,i),_(n.$$.fragment,i),_(o.$$.fragment,i),c=!0)},o(i){p(t.$$.fragment,i),p(e.$$.fragment,i),p(n.$$.fragment,i),p(o.$$.fragment,i),c=!1},d(i){i&&(d(a),d(r),d(l)),h(t,i),h(e,i),h(n,i),h(o,i)}}}function Ba(s){let t,a,e,r,n,l;return t=new Ke({props:{name:"f_fy",data:s[1],value:"fy",title:"Fiscal Year",defaultValue:"%",$$slots:{default:[Ua]},$$scope:{ctx:s}}}),e=new Ke({props:{name:"f_agency",data:s[0],value:"agency_name",title:"Agency",defaultValue:"%",$$slots:{default:[Ya]},$$scope:{ctx:s}}}),n=new Ke({props:{name:"f_threshold",title:"Deviation Threshold",defaultValue:"25",$$slots:{default:[za]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment),a=C(),k(e.$$.fragment),r=C(),k(n.$$.fragment)},l(o){w(t.$$.fragment,o),a=T(o),w(e.$$.fragment,o),r=T(o),w(n.$$.fragment,o)},m(o,c){$(t,o,c),g(o,a,c),$(e,o,c),g(o,r,c),$(n,o,c),l=!0},p(o,c){const i={};c[0]&2&&(i.data=o[1]),c[1]&8388608&&(i.$$scope={dirty:c,ctx:o}),t.$set(i);const u={};c[0]&1&&(u.data=o[0]),c[1]&8388608&&(u.$$scope={dirty:c,ctx:o}),e.$set(u);const f={};c[1]&8388608&&(f.$$scope={dirty:c,ctx:o}),n.$set(f)},i(o){l||(_(t.$$.fragment,o),_(e.$$.fragment,o),_(n.$$.fragment,o),l=!0)},o(o){p(t.$$.fragment,o),p(e.$$.fragment,o),p(n.$$.fragment,o),l=!1},d(o){o&&(d(a),d(r)),h(t,o),h(e,o),h(n,o)}}}function Xa(s){let t,a;return t=new It({props:{cols:"3",$$slots:{default:[Ba]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&3|r[1]&8388608&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function ht(s){let t,a;return t=new Fe({props:{queryID:"anomalies",queryResult:s[2]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&4&&(n.queryResult=e[2]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function $t(s){let t,a;return t=new Fe({props:{queryID:"anomaly_summary",queryResult:s[3]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&8&&(n.queryResult=e[3]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function Ka(s){let t,a,e,r,n,l,o,c;return t=new Ue({props:{data:s[3],value:"total_anomalies",title:"Anomalies Detected"}}),e=new Ue({props:{data:s[3],value:"spikes",title:"Spending Spikes"}}),n=new Ue({props:{data:s[3],value:"drops",title:"Spending Drops"}}),o=new Ue({props:{data:s[3],value:"affected_agencies",title:"Affected Agencies"}}),{c(){k(t.$$.fragment),a=C(),k(e.$$.fragment),r=C(),k(n.$$.fragment),l=C(),k(o.$$.fragment)},l(i){w(t.$$.fragment,i),a=T(i),w(e.$$.fragment,i),r=T(i),w(n.$$.fragment,i),l=T(i),w(o.$$.fragment,i)},m(i,u){$(t,i,u),g(i,a,u),$(e,i,u),g(i,r,u),$(n,i,u),g(i,l,u),$(o,i,u),c=!0},p(i,u){const f={};u[0]&8&&(f.data=i[3]),t.$set(f);const y={};u[0]&8&&(y.data=i[3]),e.$set(y);const E={};u[0]&8&&(E.data=i[3]),n.$set(E);const q={};u[0]&8&&(q.data=i[3]),o.$set(q)},i(i){c||(_(t.$$.fragment,i),_(e.$$.fragment,i),_(n.$$.fragment,i),_(o.$$.fragment,i),c=!0)},o(i){p(t.$$.fragment,i),p(e.$$.fragment,i),p(n.$$.fragment,i),p(o.$$.fragment,i),c=!1},d(i){i&&(d(a),d(r),d(l)),h(t,i),h(e,i),h(n,i),h(o,i)}}}function wt(s){let t,a;return t=new Fe({props:{queryID:"positive_anomalies",queryResult:s[4]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&16&&(n.queryResult=e[4]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function Za(s){let t,a;return t=new qt({props:{status:"info",$$slots:{default:[xa]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[1]&8388608&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function Ja(s){let t,a;return t=new lt({props:{data:s[4],search:"true",rows:"15",$$slots:{default:[en]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&16&&(n.data=e[4]),r[1]&8388608&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function xa(s){let t;return{c(){t=he("No spending spikes detected at this threshold.")},l(a){t=be(a,"No spending spikes detected at this threshold.")},m(a,e){g(a,t,e)},d(a){a&&d(t)}}}function en(s){let t,a,e,r,n,l,o,c,i,u;return t=new fe({props:{id:"agency_name",title:"Agency"}}),e=new fe({props:{id:"fiscal_year",title:"FY"}}),n=new fe({props:{id:"spend",title:"Spend",fmt:"usd2compactviz"}}),o=new fe({props:{id:"avg_spend",title:"Avg Spend",fmt:"usd2compactviz"}}),i=new fe({props:{id:"deviation_pct",title:"Deviation (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"positive"}}),{c(){k(t.$$.fragment),a=C(),k(e.$$.fragment),r=C(),k(n.$$.fragment),l=C(),k(o.$$.fragment),c=C(),k(i.$$.fragment)},l(f){w(t.$$.fragment,f),a=T(f),w(e.$$.fragment,f),r=T(f),w(n.$$.fragment,f),l=T(f),w(o.$$.fragment,f),c=T(f),w(i.$$.fragment,f)},m(f,y){$(t,f,y),g(f,a,y),$(e,f,y),g(f,r,y),$(n,f,y),g(f,l,y),$(o,f,y),g(f,c,y),$(i,f,y),u=!0},p:ie,i(f){u||(_(t.$$.fragment,f),_(e.$$.fragment,f),_(n.$$.fragment,f),_(o.$$.fragment,f),_(i.$$.fragment,f),u=!0)},o(f){p(t.$$.fragment,f),p(e.$$.fragment,f),p(n.$$.fragment,f),p(o.$$.fragment,f),p(i.$$.fragment,f),u=!1},d(f){f&&(d(a),d(r),d(l),d(c)),h(t,f),h(e,f),h(n,f),h(o,f),h(i,f)}}}function kt(s){let t,a;return t=new Fe({props:{queryID:"negative_anomalies",queryResult:s[5]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&32&&(n.queryResult=e[5]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function tn(s){let t,a;return t=new qt({props:{status:"info",$$slots:{default:[nn]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[1]&8388608&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function an(s){let t,a;return t=new lt({props:{data:s[5],search:"true",rows:"15",$$slots:{default:[rn]},$$scope:{ctx:s}}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&32&&(n.data=e[5]),r[1]&8388608&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function nn(s){let t;return{c(){t=he("No spending drops detected at this threshold.")},l(a){t=be(a,"No spending drops detected at this threshold.")},m(a,e){g(a,t,e)},d(a){a&&d(t)}}}function rn(s){let t,a,e,r,n,l,o,c,i,u;return t=new fe({props:{id:"agency_name",title:"Agency"}}),e=new fe({props:{id:"fiscal_year",title:"FY"}}),n=new fe({props:{id:"spend",title:"Spend",fmt:"usd2compactviz"}}),o=new fe({props:{id:"avg_spend",title:"Avg Spend",fmt:"usd2compactviz"}}),i=new fe({props:{id:"deviation_pct",title:"Deviation (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"negative"}}),{c(){k(t.$$.fragment),a=C(),k(e.$$.fragment),r=C(),k(n.$$.fragment),l=C(),k(o.$$.fragment),c=C(),k(i.$$.fragment)},l(f){w(t.$$.fragment,f),a=T(f),w(e.$$.fragment,f),r=T(f),w(n.$$.fragment,f),l=T(f),w(o.$$.fragment,f),c=T(f),w(i.$$.fragment,f)},m(f,y){$(t,f,y),g(f,a,y),$(e,f,y),g(f,r,y),$(n,f,y),g(f,l,y),$(o,f,y),g(f,c,y),$(i,f,y),u=!0},p:ie,i(f){u||(_(t.$$.fragment,f),_(e.$$.fragment,f),_(n.$$.fragment,f),_(o.$$.fragment,f),_(i.$$.fragment,f),u=!0)},o(f){p(t.$$.fragment,f),p(e.$$.fragment,f),p(n.$$.fragment,f),p(o.$$.fragment,f),p(i.$$.fragment,f),u=!1},d(f){f&&(d(a),d(r),d(l),d(c)),h(t,f),h(e,f),h(n,f),h(o,f),h(i,f)}}}function St(s){let t,a;return t=new Fe({props:{queryID:"deep_anomalies",queryResult:s[6]}}),{c(){k(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){$(t,e,r),a=!0},p(e,r){const n={};r[0]&64&&(n.queryResult=e[6]),t.$set(n)},i(e){a||(_(t.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function ln(s){let t,a,e,r,n,l,o,c,i,u;return t=new fe({props:{id:"agency_name",title:"Agency"}}),e=new fe({props:{id:"program_name",title:"Program"}}),n=new fe({props:{id:"fiscal_year",title:"FY"}}),o=new fe({props:{id:"spend",title:"Spend",fmt:"usd2compactviz"}}),i=new fe({props:{id:"deviation_pct",title:"Deviation (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"diverging"}}),{c(){k(t.$$.fragment),a=C(),k(e.$$.fragment),r=C(),k(n.$$.fragment),l=C(),k(o.$$.fragment),c=C(),k(i.$$.fragment)},l(f){w(t.$$.fragment,f),a=T(f),w(e.$$.fragment,f),r=T(f),w(n.$$.fragment,f),l=T(f),w(o.$$.fragment,f),c=T(f),w(i.$$.fragment,f)},m(f,y){$(t,f,y),g(f,a,y),$(e,f,y),g(f,r,y),$(n,f,y),g(f,l,y),$(o,f,y),g(f,c,y),$(i,f,y),u=!0},p:ie,i(f){u||(_(t.$$.fragment,f),_(e.$$.fragment,f),_(n.$$.fragment,f),_(o.$$.fragment,f),_(i.$$.fragment,f),u=!0)},o(f){p(t.$$.fragment,f),p(e.$$.fragment,f),p(n.$$.fragment,f),p(o.$$.fragment,f),p(i.$$.fragment,f),u=!1},d(f){f&&(d(a),d(r),d(l),d(c)),h(t,f),h(e,f),h(n,f),h(o,f),h(i,f)}}}function sn(s){let t,a,e,r,n,l,o='<h1 style="color: #211030; font-size: 1.7rem; font-weight: 700; margin: 0;">🔍 Anomaly Detection</h1> <p style="color: #6321a5; font-size: 0.95rem; margin: 4px 0 0 0;">Unusual spending patterns — deviations from historical agency averages</p>',c,i,u,f,y,E,q,Y,G,z,M,I,D='<a href="#spending-spikes">Spending Spikes</a>',R,F,Q,A,K,ce,ge,le,we='<a href="#spending-drops">Spending Drops</a>',ae,b,B,X,ue,ke,pe,ne,Ee='<a href="#program-level-anomalies">Program-Level Anomalies</a>',Te,ve,de,ye,re=typeof W<"u"&&W.title&&W.hide_title!==!0&&Pa();function qe(m,v){return typeof W<"u"&&W.title?La:ja}let Se=qe()(s),_e=typeof W=="object"&&Ga(),P=s[0]&&vt(s),j=s[1]&&bt(s);f=new Kt({props:{title:" Filters  click to expand",open:"true",$$slots:{default:[Xa]},$$scope:{ctx:s}}});let L=s[2]&&ht(s),O=s[3]&&$t(s);Y=new It({props:{cols:"4",$$slots:{default:[Ka]},$$scope:{ctx:s}}});let U=s[4]&&wt(s);const Re=[Ja,Za],H=[];function Oe(m,v){return m[4].length>0?0:1}Q=Oe(s),A=H[Q]=Re[Q](s);let Z=s[5]&&kt(s);const st=[an,tn],Ce=[];function it(m,v){return m[5].length>0?0:1}B=it(s),X=Ce[B]=st[B](s);let J=s[6]&&St(s);return de=new lt({props:{data:s[6],search:"true",rows:"25",$$slots:{default:[ln]},$$scope:{ctx:s}}}),{c(){re&&re.c(),t=C(),Se.c(),a=V("meta"),e=V("meta"),_e&&_e.c(),r=$e(),n=C(),l=V("div"),l.innerHTML=o,c=C(),P&&P.c(),i=C(),j&&j.c(),u=C(),k(f.$$.fragment),y=C(),L&&L.c(),E=C(),O&&O.c(),q=C(),k(Y.$$.fragment),G=C(),z=V("hr"),M=C(),I=V("h2"),I.innerHTML=D,R=C(),U&&U.c(),F=C(),A.c(),K=C(),ce=V("hr"),ge=C(),le=V("h2"),le.innerHTML=we,ae=C(),Z&&Z.c(),b=C(),X.c(),ue=C(),ke=V("hr"),pe=C(),ne=V("h2"),ne.innerHTML=Ee,Te=C(),J&&J.c(),ve=C(),k(de.$$.fragment),this.h()},l(m){re&&re.l(m),t=T(m);const v=Rt("svelte-2igo1p",document.head);Se.l(v),a=N(v,"META",{name:!0,content:!0}),e=N(v,"META",{name:!0,content:!0}),_e&&_e.l(v),r=$e(),v.forEach(d),n=T(m),l=N(m,"DIV",{style:!0,"data-svelte-h":!0}),Me(l)!=="svelte-6pf4my"&&(l.innerHTML=o),c=T(m),P&&P.l(m),i=T(m),j&&j.l(m),u=T(m),w(f.$$.fragment,m),y=T(m),L&&L.l(m),E=T(m),O&&O.l(m),q=T(m),w(Y.$$.fragment,m),G=T(m),z=N(m,"HR",{class:!0}),M=T(m),I=N(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(I)!=="svelte-o18q13"&&(I.innerHTML=D),R=T(m),U&&U.l(m),F=T(m),A.l(m),K=T(m),ce=N(m,"HR",{class:!0}),ge=T(m),le=N(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(le)!=="svelte-1rz3myu"&&(le.innerHTML=we),ae=T(m),Z&&Z.l(m),b=T(m),X.l(m),ue=T(m),ke=N(m,"HR",{class:!0}),pe=T(m),ne=N(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Me(ne)!=="svelte-10q5ur8"&&(ne.innerHTML=Ee),Te=T(m),J&&J.l(m),ve=T(m),w(de.$$.fragment,m),this.h()},h(){S(a,"name","twitter:card"),S(a,"content","summary_large_image"),S(e,"name","twitter:site"),S(e,"content","@evidence_dev"),Ie(l,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),Ie(l,"padding","28px 36px"),Ie(l,"border-radius","12px"),Ie(l,"border-bottom","4px solid #802cd7"),Ie(l,"margin-bottom","0"),S(z,"class","markdown"),S(I,"class","markdown"),S(I,"id","spending-spikes"),S(ce,"class","markdown"),S(le,"class","markdown"),S(le,"id","spending-drops"),S(ke,"class","markdown"),S(ne,"class","markdown"),S(ne,"id","program-level-anomalies")},m(m,v){re&&re.m(m,v),g(m,t,v),Se.m(document.head,null),te(document.head,a),te(document.head,e),_e&&_e.m(document.head,null),te(document.head,r),g(m,n,v),g(m,l,v),g(m,c,v),P&&P.m(m,v),g(m,i,v),j&&j.m(m,v),g(m,u,v),$(f,m,v),g(m,y,v),L&&L.m(m,v),g(m,E,v),O&&O.m(m,v),g(m,q,v),$(Y,m,v),g(m,G,v),g(m,z,v),g(m,M,v),g(m,I,v),g(m,R,v),U&&U.m(m,v),g(m,F,v),H[Q].m(m,v),g(m,K,v),g(m,ce,v),g(m,ge,v),g(m,le,v),g(m,ae,v),Z&&Z.m(m,v),g(m,b,v),Ce[B].m(m,v),g(m,ue,v),g(m,ke,v),g(m,pe,v),g(m,ne,v),g(m,Te,v),J&&J.m(m,v),g(m,ve,v),$(de,m,v),ye=!0},p(m,v){typeof W<"u"&&W.title&&W.hide_title!==!0&&re.p(m,v),Se.p(m,v),typeof W=="object"&&_e.p(m,v),m[0]?P?(P.p(m,v),v[0]&1&&_(P,1)):(P=vt(m),P.c(),_(P,1),P.m(i.parentNode,i)):P&&(x(),p(P,1,1,()=>{P=null}),ee()),m[1]?j?(j.p(m,v),v[0]&2&&_(j,1)):(j=bt(m),j.c(),_(j,1),j.m(u.parentNode,u)):j&&(x(),p(j,1,1,()=>{j=null}),ee());const ot={};v[0]&3|v[1]&8388608&&(ot.$$scope={dirty:v,ctx:m}),f.$set(ot),m[2]?L?(L.p(m,v),v[0]&4&&_(L,1)):(L=ht(m),L.c(),_(L,1),L.m(E.parentNode,E)):L&&(x(),p(L,1,1,()=>{L=null}),ee()),m[3]?O?(O.p(m,v),v[0]&8&&_(O,1)):(O=$t(m),O.c(),_(O,1),O.m(q.parentNode,q)):O&&(x(),p(O,1,1,()=>{O=null}),ee());const ft={};v[0]&8|v[1]&8388608&&(ft.$$scope={dirty:v,ctx:m}),Y.$set(ft),m[4]?U?(U.p(m,v),v[0]&16&&_(U,1)):(U=wt(m),U.c(),_(U,1),U.m(F.parentNode,F)):U&&(x(),p(U,1,1,()=>{U=null}),ee());let ze=Q;Q=Oe(m),Q===ze?H[Q].p(m,v):(x(),p(H[ze],1,1,()=>{H[ze]=null}),ee(),A=H[Q],A?A.p(m,v):(A=H[Q]=Re[Q](m),A.c()),_(A,1),A.m(K.parentNode,K)),m[5]?Z?(Z.p(m,v),v[0]&32&&_(Z,1)):(Z=kt(m),Z.c(),_(Z,1),Z.m(b.parentNode,b)):Z&&(x(),p(Z,1,1,()=>{Z=null}),ee());let Be=B;B=it(m),B===Be?Ce[B].p(m,v):(x(),p(Ce[Be],1,1,()=>{Ce[Be]=null}),ee(),X=Ce[B],X?X.p(m,v):(X=Ce[B]=st[B](m),X.c()),_(X,1),X.m(ue.parentNode,ue)),m[6]?J?(J.p(m,v),v[0]&64&&_(J,1)):(J=St(m),J.c(),_(J,1),J.m(ve.parentNode,ve)):J&&(x(),p(J,1,1,()=>{J=null}),ee());const Xe={};v[0]&64&&(Xe.data=m[6]),v[1]&8388608&&(Xe.$$scope={dirty:v,ctx:m}),de.$set(Xe)},i(m){ye||(_(P),_(j),_(f.$$.fragment,m),_(L),_(O),_(Y.$$.fragment,m),_(U),_(A),_(Z),_(X),_(J),_(de.$$.fragment,m),ye=!0)},o(m){p(P),p(j),p(f.$$.fragment,m),p(L),p(O),p(Y.$$.fragment,m),p(U),p(A),p(Z),p(X),p(J),p(de.$$.fragment,m),ye=!1},d(m){m&&(d(t),d(n),d(l),d(c),d(i),d(u),d(y),d(E),d(q),d(G),d(z),d(M),d(I),d(R),d(F),d(K),d(ce),d(ge),d(le),d(ae),d(b),d(ue),d(ke),d(pe),d(ne),d(Te),d(ve)),re&&re.d(m),Se.d(m),d(a),d(e),_e&&_e.d(m),d(r),P&&P.d(m),j&&j.d(m),h(f,m),L&&L.d(m),O&&O.d(m),h(Y,m),U&&U.d(m),H[Q].d(m),Z&&Z.d(m),Ce[B].d(m),J&&J.d(m),h(de,m)}}}const W={title:"Anomaly Detection"};function on(s,t,a){let e,r;ct(s,Zt,H=>a(38,e=H)),ct(s,_t,H=>a(43,r=H));let{data:n}=t,{data:l={},customFormattingSettings:o,__db:c,inputs:i}=n;Mt(_t,r="b94f01c839dcf28e6c513e5088f5b2cb",r);let u=Ut(Xt(i));At(u.subscribe(H=>a(9,i=H))),Nt(Bt,{getCustomFormats:()=>o.customFormats||[]});const f=(H,Oe)=>Jt(c.query,H,{query_name:Oe});Yt(f),e.params,Vt(()=>!0);let y={initialData:void 0,initialError:void 0},E=me`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`,q="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name";l.g_agency_data&&(l.g_agency_data instanceof Error?y.initialError=l.g_agency_data:y.initialData=l.g_agency_data,l.g_agency_columns&&(y.knownColumns=l.g_agency_columns));let Y,G=!1;const z=se.createReactive({callback:H=>{a(0,Y=H)},execFn:f},{id:"g_agency",...y});z(q,{noResolve:E,...y}),globalThis[Symbol.for("g_agency")]={get value(){return Y}};let M={initialData:void 0,initialError:void 0},I=me`select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year`,D="select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year";l.g_fy_data&&(l.g_fy_data instanceof Error?M.initialError=l.g_fy_data:M.initialData=l.g_fy_data,l.g_fy_columns&&(M.knownColumns=l.g_fy_columns));let R,F=!1;const Q=se.createReactive({callback:H=>{a(1,R=H)},execFn:f},{id:"g_fy",...M});Q(D,{noResolve:I,...M}),globalThis[Symbol.for("g_fy")]={get value(){return R}};let A={initialData:void 0,initialError:void 0},K=me`with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc`,ce=`with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc`;l.anomalies_data&&(l.anomalies_data instanceof Error?A.initialError=l.anomalies_data:A.initialData=l.anomalies_data,l.anomalies_columns&&(A.knownColumns=l.anomalies_columns));let ge,le=!1;const we=se.createReactive({callback:H=>{a(2,ge=H)},execFn:f},{id:"anomalies",...A});we(ce,{noResolve:K,...A}),globalThis[Symbol.for("anomalies")]={get value(){return ge}};let ae={initialData:void 0,initialError:void 0},b=me`select
    count(*) as total_anomalies,
    count(case when anomaly_type = 'Spike' then 1 end) as spikes,
    count(case when anomaly_type = 'Drop' then 1 end) as drops,
    count(distinct agency_name) as affected_agencies
from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc)`,B=`select
    count(*) as total_anomalies,
    count(case when anomaly_type = 'Spike' then 1 end) as spikes,
    count(case when anomaly_type = 'Drop' then 1 end) as drops,
    count(distinct agency_name) as affected_agencies
from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc)`;l.anomaly_summary_data&&(l.anomaly_summary_data instanceof Error?ae.initialError=l.anomaly_summary_data:ae.initialData=l.anomaly_summary_data,l.anomaly_summary_columns&&(ae.knownColumns=l.anomaly_summary_columns));let X,ue=!1;const ke=se.createReactive({callback:H=>{a(3,X=H)},execFn:f},{id:"anomaly_summary",...ae});ke(B,{noResolve:b,...ae}),globalThis[Symbol.for("anomaly_summary")]={get value(){return X}};let pe={initialData:void 0,initialError:void 0},ne=me`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Spike' order by deviation_pct desc`,Ee=`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Spike' order by deviation_pct desc`;l.positive_anomalies_data&&(l.positive_anomalies_data instanceof Error?pe.initialError=l.positive_anomalies_data:pe.initialData=l.positive_anomalies_data,l.positive_anomalies_columns&&(pe.knownColumns=l.positive_anomalies_columns));let Te,ve=!1;const de=se.createReactive({callback:H=>{a(4,Te=H)},execFn:f},{id:"positive_anomalies",...pe});de(Ee,{noResolve:ne,...pe}),globalThis[Symbol.for("positive_anomalies")]={get value(){return Te}};let ye={initialData:void 0,initialError:void 0},re=me`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Drop' order by deviation_pct asc`,qe=`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Drop' order by deviation_pct asc`;l.negative_anomalies_data&&(l.negative_anomalies_data instanceof Error?ye.initialError=l.negative_anomalies_data:ye.initialData=l.negative_anomalies_data,l.negative_anomalies_columns&&(ye.knownColumns=l.negative_anomalies_columns));let Qe,Se=!1;const _e=se.createReactive({callback:H=>{a(5,Qe=H)},execFn:f},{id:"negative_anomalies",...ye});_e(qe,{noResolve:re,...ye}),globalThis[Symbol.for("negative_anomalies")]={get value(){return Qe}};let P={initialData:void 0,initialError:void 0},j=me`with prog_yearly as (
    select agency_name, program_name, fiscal_year, sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, program_name, fiscal_year
),
with_dev as (
    select *,
        round((spend - avg(spend) over (partition by agency_name, program_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name, program_name), 0), 1) as deviation_pct
    from prog_yearly
)
select * from with_dev
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc
limit 50`,L=`with prog_yearly as (
    select agency_name, program_name, fiscal_year, sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, program_name, fiscal_year
),
with_dev as (
    select *,
        round((spend - avg(spend) over (partition by agency_name, program_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name, program_name), 0), 1) as deviation_pct
    from prog_yearly
)
select * from with_dev
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc
limit 50`;l.deep_anomalies_data&&(l.deep_anomalies_data instanceof Error?P.initialError=l.deep_anomalies_data:P.initialData=l.deep_anomalies_data,l.deep_anomalies_columns&&(P.knownColumns=l.deep_anomalies_columns));let O,U=!1;const Re=se.createReactive({callback:H=>{a(6,O=H)},execFn:f},{id:"deep_anomalies",...P});return Re(L,{noResolve:j,...P}),globalThis[Symbol.for("deep_anomalies")]={get value(){return O}},s.$$set=H=>{"data"in H&&a(7,n=H.data)},s.$$.update=()=>{s.$$.dirty[0]&128&&a(8,{data:l={},customFormattingSettings:o,__db:c}=n,l),s.$$.dirty[0]&256&&zt.set(Object.keys(l).length>0),s.$$.dirty[1]&128&&e.params,s.$$.dirty[0]&15360&&(E||!G?E||(z(q,{noResolve:E,...y}),a(13,G=!0)):z(q,{noResolve:E})),s.$$.dirty[0]&245760&&(I||!F?I||(Q(D,{noResolve:I,...M}),a(17,F=!0)):Q(D,{noResolve:I})),s.$$.dirty[0]&512&&a(19,K=me`with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc`),s.$$.dirty[0]&512&&a(20,ce=`with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc`),s.$$.dirty[0]&3932160&&(K||!le?K||(we(ce,{noResolve:K,...A}),a(21,le=!0)):we(ce,{noResolve:K})),s.$$.dirty[0]&512&&a(23,b=me`select
    count(*) as total_anomalies,
    count(case when anomaly_type = 'Spike' then 1 end) as spikes,
    count(case when anomaly_type = 'Drop' then 1 end) as drops,
    count(distinct agency_name) as affected_agencies
from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc)`),s.$$.dirty[0]&512&&a(24,B=`select
    count(*) as total_anomalies,
    count(case when anomaly_type = 'Spike' then 1 end) as spikes,
    count(case when anomaly_type = 'Drop' then 1 end) as drops,
    count(distinct agency_name) as affected_agencies
from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc)`),s.$$.dirty[0]&62914560&&(b||!ue?b||(ke(B,{noResolve:b,...ae}),a(25,ue=!0)):ke(B,{noResolve:b})),s.$$.dirty[0]&512&&a(27,ne=me`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Spike' order by deviation_pct desc`),s.$$.dirty[0]&512&&a(28,Ee=`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Spike' order by deviation_pct desc`),s.$$.dirty[0]&1006632960&&(ne||!ve?ne||(de(Ee,{noResolve:ne,...pe}),a(29,ve=!0)):de(Ee,{noResolve:ne})),s.$$.dirty[0]&512&&a(31,re=me`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Drop' order by deviation_pct asc`),s.$$.dirty[0]&512&&a(32,qe=`select * from (with agency_yearly as (
    select
        agency_name,
        fiscal_year,
        sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, fiscal_year
),
with_stats as (
    select
        agency_name,
        fiscal_year,
        spend,
        avg(spend) over (partition by agency_name)    as avg_spend,
        stddev(spend) over (partition by agency_name) as std_spend,
        round((spend - avg(spend) over (partition by agency_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name), 0), 1) as deviation_pct
    from agency_yearly
)
select
    agency_name,
    fiscal_year,
    spend,
    avg_spend,
    deviation_pct,
    case when deviation_pct > 0 then 'Spike' else 'Drop' end as anomaly_type
from with_stats
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc) where anomaly_type = 'Drop' order by deviation_pct asc`),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(re||!Se?re||(_e(qe,{noResolve:re,...ye}),a(33,Se=!0)):_e(qe,{noResolve:re})),s.$$.dirty[0]&512&&a(35,j=me`with prog_yearly as (
    select agency_name, program_name, fiscal_year, sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, program_name, fiscal_year
),
with_dev as (
    select *,
        round((spend - avg(spend) over (partition by agency_name, program_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name, program_name), 0), 1) as deviation_pct
    from prog_yearly
)
select * from with_dev
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc
limit 50`),s.$$.dirty[0]&512&&a(36,L=`with prog_yearly as (
    select agency_name, program_name, fiscal_year, sum(total_budget_amount) as spend
    from mbtsa.subprogram_level
    where coalesce(agency_name,'') like '${i.f_agency.value??"%"}'
    group by agency_name, program_name, fiscal_year
),
with_dev as (
    select *,
        round((spend - avg(spend) over (partition by agency_name, program_name)) * 100.0
              / nullif(avg(spend) over (partition by agency_name, program_name), 0), 1) as deviation_pct
    from prog_yearly
)
select * from with_dev
where abs(deviation_pct) > ${i.f_threshold.value??25}
  and cast(fiscal_year as varchar) like '${i.f_fy.value??"%"}'
order by abs(deviation_pct) desc
limit 50`),s.$$.dirty[1]&120&&(j||!U?j||(Re(L,{noResolve:j,...P}),a(37,U=!0)):Re(L,{noResolve:j}))},a(11,E=me`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`),a(12,q="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name"),a(15,I=me`select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year`),a(16,D="select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year"),[Y,R,ge,X,Te,Qe,O,n,l,i,y,E,q,G,M,I,D,F,A,K,ce,le,ae,b,B,ue,pe,ne,Ee,ve,ye,re,qe,Se,P,j,L,U,e]}class $n extends Pe{constructor(t){super(),je(this,t,on,sn,We,{data:7},null,[-1,-1])}}export{$n as component};
