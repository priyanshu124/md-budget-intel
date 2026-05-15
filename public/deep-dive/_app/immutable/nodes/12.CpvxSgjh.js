import{s as rs,x as we,d as f,c as i,i as w,j as A,m as Y,p as T,w as wr,L as vr,I as cs,N as Sr,b as O,f as H,e as d,C as zr,g as v,h as _s,k as ar,l as Xe,n as S,o as k,t as z,q as hr,r as is,u as ms,v as us,O as fs}from"../chunks/scheduler.Z7x_RWPH.js";import{S as ss,i as ls,d as D,t as $,a as b,c as Re,m as N,b as I,e as q,g as De}from"../chunks/index.DBfziG1F.js";import{D as Xt,a as ds,g as ys,b as at}from"../chunks/Details.D9DjU4bU.js";import{i as gs}from"../chunks/index.CHy-RPfc.js";import{D as Zt,a as ps,s as bs,Q as Me,u as $s,p as hs,v as B,b as Vr,r as Lr,C as ws}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YIPYepSh.js";import{w as vs}from"../chunks/entry.DQyOB8Va.js";import{h as K}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as ks}from"../chunks/stores.BHZvlnpo.js";import{Q as Ue}from"../chunks/QueryViewer.C9VIWH7H.js";import{p as xs}from"../chunks/profile.BW8tN6E9.js";function Fs(r){let a;return{c(){a=T("div"),this.h()},l(t){a=A(t,"DIV",{style:!0}),Y(a).forEach(f),this.h()},h(){i(a,"width","100%"),i(a,"height",r[0])},m(t,e){w(t,a,e),r[10](a)},p(t,[e]){e&1&&i(a,"height",t[0])},i:we,o:we,d(t){t&&f(a),r[10](null)}}}function Es(r,a){return r&&r.length>a?r.slice(0,a)+"…":r||""}function Cs(r,a,t){let e,{data:n=[]}=a,{labelField:c="agency_name"}=a,{valueField:_="change_pct"}=a,{title:g="Budget Variance (%)"}=a,{height:l="500px"}=a,{limit:s=12}=a,{threshold:y=10}=a,m,E;function L(F,x){const P=(F||[]).filter(function(J){return J[_]!=null&&isFinite(Number(J[_]))}),j=P.filter(function(J){return Number(J[_])>=x}).sort(function(J,W){return Number(W[_])-Number(J[_])}).slice(0,s);return P.filter(function(J){return Number(J[_])<=-x}).sort(function(J,W){return Number(J[_])-Number(W[_])}).slice(0,s).concat(j.slice().reverse())}function C(F){const x=F.map(function(j){return j[c]}),P=F.map(function(j){return Number(j[_])});return{title:{text:g,left:"left",top:0,textStyle:{fontSize:14,fontWeight:600,color:"#231F20"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter(j){if(!j||!j[0])return"";const $e=j[0],J=Number($e.value);return"<b>"+$e.name+"</b><br/>Change: "+(J>0?"+":"")+J.toFixed(1)+"%"}},grid:{left:16,right:80,top:48,bottom:12,containLabel:!0},xAxis:{type:"value",axisLabel:{formatter(j){return j+"%"},color:"#6B7280",fontSize:11},splitLine:{lineStyle:{color:"#E5E7EB",type:"dashed"}},axisLine:{show:!0,lineStyle:{color:"#231F20",width:1.5}}},yAxis:{type:"category",data:x,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{width:200,overflow:"truncate",fontSize:11,color:"#374151",align:"right",formatter(j){return Es(j,32)}}},series:[{type:"bar",barMaxWidth:22,data:P,itemStyle:{color(j){const $e=Number(j.value);return $e>=y?"#2EAD6B":$e<=-y?"#C8122C":"#9CA3AF"},borderRadius:2},label:{show:!0,position(j){return Number(j.value)>=0?"right":"left"},distance:6,padding:[2,4],backgroundColor:"rgba(255,255,255,0.85)",borderRadius:2,fontSize:11,fontWeight:600,color:"#231F20",formatter(j){const $e=Number(j.value);return($e>0?"+":"")+$e.toFixed(1)+"%"}},markLine:{silent:!0,symbol:["none","none"],lineStyle:{color:"#231F20",width:1.5,type:"solid"},label:{show:!1},data:[{xAxis:0}]}}]}}wr(function(){var F=function(){E&&E.resize()};return window.addEventListener("resize",F),function(){window.removeEventListener("resize",F)}});function p(F){vr[F?"unshift":"push"](()=>{m=F,t(1,m)})}return r.$$set=F=>{"data"in F&&t(2,n=F.data),"labelField"in F&&t(3,c=F.labelField),"valueField"in F&&t(4,_=F.valueField),"title"in F&&t(5,g=F.title),"height"in F&&t(0,l=F.height),"limit"in F&&t(6,s=F.limit),"threshold"in F&&t(7,y=F.threshold)},r.$$.update=()=>{r.$$.dirty&132&&t(9,e=L(n,y)),r.$$.dirty&770&&m&&(E||t(8,E=gs(m)),e.length>0&&E.setOption(C(e),!0))},[l,m,n,c,_,g,s,y,E,e,p]}class Rs extends ss{constructor(a){super(),ls(this,a,Cs,Fs,rs,{data:2,labelField:3,valueField:4,title:5,height:0,limit:6,threshold:7})}}const{document:dt}=ys;function Ds(r){var n;let a,t=((n=Q.og)==null?void 0:n.title)+"",e;return{c(){a=T("h1"),e=z(t),this.h()},l(c){a=A(c,"H1",{class:!0});var _=Y(a);e=S(_,t),_.forEach(f),this.h()},h(){H(a,"class","title")},m(c,_){w(c,a,_),d(a,e)},p:we,d(c){c&&f(a)}}}function Ns(r){return{c(){this.h()},l(a){this.h()},h(){dt.title="Evidence"},m:we,p:we,d:we}}function Is(r){var _;let a,t,e,n,c;return dt.title=a=(_=Q.og)==null?void 0:_.title,{c(){t=k(),e=T("meta"),n=k(),c=T("meta"),this.h()},l(g){t=v(g),e=A(g,"META",{property:!0,content:!0}),n=v(g),c=A(g,"META",{name:!0,content:!0}),this.h()},h(){var g,l;H(e,"property","og:title"),H(e,"content",((g=Q.og)==null?void 0:g.title)??Q.title),H(c,"name","twitter:title"),H(c,"content",((l=Q.og)==null?void 0:l.title)??Q.title)},m(g,l){w(g,t,l),w(g,e,l),w(g,n,l),w(g,c,l)},p(g,l){var s;l&0&&a!==(a=(s=Q.og)==null?void 0:s.title)&&(dt.title=a)},d(g){g&&(f(t),f(e),f(n),f(c))}}}function qs(r){var c,_;let a,t,e=(Q.description||((c=Q.og)==null?void 0:c.description))&&As(),n=((_=Q.og)==null?void 0:_.image)&&Ts();return{c(){e&&e.c(),a=k(),n&&n.c(),t=ar()},l(g){e&&e.l(g),a=v(g),n&&n.l(g),t=ar()},m(g,l){e&&e.m(g,l),w(g,a,l),n&&n.m(g,l),w(g,t,l)},p(g,l){var s,y;(Q.description||(s=Q.og)!=null&&s.description)&&e.p(g,l),(y=Q.og)!=null&&y.image&&n.p(g,l)},d(g){g&&(f(a),f(t)),e&&e.d(g),n&&n.d(g)}}}function As(r){let a,t,e,n,c;return{c(){a=T("meta"),t=k(),e=T("meta"),n=k(),c=T("meta"),this.h()},l(_){a=A(_,"META",{name:!0,content:!0}),t=v(_),e=A(_,"META",{property:!0,content:!0}),n=v(_),c=A(_,"META",{name:!0,content:!0}),this.h()},h(){var _,g,l;H(a,"name","description"),H(a,"content",Q.description??((_=Q.og)==null?void 0:_.description)),H(e,"property","og:description"),H(e,"content",((g=Q.og)==null?void 0:g.description)??Q.description),H(c,"name","twitter:description"),H(c,"content",((l=Q.og)==null?void 0:l.description)??Q.description)},m(_,g){w(_,a,g),w(_,t,g),w(_,e,g),w(_,n,g),w(_,c,g)},p:we,d(_){_&&(f(a),f(t),f(e),f(n),f(c))}}}function Ts(r){let a,t,e;return{c(){a=T("meta"),t=k(),e=T("meta"),this.h()},l(n){a=A(n,"META",{property:!0,content:!0}),t=v(n),e=A(n,"META",{name:!0,content:!0}),this.h()},h(){var n,c;H(a,"property","og:image"),H(a,"content",Vr((n=Q.og)==null?void 0:n.image)),H(e,"name","twitter:image"),H(e,"content",Vr((c=Q.og)==null?void 0:c.image))},m(n,c){w(n,a,c),w(n,t,c),w(n,e,c)},p:we,d(n){n&&(f(a),f(t),f(e))}}}function Yr(r){let a,t;return a=new Ue({props:{queryID:"g_agency",queryResult:r[15]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&32768&&(c.queryResult=e[15]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Hr(r){let a,t;return a=new Ue({props:{queryID:"g_fy_all",queryResult:r[16]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&65536&&(c.queryResult=e[16]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function jr(r){let a,t;return a=new Ue({props:{queryID:"g_unit",queryResult:r[17]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&131072&&(c.queryResult=e[17]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Pr(r){let a,t;return a=new Ue({props:{queryID:"g_program",queryResult:r[18]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&262144&&(c.queryResult=e[18]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Br(r){let a,t;return a=new Ue({props:{queryID:"g_fund",queryResult:r[19]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&524288&&(c.queryResult=e[19]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Ss(r){let a,t,e,n,c,_,g,l;return a=new at({props:{value:"agency",valueLabel:"Agency"}}),e=new at({props:{value:"unit",valueLabel:"Unit"}}),c=new at({props:{value:"program",valueLabel:"Program"}}),g=new at({props:{value:"subprogram",valueLabel:"Subprogram"}}),{c(){q(a.$$.fragment),t=k(),q(e.$$.fragment),n=k(),q(c.$$.fragment),_=k(),q(g.$$.fragment)},l(s){I(a.$$.fragment,s),t=v(s),I(e.$$.fragment,s),n=v(s),I(c.$$.fragment,s),_=v(s),I(g.$$.fragment,s)},m(s,y){N(a,s,y),w(s,t,y),N(e,s,y),w(s,n,y),N(c,s,y),w(s,_,y),N(g,s,y),l=!0},p:we,i(s){l||(b(a.$$.fragment,s),b(e.$$.fragment,s),b(c.$$.fragment,s),b(g.$$.fragment,s),l=!0)},o(s){$(a.$$.fragment,s),$(e.$$.fragment,s),$(c.$$.fragment,s),$(g.$$.fragment,s),l=!1},d(s){s&&(f(t),f(n),f(_)),D(a,s),D(e,s),D(c,s),D(g,s)}}}function zs(r){let a,t;return a=new at({props:{value:"%",valueLabel:"Latest"}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p:we,i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Vs(r){let a,t;return a=new at({props:{value:"%",valueLabel:"Prior"}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p:we,i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Mr(r){let a,t,e="Active Filters:",n,c=r[37](r[14]),_,g=r[37](r[13]),l,s=r[37](r[12]),y,m=r[37](r[11]),E=c&&Ur(r),L=g&&Or(r),C=s&&Qr(r),p=m&&Wr(r);return{c(){a=T("div"),t=T("span"),t.textContent=e,n=k(),E&&E.c(),_=k(),L&&L.c(),l=k(),C&&C.c(),y=k(),p&&p.c(),this.h()},l(F){a=A(F,"DIV",{style:!0});var x=Y(a);t=A(x,"SPAN",{style:!0,"data-svelte-h":!0}),Xe(t)!=="svelte-xhm567"&&(t.textContent=e),n=v(x),E&&E.l(x),_=v(x),L&&L.l(x),l=v(x),C&&C.l(x),y=v(x),p&&p.l(x),x.forEach(f),this.h()},h(){i(t,"font-size","0.7rem"),i(t,"font-weight","700"),i(t,"color","#6B7280"),i(t,"text-transform","uppercase"),i(t,"margin-right","4px"),H(a,"style",sl+"background:var(--nxt-pink); border-bottom:1px solid var(--nxt-border); padding:6px 24px; display:flex; flex-wrap:wrap; gap:6px; align-items:center;")},m(F,x){w(F,a,x),d(a,t),d(a,n),E&&E.m(a,null),d(a,_),L&&L.m(a,null),d(a,l),C&&C.m(a,null),d(a,y),p&&p.m(a,null),r[105](a)},p(F,x){x[0]&16384&&(c=F[37](F[14])),c?E?E.p(F,x):(E=Ur(F),E.c(),E.m(a,_)):E&&(E.d(1),E=null),x[0]&8192&&(g=F[37](F[13])),g?L?L.p(F,x):(L=Or(F),L.c(),L.m(a,l)):L&&(L.d(1),L=null),x[0]&4096&&(s=F[37](F[12])),s?C?C.p(F,x):(C=Qr(F),C.c(),C.m(a,y)):C&&(C.d(1),C=null),x[0]&2048&&(m=F[37](F[11])),m?p?p.p(F,x):(p=Wr(F),p.c(),p.m(a,null)):p&&(p.d(1),p=null)},d(F){F&&f(a),E&&E.d(),L&&L.d(),C&&C.d(),p&&p.d(),r[105](null)}}}function Ur(r){let a,t,e;return{c(){a=T("span"),t=z("Agency: "),e=z(r[14]),this.h()},l(n){a=A(n,"SPAN",{style:!0});var c=Y(a);t=S(c,"Agency: "),e=S(c,r[14]),c.forEach(f),this.h()},h(){i(a,"background","var(--nxt-surface)"),i(a,"border","1px solid #C8122C"),i(a,"border-radius","20px"),i(a,"padding","3px 10px"),i(a,"font-size","0.75rem"),i(a,"color","#C8122C"),i(a,"font-weight","600"),i(a,"white-space","nowrap")},m(n,c){w(n,a,c),d(a,t),d(a,e)},p(n,c){c[0]&16384&&O(e,n[14])},d(n){n&&f(a)}}}function Or(r){let a,t,e;return{c(){a=T("span"),t=z("Unit: "),e=z(r[13]),this.h()},l(n){a=A(n,"SPAN",{style:!0});var c=Y(a);t=S(c,"Unit: "),e=S(c,r[13]),c.forEach(f),this.h()},h(){i(a,"background","var(--nxt-surface)"),i(a,"border","1px solid #C8122C"),i(a,"border-radius","20px"),i(a,"padding","3px 10px"),i(a,"font-size","0.75rem"),i(a,"color","#C8122C"),i(a,"font-weight","600"),i(a,"white-space","nowrap")},m(n,c){w(n,a,c),d(a,t),d(a,e)},p(n,c){c[0]&8192&&O(e,n[13])},d(n){n&&f(a)}}}function Qr(r){let a,t,e;return{c(){a=T("span"),t=z("Program: "),e=z(r[12]),this.h()},l(n){a=A(n,"SPAN",{style:!0});var c=Y(a);t=S(c,"Program: "),e=S(c,r[12]),c.forEach(f),this.h()},h(){i(a,"background","var(--nxt-surface)"),i(a,"border","1px solid #C8122C"),i(a,"border-radius","20px"),i(a,"padding","3px 10px"),i(a,"font-size","0.75rem"),i(a,"color","#C8122C"),i(a,"font-weight","600"),i(a,"white-space","nowrap")},m(n,c){w(n,a,c),d(a,t),d(a,e)},p(n,c){c[0]&4096&&O(e,n[12])},d(n){n&&f(a)}}}function Wr(r){let a,t,e;return{c(){a=T("span"),t=z("Fund: "),e=z(r[11]),this.h()},l(n){a=A(n,"SPAN",{style:!0});var c=Y(a);t=S(c,"Fund: "),e=S(c,r[11]),c.forEach(f),this.h()},h(){i(a,"background","var(--nxt-surface)"),i(a,"border","1px solid #C8122C"),i(a,"border-radius","20px"),i(a,"padding","3px 10px"),i(a,"font-size","0.75rem"),i(a,"color","#C8122C"),i(a,"font-weight","600"),i(a,"white-space","nowrap")},m(n,c){w(n,a,c),d(a,t),d(a,e)},p(n,c){c[0]&2048&&O(e,n[11])},d(n){n&&f(a)}}}function Ls(r){let a,t;return a=new at({props:{value:"%",valueLabel:"All Agencies"}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p:we,i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Ys(r){let a,t;return a=new at({props:{value:"%",valueLabel:"All Units"}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p:we,i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Hs(r){let a,t;return a=new at({props:{value:"%",valueLabel:"All Programs"}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p:we,i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function js(r){let a,t;return a=new at({props:{value:"%",valueLabel:"All Fund Types"}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p:we,i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Ps(r){let a,t,e,n,c,_,g,l,s,y,m,E,L;return e=new Xt({props:{name:"f_agency",data:r[15],value:"agency_name",title:"Agency",defaultValue:"%",$$slots:{default:[Ls]},$$scope:{ctx:r}}}),_=new Xt({props:{name:"f_unit",data:r[17],value:"u",title:"Unit",defaultValue:"%",$$slots:{default:[Ys]},$$scope:{ctx:r}}}),s=new Xt({props:{name:"f_program",data:r[18],value:"p",title:"Program",defaultValue:"%",$$slots:{default:[Hs]},$$scope:{ctx:r}}}),E=new Xt({props:{name:"f_fund",data:r[19],value:"fund_type",title:"Fund Type",defaultValue:"%",$$slots:{default:[js]},$$scope:{ctx:r}}}),{c(){a=T("div"),t=T("div"),q(e.$$.fragment),n=k(),c=T("div"),q(_.$$.fragment),g=k(),l=T("div"),q(s.$$.fragment),y=k(),m=T("div"),q(E.$$.fragment),this.h()},l(C){a=A(C,"DIV",{style:!0});var p=Y(a);t=A(p,"DIV",{style:!0});var F=Y(t);I(e.$$.fragment,F),F.forEach(f),n=v(p),c=A(p,"DIV",{style:!0});var x=Y(c);I(_.$$.fragment,x),x.forEach(f),g=v(p),l=A(p,"DIV",{style:!0});var P=Y(l);I(s.$$.fragment,P),P.forEach(f),y=v(p),m=A(p,"DIV",{style:!0});var j=Y(m);I(E.$$.fragment,j),j.forEach(f),p.forEach(f),this.h()},h(){i(t,"flex","1"),i(t,"min-width","200px"),i(t,"max-width","300px"),i(c,"flex","1"),i(c,"min-width","200px"),i(c,"max-width","300px"),i(l,"flex","1"),i(l,"min-width","200px"),i(l,"max-width","300px"),i(m,"flex","1"),i(m,"min-width","160px"),i(m,"max-width","240px"),i(a,"display","flex"),i(a,"flex-wrap","wrap"),i(a,"gap","12px"),i(a,"padding","8px 0")},m(C,p){w(C,a,p),d(a,t),N(e,t,null),d(a,n),d(a,c),N(_,c,null),d(a,g),d(a,l),N(s,l,null),d(a,y),d(a,m),N(E,m,null),L=!0},p(C,p){const F={};p[0]&32768&&(F.data=C[15]),p[4]&1024&&(F.$$scope={dirty:p,ctx:C}),e.$set(F);const x={};p[0]&131072&&(x.data=C[17]),p[4]&1024&&(x.$$scope={dirty:p,ctx:C}),_.$set(x);const P={};p[0]&262144&&(P.data=C[18]),p[4]&1024&&(P.$$scope={dirty:p,ctx:C}),s.$set(P);const j={};p[0]&524288&&(j.data=C[19]),p[4]&1024&&(j.$$scope={dirty:p,ctx:C}),E.$set(j)},i(C){L||(b(e.$$.fragment,C),b(_.$$.fragment,C),b(s.$$.fragment,C),b(E.$$.fragment,C),L=!0)},o(C){$(e.$$.fragment,C),$(_.$$.fragment,C),$(s.$$.fragment,C),$(E.$$.fragment,C),L=!1},d(C){C&&f(a),D(e),D(_),D(s),D(E)}}}function Gr(r){let a,t;return a=new Ue({props:{queryID:"year_bounds",queryResult:r[0]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&1&&(c.queryResult=e[0]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Kr(r){let a,t;return a=new Ue({props:{queryID:"selected_years",queryResult:r[20]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&1048576&&(c.queryResult=e[20]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Jr(r){let a,t;return a=new Ue({props:{queryID:"agency_variance",queryResult:r[1]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&2&&(c.queryResult=e[1]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Xr(r){let a,t;return a=new Ue({props:{queryID:"unit_variance",queryResult:r[2]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&4&&(c.queryResult=e[2]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Zr(r){let a,t;return a=new Ue({props:{queryID:"program_variance",queryResult:r[3]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&8&&(c.queryResult=e[3]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function es(r){let a,t;return a=new Ue({props:{queryID:"subprogram_variance",queryResult:r[4]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&16&&(c.queryResult=e[4]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function as(r){let a,t;return a=new Ue({props:{queryID:"new_programs",queryResult:r[21]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&2097152&&(c.queryResult=e[21]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function ts(r){let a,t;return a=new Ue({props:{queryID:"eliminated_programs",queryResult:r[22]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&4194304&&(c.queryResult=e[22]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function ns(r){let a,t;return a=new Ue({props:{queryID:"fund_variance",queryResult:r[23]}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&8388608&&(c.queryResult=e[23]),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Bs(r){let a,t,e=r[7].toLowerCase()+"",n,c,_;return{c(){a=T("p"),t=z("No new "),n=z(e),c=z("s in FY"),_=z(r[34]),this.h()},l(g){a=A(g,"P",{style:!0});var l=Y(a);t=S(l,"No new "),n=S(l,e),c=S(l,"s in FY"),_=S(l,r[34]),l.forEach(f),this.h()},h(){i(a,"color","#6B7280"),i(a,"font-size","0.875rem"),i(a,"padding","12px 0")},m(g,l){w(g,a,l),d(a,t),d(a,n),d(a,c),d(a,_)},p(g,l){l[0]&128&&e!==(e=g[7].toLowerCase()+"")&&O(n,e),l[1]&8&&O(_,g[34])},i:we,o:we,d(g){g&&f(a)}}}function Ms(r){let a,t;return a=new Zt({props:{data:r[8].filter(r[106]).slice(0,10),rows:"10",$$slots:{default:[Us]},$$scope:{ctx:r}}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&768&&(c.data=e[8].filter(e[106]).slice(0,10)),n[0]&640|n[4]&1024&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Us(r){let a,t,e,n,c,_,g,l,s;return t=new B({props:{id:"agency_code",title:"Code"}}),n=new B({props:{id:"agency_name",title:"Agency"}}),_=new B({props:{id:r[9],title:r[7]}}),l=new B({props:{id:"latest_year",title:"Budget",fmt:"usd2compactviz"}}),{c(){a=z("svelte    "),q(t.$$.fragment),e=k(),q(n.$$.fragment),c=k(),q(_.$$.fragment),g=k(),q(l.$$.fragment)},l(y){a=S(y,"svelte    "),I(t.$$.fragment,y),e=v(y),I(n.$$.fragment,y),c=v(y),I(_.$$.fragment,y),g=v(y),I(l.$$.fragment,y)},m(y,m){w(y,a,m),N(t,y,m),w(y,e,m),N(n,y,m),w(y,c,m),N(_,y,m),w(y,g,m),N(l,y,m),s=!0},p(y,m){const E={};m[0]&512&&(E.id=y[9]),m[0]&128&&(E.title=y[7]),_.$set(E)},i(y){s||(b(t.$$.fragment,y),b(n.$$.fragment,y),b(_.$$.fragment,y),b(l.$$.fragment,y),s=!0)},o(y){$(t.$$.fragment,y),$(n.$$.fragment,y),$(_.$$.fragment,y),$(l.$$.fragment,y),s=!1},d(y){y&&(f(a),f(e),f(c),f(g)),D(t,y),D(n,y),D(_,y),D(l,y)}}}function Os(r){let a,t,e=r[7].toLowerCase()+"",n,c,_;return{c(){a=T("p"),t=z("No eliminated "),n=z(e),c=z("s from FY"),_=z(r[33]),this.h()},l(g){a=A(g,"P",{style:!0});var l=Y(a);t=S(l,"No eliminated "),n=S(l,e),c=S(l,"s from FY"),_=S(l,r[33]),l.forEach(f),this.h()},h(){i(a,"color","#6B7280"),i(a,"font-size","0.875rem"),i(a,"padding","12px 0")},m(g,l){w(g,a,l),d(a,t),d(a,n),d(a,c),d(a,_)},p(g,l){l[0]&128&&e!==(e=g[7].toLowerCase()+"")&&O(n,e),l[1]&4&&O(_,g[33])},i:we,o:we,d(g){g&&f(a)}}}function Qs(r){let a,t;return a=new Zt({props:{data:r[8].filter(r[107]).slice(0,10),rows:"10",$$slots:{default:[Ws]},$$scope:{ctx:r}}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&768&&(c.data=e[8].filter(e[107]).slice(0,10)),n[0]&640|n[4]&1024&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Ws(r){let a,t,e,n,c,_,g,l,s;return t=new B({props:{id:"agency_code",title:"Code"}}),n=new B({props:{id:"agency_name",title:"Agency"}}),_=new B({props:{id:r[9],title:r[7]}}),l=new B({props:{id:"prior_year",title:"Last Budget",fmt:"usd2compactviz"}}),{c(){a=z("svelte    "),q(t.$$.fragment),e=k(),q(n.$$.fragment),c=k(),q(_.$$.fragment),g=k(),q(l.$$.fragment)},l(y){a=S(y,"svelte    "),I(t.$$.fragment,y),e=v(y),I(n.$$.fragment,y),c=v(y),I(_.$$.fragment,y),g=v(y),I(l.$$.fragment,y)},m(y,m){w(y,a,m),N(t,y,m),w(y,e,m),N(n,y,m),w(y,c,m),N(_,y,m),w(y,g,m),N(l,y,m),s=!0},p(y,m){const E={};m[0]&512&&(E.id=y[9]),m[0]&128&&(E.title=y[7]),_.$set(E)},i(y){s||(b(t.$$.fragment,y),b(n.$$.fragment,y),b(_.$$.fragment,y),b(l.$$.fragment,y),s=!0)},o(y){$(t.$$.fragment,y),$(n.$$.fragment,y),$(_.$$.fragment,y),$(l.$$.fragment,y),s=!1},d(y){y&&(f(a),f(e),f(c),f(g)),D(t,y),D(n,y),D(_,y),D(l,y)}}}function Gs(r){let a,t;return a=new Zt({props:{data:r[4],totalRow:"true",search:"true",rows:"25",$$slots:{default:[Zs]},$$scope:{ctx:r}}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&16&&(c.data=e[4]),n[1]&12|n[4]&1024&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Ks(r){let a,t;return a=new Zt({props:{data:r[3],totalRow:"true",search:"true",rows:"25",$$slots:{default:[el]},$$scope:{ctx:r}}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&8&&(c.data=e[3]),n[1]&12|n[4]&1024&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Js(r){let a,t;return a=new Zt({props:{data:r[2],totalRow:"true",search:"true",rows:"20",$$slots:{default:[al]},$$scope:{ctx:r}}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&4&&(c.data=e[2]),n[1]&12|n[4]&1024&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Xs(r){let a,t;return a=new Zt({props:{data:r[1],totalRow:"true",search:"true",rows:"20",$$slots:{default:[tl]},$$scope:{ctx:r}}}),{c(){q(a.$$.fragment)},l(e){I(a.$$.fragment,e)},m(e,n){N(a,e,n),t=!0},p(e,n){const c={};n[0]&2&&(c.data=e[1]),n[1]&12|n[4]&1024&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){D(a,e)}}}function Zs(r){let a,t,e,n,c,_,g,l,s,y,m,E,L,C,p,F;return a=new B({props:{id:"agency_name",title:"Agency"}}),e=new B({props:{id:"unit_name",title:"Unit"}}),c=new B({props:{id:"program_name",title:"Program"}}),g=new B({props:{id:"subprogram_name",title:"Subprogram"}}),s=new B({props:{id:"latest_year",title:"FY"+r[34],fmt:"usd2compactviz"}}),m=new B({props:{id:"prior_year",title:"FY"+r[33],fmt:"usd2compactviz"}}),L=new B({props:{id:"change_amt",title:"Change ($)",fmt:"usd2compactviz"}}),p=new B({props:{id:"change_pct",title:"Change (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"diverging"}}),{c(){q(a.$$.fragment),t=k(),q(e.$$.fragment),n=k(),q(c.$$.fragment),_=k(),q(g.$$.fragment),l=k(),q(s.$$.fragment),y=k(),q(m.$$.fragment),E=k(),q(L.$$.fragment),C=k(),q(p.$$.fragment)},l(x){I(a.$$.fragment,x),t=v(x),I(e.$$.fragment,x),n=v(x),I(c.$$.fragment,x),_=v(x),I(g.$$.fragment,x),l=v(x),I(s.$$.fragment,x),y=v(x),I(m.$$.fragment,x),E=v(x),I(L.$$.fragment,x),C=v(x),I(p.$$.fragment,x)},m(x,P){N(a,x,P),w(x,t,P),N(e,x,P),w(x,n,P),N(c,x,P),w(x,_,P),N(g,x,P),w(x,l,P),N(s,x,P),w(x,y,P),N(m,x,P),w(x,E,P),N(L,x,P),w(x,C,P),N(p,x,P),F=!0},p(x,P){const j={};P[1]&8&&(j.title="FY"+x[34]),s.$set(j);const $e={};P[1]&4&&($e.title="FY"+x[33]),m.$set($e)},i(x){F||(b(a.$$.fragment,x),b(e.$$.fragment,x),b(c.$$.fragment,x),b(g.$$.fragment,x),b(s.$$.fragment,x),b(m.$$.fragment,x),b(L.$$.fragment,x),b(p.$$.fragment,x),F=!0)},o(x){$(a.$$.fragment,x),$(e.$$.fragment,x),$(c.$$.fragment,x),$(g.$$.fragment,x),$(s.$$.fragment,x),$(m.$$.fragment,x),$(L.$$.fragment,x),$(p.$$.fragment,x),F=!1},d(x){x&&(f(t),f(n),f(_),f(l),f(y),f(E),f(C)),D(a,x),D(e,x),D(c,x),D(g,x),D(s,x),D(m,x),D(L,x),D(p,x)}}}function el(r){let a,t,e,n,c,_,g,l,s,y,m,E,L,C;return a=new B({props:{id:"agency_name",title:"Agency"}}),e=new B({props:{id:"unit_name",title:"Unit"}}),c=new B({props:{id:"program_name",title:"Program"}}),g=new B({props:{id:"latest_year",title:"FY"+r[34],fmt:"usd2compactviz"}}),s=new B({props:{id:"prior_year",title:"FY"+r[33],fmt:"usd2compactviz"}}),m=new B({props:{id:"change_amt",title:"Change ($)",fmt:"usd2compactviz"}}),L=new B({props:{id:"change_pct",title:"Change (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"diverging"}}),{c(){q(a.$$.fragment),t=k(),q(e.$$.fragment),n=k(),q(c.$$.fragment),_=k(),q(g.$$.fragment),l=k(),q(s.$$.fragment),y=k(),q(m.$$.fragment),E=k(),q(L.$$.fragment)},l(p){I(a.$$.fragment,p),t=v(p),I(e.$$.fragment,p),n=v(p),I(c.$$.fragment,p),_=v(p),I(g.$$.fragment,p),l=v(p),I(s.$$.fragment,p),y=v(p),I(m.$$.fragment,p),E=v(p),I(L.$$.fragment,p)},m(p,F){N(a,p,F),w(p,t,F),N(e,p,F),w(p,n,F),N(c,p,F),w(p,_,F),N(g,p,F),w(p,l,F),N(s,p,F),w(p,y,F),N(m,p,F),w(p,E,F),N(L,p,F),C=!0},p(p,F){const x={};F[1]&8&&(x.title="FY"+p[34]),g.$set(x);const P={};F[1]&4&&(P.title="FY"+p[33]),s.$set(P)},i(p){C||(b(a.$$.fragment,p),b(e.$$.fragment,p),b(c.$$.fragment,p),b(g.$$.fragment,p),b(s.$$.fragment,p),b(m.$$.fragment,p),b(L.$$.fragment,p),C=!0)},o(p){$(a.$$.fragment,p),$(e.$$.fragment,p),$(c.$$.fragment,p),$(g.$$.fragment,p),$(s.$$.fragment,p),$(m.$$.fragment,p),$(L.$$.fragment,p),C=!1},d(p){p&&(f(t),f(n),f(_),f(l),f(y),f(E)),D(a,p),D(e,p),D(c,p),D(g,p),D(s,p),D(m,p),D(L,p)}}}function al(r){let a,t,e,n,c,_,g,l,s,y;return a=new B({props:{id:"unit_name",title:"Unit"}}),e=new B({props:{id:"latest_year",title:"FY"+r[34],fmt:"usd2compactviz"}}),c=new B({props:{id:"prior_year",title:"FY"+r[33],fmt:"usd2compactviz"}}),g=new B({props:{id:"change_amt",title:"Change ($)",fmt:"usd2compactviz"}}),s=new B({props:{id:"change_pct",title:"Change (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"diverging"}}),{c(){q(a.$$.fragment),t=k(),q(e.$$.fragment),n=k(),q(c.$$.fragment),_=k(),q(g.$$.fragment),l=k(),q(s.$$.fragment)},l(m){I(a.$$.fragment,m),t=v(m),I(e.$$.fragment,m),n=v(m),I(c.$$.fragment,m),_=v(m),I(g.$$.fragment,m),l=v(m),I(s.$$.fragment,m)},m(m,E){N(a,m,E),w(m,t,E),N(e,m,E),w(m,n,E),N(c,m,E),w(m,_,E),N(g,m,E),w(m,l,E),N(s,m,E),y=!0},p(m,E){const L={};E[1]&8&&(L.title="FY"+m[34]),e.$set(L);const C={};E[1]&4&&(C.title="FY"+m[33]),c.$set(C)},i(m){y||(b(a.$$.fragment,m),b(e.$$.fragment,m),b(c.$$.fragment,m),b(g.$$.fragment,m),b(s.$$.fragment,m),y=!0)},o(m){$(a.$$.fragment,m),$(e.$$.fragment,m),$(c.$$.fragment,m),$(g.$$.fragment,m),$(s.$$.fragment,m),y=!1},d(m){m&&(f(t),f(n),f(_),f(l)),D(a,m),D(e,m),D(c,m),D(g,m),D(s,m)}}}function tl(r){let a,t,e,n,c,_,g,l,s,y;return a=new B({props:{id:"agency_name",title:"Agency"}}),e=new B({props:{id:"latest_year",title:"FY"+r[34],fmt:"usd2compactviz"}}),c=new B({props:{id:"prior_year",title:"FY"+r[33],fmt:"usd2compactviz"}}),g=new B({props:{id:"change_amt",title:"Change ($)",fmt:"usd2compactviz"}}),s=new B({props:{id:"change_pct",title:"Change (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"diverging"}}),{c(){q(a.$$.fragment),t=k(),q(e.$$.fragment),n=k(),q(c.$$.fragment),_=k(),q(g.$$.fragment),l=k(),q(s.$$.fragment)},l(m){I(a.$$.fragment,m),t=v(m),I(e.$$.fragment,m),n=v(m),I(c.$$.fragment,m),_=v(m),I(g.$$.fragment,m),l=v(m),I(s.$$.fragment,m)},m(m,E){N(a,m,E),w(m,t,E),N(e,m,E),w(m,n,E),N(c,m,E),w(m,_,E),N(g,m,E),w(m,l,E),N(s,m,E),y=!0},p(m,E){const L={};E[1]&8&&(L.title="FY"+m[34]),e.$set(L);const C={};E[1]&4&&(C.title="FY"+m[33]),c.$set(C)},i(m){y||(b(a.$$.fragment,m),b(e.$$.fragment,m),b(c.$$.fragment,m),b(g.$$.fragment,m),b(s.$$.fragment,m),y=!0)},o(m){$(a.$$.fragment,m),$(e.$$.fragment,m),$(c.$$.fragment,m),$(g.$$.fragment,m),$(s.$$.fragment,m),y=!1},d(m){m&&(f(t),f(n),f(_),f(l)),D(a,m),D(e,m),D(c,m),D(g,m),D(s,m)}}}function nl(r){let a,t,e,n,c,_,g,l,s,y;return a=new B({props:{id:"fund_type",title:"Fund Type"}}),e=new B({props:{id:"latest_year",title:"FY"+r[34],fmt:"usd2compactviz"}}),c=new B({props:{id:"prior_year",title:"FY"+r[33],fmt:"usd2compactviz"}}),g=new B({props:{id:"change_amt",title:"Change ($)",fmt:"usd2compactviz"}}),s=new B({props:{id:"change_pct",title:"Change (%)",fmt:'0.0"%"',contentType:"colorscale",colorScale:"diverging"}}),{c(){q(a.$$.fragment),t=k(),q(e.$$.fragment),n=k(),q(c.$$.fragment),_=k(),q(g.$$.fragment),l=k(),q(s.$$.fragment)},l(m){I(a.$$.fragment,m),t=v(m),I(e.$$.fragment,m),n=v(m),I(c.$$.fragment,m),_=v(m),I(g.$$.fragment,m),l=v(m),I(s.$$.fragment,m)},m(m,E){N(a,m,E),w(m,t,E),N(e,m,E),w(m,n,E),N(c,m,E),w(m,_,E),N(g,m,E),w(m,l,E),N(s,m,E),y=!0},p(m,E){const L={};E[1]&8&&(L.title="FY"+m[34]),e.$set(L);const C={};E[1]&4&&(C.title="FY"+m[33]),c.$set(C)},i(m){y||(b(a.$$.fragment,m),b(e.$$.fragment,m),b(c.$$.fragment,m),b(g.$$.fragment,m),b(s.$$.fragment,m),y=!0)},o(m){$(a.$$.fragment,m),$(e.$$.fragment,m),$(c.$$.fragment,m),$(g.$$.fragment,m),$(s.$$.fragment,m),y=!1},d(m){m&&(f(t),f(n),f(_),f(l)),D(a,m),D(e,m),D(c,m),D(g,m),D(s,m)}}}function rl(r){var Ar;let a,t,e,n,c,_,g='<h1 style="color: #211030; font-size: 1.7rem; font-weight: 700; margin: 0;">📊 Variance Analysis</h1> <p style="color: #6321a5; font-size: 0.95rem; margin: 4px 0 0 0;">Year-over-year change detection — compare any two years at any hierarchy level</p>',l,s,y,m,E,L,C,p,F,x='<span style="color:#FFC838; font-size:0.68rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; white-space:nowrap;">View By</span>',P,j,$e,J,W="|",yt,Ne,Ve,R='<span style="color:white; font-size:0.68rem; font-weight:800; letter-spacing:0.06em; white-space:nowrap;">Year A</span>',en,va,an,Ze,ve="vs",ka,ee,Ie,tn='<span style="color:white; font-size:0.68rem; font-weight:800; letter-spacing:0.06em; white-space:nowrap;">Year B</span>',Lt,ea,xa,ke,gt="|",Yt,qe,Oe,Ha='<span style="color:#FFC838; font-size:0.68rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; white-space:nowrap;">Threshold</span>',Fa,ae,Ht,je,pt,Ea,aa,ja,Pa,Ca,bt,Ae,ta,na,Ba,Ma,Ua,Pe,Be,ra,Te,Oa,te,Ee,he,$t="Net Budget Change",jt,Ra,Da,Qe=r[38](r[6].net_change,!0)+"",sa,Qa,ht,xe,Pt,la,Na,Wa,wt,vt,Bt,oa,Ia,Z,Fe,kt,Mt,ca,qa,tt,_a,Se,We,Aa,Ge=(r[6].items_up??0)+"",Ga,Ut,Ke,Ot,Je=(r[6].items_down??0)+"",ia,nt,ma,Qt,rt=(r[6].total_count??"?")+"",ua,Ta,Ce,st=r[38](r[6].total_increased,!0)+"",xt,Wt,Ft=r[38](r[6].total_decreased,!0)+"",Ka,nn,rn,ne,Le,Ja,Xa,Sa,sn,lt,za,un,ln,fn,Va,dn,h,X,V,M,G,Ye,on,cn,Za,fa,He,Et,tr,ot,nr,Fn,En,yn,Cn,ct,kr='<a href="#top-movers">Top Movers</a>',Rn,Ct,Dn,gn,Nn,_t,xr='<a href="#new--eliminated-programs">New &amp; Eliminated Programs</a>',In,it,La,rr,qn,sr,An,lr,Tn,da,ya,Sn,et,Ya,or,zn,cr,Vn,_r,Ln,ga,pa,Yn,pn,Hn,Rt,Gt,jn,ir,Pn,ba,$a,_n,bn,Bn,mt,Fr='<a href="#fund-type-shift">Fund Type Shift</a>',Mn,Dt,U,mr,Er,ut=typeof Q<"u"&&((Ar=Q.og)==null?void 0:Ar.title)&&Q.hide_title!==!0&&Ds();function os(o,u){var be;return typeof Q<"u"&&((be=Q.og)!=null&&be.title)?Is:Ns}let $n=os()(r),ft=typeof Q=="object"&&qs(),re=r[15]&&Yr(r),se=r[16]&&Hr(r),le=r[17]&&jr(r),oe=r[18]&&Pr(r),ce=r[19]&&Br(r);j=new Xt({props:{name:"f_level",defaultValue:"agency",$$slots:{default:[Ss]},$$scope:{ctx:r}}}),va=new Xt({props:{name:"f_year_a",data:r[16],value:"fy",defaultValue:"%",$$slots:{default:[zs]},$$scope:{ctx:r}}}),ea=new Xt({props:{name:"f_year_b",data:r[16],value:"fy",defaultValue:"%",$$slots:{default:[Vs]},$$scope:{ctx:r}}});let ze=r[35]&&Mr(r);Ae=new ds({props:{title:"🔍 Filters",open:"false",$$slots:{default:[Ps]},$$scope:{ctx:r}}});let _e=r[0]&&Gr(r),ie=r[20]&&Kr(r),me=r[1]&&Jr(r),ue=r[2]&&Xr(r),fe=r[3]&&Zr(r),de=r[4]&&es(r),ye=r[21]&&as(r),ge=r[22]&&ts(r),pe=r[23]&&ns(r);Ct=new Rs({props:{data:r[8],labelField:r[9],valueField:"change_pct",title:r[7]+" Budget Changes — FY"+r[34]+" vs FY"+r[33]+" (%)",limit:"14",threshold:r[5]}});const Cr=[Ms,Bs],Nt=[];function Rr(o,u){return u[0]&256&&(Tn=null),Tn==null&&(Tn=o[8].filter(o[102]).length>0),Tn?0:1}da=Rr(r,[-1,-1,-1,-1,-1]),ya=Nt[da]=Cr[da](r);const Dr=[Qs,Os],It=[];function Nr(o,u){return u[0]&256&&(Ln=null),Ln==null&&(Ln=o[8].filter(o[101]).length>0),Ln?0:1}ga=Nr(r,[-1,-1,-1,-1,-1]),pa=It[ga]=Dr[ga](r);const Ir=[Xs,Js,Ks,Gs],qt=[];function qr(o,u){return o[10]==="agency"?0:o[10]==="unit"?1:o[10]==="program"?2:3}return ba=qr(r),$a=qt[ba]=Ir[ba](r),Dt=new Zt({props:{data:r[23],totalRow:"true",$$slots:{default:[nl]},$$scope:{ctx:r}}}),{c(){ut&&ut.c(),a=k(),$n.c(),t=T("meta"),e=T("meta"),ft&&ft.c(),n=ar(),c=k(),_=T("div"),_.innerHTML=g,l=k(),re&&re.c(),s=k(),se&&se.c(),y=k(),le&&le.c(),m=k(),oe&&oe.c(),E=k(),ce&&ce.c(),L=k(),C=T("div"),p=T("div"),F=T("div"),F.innerHTML=x,P=k(),q(j.$$.fragment),$e=k(),J=T("span"),J.textContent=W,yt=k(),Ne=T("div"),Ve=T("div"),Ve.innerHTML=R,en=k(),q(va.$$.fragment),an=k(),Ze=T("span"),Ze.textContent=ve,ka=k(),ee=T("div"),Ie=T("div"),Ie.innerHTML=tn,Lt=k(),q(ea.$$.fragment),xa=k(),ke=T("span"),ke.textContent=gt,Yt=k(),qe=T("div"),Oe=T("div"),Oe.innerHTML=Ha,Fa=k(),ae=T("input"),Ht=k(),je=T("span"),pt=z(r[5]),Ea=z("%"),ja=k(),ze&&ze.c(),Pa=k(),Ca=T("div"),bt=k(),q(Ae.$$.fragment),ta=k(),_e&&_e.c(),na=k(),ie&&ie.c(),Ba=k(),me&&me.c(),Ma=k(),ue&&ue.c(),Ua=k(),fe&&fe.c(),Pe=k(),de&&de.c(),Be=k(),ye&&ye.c(),ra=k(),ge&&ge.c(),Te=k(),pe&&pe.c(),Oa=k(),te=T("div"),Ee=T("div"),he=T("span"),he.textContent=$t,jt=k(),Ra=T("div"),Da=T("div"),sa=z(Qe),ht=k(),xe=T("div"),Pt=z("FY"),la=z(r[34]),Na=z(" vs FY"),Wa=z(r[33]),wt=z(" · "),vt=z(r[7]),Bt=z(" level"),Ia=k(),Z=T("div"),Fe=T("span"),kt=z(r[7]),Mt=z("s Changed >"),ca=z(r[5]),qa=z("%"),tt=k(),_a=T("div"),Se=T("div"),We=T("span"),Aa=z("↑"),Ga=z(Ge),Ut=k(),Ke=T("span"),Ot=z("↓"),ia=z(Je),nt=k(),ma=T("span"),Qt=z("of "),ua=z(rt),Ta=k(),Ce=T("div"),xt=z(st),Wt=z(" gained · "),Ka=z(Ft),nn=z(" lost"),rn=k(),ne=T("div"),Le=T("span"),Ja=z("New "),Xa=z(r[7]),Sa=z("s"),sn=k(),lt=T("div"),za=T("div"),un=z("+"),ln=z(r[32]),fn=k(),Va=T("div"),dn=z("in FY"),h=z(r[34]),X=k(),V=T("div"),M=T("span"),G=z("Eliminated "),Ye=z(r[7]),on=z("s"),cn=k(),Za=T("div"),fa=T("div"),He=z("-"),Et=z(r[31]),tr=k(),ot=T("div"),nr=z("from FY"),Fn=z(r[33]),En=k(),yn=T("hr"),Cn=k(),ct=T("h2"),ct.innerHTML=kr,Rn=k(),q(Ct.$$.fragment),Dn=k(),gn=T("hr"),Nn=k(),_t=T("h2"),_t.innerHTML=xr,In=k(),it=T("div"),La=T("p"),rr=z("🟢 New "),qn=z(r[7]),sr=z("s in FY"),An=z(r[34]),lr=k(),ya.c(),Sn=k(),et=T("div"),Ya=T("p"),or=z("🔴 Eliminated "),zn=z(r[7]),cr=z("s from FY"),Vn=z(r[33]),_r=k(),pa.c(),Yn=k(),pn=T("hr"),Hn=k(),Rt=T("h2"),Gt=T("a"),jn=z(r[7]),ir=z("-Level Variance"),Pn=k(),$a.c(),_n=k(),bn=T("hr"),Bn=k(),mt=T("h2"),mt.innerHTML=Fr,Mn=k(),q(Dt.$$.fragment),this.h()},l(o){ut&&ut.l(o),a=v(o);const u=_s("svelte-2igo1p",dt.head);$n.l(u),t=A(u,"META",{name:!0,content:!0}),e=A(u,"META",{name:!0,content:!0}),ft&&ft.l(u),n=ar(),u.forEach(f),c=v(o),_=A(o,"DIV",{style:!0,"data-svelte-h":!0}),Xe(_)!=="svelte-1a31eu3"&&(_.innerHTML=g),l=v(o),re&&re.l(o),s=v(o),se&&se.l(o),y=v(o),le&&le.l(o),m=v(o),oe&&oe.l(o),E=v(o),ce&&ce.l(o),L=v(o),C=A(o,"DIV",{style:!0});var be=Y(C);p=A(be,"DIV",{style:!0});var At=Y(p);F=A(At,"DIV",{style:!0,"data-svelte-h":!0}),Xe(F)!=="svelte-7ih774"&&(F.innerHTML=x),P=v(At),I(j.$$.fragment,At),At.forEach(f),$e=v(be),J=A(be,"SPAN",{style:!0,"data-svelte-h":!0}),Xe(J)!=="svelte-1h34u5i"&&(J.textContent=W),yt=v(be),Ne=A(be,"DIV",{style:!0});var Tt=Y(Ne);Ve=A(Tt,"DIV",{style:!0,"data-svelte-h":!0}),Xe(Ve)!=="svelte-1exqtmn"&&(Ve.innerHTML=R),en=v(Tt),I(va.$$.fragment,Tt),Tt.forEach(f),an=v(be),Ze=A(be,"SPAN",{style:!0,"data-svelte-h":!0}),Xe(Ze)!=="svelte-lf6puh"&&(Ze.textContent=ve),ka=v(be),ee=A(be,"DIV",{style:!0});var Kt=Y(ee);Ie=A(Kt,"DIV",{style:!0,"data-svelte-h":!0}),Xe(Ie)!=="svelte-fcqn73"&&(Ie.innerHTML=tn),Lt=v(Kt),I(ea.$$.fragment,Kt),Kt.forEach(f),xa=v(be),ke=A(be,"SPAN",{style:!0,"data-svelte-h":!0}),Xe(ke)!=="svelte-1h34u5i"&&(ke.textContent=gt),Yt=v(be),qe=A(be,"DIV",{style:!0});var ha=Y(qe);Oe=A(ha,"DIV",{style:!0,"data-svelte-h":!0}),Xe(Oe)!=="svelte-1xoeyp"&&(Oe.innerHTML=Ha),Fa=v(ha),ae=A(ha,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0}),Ht=v(ha),je=A(ha,"SPAN",{style:!0});var Jt=Y(je);pt=S(Jt,r[5]),Ea=S(Jt,"%"),Jt.forEach(f),ha.forEach(f),be.forEach(f),ja=v(o),ze&&ze.l(o),Pa=v(o),Ca=A(o,"DIV",{style:!0}),Y(Ca).forEach(f),bt=v(o),I(Ae.$$.fragment,o),ta=v(o),_e&&_e.l(o),na=v(o),ie&&ie.l(o),Ba=v(o),me&&me.l(o),Ma=v(o),ue&&ue.l(o),Ua=v(o),fe&&fe.l(o),Pe=v(o),de&&de.l(o),Be=v(o),ye&&ye.l(o),ra=v(o),ge&&ge.l(o),Te=v(o),pe&&pe.l(o),Oa=v(o),te=A(o,"DIV",{style:!0});var wa=Y(te);Ee=A(wa,"DIV",{style:!0});var St=Y(Ee);he=A(St,"SPAN",{style:!0,"data-svelte-h":!0}),Xe(he)!=="svelte-1dayzh1"&&(he.textContent=$t),jt=v(St),Ra=A(St,"DIV",{});var zt=Y(Ra);Da=A(zt,"DIV",{style:!0});var hn=Y(Da);sa=S(hn,Qe),hn.forEach(f),ht=v(zt),xe=A(zt,"DIV",{style:!0});var Vt=Y(xe);Pt=S(Vt,"FY"),la=S(Vt,r[34]),Na=S(Vt," vs FY"),Wa=S(Vt,r[33]),wt=S(Vt," · "),vt=S(Vt,r[7]),Bt=S(Vt," level"),Vt.forEach(f),zt.forEach(f),St.forEach(f),Ia=v(wa),Z=A(wa,"DIV",{style:!0});var Un=Y(Z);Fe=A(Un,"SPAN",{style:!0});var wn=Y(Fe);kt=S(wn,r[7]),Mt=S(wn,"s Changed >"),ca=S(wn,r[5]),qa=S(wn,"%"),wn.forEach(f),tt=v(Un),_a=A(Un,"DIV",{});var On=Y(_a);Se=A(On,"DIV",{style:!0});var mn=Y(Se);We=A(mn,"SPAN",{style:!0});var ur=Y(We);Aa=S(ur,"↑"),Ga=S(ur,Ge),ur.forEach(f),Ut=v(mn),Ke=A(mn,"SPAN",{style:!0});var fr=Y(Ke);Ot=S(fr,"↓"),ia=S(fr,Je),fr.forEach(f),nt=v(mn),ma=A(mn,"SPAN",{style:!0});var dr=Y(ma);Qt=S(dr,"of "),ua=S(dr,rt),dr.forEach(f),mn.forEach(f),Ta=v(On),Ce=A(On,"DIV",{style:!0});var vn=Y(Ce);xt=S(vn,st),Wt=S(vn," gained · "),Ka=S(vn,Ft),nn=S(vn," lost"),vn.forEach(f),On.forEach(f),Un.forEach(f),rn=v(wa),ne=A(wa,"DIV",{style:!0});var Qn=Y(ne);Le=A(Qn,"SPAN",{style:!0});var Wn=Y(Le);Ja=S(Wn,"New "),Xa=S(Wn,r[7]),Sa=S(Wn,"s"),Wn.forEach(f),sn=v(Qn),lt=A(Qn,"DIV",{});var Gn=Y(lt);za=A(Gn,"DIV",{style:!0});var yr=Y(za);un=S(yr,"+"),ln=S(yr,r[32]),yr.forEach(f),fn=v(Gn),Va=A(Gn,"DIV",{style:!0});var gr=Y(Va);dn=S(gr,"in FY"),h=S(gr,r[34]),gr.forEach(f),Gn.forEach(f),Qn.forEach(f),X=v(wa),V=A(wa,"DIV",{style:!0});var Kn=Y(V);M=A(Kn,"SPAN",{style:!0});var Jn=Y(M);G=S(Jn,"Eliminated "),Ye=S(Jn,r[7]),on=S(Jn,"s"),Jn.forEach(f),cn=v(Kn),Za=A(Kn,"DIV",{});var Xn=Y(Za);fa=A(Xn,"DIV",{style:!0});var pr=Y(fa);He=S(pr,"-"),Et=S(pr,r[31]),pr.forEach(f),tr=v(Xn),ot=A(Xn,"DIV",{style:!0});var br=Y(ot);nr=S(br,"from FY"),Fn=S(br,r[33]),br.forEach(f),Xn.forEach(f),Kn.forEach(f),wa.forEach(f),En=v(o),yn=A(o,"HR",{class:!0}),Cn=v(o),ct=A(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Xe(ct)!=="svelte-1oklo6x"&&(ct.innerHTML=kr),Rn=v(o),I(Ct.$$.fragment,o),Dn=v(o),gn=A(o,"HR",{class:!0}),Nn=v(o),_t=A(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Xe(_t)!=="svelte-19hef1d"&&(_t.innerHTML=xr),In=v(o),it=A(o,"DIV",{});var Zn=Y(it);La=A(Zn,"P",{style:!0});var kn=Y(La);rr=S(kn,"🟢 New "),qn=S(kn,r[7]),sr=S(kn,"s in FY"),An=S(kn,r[34]),kn.forEach(f),lr=v(Zn),ya.l(Zn),Zn.forEach(f),Sn=v(o),et=A(o,"DIV",{style:!0});var er=Y(et);Ya=A(er,"P",{style:!0});var xn=Y(Ya);or=S(xn,"🔴 Eliminated "),zn=S(xn,r[7]),cr=S(xn,"s from FY"),Vn=S(xn,r[33]),xn.forEach(f),_r=v(er),pa.l(er),er.forEach(f),Yn=v(o),pn=A(o,"HR",{class:!0}),Hn=v(o),Rt=A(o,"H2",{class:!0,id:!0});var Tr=Y(Rt);Gt=A(Tr,"A",{href:!0});var $r=Y(Gt);jn=S($r,r[7]),ir=S($r,"-Level Variance"),$r.forEach(f),Tr.forEach(f),Pn=v(o),$a.l(o),_n=v(o),bn=A(o,"HR",{class:!0}),Bn=v(o),mt=A(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Xe(mt)!=="svelte-1isyz3j"&&(mt.innerHTML=Fr),Mn=v(o),I(Dt.$$.fragment,o),this.h()},h(){H(t,"name","twitter:card"),H(t,"content","summary_large_image"),H(e,"name","twitter:site"),H(e,"content","@evidence_dev"),i(_,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),i(_,"padding","28px 36px"),i(_,"border-radius","12px"),i(_,"border-bottom","4px solid #802cd7"),i(_,"margin-bottom","0"),i(_,"margin-top","-8px"),i(F,"background","#231F20"),i(F,"padding","0 10px"),i(F,"display","flex"),i(F,"align-items","center"),i(p,"display","flex"),i(p,"align-items","stretch"),i(p,"border","2px solid #231F20"),i(p,"border-radius","8px"),i(p,"overflow","hidden"),i(J,"color","#CBD5E1"),i(J,"font-size","0.8rem"),i(J,"font-weight","600"),i(J,"flex-shrink","0"),i(Ve,"background","#0369A1"),i(Ve,"padding","0 10px"),i(Ve,"display","flex"),i(Ve,"align-items","center"),i(Ne,"display","flex"),i(Ne,"align-items","stretch"),i(Ne,"border","2px solid #0369A1"),i(Ne,"border-radius","8px"),i(Ne,"overflow","hidden"),i(Ze,"color","#9CA3AF"),i(Ze,"font-size","0.8rem"),i(Ze,"font-weight","700"),i(Ze,"flex-shrink","0"),i(Ie,"background","#C8122C"),i(Ie,"padding","0 10px"),i(Ie,"display","flex"),i(Ie,"align-items","center"),i(ee,"display","flex"),i(ee,"align-items","stretch"),i(ee,"border","2px solid #C8122C"),i(ee,"border-radius","8px"),i(ee,"overflow","hidden"),i(ke,"color","#CBD5E1"),i(ke,"font-size","0.8rem"),i(ke,"font-weight","600"),i(ke,"flex-shrink","0"),i(Oe,"background","#231F20"),i(Oe,"padding","4px 10px"),i(Oe,"border-radius","6px"),H(ae,"type","range"),H(ae,"min","5"),H(ae,"max","100"),H(ae,"step","5"),i(ae,"width","120px"),i(ae,"accent-color","#C8122C"),i(ae,"cursor","pointer"),i(je,"font-size","0.85rem"),i(je,"font-weight","700"),i(je,"color","#231F20"),i(je,"min-width","36px"),i(qe,"display","flex"),i(qe,"align-items","center"),i(qe,"gap","10px"),H(C,"style",aa=r[25]+"background:var(--nxt-surface); box-shadow:0 2px 14px rgba(99,33,165,0.08); border-bottom:1px solid var(--nxt-border); padding:8px 24px; display:flex; align-items:center; gap:16px; flex-wrap:wrap;"),i(Ca,"height",r[26]),i(he,"font-size","0.7rem"),i(he,"font-weight","700"),i(he,"letter-spacing","0.08em"),i(he,"color","#6B7280"),i(he,"text-transform","uppercase"),H(Da,"style",Qa="font-size:2rem; font-weight:800; line-height:1.1; color:"+r[30]+";"),i(xe,"font-size","0.75rem"),i(xe,"color","#9CA3AF"),i(xe,"margin-top","4px"),H(Ee,"style",oa="border-radius:10px; padding:18px 20px; background:"+r[29]+"; border:1.5px solid "+r[28]+"; display:flex; flex-direction:column; justify-content:space-between; min-height:110px;"),i(Fe,"font-size","0.7rem"),i(Fe,"font-weight","700"),i(Fe,"letter-spacing","0.08em"),i(Fe,"color","#6B7280"),i(Fe,"text-transform","uppercase"),i(We,"font-size","1.6rem"),i(We,"font-weight","800"),i(We,"color","#1A7340"),i(Ke,"font-size","1.6rem"),i(Ke,"font-weight","800"),i(Ke,"color","#C8122C"),i(ma,"font-size","0.85rem"),i(ma,"color","#9CA3AF"),i(Se,"display","flex"),i(Se,"align-items","baseline"),i(Se,"gap","10px"),i(Ce,"font-size","0.75rem"),i(Ce,"color","#9CA3AF"),i(Ce,"margin-top","4px"),i(Z,"border-radius","10px"),i(Z,"padding","18px 20px"),i(Z,"background","var(--nxt-surface)"),i(Z,"border","1.5px solid var(--nxt-border)"),i(Z,"border-top","3px solid #231F20"),i(Z,"display","flex"),i(Z,"flex-direction","column"),i(Z,"justify-content","space-between"),i(Z,"min-height","110px"),i(Le,"font-size","0.7rem"),i(Le,"font-weight","700"),i(Le,"letter-spacing","0.08em"),i(Le,"color","#6B7280"),i(Le,"text-transform","uppercase"),i(za,"font-size","1.8rem"),i(za,"font-weight","800"),i(za,"color","#0369A1"),i(Va,"font-size","0.75rem"),i(Va,"color","#9CA3AF"),i(Va,"margin-top","4px"),i(ne,"border-radius","10px"),i(ne,"padding","18px 20px"),i(ne,"background","var(--nxt-surface)"),i(ne,"border","1.5px solid var(--nxt-border)"),i(ne,"border-top","3px solid #0EA5E9"),i(ne,"display","flex"),i(ne,"flex-direction","column"),i(ne,"justify-content","space-between"),i(ne,"min-height","110px"),i(M,"font-size","0.7rem"),i(M,"font-weight","700"),i(M,"letter-spacing","0.08em"),i(M,"color","#6B7280"),i(M,"text-transform","uppercase"),i(fa,"font-size","1.8rem"),i(fa,"font-weight","800"),i(fa,"color","#B45309"),i(ot,"font-size","0.75rem"),i(ot,"color","#9CA3AF"),i(ot,"margin-top","4px"),i(V,"border-radius","10px"),i(V,"padding","18px 20px"),i(V,"background","var(--nxt-surface)"),i(V,"border","1.5px solid var(--nxt-border)"),i(V,"border-top","3px solid #F59E0B"),i(V,"display","flex"),i(V,"flex-direction","column"),i(V,"justify-content","space-between"),i(V,"min-height","110px"),i(te,"display","grid"),i(te,"grid-template-columns","1.4fr 1fr 1fr 1fr"),i(te,"gap","12px"),i(te,"margin","16px 0 16px"),H(yn,"class","markdown"),H(ct,"class","markdown"),H(ct,"id","top-movers"),H(gn,"class","markdown"),H(_t,"class","markdown"),H(_t,"id","new--eliminated-programs"),i(La,"font-weight","700"),i(La,"color","#2EAD6B"),i(La,"margin-bottom","8px"),i(Ya,"font-weight","700"),i(Ya,"color","#C8122C"),i(Ya,"margin-bottom","8px"),i(et,"margin-top","16px"),H(pn,"class","markdown"),H(Gt,"href","#levellabel-level-variance"),H(Rt,"class","markdown"),H(Rt,"id","levellabel-level-variance"),H(bn,"class","markdown"),H(mt,"class","markdown"),H(mt,"id","fund-type-shift")},m(o,u){ut&&ut.m(o,u),w(o,a,u),$n.m(dt.head,null),d(dt.head,t),d(dt.head,e),ft&&ft.m(dt.head,null),d(dt.head,n),w(o,c,u),w(o,_,u),w(o,l,u),re&&re.m(o,u),w(o,s,u),se&&se.m(o,u),w(o,y,u),le&&le.m(o,u),w(o,m,u),oe&&oe.m(o,u),w(o,E,u),ce&&ce.m(o,u),w(o,L,u),w(o,C,u),d(C,p),d(p,F),d(p,P),N(j,p,null),d(C,$e),d(C,J),d(C,yt),d(C,Ne),d(Ne,Ve),d(Ne,en),N(va,Ne,null),d(C,an),d(C,Ze),d(C,ka),d(C,ee),d(ee,Ie),d(ee,Lt),N(ea,ee,null),d(C,xa),d(C,ke),d(C,Yt),d(C,qe),d(qe,Oe),d(qe,Fa),d(qe,ae),Sr(ae,r[5]),d(qe,Ht),d(qe,je),d(je,pt),d(je,Ea),r[104](C),w(o,ja,u),ze&&ze.m(o,u),w(o,Pa,u),w(o,Ca,u),w(o,bt,u),N(Ae,o,u),w(o,ta,u),_e&&_e.m(o,u),w(o,na,u),ie&&ie.m(o,u),w(o,Ba,u),me&&me.m(o,u),w(o,Ma,u),ue&&ue.m(o,u),w(o,Ua,u),fe&&fe.m(o,u),w(o,Pe,u),de&&de.m(o,u),w(o,Be,u),ye&&ye.m(o,u),w(o,ra,u),ge&&ge.m(o,u),w(o,Te,u),pe&&pe.m(o,u),w(o,Oa,u),w(o,te,u),d(te,Ee),d(Ee,he),d(Ee,jt),d(Ee,Ra),d(Ra,Da),d(Da,sa),d(Ra,ht),d(Ra,xe),d(xe,Pt),d(xe,la),d(xe,Na),d(xe,Wa),d(xe,wt),d(xe,vt),d(xe,Bt),d(te,Ia),d(te,Z),d(Z,Fe),d(Fe,kt),d(Fe,Mt),d(Fe,ca),d(Fe,qa),d(Z,tt),d(Z,_a),d(_a,Se),d(Se,We),d(We,Aa),d(We,Ga),d(Se,Ut),d(Se,Ke),d(Ke,Ot),d(Ke,ia),d(Se,nt),d(Se,ma),d(ma,Qt),d(ma,ua),d(_a,Ta),d(_a,Ce),d(Ce,xt),d(Ce,Wt),d(Ce,Ka),d(Ce,nn),d(te,rn),d(te,ne),d(ne,Le),d(Le,Ja),d(Le,Xa),d(Le,Sa),d(ne,sn),d(ne,lt),d(lt,za),d(za,un),d(za,ln),d(lt,fn),d(lt,Va),d(Va,dn),d(Va,h),d(te,X),d(te,V),d(V,M),d(M,G),d(M,Ye),d(M,on),d(V,cn),d(V,Za),d(Za,fa),d(fa,He),d(fa,Et),d(Za,tr),d(Za,ot),d(ot,nr),d(ot,Fn),w(o,En,u),w(o,yn,u),w(o,Cn,u),w(o,ct,u),w(o,Rn,u),N(Ct,o,u),w(o,Dn,u),w(o,gn,u),w(o,Nn,u),w(o,_t,u),w(o,In,u),w(o,it,u),d(it,La),d(La,rr),d(La,qn),d(La,sr),d(La,An),d(it,lr),Nt[da].m(it,null),w(o,Sn,u),w(o,et,u),d(et,Ya),d(Ya,or),d(Ya,zn),d(Ya,cr),d(Ya,Vn),d(et,_r),It[ga].m(et,null),w(o,Yn,u),w(o,pn,u),w(o,Hn,u),w(o,Rt,u),d(Rt,Gt),d(Gt,jn),d(Gt,ir),w(o,Pn,u),qt[ba].m(o,u),w(o,_n,u),w(o,bn,u),w(o,Bn,u),w(o,mt,u),w(o,Mn,u),N(Dt,o,u),U=!0,mr||(Er=[zr(ae,"change",r[103]),zr(ae,"input",r[103])],mr=!0)},p(o,u){var hn;typeof Q<"u"&&((hn=Q.og)!=null&&hn.title)&&Q.hide_title!==!0&&ut.p(o,u),$n.p(o,u),typeof Q=="object"&&ft.p(o,u),o[15]?re?(re.p(o,u),u[0]&32768&&b(re,1)):(re=Yr(o),re.c(),b(re,1),re.m(s.parentNode,s)):re&&(De(),$(re,1,1,()=>{re=null}),Re()),o[16]?se?(se.p(o,u),u[0]&65536&&b(se,1)):(se=Hr(o),se.c(),b(se,1),se.m(y.parentNode,y)):se&&(De(),$(se,1,1,()=>{se=null}),Re()),o[17]?le?(le.p(o,u),u[0]&131072&&b(le,1)):(le=jr(o),le.c(),b(le,1),le.m(m.parentNode,m)):le&&(De(),$(le,1,1,()=>{le=null}),Re()),o[18]?oe?(oe.p(o,u),u[0]&262144&&b(oe,1)):(oe=Pr(o),oe.c(),b(oe,1),oe.m(E.parentNode,E)):oe&&(De(),$(oe,1,1,()=>{oe=null}),Re()),o[19]?ce?(ce.p(o,u),u[0]&524288&&b(ce,1)):(ce=Br(o),ce.c(),b(ce,1),ce.m(L.parentNode,L)):ce&&(De(),$(ce,1,1,()=>{ce=null}),Re());const be={};u[4]&1024&&(be.$$scope={dirty:u,ctx:o}),j.$set(be);const At={};u[0]&65536&&(At.data=o[16]),u[4]&1024&&(At.$$scope={dirty:u,ctx:o}),va.$set(At);const Tt={};u[0]&65536&&(Tt.data=o[16]),u[4]&1024&&(Tt.$$scope={dirty:u,ctx:o}),ea.$set(Tt),u[0]&32&&Sr(ae,o[5]),(!U||u[0]&32)&&O(pt,o[5]),(!U||u[0]&33554432&&aa!==(aa=o[25]+"background:var(--nxt-surface); box-shadow:0 2px 14px rgba(99,33,165,0.08); border-bottom:1px solid var(--nxt-border); padding:8px 24px; display:flex; align-items:center; gap:16px; flex-wrap:wrap;"))&&H(C,"style",aa),o[35]?ze?ze.p(o,u):(ze=Mr(o),ze.c(),ze.m(Pa.parentNode,Pa)):ze&&(ze.d(1),ze=null),(!U||u[0]&67108864)&&i(Ca,"height",o[26]);const Kt={};u[0]&950272|u[4]&1024&&(Kt.$$scope={dirty:u,ctx:o}),Ae.$set(Kt),o[0]?_e?(_e.p(o,u),u[0]&1&&b(_e,1)):(_e=Gr(o),_e.c(),b(_e,1),_e.m(na.parentNode,na)):_e&&(De(),$(_e,1,1,()=>{_e=null}),Re()),o[20]?ie?(ie.p(o,u),u[0]&1048576&&b(ie,1)):(ie=Kr(o),ie.c(),b(ie,1),ie.m(Ba.parentNode,Ba)):ie&&(De(),$(ie,1,1,()=>{ie=null}),Re()),o[1]?me?(me.p(o,u),u[0]&2&&b(me,1)):(me=Jr(o),me.c(),b(me,1),me.m(Ma.parentNode,Ma)):me&&(De(),$(me,1,1,()=>{me=null}),Re()),o[2]?ue?(ue.p(o,u),u[0]&4&&b(ue,1)):(ue=Xr(o),ue.c(),b(ue,1),ue.m(Ua.parentNode,Ua)):ue&&(De(),$(ue,1,1,()=>{ue=null}),Re()),o[3]?fe?(fe.p(o,u),u[0]&8&&b(fe,1)):(fe=Zr(o),fe.c(),b(fe,1),fe.m(Pe.parentNode,Pe)):fe&&(De(),$(fe,1,1,()=>{fe=null}),Re()),o[4]?de?(de.p(o,u),u[0]&16&&b(de,1)):(de=es(o),de.c(),b(de,1),de.m(Be.parentNode,Be)):de&&(De(),$(de,1,1,()=>{de=null}),Re()),o[21]?ye?(ye.p(o,u),u[0]&2097152&&b(ye,1)):(ye=as(o),ye.c(),b(ye,1),ye.m(ra.parentNode,ra)):ye&&(De(),$(ye,1,1,()=>{ye=null}),Re()),o[22]?ge?(ge.p(o,u),u[0]&4194304&&b(ge,1)):(ge=ts(o),ge.c(),b(ge,1),ge.m(Te.parentNode,Te)):ge&&(De(),$(ge,1,1,()=>{ge=null}),Re()),o[23]?pe?(pe.p(o,u),u[0]&8388608&&b(pe,1)):(pe=ns(o),pe.c(),b(pe,1),pe.m(Oa.parentNode,Oa)):pe&&(De(),$(pe,1,1,()=>{pe=null}),Re()),(!U||u[0]&64)&&Qe!==(Qe=o[38](o[6].net_change,!0)+"")&&O(sa,Qe),(!U||u[0]&1073741824&&Qa!==(Qa="font-size:2rem; font-weight:800; line-height:1.1; color:"+o[30]+";"))&&H(Da,"style",Qa),(!U||u[1]&8)&&O(la,o[34]),(!U||u[1]&4)&&O(Wa,o[33]),(!U||u[0]&128)&&O(vt,o[7]),(!U||u[0]&805306368&&oa!==(oa="border-radius:10px; padding:18px 20px; background:"+o[29]+"; border:1.5px solid "+o[28]+"; display:flex; flex-direction:column; justify-content:space-between; min-height:110px;"))&&H(Ee,"style",oa),(!U||u[0]&128)&&O(kt,o[7]),(!U||u[0]&32)&&O(ca,o[5]),(!U||u[0]&64)&&Ge!==(Ge=(o[6].items_up??0)+"")&&O(Ga,Ge),(!U||u[0]&64)&&Je!==(Je=(o[6].items_down??0)+"")&&O(ia,Je),(!U||u[0]&64)&&rt!==(rt=(o[6].total_count??"?")+"")&&O(ua,rt),(!U||u[0]&64)&&st!==(st=o[38](o[6].total_increased,!0)+"")&&O(xt,st),(!U||u[0]&64)&&Ft!==(Ft=o[38](o[6].total_decreased,!0)+"")&&O(Ka,Ft),(!U||u[0]&128)&&O(Xa,o[7]),(!U||u[1]&2)&&O(ln,o[32]),(!U||u[1]&8)&&O(h,o[34]),(!U||u[0]&128)&&O(Ye,o[7]),(!U||u[1]&1)&&O(Et,o[31]),(!U||u[1]&4)&&O(Fn,o[33]);const ha={};u[0]&256&&(ha.data=o[8]),u[0]&512&&(ha.labelField=o[9]),u[0]&128|u[1]&12&&(ha.title=o[7]+" Budget Changes — FY"+o[34]+" vs FY"+o[33]+" (%)"),u[0]&32&&(ha.threshold=o[5]),Ct.$set(ha),(!U||u[0]&128)&&O(qn,o[7]),(!U||u[1]&8)&&O(An,o[34]);let Jt=da;da=Rr(o,u),da===Jt?Nt[da].p(o,u):(De(),$(Nt[Jt],1,1,()=>{Nt[Jt]=null}),Re(),ya=Nt[da],ya?ya.p(o,u):(ya=Nt[da]=Cr[da](o),ya.c()),b(ya,1),ya.m(it,null)),(!U||u[0]&128)&&O(zn,o[7]),(!U||u[1]&4)&&O(Vn,o[33]);let wa=ga;ga=Nr(o,u),ga===wa?It[ga].p(o,u):(De(),$(It[wa],1,1,()=>{It[wa]=null}),Re(),pa=It[ga],pa?pa.p(o,u):(pa=It[ga]=Dr[ga](o),pa.c()),b(pa,1),pa.m(et,null)),(!U||u[0]&128)&&O(jn,o[7]);let St=ba;ba=qr(o),ba===St?qt[ba].p(o,u):(De(),$(qt[St],1,1,()=>{qt[St]=null}),Re(),$a=qt[ba],$a?$a.p(o,u):($a=qt[ba]=Ir[ba](o),$a.c()),b($a,1),$a.m(_n.parentNode,_n));const zt={};u[0]&8388608&&(zt.data=o[23]),u[1]&12|u[4]&1024&&(zt.$$scope={dirty:u,ctx:o}),Dt.$set(zt)},i(o){U||(b(re),b(se),b(le),b(oe),b(ce),b(j.$$.fragment,o),b(va.$$.fragment,o),b(ea.$$.fragment,o),b(Ae.$$.fragment,o),b(_e),b(ie),b(me),b(ue),b(fe),b(de),b(ye),b(ge),b(pe),b(Ct.$$.fragment,o),b(ya),b(pa),b($a),b(Dt.$$.fragment,o),U=!0)},o(o){$(re),$(se),$(le),$(oe),$(ce),$(j.$$.fragment,o),$(va.$$.fragment,o),$(ea.$$.fragment,o),$(Ae.$$.fragment,o),$(_e),$(ie),$(me),$(ue),$(fe),$(de),$(ye),$(ge),$(pe),$(Ct.$$.fragment,o),$(ya),$(pa),$($a),$(Dt.$$.fragment,o),U=!1},d(o){o&&(f(a),f(c),f(_),f(l),f(s),f(y),f(m),f(E),f(L),f(C),f(ja),f(Pa),f(Ca),f(bt),f(ta),f(na),f(Ba),f(Ma),f(Ua),f(Pe),f(Be),f(ra),f(Te),f(Oa),f(te),f(En),f(yn),f(Cn),f(ct),f(Rn),f(Dn),f(gn),f(Nn),f(_t),f(In),f(it),f(Sn),f(et),f(Yn),f(pn),f(Hn),f(Rt),f(Pn),f(_n),f(bn),f(Bn),f(mt),f(Mn)),ut&&ut.d(o),$n.d(o),f(t),f(e),ft&&ft.d(o),f(n),re&&re.d(o),se&&se.d(o),le&&le.d(o),oe&&oe.d(o),ce&&ce.d(o),D(j),D(va),D(ea),r[104](null),ze&&ze.d(o),D(Ae,o),_e&&_e.d(o),ie&&ie.d(o),me&&me.d(o),ue&&ue.d(o),fe&&fe.d(o),de&&de.d(o),ye&&ye.d(o),ge&&ge.d(o),pe&&pe.d(o),D(Ct,o),Nt[da].d(),It[ga].d(),qt[ba].d(o),D(Dt,o),mr=!1,cs(Er)}}}const Q={title:null};let sl="";function ll(r,a,t){let e,n,c,_,g,l,s,y,m,E,L,C,p,F,x,P,j,$e,J,W,yt,Ne;hr(r,ks,h=>t(100,yt=h)),hr(r,Lr,h=>t(114,Ne=h));let{data:Ve}=a,{data:R={},customFormattingSettings:en,__db:va,inputs:an}=Ve;is(Lr,Ne="0b3a852ab8ef53dbcd921439a6587bf0",Ne);let Ze=ps(vs(an));ms(Ze.subscribe(h=>an=h)),us(ws,{getCustomFormats:()=>en.customFormats||[]});const ve=(h,X)=>xs(va.query,h,{query_name:X});bs(ve),yt.params,wr(()=>!0);let ka={initialData:void 0,initialError:void 0},ee=K`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`,Ie="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name";R.g_agency_data&&(R.g_agency_data instanceof Error?ka.initialError=R.g_agency_data:ka.initialData=R.g_agency_data,R.g_agency_columns&&(ka.knownColumns=R.g_agency_columns));let tn,Lt=!1;const ea=Me.createReactive({callback:h=>{t(15,tn=h)},execFn:ve},{id:"g_agency",...ka});ea(Ie,{noResolve:ee,...ka}),globalThis[Symbol.for("g_agency")]={get value(){return tn}};let xa={initialData:void 0,initialError:void 0},ke=K`select distinct fiscal_year as fy from mbtsa.subprogram_level where total_budget_amount > 0 order by fiscal_year desc`,gt="select distinct fiscal_year as fy from mbtsa.subprogram_level where total_budget_amount > 0 order by fiscal_year desc";R.g_fy_all_data&&(R.g_fy_all_data instanceof Error?xa.initialError=R.g_fy_all_data:xa.initialData=R.g_fy_all_data,R.g_fy_all_columns&&(xa.knownColumns=R.g_fy_all_columns));let Yt,qe=!1;const Oe=Me.createReactive({callback:h=>{t(16,Yt=h)},execFn:ve},{id:"g_fy_all",...xa});Oe(gt,{noResolve:ke,...xa}),globalThis[Symbol.for("g_fy_all")]={get value(){return Yt}};let Ha={initialData:void 0,initialError:void 0},Fa=K`select distinct unit_name as u
from mbtsa.subprogram_level
where unit_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
order by unit_name`,ae=`select distinct unit_name as u
from mbtsa.subprogram_level
where unit_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
order by unit_name`;R.g_unit_data&&(R.g_unit_data instanceof Error?Ha.initialError=R.g_unit_data:Ha.initialData=R.g_unit_data,R.g_unit_columns&&(Ha.knownColumns=R.g_unit_columns));let Ht,je=!1;const pt=Me.createReactive({callback:h=>{t(17,Ht=h)},execFn:ve},{id:"g_unit",...Ha});pt(ae,{noResolve:Fa,...Ha}),globalThis[Symbol.for("g_unit")]={get value(){return Ht}};let Ea={initialData:void 0,initialError:void 0},aa=K`select distinct program_name as p
from mbtsa.subprogram_level
where program_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
  and coalesce(unit_name,'') ilike '${n}'
