import{s as ls,d as i,a as nt,i as f,e as M,f as j,c as h,g as k,h as is,j as R,k as Ca,m as Ee,l as fa,o as v,p as I,q as Zt,r as _s,u as cs,v as ds,w as us,y as wt,n as Ke,t as We,x as wa,b as qa,z as rr,A as ys,H as ms}from"../chunks/scheduler.Dm30zsRM.js";import{S as fs,i as gs,d as N,t as b,a as u,c as he,m as H,b as Y,e as L,g as ke}from"../chunks/index.CIVCTVMM.js";import{e as pa,a as bs,s as ps,Q as Ge,g as ws,p as $s,b as sr,r as nr,C as hs}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C3c9Relr.js";import{A as ks}from"../chunks/AgencyTrendChart.D_QcqjUu.js";import{F as vs,B as xs,T as js,P as Vr,a as Pr,C as Br}from"../chunks/TrendOverview.BKi7AqYa.js";import{w as Fs,g as Ts}from"../chunks/entry.C2LBCJTI.js";import{A as Sa}from"../chunks/Alert.CzSVg8eJ.js";import{h as B}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as Cs,a as Ft,b as pt}from"../chunks/Details.CvvzujXV.js";import{p as Rs}from"../chunks/stores.ttNqFgh2.js";import{G as Is}from"../chunks/Grid.Ck93ieUS.js";import{Q as Je}from"../chunks/QueryViewer.8A6MZmxp.js";import{E as Es}from"../chunks/ECharts.DzikzRDm.js";import{p as Ds}from"../chunks/profile.BW8tN6E9.js";function or(n,r,s){const e=n.slice();return e[188]=r[s],e[190]=s,e}function lr(n,r,s){const e=n.slice();return e[191]=r[s],e}function ir(n,r,s){const e=n.slice();return e[191]=r[s],e}function _r(n,r,s){const e=n.slice();return e[196]=r[s][0],e[197]=r[s][1],e}function cr(n,r,s){const e=n.slice();return e[200]=r[s],e}function dr(n,r,s){const e=n.slice();return e[196]=r[s][0],e[197]=r[s][1],e}function qs(n){let r,s=ve.title+"",e;return{c(){r=I("h1"),e=We(s),this.h()},l(t){r=R(t,"H1",{class:!0});var a=Ee(r);e=Ke(a,s),a.forEach(i),this.h()},h(){j(r,"class","title")},m(t,a){f(t,r,a),M(r,e)},p:wa,d(t){t&&i(r)}}}function Ss(n){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:wa,p:wa,d:wa}}function Ns(n){let r,s,e,t,a;return document.title=r=ve.title,{c(){s=v(),e=I("meta"),t=v(),a=I("meta"),this.h()},l(c){s=k(c),e=R(c,"META",{property:!0,content:!0}),t=k(c),a=R(c,"META",{name:!0,content:!0}),this.h()},h(){var c,_;j(e,"property","og:title"),j(e,"content",((c=ve.og)==null?void 0:c.title)??ve.title),j(a,"name","twitter:title"),j(a,"content",((_=ve.og)==null?void 0:_.title)??ve.title)},m(c,_){f(c,s,_),f(c,e,_),f(c,t,_),f(c,a,_)},p(c,_){_&0&&r!==(r=ve.title)&&(document.title=r)},d(c){c&&(i(s),i(e),i(t),i(a))}}}function Hs(n){var a,c;let r,s,e=(ve.description||((a=ve.og)==null?void 0:a.description))&&Ys(),t=((c=ve.og)==null?void 0:c.image)&&Ls();return{c(){e&&e.c(),r=v(),t&&t.c(),s=Ca()},l(_){e&&e.l(_),r=k(_),t&&t.l(_),s=Ca()},m(_,w){e&&e.m(_,w),f(_,r,w),t&&t.m(_,w),f(_,s,w)},p(_,w){var D,F;(ve.description||(D=ve.og)!=null&&D.description)&&e.p(_,w),(F=ve.og)!=null&&F.image&&t.p(_,w)},d(_){_&&(i(r),i(s)),e&&e.d(_),t&&t.d(_)}}}function Ys(n){let r,s,e,t,a;return{c(){r=I("meta"),s=v(),e=I("meta"),t=v(),a=I("meta"),this.h()},l(c){r=R(c,"META",{name:!0,content:!0}),s=k(c),e=R(c,"META",{property:!0,content:!0}),t=k(c),a=R(c,"META",{name:!0,content:!0}),this.h()},h(){var c,_,w;j(r,"name","description"),j(r,"content",ve.description??((c=ve.og)==null?void 0:c.description)),j(e,"property","og:description"),j(e,"content",((_=ve.og)==null?void 0:_.description)??ve.description),j(a,"name","twitter:description"),j(a,"content",((w=ve.og)==null?void 0:w.description)??ve.description)},m(c,_){f(c,r,_),f(c,s,_),f(c,e,_),f(c,t,_),f(c,a,_)},p:wa,d(c){c&&(i(r),i(s),i(e),i(t),i(a))}}}function Ls(n){let r,s,e;return{c(){r=I("meta"),s=v(),e=I("meta"),this.h()},l(t){r=R(t,"META",{property:!0,content:!0}),s=k(t),e=R(t,"META",{name:!0,content:!0}),this.h()},h(){var t,a;j(r,"property","og:image"),j(r,"content",sr((t=ve.og)==null?void 0:t.image)),j(e,"name","twitter:image"),j(e,"content",sr((a=ve.og)==null?void 0:a.image))},m(t,a){f(t,r,a),f(t,s,a),f(t,e,a)},p:wa,d(t){t&&(i(r),i(s),i(e))}}}function ur(n){let r,s,e,t,a;function c(){return n[138](n[196])}return{c(){r=I("button"),s=We(n[197]),this.h()},l(_){r=R(_,"BUTTON",{style:!0});var w=Ee(r);s=Ke(w,n[197]),w.forEach(i),this.h()},h(){j(r,"style",e="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[8]===n[196]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[8]===n[196]?"#ffffff":"#211030")+"; font-weight: "+(n[8]===n[196]?700:500))},m(_,w){f(_,r,w),M(r,s),t||(a=wt(r,"click",c),t=!0)},p(_,w){n=_,w[0]&256&&e!==(e="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[8]===n[196]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[8]===n[196]?"#ffffff":"#211030")+"; font-weight: "+(n[8]===n[196]?700:500))&&j(r,"style",e)},d(_){_&&i(r),t=!1,a()}}}function yr(n){let r,s;return r=new Je({props:{queryID:"g_fy",queryResult:n[12]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&4096&&(a.queryResult=e[12]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function mr(n){let r,s;return r=new Je({props:{queryID:"g_fund",queryResult:n[13]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&8192&&(a.queryResult=e[13]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function fr(n){let r,s;return r=new Je({props:{queryID:"g_agency",queryResult:n[14]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&16384&&(a.queryResult=e[14]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function As(n){let r,s;return r=new pt({props:{value:"%",valueLabel:"All Years"}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p:wa,i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Ms(n){let r,s;return r=new pt({props:{value:"%",valueLabel:"All Fund Types"}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p:wa,i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Us(n){let r,s;return r=new pt({props:{value:"%",valueLabel:"All Agencies"}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p:wa,i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Vs(n){let r,s,e,t,a,c;return r=new Ft({props:{name:"f_fy",data:n[12],value:"fy",title:"Fiscal Year",defaultValue:"%",$$slots:{default:[As]},$$scope:{ctx:n}}}),e=new Ft({props:{name:"f_fund",data:n[13],value:"fund_type",title:"Fund Type",defaultValue:"%",$$slots:{default:[Ms]},$$scope:{ctx:n}}}),a=new Ft({props:{name:"f_agency",data:n[14],value:"agency_name",title:"Agency",defaultValue:"%",$$slots:{default:[Us]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment),s=v(),L(e.$$.fragment),t=v(),L(a.$$.fragment)},l(_){Y(r.$$.fragment,_),s=k(_),Y(e.$$.fragment,_),t=k(_),Y(a.$$.fragment,_)},m(_,w){H(r,_,w),f(_,s,w),H(e,_,w),f(_,t,w),H(a,_,w),c=!0},p(_,w){const D={};w[0]&4096&&(D.data=_[12]),w[6]&524288&&(D.$$scope={dirty:w,ctx:_}),r.$set(D);const F={};w[0]&8192&&(F.data=_[13]),w[6]&524288&&(F.$$scope={dirty:w,ctx:_}),e.$set(F);const Z={};w[0]&16384&&(Z.data=_[14]),w[6]&524288&&(Z.$$scope={dirty:w,ctx:_}),a.$set(Z)},i(_){c||(u(r.$$.fragment,_),u(e.$$.fragment,_),u(a.$$.fragment,_),c=!0)},o(_){b(r.$$.fragment,_),b(e.$$.fragment,_),b(a.$$.fragment,_),c=!1},d(_){_&&(i(s),i(t)),N(r,_),N(e,_),N(a,_)}}}function Ps(n){let r,s;return r=new Is({props:{cols:"3",$$slots:{default:[Vs]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&28672|t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Bs(n){let r,s,e,t;return r=new pt({props:{value:"trend",valueLabel:"Trend Over Years"}}),e=new pt({props:{value:"latest",valueLabel:"Latest Year Snapshot"}}),{c(){L(r.$$.fragment),s=v(),L(e.$$.fragment)},l(a){Y(r.$$.fragment,a),s=k(a),Y(e.$$.fragment,a)},m(a,c){H(r,a,c),f(a,s,c),H(e,a,c),t=!0},p:wa,i(a){t||(u(r.$$.fragment,a),u(e.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),b(e.$$.fragment,a),t=!1},d(a){a&&i(s),N(r,a),N(e,a)}}}function gr(n){let r,s;return r=new Je({props:{queryID:"filtered",queryResult:n[15]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&32768&&(a.queryResult=e[15]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function br(n){let r,s;return r=new Je({props:{queryID:"yearly_rollup",queryResult:n[16]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&65536&&(a.queryResult=e[16]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function pr(n){let r,s;return r=new Je({props:{queryID:"scope_meta",queryResult:n[17]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&131072&&(a.queryResult=e[17]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function wr(n){let r,s;return r=new Je({props:{queryID:"filtered_latest",queryResult:n[18]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&262144&&(a.queryResult=e[18]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function $r(n){let r,s;return r=new Je({props:{queryID:"filtered_prior",queryResult:n[19]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&524288&&(a.queryResult=e[19]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function hr(n){let r,s;return r=new Je({props:{queryID:"overview",queryResult:n[0]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&1&&(a.queryResult=e[0]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function kr(n){let r,s;return r=new Je({props:{queryID:"yearly",queryResult:n[1]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&2&&(a.queryResult=e[1]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function vr(n){let r,s;return r=new Je({props:{queryID:"yoy_detail",queryResult:n[20]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&1048576&&(a.queryResult=e[20]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function xr(n){let r,s;return r=new Je({props:{queryID:"fiscal_overview_cagr",queryResult:n[2]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&4&&(a.queryResult=e[2]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function jr(n){let r,s;return r=new Je({props:{queryID:"snapshot_towers",queryResult:n[21]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&2097152&&(a.queryResult=e[21]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Fr(n){let r,s;return r=new Je({props:{queryID:"snapshot_subprograms",queryResult:n[22]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&4194304&&(a.queryResult=e[22]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Tr(n){let r,s;return r=new Je({props:{queryID:"tower_snapshot",queryResult:n[23]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&8388608&&(a.queryResult=e[23]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Cr(n){let r,s;return r=new Je({props:{queryID:"agency_movers",queryResult:n[24]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&16777216&&(a.queryResult=e[24]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Rr(n){let r,s;return r=new Je({props:{queryID:"agency_latest",queryResult:n[25]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&33554432&&(a.queryResult=e[25]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Ir(n){let r,s;return r=new Je({props:{queryID:"top_towers_trend",queryResult:n[3]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&8&&(a.queryResult=e[3]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Er(n){let r,s;return r=new Je({props:{queryID:"tower_trend",queryResult:n[4]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&16&&(a.queryResult=e[4]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Dr(n){let r,s;return r=new Je({props:{queryID:"top_agencies_trend",queryResult:n[5]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&32&&(a.queryResult=e[5]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function qr(n){let r,s;return r=new Je({props:{queryID:"agency_trend_lines",queryResult:n[6]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&64&&(a.queryResult=e[6]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Sr(n){let r,s;return r=new Je({props:{queryID:"agency_drill",queryResult:n[7]}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&128&&(a.queryResult=e[7]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Nr(n){var ya,ha,Ia,Na;let r,s,e,t,a=(((ha=(ya=n[0])==null?void 0:ya[0])==null?void 0:ha.max_year_label)??"N/A")+"",c,_,w,D,F=n[139]()+"",Z,_e,C,U,q="YoY Change",$,se,p=n[140]()+"",z,A,Q,l,Qe=((Na=(Ia=n[0])==null?void 0:Ia[0])==null?void 0:Na.yoy_pct)!=null?(n[0][0].yoy_pct>=0?"+":"")+n[0][0].yoy_pct+"%":"—",ea,ra,Pe,W,Me,xe,He,me='<a href="#top-it-towers-by-spend--latest-year">Top IT Towers by Spend — Latest Year</a>',aa,ne,X,De,Be,sa,ze,_a='<a href="#top-it-programs-by-spend--latest-year">Top IT Programs by Spend — Latest Year</a>',qe,je,Se,Ae,la,Xe,ye,ua='<a href="#it-tower-breakdown--latest-year">IT Tower Breakdown — Latest Year</a>',Ue,Te,m,x,E,ee,G,fe='<a href="#it-spend-changes--year-over-year">IT Spend Changes — Year over Year</a>',O,oe,ce,ae,ge,Fe,Ce,ie,be='<a href="#agency-it-spend-drill-down--click-a-row-to-open-the-agency-page">Agency IT Spend Drill-Down — Click a row to open the Agency page</a>',de,K,te,pe,le;const we=[Os,zs],re=[];function Re(y,T){var $e;return(($e=y[21])==null?void 0:$e.length)>0?0:1}ne=Re(n),X=re[ne]=we[ne](n);const Ye=[Gs,Xs],ue=[];function Le(y,T){var $e;return(($e=y[22])==null?void 0:$e.length)>0?0:1}je=Le(n),Se=ue[je]=Ye[je](n);const o=[Js,Ws],d=[];function Ze(y,T){var $e;return(($e=y[23])==null?void 0:$e.length)>0?0:1}Te=Ze(n),m=d[Te]=o[Te](n),oe=new Sa({props:{status:"info",$$slots:{default:[en]},$$scope:{ctx:n}}}),ae=new xs({props:{data:n[24],labelField:"agency_name",title:"Biggest IT spend changes vs prior year",height:"520px",limit:10}});const Ve=[tn,an],Ne=[];function ga(y,T){var $e;return(($e=y[25])==null?void 0:$e.length)>0?0:1}return K=ga(n),te=Ne[K]=Ve[K](n),{c(){r=I("div"),s=I("div"),e=I("div"),t=We("Latest Year ("),c=We(a),_=We(")"),w=v(),D=I("div"),Z=We(F),_e=v(),C=I("div"),U=I("div"),U.textContent=q,$=v(),se=I("div"),z=We(p),Q=v(),l=I("div"),ea=We(Qe),W=v(),Me=I("hr"),xe=v(),He=I("h2"),He.innerHTML=me,aa=v(),X.c(),De=v(),Be=I("hr"),sa=v(),ze=I("h2"),ze.innerHTML=_a,qe=v(),Se.c(),Ae=v(),la=I("hr"),Xe=v(),ye=I("h2"),ye.innerHTML=ua,Ue=v(),m.c(),x=v(),E=I("hr"),ee=v(),G=I("h2"),G.innerHTML=fe,O=v(),L(oe.$$.fragment),ce=v(),L(ae.$$.fragment),ge=v(),Fe=I("hr"),Ce=v(),ie=I("h2"),ie.innerHTML=be,de=v(),te.c(),pe=Ca(),this.h()},l(y){r=R(y,"DIV",{style:!0});var T=Ee(r);s=R(T,"DIV",{style:!0});var $e=Ee(s);e=R($e,"DIV",{style:!0});var na=Ee(e);t=Ke(na,"Latest Year ("),c=Ke(na,a),_=Ke(na,")"),na.forEach(i),w=k($e),D=R($e,"DIV",{style:!0});var da=Ee(D);Z=Ke(da,F),da.forEach(i),$e.forEach(i),_e=k(T),C=R(T,"DIV",{style:!0});var ca=Ee(C);U=R(ca,"DIV",{style:!0,"data-svelte-h":!0}),fa(U)!=="svelte-14nbeix"&&(U.textContent=q),$=k(ca),se=R(ca,"DIV",{style:!0});var Ra=Ee(se);z=Ke(Ra,p),Ra.forEach(i),Q=k(ca),l=R(ca,"DIV",{style:!0});var ka=Ee(l);ea=Ke(ka,Qe),ka.forEach(i),ca.forEach(i),T.forEach(i),W=k(y),Me=R(y,"HR",{class:!0}),xe=k(y),He=R(y,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(He)!=="svelte-rbbuzr"&&(He.innerHTML=me),aa=k(y),X.l(y),De=k(y),Be=R(y,"HR",{class:!0}),sa=k(y),ze=R(y,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(ze)!=="svelte-1wnyu8w"&&(ze.innerHTML=_a),qe=k(y),Se.l(y),Ae=k(y),la=R(y,"HR",{class:!0}),Xe=k(y),ye=R(y,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(ye)!=="svelte-8cw7gl"&&(ye.innerHTML=ua),Ue=k(y),m.l(y),x=k(y),E=R(y,"HR",{class:!0}),ee=k(y),G=R(y,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(G)!=="svelte-zmr6z2"&&(G.innerHTML=fe),O=k(y),Y(oe.$$.fragment,y),ce=k(y),Y(ae.$$.fragment,y),ge=k(y),Fe=R(y,"HR",{class:!0}),Ce=k(y),ie=R(y,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(ie)!=="svelte-1618z4l"&&(ie.innerHTML=be),de=k(y),te.l(y),pe=Ca(),this.h()},h(){var y,T,$e,na,da,ca;h(e,"font-size","11px"),h(e,"font-weight","500"),h(e,"color","#6B7280"),h(e,"text-transform","uppercase"),h(e,"letter-spacing",".05em"),h(e,"margin-bottom","6px"),h(D,"font-size","1.8rem"),h(D,"font-weight","700"),h(D,"color","#231F20"),h(s,"background","var(--nxt-surface)"),h(s,"border","1px solid var(--nxt-border)"),h(s,"border-left","4px solid #C8122C"),h(s,"border-radius","8px"),h(s,"padding","16px 28px"),h(s,"min-width","200px"),h(s,"text-align","center"),h(U,"font-size","11px"),h(U,"font-weight","500"),h(U,"color","#6B7280"),h(U,"text-transform","uppercase"),h(U,"letter-spacing",".05em"),h(U,"margin-bottom","6px"),j(se,"style",A="font-size:1.8rem; font-weight:700; color:"+((((T=(y=n[0])==null?void 0:y[0])==null?void 0:T.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),j(l,"style",ra="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((na=($e=n[0])==null?void 0:$e[0])==null?void 0:na.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),j(C,"style",Pe="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((ca=(da=n[0])==null?void 0:da[0])==null?void 0:ca.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"),h(r,"display","flex"),h(r,"justify-content","center"),h(r,"gap","16px"),h(r,"flex-wrap","wrap"),h(r,"margin","16px 0"),j(Me,"class","markdown"),j(He,"class","markdown"),j(He,"id","top-it-towers-by-spend--latest-year"),j(Be,"class","markdown"),j(ze,"class","markdown"),j(ze,"id","top-it-programs-by-spend--latest-year"),j(la,"class","markdown"),j(ye,"class","markdown"),j(ye,"id","it-tower-breakdown--latest-year"),j(E,"class","markdown"),j(G,"class","markdown"),j(G,"id","it-spend-changes--year-over-year"),j(Fe,"class","markdown"),j(ie,"class","markdown"),j(ie,"id","agency-it-spend-drill-down--click-a-row-to-open-the-agency-page")},m(y,T){f(y,r,T),M(r,s),M(s,e),M(e,t),M(e,c),M(e,_),M(s,w),M(s,D),M(D,Z),M(r,_e),M(r,C),M(C,U),M(C,$),M(C,se),M(se,z),M(C,Q),M(C,l),M(l,ea),f(y,W,T),f(y,Me,T),f(y,xe,T),f(y,He,T),f(y,aa,T),re[ne].m(y,T),f(y,De,T),f(y,Be,T),f(y,sa,T),f(y,ze,T),f(y,qe,T),ue[je].m(y,T),f(y,Ae,T),f(y,la,T),f(y,Xe,T),f(y,ye,T),f(y,Ue,T),d[Te].m(y,T),f(y,x,T),f(y,E,T),f(y,ee,T),f(y,G,T),f(y,O,T),H(oe,y,T),f(y,ce,T),H(ae,y,T),f(y,ge,T),f(y,Fe,T),f(y,Ce,T),f(y,ie,T),f(y,de,T),Ne[K].m(y,T),f(y,pe,T),le=!0},p(y,T){var va,xa,Ea,ja,at,tt,Fa,Ta,Da,rt;(!le||T[0]&1)&&a!==(a=(((xa=(va=y[0])==null?void 0:va[0])==null?void 0:xa.max_year_label)??"N/A")+"")&&qa(c,a),(!le||T[0]&1)&&F!==(F=y[139]()+"")&&qa(Z,F),(!le||T[0]&1)&&p!==(p=y[140]()+"")&&qa(z,p),(!le||T[0]&1&&A!==(A="font-size:1.8rem; font-weight:700; color:"+((((ja=(Ea=y[0])==null?void 0:Ea[0])==null?void 0:ja.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&j(se,"style",A),(!le||T[0]&1)&&Qe!==(Qe=((tt=(at=y[0])==null?void 0:at[0])==null?void 0:tt.yoy_pct)!=null?(y[0][0].yoy_pct>=0?"+":"")+y[0][0].yoy_pct+"%":"—")&&qa(ea,Qe),(!le||T[0]&1&&ra!==(ra="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((Ta=(Fa=y[0])==null?void 0:Fa[0])==null?void 0:Ta.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&j(l,"style",ra),(!le||T[0]&1&&Pe!==(Pe="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((rt=(Da=y[0])==null?void 0:Da[0])==null?void 0:rt.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"))&&j(C,"style",Pe);let $e=ne;ne=Re(y),ne===$e?re[ne].p(y,T):(ke(),b(re[$e],1,1,()=>{re[$e]=null}),he(),X=re[ne],X?X.p(y,T):(X=re[ne]=we[ne](y),X.c()),u(X,1),X.m(De.parentNode,De));let na=je;je=Le(y),je===na?ue[je].p(y,T):(ke(),b(ue[na],1,1,()=>{ue[na]=null}),he(),Se=ue[je],Se?Se.p(y,T):(Se=ue[je]=Ye[je](y),Se.c()),u(Se,1),Se.m(Ae.parentNode,Ae));let da=Te;Te=Ze(y),Te===da?d[Te].p(y,T):(ke(),b(d[da],1,1,()=>{d[da]=null}),he(),m=d[Te],m?m.p(y,T):(m=d[Te]=o[Te](y),m.c()),u(m,1),m.m(x.parentNode,x));const ca={};T[6]&524288&&(ca.$$scope={dirty:T,ctx:y}),oe.$set(ca);const Ra={};T[0]&16777216&&(Ra.data=y[24]),ae.$set(Ra);let ka=K;K=ga(y),K===ka?Ne[K].p(y,T):(ke(),b(Ne[ka],1,1,()=>{Ne[ka]=null}),he(),te=Ne[K],te?te.p(y,T):(te=Ne[K]=Ve[K](y),te.c()),u(te,1),te.m(pe.parentNode,pe))},i(y){le||(u(X),u(Se),u(m),u(oe.$$.fragment,y),u(ae.$$.fragment,y),u(te),le=!0)},o(y){b(X),b(Se),b(m),b(oe.$$.fragment,y),b(ae.$$.fragment,y),b(te),le=!1},d(y){y&&(i(r),i(W),i(Me),i(xe),i(He),i(aa),i(De),i(Be),i(sa),i(ze),i(qe),i(Ae),i(la),i(Xe),i(ye),i(Ue),i(x),i(E),i(ee),i(G),i(O),i(ce),i(ge),i(Fe),i(Ce),i(ie),i(de),i(pe)),re[ne].d(y),ue[je].d(y),d[Te].d(y),N(oe,y),N(ae,y),Ne[K].d(y)}}}function zs(n){let r,s;return r=new Sa({props:{status:"warning",$$slots:{default:[Qs]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Os(n){let r,s,e,t;return r=new Vr({props:{data:n[21],entityLabel:"IT towers"}}),e=new Pr({props:{data:n[21],title:"",barField:"spend",labelField:"it_tower",pctField:"pct_of_total",cumulativeField:"cumulative",totalField:"grand_total",height:"420px"}}),{c(){L(r.$$.fragment),s=v(),L(e.$$.fragment)},l(a){Y(r.$$.fragment,a),s=k(a),Y(e.$$.fragment,a)},m(a,c){H(r,a,c),f(a,s,c),H(e,a,c),t=!0},p(a,c){const _={};c[0]&2097152&&(_.data=a[21]),r.$set(_);const w={};c[0]&2097152&&(w.data=a[21]),e.$set(w)},i(a){t||(u(r.$$.fragment,a),u(e.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),b(e.$$.fragment,a),t=!1},d(a){a&&i(s),N(r,a),N(e,a)}}}function Qs(n){let r;return{c(){r=We("No IT tower spend data available for this filter selection.")},l(s){r=Ke(s,"No IT tower spend data available for this filter selection.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function Xs(n){let r,s;return r=new Sa({props:{status:"warning",$$slots:{default:[Ks]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Gs(n){let r,s,e,t;return r=new Vr({props:{data:n[22],entityLabel:"IT programs"}}),e=new Pr({props:{data:n[22],title:"",barField:"spend",labelField:"subprogram_name",pctField:"pct_of_total",cumulativeField:"cumulative",totalField:"grand_total",height:"420px"}}),{c(){L(r.$$.fragment),s=v(),L(e.$$.fragment)},l(a){Y(r.$$.fragment,a),s=k(a),Y(e.$$.fragment,a)},m(a,c){H(r,a,c),f(a,s,c),H(e,a,c),t=!0},p(a,c){const _={};c[0]&4194304&&(_.data=a[22]),r.$set(_);const w={};c[0]&4194304&&(w.data=a[22]),e.$set(w)},i(a){t||(u(r.$$.fragment,a),u(e.$$.fragment,a),t=!0)},o(a){b(r.$$.fragment,a),b(e.$$.fragment,a),t=!1},d(a){a&&i(s),N(r,a),N(e,a)}}}function Ks(n){let r;return{c(){r=We("No IT program spend data available for this filter selection.")},l(s){r=Ke(s,"No IT program spend data available for this filter selection.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function Ws(n){let r,s;return r=new Sa({props:{status:"warning",$$slots:{default:[Zs]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Js(n){let r,s;return r=new Br({props:{data:n[23],columns:n[28],search:!0,defaultSort:"latest_spend",defaultDir:-1}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&8388608&&(a.data=e[23]),t[0]&268435456&&(a.columns=e[28]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function Zs(n){let r;return{c(){r=We("No IT tower breakdown data available for this filter selection.")},l(s){r=Ke(s,"No IT tower breakdown data available for this filter selection.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function en(n){let r;return{c(){r=We("Agencies sorted by absolute dollar change in IT spend from prior year.")},l(s){r=Ke(s,"Agencies sorted by absolute dollar change in IT spend from prior year.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function an(n){let r,s;return r=new Sa({props:{status:"warning",$$slots:{default:[rn]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function tn(n){let r,s;return r=new Br({props:{data:n[25],columns:n[29],linkField:"agency_link",search:!0,defaultSort:"latest_spend",defaultDir:-1}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&33554432&&(a.data=e[25]),t[0]&536870912&&(a.columns=e[29]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function rn(n){let r;return{c(){r=We("No agency IT spend data available for this filter selection.")},l(s){r=Ke(s,"No agency IT spend data available for this filter selection.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function Hr(n){let r,s,e,t='<a href="#fiscal-overview">Fiscal Overview</a>',a,c,_,w,D,F,Z='<a href="#it-tower-composition-over-time">IT Tower Composition Over Time</a>',_e,C,U,q,$,se,p,z='<a href="#top-it-agencies--trend-over-time">Top IT Agencies — Trend Over Time</a>',A,Q,l,Qe,ea,ra,Pe,W='<a href="#agency-it-spending-by-year--click-on-agency-to-drill-to-its-specific-page">Agency IT Spending by Year — Click on Agency to drill to its specific page</a>',Me,xe,He,me,aa,ne,X,De,Be,sa,ze;c=new js({props:{yearly:n[1],yoyDetail:n[20],fiscalOverviewCagr:n[2],cagrPct:n[33],chartHeight:fn}});const _a=[nn,sn],qe=[];function je(m,x){var E;return((E=m[4])==null?void 0:E.length)>0?0:1}C=je(n),U=qe[C]=_a[C](n);const Se=[_n,ln],Ae=[];function la(m,x){var E;return((E=m[6])==null?void 0:E.length)>0?0:1}Q=la(n),l=Ae[Q]=Se[Q](n);let Xe=pa([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]),ye=[];for(let m=0;m<3;m+=1)ye[m]=Lr(_r(n,Xe,m));const ua=[un,dn],Ue=[];function Te(m,x){var E;return((E=m[27])==null?void 0:E.length)>0?0:1}return ne=Te(n),X=Ue[ne]=ua[ne](n),{c(){r=I("hr"),s=v(),e=I("h2"),e.innerHTML=t,a=v(),L(c.$$.fragment),_=v(),w=I("hr"),D=v(),F=I("h2"),F.innerHTML=Z,_e=v(),U.c(),q=v(),$=I("hr"),se=v(),p=I("h2"),p.innerHTML=z,A=v(),l.c(),Qe=v(),ea=I("hr"),ra=v(),Pe=I("h2"),Pe.innerHTML=W,Me=v(),xe=I("div");for(let m=0;m<3;m+=1)ye[m].c();He=v(),me=I("input"),aa=v(),X.c(),De=Ca(),this.h()},l(m){r=R(m,"HR",{class:!0}),s=k(m),e=R(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(e)!=="svelte-1d7gdnx"&&(e.innerHTML=t),a=k(m),Y(c.$$.fragment,m),_=k(m),w=R(m,"HR",{class:!0}),D=k(m),F=R(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(F)!=="svelte-1xp439f"&&(F.innerHTML=Z),_e=k(m),U.l(m),q=k(m),$=R(m,"HR",{class:!0}),se=k(m),p=R(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(p)!=="svelte-1qhll8b"&&(p.innerHTML=z),A=k(m),l.l(m),Qe=k(m),ea=R(m,"HR",{class:!0}),ra=k(m),Pe=R(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fa(Pe)!=="svelte-e4uu60"&&(Pe.innerHTML=W),Me=k(m),xe=R(m,"DIV",{style:!0});var x=Ee(xe);for(let E=0;E<3;E+=1)ye[E].l(x);x.forEach(i),He=k(m),me=R(m,"INPUT",{placeholder:!0,style:!0}),aa=k(m),X.l(m),De=Ca(),this.h()},h(){j(r,"class","markdown"),j(e,"class","markdown"),j(e,"id","fiscal-overview"),j(w,"class","markdown"),j(F,"class","markdown"),j(F,"id","it-tower-composition-over-time"),j($,"class","markdown"),j(p,"class","markdown"),j(p,"id","top-it-agencies--trend-over-time"),j(ea,"class","markdown"),j(Pe,"class","markdown"),j(Pe,"id","agency-it-spending-by-year--click-on-agency-to-drill-to-its-specific-page"),h(xe,"display","flex"),h(xe,"gap","8px"),h(xe,"margin","8px 0 14px 0"),j(me,"placeholder","Search agencies..."),h(me,"border","1px solid var(--nxt-border)"),h(me,"border-radius","8px"),h(me,"padding","8px 12px"),h(me,"font-size","0.9rem"),h(me,"width","280px"),h(me,"margin-bottom","12px"),h(me,"background","var(--nxt-surface)"),h(me,"color","var(--nxt-text)")},m(m,x){f(m,r,x),f(m,s,x),f(m,e,x),f(m,a,x),H(c,m,x),f(m,_,x),f(m,w,x),f(m,D,x),f(m,F,x),f(m,_e,x),qe[C].m(m,x),f(m,q,x),f(m,$,x),f(m,se,x),f(m,p,x),f(m,A,x),Ae[Q].m(m,x),f(m,Qe,x),f(m,ea,x),f(m,ra,x),f(m,Pe,x),f(m,Me,x),f(m,xe,x);for(let E=0;E<3;E+=1)ye[E]&&ye[E].m(xe,null);f(m,He,x),f(m,me,x),rr(me,n[10]),f(m,aa,x),Ue[ne].m(m,x),f(m,De,x),Be=!0,sa||(ze=wt(me,"input",n[146]),sa=!0)},p(m,x){const E={};x[0]&2&&(E.yearly=m[1]),x[0]&1048576&&(E.yoyDetail=m[20]),x[0]&4&&(E.fiscalOverviewCagr=m[2]),x[1]&4&&(E.cagrPct=m[33]),c.$set(E);let ee=C;C=je(m),C===ee?qe[C].p(m,x):(ke(),b(qe[ee],1,1,()=>{qe[ee]=null}),he(),U=qe[C],U?U.p(m,x):(U=qe[C]=_a[C](m),U.c()),u(U,1),U.m(q.parentNode,q));let G=Q;if(Q=la(m),Q===G?Ae[Q].p(m,x):(ke(),b(Ae[G],1,1,()=>{Ae[G]=null}),he(),l=Ae[Q],l?l.p(m,x):(l=Ae[Q]=Se[Q](m),l.c()),u(l,1),l.m(Qe.parentNode,Qe)),x[0]&512){Xe=pa([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]);let O;for(O=0;O<3;O+=1){const oe=_r(m,Xe,O);ye[O]?ye[O].p(oe,x):(ye[O]=Lr(oe),ye[O].c(),ye[O].m(xe,null))}for(;O<3;O+=1)ye[O].d(1)}x[0]&1024&&me.value!==m[10]&&rr(me,m[10]);let fe=ne;ne=Te(m),ne===fe?Ue[ne].p(m,x):(ke(),b(Ue[fe],1,1,()=>{Ue[fe]=null}),he(),X=Ue[ne],X?X.p(m,x):(X=Ue[ne]=ua[ne](m),X.c()),u(X,1),X.m(De.parentNode,De))},i(m){Be||(u(c.$$.fragment,m),u(U),u(l),u(X),Be=!0)},o(m){b(c.$$.fragment,m),b(U),b(l),b(X),Be=!1},d(m){m&&(i(r),i(s),i(e),i(a),i(_),i(w),i(D),i(F),i(_e),i(q),i($),i(se),i(p),i(A),i(Qe),i(ea),i(ra),i(Pe),i(Me),i(xe),i(He),i(me),i(aa),i(De)),N(c,m),qe[C].d(m),Ae[Q].d(m),nt(ye,m),Ue[ne].d(m),sa=!1,ze()}}}function sn(n){let r,s;return r=new Sa({props:{status:"warning",$$slots:{default:[on]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function nn(n){let r,s,e,t,a=pa(n[3]),c=[];for(let _=0;_<a.length;_+=1)c[_]=Yr(cr(n,a,_));return e=new Es({props:{height:"480px",config:{tooltip:{trigger:"item",formatter:n[142]},grid:{left:56,right:24,top:20,bottom:40},xAxis:{type:"category",data:n[32]},yAxis:{type:"value",axisLabel:{formatter:n[143]},splitLine:{lineStyle:{color:"#D9DDE3"}}},series:n[3].map(n[144])}}}),{c(){r=I("div");for(let _=0;_<c.length;_+=1)c[_].c();s=v(),L(e.$$.fragment),this.h()},l(_){r=R(_,"DIV",{style:!0});var w=Ee(r);for(let D=0;D<c.length;D+=1)c[D].l(w);w.forEach(i),s=k(_),Y(e.$$.fragment,_),this.h()},h(){h(r,"display","flex"),h(r,"flex-wrap","wrap"),h(r,"gap","8px"),h(r,"margin","8px 0 14px 0")},m(_,w){f(_,r,w);for(let D=0;D<c.length;D+=1)c[D]&&c[D].m(r,null);f(_,s,w),H(e,_,w),t=!0},p(_,w){if(w[0]&67108872|w[1]&257){a=pa(_[3]);let F;for(F=0;F<a.length;F+=1){const Z=cr(_,a,F);c[F]?c[F].p(Z,w):(c[F]=Yr(Z),c[F].c(),c[F].m(r,null))}for(;F<c.length;F+=1)c[F].d(1);c.length=a.length}const D={};w[0]&67108888|w[1]&3&&(D.config={tooltip:{trigger:"item",formatter:_[142]},grid:{left:56,right:24,top:20,bottom:40},xAxis:{type:"category",data:_[32]},yAxis:{type:"value",axisLabel:{formatter:_[143]},splitLine:{lineStyle:{color:"#D9DDE3"}}},series:_[3].map(_[144])}),e.$set(D)},i(_){t||(u(e.$$.fragment,_),t=!0)},o(_){b(e.$$.fragment,_),t=!1},d(_){_&&(i(r),i(s)),nt(c,_),N(e,_)}}}function on(n){let r;return{c(){r=We("No IT tower trend data available for this filter selection.")},l(s){r=Ke(s,"No IT tower trend data available for this filter selection.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function Yr(n){let r,s,e,t,a,c=n[200].it_tower+"",_,w,D,F,Z,_e,C;function U(){return n[141](n[200])}return{c(){r=I("button"),s=I("span"),t=v(),a=I("span"),_=We(c),D=v(),this.h()},l(q){r=R(q,"BUTTON",{style:!0,"aria-pressed":!0});var $=Ee(r);s=R($,"SPAN",{style:!0}),Ee(s).forEach(i),t=k($),a=R($,"SPAN",{style:!0});var se=Ee(a);_=Ke(se,c),se.forEach(i),D=k($),$.forEach(i),this.h()},h(){j(s,"style",e=`width:10px; height:10px; border-radius:50%; background: ${n[200].it_tower===n[31][0]?"#C8122C":n[200].it_tower===n[31][1]?"#FFC838":n[200].it_tower===n[31][2]?"#231F20":"#C9CED6"}; display:inline-block;`),j(a,"style",w=`color:${n[26]===n[200].it_tower?"#C8122C":"#231F20"}; font-weight:${n[26]===n[200].it_tower?700:500}`),j(r,"style",F=`border-radius:14px; padding:6px 10px; font-size:0.9rem; display:inline-flex; align-items:center; gap:8px; cursor:pointer; border: ${n[26]===n[200].it_tower?"2px solid #C8122C":"1px solid var(--nxt-border)"}; background: ${n[26]===n[200].it_tower?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)"}; box-shadow: ${n[26]===n[200].it_tower?"0 4px 10px rgba(200,20,44,0.08)":"none"}`),j(r,"aria-pressed",Z=n[26]===n[200].it_tower)},m(q,$){f(q,r,$),M(r,s),M(r,t),M(r,a),M(a,_),M(r,D),_e||(C=wt(r,"click",U),_e=!0)},p(q,$){n=q,$[0]&8|$[1]&1&&e!==(e=`width:10px; height:10px; border-radius:50%; background: ${n[200].it_tower===n[31][0]?"#C8122C":n[200].it_tower===n[31][1]?"#FFC838":n[200].it_tower===n[31][2]?"#231F20":"#C9CED6"}; display:inline-block;`)&&j(s,"style",e),$[0]&8&&c!==(c=n[200].it_tower+"")&&qa(_,c),$[0]&67108872&&w!==(w=`color:${n[26]===n[200].it_tower?"#C8122C":"#231F20"}; font-weight:${n[26]===n[200].it_tower?700:500}`)&&j(a,"style",w),$[0]&67108872&&F!==(F=`border-radius:14px; padding:6px 10px; font-size:0.9rem; display:inline-flex; align-items:center; gap:8px; cursor:pointer; border: ${n[26]===n[200].it_tower?"2px solid #C8122C":"1px solid var(--nxt-border)"}; background: ${n[26]===n[200].it_tower?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)"}; box-shadow: ${n[26]===n[200].it_tower?"0 4px 10px rgba(200,20,44,0.08)":"none"}`)&&j(r,"style",F),$[0]&67108872&&Z!==(Z=n[26]===n[200].it_tower)&&j(r,"aria-pressed",Z)},d(q){q&&i(r),_e=!1,C()}}}function ln(n){let r,s;return r=new Sa({props:{status:"warning",$$slots:{default:[cn]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function _n(n){let r,s;return r=new ks({props:{agencies:n[5],trendLines:n[6],years:n[30],title:"Top IT Agencies by Spend — Trend Over Time",entityLabel:"agency",topN:5,height:"520px"}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[0]&32&&(a.agencies=e[5]),t[0]&64&&(a.trendLines=e[6]),t[0]&1073741824&&(a.years=e[30]),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function cn(n){let r;return{c(){r=We("No agency IT spend trend data available for this filter selection.")},l(s){r=Ke(s,"No agency IT spend trend data available for this filter selection.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function Lr(n){let r,s,e,t,a;function c(){return n[145](n[196])}return{c(){r=I("button"),s=We(n[197]),this.h()},l(_){r=R(_,"BUTTON",{style:!0});var w=Ee(r);s=Ke(w,n[197]),w.forEach(i),this.h()},h(){j(r,"style",e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[9]===n[196]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[9]===n[196]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[9]===n[196]?"#C8122C":"#231F20")+"; font-weight: "+(n[9]===n[196]?700:500))},m(_,w){f(_,r,w),M(r,s),t||(a=wt(r,"click",c),t=!0)},p(_,w){n=_,w[0]&512&&e!==(e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[9]===n[196]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[9]===n[196]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[9]===n[196]?"#C8122C":"#231F20")+"; font-weight: "+(n[9]===n[196]?700:500))&&j(r,"style",e)},d(_){_&&i(r),t=!1,a()}}}function dn(n){let r,s;return r=new Sa({props:{status:"warning",$$slots:{default:[yn]},$$scope:{ctx:n}}}),{c(){L(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,t){H(r,e,t),s=!0},p(e,t){const a={};t[6]&524288&&(a.$$scope={dirty:t,ctx:e}),r.$set(a)},i(e){s||(u(r.$$.fragment,e),s=!0)},o(e){b(r.$$.fragment,e),s=!1},d(e){N(r,e)}}}function un(n){let r,s,e,t,a,c="Agency",_,w,D,F,Z,_e=pa(n[11]),C=[];for(let $=0;$<_e.length;$+=1)C[$]=Ar(ir(n,_e,$));let U=pa(n[27]),q=[];for(let $=0;$<U.length;$+=1)q[$]=Ur(or(n,U,$));return{c(){r=I("div"),s=I("table"),e=I("thead"),t=I("tr"),a=I("th"),a.textContent=c,_=v();for(let $=0;$<C.length;$+=1)C[$].c();w=v(),D=I("th"),F=v(),Z=I("tbody");for(let $=0;$<q.length;$+=1)q[$].c();this.h()},l($){r=R($,"DIV",{style:!0});var se=Ee(r);s=R(se,"TABLE",{style:!0});var p=Ee(s);e=R(p,"THEAD",{});var z=Ee(e);t=R(z,"TR",{style:!0});var A=Ee(t);a=R(A,"TH",{style:!0,"data-svelte-h":!0}),fa(a)!=="svelte-taluwf"&&(a.textContent=c),_=k(A);for(let l=0;l<C.length;l+=1)C[l].l(A);w=k(A),D=R(A,"TH",{style:!0}),Ee(D).forEach(i),A.forEach(i),z.forEach(i),F=k(p),Z=R(p,"TBODY",{});var Q=Ee(Z);for(let l=0;l<q.length;l+=1)q[l].l(Q);Q.forEach(i),p.forEach(i),se.forEach(i),this.h()},h(){h(a,"text-align","left"),h(a,"padding","10px 14px"),h(a,"font-weight","700"),h(a,"color","#231F20"),h(a,"min-width","260px"),h(D,"padding","10px 8px"),h(t,"background","var(--nxt-pink)"),h(t,"border-bottom","2px solid #C8122C"),h(s,"width","100%"),h(s,"border-collapse","collapse"),h(s,"font-size","0.875rem"),h(r,"overflow-x","auto"),h(r,"border-radius","8px"),h(r,"border","1px solid var(--nxt-border)"),h(r,"background","var(--nxt-surface)")},m($,se){f($,r,se),M(r,s),M(s,e),M(e,t),M(t,a),M(t,_);for(let p=0;p<C.length;p+=1)C[p]&&C[p].m(t,null);M(t,w),M(t,D),M(s,F),M(s,Z);for(let p=0;p<q.length;p+=1)q[p]&&q[p].m(Z,null)},p($,se){if(se[0]&2048){_e=pa($[11]);let p;for(p=0;p<_e.length;p+=1){const z=ir($,_e,p);C[p]?C[p].p(z,se):(C[p]=Ar(z),C[p].c(),C[p].m(t,w))}for(;p<C.length;p+=1)C[p].d(1);C.length=_e.length}if(se[0]&134219776|se[1]&192){U=pa($[27]);let p;for(p=0;p<U.length;p+=1){const z=or($,U,p);q[p]?q[p].p(z,se):(q[p]=Ur(z),q[p].c(),q[p].m(Z,null))}for(;p<q.length;p+=1)q[p].d(1);q.length=U.length}},i:wa,o:wa,d($){$&&i(r),nt(C,$),nt(q,$)}}}function yn(n){let r;return{c(){r=We("No agency IT spend data available for this filter selection.")},l(s){r=Ke(s,"No agency IT spend data available for this filter selection.")},m(s,e){f(s,r,e)},d(s){s&&i(r)}}}function Ar(n){let r,s,e=n[191]+"",t;return{c(){r=I("th"),s=We("FY"),t=We(e),this.h()},l(a){r=R(a,"TH",{style:!0});var c=Ee(r);s=Ke(c,"FY"),t=Ke(c,e),c.forEach(i),this.h()},h(){h(r,"text-align","right"),h(r,"padding","10px 14px"),h(r,"font-weight","700"),h(r,"color","#231F20"),h(r,"white-space","nowrap")},m(a,c){f(a,r,c),M(r,s),M(r,t)},p(a,c){c[0]&2048&&e!==(e=a[191]+"")&&qa(t,e)},d(a){a&&i(r)}}}function Mr(n){let r,s=(n[188]["FY"+n[191]]??0)>=1e9?"$"+(n[188]["FY"+n[191]]/1e9).toFixed(2)+"B":(n[188]["FY"+n[191]]??0)>=1e6?"$"+(n[188]["FY"+n[191]]/1e6).toFixed(1)+"M":(n[188]["FY"+n[191]]??0)>=1e3?"$"+(n[188]["FY"+n[191]]/1e3).toFixed(0)+"K":"-",e,t;return{c(){r=I("td"),e=We(s),this.h()},l(a){r=R(a,"TD",{style:!0});var c=Ee(r);e=Ke(c,s),c.forEach(i),this.h()},h(){j(r,"style",t="text-align:right; padding:9px 14px; color:#231F20; "+n[38](n[188],n[191],n[11]))},m(a,c){f(a,r,c),M(r,e)},p(a,c){c[0]&134219776&&s!==(s=(a[188]["FY"+a[191]]??0)>=1e9?"$"+(a[188]["FY"+a[191]]/1e9).toFixed(2)+"B":(a[188]["FY"+a[191]]??0)>=1e6?"$"+(a[188]["FY"+a[191]]/1e6).toFixed(1)+"M":(a[188]["FY"+a[191]]??0)>=1e3?"$"+(a[188]["FY"+a[191]]/1e3).toFixed(0)+"K":"-")&&qa(e,s),c[0]&134219776&&t!==(t="text-align:right; padding:9px 14px; color:#231F20; "+a[38](a[188],a[191],a[11]))&&j(r,"style",t)},d(a){a&&i(r)}}}function Ur(n){let r,s,e=n[188].agency_name+"",t,a,c,_=n[37](n[188],n[11])+"",w,D,F,Z="›",_e,C,U,q=pa(n[11]),$=[];for(let p=0;p<q.length;p+=1)$[p]=Mr(lr(n,q,p));function se(){return n[147](n[188])}return{c(){r=I("tr"),s=I("td"),t=We(e),a=v(),c=new ms(!1),w=v();for(let p=0;p<$.length;p+=1)$[p].c();D=v(),F=I("td"),F.textContent=Z,_e=v(),this.h()},l(p){r=R(p,"TR",{style:!0,onmouseenter:!0,onmouseleave:!0});var z=Ee(r);s=R(z,"TD",{style:!0});var A=Ee(s);t=Ke(A,e),a=k(A),c=ys(A,!1),A.forEach(i),w=k(z);for(let Q=0;Q<$.length;Q+=1)$[Q].l(z);D=k(z),F=R(z,"TD",{style:!0,"data-svelte-h":!0}),fa(F)!=="svelte-1eyp1xf"&&(F.textContent=Z),_e=k(z),z.forEach(i),this.h()},h(){c.a=null,h(s,"padding","9px 14px"),h(s,"color","#231F20"),h(s,"font-weight","500"),h(F,"padding","9px 8px"),h(F,"color","#C8122C"),h(F,"font-size","0.8rem"),j(r,"style","border-bottom:1px solid #F3F4F6; cursor:pointer; background:"+(n[190]%2===0?"var(--nxt-surface)":"#f7f2fc")+";"),j(r,"onmouseenter","this.style.background='var(--nxt-pink)'"),j(r,"onmouseleave","this.style.background="+(n[190]%2===0?"'var(--nxt-surface)'":"'#f7f2fc'"))},m(p,z){f(p,r,z),M(r,s),M(s,t),M(s,a),c.m(_,s),M(r,w);for(let A=0;A<$.length;A+=1)$[A]&&$[A].m(r,null);M(r,D),M(r,F),M(r,_e),C||(U=wt(r,"click",se),C=!0)},p(p,z){if(n=p,z[0]&134217728&&e!==(e=n[188].agency_name+"")&&qa(t,e),z[0]&134219776&&_!==(_=n[37](n[188],n[11])+"")&&c.p(_),z[0]&134219776|z[1]&128){q=pa(n[11]);let A;for(A=0;A<q.length;A+=1){const Q=lr(n,q,A);$[A]?$[A].p(Q,z):($[A]=Mr(Q),$[A].c(),$[A].m(r,D))}for(;A<$.length;A+=1)$[A].d(1);$.length=q.length}},d(p){p&&i(r),nt($,p),C=!1,U()}}}function mn(n){let r,s,e,t,a,c,_,w='<h1 style="color: #211030; font-size: 1.7rem; font-weight: 700; margin: 0;">💻 Technology View</h1> <p style="color: #6321a5; font-size: 0.95rem; margin: 4px 0 0 0;">IT Spending Analysis · TBM v5.0.1 Classification</p>',D,F,Z,_e,C,U,q,$,se,p,z,A,Q,l,Qe,ea,ra,Pe,W,Me,xe,He,me,aa,ne,X,De,Be,sa,ze,_a,qe,je,Se,Ae,la,Xe=typeof ve<"u"&&ve.title&&ve.hide_title!==!0&&qs();function ye(o,d){return typeof ve<"u"&&ve.title?Ns:Ss}let Ue=ye()(n),Te=typeof ve=="object"&&Hs(),m=pa([["latest","Latest Year"],["trend","Trend Over Years"]]),x=[];for(let o=0;o<2;o+=1)x[o]=ur(dr(n,m,o));let E=n[12]&&yr(n),ee=n[13]&&mr(n),G=n[14]&&fr(n);$=new Cs({props:{title:"🔍 Filters",open:"false",$$slots:{default:[Ps]},$$scope:{ctx:n}}}),p=new vs({props:{title:"⚙ Filters",targetId:"page-filters"}}),Q=new Ft({props:{name:"f_view",title:"View",defaultValue:"trend",$$slots:{default:[Bs]},$$scope:{ctx:n}}});let fe=n[15]&&gr(n),O=n[16]&&br(n),oe=n[17]&&pr(n),ce=n[18]&&wr(n),ae=n[19]&&$r(n),ge=n[0]&&hr(n),Fe=n[1]&&kr(n),Ce=n[20]&&vr(n),ie=n[2]&&xr(n),be=n[21]&&jr(n),de=n[22]&&Fr(n),K=n[23]&&Tr(n),te=n[24]&&Cr(n),pe=n[25]&&Rr(n),le=n[3]&&Ir(n),we=n[4]&&Er(n),re=n[5]&&Dr(n),Re=n[6]&&qr(n),Ye=n[7]&&Sr(n),ue=n[34]=="latest"&&Nr(n),Le=n[34]=="trend"&&Hr(n);return{c(){Xe&&Xe.c(),r=v(),Ue.c(),s=I("meta"),e=I("meta"),Te&&Te.c(),t=Ca(),a=v(),c=I("div"),_=I("div"),_.innerHTML=w,D=v(),F=I("div");for(let o=0;o<2;o+=1)x[o].c();Z=v(),E&&E.c(),_e=v(),ee&&ee.c(),C=v(),G&&G.c(),U=v(),q=I("div"),L($.$$.fragment),se=v(),L(p.$$.fragment),z=v(),A=I("div"),L(Q.$$.fragment),l=v(),fe&&fe.c(),Qe=v(),O&&O.c(),ea=v(),oe&&oe.c(),ra=v(),ce&&ce.c(),Pe=v(),ae&&ae.c(),W=v(),ge&&ge.c(),Me=v(),Fe&&Fe.c(),xe=v(),Ce&&Ce.c(),He=v(),ie&&ie.c(),me=v(),be&&be.c(),aa=v(),de&&de.c(),ne=v(),K&&K.c(),X=v(),te&&te.c(),De=v(),pe&&pe.c(),Be=v(),le&&le.c(),sa=v(),we&&we.c(),ze=v(),re&&re.c(),_a=v(),Re&&Re.c(),qe=v(),Ye&&Ye.c(),je=v(),ue&&ue.c(),Se=v(),Le&&Le.c(),Ae=Ca(),this.h()},l(o){Xe&&Xe.l(o),r=k(o);const d=is("svelte-2igo1p",document.head);Ue.l(d),s=R(d,"META",{name:!0,content:!0}),e=R(d,"META",{name:!0,content:!0}),Te&&Te.l(d),t=Ca(),d.forEach(i),a=k(o),c=R(o,"DIV",{style:!0});var Ze=Ee(c);_=R(Ze,"DIV",{"data-svelte-h":!0}),fa(_)!=="svelte-1wrab87"&&(_.innerHTML=w),D=k(Ze),F=R(Ze,"DIV",{style:!0});var Ve=Ee(F);for(let ya=0;ya<2;ya+=1)x[ya].l(Ve);Ve.forEach(i),Ze.forEach(i),Z=k(o),E&&E.l(o),_e=k(o),ee&&ee.l(o),C=k(o),G&&G.l(o),U=k(o),q=R(o,"DIV",{id:!0});var Ne=Ee(q);Y($.$$.fragment,Ne),Ne.forEach(i),se=k(o),Y(p.$$.fragment,o),z=k(o),A=R(o,"DIV",{style:!0});var ga=Ee(A);Y(Q.$$.fragment,ga),ga.forEach(i),l=k(o),fe&&fe.l(o),Qe=k(o),O&&O.l(o),ea=k(o),oe&&oe.l(o),ra=k(o),ce&&ce.l(o),Pe=k(o),ae&&ae.l(o),W=k(o),ge&&ge.l(o),Me=k(o),Fe&&Fe.l(o),xe=k(o),Ce&&Ce.l(o),He=k(o),ie&&ie.l(o),me=k(o),be&&be.l(o),aa=k(o),de&&de.l(o),ne=k(o),K&&K.l(o),X=k(o),te&&te.l(o),De=k(o),pe&&pe.l(o),Be=k(o),le&&le.l(o),sa=k(o),we&&we.l(o),ze=k(o),re&&re.l(o),_a=k(o),Re&&Re.l(o),qe=k(o),Ye&&Ye.l(o),je=k(o),ue&&ue.l(o),Se=k(o),Le&&Le.l(o),Ae=Ca(),this.h()},h(){j(s,"name","twitter:card"),j(s,"content","summary_large_image"),j(e,"name","twitter:site"),j(e,"content","@evidence_dev"),h(F,"display","flex"),h(F,"border","1px solid #c9a8f0"),h(F,"border-radius","6px"),h(F,"width","fit-content"),h(F,"overflow","hidden"),h(F,"background","rgba(255,255,255,0.5)"),h(c,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),h(c,"padding","28px 36px"),h(c,"border-radius","12px"),h(c,"border-bottom","4px solid #802cd7"),h(c,"margin-bottom","0"),h(c,"display","flex"),h(c,"align-items","flex-end"),h(c,"justify-content","space-between"),h(c,"gap","24px"),h(c,"flex-wrap","wrap"),j(q,"id","page-filters"),h(A,"display","none")},m(o,d){Xe&&Xe.m(o,d),f(o,r,d),Ue.m(document.head,null),M(document.head,s),M(document.head,e),Te&&Te.m(document.head,null),M(document.head,t),f(o,a,d),f(o,c,d),M(c,_),M(c,D),M(c,F);for(let Ze=0;Ze<2;Ze+=1)x[Ze]&&x[Ze].m(F,null);f(o,Z,d),E&&E.m(o,d),f(o,_e,d),ee&&ee.m(o,d),f(o,C,d),G&&G.m(o,d),f(o,U,d),f(o,q,d),H($,q,null),f(o,se,d),H(p,o,d),f(o,z,d),f(o,A,d),H(Q,A,null),f(o,l,d),fe&&fe.m(o,d),f(o,Qe,d),O&&O.m(o,d),f(o,ea,d),oe&&oe.m(o,d),f(o,ra,d),ce&&ce.m(o,d),f(o,Pe,d),ae&&ae.m(o,d),f(o,W,d),ge&&ge.m(o,d),f(o,Me,d),Fe&&Fe.m(o,d),f(o,xe,d),Ce&&Ce.m(o,d),f(o,He,d),ie&&ie.m(o,d),f(o,me,d),be&&be.m(o,d),f(o,aa,d),de&&de.m(o,d),f(o,ne,d),K&&K.m(o,d),f(o,X,d),te&&te.m(o,d),f(o,De,d),pe&&pe.m(o,d),f(o,Be,d),le&&le.m(o,d),f(o,sa,d),we&&we.m(o,d),f(o,ze,d),re&&re.m(o,d),f(o,_a,d),Re&&Re.m(o,d),f(o,qe,d),Ye&&Ye.m(o,d),f(o,je,d),ue&&ue.m(o,d),f(o,Se,d),Le&&Le.m(o,d),f(o,Ae,d),la=!0},p(o,d){if(typeof ve<"u"&&ve.title&&ve.hide_title!==!0&&Xe.p(o,d),Ue.p(o,d),typeof ve=="object"&&Te.p(o,d),d[0]&256){m=pa([["latest","Latest Year"],["trend","Trend Over Years"]]);let Ne;for(Ne=0;Ne<2;Ne+=1){const ga=dr(o,m,Ne);x[Ne]?x[Ne].p(ga,d):(x[Ne]=ur(ga),x[Ne].c(),x[Ne].m(F,null))}for(;Ne<2;Ne+=1)x[Ne].d(1)}o[12]?E?(E.p(o,d),d[0]&4096&&u(E,1)):(E=yr(o),E.c(),u(E,1),E.m(_e.parentNode,_e)):E&&(ke(),b(E,1,1,()=>{E=null}),he()),o[13]?ee?(ee.p(o,d),d[0]&8192&&u(ee,1)):(ee=mr(o),ee.c(),u(ee,1),ee.m(C.parentNode,C)):ee&&(ke(),b(ee,1,1,()=>{ee=null}),he()),o[14]?G?(G.p(o,d),d[0]&16384&&u(G,1)):(G=fr(o),G.c(),u(G,1),G.m(U.parentNode,U)):G&&(ke(),b(G,1,1,()=>{G=null}),he());const Ze={};d[0]&28672|d[6]&524288&&(Ze.$$scope={dirty:d,ctx:o}),$.$set(Ze);const Ve={};d[6]&524288&&(Ve.$$scope={dirty:d,ctx:o}),Q.$set(Ve),o[15]?fe?(fe.p(o,d),d[0]&32768&&u(fe,1)):(fe=gr(o),fe.c(),u(fe,1),fe.m(Qe.parentNode,Qe)):fe&&(ke(),b(fe,1,1,()=>{fe=null}),he()),o[16]?O?(O.p(o,d),d[0]&65536&&u(O,1)):(O=br(o),O.c(),u(O,1),O.m(ea.parentNode,ea)):O&&(ke(),b(O,1,1,()=>{O=null}),he()),o[17]?oe?(oe.p(o,d),d[0]&131072&&u(oe,1)):(oe=pr(o),oe.c(),u(oe,1),oe.m(ra.parentNode,ra)):oe&&(ke(),b(oe,1,1,()=>{oe=null}),he()),o[18]?ce?(ce.p(o,d),d[0]&262144&&u(ce,1)):(ce=wr(o),ce.c(),u(ce,1),ce.m(Pe.parentNode,Pe)):ce&&(ke(),b(ce,1,1,()=>{ce=null}),he()),o[19]?ae?(ae.p(o,d),d[0]&524288&&u(ae,1)):(ae=$r(o),ae.c(),u(ae,1),ae.m(W.parentNode,W)):ae&&(ke(),b(ae,1,1,()=>{ae=null}),he()),o[0]?ge?(ge.p(o,d),d[0]&1&&u(ge,1)):(ge=hr(o),ge.c(),u(ge,1),ge.m(Me.parentNode,Me)):ge&&(ke(),b(ge,1,1,()=>{ge=null}),he()),o[1]?Fe?(Fe.p(o,d),d[0]&2&&u(Fe,1)):(Fe=kr(o),Fe.c(),u(Fe,1),Fe.m(xe.parentNode,xe)):Fe&&(ke(),b(Fe,1,1,()=>{Fe=null}),he()),o[20]?Ce?(Ce.p(o,d),d[0]&1048576&&u(Ce,1)):(Ce=vr(o),Ce.c(),u(Ce,1),Ce.m(He.parentNode,He)):Ce&&(ke(),b(Ce,1,1,()=>{Ce=null}),he()),o[2]?ie?(ie.p(o,d),d[0]&4&&u(ie,1)):(ie=xr(o),ie.c(),u(ie,1),ie.m(me.parentNode,me)):ie&&(ke(),b(ie,1,1,()=>{ie=null}),he()),o[21]?be?(be.p(o,d),d[0]&2097152&&u(be,1)):(be=jr(o),be.c(),u(be,1),be.m(aa.parentNode,aa)):be&&(ke(),b(be,1,1,()=>{be=null}),he()),o[22]?de?(de.p(o,d),d[0]&4194304&&u(de,1)):(de=Fr(o),de.c(),u(de,1),de.m(ne.parentNode,ne)):de&&(ke(),b(de,1,1,()=>{de=null}),he()),o[23]?K?(K.p(o,d),d[0]&8388608&&u(K,1)):(K=Tr(o),K.c(),u(K,1),K.m(X.parentNode,X)):K&&(ke(),b(K,1,1,()=>{K=null}),he()),o[24]?te?(te.p(o,d),d[0]&16777216&&u(te,1)):(te=Cr(o),te.c(),u(te,1),te.m(De.parentNode,De)):te&&(ke(),b(te,1,1,()=>{te=null}),he()),o[25]?pe?(pe.p(o,d),d[0]&33554432&&u(pe,1)):(pe=Rr(o),pe.c(),u(pe,1),pe.m(Be.parentNode,Be)):pe&&(ke(),b(pe,1,1,()=>{pe=null}),he()),o[3]?le?(le.p(o,d),d[0]&8&&u(le,1)):(le=Ir(o),le.c(),u(le,1),le.m(sa.parentNode,sa)):le&&(ke(),b(le,1,1,()=>{le=null}),he()),o[4]?we?(we.p(o,d),d[0]&16&&u(we,1)):(we=Er(o),we.c(),u(we,1),we.m(ze.parentNode,ze)):we&&(ke(),b(we,1,1,()=>{we=null}),he()),o[5]?re?(re.p(o,d),d[0]&32&&u(re,1)):(re=Dr(o),re.c(),u(re,1),re.m(_a.parentNode,_a)):re&&(ke(),b(re,1,1,()=>{re=null}),he()),o[6]?Re?(Re.p(o,d),d[0]&64&&u(Re,1)):(Re=qr(o),Re.c(),u(Re,1),Re.m(qe.parentNode,qe)):Re&&(ke(),b(Re,1,1,()=>{Re=null}),he()),o[7]?Ye?(Ye.p(o,d),d[0]&128&&u(Ye,1)):(Ye=Sr(o),Ye.c(),u(Ye,1),Ye.m(je.parentNode,je)):Ye&&(ke(),b(Ye,1,1,()=>{Ye=null}),he()),o[34]=="latest"?ue?(ue.p(o,d),d[1]&8&&u(ue,1)):(ue=Nr(o),ue.c(),u(ue,1),ue.m(Se.parentNode,Se)):ue&&(ke(),b(ue,1,1,()=>{ue=null}),he()),o[34]=="trend"?Le?(Le.p(o,d),d[1]&8&&u(Le,1)):(Le=Hr(o),Le.c(),u(Le,1),Le.m(Ae.parentNode,Ae)):Le&&(ke(),b(Le,1,1,()=>{Le=null}),he())},i(o){la||(u(E),u(ee),u(G),u($.$$.fragment,o),u(p.$$.fragment,o),u(Q.$$.fragment,o),u(fe),u(O),u(oe),u(ce),u(ae),u(ge),u(Fe),u(Ce),u(ie),u(be),u(de),u(K),u(te),u(pe),u(le),u(we),u(re),u(Re),u(Ye),u(ue),u(Le),la=!0)},o(o){b(E),b(ee),b(G),b($.$$.fragment,o),b(p.$$.fragment,o),b(Q.$$.fragment,o),b(fe),b(O),b(oe),b(ce),b(ae),b(ge),b(Fe),b(Ce),b(ie),b(be),b(de),b(K),b(te),b(pe),b(le),b(we),b(re),b(Re),b(Ye),b(ue),b(Le),la=!1},d(o){o&&(i(r),i(a),i(c),i(Z),i(_e),i(C),i(U),i(q),i(se),i(z),i(A),i(l),i(Qe),i(ea),i(ra),i(Pe),i(W),i(Me),i(xe),i(He),i(me),i(aa),i(ne),i(X),i(De),i(Be),i(sa),i(ze),i(_a),i(qe),i(je),i(Se),i(Ae)),Xe&&Xe.d(o),Ue.d(o),i(s),i(e),Te&&Te.d(o),i(t),nt(x,o),E&&E.d(o),ee&&ee.d(o),G&&G.d(o),N($),N(p,o),N(Q),fe&&fe.d(o),O&&O.d(o),oe&&oe.d(o),ce&&ce.d(o),ae&&ae.d(o),ge&&ge.d(o),Fe&&Fe.d(o),Ce&&Ce.d(o),ie&&ie.d(o),be&&be.d(o),de&&de.d(o),K&&K.d(o),te&&te.d(o),pe&&pe.d(o),le&&le.d(o),we&&we.d(o),re&&re.d(o),Re&&Re.d(o),Ye&&Ye.d(o),ue&&ue.d(o),Le&&Le.d(o)}}}const ve={title:"Technology"},fn="320px";function gn(n,r,s){let e,t,a,c,_,w,D,F,Z,_e,C,U,q,$,se,p,z,A;Zt(n,Rs,g=>s(137,z=g)),Zt(n,nr,g=>s(156,A=g));let{data:Q}=r,{data:l={},customFormattingSettings:Qe,__db:ea,inputs:ra}=Q;_s(nr,A="0609453fffecd8c940d3991dd7f547b2",A);let Pe=bs(Fs(ra));cs(Pe.subscribe(g=>ra=g)),ds(hs,{getCustomFormats:()=>Qe.customFormats||[]});const W=(g,V)=>Ds(ea.query,g,{query_name:V});ps(W),z.params,us(()=>!0);let Me={initialData:void 0,initialError:void 0},xe=B`select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year`,He="select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year";l.g_fy_data&&(l.g_fy_data instanceof Error?Me.initialError=l.g_fy_data:Me.initialData=l.g_fy_data,l.g_fy_columns&&(Me.knownColumns=l.g_fy_columns));let me,aa=!1;const ne=Ge.createReactive({callback:g=>{s(12,me=g)},execFn:W},{id:"g_fy",...Me});ne(He,{noResolve:xe,...Me}),globalThis[Symbol.for("g_fy")]={get value(){return me}};let X={initialData:void 0,initialError:void 0},De=B`select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type`,Be="select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type";l.g_fund_data&&(l.g_fund_data instanceof Error?X.initialError=l.g_fund_data:X.initialData=l.g_fund_data,l.g_fund_columns&&(X.knownColumns=l.g_fund_columns));let sa,ze=!1;const _a=Ge.createReactive({callback:g=>{s(13,sa=g)},execFn:W},{id:"g_fund",...X});_a(Be,{noResolve:De,...X}),globalThis[Symbol.for("g_fund")]={get value(){return sa}};let qe={initialData:void 0,initialError:void 0},je=B`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`,Se="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name";l.g_agency_data&&(l.g_agency_data instanceof Error?qe.initialError=l.g_agency_data:qe.initialData=l.g_agency_data,l.g_agency_columns&&(qe.knownColumns=l.g_agency_columns));let Ae,la=!1;const Xe=Ge.createReactive({callback:g=>{s(14,Ae=g)},execFn:W},{id:"g_agency",...qe});Xe(Se,{noResolve:je,...qe}),globalThis[Symbol.for("g_agency")]={get value(){return Ae}};let ye={initialData:void 0,initialError:void 0},ua=B`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`,Ue=`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`;l.filtered_data&&(l.filtered_data instanceof Error?ye.initialError=l.filtered_data:ye.initialData=l.filtered_data,l.filtered_columns&&(ye.knownColumns=l.filtered_columns));let Te,m=!1;const x=Ge.createReactive({callback:g=>{s(15,Te=g)},execFn:W},{id:"filtered",...ye});x(Ue,{noResolve:ua,...ye}),globalThis[Symbol.for("filtered")]={get value(){return Te}};let E={initialData:void 0,initialError:void 0},ee=B`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
order by fiscal_year`,G=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
order by fiscal_year`;l.yearly_rollup_data&&(l.yearly_rollup_data instanceof Error?E.initialError=l.yearly_rollup_data:E.initialData=l.yearly_rollup_data,l.yearly_rollup_columns&&(E.knownColumns=l.yearly_rollup_columns));let fe,O=!1;const oe=Ge.createReactive({callback:g=>{s(16,fe=g)},execFn:W},{id:"yearly_rollup",...E});oe(G,{noResolve:ee,...E}),globalThis[Symbol.for("yearly_rollup")]={get value(){return fe}};let ce={initialData:void 0,initialError:void 0},ae=B`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`,ge=`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`;l.scope_meta_data&&(l.scope_meta_data instanceof Error?ce.initialError=l.scope_meta_data:ce.initialData=l.scope_meta_data,l.scope_meta_columns&&(ce.knownColumns=l.scope_meta_columns));let Fe,Ce=!1;const ie=Ge.createReactive({callback:g=>{s(17,Fe=g)},execFn:W},{id:"scope_meta",...ce});ie(ge,{noResolve:ae,...ce}),globalThis[Symbol.for("scope_meta")]={get value(){return Fe}};let be={initialData:void 0,initialError:void 0},de=B`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.display_year`,K=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.display_year`;l.filtered_latest_data&&(l.filtered_latest_data instanceof Error?be.initialError=l.filtered_latest_data:be.initialData=l.filtered_latest_data,l.filtered_latest_columns&&(be.knownColumns=l.filtered_latest_columns));let te,pe=!1;const le=Ge.createReactive({callback:g=>{s(18,te=g)},execFn:W},{id:"filtered_latest",...be});le(K,{noResolve:de,...be}),globalThis[Symbol.for("filtered_latest")]={get value(){return te}};let we={initialData:void 0,initialError:void 0},re=B`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.prior_year`,Re=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.prior_year`;l.filtered_prior_data&&(l.filtered_prior_data instanceof Error?we.initialError=l.filtered_prior_data:we.initialData=l.filtered_prior_data,l.filtered_prior_columns&&(we.knownColumns=l.filtered_prior_columns));let Ye,ue=!1;const Le=Ge.createReactive({callback:g=>{s(19,Ye=g)},execFn:W},{id:"filtered_prior",...we});Le(Re,{noResolve:re,...we}),globalThis[Symbol.for("filtered_prior")]={get value(){return Ye}};let o={initialData:void 0,initialError:void 0},d=B`with points as (
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
from points`,Ze=`with points as (
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
from points`;l.overview_data&&(l.overview_data instanceof Error?o.initialError=l.overview_data:o.initialData=l.overview_data,l.overview_columns&&(o.knownColumns=l.overview_columns));let Ve,Ne=!1;const ga=Ge.createReactive({callback:g=>{s(0,Ve=g)},execFn:W},{id:"overview",...o});ga(Ze,{noResolve:d,...o}),globalThis[Symbol.for("overview")]={get value(){return Ve}};let ya={initialData:void 0,initialError:void 0},ha=B`select fiscal_year, total_budget
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
order by fiscal_year`,Ia=`select fiscal_year, total_budget
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
order by fiscal_year`;l.yearly_data&&(l.yearly_data instanceof Error?ya.initialError=l.yearly_data:ya.initialData=l.yearly_data,l.yearly_columns&&(ya.knownColumns=l.yearly_columns));let Na,y=!1;const T=Ge.createReactive({callback:g=>{s(1,Na=g)},execFn:W},{id:"yearly",...ya});T(Ia,{noResolve:ha,...ya}),globalThis[Symbol.for("yearly")]={get value(){return Na}};let $e={initialData:void 0,initialError:void 0},na=B`select
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
order by fiscal_year`,da=`select
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
order by fiscal_year`;l.yoy_detail_data&&(l.yoy_detail_data instanceof Error?$e.initialError=l.yoy_detail_data:$e.initialData=l.yoy_detail_data,l.yoy_detail_columns&&($e.knownColumns=l.yoy_detail_columns));let ca,Ra=!1;const ka=Ge.createReactive({callback:g=>{s(20,ca=g)},execFn:W},{id:"yoy_detail",...$e});ka(da,{noResolve:na,...$e}),globalThis[Symbol.for("yoy_detail")]={get value(){return ca}};let va={initialData:void 0,initialError:void 0},xa=B`with base as (
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
order by fiscal_year`,Ea=`with base as (
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
order by fiscal_year`;l.fiscal_overview_cagr_data&&(l.fiscal_overview_cagr_data instanceof Error?va.initialError=l.fiscal_overview_cagr_data:va.initialData=l.fiscal_overview_cagr_data,l.fiscal_overview_cagr_columns&&(va.knownColumns=l.fiscal_overview_cagr_columns));let ja,at=!1;const tt=Ge.createReactive({callback:g=>{s(2,ja=g)},execFn:W},{id:"fiscal_overview_cagr",...va});tt(Ea,{noResolve:xa,...va}),globalThis[Symbol.for("fiscal_overview_cagr")]={get value(){return ja}};let Fa={initialData:void 0,initialError:void 0},Ta=B`select
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
order by spend desc`,Da=`select
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
order by spend desc`;l.snapshot_towers_data&&(l.snapshot_towers_data instanceof Error?Fa.initialError=l.snapshot_towers_data:Fa.initialData=l.snapshot_towers_data,l.snapshot_towers_columns&&(Fa.knownColumns=l.snapshot_towers_columns));let rt,Tt=!1;const Ct=Ge.createReactive({callback:g=>{s(21,rt=g)},execFn:W},{id:"snapshot_towers",...Fa});Ct(Da,{noResolve:Ta,...Fa}),globalThis[Symbol.for("snapshot_towers")]={get value(){return rt}};let Ha={initialData:void 0,initialError:void 0},Ya=B`select
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
limit 10`,ot=`select
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
limit 10`;l.snapshot_subprograms_data&&(l.snapshot_subprograms_data instanceof Error?Ha.initialError=l.snapshot_subprograms_data:Ha.initialData=l.snapshot_subprograms_data,l.snapshot_subprograms_columns&&(Ha.knownColumns=l.snapshot_subprograms_columns));let Rt,It=!1;const Et=Ge.createReactive({callback:g=>{s(22,Rt=g)},execFn:W},{id:"snapshot_subprograms",...Ha});Et(ot,{noResolve:Ya,...Ha}),globalThis[Symbol.for("snapshot_subprograms")]={get value(){return Rt}};let La={initialData:void 0,initialError:void 0},Aa=B`with latest as (
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
order by l.latest_spend desc`,lt=`with latest as (
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
order by l.latest_spend desc`;l.tower_snapshot_data&&(l.tower_snapshot_data instanceof Error?La.initialError=l.tower_snapshot_data:La.initialData=l.tower_snapshot_data,l.tower_snapshot_columns&&(La.knownColumns=l.tower_snapshot_columns));let Dt,qt=!1;const St=Ge.createReactive({callback:g=>{s(23,Dt=g)},execFn:W},{id:"tower_snapshot",...La});St(lt,{noResolve:Aa,...La}),globalThis[Symbol.for("tower_snapshot")]={get value(){return Dt}};let Ma={initialData:void 0,initialError:void 0},Ua=B`with latest as (
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
limit 20`,it=`with latest as (
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
limit 20`;l.agency_movers_data&&(l.agency_movers_data instanceof Error?Ma.initialError=l.agency_movers_data:Ma.initialData=l.agency_movers_data,l.agency_movers_columns&&(Ma.knownColumns=l.agency_movers_columns));let Nt,Ht=!1;const Yt=Ge.createReactive({callback:g=>{s(24,Nt=g)},execFn:W},{id:"agency_movers",...Ma});Yt(it,{noResolve:Ua,...Ma}),globalThis[Symbol.for("agency_movers")]={get value(){return Nt}};let Va={initialData:void 0,initialError:void 0},Pa=B`with latest as (
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
order by l.latest_spend desc`,_t=`with latest as (
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
order by l.latest_spend desc`;l.agency_latest_data&&(l.agency_latest_data instanceof Error?Va.initialError=l.agency_latest_data:Va.initialData=l.agency_latest_data,l.agency_latest_columns&&(Va.knownColumns=l.agency_latest_columns));let Lt,At=!1;const Mt=Ge.createReactive({callback:g=>{s(25,Lt=g)},execFn:W},{id:"agency_latest",...Va});Mt(_t,{noResolve:Pa,...Va}),globalThis[Symbol.for("agency_latest")]={get value(){return Lt}};let Ba={initialData:void 0,initialError:void 0},za=B`select
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
limit 10`,ct=`select
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
limit 10`;l.top_towers_trend_data&&(l.top_towers_trend_data instanceof Error?Ba.initialError=l.top_towers_trend_data:Ba.initialData=l.top_towers_trend_data,l.top_towers_trend_columns&&(Ba.knownColumns=l.top_towers_trend_columns));let $t,Ut=!1;const Vt=Ge.createReactive({callback:g=>{s(3,$t=g)},execFn:W},{id:"top_towers_trend",...Ba});Vt(ct,{noResolve:za,...Ba}),globalThis[Symbol.for("top_towers_trend")]={get value(){return $t}};let Oa={initialData:void 0,initialError:void 0},Qa=B`with tower_spend as (
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
order by t.fiscal_year`,dt=`with tower_spend as (
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
order by t.fiscal_year`;l.tower_trend_data&&(l.tower_trend_data instanceof Error?Oa.initialError=l.tower_trend_data:Oa.initialData=l.tower_trend_data,l.tower_trend_columns&&(Oa.knownColumns=l.tower_trend_columns));let st,Pt=!1;const Bt=Ge.createReactive({callback:g=>{s(4,st=g)},execFn:W},{id:"tower_trend",...Oa});Bt(dt,{noResolve:Qa,...Oa}),globalThis[Symbol.for("tower_trend")]={get value(){return st}};let Xa={initialData:void 0,initialError:void 0},Ga=B`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
limit 10`,ut=`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
limit 10`;l.top_agencies_trend_data&&(l.top_agencies_trend_data instanceof Error?Xa.initialError=l.top_agencies_trend_data:Xa.initialData=l.top_agencies_trend_data,l.top_agencies_trend_columns&&(Xa.knownColumns=l.top_agencies_trend_columns));let ht,zt=!1;const Ot=Ge.createReactive({callback:g=>{s(5,ht=g)},execFn:W},{id:"top_agencies_trend",...Xa});Ot(ut,{noResolve:Ga,...Xa}),globalThis[Symbol.for("top_agencies_trend")]={get value(){return ht}};let Ka={initialData:void 0,initialError:void 0},Wa=B`select
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
order by f.fiscal_year`,yt=`select
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
order by f.fiscal_year`;l.agency_trend_lines_data&&(l.agency_trend_lines_data instanceof Error?Ka.initialError=l.agency_trend_lines_data:Ka.initialData=l.agency_trend_lines_data,l.agency_trend_lines_columns&&(Ka.knownColumns=l.agency_trend_lines_columns));let kt,Qt=!1;const Xt=Ge.createReactive({callback:g=>{s(6,kt=g)},execFn:W},{id:"agency_trend_lines",...Ka});Xt(yt,{noResolve:Wa,...Ka}),globalThis[Symbol.for("agency_trend_lines")]={get value(){return kt}};let Ja={initialData:void 0,initialError:void 0},Za=B`select
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
order by agency_name, fiscal_year`,mt=`select
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
order by agency_name, fiscal_year`;l.agency_drill_data&&(l.agency_drill_data instanceof Error?Ja.initialError=l.agency_drill_data:Ja.initialData=l.agency_drill_data,l.agency_drill_columns&&(Ja.knownColumns=l.agency_drill_columns));let ft,Gt=!1;const Kt=Ge.createReactive({callback:g=>{s(7,ft=g)},execFn:W},{id:"agency_drill",...Ja});Kt(mt,{noResolve:Za,...Ja}),globalThis[Symbol.for("agency_drill")]={get value(){return ft}};const er=ws();Zt(n,er,g=>s(136,p=g));const zr=(g,V="%")=>{var S,J,Ie,Oe,ia,oa,$a;const P=[(J=(S=g==null?void 0:g.rawValues)==null?void 0:S[0])==null?void 0:J.value,(Ie=g==null?void 0:g.rawValue)==null?void 0:Ie.value,(Oe=g==null?void 0:g.value)==null?void 0:Oe.value,g==null?void 0:g.value,g==null?void 0:g.rawValue,(oa=(ia=g==null?void 0:g.rawValues)==null?void 0:ia[0])==null?void 0:oa.label,g==null?void 0:g.label,($a=g==null?void 0:g.rawValues)==null?void 0:$a[0]];for(const ma of P){if(ma==null)continue;if(typeof ma=="object"){if(ma.value!=null)return String(ma.value).toLowerCase();if(ma.label!=null)return String(ma.label).toLowerCase()}const et=String(ma).toLowerCase();if(et&&et!=="[object object]")return et}return V},Wt=(g,V=!0)=>{const P=zr(g,"%").replace(/'/g,"''");return V?P.toLowerCase():P},ar=g=>{const V=Number(g)||0,P=Math.abs(V);return P>=1e9?`$${(V/1e9).toFixed(2)}B`:P>=1e6?`$${(V/1e6).toFixed(2)}M`:P>=1e3?`$${(V/1e3).toFixed(2)}K`:`$${V.toFixed(2)}`},Or=(g,V)=>{if(!g||g.length<2)return{chartData:[],trendPoints:[]};const P=g.map(ta=>Number(ta[V])||0),S=Array.from({length:g.length},(ta,ba)=>ba+1),J=S.map((ta,ba)=>({x:ta,y:P[ba]})).filter(ta=>ta.y>0);if(J.length<2)return{chartData:P,trendPoints:P};const Ie=J.map(ta=>Math.log(ta.x)),Oe=J.map(ta=>Math.log(ta.y)),ia=J.length,oa=Ie.reduce((ta,ba)=>ta+ba,0),$a=Oe.reduce((ta,ba)=>ta+ba,0),ma=Ie.reduce((ta,ba,os)=>ta+ba*Oe[os],0),et=Ie.reduce((ta,ba)=>ta+ba*ba,0),xt=ia*et-oa*oa;if(Math.abs(xt)<1e-10)return{chartData:P,trendPoints:P};const jt=(ia*ma-oa*$a)/xt,ns=Math.exp(($a-jt*oa)/ia);return{chartData:P,trendPoints:S.map(ta=>ns*Math.pow(ta,jt))}},Qr=(g,V)=>{const P=V.map(ma=>g["FY"+ma]||0),S=Math.max(...P);if(S===0)return"";const J=48,Ie=16,Oe=P.map((ma,et)=>{const xt=et/(P.length-1)*J,jt=Ie-ma/S*Ie;return xt+","+jt}).join(" "),ia=P[P.length-1],oa=P[P.length-2]??ia,$a=ia>=oa?"#2EAD6B":"#C8122C";return'<svg width="'+J+'" height="'+Ie+'" style="display:inline-block;vertical-align:middle;margin-left:8px;"><polyline points="'+Oe+'" fill="none" stroke="'+$a+'" stroke-width="1.5" stroke-linejoin="round"/><circle cx="'+J+'" cy="'+(Ie-ia/S*Ie)+'" r="2" fill="'+$a+'"/></svg>'},Xr=(g,V,P)=>{const S=P.indexOf(V);if(S<=0)return"";const J=g["FY"+V]||0,Ie=g["FY"+P[S-1]]||0;if(Ie===0)return"";const Oe=(J-Ie)/Ie*100;return Oe>=15?"background:rgba(46,173,107,0.18);":Oe>=8?"background:rgba(46,173,107,0.11);":Oe>=3?"background:rgba(46,173,107,0.06);":Oe>0?"background:rgba(46,173,107,0.03);":Oe<=-15?"background:rgba(200,18,44,0.18);":Oe<=-8?"background:rgba(200,18,44,0.11);":Oe<=-3?"background:rgba(200,18,44,0.06);":"background:rgba(200,18,44,0.03);"};let Jt="trend",vt="3y",gt="",bt=null;const tr=g=>{s(26,bt=bt===g?null:g)},Gr=g=>s(8,Jt=g),Kr=()=>{var P;const g=Number((P=Ve==null?void 0:Ve[0])==null?void 0:P.latest_it_spend)||0,V=Math.abs(g);return V>=1e9?"$"+(V/1e9).toFixed(2)+"B":V>=1e6?"$"+(V/1e6).toFixed(1)+"M":"$"+Math.round(V).toLocaleString()},Wr=()=>{var S;const g=Number((S=Ve==null?void 0:Ve[0])==null?void 0:S.dollar_change)||0,V=Math.abs(g),P=g>=0?"+":"-";return V>=1e9?P+"$"+(V/1e9).toFixed(2)+"B":V>=1e6?P+"$"+(V/1e6).toFixed(1)+"M":P+"$"+Math.round(V).toLocaleString()},Jr=g=>tr(g.it_tower),Zr=function(g){if(!g)return"";const V=g.seriesName,P=w.slice().sort(function(S,J){return Number(J)-Number(S)}).map(function(S){const J=st.find(function(ia){return String(ia.fiscal_year)===S&&ia.it_tower===V}),Ie=J?J.spend:0,Oe=J?(J.pct_of_total*100).toFixed(1):"0.0";return S+": "+ar(Ie)+" ("+Oe+"%)"});return"<b>"+V+"</b><br/>"+P.join("<br/>")},es=g=>{const V=Number(g)||0;return Math.abs(V)>=1e9?`$${(V/1e9).toFixed(0)}B`:`$${(V/1e6).toFixed(0)}M`},as=g=>{const V=g.it_tower,P=D.includes(V),S=!!bt,J=bt===V,Ie=!S||J,Oe=P?V===D[0]?"#C8122C":V===D[1]?"#FFC838":"#231F20":"#C9CED6";return{name:V,type:"line",smooth:!1,symbol:"circle",symbolSize:S?J?P?12:11:4:P?7:6,showSymbol:!0,lineStyle:{color:Oe,width:S?J?P?6:5:1:P?3:2,opacity:Ie?1:.06},itemStyle:{color:Oe,opacity:Ie?1:.06},label:{show:P,position:"top",offset:[0,-10],backgroundColor:"rgba(255, 255, 255, 0.92)",padding:[2,5],borderRadius:3,lineHeight:14,color:Oe,fontWeight:P?700:500,formatter:ia=>{const oa=Math.floor(w.length/2);return ia.dataIndex===oa?V:""}},emphasis:{focus:"series",scale:!0,lineStyle:{color:P?Oe:"#3B7DD8",width:4,opacity:1},itemStyle:{color:P?Oe:"#3B7DD8",opacity:1},label:{show:!1}},blur:{lineStyle:{opacity:.06},itemStyle:{opacity:.06}},data:w.map(ia=>{const oa=st.find($a=>String($a.fiscal_year)===ia&&$a.it_tower===V);return{value:(oa==null?void 0:oa.spend)??0,pct:(oa==null?void 0:oa.pct_of_total)??0}})}},ts=g=>s(9,vt=g);function rs(){gt=this.value,s(10,gt)}const ss=g=>Ts(g.agency_link);return n.$$set=g=>{"data"in g&&s(40,Q=g.data)},n.$$.update=()=>{var g,V,P;n.$$.dirty[1]&512&&s(41,{data:l={},customFormattingSettings:Qe,__db:ea}=Q,l),n.$$.dirty[1]&1024&&$s.set(Object.keys(l).length>0),n.$$.dirty[4]&8192&&z.params,n.$$.dirty[1]&30720&&(xe||!aa?xe||(ne(He,{noResolve:xe,...Me}),s(45,aa=!0)):ne(He,{noResolve:xe})),n.$$.dirty[1]&491520&&(De||!ze?De||(_a(Be,{noResolve:De,...X}),s(49,ze=!0)):_a(Be,{noResolve:De})),n.$$.dirty[1]&7864320&&(je||!la?je||(Xe(Se,{noResolve:je,...qe}),s(53,la=!0)):Xe(Se,{noResolve:je})),n.$$.dirty[4]&4096&&s(135,e=Wt(p==null?void 0:p.f_fy,!1)),n.$$.dirty[4]&4096&&s(134,t=Wt(p==null?void 0:p.f_fund)),n.$$.dirty[4]&4096&&s(133,a=Wt(p==null?void 0:p.f_agency)),n.$$.dirty[4]&3584&&s(55,ua=B`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`),n.$$.dirty[4]&3584&&s(56,Ue=`select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
        '${t}' in ('%', '', 'undefined')
        or '${t}' like '(select%'
        or lower(coalesce(t.fund_type, '')) like lower('${t}')
    )
    and (
        '${a}' in ('%', '', 'undefined')
        or '${a}' like '(select%'
        or lower(coalesce(t.agency_name, '')) like lower('${a}')
    )`),n.$$.dirty[1]&125829120&&(ua||!m?ua||(x(Ue,{noResolve:ua,...ye}),s(57,m=!0)):x(Ue,{noResolve:ua})),n.$$.dirty[4]&3584&&s(59,ee=B`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
order by fiscal_year`),n.$$.dirty[4]&3584&&s(60,G=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
order by fiscal_year`),n.$$.dirty[1]&2013265920&&(ee||!O?ee||(oe(G,{noResolve:ee,...E}),s(61,O=!0)):oe(G,{noResolve:ee})),n.$$.dirty[4]&3584&&s(63,ae=B`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[4]&3584&&s(64,ge=`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[2]&15&&(ae||!Ce?ae||(ie(ge,{noResolve:ae,...ce}),s(65,Ce=!0)):ie(ge,{noResolve:ae})),n.$$.dirty[4]&3584&&s(67,de=B`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.display_year`),n.$$.dirty[4]&3584&&s(68,K=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.display_year`),n.$$.dirty[2]&240&&(de||!pe?de||(le(K,{noResolve:de,...be}),s(69,pe=!0)):le(K,{noResolve:de})),n.$$.dirty[4]&3584&&s(71,re=B`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.prior_year`),n.$$.dirty[4]&3584&&s(72,Re=`select f.*
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
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
where f.fiscal_year = m.prior_year`),n.$$.dirty[2]&3840&&(re||!ue?re||(Le(Re,{noResolve:re,...we}),s(73,ue=!0)):Le(Re,{noResolve:re})),n.$$.dirty[4]&3584&&s(75,d=B`with points as (
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
from points`),n.$$.dirty[4]&3584&&s(76,Ze=`with points as (
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
from points`),n.$$.dirty[2]&61440&&(d||!Ne?d||(ga(Ze,{noResolve:d,...o}),s(77,Ne=!0)):ga(Ze,{noResolve:d})),n.$$.dirty[4]&3584&&s(79,ha=B`select fiscal_year, total_budget
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
order by fiscal_year`),n.$$.dirty[4]&3584&&s(80,Ia=`select fiscal_year, total_budget
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
order by fiscal_year`),n.$$.dirty[2]&983040&&(ha||!y?ha||(T(Ia,{noResolve:ha,...ya}),s(81,y=!0)):T(Ia,{noResolve:ha})),n.$$.dirty[4]&3584&&s(83,na=B`select
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
order by fiscal_year`),n.$$.dirty[4]&3584&&s(84,da=`select
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
order by fiscal_year`),n.$$.dirty[2]&15728640&&(na||!Ra?na||(ka(da,{noResolve:na,...$e}),s(85,Ra=!0)):ka(da,{noResolve:na})),n.$$.dirty[4]&3584&&s(87,xa=B`with base as (
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
order by fiscal_year`),n.$$.dirty[4]&3584&&s(88,Ea=`with base as (
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
order by fiscal_year`),n.$$.dirty[2]&251658240&&(xa||!at?xa||(tt(Ea,{noResolve:xa,...va}),s(89,at=!0)):tt(Ea,{noResolve:xa})),n.$$.dirty[4]&3584&&s(91,Ta=B`select
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
order by spend desc`),n.$$.dirty[4]&3584&&s(92,Da=`select
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
order by spend desc`),n.$$.dirty[2]&1879048192|n.$$.dirty[3]&1&&(Ta||!Tt?Ta||(Ct(Da,{noResolve:Ta,...Fa}),s(93,Tt=!0)):Ct(Da,{noResolve:Ta})),n.$$.dirty[4]&3584&&s(95,Ya=B`select
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
limit 10`),n.$$.dirty[4]&3584&&s(96,ot=`select
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
limit 10`),n.$$.dirty[3]&30&&(Ya||!It?Ya||(Et(ot,{noResolve:Ya,...Ha}),s(97,It=!0)):Et(ot,{noResolve:Ya})),n.$$.dirty[4]&3584&&s(99,Aa=B`with latest as (
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
order by l.latest_spend desc`),n.$$.dirty[4]&3584&&s(100,lt=`with latest as (
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
order by l.latest_spend desc`),n.$$.dirty[3]&480&&(Aa||!qt?Aa||(St(lt,{noResolve:Aa,...La}),s(101,qt=!0)):St(lt,{noResolve:Aa})),n.$$.dirty[4]&3584&&s(103,Ua=B`with latest as (
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
limit 20`),n.$$.dirty[4]&3584&&s(104,it=`with latest as (
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
limit 20`),n.$$.dirty[3]&7680&&(Ua||!Ht?Ua||(Yt(it,{noResolve:Ua,...Ma}),s(105,Ht=!0)):Yt(it,{noResolve:Ua})),n.$$.dirty[4]&3584&&s(107,Pa=B`with latest as (
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
order by l.latest_spend desc`),n.$$.dirty[4]&3584&&s(108,_t=`with latest as (
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
order by l.latest_spend desc`),n.$$.dirty[3]&122880&&(Pa||!At?Pa||(Mt(_t,{noResolve:Pa,...Va}),s(109,At=!0)):Mt(_t,{noResolve:Pa})),n.$$.dirty[4]&3584&&s(111,za=B`select
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
limit 10`),n.$$.dirty[4]&3584&&s(112,ct=`select
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
limit 10`),n.$$.dirty[3]&1966080&&(za||!Ut?za||(Vt(ct,{noResolve:za,...Ba}),s(113,Ut=!0)):Vt(ct,{noResolve:za})),n.$$.dirty[4]&3584&&s(115,Qa=B`with tower_spend as (
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
order by t.fiscal_year`),n.$$.dirty[4]&3584&&s(116,dt=`with tower_spend as (
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
order by t.fiscal_year`),n.$$.dirty[3]&31457280&&(Qa||!Pt?Qa||(Bt(dt,{noResolve:Qa,...Oa}),s(117,Pt=!0)):Bt(dt,{noResolve:Qa})),n.$$.dirty[4]&3584&&s(119,Ga=B`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
limit 10`),n.$$.dirty[4]&3584&&s(120,ut=`select agency_name, sum(amount) as total_it_spend
from (select
    cast(t.fiscal_year as int) as fiscal_year,
    t.agency_code,
    t.agency_name,
    t.program_name,
    t.subprogram_name,
    t.fund_type,
    t.it_tower,
    t.it_sub_tower,
    t.it_designation,
    t.total_budget_amount as amount
from mbtsa.subprogram_level t
where t.is_it = true
    and (
        '${e}' in ('%', '', 'undefined')
        or '${e}' like '(select%'
        or cast(t.fiscal_year as varchar) = '${e}'
    )
    and (
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
limit 10`),n.$$.dirty[3]&503316480&&(Ga||!zt?Ga||(Ot(ut,{noResolve:Ga,...Xa}),s(121,zt=!0)):Ot(ut,{noResolve:Ga})),n.$$.dirty[4]&3584&&s(123,Wa=B`select
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
order by f.fiscal_year`),n.$$.dirty[4]&3584&&s(124,yt=`select
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
order by f.fiscal_year`),n.$$.dirty[3]&1610612736|n.$$.dirty[4]&3&&(Wa||!Qt?Wa||(Xt(yt,{noResolve:Wa,...Ka}),s(125,Qt=!0)):Xt(yt,{noResolve:Wa})),n.$$.dirty[4]&3584&&s(127,Za=B`select
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
order by agency_name, fiscal_year`),n.$$.dirty[4]&3584&&s(128,mt=`select
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
order by agency_name, fiscal_year`),n.$$.dirty[4]&60&&(Za||!Gt?Za||(Kt(mt,{noResolve:Za,...Ja}),s(129,Gt=!0)):Kt(mt,{noResolve:Za})),n.$$.dirty[0]&256&&s(34,c=Jt),n.$$.dirty[0]&2&&Or(Na,"total_budget"),n.$$.dirty[0]&4&&s(33,_=((g=ja==null?void 0:ja[0])==null?void 0:g.cagr_pct)!=null?Number(ja[0].cagr_pct).toFixed(1):null),n.$$.dirty[0]&16&&s(32,w=[...new Set(st.map(S=>String(S.fiscal_year)))].sort((S,J)=>Number(S)-Number(J))),n.$$.dirty[0]&8&&s(31,D=($t??[]).slice(0,3).map(S=>S.it_tower)),n.$$.dirty[0]&64&&s(30,F=[...new Set((kt??[]).map(S=>String(S.fiscal_year)))].sort((S,J)=>Number(S)-Number(J))),n.$$.dirty[0]&32&&(ht??[]).slice(0,3).map(S=>S.agency_name),n.$$.dirty[0]&1&&s(29,Z=[{id:"agency_name",title:"Agency",align:"left"},{id:"latest_spend",title:`Latest Year (${((V=Ve==null?void 0:Ve[0])==null?void 0:V.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of IT Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&1&&s(28,_e=[{id:"it_tower",title:"IT Tower",align:"left"},{id:"latest_spend",title:`Latest Year (${((P=Ve==null?void 0:Ve[0])==null?void 0:P.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of IT Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&128&&s(132,C=[...new Set((ft??[]).map(S=>S.fiscal_year))].sort((S,J)=>S-J)),n.$$.dirty[0]&128&&s(131,U=Object.values((ft??[]).reduce(function(S,J){const Ie=J.agency_name;return S[Ie]||(S[Ie]={agency_name:J.agency_name}),S[Ie]["FY"+J.fiscal_year]=(S[Ie]["FY"+J.fiscal_year]||0)+J.spend,S},{}))),n.$$.dirty[0]&512|n.$$.dirty[4]&256&&s(11,q=vt==="3y"?C.slice(-3):vt==="5y"?C.slice(-5):C),n.$$.dirty[0]&1024|n.$$.dirty[4]&128&&s(130,$=gt?U.filter(function(S){return S.agency_name.toLowerCase().includes(gt.toLowerCase())}):U),n.$$.dirty[0]&2048|n.$$.dirty[4]&64&&s(27,se=q.length>0?$.slice().sort(function(S,J){const Ie="FY"+q[q.length-1];return(J[Ie]||0)-(S[Ie]||0)}).map(function(S){return Object.assign({},S,{agency_link:"/technology/agencies/"+encodeURIComponent(S.agency_name)})}):$.map(function(S){return Object.assign({},S,{agency_link:"/technology/agencies/"+encodeURIComponent(S.agency_name)})}))},s(43,xe=B`select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year`),s(44,He="select distinct fiscal_year as fy from mbtsa.subprogram_level order by fiscal_year"),s(47,De=B`select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type`),s(48,Be="select distinct fund_type from mbtsa.subprogram_level where fund_type is not null order by fund_type"),s(51,je=B`select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name`),s(52,Se="select distinct agency_name from mbtsa.subprogram_level where agency_name is not null order by agency_name"),[Ve,Na,ja,$t,st,ht,kt,ft,Jt,vt,gt,q,me,sa,Ae,Te,fe,Fe,te,Ye,ca,rt,Rt,Dt,Nt,Lt,bt,se,_e,Z,F,D,w,_,c,er,ar,Qr,Xr,tr,Q,l,Me,xe,He,aa,X,De,Be,ze,qe,je,Se,la,ye,ua,Ue,m,E,ee,G,O,ce,ae,ge,Ce,be,de,K,pe,we,re,Re,ue,o,d,Ze,Ne,ya,ha,Ia,y,$e,na,da,Ra,va,xa,Ea,at,Fa,Ta,Da,Tt,Ha,Ya,ot,It,La,Aa,lt,qt,Ma,Ua,it,Ht,Va,Pa,_t,At,Ba,za,ct,Ut,Oa,Qa,dt,Pt,Xa,Ga,ut,zt,Ka,Wa,yt,Qt,Ja,Za,mt,Gt,$,U,C,a,t,e,p,z,Gr,Kr,Wr,Jr,Zr,es,as,ts,rs,ss]}class En extends fs{constructor(r){super(),gs(this,r,gn,mn,ls,{data:40},null,[-1,-1,-1,-1,-1,-1,-1])}}export{En as component};
