import{s as kn,d as _,a as Ft,b as va,i as $,e as Y,f as R,c as v,g as j,h as hn,j as q,k as Fa,m as we,n as Se,l as ja,o as F,p as I,t as qe,q as Hr,r as vn,u as xn,v as jn,w as Fn,x as Ia,y as $t,z as Qr}from"../chunks/scheduler.Dm30zsRM.js";import{S as Cn,i as Rn,d as V,t as k,a as g,c as be,m as U,b as O,e as K,g as pe}from"../chunks/index.CIVCTVMM.js";import{e as Ta,a as Tn,s as En,Q as aa,g as Dn,p as Sn,b as Xr,r as Wr,C as qn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C3c9Relr.js";import{F as In,B as An,T as Bn,a as Nn,C as Ln}from"../chunks/TrendOverview.BKi7AqYa.js";import{D as Yn}from"../chunks/DonutFundSnapshot.C5TQW3pY.js";import{P as Hn,T as Pn}from"../chunks/TrendPivotTable.fB5kw3kT.js";import{w as Mn}from"../chunks/entry.C2LBCJTI.js";import{A as Ct}from"../chunks/Alert.CzSVg8eJ.js";import{h as P}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as zn,a as Pr,b as Mr}from"../chunks/Details.CvvzujXV.js";import{p as Vn}from"../chunks/stores.ttNqFgh2.js";import{G as Un}from"../chunks/Grid.Ck93ieUS.js";import{Q as ta}from"../chunks/QueryViewer.8A6MZmxp.js";import{E as zr}from"../chunks/ECharts.DzikzRDm.js";import{p as On}from"../chunks/profile.BW8tN6E9.js";function Jr(n,o,s){const e=n.slice();return e[246]=o[s][0],e[247]=o[s][1],e}function Zr(n,o,s){const e=n.slice();e[250]=o[s];const a=e[42]===e[250].name;e[251]=a;const t=e[42]!==null;return e[252]=t,e}function eo(n,o,s){const e=n.slice();return e[246]=o[s][0],e[247]=o[s][1],e}function ao(n,o,s){const e=n.slice();e[250]=o[s];const a=e[41]===e[250].name;e[251]=a;const t=e[41]!==null;return e[252]=t,e}function to(n,o,s){const e=n.slice();return e[246]=o[s][0],e[247]=o[s][1],e}function ro(n,o,s){const e=n.slice();return e[246]=o[s][0],e[247]=o[s][1],e}function Kn(n){var a;let o,s=((a=De.og)==null?void 0:a.title)+"",e;return{c(){o=I("h1"),e=qe(s),this.h()},l(t){o=q(t,"H1",{class:!0});var p=we(o);e=Se(p,s),p.forEach(_),this.h()},h(){R(o,"class","title")},m(t,p){$(t,o,p),Y(o,e)},p:Ia,d(t){t&&_(o)}}}function Gn(n){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:Ia,p:Ia,d:Ia}}function Qn(n){var p;let o,s,e,a,t;return document.title=o=(p=De.og)==null?void 0:p.title,{c(){s=F(),e=I("meta"),a=F(),t=I("meta"),this.h()},l(i){s=j(i),e=q(i,"META",{property:!0,content:!0}),a=j(i),t=q(i,"META",{name:!0,content:!0}),this.h()},h(){var i,u;R(e,"property","og:title"),R(e,"content",((i=De.og)==null?void 0:i.title)??De.title),R(t,"name","twitter:title"),R(t,"content",((u=De.og)==null?void 0:u.title)??De.title)},m(i,u){$(i,s,u),$(i,e,u),$(i,a,u),$(i,t,u)},p(i,u){var x;u&0&&o!==(o=(x=De.og)==null?void 0:x.title)&&(document.title=o)},d(i){i&&(_(s),_(e),_(a),_(t))}}}function Xn(n){var t,p;let o,s,e=(De.description||((t=De.og)==null?void 0:t.description))&&Wn(),a=((p=De.og)==null?void 0:p.image)&&Jn();return{c(){e&&e.c(),o=F(),a&&a.c(),s=Fa()},l(i){e&&e.l(i),o=j(i),a&&a.l(i),s=Fa()},m(i,u){e&&e.m(i,u),$(i,o,u),a&&a.m(i,u),$(i,s,u)},p(i,u){var x,D;(De.description||(x=De.og)!=null&&x.description)&&e.p(i,u),(D=De.og)!=null&&D.image&&a.p(i,u)},d(i){i&&(_(o),_(s)),e&&e.d(i),a&&a.d(i)}}}function Wn(n){let o,s,e,a,t;return{c(){o=I("meta"),s=F(),e=I("meta"),a=F(),t=I("meta"),this.h()},l(p){o=q(p,"META",{name:!0,content:!0}),s=j(p),e=q(p,"META",{property:!0,content:!0}),a=j(p),t=q(p,"META",{name:!0,content:!0}),this.h()},h(){var p,i,u;R(o,"name","description"),R(o,"content",De.description??((p=De.og)==null?void 0:p.description)),R(e,"property","og:description"),R(e,"content",((i=De.og)==null?void 0:i.description)??De.description),R(t,"name","twitter:description"),R(t,"content",((u=De.og)==null?void 0:u.description)??De.description)},m(p,i){$(p,o,i),$(p,s,i),$(p,e,i),$(p,a,i),$(p,t,i)},p:Ia,d(p){p&&(_(o),_(s),_(e),_(a),_(t))}}}function Jn(n){let o,s,e;return{c(){o=I("meta"),s=F(),e=I("meta"),this.h()},l(a){o=q(a,"META",{property:!0,content:!0}),s=j(a),e=q(a,"META",{name:!0,content:!0}),this.h()},h(){var a,t;R(o,"property","og:image"),R(o,"content",Xr((a=De.og)==null?void 0:a.image)),R(e,"name","twitter:image"),R(e,"content",Xr((t=De.og)==null?void 0:t.image))},m(a,t){$(a,o,t),$(a,s,t),$(a,e,t)},p:Ia,d(a){a&&(_(o),_(s),_(e))}}}function oo(n){let o,s;return o=new ta({props:{queryID:"g_tower",queryResult:n[25]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&33554432&&(t.queryResult=e[25]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function no(n){let o,s;return o=new ta({props:{queryID:"g_program",queryResult:n[26]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&67108864&&(t.queryResult=e[26]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function so(n){let o,s;return o=new ta({props:{queryID:"g_fund",queryResult:n[27]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&134217728&&(t.queryResult=e[27]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function lo(n){let o,s;return o=new ta({props:{queryID:"filtered",queryResult:n[28]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&268435456&&(t.queryResult=e[28]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function io(n){let o,s;return o=new ta({props:{queryID:"yearly_rollup",queryResult:n[1]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&2&&(t.queryResult=e[1]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function _o(n){let o,s;return o=new ta({props:{queryID:"scope_meta",queryResult:n[29]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&536870912&&(t.queryResult=e[29]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function co(n){let o,s;return o=new ta({props:{queryID:"overview",queryResult:n[2]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&4&&(t.queryResult=e[2]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function uo(n){let o,s;return o=new ta({props:{queryID:"yoy_detail",queryResult:n[30]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&1073741824&&(t.queryResult=e[30]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function mo(n){let o,s;return o=new ta({props:{queryID:"fiscal_overview_cagr",queryResult:n[3]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&8&&(t.queryResult=e[3]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function fo(n){let o,s;return o=new ta({props:{queryID:"filtered_latest",queryResult:n[31]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&1&&(t.queryResult=e[31]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function yo(n){let o,s;return o=new ta({props:{queryID:"fund_profile",queryResult:n[32]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&2&&(t.queryResult=e[32]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function go(n){let o,s;return o=new ta({props:{queryID:"fund_snapshot",queryResult:n[33]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&4&&(t.queryResult=e[33]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function bo(n){let o,s;return o=new ta({props:{queryID:"pareto_towers",queryResult:n[34]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&8&&(t.queryResult=e[34]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function po(n){let o,s;return o=new ta({props:{queryID:"pareto_programs",queryResult:n[35]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&16&&(t.queryResult=e[35]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function wo(n){let o,s;return o=new ta({props:{queryID:"pareto_subprograms",queryResult:n[36]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&32&&(t.queryResult=e[36]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function $o(n){let o,s;return o=new ta({props:{queryID:"tower_movers",queryResult:n[4]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&16&&(t.queryResult=e[4]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ko(n){let o,s;return o=new ta({props:{queryID:"program_movers",queryResult:n[5]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&32&&(t.queryResult=e[5]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ho(n){let o,s;return o=new ta({props:{queryID:"subprogram_movers",queryResult:n[6]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&64&&(t.queryResult=e[6]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function vo(n){let o,s;return o=new ta({props:{queryID:"tower_latest",queryResult:n[37]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&64&&(t.queryResult=e[37]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function xo(n){let o,s;return o=new ta({props:{queryID:"program_latest",queryResult:n[38]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&128&&(t.queryResult=e[38]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function jo(n){let o,s;return o=new ta({props:{queryID:"subprogram_latest",queryResult:n[39]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&256&&(t.queryResult=e[39]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function Fo(n){let o,s;return o=new ta({props:{queryID:"fund_trend",queryResult:n[7]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&128&&(t.queryResult=e[7]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function Co(n){let o,s;return o=new ta({props:{queryID:"pivot_towers",queryResult:n[8]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&256&&(t.queryResult=e[8]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function Ro(n){let o,s;return o=new ta({props:{queryID:"pivot_programs",queryResult:n[9]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&512&&(t.queryResult=e[9]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function To(n){let o,s;return o=new ta({props:{queryID:"pivot_subprograms",queryResult:n[10]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&1024&&(t.queryResult=e[10]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function Eo(n){let o,s;return o=new ta({props:{queryID:"pivot_cost_pools",queryResult:n[11]}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&2048&&(t.queryResult=e[11]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function Do(n){let o,s,e,a,t;function p(){return n[180](n[246])}return{c(){o=I("button"),s=qe(n[247]),this.h()},l(i){o=q(i,"BUTTON",{style:!0});var u=we(o);s=Se(u,n[247]),u.forEach(_),this.h()},h(){R(o,"style",e="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[12]===n[246]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[12]===n[246]?"#ffffff":"#211030")+"; font-weight: "+(n[12]===n[246]?700:500))},m(i,u){$(i,o,u),Y(o,s),a||(t=$t(o,"click",p),a=!0)},p(i,u){n=i,u[0]&4096&&e!==(e="padding:7px 18px; font-size:0.875rem; cursor:pointer; border:none; border-right: 1px solid #c9a8f0; background: "+(n[12]===n[246]?"#802cd7":"rgba(255,255,255,0.6)")+"; color: "+(n[12]===n[246]?"#ffffff":"#211030")+"; font-weight: "+(n[12]===n[246]?700:500))&&R(o,"style",e)},d(i){i&&_(o),a=!1,t()}}}function Zn(n){let o,s;return o=new Mr({props:{value:"%",valueLabel:"All Towers"}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p:Ia,i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function es(n){let o,s;return o=new Mr({props:{value:"%",valueLabel:"All Programs"}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p:Ia,i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function as(n){let o,s;return o=new Mr({props:{value:"%",valueLabel:"All Fund Types"}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p:Ia,i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ts(n){let o,s,e,a,t,p;return o=new Pr({props:{name:"f_tower",data:n[25],value:"it_tower",title:"IT Tower",defaultValue:"%",$$slots:{default:[Zn]},$$scope:{ctx:n}}}),e=new Pr({props:{name:"f_program",data:n[26],value:"program_name",title:"Program",defaultValue:"%",$$slots:{default:[es]},$$scope:{ctx:n}}}),t=new Pr({props:{name:"f_fund",data:n[27],value:"fund_type",title:"Fund Type",defaultValue:"%",$$slots:{default:[as]},$$scope:{ctx:n}}}),{c(){K(o.$$.fragment),s=F(),K(e.$$.fragment),a=F(),K(t.$$.fragment)},l(i){O(o.$$.fragment,i),s=j(i),O(e.$$.fragment,i),a=j(i),O(t.$$.fragment,i)},m(i,u){U(o,i,u),$(i,s,u),U(e,i,u),$(i,a,u),U(t,i,u),p=!0},p(i,u){const x={};u[0]&33554432&&(x.data=i[25]),u[8]&32768&&(x.$$scope={dirty:u,ctx:i}),o.$set(x);const D={};u[0]&67108864&&(D.data=i[26]),u[8]&32768&&(D.$$scope={dirty:u,ctx:i}),e.$set(D);const ee={};u[0]&134217728&&(ee.data=i[27]),u[8]&32768&&(ee.$$scope={dirty:u,ctx:i}),t.$set(ee)},i(i){p||(g(o.$$.fragment,i),g(e.$$.fragment,i),g(t.$$.fragment,i),p=!0)},o(i){k(o.$$.fragment,i),k(e.$$.fragment,i),k(t.$$.fragment,i),p=!1},d(i){i&&(_(s),_(a)),V(o,i),V(e,i),V(t,i)}}}function rs(n){let o,s;return o=new Un({props:{cols:"3",$$slots:{default:[ts]},$$scope:{ctx:n}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&234881024|a[8]&32768&&(t.$$scope={dirty:a,ctx:e}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function So(n){var Ee,He,ue,We;let o,s,e=(((He=(Ee=n[2])==null?void 0:Ee[0])==null?void 0:He.max_year_label)??"")+"",a,t,p,i,u,x="Latest Year IT Spend",D,ee,fe=n[181]()+"",M,A,Z,B,H="YoY Change",$e,me,S=n[182]()+"",ae,Q,L,oe,na=((We=(ue=n[2])==null?void 0:ue[0])==null?void 0:We.yoy_pct)!=null?(n[2][0].yoy_pct>=0?"+":"")+n[2][0].yoy_pct+"%":"—",sa,Ve,$a,fa,Be,ra,X,Ue='<a href="#it-spend-drilldown">IT Spend Drilldown</a>',ke,xe,_a="Click a tower to drill into programs, then click a program to drill into subprograms.",c,la,Me,ya,Ne,G,r,Oe='<a href="#fund-type-share--latest-year">Fund Type Share — Latest Year</a>',ga,de,Ke,ze,ka,b,T,te='<a href="#it-spend-changes--year-over-year">IT Spend Changes — Year over Year</a>',ea,oa,ia,J,ba,ca,wa,Ie,Le,ne,je='<a href="#latest-year--it-tower--program--subprogram">Latest Year — IT Tower · Program · Subprogram</a>',Fe,le,ie,Ce,ye,re;const Ye=[ns,os],ge=[];function Ge(f,C){var W;return((W=f[34])==null?void 0:W.length)>0?0:1}la=Ge(n),Me=ge[la]=Ye[la](n);const Qe=[is,ls],_e=[];function Re(f,C){var W;return((W=f[33])==null?void 0:W.length)>0?0:1}de=Re(n),Ke=_e[de]=Qe[de](n);let Ae=Ta([["tower","IT Towers"],["program","Programs"],["subprogram","Subprograms"]]),ce=[];for(let f=0;f<3;f+=1)ce[f]=qo(to(n,Ae,f));J=new Ct({props:{status:"info",$$slots:{default:[cs]},$$scope:{ctx:n}}}),ca=new An({props:{data:n[51],labelField:"label",title:n[50],height:"480px",limit:10}});const Xe=[us,ds],he=[];function Te(f,C){var W;return((W=f[37])==null?void 0:W.length)>0?0:1}return le=Te(n),ie=he[le]=Xe[le](n),{c(){o=I("p"),s=qe("Latest Year FY"),a=qe(e),t=F(),p=I("div"),i=I("div"),u=I("div"),u.textContent=x,D=F(),ee=I("div"),M=qe(fe),A=F(),Z=I("div"),B=I("div"),B.textContent=H,$e=F(),me=I("div"),ae=qe(S),L=F(),oe=I("div"),sa=qe(na),fa=F(),Be=I("hr"),ra=F(),X=I("h2"),X.innerHTML=Ue,ke=F(),xe=I("div"),xe.textContent=_a,c=F(),Me.c(),ya=F(),Ne=I("hr"),G=F(),r=I("h2"),r.innerHTML=Oe,ga=F(),Ke.c(),ze=F(),ka=I("hr"),b=F(),T=I("h2"),T.innerHTML=te,ea=F(),oa=I("div");for(let f=0;f<3;f+=1)ce[f].c();ia=F(),K(J.$$.fragment),ba=F(),K(ca.$$.fragment),wa=F(),Ie=I("hr"),Le=F(),ne=I("h2"),ne.innerHTML=je,Fe=F(),ie.c(),Ce=F(),ye=I("hr"),this.h()},l(f){o=q(f,"P",{style:!0});var C=we(o);s=Se(C,"Latest Year FY"),a=Se(C,e),C.forEach(_),t=j(f),p=q(f,"DIV",{style:!0});var W=we(p);i=q(W,"DIV",{style:!0});var se=we(i);u=q(se,"DIV",{style:!0,"data-svelte-h":!0}),ja(u)!=="svelte-azrrk5"&&(u.textContent=x),D=j(se),ee=q(se,"DIV",{style:!0});var ve=we(ee);M=Se(ve,fe),ve.forEach(_),se.forEach(_),A=j(W),Z=q(W,"DIV",{style:!0});var da=we(Z);B=q(da,"DIV",{style:!0,"data-svelte-h":!0}),ja(B)!=="svelte-14nbeix"&&(B.textContent=H),$e=j(da),me=q(da,"DIV",{style:!0});var l=we(me);ae=Se(l,S),l.forEach(_),L=j(da),oe=q(da,"DIV",{style:!0});var y=we(oe);sa=Se(y,na),y.forEach(_),da.forEach(_),W.forEach(_),fa=j(f),Be=q(f,"HR",{class:!0}),ra=j(f),X=q(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(X)!=="svelte-v7ko48"&&(X.innerHTML=Ue),ke=j(f),xe=q(f,"DIV",{style:!0,"data-svelte-h":!0}),ja(xe)!=="svelte-101dzht"&&(xe.textContent=_a),c=j(f),Me.l(f),ya=j(f),Ne=q(f,"HR",{class:!0}),G=j(f),r=q(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(r)!=="svelte-mh3y52"&&(r.innerHTML=Oe),ga=j(f),Ke.l(f),ze=j(f),ka=q(f,"HR",{class:!0}),b=j(f),T=q(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(T)!=="svelte-zmr6z2"&&(T.innerHTML=te),ea=j(f),oa=q(f,"DIV",{style:!0});var Pe=we(oa);for(let ua=0;ua<3;ua+=1)ce[ua].l(Pe);Pe.forEach(_),ia=j(f),O(J.$$.fragment,f),ba=j(f),O(ca.$$.fragment,f),wa=j(f),Ie=q(f,"HR",{class:!0}),Le=j(f),ne=q(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(ne)!=="svelte-dnoaem"&&(ne.innerHTML=je),Fe=j(f),ie.l(f),Ce=j(f),ye=q(f,"HR",{class:!0}),this.h()},h(){var f,C,W,se,ve,da;v(o,"font-size","1.1rem"),v(o,"font-weight","700"),v(o,"color","#231F20"),v(o,"margin","16px 0 16px 0"),v(u,"font-size","11px"),v(u,"font-weight","500"),v(u,"color","#6B7280"),v(u,"text-transform","uppercase"),v(u,"letter-spacing",".05em"),v(u,"margin-bottom","6px"),v(ee,"font-size","1.8rem"),v(ee,"font-weight","700"),v(ee,"color","#231F20"),v(i,"background","var(--nxt-surface)"),v(i,"border","1px solid var(--nxt-border)"),v(i,"border-left","4px solid #C8122C"),v(i,"border-radius","8px"),v(i,"padding","16px 28px"),v(i,"min-width","200px"),v(i,"text-align","center"),v(B,"font-size","11px"),v(B,"font-weight","500"),v(B,"color","#6B7280"),v(B,"text-transform","uppercase"),v(B,"letter-spacing",".05em"),v(B,"margin-bottom","6px"),R(me,"style",Q="font-size:1.8rem; font-weight:700; color:"+((((C=(f=n[2])==null?void 0:f[0])==null?void 0:C.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),R(oe,"style",Ve="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((se=(W=n[2])==null?void 0:W[0])==null?void 0:se.yoy_pct)??0)>=0?"#1A7340":"#C8122C")),R(Z,"style",$a="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((da=(ve=n[2])==null?void 0:ve[0])==null?void 0:da.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"),v(p,"display","flex"),v(p,"justify-content","center"),v(p,"gap","16px"),v(p,"flex-wrap","wrap"),v(p,"margin","16px 0"),R(Be,"class","markdown"),R(X,"class","markdown"),R(X,"id","it-spend-drilldown"),v(xe,"margin","8px 0 14px 0"),v(xe,"color","#6B7280"),v(xe,"font-size","0.9rem"),R(Ne,"class","markdown"),R(r,"class","markdown"),R(r,"id","fund-type-share--latest-year"),R(ka,"class","markdown"),R(T,"class","markdown"),R(T,"id","it-spend-changes--year-over-year"),v(oa,"display","flex"),v(oa,"gap","8px"),v(oa,"margin","8px 0 14px 0"),R(Ie,"class","markdown"),R(ne,"class","markdown"),R(ne,"id","latest-year--it-tower--program--subprogram"),R(ye,"class","markdown")},m(f,C){$(f,o,C),Y(o,s),Y(o,a),$(f,t,C),$(f,p,C),Y(p,i),Y(i,u),Y(i,D),Y(i,ee),Y(ee,M),Y(p,A),Y(p,Z),Y(Z,B),Y(Z,$e),Y(Z,me),Y(me,ae),Y(Z,L),Y(Z,oe),Y(oe,sa),$(f,fa,C),$(f,Be,C),$(f,ra,C),$(f,X,C),$(f,ke,C),$(f,xe,C),$(f,c,C),ge[la].m(f,C),$(f,ya,C),$(f,Ne,C),$(f,G,C),$(f,r,C),$(f,ga,C),_e[de].m(f,C),$(f,ze,C),$(f,ka,C),$(f,b,C),$(f,T,C),$(f,ea,C),$(f,oa,C);for(let W=0;W<3;W+=1)ce[W]&&ce[W].m(oa,null);$(f,ia,C),U(J,f,C),$(f,ba,C),U(ca,f,C),$(f,wa,C),$(f,Ie,C),$(f,Le,C),$(f,ne,C),$(f,Fe,C),he[le].m(f,C),$(f,Ce,C),$(f,ye,C),re=!0},p(f,C){var y,Pe,ua,Je,Ca,qa,xa,Da,Aa,kt;(!re||C[0]&4)&&e!==(e=(((Pe=(y=f[2])==null?void 0:y[0])==null?void 0:Pe.max_year_label)??"")+"")&&va(a,e),(!re||C[0]&4)&&fe!==(fe=f[181]()+"")&&va(M,fe),(!re||C[0]&4)&&S!==(S=f[182]()+"")&&va(ae,S),(!re||C[0]&4&&Q!==(Q="font-size:1.8rem; font-weight:700; color:"+((((Je=(ua=f[2])==null?void 0:ua[0])==null?void 0:Je.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&R(me,"style",Q),(!re||C[0]&4)&&na!==(na=((qa=(Ca=f[2])==null?void 0:Ca[0])==null?void 0:qa.yoy_pct)!=null?(f[2][0].yoy_pct>=0?"+":"")+f[2][0].yoy_pct+"%":"—")&&va(sa,na),(!re||C[0]&4&&Ve!==(Ve="font-size:0.95rem; font-weight:500; margin-top:2px; color:"+((((Da=(xa=f[2])==null?void 0:xa[0])==null?void 0:Da.yoy_pct)??0)>=0?"#1A7340":"#C8122C")))&&R(oe,"style",Ve),(!re||C[0]&4&&$a!==($a="background:var(--nxt-surface); border:1px solid var(--nxt-border); border-left:4px solid "+((((kt=(Aa=f[2])==null?void 0:Aa[0])==null?void 0:kt.yoy_pct)??0)>=0?"#2EAD6B":"#C8122C")+"; border-radius:8px; padding:16px 28px; min-width:200px; text-align:center;"))&&R(Z,"style",$a);let W=la;la=Ge(f),la===W?ge[la].p(f,C):(pe(),k(ge[W],1,1,()=>{ge[W]=null}),be(),Me=ge[la],Me?Me.p(f,C):(Me=ge[la]=Ye[la](f),Me.c()),g(Me,1),Me.m(ya.parentNode,ya));let se=de;if(de=Re(f),de===se?_e[de].p(f,C):(pe(),k(_e[se],1,1,()=>{_e[se]=null}),be(),Ke=_e[de],Ke?Ke.p(f,C):(Ke=_e[de]=Qe[de](f),Ke.c()),g(Ke,1),Ke.m(ze.parentNode,ze)),C[0]&8192){Ae=Ta([["tower","IT Towers"],["program","Programs"],["subprogram","Subprograms"]]);let ha;for(ha=0;ha<3;ha+=1){const ht=to(f,Ae,ha);ce[ha]?ce[ha].p(ht,C):(ce[ha]=qo(ht),ce[ha].c(),ce[ha].m(oa,null))}for(;ha<3;ha+=1)ce[ha].d(1)}const ve={};C[1]&262144|C[8]&32768&&(ve.$$scope={dirty:C,ctx:f}),J.$set(ve);const da={};C[1]&1048576&&(da.data=f[51]),C[1]&524288&&(da.title=f[50]),ca.$set(da);let l=le;le=Te(f),le===l?he[le].p(f,C):(pe(),k(he[l],1,1,()=>{he[l]=null}),be(),ie=he[le],ie?ie.p(f,C):(ie=he[le]=Xe[le](f),ie.c()),g(ie,1),ie.m(Ce.parentNode,Ce))},i(f){re||(g(Me),g(Ke),g(J.$$.fragment,f),g(ca.$$.fragment,f),g(ie),re=!0)},o(f){k(Me),k(Ke),k(J.$$.fragment,f),k(ca.$$.fragment,f),k(ie),re=!1},d(f){f&&(_(o),_(t),_(p),_(fa),_(Be),_(ra),_(X),_(ke),_(xe),_(c),_(ya),_(Ne),_(G),_(r),_(ga),_(ze),_(ka),_(b),_(T),_(ea),_(oa),_(ia),_(ba),_(wa),_(Ie),_(Le),_(ne),_(Fe),_(Ce),_(ye)),ge[la].d(f),_e[de].d(f),Ft(ce,f),V(J,f),V(ca,f),he[le].d(f)}}}function os(n){let o,s;return o=new Ct({props:{status:"warning",$$slots:{default:[ss]},$$scope:{ctx:n}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[8]&32768&&(t.$$scope={dirty:a,ctx:e}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ns(n){let o,s;return o=new Nn({props:{title:"",drillable:!0,drillUnitData:n[34],drillProgramData:n[35],drillSubprogramData:n[36],barField:"spend",labelField:"label",pctField:"pct_of_total",cumulativeField:"cumulative",totalField:"grand_total",height:"420px"}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&8&&(t.drillUnitData=e[34]),a[1]&16&&(t.drillProgramData=e[35]),a[1]&32&&(t.drillSubprogramData=e[36]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ss(n){let o;return{c(){o=qe("No data available for this selection.")},l(s){o=Se(s,"No data available for this selection.")},m(s,e){$(s,o,e)},d(s){s&&_(o)}}}function ls(n){let o,s;return o=new Ct({props:{status:"warning",$$slots:{default:[_s]},$$scope:{ctx:n}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[8]&32768&&(t.$$scope={dirty:a,ctx:e}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function is(n){let o,s,e,a;return o=new Yn({props:{data:n[33],fund_profile:n[32],title:"",height:"380px",nameField:"fund_type",valueField:"latest_budget",pctField:"latest_year_pct"}}),e=new Ln({props:{data:n[33],columns:n[53],search:!1,defaultSort:"latest_budget",defaultDir:-1}}),{c(){K(o.$$.fragment),s=F(),K(e.$$.fragment)},l(t){O(o.$$.fragment,t),s=j(t),O(e.$$.fragment,t)},m(t,p){U(o,t,p),$(t,s,p),U(e,t,p),a=!0},p(t,p){const i={};p[1]&4&&(i.data=t[33]),p[1]&2&&(i.fund_profile=t[32]),o.$set(i);const u={};p[1]&4&&(u.data=t[33]),p[1]&4194304&&(u.columns=t[53]),e.$set(u)},i(t){a||(g(o.$$.fragment,t),g(e.$$.fragment,t),a=!0)},o(t){k(o.$$.fragment,t),k(e.$$.fragment,t),a=!1},d(t){t&&_(s),V(o,t),V(e,t)}}}function _s(n){let o;return{c(){o=qe("No fund type data available for this selection.")},l(s){o=Se(s,"No fund type data available for this selection.")},m(s,e){$(s,o,e)},d(s){s&&_(o)}}}function qo(n){let o,s,e,a,t;function p(){return n[183](n[246])}return{c(){o=I("button"),s=qe(n[247]),this.h()},l(i){o=q(i,"BUTTON",{style:!0});var u=we(o);s=Se(u,n[247]),u.forEach(_),this.h()},h(){R(o,"style",e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[13]===n[246]?"2px solid #C8122C":"1px solid rgba(36,41,46,0.06)")+"; background: "+(n[13]===n[246]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"white")+"; color: "+(n[13]===n[246]?"#C8122C":"#231F20")+"; font-weight: "+(n[13]===n[246]?700:500))},m(i,u){$(i,o,u),Y(o,s),a||(t=$t(o,"click",p),a=!0)},p(i,u){n=i,u[0]&8192&&e!==(e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[13]===n[246]?"2px solid #C8122C":"1px solid rgba(36,41,46,0.06)")+"; background: "+(n[13]===n[246]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"white")+"; color: "+(n[13]===n[246]?"#C8122C":"#231F20")+"; font-weight: "+(n[13]===n[246]?700:500))&&R(o,"style",e)},d(i){i&&_(o),a=!1,t()}}}function cs(n){let o;return{c(){o=qe(n[49])},l(s){o=Se(s,n[49])},m(s,e){$(s,o,e)},p(s,e){e[1]&262144&&va(o,s[49])},d(s){s&&_(o)}}}function ds(n){let o,s;return o=new Ct({props:{status:"warning",$$slots:{default:[ms]},$$scope:{ctx:n}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[8]&32768&&(t.$$scope={dirty:a,ctx:e}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function us(n){var e,a;let o,s;return o=new Hn({props:{unitData:n[37],programData:n[38],subprogramData:n[39],unitKey:"it_tower",programKey:"program_name",subprogramKey:"subprogram_name",unitLabel:"IT Tower",latestYearLabel:((a=(e=n[2])==null?void 0:e[0])==null?void 0:a.max_year_label)??""}}),{c(){K(o.$$.fragment)},l(t){O(o.$$.fragment,t)},m(t,p){U(o,t,p),s=!0},p(t,p){var u,x;const i={};p[1]&64&&(i.unitData=t[37]),p[1]&128&&(i.programData=t[38]),p[1]&256&&(i.subprogramData=t[39]),p[0]&4&&(i.latestYearLabel=((x=(u=t[2])==null?void 0:u[0])==null?void 0:x.max_year_label)??""),o.$set(i)},i(t){s||(g(o.$$.fragment,t),s=!0)},o(t){k(o.$$.fragment,t),s=!1},d(t){V(o,t)}}}function ms(n){let o;return{c(){o=qe("No latest year data available for this selection.")},l(s){o=Se(s,"No latest year data available for this selection.")},m(s,e){$(s,o,e)},d(s){s&&_(o)}}}function Io(n){let o,s='<a href="#fiscal-overview">Fiscal Overview</a>',e,a,t,p,i,u,x,D,ee='<a href="#top-it-towers-by-spend-over-time">Top IT Towers by Spend Over Time</a>',fe,M,A,Z,B,H,$e,me,S='<a href="#cost-pool-composition-over-time">Cost Pool Composition Over Time</a>',ae,Q,L,oe,na,sa,Ve,$a='<a href="#it-tower--program--subprogram-drill-down">IT Tower · Program · Subprogram Drill-Down</a>',fa,Be,ra,X,Ue,ke,xe,_a,c,la,Me;a=new Bn({props:{yearly:n[1],yoyDetail:n[30],fiscalOverviewCagr:n[3],cagrPct:n[54],chartHeight:"320px"}});let ya=Ta(n[48]),Ne=[];for(let b=0;b<ya.length;b+=1)Ne[b]=No(ao(n,ya,b));Z=new zr({props:{height:"460px",config:{tooltip:{trigger:"axis",formatter:n[185]},legend:{show:!1},grid:{left:64,right:80,top:12,bottom:32},xAxis:{type:"category",data:n[20],axisLabel:{formatter:Vo}},yAxis:{type:"value",axisLabel:{formatter:n[186]},splitLine:{lineStyle:{color:"#e2d9f3"}}},series:n[21].map(n[187])}}});const G=[ys,fs],r=[];function Oe(b,T){var te;return((te=b[11])==null?void 0:te.length)>0?0:1}Q=Oe(n),L=r[Q]=G[Q](n);let ga=Ta([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]),de=[];for(let b=0;b<3;b+=1)de[b]=zo(Jr(n,ga,b));const Ke=[$s,ws],ze=[];function ka(b,T){var te;return((te=b[17])==null?void 0:te.length)>0?0:1}return ke=ka(n),xe=ze[ke]=Ke[ke](n),{c(){o=I("h2"),o.innerHTML=s,e=F(),K(a.$$.fragment),t=F(),p=I("hr"),i=F(),u=I("hr"),x=F(),D=I("h2"),D.innerHTML=ee,fe=F(),M=I("div");for(let b=0;b<Ne.length;b+=1)Ne[b].c();A=F(),K(Z.$$.fragment),B=F(),H=I("hr"),$e=F(),me=I("h2"),me.innerHTML=S,ae=F(),L.c(),oe=F(),na=I("hr"),sa=F(),Ve=I("h2"),Ve.innerHTML=$a,fa=F(),Be=I("div");for(let b=0;b<3;b+=1)de[b].c();ra=F(),X=I("input"),Ue=F(),xe.c(),_a=Fa(),this.h()},l(b){o=q(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(o)!=="svelte-1d7gdnx"&&(o.innerHTML=s),e=j(b),O(a.$$.fragment,b),t=j(b),p=q(b,"HR",{class:!0}),i=j(b),u=q(b,"HR",{class:!0}),x=j(b),D=q(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(D)!=="svelte-1sgknww"&&(D.innerHTML=ee),fe=j(b),M=q(b,"DIV",{style:!0});var T=we(M);for(let ea=0;ea<Ne.length;ea+=1)Ne[ea].l(T);T.forEach(_),A=j(b),O(Z.$$.fragment,b),B=j(b),H=q(b,"HR",{class:!0}),$e=j(b),me=q(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(me)!=="svelte-kkfzes"&&(me.innerHTML=S),ae=j(b),L.l(b),oe=j(b),na=q(b,"HR",{class:!0}),sa=j(b),Ve=q(b,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ja(Ve)!=="svelte-a3kzn2"&&(Ve.innerHTML=$a),fa=j(b),Be=q(b,"DIV",{style:!0});var te=we(Be);for(let ea=0;ea<3;ea+=1)de[ea].l(te);te.forEach(_),ra=j(b),X=q(b,"INPUT",{placeholder:!0,style:!0}),Ue=j(b),xe.l(b),_a=Fa(),this.h()},h(){R(o,"class","markdown"),R(o,"id","fiscal-overview"),R(p,"class","markdown"),R(u,"class","markdown"),R(D,"class","markdown"),R(D,"id","top-it-towers-by-spend-over-time"),v(M,"display","flex"),v(M,"flex-wrap","wrap"),v(M,"gap","8px"),v(M,"margin-bottom","16px"),R(H,"class","markdown"),R(me,"class","markdown"),R(me,"id","cost-pool-composition-over-time"),R(na,"class","markdown"),R(Ve,"class","markdown"),R(Ve,"id","it-tower--program--subprogram-drill-down"),v(Be,"display","flex"),v(Be,"gap","8px"),v(Be,"margin","8px 0 14px 0"),R(X,"placeholder","Search towers, programs, subprograms..."),v(X,"border","1px solid #D9DDE3"),v(X,"border-radius","8px"),v(X,"padding","8px 12px"),v(X,"font-size","0.9rem"),v(X,"width","320px"),v(X,"margin-bottom","12px")},m(b,T){$(b,o,T),$(b,e,T),U(a,b,T),$(b,t,T),$(b,p,T),$(b,i,T),$(b,u,T),$(b,x,T),$(b,D,T),$(b,fe,T),$(b,M,T);for(let te=0;te<Ne.length;te+=1)Ne[te]&&Ne[te].m(M,null);$(b,A,T),U(Z,b,T),$(b,B,T),$(b,H,T),$(b,$e,T),$(b,me,T),$(b,ae,T),r[Q].m(b,T),$(b,oe,T),$(b,na,T),$(b,sa,T),$(b,Ve,T),$(b,fa,T),$(b,Be,T);for(let te=0;te<3;te+=1)de[te]&&de[te].m(Be,null);$(b,ra,T),$(b,X,T),Qr(X,n[15]),$(b,Ue,T),ze[ke].m(b,T),$(b,_a,T),c=!0,la||(Me=$t(X,"input",n[197]),la=!0)},p(b,T){const te={};if(T[0]&2&&(te.yearly=b[1]),T[0]&1073741824&&(te.yoyDetail=b[30]),T[0]&8&&(te.fiscalOverviewCagr=b[3]),T[1]&8388608&&(te.cagrPct=b[54]),a.$set(te),T[1]&100795392){ya=Ta(b[48]);let J;for(J=0;J<ya.length;J+=1){const ba=ao(b,ya,J);Ne[J]?Ne[J].p(ba,T):(Ne[J]=No(ba),Ne[J].c(),Ne[J].m(M,null))}for(;J<Ne.length;J+=1)Ne[J].d(1);Ne.length=ya.length}const ea={};T[0]&3670016|T[1]&17408&&(ea.config={tooltip:{trigger:"axis",formatter:b[185]},legend:{show:!1},grid:{left:64,right:80,top:12,bottom:32},xAxis:{type:"category",data:b[20],axisLabel:{formatter:Vo}},yAxis:{type:"value",axisLabel:{formatter:b[186]},splitLine:{lineStyle:{color:"#e2d9f3"}}},series:b[21].map(b[187])}),Z.$set(ea);let oa=Q;if(Q=Oe(b),Q===oa?r[Q].p(b,T):(pe(),k(r[oa],1,1,()=>{r[oa]=null}),be(),L=r[Q],L?L.p(b,T):(L=r[Q]=G[Q](b),L.c()),g(L,1),L.m(oe.parentNode,oe)),T[0]&16384){ga=Ta([["3y","Last 3 Years"],["5y","Last 5 Years"],["all","All Years"]]);let J;for(J=0;J<3;J+=1){const ba=Jr(b,ga,J);de[J]?de[J].p(ba,T):(de[J]=zo(ba),de[J].c(),de[J].m(Be,null))}for(;J<3;J+=1)de[J].d(1)}T[0]&32768&&X.value!==b[15]&&Qr(X,b[15]);let ia=ke;ke=ka(b),ke===ia?ze[ke].p(b,T):(pe(),k(ze[ia],1,1,()=>{ze[ia]=null}),be(),xe=ze[ke],xe?xe.p(b,T):(xe=ze[ke]=Ke[ke](b),xe.c()),g(xe,1),xe.m(_a.parentNode,_a))},i(b){c||(g(a.$$.fragment,b),g(Z.$$.fragment,b),g(L),g(xe),c=!0)},o(b){k(a.$$.fragment,b),k(Z.$$.fragment,b),k(L),k(xe),c=!1},d(b){b&&(_(o),_(e),_(t),_(p),_(i),_(u),_(x),_(D),_(fe),_(M),_(A),_(B),_(H),_($e),_(me),_(ae),_(oe),_(na),_(sa),_(Ve),_(fa),_(Be),_(ra),_(X),_(Ue),_(_a)),V(a,b),Ft(Ne,b),V(Z,b),r[Q].d(b),Ft(de,b),ze[ke].d(b),la=!1,Me()}}}function Ao(n){let o,s=n[56](n[250].latest)+"",e,a,t,p=n[250].yoy!==null&&Bo(n);return{c(){o=I("span"),e=qe(s),a=F(),p&&p.c(),t=Fa(),this.h()},l(i){o=q(i,"SPAN",{style:!0});var u=we(o);e=Se(u,s),u.forEach(_),a=j(i),p&&p.l(i),t=Fa(),this.h()},h(){v(o,"font-size","0.8rem"),v(o,"font-weight","700"),v(o,"color","#211030")},m(i,u){$(i,o,u),Y(o,e),$(i,a,u),p&&p.m(i,u),$(i,t,u)},p(i,u){u[1]&131072&&s!==(s=i[56](i[250].latest)+"")&&va(e,s),i[250].yoy!==null?p?p.p(i,u):(p=Bo(i),p.c(),p.m(t.parentNode,t)):p&&(p.d(1),p=null)},d(i){i&&(_(o),_(a),_(t)),p&&p.d(i)}}}function Bo(n){let o,s=n[250].yoy>=0?"↑":"↓",e,a=Math.abs(n[250].yoy).toFixed(1)+"",t,p,i;return{c(){o=I("span"),e=qe(s),t=qe(a),p=qe("%"),this.h()},l(u){o=q(u,"SPAN",{style:!0});var x=we(o);e=Se(x,s),t=Se(x,a),p=Se(x,"%"),x.forEach(_),this.h()},h(){R(o,"style",i="font-size:0.75rem; font-weight:600; color:"+(n[250].yoy>=0?"#1A7340":"#C8122C"))},m(u,x){$(u,o,x),Y(o,e),Y(o,t),Y(o,p)},p(u,x){x[1]&131072&&s!==(s=u[250].yoy>=0?"↑":"↓")&&va(e,s),x[1]&131072&&a!==(a=Math.abs(u[250].yoy).toFixed(1)+"")&&va(t,a),x[1]&131072&&i!==(i="font-size:0.75rem; font-weight:600; color:"+(u[250].yoy>=0?"#1A7340":"#C8122C"))&&R(o,"style",i)},d(u){u&&_(o)}}}function No(n){let o,s,e,a,t,p=n[250].name+"",i,u,x,D,ee,fe,M,A=n[251]&&Ao(n);function Z(){return n[184](n[250])}return{c(){o=I("button"),s=I("span"),a=F(),t=I("span"),i=qe(p),x=F(),A&&A.c(),D=F(),this.h()},l(B){o=q(B,"BUTTON",{style:!0});var H=we(o);s=q(H,"SPAN",{style:!0}),we(s).forEach(_),a=j(H),t=q(H,"SPAN",{style:!0});var $e=we(t);i=Se($e,p),$e.forEach(_),x=j(H),A&&A.l(H),D=j(H),H.forEach(_),this.h()},h(){R(s,"style",e="width:10px; height:10px; border-radius:50%; background:"+n[250].color+"; display:inline-block; flex-shrink:0;"),R(t,"style",u="font-size:0.875rem; font-weight:"+(n[251]?700:500)+"; color:#211030;"),R(o,"style",ee=`
                display:inline-flex; align-items:center; gap:8px;
                padding:7px 14px; border-radius:20px; cursor:pointer;
                border: ${n[251]?"2px solid "+n[250].color:"1px solid var(--nxt-border)"};
                background: ${n[251]?"white":"var(--nxt-surface)"};
                opacity: ${n[252]&&!n[251]?.4:1};
                box-shadow: ${n[251]?"0 2px 8px rgba(0,0,0,0.10)":"none"};
                transition: all 0.15s ease;
            `)},m(B,H){$(B,o,H),Y(o,s),Y(o,a),Y(o,t),Y(t,i),Y(o,x),A&&A.m(o,null),Y(o,D),fe||(M=$t(o,"click",Z),fe=!0)},p(B,H){n=B,H[1]&131072&&e!==(e="width:10px; height:10px; border-radius:50%; background:"+n[250].color+"; display:inline-block; flex-shrink:0;")&&R(s,"style",e),H[1]&131072&&p!==(p=n[250].name+"")&&va(i,p),H[1]&132096&&u!==(u="font-size:0.875rem; font-weight:"+(n[251]?700:500)+"; color:#211030;")&&R(t,"style",u),n[251]?A?A.p(n,H):(A=Ao(n),A.c(),A.m(o,D)):A&&(A.d(1),A=null),H[1]&132096&&ee!==(ee=`
                display:inline-flex; align-items:center; gap:8px;
                padding:7px 14px; border-radius:20px; cursor:pointer;
                border: ${n[251]?"2px solid "+n[250].color:"1px solid var(--nxt-border)"};
                background: ${n[251]?"white":"var(--nxt-surface)"};
                opacity: ${n[252]&&!n[251]?.4:1};
                box-shadow: ${n[251]?"0 2px 8px rgba(0,0,0,0.10)":"none"};
                transition: all 0.15s ease;
            `)&&R(o,"style",ee)},d(B){B&&_(o),A&&A.d(),fe=!1,M()}}}function fs(n){let o,s;return o=new Ct({props:{status:"warning",$$slots:{default:[gs]},$$scope:{ctx:n}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[8]&32768&&(t.$$scope={dirty:a,ctx:e}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ys(n){let o,s,e="Click a card to isolate that cost pool · click again to reset",a,t,p,i,u,x,D,ee,fe,M=Ta([["stack","Composition ($)"],["dollars","Growth lines"]]),A=[];for(let S=0;S<2;S+=1)A[S]=Lo(eo(n,M,S));let Z=Ta(n[47]),B=[];for(let S=0;S<Z.length;S+=1)B[S]=Mo(Zr(n,Z,S));const H=[ps,bs],$e=[];function me(S,ae){return S[40]==="stack"?0:1}return x=me(n),D=$e[x]=H[x](n),{c(){o=I("div"),s=I("div"),s.textContent=e,a=F(),t=I("div");for(let S=0;S<2;S+=1)A[S].c();p=F(),i=I("div");for(let S=0;S<B.length;S+=1)B[S].c();u=F(),D.c(),ee=Fa(),this.h()},l(S){o=q(S,"DIV",{style:!0});var ae=we(o);s=q(ae,"DIV",{style:!0,"data-svelte-h":!0}),ja(s)!=="svelte-1w51pwj"&&(s.textContent=e),a=j(ae),t=q(ae,"DIV",{style:!0});var Q=we(t);for(let oe=0;oe<2;oe+=1)A[oe].l(Q);Q.forEach(_),ae.forEach(_),p=j(S),i=q(S,"DIV",{style:!0});var L=we(i);for(let oe=0;oe<B.length;oe+=1)B[oe].l(L);L.forEach(_),u=j(S),D.l(S),ee=Fa(),this.h()},h(){v(s,"font-size","0.9rem"),v(s,"color","#6B7280"),v(t,"display","flex"),v(t,"border","1px solid var(--nxt-border)"),v(t,"border-radius","6px"),v(t,"overflow","hidden"),v(t,"background","var(--nxt-surface)"),v(o,"display","flex"),v(o,"justify-content","space-between"),v(o,"align-items","center"),v(o,"flex-wrap","wrap"),v(o,"gap","8px"),v(o,"margin-bottom","16px"),v(i,"display","flex"),v(i,"flex-wrap","wrap"),v(i,"gap","8px"),v(i,"margin-bottom","16px")},m(S,ae){$(S,o,ae),Y(o,s),Y(o,a),Y(o,t);for(let Q=0;Q<2;Q+=1)A[Q]&&A[Q].m(t,null);$(S,p,ae),$(S,i,ae);for(let Q=0;Q<B.length;Q+=1)B[Q]&&B[Q].m(i,null);$(S,u,ae),$e[x].m(S,ae),$(S,ee,ae),fe=!0},p(S,ae){if(ae[1]&512){M=Ta([["stack","Composition ($)"],["dollars","Growth lines"]]);let L;for(L=0;L<2;L+=1){const oe=eo(S,M,L);A[L]?A[L].p(oe,ae):(A[L]=Lo(oe),A[L].c(),A[L].m(t,null))}for(;L<2;L+=1)A[L].d(1)}if(ae[1]&167839744){Z=Ta(S[47]);let L;for(L=0;L<Z.length;L+=1){const oe=Zr(S,Z,L);B[L]?B[L].p(oe,ae):(B[L]=Mo(oe),B[L].c(),B[L].m(i,null))}for(;L<B.length;L+=1)B[L].d(1);B.length=Z.length}let Q=x;x=me(S),x===Q?$e[x].p(S,ae):(pe(),k($e[Q],1,1,()=>{$e[Q]=null}),be(),D=$e[x],D?D.p(S,ae):(D=$e[x]=H[x](S),D.c()),g(D,1),D.m(ee.parentNode,ee))},i(S){fe||(g(D),fe=!0)},o(S){k(D),fe=!1},d(S){S&&(_(o),_(p),_(i),_(u),_(ee)),Ft(A,S),Ft(B,S),$e[x].d(S)}}}function gs(n){let o;return{c(){o=qe("No cost pool data available for this agency.")},l(s){o=Se(s,"No cost pool data available for this agency.")},m(s,e){$(s,o,e)},d(s){s&&_(o)}}}function Lo(n){let o,s,e,a,t;function p(){return n[188](n[246])}return{c(){o=I("button"),s=qe(n[247]),this.h()},l(i){o=q(i,"BUTTON",{style:!0});var u=we(o);s=Se(u,n[247]),u.forEach(_),this.h()},h(){R(o,"style",e="padding:6px 16px; font-size:0.875rem; cursor:pointer; border:none; border-right:1px solid var(--nxt-border); background:"+(n[40]===n[246]?"#802cd7":"var(--nxt-surface)")+"; color:"+(n[40]===n[246]?"#fff":"#211030")+"; font-weight:"+(n[40]===n[246]?700:500))},m(i,u){$(i,o,u),Y(o,s),a||(t=$t(o,"click",p),a=!0)},p(i,u){n=i,u[1]&512&&e!==(e="padding:6px 16px; font-size:0.875rem; cursor:pointer; border:none; border-right:1px solid var(--nxt-border); background:"+(n[40]===n[246]?"#802cd7":"var(--nxt-surface)")+"; color:"+(n[40]===n[246]?"#fff":"#211030")+"; font-weight:"+(n[40]===n[246]?700:500))&&R(o,"style",e)},d(i){i&&_(o),a=!1,t()}}}function Yo(n){let o,s=n[56](n[250].latest)+"",e,a,t,p,i=n[250].yoy!==null&&Ho(n),u=n[250].cagr3!==null&&Po(n);return{c(){o=I("span"),e=qe(s),a=F(),i&&i.c(),t=F(),u&&u.c(),p=Fa(),this.h()},l(x){o=q(x,"SPAN",{style:!0});var D=we(o);e=Se(D,s),D.forEach(_),a=j(x),i&&i.l(x),t=j(x),u&&u.l(x),p=Fa(),this.h()},h(){v(o,"font-size","0.8rem"),v(o,"font-weight","700"),v(o,"color","#211030")},m(x,D){$(x,o,D),Y(o,e),$(x,a,D),i&&i.m(x,D),$(x,t,D),u&&u.m(x,D),$(x,p,D)},p(x,D){D[1]&65536&&s!==(s=x[56](x[250].latest)+"")&&va(e,s),x[250].yoy!==null?i?i.p(x,D):(i=Ho(x),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),x[250].cagr3!==null?u?u.p(x,D):(u=Po(x),u.c(),u.m(p.parentNode,p)):u&&(u.d(1),u=null)},d(x){x&&(_(o),_(a),_(t),_(p)),i&&i.d(x),u&&u.d(x)}}}function Ho(n){let o,s=n[250].yoy>=0?"↑":"↓",e,a=Math.abs(n[250].yoy).toFixed(1)+"",t,p,i;return{c(){o=I("span"),e=qe(s),t=qe(a),p=qe("%"),this.h()},l(u){o=q(u,"SPAN",{style:!0});var x=we(o);e=Se(x,s),t=Se(x,a),p=Se(x,"%"),x.forEach(_),this.h()},h(){R(o,"style",i="font-size:0.75rem; font-weight:600; color:"+(n[250].yoy>=0?"#1A7340":"#C8122C"))},m(u,x){$(u,o,x),Y(o,e),Y(o,t),Y(o,p)},p(u,x){x[1]&65536&&s!==(s=u[250].yoy>=0?"↑":"↓")&&va(e,s),x[1]&65536&&a!==(a=Math.abs(u[250].yoy).toFixed(1)+"")&&va(t,a),x[1]&65536&&i!==(i="font-size:0.75rem; font-weight:600; color:"+(u[250].yoy>=0?"#1A7340":"#C8122C"))&&R(o,"style",i)},d(u){u&&_(o)}}}function Po(n){let o,s=n[250].cagr3>=0?"+":"",e,a=n[250].cagr3.toFixed(1)+"",t,p;return{c(){o=I("span"),e=qe(s),t=qe(a),p=qe("% 3yr"),this.h()},l(i){o=q(i,"SPAN",{style:!0});var u=we(o);e=Se(u,s),t=Se(u,a),p=Se(u,"% 3yr"),u.forEach(_),this.h()},h(){v(o,"font-size","0.7rem"),v(o,"color","#9CA3AF")},m(i,u){$(i,o,u),Y(o,e),Y(o,t),Y(o,p)},p(i,u){u[1]&65536&&s!==(s=i[250].cagr3>=0?"+":"")&&va(e,s),u[1]&65536&&a!==(a=i[250].cagr3.toFixed(1)+"")&&va(t,a)},d(i){i&&_(o)}}}function Mo(n){let o,s,e,a,t,p=n[250].name+"",i,u,x,D,ee,fe,M,A=n[251]&&Yo(n);function Z(){return n[189](n[250])}return{c(){o=I("button"),s=I("span"),a=F(),t=I("span"),i=qe(p),x=F(),A&&A.c(),D=F(),this.h()},l(B){o=q(B,"BUTTON",{style:!0});var H=we(o);s=q(H,"SPAN",{style:!0}),we(s).forEach(_),a=j(H),t=q(H,"SPAN",{style:!0});var $e=we(t);i=Se($e,p),$e.forEach(_),x=j(H),A&&A.l(H),D=j(H),H.forEach(_),this.h()},h(){R(s,"style",e="width:10px; height:10px; border-radius:50%; background:"+n[250].color+"; display:inline-block; flex-shrink:0;"),R(t,"style",u="font-size:0.875rem; font-weight:"+(n[251]?700:500)+"; color:#211030;"),R(o,"style",ee=`
                display:inline-flex; align-items:center; gap:8px;
                padding:7px 14px; border-radius:20px; cursor:pointer;
                border: ${n[251]?"2px solid "+n[250].color:"1px solid var(--nxt-border)"};
                background: ${n[251]?"white":"var(--nxt-surface)"};
                opacity: ${n[252]&&!n[251]?.4:1};
                box-shadow: ${n[251]?"0 2px 8px rgba(0,0,0,0.10)":"none"};
                transition: all 0.15s ease;
            `)},m(B,H){$(B,o,H),Y(o,s),Y(o,a),Y(o,t),Y(t,i),Y(o,x),A&&A.m(o,null),Y(o,D),fe||(M=$t(o,"click",Z),fe=!0)},p(B,H){n=B,H[1]&65536&&e!==(e="width:10px; height:10px; border-radius:50%; background:"+n[250].color+"; display:inline-block; flex-shrink:0;")&&R(s,"style",e),H[1]&65536&&p!==(p=n[250].name+"")&&va(i,p),H[1]&67584&&u!==(u="font-size:0.875rem; font-weight:"+(n[251]?700:500)+"; color:#211030;")&&R(t,"style",u),n[251]?A?A.p(n,H):(A=Yo(n),A.c(),A.m(o,D)):A&&(A.d(1),A=null),H[1]&67584&&ee!==(ee=`
                display:inline-flex; align-items:center; gap:8px;
                padding:7px 14px; border-radius:20px; cursor:pointer;
                border: ${n[251]?"2px solid "+n[250].color:"1px solid var(--nxt-border)"};
                background: ${n[251]?"white":"var(--nxt-surface)"};
                opacity: ${n[252]&&!n[251]?.4:1};
                box-shadow: ${n[251]?"0 2px 8px rgba(0,0,0,0.10)":"none"};
                transition: all 0.15s ease;
            `)&&R(o,"style",ee)},d(B){B&&_(o),A&&A.d(),fe=!1,M()}}}function bs(n){let o,s;return o=new zr({props:{height:"400px",config:{tooltip:{trigger:"axis",formatter:n[193]},legend:{show:!1},grid:{left:64,right:16,top:12,bottom:32},xAxis:{type:"category",data:n[23],axisLabel:{formatter:Oo}},yAxis:{type:"value",axisLabel:{formatter:n[194]},splitLine:{lineStyle:{color:"#e2d9f3"}}},series:n[24].map(n[195])}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&29360128|a[1]&2048&&(t.config={tooltip:{trigger:"axis",formatter:e[193]},legend:{show:!1},grid:{left:64,right:16,top:12,bottom:32},xAxis:{type:"category",data:e[23],axisLabel:{formatter:Oo}},yAxis:{type:"value",axisLabel:{formatter:e[194]},splitLine:{lineStyle:{color:"#e2d9f3"}}},series:e[24].map(e[195])}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ps(n){let o,s;return o=new zr({props:{height:"400px",config:{tooltip:{trigger:"axis",formatter:n[190]},legend:{show:!1},grid:{left:64,right:16,top:12,bottom:32},xAxis:{type:"category",data:n[23],axisLabel:{formatter:Uo}},yAxis:{type:"value",axisLabel:{formatter:n[191]},splitLine:{lineStyle:{color:"#e2d9f3"}}},series:n[24].map(n[192])}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[0]&29360128|a[1]&34816&&(t.config={tooltip:{trigger:"axis",formatter:e[190]},legend:{show:!1},grid:{left:64,right:16,top:12,bottom:32},xAxis:{type:"category",data:e[23],axisLabel:{formatter:Uo}},yAxis:{type:"value",axisLabel:{formatter:e[191]},splitLine:{lineStyle:{color:"#e2d9f3"}}},series:e[24].map(e[192])}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function zo(n){let o,s,e,a,t;function p(){return n[196](n[246])}return{c(){o=I("button"),s=qe(n[247]),this.h()},l(i){o=q(i,"BUTTON",{style:!0});var u=we(o);s=Se(u,n[247]),u.forEach(_),this.h()},h(){R(o,"style",e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[14]===n[246]?"2px solid #C8122C":"1px solid rgba(36,41,46,0.06)")+"; background: "+(n[14]===n[246]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"white")+"; color: "+(n[14]===n[246]?"#C8122C":"#231F20")+"; font-weight: "+(n[14]===n[246]?700:500))},m(i,u){$(i,o,u),Y(o,s),a||(t=$t(o,"click",p),a=!0)},p(i,u){n=i,u[0]&16384&&e!==(e="border-radius:14px; padding:6px 14px; font-size:0.9rem; cursor:pointer; border: "+(n[14]===n[246]?"2px solid #C8122C":"1px solid rgba(36,41,46,0.06)")+"; background: "+(n[14]===n[246]?"linear-gradient(90deg,#FFF7F7,#FFECEC)":"white")+"; color: "+(n[14]===n[246]?"#C8122C":"#231F20")+"; font-weight: "+(n[14]===n[246]?700:500))&&R(o,"style",e)},d(i){i&&_(o),a=!1,t()}}}function ws(n){let o,s;return o=new Ct({props:{status:"warning",$$slots:{default:[ks]},$$scope:{ctx:n}}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[8]&32768&&(t.$$scope={dirty:a,ctx:e}),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function $s(n){let o,s;return o=new Pn({props:{filteredUnitRows:n[43],drillViewYears:n[18],drillYears:n[16],grandTotal:n[44],getFilteredPrograms:n[62],getFilteredSubprograms:n[63],getFilteredCostPools:n[61],level1Label:"IT Tower",level2Label:"Program",level3Label:"Subprogram",level4Label:"Cost Pool",accentColor:"#802cd7"}}),{c(){K(o.$$.fragment)},l(e){O(o.$$.fragment,e)},m(e,a){U(o,e,a),s=!0},p(e,a){const t={};a[1]&4096&&(t.filteredUnitRows=e[43]),a[0]&262144&&(t.drillViewYears=e[18]),a[0]&65536&&(t.drillYears=e[16]),a[1]&8192&&(t.grandTotal=e[44]),o.$set(t)},i(e){s||(g(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){V(o,e)}}}function ks(n){let o;return{c(){o=qe("No IT tower data available for this agency.")},l(s){o=Se(s,"No IT tower data available for this agency.")},m(s,e){$(s,o,e)},d(s){s&&_(o)}}}function hs(n){var da;let o,s,e,a,t,p,i,u,x,D,ee,fe,M,A,Z,B,H,$e,me,S,ae,Q,L,oe,na,sa,Ve,$a,fa,Be,ra,X,Ue,ke,xe,_a=n[0].agency+"",c,la,Me,ya="Agency IT Spend Detail · TBM v5.0.1 Classification",Ne,G,r,Oe,ga="← Back to Technology View",de,Ke,ze,ka,b,T,te,ea,oa,ia=typeof De<"u"&&((da=De.og)==null?void 0:da.title)&&De.hide_title!==!0&&Kn();function J(l,y){var Pe;return typeof De<"u"&&((Pe=De.og)!=null&&Pe.title)?Qn:Gn}let ca=J()(n),wa=typeof De=="object"&&Xn(),Ie=n[25]&&oo(n),Le=n[26]&&no(n),ne=n[27]&&so(n),je=n[28]&&lo(n),Fe=n[1]&&io(n),le=n[29]&&_o(n),ie=n[2]&&co(n),Ce=n[30]&&uo(n),ye=n[3]&&mo(n),re=n[31]&&fo(n),Ye=n[32]&&yo(n),ge=n[33]&&go(n),Ge=n[34]&&bo(n),Qe=n[35]&&po(n),_e=n[36]&&wo(n),Re=n[4]&&$o(n),Ae=n[5]&&ko(n),ce=n[6]&&ho(n),Xe=n[37]&&vo(n),he=n[38]&&xo(n),Te=n[39]&&jo(n),Ee=n[7]&&Fo(n),He=n[8]&&Co(n),ue=n[9]&&Ro(n),We=n[10]&&To(n),f=n[11]&&Eo(n),C=Ta([["latest","Latest Year"],["trend","Trend Over Years"]]),W=[];for(let l=0;l<2;l+=1)W[l]=Do(ro(n,C,l));ze=new zn({props:{title:"🔍 Filters",open:"false",$$slots:{default:[rs]},$$scope:{ctx:n}}}),b=new In({props:{title:"🔍 Filters",targetId:"page-filters"}});let se=n[52]=="latest"&&So(n),ve=n[52]=="trend"&&Io(n);return{c(){ia&&ia.c(),o=F(),ca.c(),s=I("meta"),e=I("meta"),wa&&wa.c(),a=Fa(),t=F(),Ie&&Ie.c(),p=F(),Le&&Le.c(),i=F(),ne&&ne.c(),u=F(),je&&je.c(),x=F(),Fe&&Fe.c(),D=F(),le&&le.c(),ee=F(),ie&&ie.c(),fe=F(),Ce&&Ce.c(),M=F(),ye&&ye.c(),A=F(),re&&re.c(),Z=F(),Ye&&Ye.c(),B=F(),ge&&ge.c(),H=F(),Ge&&Ge.c(),$e=F(),Qe&&Qe.c(),me=F(),_e&&_e.c(),S=F(),Re&&Re.c(),ae=F(),Ae&&Ae.c(),Q=F(),ce&&ce.c(),L=F(),Xe&&Xe.c(),oe=F(),he&&he.c(),na=F(),Te&&Te.c(),sa=F(),Ee&&Ee.c(),Ve=F(),He&&He.c(),$a=F(),ue&&ue.c(),fa=F(),We&&We.c(),Be=F(),f&&f.c(),ra=F(),X=I("div"),Ue=I("div"),ke=I("h1"),xe=qe("💻 "),c=qe(_a),la=F(),Me=I("p"),Me.textContent=ya,Ne=F(),G=I("div");for(let l=0;l<2;l+=1)W[l].c();r=F(),Oe=I("a"),Oe.textContent=ga,de=F(),Ke=I("div"),K(ze.$$.fragment),ka=F(),K(b.$$.fragment),T=F(),se&&se.c(),te=F(),ve&&ve.c(),ea=Fa(),this.h()},l(l){ia&&ia.l(l),o=j(l);const y=hn("svelte-2igo1p",document.head);ca.l(y),s=q(y,"META",{name:!0,content:!0}),e=q(y,"META",{name:!0,content:!0}),wa&&wa.l(y),a=Fa(),y.forEach(_),t=j(l),Ie&&Ie.l(l),p=j(l),Le&&Le.l(l),i=j(l),ne&&ne.l(l),u=j(l),je&&je.l(l),x=j(l),Fe&&Fe.l(l),D=j(l),le&&le.l(l),ee=j(l),ie&&ie.l(l),fe=j(l),Ce&&Ce.l(l),M=j(l),ye&&ye.l(l),A=j(l),re&&re.l(l),Z=j(l),Ye&&Ye.l(l),B=j(l),ge&&ge.l(l),H=j(l),Ge&&Ge.l(l),$e=j(l),Qe&&Qe.l(l),me=j(l),_e&&_e.l(l),S=j(l),Re&&Re.l(l),ae=j(l),Ae&&Ae.l(l),Q=j(l),ce&&ce.l(l),L=j(l),Xe&&Xe.l(l),oe=j(l),he&&he.l(l),na=j(l),Te&&Te.l(l),sa=j(l),Ee&&Ee.l(l),Ve=j(l),He&&He.l(l),$a=j(l),ue&&ue.l(l),fa=j(l),We&&We.l(l),Be=j(l),f&&f.l(l),ra=j(l),X=q(l,"DIV",{style:!0});var Pe=we(X);Ue=q(Pe,"DIV",{});var ua=we(Ue);ke=q(ua,"H1",{style:!0});var Je=we(ke);xe=Se(Je,"💻 "),c=Se(Je,_a),Je.forEach(_),la=j(ua),Me=q(ua,"P",{style:!0,"data-svelte-h":!0}),ja(Me)!=="svelte-6yw8w9"&&(Me.textContent=ya),ua.forEach(_),Ne=j(Pe),G=q(Pe,"DIV",{style:!0});var Ca=we(G);for(let xa=0;xa<2;xa+=1)W[xa].l(Ca);Ca.forEach(_),Pe.forEach(_),r=j(l),Oe=q(l,"A",{href:!0,style:!0,"data-svelte-h":!0}),ja(Oe)!=="svelte-24sxsz"&&(Oe.textContent=ga),de=j(l),Ke=q(l,"DIV",{id:!0});var qa=we(Ke);O(ze.$$.fragment,qa),qa.forEach(_),ka=j(l),O(b.$$.fragment,l),T=j(l),se&&se.l(l),te=j(l),ve&&ve.l(l),ea=Fa(),this.h()},h(){R(s,"name","twitter:card"),R(s,"content","summary_large_image"),R(e,"name","twitter:site"),R(e,"content","@evidence_dev"),v(ke,"color","#211030"),v(ke,"font-size","1.7rem"),v(ke,"font-weight","700"),v(ke,"margin","0"),v(Me,"color","#6321a5"),v(Me,"font-size","0.95rem"),v(Me,"margin","4px 0 0 0"),v(G,"display","flex"),v(G,"border","1px solid #c9a8f0"),v(G,"border-radius","6px"),v(G,"width","fit-content"),v(G,"overflow","hidden"),v(G,"background","rgba(255,255,255,0.5)"),v(X,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),v(X,"padding","28px 36px"),v(X,"border-radius","12px"),v(X,"border-bottom","4px solid #802cd7"),v(X,"margin-bottom","0"),v(X,"display","flex"),v(X,"align-items","flex-end"),v(X,"justify-content","space-between"),v(X,"gap","24px"),v(X,"flex-wrap","wrap"),R(Oe,"href","/deep-dive/technology"),v(Oe,"display","inline-block"),v(Oe,"margin","12px 0"),v(Oe,"color","var(--nxt-blue-violet)"),v(Oe,"font-size","0.9rem"),v(Oe,"text-decoration","none"),R(Ke,"id","page-filters")},m(l,y){ia&&ia.m(l,y),$(l,o,y),ca.m(document.head,null),Y(document.head,s),Y(document.head,e),wa&&wa.m(document.head,null),Y(document.head,a),$(l,t,y),Ie&&Ie.m(l,y),$(l,p,y),Le&&Le.m(l,y),$(l,i,y),ne&&ne.m(l,y),$(l,u,y),je&&je.m(l,y),$(l,x,y),Fe&&Fe.m(l,y),$(l,D,y),le&&le.m(l,y),$(l,ee,y),ie&&ie.m(l,y),$(l,fe,y),Ce&&Ce.m(l,y),$(l,M,y),ye&&ye.m(l,y),$(l,A,y),re&&re.m(l,y),$(l,Z,y),Ye&&Ye.m(l,y),$(l,B,y),ge&&ge.m(l,y),$(l,H,y),Ge&&Ge.m(l,y),$(l,$e,y),Qe&&Qe.m(l,y),$(l,me,y),_e&&_e.m(l,y),$(l,S,y),Re&&Re.m(l,y),$(l,ae,y),Ae&&Ae.m(l,y),$(l,Q,y),ce&&ce.m(l,y),$(l,L,y),Xe&&Xe.m(l,y),$(l,oe,y),he&&he.m(l,y),$(l,na,y),Te&&Te.m(l,y),$(l,sa,y),Ee&&Ee.m(l,y),$(l,Ve,y),He&&He.m(l,y),$(l,$a,y),ue&&ue.m(l,y),$(l,fa,y),We&&We.m(l,y),$(l,Be,y),f&&f.m(l,y),$(l,ra,y),$(l,X,y),Y(X,Ue),Y(Ue,ke),Y(ke,xe),Y(ke,c),Y(Ue,la),Y(Ue,Me),Y(X,Ne),Y(X,G);for(let Pe=0;Pe<2;Pe+=1)W[Pe]&&W[Pe].m(G,null);$(l,r,y),$(l,Oe,y),$(l,de,y),$(l,Ke,y),U(ze,Ke,null),$(l,ka,y),U(b,l,y),$(l,T,y),se&&se.m(l,y),$(l,te,y),ve&&ve.m(l,y),$(l,ea,y),oa=!0},p(l,y){var ua;if(typeof De<"u"&&((ua=De.og)!=null&&ua.title)&&De.hide_title!==!0&&ia.p(l,y),ca.p(l,y),typeof De=="object"&&wa.p(l,y),l[25]?Ie?(Ie.p(l,y),y[0]&33554432&&g(Ie,1)):(Ie=oo(l),Ie.c(),g(Ie,1),Ie.m(p.parentNode,p)):Ie&&(pe(),k(Ie,1,1,()=>{Ie=null}),be()),l[26]?Le?(Le.p(l,y),y[0]&67108864&&g(Le,1)):(Le=no(l),Le.c(),g(Le,1),Le.m(i.parentNode,i)):Le&&(pe(),k(Le,1,1,()=>{Le=null}),be()),l[27]?ne?(ne.p(l,y),y[0]&134217728&&g(ne,1)):(ne=so(l),ne.c(),g(ne,1),ne.m(u.parentNode,u)):ne&&(pe(),k(ne,1,1,()=>{ne=null}),be()),l[28]?je?(je.p(l,y),y[0]&268435456&&g(je,1)):(je=lo(l),je.c(),g(je,1),je.m(x.parentNode,x)):je&&(pe(),k(je,1,1,()=>{je=null}),be()),l[1]?Fe?(Fe.p(l,y),y[0]&2&&g(Fe,1)):(Fe=io(l),Fe.c(),g(Fe,1),Fe.m(D.parentNode,D)):Fe&&(pe(),k(Fe,1,1,()=>{Fe=null}),be()),l[29]?le?(le.p(l,y),y[0]&536870912&&g(le,1)):(le=_o(l),le.c(),g(le,1),le.m(ee.parentNode,ee)):le&&(pe(),k(le,1,1,()=>{le=null}),be()),l[2]?ie?(ie.p(l,y),y[0]&4&&g(ie,1)):(ie=co(l),ie.c(),g(ie,1),ie.m(fe.parentNode,fe)):ie&&(pe(),k(ie,1,1,()=>{ie=null}),be()),l[30]?Ce?(Ce.p(l,y),y[0]&1073741824&&g(Ce,1)):(Ce=uo(l),Ce.c(),g(Ce,1),Ce.m(M.parentNode,M)):Ce&&(pe(),k(Ce,1,1,()=>{Ce=null}),be()),l[3]?ye?(ye.p(l,y),y[0]&8&&g(ye,1)):(ye=mo(l),ye.c(),g(ye,1),ye.m(A.parentNode,A)):ye&&(pe(),k(ye,1,1,()=>{ye=null}),be()),l[31]?re?(re.p(l,y),y[1]&1&&g(re,1)):(re=fo(l),re.c(),g(re,1),re.m(Z.parentNode,Z)):re&&(pe(),k(re,1,1,()=>{re=null}),be()),l[32]?Ye?(Ye.p(l,y),y[1]&2&&g(Ye,1)):(Ye=yo(l),Ye.c(),g(Ye,1),Ye.m(B.parentNode,B)):Ye&&(pe(),k(Ye,1,1,()=>{Ye=null}),be()),l[33]?ge?(ge.p(l,y),y[1]&4&&g(ge,1)):(ge=go(l),ge.c(),g(ge,1),ge.m(H.parentNode,H)):ge&&(pe(),k(ge,1,1,()=>{ge=null}),be()),l[34]?Ge?(Ge.p(l,y),y[1]&8&&g(Ge,1)):(Ge=bo(l),Ge.c(),g(Ge,1),Ge.m($e.parentNode,$e)):Ge&&(pe(),k(Ge,1,1,()=>{Ge=null}),be()),l[35]?Qe?(Qe.p(l,y),y[1]&16&&g(Qe,1)):(Qe=po(l),Qe.c(),g(Qe,1),Qe.m(me.parentNode,me)):Qe&&(pe(),k(Qe,1,1,()=>{Qe=null}),be()),l[36]?_e?(_e.p(l,y),y[1]&32&&g(_e,1)):(_e=wo(l),_e.c(),g(_e,1),_e.m(S.parentNode,S)):_e&&(pe(),k(_e,1,1,()=>{_e=null}),be()),l[4]?Re?(Re.p(l,y),y[0]&16&&g(Re,1)):(Re=$o(l),Re.c(),g(Re,1),Re.m(ae.parentNode,ae)):Re&&(pe(),k(Re,1,1,()=>{Re=null}),be()),l[5]?Ae?(Ae.p(l,y),y[0]&32&&g(Ae,1)):(Ae=ko(l),Ae.c(),g(Ae,1),Ae.m(Q.parentNode,Q)):Ae&&(pe(),k(Ae,1,1,()=>{Ae=null}),be()),l[6]?ce?(ce.p(l,y),y[0]&64&&g(ce,1)):(ce=ho(l),ce.c(),g(ce,1),ce.m(L.parentNode,L)):ce&&(pe(),k(ce,1,1,()=>{ce=null}),be()),l[37]?Xe?(Xe.p(l,y),y[1]&64&&g(Xe,1)):(Xe=vo(l),Xe.c(),g(Xe,1),Xe.m(oe.parentNode,oe)):Xe&&(pe(),k(Xe,1,1,()=>{Xe=null}),be()),l[38]?he?(he.p(l,y),y[1]&128&&g(he,1)):(he=xo(l),he.c(),g(he,1),he.m(na.parentNode,na)):he&&(pe(),k(he,1,1,()=>{he=null}),be()),l[39]?Te?(Te.p(l,y),y[1]&256&&g(Te,1)):(Te=jo(l),Te.c(),g(Te,1),Te.m(sa.parentNode,sa)):Te&&(pe(),k(Te,1,1,()=>{Te=null}),be()),l[7]?Ee?(Ee.p(l,y),y[0]&128&&g(Ee,1)):(Ee=Fo(l),Ee.c(),g(Ee,1),Ee.m(Ve.parentNode,Ve)):Ee&&(pe(),k(Ee,1,1,()=>{Ee=null}),be()),l[8]?He?(He.p(l,y),y[0]&256&&g(He,1)):(He=Co(l),He.c(),g(He,1),He.m($a.parentNode,$a)):He&&(pe(),k(He,1,1,()=>{He=null}),be()),l[9]?ue?(ue.p(l,y),y[0]&512&&g(ue,1)):(ue=Ro(l),ue.c(),g(ue,1),ue.m(fa.parentNode,fa)):ue&&(pe(),k(ue,1,1,()=>{ue=null}),be()),l[10]?We?(We.p(l,y),y[0]&1024&&g(We,1)):(We=To(l),We.c(),g(We,1),We.m(Be.parentNode,Be)):We&&(pe(),k(We,1,1,()=>{We=null}),be()),l[11]?f?(f.p(l,y),y[0]&2048&&g(f,1)):(f=Eo(l),f.c(),g(f,1),f.m(ra.parentNode,ra)):f&&(pe(),k(f,1,1,()=>{f=null}),be()),(!oa||y[0]&1)&&_a!==(_a=l[0].agency+"")&&va(c,_a),y[0]&4096){C=Ta([["latest","Latest Year"],["trend","Trend Over Years"]]);let Je;for(Je=0;Je<2;Je+=1){const Ca=ro(l,C,Je);W[Je]?W[Je].p(Ca,y):(W[Je]=Do(Ca),W[Je].c(),W[Je].m(G,null))}for(;Je<2;Je+=1)W[Je].d(1)}const Pe={};y[0]&234881024|y[8]&32768&&(Pe.$$scope={dirty:y,ctx:l}),ze.$set(Pe),l[52]=="latest"?se?(se.p(l,y),y[1]&2097152&&g(se,1)):(se=So(l),se.c(),g(se,1),se.m(te.parentNode,te)):se&&(pe(),k(se,1,1,()=>{se=null}),be()),l[52]=="trend"?ve?(ve.p(l,y),y[1]&2097152&&g(ve,1)):(ve=Io(l),ve.c(),g(ve,1),ve.m(ea.parentNode,ea)):ve&&(pe(),k(ve,1,1,()=>{ve=null}),be())},i(l){oa||(g(Ie),g(Le),g(ne),g(je),g(Fe),g(le),g(ie),g(Ce),g(ye),g(re),g(Ye),g(ge),g(Ge),g(Qe),g(_e),g(Re),g(Ae),g(ce),g(Xe),g(he),g(Te),g(Ee),g(He),g(ue),g(We),g(f),g(ze.$$.fragment,l),g(b.$$.fragment,l),g(se),g(ve),oa=!0)},o(l){k(Ie),k(Le),k(ne),k(je),k(Fe),k(le),k(ie),k(Ce),k(ye),k(re),k(Ye),k(ge),k(Ge),k(Qe),k(_e),k(Re),k(Ae),k(ce),k(Xe),k(he),k(Te),k(Ee),k(He),k(ue),k(We),k(f),k(ze.$$.fragment,l),k(b.$$.fragment,l),k(se),k(ve),oa=!1},d(l){l&&(_(o),_(t),_(p),_(i),_(u),_(x),_(D),_(ee),_(fe),_(M),_(A),_(Z),_(B),_(H),_($e),_(me),_(S),_(ae),_(Q),_(L),_(oe),_(na),_(sa),_(Ve),_($a),_(fa),_(Be),_(ra),_(X),_(r),_(Oe),_(de),_(Ke),_(ka),_(T),_(te),_(ea)),ia&&ia.d(l),ca.d(l),_(s),_(e),wa&&wa.d(l),_(a),Ie&&Ie.d(l),Le&&Le.d(l),ne&&ne.d(l),je&&je.d(l),Fe&&Fe.d(l),le&&le.d(l),ie&&ie.d(l),Ce&&Ce.d(l),ye&&ye.d(l),re&&re.d(l),Ye&&Ye.d(l),ge&&ge.d(l),Ge&&Ge.d(l),Qe&&Qe.d(l),_e&&_e.d(l),Re&&Re.d(l),Ae&&Ae.d(l),ce&&ce.d(l),Xe&&Xe.d(l),he&&he.d(l),Te&&Te.d(l),Ee&&Ee.d(l),He&&He.d(l),ue&&ue.d(l),We&&We.d(l),f&&f.d(l),Ft(W,l),V(ze),V(b,l),se&&se.d(l),ve&&ve.d(l)}}}const De={title:null},Vo=n=>"FY"+n,Uo=n=>"FY"+n,Oo=n=>"FY"+n;function vs(n,o,s){let e,a,t,p,i,u,x,D,ee,fe,M,A,Z,B,H,$e,me,S,ae,Q,L,oe,na,sa,Ve,$a,fa,Be,ra,X,Ue,ke,xe;Hr(n,Vn,d=>s(179,ke=d)),Hr(n,Wr,d=>s(209,xe=d));let{data:_a}=o,{data:c={},customFormattingSettings:la,__db:Me,inputs:ya}=_a;vn(Wr,xe="744541c9dd9c1452d0928e1ca33343b1",xe);let Ne=Tn(Mn(ya));xn(Ne.subscribe(d=>ya=d)),jn(qn,{getCustomFormats:()=>la.customFormats||[]});const G=(d,E)=>On(Me.query,d,{query_name:E});En(G);let r=ke.params;Fn(()=>!0);let Oe={initialData:void 0,initialError:void 0},ga=P`select distinct it_tower from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and it_tower is not null
order by it_tower`,de=`select distinct it_tower from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and it_tower is not null
order by it_tower`;c.g_tower_data&&(c.g_tower_data instanceof Error?Oe.initialError=c.g_tower_data:Oe.initialData=c.g_tower_data,c.g_tower_columns&&(Oe.knownColumns=c.g_tower_columns));let Ke,ze=!1;const ka=aa.createReactive({callback:d=>{s(25,Ke=d)},execFn:G},{id:"g_tower",...Oe});ka(de,{noResolve:ga,...Oe}),globalThis[Symbol.for("g_tower")]={get value(){return Ke}};let b={initialData:void 0,initialError:void 0},T=P`select distinct program_name from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and program_name is not null
order by program_name`,te=`select distinct program_name from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and program_name is not null
order by program_name`;c.g_program_data&&(c.g_program_data instanceof Error?b.initialError=c.g_program_data:b.initialData=c.g_program_data,c.g_program_columns&&(b.knownColumns=c.g_program_columns));let ea,oa=!1;const ia=aa.createReactive({callback:d=>{s(26,ea=d)},execFn:G},{id:"g_program",...b});ia(te,{noResolve:T,...b}),globalThis[Symbol.for("g_program")]={get value(){return ea}};let J={initialData:void 0,initialError:void 0},ba=P`select distinct fund_type from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and fund_type is not null
order by fund_type`,ca=`select distinct fund_type from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and fund_type is not null
order by fund_type`;c.g_fund_data&&(c.g_fund_data instanceof Error?J.initialError=c.g_fund_data:J.initialData=c.g_fund_data,c.g_fund_columns&&(J.knownColumns=c.g_fund_columns));let wa,Ie=!1;const Le=aa.createReactive({callback:d=>{s(27,wa=d)},execFn:G},{id:"g_fund",...J});Le(ca,{noResolve:ba,...J}),globalThis[Symbol.for("g_fund")]={get value(){return wa}};let ne={initialData:void 0,initialError:void 0},je=P`select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')`,Fe=`select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')`;c.filtered_data&&(c.filtered_data instanceof Error?ne.initialError=c.filtered_data:ne.initialData=c.filtered_data,c.filtered_columns&&(ne.knownColumns=c.filtered_columns));let le,ie=!1;const Ce=aa.createReactive({callback:d=>{s(28,le=d)},execFn:G},{id:"filtered",...ne});Ce(Fe,{noResolve:je,...ne}),globalThis[Symbol.for("filtered")]={get value(){return le}};let ye={initialData:void 0,initialError:void 0},re=P`select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year`,Ye=`select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year`;c.yearly_rollup_data&&(c.yearly_rollup_data instanceof Error?ye.initialError=c.yearly_rollup_data:ye.initialData=c.yearly_rollup_data,c.yearly_rollup_columns&&(ye.knownColumns=c.yearly_rollup_columns));let ge,Ge=!1;const Qe=aa.createReactive({callback:d=>{s(1,ge=d)},execFn:G},{id:"yearly_rollup",...ye});Qe(Ye,{noResolve:re,...ye}),globalThis[Symbol.for("yearly_rollup")]={get value(){return ge}};let _e={initialData:void 0,initialError:void 0},Re=P`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget`,Ae=`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget`;c.scope_meta_data&&(c.scope_meta_data instanceof Error?_e.initialError=c.scope_meta_data:_e.initialData=c.scope_meta_data,c.scope_meta_columns&&(_e.knownColumns=c.scope_meta_columns));let ce,Xe=!1;const he=aa.createReactive({callback:d=>{s(29,ce=d)},execFn:G},{id:"scope_meta",..._e});he(Ae,{noResolve:Re,..._e}),globalThis[Symbol.for("scope_meta")]={get value(){return ce}};let Te={initialData:void 0,initialError:void 0},Ee=P`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
    coalesce(cast(max_year as varchar), 'N/A') as max_year_label
from points`,He=`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
    coalesce(cast(max_year as varchar), 'N/A') as max_year_label
from points`;c.overview_data&&(c.overview_data instanceof Error?Te.initialError=c.overview_data:Te.initialData=c.overview_data,c.overview_columns&&(Te.knownColumns=c.overview_columns));let ue,We=!1;const f=aa.createReactive({callback:d=>{s(2,ue=d)},execFn:G},{id:"overview",...Te});f(He,{noResolve:Ee,...Te}),globalThis[Symbol.for("overview")]={get value(){return ue}};let C={initialData:void 0,initialError:void 0},W=P`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`,se=`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`;c.yoy_detail_data&&(c.yoy_detail_data instanceof Error?C.initialError=c.yoy_detail_data:C.initialData=c.yoy_detail_data,c.yoy_detail_columns&&(C.knownColumns=c.yoy_detail_columns));let ve,da=!1;const l=aa.createReactive({callback:d=>{s(30,ve=d)},execFn:G},{id:"yoy_detail",...C});l(se,{noResolve:W,...C}),globalThis[Symbol.for("yoy_detail")]={get value(){return ve}};let y={initialData:void 0,initialError:void 0},Pe=P`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
order by fiscal_year`,ua=`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
order by fiscal_year`;c.fiscal_overview_cagr_data&&(c.fiscal_overview_cagr_data instanceof Error?y.initialError=c.fiscal_overview_cagr_data:y.initialData=c.fiscal_overview_cagr_data,c.fiscal_overview_cagr_columns&&(y.knownColumns=c.fiscal_overview_cagr_columns));let Je,Ca=!1;const qa=aa.createReactive({callback:d=>{s(3,Je=d)},execFn:G},{id:"fiscal_overview_cagr",...y});qa(ua,{noResolve:Pe,...y}),globalThis[Symbol.for("fiscal_overview_cagr")]={get value(){return Je}};let xa={initialData:void 0,initialError:void 0},Da=P`select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year`,Aa=`select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year`;c.filtered_latest_data&&(c.filtered_latest_data instanceof Error?xa.initialError=c.filtered_latest_data:xa.initialData=c.filtered_latest_data,c.filtered_latest_columns&&(xa.knownColumns=c.filtered_latest_columns));let kt,ha=!1;const ht=aa.createReactive({callback:d=>{s(31,kt=d)},execFn:G},{id:"filtered_latest",...xa});ht(Aa,{noResolve:Da,...xa}),globalThis[Symbol.for("filtered_latest")]={get value(){return kt}};let Ha={initialData:void 0,initialError:void 0},Pa=P`with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
        (r.is_like and lower(d.fund_type) like r.pattern)
        or (not r.is_like and lower(d.fund_type) = r.pattern)
    )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`,Rt=`with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
        (r.is_like and lower(d.fund_type) like r.pattern)
        or (not r.is_like and lower(d.fund_type) = r.pattern)
    )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`;c.fund_profile_data&&(c.fund_profile_data instanceof Error?Ha.initialError=c.fund_profile_data:Ha.initialData=c.fund_profile_data,c.fund_profile_columns&&(Ha.knownColumns=c.fund_profile_columns));let Jt,Zt=!1;const er=aa.createReactive({callback:d=>{s(32,Jt=d)},execFn:G},{id:"fund_profile",...Ha});er(Rt,{noResolve:Pa,...Ha}),globalThis[Symbol.for("fund_profile")]={get value(){return Jt}};let Ma={initialData:void 0,initialError:void 0},za=P`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select f.fund_type, sum(f.amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.prior_year
    group by f.fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by l.latest_budget desc`,Tt=`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select f.fund_type, sum(f.amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.prior_year
    group by f.fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by l.latest_budget desc`;c.fund_snapshot_data&&(c.fund_snapshot_data instanceof Error?Ma.initialError=c.fund_snapshot_data:Ma.initialData=c.fund_snapshot_data,c.fund_snapshot_columns&&(Ma.knownColumns=c.fund_snapshot_columns));let ar,tr=!1;const rr=aa.createReactive({callback:d=>{s(33,ar=d)},execFn:G},{id:"fund_snapshot",...Ma});rr(Tt,{noResolve:za,...Ma}),globalThis[Symbol.for("fund_snapshot")]={get value(){return ar}};let Va={initialData:void 0,initialError:void 0},Ua=P`select
    it_tower as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where it_tower is not null
group by it_tower
order by spend desc
limit 10`,Et=`select
    it_tower as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where it_tower is not null
group by it_tower
order by spend desc
limit 10`;c.pareto_towers_data&&(c.pareto_towers_data instanceof Error?Va.initialError=c.pareto_towers_data:Va.initialData=c.pareto_towers_data,c.pareto_towers_columns&&(Va.knownColumns=c.pareto_towers_columns));let or,nr=!1;const sr=aa.createReactive({callback:d=>{s(34,or=d)},execFn:G},{id:"pareto_towers",...Va});sr(Et,{noResolve:Ua,...Va}),globalThis[Symbol.for("pareto_towers")]={get value(){return or}};let Oa={initialData:void 0,initialError:void 0},Ka=P`select
    program_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where program_name is not null
group by program_name
order by spend desc
limit 10`,Dt=`select
    program_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where program_name is not null
group by program_name
order by spend desc
limit 10`;c.pareto_programs_data&&(c.pareto_programs_data instanceof Error?Oa.initialError=c.pareto_programs_data:Oa.initialData=c.pareto_programs_data,c.pareto_programs_columns&&(Oa.knownColumns=c.pareto_programs_columns));let lr,ir=!1;const _r=aa.createReactive({callback:d=>{s(35,lr=d)},execFn:G},{id:"pareto_programs",...Oa});_r(Dt,{noResolve:Ka,...Oa}),globalThis[Symbol.for("pareto_programs")]={get value(){return lr}};let Ga={initialData:void 0,initialError:void 0},Qa=P`select
    subprogram_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`,St=`select
    subprogram_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`;c.pareto_subprograms_data&&(c.pareto_subprograms_data instanceof Error?Ga.initialError=c.pareto_subprograms_data:Ga.initialData=c.pareto_subprograms_data,c.pareto_subprograms_columns&&(Ga.knownColumns=c.pareto_subprograms_columns));let cr,dr=!1;const ur=aa.createReactive({callback:d=>{s(36,cr=d)},execFn:G},{id:"pareto_subprograms",...Ga});ur(St,{noResolve:Qa,...Ga}),globalThis[Symbol.for("pareto_subprograms")]={get value(){return cr}};let Xa={initialData:void 0,initialError:void 0},Wa=P`with latest as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and it_tower is not null
    group by it_tower
),
prior as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and it_tower is not null
    group by it_tower
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`,qt=`with latest as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and it_tower is not null
    group by it_tower
),
prior as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and it_tower is not null
    group by it_tower
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`;c.tower_movers_data&&(c.tower_movers_data instanceof Error?Xa.initialError=c.tower_movers_data:Xa.initialData=c.tower_movers_data,c.tower_movers_columns&&(Xa.knownColumns=c.tower_movers_columns));let Ot,mr=!1;const fr=aa.createReactive({callback:d=>{s(4,Ot=d)},execFn:G},{id:"tower_movers",...Xa});fr(qt,{noResolve:Wa,...Xa}),globalThis[Symbol.for("tower_movers")]={get value(){return Ot}};let Ja={initialData:void 0,initialError:void 0},Za=P`with latest as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and program_name is not null
    group by program_name
),
prior as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and program_name is not null
    group by program_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`,It=`with latest as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and program_name is not null
    group by program_name
),
prior as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and program_name is not null
    group by program_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`;c.program_movers_data&&(c.program_movers_data instanceof Error?Ja.initialError=c.program_movers_data:Ja.initialData=c.program_movers_data,c.program_movers_columns&&(Ja.knownColumns=c.program_movers_columns));let Kt,yr=!1;const gr=aa.createReactive({callback:d=>{s(5,Kt=d)},execFn:G},{id:"program_movers",...Ja});gr(It,{noResolve:Za,...Ja}),globalThis[Symbol.for("program_movers")]={get value(){return Kt}};let et={initialData:void 0,initialError:void 0},at=P`with latest as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and subprogram_name is not null
    group by subprogram_name
),
prior as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and subprogram_name is not null
    group by subprogram_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`,At=`with latest as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and subprogram_name is not null
    group by subprogram_name
),
prior as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and subprogram_name is not null
    group by subprogram_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`;c.subprogram_movers_data&&(c.subprogram_movers_data instanceof Error?et.initialError=c.subprogram_movers_data:et.initialData=c.subprogram_movers_data,c.subprogram_movers_columns&&(et.knownColumns=c.subprogram_movers_columns));let Gt,br=!1;const pr=aa.createReactive({callback:d=>{s(6,Gt=d)},execFn:G},{id:"subprogram_movers",...et});pr(At,{noResolve:at,...et}),globalThis[Symbol.for("subprogram_movers")]={get value(){return Gt}};let tt={initialData:void 0,initialError:void 0},rt=P`with latest as (
    select it_tower, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null
    group by it_tower
),
hist_5y as (
    select it_tower, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null
    group by it_tower
),
hist_10y as (
    select it_tower, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null
    group by it_tower
)
select
    l.it_tower,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
order by l.latest_budget desc`,Bt=`with latest as (
    select it_tower, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null
    group by it_tower
),
hist_5y as (
    select it_tower, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null
    group by it_tower
),
hist_10y as (
    select it_tower, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null
    group by it_tower
)
select
    l.it_tower,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
order by l.latest_budget desc`;c.tower_latest_data&&(c.tower_latest_data instanceof Error?tt.initialError=c.tower_latest_data:tt.initialData=c.tower_latest_data,c.tower_latest_columns&&(tt.knownColumns=c.tower_latest_columns));let wr,$r=!1;const kr=aa.createReactive({callback:d=>{s(37,wr=d)},execFn:G},{id:"tower_latest",...tt});kr(Bt,{noResolve:rt,...tt}),globalThis[Symbol.for("tower_latest")]={get value(){return wr}};let ot={initialData:void 0,initialError:void 0},nt=P`with latest as (
    select it_tower, program_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null
    group by it_tower, program_name
),
prior as (
    select it_tower, program_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_5y as (
    select it_tower, program_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_10y as (
    select it_tower, program_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name)
left join hist_5y h5 using (it_tower, program_name)
left join hist_10y h10 using (it_tower, program_name)
cross join total t
order by l.it_tower, l.latest_budget desc`,Nt=`with latest as (
    select it_tower, program_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null
    group by it_tower, program_name
),
prior as (
    select it_tower, program_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_5y as (
    select it_tower, program_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_10y as (
    select it_tower, program_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name)
left join hist_5y h5 using (it_tower, program_name)
left join hist_10y h10 using (it_tower, program_name)
cross join total t
order by l.it_tower, l.latest_budget desc`;c.program_latest_data&&(c.program_latest_data instanceof Error?ot.initialError=c.program_latest_data:ot.initialData=c.program_latest_data,c.program_latest_columns&&(ot.knownColumns=c.program_latest_columns));let hr,vr=!1;const xr=aa.createReactive({callback:d=>{s(38,hr=d)},execFn:G},{id:"program_latest",...ot});xr(Nt,{noResolve:nt,...ot}),globalThis[Symbol.for("program_latest")]={get value(){return hr}};let st={initialData:void 0,initialError:void 0},lt=P`with latest as (
    select it_tower, program_name, subprogram_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null and subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
prior as (
    select it_tower, program_name, subprogram_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_5y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_10y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.subprogram_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name, subprogram_name)
left join hist_5y h5 using (it_tower, program_name, subprogram_name)
left join hist_10y h10 using (it_tower, program_name, subprogram_name)
cross join total t
order by l.it_tower, l.program_name, l.latest_budget desc`,Lt=`with latest as (
    select it_tower, program_name, subprogram_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null and subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
prior as (
    select it_tower, program_name, subprogram_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_5y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_10y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.subprogram_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name, subprogram_name)
left join hist_5y h5 using (it_tower, program_name, subprogram_name)
left join hist_10y h10 using (it_tower, program_name, subprogram_name)
cross join total t
order by l.it_tower, l.program_name, l.latest_budget desc`;c.subprogram_latest_data&&(c.subprogram_latest_data instanceof Error?st.initialError=c.subprogram_latest_data:st.initialData=c.subprogram_latest_data,c.subprogram_latest_columns&&(st.knownColumns=c.subprogram_latest_columns));let jr,Fr=!1;const Cr=aa.createReactive({callback:d=>{s(39,jr=d)},execFn:G},{id:"subprogram_latest",...st});Cr(Lt,{noResolve:lt,...st}),globalThis[Symbol.for("subprogram_latest")]={get value(){return jr}};let it={initialData:void 0,initialError:void 0},_t=P`select
    cast(f.fiscal_year as int) as fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by f.fiscal_year, fund_rank`,Yt=`select
    cast(f.fiscal_year as int) as fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by f.fiscal_year, fund_rank`;c.fund_trend_data&&(c.fund_trend_data instanceof Error?it.initialError=c.fund_trend_data:it.initialData=c.fund_trend_data,c.fund_trend_columns&&(it.knownColumns=c.fund_trend_columns));let Ba,Rr=!1;const Tr=aa.createReactive({callback:d=>{s(7,Ba=d)},execFn:G},{id:"fund_trend",...it});Tr(Yt,{noResolve:_t,...it}),globalThis[Symbol.for("fund_trend")]={get value(){return Ba}};let ct={initialData:void 0,initialError:void 0},dt=P`select
    it_tower,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
group by it_tower, fiscal_year
order by it_tower, fiscal_year`,Ht=`select
    it_tower,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
group by it_tower, fiscal_year
order by it_tower, fiscal_year`;c.pivot_towers_data&&(c.pivot_towers_data instanceof Error?ct.initialError=c.pivot_towers_data:ct.initialData=c.pivot_towers_data,c.pivot_towers_columns&&(ct.knownColumns=c.pivot_towers_columns));let Sa,Er=!1;const Dr=aa.createReactive({callback:d=>{s(8,Sa=d)},execFn:G},{id:"pivot_towers",...ct});Dr(Ht,{noResolve:dt,...ct}),globalThis[Symbol.for("pivot_towers")]={get value(){return Sa}};let ut={initialData:void 0,initialError:void 0},mt=P`select
    it_tower,
    program_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
group by it_tower, program_name, fiscal_year
order by it_tower, program_name, fiscal_year`,Pt=`select
    it_tower,
    program_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
group by it_tower, program_name, fiscal_year
order by it_tower, program_name, fiscal_year`;c.pivot_programs_data&&(c.pivot_programs_data instanceof Error?ut.initialError=c.pivot_programs_data:ut.initialData=c.pivot_programs_data,c.pivot_programs_columns&&(ut.knownColumns=c.pivot_programs_columns));let Qt,Sr=!1;const qr=aa.createReactive({callback:d=>{s(9,Qt=d)},execFn:G},{id:"pivot_programs",...ut});qr(Pt,{noResolve:mt,...ut}),globalThis[Symbol.for("pivot_programs")]={get value(){return Qt}};let ft={initialData:void 0,initialError:void 0},yt=P`select
    it_tower,
    program_name,
    subprogram_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
group by it_tower, program_name, subprogram_name, fiscal_year
order by it_tower, program_name, subprogram_name, fiscal_year`,Mt=`select
    it_tower,
    program_name,
    subprogram_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
group by it_tower, program_name, subprogram_name, fiscal_year
order by it_tower, program_name, subprogram_name, fiscal_year`;c.pivot_subprograms_data&&(c.pivot_subprograms_data instanceof Error?ft.initialError=c.pivot_subprograms_data:ft.initialData=c.pivot_subprograms_data,c.pivot_subprograms_columns&&(ft.knownColumns=c.pivot_subprograms_columns));let Xt,Ir=!1;const Ar=aa.createReactive({callback:d=>{s(10,Xt=d)},execFn:G},{id:"pivot_subprograms",...ft});Ar(Mt,{noResolve:yt,...ft}),globalThis[Symbol.for("pivot_subprograms")]={get value(){return Xt}};let gt={initialData:void 0,initialError:void 0},bt=P`select
    it_tower,
    program_name,
    subprogram_name,
    cost_pool,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
    and cost_pool is not null
group by it_tower, program_name, subprogram_name, cost_pool, fiscal_year
order by it_tower, program_name, subprogram_name, cost_pool, fiscal_year`,zt=`select
    it_tower,
    program_name,
    subprogram_name,
    cost_pool,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
    and cost_pool is not null
group by it_tower, program_name, subprogram_name, cost_pool, fiscal_year
order by it_tower, program_name, subprogram_name, cost_pool, fiscal_year`;c.pivot_cost_pools_data&&(c.pivot_cost_pools_data instanceof Error?gt.initialError=c.pivot_cost_pools_data:gt.initialData=c.pivot_cost_pools_data,c.pivot_cost_pools_columns&&(gt.knownColumns=c.pivot_cost_pools_columns));let Na,Br=!1;const Nr=aa.createReactive({callback:d=>{s(11,Na=d)},execFn:G},{id:"pivot_cost_pools",...gt});Nr(zt,{noResolve:bt,...gt}),globalThis[Symbol.for("pivot_cost_pools")]={get value(){return Na}};const Vr=Dn();Hr(n,Vr,d=>s(178,Ue=d));const Lr=(d,E=!0)=>{const m=Ko(d,"%").replace(/'/g,"''");return E?m.toLowerCase():m},Ko=(d,E="%")=>{var w,h,N,z,Ze,pa,xt;const m=[(h=(w=d==null?void 0:d.rawValues)==null?void 0:w[0])==null?void 0:h.value,(N=d==null?void 0:d.rawValue)==null?void 0:N.value,(z=d==null?void 0:d.value)==null?void 0:z.value,d==null?void 0:d.value,d==null?void 0:d.rawValue,(pa=(Ze=d==null?void 0:d.rawValues)==null?void 0:Ze[0])==null?void 0:pa.label,d==null?void 0:d.label,(xt=d==null?void 0:d.rawValues)==null?void 0:xt[0]];for(const Ea of m){if(Ea==null)continue;if(typeof Ea=="object"){if(Ea.value!=null)return String(Ea.value).toLowerCase();if(Ea.label!=null)return String(Ea.label).toLowerCase()}const jt=String(Ea).toLowerCase();if(jt&&jt!=="[object object]")return jt}return E},vt=d=>{const E=Number(d)||0,m=Math.abs(E);return m>=1e9?`$${(E/1e9).toFixed(2)}B`:m>=1e6?`$${(E/1e6).toFixed(2)}M`:m>=1e3?`$${(E/1e3).toFixed(2)}K`:`$${E.toFixed(2)}`},Go=d=>{if(!d||d.length<2)return{chartData:[],trendPoints:[]};const E=d.map(ma=>Number(ma.total_budget)||0),m=Array.from({length:d.length},(ma,Ra)=>Ra+1),w=m.map((ma,Ra)=>({x:ma,y:E[Ra]})).filter(ma=>ma.y>0);if(w.length<2)return{chartData:E,trendPoints:E};const h=w.map(ma=>Math.log(ma.x)),N=w.map(ma=>Math.log(ma.y)),z=w.length,Ze=h.reduce((ma,Ra)=>ma+Ra,0),pa=N.reduce((ma,Ra)=>ma+Ra,0),xt=h.reduce((ma,Ra,$n)=>ma+Ra*N[$n],0),Ea=h.reduce((ma,Ra)=>ma+Ra*Ra,0),jt=z*Ea-Ze*Ze;if(Math.abs(jt)<1e-10)return{chartData:E,trendPoints:E};const Gr=(z*xt-Ze*pa)/jt,wn=Math.exp((pa-Gr*Ze)/z);return{chartData:E,trendPoints:m.map(ma=>wn*Math.pow(ma,Gr))}};let Yr="trend",La="tower",Wt="3y",Ya="",Ur="stack",Vt=null,pt=null;const Or=d=>{s(41,Vt=Vt===d?null:d)},Kr=d=>{s(42,pt=pt===d?null:d)},Ut=["#C8122C","#FFC838","#231F20","#2EAD6B","#3B7DD8","#E67E22","#1ABC9C","#9B59B6","#E74C3C","#95A5A6"],wt=["#C8122C","#3B7DD8","#2EAD6B","#E67E22","#1ABC9C","#FFC838","#9B59B6","#E74C3C","#16A085","#7F8C8D"],Qo=(d,E,m)=>{var h,N;const w="FY"+M[M.length-1];return Object.values(((N=(h=$a[d])==null?void 0:h[E])==null?void 0:N[m])??{}).slice().sort((z,Ze)=>(Ze[w]||0)-(z[w]||0))},Xo=d=>{const E="FY"+M[M.length-1];return Object.values(sa[d]??{}).slice().sort((m,w)=>(w[E]||0)-(m[E]||0))},Wo=(d,E)=>{var w;const m="FY"+M[M.length-1];return Object.values(((w=Ve[d])==null?void 0:w[E])??{}).slice().sort((h,N)=>(N[m]||0)-(h[m]||0))},Jo=d=>{const E=Xo(d);return Ya?E.filter(function(m){var h;return m.name.toLowerCase().includes(ra)?!0:Object.values(((h=Ve[d])==null?void 0:h[m.name])??{}).some(function(N){return N.name.toLowerCase().includes(ra)})}):E},Zo=(d,E)=>{const m=Wo(d,E);return Ya?m.filter(function(w){return w.name.toLowerCase().includes(ra)}):m},en=d=>s(12,Yr=d),an=()=>{var m;const d=Number((m=ue==null?void 0:ue[0])==null?void 0:m.latest_budget)||0,E=Math.abs(d);return E>=1e9?"$"+(E/1e9).toFixed(2)+"B":E>=1e6?"$"+(E/1e6).toFixed(1)+"M":"$"+Math.round(E).toLocaleString()},tn=()=>{var w;const d=Number((w=ue==null?void 0:ue[0])==null?void 0:w.dollar_change)||0,E=Math.abs(d),m=d>=0?"+":"-";return E>=1e9?m+"$"+(E/1e9).toFixed(2)+"B":E>=1e6?m+"$"+(E/1e6).toFixed(1)+"M":m+"$"+Math.round(E).toLocaleString()},rn=d=>s(13,La=d),on=d=>Or(d.name),nn=d=>{if(!(d!=null&&d.length))return"";const E=d[0].axisValue,m=d.slice().sort((w,h)=>h.value-w.value).filter(w=>w.value>0).map(w=>`${w.marker} ${w.seriesName}: ${vt(w.value)}`);return`<b>FY${E}</b><br/>${m.join("<br/>")}`},sn=d=>{const E=Math.abs(Number(d));return E>=1e9?"$"+(E/1e9).toFixed(0)+"B":"$"+(E/1e6).toFixed(0)+"M"},ln=(d,E)=>{const m=Ut[E%Ut.length],w=Vt===d.agency_name,h=Vt!==null,N=!h||w,z=oe.find(pa=>pa.name===d.agency_name),Ze=w&&(z!=null&&z.yr)?{data:[{coord:[String(z.yr),z.val],value:vt(z.val),itemStyle:{color:m},label:{color:m,fontSize:10,fontWeight:600,position:"top"}}],symbol:"pin",symbolSize:26,itemStyle:{color:m}}:{data:[]};return{name:d.agency_name,type:"line",smooth:!1,symbol:"circle",symbolSize:w?7:5,lineStyle:{color:m,width:w?3.5:h?1:2.5,opacity:N?1:.08},itemStyle:{color:m,opacity:N?1:.08},label:{show:N,position:"right",offset:[4,0],color:m,fontWeight:w?700:500,fontSize:w?12:10,formatter:pa=>pa.dataIndex===B.length-1?d.agency_name:""},markPoint:Ze,emphasis:{focus:"series"},blur:{lineStyle:{opacity:.08},itemStyle:{opacity:.08}},data:B.map(pa=>L[d.agency_name+"||"+pa]||0)}},_n=d=>s(40,Ur=d),cn=d=>Kr(d.name),dn=d=>{if(!(d!=null&&d.length))return"";const E=d[0].axisValue,m=ae[E]||0,w=d.slice().reverse().filter(h=>h.value>0).map(h=>`${h.marker} ${h.seriesName}: ${vt(h.value)} (${m>0?(h.value/m*100).toFixed(1):0}%)`);return`<b>FY${E}</b>  Total: ${vt(m)}<br/>${w.join("<br/>")}`},un=d=>{const E=Math.abs(Number(d));return E>=1e9?"$"+(E/1e9).toFixed(0)+"B":"$"+(E/1e6).toFixed(0)+"M"},mn=(d,E)=>{const m=wt[E%wt.length],N=!(pt!==null)||pt===d;return{name:d,type:"line",stack:"total",areaStyle:{color:m,opacity:N?.85:.08},lineStyle:{color:m,width:1,opacity:N?1:.08},itemStyle:{color:m,opacity:N?1:.08},symbol:"none",data:me.map(z=>Q[d+"||"+z]||0)}},fn=d=>{if(!(d!=null&&d.length))return"";const E=d.slice().sort((m,w)=>w.value-m.value).filter(m=>m.value>0).map(m=>`${m.marker} ${m.seriesName}: ${vt(m.value)}`);return`<b>FY${d[0].axisValue}</b><br/>${E.join("<br/>")}`},yn=d=>{const E=Math.abs(Number(d));return E>=1e9?"$"+(E/1e9).toFixed(0)+"B":"$"+(E/1e6).toFixed(0)+"M"},gn=(d,E)=>{const m=wt[E%wt.length],w=pt===d,h=pt!==null,N=!h||w;return{name:d,type:"line",smooth:!1,symbol:"circle",symbolSize:w?7:5,lineStyle:{color:m,width:w?3.5:h?1:2.5,opacity:N?1:.08},itemStyle:{color:m,opacity:N?1:.08},label:{show:w,position:"right",offset:[4,0],color:m,fontWeight:700,fontSize:11,formatter:z=>z.dataIndex===me.length-1?d:""},data:me.map(z=>Q[d+"||"+z]||0)}},bn=d=>s(14,Wt=d);function pn(){Ya=this.value,s(15,Ya)}return n.$$set=d=>{"data"in d&&s(64,_a=d.data)},n.$$.update=()=>{var d,E;n.$$.dirty[2]&4&&s(65,{data:c={},customFormattingSettings:la,__db:Me}=_a,c),n.$$.dirty[2]&8&&Sn.set(Object.keys(c).length>0),n.$$.dirty[5]&16777216&&s(0,r=ke.params),n.$$.dirty[0]&1&&s(67,ga=P`select distinct it_tower from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and it_tower is not null
order by it_tower`),n.$$.dirty[0]&1&&s(68,de=`select distinct it_tower from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and it_tower is not null
order by it_tower`),n.$$.dirty[2]&240&&(ga||!ze?ga||(ka(de,{noResolve:ga,...Oe}),s(69,ze=!0)):ka(de,{noResolve:ga})),n.$$.dirty[0]&1&&s(71,T=P`select distinct program_name from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and program_name is not null
order by program_name`),n.$$.dirty[0]&1&&s(72,te=`select distinct program_name from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and program_name is not null
order by program_name`),n.$$.dirty[2]&3840&&(T||!oa?T||(ia(te,{noResolve:T,...b}),s(73,oa=!0)):ia(te,{noResolve:T})),n.$$.dirty[0]&1&&s(75,ba=P`select distinct fund_type from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and fund_type is not null
order by fund_type`),n.$$.dirty[0]&1&&s(76,ca=`select distinct fund_type from mbtsa.cost_pool_level
where '${r.agency}' not in ('', 'undefined')
  and agency_name = '${r.agency}' and fund_type is not null
order by fund_type`),n.$$.dirty[2]&61440&&(ba||!Ie?ba||(Le(ca,{noResolve:ba,...J}),s(77,Ie=!0)):Le(ca,{noResolve:ba})),n.$$.dirty[5]&8388608&&s(177,e=Lr(Ue==null?void 0:Ue.f_tower)),n.$$.dirty[5]&8388608&&s(176,a=Lr(Ue==null?void 0:Ue.f_program)),n.$$.dirty[5]&8388608&&s(175,t=Lr(Ue==null?void 0:Ue.f_fund)),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(79,je=P`select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(80,Fe=`select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')`),n.$$.dirty[2]&983040&&(je||!ie?je||(Ce(Fe,{noResolve:je,...ne}),s(81,ie=!0)):Ce(Fe,{noResolve:je})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(83,re=P`select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(84,Ye=`select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year`),n.$$.dirty[2]&15728640&&(re||!Ge?re||(Qe(Ye,{noResolve:re,...ye}),s(85,Ge=!0)):Qe(Ye,{noResolve:re})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(87,Re=P`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(88,Ae=`with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget`),n.$$.dirty[2]&251658240&&(Re||!Xe?Re||(he(Ae,{noResolve:Re,..._e}),s(89,Xe=!0)):he(Ae,{noResolve:Re})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(91,Ee=P`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
    coalesce(cast(max_year as varchar), 'N/A') as max_year_label
from points`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(92,He=`with points as (
    select
        m.*,
        y_5.total_budget as budget_5y_ago,
        y_10.total_budget as budget_10y_ago
    from (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year) y_5 on y_5.fiscal_year = m.max_year - 5
    left join (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
    coalesce(cast(max_year as varchar), 'N/A') as max_year_label
from points`),n.$$.dirty[2]&1879048192|n.$$.dirty[3]&1&&(Ee||!We?Ee||(f(He,{noResolve:Ee,...Te}),s(93,We=!0)):f(He,{noResolve:Ee})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(95,W=P`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(96,se=`select
    fiscal_year,
    coalesce(
        round(
            (total_budget - lag(total_budget) over (order by fiscal_year)) * 100.0
            / nullif(lag(total_budget) over (order by fiscal_year), 0),
            1
        ),
        0
    ) as change_pct
from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
order by fiscal_year`),n.$$.dirty[3]&30&&(W||!da?W||(l(se,{noResolve:W,...C}),s(97,da=!0)):l(se,{noResolve:W})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(99,Pe=P`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
order by fiscal_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(100,ua=`with base as (
    select
        fiscal_year,
        total_budget,
        first_value(total_budget) over (order by fiscal_year) as base_budget,
        first_value(fiscal_year) over (order by fiscal_year) as base_year,
        last_value(fiscal_year) over (order by fiscal_year rows between unbounded preceding and unbounded following) as max_year,
        last_value(total_budget) over (order by fiscal_year rows between unbounded preceding and unbounded following) as final_budget,
        row_number() over (order by fiscal_year) - 1 as yr_idx,
        count(*) over () - 1 as total_years
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
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
order by fiscal_year`),n.$$.dirty[3]&480&&(Pe||!Ca?Pe||(qa(ua,{noResolve:Pe,...y}),s(101,Ca=!0)):qa(ua,{noResolve:Pe})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(103,Da=P`select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(104,Aa=`select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year`),n.$$.dirty[3]&7680&&(Da||!ha?Da||(ht(Aa,{noResolve:Da,...xa}),s(105,ha=!0)):ht(Aa,{noResolve:Da})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(107,Pa=P`with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
        (r.is_like and lower(d.fund_type) like r.pattern)
        or (not r.is_like and lower(d.fund_type) = r.pattern)
    )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(108,Rt=`with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
        (r.is_like and lower(d.fund_type) like r.pattern)
        or (not r.is_like and lower(d.fund_type) = r.pattern)
    )
)
select
    d.fund_type,
    coalesce(m.fund_rank, 99) as fund_rank,
    coalesce(m.fund_color, '#4C4743') as fund_color
from distinct_funds d
left join matches m on m.fund_type = d.fund_type and m.rank_order = 1`),n.$$.dirty[3]&122880&&(Pa||!Zt?Pa||(er(Rt,{noResolve:Pa,...Ha}),s(109,Zt=!0)):er(Rt,{noResolve:Pa})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(111,za=P`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select f.fund_type, sum(f.amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.prior_year
    group by f.fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by l.latest_budget desc`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(112,Tt=`with latest as (
    select fund_type, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where fund_type is not null and trim(fund_type) <> ''
    group by fund_type
),
prior as (
    select f.fund_type, sum(f.amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.prior_year
    group by f.fund_type
),
hist_5y as (
    select f.fund_type, sum(f.amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 5
    group by f.fund_type
),
hist_10y as (
    select f.fund_type, sum(f.amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fund_type is not null and trim(f.fund_type) <> ''
        and f.fiscal_year = m.max_year - 10
    group by f.fund_type
)
select
    l.fund_type,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from latest l
left join prior p using (fund_type)
left join hist_5y h5 using (fund_type)
left join hist_10y h10 using (fund_type)
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by l.latest_budget desc`),n.$$.dirty[3]&1966080&&(za||!tr?za||(rr(Tt,{noResolve:za,...Ma}),s(113,tr=!0)):rr(Tt,{noResolve:za})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(115,Ua=P`select
    it_tower as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where it_tower is not null
group by it_tower
order by spend desc
limit 10`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(116,Et=`select
    it_tower as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where it_tower is not null
group by it_tower
order by spend desc
limit 10`),n.$$.dirty[3]&31457280&&(Ua||!nr?Ua||(sr(Et,{noResolve:Ua,...Va}),s(117,nr=!0)):sr(Et,{noResolve:Ua})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(119,Ka=P`select
    program_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where program_name is not null
group by program_name
order by spend desc
limit 10`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(120,Dt=`select
    program_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where program_name is not null
group by program_name
order by spend desc
limit 10`),n.$$.dirty[3]&503316480&&(Ka||!ir?Ka||(_r(Dt,{noResolve:Ka,...Oa}),s(121,ir=!0)):_r(Dt,{noResolve:Ka})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(123,Qa=P`select
    subprogram_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(124,St=`select
    subprogram_name as label,
    sum(amount) as spend,
    round(sum(amount) * 100.0 / nullif(sum(sum(amount)) over (), 0), 1) as pct_of_total,
    sum(sum(amount)) over (order by sum(amount) desc rows between unbounded preceding and current row) as cumulative,
    sum(sum(amount)) over () as grand_total
from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
where subprogram_name is not null
group by subprogram_name
order by spend desc
limit 10`),n.$$.dirty[3]&1610612736|n.$$.dirty[4]&3&&(Qa||!dr?Qa||(ur(St,{noResolve:Qa,...Ga}),s(125,dr=!0)):ur(St,{noResolve:Qa})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(127,Wa=P`with latest as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and it_tower is not null
    group by it_tower
),
prior as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and it_tower is not null
    group by it_tower
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(128,qt=`with latest as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and it_tower is not null
    group by it_tower
),
prior as (
    select coalesce(it_tower, '(No Tower)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and it_tower is not null
    group by it_tower
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`),n.$$.dirty[4]&60&&(Wa||!mr?Wa||(fr(qt,{noResolve:Wa,...Xa}),s(129,mr=!0)):fr(qt,{noResolve:Wa})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(131,Za=P`with latest as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and program_name is not null
    group by program_name
),
prior as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and program_name is not null
    group by program_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(132,It=`with latest as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and program_name is not null
    group by program_name
),
prior as (
    select coalesce(program_name, '(No Program)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and program_name is not null
    group by program_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`),n.$$.dirty[4]&960&&(Za||!yr?Za||(gr(It,{noResolve:Za,...Ja}),s(133,yr=!0)):gr(It,{noResolve:Za})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(135,at=P`with latest as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and subprogram_name is not null
    group by subprogram_name
),
prior as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and subprogram_name is not null
    group by subprogram_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(136,At=`with latest as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as latest_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.max_year and subprogram_name is not null
    group by subprogram_name
),
prior as (
    select coalesce(subprogram_name, '(No Subprogram)') as label, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where fiscal_year = m.prior_year and subprogram_name is not null
    group by subprogram_name
)
select
    l.label,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as pct_change
from latest l left join prior p using (label)
where abs(l.latest_budget - coalesce(p.prior_budget, 0)) > 0
order by abs(l.latest_budget - coalesce(p.prior_budget, 0)) desc`),n.$$.dirty[4]&15360&&(at||!br?at||(pr(At,{noResolve:at,...et}),s(137,br=!0)):pr(At,{noResolve:at})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(139,rt=P`with latest as (
    select it_tower, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null
    group by it_tower
),
hist_5y as (
    select it_tower, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null
    group by it_tower
),
hist_10y as (
    select it_tower, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null
    group by it_tower
)
select
    l.it_tower,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
order by l.latest_budget desc`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(140,Bt=`with latest as (
    select it_tower, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null
    group by it_tower
),
prior as (
    select it_tower, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null
    group by it_tower
),
hist_5y as (
    select it_tower, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null
    group by it_tower
),
hist_10y as (
    select it_tower, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null
    group by it_tower
)
select
    l.it_tower,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(sum(l.latest_budget) over (), 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower)
left join hist_5y h5 using (it_tower)
left join hist_10y h10 using (it_tower)
order by l.latest_budget desc`),n.$$.dirty[4]&245760&&(rt||!$r?rt||(kr(Bt,{noResolve:rt,...tt}),s(141,$r=!0)):kr(Bt,{noResolve:rt})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(143,nt=P`with latest as (
    select it_tower, program_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null
    group by it_tower, program_name
),
prior as (
    select it_tower, program_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_5y as (
    select it_tower, program_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_10y as (
    select it_tower, program_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name)
left join hist_5y h5 using (it_tower, program_name)
left join hist_10y h10 using (it_tower, program_name)
cross join total t
order by l.it_tower, l.latest_budget desc`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(144,Nt=`with latest as (
    select it_tower, program_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null
    group by it_tower, program_name
),
prior as (
    select it_tower, program_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_5y as (
    select it_tower, program_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
hist_10y as (
    select it_tower, program_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null
    group by it_tower, program_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name)
left join hist_5y h5 using (it_tower, program_name)
left join hist_10y h10 using (it_tower, program_name)
cross join total t
order by l.it_tower, l.latest_budget desc`),n.$$.dirty[4]&3932160&&(nt||!vr?nt||(xr(Nt,{noResolve:nt,...ot}),s(145,vr=!0)):xr(Nt,{noResolve:nt})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(147,lt=P`with latest as (
    select it_tower, program_name, subprogram_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null and subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
prior as (
    select it_tower, program_name, subprogram_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_5y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_10y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.subprogram_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name, subprogram_name)
left join hist_5y h5 using (it_tower, program_name, subprogram_name)
left join hist_10y h10 using (it_tower, program_name, subprogram_name)
cross join total t
order by l.it_tower, l.program_name, l.latest_budget desc`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(148,Lt=`with latest as (
    select it_tower, program_name, subprogram_name, sum(amount) as latest_budget
    from (select f.*
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
where f.fiscal_year = m.max_year)
    where it_tower is not null and program_name is not null and subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
prior as (
    select it_tower, program_name, subprogram_name, sum(amount) as prior_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.prior_year and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_5y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_5y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 5 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
hist_10y as (
    select it_tower, program_name, subprogram_name, sum(amount) as budget_10y_ago
    from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f cross join (with ordered as (
    select
        fiscal_year,
        total_budget,
        row_number() over (order by fiscal_year desc) as year_rank
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
),
bounds as (
    select
        min(fiscal_year) as start_year,
        max(fiscal_year) as max_year,
        sum(total_budget) as total_budget
    from (select
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as total_budget
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
group by fiscal_year
order by fiscal_year)
)
select
    b.start_year,
    b.max_year,
    b.total_budget,
    max(case when o.year_rank = 1 then o.total_budget end) as latest_budget,
    max(case when o.year_rank = 2 then o.total_budget end) as prior_budget,
    max(case when o.year_rank = 2 then o.fiscal_year end) as prior_year
from bounds b
left join ordered o on true
where b.max_year is not null
group by b.start_year, b.max_year, b.total_budget) m
    where f.fiscal_year = m.max_year - 10 and f.it_tower is not null and f.program_name is not null and f.subprogram_name is not null
    group by it_tower, program_name, subprogram_name
),
total as (select sum(latest_budget) as grand_total from latest)
select
    l.it_tower,
    l.program_name,
    l.subprogram_name,
    l.latest_budget,
    l.latest_budget - coalesce(p.prior_budget, 0) as dollar_change,
    round(l.latest_budget * 100.0 / nullif(t.grand_total, 0), 1) as latest_year_pct,
    round((l.latest_budget - coalesce(p.prior_budget, 0)) * 100.0 / nullif(p.prior_budget, 0), 1) as yoy_change_pct,
    round(case when h5.budget_5y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h5.budget_5y_ago, 1.0/5.0) - 1.0) * 100.0
        else null end, 1) as cagr_5y_pct,
    round(case when h10.budget_10y_ago > 0 and l.latest_budget > 0
        then (power(l.latest_budget / h10.budget_10y_ago, 1.0/10.0) - 1.0) * 100.0
        else null end, 1) as cagr_10y_pct
from latest l
left join prior p using (it_tower, program_name, subprogram_name)
left join hist_5y h5 using (it_tower, program_name, subprogram_name)
left join hist_10y h10 using (it_tower, program_name, subprogram_name)
cross join total t
order by l.it_tower, l.program_name, l.latest_budget desc`),n.$$.dirty[4]&62914560&&(lt||!Fr?lt||(Cr(Lt,{noResolve:lt,...st}),s(149,Fr=!0)):Cr(Lt,{noResolve:lt})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(151,_t=P`select
    cast(f.fiscal_year as int) as fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by f.fiscal_year, fund_rank`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(152,Yt=`select
    cast(f.fiscal_year as int) as fiscal_year,
    f.fund_type,
    sum(f.amount) as spend,
    coalesce(fp.fund_rank, 99) as fund_rank,
    coalesce(fp.fund_color, '#4C4743') as fund_color
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) f
left join (with distinct_funds as (
    select distinct fund_type from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}')) where fund_type is not null
),
rules(pattern, fund_rank, fund_color, is_like) as (
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
),
matches as (
    select
        d.fund_type,
        r.fund_rank,
        r.fund_color,
        row_number() over (partition by d.fund_type order by r.fund_rank) as rank_order
    from distinct_funds d
    join rules r on (
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
order by f.fiscal_year, fund_rank`),n.$$.dirty[4]&1006632960&&(_t||!Rr?_t||(Tr(Yt,{noResolve:_t,...it}),s(153,Rr=!0)):Tr(Yt,{noResolve:_t})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(155,dt=P`select
    it_tower,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
group by it_tower, fiscal_year
order by it_tower, fiscal_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(156,Ht=`select
    it_tower,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
group by it_tower, fiscal_year
order by it_tower, fiscal_year`),n.$$.dirty[4]&1073741824|n.$$.dirty[5]&7&&(dt||!Er?dt||(Dr(Ht,{noResolve:dt,...ct}),s(157,Er=!0)):Dr(Ht,{noResolve:dt})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(159,mt=P`select
    it_tower,
    program_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
group by it_tower, program_name, fiscal_year
order by it_tower, program_name, fiscal_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(160,Pt=`select
    it_tower,
    program_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
group by it_tower, program_name, fiscal_year
order by it_tower, program_name, fiscal_year`),n.$$.dirty[5]&120&&(mt||!Sr?mt||(qr(Pt,{noResolve:mt,...ut}),s(161,Sr=!0)):qr(Pt,{noResolve:mt})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(163,yt=P`select
    it_tower,
    program_name,
    subprogram_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
group by it_tower, program_name, subprogram_name, fiscal_year
order by it_tower, program_name, subprogram_name, fiscal_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(164,Mt=`select
    it_tower,
    program_name,
    subprogram_name,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
group by it_tower, program_name, subprogram_name, fiscal_year
order by it_tower, program_name, subprogram_name, fiscal_year`),n.$$.dirty[5]&1920&&(yt||!Ir?yt||(Ar(Mt,{noResolve:yt,...ft}),s(165,Ir=!0)):Ar(Mt,{noResolve:yt})),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(167,bt=P`select
    it_tower,
    program_name,
    subprogram_name,
    cost_pool,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
    and cost_pool is not null
group by it_tower, program_name, subprogram_name, cost_pool, fiscal_year
order by it_tower, program_name, subprogram_name, cost_pool, fiscal_year`),n.$$.dirty[0]&1|n.$$.dirty[5]&7340032&&s(168,zt=`select
    it_tower,
    program_name,
    subprogram_name,
    cost_pool,
    cast(fiscal_year as int) as fiscal_year,
    sum(amount) as spend
from (select
    cast(fiscal_year as int) as fiscal_year,
    agency_code,
    agency_name,
    program_name,
    subprogram_name,
    it_tower,
    it_sub_tower,
    it_designation,
    cost_pool,
    fund_type,
    total_budget_amount as amount
from mbtsa.cost_pool_level
where is_it = true
    and '${r.agency}' not in ('', 'undefined')
    and agency_name = '${r.agency}'
    and ('${e}' in ('%', '', 'undefined') or '${e}' like '(select%' or lower(coalesce(it_tower, '')) like '${e}')
    and ('${a}' in ('%', '', 'undefined') or '${a}' like '(select%' or lower(coalesce(program_name, '')) like '${a}')
    and ('${t}' in ('%', '', 'undefined') or '${t}' like '(select%' or lower(coalesce(fund_type, '')) like '${t}'))
where it_tower is not null
    and program_name is not null
    and subprogram_name is not null
    and cost_pool is not null
group by it_tower, program_name, subprogram_name, cost_pool, fiscal_year
order by it_tower, program_name, subprogram_name, cost_pool, fiscal_year`),n.$$.dirty[5]&30720&&(bt||!Br?bt||(Nr(zt,{noResolve:bt,...gt}),s(169,Br=!0)):Nr(zt,{noResolve:bt})),n.$$.dirty[0]&8&&s(54,p=((d=Je==null?void 0:Je[0])==null?void 0:d.cagr_pct)!=null?Number(Je[0].cagr_pct).toFixed(1):null),n.$$.dirty[0]&4&&s(53,i=[{id:"fund_type",title:"Fund Type",align:"left"},{id:"latest_budget",title:`Latest Year (${((E=ue==null?void 0:ue[0])==null?void 0:E.max_year_label)??"N/A"})`,fmt:"money",sortable:!0},{id:"latest_year_pct",title:"% of Total",fmt:"pct",sortable:!0},{id:"dollar_change",title:"YoY Change ($)",fmt:"money",conditional:!0,sortable:!0},{id:"yoy_change_pct",title:"YoY Change (%)",fmt:"pct",conditional:!0,sortable:!0}]),n.$$.dirty[0]&4096&&s(52,u=Yr),n.$$.dirty[0]&2&&Go(ge),n.$$.dirty[0]&8304&&s(51,x=La==="program"?Kt??[]:La==="subprogram"?Gt??[]:Ot??[]),n.$$.dirty[0]&8192&&s(50,D=La==="program"?"Biggest program IT spend changes vs prior year":La==="subprogram"?"Biggest subprogram IT spend changes vs prior year":"Biggest IT tower spend changes vs prior year"),n.$$.dirty[0]&8192&&s(49,ee=La==="program"?"Programs sorted by absolute dollar change in IT spend from prior year.":La==="subprogram"?"Subprograms sorted by absolute dollar change in IT spend from prior year.":"IT towers sorted by absolute dollar change from prior year."),n.$$.dirty[0]&128&&[...new Set((Ba??[]).map(m=>String(m.fiscal_year)))].sort((m,w)=>Number(m)-Number(w)),n.$$.dirty[0]&128&&s(174,fe=[...new Set((Ba??[]).map(m=>m.fund_type))].sort((m,w)=>{var z,Ze;const h=((z=Ba.find(pa=>pa.fund_type===m))==null?void 0:z.fund_rank)??99,N=((Ze=Ba.find(pa=>pa.fund_type===w))==null?void 0:Ze.fund_rank)??99;return h-N})),n.$$.dirty[0]&128|n.$$.dirty[5]&524288&&fe.reduce((m,w)=>(m[w]=(Ba??[]).filter(h=>h.fund_type===w).reduce((h,N)=>h+(Number(N.spend)||0),0),m),{}),n.$$.dirty[0]&256&&s(16,M=[...new Set((Sa??[]).map(m=>m.fiscal_year))].sort((m,w)=>m-w)),n.$$.dirty[0]&81920&&s(18,A=Wt==="3y"?M.slice(-3):Wt==="5y"?M.slice(-5):M),n.$$.dirty[0]&256&&s(21,Z=(()=>{const m=Math.max(...(Sa??[]).map(w=>w.fiscal_year));return Object.values((Sa??[]).reduce((w,h)=>(w[h.it_tower]||(w[h.it_tower]={agency_name:h.it_tower,total_budget:0,latest_budget:0}),w[h.it_tower].total_budget+=Number(h.spend)||0,h.fiscal_year===m&&(w[h.it_tower].latest_budget+=Number(h.spend)||0),w),{})).sort((w,h)=>h.latest_budget-w.latest_budget).slice(0,10)})()),n.$$.dirty[0]&256&&(Sa??[]).map(m=>({fiscal_year:m.fiscal_year,agency_name:m.it_tower,spend:m.spend})),n.$$.dirty[0]&256&&s(20,B=[...new Set((Sa??[]).map(m=>String(m.fiscal_year)))].sort((m,w)=>Number(m)-Number(w))),n.$$.dirty[0]&256&&s(19,L=(Sa??[]).reduce((m,w)=>{const h=w.it_tower+"||"+w.fiscal_year;return m[h]=(m[h]||0)+(Number(w.spend)||0),m},{})),n.$$.dirty[0]&3670016&&s(48,H=Z.map((m,w)=>{const h=B.map(pa=>L[m.agency_name+"||"+pa]||0),N=h[h.length-1]||0,z=h[h.length-2]||0,Ze=z>0?(N-z)/z*100:null;return{name:m.agency_name,color:Ut[w%Ut.length],latest:N,yoy:Ze}})),n.$$.dirty[0]&2048&&s(24,S=Object.values((Na??[]).reduce((m,w)=>(m[w.cost_pool]||(m[w.cost_pool]={name:w.cost_pool,total:0}),m[w.cost_pool].total+=Number(w.spend)||0,m),{})).sort((m,w)=>w.total-m.total).map(m=>m.name)),n.$$.dirty[0]&2048&&s(23,me=[...new Set((Na??[]).map(m=>String(m.fiscal_year)))].sort((m,w)=>Number(m)-Number(w))),n.$$.dirty[0]&2048&&s(22,Q=(Na??[]).reduce((m,w)=>{const h=w.cost_pool+"||"+w.fiscal_year;return m[h]=(m[h]||0)+(Number(w.spend)||0),m},{})),n.$$.dirty[0]&29360128&&s(47,$e=S.map((m,w)=>{const h=me.map(Ea=>Q[m+"||"+Ea]||0),N=h[h.length-1]||0,z=h[h.length-2]||0,Ze=h.length>=4?h[h.length-4]:null,pa=z>0?(N-z)/z*100:null,xt=Ze>0&&N>0?(Math.pow(N/Ze,1/3)-1)*100:null;return{name:m,color:wt[w%wt.length],latest:N,yoy:pa,cagr3:xt}})),n.$$.dirty[0]&8390656&&s(46,ae=me.reduce((m,w)=>(m[w]=(Na??[]).filter(h=>String(h.fiscal_year)===w).reduce((h,N)=>h+(Number(N.spend)||0),0),m),{})),n.$$.dirty[0]&3670016&&s(45,oe=Z.slice(0,5).map(m=>{let w=0,h=null;return B.forEach(N=>{const z=L[m.agency_name+"||"+N]||0;z>w&&(w=z,h=N)}),{name:m.agency_name,yr:h,val:w}})),n.$$.dirty[0]&65792&&s(17,na=Object.values((Sa??[]).reduce(function(m,w){return m[w.it_tower]||(m[w.it_tower]={name:w.it_tower}),m[w.it_tower]["FY"+w.fiscal_year]=(m[w.it_tower]["FY"+w.fiscal_year]||0)+w.spend,m},{})).sort((m,w)=>(w["FY"+M[M.length-1]]||0)-(m["FY"+M[M.length-1]]||0))),n.$$.dirty[0]&512&&s(173,sa=(Qt??[]).reduce(function(m,w){const h=w.it_tower,N=w.program_name;return m[h]||(m[h]={}),m[h][N]||(m[h][N]={name:N}),m[h][N]["FY"+w.fiscal_year]=(m[h][N]["FY"+w.fiscal_year]||0)+w.spend,m},{})),n.$$.dirty[0]&1024&&s(171,Ve=(Xt??[]).reduce(function(m,w){const h=w.it_tower,N=w.program_name,z=w.subprogram_name;return m[h]||(m[h]={}),m[h][N]||(m[h][N]={}),m[h][N][z]||(m[h][N][z]={name:z}),m[h][N][z]["FY"+w.fiscal_year]=(m[h][N][z]["FY"+w.fiscal_year]||0)+w.spend,m},{})),n.$$.dirty[0]&2048&&($a=(Na??[]).reduce(function(m,w){const h=w.it_tower,N=w.program_name,z=w.subprogram_name,Ze=w.cost_pool;return m[h]||(m[h]={}),m[h][N]||(m[h][N]={}),m[h][N][z]||(m[h][N][z]={}),m[h][N][z][Ze]||(m[h][N][z][Ze]={name:Ze}),m[h][N][z][Ze]["FY"+w.fiscal_year]=(m[h][N][z][Ze]["FY"+w.fiscal_year]||0)+w.spend,m},{})),n.$$.dirty[0]&393216&&s(44,fa=A.reduce(function(m,w){return m["FY"+w]=na.reduce((h,N)=>h+(N["FY"+w]||0),0),m},{})),n.$$.dirty[0]&196608&&s(172,Be=na.slice().sort(function(m,w){const h="FY"+M[M.length-1];return(w[h]||0)-(m[h]||0)})),n.$$.dirty[0]&32768&&s(170,ra=Ya.toLowerCase()),n.$$.dirty[0]&32768|n.$$.dirty[5]&393216&&Ya&&(Be.reduce(function(m,w){return m[w.name]=!0,m},{}),Object.keys(sa).reduce(function(m,w){return Object.keys(sa[w]).forEach(function(h){m[w+"||"+h]=!0}),m},{})),n.$$.dirty[0]&32768|n.$$.dirty[5]&491520&&s(43,X=Ya?Be.filter(function(m){return m.name.toLowerCase().includes(ra)?!0:Object.values(sa[m.name]??{}).some(function(h){var z;return h.name.toLowerCase().includes(ra)?!0:Object.values(((z=Ve[m.name])==null?void 0:z[h.name])??{}).some(function(Ze){return Ze.name.toLowerCase().includes(ra)})})}):Be)},[r,ge,ue,Je,Ot,Kt,Gt,Ba,Sa,Qt,Xt,Na,Yr,La,Wt,Ya,M,na,A,L,B,Z,Q,me,S,Ke,ea,wa,le,ce,ve,kt,Jt,ar,or,lr,cr,wr,hr,jr,Ur,Vt,pt,X,fa,oe,ae,$e,H,ee,D,x,u,i,p,Vr,vt,Or,Kr,Ut,wt,Qo,Jo,Zo,_a,c,Oe,ga,de,ze,b,T,te,oa,J,ba,ca,Ie,ne,je,Fe,ie,ye,re,Ye,Ge,_e,Re,Ae,Xe,Te,Ee,He,We,C,W,se,da,y,Pe,ua,Ca,xa,Da,Aa,ha,Ha,Pa,Rt,Zt,Ma,za,Tt,tr,Va,Ua,Et,nr,Oa,Ka,Dt,ir,Ga,Qa,St,dr,Xa,Wa,qt,mr,Ja,Za,It,yr,et,at,At,br,tt,rt,Bt,$r,ot,nt,Nt,vr,st,lt,Lt,Fr,it,_t,Yt,Rr,ct,dt,Ht,Er,ut,mt,Pt,Sr,ft,yt,Mt,Ir,gt,bt,zt,Br,ra,Ve,Be,sa,fe,t,a,e,Ue,ke,en,an,tn,rn,on,nn,sn,ln,_n,cn,dn,un,mn,fn,yn,gn,bn,pn]}class Ys extends Cn{constructor(o){super(),Rn(this,o,vs,hs,kn,{data:64},null,[-1,-1,-1,-1,-1,-1,-1,-1,-1])}}export{Ys as component};