order by program_name`,ja=`select distinct program_name as p
from mbtsa.subprogram_level
where program_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
  and coalesce(unit_name,'') ilike '${n}'
order by program_name`;R.g_program_data&&(R.g_program_data instanceof Error?Ea.initialError=R.g_program_data:Ea.initialData=R.g_program_data,R.g_program_columns&&(Ea.knownColumns=R.g_program_columns));let Pa,Ca=!1;const bt=Me.createReactive({callback:h=>{t(18,Pa=h)},execFn:ve},{id:"g_program",...Ea});bt(ja,{noResolve:aa,...Ea}),globalThis[Symbol.for("g_program")]={get value(){return Pa}};let Ae={initialData:void 0,initialError:void 0},ta=K`select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type`,na="select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type";R.g_fund_data&&(R.g_fund_data instanceof Error?Ae.initialError=R.g_fund_data:Ae.initialData=R.g_fund_data,R.g_fund_columns&&(Ae.knownColumns=R.g_fund_columns));let Ba,Ma=!1;const Ua=Me.createReactive({callback:h=>{t(19,Ba=h)},execFn:ve},{id:"g_fund",...Ae});Ua(na,{noResolve:ta,...Ae}),globalThis[Symbol.for("g_fund")]={get value(){return Ba}};let Pe={initialData:void 0,initialError:void 0},Be=K`select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0`,ra=`select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0`;R.year_bounds_data&&(R.year_bounds_data instanceof Error?Pe.initialError=R.year_bounds_data:Pe.initialData=R.year_bounds_data,R.year_bounds_columns&&(Pe.knownColumns=R.year_bounds_columns));let Te,Oa=!1;const te=Me.createReactive({callback:h=>{t(0,Te=h)},execFn:ve},{id:"year_bounds",...Pe});te(ra,{noResolve:Be,...Pe}),globalThis[Symbol.for("year_bounds")]={get value(){return Te}};let Ee={initialData:void 0,initialError:void 0},he=K`select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b`,$t=`select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b`;R.selected_years_data&&(R.selected_years_data instanceof Error?Ee.initialError=R.selected_years_data:Ee.initialData=R.selected_years_data,R.selected_years_columns&&(Ee.knownColumns=R.selected_years_columns));let jt,Ra=!1;const Da=Me.createReactive({callback:h=>{t(20,jt=h)},execFn:ve},{id:"selected_years",...Ee});Da($t,{noResolve:he,...Ee}),globalThis[Symbol.for("selected_years")]={get value(){return jt}};let Qe={initialData:void 0,initialError:void 0},sa=K`with a as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
),
b as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.spend_a, 0)                 as latest_year,
    coalesce(b.spend_b, 0)                 as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name)
