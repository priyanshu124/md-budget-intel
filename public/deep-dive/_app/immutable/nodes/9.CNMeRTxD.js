import{s as Jr,d as _,a as yt,i as m,e as L,f as j,c as h,g as w,h as Wr,j as B,k as ma,m as Me,l as ia,o as k,p as A,q as Zt,r as Zr,u as es,v as as,w as ts,x as da,n as Qe,t as Xe,y as ht,b as Qa,z as ar,A as rs,H as ss}from"../chunks/scheduler.Dm30zsRM.js";import{S as ns,i as ls,d as D,t as b,a as i,c as $e,m as q,b as I,e as S,g as he}from"../chunks/index.CIVCTVMM.js";import{e as ga,a as os,s as cs,Q as ze,g as _s,p as is,b as tr,r as rr,C as ds}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C3c9Relr.js";import{A as ys}from"../chunks/AgencyTrendChart.D_QcqjUu.js";import{F as us,B as fs,T as bs,P as ms,a as gs,C as Hr}from"../chunks/TrendOverview.BKi7AqYa.js";import{D as ps}from"../chunks/DonutFundSnapshot.C5TQW3pY.js";import{F as $s}from"../chunks/FundCompositionTrend.DubxTQcO.js";import{w as hs,g as ws}from"../chunks/entry.C2LBCJTI.js";import{A as Xa}from"../chunks/Alert.CzSVg8eJ.js";import{h as M}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as ks,a as $t,b as ut}from"../chunks/Details.CvvzujXV.js";import{p as vs}from"../chunks/stores.ttNqFgh2.js";import{G as xs}from"../chunks/Grid.Ck93ieUS.js";import{Q as Ge}from"../chunks/QueryViewer.8A6MZmxp.js";import{p as Fs}from"../chunks/profile.BW8tN6E9.js";function sr(n,r,s){const t=n.slice();return t[186]=r[s],t[188]=s,t}function nr(n,r,s){const t=n.slice();return t[189]=r[s],t}function lr(n,r,s){const t=n.slice();return t[189]=r[s],t}function or(n,r,s){const t=n.slice();return t[194]=r[s][0],t[195]=r[s][1],t}function cr(n,r,s){const t=n.slice();return t[194]=r[s][0],t[195]=r[s][1],t}function js(n){var a;let r,s=(re.title??((a=re.og)==null?void 0:a.title))+"",t;return{c(){r=A("h1"),t=Xe(s),this.h()},l(e){r=B(e,"H1",{class:!0});var u=Me(r);t=Qe(u,s),u.forEach(_),this.h()},h(){j(r,"class","title")},m(e,u){m(e,r,u),L(r,t)},p:da,d(e){e&&_(r)}}}function Cs(n){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:da,p:da,d:da}}function Rs(n){var u;let r,s,t,a,e;return document.title=r=re.title??((u=re.og)==null?void 0:u.title),{c(){s=k(),t=A("meta"),a=k(),e=A("meta"),this.h()},l(y){s=w(y),t=B(y,"META",{property:!0,content:!0}),a=w(y),e=B(y,"META",{name:!0,content:!0}),this.h()},h(){var y,$;j(t,"property","og:title"),j(t,"content",((y=re.og)==null?void 0:y.title)??re.title),j(e,"name","twitter:title"),j(e,"content",(($=re.og)==null?void 0:$.title)??re.title)},m(y,$){m(y,s,$),m(y,t,$),m(y,a,$),m(y,e,$)},p(y,$){var G;$&0&&r!==(r=re.title??((G=re.og)==null?void 0:G.title))&&(document.title=r)},d(y){y&&(_(s),_(t),_(a),_(e))}}}function Bs(n){var e,u;let r,s,t=(re.description||((e=re.og)==null?void 0:e.description))&&As(),a=((u=re.og)==null?void 0:u.image)&&Ts();return{c(){t&&t.c(),r=k(),a&&a.c(),s=ma()},l(y){t&&t.l(y),r=w(y),a&&a.l(y),s=ma()},m(y,$){t&&t.m(y,$),m(y,r,$),a&&a.m(y,$),m(y,s,$)},p(y,$){var G,N;(re.description||(G=re.og)!=null&&G.description)&&t.p(y,$),(N=re.og)!=null&&N.image&&a.p(y,$)},d(y){y&&(_(r),_(s)),t&&t.d(y),a&&a.d(y)}}}function As(n){let r,s,t,a,e;return{c(){r=A("meta"),s=k(),t=A("meta"),a=k(),e=A("meta"),this.h()},l(u){r=B(u,"META",{name:!0,content:!0}),s=w(u),t=B(u,"META",{property:!0,content:!0}),a=w(u),e=B(u,"META",{name:!0,content:!0}),this.h()},h(){var u,y,$;j(r,"name","description"),j(r,"content",re.description??((u=re.og)==null?void 0:u.description)),j(t,"property","og:description"),j(t,"content",((y=re.og)==null?void 0:y.description)??re.description),j(e,"name","twitter:description"),j(e,"content",(($=re.og)==null?void 0:$.description)??re.description)},m(u,y){m(u,r,y),m(u,s,y),m(u,t,y),m(u,a,y),m(u,e,y)},p:da,d(u){u&&(_(r),_(s),_(t),_(a),_(e))}}}function Ts(n){let r,s,t;return{c(){r=A("meta"),s=k(),t=A("meta"),this.h()},l(a){r=B(a,"META",{property:!0,content:!0}),s=w(a),t=B(a,"META",{name:!0,content:!0}),this.h()},h(){var a,e;j(r,"property","og:image"),j(r,"content",tr((a=re.og)==null?void 0:a.image)),j(t,"name","twitter:image"),j(t,"content",tr((e=re.og)==null?void 0:e.image))},m(a,e){m(a,r,e),m(a,s,e),m(a,t,e)},p:da,d(a){a&&(_(r),_(s),_(t))}}}function _r(n){let r,s,t,a,e;function u(){return n[136](n[194])}return{c(){r=A("button"),s=Xe(n[195]),this.h()},l(y){r=B(y,"BUTTON",{style:!0});var $=Me(r);s=Qe($,n[195]),$.forEach(_),this.h()},h(){j(r,"style",t="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[7]===n[194]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[7]===n[194]?"#ffffff":"#211030")+"; font-weight: "+(n[7]===n[194]?700:500))},m(y,$){m(y,r,$),L(r,s),a||(e=ht(r,"click",u),a=!0)},p(y,$){n=y,$[0]&128&&t!==(t="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[7]===n[194]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[7]===n[194]?"#ffffff":"#211030")+"; font-weight: "+(n[7]===n[194]?700:500))&&j(r,"style",t)},d(y){y&&_(r),a=!1,e()}}}function ir(n){let r,s;return r=new Ge({props:{queryID:"g_fy",queryResult:n[12]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&4096&&(e.queryResult=t[12]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function dr(n){let r,s;return r=new Ge({props:{queryID:"g_fund",queryResult:n[13]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&8192&&(e.queryResult=t[13]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function yr(n){let r,s;return r=new Ge({props:{queryID:"g_agency",queryResult:n[14]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&16384&&(e.queryResult=t[14]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function ur(n){let r,s;return r=new Ge({props:{queryID:"filtered",queryResult:n[15]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&32768&&(e.queryResult=t[15]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function fr(n){let r,s;return r=new Ge({props:{queryID:"yearly_rollup",queryResult:n[16]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&65536&&(e.queryResult=t[16]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function br(n){let r,s;return r=new Ge({props:{queryID:"scope_meta",queryResult:n[17]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&131072&&(e.queryResult=t[17]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function mr(n){let r,s;return r=new Ge({props:{queryID:"filtered_latest",queryResult:n[18]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&262144&&(e.queryResult=t[18]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function gr(n){let r,s;return r=new Ge({props:{queryID:"filtered_prior",queryResult:n[19]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&524288&&(e.queryResult=t[19]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function pr(n){let r,s;return r=new Ge({props:{queryID:"overview",queryResult:n[0]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&1&&(e.queryResult=t[0]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function $r(n){let r,s;return r=new Ge({props:{queryID:"yearly",queryResult:n[1]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&2&&(e.queryResult=t[1]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function hr(n){let r,s;return r=new Ge({props:{queryID:"yoy_detail",queryResult:n[20]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&1048576&&(e.queryResult=t[20]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function wr(n){let r,s;return r=new Ge({props:{queryID:"fiscal_overview_cagr",queryResult:n[2]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&4&&(e.queryResult=t[2]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function kr(n){let r,s;return r=new Ge({props:{queryID:"snapshot_agencies",queryResult:n[21]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&2097152&&(e.queryResult=t[21]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function vr(n){let r,s;return r=new Ge({props:{queryID:"fund_rules",queryResult:n[22]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&4194304&&(e.queryResult=t[22]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function xr(n){let r,s;return r=new Ge({props:{queryID:"fund_profile",queryResult:n[23]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&8388608&&(e.queryResult=t[23]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Fr(n){let r,s;return r=new Ge({props:{queryID:"fund_snapshot",queryResult:n[24]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&16777216&&(e.queryResult=t[24]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function jr(n){let r,s;return r=new Ge({props:{queryID:"agency_movers",queryResult:n[25]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&33554432&&(e.queryResult=t[25]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Cr(n){let r,s;return r=new Ge({props:{queryID:"fund_trend",queryResult:n[3]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&8&&(e.queryResult=t[3]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Rr(n){let r,s;return r=new Ge({props:{queryID:"top_agencies_trend",queryResult:n[4]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&16&&(e.queryResult=t[4]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Br(n){let r,s;return r=new Ge({props:{queryID:"agency_trend_lines",queryResult:n[5]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&32&&(e.queryResult=t[5]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Ar(n){let r,s;return r=new Ge({props:{queryID:"agency_drill",queryResult:n[6]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&64&&(e.queryResult=t[6]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Tr(n){let r,s;return r=new Ge({props:{queryID:"agency_latest",queryResult:n[26]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&67108864&&(e.queryResult=t[26]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Es(n){let r,s;return r=new ut({props:{value:"%",valueLabel:"All Years"}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p:da,i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Ds(n){let r,s;return r=new ut({props:{value:"%",valueLabel:"All Fund Types"}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p:da,i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function qs(n){let r,s;return r=new ut({props:{value:"%",valueLabel:"All Agencies"}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p:da,i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Is(n){let r,s,t,a,e,u;return r=new $t({props:{name:"f_fy",data:n[12],value:"fy",title:"Fiscal Year",defaultValue:"%",$$slots:{default:[Es]},$$scope:{ctx:n}}}),t=new $t({props:{name:"f_fund",data:n[13],value:"fund_type",title:"Fund Type",defaultValue:"%",$$slots:{default:[Ds]},$$scope:{ctx:n}}}),e=new $t({props:{name:"f_agency",data:n[14],value:"agency_name",title:"Agency",defaultValue:"%",$$slots:{default:[qs]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment),s=k(),S(t.$$.fragment),a=k(),S(e.$$.fragment)},l(y){I(r.$$.fragment,y),s=w(y),I(t.$$.fragment,y),a=w(y),I(e.$$.fragment,y)},m(y,$){q(r,y,$),m(y,s,$),q(t,y,$),m(y,a,$),q(e,y,$),u=!0},p(y,$){const G={};$[0]&4096&&(G.data=y[12]),$[6]&16384&&(G.$$scope={dirty:$,ctx:y}),r.$set(G);const N={};$[0]&8192&&(N.data=y[13]),$[6]&16384&&(N.$$scope={dirty:$,ctx:y}),t.$set(N);const O={};$[0]&16384&&(O.data=y[14]),$[6]&16384&&(O.$$scope={dirty:$,ctx:y}),e.$set(O)},i(y){u||(i(r.$$.fragment,y),i(t.$$.fragment,y),i(e.$$.fragment,y),u=!0)},o(y){b(r.$$.fragment,y),b(t.$$.fragment,y),b(e.$$.fragment,y),u=!1},d(y){y&&(_(s),_(a)),D(r,y),D(t,y),D(e,y)}}}function Ss(n){let r,s;return r=new xs({props:{cols:"3",$$slots:{default:[Is]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&28672|a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Ns(n){let r,s,t,a;return r=new ut({props:{value:"trend",valueLabel:"Trend Over Years"}}),t=new ut({props:{value:"latest",valueLabel:"Latest Year Snapshot"}}),{c(){S(r.$$.fragment),s=k(),S(t.$$.fragment)},l(e){I(r.$$.fragment,e),s=w(e),I(t.$$.fragment,e)},m(e,u){q(r,e,u),m(e,s,u),q(t,e,u),a=!0},p:da,i(e){a||(i(r.$$.fragment,e),i(t.$$.fragment,e),a=!0)},o(e){b(r.$$.fragment,e),b(t.$$.fragment,e),a=!1},d(e){e&&_(s),D(r,e),D(t,e)}}}function Er(n){var be,me,je,Se;let r,s,t,a,e=(((me=(be=n[0])==null?void 0:be[0])==null?void 0:me.max_year_label)??"N/A")+"",u,y,$,G,N=n[137]()+"",O,J,E,H,U="YoY Change",v,Y,p=n[138]()+"",x,T,we,W,o=((Se=(je=n[0])==null?void 0:je[0])==null?void 0:Se.yoy_pct)!=null?(n[0][0].yoy_pct>=0?"+":"")+n[0][0].yoy_pct+"%":"—",ta,Ye,ra,ue,z,de,Z,Pe='<a href="#top-10-agencies-by-budget--latest-year">Top 10 agencies by budget — Latest Year</a>',Ze,Re,Be,He,Ae,Ke,Je,Ue='<a href="#fund-type-share--latest-year">Fund type share — Latest Year</a>',ea,ke,X,Oe,Ve,We,f,C='<a href="#budget-changes--year-over-year">Budget Changes — Year over Year</a>',V,Ce,na,ve,P,ee,oe,se,Te='<a href="#agency-drill-down-table--click-a-row-to-open-the-agency-page">Agency Drill-Down Table — Click a row to open the Agency page</a>',xe,ae,Q,ne,K;const Ee=[Ys,Hs],ce=[];function De(d,F){var l;return((l=d[21])==null?void 0:l.length)>0?0:1}Re=De(n),Be=ce[Re]=Ee[Re](n);const fe=[Us,Ms],te=[];function Fe(d,F){var l;return((l=d[24])==null?void 0:l.length)>0?0:1}ke=Fe(n),X=te[ke]=fe[ke](n),Ce=new Xa({props:{status:"info",$$slots:{default:[Ps]},$$scope:{ctx:n}}}),ve=new fs({props:{data:n[25],labelField:"agency_name",title:"Biggest budget changes vs prior year",height:"520px",limit:10}});const qe=[zs,Os],_e=[];function Ie(d,F){var l;return((l=d[26])==null?void 0:l.length)>0?0:1}return ae=Ie(n),Q=_e[ae]=qe[ae](n),{c(){r=A("div"),s=A("div"),t=A("div"),a=Xe("Latest Year ("),u=Xe(e),y=Xe(")"),$=k(),G=A("div"),O=Xe(N),J=k(),E=A("div"),H=A("div"),H.textContent=U,v=k(),Y=A("div"),x=Xe(p),we=k(),W=A("div"),ta=Xe(o),ue=k(),z=A("hr"),de=k(),Z=A("h2"),Z.innerHTML=Pe,Ze=k(),Be.c(),He=k(),Ae=A("hr"),Ke=k(),Je=A("h2"),Je.innerHTML=Ue,ea=k(),X.c(),Oe=k(),Ve=A("hr"),We=k(),f=A("h2"),f.innerHTML=C,V=k(),S(Ce.$$.fragment),na=k(),S(ve.$$.fragment),P=k(),ee=A("hr"),oe=k(),se=A("h2"),se.innerHTML=Te,xe=k(),Q.c(),ne=ma(),this.h()},l(d){r=B(d,"DIV",{style:!0});var F=Me(r);s=B(F,"DIV",{style:!0});var l=Me(s);t=B(l,"DIV",{style:!0});var c=Me(t);a=Qe(c,"Latest Year ("),u=Qe(c,e),y=Qe(c,")"),c.forEach(_),$=w(l),G=B(l,"DIV",{style:!0});var ge=Me(G);O=Qe(ge,N),ge.forEach(_),l.forEach(_),J=w(F),E=B(F,"DIV",{style:!0});var le=Me(E);H=B(le,"DIV",{style:!0,"data-svelte-h":!0}),ia(H)!=="svelte-14nbeix"&&(H.textContent=U),v=w(le),Y=B(le,"DIV",{style:!0});var la=Me(Y);x=Qe(la,p),la.forEach(_),we=w(le),W=B(le,"DIV",{style:!0});var Le=Me(W);ta=Qe(Le,o),Le.forEach(_),le.forEach(_),F.forEach(_),ue=w(d),z=B(d,"HR",{class:!0}),de=w(d),Z=B(d,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia(Z)!=="svelte-nm1zq3"&&(Z.innerHTML=Pe),Ze=w(d),Be.l(d),He=w(d),Ae=B(d,"HR",{class:!0}),Ke=w(d),Je=B(d,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia(Je)!=="svelte-3eb846"&&(Je.innerHTML=Ue),ea=w(d),X.l(d),Oe=w(d),Ve=B(d,"HR",{class:!0}),We=w(d),f=B(d,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia(f)!=="svelte-wp3p2i"&&(f.innerHTML=C),V=w(d),I(Ce.$$.fragment,d),na=w(d),I(ve.$$.fragment,d),P=w(d),ee=B(d,"HR",{class:!0}),oe=w(d),se=B(d,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia(se)!=="svelte-1wcrd8c"&&(se.innerHTML=Te),xe=w(d),Q.l(d),ne=ma(),this.h()},h(){var d,F,l,c,ge,le;h(t,"font-size","11px"),h(t,"font-weight","500"),h(t,"color","#6B7280"),h(t,"text-transform","uppercase"),h(t,"letter-spacing",".05em"),h(t,"margin-bottom","6px"),h(G,"font-size","1.8rem"),h(G,"font-weight","700"),h(G,"color","#231F20"),h(s,"background","var(--nxt-surface)"),h(s,"border","1px solid var(--nxt-border)"),h(s,"border-left","4px solid #C8122C"),h(s,"border-radius","8px"),h(s,"padding","16px 28px"),h(s,"min-width","200px"),h(s,"text-align","center"),h(H,"font-size","11px"),h(H,"font-weight","500"),h(H,"color","#6B7280"),h(H,"text-transform","uppercase"),h(H,"letter-spacing",".05em"),h(H,"margin-bottom","6px"),j(Y,"style",T="font-size:1.8rem; font-weight:700; color:"+((((F=(d=n[0])==null?void 0:d[0])==null?void 0:F.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),j(W,"style",Ye="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((c=(l=n[0])==null?void 0:l[0])==null?void 0:c.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),j(E,"style",ra="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((le=(ge=n[0])==null?void 0:ge[0])==null?void 0:le.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"),h(r,"display","flex"),h(r,"justify-content","center"),h(r,"gap","16px"),h(r,"flex-wrap","wrap"),h(r,"margin","16px 0"),j(z,"class","markdown"),j(Z,"class","markdown"),j(Z,"id","top-10-agencies-by-budget--latest-year"),j(Ae,"class","markdown"),j(Je,"class","markdown"),j(Je,"id","fund-type-share--latest-year"),j(Ve,"class","markdown"),j(f,"class","markdown"),j(f,"id","budget-changes--year-over-year"),j(ee,"class","markdown"),j(se,"class","markdown"),j(se,"id","agency-drill-down-table--click-a-row-to-open-the-agency-page")},m(d,F){m(d,r,F),L(r,s),L(s,t),L(t,a),L(t,u),L(t,y),L(s,$),L(s,G),L(G,O),L(r,J),L(r,E),L(E,H),L(E,v),L(E,Y),L(Y,x),L(E,we),L(E,W),L(W,ta),m(d,ue,F),m(d,z,F),m(d,de,F),m(d,Z,F),m(d,Ze,F),ce[Re].m(d,F),m(d,He,F),m(d,Ae,F),m(d,Ke,F),m(d,Je,F),m(d,ea,F),te[ke].m(d,F),m(d,Oe,F),m(d,Ve,F),m(d,We,F),m(d,f,F),m(d,V,F),q(Ce,d,F),m(d,na,F),q(ve,d,F),m(d,P,F),m(d,ee,F),m(d,oe,F),m(d,se,F),m(d,xe,F),_e[ae].m(d,F),m(d,ne,F),K=!0},p(d,F){var Le,sa,ya,$a,ka,Ga,Ka,ua,fa,ha;(!K||F[0]&1)&&e!==(e=(((sa=(Le=d[0])==null?void 0:Le[0])==null?void 0:sa.max_year_label)??"N/A")+"")&&Qa(u,e),(!K||F[0]&1)&&N!==(N=d[137]()+"")&&Qa(O,N),(!K||F[0]&1)&&p!==(p=d[138]()+"")&&Qa(x,p),(!K||F[0]&1&&T!==(T="font-size:1.8rem; font-weight:700; color:"+(((($a=(ya=d[0])==null?void 0:ya[0])==null?void 0:$a.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&j(Y,"style",T),(!K||F[0]&1)&&o!==(o=((Ga=(ka=d[0])==null?void 0:ka[0])==null?void 0:Ga.yoy_pct)!=null?(d[0][0].yoy_pct>=0?"+":"")+d[0][0].yoy_pct+"%":"—")&&Qa(ta,o),(!K||F[0]&1&&Ye!==(Ye="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((ua=(Ka=d[0])==null?void 0:Ka[0])==null?void 0:ua.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&j(W,"style",Ye),(!K||F[0]&1&&ra!==(ra="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((ha=(fa=d[0])==null?void 0:fa[0])==null?void 0:ha.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"))&&j(E,"style",ra);let l=Re;Re=De(d),Re===l?ce[Re].p(d,F):(he(),b(ce[l],1,1,()=>{ce[l]=null}),$e(),Be=ce[Re],Be?Be.p(d,F):(Be=ce[Re]=Ee[Re](d),Be.c()),i(Be,1),Be.m(He.parentNode,He));let c=ke;ke=Fe(d),ke===c?te[ke].p(d,F):(he(),b(te[c],1,1,()=>{te[c]=null}),$e(),X=te[ke],X?X.p(d,F):(X=te[ke]=fe[ke](d),X.c()),i(X,1),X.m(Oe.parentNode,Oe));const ge={};F[6]&16384&&(ge.$$scope={dirty:F,ctx:d}),Ce.$set(ge);const le={};F[0]&33554432&&(le.data=d[25]),ve.$set(le);let la=ae;ae=Ie(d),ae===la?_e[ae].p(d,F):(he(),b(_e[la],1,1,()=>{_e[la]=null}),$e(),Q=_e[ae],Q?Q.p(d,F):(Q=_e[ae]=qe[ae](d),Q.c()),i(Q,1),Q.m(ne.parentNode,ne))},i(d){K||(i(Be),i(X),i(Ce.$$.fragment,d),i(ve.$$.fragment,d),i(Q),K=!0)},o(d){b(Be),b(X),b(Ce.$$.fragment,d),b(ve.$$.fragment,d),b(Q),K=!1},d(d){d&&(_(r),_(ue),_(z),_(de),_(Z),_(Ze),_(He),_(Ae),_(Ke),_(Je),_(ea),_(Oe),_(Ve),_(We),_(f),_(V),_(na),_(P),_(ee),_(oe),_(se),_(xe),_(ne)),ce[Re].d(d),te[ke].d(d),D(Ce,d),D(ve,d),_e[ae].d(d)}}}function Hs(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[Ls]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Ys(n){let r,s,t,a;return r=new ms({props:{data:n[21],entityLabel:"agencies"}}),t=new gs({props:{data:n[21],title:"",barField:"spend",labelField:"agency_name",pctField:"pct_of_total",cumulativeField:"cumulative",totalField:"grand_total",height:"420px"}}),{c(){S(r.$$.fragment),s=k(),S(t.$$.fragment)},l(e){I(r.$$.fragment,e),s=w(e),I(t.$$.fragment,e)},m(e,u){q(r,e,u),m(e,s,u),q(t,e,u),a=!0},p(e,u){const y={};u[0]&2097152&&(y.data=e[21]),r.$set(y);const $={};u[0]&2097152&&($.data=e[21]),t.$set($)},i(e){a||(i(r.$$.fragment,e),i(t.$$.fragment,e),a=!0)},o(e){b(r.$$.fragment,e),b(t.$$.fragment,e),a=!1},d(e){e&&_(s),D(r,e),D(t,e)}}}function Ls(n){let r;return{c(){r=Xe("No agency snapshot data available for this filter selection.")},l(s){r=Qe(s,"No agency snapshot data available for this filter selection.")},m(s,t){m(s,r,t)},d(s){s&&_(r)}}}function Ms(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[Vs]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Us(n){let r,s,t,a;return r=new ps({props:{data:n[24],fund_profile:n[23],title:"",height:"420px",nameField:"fund_type",valueField:"latest_budget",pctField:"latest_year_pct"}}),t=new Hr({props:{data:n[24],columns:n[33],search:!0,defaultSort:"latest_budget",defaultDir:-1}}),{c(){S(r.$$.fragment),s=k(),S(t.$$.fragment)},l(e){I(r.$$.fragment,e),s=w(e),I(t.$$.fragment,e)},m(e,u){q(r,e,u),m(e,s,u),q(t,e,u),a=!0},p(e,u){const y={};u[0]&16777216&&(y.data=e[24]),u[0]&8388608&&(y.fund_profile=e[23]),r.$set(y);const $={};u[0]&16777216&&($.data=e[24]),u[1]&4&&($.columns=e[33]),t.$set($)},i(e){a||(i(r.$$.fragment,e),i(t.$$.fragment,e),a=!0)},o(e){b(r.$$.fragment,e),b(t.$$.fragment,e),a=!1},d(e){e&&_(s),D(r,e),D(t,e)}}}function Vs(n){let r;return{c(){r=Xe("No fund type data available for this filter selection.")},l(s){r=Qe(s,"No fund type data available for this filter selection.")},m(s,t){m(s,r,t)},d(s){s&&_(r)}}}function Ps(n){let r;return{c(){r=Xe("Agencies sorted by absolute dollar change from prior year.")},l(s){r=Qe(s,"Agencies sorted by absolute dollar change from prior year.")},m(s,t){m(s,r,t)},d(s){s&&_(r)}}}function Os(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[Qs]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function zs(n){let r,s;return r=new Hr({props:{data:n[26],columns:n[34],linkField:"agency_link",search:!0,defaultSort:"latest_budget",defaultDir:-1}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&67108864&&(e.data=t[26]),a[1]&8&&(e.columns=t[34]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Qs(n){let r;return{c(){r=Xe("No agency data available for this filter selection.")},l(s){r=Qe(s,"No agency data available for this filter selection.")},m(s,t){m(s,r,t)},d(s){s&&_(r)}}}function Dr(n){let r,s,t,a='<a href="#fiscal-overview">Fiscal Overview</a>',e,u,y,$,G='<a href="#fund-composition-over-time">Fund Composition Over Time</a>',N,O,J,E,H,U='<a href="#top-agencies-by-budget--trend-over-time">Top Agencies by Budget — Trend Over Time</a>',v,Y,p,x,T,we,W,o='<a href="#agency-budget-by-year---click-on-agency-to-drill-to-its-specific-page">Agency Budget by Year - Click on Agency to drill to its specific Page</a>',ta,Ye,ra,ue,z,de,Z,Pe,Ze,Re,Be;u=new bs({props:{yearly:n[1],yoyDetail:n[20],fiscalOverviewCagr:n[2],cagrPct:n[31],chartHeight:sn}});const He=[Gs,Xs],Ae=[];function Ke(f,C){var V;return((V=f[3])==null?void 0:V.length)>0?0:1}O=Ke(n),J=Ae[O]=He[O](n);const Je=[Ws,Js],Ue=[];function ea(f,C){var V;return((V=f[5])==null?void 0:V.length)>0?0:1}Y=ea(n),p=Ue[Y]=Je[Y](n);let ke=ga([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]),X=[];for(let f=0;f<3;f+=1)X[f]=qr(or(n,ke,f));const Oe=[an,en],Ve=[];function We(f,C){var V;return((V=f[27])==null?void 0:V.length)>0?0:1}return de=We(n),Z=Ve[de]=Oe[de](n),{c(){r=A("hr"),s=k(),t=A("h2"),t.innerHTML=a,e=k(),S(u.$$.fragment),y=Xe(`
---
`),$=A("h2"),$.innerHTML=G,N=k(),J.c(),E=Xe(`
---
`),H=A("h2"),H.innerHTML=U,v=k(),p.c(),x=k(),T=A("hr"),we=k(),W=A("h2"),W.innerHTML=o,ta=k(),Ye=A("div");for(let f=0;f<3;f+=1)X[f].c();ra=k(),ue=A("input"),z=k(),Z.c(),Pe=ma(),this.h()},l(f){r=B(f,"HR",{class:!0}),s=w(f),t=B(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia(t)!=="svelte-1d7gdnx"&&(t.innerHTML=a),e=w(f),I(u.$$.fragment,f),y=Qe(f,`
---
`),$=B(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia($)!=="svelte-1xzbziy"&&($.innerHTML=G),N=w(f),J.l(f),E=Qe(f,`
---
`),H=B(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia(H)!=="svelte-woniu6"&&(H.innerHTML=U),v=w(f),p.l(f),x=w(f),T=B(f,"HR",{class:!0}),we=w(f),W=B(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ia(W)!=="svelte-wpk9i7"&&(W.innerHTML=o),ta=w(f),Ye=B(f,"DIV",{style:!0});var C=Me(Ye);for(let V=0;V<3;V+=1)X[V].l(C);C.forEach(_),ra=w(f),ue=B(f,"INPUT",{placeholder:!0,style:!0}),z=w(f),Z.l(f),Pe=ma(),this.h()},h(){j(r,"class","markdown"),j(t,"class","markdown"),j(t,"id","fiscal-overview"),j($,"class","markdown"),j($,"id","fund-composition-over-time"),j(H,"class","markdown"),j(H,"id","top-agencies-by-budget--trend-over-time"),j(T,"class","markdown"),j(W,"class","markdown"),j(W,"id","agency-budget-by-year---click-on-agency-to-drill-to-its-specific-page"),h(Ye,"display","flex"),h(Ye,"gap","8px"),h(Ye,"margin","8px 0 14px 0"),j(ue,"placeholder","Search agencies..."),h(ue,"border","1px solid var(--nxt-border)"),h(ue,"border-radius","8px"),h(ue,"padding","8px 12px"),h(ue,"font-size","0.9rem"),h(ue,"width","280px"),h(ue,"margin-bottom","12px"),h(ue,"background","var(--nxt-surface)"),h(ue,"color","var(--nxt-text)")},m(f,C){m(f,r,C),m(f,s,C),m(f,t,C),m(f,e,C),q(u,f,C),m(f,y,C),m(f,$,C),m(f,N,C),Ae[O].m(f,C),m(f,E,C),m(f,H,C),m(f,v,C),Ue[Y].m(f,C),m(f,x,C),m(f,T,C),m(f,we,C),m(f,W,C),m(f,ta,C),m(f,Ye,C);for(let V=0;V<3;V+=1)X[V]&&X[V].m(Ye,null);m(f,ra,C),m(f,ue,C),ar(ue,n[9]),m(f,z,C),Ve[de].m(f,C),m(f,Pe,C),Ze=!0,Re||(Be=ht(ue,"input",n[140]),Re=!0)},p(f,C){const V={};C[0]&2&&(V.yearly=f[1]),C[0]&1048576&&(V.yoyDetail=f[20]),C[0]&4&&(V.fiscalOverviewCagr=f[2]),C[1]&1&&(V.cagrPct=f[31]),u.$set(V);let Ce=O;O=Ke(f),O===Ce?Ae[O].p(f,C):(he(),b(Ae[Ce],1,1,()=>{Ae[Ce]=null}),$e(),J=Ae[O],J?J.p(f,C):(J=Ae[O]=He[O](f),J.c()),i(J,1),J.m(E.parentNode,E));let na=Y;if(Y=ea(f),Y===na?Ue[Y].p(f,C):(he(),b(Ue[na],1,1,()=>{Ue[na]=null}),$e(),p=Ue[Y],p?p.p(f,C):(p=Ue[Y]=Je[Y](f),p.c()),i(p,1),p.m(x.parentNode,x)),C[0]&256){ke=ga([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]);let P;for(P=0;P<3;P+=1){const ee=or(f,ke,P);X[P]?X[P].p(ee,C):(X[P]=qr(ee),X[P].c(),X[P].m(Ye,null))}for(;P<3;P+=1)X[P].d(1)}C[0]&512&&ue.value!==f[9]&&ar(ue,f[9]);let ve=de;de=We(f),de===ve?Ve[de].p(f,C):(he(),b(Ve[ve],1,1,()=>{Ve[ve]=null}),$e(),Z=Ve[de],Z?Z.p(f,C):(Z=Ve[de]=Oe[de](f),Z.c()),i(Z,1),Z.m(Pe.parentNode,Pe))},i(f){Ze||(i(u.$$.fragment,f),i(J),i(p),i(Z),Ze=!0)},o(f){b(u.$$.fragment,f),b(J),b(p),b(Z),Ze=!1},d(f){f&&(_(r),_(s),_(t),_(e),_(y),_($),_(N),_(E),_(H),_(v),_(x),_(T),_(we),_(W),_(ta),_(Ye),_(ra),_(ue),_(z),_(Pe)),D(u,f),Ae[O].d(f),Ue[Y].d(f),yt(X,f),Ve[de].d(f),Re=!1,Be()}}}function Xs(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[Ks]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Gs(n){let r,s;return r=new $s({props:{fundTrend:n[3],fundTrendYears:n[30],fundSeriesNames:n[29],fundSeriesTotals:n[11]}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&8&&(e.fundTrend=t[3]),a[0]&1073741824&&(e.fundTrendYears=t[30]),a[0]&536870912&&(e.fundSeriesNames=t[29]),a[0]&2048&&(e.fundSeriesTotals=t[11]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Ks(n){let r;return{c(){r=Xe("No fund trend data available for this filter selection.")},l(s){r=Qe(s,"No fund trend data available for this filter selection.")},m(s,t){m(s,r,t)},d(s){s&&_(r)}}}function Js(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[Zs]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Ws(n){let r,s;return r=new ys({props:{agencies:n[4],trendLines:n[5],years:n[28],title:"Top Agencies by Budget — Trend Over Time",entityLabel:"agency",topN:5,height:"520px"}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[0]&16&&(e.agencies=t[4]),a[0]&32&&(e.trendLines=t[5]),a[0]&268435456&&(e.years=t[28]),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function Zs(n){let r;return{c(){r=Xe("No agency trend data available for this filter selection.")},l(s){r=Qe(s,"No agency trend data available for this filter selection.")},m(s,t){m(s,r,t)},d(s){s&&_(r)}}}function qr(n){let r,s,t,a,e;function u(){return n[139](n[194])}return{c(){r=A("button"),s=Xe(n[195]),this.h()},l(y){r=B(y,"BUTTON",{style:!0});var $=Me(r);s=Qe($,n[195]),$.forEach(_),this.h()},h(){j(r,"style",t="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[8]===n[194]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[8]===n[194]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[8]===n[194]?"#C8122C":"#231F20")+"; font-weight: "+(n[8]===n[194]?700:500))},m(y,$){m(y,r,$),L(r,s),a||(e=ht(r,"click",u),a=!0)},p(y,$){n=y,$[0]&256&&t!==(t="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[8]===n[194]?"2px solid #C8122C":"1px solid var(--nxt-border)")+"; background: "+(n[8]===n[194]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"var(--nxt-surface)")+"; color: "+(n[8]===n[194]?"#C8122C":"#231F20")+"; font-weight: "+(n[8]===n[194]?700:500))&&j(r,"style",t)},d(y){y&&_(r),a=!1,e()}}}function en(n){let r,s;return r=new Xa({props:{status:"warning",$$slots:{default:[tn]},$$scope:{ctx:n}}}),{c(){S(r.$$.fragment)},l(t){I(r.$$.fragment,t)},m(t,a){q(r,t,a),s=!0},p(t,a){const e={};a[6]&16384&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){s||(i(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){D(r,t)}}}function an(n){let r,s,t,a,e,u="Agency",y,$,G,N,O,J=ga(n[10]),E=[];for(let v=0;v<J.length;v+=1)E[v]=Ir(lr(n,J,v));let H=ga(n[27]),U=[];for(let v=0;v<H.length;v+=1)U[v]=Nr(sr(n,H,v));return{c(){r=A("div"),s=A("table"),t=A("thead"),a=A("tr"),e=A("th"),e.textContent=u,y=k();for(let v=0;v<E.length;v+=1)E[v].c();$=k(),G=A("th"),N=k(),O=A("tbody");for(let v=0;v<U.length;v+=1)U[v].c();this.h()},l(v){r=B(v,"DIV",{style:!0});var Y=Me(r);s=B(Y,"TABLE",{style:!0});var p=Me(s);t=B(p,"THEAD",{});var x=Me(t);a=B(x,"TR",{style:!0});var T=Me(a);e=B(T,"TH",{style:!0,"data-svelte-h":!0}),ia(e)!=="svelte-taluwf"&&(e.textContent=u),y=w(T);for(let W=0;W<E.length;W+=1)E[W].l(T);$=w(T),G=B(T,"TH",{style:!0}),Me(G).forEach(_),T.forEach(_),x.forEach(_),N=w(p),O=B(p,"TBODY",{});var we=Me(O);for(let W=0;W<U.length;W+=1)U[W].l(we);we.forEach(_),p.forEach(_),Y.forEach(_),this.h()},h(){h(e,"text-align","left"),h(e,"padding","10px 14px"),h(e,"font-weight","700"),h(e,"color","#231F20"),h(e,"min-width","260px"),h(G,"padding","10px 8px"),h(a,"background","var(--nxt-pink)"),h(a,"border-bottom","2px solid #C8122C"),h(s,"width","100%"),h(s,"border-collapse","collapse"),h(s,"font-size","0.875rem"),h(r,"overflow-x","auto"),h(r,"border-radius","8px"),h(r,"border","1px solid var(--nxt-border)"),h(r,"background","var(--nxt-surface)")},m(v,Y){m(v,r,Y),L(r,s),L(s,t),L(t,a),L(a,e),L(a,y);for(let p=0;p<E.length;p+=1)E[p]&&E[p].m(a,null);L(a,$),L(a,G),L(s,N),L(s,O);for(let p=0;p<U.length;p+=1)U[p]&&U[p].m(O,null)},p(v,Y){if(Y[0]&1024){J=ga(v[10]);let p;for(p=0;p<J.length;p+=1){const x=lr(v,J,p);E[p]?E[p].p(x,Y):(E[p]=Ir(x),E[p].c(),E[p].m(a,$))}for(;p<E.length;p+=1)E[p].d(1);E.length=J.length}if(Y[0]&134218752|Y[1]&96){H=ga(v[27]);let p;for(p=0;p<H.length;p+=1){const x=sr(v,H,p);U[p]?U[p].p(x,Y):(U[p]=Nr(x),U[p].c(),U[p].m(O,null))}for(;p<U.length;p+=1)U[p].d(1);U.length=H.length}},i:da,o:da,d(v){v&&_(r),yt(E,v),yt(U,v)}}}function tn(n){let r;return{c(){r=Xe("No agency data available for this filter selection.")},l(s){r=Qe(s,"No agency data available for this filter selection.")},m(s,t){m(s,r,t)},d(s){s&&_(r)}}}function Ir(n){let r,s,t=n[189]+"",a;return{c(){r=A("th"),s=Xe("FY"),a=Xe(t),this.h()},l(e){r=B(e,"TH",{style:!0});var u=Me(r);s=Qe(u,"FY"),a=Qe(u,t),u.forEach(_),this.h()},h(){h(r,"text-align","right"),h(r,"padding","10px 14px"),h(r,"font-weight","700"),h(r,"color","#231F20"),h(r,"white-space","nowrap")},m(e,u){m(e,r,u),L(r,s),L(r,a)},p(e,u){u[0]&1024&&t!==(t=e[189]+"")&&Qa(a,t)},d(e){e&&_(r)}}}function Sr(n){let r,s=(n[186]["FY"+n[189]]??0)>=1e9?"$"+(n[186]["FY"+n[189]]/1e9).toFixed(2)+"B":(n[186]["FY"+n[189]]??0)>=1e6?"$"+(n[186]["FY"+n[189]]/1e6).toFixed(1)+"M":(n[186]["FY"+n[189]]??0)>=1e3?"$"+(n[186]["FY"+n[189]]/1e3).toFixed(0)+"K":"-",t,a;return{c(){r=A("td"),t=Xe(s),this.h()},l(e){r=B(e,"TD",{style:!0});var u=Me(r);t=Qe(u,s),u.forEach(_),this.h()},h(){j(r,"style",a="text-align:right; padding:9px 14px; color:#231F20; "+n[37](n[186],n[189],n[10]))},m(e,u){m(e,r,u),L(r,t)},p(e,u){u[0]&134218752&&s!==(s=(e[186]["FY"+e[189]]??0)>=1e9?"$"+(e[186]["FY"+e[189]]/1e9).toFixed(2)+"B":(e[186]["FY"+e[189]]??0)>=1e6?"$"+(e[186]["FY"+e[189]]/1e6).toFixed(1)+"M":(e[186]["FY"+e[189]]??0)>=1e3?"$"+(e[186]["FY"+e[189]]/1e3).toFixed(0)+"K":"-")&&Qa(t,s),u[0]&134218752&&a!==(a="text-align:right; padding:9px 14px; color:#231F20; "+e[37](e[186],e[189],e[10]))&&j(r,"style",a)},d(e){e&&_(r)}}}function Nr(n){let r,s,t=n[186].agency_name+"",a,e,u,y=n[36](n[186],n[10])+"",$,G,N,O="›",J,E,H,U=ga(n[10]),v=[];for(let p=0;p<U.length;p+=1)v[p]=Sr(nr(n,U,p));function Y(){return n[141](n[186])}return{c(){r=A("tr"),s=A("td"),a=Xe(t),e=k(),u=new ss(!1),$=k();for(let p=0;p<v.length;p+=1)v[p].c();G=k(),N=A("td"),N.textContent=O,J=k(),this.h()},l(p){r=B(p,"TR",{style:!0,onmouseenter:!0,onmouseleave:!0});var x=Me(r);s=B(x,"TD",{style:!0});var T=Me(s);a=Qe(T,t),e=w(T),u=rs(T,!1),T.forEach(_),$=w(x);for(let we=0;we<v.length;we+=1)v[we].l(x);G=w(x),N=B(x,"TD",{style:!0,"data-svelte-h":!0}),ia(N)!=="svelte-1eyp1xf"&&(N.textContent=O),J=w(x),x.forEach(_),this.h()},h(){u.a=null,h(s,"padding","9px 14px"),h(s,"color","#231F20"),h(s,"font-weight","500"),h(N,"padding","9px 8px"),h(N,"color","#C8122C"),h(N,"font-size","0.8rem"),j(r,"style","border-bottom:1px solid #F3F4F6; cursor:pointer; background:"+(n[188]%2===0?"var(--nxt-surface)":"#f7f2fc")+";"),j(r,"onmouseenter","this.style.background='var(--nxt-pink)'"),j(r,"onmouseleave","this.style.background="+(n[188]%2===0?"'var(--nxt-surface)'":"'#f7f2fc'"))},m(p,x){m(p,r,x),L(r,s),L(s,a),L(s,e),u.m(y,s),L(r,$);for(let T=0;T<v.length;T+=1)v[T]&&v[T].m(r,null);L(r,G),L(r,N),L(r,J),E||(H=ht(r,"click",Y),E=!0)},p(p,x){if(n=p,x[0]&134217728&&t!==(t=n[186].agency_name+"")&&Qa(a,t),x[0]&134218752&&y!==(y=n[36](n[186],n[10])+"")&&u.p(y),x[0]&134218752|x[1]&64){U=ga(n[10]);let T;for(T=0;T<U.length;T+=1){const we=nr(n,U,T);v[T]?v[T].p(we,x):(v[T]=Sr(we),v[T].c(),v[T].m(r,G))}for(;T<v.length;T+=1)v[T].d(1);v.length=U.length}},d(p){p&&_(r),yt(v,p),E=!1,H()}}}function rn(n){var F;let r,s,t,a,e,u,y,$='<h1 style="color: #211030; font-size: 1.7rem; font-weight: 700; margin: 0;">🏛️ Budget Office View</h1> <p style="color: #6321a5; font-size: 0.95rem; margin: 4px 0 0 0;">Statewide Budget Analysis</p>',G,N,O,J,E,H,U,v,Y,p,x,T,we,W,o,ta,Ye,ra,ue,z,de,Z,Pe,Ze,Re,Be,He,Ae,Ke,Je,Ue,ea,ke,X,Oe,Ve,We=typeof re<"u"&&(re.title||((F=re.og)==null?void 0:F.title))&&re.hide_title!==!0&&js();function f(l,c){var ge;return typeof re<"u"&&(re.title||(ge=re.og)!=null&&ge.title)?Rs:Cs}let V=f()(n),Ce=typeof re=="object"&&Bs(),na=ga([["latest","Latest Year"],["trend","Trend Over Years"]]),ve=[];for(let l=0;l<2;l+=1)ve[l]=_r(cr(n,na,l));let P=n[12]&&ir(n),ee=n[13]&&dr(n),oe=n[14]&&yr(n),se=n[15]&&ur(n),Te=n[16]&&fr(n),xe=n[17]&&br(n),ae=n[18]&&mr(n),Q=n[19]&&gr(n),ne=n[0]&&pr(n),K=n[1]&&$r(n),Ee=n[20]&&hr(n),ce=n[2]&&wr(n),De=n[21]&&kr(n),fe=n[22]&&vr(n),te=n[23]&&xr(n),Fe=n[24]&&Fr(n),qe=n[25]&&jr(n),_e=n[3]&&Cr(n),Ie=n[4]&&Rr(n),be=n[5]&&Br(n),me=n[6]&&Ar(n),je=n[26]&&Tr(n);He=new ks({props:{title:"🔍 Filters",open:"false",$$slots:{default:[Ss]},$$scope:{ctx:n}}}),Ke=new us({props:{title:"⚙ Filters",targetId:"page-filters"}}),ea=new $t({props:{name:"f_view",title:"View",defaultValue:"trend",$$slots:{default:[Ns]},$$scope:{ctx:n}}});let Se=n[32]=="latest"&&Er(n),d=n[32]=="trend"&&Dr(n);return{c(){We&&We.c(),r=k(),V.c(),s=A("meta"),t=A("meta"),Ce&&Ce.c(),a=ma(),e=k(),u=A("div"),y=A("div"),y.innerHTML=$,G=k(),N=A("div");for(let l=0;l<2;l+=1)ve[l].c();O=k(),P&&P.c(),J=k(),ee&&ee.c(),E=k(),oe&&oe.c(),H=k(),se&&se.c(),U=k(),Te&&Te.c(),v=k(),xe&&xe.c(),Y=k(),ae&&ae.c(),p=k(),Q&&Q.c(),x=k(),ne&&ne.c(),T=k(),K&&K.c(),we=k(),Ee&&Ee.c(),W=k(),ce&&ce.c(),o=k(),De&&De.c(),ta=k(),fe&&fe.c(),Ye=k(),te&&te.c(),ra=k(),Fe&&Fe.c(),ue=k(),qe&&qe.c(),z=k(),_e&&_e.c(),de=k(),Ie&&Ie.c(),Z=k(),be&&be.c(),Pe=k(),me&&me.c(),Ze=k(),je&&je.c(),Re=k(),Be=A("div"),S(He.$$.fragment),Ae=k(),S(Ke.$$.fragment),Je=k(),Ue=A("div"),S(ea.$$.fragment),ke=k(),Se&&Se.c(),X=k(),d&&d.c(),Oe=ma(),this.h()},l(l){We&&We.l(l),r=w(l);const c=Wr("svelte-2igo1p",document.head);V.l(c),s=B(c,"META",{name:!0,content:!0}),t=B(c,"META",{name:!0,content:!0}),Ce&&Ce.l(c),a=ma(),c.forEach(_),e=w(l),u=B(l,"DIV",{style:!0});var ge=Me(u);y=B(ge,"DIV",{"data-svelte-h":!0}),ia(y)!=="svelte-1jiz45y"&&(y.innerHTML=$),G=w(ge),N=B(ge,"DIV",{style:!0});var le=Me(N);for(let sa=0;sa<2;sa+=1)ve[sa].l(le);le.forEach(_),ge.forEach(_),O=w(l),P&&P.l(l),J=w(l),ee&&ee.l(l),E=w(l),oe&&oe.l(l),H=w(l),se&&se.l(l),U=w(l),Te&&Te.l(l),v=w(l),xe&&xe.l(l),Y=w(l),ae&&ae.l(l),p=w(l),Q&&Q.l(l),x=w(l),ne&&ne.l(l),T=w(l),K&&K.l(l),we=w(l),Ee&&Ee.l(l),W=w(l),ce&&ce.l(l),o=w(l),De&&De.l(l),ta=w(l),fe&&fe.l(l),Ye=w(l),te&&te.l(l),ra=w(l),Fe&&Fe.l(l),ue=w(l),qe&&qe.l(l),z=w(l),_e&&_e.l(l),de=w(l),Ie&&Ie.l(l),Z=w(l),be&&be.l(l),Pe=w(l),me&&me.l(l),Ze=w(l),je&&je.l(l),Re=w(l),Be=B(l,"DIV",{id:!0});var la=Me(Be);I(He.$$.fragment,la),la.forEach(_),Ae=w(l),I(Ke.$$.fragment,l),Je=w(l),Ue=B(l,"DIV",{style:!0});var Le=Me(Ue);I(ea.$$.fragment,Le),Le.forEach(_),ke=w(l),Se&&Se.l(l),X=w(l),d&&d.l(l),Oe=ma(),this.h()},h(){j(s,"name","twitter:card"),j(s,"content","summary_large_image"),j(t,"name","twitter:site"),j(t,"content","@evidence_dev"),h(N,"display","flex"),h(N,"border","1px solid #c9a8f0"),h(N,"border-radius","6px"),h(N,"width","fit-content"),h(N,"overflow","hidden"),h(N,"background","rgba(255,255,255,0.5)"),h(u,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),h(u,"padding","28px 36px"),h(u,"border-radius","12px"),h(u,"border-bottom","4px solid #802cd7"),h(u,"margin-bottom","0"),h(u,"display","flex"),h(u,"align-items","flex-end"),h(u,"justify-content","space-between"),h(u,"gap","24px"),h(u,"flex-wrap","wrap"),j(Be,"id","page-filters"),h(Ue,"display","none")},m(l,c){We&&We.m(l,c),m(l,r,c),V.m(document.head,null),L(document.head,s),L(document.head,t),Ce&&Ce.m(document.head,null),L(document.head,a),m(l,e,c),m(l,u,c),L(u,y),L(u,G),L(u,N);for(let ge=0;ge<2;ge+=1)ve[ge]&&ve[ge].m(N,null);m(l,O,c),P&&P.m(l,c),m(l,J,c),ee&&ee.m(l,c),m(l,E,c),oe&&oe.m(l,c),m(l,H,c),se&&se.m(l,c),m(l,U,c),Te&&Te.m(l,c),m(l,v,c),xe&&xe.m(l,c),m(l,Y,c),ae&&ae.m(l,c),m(l,p,c),Q&&Q.m(l,c),m(l,x,c),ne&&ne.m(l,c),m(l,T,c),K&&K.m(l,c),m(l,we,c),Ee&&Ee.m(l,c),m(l,W,c),ce&&ce.m(l,c),m(l,o,c),De&&De.m(l,c),m(l,ta,c),fe&&fe.m(l,c),m(l,Ye,c),te&&te.m(l,c),m(l,ra,c),Fe&&Fe.m(l,c),m(l,ue,c),qe&&qe.m(l,c),m(l,z,c),_e&&_e.m(l,c),m(l,de,c),Ie&&Ie.m(l,c),m(l,Z,c),be&&be.m(l,c),m(l,Pe,c),me&&me.m(l,c),m(l,Ze,c),je&&je.m(l,c),m(l,Re,c),m(l,Be,c),q(He,Be,null),m(l,Ae,c),q(Ke,l,c),m(l,Je,c),m(l,Ue,c),q(ea,Ue,null),m(l,ke,c),Se&&Se.m(l,c),m(l,X,c),d&&d.m(l,c),m(l,Oe,c),Ve=!0},p(l,c){var la;if(typeof re<"u"&&(re.title||(la=re.og)!=null&&la.title)&&re.hide_title!==!0&&We.p(l,c),V.p(l,c),typeof re=="object"&&Ce.p(l,c),c[0]&128){na=ga([["latest","Latest Year"],["trend","Trend Over Years"]]);let Le;for(Le=0;Le<2;Le+=1){const sa=cr(l,na,Le);ve[Le]?ve[Le].p(sa,c):(ve[Le]=_r(sa),ve[Le].c(),ve[Le].m(N,null))}for(;Le<2;Le+=1)ve[Le].d(1)}l[12]?P?(P.p(l,c),c[0]&4096&&i(P,1)):(P=ir(l),P.c(),i(P,1),P.m(J.parentNode,J)):P&&(he(),b(P,1,1,()=>{P=null}),$e()),l[13]?ee?(ee.p(l,c),c[0]&8192&&i(ee,1)):(ee=dr(l),ee.c(),i(ee,1),ee.m(E.parentNode,E)):ee&&(he(),b(ee,1,1,()=>{ee=null}),$e()),l[14]?oe?(oe.p(l,c),c[0]&16384&&i(oe,1)):(oe=yr(l),oe.c(),i(oe,1),oe.m(H.parentNode,H)):oe&&(he(),b(oe,1,1,()=>{oe=null}),$e()),l[15]?se?(se.p(l,c),c[0]&32768&&i(se,1)):(se=ur(l),se.c(),i(se,1),se.m(U.parentNode,U)):se&&(he(),b(se,1,1,()=>{se=null}),$e()),l[16]?Te?(Te.p(l,c),c[0]&65536&&i(Te,1)):(Te=fr(l),Te.c(),i(Te,1),Te.m(v.parentNode,v)):Te&&(he(),b(Te,1,1,()=>{Te=null}),$e()),l[17]?xe?(xe.p(l,c),c[0]&131072&&i(xe,1)):(xe=br(l),xe.c(),i(xe,1),xe.m(Y.parentNode,Y)):xe&&(he(),b(xe,1,1,()=>{xe=null}),$e()),l[18]?ae?(ae.p(l,c),c[0]&262144&&i(ae,1)):(ae=mr(l),ae.c(),i(ae,1),ae.m(p.parentNode,p)):ae&&(he(),b(ae,1,1,()=>{ae=null}),$e()),l[19]?Q?(Q.p(l,c),c[0]&524288&&i(Q,1)):(Q=gr(l),Q.c(),i(Q,1),Q.m(x.parentNode,x)):Q&&(he(),b(Q,1,1,()=>{Q=null}),$e()),l[0]?ne?(ne.p(l,c),c[0]&1&&i(ne,1)):(ne=pr(l),ne.c(),i(ne,1),ne.m(T.parentNode,T)):ne&&(he(),b(ne,1,1,()=>{ne=null}),$e()),l[1]?K?(K.p(l,c),c[0]&2&&i(K,1)):(K=$r(l),K.c(),i(K,1),K.m(we.parentNode,we)):K&&(he(),b(K,1,1,()=>{K=null}),$e()),l[20]?Ee?(Ee.p(l,c),c[0]&1048576&&i(Ee,1)):(Ee=hr(l),Ee.c(),i(Ee,1),Ee.m(W.parentNode,W)):Ee&&(he(),b(Ee,1,1,()=>{Ee=null}),$e()),l[2]?ce?(ce.p(l,c),c[0]&4&&i(ce,1)):(ce=wr(l),ce.c(),i(ce,1),ce.m(o.parentNode,o)):ce&&(he(),b(ce,1,1,()=>{ce=null}),$e()),l[21]?De?(De.p(l,c),c[0]&2097152&&i(De,1)):(De=kr(l),De.c(),i(De,1),De.m(ta.parentNode,ta)):De&&(he(),b(De,1,1,()=>{De=null}),$e()),l[22]?fe?(fe.p(l,c),c[0]&4194304&&i(fe,1)):(fe=vr(l),fe.c(),i(fe,1),fe.m(Ye.parentNode,Ye)):fe&&(he(),b(fe,1,1,()=>{fe=null}),$e()),l[23]?te?(te.p(l,c),c[0]&8388608&&i(te,1)):(te=xr(l),te.c(),i(te,1),te.m(ra.parentNode,ra)):te&&(he(),b(te,1,1,()=>{te=null}),$e()),l[24]?Fe?(Fe.p(l,c),c[0]&16777216&&i(Fe,1)):(Fe=Fr(l),Fe.c(),i(Fe,1),Fe.m(ue.parentNode,ue)):Fe&&(he(),b(Fe,1,1,()=>{Fe=null}),$e()),l[25]?qe?(qe.p(l,c),c[0]&33554432&&i(qe,1)):(qe=jr(l),qe.c(),i(qe,1),qe.m(z.parentNode,z)):qe&&(he(),b(qe,1,1,()=>{qe=null}),$e()),l[3]?_e?(_e.p(l,c),c[0]&8&&i(_e,1)):(_e=Cr(l),_e.c(),i(_e,1),_e.m(de.parentNode,de)):_e&&(he(),b(_e,1,1,()=>{_e=null}),$e()),l[4]?Ie?(Ie.p(l,c),c[0]&16&&i(Ie,1)):(Ie=Rr(l),Ie.c(),i(Ie,1),Ie.m(Z.parentNode,Z)):Ie&&(he(),b(Ie,1,1,()=>{Ie=null}),$e()),l[5]?be?(be.p(l,c),c[0]&32&&i(be,1)):(be=Br(l),be.c(),i(be,1),be.m(Pe.parentNode,Pe)):be&&(he(),b(be,1,1,()=>{be=null}),$e()),l[6]?me?(me.p(l,c),c[0]&64&&i(me,1)):(me=Ar(l),me.c(),i(me,1),me.m(Ze.parentNode,Ze)):me&&(he(),b(me,1,1,()=>{me=null}),$e()),l[26]?je?(je.p(l,c),c[0]&67108864&&i(je,1)):(je=Tr(l),je.c(),i(je,1),je.m(Re.parentNode,Re)):je&&(he(),b(je,1,1,()=>{je=null}),$e());const ge={};c[0]&28672|c[6]&16384&&(ge.$$scope={dirty:c,ctx:l}),He.$set(ge);const le={};c[6]&16384&&(le.$$scope={dirty:c,ctx:l}),ea.$set(le),l[32]=="latest"?Se?(Se.p(l,c),c[1]&2&&i(Se,1)):(Se=Er(l),Se.c(),i(Se,1),Se.m(X.parentNode,X)):Se&&(he(),b(Se,1,1,()=>{Se=null}),$e()),l[32]=="trend"?d?(d.p(l,c),c[1]&2&&i(d,1)):(d=Dr(l),d.c(),i(d,1),d.m(Oe.parentNode,Oe)):d&&(he(),b(d,1,1,()=>{d=null}),$e())},i(l){Ve||(i(P),i(ee),i(oe),i(se),i(Te),i(xe),i(ae),i(Q),i(ne),i(K),i(Ee),i(ce),i(De),i(fe),i(te),i(Fe),i(qe),i(_e),i(Ie),i(be),i(me),i(je),i(He.$$.fragment,l),i(Ke.$$.fragment,l),i(ea.$$.fragment,l),i(Se),i(d),Ve=!0)},o(l){b(P),b(ee),b(oe),b(se),b(Te),b(xe),b(ae),b(Q),b(ne),b(K),b(Ee),b(ce),b(De),b(fe),b(te),b(Fe),b(qe),b(_e),b(Ie),b(be),b(me),b(je),b(He.$$.fragment,l),b(Ke.$$.fragment,l),b(ea.$$.fragment,l),b(Se),b(d),Ve=!1},d(l){l&&(_(r),_(e),_(u),_(O),_(J),_(E),_(H),_(U),_(v),_(Y),_(p),_(x),_(T),_(we),_(W),_(o),_(ta),_(Ye),_(ra),_(ue),_(z),_(de),_(Z),_(Pe),_(Ze),_(Re),_(Be),_(Ae),_(Je),_(Ue),_(ke),_(X),_(Oe)),We&&We.d(l),V.d(l),_(s),_(t),Ce&&Ce.d(l),_(a),yt(ve,l),P&&P.d(l),ee&&ee.d(l),oe&&oe.d(l),se&&se.d(l),Te&&Te.d(l),xe&&xe.d(l),ae&&ae.d(l),Q&&Q.d(l),ne&&ne.d(l),K&&K.d(l),Ee&&Ee.d(l),ce&&ce.d(l),De&&De.d(l),fe&&fe.d(l),te&&te.d(l),Fe&&Fe.d(l),qe&&qe.d(l),_e&&_e.d(l),Ie&&Ie.d(l),be&&be.d(l),me&&me.d(l),je&&je.d(l),D(He),D(Ke,l),D(ea),Se&&Se.d(l),d&&d.d(l)}}}const re={},sn="320px";function nn(n,r,s){let t,a,e,u,y,$,G,N,O,J,E,H,U,v,Y,p,x,T,we;Zt(n,vs,g=>s(135,T=g)),Zt(n,rr,g=>s(151,we=g));let{data:W}=r,{data:o={},customFormattingSettings:ta,__db:Ye,inputs:ra}=W;Zr(rr,we="728d46afb2977abc40cecd9d0f283690",we);let ue=os(hs(ra));es(ue.subscribe(g=>ra=g)),as(ds,{getCustomFormats:()=>ta.customFormats||[]});const z=(g,Ne)=>Fs(Ye.query,g,{query_name:Ne});cs(z),T.params,ts(()=>!0);let de={initialData:void 0,initialError:void 0},Z=M`select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year`,Pe="select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year";o.g_fy_data&&(o.g_fy_data instanceof Error?de.initialError=o.g_fy_data:de.initialData=o.g_fy_data,o.g_fy_columns&&(de.knownColumns=o.g_fy_columns));let Ze,Re=!1;const Be=ze.createReactive({callback:g=>{s(12,Ze=g)},execFn:z},{id:"g_fy",...de});Be(Pe,{noResolve:Z,...de}),globalThis[Symbol.for("g_fy")]={get value(){return Ze}};let He={initialData:void 0,initialError:void 0},Ae=M`select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type`,Ke="select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type";o.g_fund_data&&(o.g_fund_data instanceof Error?He.initialError=o.g_fund_data:He.initialData=o.g_fund_data,o.g_fund_columns&&(He.knownColumns=o.g_fund_columns));let Je,Ue=!1;const ea=ze.createReactive({callback:g=>{s(13,Je=g)},execFn:z},{id:"g_fund",...He});ea(Ke,{noResolve:Ae,...He}),globalThis[Symbol.for("g_fund")]={get value(){return Je}};let ke={initialData:void 0,initialError:void 0},X=M`select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name`,Oe="select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name";o.g_agency_data&&(o.g_agency_data instanceof Error?ke.initialError=o.g_agency_data:ke.initialData=o.g_agency_data,o.g_agency_columns&&(ke.knownColumns=o.g_agency_columns));let Ve,We=!1;const f=ze.createReactive({callback:g=>{s(14,Ve=g)},execFn:z},{id:"g_agency",...ke});f(Oe,{noResolve:X,...ke}),globalThis[Symbol.for("g_agency")]={get value(){return Ve}};let C={initialData:void 0,initialError:void 0},V=M`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`,Ce=`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`;o.filtered_data&&(o.filtered_data instanceof Error?C.initialError=o.filtered_data:C.initialData=o.filtered_data,o.filtered_columns&&(C.knownColumns=o.filtered_columns));let na,ve=!1;const P=ze.createReactive({callback:g=>{s(15,na=g)},execFn:z},{id:"filtered",...C});P(Ce,{noResolve:V,...C}),globalThis[Symbol.for("filtered")]={get value(){return na}};let ee={initialData:void 0,initialError:void 0},oe=M`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
order by fiscal_year`,se=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
order by fiscal_year`;o.yearly_rollup_data&&(o.yearly_rollup_data instanceof Error?ee.initialError=o.yearly_rollup_data:ee.initialData=o.yearly_rollup_data,o.yearly_rollup_columns&&(ee.knownColumns=o.yearly_rollup_columns));let Te,xe=!1;const ae=ze.createReactive({callback:g=>{s(16,Te=g)},execFn:z},{id:"yearly_rollup",...ee});ae(se,{noResolve:oe,...ee}),globalThis[Symbol.for("yearly_rollup")]={get value(){return Te}};let Q={initialData:void 0,initialError:void 0},ne=M`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`,K=`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`;o.scope_meta_data&&(o.scope_meta_data instanceof Error?Q.initialError=o.scope_meta_data:Q.initialData=o.scope_meta_data,o.scope_meta_columns&&(Q.knownColumns=o.scope_meta_columns));let Ee,ce=!1;const De=ze.createReactive({callback:g=>{s(17,Ee=g)},execFn:z},{id:"scope_meta",...Q});De(K,{noResolve:ne,...Q}),globalThis[Symbol.for("scope_meta")]={get value(){return Ee}};let fe={initialData:void 0,initialError:void 0},te=M`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.display_year`,Fe=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.display_year`;o.filtered_latest_data&&(o.filtered_latest_data instanceof Error?fe.initialError=o.filtered_latest_data:fe.initialData=o.filtered_latest_data,o.filtered_latest_columns&&(fe.knownColumns=o.filtered_latest_columns));let qe,_e=!1;const Ie=ze.createReactive({callback:g=>{s(18,qe=g)},execFn:z},{id:"filtered_latest",...fe});Ie(Fe,{noResolve:te,...fe}),globalThis[Symbol.for("filtered_latest")]={get value(){return qe}};let be={initialData:void 0,initialError:void 0},me=M`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.prior_year`,je=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.prior_year`;o.filtered_prior_data&&(o.filtered_prior_data instanceof Error?be.initialError=o.filtered_prior_data:be.initialData=o.filtered_prior_data,o.filtered_prior_columns&&(be.knownColumns=o.filtered_prior_columns));let Se,d=!1;const F=ze.createReactive({callback:g=>{s(19,Se=g)},execFn:z},{id:"filtered_prior",...be});F(je,{noResolve:me,...be}),globalThis[Symbol.for("filtered_prior")]={get value(){return Se}};let l={initialData:void 0,initialError:void 0},c=M`with points as (
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
from points`,ge=`with points as (
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
from points`;o.overview_data&&(o.overview_data instanceof Error?l.initialError=o.overview_data:l.initialData=o.overview_data,o.overview_columns&&(l.knownColumns=o.overview_columns));let le,la=!1;const Le=ze.createReactive({callback:g=>{s(0,le=g)},execFn:z},{id:"overview",...l});Le(ge,{noResolve:c,...l}),globalThis[Symbol.for("overview")]={get value(){return le}};let sa={initialData:void 0,initialError:void 0},ya=M`select fiscal_year, total_budget
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
order by fiscal_year`;o.yearly_data&&(o.yearly_data instanceof Error?sa.initialError=o.yearly_data:sa.initialData=o.yearly_data,o.yearly_columns&&(sa.knownColumns=o.yearly_columns));let ka,Ga=!1;const Ka=ze.createReactive({callback:g=>{s(1,ka=g)},execFn:z},{id:"yearly",...sa});Ka($a,{noResolve:ya,...sa}),globalThis[Symbol.for("yearly")]={get value(){return ka}};let ua={initialData:void 0,initialError:void 0},fa=M`select
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
order by fiscal_year`,ha=`select
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
order by fiscal_year`;o.yoy_detail_data&&(o.yoy_detail_data instanceof Error?ua.initialError=o.yoy_detail_data:ua.initialData=o.yoy_detail_data,o.yoy_detail_columns&&(ua.knownColumns=o.yoy_detail_columns));let wt,kt=!1;const vt=ze.createReactive({callback:g=>{s(20,wt=g)},execFn:z},{id:"yoy_detail",...ua});vt(ha,{noResolve:fa,...ua}),globalThis[Symbol.for("yoy_detail")]={get value(){return wt}};let va={initialData:void 0,initialError:void 0},xa=M`with base as (
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
order by fiscal_year`,Za=`with base as (
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
order by fiscal_year`;o.fiscal_overview_cagr_data&&(o.fiscal_overview_cagr_data instanceof Error?va.initialError=o.fiscal_overview_cagr_data:va.initialData=o.fiscal_overview_cagr_data,o.fiscal_overview_cagr_columns&&(va.knownColumns=o.fiscal_overview_cagr_columns));let Fa,xt=!1;const Ft=ze.createReactive({callback:g=>{s(2,Fa=g)},execFn:z},{id:"fiscal_overview_cagr",...va});Ft(Za,{noResolve:xa,...va}),globalThis[Symbol.for("fiscal_overview_cagr")]={get value(){return Fa}};let ja={initialData:void 0,initialError:void 0},Ca=M`select
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
limit 10`,et=`select
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
limit 10`;o.snapshot_agencies_data&&(o.snapshot_agencies_data instanceof Error?ja.initialError=o.snapshot_agencies_data:ja.initialData=o.snapshot_agencies_data,o.snapshot_agencies_columns&&(ja.knownColumns=o.snapshot_agencies_columns));let jt,Ct=!1;const Rt=ze.createReactive({callback:g=>{s(21,jt=g)},execFn:z},{id:"snapshot_agencies",...ja});Rt(et,{noResolve:Ca,...ja}),globalThis[Symbol.for("snapshot_agencies")]={get value(){return jt}};let Ra={initialData:void 0,initialError:void 0},Ba=M`select *
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
) as rules(pattern, fund_rank, fund_color, is_like)`,at=`select *
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
) as rules(pattern, fund_rank, fund_color, is_like)`;o.fund_rules_data&&(o.fund_rules_data instanceof Error?Ra.initialError=o.fund_rules_data:Ra.initialData=o.fund_rules_data,o.fund_rules_columns&&(Ra.knownColumns=o.fund_rules_columns));let Bt,At=!1;const Tt=ze.createReactive({callback:g=>{s(22,Bt=g)},execFn:z},{id:"fund_rules",...Ra});Tt(at,{noResolve:Ba,...Ra}),globalThis[Symbol.for("fund_rules")]={get value(){return Bt}};let Aa={initialData:void 0,initialError:void 0},Ta=M`with distinct_funds as (
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
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`,tt=`with distinct_funds as (
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
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`;o.fund_profile_data&&(o.fund_profile_data instanceof Error?Aa.initialError=o.fund_profile_data:Aa.initialData=o.fund_profile_data,o.fund_profile_columns&&(Aa.knownColumns=o.fund_profile_columns));let Et,Dt=!1;const qt=ze.createReactive({callback:g=>{s(23,Et=g)},execFn:z},{id:"fund_profile",...Aa});qt(tt,{noResolve:Ta,...Aa}),globalThis[Symbol.for("fund_profile")]={get value(){return Et}};let Ea={initialData:void 0,initialError:void 0},Da=M`with latest as (
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
order by l.latest_budget desc`,rt=`with latest as (
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
order by l.latest_budget desc`;o.fund_snapshot_data&&(o.fund_snapshot_data instanceof Error?Ea.initialError=o.fund_snapshot_data:Ea.initialData=o.fund_snapshot_data,o.fund_snapshot_columns&&(Ea.knownColumns=o.fund_snapshot_columns));let It,St=!1;const Nt=ze.createReactive({callback:g=>{s(24,It=g)},execFn:z},{id:"fund_snapshot",...Ea});Nt(rt,{noResolve:Da,...Ea}),globalThis[Symbol.for("fund_snapshot")]={get value(){return It}};let qa={initialData:void 0,initialError:void 0},Ia=M`with latest as (
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
limit 20`,st=`with latest as (
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
limit 20`;o.agency_movers_data&&(o.agency_movers_data instanceof Error?qa.initialError=o.agency_movers_data:qa.initialData=o.agency_movers_data,o.agency_movers_columns&&(qa.knownColumns=o.agency_movers_columns));let Ht,Yt=!1;const Lt=ze.createReactive({callback:g=>{s(25,Ht=g)},execFn:z},{id:"agency_movers",...qa});Lt(st,{noResolve:Ia,...qa}),globalThis[Symbol.for("agency_movers")]={get value(){return Ht}};let Sa={initialData:void 0,initialError:void 0},Na=M`select
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
order by f.fiscal_year, fund_rank`,nt=`select
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
order by f.fiscal_year, fund_rank`;o.fund_trend_data&&(o.fund_trend_data instanceof Error?Sa.initialError=o.fund_trend_data:Sa.initialData=o.fund_trend_data,o.fund_trend_columns&&(Sa.knownColumns=o.fund_trend_columns));let Ja,Mt=!1;const Ut=ze.createReactive({callback:g=>{s(3,Ja=g)},execFn:z},{id:"fund_trend",...Sa});Ut(nt,{noResolve:Na,...Sa}),globalThis[Symbol.for("fund_trend")]={get value(){return Ja}};let Ha={initialData:void 0,initialError:void 0},Ya=M`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
limit 10`,lt=`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
limit 10`;o.top_agencies_trend_data&&(o.top_agencies_trend_data instanceof Error?Ha.initialError=o.top_agencies_trend_data:Ha.initialData=o.top_agencies_trend_data,o.top_agencies_trend_columns&&(Ha.knownColumns=o.top_agencies_trend_columns));let ft,Vt=!1;const Pt=ze.createReactive({callback:g=>{s(4,ft=g)},execFn:z},{id:"top_agencies_trend",...Ha});Pt(lt,{noResolve:Ya,...Ha}),globalThis[Symbol.for("top_agencies_trend")]={get value(){return ft}};let La={initialData:void 0,initialError:void 0},Ma=M`select
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
order by f.fiscal_year`,ot=`select
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
order by f.fiscal_year`;o.agency_trend_lines_data&&(o.agency_trend_lines_data instanceof Error?La.initialError=o.agency_trend_lines_data:La.initialData=o.agency_trend_lines_data,o.agency_trend_lines_columns&&(La.knownColumns=o.agency_trend_lines_columns));let bt,Ot=!1;const zt=ze.createReactive({callback:g=>{s(5,bt=g)},execFn:z},{id:"agency_trend_lines",...La});zt(ot,{noResolve:Ma,...La}),globalThis[Symbol.for("agency_trend_lines")]={get value(){return bt}};let Ua={initialData:void 0,initialError:void 0},Va=M`select
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
order by agency_name, fiscal_year`,ct=`select
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
order by agency_name, fiscal_year`;o.agency_drill_data&&(o.agency_drill_data instanceof Error?Ua.initialError=o.agency_drill_data:Ua.initialData=o.agency_drill_data,o.agency_drill_columns&&(Ua.knownColumns=o.agency_drill_columns));let _t,Qt=!1;const Xt=ze.createReactive({callback:g=>{s(6,_t=g)},execFn:z},{id:"agency_drill",...Ua});Xt(ct,{noResolve:Va,...Ua}),globalThis[Symbol.for("agency_drill")]={get value(){return _t}};let Pa={initialData:void 0,initialError:void 0},Oa=M`with latest as (
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
order by l.latest_budget desc`,it=`with latest as (
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
order by l.latest_budget desc`;o.agency_latest_data&&(o.agency_latest_data instanceof Error?Pa.initialError=o.agency_latest_data:Pa.initialData=o.agency_latest_data,o.agency_latest_columns&&(Pa.knownColumns=o.agency_latest_columns));let Gt,Kt=!1;const Jt=ze.createReactive({callback:g=>{s(26,Gt=g)},execFn:z},{id:"agency_latest",...Pa});Jt(it,{noResolve:Oa,...Pa}),globalThis[Symbol.for("agency_latest")]={get value(){return Gt}};const er=_s();Zt(n,er,g=>s(134,x=g));const Yr=(g,Ne="%")=>{var R,ie,pe,oa,ba,pa,wa;const ye=[(ie=(R=g==null?void 0:g.rawValues)==null?void 0:R[0])==null?void 0:ie.value,(pe=g==null?void 0:g.rawValue)==null?void 0:pe.value,(oa=g==null?void 0:g.value)==null?void 0:oa.value,g==null?void 0:g.value,g==null?void 0:g.rawValue,(pa=(ba=g==null?void 0:g.rawValues)==null?void 0:ba[0])==null?void 0:pa.label,g==null?void 0:g.label,(wa=g==null?void 0:g.rawValues)==null?void 0:wa[0]];for(const ca of ye){if(ca==null)continue;if(typeof ca=="object"){if(ca.value!=null)return String(ca.value).toLowerCase();if(ca.label!=null)return String(ca.label).toLowerCase()}const za=String(ca).toLowerCase();if(za&&za!=="[object object]")return za}return Ne},Wa=(g,Ne=!0)=>{const ye=Yr(g,"%").replace(/'/g,"''");return Ne?ye.toLowerCase():ye},Lr=(g,Ne)=>{if(!g||g.length<2)return{chartData:[],trendPoints:[]};const ye=g.map(aa=>Number(aa[Ne])||0),R=Array.from({length:g.length},(aa,_a)=>_a+1),ie=R.map((aa,_a)=>({x:aa,y:ye[_a]})).filter(aa=>aa.y>0);if(ie.length<2)return{chartData:ye,trendPoints:ye};const pe=ie.map(aa=>Math.log(aa.x)),oa=ie.map(aa=>Math.log(aa.y)),ba=ie.length,pa=pe.reduce((aa,_a)=>aa+_a,0),wa=oa.reduce((aa,_a)=>aa+_a,0),ca=pe.reduce((aa,_a,Kr)=>aa+_a*oa[Kr],0),za=pe.reduce((aa,_a)=>aa+_a*_a,0),gt=ba*za-pa*pa;if(Math.abs(gt)<1e-10)return{chartData:ye,trendPoints:ye};const pt=(ba*ca-pa*wa)/gt,Gr=Math.exp((wa-pt*pa)/ba);return{chartData:ye,trendPoints:R.map(aa=>Gr*Math.pow(aa,pt))}},Mr=(g,Ne)=>{const ye=Ne.map(ca=>g["FY"+ca]||0),R=Math.max(...ye);if(R===0)return"";const ie=48,pe=16,oa=ye.map((ca,za)=>{const gt=za/(ye.length-1)*ie,pt=pe-ca/R*pe;return gt+","+pt}).join(" "),ba=ye[ye.length-1],pa=ye[ye.length-2]??ba,wa=ba>=pa?"#2EAD6B":"#C8122C";return'<svg width="'+ie+'" height="'+pe+'" style="display:inline-block;vertical-align:middle;margin-left:8px;"><polyline points="'+oa+'" fill="none" stroke="'+wa+'" stroke-width="1.5" stroke-linejoin="round"/><circle cx="'+ie+'" cy="'+(pe-ba/R*pe)+'" r="2" fill="'+wa+'"/></svg>'},Ur=(g,Ne,ye)=>{const R=ye.indexOf(Ne);if(R<=0)return"";const ie=g["FY"+Ne]||0,pe=g["FY"+ye[R-1]]||0;if(pe===0)return"";const oa=(ie-pe)/pe*100;return oa>=15?"background:rgba(46,173,107,0.18);":oa>=8?"background:rgba(46,173,107,0.11);":oa>=3?"background:rgba(46,173,107,0.06);":oa>0?"background:rgba(46,173,107,0.03);":oa<=-15?"background:rgba(200,18,44,0.18);":oa<=-8?"background:rgba(200,18,44,0.11);":oa<=-3?"background:rgba(200,18,44,0.06);":"background:rgba(200,18,44,0.03);"};let Wt="trend",mt="3y",dt="";const Vr=g=>s(7,Wt=g),Pr=()=>{var ye;const g=Number((ye=le==null?void 0:le[0])==null?void 0:ye.latest_budget)||0,Ne=Math.abs(g);return Ne>=1e9?"$"+(Ne/1e9).toFixed(2)+"B":Ne>=1e6?"$"+(Ne/1e6).toFixed(1)+"M":"$"+Math.round(Ne).toLocaleString()},Or=()=>{var R;const g=Number((R=le==null?void 0:le[0])==null?void 0:R.dollar_change)||0,Ne=Math.abs(g),ye=g>=0?"+":"-";return Ne>=1e9?ye+"$"+(Ne/1e9).toFixed(2)+"B":Ne>=1e6?ye+"$"+(Ne/1e6).toFixed(1)+"M":ye+"$"+Math.round(Ne).toLocaleString()},zr=g=>s(8,mt=g);function Qr(){dt=this.value,s(9,dt)}const Xr=g=>ws(g.agency_link);return n.$$set=g=>{"data"in g&&s(38,W=g.data)},n.$$.update=()=>{var g,Ne,ye;n.$$.dirty[1]&128&&s(39,{data:o={},customFormattingSettings:ta,__db:Ye}=W,o),n.$$.dirty[1]&256&&is.set(Object.keys(o).length>0),n.$$.dirty[4]&2048&&T.params,n.$$.dirty[1]&7680&&(Z||!Re?Z||(Be(Pe,{noResolve:Z,...de}),s(43,Re=!0)):Be(Pe,{noResolve:Z})),n.$$.dirty[1]&122880&&(Ae||!Ue?Ae||(ea(Ke,{noResolve:Ae,...He}),s(47,Ue=!0)):ea(Ke,{noResolve:Ae})),n.$$.dirty[1]&1966080&&(X||!We?X||(f(Oe,{noResolve:X,...ke}),s(51,We=!0)):f(Oe,{noResolve:X})),n.$$.dirty[4]&1024&&s(132,a=Wa(x==null?void 0:x.f_fund)),n.$$.dirty[4]&1024&&s(132,a=Wa(x==null?void 0:x.f_fund)),n.$$.dirty[4]&1024&&s(131,e=Wa(x==null?void 0:x.f_agency)),n.$$.dirty[4]&1024&&s(131,e=Wa(x==null?void 0:x.f_agency)),n.$$.dirty[4]&384&&s(53,V=M`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`),n.$$.dirty[4]&384&&s(54,Ce=`select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
where (
    '${a}' in ('%', '', 'undefined')
    or '${a}' like '(select%'
    or lower(coalesce(b.fund_type, '')) like '${a}'
)
and (
    '${e}' in ('%', '', 'undefined')
    or '${e}' like '(select%'
    or lower(coalesce(b.agency_name, '')) like '${e}'
)`),n.$$.dirty[1]&31457280&&(V||!ve?V||(P(Ce,{noResolve:V,...C}),s(55,ve=!0)):P(Ce,{noResolve:V})),n.$$.dirty[4]&384&&s(57,oe=M`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
order by fiscal_year`),n.$$.dirty[4]&384&&s(58,se=`select fiscal_year, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
order by fiscal_year`),n.$$.dirty[1]&503316480&&(oe||!xe?oe||(ae(se,{noResolve:oe,...ee}),s(59,xe=!0)):ae(se,{noResolve:oe})),n.$$.dirty[4]&1024&&s(133,t=Wa(x==null?void 0:x.f_fy,!1)),n.$$.dirty[4]&1024&&s(133,t=Wa(x==null?void 0:x.f_fy)),n.$$.dirty[4]&896&&s(61,ne=M`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[4]&896&&s(62,K=`with ordered as (
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
group by b.start_year, b.max_year, b.total_budget, s.chosen_year`),n.$$.dirty[1]&1610612736|n.$$.dirty[2]&3&&(ne||!ce?ne||(De(K,{noResolve:ne,...Q}),s(63,ce=!0)):De(K,{noResolve:ne})),n.$$.dirty[4]&896&&s(65,te=M`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.display_year`),n.$$.dirty[4]&896&&s(66,Fe=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.display_year`),n.$$.dirty[2]&60&&(te||!_e?te||(Ie(Fe,{noResolve:te,...fe}),s(67,_e=!0)):Ie(Fe,{noResolve:te})),n.$$.dirty[4]&896&&s(69,me=M`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.prior_year`),n.$$.dirty[4]&896&&s(70,je=`select f.*
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
where f.fiscal_year = m.prior_year`),n.$$.dirty[2]&960&&(me||!d?me||(F(je,{noResolve:me,...be}),s(71,d=!0)):F(je,{noResolve:me})),n.$$.dirty[4]&896&&s(73,c=M`with points as (
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
from points`),n.$$.dirty[4]&896&&s(74,ge=`with points as (
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
from points`),n.$$.dirty[2]&15360&&(c||!la?c||(Le(ge,{noResolve:c,...l}),s(75,la=!0)):Le(ge,{noResolve:c})),n.$$.dirty[4]&384&&s(77,ya=M`select fiscal_year, total_budget
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
order by fiscal_year`),n.$$.dirty[2]&245760&&(ya||!Ga?ya||(Ka($a,{noResolve:ya,...sa}),s(79,Ga=!0)):Ka($a,{noResolve:ya})),n.$$.dirty[4]&384&&s(81,fa=M`select
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
order by fiscal_year`),n.$$.dirty[4]&384&&s(82,ha=`select
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
order by fiscal_year`),n.$$.dirty[2]&3932160&&(fa||!kt?fa||(vt(ha,{noResolve:fa,...ua}),s(83,kt=!0)):vt(ha,{noResolve:fa})),n.$$.dirty[4]&384&&s(85,xa=M`with base as (
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
order by fiscal_year`),n.$$.dirty[4]&384&&s(86,Za=`with base as (
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
order by fiscal_year`),n.$$.dirty[2]&62914560&&(xa||!xt?xa||(Ft(Za,{noResolve:xa,...va}),s(87,xt=!0)):Ft(Za,{noResolve:xa})),n.$$.dirty[4]&896&&s(89,Ca=M`select
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
limit 10`),n.$$.dirty[4]&896&&s(90,et=`select
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
limit 10`),n.$$.dirty[2]&1006632960&&(Ca||!Ct?Ca||(Rt(et,{noResolve:Ca,...ja}),s(91,Ct=!0)):Rt(et,{noResolve:Ca})),n.$$.dirty[2]&1073741824|n.$$.dirty[3]&7&&(Ba||!At?Ba||(Tt(at,{noResolve:Ba,...Ra}),s(95,At=!0)):Tt(at,{noResolve:Ba})),n.$$.dirty[4]&384&&s(97,Ta=M`with distinct_funds as (
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
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`),n.$$.dirty[4]&384&&s(98,tt=`with distinct_funds as (
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
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`),n.$$.dirty[3]&120&&(Ta||!Dt?Ta||(qt(tt,{noResolve:Ta,...Aa}),s(99,Dt=!0)):qt(tt,{noResolve:Ta})),n.$$.dirty[4]&896&&s(101,Da=M`with latest as (
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
order by l.latest_budget desc`),n.$$.dirty[4]&896&&s(102,rt=`with latest as (
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
order by l.latest_budget desc`),n.$$.dirty[3]&1920&&(Da||!St?Da||(Nt(rt,{noResolve:Da,...Ea}),s(103,St=!0)):Nt(rt,{noResolve:Da})),n.$$.dirty[4]&896&&s(105,Ia=M`with latest as (
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
limit 20`),n.$$.dirty[4]&896&&s(106,st=`with latest as (
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
limit 20`),n.$$.dirty[3]&30720&&(Ia||!Yt?Ia||(Lt(st,{noResolve:Ia,...qa}),s(107,Yt=!0)):Lt(st,{noResolve:Ia})),n.$$.dirty[4]&384&&s(109,Na=M`select
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
order by f.fiscal_year, fund_rank`),n.$$.dirty[4]&384&&s(110,nt=`select
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
order by f.fiscal_year, fund_rank`),n.$$.dirty[3]&491520&&(Na||!Mt?Na||(Ut(nt,{noResolve:Na,...Sa}),s(111,Mt=!0)):Ut(nt,{noResolve:Na})),n.$$.dirty[4]&384&&s(113,Ya=M`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
limit 10`),n.$$.dirty[4]&384&&s(114,lt=`select agency_name, sum(amount) as total_budget
from (select
    cast(b.fiscal_year as int) as fiscal_year,
    b.agency_code,
    b.agency_name,
    b.fund_type,
    b.total_budget_amount as amount
from mbtsa.agency_level b
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
limit 10`),n.$$.dirty[3]&7864320&&(Ya||!Vt?Ya||(Pt(lt,{noResolve:Ya,...Ha}),s(115,Vt=!0)):Pt(lt,{noResolve:Ya})),n.$$.dirty[4]&384&&s(117,Ma=M`select
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
order by f.fiscal_year`),n.$$.dirty[4]&384&&s(118,ot=`select
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
order by f.fiscal_year`),n.$$.dirty[3]&125829120&&(Ma||!Ot?Ma||(zt(ot,{noResolve:Ma,...La}),s(119,Ot=!0)):zt(ot,{noResolve:Ma})),n.$$.dirty[4]&384&&s(121,Va=M`select
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
order by agency_name, fiscal_year`),n.$$.dirty[4]&384&&s(122,ct=`select
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
order by agency_name, fiscal_year`),n.$$.dirty[3]&2013265920&&(Va||!Qt?Va||(Xt(ct,{noResolve:Va,...Ua}),s(123,Qt=!0)):Xt(ct,{noResolve:Va})),n.$$.dirty[4]&896&&s(125,Oa=M`with latest as (
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
order by l.latest_budget desc`),n.$$.dirty[4]&896&&s(126,it=`with latest as (
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
order by l.latest_budget desc`),n.$$.dirty[4]&15&&(Oa||!Kt?Oa||(Jt(it,{noResolve:Oa,...Pa}),s(127,Kt=!0)):Jt(it,{noResolve:Oa})),n.$$.dirty[0]&1&&s(34,u=[{id:"agency_name",title:"Agency",align:"left"},{id:"latest_budget",title:`Latest Year (${((g=le==null?void 0:le[0])==null?void 0:g.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&1&&s(33,y=[{id:"fund_type",title:"Fund Type",align:"left"},{id:"latest_budget",title:`Latest Year (${((Ne=le==null?void 0:le[0])==null?void 0:Ne.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&128&&s(32,$=Wt),n.$$.dirty[0]&2&&Lr(ka,"total_budget"),n.$$.dirty[0]&4&&s(31,G=((ye=Fa==null?void 0:Fa[0])==null?void 0:ye.cagr_pct)!=null?Number(Fa[0].cagr_pct).toFixed(1):null),n.$$.dirty[0]&8&&s(30,N=[...new Set(Ja.map(R=>String(R.fiscal_year)))].sort((R,ie)=>Number(R)-Number(ie))),n.$$.dirty[0]&8&&s(11,O=Ja.reduce((R,ie)=>{const pe=ie.fund_type??"Unknown";return R[pe]=(R[pe]||0)+(Number(ie.spend)||0),R},{})),n.$$.dirty[0]&2056&&s(29,J=[...new Set(Ja.map(R=>R.fund_type))].sort((R,ie)=>{const pe=(O[ie]||0)-(O[R]||0);return Math.abs(pe)>1e-6?pe:String(R).localeCompare(String(ie))})),n.$$.dirty[0]&32&&s(28,E=[...new Set((bt??[]).map(R=>String(R.fiscal_year)))].sort((R,ie)=>Number(R)-Number(ie))),n.$$.dirty[0]&16&&(ft??[]).slice(0,3).map(R=>R.agency_name),n.$$.dirty[0]&64&&s(130,H=[...new Set((_t??[]).map(R=>R.fiscal_year))].sort((R,ie)=>R-ie)),n.$$.dirty[0]&64&&s(129,U=Object.values((_t??[]).reduce(function(R,ie){const pe=ie.agency_name;return R[pe]||(R[pe]={agency_name:ie.agency_name}),R[pe]["FY"+ie.fiscal_year]=(R[pe]["FY"+ie.fiscal_year]||0)+ie.spend,R},{}))),n.$$.dirty[0]&256|n.$$.dirty[4]&64&&s(10,v=mt==="3y"?H.slice(-3):mt==="5y"?H.slice(-5):H),n.$$.dirty[0]&512|n.$$.dirty[4]&32&&s(128,Y=dt?U.filter(function(R){return R.agency_name.toLowerCase().includes(dt.toLowerCase())}):U),n.$$.dirty[0]&1024|n.$$.dirty[4]&16&&s(27,p=v.length>0?Y.slice().sort(function(R,ie){const pe="FY"+v[v.length-1];return(ie[pe]||0)-(R[pe]||0)}).map(function(R){return Object.assign({},R,{agency_link:"/budget-office/agencies/"+encodeURIComponent(R.agency_name)})}):Y.map(function(R){return Object.assign({},R,{agency_link:"/budget-office/agencies/"+encodeURIComponent(R.agency_name)})}))},s(41,Z=M`select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year`),s(42,Pe="select distinct fiscal_year as fy from mbtsa.agency_level order by fiscal_year"),s(45,Ae=M`select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type`),s(46,Ke="select distinct fund_type from mbtsa.agency_level where fund_type is not null order by fund_type"),s(49,X=M`select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name`),s(50,Oe="select distinct agency_name from mbtsa.agency_level where agency_name is not null order by agency_name"),s(93,Ba=M`select *
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
) as rules(pattern, fund_rank, fund_color, is_like)`),s(94,at=`select *
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
) as rules(pattern, fund_rank, fund_color, is_like)`),[le,ka,Fa,Ja,ft,bt,_t,Wt,mt,dt,v,O,Ze,Je,Ve,na,Te,Ee,qe,Se,wt,jt,Bt,Et,It,Ht,Gt,p,E,J,N,G,$,y,u,er,Mr,Ur,W,o,de,Z,Pe,Re,He,Ae,Ke,Ue,ke,X,Oe,We,C,V,Ce,ve,ee,oe,se,xe,Q,ne,K,ce,fe,te,Fe,_e,be,me,je,d,l,c,ge,la,sa,ya,$a,Ga,ua,fa,ha,kt,va,xa,Za,xt,ja,Ca,et,Ct,Ra,Ba,at,At,Aa,Ta,tt,Dt,Ea,Da,rt,St,qa,Ia,st,Yt,Sa,Na,nt,Mt,Ha,Ya,lt,Vt,La,Ma,ot,Ot,Ua,Va,ct,Qt,Pa,Oa,it,Kt,Y,U,H,e,a,t,x,T,Vr,Pr,Or,zr,Qr,Xr]}class kn extends ns{constructor(r){super(),ls(this,r,nn,rn,Jr,{data:38},null,[-1,-1,-1,-1,-1,-1,-1])}}export{kn as component};
