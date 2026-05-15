import{s as ar,x as oa,d as _,i as p,k as fa,w as tr,L as Wr,c as d,j as S,m as K,p as I,l as sa,a as Qa,e as E,g as A,o as D,u as Kr,f as H,C as et,n as ue,t as ye,b as na,h as us,q as er,r as ys,v as fs,N as lr,P as bs,Q as ms}from"../chunks/scheduler.Z7x_RWPH.js";import{S as rr,i as sr,d as G,t as k,a as f,c as Se,m as Q,b as X,e as W,g as Ie}from"../chunks/index.DBfziG1F.js";import{e as da,a as gs,s as ps,Q as ea,u as hs,p as $s,b as or,r as cr,C as ws}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YIPYepSh.js";import{F as ks,B as vs,T as xs,P as Fs,a as Cs,C as Jr,A as js}from"../chunks/TrendOverview.Bn16kwhW.js";import{i as Zr}from"../chunks/index.CHy-RPfc.js";import{w as Es,g as Bs}from"../chunks/entry.DQyOB8Va.js";import{A as Xa}from"../chunks/Alert.D0i2L5_M.js";import{h as ee}from"../chunks/setTrackProxy.Cyfckp0w.js";import{a as As,D as $t,b as ft}from"../chunks/Details.D9DjU4bU.js";import{p as Ds}from"../chunks/stores.BHZvlnpo.js";import{G as Rs}from"../chunks/Grid.DWsHgeQC.js";import{Q as aa}from"../chunks/QueryViewer.C9VIWH7H.js";import{p as Ts}from"../chunks/profile.BW8tN6E9.js";function Ss(n){let r,s="No data available";return{c(){r=I("div"),r.textContent=s,this.h()},l(t){r=S(t,"DIV",{style:!0,"data-svelte-h":!0}),sa(r)!=="svelte-kg5yj3"&&(r.textContent=s),this.h()},h(){d(r,"text-align","center"),d(r,"color","#999"),d(r,"padding","20px")},m(t,a){p(t,r,a)},p:oa,d(t){t&&_(r)}}}function Is(n){let r;return{c(){r=I("div"),this.h()},l(s){r=S(s,"DIV",{style:!0}),K(r).forEach(_),this.h()},h(){d(r,"width","100%"),d(r,"height",n[1])},m(s,t){p(s,r,t),n[9](r)},p(s,t){t&2&&d(r,"height",s[1])},d(s){s&&_(r),n[9](null)}}}function qs(n){let r;function s(e,i){var c;return((c=e[0])==null?void 0:c.length)>0?Is:Ss}let t=s(n),a=t(n);return{c(){a.c(),r=fa()},l(e){a.l(e),r=fa()},m(e,i){a.m(e,i),p(e,r,i)},p(e,[i]){t===(t=s(e))&&a?a.p(e,i):(a.d(1),a=t(e),a&&(a.c(),a.m(r.parentNode,r)))},i:oa,o:oa,d(e){e&&_(r),a.d(e)}}}function Ns(n,r,s){let{data:t=[]}=r,{fund_profile:a=[]}=r,{title:e=""}=r,{height:i="420px"}=r,{nameField:c="fund_type"}=r,{valueField:u="latest_budget"}=r,{pctField:$="latest_year_pct"}=r,T,F;function B(){return{color:(t||[]).map(function(C){return C.fund_color??"#4C4743"}),title:{text:e,left:"left",top:10,textStyle:{fontSize:14,fontWeight:600,color:"#231F20"}},tooltip:{trigger:"item",formatter(C){if(!C||!C.data)return"";const m=t.find(function(V){return V[c]===C.name});if(!m)return C.name;const R=Math.abs(m[u])>=1e9?"$"+(m[u]/1e9).toFixed(2)+"B":"$"+(m[u]/1e6).toFixed(1)+"M",v=m.yoy_change_pct!=null?(m.yoy_change_pct>0?"+":"")+m.yoy_change_pct+"%":"N/A",q=Math.abs(m.dollar_change||0),L=(m.dollar_change||0)>=0?"+$"+(q>=1e9?(q/1e9).toFixed(2)+"B":(q/1e6).toFixed(1)+"M"):"-$"+(q>=1e9?(q/1e9).toFixed(2)+"B":(q/1e6).toFixed(1)+"M"),N=m[$]!=null?m[$]+"%":"";return"<b>"+C.name+"</b><br/>Budget: "+R+"<br/>Share: "+N+"<br/>YoY: "+v+" ("+L+")"}},legend:{type:"scroll",orient:"horizontal",left:"center",top:28,textStyle:{fontSize:11},formatter(C){return C&&C.length>26?C.slice(0,26)+"…":C}},series:[{type:"pie",radius:["38%","68%"],center:["50%","60%"],avoidLabelOverlap:!0,minAngle:2,itemStyle:{borderColor:"#FFFFFF",borderWidth:2},label:{formatter(C){return C.percent>=4?C.percent+"%":""}},emphasis:{label:{show:!0,fontSize:13,fontWeight:700},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0,0,0,0.2)"}},data:(t||[]).map(function(C){return{name:C[c],value:C[u]}})}]}}tr(()=>{if(T&&(t==null?void 0:t.length)>0)return s(8,F=Zr(T)),F.setOption(B()),window.addEventListener("resize",()=>F==null?void 0:F.resize()),()=>window.removeEventListener("resize",()=>F==null?void 0:F.resize())});function j(g){Wr[g?"unshift":"push"](()=>{T=g,s(2,T)})}return n.$$set=g=>{"data"in g&&s(0,t=g.data),"fund_profile"in g&&s(3,a=g.fund_profile),"title"in g&&s(4,e=g.title),"height"in g&&s(1,i=g.height),"nameField"in g&&s(5,c=g.nameField),"valueField"in g&&s(6,u=g.valueField),"pctField"in g&&s(7,$=g.pctField)},n.$$.update=()=>{n.$$.dirty&257&&F&&(t==null?void 0:t.length)>0&&F.setOption(B())},[t,i,T,a,e,c,u,$,F,j]}class Ys extends rr{constructor(r){super(),sr(this,r,Ns,qs,ar,{data:0,fund_profile:3,title:4,height:1,nameField:5,valueField:6,pctField:7})}}function _r(n,r,s){const t=n.slice();t[29]=r[s];const a=t[11](t[29]);t[30]=a;const e=t[12](t[29]);t[31]=e;const i=t[31]?parseFloat(t[31]):0;t[32]=i;const c=!t[3]||t[3]===t[29];return t[33]=c,t}function ir(n,r,s){const t=n.slice();return t[36]=r[s][0],t[37]=r[s][1],t}function dr(n){let r,s,t,a,e;function i(){return n[20](n[36])}return{c(){r=I("button"),s=ye(n[37]),this.h()},l(c){r=S(c,"BUTTON",{style:!0});var u=K(r);s=ue(u,n[37]),u.forEach(_),this.h()},h(){H(r,"style",t="padding:6px 14px; font-size:0.82rem; cursor:pointer; border:none; border-right:1px solid var(--nxt-border,#E5E7EB); background:"+(n[2]===n[36]?"#802cd7":"var(--nxt-surface,#fff)")+"; color:"+(n[2]===n[36]?"#fff":"#231F20")+"; font-weight:"+(n[2]===n[36]?600:400))},m(c,u){p(c,r,u),E(r,s),a||(e=et(r,"click",i),a=!0)},p(c,u){n=c,u[0]&4&&t!==(t="padding:6px 14px; font-size:0.82rem; cursor:pointer; border:none; border-right:1px solid var(--nxt-border,#E5E7EB); background:"+(n[2]===n[36]?"#802cd7":"var(--nxt-surface,#fff)")+"; color:"+(n[2]===n[36]?"#fff":"#231F20")+"; font-weight:"+(n[2]===n[36]?600:400))&&H(r,"style",t)},d(c){c&&_(r),a=!1,e()}}}function ur(n){let r,s=n[32]>0?"+":"",t,a=n[31]+"",e,i,c;return{c(){r=I("span"),t=ye(s),e=ye(a),i=ye("%"),this.h()},l(u){r=S(u,"SPAN",{style:!0});var $=K(r);t=ue($,s),e=ue($,a),i=ue($,"%"),$.forEach(_),this.h()},h(){H(r,"style",c="font-size:0.7rem;padding:1px 4px;border-radius:3px;font-weight:500;background:"+(n[32]>3?"#EAF3DE":n[32]<0?"#FCEBEB":"#F1EFE8")+";color:"+(n[32]>3?"#3B6D11":n[32]<0?"#A32D2D":"#5F5E5A"))},m(u,$){p(u,r,$),E(r,t),E(r,e),E(r,i)},p(u,$){$[0]&2&&s!==(s=u[32]>0?"+":"")&&na(t,s),$[0]&2&&a!==(a=u[31]+"")&&na(e,a),$[0]&2&&c!==(c="font-size:0.7rem;padding:1px 4px;border-radius:3px;font-weight:500;background:"+(u[32]>3?"#EAF3DE":u[32]<0?"#FCEBEB":"#F1EFE8")+";color:"+(u[32]>3?"#3B6D11":u[32]<0?"#A32D2D":"#5F5E5A"))&&H(r,"style",c)},d(u){u&&_(r)}}}function yr(n){let r,s,t,a,e,i=n[29]+"",c,u,$,T,F,B,j,g=n[31]&&n[2]!=="composition"&&ur(n);function C(){return n[21](n[29])}return{c(){r=I("button"),s=I("span"),a=D(),e=I("span"),c=ye(i),$=D(),g&&g.c(),T=D(),this.h()},l(m){r=S(m,"BUTTON",{style:!0});var R=K(r);s=S(R,"SPAN",{style:!0}),K(s).forEach(_),a=A(R),e=S(R,"SPAN",{style:!0});var v=K(e);c=ue(v,i),v.forEach(_),$=A(R),g&&g.l(R),T=A(R),R.forEach(_),this.h()},h(){H(s,"style",t="width:8px;height:8px;border-radius:50%;background:"+n[30]+";flex-shrink:0;"+(n[10](n[29])?"opacity:0.6;":"")),H(e,"style",u="color:#231F20;font-weight:"+(n[3]===n[29]?600:400)),H(r,"style",F="display:inline-flex; align-items:center; gap:6px; padding:4px 10px; font-size:0.78rem; cursor:pointer; border-radius:20px; border:"+(n[3]===n[29]?"2px solid "+n[30]:"1px solid var(--nxt-border,#E5E7EB)")+"; background:"+(n[3]===n[29]?"rgba(0,0,0,0.04)":"var(--nxt-surface,#fff)")+"; opacity:"+(n[33]?1:.4)+"; transition:opacity .15s;")},m(m,R){p(m,r,R),E(r,s),E(r,a),E(r,e),E(e,c),E(r,$),g&&g.m(r,null),E(r,T),B||(j=et(r,"click",C),B=!0)},p(m,R){n=m,R[0]&2&&t!==(t="width:8px;height:8px;border-radius:50%;background:"+n[30]+";flex-shrink:0;"+(n[10](n[29])?"opacity:0.6;":""))&&H(s,"style",t),R[0]&2&&i!==(i=n[29]+"")&&na(c,i),R[0]&10&&u!==(u="color:#231F20;font-weight:"+(n[3]===n[29]?600:400))&&H(e,"style",u),n[31]&&n[2]!=="composition"?g?g.p(n,R):(g=ur(n),g.c(),g.m(r,T)):g&&(g.d(1),g=null),R[0]&10&&F!==(F="display:inline-flex; align-items:center; gap:6px; padding:4px 10px; font-size:0.78rem; cursor:pointer; border-radius:20px; border:"+(n[3]===n[29]?"2px solid "+n[30]:"1px solid var(--nxt-border,#E5E7EB)")+"; background:"+(n[3]===n[29]?"rgba(0,0,0,0.04)":"var(--nxt-surface,#fff)")+"; opacity:"+(n[33]?1:.4)+"; transition:opacity .15s;")&&H(r,"style",F)},d(m){m&&_(r),g&&g.d(),B=!1,j()}}}function fr(n){let r,s,t="Largest fund source",a,e,i,c,u,$=n[8]?n[8]+"% of total · ":"",T,F=n[12](n[5])?"+"+n[12](n[5])+"% CAGR":"",B;return{c(){r=I("div"),s=I("div"),s.textContent=t,a=D(),e=I("div"),i=ye(n[5]),c=D(),u=I("div"),T=ye($),B=ye(F),this.h()},l(j){r=S(j,"DIV",{style:!0});var g=K(r);s=S(g,"DIV",{style:!0,"data-svelte-h":!0}),sa(s)!=="svelte-1gmwg6t"&&(s.textContent=t),a=A(g),e=S(g,"DIV",{style:!0});var C=K(e);i=ue(C,n[5]),C.forEach(_),c=A(g),u=S(g,"DIV",{style:!0});var m=K(u);T=ue(m,$),B=ue(m,F),m.forEach(_),g.forEach(_),this.h()},h(){d(s,"font-size","10px"),d(s,"color","#6B7280"),d(s,"margin-bottom","3px"),d(e,"font-size","13px"),d(e,"font-weight","600"),d(e,"color","#231F20"),d(e,"white-space","nowrap"),d(e,"overflow","hidden"),d(e,"text-overflow","ellipsis"),d(u,"font-size","10px"),d(u,"color","#3B6D11"),d(u,"margin-top","2px"),d(r,"background","var(--nxt-surface,#fff)"),d(r,"border","0.5px solid var(--nxt-border,#E5E7EB)"),d(r,"border-radius","8px"),d(r,"padding","10px 12px")},m(j,g){p(j,r,g),E(r,s),E(r,a),E(r,e),E(e,i),E(r,c),E(r,u),E(u,T),E(u,B)},p(j,g){g[0]&32&&na(i,j[5]),g[0]&256&&$!==($=j[8]?j[8]+"% of total · ":"")&&na(T,$),g[0]&32&&F!==(F=j[12](j[5])?"+"+j[12](j[5])+"% CAGR":"")&&na(B,F)},d(j){j&&_(r)}}}function br(n){let r,s,t="Fastest growing",a,e,i,c,u,$=n[7]?"+"+n[7]+"% CAGR over period":"",T;return{c(){r=I("div"),s=I("div"),s.textContent=t,a=D(),e=I("div"),i=ye(n[4]),c=D(),u=I("div"),T=ye($),this.h()},l(F){r=S(F,"DIV",{style:!0});var B=K(r);s=S(B,"DIV",{style:!0,"data-svelte-h":!0}),sa(s)!=="svelte-1flw6uy"&&(s.textContent=t),a=A(B),e=S(B,"DIV",{style:!0});var j=K(e);i=ue(j,n[4]),j.forEach(_),c=A(B),u=S(B,"DIV",{style:!0});var g=K(u);T=ue(g,$),g.forEach(_),B.forEach(_),this.h()},h(){d(s,"font-size","10px"),d(s,"color","#6B7280"),d(s,"margin-bottom","3px"),d(e,"font-size","13px"),d(e,"font-weight","600"),d(e,"color","#231F20"),d(e,"white-space","nowrap"),d(e,"overflow","hidden"),d(e,"text-overflow","ellipsis"),d(u,"font-size","10px"),d(u,"color","#3B6D11"),d(u,"margin-top","2px"),d(r,"background","var(--nxt-surface,#fff)"),d(r,"border","0.5px solid var(--nxt-border,#E5E7EB)"),d(r,"border-radius","8px"),d(r,"padding","10px 12px")},m(F,B){p(F,r,B),E(r,s),E(r,a),E(r,e),E(e,i),E(r,c),E(r,u),E(u,T)},p(F,B){B[0]&16&&na(i,F[4]),B[0]&128&&$!==($=F[7]?"+"+F[7]+"% CAGR over period":"")&&na(T,$)},d(F){F&&_(r)}}}function Ls(n){let r,s,t="Fund sources",a,e,i=n[1].length+"",c,u,$,T,F=n[0].length+"",B,j;return{c(){r=I("div"),s=I("div"),s.textContent=t,a=D(),e=I("div"),c=ye(i),u=D(),$=I("div"),T=ye("across "),B=ye(F),j=ye(" fiscal years"),this.h()},l(g){r=S(g,"DIV",{style:!0});var C=K(r);s=S(C,"DIV",{style:!0,"data-svelte-h":!0}),sa(s)!=="svelte-iuu2b4"&&(s.textContent=t),a=A(C),e=S(C,"DIV",{style:!0});var m=K(e);c=ue(m,i),m.forEach(_),u=A(C),$=S(C,"DIV",{style:!0});var R=K($);T=ue(R,"across "),B=ue(R,F),j=ue(R," fiscal years"),R.forEach(_),C.forEach(_),this.h()},h(){d(s,"font-size","10px"),d(s,"color","#6B7280"),d(s,"margin-bottom","3px"),d(e,"font-size","13px"),d(e,"font-weight","600"),d(e,"color","#231F20"),d($,"font-size","10px"),d($,"color","#6B7280"),d($,"margin-top","2px"),d(r,"background","var(--nxt-surface,#fff)"),d(r,"border","0.5px solid var(--nxt-border,#E5E7EB)"),d(r,"border-radius","8px"),d(r,"padding","10px 12px")},m(g,C){p(g,r,C),E(r,s),E(r,a),E(r,e),E(e,c),E(r,u),E(r,$),E($,T),E($,B),E($,j)},p(g,C){C[0]&2&&i!==(i=g[1].length+"")&&na(c,i),C[0]&1&&F!==(F=g[0].length+"")&&na(B,F)},d(g){g&&_(r)}}}function Hs(n){let r,s,t="COVID peak injection",a,e,i=wt(n[9])+"",c,u,$,T="FY2020–2022 · temporary";return{c(){r=I("div"),s=I("div"),s.textContent=t,a=D(),e=I("div"),c=ye(i),u=D(),$=I("div"),$.textContent=T,this.h()},l(F){r=S(F,"DIV",{style:!0});var B=K(r);s=S(B,"DIV",{style:!0,"data-svelte-h":!0}),sa(s)!=="svelte-1gwjdcj"&&(s.textContent=t),a=A(B),e=S(B,"DIV",{style:!0});var j=K(e);c=ue(j,i),j.forEach(_),u=A(B),$=S(B,"DIV",{style:!0,"data-svelte-h":!0}),sa($)!=="svelte-e000el"&&($.textContent=T),B.forEach(_),this.h()},h(){d(s,"font-size","10px"),d(s,"color","#92400E"),d(s,"margin-bottom","3px"),d(e,"font-size","13px"),d(e,"font-weight","600"),d(e,"color","#231F20"),d($,"font-size","10px"),d($,"color","#92400E"),d($,"margin-top","2px"),d(r,"background","#FFF8E1"),d(r,"border","0.5px solid #F59E0B"),d(r,"border-radius","8px"),d(r,"padding","10px 12px")},m(F,B){p(F,r,B),E(r,s),E(r,a),E(r,e),E(e,c),E(r,u),E(r,$)},p(F,B){B[0]&512&&i!==(i=wt(F[9])+"")&&na(c,i)},d(F){F&&_(r)}}}function Vs(n){let r,s,t,a,e,i,c,u,$,T,F,B=da([["composition","Composition ($)"],["growth","Growth lines"],["share","Share (%)"]]),j=[];for(let N=0;N<3;N+=1)j[N]=dr(ir(n,B,N));let g=da(n[1]),C=[];for(let N=0;N<g.length;N+=1)C[N]=yr(_r(n,g,N));let m=n[5]&&fr(n),R=n[4]&&br(n);function v(N,V){return N[9]>0?Hs:Ls}let q=v(n),L=q(n);return{c(){r=I("div"),s=I("div"),t=I("div");for(let N=0;N<3;N+=1)j[N].c();a=D(),e=I("div");for(let N=0;N<C.length;N+=1)C[N].c();i=D(),c=I("div"),u=D(),$=I("div"),m&&m.c(),T=D(),R&&R.c(),F=D(),L.c(),this.h()},l(N){r=S(N,"DIV",{style:!0});var V=K(r);s=S(V,"DIV",{style:!0});var o=K(s);t=S(o,"DIV",{style:!0});var ge=K(t);for(let se=0;se<3;se+=1)j[se].l(ge);ge.forEach(_),o.forEach(_),a=A(V),e=S(V,"DIV",{style:!0});var Ae=K(e);for(let se=0;se<C.length;se+=1)C[se].l(Ae);Ae.forEach(_),i=A(V),c=S(V,"DIV",{style:!0}),K(c).forEach(_),u=A(V),$=S(V,"DIV",{style:!0});var He=K($);m&&m.l(He),T=A(He),R&&R.l(He),F=A(He),L.l(He),He.forEach(_),V.forEach(_),this.h()},h(){d(t,"display","flex"),d(t,"border","1px solid var(--nxt-border, #E5E7EB)"),d(t,"border-radius","8px"),d(t,"overflow","hidden"),d(s,"display","flex"),d(s,"align-items","center"),d(s,"justify-content","space-between"),d(s,"flex-wrap","wrap"),d(s,"gap","10px"),d(s,"margin-bottom","12px"),d(e,"display","flex"),d(e,"flex-wrap","wrap"),d(e,"gap","6px"),d(e,"margin-bottom","10px"),d(c,"width","100%"),d(c,"height","420px"),d($,"display","grid"),d($,"grid-template-columns","repeat(3,1fr)"),d($,"gap","8px"),d($,"margin-top","12px"),d(r,"font-family","var(--font-sans, sans-serif)")},m(N,V){p(N,r,V),E(r,s),E(s,t);for(let o=0;o<3;o+=1)j[o]&&j[o].m(t,null);E(r,a),E(r,e);for(let o=0;o<C.length;o+=1)C[o]&&C[o].m(e,null);E(r,i),E(r,c),n[22](c),E(r,u),E(r,$),m&&m.m($,null),E($,T),R&&R.m($,null),E($,F),L.m($,null)},p(N,V){if(V[0]&12){B=da([["composition","Composition ($)"],["growth","Growth lines"],["share","Share (%)"]]);let o;for(o=0;o<3;o+=1){const ge=ir(N,B,o);j[o]?j[o].p(ge,V):(j[o]=dr(ge),j[o].c(),j[o].m(t,null))}for(;o<3;o+=1)j[o].d(1)}if(V[0]&15374){g=da(N[1]);let o;for(o=0;o<g.length;o+=1){const ge=_r(N,g,o);C[o]?C[o].p(ge,V):(C[o]=yr(ge),C[o].c(),C[o].m(e,null))}for(;o<C.length;o+=1)C[o].d(1);C.length=g.length}N[5]?m?m.p(N,V):(m=fr(N),m.c(),m.m($,T)):m&&(m.d(1),m=null),N[4]?R?R.p(N,V):(R=br(N),R.c(),R.m($,F)):R&&(R.d(1),R=null),q===(q=v(N))&&L?L.p(N,V):(L.d(1),L=q(N),L&&(L.c(),L.m($,null)))},i:oa,o:oa,d(N){N&&_(r),Qa(j,N),Qa(C,N),n[22](null),m&&m.d(),R&&R.d(),L.d()}}}function wt(n){const r=Number(n)||0;return Math.abs(r)>=1e9?"$"+(r/1e9).toFixed(2)+"B":Math.abs(r)>=1e6?"$"+(r/1e6).toFixed(1)+"M":"$"+Math.round(r).toLocaleString()}function zs(n,r,s){let t,a,e,i,c,u,$,T,{fundTrend:F=[]}=r,{fundTrendYears:B=[]}=r,{fundSeriesNames:j=[]}=r,{fundSeriesTotals:g={}}=r,C,m,R="composition",v=null;const q=["2020","2021","2022"],L=h=>{const Y=(h||"").toLowerCase();return Y.includes("covid")||Y.includes("american rescue")||Y.includes("coronavirus")||Y.includes("cares")||Y.includes("crrsa")||Y.includes("arra")};function N(h){var Y;return((Y=F.find(M=>M.fund_type===h))==null?void 0:Y.fund_color)??"#4C4743"}function V(h){return B.map(Y=>{const M=F.find(U=>String(U.fiscal_year)===Y&&U.fund_type===h);return M?M.spend:0})}function o(h){return F.filter(Y=>String(Y.fiscal_year)===h).reduce((Y,M)=>Y+(Number(M.spend)||0),0)}function ge(h){const Y=V(h);if(Y.filter(fe=>fe>0).length<2)return null;const U=Y.find(fe=>fe>0),J=[...Y].reverse().find(fe=>fe>0),he=Y.length-1;return!U||!J||he<=0?null:((Math.pow(J/U,1/he)-1)*100).toFixed(1)}function Ae(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter(h){if(!h||!h.length)return"";const Y=h[0].axisValue,M=o(Y),U=h.slice().sort((J,he)=>(g[he.seriesName]||0)-(g[J.seriesName]||0)).map(J=>{const he=Number(J.value)||0,fe=M>0?(he/M*100).toFixed(1):"0.0";return J.marker+" "+J.seriesName+": "+wt(he)+" ("+fe+"%)"});return"<b>FY"+Y+"</b><br/>"+U.join("<br/>")}},grid:{left:64,right:24,top:20,bottom:36},xAxis:{type:"category",boundaryGap:!1,data:B,axisLabel:{fontSize:11}},yAxis:{type:"value",axisLabel:{formatter:h=>Math.abs(h)>=1e9?"$"+(h/1e9).toFixed(0)+"B":"$"+(h/1e6).toFixed(0)+"M",fontSize:11},splitLine:{lineStyle:{color:"#E5E7EB"}}},series:j.map(h=>{const Y=N(h);return{name:h,type:"line",stack:"total",smooth:!1,symbol:"none",lineStyle:{width:0},itemStyle:{color:Y,opacity:0},areaStyle:{color:Y,opacity:!!!v||v===h?.85:.06},emphasis:{focus:"series"},data:V(h)}})}}function He(){return{tooltip:{trigger:"axis",formatter(h){if(!h||!h.length)return"";const Y=h[0].axisValue,M=h.filter(U=>Number(U.value)>0).sort((U,J)=>(Number(J.value)||0)-(Number(U.value)||0)).map(U=>U.marker+" "+U.seriesName+": "+wt(U.value));return"<b>FY"+Y+"</b><br/>"+M.join("<br/>")}},grid:{left:64,right:120,top:20,bottom:36},xAxis:{type:"category",boundaryGap:!1,data:B,axisLabel:{fontSize:11},markArea:q.length>=2?{}:void 0},yAxis:{type:"value",axisLabel:{formatter:h=>Math.abs(h)>=1e9?"$"+(h/1e9).toFixed(1)+"B":"$"+(h/1e6).toFixed(0)+"M",fontSize:11},splitLine:{lineStyle:{color:"#E5E7EB"}}},series:[...j.map((h,Y)=>{const M=N(h),J=!!!v||v===h,he=L(h),fe=ge(h),De=V(h);return De[De.length-1],{name:h,type:"line",smooth:!0,symbol:"circle",symbolSize:4,lineStyle:{color:M,width:he?1.5:2,type:he?"dashed":"solid",opacity:J?1:.08},itemStyle:{color:M,opacity:J?1:.08},endLabel:{show:J||!v,formatter:Ke=>(h.length>14?h.slice(0,13)+"…":h)+(fe?`
`+(fe>0?"+":"")+fe+"%":""),color:M,fontSize:10,lineHeight:14},markArea:Y===0?{silent:!0,itemStyle:{color:"rgba(245,158,11,0.07)"},label:{show:!1},data:[[{xAxis:"2020"},{xAxis:"2022"}]]}:void 0,data:De}})]}}function se(){return{tooltip:{trigger:"axis",formatter(h){if(!h||!h.length)return"";const Y=h[0].axisValue,M=h.filter(U=>Number(U.value)>0).sort((U,J)=>(Number(J.value)||0)-(Number(U.value)||0)).map(U=>U.marker+" "+U.seriesName+": "+Number(U.value).toFixed(1)+"%");return"<b>FY"+Y+"</b><br/>"+M.join("<br/>")}},grid:{left:48,right:24,top:20,bottom:36},xAxis:{type:"category",boundaryGap:!1,data:B,axisLabel:{fontSize:11}},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:h=>h+"%",fontSize:11},splitLine:{lineStyle:{color:"#E5E7EB"}}},series:[...j.map((h,Y)=>{const M=N(h),J=!!!v||v===h,he=B.map(fe=>{const De=o(fe),Ke=F.find(ae=>String(ae.fiscal_year)===fe&&ae.fund_type===h),Fe=Ke?Ke.spend:0;return De>0?parseFloat((Fe/De*100).toFixed(2)):0});return{name:h,type:"line",stack:"pct",smooth:!1,symbol:"none",lineStyle:{width:0},itemStyle:{color:M,opacity:0},areaStyle:{color:M,opacity:J?.85:.06},emphasis:{focus:"series"},markArea:Y===0?{silent:!0,itemStyle:{color:"rgba(245,158,11,0.09)",borderColor:"#F59E0B",borderWidth:.5},label:{show:!0,position:"top",formatter:"COVID era",fontSize:9,color:"#92400E"},data:[[{xAxis:"2020"},{xAxis:"2022"}]]}:void 0,data:he}})]}}tr(()=>{C&&(s(16,m=Zr(C)),T&&m.setOption(T,!0));const h=()=>m==null?void 0:m.resize();return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)}),Kr(()=>m==null?void 0:m.dispose());function Z(h){s(3,v=v===h?null:h)}const pe=h=>{s(2,R=h),s(3,v=null)},le=h=>Z(h);function We(h){Wr[h?"unshift":"push"](()=>{C=h,s(6,C)})}return n.$$set=h=>{"fundTrend"in h&&s(14,F=h.fundTrend),"fundTrendYears"in h&&s(0,B=h.fundTrendYears),"fundSeriesNames"in h&&s(1,j=h.fundSeriesNames),"fundSeriesTotals"in h&&s(15,g=h.fundSeriesTotals)},n.$$.update=()=>{n.$$.dirty[0]&2&&s(19,t=j.filter(h=>!L(h))),n.$$.dirty[0]&2&&s(18,a=j.filter(h=>L(h))),n.$$.dirty[0]&557056&&s(5,e=t.length?t.reduce((h,Y)=>(g[Y]||0)>(g[h]||0)?Y:h,t[0]):null),n.$$.dirty[0]&524288&&s(4,i=t.length?t.reduce((h,Y)=>{const M=parseFloat(ge(Y)||"-999"),U=parseFloat(ge(h)||"-999");return M>U?Y:h},t[0]):null),n.$$.dirty[0]&262144&&s(9,c=(()=>{let h=0;return a.forEach(Y=>{V(Y).forEach(M=>{M>h&&(h=M)})}),h})()),n.$$.dirty[0]&33&&s(8,u=(()=>{const h=B[B.length-1];if(!h)return null;const Y=o(h);if(!Y)return null;const M=V(e),U=M[M.length-1]||0;return Y>0?(U/Y*100).toFixed(1):null})()),n.$$.dirty[0]&16&&s(7,$=i?ge(i):null),n.$$.dirty[0]&16396&&s(17,T=(()=>{const h=R;return F!=null&&F.length?h==="growth"?He():h==="share"?se():Ae():null})()),n.$$.dirty[0]&196608&&m&&T&&m.setOption(T,!0)},[B,j,R,v,i,e,C,$,u,c,L,N,ge,Z,F,g,m,T,a,t,pe,le,We]}class Ms extends rr{constructor(r){super(),sr(this,r,zs,Vs,ar,{fundTrend:14,fundTrendYears:0,fundSeriesNames:1,fundSeriesTotals:15},null,[-1,-1])}}function mr(n,r,s){const t=n.slice();return t[186]=r[s],t[188]=s,t}function gr(n,r,s){const t=n.slice();return t[189]=r[s],t}function pr(n,r,s){const t=n.slice();return t[189]=r[s],t}function hr(n,r,s){const t=n.slice();return t[194]=r[s][0],t[195]=r[s][1],t}function $r(n,r,s){const t=n.slice();return t[194]=r[s][0],t[195]=r[s][1],t}function Us(n){var a;let r,s=(de.title??((a=de.og)==null?void 0:a.title))+"",t;return{c(){r=I("h1"),t=ye(s),this.h()},l(e){r=S(e,"H1",{class:!0});var i=K(r);t=ue(i,s),i.forEach(_),this.h()},h(){H(r,"class","title")},m(e,i){p(e,r,i),E(r,t)},p:oa,d(e){e&&_(r)}}}function Os(n){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:oa,p:oa,d:oa}}function Ps(n){var i;let r,s,t,a,e;return document.title=r=de.title??((i=de.og)==null?void 0:i.title),{c(){s=D(),t=I("meta"),a=D(),e=I("meta"),this.h()},l(c){s=A(c),t=S(c,"META",{property:!0,content:!0}),a=A(c),e=S(c,"META",{name:!0,content:!0}),this.h()},h(){var c,u;H(t,"property","og:title"),H(t,"content",((c=de.og)==null?void 0:c.title)??de.title),H(e,"name","twitter:title"),H(e,"content",((u=de.og)==null?void 0:u.title)??de.title)},m(c,u){p(c,s,u),p(c,t,u),p(c,a,u),p(c,e,u)},p(c,u){var $;u&0&&r!==(r=de.title??(($=de.og)==null?void 0:$.title))&&(document.title=r)},d(c){c&&(_(s),_(t),_(a),_(e))}}}function Gs(n){var e,i;let r,s,t=(de.description||((e=de.og)==null?void 0:e.description))&&Qs(),a=((i=de.og)==null?void 0:i.image)&&Xs();return{c(){t&&t.c(),r=D(),a&&a.c(),s=fa()},l(c){t&&t.l(c),r=A(c),a&&a.l(c),s=fa()},m(c,u){t&&t.m(c,u),p(c,r,u),a&&a.m(c,u),p(c,s,u)},p(c,u){var $,T;(de.description||($=de.og)!=null&&$.description)&&t.p(c,u),(T=de.og)!=null&&T.image&&a.p(c,u)},d(c){c&&(_(r),_(s)),t&&t.d(c),a&&a.d(c)}}}function Qs(n){let r,s,t,a,e;return{c(){r=I("meta"),s=D(),t=I("meta"),a=D(),e=I("meta"),this.h()},l(i){r=S(i,"META",{name:!0,content:!0}),s=A(i),t=S(i,"META",{property:!0,content:!0}),a=A(i),e=S(i,"META",{name:!0,content:!0}),this.h()},h(){var i,c,u;H(r,"name","description"),H(r,"content",de.description??((i=de.og)==null?void 0:i.description)),H(t,"property","og:description"),H(t,"content",((c=de.og)==null?void 0:c.description)??de.description),H(e,"name","twitter:description"),H(e,"content",((u=de.og)==null?void 0:u.description)??de.description)},m(i,c){p(i,r,c),p(i,s,c),p(i,t,c),p(i,a,c),p(i,e,c)},p:oa,d(i){i&&(_(r),_(s),_(t),_(a),_(e))}}}function Xs(n){let r,s,t;return{c(){r=I("meta"),s=D(),t=I("meta"),this.h()},l(a){r=S(a,"META",{property:!0,content:!0}),s=A(a),t=S(a,"META",{name:!0,content:!0}),this.h()},h(){var a,e;H(r,"property","og:image"),H(r,"content",or((a=de.og)==null?void 0:a.image)),H(t,"name","twitter:image"),H(t,"content",or((e=de.og)==null?void 0:e.image))},m(a,e){p(a,r,e),p(a,s,e),p(a,t,e)},p:oa,d(a){a&&(_(r),_(s),_(t))}}}function wr(n){let r,s,t,a,e;function i(){return n[136](n[194])}return{c(){r=I("button"),s=ye(n[195]),this.h()},l(c){r=S(c,"BUTTON",{style:!0});var u=K(r);s=ue(u,n[195]),u.forEach(_),this.h()},h(){H(r,"style",t="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[7]===n[194]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[7]===n[194]?"#ffffff":"#211030")+"; font-weight: "+(n[7]===n[194]?700:500))},m(c,u){p(c,r,u),E(r,s),a||(e=et(r,"click",i),a=!0)},p(c,u){n=c,u[0]&128&&t!==(t="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[7]===n[194]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[7]===n[194]?"#ffffff":"#211030")+"; font-weight: "+(n[7]===n[194]?700:500))&&H(r,"style",t)},d(c){c&&_(r),a=!1,e()}}}function kr(n){let r,s;return r=new aa({props:{queryID:"g_fy",queryResult:n[12]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&4096&&(e.queryResult=t[12]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function vr(n){let r,s;return r=new aa({props:{queryID:"g_fund",queryResult:n[13]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&8192&&(e.queryResult=t[13]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function xr(n){let r,s;return r=new aa({props:{queryID:"g_agency",queryResult:n[14]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&16384&&(e.queryResult=t[14]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Fr(n){let r,s;return r=new aa({props:{queryID:"filtered",queryResult:n[15]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&32768&&(e.queryResult=t[15]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Cr(n){let r,s;return r=new aa({props:{queryID:"yearly_rollup",queryResult:n[16]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&65536&&(e.queryResult=t[16]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function jr(n){let r,s;return r=new aa({props:{queryID:"scope_meta",queryResult:n[17]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&131072&&(e.queryResult=t[17]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Er(n){let r,s;return r=new aa({props:{queryID:"filtered_latest",queryResult:n[18]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&262144&&(e.queryResult=t[18]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Br(n){let r,s;return r=new aa({props:{queryID:"filtered_prior",queryResult:n[19]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&524288&&(e.queryResult=t[19]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Ar(n){let r,s;return r=new aa({props:{queryID:"overview",queryResult:n[0]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&1&&(e.queryResult=t[0]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Dr(n){let r,s;return r=new aa({props:{queryID:"yearly",queryResult:n[1]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&2&&(e.queryResult=t[1]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Rr(n){let r,s;return r=new aa({props:{queryID:"yoy_detail",queryResult:n[20]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&1048576&&(e.queryResult=t[20]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Tr(n){let r,s;return r=new aa({props:{queryID:"fiscal_overview_cagr",queryResult:n[2]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&4&&(e.queryResult=t[2]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Sr(n){let r,s;return r=new aa({props:{queryID:"snapshot_agencies",queryResult:n[21]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&2097152&&(e.queryResult=t[21]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Ir(n){let r,s;return r=new aa({props:{queryID:"fund_rules",queryResult:n[22]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&4194304&&(e.queryResult=t[22]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function qr(n){let r,s;return r=new aa({props:{queryID:"fund_profile",queryResult:n[23]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&8388608&&(e.queryResult=t[23]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Nr(n){let r,s;return r=new aa({props:{queryID:"fund_snapshot",queryResult:n[24]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&16777216&&(e.queryResult=t[24]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Yr(n){let r,s;return r=new aa({props:{queryID:"agency_movers",queryResult:n[25]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&33554432&&(e.queryResult=t[25]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Lr(n){let r,s;return r=new aa({props:{queryID:"fund_trend",queryResult:n[3]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&8&&(e.queryResult=t[3]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Hr(n){let r,s;return r=new aa({props:{queryID:"top_agencies_trend",queryResult:n[4]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&16&&(e.queryResult=t[4]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Vr(n){let r,s;return r=new aa({props:{queryID:"agency_trend_lines",queryResult:n[5]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&32&&(e.queryResult=t[5]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function zr(n){let r,s;return r=new aa({props:{queryID:"agency_drill",queryResult:n[6]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&64&&(e.queryResult=t[6]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Mr(n){let r,s;return r=new aa({props:{queryID:"agency_latest",queryResult:n[26]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&67108864&&(e.queryResult=t[26]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Ws(n){let r,s;return r=new ft({props:{value:"%",valueLabel:"All Years"}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p:oa,i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Ks(n){let r,s;return r=new ft({props:{value:"%",valueLabel:"All Fund Types"}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p:oa,i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Js(n){let r,s;return r=new ft({props:{value:"%",valueLabel:"All Agencies"}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p:oa,i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Zs(n){let r,s,t,a,e,i;return r=new $t({props:{name:"f_fy",data:n[12],value:"fy",title:"Fiscal Year",defaultValue:"%",$$slots:{default:[Ws]},$$scope:{ctx:n}}}),t=new $t({props:{name:"f_fund",data:n[13],value:"fund_type",title:"Fund Type",defaultValue:"%",$$slots:{default:[Ks]},$$scope:{ctx:n}}}),e=new $t({props:{name:"f_agency",data:n[14],value:"agency_name",title:"Agency",defaultValue:"%",$$slots:{default:[Js]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment),s=D(),W(t.$$.fragment),a=D(),W(e.$$.fragment)},l(c){X(r.$$.fragment,c),s=A(c),X(t.$$.fragment,c),a=A(c),X(e.$$.fragment,c)},m(c,u){Q(r,c,u),p(c,s,u),Q(t,c,u),p(c,a,u),Q(e,c,u),i=!0},p(c,u){const $={};u[0]&4096&&($.data=c[12]),u[6]&16384&&($.$$scope={dirty:u,ctx:c}),r.$set($);const T={};u[0]&8192&&(T.data=c[13]),u[6]&16384&&(T.$$scope={dirty:u,ctx:c}),t.$set(T);const F={};u[0]&16384&&(F.data=c[14]),u[6]&16384&&(F.$$scope={dirty:u,ctx:c}),e.$set(F)},i(c){i||(f(r.$$.fragment,c),f(t.$$.fragment,c),f(e.$$.fragment,c),i=!0)},o(c){k(r.$$.fragment,c),k(t.$$.fragment,c),k(e.$$.fragment,c),i=!1},d(c){c&&(_(s),_(a)),G(r,c),G(t,c),G(e,c)}}}function en(n){let r,s;return r=new Rs({props:{cols:"3",$$slots:{default:[Zs]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&28672|a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function an(n){let r,s,t,a;return r=new ft({props:{value:"trend",valueLabel:"Trend Over Years"}}),t=new ft({props:{value:"latest",valueLabel:"Latest Year Snapshot"}}),{c(){W(r.$$.fragment),s=D(),W(t.$$.fragment)},l(e){X(r.$$.fragment,e),s=A(e),X(t.$$.fragment,e)},m(e,i){Q(r,e,i),p(e,s,i),Q(t,e,i),a=!0},p:oa,i(e){a||(f(r.$$.fragment,e),f(t.$$.fragment,e),a=!0)},o(e){k(r.$$.fragment,e),k(t.$$.fragment,e),a=!1},d(e){e&&_(s),G(r,e),G(t,e)}}}function Ur(n){var Ee,Be,Le,Ge;let r,s,t,a,e=(((Be=(Ee=n[0])==null?void 0:Ee[0])==null?void 0:Be.max_year_label)??"N/A")+"",i,c,u,$,T=n[137]()+"",F,B,j,g,C="YoY Change",m,R,v=n[138]()+"",q,L,N,V,o=((Ge=(Le=n[0])==null?void 0:Le[0])==null?void 0:Ge.yoy_pct)!=null?(n[0][0].yoy_pct>=0?"+":"")+n[0][0].yoy_pct+"%":"—",ge,Ae,He,se,Z,pe,le,We='<a href="#top-10-agencies-by-budget--latest-year">Top 10 agencies by budget — Latest Year</a>',h,Y,M,U,J,he,fe,De='<a href="#fund-type-share--latest-year">Fund type share — Latest Year</a>',Ke,Fe,ae,Ze,Je,ta,w,O='<a href="#budget-changes--year-over-year">Budget Changes — Year over Year</a>',te,Ve,ca,qe,re,ce,we,be,ze='<a href="#agency-drill-down-table--click-a-row-to-open-the-agency-page">Agency Drill-Down Table — Click a row to open the Agency page</a>',Ne,_e,ne,me,oe;const Me=[rn,tn],ke=[];function Ue(b,z){var l;return((l=b[21])==null?void 0:l.length)>0?0:1}Y=Ue(n),M=ke[Y]=Me[Y](n);const je=[ln,nn],ie=[];function Ye(b,z){var l;return((l=b[24])==null?void 0:l.length)>0?0:1}Fe=Ye(n),ae=ie[Fe]=je[Fe](n),Ve=new Xa({props:{status:"info",$$slots:{default:[cn]},$$scope:{ctx:n}}}),qe=new vs({props:{data:n[25],labelField:"agency_name",title:"Biggest budget changes vs prior year",height:"520px",limit:10}});const Oe=[dn,_n],ve=[];function Pe(b,z){var l;return((l=b[26])==null?void 0:l.length)>0?0:1}return _e=Pe(n),ne=ve[_e]=Oe[_e](n),{c(){r=I("div"),s=I("div"),t=I("div"),a=ye("Latest Year ("),i=ye(e),c=ye(")"),u=D(),$=I("div"),F=ye(T),B=D(),j=I("div"),g=I("div"),g.textContent=C,m=D(),R=I("div"),q=ye(v),N=D(),V=I("div"),ge=ye(o),se=D(),Z=I("hr"),pe=D(),le=I("h2"),le.innerHTML=We,h=D(),M.c(),U=D(),J=I("hr"),he=D(),fe=I("h2"),fe.innerHTML=De,Ke=D(),ae.c(),Ze=D(),Je=I("hr"),ta=D(),w=I("h2"),w.innerHTML=O,te=D(),W(Ve.$$.fragment),ca=D(),W(qe.$$.fragment),re=D(),ce=I("hr"),we=D(),be=I("h2"),be.innerHTML=ze,Ne=D(),ne.c(),me=fa(),this.h()},l(b){r=S(b,"DIV",{style:!0});var z=K(r);s=S(z,"DIV",{style:!0});var l=K(s);t=S(l,"DIV",{style:!0});var y=K(t);a=ue(y,"Latest Year ("),i=ue(y,e),c=ue(y,")"),y.forEach(_),u=A(l),$=S(l,"DIV",{style:!0});var Re=K($);F=ue(Re,T),Re.forEach(_),l.forEach(_),B=A(z),j=S(z,"DIV",{style:!0});var $e=K(j);g=S($e,"DIV",{style:!0,"data-svelte-h":!0}),sa(g)!=="svelte-14nbeix"&&(g.textContent=C),m=A($e),R=S($e,"DIV",{style:!0});var _a=K(R);q=ue(_a,v),_a.forEach(_),N=A($e),V=S($e,"DIV",{style:!0});var Xe=K(V);ge=ue(Xe,o),Xe.forEach(_),$e.forEach(_),z.forEach(_),se=A(b),Z=S(b,"HR",{class:!0}),pe=A(b),le=S(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(le)!=="svelte-nm1zq3"&&(le.innerHTML=We),h=A(b),M.l(b),U=A(b),J=S(b,"HR",{class:!0}),he=A(b),fe=S(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(fe)!=="svelte-3eb846"&&(fe.innerHTML=De),Ke=A(b),ae.l(b),Ze=A(b),Je=S(b,"HR",{class:!0}),ta=A(b),w=S(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(w)!=="svelte-wp3p2i"&&(w.innerHTML=O),te=A(b),X(Ve.$$.fragment,b),ca=A(b),X(qe.$$.fragment,b),re=A(b),ce=S(b,"HR",{class:!0}),we=A(b),be=S(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(be)!=="svelte-1wcrd8c"&&(be.innerHTML=ze),Ne=A(b),ne.l(b),me=fa(),this.h()},h(){var b,z,l,y,Re,$e;d(t,"font-size","11px"),d(t,"font-weight","500"),d(t,"color","#6B7280"),d(t,"text-transform","uppercase"),d(t,"letter-spacing",".05em"),d(t,"margin-bottom","6px"),d($,"font-size","1.8rem"),d($,"font-weight","700"),d($,"color","#231F20"),d(s,"background","var(--nxt-surface)"),d(s,"border","1px solid var(--nxt-border)"),d(s,"border-left","4px solid #C8122C"),d(s,"border-radius","8px"),d(s,"padding","16px 28px"),d(s,"min-width","200px"),d(s,"text-align","center"),d(g,"font-size","11px"),d(g,"font-weight","500"),d(g,"color","#6B7280"),d(g,"text-transform","uppercase"),d(g,"letter-spacing",".05em"),d(g,"margin-bottom","6px"),H(R,"style",L="font-size:1.8rem; font-weight:700; color:"+((((z=(b=n[0])==null?void 0:b[0])==null?void 0:z.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),H(V,"style",Ae="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((y=(l=n[0])==null?void 0:l[0])==null?void 0:y.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),H(j,"style",He="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+(((($e=(Re=n[0])==null?void 0:Re[0])==null?void 0:$e.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"),d(r,"display","flex"),d(r,"justify-content","center"),d(r,"gap","16px"),d(r,"flex-wrap","wrap"),d(r,"margin","16px 0"),H(Z,"class","markdown"),H(le,"class","markdown"),H(le,"id","top-10-agencies-by-budget--latest-year"),H(J,"class","markdown"),H(fe,"class","markdown"),H(fe,"id","fund-type-share--latest-year"),H(Je,"class","markdown"),H(w,"class","markdown"),H(w,"id","budget-changes--year-over-year"),H(ce,"class","markdown"),H(be,"class","markdown"),H(be,"id","agency-drill-down-table--click-a-row-to-open-the-agency-page")},m(b,z){p(b,r,z),E(r,s),E(s,t),E(t,a),E(t,i),E(t,c),E(s,u),E(s,$),E($,F),E(r,B),E(r,j),E(j,g),E(j,m),E(j,R),E(R,q),E(j,N),E(j,V),E(V,ge),p(b,se,z),p(b,Z,z),p(b,pe,z),p(b,le,z),p(b,h,z),ke[Y].m(b,z),p(b,U,z),p(b,J,z),p(b,he,z),p(b,fe,z),p(b,Ke,z),ie[Fe].m(b,z),p(b,Ze,z),p(b,Je,z),p(b,ta,z),p(b,w,z),p(b,te,z),Q(Ve,b,z),p(b,ca,z),Q(qe,b,z),p(b,re,z),p(b,ce,z),p(b,we,z),p(b,be,z),p(b,Ne,z),ve[_e].m(b,z),p(b,me,z),oe=!0},p(b,z){var Xe,la,ba,$a,va,Wa,Ka,ma,ga,wa;(!oe||z[0]&1)&&e!==(e=(((la=(Xe=b[0])==null?void 0:Xe[0])==null?void 0:la.max_year_label)??"N/A")+"")&&na(i,e),(!oe||z[0]&1)&&T!==(T=b[137]()+"")&&na(F,T),(!oe||z[0]&1)&&v!==(v=b[138]()+"")&&na(q,v),(!oe||z[0]&1&&L!==(L="font-size:1.8rem; font-weight:700; color:"+(((($a=(ba=b[0])==null?void 0:ba[0])==null?void 0:$a.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&H(R,"style",L),(!oe||z[0]&1)&&o!==(o=((Wa=(va=b[0])==null?void 0:va[0])==null?void 0:Wa.yoy_pct)!=null?(b[0][0].yoy_pct>=0?"+":"")+b[0][0].yoy_pct+"%":"—")&&na(ge,o),(!oe||z[0]&1&&Ae!==(Ae="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((ma=(Ka=b[0])==null?void 0:Ka[0])==null?void 0:ma.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&H(V,"style",Ae),(!oe||z[0]&1&&He!==(He="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((wa=(ga=b[0])==null?void 0:ga[0])==null?void 0:wa.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"))&&H(j,"style",He);let l=Y;Y=Ue(b),Y===l?ke[Y].p(b,z):(Ie(),k(ke[l],1,1,()=>{ke[l]=null}),Se(),M=ke[Y],M?M.p(b,z):(M=ke[Y]=Me[Y](b),M.c()),f(M,1),M.m(U.parentNode,U));let y=Fe;Fe=Ye(b),Fe===y?ie[Fe].p(b,z):(Ie(),k(ie[y],1,1,()=>{ie[y]=null}),Se(),ae=ie[Fe],ae?ae.p(b,z):(ae=ie[Fe]=je[Fe](b),ae.c()),f(ae,1),ae.m(Ze.parentNode,Ze));const Re={};z[6]&16384&&(Re.$$scope={dirty:z,ctx:b}),Ve.$set(Re);const $e={};z[0]&33554432&&($e.data=b[25]),qe.$set($e);let _a=_e;_e=Pe(b),_e===_a?ve[_e].p(b,z):(Ie(),k(ve[_a],1,1,()=>{ve[_a]=null}),Se(),ne=ve[_e],ne?ne.p(b,z):(ne=ve[_e]=Oe[_e](b),ne.c()),f(ne,1),ne.m(me.parentNode,me))},i(b){oe||(f(M),f(ae),f(Ve.$$.fragment,b),f(qe.$$.fragment,b),f(ne),oe=!0)},o(b){k(M),k(ae),k(Ve.$$.fragment,b),k(qe.$$.fragment,b),k(ne),oe=!1},d(b){b&&(_(r),_(se),_(Z),_(pe),_(le),_(h),_(U),_(J),_(he),_(fe),_(Ke),_(Ze),_(Je),_(ta),_(w),_(te),_(ca),_(re),_(ce),_(we),_(be),_(Ne),_(me)),ke[Y].d(b),ie[Fe].d(b),G(Ve,b),G(qe,b),ve[_e].d(b)}}}function tn(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[sn]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function rn(n){let r,s,t,a;return r=new Fs({props:{data:n[21],entityLabel:"agencies"}}),t=new Cs({props:{data:n[21],title:"",barField:"spend",labelField:"agency_name",pctField:"pct_of_total",cumulativeField:"cumulative",totalField:"grand_total",height:"420px"}}),{c(){W(r.$$.fragment),s=D(),W(t.$$.fragment)},l(e){X(r.$$.fragment,e),s=A(e),X(t.$$.fragment,e)},m(e,i){Q(r,e,i),p(e,s,i),Q(t,e,i),a=!0},p(e,i){const c={};i[0]&2097152&&(c.data=e[21]),r.$set(c);const u={};i[0]&2097152&&(u.data=e[21]),t.$set(u)},i(e){a||(f(r.$$.fragment,e),f(t.$$.fragment,e),a=!0)},o(e){k(r.$$.fragment,e),k(t.$$.fragment,e),a=!1},d(e){e&&_(s),G(r,e),G(t,e)}}}function sn(n){let r;return{c(){r=ye("No agency snapshot data available for this filter selection.")},l(s){r=ue(s,"No agency snapshot data available for this filter selection.")},m(s,t){p(s,r,t)},d(s){s&&_(r)}}}function nn(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[on]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function ln(n){let r,s,t,a;return r=new Ys({props:{data:n[24],fund_profile:n[23],title:"",height:"420px",nameField:"fund_type",valueField:"latest_budget",pctField:"latest_year_pct"}}),t=new Jr({props:{data:n[24],columns:n[33],search:!0,defaultSort:"latest_budget",defaultDir:-1}}),{c(){W(r.$$.fragment),s=D(),W(t.$$.fragment)},l(e){X(r.$$.fragment,e),s=A(e),X(t.$$.fragment,e)},m(e,i){Q(r,e,i),p(e,s,i),Q(t,e,i),a=!0},p(e,i){const c={};i[0]&16777216&&(c.data=e[24]),i[0]&8388608&&(c.fund_profile=e[23]),r.$set(c);const u={};i[0]&16777216&&(u.data=e[24]),i[1]&4&&(u.columns=e[33]),t.$set(u)},i(e){a||(f(r.$$.fragment,e),f(t.$$.fragment,e),a=!0)},o(e){k(r.$$.fragment,e),k(t.$$.fragment,e),a=!1},d(e){e&&_(s),G(r,e),G(t,e)}}}function on(n){let r;return{c(){r=ye("No fund type data available for this filter selection.")},l(s){r=ue(s,"No fund type data available for this filter selection.")},m(s,t){p(s,r,t)},d(s){s&&_(r)}}}function cn(n){let r;return{c(){r=ye("Agencies sorted by absolute dollar change from prior year.")},l(s){r=ue(s,"Agencies sorted by absolute dollar change from prior year.")},m(s,t){p(s,r,t)},d(s){s&&_(r)}}}function _n(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[un]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function dn(n){let r,s;return r=new Jr({props:{data:n[26],columns:n[34],linkField:"agency_link",search:!0,defaultSort:"latest_budget",defaultDir:-1}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&67108864&&(e.data=t[26]),a[1]&8&&(e.columns=t[34]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function un(n){let r;return{c(){r=ye("No agency data available for this filter selection.")},l(s){r=ue(s,"No agency data available for this filter selection.")},m(s,t){p(s,r,t)},d(s){s&&_(r)}}}function Or(n){let r,s,t,a='<a href="#fiscal-overview">Fiscal Overview</a>',e,i,c,u,$='<a href="#fund-composition-over-time">Fund Composition Over Time</a>',T,F,B,j,g,C='<a href="#top-agencies-by-budget--trend-over-time">Top Agencies by Budget — Trend Over Time</a>',m,R,v,q,L,N,V,o='<a href="#agency-budget-by-year---click-on-agency-to-drill-to-its-specific-page">Agency Budget by Year - Click on Agency to drill to its specific Page</a>',ge,Ae,He,se,Z,pe,le,We,h,Y,M;i=new xs({props:{yearly:n[1],yoyDetail:n[20],fiscalOverviewCagr:n[2],cagrPct:n[31],chartHeight:vn}});const U=[fn,yn],J=[];function he(w,O){var te;return((te=w[3])==null?void 0:te.length)>0?0:1}F=he(n),B=J[F]=U[F](n);const fe=[gn,mn],De=[];function Ke(w,O){var te;return((te=w[5])==null?void 0:te.length)>0?0:1}R=Ke(n),v=De[R]=fe[R](n);let Fe=da([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]),ae=[];for(let w=0;w<3;w+=1)ae[w]=Pr(hr(n,Fe,w));const Ze=[$n,hn],Je=[];function ta(w,O){var te;return((te=w[27])==null?void 0:te.length)>0?0:1}return pe=ta(n),le=Je[pe]=Ze[pe](n),{c(){r=I("hr"),s=D(),t=I("h2"),t.innerHTML=a,e=D(),W(i.$$.fragment),c=ye(`
---
`),u=I("h2"),u.innerHTML=$,T=D(),B.c(),j=ye(`
---
`),g=I("h2"),g.innerHTML=C,m=D(),v.c(),q=D(),L=I("hr"),N=D(),V=I("h2"),V.innerHTML=o,ge=D(),Ae=I("div");for(let w=0;w<3;w+=1)ae[w].c();He=D(),se=I("input"),Z=D(),le.c(),We=fa(),this.h()},l(w){r=S(w,"HR",{class:!0}),s=A(w),t=S(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(t)!=="svelte-1d7gdnx"&&(t.innerHTML=a),e=A(w),X(i.$$.fragment,w),c=ue(w,`
---
`),u=S(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(u)!=="svelte-1xzbziy"&&(u.innerHTML=$),T=A(w),B.l(w),j=ue(w,`
---
`),g=S(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(g)!=="svelte-woniu6"&&(g.innerHTML=C),m=A(w),v.l(w),q=A(w),L=S(w,"HR",{class:!0}),N=A(w),V=S(w,"H2",{class:!0,id:!0,"data-svelte-h":!0}),sa(V)!=="svelte-wpk9i7"&&(V.innerHTML=o),ge=A(w),Ae=S(w,"DIV",{style:!0});var O=K(Ae);for(let te=0;te<3;te+=1)ae[te].l(O);O.forEach(_),He=A(w),se=S(w,"INPUT",{placeholder:!0,style:!0}),Z=A(w),le.l(w),We=fa(),this.h()},h(){H(r,"class","markdown"),H(t,"class","markdown"),H(t,"id","fiscal-overview"),H(u,"class","markdown"),H(u,"id","fund-composition-over-time"),H(g,"class","markdown"),H(g,"id","top-agencies-by-budget--trend-over-time"),H(L,"class","markdown"),H(V,"class","markdown"),H(V,"id","agency-budget-by-year---click-on-agency-to-drill-to-its-specific-page"),d(Ae,"display","flex"),d(Ae,"gap","8px"),d(Ae,"margin","8px 0 14px 0"),H(se,"placeholder","Search agencies..."),d(se,"border","1px solid var(--nxt-border)"),d(se,"border-radius","8px"),d(se,"padding","8px 12px"),d(se,"font-size","0.9rem"),d(se,"width","280px"),d(se,"margin-bottom","12px"),d(se,"background","var(--nxt-surface)"),d(se,"color","var(--nxt-text)")},m(w,O){p(w,r,O),p(w,s,O),p(w,t,O),p(w,e,O),Q(i,w,O),p(w,c,O),p(w,u,O),p(w,T,O),J[F].m(w,O),p(w,j,O),p(w,g,O),p(w,m,O),De[R].m(w,O),p(w,q,O),p(w,L,O),p(w,N,O),p(w,V,O),p(w,ge,O),p(w,Ae,O);for(let te=0;te<3;te+=1)ae[te]&&ae[te].m(Ae,null);p(w,He,O),p(w,se,O),lr(se,n[9]),p(w,Z,O),Je[pe].m(w,O),p(w,We,O),h=!0,Y||(M=et(se,"input",n[140]),Y=!0)},p(w,O){const te={};O[0]&2&&(te.yearly=w[1]),O[0]&1048576&&(te.yoyDetail=w[20]),O[0]&4&&(te.fiscalOverviewCagr=w[2]),O[1]&1&&(te.cagrPct=w[31]),i.$set(te);let Ve=F;F=he(w),F===Ve?J[F].p(w,O):(Ie(),k(J[Ve],1,1,()=>{J[Ve]=null}),Se(),B=J[F],B?B.p(w,O):(B=J[F]=U[F](w),B.c()),f(B,1),B.m(j.parentNode,j));let ca=R;if(R=Ke(w),R===ca?De[R].p(w,O):(Ie(),k(De[ca],1,1,()=>{De[ca]=null}),Se(),v=De[R],v?v.p(w,O):(v=De[R]=fe[R](w),v.c()),f(v,1),v.m(q.parentNode,q)),O[0]&256){Fe=da([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]);let re;for(re=0;re<3;re+=1){const ce=hr(w,Fe,re);ae[re]?ae[re].p(ce,O):(ae[re]=Pr(ce),ae[re].c(),ae[re].m(Ae,null))}for(;re<3;re+=1)ae[re].d(1)}O[0]&512&&se.value!==w[9]&&lr(se,w[9]);let qe=pe;pe=ta(w),pe===qe?Je[pe].p(w,O):(Ie(),k(Je[qe],1,1,()=>{Je[qe]=null}),Se(),le=Je[pe],le?le.p(w,O):(le=Je[pe]=Ze[pe](w),le.c()),f(le,1),le.m(We.parentNode,We))},i(w){h||(f(i.$$.fragment,w),f(B),f(v),f(le),h=!0)},o(w){k(i.$$.fragment,w),k(B),k(v),k(le),h=!1},d(w){w&&(_(r),_(s),_(t),_(e),_(c),_(u),_(T),_(j),_(g),_(m),_(q),_(L),_(N),_(V),_(ge),_(Ae),_(He),_(se),_(Z),_(We)),G(i,w),J[F].d(w),De[R].d(w),Qa(ae,w),Je[pe].d(w),Y=!1,M()}}}function yn(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[bn]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function fn(n){let r,s;return r=new Ms({props:{fundTrend:n[3],fundTrendYears:n[30],fundSeriesNames:n[29],fundSeriesTotals:n[11]}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&8&&(e.fundTrend=t[3]),a[0]&1073741824&&(e.fundTrendYears=t[30]),a[0]&536870912&&(e.fundSeriesNames=t[29]),a[0]&2048&&(e.fundSeriesTotals=t[11]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function bn(n){let r;return{c(){r=ye("No fund trend data available for this filter selection.")},l(s){r=ue(s,"No fund trend data available for this filter selection.")},m(s,t){p(s,r,t)},d(s){s&&_(r)}}}function mn(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[pn]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function gn(n){let r,s;return r=new js({props:{agencies:n[4],trendLines:n[5],years:n[28],title:"Top Agencies by Budget — Trend Over Time",entityLabel:"agency",topN:5,height:"520px"}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[0]&16&&(e.agencies=t[4]),a[0]&32&&(e.trendLines=t[5]),a[0]&268435456&&(e.years=t[28]),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function pn(n){let r;return{c(){r=ye("No agency trend data available for this filter selection.")},l(s){r=ue(s,"No agency trend data available for this filter selection.")},m(s,t){p(s,r,t)},d(s){s&&_(r)}}}function Pr(n){let r,s,t,a,e;function i(){return n[139](n[194])}return{c(){r=I("button"),s=ye(n[195]),this.h()},l(c){r=S(c,"BUTTON",{style:!0});var u=K(r);s=ue(u,n[195]),u.forEach(_),this.h()},h(){H(r,"style",t="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[8]===n[194]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[8]===n[194]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[8]===n[194]?"#C8122C":"#231F20")+"; font-weight: "+(n[8]===n[194]?700:500))},m(c,u){p(c,r,u),E(r,s),a||(e=et(r,"click",i),a=!0)},p(c,u){n=c,u[0]&256&&t!==(t="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[8]===n[194]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[8]===n[194]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[8]===n[194]?"#C8122C":"#231F20")+"; font-weight: "+(n[8]===n[194]?700:500))&&H(r,"style",t)},d(c){c&&_(r),a=!1,e()}}}function hn(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[wn]},$$scope:{ctx:n}}}),{c(){W(r.$$.fragment)},l(t){X(r.$$.fragment,t)},m(t,a){Q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(f(r.$$.fragment,t),s=!0)},o(t){k(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function $n(n){let r,s,t,a,e,i="Agency",c,u,$,T,F,B=da(n[10]),j=[];for(let m=0;m<B.length;m+=1)j[m]=Gr(pr(n,B,m));let g=da(n[27]),C=[];for(let m=0;m<g.length;m+=1)C[m]=Xr(mr(n,g,m));return{c(){r=I("div"),s=I("table"),t=I("thead"),a=I("tr"),e=I("th"),e.textContent=i,c=D();for(let m=0;m<j.length;m+=1)j[m].c();u=D(),$=I("th"),T=D(),F=I("tbody");for(let m=0;m<C.length;m+=1)C[m].c();this.h()},l(m){r=S(m,"DIV",{style:!0});var R=K(r);s=S(R,"TABLE",{style:!0});var v=K(s);t=S(v,"THEAD",{});var q=K(t);a=S(q,"TR",{style:!0});var L=K(a);e=S(L,"TH",{style:!0,"data-svelte-h":!0}),sa(e)!=="svelte-taluwf"&&(e.textContent=i),c=A(L);for(let V=0;V<j.length;V+=1)j[V].l(L);u=A(L),$=S(L,"TH",{style:!0}),K($).forEach(_),L.forEach(_),q.forEach(_),T=A(v),F=S(v,"TBODY",{});var N=K(F);for(let V=0;V<C.length;V+=1)C[V].l(N);N.forEach(_),v.forEach(_),R.forEach(_),this.h()},h(){d(e,"text-align","left"),d(e,"padding","10px 14px"),d(e,"font-weight","700"),d(e,"color","#231F20"),d(e,"min-width","260px"),d($,"padding","10px 8px"),d(a,"background","var(--nxt-pink)"),d(a,"border-bottom","2px solid #C8122C"),d(s,"width","100%"),d(s,"border-collapse","collapse"),d(s,"font-size","0.875rem"),d(r,"overflow-x","auto"),d(r,"border-radius","8px"),d(r,"border","1px solid var(--nxt-border)"),d(r,"background","var(--nxt-surface)")},m(m,R){p(m,r,R),E(r,s),E(s,t),E(t,a),E(a,e),E(a,c);for(let v=0;v<j.length;v+=1)j[v]&&j[v].m(a,null);E(a,u),E(a,$),E(s,T),E(s,F);for(let v=0;v<C.length;v+=1)C[v]&&C[v].m(F,null)},p(m,R){if(R[0]&1024){B=da(m[10]);let v;for(v=0;v<B.length;v+=1){const q=pr(m,B,v);j[v]?j[v].p(q,R):(j[v]=Gr(q),j[v].c(),j[v].m(a,u))}for(;v<j.length;v+=1)j[v].d(1);j.length=B.length}if(R[0]&134218752|R[1]&96){g=da(m[27]);let v;for(v=0;v<g.length;v+=1){const q=mr(m,g,v);C[v]?C[v].p(q,R):(C[v]=Xr(q),C[v].c(),C[v].m(F,null))}for(;v<C.length;v+=1)C[v].d(1);C.length=g.length}},i:oa,o:oa,d(m){m&&_(r),Qa(j,m),Qa(C,m)}}}function wn(n){let r;return{c(){r=ye("No agency data available for this filter selection.")},l(s){r=ue(s,"No agency data available for this filter selection.")},m(s,t){p(s,r,t)},d(s){s&&_(r)}}}function Gr(n){let r,s,t=n[189]+"",a;return{c(){r=I("th"),s=ye("FY"),a=ye(t),this.h()},l(e){r=S(e,"TH",{style:!0});var i=K(r);s=ue(i,"FY"),a=ue(i,t),i.forEach(_),this.h()},h(){d(r,"text-align","right"),d(r,"padding","10px 14px"),d(r,"font-weight","700"),d(r,"color","#231F20"),d(r,"white-space","nowrap")},m(e,i){p(e,r,i),E(r,s),E(r,a)},p(e,i){i[0]&1024&&t!==(t=e[189]+"")&&na(a,t)},d(e){e&&_(r)}}}function Qr(n){let r,s=(n[186]["FY"+n[189]]??0)>=1e9?"$"+(n[186]["FY"+n[189]]/1e9).toFixed(2)+"B":(n[186]["FY"+n[189]]??0)>=1e6?"$"+(n[186]["FY"+n[189]]/1e6).toFixed(1)+"M":(n[186]["FY"+n[189]]??0)>=1e3?"$"+(n[186]["FY"+n[189]]/1e3).toFixed(0)+"K":"-",t,a;return{c(){r=I("td"),t=ye(s),this.h()},l(e){r=S(e,"TD",{style:!0});var i=K(r);t=ue(i,s),i.forEach(_),this.h()},h(){H(r,"style",a="text-align:right; padding:9px 14px; color:#231F20; "+n[37](n[186],n[189],n[10]))},m(e,i){p(e,r,i),E(r,t)},p(e,i){i[0]&134218752&&s!==(s=(e[186]["FY"+e[189]]??0)>=1e9?"$"+(e[186]["FY"+e[189]]/1e9).toFixed(2)+"B":(e[186]["FY"+e[189]]??0)>=1e6?"$"+(e[186]["FY"+e[189]]/1e6).toFixed(1)+"M":(e[186]["FY"+e[189]]??0)>=1e3?"$"+(e[186]["FY"+e[189]]/1e3).toFixed(0)+"K":"-")&&na(t,s),i[0]&134218752&&a!==(a="text-align:right; padding:9px 14px; color:#231F20; "+e[37](e[186],e[189],e[10]))&&H(r,"style",a)},d(e){e&&_(r)}}}function Xr(n){let r,s,t=n[186].agency_name+"",a,e,i,c=n[36](n[186],n[10])+"",u,$,T,F="›",B,j,g,C=da(n[10]),m=[];for(let v=0;v<C.length;v+=1)m[v]=Qr(gr(n,C,v));function R(){return n[141](n[186])}return{c(){r=I("tr"),s=I("td"),a=ye(t),e=D(),i=new ms(!1),u=D();for(let v=0;v<m.length;v+=1)m[v].c();$=D(),T=I("td"),T.textContent=F,B=D(),this.h()},l(v){r=S(v,"TR",{style:!0,onmouseenter:!0,onmouseleave:!0});var q=K(r);s=S(q,"TD",{style:!0});var L=K(s);a=ue(L,t),e=A(L),i=bs(L,!1),L.forEach(_),u=A(q);for(let N=0;N<m.length;N+=1)m[N].l(q);$=A(q),T=S(q,"TD",{style:!0,"data-svelte-h":!0}),sa(T)!=="svelte-1eyp1xf"&&(T.textContent=F),B=A(q),q.forEach(_),this.h()},h(){i.a=null,d(s,"padding","9px 14px"),d(s,"color","#231F20"),d(s,"font-weight","500"),d(T,"padding","9px 8px"),d(T,"color","#C8122C"),d(T,"font-size","0.8rem"),H(r,"style","border-bottom:1px solid #F3F4F6; cursor:pointer; background:"+(n[188]%2===0?"var(--nxt-surface)":"#f7f2fc")+";"),H(r,"onmouseenter","this.style.background='var(--nxt-pink)'"),H(r,"onmouseleave","this.style.background="+(n[188]%2===0?"'var(--nxt-surface)'":"'#f7f2fc'"))},m(v,q){p(v,r,q),E(r,s),E(s,a),E(s,e),i.m(c,s),E(r,u);for(let L=0;L<m.length;L+=1)m[L]&&m[L].m(r,null);E(r,$),E(r,T),E(r,B),j||(g=et(r,"click",R),j=!0)},p(v,q){if(n=v,q[0]&134217728&&t!==(t=n[186].agency_name+"")&&na(a,t),q[0]&134218752&&c!==(c=n[36](n[186],n[10])+"")&&i.p(c),q[0]&134218752|q[1]&64){C=da(n[10]);let L;for(L=0;L<C.length;L+=1){const N=gr(n,C,L);m[L]?m[L].p(N,q):(m[L]=Qr(N),m[L].c(),m[L].m(r,$))}for(;L<m.length;L+=1)m[L].d(1);m.length=C.length}},d(v){v&&_(r),Qa(m,v),j=!1,g()}}}function kn(n){var z;let r,s,t,a,e,i,c,u='<h1 style="color: #211030; font-size: 1.7rem; font-weight: 700; margin: 0;">🏛️ Budget Office View</h1> <p style="color: #6321a5; font-size: 0.95rem; margin: 4px 0 0 0;">Statewide Budget Analysis</p>',$,T,F,B,j,g,C,m,R,v,q,L,N,V,o,ge,Ae,He,se,Z,pe,le,We,h,Y,M,U,J,he,fe,De,Ke,Fe,ae,Ze,Je,ta=typeof de<"u"&&(de.title||((z=de.og)==null?void 0:z.title))&&de.hide_title!==!0&&Us();function w(l,y){var Re;return typeof de<"u"&&(de.title||(Re=de.og)!=null&&Re.title)?Ps:Os}let te=w()(n),Ve=typeof de=="object"&&Gs(),ca=da([["latest","Latest Year"],["trend","Trend Over Years"]]),qe=[];for(let l=0;l<2;l+=1)qe[l]=wr($r(n,ca,l));let re=n[12]&&kr(n),ce=n[13]&&vr(n),we=n[14]&&xr(n),be=n[15]&&Fr(n),ze=n[16]&&Cr(n),Ne=n[17]&&jr(n),_e=n[18]&&Er(n),ne=n[19]&&Br(n),me=n[0]&&Ar(n),oe=n[1]&&Dr(n),Me=n[20]&&Rr(n),ke=n[2]&&Tr(n),Ue=n[21]&&Sr(n),je=n[22]&&Ir(n),ie=n[23]&&qr(n),Ye=n[24]&&Nr(n),Oe=n[25]&&Yr(n),ve=n[3]&&Lr(n),Pe=n[4]&&Hr(n),Ee=n[5]&&Vr(n),Be=n[6]&&zr(n),Le=n[26]&&Mr(n);U=new As({props:{title:"🔍 Filters",open:"false",$$slots:{default:[en]},$$scope:{ctx:n}}}),he=new ks({props:{title:"⚙ Filters",targetId:"page-filters"}}),Ke=new $t({props:{name:"f_view",title:"View",defaultValue:"trend",$$slots:{default:[an]},$$scope:{ctx:n}}});let Ge=n[32]=="latest"&&Ur(n),b=n[32]=="trend"&&Or(n);return{c(){ta&&ta.c(),r=D(),te.c(),s=I("meta"),t=I("meta"),Ve&&Ve.c(),a=fa(),e=D(),i=I("div"),c=I("div"),c.innerHTML=u,$=D(),T=I("div");for(let l=0;l<2;l+=1)qe[l].c();F=D(),re&&re.c(),B=D(),ce&&ce.c(),j=D(),we&&we.c(),g=D(),be&&be.c(),C=D(),ze&&ze.c(),m=D(),Ne&&Ne.c(),R=D(),_e&&_e.c(),v=D(),ne&&ne.c(),q=D(),me&&me.c(),L=D(),oe&&oe.c(),N=D(),Me&&Me.c(),V=D(),ke&&ke.c(),o=D(),Ue&&Ue.c(),ge=D(),je&&je.c(),Ae=D(),ie&&ie.c(),He=D(),Ye&&Ye.c(),se=D(),Oe&&Oe.c(),Z=D(),ve&&ve.c(),pe=D(),Pe&&Pe.c(),le=D(),Ee&&Ee.c(),We=D(),Be&&Be.c(),h=D(),Le&&Le.c(),Y=D(),M=I("div"),W(U.$$.fragment),J=D(),W(he.$$.fragment),fe=D(),De=I("div"),W(Ke.$$.fragment),Fe=D(),Ge&&Ge.c(),ae=D(),b&&b.c(),Ze=fa(),this.h()},l(l){ta&&ta.l(l),r=A(l);const y=us("svelte-2igo1p",document.head);te.l(y),s=S(y,"META",{name:!0,content:!0}),t=S(y,"META",{name:!0,content:!0}),Ve&&Ve.l(y),a=fa(),y.forEach(_),e=A(l),i=S(l,"DIV",{style:!0});var Re=K(i);c=S(Re,"DIV",{"data-svelte-h":!0}),sa(c)!=="svelte-1jiz45y"&&(c.innerHTML=u),$=A(Re),T=S(Re,"DIV",{style:!0});var $e=K(T);for(let la=0;la<2;la+=1)qe[la].l($e);$e.forEach(_),Re.forEach(_),F=A(l),re&&re.l(l),B=A(l),ce&&ce.l(l),j=A(l),we&&we.l(l),g=A(l),be&&be.l(l),C=A(l),ze&&ze.l(l),m=A(l),Ne&&Ne.l(l),R=A(l),_e&&_e.l(l),v=A(l),ne&&ne.l(l),q=A(l),me&&me.l(l),L=A(l),oe&&oe.l(l),N=A(l),Me&&Me.l(l),V=A(l),ke&&ke.l(l),o=A(l),Ue&&Ue.l(l),ge=A(l),je&&je.l(l),Ae=A(l),ie&&ie.l(l),He=A(l),Ye&&Ye.l(l),se=A(l),Oe&&Oe.l(l),Z=A(l),ve&&ve.l(l),pe=A(l),Pe&&Pe.l(l),le=A(l),Ee&&Ee.l(l),We=A(l),Be&&Be.l(l),h=A(l),Le&&Le.l(l),Y=A(l),M=S(l,"DIV",{id:!0});var _a=K(M);X(U.$$.fragment,_a),_a.forEach(_),J=A(l),X(he.$$.fragment,l),fe=A(l),De=S(l,"DIV",{style:!0});var Xe=K(De);X(Ke.$$.fragment,Xe),Xe.forEach(_),Fe=A(l),Ge&&Ge.l(l),ae=A(l),b&&b.l(l),Ze=fa(),this.h()},h(){H(s,"name","twitter:card"),H(s,"content","summary_large_image"),H(t,"name","twitter:site"),H(t,"content","@evidence_dev"),d(T,"display","flex"),d(T,"border","1px solid #c9a8f0"),d(T,"border-radius","6px"),d(T,"width","fit-content"),d(T,"overflow","hidden"),d(T,"background","rgba(255,255,255,0.5)"),d(i,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),d(i,"padding","28px 36px"),d(i,"border-radius","12px"),d(i,"border-bottom","4px solid #802cd7"),d(i,"margin-bottom","0"),d(i,"display","flex"),d(i,"align-items","flex-end"),d(i,"justify-content","space-between"),d(i,"gap","24px"),d(i,"flex-wrap","wrap"),H(M,"id","page-filters"),d(De,"display","none")},m(l,y){ta&&ta.m(l,y),p(l,r,y),te.m(document.head,null),E(document.head,s),E(document.head,t),Ve&&Ve.m(document.head,null),E(document.head,a),p(l,e,y),p(l,i,y),E(i,c),E(i,$),E(i,T);for(let Re=0;Re<2;Re+=1)qe[Re]&&qe[Re].m(T,null);p(l,F,y),re&&re.m(l,y),p(l,B,y),ce&&ce.m(l,y),p(l,j,y),we&&we.m(l,y),p(l,g,y),be&&be.m(l,y),p(l,C,y),ze&&ze.m(l,y),p(l,m,y),Ne&&Ne.m(l,y),p(l,R,y),_e&&_e.m(l,y),p(l,v,y),ne&&ne.m(l,y),p(l,q,y),me&&me.m(l,y),p(l,L,y),oe&&oe.m(l,y),p(l,N,y),Me&&Me.m(l,y),p(l,V,y),ke&&ke.m(l,y),p(l,o,y),Ue&&Ue.m(l,y),p(l,ge,y),je&&je.m(l,y),p(l,Ae,y),ie&&ie.m(l,y),p(l,He,y),Ye&&Ye.m(l,y),p(l,se,y),Oe&&Oe.m(l,y),p(l,Z,y),ve&&ve.m(l,y),p(l,pe,y),Pe&&Pe.m(l,y),p(l,le,y),Ee&&Ee.m(l,y),p(l,We,y),Be&&Be.m(l,y),p(l,h,y),Le&&Le.m(l,y),p(l,Y,y),p(l,M,y),Q(U,M,null),p(l,J,y),Q(he,l,y),p(l,fe,y),p(l,De,y),Q(Ke,De,null),p(l,Fe,y),Ge&&Ge.m(l,y),p(l,ae,y),b&&b.m(l,y),p(l,Ze,y),Je=!0},p(l,y){var _a;if(typeof de<"u"&&(de.title||(_a=de.og)!=null&&_a.title)&&de.hide_title!==!0&&ta.p(l,y),te.p(l,y),typeof de=="object"&&Ve.p(l,y),y[0]&128){ca=da([["latest","Latest Year"],["trend","Trend Over Years"]]);let Xe;for(Xe=0;Xe<2;Xe+=1){const la=$r(l,ca,Xe);qe[Xe]?qe[Xe].p(la,y):(qe[Xe]=wr(la),qe[Xe].c(),qe[Xe].m(T,null))}for(;Xe<2;Xe+=1)qe[Xe].d(1)}l[12]?re?(re.p(l,y),y[0]&4096&&f(re,1)):(re=kr(l),re.c(),f(re,1),re.m(B.parentNode,B)):re&&(Ie(),k(re,1,1,()=>{re=null}),Se()),l[13]?ce?(ce.p(l,y),y[0]&8192&&f(ce,1)):(ce=vr(l),ce.c(),f(ce,1),ce.m(j.parentNode,j)):ce&&(Ie(),k(ce,1,1,()=>{ce=null}),Se()),l[14]?we?(we.p(l,y),y[0]&16384&&f(we,1)):(we=xr(l),we.c(),f(we,1),we.m(g.parentNode,g)):we&&(Ie(),k(we,1,1,()=>{we=null}),Se()),l[15]?be?(be.p(l,y),y[0]&32768&&f(be,1)):(be=Fr(l),be.c(),f(be,1),be.m(C.parentNode,C)):be&&(Ie(),k(be,1,1,()=>{be=null}),Se()),l[16]?ze?(ze.p(l,y),y[0]&65536&&f(ze,1)):(ze=Cr(l),ze.c(),f(ze,1),ze.m(m.parentNode,m)):ze&&(Ie(),k(ze,1,1,()=>{ze=null}),Se()),l[17]?Ne?(Ne.p(l,y),y[0]&131072&&f(Ne,1)):(Ne=jr(l),Ne.c(),f(Ne,1),Ne.m(R.parentNode,R)):Ne&&(Ie(),k(Ne,1,1,()=>{Ne=null}),Se()),l[18]?_e?(_e.p(l,y),y[0]&262144&&f(_e,1)):(_e=Er(l),_e.c(),f(_e,1),_e.m(v.parentNode,v)):_e&&(Ie(),k(_e,1,1,()=>{_e=null}),Se()),l[19]?ne?(ne.p(l,y),y[0]&524288&&f(ne,1)):(ne=Br(l),ne.c(),f(ne,1),ne.m(q.parentNode,q)):ne&&(Ie(),k(ne,1,1,()=>{ne=null}),Se()),l[0]?me?(me.p(l,y),y[0]&1&&f(me,1)):(me=Ar(l),me.c(),f(me,1),me.m(L.parentNode,L)):me&&(Ie(),k(me,1,1,()=>{me=null}),Se()),l[1]?oe?(oe.p(l,y),y[0]&2&&f(oe,1)):(oe=Dr(l),oe.c(),f(oe,1),oe.m(N.parentNode,N)):oe&&(Ie(),k(oe,1,1,()=>{oe=null}),Se()),l[20]?Me?(Me.p(l,y),y[0]&1048576&&f(Me,1)):(Me=Rr(l),Me.c(),f(Me,1),Me.m(V.parentNode,V)):Me&&(Ie(),k(Me,1,1,()=>{Me=null}),Se()),l[2]?ke?(ke.p(l,y),y[0]&4&&f(ke,1)):(ke=Tr(l),ke.c(),f(ke,1),ke.m(o.parentNode,o)):ke&&(Ie(),k(ke,1,1,()=>{ke=null}),Se()),l[21]?Ue?(Ue.p(l,y),y[0]&2097152&&f(Ue,1)):(Ue=Sr(l),Ue.c(),f(Ue,1),Ue.m(ge.parentNode,ge)):Ue&&(Ie(),k(Ue,1,1,()=>{Ue=null}),Se()),l[22]?je?(je.p(l,y),y[0]&4194304&&f(je,1)):(je=Ir(l),je.c(),f(je,1),je.m(Ae.parentNode,Ae)):je&&(Ie(),k(je,1,1,()=>{je=null}),Se()),l[23]?ie?(ie.p(l,y),y[0]&8388608&&f(ie,1)):(ie=qr(l),ie.c(),f(ie,1),ie.m(He.parentNode,He)):ie&&(Ie(),k(ie,1,1,()=>{ie=null}),Se()),l[24]?Ye?(Ye.p(l,y),y[0]&16777216&&f(Ye,1)):(Ye=Nr(l),Ye.c(),f(Ye,1),Ye.m(se.parentNode,se)):Ye&&(Ie(),k(Ye,1,1,()=>{Ye=null}),Se()),l[25]?Oe?(Oe.p(l,y),y[0]&33554432&&f(Oe,1)):(Oe=Yr(l),Oe.c(),f(Oe,1),Oe.m(Z.parentNode,Z)):Oe&&(Ie(),k(Oe,1,1,()=>{Oe=null}),Se()),l[3]?ve?(ve.p(l,y),y[0]&8&&f(ve,1)):(ve=Lr(l),ve.c(),f(ve,1),ve.m(pe.parentNode,pe)):ve&&(Ie(),k(ve,1,1,()=>{ve=null}),Se()),l[4]?Pe?(Pe.p(l,y),y[0]&16&&f(Pe,1)):(Pe=Hr(l),Pe.c(),f(Pe,1),Pe.m(le.parentNode,le)):Pe&&(Ie(),k(Pe,1,1,()=>{Pe=null}),Se()),l[5]?Ee?(Ee.p(l,y),y[0]&32&&f(Ee,1)):(Ee=Vr(l),Ee.c(),f(Ee,1),Ee.m(We.parentNode,We)):Ee&&(Ie(),k(Ee,1,1,()=>{Ee=null}),Se()),l[6]?Be?(Be.p(l,y),y[0]&64&&f(Be,1)):(Be=zr(l),Be.c(),f(Be,1),Be.m(h.parentNode,h)):Be&&(Ie(),k(Be,1,1,()=>{Be=null}),Se()),l[26]?Le?(Le.p(l,y),y[0]&67108864&&f(Le,1)):(Le=Mr(l),Le.c(),f(Le,1),Le.m(Y.parentNode,Y)):Le&&(Ie(),k(Le,1,1,()=>{Le=null}),Se());const Re={};y[0]&28672|y[6]&16384&&(Re.$$scope={dirty:y,ctx:l}),U.$set(Re);const $e={};y[6]&16384&&($e.$$scope={dirty:y,ctx:l}),Ke.$set($e),l[32]=="latest"?Ge?(Ge.p(l,y),y[1]&2&&f(Ge,1)):(Ge=Ur(l),Ge.c(),f(Ge,1),Ge.m(ae.parentNode,ae)):Ge&&(Ie(),k(Ge,1,1,()=>{Ge=null}),Se()),l[32]=="trend"?b?(b.p(l,y),y[1]&2&&f(b,1)):(b=Or(l),b.c(),f(b,1),b.m(Ze.parentNode,Ze)):b&&(Ie(),k(b,1,1,()=>{b=null}),Se())},i(l){Je||(f(re),f(ce),f(we),f(be),f(ze),f(Ne),f(_e),f(ne),f(me),f(oe),f(Me),f(ke),f(Ue),f(je),f(ie),f(Ye),f(Oe),f(ve),f(Pe),f(Ee),f(Be),f(Le),f(U.$$.fragment,l),f(he.$$.fragment,l),f(Ke.$$.fragment,l),f(Ge),f(b),Je=!0)},o(l){k(re),k(ce),k(we),k(be),k(ze),k(Ne),k(_e),k(ne),k(me),k(oe),k(Me),k(ke),k(Ue),k(je),k(ie),k(Ye),k(Oe),k(ve),k(Pe),k(Ee),k(Be),k(Le),k(U.$$.fragment,l),k(he.$$.fragment,l),k(Ke.$$.fragment,l),k(Ge),k(b),Je=!1},d(l){l&&(_(r),_(e),_(i),_(F),_(B),_(j),_(g),_(C),_(m),_(R),_(v),_(q),_(L),_(N),_(V),_(o),_(ge),_(Ae),_(He),_(se),_(Z),_(pe),_(le),_(We),_(h),_(Y),_(M),_(J),_(fe),_(De),_(Fe),_(ae),_(Ze)),ta&&ta.d(l),te.d(l),_(s),_(t),Ve&&Ve.d(l),_(a),Qa(qe,l),re&&re.d(l),ce&&ce.d(l),we&&we.d(l),be&&be.d(l),ze&&ze.d(l),Ne&&Ne.d(l),_e&&_e.d(l),ne&&ne.d(l),me&&me.d(l),oe&&oe.d(l),Me&&Me.d(l),ke&&ke.d(l),Ue&&Ue.d(l),je&&je.d(l),ie&&ie.d(l),Ye&&Ye.d(l),Oe&&Oe.d(l),ve&&ve.d(l),Pe&&Pe.d(l),Ee&&Ee.d(l),Be&&Be.d(l),Le&&Le.d(l),G(U),G(he,l),G(Ke),Ge&&Ge.d(l),b&&b.d(l)}}}const de={},vn="320px";function xn(n,r,s){let t,a,e,i,c,u,$,T,F,B,j,g,C,m,R,v,q,L,N;er(n,Ds,x=>s(135,L=x)),er(n,cr,x=>s(151,N=x));let{data:V}=r,{data:o={},customFormattingSettings:ge,__db:Ae,inputs:He}=V;ys(cr,N="728d46afb2977abc40cecd9d0f283690",N);let se=gs(Es(He));Kr(se.subscribe(x=>He=x)),fs(ws,{getCustomFormats:()=>ge.customFormats||[]});const Z=(x,Qe)=>Ts(Ae.query,x,{query_name:Qe});ps(Z),L.params,tr(()=>!0);let pe={initialData:void 0,initialError:void 0},le=ee`select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year`,We="select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year";o.g_fy_data&&(o.g_fy_data instanceof Error?pe.initialError=o.g_fy_data:pe.initialData=o.g_fy_data,o.g_fy_columns&&(pe.knownColumns=o.g_fy_columns));let h,Y=!1;const M=ea.createReactive({callback:x=>{s(12,h=x)},execFn:Z},{id:"g_fy",...pe});M(We,{noResolve:le,...pe}),globalThis[Symbol.for("g_fy")]={get value(){return h}};let U={initialData:void 0,initialError:void 0},J=ee`select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type`,he="select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type";o.g_fund_data&&(o.g_fund_data instanceof Error?U.initialError=o.g_fund_data:U.initialData=o.g_fund_data,o.g_fund_columns&&(U.knownColumns=o.g_fund_columns));let fe,De=!1;const Ke=ea.createReactive({callback:x=>{s(13,fe=x)},execFn:Z},{id:"g_fund",...U});Ke(he,{noResolve:J,...U}),globalThis[Symbol.for("g_fund")]={get value(){return fe}};let Fe={initialData:void 0,initialError:void 0},ae=ee`select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name`,Ze="select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name";o.g_agency_data&&(o.g_agency_data instanceof Error?Fe.initialError=o.g_agency_data:Fe.initialData=o.g_agency_data,o.g_agency_columns&&(Fe.knownColumns=o.g_agency_columns));let Je,ta=!1;const w=ea.createReactive({callback:x=>{s(14,Je=x)},execFn:Z},{id:"g_agency",...Fe});w(Ze,{noResolve:ae,...Fe}),globalThis[Symbol.for("g_agency")]={get value(){return Je}};let O={initialData:void 0,initialError:void 0},te=ee`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`,Ve=`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`;o.filtered_data&&(o.filtered_data instanceof Error?O.initialError=o.filtered_data:O.initialData=o.filtered_data,o.filtered_columns&&(O.knownColumns=o.filtered_columns));let ca,qe=!1;const re=ea.createReactive({callback:x=>{s(15,ca=x)},execFn:Z},{id:"filtered",...O});re(Ve,{noResolve:te,...O}),globalThis[Symbol.for("filtered")]={get value(){return ca}};let ce={initialData:void 0,initialError:void 0},we=ee`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year`,be=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year`;o.yearly_rollup_data&&(o.yearly_rollup_data instanceof Error?ce.initialError=o.yearly_rollup_data:ce.initialData=o.yearly_rollup_data,o.yearly_rollup_columns&&(ce.knownColumns=o.yearly_rollup_columns));let ze,Ne=!1;const _e=ea.createReactive({callback:x=>{s(16,ze=x)},execFn:Z},{id:"yearly_rollup",...ce});_e(be,{noResolve:we,...ce}),globalThis[Symbol.for("yearly_rollup")]={get value(){return ze}};let ne={initialData:void 0,initialError:void 0},me=ee`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`,oe=`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`;o.scope_meta_data&&(o.scope_meta_data instanceof Error?ne.initialError=o.scope_meta_data:ne.initialData=o.scope_meta_data,o.scope_meta_columns&&(ne.knownColumns=o.scope_meta_columns));let Me,ke=!1;const Ue=ea.createReactive({callback:x=>{s(17,Me=x)},execFn:Z},{id:"scope_meta",...ne});Ue(oe,{noResolve:me,...ne}),globalThis[Symbol.for("scope_meta")]={get value(){return Me}};let je={initialData:void 0,initialError:void 0},ie=ee`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`,Ye=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`;o.filtered_latest_data&&(o.filtered_latest_data instanceof Error?je.initialError=o.filtered_latest_data:je.initialData=o.filtered_latest_data,o.filtered_latest_columns&&(je.knownColumns=o.filtered_latest_columns));let Oe,ve=!1;const Pe=ea.createReactive({callback:x=>{s(18,Oe=x)},execFn:Z},{id:"filtered_latest",...je});Pe(Ye,{noResolve:ie,...je}),globalThis[Symbol.for("filtered_latest")]={get value(){return Oe}};let Ee={initialData:void 0,initialError:void 0},Be=ee`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`,Le=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`;o.filtered_prior_data&&(o.filtered_prior_data instanceof Error?Ee.initialError=o.filtered_prior_data:Ee.initialData=o.filtered_prior_data,o.filtered_prior_columns&&(Ee.knownColumns=o.filtered_prior_columns));let Ge,b=!1;const z=ea.createReactive({callback:x=>{s(19,Ge=x)},execFn:Z},{id:"filtered_prior",...Ee});z(Le,{noResolve:Be,...Ee}),globalThis[Symbol.for("filtered_prior")]={get value(){return Ge}};let l={initialData:void 0,initialError:void 0},y=ee`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget,
    latest_budget,
    latest_budget - coalesce(prior_budget, 0) as dollar_change,
    round((latest_budget - coalesce(prior_budget, 0)) * 100.0 / nullif(prior_budget, 0), 1) as yoy_pct,
    round(
        case
            when budget_5y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_5y_pct,
    round(
        case
            when budget_10y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`,Re=`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget,
    latest_budget,
    latest_budget - coalesce(prior_budget, 0) as dollar_change,
    round((latest_budget - coalesce(prior_budget, 0)) * 100.0 / nullif(prior_budget, 0), 1) as yoy_pct,
    round(
        case
            when budget_5y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_5y_pct,
    round(
        case
            when budget_10y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`;o.overview_data&&(o.overview_data instanceof Error?l.initialError=o.overview_data:l.initialData=o.overview_data,o.overview_columns&&(l.knownColumns=o.overview_columns));let $e,_a=!1;const Xe=ea.createReactive({callback:x=>{s(0,$e=x)},execFn:Z},{id:"overview",...l});Xe(Re,{noResolve:y,...l}),globalThis[Symbol.for("overview")]={get value(){return $e}};let la={initialData:void 0,initialError:void 0},ba=ee`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`,$a=`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`;o.yearly_data&&(o.yearly_data instanceof Error?la.initialError=o.yearly_data:la.initialData=o.yearly_data,o.yearly_columns&&(la.knownColumns=o.yearly_columns));let va,Wa=!1;const Ka=ea.createReactive({callback:x=>{s(1,va=x)},execFn:Z},{id:"yearly",...la});Ka($a,{noResolve:ba,...la}),globalThis[Symbol.for("yearly")]={get value(){return va}};let ma={initialData:void 0,initialError:void 0},ga=ee`select
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`,wa=`select
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`;o.yoy_detail_data&&(o.yoy_detail_data instanceof Error?ma.initialError=o.yoy_detail_data:ma.initialData=o.yoy_detail_data,o.yoy_detail_columns&&(ma.knownColumns=o.yoy_detail_columns));let kt,vt=!1;const xt=ea.createReactive({callback:x=>{s(20,kt=x)},execFn:Z},{id:"yoy_detail",...ma});xt(wa,{noResolve:ga,...ma}),globalThis[Symbol.for("yoy_detail")]={get value(){return kt}};let xa={initialData:void 0,initialError:void 0},Fa=ee`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_budget,
        base_year,
        max_year,
        final_budget,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_budget > 0 and final_budget > 0
                then (power(final_budget / base_budget, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_budget * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_budget * case fiscal_year
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
order by fiscal_year`,at=`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_budget,
        base_year,
        max_year,
        final_budget,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_budget > 0 and final_budget > 0
                then (power(final_budget / base_budget, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_budget * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_budget * case fiscal_year
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
order by fiscal_year`;o.fiscal_overview_cagr_data&&(o.fiscal_overview_cagr_data instanceof Error?xa.initialError=o.fiscal_overview_cagr_data:xa.initialData=o.fiscal_overview_cagr_data,o.fiscal_overview_cagr_columns&&(xa.knownColumns=o.fiscal_overview_cagr_columns));let Ca,Ft=!1;const Ct=ea.createReactive({callback:x=>{s(2,Ca=x)},execFn:Z},{id:"fiscal_overview_cagr",...xa});Ct(at,{noResolve:Fa,...xa}),globalThis[Symbol.for("fiscal_overview_cagr")]={get value(){return Ca}};let ja={initialData:void 0,initialError:void 0},Ea=ee`select
    agency_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where agency_name is not null
group by agency_name
order by spend desc
limit 10`,tt=`select
    agency_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where agency_name is not null
group by agency_name
order by spend desc
limit 10`;o.snapshot_agencies_data&&(o.snapshot_agencies_data instanceof Error?ja.initialError=o.snapshot_agencies_data:ja.initialData=o.snapshot_agencies_data,o.snapshot_agencies_columns&&(ja.knownColumns=o.snapshot_agencies_columns));let jt,Et=!1;const Bt=ea.createReactive({callback:x=>{s(21,jt=x)},execFn:Z},{id:"snapshot_agencies",...ja});Bt(tt,{noResolve:Ea,...ja}),globalThis[Symbol.for("snapshot_agencies")]={get value(){return jt}};let Ba={initialData:void 0,initialError:void 0},Aa=ee`select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)`,rt=`select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)`;o.fund_rules_data&&(o.fund_rules_data instanceof Error?Ba.initialError=o.fund_rules_data:Ba.initialData=o.fund_rules_data,o.fund_rules_columns&&(Ba.knownColumns=o.fund_rules_columns));let At,Dt=!1;const Rt=ea.createReactive({callback:x=>{s(22,At=x)},execFn:Z},{id:"fund_rules",...Ba});Rt(rt,{noResolve:Aa,...Ba}),globalThis[Symbol.for("fund_rules")]={get value(){return At}};let Da={initialData:void 0,initialError:void 0},Ra=ee`with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`,st=`with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`;o.fund_profile_data&&(o.fund_profile_data instanceof Error?Da.initialError=o.fund_profile_data:Da.initialData=o.fund_profile_data,o.fund_profile_columns&&(Da.knownColumns=o.fund_profile_columns));let Tt,St=!1;const It=ea.createReactive({callback:x=>{s(23,Tt=x)},execFn:Z},{id:"fund_profile",...Da});It(st,{noResolve:Ra,...Da}),globalThis[Symbol.for("fund_profile")]={get value(){return Tt}};let Ta={initialData:void 0,initialError:void 0},Sa=ee`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select fund_type, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = l.fund_type
order by l.latest_budget desc`,nt=`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select fund_type, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = l.fund_type
order by l.latest_budget desc`;o.fund_snapshot_data&&(o.fund_snapshot_data instanceof Error?Ta.initialError=o.fund_snapshot_data:Ta.initialData=o.fund_snapshot_data,o.fund_snapshot_columns&&(Ta.knownColumns=o.fund_snapshot_columns));let qt,Nt=!1;const Yt=ea.createReactive({callback:x=>{s(24,qt=x)},execFn:Z},{id:"fund_snapshot",...Ta});Yt(nt,{noResolve:Sa,...Ta}),globalThis[Symbol.for("fund_snapshot")]={get value(){return qt}};let Ia={initialData:void 0,initialError:void 0},qa=ee`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc
limit 20`,lt=`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc
limit 20`;o.agency_movers_data&&(o.agency_movers_data instanceof Error?Ia.initialError=o.agency_movers_data:Ia.initialData=o.agency_movers_data,o.agency_movers_columns&&(Ia.knownColumns=o.agency_movers_columns));let Lt,Ht=!1;const Vt=ea.createReactive({callback:x=>{s(25,Lt=x)},execFn:Z},{id:"agency_movers",...Ia});Vt(lt,{noResolve:qa,...Ia}),globalThis[Symbol.for("agency_movers")]={get value(){return Lt}};let Na={initialData:void 0,initialError:void 0},Ya=ee`select
    f.fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = f.fund_type
where f.fund_type is not null
group by f.fiscal_year, f.fund_type, fp.fund_rank, fp.fund_color
order by f.fiscal_year, fund_rank`,ot=`select
    f.fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = f.fund_type
where f.fund_type is not null
group by f.fiscal_year, f.fund_type, fp.fund_rank, fp.fund_color
order by f.fiscal_year, fund_rank`;o.fund_trend_data&&(o.fund_trend_data instanceof Error?Na.initialError=o.fund_trend_data:Na.initialData=o.fund_trend_data,o.fund_trend_columns&&(Na.knownColumns=o.fund_trend_columns));let Ja,zt=!1;const Mt=ea.createReactive({callback:x=>{s(3,Ja=x)},execFn:Z},{id:"fund_trend",...Na});Mt(ot,{noResolve:Ya,...Na}),globalThis[Symbol.for("fund_trend")]={get value(){return Ja}};let La={initialData:void 0,initialError:void 0},Ha=ee`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10`,ct=`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10`;o.top_agencies_trend_data&&(o.top_agencies_trend_data instanceof Error?La.initialError=o.top_agencies_trend_data:La.initialData=o.top_agencies_trend_data,o.top_agencies_trend_columns&&(La.knownColumns=o.top_agencies_trend_columns));let bt,Ut=!1;const Ot=ea.createReactive({callback:x=>{s(4,bt=x)},execFn:Z},{id:"top_agencies_trend",...La});Ot(ct,{noResolve:Ha,...La}),globalThis[Symbol.for("top_agencies_trend")]={get value(){return bt}};let Va={initialData:void 0,initialError:void 0},za=ee`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`,_t=`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`;o.agency_trend_lines_data&&(o.agency_trend_lines_data instanceof Error?Va.initialError=o.agency_trend_lines_data:Va.initialData=o.agency_trend_lines_data,o.agency_trend_lines_columns&&(Va.knownColumns=o.agency_trend_lines_columns));let mt,Pt=!1;const Gt=ea.createReactive({callback:x=>{s(5,mt=x)},execFn:Z},{id:"agency_trend_lines",...Va});Gt(_t,{noResolve:za,...Va}),globalThis[Symbol.for("agency_trend_lines")]={get value(){return mt}};let Ma={initialData:void 0,initialError:void 0},Ua=ee`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`,it=`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`;o.agency_drill_data&&(o.agency_drill_data instanceof Error?Ma.initialError=o.agency_drill_data:Ma.initialData=o.agency_drill_data,o.agency_drill_columns&&(Ma.knownColumns=o.agency_drill_columns));let dt,Qt=!1;const Xt=ea.createReactive({callback:x=>{s(6,dt=x)},execFn:Z},{id:"agency_drill",...Ma});Xt(it,{noResolve:Ua,...Ma}),globalThis[Symbol.for("agency_drill")]={get value(){return dt}};let Oa={initialData:void 0,initialError:void 0},Pa=ee`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    '/budget-office/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(
        case when h5.budget_5y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.budget_10y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_budget desc`,ut=`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    '/budget-office/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(
        case when h5.budget_5y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.budget_10y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_budget desc`;o.agency_latest_data&&(o.agency_latest_data instanceof Error?Oa.initialError=o.agency_latest_data:Oa.initialData=o.agency_latest_data,o.agency_latest_columns&&(Oa.knownColumns=o.agency_latest_columns));let Wt,Kt=!1;const Jt=ea.createReactive({callback:x=>{s(26,Wt=x)},execFn:Z},{id:"agency_latest",...Oa});Jt(ut,{noResolve:Pa,...Oa}),globalThis[Symbol.for("agency_latest")]={get value(){return Wt}};const nr=hs();er(n,nr,x=>s(134,q=x));const es=(x,Qe="%")=>{var P,xe,Te,ia,pa,ha,ka;const Ce=[(xe=(P=x==null?void 0:x.rawValues)==null?void 0:P[0])==null?void 0:xe.value,(Te=x==null?void 0:x.rawValue)==null?void 0:Te.value,(ia=x==null?void 0:x.value)==null?void 0:ia.value,x==null?void 0:x.value,x==null?void 0:x.rawValue,(ha=(pa=x==null?void 0:x.rawValues)==null?void 0:pa[0])==null?void 0:ha.label,x==null?void 0:x.label,(ka=x==null?void 0:x.rawValues)==null?void 0:ka[0]];for(const ua of Ce){if(ua==null)continue;if(typeof ua=="object"){if(ua.value!=null)return String(ua.value).toLowerCase();if(ua.label!=null)return String(ua.label).toLowerCase()}const Ga=String(ua).toLowerCase();if(Ga&&Ga!=="[object object]")return Ga}return Qe},Za=(x,Qe=!0)=>{const Ce=es(x,"%").replace(/'/g,"''");return Qe?Ce.toLowerCase():Ce},as=(x,Qe)=>{if(!x||x.length<2)return{chartData:[],trendPoints:[]};const Ce=x.map(ra=>Number(ra[Qe])||0),P=Array.from({length:x.length},(ra,ya)=>ya+1),xe=P.map((ra,ya)=>({x:ra,y:Ce[ya]})).filter(ra=>ra.y>0);if(xe.length<2)return{chartData:Ce,trendPoints:Ce};const Te=xe.map(ra=>Math.log(ra.x)),ia=xe.map(ra=>Math.log(ra.y)),pa=xe.length,ha=Te.reduce((ra,ya)=>ra+ya,0),ka=ia.reduce((ra,ya)=>ra+ya,0),ua=Te.reduce((ra,ya,ds)=>ra+ya*ia[ds],0),Ga=Te.reduce((ra,ya)=>ra+ya*ya,0),pt=pa*Ga-ha*ha;if(Math.abs(pt)<1e-10)return{chartData:Ce,trendPoints:Ce};const ht=(pa*ua-ha*ka)/pt,is=Math.exp((ka-ht*ha)/pa);return{chartData:Ce,trendPoints:P.map(ra=>is*Math.pow(ra,ht))}},ts=(x,Qe)=>{const Ce=Qe.map(ua=>x["FY"+ua]||0),P=Math.max(...Ce);if(P===0)return"";const xe=48,Te=16,ia=Ce.map((ua,Ga)=>{const pt=Ga/(Ce.length-1)*xe,ht=Te-ua/P*Te;return pt+","+ht}).join(" "),pa=Ce[Ce.length-1],ha=Ce[Ce.length-2]??pa,ka=pa>=ha?"#2EAD6B":"#C8122C";return'<svg width="'+xe+'" height="'+Te+'" style="display:inline-block;vertical-align:middle;margin-left:8px;"><polyline points="'+ia+'" fill="none" stroke="'+ka+'" stroke-width="1.5" stroke-linejoin="round"/><circle cx="'+xe+'" cy="'+(Te-pa/P*Te)+'" r="2" fill="'+ka+'"/></svg>'},rs=(x,Qe,Ce)=>{const P=Ce.indexOf(Qe);if(P<=0)return"";const xe=x["FY"+Qe]||0,Te=x["FY"+Ce[P-1]]||0;if(Te===0)return"";const ia=(xe-Te)/Te*100;return ia>=15?"background:rgba(46,173,107,0.18);":ia>=8?"background:rgba(46,173,107,0.11);":ia>=3?"background:rgba(46,173,107,0.06);":ia>0?"background:rgba(46,173,107,0.03);":ia<=-15?"background:rgba(200,18,44,0.18);":ia<=-8?"background:rgba(200,18,44,0.11);":ia<=-3?"background:rgba(200,18,44,0.06);":"background:rgba(200,18,44,0.03);"};let Zt="trend",gt="3y",yt="";const ss=x=>s(7,Zt=x),ns=()=>{var Ce;const x=Number((Ce=$e==null?void 0:$e[0])==null?void 0:Ce.latest_budget)||0,Qe=Math.abs(x);return Qe>=1e9?"$"+(Qe/1e9).toFixed(2)+"B":Qe>=1e6?"$"+(Qe/1e6).toFixed(1)+"M":"$"+Math.round(Qe).toLocaleString()},ls=()=>{var P;const x=Number((P=$e==null?void 0:$e[0])==null?void 0:P.dollar_change)||0,Qe=Math.abs(x),Ce=x>=0?"+":"-";return Qe>=1e9?Ce+"$"+(Qe/1e9).toFixed(2)+"B":Qe>=1e6?Ce+"$"+(Qe/1e6).toFixed(1)+"M":Ce+"$"+Math.round(Qe).toLocaleString()},os=x=>s(8,gt=x);function cs(){yt=this.value,s(9,yt)}const _s=x=>Bs(x.agency_link);return n.$$set=x=>{"data"in x&&s(38,V=x.data)},n.$$.update=()=>{var x,Qe,Ce;n.$$.dirty[1]&128&&s(39,{data:o={},customFormattingSettings:ge,__db:Ae}=V,o),n.$$.dirty[1]&256&&$s.set(Object.keys(o).length>0),n.$$.dirty[4]&2048&&L.params,n.$$.dirty[1]&7680&&(le||!Y?le||(M(We,{noResolve:le,...pe}),s(43,Y=!0)):M(We,{noResolve:le})),n.$$.dirty[1]&122880&&(J||!De?J||(Ke(he,{noResolve:J,...U}),s(47,De=!0)):Ke(he,{noResolve:J})),n.$$.dirty[1]&1966080&&(ae||!ta?ae||(w(Ze,{noResolve:ae,...Fe}),s(51,ta=!0)):w(Ze,{noResolve:ae})),n.$$.dirty[4]&1024&&s(132,a=Za(q==null?void 0:q.f_fund)),n.$$.dirty[4]&1024&&s(132,a=Za(q==null?void 0:q.f_fund)),n.$$.dirty[4]&1024&&s(131,e=Za(q==null?void 0:q.f_agency)),n.$$.dirty[4]&1024&&s(131,e=Za(q==null?void 0:q.f_agency)),n.$$.dirty[4]&384&&s(53,te=ee`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`),n.$$.dirty[4]&384&&s(54,Ve=`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`),n.$$.dirty[1]&31457280&&(te||!qe?te||(re(Ve,{noResolve:te,...O}),s(55,qe=!0)):re(Ve,{noResolve:te})),n.$$.dirty[4]&384&&s(57,we=ee`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year`),n.$$.dirty[4]&384&&s(58,be=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year`),n.$$.dirty[1]&503316480&&(we||!Ne?we||(_e(be,{noResolve:we,...ce}),s(59,Ne=!0)):_e(be,{noResolve:we})),n.$$.dirty[4]&1024&&s(133,t=Za(q==null?void 0:q.f_fy,!1)),n.$$.dirty[4]&1024&&s(133,t=Za(q==null?void 0:q.f_fy)),n.$$.dirty[4]&896&&s(61,me=ee`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[4]&896&&s(62,oe=`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[1]&1610612736|n.$$.dirty[2]&3&&(me||!ke?me||(Ue(oe,{noResolve:me,...ne}),s(63,ke=!0)):Ue(oe,{noResolve:me})),n.$$.dirty[4]&896&&s(65,ie=ee`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`),n.$$.dirty[4]&896&&s(66,Ye=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year`),n.$$.dirty[2]&60&&(ie||!ve?ie||(Pe(Ye,{noResolve:ie,...je}),s(67,ve=!0)):Pe(Ye,{noResolve:ie})),n.$$.dirty[4]&896&&s(69,Be=ee`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`),n.$$.dirty[4]&896&&s(70,Le=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year`),n.$$.dirty[2]&960&&(Be||!b?Be||(z(Le,{noResolve:Be,...Ee}),s(71,b=!0)):z(Le,{noResolve:Be})),n.$$.dirty[4]&896&&s(73,y=ee`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget,
    latest_budget,
    latest_budget - coalesce(prior_budget, 0) as dollar_change,
    round((latest_budget - coalesce(prior_budget, 0)) * 100.0 / nullif(prior_budget, 0), 1) as yoy_pct,
    round(
        case
            when budget_5y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_5y_pct,
    round(
        case
            when budget_10y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`),n.$$.dirty[4]&896&&s(74,Re=`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year) y_10 on y_10.fiscal_year = m.max_year - 10
)
select
    total_budget,
    latest_budget,
    latest_budget - coalesce(prior_budget, 0) as dollar_change,
    round((latest_budget - coalesce(prior_budget, 0)) * 100.0 / nullif(prior_budget, 0), 1) as yoy_pct,
    round(
        case
            when budget_5y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_5y_ago, 1.0 / 5.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_5y_pct,
    round(
        case
            when budget_10y_ago > 0 and latest_budget > 0
                then (power(latest_budget / budget_10y_ago, 1.0 / 10.0) - 1.0) * 100.0
            else null
        end, 1
    ) as cagr_10y_pct,
    coalesce(cast(display_year as varchar), 'N/A') as max_year_label
from points`),n.$$.dirty[2]&15360&&(y||!_a?y||(Xe(Re,{noResolve:y,...l}),s(75,_a=!0)):Xe(Re,{noResolve:y})),n.$$.dirty[4]&384&&s(77,ba=ee`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[4]&384&&s(78,$a=`select fiscal_year, total_budget
from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[2]&245760&&(ba||!Wa?ba||(Ka($a,{noResolve:ba,...la}),s(79,Wa=!0)):Ka($a,{noResolve:ba})),n.$$.dirty[4]&384&&s(81,ga=ee`select
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[4]&384&&s(82,wa=`select
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[2]&3932160&&(ga||!vt?ga||(xt(wa,{noResolve:ga,...ma}),s(83,vt=!0)):xt(wa,{noResolve:ga})),n.$$.dirty[4]&384&&s(85,Fa=ee`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_budget,
        base_year,
        max_year,
        final_budget,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_budget > 0 and final_budget > 0
                then (power(final_budget / base_budget, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_budget * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_budget * case fiscal_year
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
order by fiscal_year`),n.$$.dirty[4]&384&&s(86,at=`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
cagr_calc as (
    select
        fiscal_year,
        total_budget,
        base_budget,
        base_year,
        max_year,
        final_budget,
        yr_idx,
        total_years,
        round(
            case when total_years > 0 and base_budget > 0 and final_budget > 0
                then (power(final_budget / base_budget, 1.0 / total_years) - 1.0) * 100.0
                else null
            end, 2
        ) as cagr_pct
    from base
)
select
    fiscal_year,
    total_budget,
    round(base_budget * power(1.0 + cagr_pct / 100.0, yr_idx), 2) as cagr_trend,
    -- CPI-based inflation multipliers anchored to first year in data
    -- Using US CPI annual averages; first year in data = multiplier 1.000
    round(base_budget * case fiscal_year
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
order by fiscal_year`),n.$$.dirty[2]&62914560&&(Fa||!Ft?Fa||(Ct(at,{noResolve:Fa,...xa}),s(87,Ft=!0)):Ct(at,{noResolve:Fa})),n.$$.dirty[4]&896&&s(89,Ea=ee`select
    agency_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where agency_name is not null
group by agency_name
order by spend desc
limit 10`),n.$$.dirty[4]&896&&s(90,tt=`select
    agency_name,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
where agency_name is not null
group by agency_name
order by spend desc
limit 10`),n.$$.dirty[2]&1006632960&&(Ea||!Et?Ea||(Bt(tt,{noResolve:Ea,...ja}),s(91,Et=!0)):Bt(tt,{noResolve:Ea})),n.$$.dirty[2]&1073741824|n.$$.dirty[3]&7&&(Aa||!Dt?Aa||(Rt(rt,{noResolve:Aa,...Ba}),s(95,Dt=!0)):Rt(rt,{noResolve:Aa})),n.$$.dirty[4]&384&&s(97,Ra=ee`with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`),n.$$.dirty[4]&384&&s(98,st=`with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`),n.$$.dirty[3]&120&&(Ra||!St?Ra||(It(st,{noResolve:Ra,...Da}),s(99,St=!0)):It(st,{noResolve:Ra})),n.$$.dirty[4]&896&&s(101,Sa=ee`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select fund_type, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = l.fund_type
order by l.latest_budget desc`),n.$$.dirty[4]&896&&s(102,nt=`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.display_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select fund_type, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
where f.fiscal_year = m.prior_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = l.fund_type
order by l.latest_budget desc`),n.$$.dirty[3]&1920&&(Sa||!Nt?Sa||(Yt(nt,{noResolve:Sa,...Ta}),s(103,Nt=!0)):Yt(nt,{noResolve:Sa})),n.$$.dirty[4]&896&&s(105,qa=ee`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc
limit 20`),n.$$.dirty[4]&896&&s(106,lt=`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    l.latest_budget,
    coalesce(p.prior_budget, 0) as prior_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l
left join prior p using (agency_name)
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc
limit 20`),n.$$.dirty[3]&30720&&(qa||!Ht?qa||(Vt(lt,{noResolve:qa,...Ia}),s(107,Ht=!0)):Vt(lt,{noResolve:qa})),n.$$.dirty[4]&384&&s(109,Ya=ee`select
    f.fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = f.fund_type
where f.fund_type is not null
group by f.fiscal_year, f.fund_type, fp.fund_rank, fp.fund_color
order by f.fiscal_year, fund_rank`),n.$$.dirty[4]&384&&s(110,ot=`select
    f.fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) where fund_type is not null
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join (select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)) r
        on (
            (r.is_like and lower(d.fund_type) like r.pattern)
            or (not r.is_like and lower(d.fund_type) = r.pattern)
        )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1) fp on fp.fund_type = f.fund_type
where f.fund_type is not null
group by f.fiscal_year, f.fund_type, fp.fund_rank, fp.fund_color
order by f.fiscal_year, fund_rank`),n.$$.dirty[3]&491520&&(Ya||!zt?Ya||(Mt(ot,{noResolve:Ya,...Na}),s(111,zt=!0)):Mt(ot,{noResolve:Ya})),n.$$.dirty[4]&384&&s(113,Ha=ee`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10`),n.$$.dirty[4]&384&&s(114,ct=`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10`),n.$$.dirty[3]&7864320&&(Ha||!Ut?Ha||(Ot(ct,{noResolve:Ha,...La}),s(115,Ut=!0)):Ot(ct,{noResolve:Ha})),n.$$.dirty[4]&384&&s(117,za=ee`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`),n.$$.dirty[4]&384&&s(118,_t=`select
    f.fiscal_year,
    f.agency_name,
    sum(f.amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
where f.agency_name in (select agency_name from (select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name
order by total_budget desc
limit 10))
    and f.agency_name is not null
group by f.fiscal_year, f.agency_name
order by f.fiscal_year`),n.$$.dirty[3]&125829120&&(za||!Pt?za||(Gt(_t,{noResolve:za,...Va}),s(119,Pt=!0)):Gt(_t,{noResolve:za})),n.$$.dirty[4]&384&&s(121,Ua=ee`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`),n.$$.dirty[4]&384&&s(122,it=`select
    agency_name,
    fiscal_year,
    sum(amount) as spend
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
where agency_name is not null
group by agency_name, fiscal_year
order by agency_name, fiscal_year`),n.$$.dirty[3]&2013265920&&(Ua||!Qt?Ua||(Xt(it,{noResolve:Ua,...Ma}),s(123,Qt=!0)):Xt(it,{noResolve:Ua})),n.$$.dirty[4]&896&&s(125,Pa=ee`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    '/budget-office/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(
        case when h5.budget_5y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.budget_10y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_budget desc`),n.$$.dirty[4]&896&&s(126,ut=`with latest as (
    select agency_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select agency_name, sum(amount) as prior_budget
    from (select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_5y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    select f.agency_name, sum(f.amount) as budget_10y_ago
    from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
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
    '/budget-office/agencies/' || replace(l.agency_name, ' ', '%20') as agency_link,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(
        case when h5.budget_5y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_5y_pct,
    round(
        case when h10.budget_10y_ago > 0 and l.latest_budget > 0
            then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
            else null end, 1
    ) as cagr_10y_pct,
    round(l.latest_budget * 100.0 / nullif(m.latest_budget, 0), 1) as latest_year_pct
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
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
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
),
selected_year as (
    select
        case
            when '${t}' in ('%', '', 'undefined') then max(fiscal_year)
            when '${t}' like '(select%' then max(fiscal_year)
            else cast('${t}' as int)
        end as chosen_year
    from (select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    s.chosen_year as display_year,
    max(case when o.fiscal_year = s.chosen_year then o.total_budget end) as latest_budget,
    max(case when o.fiscal_year = s.chosen_year - 1 then o.total_budget end) as prior_budget,
    s.chosen_year - 1 as prior_year,
    b.total_budget
from bounds b
cross join selected_year s
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget, s.chosen_year) m
order by l.latest_budget desc`),n.$$.dirty[4]&15&&(Pa||!Kt?Pa||(Jt(ut,{noResolve:Pa,...Oa}),s(127,Kt=!0)):Jt(ut,{noResolve:Pa})),n.$$.dirty[0]&1&&s(34,i=[{id:"agency_name",title:"Agency",align:"left"},{id:"latest_budget",title:`Latest Year (${((x=$e==null?void 0:$e[0])==null?void 0:x.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&1&&s(33,c=[{id:"fund_type",title:"Fund Type",align:"left"},{id:"latest_budget",title:`Latest Year (${((Qe=$e==null?void 0:$e[0])==null?void 0:Qe.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&128&&s(32,u=Zt),n.$$.dirty[0]&2&&as(va,"total_budget"),n.$$.dirty[0]&4&&s(31,$=((Ce=Ca==null?void 0:Ca[0])==null?void 0:Ce.cagr_pct)!=null?Number(Ca[0].cagr_pct).toFixed(1):null),n.$$.dirty[0]&8&&s(30,T=[...new Set(Ja.map(P=>String(P.fiscal_year)))].sort((P,xe)=>Number(P)-Number(xe))),n.$$.dirty[0]&8&&s(11,F=Ja.reduce((P,xe)=>{const Te=xe.fund_type??"Unknown";return P[Te]=(P[Te]||0)+(Number(xe.spend)||0),P},{})),n.$$.dirty[0]&2056&&s(29,B=[...new Set(Ja.map(P=>P.fund_type))].sort((P,xe)=>{const Te=(F[xe]||0)-(F[P]||0);return Math.abs(Te)>1e-6?Te:String(P).localeCompare(String(xe))})),n.$$.dirty[0]&32&&s(28,j=[...new Set((mt??[]).map(P=>String(P.fiscal_year)))].sort((P,xe)=>Number(P)-Number(xe))),n.$$.dirty[0]&16&&(bt??[]).slice(0,3).map(P=>P.agency_name),n.$$.dirty[0]&64&&s(130,g=[...new Set((dt??[]).map(P=>P.fiscal_year))].sort((P,xe)=>P-xe)),n.$$.dirty[0]&64&&s(129,C=Object.values((dt??[]).reduce(function(P,xe){const Te=xe.agency_name;return P[Te]||(P[Te]={agency_name:xe.agency_name}),P[Te]["FY"+xe.fiscal_year]=(P[Te]["FY"+xe.fiscal_year]||0)+xe.spend,P},{}))),n.$$.dirty[0]&256|n.$$.dirty[4]&64&&s(10,m=gt==="3y"?g.slice(-3):gt==="5y"?g.slice(-5):g),n.$$.dirty[0]&512|n.$$.dirty[4]&32&&s(128,R=yt?C.filter(function(P){return P.agency_name.toLowerCase().includes(yt.toLowerCase())}):C),n.$$.dirty[0]&1024|n.$$.dirty[4]&16&&s(27,v=m.length>0?R.slice().sort(function(P,xe){const Te="FY"+m[m.length-1];return(xe[Te]||0)-(P[Te]||0)}).map(function(P){return Object.assign({},P,{agency_link:"/budget-office/agencies/"+encodeURIComponent(P.agency_name)})}):R.map(function(P){return Object.assign({},P,{agency_link:"/budget-office/agencies/"+encodeURIComponent(P.agency_name)})}))},s(41,le=ee`select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year`),s(42,We="select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year"),s(45,J=ee`select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type`),s(46,he="select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type"),s(49,ae=ee`select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name`),s(50,Ze="select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name"),s(93,Aa=ee`select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)`),s(94,rt=`select *
from (
    values
        ('federal funds', 1, '#C8122C', false),
        ('general funds', 2, '#FFC838', false),
        ('special funds', 3, '#2EAD6B', false),
        ('american rescue plan act%', 4, '#9B1C31', true),
        ('coronavirus aid, relief, and economic security act%', 5, '#B08A00', true),
        ('coronavirus response and relief sup act%', 6, '#6A1B2A', true),
        ('federal funds (covid)%', 7, '#1ABC9C', true),
        ('unrestricted', 8, '#F08C46', false),
        ('current%unrest%fund%', 8, '#F08C46', true),
        ('restricted', 9, '#5B8FF9', false),
        ('current%rest%fund%', 9, '#5B8FF9', true)
) as rules(pattern, fund_rank, fund_color, is_like)`),[$e,va,Ca,Ja,bt,mt,dt,Zt,gt,yt,m,F,h,fe,Je,ca,ze,Me,Oe,Ge,kt,jt,At,Tt,qt,Lt,Wt,v,j,B,T,$,u,c,i,nr,ts,rs,V,o,pe,le,We,Y,U,J,he,De,Fe,ae,Ze,ta,O,te,Ve,qe,ce,we,be,Ne,ne,me,oe,ke,je,ie,Ye,ve,Ee,Be,Le,b,l,y,Re,_a,la,ba,$a,Wa,ma,ga,wa,vt,xa,Fa,at,Ft,ja,Ea,tt,Et,Ba,Aa,rt,Dt,Da,Ra,st,St,Ta,Sa,nt,Nt,Ia,qa,lt,Ht,Na,Ya,ot,zt,La,Ha,ct,Ut,Va,za,_t,Pt,Ma,Ua,it,Qt,Oa,Pa,ut,Kt,R,C,g,e,a,t,q,L,ss,ns,ls,os,cs,_s]}class Yn extends rr{constructor(r){super(),sr(this,r,xn,kn,ar,{data:38},null,[-1,-1,-1,-1,-1,-1,-1])}}export{Yn as component};