order by abs(change_amt) desc`,Qa=`with a as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
),
b as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.spend_a, 0)                 as latest_year,
    coalesce(b.spend_b, 0)                 as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name)
order by abs(change_amt) desc`;R.agency_variance_data&&(R.agency_variance_data instanceof Error?Qe.initialError=R.agency_variance_data:Qe.initialData=R.agency_variance_data,R.agency_variance_columns&&(Qe.knownColumns=R.agency_variance_columns));let ht,xe=!1;const Pt=Me.createReactive({callback:h=>{t(1,ht=h)},execFn:ve},{id:"agency_variance",...Qe});Pt(Qa,{noResolve:sa,...Qe}),globalThis[Symbol.for("agency_variance")]={get value(){return ht}};let la={initialData:void 0,initialError:void 0},Na=K`with a as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
),
b as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.unit_name, b.unit_name) as unit_name,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name)
order by abs(change_amt) desc`,Wa=`with a as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
),
b as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.unit_name, b.unit_name) as unit_name,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name)
order by abs(change_amt) desc`;R.unit_variance_data&&(R.unit_variance_data instanceof Error?la.initialError=R.unit_variance_data:la.initialData=R.unit_variance_data,R.unit_variance_columns&&(la.knownColumns=R.unit_variance_columns));let wt,vt=!1;const Bt=Me.createReactive({callback:h=>{t(2,wt=h)},execFn:ve},{id:"unit_variance",...la});Bt(Wa,{noResolve:Na,...la}),globalThis[Symbol.for("unit_variance")]={get value(){return wt}};let oa={initialData:void 0,initialError:void 0},Ia=K`with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc`,Z=`with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc`;R.program_variance_data&&(R.program_variance_data instanceof Error?oa.initialError=R.program_variance_data:oa.initialData=R.program_variance_data,R.program_variance_columns&&(oa.knownColumns=R.program_variance_columns));let Fe,kt=!1;const Mt=Me.createReactive({callback:h=>{t(3,Fe=h)},execFn:ve},{id:"program_variance",...oa});Mt(Z,{noResolve:Ia,...oa}),globalThis[Symbol.for("program_variance")]={get value(){return Fe}};let ca={initialData:void 0,initialError:void 0},qa=K`with a as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
)
select
    coalesce(a.agency_code,     b.agency_code)     as agency_code,
    coalesce(a.agency_name,     b.agency_name)     as agency_name,
    coalesce(a.unit_name,       b.unit_name)       as unit_name,
    coalesce(a.program_name,    b.program_name)    as program_name,
    coalesce(a.subprogram_name, b.subprogram_name) as subprogram_name,
    coalesce(a.spend_a, 0)                         as latest_year,
    coalesce(b.spend_b, 0)                         as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name, subprogram_name)
