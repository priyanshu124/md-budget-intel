import{s as Nt,x as na,d as _,i as m,k as _a,aj as Os,K as cs,c as f,J as tt,f as x,j as R,m as K,p as O,I as dr,g as T,o as F,M as rt,G as Ss,e as M,l as ga,C as $a,_ as br,q as vt,ak as qs,$ as pr,a0 as Ns,U as Hs,b as Ea,n as Je,t as Ke,a2 as Ot,a3 as St,a as ct,h as Ls,r as As,u as Ms,v as Ys,w as Vs,N as wr,P as Us,Q as Ps}from"../chunks/scheduler.Z7x_RWPH.js";import{S as Ht,i as Lt,h as zs,d as V,t as b,a as u,g as ue,c as fe,m as U,b as P,e as z}from"../chunks/index.DBfziG1F.js";import{aa as xt,ab as Bs,ac as Gs,ad as ur,ae as fr,af as ds,ag as Ws,m as us,f as Xs,ah as Qs,a5 as fs,e as ha,a as Js,s as Ks,Q as ea,u as Zs,p as en,b as $r,r as hr,C as an}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B8lukIix.js";import{F as tn,B as rn,T as sn,P as ys,a as ms,C as gs,A as nn}from"../chunks/TrendOverview.hOf5cMn7.js";import{w as on,g as ln}from"../chunks/entry.CIYme6d7.js";import{A as qa}from"../chunks/Alert.DsQNPsSz.js";import{h as J}from"../chunks/setTrackProxy.Cyfckp0w.js";import{a as _n,D as qt,b as jt}from"../chunks/Details.DtMQeq6R.js";import{p as cn}from"../chunks/stores.Le2oFufJ.js";import{G as dn}from"../chunks/Grid.DWsHgeQC.js";import{Q as aa}from"../chunks/QueryViewer.DCcuLD6c.js";import{p as un}from"../chunks/profile.BW8tN6E9.js";const _t=Symbol.for("__evidence-chart-window-debug__"),fn=(n,r)=>{window[_t]||(window[_t]={}),window[_t][n]=r},yn=n=>{window[_t]||(window[_t]={}),delete window[_t][n]},it=500,mn=(n,r)=>{var D;const s=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&n.clientWidth*3*n.clientHeight*3>16777215;xt("light",fr),xt("dark",ds);let e;const t=()=>{e=ur(n,r.theme,{renderer:s?"svg":r.renderer??"canvas"})};t(),fn(e.id,e),r.connectGroup&&(e.group=r.connectGroup,Bs(r.connectGroup));const a=()=>{if(r.seriesColors){const $=e.getOption();if(!$)return;const g={...$};for(const q of Object.keys(r.seriesColors)){const h=$.series.findIndex(H=>H.name===q);h!==-1&&(g.series[h]={...g.series[h],itemStyle:{...g.series[h].itemStyle,color:r.seriesColors[q]}})}e.setOption(g)}},l=()=>{r.echartsOptions&&e.setOption({...r.echartsOptions})},i=()=>{let $=[];if(r.seriesOptions){const g=r.config.series.reduce((q,{evidenceSeriesType:h},H)=>((h==="reference_line"||h==="reference_area"||h==="reference_point")&&q.push(H),q),[]);for(let q=0;q<r.config.series.length;q++)g.includes(q)?$.push({}):$.push({...r.seriesOptions});e.setOption({series:$})}};e.setOption({...r.config,animationDuration:it,animationDurationUpdate:it}),a(),l(),i();const c=r.dispatch;e.on("click",function($){c("click",$)});const v=n.parentElement,C=Gs(()=>{e.resize({animation:{duration:it}}),E()},100);let I;window.ResizeObserver&&v?(I=new ResizeObserver(C),I.observe(v)):window.addEventListener("resize",C);const E=()=>{if(r.showAllXAxisLabels){const $=e.getOption();if(!$)return;const g=new Set($.series.flatMap(H=>{var A;return(A=H.data)==null?void 0:A.map(W=>W[0])})),q=4/5,h=(n==null?void 0:n.clientWidth)??0;if(!r.swapXY){const H={xAxis:{axisLabel:{interval:0,overflow:r.xAxisLabelOverflow,width:h*q/g.size}}};e.setOption(H)}}},j=$=>{$.theme!==r.theme&&(e.dispose(),r=$,t()),r=$,e.setOption({...r.config,animationDuration:it,animationDurationUpdate:it},!0),a(),l(),i(),e.resize({animation:{duration:it}}),E()};return C(),window[D=Symbol.for("chart renders")]??(window[D]=0),window[Symbol.for("chart renders")]++,{update($){window[Symbol.for("chart renders")]++,j($)},destroy(){I?I.unobserve(v):window.removeEventListener("resize",C),e.dispose(),yn(e.id)}}},gn=(n,r)=>{xt("light",fr),xt("dark",ds),console.log("echartsCanvasDownloadAction",r.theme);const s=ur(n,r.theme,{renderer:"canvas"});r.config.animation=!1,s.setOption(r.config);const e=()=>{if(r.seriesColors){const v=s.getOption();if(!v)return;const C={...v};for(const I of Object.keys(r.seriesColors)){const E=v.series.findIndex(j=>j.name===I);E!==-1&&(C.series[E]={...C.series[E],itemStyle:{...C.series[E].itemStyle,color:r.seriesColors[I]}})}s.setOption(C)}},t=()=>{r.echartsOptions&&s.setOption({...r.echartsOptions})},a=()=>{let v=[];if(r.seriesOptions){const C=r.config.series.reduce((I,{evidenceSeriesType:E},j)=>((E==="reference_line"||E==="reference_area"||E==="reference_point")&&I.push(j),I),[]);for(let I=0;I<r.config.series.length;I++)C.includes(I)?v.push({}):v.push({...r.seriesOptions});s.setOption({series:v})}};t(),e(),a();let l=s.getConnectedDataURL({type:"png",pixelRatio:3,backgroundColor:r.backgroundColor,excludeComponents:["toolbox"]});const i=new Date,c=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,19).replaceAll(":","-");return Ws(l,(r.evidenceChartTitle??r.queryID??"evidence-chart")+`_${c}.png`),s.dispose(),{destroy(){s.dispose()}}},Ct=(n,r)=>{xt("evidence-light",fr);const{config:s,ratio:e,echartsOptions:t,seriesOptions:a,seriesColors:l,isMap:i,extraHeight:c,width:v}=r;let C={renderer:"canvas"};i&&(C.height=v*.5+c,n&&n.parentNode&&(n.style.height=C.height+"px",n.parentNode.style.height=C.height+"px"));const I=ur(n,"evidence-light",C);s.animation=!1,I.setOption(s),t&&I.setOption(t);const E=()=>{if(l){const g=I.getOption();if(!g)return;const q={...g};for(const h of Object.keys(l)){const H=g.series.findIndex(A=>A.name===h);H!==-1&&(q.series[H]={...q.series[H],itemStyle:{...q.series[H].itemStyle,color:l[h]}})}I.setOption(q)}},j=()=>{t&&I.setOption({...t})},D=()=>{let g=[];if(a){const q=s.series.reduce((h,{evidenceSeriesType:H},A)=>((H==="reference_line"||H==="reference_area"||H==="reference_point")&&h.push(A),h),[]);for(let h=0;h<s.series.length;h++)q.includes(h)?g.push({}):g.push({...a});I.setOption({series:g})}};j(),E(),D();let $=I.getConnectedDataURL({type:"jpeg",pixelRatio:e,backgroundColor:"#fff",excludeComponents:["toolbox"]});n.innerHTML=`<img src=${$} width="100%" style="
        position: absolute; 
        top: 0;
        user-select: all;
        -webkit-user-select: all;
        -moz-user-select: all;
        -ms-user-select: all;
    " />`,r.config.animation=!0};function bn(n){let r;function s(a,l){return a[9]?$n:wn}let e=s(n),t=e(n);return{c(){t.c(),r=_a()},l(a){t.l(a),r=_a()},m(a,l){t.m(a,l),m(a,r,l)},p(a,l){e===(e=s(a))&&t?t.p(a,l):(t.d(1),t=e(a),t&&(t.c(),t.m(r.parentNode,r)))},d(a){a&&_(r),t.d(a)}}}function pn(n){let r,s,e,t;return{c(){r=O("div"),this.h()},l(a){r=R(a,"DIV",{class:!0,style:!0}),K(r).forEach(_),this.h()},h(){x(r,"class","chart"),f(r,"height",n[1]),f(r,"width",n[2]),f(r,"margin-left","0"),f(r,"margin-top","15px"),f(r,"margin-bottom","10px"),f(r,"overflow","visible"),f(r,"break-inside","avoid")},m(a,l){m(a,r,l),e||(t=tt(s=Ct.call(null,r,{config:n[0],ratio:2,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13]})),e=!0)},p(a,l){l&2&&f(r,"height",a[1]),l&4&&f(r,"width",a[2]),s&&rt(s.update)&&l&8289&&s.update.call(null,{config:a[0],ratio:2,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13]})},d(a){a&&_(r),e=!1,t()}}}function wn(n){let r,s,e,t,a,l,i;return{c(){r=O("div"),e=F(),t=O("div"),this.h()},l(c){r=R(c,"DIV",{class:!0,style:!0}),K(r).forEach(_),e=T(c),t=R(c,"DIV",{class:!0,style:!0}),K(t).forEach(_),this.h()},h(){x(r,"class","chart md:hidden"),f(r,"height",n[1]),f(r,"width","650px"),f(r,"margin-left","0"),f(r,"margin-top","15px"),f(r,"margin-bottom","10px"),f(r,"overflow","visible"),f(r,"break-inside","avoid"),x(t,"class","chart hidden md:block"),f(t,"height",n[1]),f(t,"width","841px"),f(t,"margin-left","0"),f(t,"margin-top","15px"),f(t,"margin-bottom","10px"),f(t,"overflow","visible"),f(t,"break-inside","avoid")},m(c,v){m(c,r,v),m(c,e,v),m(c,t,v),l||(i=[tt(s=Ct.call(null,r,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:650})),tt(a=Ct.call(null,t,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:841}))],l=!0)},p(c,v){v&2&&f(r,"height",c[1]),s&&rt(s.update)&&v&8673&&s.update.call(null,{config:c[0],ratio:4,echartsOptions:c[5],seriesOptions:c[6],seriesColors:c[13],isMap:c[7],extraHeight:c[8],width:650}),v&2&&f(t,"height",c[1]),a&&rt(a.update)&&v&8673&&a.update.call(null,{config:c[0],ratio:4,echartsOptions:c[5],seriesOptions:c[6],seriesColors:c[13],isMap:c[7],extraHeight:c[8],width:841})},d(c){c&&(_(r),_(e),_(t)),l=!1,dr(i)}}}function $n(n){let r,s,e,t,a,l,i;return{c(){r=O("div"),e=F(),t=O("div"),this.h()},l(c){r=R(c,"DIV",{class:!0,style:!0}),K(r).forEach(_),e=T(c),t=R(c,"DIV",{class:!0,style:!0}),K(t).forEach(_),this.h()},h(){x(r,"class","chart md:hidden"),f(r,"height",n[1]),f(r,"width",n[11]+"px"),f(r,"margin-left","0"),f(r,"margin-top","15px"),f(r,"margin-bottom","10px"),f(r,"overflow","visible"),f(r,"break-inside","avoid"),x(t,"class","chart hidden md:block"),f(t,"height",n[1]),f(t,"width",n[10]+"px"),f(t,"margin-left","0"),f(t,"margin-top","15px"),f(t,"margin-bottom","10px"),f(t,"overflow","visible"),f(t,"break-inside","avoid")},m(c,v){m(c,r,v),m(c,e,v),m(c,t,v),l||(i=[tt(s=Ct.call(null,r,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:n[11]})),tt(a=Ct.call(null,t,{config:n[0],ratio:4,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13],isMap:n[7],extraHeight:n[8],width:n[10]}))],l=!0)},p(c,v){v&2&&f(r,"height",c[1]),v&2048&&f(r,"width",c[11]+"px"),s&&rt(s.update)&&v&10721&&s.update.call(null,{config:c[0],ratio:4,echartsOptions:c[5],seriesOptions:c[6],seriesColors:c[13],isMap:c[7],extraHeight:c[8],width:c[11]}),v&2&&f(t,"height",c[1]),v&1024&&f(t,"width",c[10]+"px"),a&&rt(a.update)&&v&9697&&a.update.call(null,{config:c[0],ratio:4,echartsOptions:c[5],seriesOptions:c[6],seriesColors:c[13],isMap:c[7],extraHeight:c[8],width:c[10]})},d(c){c&&(_(r),_(e),_(t)),l=!1,dr(i)}}}function hn(n){let r;function s(a,l){if(a[3])return pn;if(a[4])return bn}let e=s(n),t=e&&e(n);return{c(){t&&t.c(),r=_a()},l(a){t&&t.l(a),r=_a()},m(a,l){t&&t.m(a,l),m(a,r,l)},p(a,[l]){e===(e=s(a))&&t?t.p(a,l):(t&&t.d(1),t=e&&e(a),t&&(t.c(),t.m(r.parentNode,r)))},i:na,o:na,d(a){a&&_(r),t&&t.d(a)}}}function kn(n,r,s){let e,t,a,l,i,c,v=na,C=()=>(v(),v=cs(e,G=>s(13,c=G)),e);n.$$.on_destroy.push(()=>v());const{resolveColorsObject:I}=us();let{config:E=void 0}=r,{height:j="291px"}=r,{width:D="100%"}=r,{copying:$=!1}=r,{printing:g=!1}=r,{echartsOptions:q=void 0}=r,{seriesOptions:h=void 0}=r,{seriesColors:H=void 0}=r,{isMap:A=!1}=r,{extraHeight:W=void 0}=r,d=!1,De,Le;const ze=Os("gridConfig");return ze&&(d=!0,{cols:De,gapWidth:Le}=ze),n.$$set=G=>{"config"in G&&s(0,E=G.config),"height"in G&&s(1,j=G.height),"width"in G&&s(2,D=G.width),"copying"in G&&s(3,$=G.copying),"printing"in G&&s(4,g=G.printing),"echartsOptions"in G&&s(5,q=G.echartsOptions),"seriesOptions"in G&&s(6,h=G.seriesOptions),"seriesColors"in G&&s(14,H=G.seriesColors),"isMap"in G&&s(7,A=G.isMap),"extraHeight"in G&&s(8,W=G.extraHeight)},n.$$.update=()=>{n.$$.dirty&16384&&C(s(12,e=I(H))),n.$$.dirty&32768&&s(18,t=Math.min(Number(De),2)),n.$$.dirty&327680&&s(11,a=(650-Number(Le)*(t-1))/t),n.$$.dirty&32768&&s(17,l=Math.min(Number(De),3)),n.$$.dirty&196608&&s(10,i=(841-Number(Le)*(l-1))/l)},[E,j,D,$,g,q,h,A,W,d,i,a,e,c,H,De,Le,l,t]}class vn extends Ht{constructor(r){super(),Lt(this,r,kn,hn,Nt,{config:0,height:1,width:2,copying:3,printing:4,echartsOptions:5,seriesOptions:6,seriesColors:14,isMap:7,extraHeight:8})}}function xn(n){let r,s,e="Loading...",t,a,l;return{c(){r=O("div"),s=O("span"),s.textContent=e,t=F(),a=O("div"),this.h()},l(i){r=R(i,"DIV",{role:!0,class:!0});var c=K(r);s=R(c,"SPAN",{class:!0,"data-svelte-h":!0}),ga(s)!=="svelte-1wtojot"&&(s.textContent=e),t=T(c),a=R(c,"DIV",{class:!0,style:!0}),K(a).forEach(_),c.forEach(_),this.h()},h(){x(s,"class","sr-only"),x(a,"class","bg-base-100 rounded-md max-w-[100%]"),f(a,"height",n[0]),f(a,"margin-top","15px"),f(a,"margin-bottom","31px"),x(r,"role","status"),x(r,"class","animate-pulse")},m(i,c){m(i,r,c),M(r,s),M(r,t),M(r,a)},p(i,[c]){c&1&&f(a,"height",i[0])},i(i){i&&(l||Ss(()=>{l=zs(r,Xs,{}),l.start()}))},o:na,d(i){i&&_(r)}}}function jn(n,r,s){let{height:e="231px"}=r;return n.$$set=t=>{"height"in t&&s(0,e=t.height)},[e]}class Cn extends Ht{constructor(r){super(),Lt(this,r,jn,xn,Nt,{height:0})}}function kr(n){let r,s,e,t;const a=[Fn,Tn],l=[];function i(c,v){return 1}return r=i(),s=l[r]=a[r](n),{c(){s.c(),e=_a()},l(c){s.l(c),e=_a()},m(c,v){l[r].m(c,v),m(c,e,v),t=!0},p(c,v){s.p(c,v)},i(c){t||(u(s),t=!0)},o(c){b(s),t=!1},d(c){c&&_(e),l[r].d(c)}}}function Tn(n){let r,s,e,t;return{c(){r=O("div"),this.h()},l(a){r=R(a,"DIV",{class:!0,style:!0}),K(r).forEach(_),this.h()},h(){x(r,"class","chart svelte-19r8f8"),f(r,"height",n[3]),f(r,"width",n[4]),f(r,"overflow","visible"),f(r,"display",n[15]?"none":"inherit")},m(a,l){m(a,r,l),e||(t=tt(s=mn.call(null,r,{config:n[0],...n[25],echartsOptions:n[9],seriesOptions:n[10],dispatch:n[24],renderer:n[6],connectGroup:n[12],xAxisLabelOverflow:n[13],seriesColors:n[19],theme:n[20]})),e=!0)},p(a,l){l[0]&8&&f(r,"height",a[3]),l[0]&16&&f(r,"width",a[4]),l[0]&32768&&f(r,"display",a[15]?"none":"inherit"),s&&rt(s.update)&&l[0]&35141185&&s.update.call(null,{config:a[0],...a[25],echartsOptions:a[9],seriesOptions:a[10],dispatch:a[24],renderer:a[6],connectGroup:a[12],xAxisLabelOverflow:a[13],seriesColors:a[19],theme:a[20]})},i:na,o:na,d(a){a&&_(r),e=!1,t()}}}function Fn(n){let r,s;return r=new Cn({props:{height:n[3]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&8&&(a.height=e[3]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function vr(n){let r,s,e,t=n[8]&&xr(n),a=n[5]&&n[7]&&jr(n);return{c(){r=O("div"),t&&t.c(),s=F(),a&&a.c(),this.h()},l(l){r=R(l,"DIV",{class:!0});var i=K(r);t&&t.l(i),s=T(i),a&&a.l(i),i.forEach(_),this.h()},h(){x(r,"class","chart-footer svelte-19r8f8")},m(l,i){m(l,r,i),t&&t.m(r,null),M(r,s),a&&a.m(r,null),e=!0},p(l,i){l[8]?t?(t.p(l,i),i[0]&256&&u(t,1)):(t=xr(l),t.c(),u(t,1),t.m(r,s)):t&&(ue(),b(t,1,1,()=>{t=null}),fe()),l[5]&&l[7]?a?(a.p(l,i),i[0]&160&&u(a,1)):(a=jr(l),a.c(),u(a,1),a.m(r,null)):a&&(ue(),b(a,1,1,()=>{a=null}),fe())},i(l){e||(u(t),u(a),e=!0)},o(l){b(t),b(a),e=!1},d(l){l&&_(r),t&&t.d(),a&&a.d()}}}function xr(n){let r,s;return r=new fs({props:{text:"Save Image",class:"download-button",downloadData:n[32],display:n[17],queryID:n[1],$$slots:{default:[In]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&16384&&(a.downloadData=e[32]),t[0]&131072&&(a.display=e[17]),t[0]&2&&(a.queryID=e[1]),t[1]&32&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function In(n){let r,s,e,t;return{c(){r=St("svg"),s=St("rect"),e=St("circle"),t=St("path"),this.h()},l(a){r=Ot(a,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var l=K(r);s=Ot(l,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),K(s).forEach(_),e=Ot(l,"circle",{cx:!0,cy:!0,r:!0}),K(e).forEach(_),t=Ot(l,"path",{d:!0}),K(t).forEach(_),l.forEach(_),this.h()},h(){x(s,"x","3"),x(s,"y","3"),x(s,"width","18"),x(s,"height","18"),x(s,"rx","2"),x(e,"cx","8.5"),x(e,"cy","8.5"),x(e,"r","1.5"),x(t,"d","M20.4 14.5L16 10 4 20"),x(r,"xmlns","http://www.w3.org/2000/svg"),x(r,"width","12"),x(r,"height","12"),x(r,"viewBox","0 0 24 24"),x(r,"fill","none"),x(r,"stroke","#000"),x(r,"stroke-width","2"),x(r,"stroke-linecap","round"),x(r,"stroke-linejoin","round")},m(a,l){m(a,r,l),M(r,s),M(r,e),M(r,t)},p:na,d(a){a&&_(r)}}}function jr(n){let r,s;return r=new fs({props:{text:"Download Data",data:n[5],queryID:n[1],class:"download-button",display:n[17]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&32&&(a.data=e[5]),t[0]&2&&(a.queryID=e[1]),t[0]&131072&&(a.display=e[17]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Cr(n){let r,s;return r=new Qs({props:{source:JSON.stringify(n[0],void 0,3),copyToClipboard:!0,$$slots:{default:[Dn]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&1&&(a.source=JSON.stringify(e[0],void 0,3)),t[0]&1|t[1]&32&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Dn(n){let r=JSON.stringify(n[0],void 0,3)+"",s;return{c(){s=Ke(r)},l(e){s=Je(e,r)},m(e,t){m(e,s,t)},p(e,t){t[0]&1&&r!==(r=JSON.stringify(e[0],void 0,3)+"")&&Ea(s,r)},d(e){e&&_(s)}}}function Tr(n){let r,s,e,t;return{c(){r=O("div"),this.h()},l(a){r=R(a,"DIV",{class:!0,style:!0}),K(r).forEach(_),this.h()},h(){x(r,"class","chart svelte-19r8f8"),f(r,"display","none"),f(r,"visibility","visible"),f(r,"height",n[3]),f(r,"width","666px"),f(r,"margin-left","0"),f(r,"margin-top","15px"),f(r,"margin-bottom","15px"),f(r,"overflow","visible")},m(a,l){m(a,r,l),e||(t=tt(s=gn.call(null,r,{config:n[0],...n[25],echartsOptions:n[9],seriesOptions:n[10],seriesColors:n[19],queryID:n[1],evidenceChartTitle:n[2],theme:n[20],backgroundColor:n[21].colors["base-100"]})),e=!0)},p(a,l){l[0]&8&&f(r,"height",a[3]),s&&rt(s.update)&&l[0]&37225991&&s.update.call(null,{config:a[0],...a[25],echartsOptions:a[9],seriesOptions:a[10],seriesColors:a[19],queryID:a[1],evidenceChartTitle:a[2],theme:a[20],backgroundColor:a[21].colors["base-100"]})},d(a){a&&_(r),e=!1,t()}}}function En(n){let r,s,e,t,a,l,i,c,v,C,I=!n[16]&&kr(n);e=new vn({props:{config:n[0],height:n[3],width:n[4],copying:n[15],printing:n[16],echartsOptions:n[9],seriesOptions:n[10],seriesColors:n[18]}});let E=(n[7]||n[8])&&vr(n),j=n[11]&&!n[16]&&Cr(n),D=n[14]&&Tr(n);return{c(){r=O("div"),I&&I.c(),s=F(),z(e.$$.fragment),t=F(),E&&E.c(),a=F(),j&&j.c(),l=F(),D&&D.c(),i=_a(),this.h()},l($){r=R($,"DIV",{role:!0,class:!0});var g=K(r);I&&I.l(g),s=T(g),P(e.$$.fragment,g),t=T(g),E&&E.l(g),a=T(g),j&&j.l(g),g.forEach(_),l=T($),D&&D.l($),i=_a(),this.h()},h(){x(r,"role","none"),x(r,"class","chart-container mt-2 mb-3 svelte-19r8f8")},m($,g){m($,r,g),I&&I.m(r,null),M(r,s),U(e,r,null),M(r,t),E&&E.m(r,null),M(r,a),j&&j.m(r,null),m($,l,g),D&&D.m($,g),m($,i,g),c=!0,v||(C=[$a(window,"copy",n[27]),$a(window,"beforeprint",n[28]),$a(window,"afterprint",n[29]),$a(window,"export-beforeprint",n[30]),$a(window,"export-afterprint",n[31]),$a(r,"mouseenter",n[33]),$a(r,"mouseleave",n[34])],v=!0)},p($,g){$[16]?I&&(ue(),b(I,1,1,()=>{I=null}),fe()):I?(I.p($,g),g[0]&65536&&u(I,1)):(I=kr($),I.c(),u(I,1),I.m(r,s));const q={};g[0]&1&&(q.config=$[0]),g[0]&8&&(q.height=$[3]),g[0]&16&&(q.width=$[4]),g[0]&32768&&(q.copying=$[15]),g[0]&65536&&(q.printing=$[16]),g[0]&512&&(q.echartsOptions=$[9]),g[0]&1024&&(q.seriesOptions=$[10]),g[0]&262144&&(q.seriesColors=$[18]),e.$set(q),$[7]||$[8]?E?(E.p($,g),g[0]&384&&u(E,1)):(E=vr($),E.c(),u(E,1),E.m(r,a)):E&&(ue(),b(E,1,1,()=>{E=null}),fe()),$[11]&&!$[16]?j?(j.p($,g),g[0]&67584&&u(j,1)):(j=Cr($),j.c(),u(j,1),j.m(r,null)):j&&(ue(),b(j,1,1,()=>{j=null}),fe()),$[14]?D?D.p($,g):(D=Tr($),D.c(),D.m(i.parentNode,i)):D&&(D.d(1),D=null)},i($){c||(u(I),u(e.$$.fragment,$),u(E),u(j),c=!0)},o($){b(I),b(e.$$.fragment,$),b(E),b(j),c=!1},d($){$&&(_(r),_(l),_(i)),I&&I.d(),V(e),E&&E.d(),j&&j.d(),D&&D.d($),v=!1,dr(C)}}}function Rn(n,r,s){let e;const t=["config","queryID","evidenceChartTitle","height","width","data","renderer","downloadableData","downloadableImage","echartsOptions","seriesOptions","printEchartsConfig","seriesColors","connectGroup","xAxisLabelOverflow"];let a=br(r,t),l,i=na,c=()=>(i(),i=cs(e,L=>s(19,l=L)),e),v,C;n.$$.on_destroy.push(()=>i());const{activeAppearance:I,theme:E,resolveColorsObject:j}=us();vt(n,I,L=>s(20,v=L)),vt(n,E,L=>s(21,C=L));let{config:D=void 0}=r,{queryID:$=void 0}=r,{evidenceChartTitle:g=void 0}=r,{height:q="291px"}=r,{width:h="100%"}=r,{data:H}=r,{renderer:A=void 0}=r,{downloadableData:W=void 0}=r,{downloadableImage:d=void 0}=r,{echartsOptions:De=void 0}=r,{seriesOptions:Le=void 0}=r,{printEchartsConfig:ze}=r,{seriesColors:G=void 0}=r,{connectGroup:ae=void 0}=r,{xAxisLabelOverflow:Ae=void 0}=r;const we=qs();let ke=!1,ye=!1,Ue=!1,te=!1;const Z=()=>{s(15,ye=!0),Hs(),setTimeout(()=>{s(15,ye=!1)},0)},Ee=()=>s(16,Ue=!0),Be=()=>s(16,Ue=!1),ta=()=>s(16,Ue=!0),Ge=()=>s(16,Ue=!1),la=()=>{s(14,ke=!0),setTimeout(()=>{s(14,ke=!1)},0)},Re=()=>s(17,te=!0),$e=()=>s(17,te=!1);return n.$$set=L=>{r=pr(pr({},r),Ns(L)),s(25,a=br(r,t)),"config"in L&&s(0,D=L.config),"queryID"in L&&s(1,$=L.queryID),"evidenceChartTitle"in L&&s(2,g=L.evidenceChartTitle),"height"in L&&s(3,q=L.height),"width"in L&&s(4,h=L.width),"data"in L&&s(5,H=L.data),"renderer"in L&&s(6,A=L.renderer),"downloadableData"in L&&s(7,W=L.downloadableData),"downloadableImage"in L&&s(8,d=L.downloadableImage),"echartsOptions"in L&&s(9,De=L.echartsOptions),"seriesOptions"in L&&s(10,Le=L.seriesOptions),"printEchartsConfig"in L&&s(11,ze=L.printEchartsConfig),"seriesColors"in L&&s(26,G=L.seriesColors),"connectGroup"in L&&s(12,ae=L.connectGroup),"xAxisLabelOverflow"in L&&s(13,Ae=L.xAxisLabelOverflow)},n.$$.update=()=>{n.$$.dirty[0]&67108864&&c(s(18,e=j(G)))},[D,$,g,q,h,H,A,W,d,De,Le,ze,ae,Ae,ke,ye,Ue,te,e,l,v,C,I,E,we,a,G,Z,Ee,Be,ta,Ge,la,Re,$e]}class On extends Ht{constructor(r){super(),Lt(this,r,Rn,En,Nt,{config:0,queryID:1,evidenceChartTitle:2,height:3,width:4,data:5,renderer:6,downloadableData:7,downloadableImage:8,echartsOptions:9,seriesOptions:10,printEchartsConfig:11,seriesColors:26,connectGroup:12,xAxisLabelOverflow:13},null,[-1,-1])}}function Fr(n,r,s){const e=n.slice();return e[188]=r[s],e[190]=s,e}function Ir(n,r,s){const e=n.slice();return e[191]=r[s],e}function Dr(n,r,s){const e=n.slice();return e[191]=r[s],e}function Er(n,r,s){const e=n.slice();return e[196]=r[s][0],e[197]=r[s][1],e}function Rr(n,r,s){const e=n.slice();return e[200]=r[s],e}function Or(n,r,s){const e=n.slice();return e[196]=r[s][0],e[197]=r[s][1],e}function Sn(n){let r,s=Ie.title+"",e;return{c(){r=O("h1"),e=Ke(s),this.h()},l(t){r=R(t,"H1",{class:!0});var a=K(r);e=Je(a,s),a.forEach(_),this.h()},h(){x(r,"class","title")},m(t,a){m(t,r,a),M(r,e)},p:na,d(t){t&&_(r)}}}function qn(n){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:na,p:na,d:na}}function Nn(n){let r,s,e,t,a;return document.title=r=Ie.title,{c(){s=F(),e=O("meta"),t=F(),a=O("meta"),this.h()},l(l){s=T(l),e=R(l,"META",{property:!0,content:!0}),t=T(l),a=R(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i;x(e,"property","og:title"),x(e,"content",((l=Ie.og)==null?void 0:l.title)??Ie.title),x(a,"name","twitter:title"),x(a,"content",((i=Ie.og)==null?void 0:i.title)??Ie.title)},m(l,i){m(l,s,i),m(l,e,i),m(l,t,i),m(l,a,i)},p(l,i){i&0&&r!==(r=Ie.title)&&(document.title=r)},d(l){l&&(_(s),_(e),_(t),_(a))}}}function Hn(n){var a,l;let r,s,e=(Ie.description||((a=Ie.og)==null?void 0:a.description))&&Ln(),t=((l=Ie.og)==null?void 0:l.image)&&An();return{c(){e&&e.c(),r=F(),t&&t.c(),s=_a()},l(i){e&&e.l(i),r=T(i),t&&t.l(i),s=_a()},m(i,c){e&&e.m(i,c),m(i,r,c),t&&t.m(i,c),m(i,s,c)},p(i,c){var v,C;(Ie.description||(v=Ie.og)!=null&&v.description)&&e.p(i,c),(C=Ie.og)!=null&&C.image&&t.p(i,c)},d(i){i&&(_(r),_(s)),e&&e.d(i),t&&t.d(i)}}}function Ln(n){let r,s,e,t,a;return{c(){r=O("meta"),s=F(),e=O("meta"),t=F(),a=O("meta"),this.h()},l(l){r=R(l,"META",{name:!0,content:!0}),s=T(l),e=R(l,"META",{property:!0,content:!0}),t=T(l),a=R(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i,c;x(r,"name","description"),x(r,"content",Ie.description??((l=Ie.og)==null?void 0:l.description)),x(e,"property","og:description"),x(e,"content",((i=Ie.og)==null?void 0:i.description)??Ie.description),x(a,"name","twitter:description"),x(a,"content",((c=Ie.og)==null?void 0:c.description)??Ie.description)},m(l,i){m(l,r,i),m(l,s,i),m(l,e,i),m(l,t,i),m(l,a,i)},p:na,d(l){l&&(_(r),_(s),_(e),_(t),_(a))}}}function An(n){let r,s,e;return{c(){r=O("meta"),s=F(),e=O("meta"),this.h()},l(t){r=R(t,"META",{property:!0,content:!0}),s=T(t),e=R(t,"META",{name:!0,content:!0}),this.h()},h(){var t,a;x(r,"property","og:image"),x(r,"content",$r((t=Ie.og)==null?void 0:t.image)),x(e,"name","twitter:image"),x(e,"content",$r((a=Ie.og)==null?void 0:a.image))},m(t,a){m(t,r,a),m(t,s,a),m(t,e,a)},p:na,d(t){t&&(_(r),_(s),_(e))}}}function Sr(n){let r,s,e,t,a;function l(){return n[138](n[196])}return{c(){r=O("button"),s=Ke(n[197]),this.h()},l(i){r=R(i,"BUTTON",{style:!0});var c=K(r);s=Je(c,n[197]),c.forEach(_),this.h()},h(){x(r,"style",e="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[8]===n[196]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[8]===n[196]?"#ffffff":"#211030")+"; font-weight: "+(n[8]===n[196]?700:500))},m(i,c){m(i,r,c),M(r,s),t||(a=$a(r,"click",l),t=!0)},p(i,c){n=i,c[0]&256&&e!==(e="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[8]===n[196]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[8]===n[196]?"#ffffff":"#211030")+"; font-weight: "+(n[8]===n[196]?700:500))&&x(r,"style",e)},d(i){i&&_(r),t=!1,a()}}}function qr(n){let r,s;return r=new aa({props:{queryID:"g_fy",queryResult:n[12]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&4096&&(a.queryResult=e[12]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Nr(n){let r,s;return r=new aa({props:{queryID:"g_fund",queryResult:n[13]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&8192&&(a.queryResult=e[13]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Hr(n){let r,s;return r=new aa({props:{queryID:"g_agency",queryResult:n[14]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&16384&&(a.queryResult=e[14]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Mn(n){let r,s;return r=new jt({props:{value:"%",valueLabel:"All Years"}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p:na,i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Yn(n){let r,s;return r=new jt({props:{value:"%",valueLabel:"All Fund Types"}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p:na,i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Vn(n){let r,s;return r=new jt({props:{value:"%",valueLabel:"All Agencies"}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p:na,i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Un(n){let r,s,e,t,a,l;return r=new qt({props:{name:"f_fy",data:n[12],value:"fy",title:"Fiscal Year",defaultValue:"%",$$slots:{default:[Mn]},$$scope:{ctx:n}}}),e=new qt({props:{name:"f_fund",data:n[13],value:"fund_type",title:"Fund Type",defaultValue:"%",$$slots:{default:[Yn]},$$scope:{ctx:n}}}),a=new qt({props:{name:"f_agency",data:n[14],value:"agency_name",title:"Agency",defaultValue:"%",$$slots:{default:[Vn]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment),s=F(),z(e.$$.fragment),t=F(),z(a.$$.fragment)},l(i){P(r.$$.fragment,i),s=T(i),P(e.$$.fragment,i),t=T(i),P(a.$$.fragment,i)},m(i,c){U(r,i,c),m(i,s,c),U(e,i,c),m(i,t,c),U(a,i,c),l=!0},p(i,c){const v={};c[0]&4096&&(v.data=i[12]),c[6]&524288&&(v.$$scope={dirty:c,ctx:i}),r.$set(v);const C={};c[0]&8192&&(C.data=i[13]),c[6]&524288&&(C.$$scope={dirty:c,ctx:i}),e.$set(C);const I={};c[0]&16384&&(I.data=i[14]),c[6]&524288&&(I.$$scope={dirty:c,ctx:i}),a.$set(I)},i(i){l||(u(r.$$.fragment,i),u(e.$$.fragment,i),u(a.$$.fragment,i),l=!0)},o(i){b(r.$$.fragment,i),b(e.$$.fragment,i),b(a.$$.fragment,i),l=!1},d(i){i&&(_(s),_(t)),V(r,i),V(e,i),V(a,i)}}}function Pn(n){let r,s;return r=new dn({props:{cols:"3",$$slots:{default:[Un]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&28672|t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function zn(n){let r,s,e,t;return r=new jt({props:{value:"trend",valueLabel:"Trend Over Years"}}),e=new jt({props:{value:"latest",valueLabel:"Latest Year Snapshot"}}),{c(){z(r.$$.fragment),s=F(),z(e.$$.fragment)},l(a){P(r.$$.fragment,a),s=T(a),P(e.$$.fragment,a)},m(a,l){U(r,a,l),m(a,s,l),U(e,a,l),t=!0},p:na,i(a){t||(u(r.$$.fragment,a),u(e.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),b(e.$$.fragment,a),t=!1},d(a){a&&_(s),V(r,a),V(e,a)}}}function Lr(n){let r,s;return r=new aa({props:{queryID:"filtered",queryResult:n[15]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&32768&&(a.queryResult=e[15]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Ar(n){let r,s;return r=new aa({props:{queryID:"yearly_rollup",queryResult:n[16]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&65536&&(a.queryResult=e[16]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Mr(n){let r,s;return r=new aa({props:{queryID:"scope_meta",queryResult:n[17]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&131072&&(a.queryResult=e[17]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Yr(n){let r,s;return r=new aa({props:{queryID:"filtered_latest",queryResult:n[18]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&262144&&(a.queryResult=e[18]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Vr(n){let r,s;return r=new aa({props:{queryID:"filtered_prior",queryResult:n[19]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&524288&&(a.queryResult=e[19]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Ur(n){let r,s;return r=new aa({props:{queryID:"overview",queryResult:n[0]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&1&&(a.queryResult=e[0]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Pr(n){let r,s;return r=new aa({props:{queryID:"yearly",queryResult:n[1]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&2&&(a.queryResult=e[1]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function zr(n){let r,s;return r=new aa({props:{queryID:"yoy_detail",queryResult:n[20]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&1048576&&(a.queryResult=e[20]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Br(n){let r,s;return r=new aa({props:{queryID:"fiscal_overview_cagr",queryResult:n[2]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&4&&(a.queryResult=e[2]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Gr(n){let r,s;return r=new aa({props:{queryID:"snapshot_towers",queryResult:n[21]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&2097152&&(a.queryResult=e[21]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Wr(n){let r,s;return r=new aa({props:{queryID:"snapshot_subprograms",queryResult:n[22]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&4194304&&(a.queryResult=e[22]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Xr(n){let r,s;return r=new aa({props:{queryID:"tower_snapshot",queryResult:n[23]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&8388608&&(a.queryResult=e[23]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Qr(n){let r,s;return r=new aa({props:{queryID:"agency_movers",queryResult:n[24]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&16777216&&(a.queryResult=e[24]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Jr(n){let r,s;return r=new aa({props:{queryID:"agency_latest",queryResult:n[25]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&33554432&&(a.queryResult=e[25]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Kr(n){let r,s;return r=new aa({props:{queryID:"top_towers_trend",queryResult:n[3]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&8&&(a.queryResult=e[3]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Zr(n){let r,s;return r=new aa({props:{queryID:"tower_trend",queryResult:n[4]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&16&&(a.queryResult=e[4]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function es(n){let r,s;return r=new aa({props:{queryID:"top_agencies_trend",queryResult:n[5]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&32&&(a.queryResult=e[5]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function as(n){let r,s;return r=new aa({props:{queryID:"agency_trend_lines",queryResult:n[6]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&64&&(a.queryResult=e[6]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function ts(n){let r,s;return r=new aa({props:{queryID:"agency_drill",queryResult:n[7]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&128&&(a.queryResult=e[7]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function rs(n){var ma,va,Ra,Na;let r,s,e,t,a=(((va=(ma=n[0])==null?void 0:ma[0])==null?void 0:va.max_year_label)??"N/A")+"",l,i,c,v,C=n[139]()+"",I,E,j,D,$="YoY Change",g,q,h=n[140]()+"",H,A,W,d,De=((Na=(Ra=n[0])==null?void 0:Ra[0])==null?void 0:Na.yoy_pct)!=null?(n[0][0].yoy_pct>=0?"+":"")+n[0][0].yoy_pct+"%":"—",Le,ze,G,ae,Ae,we,ke,ye='<a href="#top-it-towers-by-spend--latest-year">Top IT Towers by Spend — Latest Year</a>',Ue,te,Z,Ee,Be,ta,Ge,la='<a href="#top-it-programs-by-spend--latest-year">Top IT Programs by Spend — Latest Year</a>',Re,$e,L,Pe,ca,Ze,he,ya='<a href="#it-tower-breakdown--latest-year">IT Tower Breakdown — Latest Year</a>',We,Se,w,S,Y,oe,re,ve='<a href="#it-spend-changes--year-over-year">IT Spend Changes — Year over Year</a>',ee,ce,ge,le,xe,Oe,qe,me,je='<a href="#agency-it-spend-drill-down--click-a-row-to-open-the-agency-page">Agency IT Spend Drill-Down — Click a row to open the Agency page</a>',be,se,ie,Ce,de;const Te=[Gn,Bn],_e=[];function Ne(p,N){var Fe;return((Fe=p[21])==null?void 0:Fe.length)>0?0:1}te=Ne(n),Z=_e[te]=Te[te](n);const Ye=[Qn,Xn],pe=[];function Ve(p,N){var Fe;return((Fe=p[22])==null?void 0:Fe.length)>0?0:1}$e=Ve(n),L=pe[$e]=Ye[$e](n);const o=[Zn,Kn],y=[];function ra(p,N){var Fe;return((Fe=p[23])==null?void 0:Fe.length)>0?0:1}Se=ra(n),w=y[Se]=o[Se](n),ce=new qa({props:{status:"info",$$slots:{default:[ao]},$$scope:{ctx:n}}}),le=new rn({props:{data:n[24],labelField:"agency_name",title:"Biggest IT spend changes vs prior year",height:"520px",limit:10}});const Xe=[ro,to],Me=[];function pa(p,N){var Fe;return((Fe=p[25])==null?void 0:Fe.length)>0?0:1}return se=pa(n),ie=Me[se]=Xe[se](n),{c(){r=O("div"),s=O("div"),e=O("div"),t=Ke("Latest Year ("),l=Ke(a),i=Ke(")"),c=F(),v=O("div"),I=Ke(C),E=F(),j=O("div"),D=O("div"),D.textContent=$,g=F(),q=O("div"),H=Ke(h),W=F(),d=O("div"),Le=Ke(De),ae=F(),Ae=O("hr"),we=F(),ke=O("h2"),ke.innerHTML=ye,Ue=F(),Z.c(),Ee=F(),Be=O("hr"),ta=F(),Ge=O("h2"),Ge.innerHTML=la,Re=F(),L.c(),Pe=F(),ca=O("hr"),Ze=F(),he=O("h2"),he.innerHTML=ya,We=F(),w.c(),S=F(),Y=O("hr"),oe=F(),re=O("h2"),re.innerHTML=ve,ee=F(),z(ce.$$.fragment),ge=F(),z(le.$$.fragment),xe=F(),Oe=O("hr"),qe=F(),me=O("h2"),me.innerHTML=je,be=F(),ie.c(),Ce=_a(),this.h()},l(p){r=R(p,"DIV",{style:!0});var N=K(r);s=R(N,"DIV",{style:!0});var Fe=K(s);e=R(Fe,"DIV",{style:!0});var oa=K(e);t=Je(oa,"Latest Year ("),l=Je(oa,a),i=Je(oa,")"),oa.forEach(_),c=T(Fe),v=R(Fe,"DIV",{style:!0});var fa=K(v);I=Je(fa,C),fa.forEach(_),Fe.forEach(_),E=T(N),j=R(N,"DIV",{style:!0});var ua=K(j);D=R(ua,"DIV",{style:!0,"data-svelte-h":!0}),ga(D)!=="svelte-14nbeix"&&(D.textContent=$),g=T(ua),q=R(ua,"DIV",{style:!0});var Da=K(q);H=Je(Da,h),Da.forEach(_),W=T(ua),d=R(ua,"DIV",{style:!0});var xa=K(d);Le=Je(xa,De),xa.forEach(_),ua.forEach(_),N.forEach(_),ae=T(p),Ae=R(p,"HR",{class:!0}),we=T(p),ke=R(p,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(ke)!=="svelte-rbbuzr"&&(ke.innerHTML=ye),Ue=T(p),Z.l(p),Ee=T(p),Be=R(p,"HR",{class:!0}),ta=T(p),Ge=R(p,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(Ge)!=="svelte-1wnyu8w"&&(Ge.innerHTML=la),Re=T(p),L.l(p),Pe=T(p),ca=R(p,"HR",{class:!0}),Ze=T(p),he=R(p,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(he)!=="svelte-8cw7gl"&&(he.innerHTML=ya),We=T(p),w.l(p),S=T(p),Y=R(p,"HR",{class:!0}),oe=T(p),re=R(p,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(re)!=="svelte-zmr6z2"&&(re.innerHTML=ve),ee=T(p),P(ce.$$.fragment,p),ge=T(p),P(le.$$.fragment,p),xe=T(p),Oe=R(p,"HR",{class:!0}),qe=T(p),me=R(p,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(me)!=="svelte-1618z4l"&&(me.innerHTML=je),be=T(p),ie.l(p),Ce=_a(),this.h()},h(){var p,N,Fe,oa,fa,ua;f(e,"font-size","11px"),f(e,"font-weight","500"),f(e,"color","#6B7280"),f(e,"text-transform","uppercase"),f(e,"letter-spacing",".05em"),f(e,"margin-bottom","6px"),f(v,"font-size","1.8rem"),f(v,"font-weight","700"),f(v,"color","#231F20"),f(s,"background","var(--nxt-surface)"),f(s,"border","1px solid var(--nxt-border)"),f(s,"border-left","4px solid #C8122C"),f(s,"border-radius","8px"),f(s,"padding","16px 28px"),f(s,"min-width","200px"),f(s,"text-align","center"),f(D,"font-size","11px"),f(D,"font-weight","500"),f(D,"color","#6B7280"),f(D,"text-transform","uppercase"),f(D,"letter-spacing",".05em"),f(D,"margin-bottom","6px"),x(q,"style",A="font-size:1.8rem; font-weight:700; color:"+((((N=(p=n[0])==null?void 0:p[0])==null?void 0:N.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),x(d,"style",ze="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((oa=(Fe=n[0])==null?void 0:Fe[0])==null?void 0:oa.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),x(j,"style",G="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((ua=(fa=n[0])==null?void 0:fa[0])==null?void 0:ua.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"),f(r,"display","flex"),f(r,"justify-content","center"),f(r,"gap","16px"),f(r,"flex-wrap","wrap"),f(r,"margin","16px 0"),x(Ae,"class","markdown"),x(ke,"class","markdown"),x(ke,"id","top-it-towers-by-spend--latest-year"),x(Be,"class","markdown"),x(Ge,"class","markdown"),x(Ge,"id","top-it-programs-by-spend--latest-year"),x(ca,"class","markdown"),x(he,"class","markdown"),x(he,"id","it-tower-breakdown--latest-year"),x(Y,"class","markdown"),x(re,"class","markdown"),x(re,"id","it-spend-changes--year-over-year"),x(Oe,"class","markdown"),x(me,"class","markdown"),x(me,"id","agency-it-spend-drill-down--click-a-row-to-open-the-agency-page")},m(p,N){m(p,r,N),M(r,s),M(s,e),M(e,t),M(e,l),M(e,i),M(s,c),M(s,v),M(v,I),M(r,E),M(r,j),M(j,D),M(j,g),M(j,q),M(q,H),M(j,W),M(j,d),M(d,Le),m(p,ae,N),m(p,Ae,N),m(p,we,N),m(p,ke,N),m(p,Ue,N),_e[te].m(p,N),m(p,Ee,N),m(p,Be,N),m(p,ta,N),m(p,Ge,N),m(p,Re,N),pe[$e].m(p,N),m(p,Pe,N),m(p,ca,N),m(p,Ze,N),m(p,he,N),m(p,We,N),y[Se].m(p,N),m(p,S,N),m(p,Y,N),m(p,oe,N),m(p,re,N),m(p,ee,N),U(ce,p,N),m(p,ge,N),U(le,p,N),m(p,xe,N),m(p,Oe,N),m(p,qe,N),m(p,me,N),m(p,be,N),Me[se].m(p,N),m(p,Ce,N),de=!0},p(p,N){var ja,Ca,Oa,Ta,st,nt,Fa,Ia,Sa,ot;(!de||N[0]&1)&&a!==(a=(((Ca=(ja=p[0])==null?void 0:ja[0])==null?void 0:Ca.max_year_label)??"N/A")+"")&&Ea(l,a),(!de||N[0]&1)&&C!==(C=p[139]()+"")&&Ea(I,C),(!de||N[0]&1)&&h!==(h=p[140]()+"")&&Ea(H,h),(!de||N[0]&1&&A!==(A="font-size:1.8rem; font-weight:700; color:"+((((Ta=(Oa=p[0])==null?void 0:Oa[0])==null?void 0:Ta.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&x(q,"style",A),(!de||N[0]&1)&&De!==(De=((nt=(st=p[0])==null?void 0:st[0])==null?void 0:nt.yoy_pct)!=null?(p[0][0].yoy_pct>=0?"+":"")+p[0][0].yoy_pct+"%":"—")&&Ea(Le,De),(!de||N[0]&1&&ze!==(ze="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((Ia=(Fa=p[0])==null?void 0:Fa[0])==null?void 0:Ia.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&x(d,"style",ze),(!de||N[0]&1&&G!==(G="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((ot=(Sa=p[0])==null?void 0:Sa[0])==null?void 0:ot.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"))&&x(j,"style",G);let Fe=te;te=Ne(p),te===Fe?_e[te].p(p,N):(ue(),b(_e[Fe],1,1,()=>{_e[Fe]=null}),fe(),Z=_e[te],Z?Z.p(p,N):(Z=_e[te]=Te[te](p),Z.c()),u(Z,1),Z.m(Ee.parentNode,Ee));let oa=$e;$e=Ve(p),$e===oa?pe[$e].p(p,N):(ue(),b(pe[oa],1,1,()=>{pe[oa]=null}),fe(),L=pe[$e],L?L.p(p,N):(L=pe[$e]=Ye[$e](p),L.c()),u(L,1),L.m(Pe.parentNode,Pe));let fa=Se;Se=ra(p),Se===fa?y[Se].p(p,N):(ue(),b(y[fa],1,1,()=>{y[fa]=null}),fe(),w=y[Se],w?w.p(p,N):(w=y[Se]=o[Se](p),w.c()),u(w,1),w.m(S.parentNode,S));const ua={};N[6]&524288&&(ua.$$scope={dirty:N,ctx:p}),ce.$set(ua);const Da={};N[0]&16777216&&(Da.data=p[24]),le.$set(Da);let xa=se;se=pa(p),se===xa?Me[se].p(p,N):(ue(),b(Me[xa],1,1,()=>{Me[xa]=null}),fe(),ie=Me[se],ie?ie.p(p,N):(ie=Me[se]=Xe[se](p),ie.c()),u(ie,1),ie.m(Ce.parentNode,Ce))},i(p){de||(u(Z),u(L),u(w),u(ce.$$.fragment,p),u(le.$$.fragment,p),u(ie),de=!0)},o(p){b(Z),b(L),b(w),b(ce.$$.fragment,p),b(le.$$.fragment,p),b(ie),de=!1},d(p){p&&(_(r),_(ae),_(Ae),_(we),_(ke),_(Ue),_(Ee),_(Be),_(ta),_(Ge),_(Re),_(Pe),_(ca),_(Ze),_(he),_(We),_(S),_(Y),_(oe),_(re),_(ee),_(ge),_(xe),_(Oe),_(qe),_(me),_(be),_(Ce)),_e[te].d(p),pe[$e].d(p),y[Se].d(p),V(ce,p),V(le,p),Me[se].d(p)}}}function Bn(n){let r,s;return r=new qa({props:{status:"warning",$$slots:{default:[Wn]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Gn(n){let r,s,e,t;return r=new ys({props:{data:n[21],entityLabel:"IT towers"}}),e=new ms({props:{data:n[21],title:"",barField:"spend",labelField:"it_tower",pctField:"pct_of_total",cumulativeField:"cumulative",totalField:"grand_total",height:"420px"}}),{c(){z(r.$$.fragment),s=F(),z(e.$$.fragment)},l(a){P(r.$$.fragment,a),s=T(a),P(e.$$.fragment,a)},m(a,l){U(r,a,l),m(a,s,l),U(e,a,l),t=!0},p(a,l){const i={};l[0]&2097152&&(i.data=a[21]),r.$set(i);const c={};l[0]&2097152&&(c.data=a[21]),e.$set(c)},i(a){t||(u(r.$$.fragment,a),u(e.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),b(e.$$.fragment,a),t=!1},d(a){a&&_(s),V(r,a),V(e,a)}}}function Wn(n){let r;return{c(){r=Ke("No IT tower spend data available for this filter selection.")},l(s){r=Je(s,"No IT tower spend data available for this filter selection.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function Xn(n){let r,s;return r=new qa({props:{status:"warning",$$slots:{default:[Jn]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Qn(n){let r,s,e,t;return r=new ys({props:{data:n[22],entityLabel:"IT programs"}}),e=new ms({props:{data:n[22],title:"",barField:"spend",labelField:"subprogram_name",pctField:"pct_of_total",cumulativeField:"cumulative",totalField:"grand_total",height:"420px"}}),{c(){z(r.$$.fragment),s=F(),z(e.$$.fragment)},l(a){P(r.$$.fragment,a),s=T(a),P(e.$$.fragment,a)},m(a,l){U(r,a,l),m(a,s,l),U(e,a,l),t=!0},p(a,l){const i={};l[0]&4194304&&(i.data=a[22]),r.$set(i);const c={};l[0]&4194304&&(c.data=a[22]),e.$set(c)},i(a){t||(u(r.$$.fragment,a),u(e.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),b(e.$$.fragment,a),t=!1},d(a){a&&_(s),V(r,a),V(e,a)}}}function Jn(n){let r;return{c(){r=Ke("No IT program spend data available for this filter selection.")},l(s){r=Je(s,"No IT program spend data available for this filter selection.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function Kn(n){let r,s;return r=new qa({props:{status:"warning",$$slots:{default:[eo]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function Zn(n){let r,s;return r=new gs({props:{data:n[23],columns:n[28],search:!0,defaultSort:"latest_spend",defaultDir:-1}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&8388608&&(a.data=e[23]),t[0]&268435456&&(a.columns=e[28]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function eo(n){let r;return{c(){r=Ke("No IT tower breakdown data available for this filter selection.")},l(s){r=Je(s,"No IT tower breakdown data available for this filter selection.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function ao(n){let r;return{c(){r=Ke("Agencies sorted by absolute dollar change in IT spend from prior year.")},l(s){r=Je(s,"Agencies sorted by absolute dollar change in IT spend from prior year.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function to(n){let r,s;return r=new qa({props:{status:"warning",$$slots:{default:[so]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function ro(n){let r,s;return r=new gs({props:{data:n[25],columns:n[29],linkField:"agency_link",search:!0,defaultSort:"latest_spend",defaultDir:-1}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&33554432&&(a.data=e[25]),t[0]&536870912&&(a.columns=e[29]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function so(n){let r;return{c(){r=Ke("No agency IT spend data available for this filter selection.")},l(s){r=Je(s,"No agency IT spend data available for this filter selection.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function ss(n){let r,s,e,t='<a href="#fiscal-overview">Fiscal Overview</a>',a,l,i,c,v,C,I='<a href="#it-tower-composition-over-time">IT Tower Composition Over Time</a>',E,j,D,$,g,q,h,H='<a href="#top-it-agencies--trend-over-time">Top IT Agencies — Trend Over Time</a>',A,W,d,De,Le,ze,G,ae='<a href="#agency-it-spending-by-year--click-on-agency-to-drill-to-its-specific-page">Agency IT Spending by Year — Click on Agency to drill to its specific page</a>',Ae,we,ke,ye,Ue,te,Z,Ee,Be,ta,Ge;l=new sn({props:{yearly:n[1],yoyDetail:n[20],fiscalOverviewCagr:n[2],cagrPct:n[33],chartHeight:go}});const la=[oo,no],Re=[];function $e(w,S){var Y;return((Y=w[4])==null?void 0:Y.length)>0?0:1}j=$e(n),D=Re[j]=la[j](n);const L=[_o,io],Pe=[];function ca(w,S){var Y;return((Y=w[6])==null?void 0:Y.length)>0?0:1}W=ca(n),d=Pe[W]=L[W](n);let Ze=ha([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]),he=[];for(let w=0;w<3;w+=1)he[w]=os(Er(n,Ze,w));const ya=[fo,uo],We=[];function Se(w,S){var Y;return((Y=w[27])==null?void 0:Y.length)>0?0:1}return te=Se(n),Z=We[te]=ya[te](n),{c(){r=O("hr"),s=F(),e=O("h2"),e.innerHTML=t,a=F(),z(l.$$.fragment),i=F(),c=O("hr"),v=F(),C=O("h2"),C.innerHTML=I,E=F(),D.c(),$=F(),g=O("hr"),q=F(),h=O("h2"),h.innerHTML=H,A=F(),d.c(),De=F(),Le=O("hr"),ze=F(),G=O("h2"),G.innerHTML=ae,Ae=F(),we=O("div");for(let w=0;w<3;w+=1)he[w].c();ke=F(),ye=O("input"),Ue=F(),Z.c(),Ee=_a(),this.h()},l(w){r=R(w,"HR",{class:!0}),s=T(w),e=R(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(e)!=="svelte-1d7gdnx"&&(e.innerHTML=t),a=T(w),P(l.$$.fragment,w),i=T(w),c=R(w,"HR",{class:!0}),v=T(w),C=R(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(C)!=="svelte-1xp439f"&&(C.innerHTML=I),E=T(w),D.l(w),$=T(w),g=R(w,"HR",{class:!0}),q=T(w),h=R(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(h)!=="svelte-1qhll8b"&&(h.innerHTML=H),A=T(w),d.l(w),De=T(w),Le=R(w,"HR",{class:!0}),ze=T(w),G=R(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ga(G)!=="svelte-e4uu60"&&(G.innerHTML=ae),Ae=T(w),we=R(w,"DIV",{style:!0});var S=K(we);for(let Y=0;Y<3;Y+=1)he[Y].l(S);S.forEach(_),ke=T(w),ye=R(w,"INPUT",{placeholder:!0,style:!0}),Ue=T(w),Z.l(w),Ee=_a(),this.h()},h(){x(r,"class","markdown"),x(e,"class","markdown"),x(e,"id","fiscal-overview"),x(c,"class","markdown"),x(C,"class","markdown"),x(C,"id","it-tower-composition-over-time"),x(g,"class","markdown"),x(h,"class","markdown"),x(h,"id","top-it-agencies--trend-over-time"),x(Le,"class","markdown"),x(G,"class","markdown"),x(G,"id","agency-it-spending-by-year--click-on-agency-to-drill-to-its-specific-page"),f(we,"display","flex"),f(we,"gap","8px"),f(we,"margin","8px 0 14px 0"),x(ye,"placeholder","Search agencies..."),f(ye,"border","1px solid var(--nxt-border)"),f(ye,"border-radius","8px"),f(ye,"padding","8px 12px"),f(ye,"font-size","0.9rem"),f(ye,"width","280px"),f(ye,"margin-bottom","12px"),f(ye,"background","var(--nxt-surface)"),f(ye,"color","var(--nxt-text)")},m(w,S){m(w,r,S),m(w,s,S),m(w,e,S),m(w,a,S),U(l,w,S),m(w,i,S),m(w,c,S),m(w,v,S),m(w,C,S),m(w,E,S),Re[j].m(w,S),m(w,$,S),m(w,g,S),m(w,q,S),m(w,h,S),m(w,A,S),Pe[W].m(w,S),m(w,De,S),m(w,Le,S),m(w,ze,S),m(w,G,S),m(w,Ae,S),m(w,we,S);for(let Y=0;Y<3;Y+=1)he[Y]&&he[Y].m(we,null);m(w,ke,S),m(w,ye,S),wr(ye,n[10]),m(w,Ue,S),We[te].m(w,S),m(w,Ee,S),Be=!0,ta||(Ge=$a(ye,"input",n[146]),ta=!0)},p(w,S){const Y={};S[0]&2&&(Y.yearly=w[1]),S[0]&1048576&&(Y.yoyDetail=w[20]),S[0]&4&&(Y.fiscalOverviewCagr=w[2]),S[1]&4&&(Y.cagrPct=w[33]),l.$set(Y);let oe=j;j=$e(w),j===oe?Re[j].p(w,S):(ue(),b(Re[oe],1,1,()=>{Re[oe]=null}),fe(),D=Re[j],D?D.p(w,S):(D=Re[j]=la[j](w),D.c()),u(D,1),D.m($.parentNode,$));let re=W;if(W=ca(w),W===re?Pe[W].p(w,S):(ue(),b(Pe[re],1,1,()=>{Pe[re]=null}),fe(),d=Pe[W],d?d.p(w,S):(d=Pe[W]=L[W](w),d.c()),u(d,1),d.m(De.parentNode,De)),S[0]&512){Ze=ha([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]);let ee;for(ee=0;ee<3;ee+=1){const ce=Er(w,Ze,ee);he[ee]?he[ee].p(ce,S):(he[ee]=os(ce),he[ee].c(),he[ee].m(we,null))}for(;ee<3;ee+=1)he[ee].d(1)}S[0]&1024&&ye.value!==w[10]&&wr(ye,w[10]);let ve=te;te=Se(w),te===ve?We[te].p(w,S):(ue(),b(We[ve],1,1,()=>{We[ve]=null}),fe(),Z=We[te],Z?Z.p(w,S):(Z=We[te]=ya[te](w),Z.c()),u(Z,1),Z.m(Ee.parentNode,Ee))},i(w){Be||(u(l.$$.fragment,w),u(D),u(d),u(Z),Be=!0)},o(w){b(l.$$.fragment,w),b(D),b(d),b(Z),Be=!1},d(w){w&&(_(r),_(s),_(e),_(a),_(i),_(c),_(v),_(C),_(E),_($),_(g),_(q),_(h),_(A),_(De),_(Le),_(ze),_(G),_(Ae),_(we),_(ke),_(ye),_(Ue),_(Ee)),V(l,w),Re[j].d(w),Pe[W].d(w),ct(he,w),We[te].d(w),ta=!1,Ge()}}}function no(n){let r,s;return r=new qa({props:{status:"warning",$$slots:{default:[lo]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function oo(n){let r,s,e,t,a=ha(n[3]),l=[];for(let i=0;i<a.length;i+=1)l[i]=ns(Rr(n,a,i));return e=new On({props:{height:"480px",config:{tooltip:{trigger:"item",formatter:n[142]},grid:{left:56,right:24,top:20,bottom:40},xAxis:{type:"category",data:n[32]},yAxis:{type:"value",axisLabel:{formatter:n[143]},splitLine:{lineStyle:{color:"#D9DDE3"}}},series:n[3].map(n[144])}}}),{c(){r=O("div");for(let i=0;i<l.length;i+=1)l[i].c();s=F(),z(e.$$.fragment),this.h()},l(i){r=R(i,"DIV",{style:!0});var c=K(r);for(let v=0;v<l.length;v+=1)l[v].l(c);c.forEach(_),s=T(i),P(e.$$.fragment,i),this.h()},h(){f(r,"display","flex"),f(r,"flex-wrap","wrap"),f(r,"gap","8px"),f(r,"margin","8px 0 14px 0")},m(i,c){m(i,r,c);for(let v=0;v<l.length;v+=1)l[v]&&l[v].m(r,null);m(i,s,c),U(e,i,c),t=!0},p(i,c){if(c[0]&67108872|c[1]&257){a=ha(i[3]);let C;for(C=0;C<a.length;C+=1){const I=Rr(i,a,C);l[C]?l[C].p(I,c):(l[C]=ns(I),l[C].c(),l[C].m(r,null))}for(;C<l.length;C+=1)l[C].d(1);l.length=a.length}const v={};c[0]&67108888|c[1]&3&&(v.config={tooltip:{trigger:"item",formatter:i[142]},grid:{left:56,right:24,top:20,bottom:40},xAxis:{type:"category",data:i[32]},yAxis:{type:"value",axisLabel:{formatter:i[143]},splitLine:{lineStyle:{color:"#D9DDE3"}}},series:i[3].map(i[144])}),e.$set(v)},i(i){t||(u(e.$$.fragment,i),t=!0)},o(i){b(e.$$.fragment,i),t=!1},d(i){i&&(_(r),_(s)),ct(l,i),V(e,i)}}}function lo(n){let r;return{c(){r=Ke("No IT tower trend data available for this filter selection.")},l(s){r=Je(s,"No IT tower trend data available for this filter selection.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function ns(n){let r,s,e,t,a,l=n[200].it_tower+"",i,c,v,C,I,E,j;function D(){return n[141](n[200])}return{c(){r=O("button"),s=O("span"),t=F(),a=O("span"),i=Ke(l),v=F(),this.h()},l($){r=R($,"BUTTON",{style:!0,"aria-pressed":!0});var g=K(r);s=R(g,"SPAN",{style:!0}),K(s).forEach(_),t=T(g),a=R(g,"SPAN",{style:!0});var q=K(a);i=Je(q,l),q.forEach(_),v=T(g),g.forEach(_),this.h()},h(){x(s,"style",e=`width:10px; height:10px; border-radius:50%; background: ${n[200].it_tower===n[31][0]?"#C8122C":n[200].it_tower===n[31][1]?"#FFC838":n[200].it_tower===n[31][2]?"#231F20":"#C9CED6"}; display:inline-block;`),x(a,"style",c=`color:${n[26]===n[200].it_tower?"#C8122C":"#231F20"}; font-weight:${n[26]===n[200].it_tower?700:500}`),x(r,"style",C=`border-radius:14px; padding:6px 10px; font-size:0.9rem; display:inline-flex; align-items:center; gap:8px; cursor:pointer; border: ${n[26]===n[200].it_tower?"2px solid #C8122C":"1px solid var(--nxt-border)"}; background: ${n[26]===n[200].it_tower?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)"}; box-shadow: ${n[26]===n[200].it_tower?"0 4px 10px rgba(200,20,44,0.08)":"none"}`),x(r,"aria-pressed",I=n[26]===n[200].it_tower)},m($,g){m($,r,g),M(r,s),M(r,t),M(r,a),M(a,i),M(r,v),E||(j=$a(r,"click",D),E=!0)},p($,g){n=$,g[0]&8|g[1]&1&&e!==(e=`width:10px; height:10px; border-radius:50%; background: ${n[200].it_tower===n[31][0]?"#C8122C":n[200].it_tower===n[31][1]?"#FFC838":n[200].it_tower===n[31][2]?"#231F20":"#C9CED6"}; display:inline-block;`)&&x(s,"style",e),g[0]&8&&l!==(l=n[200].it_tower+"")&&Ea(i,l),g[0]&67108872&&c!==(c=`color:${n[26]===n[200].it_tower?"#C8122C":"#231F20"}; font-weight:${n[26]===n[200].it_tower?700:500}`)&&x(a,"style",c),g[0]&67108872&&C!==(C=`border-radius:14px; padding:6px 10px; font-size:0.9rem; display:inline-flex; align-items:center; gap:8px; cursor:pointer; border: ${n[26]===n[200].it_tower?"2px solid #C8122C":"1px solid var(--nxt-border)"}; background: ${n[26]===n[200].it_tower?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)"}; box-shadow: ${n[26]===n[200].it_tower?"0 4px 10px rgba(200,20,44,0.08)":"none"}`)&&x(r,"style",C),g[0]&67108872&&I!==(I=n[26]===n[200].it_tower)&&x(r,"aria-pressed",I)},d($){$&&_(r),E=!1,j()}}}function io(n){let r,s;return r=new qa({props:{status:"warning",$$slots:{default:[co]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function _o(n){let r,s;return r=new nn({props:{agencies:n[5],trendLines:n[6],years:n[30],title:"Top IT Agencies by Spend — Trend Over Time",entityLabel:"agency",topN:5,height:"520px"}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[0]&32&&(a.agencies=e[5]),t[0]&64&&(a.trendLines=e[6]),t[0]&1073741824&&(a.years=e[30]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function co(n){let r;return{c(){r=Ke("No agency IT spend trend data available for this filter selection.")},l(s){r=Je(s,"No agency IT spend trend data available for this filter selection.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function os(n){let r,s,e,t,a;function l(){return n[145](n[196])}return{c(){r=O("button"),s=Ke(n[197]),this.h()},l(i){r=R(i,"BUTTON",{style:!0});var c=K(r);s=Je(c,n[197]),c.forEach(_),this.h()},h(){x(r,"style",e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[9]===n[196]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[9]===n[196]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[9]===n[196]?"#C8122C":"#231F20")+"; font-weight: "+(n[9]===n[196]?700:500))},m(i,c){m(i,r,c),M(r,s),t||(a=$a(r,"click",l),t=!0)},p(i,c){n=i,c[0]&512&&e!==(e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[9]===n[196]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[9]===n[196]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[9]===n[196]?"#C8122C":"#231F20")+"; font-weight: "+(n[9]===n[196]?700:500))&&x(r,"style",e)},d(i){i&&_(r),t=!1,a()}}}function uo(n){let r,s;return r=new qa({props:{status:"warning",$$slots:{default:[yo]},$$scope:{ctx:n}}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,t){U(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){V(r,e)}}}function fo(n){let r,s,e,t,a,l="Agency",i,c,v,C,I,E=ha(n[11]),j=[];for(let g=0;g<E.length;g+=1)j[g]=ls(Dr(n,E,g));let D=ha(n[27]),$=[];for(let g=0;g<D.length;g+=1)$[g]=_s(Fr(n,D,g));return{c(){r=O("div"),s=O("table"),e=O("thead"),t=O("tr"),a=O("th"),a.textContent=l,i=F();for(let g=0;g<j.length;g+=1)j[g].c();c=F(),v=O("th"),C=F(),I=O("tbody");for(let g=0;g<$.length;g+=1)$[g].c();this.h()},l(g){r=R(g,"DIV",{style:!0});var q=K(r);s=R(q,"TABLE",{style:!0});var h=K(s);e=R(h,"THEAD",{});var H=K(e);t=R(H,"TR",{style:!0});var A=K(t);a=R(A,"TH",{style:!0,"data-svelte-h":!0}),ga(a)!=="svelte-taluwf"&&(a.textContent=l),i=T(A);for(let d=0;d<j.length;d+=1)j[d].l(A);c=T(A),v=R(A,"TH",{style:!0}),K(v).forEach(_),A.forEach(_),H.forEach(_),C=T(h),I=R(h,"TBODY",{});var W=K(I);for(let d=0;d<$.length;d+=1)$[d].l(W);W.forEach(_),h.forEach(_),q.forEach(_),this.h()},h(){f(a,"text-align","left"),f(a,"padding","10px 14px"),f(a,"font-weight","700"),f(a,"color","#231F20"),f(a,"min-width","260px"),f(v,"padding","10px 8px"),f(t,"background","var(--nxt-pink)"),f(t,"border-bottom","2px solid #C8122C"),f(s,"width","100%"),f(s,"border-collapse","collapse"),f(s,"font-size","0.875rem"),f(r,"overflow-x","auto"),f(r,"border-radius","8px"),f(r,"border","1px solid var(--nxt-border)"),f(r,"background","var(--nxt-surface)")},m(g,q){m(g,r,q),M(r,s),M(s,e),M(e,t),M(t,a),M(t,i);for(let h=0;h<j.length;h+=1)j[h]&&j[h].m(t,null);M(t,c),M(t,v),M(s,C),M(s,I);for(let h=0;h<$.length;h+=1)$[h]&&$[h].m(I,null)},p(g,q){if(q[0]&2048){E=ha(g[11]);let h;for(h=0;h<E.length;h+=1){const H=Dr(g,E,h);j[h]?j[h].p(H,q):(j[h]=ls(H),j[h].c(),j[h].m(t,c))}for(;h<j.length;h+=1)j[h].d(1);j.length=E.length}if(q[0]&134219776|q[1]&192){D=ha(g[27]);let h;for(h=0;h<D.length;h+=1){const H=Fr(g,D,h);$[h]?$[h].p(H,q):($[h]=_s(H),$[h].c(),$[h].m(I,null))}for(;h<$.length;h+=1)$[h].d(1);$.length=D.length}},i:na,o:na,d(g){g&&_(r),ct(j,g),ct($,g)}}}function yo(n){let r;return{c(){r=Ke("No agency IT spend data available for this filter selection.")},l(s){r=Je(s,"No agency IT spend data available for this filter selection.")},m(s,e){m(s,r,e)},d(s){s&&_(r)}}}function ls(n){let r,s,e=n[191]+"",t;return{c(){r=O("th"),s=Ke("FY"),t=Ke(e),this.h()},l(a){r=R(a,"TH",{style:!0});var l=K(r);s=Je(l,"FY"),t=Je(l,e),l.forEach(_),this.h()},h(){f(r,"text-align","right"),f(r,"padding","10px 14px"),f(r,"font-weight","700"),f(r,"color","#231F20"),f(r,"white-space","nowrap")},m(a,l){m(a,r,l),M(r,s),M(r,t)},p(a,l){l[0]&2048&&e!==(e=a[191]+"")&&Ea(t,e)},d(a){a&&_(r)}}}function is(n){let r,s=(n[188]["FY"+n[191]]??0)>=1e9?"$"+(n[188]["FY"+n[191]]/1e9).toFixed(2)+"B":(n[188]["FY"+n[191]]??0)>=1e6?"$"+(n[188]["FY"+n[191]]/1e6).toFixed(1)+"M":(n[188]["FY"+n[191]]??0)>=1e3?"$"+(n[188]["FY"+n[191]]/1e3).toFixed(0)+"K":"-",e,t;return{c(){r=O("td"),e=Ke(s),this.h()},l(a){r=R(a,"TD",{style:!0});var l=K(r);e=Je(l,s),l.forEach(_),this.h()},h(){x(r,"style",t="text-align:right; padding:9px 14px; color:#231F20; "+n[38](n[188],n[191],n[11]))},m(a,l){m(a,r,l),M(r,e)},p(a,l){l[0]&134219776&&s!==(s=(a[188]["FY"+a[191]]??0)>=1e9?"$"+(a[188]["FY"+a[191]]/1e9).toFixed(2)+"B":(a[188]["FY"+a[191]]??0)>=1e6?"$"+(a[188]["FY"+a[191]]/1e6).toFixed(1)+"M":(a[188]["FY"+a[191]]??0)>=1e3?"$"+(a[188]["FY"+a[191]]/1e3).toFixed(0)+"K":"-")&&Ea(e,s),l[0]&134219776&&t!==(t="text-align:right; padding:9px 14px; color:#231F20; "+a[38](a[188],a[191],a[11]))&&x(r,"style",t)},d(a){a&&_(r)}}}function _s(n){let r,s,e=n[188].agency_name+"",t,a,l,i=n[37](n[188],n[11])+"",c,v,C,I="›",E,j,D,$=ha(n[11]),g=[];for(let h=0;h<$.length;h+=1)g[h]=is(Ir(n,$,h));function q(){return n[147](n[188])}return{c(){r=O("tr"),s=O("td"),t=Ke(e),a=F(),l=new Ps(!1),c=F();for(let h=0;h<g.length;h+=1)g[h].c();v=F(),C=O("td"),C.textContent=I,E=F(),this.h()},l(h){r=R(h,"TR",{style:!0,onmouseenter:!0,onmouseleave:!0});var H=K(r);s=R(H,"TD",{style:!0});var A=K(s);t=Je(A,e),a=T(A),l=Us(A,!1),A.forEach(_),c=T(H);for(let W=0;W<g.length;W+=1)g[W].l(H);v=T(H),C=R(H,"TD",{style:!0,"data-svelte-h":!0}),ga(C)!=="svelte-1eyp1xf"&&(C.textContent=I),E=T(H),H.forEach(_),this.h()},h(){l.a=null,f(s,"padding","9px 14px"),f(s,"color","#231F20"),f(s,"font-weight","500"),f(C,"padding","9px 8px"),f(C,"color","#C8122C"),f(C,"font-size","0.8rem"),x(r,"style","border-bottom:1px solid #F3F4F6; cursor:pointer; background:"+(n[190]%2===0?"var(--nxt-surface)":"#f7f2fc")+";"),x(r,"onmouseenter","this.style.background='var(--nxt-pink)'"),x(r,"onmouseleave","this.style.background="+(n[190]%2===0?"'var(--nxt-surface)'":"'#f7f2fc'"))},m(h,H){m(h,r,H),M(r,s),M(s,t),M(s,a),l.m(i,s),M(r,c);for(let A=0;A<g.length;A+=1)g[A]&&g[A].m(r,null);M(r,v),M(r,C),M(r,E),j||(D=$a(r,"click",q),j=!0)},p(h,H){if(n=h,H[0]&134217728&&e!==(e=n[188].agency_name+"")&&Ea(t,e),H[0]&134219776&&i!==(i=n[37](n[188],n[11])+"")&&l.p(i),H[0]&134219776|H[1]&128){$=ha(n[11]);let A;for(A=0;A<$.length;A+=1){const W=Ir(n,$,A);g[A]?g[A].p(W,H):(g[A]=is(W),g[A].c(),g[A].m(r,v))}for(;A<g.length;A+=1)g[A].d(1);g.length=$.length}},d(h){h&&_(r),ct(g,h),j=!1,D()}}}function mo(n){let r,s,e,t,a,l,i,c='<h1 style="color: #211030; font-size: 1.7rem; font-weight: 700; margin: 0;">💻 Technology View</h1> <p style="color: #6321a5; font-size: 0.95rem; margin: 4px 0 0 0;">IT Spending Analysis · TBM v5.0.1 Classification</p>',v,C,I,E,j,D,$,g,q,h,H,A,W,d,De,Le,ze,G,ae,Ae,we,ke,ye,Ue,te,Z,Ee,Be,ta,Ge,la,Re,$e,L,Pe,ca,Ze=typeof Ie<"u"&&Ie.title&&Ie.hide_title!==!0&&Sn();function he(o,y){return typeof Ie<"u"&&Ie.title?Nn:qn}let We=he()(n),Se=typeof Ie=="object"&&Hn(),w=ha([["latest","Latest Year"],["trend","Trend Over Years"]]),S=[];for(let o=0;o<2;o+=1)S[o]=Sr(Or(n,w,o));let Y=n[12]&&qr(n),oe=n[13]&&Nr(n),re=n[14]&&Hr(n);g=new _n({props:{title:"🔍 Filters",open:"false",$$slots:{default:[Pn]},$$scope:{ctx:n}}}),h=new tn({props:{title:"⚙ Filters",targetId:"page-filters"}}),W=new qt({props:{name:"f_view",title:"View",defaultValue:"trend",$$slots:{default:[zn]},$$scope:{ctx:n}}});let ve=n[15]&&Lr(n),ee=n[16]&&Ar(n),ce=n[17]&&Mr(n),ge=n[18]&&Yr(n),le=n[19]&&Vr(n),xe=n[0]&&Ur(n),Oe=n[1]&&Pr(n),qe=n[20]&&zr(n),me=n[2]&&Br(n),je=n[21]&&Gr(n),be=n[22]&&Wr(n),se=n[23]&&Xr(n),ie=n[24]&&Qr(n),Ce=n[25]&&Jr(n),de=n[3]&&Kr(n),Te=n[4]&&Zr(n),_e=n[5]&&es(n),Ne=n[6]&&as(n),Ye=n[7]&&ts(n),pe=n[34]=="latest"&&rs(n),Ve=n[34]=="trend"&&ss(n);return{c(){Ze&&Ze.c(),r=F(),We.c(),s=O("meta"),e=O("meta"),Se&&Se.c(),t=_a(),a=F(),l=O("div"),i=O("div"),i.innerHTML=c,v=F(),C=O("div");for(let o=0;o<2;o+=1)S[o].c();I=F(),Y&&Y.c(),E=F(),oe&&oe.c(),j=F(),re&&re.c(),D=F(),$=O("div"),z(g.$$.fragment),q=F(),z(h.$$.fragment),H=F(),A=O("div"),z(W.$$.fragment),d=F(),ve&&ve.c(),De=F(),ee&&ee.c(),Le=F(),ce&&ce.c(),ze=F(),ge&&ge.c(),G=F(),le&&le.c(),ae=F(),xe&&xe.c(),Ae=F(),Oe&&Oe.c(),we=F(),qe&&qe.c(),ke=F(),me&&me.c(),ye=F(),je&&je.c(),Ue=F(),be&&be.c(),te=F(),se&&se.c(),Z=F(),ie&&ie.c(),Ee=F(),Ce&&Ce.c(),Be=F(),de&&de.c(),ta=F(),Te&&Te.c(),Ge=F(),_e&&_e.c(),la=F(),Ne&&Ne.c(),Re=F(),Ye&&Ye.c(),$e=F(),pe&&pe.c(),L=F(),Ve&&Ve.c(),Pe=_a(),this.h()},l(o){Ze&&Ze.l(o),r=T(o);const y=Ls("svelte-2igo1p",document.head);We.l(y),s=R(y,"META",{name:!0,content:!0}),e=R(y,"META",{name:!0,content:!0}),Se&&Se.l(y),t=_a(),y.forEach(_),a=T(o),l=R(o,"DIV",{style:!0});var ra=K(l);i=R(ra,"DIV",{"data-svelte-h":!0}),ga(i)!=="svelte-1wrab87"&&(i.innerHTML=c),v=T(ra),C=R(ra,"DIV",{style:!0});var Xe=K(C);for(let ma=0;ma<2;ma+=1)S[ma].l(Xe);Xe.forEach(_),ra.forEach(_),I=T(o),Y&&Y.l(o),E=T(o),oe&&oe.l(o),j=T(o),re&&re.l(o),D=T(o),$=R(o,"DIV",{id:!0});var Me=K($);P(g.$$.fragment,Me),Me.forEach(_),q=T(o),P(h.$$.fragment,o),H=T(o),A=R(o,"DIV",{style:!0});var pa=K(A);P(W.$$.fragment,pa),pa.forEach(_),d=T(o),ve&&ve.l(o),De=T(o),ee&&ee.l(o),Le=T(o),ce&&ce.l(o),ze=T(o),ge&&ge.l(o),G=T(o),le&&le.l(o),ae=T(o),xe&&xe.l(o),Ae=T(o),Oe&&Oe.l(o),we=T(o),qe&&qe.l(o),ke=T(o),me&&me.l(o),ye=T(o),je&&je.l(o),Ue=T(o),be&&be.l(o),te=T(o),se&&se.l(o),Z=T(o),ie&&ie.l(o),Ee=T(o),Ce&&Ce.l(o),Be=T(o),de&&de.l(o),ta=T(o),Te&&Te.l(o),Ge=T(o),_e&&_e.l(o),la=T(o),Ne&&Ne.l(o),Re=T(o),Ye&&Ye.l(o),$e=T(o),pe&&pe.l(o),L=T(o),Ve&&Ve.l(o),Pe=_a(),this.h()},h(){x(s,"name","twitter:card"),x(s,"content","summary_large_image"),x(e,"name","twitter:site"),x(e,"content","@evidence_dev"),f(C,"display","flex"),f(C,"border","1px solid #c9a8f0"),f(C,"border-radius","6px"),f(C,"width","fit-content"),f(C,"overflow","hidden"),f(C,"background","rgba(255,255,255,0.5)"),f(l,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),f(l,"padding","28px 36px"),f(l,"border-radius","12px"),f(l,"border-bottom","4px solid #802cd7"),f(l,"margin-bottom","0"),f(l,"display","flex"),f(l,"align-items","flex-end"),f(l,"justify-content","space-between"),f(l,"gap","24px"),f(l,"flex-wrap","wrap"),x($,"id","page-filters"),f(A,"display","none")},m(o,y){Ze&&Ze.m(o,y),m(o,r,y),We.m(document.head,null),M(document.head,s),M(document.head,e),Se&&Se.m(document.head,null),M(document.head,t),m(o,a,y),m(o,l,y),M(l,i),M(l,v),M(l,C);for(let ra=0;ra<2;ra+=1)S[ra]&&S[ra].m(C,null);m(o,I,y),Y&&Y.m(o,y),m(o,E,y),oe&&oe.m(o,y),m(o,j,y),re&&re.m(o,y),m(o,D,y),m(o,$,y),U(g,$,null),m(o,q,y),U(h,o,y),m(o,H,y),m(o,A,y),U(W,A,null),m(o,d,y),ve&&ve.m(o,y),m(o,De,y),ee&&ee.m(o,y),m(o,Le,y),ce&&ce.m(o,y),m(o,ze,y),ge&&ge.m(o,y),m(o,G,y),le&&le.m(o,y),m(o,ae,y),xe&&xe.m(o,y),m(o,Ae,y),Oe&&Oe.m(o,y),m(o,we,y),qe&&qe.m(o,y),m(o,ke,y),me&&me.m(o,y),m(o,ye,y),je&&je.m(o,y),m(o,Ue,y),be&&be.m(o,y),m(o,te,y),se&&se.m(o,y),m(o,Z,y),ie&&ie.m(o,y),m(o,Ee,y),Ce&&Ce.m(o,y),m(o,Be,y),de&&de.m(o,y),m(o,ta,y),Te&&Te.m(o,y),m(o,Ge,y),_e&&_e.m(o,y),m(o,la,y),Ne&&Ne.m(o,y),m(o,Re,y),Ye&&Ye.m(o,y),m(o,$e,y),pe&&pe.m(o,y),m(o,L,y),Ve&&Ve.m(o,y),m(o,Pe,y),ca=!0},p(o,y){if(typeof Ie<"u"&&Ie.title&&Ie.hide_title!==!0&&Ze.p(o,y),We.p(o,y),typeof Ie=="object"&&Se.p(o,y),y[0]&256){w=ha([["latest","Latest Year"],["trend","Trend Over Years"]]);let Me;for(Me=0;Me<2;Me+=1){const pa=Or(o,w,Me);S[Me]?S[Me].p(pa,y):(S[Me]=Sr(pa),S[Me].c(),S[Me].m(C,null))}for(;Me<2;Me+=1)S[Me].d(1)}o[12]?Y?(Y.p(o,y),y[0]&4096&&u(Y,1)):(Y=qr(o),Y.c(),u(Y,1),Y.m(E.parentNode,E)):Y&&(ue(),b(Y,1,1,()=>{Y=null}),fe()),o[13]?oe?(oe.p(o,y),y[0]&8192&&u(oe,1)):(oe=Nr(o),oe.c(),u(oe,1),oe.m(j.parentNode,j)):oe&&(ue(),b(oe,1,1,()=>{oe=null}),fe()),o[14]?re?(re.p(o,y),y[0]&16384&&u(re,1)):(re=Hr(o),re.c(),u(re,1),re.m(D.parentNode,D)):re&&(ue(),b(re,1,1,()=>{re=null}),fe());const ra={};y[0]&28672|y[6]&524288&&(ra.$$scope={dirty:y,ctx:o}),g.$set(ra);const Xe={};y[6]&524288&&(Xe.$$scope={dirty:y,ctx:o}),W.$set(Xe),o[15]?ve?(ve.p(o,y),y[0]&32768&&u(ve,1)):(ve=Lr(o),ve.c(),u(ve,1),ve.m(De.parentNode,De)):ve&&(ue(),b(ve,1,1,()=>{ve=null}),fe()),o[16]?ee?(ee.p(o,y),y[0]&65536&&u(ee,1)):(ee=Ar(o),ee.c(),u(ee,1),ee.m(Le.parentNode,Le)):ee&&(ue(),b(ee,1,1,()=>{ee=null}),fe()),o[17]?ce?(ce.p(o,y),y[0]&131072&&u(ce,1)):(ce=Mr(o),ce.c(),u(ce,1),ce.m(ze.parentNode,ze)):ce&&(ue(),b(ce,1,1,()=>{ce=null}),fe()),o[18]?ge?(ge.p(o,y),y[0]&262144&&u(ge,1)):(ge=Yr(o),ge.c(),u(ge,1),ge.m(G.parentNode,G)):ge&&(ue(),b(ge,1,1,()=>{ge=null}),fe()),o[19]?le?(le.p(o,y),y[0]&524288&&u(le,1)):(le=Vr(o),le.c(),u(le,1),le.m(ae.parentNode,ae)):le&&(ue(),b(le,1,1,()=>{le=null}),fe()),o[0]?xe?(xe.p(o,y),y[0]&1&&u(xe,1)):(xe=Ur(o),xe.c(),u(xe,1),xe.m(Ae.parentNode,Ae)):xe&&(ue(),b(xe,1,1,()=>{xe=null}),fe()),o[1]?Oe?(Oe.p(o,y),y[0]&2&&u(Oe,1)):(Oe=Pr(o),Oe.c(),u(Oe,1),Oe.m(we.parentNode,we)):Oe&&(ue(),b(Oe,1,1,()=>{Oe=null}),fe()),o[20]?qe?(qe.p(o,y),y[0]&1048576&&u(qe,1)):(qe=zr(o),qe.c(),u(qe,1),qe.m(ke.parentNode,ke)):qe&&(ue(),b(qe,1,1,()=>{qe=null}),fe()),o[2]?me?(me.p(o,y),y[0]&4&&u(me,1)):(me=Br(o),me.c(),u(me,1),me.m(ye.parentNode,ye)):me&&(ue(),b(me,1,1,()=>{me=null}),fe()),o[21]?je?(je.p(o,y),y[0]&2097152&&u(je,1)):(je=Gr(o),je.c(),u(je,1),je.m(Ue.parentNode,Ue)):je&&(ue(),b(je,1,1,()=>{je=null}),fe()),o[22]?be?(be.p(o,y),y[0]&4194304&&u(be,1)):(be=Wr(o),be.c(),u(be,1),be.m(te.parentNode,te)):be&&(ue(),b(be,1,1,()=>{be=null}),fe()),o[23]?se?(se.p(o,y),y[0]&8388608&&u(se,1)):(se=Xr(o),se.c(),u(se,1),se.m(Z.parentNode,Z)):se&&(ue(),b(se,1,1,()=>{se=null}),fe()),o[24]?ie?(ie.p(o,y),y[0]&16777216&&u(ie,1)):(ie=Qr(o),ie.c(),u(ie,1),ie.m(Ee.parentNode,Ee)):ie&&(ue(),b(ie,1,1,()=>{ie=null}),fe()),o[25]?Ce?(Ce.p(o,y),y[0]&33554432&&u(Ce,1)):(Ce=Jr(o),Ce.c(),u(Ce,1),Ce.m(Be.parentNode,Be)):Ce&&(ue(),b(Ce,1,1,()=>{Ce=null}),fe()),o[3]?de?(de.p(o,y),y[0]&8&&u(de,1)):(de=Kr(o),de.c(),u(de,1),de.m(ta.parentNode,ta)):de&&(ue(),b(de,1,1,()=>{de=null}),fe()),o[4]?Te?(Te.p(o,y),y[0]&16&&u(Te,1)):(Te=Zr(o),Te.c(),u(Te,1),Te.m(Ge.parentNode,Ge)):Te&&(ue(),b(Te,1,1,()=>{Te=null}),fe()),o[5]?_e?(_e.p(o,y),y[0]&32&&u(_e,1)):(_e=es(o),_e.c(),u(_e,1),_e.m(la.parentNode,la)):_e&&(ue(),b(_e,1,1,()=>{_e=null}),fe()),o[6]?Ne?(Ne.p(o,y),y[0]&64&&u(Ne,1)):(Ne=as(o),Ne.c(),u(Ne,1),Ne.m(Re.parentNode,Re)):Ne&&(ue(),b(Ne,1,1,()=>{Ne=null}),fe()),o[7]?Ye?(Ye.p(o,y),y[0]&128&&u(Ye,1)):(Ye=ts(o),Ye.c(),u(Ye,1),Ye.m($e.parentNode,$e)):Ye&&(ue(),b(Ye,1,1,()=>{Ye=null}),fe()),o[34]=="latest"?pe?(pe.p(o,y),y[1]&8&&u(pe,1)):(pe=rs(o),pe.c(),u(pe,1),pe.m(L.parentNode,L)):pe&&(ue(),b(pe,1,1,()=>{pe=null}),fe()),o[34]=="trend"?Ve?(Ve.p(o,y),y[1]&8&&u(Ve,1)):(Ve=ss(o),Ve.c(),u(Ve,1),Ve.m(Pe.parentNode,Pe)):Ve&&(ue(),b(Ve,1,1,()=>{Ve=null}),fe())},i(o){ca||(u(Y),u(oe),u(re),u(g.$$.fragment,o),u(h.$$.fragment,o),u(W.$$.fragment,o),u(ve),u(ee),u(ce),u(ge),u(le),u(xe),u(Oe),u(qe),u(me),u(je),u(be),u(se),u(ie),u(Ce),u(de),u(Te),u(_e),u(Ne),u(Ye),u(pe),u(Ve),ca=!0)},o(o){b(Y),b(oe),b(re),b(g.$$.fragment,o),b(h.$$.fragment,o),b(W.$$.fragment,o),b(ve),b(ee),b(ce),b(ge),b(le),b(xe),b(Oe),b(qe),b(me),b(je),b(be),b(se),b(ie),b(Ce),b(de),b(Te),b(_e),b(Ne),b(Ye),b(pe),b(Ve),ca=!1},d(o){o&&(_(r),_(a),_(l),_(I),_(E),_(j),_(D),_($),_(q),_(H),_(A),_(d),_(De),_(Le),_(ze),_(G),_(ae),_(Ae),_(we),_(ke),_(ye),_(Ue),_(te),_(Z),_(Ee),_(Be),_(ta),_(Ge),_(la),_(Re),_($e),_(L),_(Pe)),Ze&&Ze.d(o),We.d(o),_(s),_(e),Se&&Se.d(o),_(t),ct(S,o),Y&&Y.d(o),oe&&oe.d(o),re&&re.d(o),V(g),V(h,o),V(W),ve&&ve.d(o),ee&&ee.d(o),ce&&ce.d(o),ge&&ge.d(o),le&&le.d(o),xe&&xe.d(o),Oe&&Oe.d(o),qe&&qe.d(o),me&&me.d(o),je&&je.d(o),be&&be.d(o),se&&se.d(o),ie&&ie.d(o),Ce&&Ce.d(o),de&&de.d(o),Te&&Te.d(o),_e&&_e.d(o),Ne&&Ne.d(o),Ye&&Ye.d(o),pe&&pe.d(o),Ve&&Ve.d(o)}}}const Ie={title:"Technology"},go="320px";function bo(n,r,s){let e,t,a,l,i,c,v,C,I,E,j,D,$,g,q,h,H,A;vt(n,cn,k=>s(137,H=k)),vt(n,hr,k=>s(156,A=k));let{data:W}=r,{data:d={},customFormattingSettings:De,__db:Le,inputs:ze}=W;As(hr,A="0609453fffecd8c940d3991dd7f547b2",A);let G=Js(on(ze));Ms(G.subscribe(k=>ze=k)),Ys(an,{getCustomFormats:()=>De.customFormats||[]});const ae=(k,X)=>un(Le.query,k,{query_name:X});Ks(ae),H.params,Vs(()=>!0);let Ae={initialData:void 0,initialError:void 0},we=J`select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year`,ke="select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year";d.g_fy_data&&(d.g_fy_data instanceof Error?Ae.initialError=d.g_fy_data:Ae.initialData=d.g_fy_data,d.g_fy_columns&&(Ae.knownColumns=d.g_fy_columns));let ye,Ue=!1;const te=ea.createReactive({callback:k=>{s(12,ye=k)},execFn:ae},{id:"g_fy",...Ae});te(ke,{noResolve:we,...Ae}),globalThis[Symbol.for("g_fy")]={get value(){return ye}};let Z={initialData:void 0,initialError:void 0},Ee=J`select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type`,Be="select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type";d.g_fund_data&&(d.g_fund_data instanceof Error?Z.initialError=d.g_fund_data:Z.initialData=d.g_fund_data,d.g_fund_columns&&(Z.knownColumns=d.g_fund_columns));let ta,Ge=!1;const la=ea.createReactive({callback:k=>{s(13,ta=k)},execFn:ae},{id:"g_fund",...Z});la(Be,{noResolve:Ee,...Z}),globalThis[Symbol.for("g_fund")]={get value(){return ta}};let Re={initialData:void 0,initialError:void 0},$e=J`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`,L="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name";d.g_agency_data&&(d.g_agency_data instanceof Error?Re.initialError=d.g_agency_data:Re.initialData=d.g_agency_data,d.g_agency_columns&&(Re.knownColumns=d.g_agency_columns));let Pe,ca=!1;const Ze=ea.createReactive({callback:k=>{s(14,Pe=k)},execFn:ae},{id:"g_agency",...Re});Ze(L,{noResolve:$e,...Re}),globalThis[Symbol.for("g_agency")]={get value(){return Pe}};let he={initialData:void 0,initialError:void 0},ya=J`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`,We=`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`;d.filtered_data&&(d.filtered_data instanceof Error?he.initialError=d.filtered_data:he.initialData=d.filtered_data,d.filtered_columns&&(he.knownColumns=d.filtered_columns));let Se,w=!1;const S=ea.createReactive({callback:k=>{s(15,Se=k)},execFn:ae},{id:"filtered",...he});S(We,{noResolve:ya,...he}),globalThis[Symbol.for("filtered")]={get value(){return Se}};let Y={initialData:void 0,initialError:void 0},oe=J`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year`,re=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year`;d.yearly_rollup_data&&(d.yearly_rollup_data instanceof Error?Y.initialError=d.yearly_rollup_data:Y.initialData=d.yearly_rollup_data,d.yearly_rollup_columns&&(Y.knownColumns=d.yearly_rollup_columns));let ve,ee=!1;const ce=ea.createReactive({callback:k=>{s(16,ve=k)},execFn:ae},{id:"yearly_rollup",...Y});ce(re,{noResolve:oe,...Y}),globalThis[Symbol.for("yearly_rollup")]={get value(){return ve}};let ge={initialData:void 0,initialError:void 0},le=J`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`,xe=`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`;d.scope_meta_data&&(d.scope_meta_data instanceof Error?ge.initialError=d.scope_meta_data:ge.initialData=d.scope_meta_data,d.scope_meta_columns&&(ge.knownColumns=d.scope_meta_columns));let Oe,qe=!1;const me=ea.createReactive({callback:k=>{s(17,Oe=k)},execFn:ae},{id:"scope_meta",...ge});me(xe,{noResolve:le,...ge}),globalThis[Symbol.for("scope_meta")]={get value(){return Oe}};let je={initialData:void 0,initialError:void 0},be=J`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`,se=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`;d.filtered_latest_data&&(d.filtered_latest_data instanceof Error?je.initialError=d.filtered_latest_data:je.initialData=d.filtered_latest_data,d.filtered_latest_columns&&(je.knownColumns=d.filtered_latest_columns));let ie,Ce=!1;const de=ea.createReactive({callback:k=>{s(18,ie=k)},execFn:ae},{id:"filtered_latest",...je});de(se,{noResolve:be,...je}),globalThis[Symbol.for("filtered_latest")]={get value(){return ie}};let Te={initialData:void 0,initialError:void 0},_e=J`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`,Ne=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`;d.filtered_prior_data&&(d.filtered_prior_data instanceof Error?Te.initialError=d.filtered_prior_data:Te.initialData=d.filtered_prior_data,d.filtered_prior_columns&&(Te.knownColumns=d.filtered_prior_columns));let Ye,pe=!1;const Ve=ea.createReactive({callback:k=>{s(19,Ye=k)},execFn:ae},{id:"filtered_prior",...Te});Ve(Ne,{noResolve:_e,...Te}),globalThis[Symbol.for("filtered_prior")]={get value(){return Ye}};let o={initialData:void 0,initialError:void 0},y=J`with points as (
    select
        m.*,
        y_5.total_budget as spend_5y_ago,
        y_10.total_budget as spend_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget as total_it_spend,
    latest_it_spend,
    latest_it_spend - coalesce(prior_it_spend, 0) as dollar_change,
    round((latest_it_spend - coalesce(prior_it_spend, 0)) * 100.0 / nullif(prior_it_spend, 0), 1) as yoy_pct,
    round(
        case
            when spend_5y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_5y_pct,
    round(
        case
            when spend_10y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`,ra=`with points as (
    select
        m.*,
        y_5.total_budget as spend_5y_ago,
        y_10.total_budget as spend_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget as total_it_spend,
    latest_it_spend,
    latest_it_spend - coalesce(prior_it_spend, 0) as dollar_change,
    round((latest_it_spend - coalesce(prior_it_spend, 0)) * 100.0 / nullif(prior_it_spend, 0), 1) as yoy_pct,
    round(
        case
            when spend_5y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_5y_pct,
    round(
        case
            when spend_10y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`;d.overview_data&&(d.overview_data instanceof Error?o.initialError=d.overview_data:o.initialData=d.overview_data,d.overview_columns&&(o.knownColumns=d.overview_columns));let Xe,Me=!1;const pa=ea.createReactive({callback:k=>{s(0,Xe=k)},execFn:ae},{id:"overview",...o});pa(ra,{noResolve:y,...o}),globalThis[Symbol.for("overview")]={get value(){return Xe}};let ma={initialData:void 0,initialError:void 0},va=J`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`,Ra=`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`;d.yearly_data&&(d.yearly_data instanceof Error?ma.initialError=d.yearly_data:ma.initialData=d.yearly_data,d.yearly_columns&&(ma.knownColumns=d.yearly_columns));let Na,p=!1;const N=ea.createReactive({callback:k=>{s(1,Na=k)},execFn:ae},{id:"yearly",...ma});N(Ra,{noResolve:va,...ma}),globalThis[Symbol.for("yearly")]={get value(){return Na}};let Fe={initialData:void 0,initialError:void 0},oa=J`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`,fa=`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`;d.yoy_detail_data&&(d.yoy_detail_data instanceof Error?Fe.initialError=d.yoy_detail_data:Fe.initialData=d.yoy_detail_data,d.yoy_detail_columns&&(Fe.knownColumns=d.yoy_detail_columns));let ua,Da=!1;const xa=ea.createReactive({callback:k=>{s(20,ua=k)},execFn:ae},{id:"yoy_detail",...Fe});xa(fa,{noResolve:oa,...Fe}),globalThis[Symbol.for("yoy_detail")]={get value(){return ua}};let ja={initialData:void 0,initialError:void 0},Ca=J`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_spend,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_spend,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_spend,
        final_spend,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_spend > 0 and final_spend > 0
                then (power(final_spend / base_spend, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_spend * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_spend * case fiscal_year
        when 2017 then 1.000
        when 2018 then 1.021
        when 2019 then 1.041
        when 2020 then 1.056
        when 2021 then 1.116
        when 2022 then 1.196
        when 2023 then 1.245
        when 2024 then 1.271
        when 2025 then 1.292
        when 2026 then 1.313
        when 2027 then 1.334
        else 1.0
    end, 2) as inflation_baseline,
    cagr_pct
from cagr_calc
order by fiscal_year`,Oa=`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_spend,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_spend,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_spend,
        final_spend,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_spend > 0 and final_spend > 0
                then (power(final_spend / base_spend, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_spend * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_spend * case fiscal_year
        when 2017 then 1.000
        when 2018 then 1.021
        when 2019 then 1.041
        when 2020 then 1.056
        when 2021 then 1.116
        when 2022 then 1.196
        when 2023 then 1.245
        when 2024 then 1.271
        when 2025 then 1.292
        when 2026 then 1.313
        when 2027 then 1.334
        else 1.0
    end, 2) as inflation_baseline,
    cagr_pct
from cagr_calc
order by fiscal_year`;d.fiscal_overview_cagr_data&&(d.fiscal_overview_cagr_data instanceof Error?ja.initialError=d.fiscal_overview_cagr_data:ja.initialData=d.fiscal_overview_cagr_data,d.fiscal_overview_cagr_columns&&(ja.knownColumns=d.fiscal_overview_cagr_columns));let Ta,st=!1;const nt=ea.createReactive({callback:k=>{s(2,Ta=k)},execFn:ae},{id:"fiscal_overview_cagr",...ja});nt(Oa,{noResolve:Ca,...ja}),globalThis[Symbol.for("fiscal_overview_cagr")]={get value(){return Ta}};let Fa={initialData:void 0,initialError:void 0},Ia=J`select
    it_tower,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where it_tower is not null
group by it_tower
order by spend desc`,Sa=`select
    it_tower,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where it_tower is not null
group by it_tower
order by spend desc`;d.snapshot_towers_data&&(d.snapshot_towers_data instanceof Error?Fa.initialError=d.snapshot_towers_data:Fa.initialData=d.snapshot_towers_data,d.snapshot_towers_columns&&(Fa.knownColumns=d.snapshot_towers_columns));let ot,At=!1;const Mt=ea.createReactive({callback:k=>{s(21,ot=k)},execFn:ae},{id:"snapshot_towers",...Fa});Mt(Sa,{noResolve:Ia,...Fa}),globalThis[Symbol.for("snapshot_towers")]={get value(){return ot}};let Ha={initialData:void 0,initialError:void 0},La=J`select
    subprogram_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`,dt=`select
    subprogram_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`;d.snapshot_subprograms_data&&(d.snapshot_subprograms_data instanceof Error?Ha.initialError=d.snapshot_subprograms_data:Ha.initialData=d.snapshot_subprograms_data,d.snapshot_subprograms_columns&&(Ha.knownColumns=d.snapshot_subprograms_columns));let Yt,Vt=!1;const Ut=ea.createReactive({callback:k=>{s(22,Yt=k)},execFn:ae},{id:"snapshot_subprograms",...Ha});Ut(dt,{noResolve:La,...Ha}),globalThis[Symbol.for("snapshot_subprograms")]={get value(){return Yt}};let Aa={initialData:void 0,initialError:void 0},Ma=J`with latest as (
    select it_tower, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
hist_5y as (
    select f.it_tower, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.it_tower
),
hist_10y as (
    select f.it_tower, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.it_tower
)
select
    l.it_tower,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(case when h5.spend_5y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.spend_10y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`,ut=`with latest as (
    select it_tower, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
hist_5y as (
    select f.it_tower, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.it_tower
),
hist_10y as (
    select f.it_tower, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.it_tower
)
select
    l.it_tower,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(case when h5.spend_5y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.spend_10y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`;d.tower_snapshot_data&&(d.tower_snapshot_data instanceof Error?Aa.initialError=d.tower_snapshot_data:Aa.initialData=d.tower_snapshot_data,d.tower_snapshot_columns&&(Aa.knownColumns=d.tower_snapshot_columns));let Pt,zt=!1;const Bt=ea.createReactive({callback:k=>{s(23,Pt=k)},execFn:ae},{id:"tower_snapshot",...Aa});Bt(ut,{noResolve:Ma,...Aa}),globalThis[Symbol.for("tower_snapshot")]={get value(){return Pt}};let Ya={initialData:void 0,initialError:void 0},Va=J`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
)
select
    l.agency_name,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_spend - coalesce(p.prior_spend, 0)) desc
limit 20`,ft=`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
)
select
    l.agency_name,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_spend - coalesce(p.prior_spend, 0)) desc
limit 20`;d.agency_movers_data&&(d.agency_movers_data instanceof Error?Ya.initialError=d.agency_movers_data:Ya.initialData=d.agency_movers_data,d.agency_movers_columns&&(Ya.knownColumns=d.agency_movers_columns));let Gt,Wt=!1;const Xt=ea.createReactive({callback:k=>{s(24,Gt=k)},execFn:ae},{id:"agency_movers",...Ya});Xt(ft,{noResolve:Va,...Ya}),globalThis[Symbol.for("agency_movers")]={get value(){return Gt}};let Ua={initialData:void 0,initialError:void 0},Pa=J`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
hist_5y as (
    select f.agency_name, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.agency_name
),
hist_10y as (
    select f.agency_name, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.agency_name
)
select
    l.agency_name,
    '/technology/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(
        case when h5.spend_5y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.spend_10y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (agency_name)
left join hist_5y h5 using (agency_name)
left join hist_10y h10 using (agency_name)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`,yt=`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
hist_5y as (
    select f.agency_name, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.agency_name
),
hist_10y as (
    select f.agency_name, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.agency_name
)
select
    l.agency_name,
    '/technology/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(
        case when h5.spend_5y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.spend_10y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (agency_name)
left join hist_5y h5 using (agency_name)
left join hist_10y h10 using (agency_name)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`;d.agency_latest_data&&(d.agency_latest_data instanceof Error?Ua.initialError=d.agency_latest_data:Ua.initialData=d.agency_latest_data,d.agency_latest_columns&&(Ua.knownColumns=d.agency_latest_columns));let Qt,Jt=!1;const Kt=ea.createReactive({callback:k=>{s(25,Qt=k)},execFn:ae},{id:"agency_latest",...Ua});Kt(yt,{noResolve:Pa,...Ua}),globalThis[Symbol.for("agency_latest")]={get value(){return Qt}};let za={initialData:void 0,initialError:void 0},Ba=J`select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10`,mt=`select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10`;d.top_towers_trend_data&&(d.top_towers_trend_data instanceof Error?za.initialError=d.top_towers_trend_data:za.initialData=d.top_towers_trend_data,d.top_towers_trend_columns&&(za.knownColumns=d.top_towers_trend_columns));let Tt,Zt=!1;const er=ea.createReactive({callback:k=>{s(3,Tt=k)},execFn:ae},{id:"top_towers_trend",...za});er(mt,{noResolve:Ba,...za}),globalThis[Symbol.for("top_towers_trend")]={get value(){return Tt}};let Ga={initialData:void 0,initialError:void 0},Wa=J`with tower_spend as (
    select
        f.fiscal_year,
        f.it_tower,
        sum(f.amount) as spend
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
    where f.it_tower in (select it_tower from (select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10))
    group by f.fiscal_year, f.it_tower
),
yearly_totals as (
    select fiscal_year, total_budget as total_it_spend
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    t.fiscal_year,
    t.it_tower,
    t.spend,
    t.spend / nullif(y.total_it_spend, 0) as pct_of_total
from tower_spend t
left join yearly_totals y on y.fiscal_year = t.fiscal_year
order by t.fiscal_year`,gt=`with tower_spend as (
    select
        f.fiscal_year,
        f.it_tower,
        sum(f.amount) as spend
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
    where f.it_tower in (select it_tower from (select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10))
    group by f.fiscal_year, f.it_tower
),
yearly_totals as (
    select fiscal_year, total_budget as total_it_spend
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    t.fiscal_year,
    t.it_tower,
    t.spend,
    t.spend / nullif(y.total_it_spend, 0) as pct_of_total
from tower_spend t
left join yearly_totals y on y.fiscal_year = t.fiscal_year
order by t.fiscal_year`;d.tower_trend_data&&(d.tower_trend_data instanceof Error?Ga.initialError=d.tower_trend_data:Ga.initialData=d.tower_trend_data,d.tower_trend_columns&&(Ga.knownColumns=d.tower_trend_columns));let lt,ar=!1;const tr=ea.createReactive({callback:k=>{s(4,lt=k)},execFn:ae},{id:"tower_trend",...Ga});tr(gt,{noResolve:Wa,...Ga}),globalThis[Symbol.for("tower_trend")]={get value(){return lt}};let Xa={initialData:void 0,initialError:void 0},Qa=J`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10`,bt=`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10`;d.top_agencies_trend_data&&(d.top_agencies_trend_data instanceof Error?Xa.initialError=d.top_agencies_trend_data:Xa.initialData=d.top_agencies_trend_data,d.top_agencies_trend_columns&&(Xa.knownColumns=d.top_agencies_trend_columns));let Ft,rr=!1;const sr=ea.createReactive({callback:k=>{s(5,Ft=k)},execFn:ae},{id:"top_agencies_trend",...Xa});sr(bt,{noResolve:Qa,...Xa}),globalThis[Symbol.for("top_agencies_trend")]={get value(){return Ft}};let Ja={initialData:void 0,initialError:void 0},Ka=J`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`,pt=`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`;d.agency_trend_lines_data&&(d.agency_trend_lines_data instanceof Error?Ja.initialError=d.agency_trend_lines_data:Ja.initialData=d.agency_trend_lines_data,d.agency_trend_lines_columns&&(Ja.knownColumns=d.agency_trend_lines_columns));let It,nr=!1;const or=ea.createReactive({callback:k=>{s(6,It=k)},execFn:ae},{id:"agency_trend_lines",...Ja});or(pt,{noResolve:Ka,...Ja}),globalThis[Symbol.for("agency_trend_lines")]={get value(){return It}};let Za={initialData:void 0,initialError:void 0},et=J`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`,wt=`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`;d.agency_drill_data&&(d.agency_drill_data instanceof Error?Za.initialError=d.agency_drill_data:Za.initialData=d.agency_drill_data,d.agency_drill_columns&&(Za.knownColumns=d.agency_drill_columns));let $t,lr=!1;const ir=ea.createReactive({callback:k=>{s(7,$t=k)},execFn:ae},{id:"agency_drill",...Za});ir(wt,{noResolve:et,...Za}),globalThis[Symbol.for("agency_drill")]={get value(){return $t}};const yr=Zs();vt(n,yr,k=>s(136,h=k));const bs=(k,X="%")=>{var B,ne,He,Qe,da,ia,ka;const Q=[(ne=(B=k==null?void 0:k.rawValues)==null?void 0:B[0])==null?void 0:ne.value,(He=k==null?void 0:k.rawValue)==null?void 0:He.value,(Qe=k==null?void 0:k.value)==null?void 0:Qe.value,k==null?void 0:k.value,k==null?void 0:k.rawValue,(ia=(da=k==null?void 0:k.rawValues)==null?void 0:da[0])==null?void 0:ia.label,k==null?void 0:k.label,(ka=k==null?void 0:k.rawValues)==null?void 0:ka[0]];for(const ba of Q){if(ba==null)continue;if(typeof ba=="object"){if(ba.value!=null)return String(ba.value).toLowerCase();if(ba.label!=null)return String(ba.label).toLowerCase()}const at=String(ba).toLowerCase();if(at&&at!=="[object object]")return at}return X},_r=(k,X=!0)=>{const Q=bs(k,"%").replace(/'/g,"''");return X?Q.toLowerCase():Q},mr=k=>{const X=Number(k)||0,Q=Math.abs(X);return Q>=1e9?`$${(X/1e9).toFixed(2)}B`:Q>=1e6?`$${(X/1e6).toFixed(2)}M`:Q>=1e3?`$${(X/1e3).toFixed(2)}K`:`$${X.toFixed(2)}`},ps=(k,X)=>{if(!k||k.length<2)return{chartData:[],trendPoints:[]};const Q=k.map(sa=>Number(sa[X])||0),B=Array.from({length:k.length},(sa,wa)=>wa+1),ne=B.map((sa,wa)=>({x:sa,y:Q[wa]})).filter(sa=>sa.y>0);if(ne.length<2)return{chartData:Q,trendPoints:Q};const He=ne.map(sa=>Math.log(sa.x)),Qe=ne.map(sa=>Math.log(sa.y)),da=ne.length,ia=He.reduce((sa,wa)=>sa+wa,0),ka=Qe.reduce((sa,wa)=>sa+wa,0),ba=He.reduce((sa,wa,Rs)=>sa+wa*Qe[Rs],0),at=He.reduce((sa,wa)=>sa+wa*wa,0),Et=da*at-ia*ia;if(Math.abs(Et)<1e-10)return{chartData:Q,trendPoints:Q};const Rt=(da*ba-ia*ka)/Et,Es=Math.exp((ka-Rt*ia)/da);return{chartData:Q,trendPoints:B.map(sa=>Es*Math.pow(sa,Rt))}},ws=(k,X)=>{const Q=X.map(ba=>k["FY"+ba]||0),B=Math.max(...Q);if(B===0)return"";const ne=48,He=16,Qe=Q.map((ba,at)=>{const Et=at/(Q.length-1)*ne,Rt=He-ba/B*He;return Et+","+Rt}).join(" "),da=Q[Q.length-1],ia=Q[Q.length-2]??da,ka=da>=ia?"#2EAD6B":"#C8122C";return'<svg width="'+ne+'" height="'+He+'" style="display:inline-block;vertical-align:middle;margin-left:8px;"><polyline points="'+Qe+'" fill="none" stroke="'+ka+'" stroke-width="1.5" stroke-linejoin="round"/><circle cx="'+ne+'" cy="'+(He-da/B*He)+'" r="2" fill="'+ka+'"/></svg>'},$s=(k,X,Q)=>{const B=Q.indexOf(X);if(B<=0)return"";const ne=k["FY"+X]||0,He=k["FY"+Q[B-1]]||0;if(He===0)return"";const Qe=(ne-He)/He*100;return Qe>=15?"background:rgba(46,173,107,0.18);":Qe>=8?"background:rgba(46,173,107,0.11);":Qe>=3?"background:rgba(46,173,107,0.06);":Qe>0?"background:rgba(46,173,107,0.03);":Qe<=-15?"background:rgba(200,18,44,0.18);":Qe<=-8?"background:rgba(200,18,44,0.11);":Qe<=-3?"background:rgba(200,18,44,0.06);":"background:rgba(200,18,44,0.03);"};let cr="trend",Dt="3y",ht="",kt=null;const gr=k=>{s(26,kt=kt===k?null:k)},hs=k=>s(8,cr=k),ks=()=>{var Q;const k=Number((Q=Xe==null?void 0:Xe[0])==null?void 0:Q.latest_it_spend)||0,X=Math.abs(k);return X>=1e9?"$"+(X/1e9).toFixed(2)+"B":X>=1e6?"$"+(X/1e6).toFixed(1)+"M":"$"+Math.round(X).toLocaleString()},vs=()=>{var B;const k=Number((B=Xe==null?void 0:Xe[0])==null?void 0:B.dollar_change)||0,X=Math.abs(k),Q=k>=0?"+":"-";return X>=1e9?Q+"$"+(X/1e9).toFixed(2)+"B":X>=1e6?Q+"$"+(X/1e6).toFixed(1)+"M":Q+"$"+Math.round(X).toLocaleString()},xs=k=>gr(k.it_tower),js=function(k){if(!k)return"";const X=k.seriesName,Q=c.slice().sort(function(B,ne){return Number(ne)-Number(B)}).map(function(B){const ne=lt.find(function(da){return String(da.fiscal_year)===B&&da.it_tower===X}),He=ne?ne.spend:0,Qe=ne?(ne.pct_of_total*100).toFixed(1):"0.0";return B+": "+mr(He)+" ("+Qe+"%)"});return"<b>"+X+"</b><br/>"+Q.join("<br/>")},Cs=k=>{const X=Number(k)||0;return Math.abs(X)>=1e9?`$${(X/1e9).toFixed(0)}B`:`$${(X/1e6).toFixed(0)}M`},Ts=k=>{const X=k.it_tower,Q=v.includes(X),B=!!kt,ne=kt===X,He=!B||ne,Qe=Q?X===v[0]?"#C8122C":X===v[1]?"#FFC838":"#231F20":"#C9CED6";return{name:X,type:"line",smooth:!1,symbol:"circle",symbolSize:B?ne?Q?12:11:4:Q?7:6,showSymbol:!0,lineStyle:{color:Qe,width:B?ne?Q?6:5:1:Q?3:2,opacity:He?1:.06},itemStyle:{color:Qe,opacity:He?1:.06},label:{show:Q,position:"top",offset:[0,-10],backgroundColor:"rgba(255, 255, 255, 0.92)",padding:[2,5],borderRadius:3,lineHeight:14,color:Qe,fontWeight:Q?700:500,formatter:da=>{const ia=Math.floor(c.length/2);return da.dataIndex===ia?X:""}},emphasis:{focus:"series",scale:!0,lineStyle:{color:Q?Qe:"#3B7DD8",width:4,opacity:1},itemStyle:{color:Q?Qe:"#3B7DD8",opacity:1},label:{show:!1}},blur:{lineStyle:{opacity:.06},itemStyle:{opacity:.06}},data:c.map(da=>{const ia=lt.find(ka=>String(ka.fiscal_year)===da&&ka.it_tower===X);return{value:(ia==null?void 0:ia.spend)??0,pct:(ia==null?void 0:ia.pct_of_total)??0}})}},Fs=k=>s(9,Dt=k);function Is(){ht=this.value,s(10,ht)}const Ds=k=>ln(k.agency_link);return n.$$set=k=>{"data"in k&&s(40,W=k.data)},n.$$.update=()=>{var k,X,Q;n.$$.dirty[1]&512&&s(41,{data:d={},customFormattingSettings:De,__db:Le}=W,d),n.$$.dirty[1]&1024&&en.set(Object.keys(d).length>0),n.$$.dirty[4]&8192&&H.params,n.$$.dirty[1]&30720&&(we||!Ue?we||(te(ke,{noResolve:we,...Ae}),s(45,Ue=!0)):te(ke,{noResolve:we})),n.$$.dirty[1]&491520&&(Ee||!Ge?Ee||(la(Be,{noResolve:Ee,...Z}),s(49,Ge=!0)):la(Be,{noResolve:Ee})),n.$$.dirty[1]&7864320&&($e||!ca?$e||(Ze(L,{noResolve:$e,...Re}),s(53,ca=!0)):Ze(L,{noResolve:$e})),n.$$.dirty[4]&4096&&s(135,e=_r(h==null?void 0:h.f_fy,!1)),n.$$.dirty[4]&4096&&s(134,t=_r(h==null?void 0:h.f_fund)),n.$$.dirty[4]&4096&&s(133,a=_r(h==null?void 0:h.f_agency)),n.$$.dirty[4]&3584&&s(55,ya=J`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`),n.$$.dirty[4]&3584&&s(56,We=`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`),n.$$.dirty[1]&125829120&&(ya||!w?ya||(S(We,{noResolve:ya,...he}),s(57,w=!0)):S(We,{noResolve:ya})),n.$$.dirty[4]&3584&&s(59,oe=J`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year`),n.$$.dirty[4]&3584&&s(60,re=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year`),n.$$.dirty[1]&2013265920&&(oe||!ee?oe||(ce(re,{noResolve:oe,...Y}),s(61,ee=!0)):ce(re,{noResolve:oe})),n.$$.dirty[4]&3584&&s(63,le=J`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[4]&3584&&s(64,xe=`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[2]&15&&(le||!qe?le||(me(xe,{noResolve:le,...ge}),s(65,qe=!0)):me(xe,{noResolve:le})),n.$$.dirty[4]&3584&&s(67,be=J`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`),n.$$.dirty[4]&3584&&s(68,se=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`),n.$$.dirty[2]&240&&(be||!Ce?be||(de(se,{noResolve:be,...je}),s(69,Ce=!0)):de(se,{noResolve:be})),n.$$.dirty[4]&3584&&s(71,_e=J`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`),n.$$.dirty[4]&3584&&s(72,Ne=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`),n.$$.dirty[2]&3840&&(_e||!pe?_e||(Ve(Ne,{noResolve:_e,...Te}),s(73,pe=!0)):Ve(Ne,{noResolve:_e})),n.$$.dirty[4]&3584&&s(75,y=J`with points as (
    select
        m.*,
        y_5.total_budget as spend_5y_ago,
        y_10.total_budget as spend_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget as total_it_spend,
    latest_it_spend,
    latest_it_spend - coalesce(prior_it_spend, 0) as dollar_change,
    round((latest_it_spend - coalesce(prior_it_spend, 0)) * 100.0 / nullif(prior_it_spend, 0), 1) as yoy_pct,
    round(
        case
            when spend_5y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_5y_pct,
    round(
        case
            when spend_10y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`),n.$$.dirty[4]&3584&&s(76,ra=`with points as (
    select
        m.*,
        y_5.total_budget as spend_5y_ago,
        y_10.total_budget as spend_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget as total_it_spend,
    latest_it_spend,
    latest_it_spend - coalesce(prior_it_spend, 0) as dollar_change,
    round((latest_it_spend - coalesce(prior_it_spend, 0)) * 100.0 / nullif(prior_it_spend, 0), 1) as yoy_pct,
    round(
        case
            when spend_5y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_5y_pct,
    round(
        case
            when spend_10y_ago > 0 and latest_it_spend > 0
                then (power(latest_it_spend / spend_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end,
        1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`),n.$$.dirty[2]&61440&&(y||!Me?y||(pa(ra,{noResolve:y,...o}),s(77,Me=!0)):pa(ra,{noResolve:y})),n.$$.dirty[4]&3584&&s(79,va=J`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[4]&3584&&s(80,Ra=`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[2]&983040&&(va||!p?va||(N(Ra,{noResolve:va,...ma}),s(81,p=!0)):N(Ra,{noResolve:va})),n.$$.dirty[4]&3584&&s(83,oa=J`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[4]&3584&&s(84,fa=`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[2]&15728640&&(oa||!Da?oa||(xa(fa,{noResolve:oa,...Fe}),s(85,Da=!0)):xa(fa,{noResolve:oa})),n.$$.dirty[4]&3584&&s(87,Ca=J`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_spend,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_spend,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_spend,
        final_spend,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_spend > 0 and final_spend > 0
                then (power(final_spend / base_spend, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_spend * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_spend * case fiscal_year
        when 2017 then 1.000
        when 2018 then 1.021
        when 2019 then 1.041
        when 2020 then 1.056
        when 2021 then 1.116
        when 2022 then 1.196
        when 2023 then 1.245
        when 2024 then 1.271
        when 2025 then 1.292
        when 2026 then 1.313
        when 2027 then 1.334
        else 1.0
    end, 2) as inflation_baseline,
    cagr_pct
from cagr_calc
order by fiscal_year`),n.$$.dirty[4]&3584&&s(88,Oa=`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_spend,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_spend,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_spend,
        final_spend,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_spend > 0 and final_spend > 0
                then (power(final_spend / base_spend, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_spend * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_spend * case fiscal_year
        when 2017 then 1.000
        when 2018 then 1.021
        when 2019 then 1.041
        when 2020 then 1.056
        when 2021 then 1.116
        when 2022 then 1.196
        when 2023 then 1.245
        when 2024 then 1.271
        when 2025 then 1.292
        when 2026 then 1.313
        when 2027 then 1.334
        else 1.0
    end, 2) as inflation_baseline,
    cagr_pct
from cagr_calc
order by fiscal_year`),n.$$.dirty[2]&251658240&&(Ca||!st?Ca||(nt(Oa,{noResolve:Ca,...ja}),s(89,st=!0)):nt(Oa,{noResolve:Ca})),n.$$.dirty[4]&3584&&s(91,Ia=J`select
    it_tower,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where it_tower is not null
group by it_tower
order by spend desc`),n.$$.dirty[4]&3584&&s(92,Sa=`select
    it_tower,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where it_tower is not null
group by it_tower
order by spend desc`),n.$$.dirty[2]&1879048192|n.$$.dirty[3]&1&&(Ia||!At?Ia||(Mt(Sa,{noResolve:Ia,...Fa}),s(93,At=!0)):Mt(Sa,{noResolve:Ia})),n.$$.dirty[4]&3584&&s(95,La=J`select
    subprogram_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`),n.$$.dirty[4]&3584&&s(96,dt=`select
    subprogram_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`),n.$$.dirty[3]&30&&(La||!Vt?La||(Ut(dt,{noResolve:La,...Ha}),s(97,Vt=!0)):Ut(dt,{noResolve:La})),n.$$.dirty[4]&3584&&s(99,Ma=J`with latest as (
    select it_tower, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
hist_5y as (
    select f.it_tower, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.it_tower
),
hist_10y as (
    select f.it_tower, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.it_tower
)
select
    l.it_tower,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(case when h5.spend_5y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.spend_10y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`),n.$$.dirty[4]&3584&&s(100,ut=`with latest as (
    select it_tower, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where it_tower is not null and trim(it_tower) <> ''
    group by it_tower
),
hist_5y as (
    select f.it_tower, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.it_tower
),
hist_10y as (
    select f.it_tower, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.it_tower is not null and trim(f.it_tower) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.it_tower
)
select
    l.it_tower,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(case when h5.spend_5y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.spend_10y_ago > 0 and l.latest_spend > 0
        then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`),n.$$.dirty[3]&480&&(Ma||!zt?Ma||(Bt(ut,{noResolve:Ma,...Aa}),s(101,zt=!0)):Bt(ut,{noResolve:Ma})),n.$$.dirty[4]&3584&&s(103,Va=J`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
)
select
    l.agency_name,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_spend - coalesce(p.prior_spend, 0)) desc
limit 20`),n.$$.dirty[4]&3584&&s(104,ft=`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
)
select
    l.agency_name,
    l.latest_spend,
    coalesce(p.prior_spend, 0) as prior_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_spend - coalesce(p.prior_spend, 0)) desc
limit 20`),n.$$.dirty[3]&7680&&(Va||!Wt?Va||(Xt(ft,{noResolve:Va,...Ya}),s(105,Wt=!0)):Xt(ft,{noResolve:Va})),n.$$.dirty[4]&3584&&s(107,Pa=J`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
hist_5y as (
    select f.agency_name, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.agency_name
),
hist_10y as (
    select f.agency_name, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.agency_name
)
select
    l.agency_name,
    '/technology/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(
        case when h5.spend_5y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.spend_10y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (agency_name)
left join hist_5y h5 using (agency_name)
left join hist_10y h10 using (agency_name)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`),n.$$.dirty[4]&3584&&s(108,yt=`with latest as (
    select agency_name, sum(amount) as latest_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
prior as (
    select agency_name, sum(amount) as prior_spend
    from (select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where agency_name is not null and trim(agency_name) <> ''
    group by agency_name
),
hist_5y as (
    select f.agency_name, sum(f.amount) as spend_5y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.agency_name
),
hist_10y as (
    select f.agency_name, sum(f.amount) as spend_10y_ago
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.agency_name is not null and trim(f.agency_name) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.agency_name
)
select
    l.agency_name,
    '/technology/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_spend,
    l.latest_spend - coalesce(p.prior_spend, 0) as dollar_change,
    round((l.latest_spend - coalesce(p.prior_spend, 0)) * 100.0 / nullif(p.prior_spend, 0), 1) as yoy_change_pct,
    round(
        case when h5.spend_5y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h5.spend_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.spend_10y_ago > 0 and l.latest_spend > 0
            then (power(l.latest_spend / h10.spend_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_spend * 100.0 / nullif(m.latest_it_spend, 0), 1) as latest_year_pct
from latest l
left join prior p using (agency_name)
left join hist_5y h5 using (agency_name)
left join hist_10y h10 using (agency_name)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${e}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${e}' like '(select%' then max(fiscal_year)
            else cast('${e}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_it_spend,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_it_spend,
    s.chosen_year - 1 as prior_year,
    b.total_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_max_year
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_spend desc`),n.$$.dirty[3]&122880&&(Pa||!Jt?Pa||(Kt(yt,{noResolve:Pa,...Ua}),s(109,Jt=!0)):Kt(yt,{noResolve:Pa})),n.$$.dirty[4]&3584&&s(111,Ba=J`select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10`),n.$$.dirty[4]&3584&&s(112,mt=`select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10`),n.$$.dirty[3]&1966080&&(Ba||!Zt?Ba||(er(mt,{noResolve:Ba,...za}),s(113,Zt=!0)):er(mt,{noResolve:Ba})),n.$$.dirty[4]&3584&&s(115,Wa=J`with tower_spend as (
    select
        f.fiscal_year,
        f.it_tower,
        sum(f.amount) as spend
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
    where f.it_tower in (select it_tower from (select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10))
    group by f.fiscal_year, f.it_tower
),
yearly_totals as (
    select fiscal_year, total_budget as total_it_spend
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    t.fiscal_year,
    t.it_tower,
    t.spend,
    t.spend / nullif(y.total_it_spend, 0) as pct_of_total
from tower_spend t
left join yearly_totals y on y.fiscal_year = t.fiscal_year
order by t.fiscal_year`),n.$$.dirty[4]&3584&&s(116,gt=`with tower_spend as (
    select
        f.fiscal_year,
        f.it_tower,
        sum(f.amount) as spend
    from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
    where f.it_tower in (select it_tower from (select
    it_tower,
    sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where it_tower is not null
group by it_tower
order by total_it_spend desc
limit 10))
    group by f.fiscal_year, f.it_tower
),
yearly_totals as (
    select fiscal_year, total_budget as total_it_spend
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
group by fiscal_year
order by fiscal_year)
)
select
    t.fiscal_year,
    t.it_tower,
    t.spend,
    t.spend / nullif(y.total_it_spend, 0) as pct_of_total
from tower_spend t
left join yearly_totals y on y.fiscal_year = t.fiscal_year
order by t.fiscal_year`),n.$$.dirty[3]&31457280&&(Wa||!ar?Wa||(tr(gt,{noResolve:Wa,...Ga}),s(117,ar=!0)):tr(gt,{noResolve:Wa})),n.$$.dirty[4]&3584&&s(119,Qa=J`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10`),n.$$.dirty[4]&3584&&s(120,bt=`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10`),n.$$.dirty[3]&503316480&&(Qa||!rr?Qa||(sr(bt,{noResolve:Qa,...Xa}),s(121,rr=!0)):sr(bt,{noResolve:Qa})),n.$$.dirty[4]&3584&&s(123,Ka=J`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`),n.$$.dirty[4]&3584&&s(124,pt=`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name
order by total_it_spend desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`),n.$$.dirty[3]&1610612736|n.$$.dirty[4]&3&&(Ka||!nr?Ka||(or(pt,{noResolve:Ka,...Ja}),s(125,nr=!0)):or(pt,{noResolve:Ka})),n.$$.dirty[4]&3584&&s(127,et=J`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`),n.$$.dirty[4]&3584&&s(128,wt=`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    ))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`),n.$$.dirty[4]&60&&(et||!lr?et||(ir(wt,{noResolve:et,...Za}),s(129,lr=!0)):ir(wt,{noResolve:et})),n.$$.dirty[0]&256&&s(34,l=cr),n.$$.dirty[0]&2&&ps(Na,"total_budget"),n.$$.dirty[0]&4&&s(33,i=((k=Ta==null?void 0:Ta[0])==null?void 0:k.cagr_pct)!=null?Number(Ta[0].cagr_pct).toFixed(1):null),n.$$.dirty[0]&16&&s(32,c=[...new Set(lt.map(B=>String(B.fiscal_year)))].sort((B,ne)=>Number(B)-Number(ne))),n.$$.dirty[0]&8&&s(31,v=(Tt??[]).slice(0,3).map(B=>B.it_tower)),n.$$.dirty[0]&64&&s(30,C=[...new Set((It??[]).map(B=>String(B.fiscal_year)))].sort((B,ne)=>Number(B)-Number(ne))),n.$$.dirty[0]&32&&(Ft??[]).slice(0,3).map(B=>B.agency_name),n.$$.dirty[0]&1&&s(29,I=[{id:"agency_name",title:"Agency",align:"left"},{id:"latest_spend",title:`Latest Year (${((X=Xe==null?void 0:Xe[0])==null?void 0:X.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of IT Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&1&&s(28,E=[{id:"it_tower",title:"IT Tower",align:"left"},{id:"latest_spend",title:`Latest Year (${((Q=Xe==null?void 0:Xe[0])==null?void 0:Q.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of IT Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&128&&s(132,j=[...new Set(($t??[]).map(B=>B.fiscal_year))].sort((B,ne)=>B-ne)),n.$$.dirty[0]&128&&s(131,D=Object.values(($t??[]).reduce(function(B,ne){const He=ne.agency_name;return B[He]||(B[He]={agency_name:ne.agency_name}),B[He]["FY"+ne.fiscal_year]=(B[He]["FY"+ne.fiscal_year]||0)+ne.spend,B},{}))),n.$$.dirty[0]&512|n.$$.dirty[4]&256&&s(11,$=Dt==="3y"?j.slice(-3):Dt==="5y"?j.slice(-5):j),n.$$.dirty[0]&1024|n.$$.dirty[4]&128&&s(130,g=ht?D.filter(function(B){return B.agency_name.toLowerCase().includes(ht.toLowerCase())}):D),n.$$.dirty[0]&2048|n.$$.dirty[4]&64&&s(27,q=$.length>0?g.slice().sort(function(B,ne){const He="FY"+$[$.length-1];return(ne[He]||0)-(B[He]||0)}).map(function(B){return Object.assign({},B,{agency_link:"/technology/agencies/"+encodeURIComponent(B.agency_name)})}):g.map(function(B){return Object.assign({},B,{agency_link:"/technology/agencies/"+encodeURIComponent(B.agency_name)})}))},s(43,we=J`select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year`),s(44,ke="select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year"),s(47,Ee=J`select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type`),s(48,Be="select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type"),s(51,$e=J`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`),s(52,L="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name"),[Xe,Na,Ta,Tt,lt,Ft,It,$t,cr,Dt,ht,$,ye,ta,Pe,Se,ve,Oe,ie,Ye,ua,ot,Yt,Pt,Gt,Qt,kt,q,E,I,C,v,c,i,l,yr,mr,ws,$s,gr,W,d,Ae,we,ke,Ue,Z,Ee,Be,Ge,Re,$e,L,ca,he,ya,We,w,Y,oe,re,ee,ge,le,xe,qe,je,be,se,Ce,Te,_e,Ne,pe,o,y,ra,Me,ma,va,Ra,p,Fe,oa,fa,Da,ja,Ca,Oa,st,Fa,Ia,Sa,At,Ha,La,dt,Vt,Aa,Ma,ut,zt,Ya,Va,ft,Wt,Ua,Pa,yt,Jt,za,Ba,mt,Zt,Ga,Wa,gt,ar,Xa,Qa,bt,rr,Ja,Ka,pt,nr,Za,et,wt,lr,g,D,j,a,t,e,h,H,hs,ks,vs,xs,js,Cs,Ts,Fs,Is,Ds]}class Do extends Ht{constructor(r){super(),Lt(this,r,bo,mo,Nt,{data:40},null,[-1,-1,-1,-1,-1,-1,-1])}}export{Do as component};