order by abs(change_amt) desc`,tt=`with a as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
)
select
    coalesce(a.agency_code,     b.agency_code)     as agency_code,
    coalesce(a.agency_name,     b.agency_name)     as agency_name,
    coalesce(a.unit_name,       b.unit_name)       as unit_name,
    coalesce(a.program_name,    b.program_name)    as program_name,
    coalesce(a.subprogram_name, b.subprogram_name) as subprogram_name,
    coalesce(a.spend_a, 0)                         as latest_year,
    coalesce(b.spend_b, 0)                         as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name, subprogram_name)
order by abs(change_amt) desc`;R.subprogram_variance_data&&(R.subprogram_variance_data instanceof Error?ca.initialError=R.subprogram_variance_data:ca.initialData=R.subprogram_variance_data,R.subprogram_variance_columns&&(ca.knownColumns=R.subprogram_variance_columns));let _a,Se=!1;const We=Me.createReactive({callback:h=>{t(4,_a=h)},execFn:ve},{id:"subprogram_variance",...ca});We(tt,{noResolve:qa,...ca}),globalThis[Symbol.for("subprogram_variance")]={get value(){return _a}};let Aa={initialData:void 0,initialError:void 0},Ge=K`select
    agency_name, unit_name, program_name,
    latest_year as budget,
    count(*) over () as new_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where prior_year = 0 and latest_year > 0
order by latest_year desc
limit 10`,Ga=`select
    agency_name, unit_name, program_name,
    latest_year as budget,
    count(*) over () as new_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where prior_year = 0 and latest_year > 0
order by latest_year desc
limit 10`;R.new_programs_data&&(R.new_programs_data instanceof Error?Aa.initialError=R.new_programs_data:Aa.initialData=R.new_programs_data,R.new_programs_columns&&(Aa.knownColumns=R.new_programs_columns));let Ut,Ke=!1;const Ot=Me.createReactive({callback:h=>{t(21,Ut=h)},execFn:ve},{id:"new_programs",...Aa});Ot(Ga,{noResolve:Ge,...Aa}),globalThis[Symbol.for("new_programs")]={get value(){return Ut}};let Je={initialData:void 0,initialError:void 0},ia=K`select
    agency_name, unit_name, program_name,
    prior_year as budget,
    count(*) over () as elim_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where latest_year = 0 and prior_year > 0
order by prior_year desc
limit 10`,nt=`select
    agency_name, unit_name, program_name,
    prior_year as budget,
    count(*) over () as elim_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where latest_year = 0 and prior_year > 0
order by prior_year desc
limit 10`;R.eliminated_programs_data&&(R.eliminated_programs_data instanceof Error?Je.initialError=R.eliminated_programs_data:Je.initialData=R.eliminated_programs_data,R.eliminated_programs_columns&&(Je.knownColumns=R.eliminated_programs_columns));let ma,Qt=!1;const rt=Me.createReactive({callback:h=>{t(22,ma=h)},execFn:ve},{id:"eliminated_programs",...Je});rt(nt,{noResolve:ia,...Je}),globalThis[Symbol.for("eliminated_programs")]={get value(){return ma}};let ua={initialData:void 0,initialError:void 0},Ta=K`with a as (
    select fund_type, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
),
b as (
    select fund_type, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
)
select
    coalesce(a.fund_type, b.fund_type) as fund_type,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (fund_type)
order by abs(change_amt) desc`,Ce=`with a as (
    select fund_type, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
),
b as (
    select fund_type, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
)
select
    coalesce(a.fund_type, b.fund_type) as fund_type,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (fund_type)
order by abs(change_amt) desc`;R.fund_variance_data&&(R.fund_variance_data instanceof Error?ua.initialError=R.fund_variance_data:ua.initialData=R.fund_variance_data,R.fund_variance_columns&&(ua.knownColumns=R.fund_variance_columns));let st,xt=!1;const Wt=Me.createReactive({callback:h=>{t(23,st=h)},execFn:ve},{id:"fund_variance",...ua});Wt(Ce,{noResolve:Ta,...ua}),globalThis[Symbol.for("fund_variance")]={get value(){return st}};const Ft=$s();hr(r,Ft,h=>t(99,W=h));let Ka,nn="",rn="0px",ne;wr(()=>{const h=document.querySelector("header"),X=document.querySelector("aside")??document.querySelector("nav"),V=h?h.offsetHeight:64,M=X?X.offsetWidth:0;t(25,nn=`position:fixed; top:${V}px; left:${M}px; right:0; z-index:100;`),requestAnimationFrame(()=>{Ka&&t(26,rn=Ka.offsetHeight+"px")})});const Le=(h,X="%")=>{var M,G,Ye,on,cn,Za,fa;if(!h)return X;try{const He=JSON.stringify(h);if(He.includes("an input has not been set")||He.includes("select null"))return X}catch{}const V=[(G=(M=h==null?void 0:h.rawValues)==null?void 0:M[0])==null?void 0:G.value,(Ye=h==null?void 0:h.rawValue)==null?void 0:Ye.value,(on=h==null?void 0:h.value)==null?void 0:on.value,h==null?void 0:h.value,h==null?void 0:h.rawValue,(Za=(cn=h==null?void 0:h.rawValues)==null?void 0:cn[0])==null?void 0:Za.label,h==null?void 0:h.label,(fa=h==null?void 0:h.rawValues)==null?void 0:fa[0]];for(const He of V){if(He==null)continue;if(typeof He=="object"){if(He.value!=null)return String(He.value).toLowerCase();if(He.label!=null)return String(He.label).toLowerCase()}const Et=String(He).toLowerCase();if(Et&&Et!=="[object object]")return Et}return X},Ja=(h,X=!0)=>{const V=Le(h,"%").replace(/'/g,"''");return X?V.toLowerCase():V},Xa=h=>h&&h!=="%"&&h!=="undefined"&&!h.includes("select null")&&!h.includes("an input has not been set");let Sa=10;const sn=(h,X=!1)=>{const V=Number(h)||0,M=Math.abs(V),G=V>0?X?"+":"":V<0?"-":"";return M>=1e9?G+"$"+(M/1e9).toFixed(2)+"B":M>=1e6?G+"$"+(M/1e6).toFixed(1)+"M":M>=1e3?G+"$"+(M/1e3).toFixed(0)+"K":G+"$"+M.toLocaleString()},lt=h=>Number(h.latest_year)===0&&Number(h.prior_year)>0,za=h=>Number(h.prior_year)===0&&Number(h.latest_year)>0;function un(){Sa=fs(this.value),t(5,Sa)}function ln(h){vr[h?"unshift":"push"](()=>{Ka=h,t(24,Ka)})}function fn(h){vr[h?"unshift":"push"](()=>{ne=h,t(27,ne)})}const Va=h=>Number(h.prior_year)===0&&Number(h.latest_year)>0&&!p.some(X=>X[C]===h[C]&&Number(X.latest_year)===0&&Number(X.prior_year)>0),dn=h=>Number(h.latest_year)===0&&Number(h.prior_year)>0&&!p.some(X=>X[C]===h[C]&&Number(X.prior_year)===0&&Number(X.latest_year)>0);return r.$$set=h=>{"data"in h&&t(39,Ve=h.data)},r.$$.update=()=>{var h,X;r.$$.dirty[1]&256&&t(40,{data:R={},customFormattingSettings:en,__db:va}=Ve,R),r.$$.dirty[1]&512&&hs.set(Object.keys(R).length>0),r.$$.dirty[3]&128&&yt.params,r.$$.dirty[1]&15360&&(ee||!Lt?ee||(ea(Ie,{noResolve:ee,...ka}),t(44,Lt=!0)):ea(Ie,{noResolve:ee})),r.$$.dirty[1]&245760&&(ke||!qe?ke||(Oe(gt,{noResolve:ke,...xa}),t(48,qe=!0)):Oe(gt,{noResolve:ke})),r.$$.dirty[3]&64&&t(14,e=(()=>{const V=Ja(W==null?void 0:W.f_agency);return!V||V==="undefined"?"%":V})()),r.$$.dirty[0]&16384&&t(50,Fa=K`select distinct unit_name as u
from mbtsa.subprogram_level
where unit_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
order by unit_name`),r.$$.dirty[0]&16384&&t(51,ae=`select distinct unit_name as u
from mbtsa.subprogram_level
where unit_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
order by unit_name`),r.$$.dirty[1]&3932160&&(Fa||!je?Fa||(pt(ae,{noResolve:Fa,...Ha}),t(52,je=!0)):pt(ae,{noResolve:Fa})),r.$$.dirty[3]&64&&t(13,n=(()=>{const V=Ja(W==null?void 0:W.f_unit);return!V||V==="undefined"?"%":V})()),r.$$.dirty[0]&24576&&t(54,aa=K`select distinct program_name as p
from mbtsa.subprogram_level
where program_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
  and coalesce(unit_name,'') ilike '${n}'
order by program_name`),r.$$.dirty[0]&24576&&t(55,ja=`select distinct program_name as p
from mbtsa.subprogram_level
where program_name is not null
  and lower(coalesce(agency_name,'')) like '${e}'
  and coalesce(unit_name,'') ilike '${n}'
order by program_name`),r.$$.dirty[1]&62914560&&(aa||!Ca?aa||(bt(ja,{noResolve:aa,...Ea}),t(56,Ca=!0)):bt(ja,{noResolve:aa})),r.$$.dirty[1]&1006632960&&(ta||!Ma?ta||(Ua(na,{noResolve:ta,...Ae}),t(60,Ma=!0)):Ua(na,{noResolve:ta})),r.$$.dirty[1]&1073741824|r.$$.dirty[2]&7&&(Be||!Oa?Be||(te(ra,{noResolve:Be,...Pe}),t(64,Oa=!0)):te(ra,{noResolve:Be})),r.$$.dirty[3]&64&&t(98,l=Ja(W==null?void 0:W.f_year_a,!1)),r.$$.dirty[3]&64&&t(97,s=Ja(W==null?void 0:W.f_year_b,!1)),r.$$.dirty[3]&48&&t(66,he=K`select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b`),r.$$.dirty[3]&48&&t(67,$t=`select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b`),r.$$.dirty[2]&120&&(he||!Ra?he||(Da($t,{noResolve:he,...Ee}),t(68,Ra=!0)):Da($t,{noResolve:he})),r.$$.dirty[3]&64&&t(11,_=(()=>{const V=Ja(W==null?void 0:W.f_fund);return!V||V==="undefined"?"%":V})()),r.$$.dirty[0]&18432|r.$$.dirty[3]&48&&t(70,sa=K`with a as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
),
b as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.spend_a, 0)                 as latest_year,
    coalesce(b.spend_b, 0)                 as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name)
order by abs(change_amt) desc`),r.$$.dirty[0]&18432|r.$$.dirty[3]&48&&t(71,Qa=`with a as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
),
b as (
    select agency_code, agency_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.spend_a, 0)                 as latest_year,
    coalesce(b.spend_b, 0)                 as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name)
order by abs(change_amt) desc`),r.$$.dirty[2]&1920&&(sa||!xe?sa||(Pt(Qa,{noResolve:sa,...Qe}),t(72,xe=!0)):Pt(Qa,{noResolve:sa})),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(74,Na=K`with a as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
),
b as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.unit_name, b.unit_name) as unit_name,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name)
order by abs(change_amt) desc`),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(75,Wa=`with a as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
),
b as (
    select agency_code, agency_name, unit_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,'')) like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))   like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))   like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name
)
select
    coalesce(a.agency_code, b.agency_code) as agency_code,
    coalesce(a.agency_name, b.agency_name) as agency_name,
    coalesce(a.unit_name, b.unit_name) as unit_name,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name)
order by abs(change_amt) desc`),r.$$.dirty[2]&30720&&(Na||!vt?Na||(Bt(Wa,{noResolve:Na,...la}),t(76,vt=!0)):Bt(Wa,{noResolve:Na})),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(78,Ia=K`with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc`),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(79,Z=`with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc`),r.$$.dirty[2]&491520&&(Ia||!kt?Ia||(Mt(Z,{noResolve:Ia,...oa}),t(80,kt=!0)):Mt(Z,{noResolve:Ia})),r.$$.dirty[3]&64&&t(12,c=(()=>{const V=Ja(W==null?void 0:W.f_program);return!V||V==="undefined"?"%":V})()),r.$$.dirty[0]&30720|r.$$.dirty[3]&48&&t(82,qa=K`with a as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
)
select
    coalesce(a.agency_code,     b.agency_code)     as agency_code,
    coalesce(a.agency_name,     b.agency_name)     as agency_name,
    coalesce(a.unit_name,       b.unit_name)       as unit_name,
    coalesce(a.program_name,    b.program_name)    as program_name,
    coalesce(a.subprogram_name, b.subprogram_name) as subprogram_name,
    coalesce(a.spend_a, 0)                         as latest_year,
    coalesce(b.spend_b, 0)                         as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name, subprogram_name)
order by abs(change_amt) desc`),r.$$.dirty[0]&30720|r.$$.dirty[3]&48&&t(83,tt=`with a as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, subprogram_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name, subprogram_name
)
select
    coalesce(a.agency_code,     b.agency_code)     as agency_code,
    coalesce(a.agency_name,     b.agency_name)     as agency_name,
    coalesce(a.unit_name,       b.unit_name)       as unit_name,
    coalesce(a.program_name,    b.program_name)    as program_name,
    coalesce(a.subprogram_name, b.subprogram_name) as subprogram_name,
    coalesce(a.spend_a, 0)                         as latest_year,
    coalesce(b.spend_b, 0)                         as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name, subprogram_name)
order by abs(change_amt) desc`),r.$$.dirty[2]&7864320&&(qa||!Se?qa||(We(tt,{noResolve:qa,...ca}),t(84,Se=!0)):We(tt,{noResolve:qa})),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(86,Ge=K`select
    agency_name, unit_name, program_name,
    latest_year as budget,
    count(*) over () as new_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where prior_year = 0 and latest_year > 0
order by latest_year desc
limit 10`),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(87,Ga=`select
    agency_name, unit_name, program_name,
    latest_year as budget,
    count(*) over () as new_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where prior_year = 0 and latest_year > 0
order by latest_year desc
limit 10`),r.$$.dirty[2]&125829120&&(Ge||!Ke?Ge||(Ot(Ga,{noResolve:Ge,...Aa}),t(88,Ke=!0)):Ot(Ga,{noResolve:Ge})),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(90,ia=K`select
    agency_name, unit_name, program_name,
    prior_year as budget,
    count(*) over () as elim_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where latest_year = 0 and prior_year > 0
order by prior_year desc
limit 10`),r.$$.dirty[0]&26624|r.$$.dirty[3]&48&&t(91,nt=`select
    agency_name, unit_name, program_name,
    prior_year as budget,
    count(*) over () as elim_count
from (with a as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
),
b as (
    select agency_code, agency_name, unit_name, program_name, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(fund_type,''))    like case when '${_}' like '(select%' then '%' else '${_}' end
    group by agency_code, agency_name, unit_name, program_name
)
select
    coalesce(a.agency_code,  b.agency_code)  as agency_code,
    coalesce(a.agency_name,  b.agency_name)  as agency_name,
    coalesce(a.unit_name,    b.unit_name)    as unit_name,
    coalesce(a.program_name, b.program_name) as program_name,
    coalesce(a.spend_a, 0)                   as latest_year,
    coalesce(b.spend_b, 0)                   as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (agency_code, agency_name, unit_name, program_name)
order by abs(change_amt) desc)
where latest_year = 0 and prior_year > 0
order by prior_year desc
limit 10`),r.$$.dirty[2]&2013265920&&(ia||!Qt?ia||(rt(nt,{noResolve:ia,...Je}),t(92,Qt=!0)):rt(nt,{noResolve:ia})),r.$$.dirty[0]&28672|r.$$.dirty[3]&48&&t(94,Ta=K`with a as (
    select fund_type, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
),
b as (
    select fund_type, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
)
select
    coalesce(a.fund_type, b.fund_type) as fund_type,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (fund_type)
order by abs(change_amt) desc`),r.$$.dirty[0]&28672|r.$$.dirty[3]&48&&t(95,Ce=`with a as (
    select fund_type, sum(total_budget_amount) as spend_a
    from mbtsa.subprogram_level
    where fiscal_year = (select year_a from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
),
b as (
    select fund_type, sum(total_budget_amount) as spend_b
    from mbtsa.subprogram_level
    where fiscal_year = (select year_b from (select
    case when '${l}' in ('%', '', 'undefined') or '${l}' like '(select%' then 
        (select latest_year from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${l}' as int) end as year_a,
    case when '${s}' in ('%', '', 'undefined') or '${s}' like '(select%' then 
        (select prior_year  from (select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0)) else cast('${s}' as int) end as year_b))
            and lower(coalesce(agency_name,''))  like case when '${e}' like '(select%' then '%' else '${e}' end
            and lower(coalesce(unit_name,''))    like case when '${n}' like '(select%' then '%' else '${n}' end
            and lower(coalesce(program_name,'')) like case when '${c}' like '(select%' then '%' else '${c}' end
            and fund_type is not null
    group by fund_type
)
select
    coalesce(a.fund_type, b.fund_type) as fund_type,
    coalesce(a.spend_a, 0)             as latest_year,
    coalesce(b.spend_b, 0)             as prior_year,
    coalesce(a.spend_a, 0) - coalesce(b.spend_b, 0) as change_amt,
    round((coalesce(a.spend_a,0) - coalesce(b.spend_b,0)) * 100.0 / nullif(b.spend_b, 0), 1) as change_pct
from a full outer join b using (fund_type)
order by abs(change_amt) desc`),r.$$.dirty[3]&15&&(Ta||!xt?Ta||(Wt(Ce,{noResolve:Ta,...ua}),t(96,xt=!0)):Wt(Ce,{noResolve:Ta})),r.$$.dirty[0]&30720&&t(35,g=Xa(e)||Xa(n)||Xa(c)||Xa(_)),r.$$.dirty[3]&64&&t(10,y=Le(W==null?void 0:W.f_level,"agency")),r.$$.dirty[0]&1|r.$$.dirty[3]&32&&t(34,m=l&&l!=="%"?l:((h=Te==null?void 0:Te[0])==null?void 0:h.latest_year)??"Latest Year"),r.$$.dirty[0]&1|r.$$.dirty[3]&16&&t(33,E=s&&s!=="%"?s:((X=Te==null?void 0:Te[0])==null?void 0:X.prior_year)??"Prior Year"),r.$$.dirty[0]&1024&&t(7,L=y==="unit"?"Unit":y==="program"?"Program":y==="subprogram"?"Subprogram":"Agency"),r.$$.dirty[0]&1024&&t(9,C=y==="unit"?"unit_name":y==="program"?"program_name":y==="subprogram"?"subprogram_name":"agency_name"),r.$$.dirty[0]&1054&&t(8,p=y==="unit"?wt??[]:y==="program"?Fe??[]:y==="subprogram"?_a??[]:ht??[]),r.$$.dirty[0]&800&&t(6,F=(()=>{const V=p;if(!V.length)return{net_change:0,total_increased:0,total_decreased:0,items_up:0,items_down:0,total_count:0,top_mover_name:"—",top_mover_amt:0};const M=V.slice().sort((G,Ye)=>Math.abs(Number(Ye.change_amt))-Math.abs(Number(G.change_amt)))[0];return{total_increased:V.filter(G=>Number(G.change_amt)>0).reduce((G,Ye)=>G+Number(Ye.change_amt),0),total_decreased:V.filter(G=>Number(G.change_amt)<0).reduce((G,Ye)=>G+Number(Ye.change_amt),0),net_change:V.reduce((G,Ye)=>G+Number(Ye.change_amt),0),items_up:V.filter(G=>Number(G.change_pct)>Sa).length,items_down:V.filter(G=>Number(G.change_pct)<-Sa).length,total_count:V.length,top_mover_name:M?M[C]??"—":"—",top_mover_amt:M?Number(M.change_amt):0}})()),r.$$.dirty[0]&256&&t(32,x=(p??[]).filter(V=>Number(V.prior_year)===0&&Number(V.latest_year)>0).length),r.$$.dirty[0]&256&&t(31,P=(p??[]).filter(V=>Number(V.latest_year)===0&&Number(V.prior_year)>0).length),r.$$.dirty[0]&64&&t(30,j=Number(F.net_change)>=0?"#1A7340":"#C8122C"),r.$$.dirty[0]&64&&t(29,$e=Number(F.net_change)>=0?"rgba(46,173,107,0.06)":"rgba(200,18,44,0.06)"),r.$$.dirty[0]&64&&t(28,J=Number(F.net_change)>=0?"#2EAD6B":"#C8122C"),r.$$.dirty[0]&224&&(()=>{if(!F.total_count)return"";const V=Number(F.net_change)||0,M=V>=0?"increase":"decrease",G=F.top_mover_name&&F.top_mover_name!=="—"?" · Top mover: "+F.top_mover_name:"";return F.items_up+" "+L.toLowerCase()+"s grew >"+Sa+"% · "+F.items_down+" cut >"+Sa+"% · Net "+M+": "+sn(V,!0)+G})()},t(42,ee=K`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`),t(43,Ie="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name"),t(46,ke=K`select distinct fiscal_year as fy from mbtsa.subprogram_level where total_budget_amount > 0 order by fiscal_year desc`),t(47,gt="select distinct fiscal_year as fy from mbtsa.subprogram_level where total_budget_amount > 0 order by fiscal_year desc"),t(58,ta=K`select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type`),t(59,na="select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type"),t(62,Be=K`select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0`),t(63,ra=`select max(fiscal_year) as latest_year, max(fiscal_year) - 1 as prior_year
from mbtsa.subprogram_level
where total_budget_amount > 0`),[Te,ht,wt,Fe,_a,Sa,F,L,p,C,y,_,c,n,e,tn,Yt,Ht,Pa,Ba,jt,Ut,ma,st,Ka,nn,rn,ne,J,$e,j,P,x,E,m,g,Ft,Xa,sn,Ve,R,ka,ee,Ie,Lt,xa,ke,gt,qe,Ha,Fa,ae,je,Ea,aa,ja,Ca,Ae,ta,na,Ma,Pe,Be,ra,Oa,Ee,he,$t,Ra,Qe,sa,Qa,xe,la,Na,Wa,vt,oa,Ia,Z,kt,ca,qa,tt,Se,Aa,Ge,Ga,Ke,Je,ia,nt,Qt,ua,Ta,Ce,xt,s,l,W,yt,lt,za,un,ln,fn,Va,dn]}class bl extends ss{constructor(a){super(),ls(this,a,ll,rl,rs,{data:39},null,[-1,-1,-1,-1,-1])}}export{bl as component};
