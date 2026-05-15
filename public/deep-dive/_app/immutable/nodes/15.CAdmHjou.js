import{s as za,x as Oe,d as u,i as k,k as re,a as Re,c as H,e as o,f as i,j as m,m as T,g as R,l as ae,p as v,o as w,b as Y,n as O,t as j,O as bl,V as jn,y as Me,a2 as se,a3 as _e,h as so,q as hr,r as _o,u as fo,v as uo,w as po}from"../chunks/scheduler.gB4SLSCe.js";import{S as Wa,i as Pa,d as tl,t as Se,a as ue,c as rn,m as ll,b as nl,e as al,g as on}from"../chunks/index.B2u9Pwr3.js";import{e as ie,a as co,s as ho,Q as sn,p as mo,b as mr,r as vr,C as vo}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.cXg-SiQz.js";import{w as yo}from"../chunks/entry.DfXyuC9D.js";import{h as Be}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Eo}from"../chunks/stores.DmjcZFIJ.js";import{Q as fn}from"../chunks/QueryViewer.WiVAHu4F.js";import{p as go}from"../chunks/profile.BW8tN6E9.js";function yr(t,e,l){const n=t.slice();n[11]=e[l];const a=n[4](n[11].start);n[12]=a;const s=Math.max(n[4](n[11].end)-n[12],1);return n[13]=s,n}function Er(t,e,l){const n=t.slice();return n[16]=e[l],n}function gr(t,e,l){const n=t.slice();return n[16]=e[l],n}function Ao(t){let e,l="No phase date data available";return{c(){e=v("div"),e.textContent=l,this.h()},l(n){e=m(n,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1faqlrf"&&(e.textContent=l),this.h()},h(){i(e,"class","empty svelte-1wjip8p")},m(n,a){k(n,e,a)},p:Oe,d(n){n&&u(e)}}}function To(t){let e,l,n,a,s,r,_,d,f,A,D="Today",y,S=ie(t[1]),E=[];for(let N=0;N<S.length;N+=1)E[N]=Ar(gr(t,S,N));let g=ie(t[0]),I=[];for(let N=0;N<g.length;N+=1)I[N]=Sr(yr(t,g,N));return{c(){e=v("div"),l=v("div"),n=v("div"),a=w(),s=v("div");for(let N=0;N<E.length;N+=1)E[N].c();r=w(),_=v("div"),d=v("div"),f=w(),A=v("div"),A.textContent=D,y=w();for(let N=0;N<I.length;N+=1)I[N].c();this.h()},l(N){e=m(N,"DIV",{class:!0});var z=T(e);l=m(z,"DIV",{class:!0});var b=T(l);n=m(b,"DIV",{class:!0}),T(n).forEach(u),a=R(b),s=m(b,"DIV",{class:!0});var W=T(s);for(let c=0;c<E.length;c+=1)E[c].l(W);r=R(W),_=m(W,"DIV",{class:!0,style:!0});var P=T(_);d=m(P,"DIV",{class:!0}),T(d).forEach(u),f=R(P),A=m(P,"DIV",{class:!0,"data-svelte-h":!0}),ae(A)!=="svelte-1t6vus8"&&(A.textContent=D),P.forEach(u),W.forEach(u),b.forEach(u),y=R(z);for(let c=0;c<I.length;c+=1)I[c].l(z);z.forEach(u),this.h()},h(){i(n,"class","tl-label-col svelte-1wjip8p"),i(d,"class","today-line"),i(A,"class","today-label svelte-1wjip8p"),i(_,"class","today-mark svelte-1wjip8p"),H(_,"left",t[2]+"%"),i(s,"class","tl-track svelte-1wjip8p"),i(l,"class","tl-header svelte-1wjip8p"),i(e,"class","timeline-wrap svelte-1wjip8p")},m(N,z){k(N,e,z),o(e,l),o(l,n),o(l,a),o(l,s);for(let b=0;b<E.length;b+=1)E[b]&&E[b].m(s,null);o(s,r),o(s,_),o(_,d),o(_,f),o(_,A),o(e,y);for(let b=0;b<I.length;b+=1)I[b]&&I[b].m(e,null)},p(N,z){if(z&2){S=ie(N[1]);let b;for(b=0;b<S.length;b+=1){const W=gr(N,S,b);E[b]?E[b].p(W,z):(E[b]=Ar(W),E[b].c(),E[b].m(s,r))}for(;b<E.length;b+=1)E[b].d(1);E.length=S.length}if(z&4&&H(_,"left",N[2]+"%"),z&31){g=ie(N[0]);let b;for(b=0;b<g.length;b+=1){const W=yr(N,g,b);I[b]?I[b].p(W,z):(I[b]=Sr(W),I[b].c(),I[b].m(e,null))}for(;b<I.length;b+=1)I[b].d(1);I.length=g.length}},d(N){N&&u(e),Re(E,N),Re(I,N)}}}function Ar(t){let e,l,n,a,s=t[16].year+"",r,_;return{c(){e=v("div"),l=v("div"),n=w(),a=v("div"),r=j(s),_=w(),this.h()},l(d){e=m(d,"DIV",{class:!0,style:!0});var f=T(e);l=m(f,"DIV",{class:!0}),T(l).forEach(u),n=R(f),a=m(f,"DIV",{class:!0});var A=T(a);r=O(A,s),A.forEach(u),_=R(f),f.forEach(u),this.h()},h(){i(l,"class","yr-line svelte-1wjip8p"),i(a,"class","yr-label svelte-1wjip8p"),i(e,"class","yr-mark svelte-1wjip8p"),H(e,"left",t[16].pct+"%")},m(d,f){k(d,e,f),o(e,l),o(e,n),o(e,a),o(a,r),o(e,_)},p(d,f){f&2&&s!==(s=d[16].year+"")&&Y(r,s),f&2&&H(e,"left",d[16].pct+"%")},d(d){d&&u(e)}}}function Tr(t){let e;return{c(){e=v("div"),this.h()},l(l){e=m(l,"DIV",{class:!0,style:!0}),T(e).forEach(u),this.h()},h(){i(e,"class","yr-grid svelte-1wjip8p"),H(e,"left",t[16].pct+"%")},m(l,n){k(l,e,n)},p(l,n){n&2&&H(e,"left",l[16].pct+"%")},d(l){l&&u(e)}}}function Sr(t){let e,l,n,a,s=t[11].name+"",r,_,d,f,A,D,y,S,E=Tt(t[11].start)+"",g,I,N=Tt(t[11].end)+"",z,b,W,P,c=Tt(t[11].start)+"",C,h,F,L="→",G,Q,V=Tt(t[11].end)+"",X,te,le=ie(t[1]),U=[];for(let $=0;$<le.length;$+=1)U[$]=Tr(Er(t,le,$));return{c(){e=v("div"),l=v("div"),n=v("span"),a=w(),r=j(s),_=w(),d=v("div");for(let $=0;$<U.length;$+=1)U[$].c();f=w(),A=v("div"),D=w(),y=v("div"),S=v("span"),g=j(E),I=j(" – "),z=j(N),b=w(),W=v("div"),P=v("span"),C=j(c),h=w(),F=v("span"),F.textContent=L,G=w(),Q=v("span"),X=j(V),te=w(),this.h()},l($){e=m($,"DIV",{class:!0});var K=T(e);l=m(K,"DIV",{class:!0});var Z=T(l);n=m(Z,"SPAN",{class:!0,style:!0}),T(n).forEach(u),a=R(Z),r=O(Z,s),Z.forEach(u),_=R(K),d=m(K,"DIV",{class:!0});var J=T(d);for(let ne=0;ne<U.length;ne+=1)U[ne].l(J);f=R(J),A=m(J,"DIV",{class:!0,style:!0}),T(A).forEach(u),D=R(J),y=m(J,"DIV",{class:!0,style:!0});var Ee=T(y);S=m(Ee,"SPAN",{class:!0});var ge=T(S);g=O(ge,E),I=O(ge," – "),z=O(ge,N),ge.forEach(u),Ee.forEach(u),J.forEach(u),b=R(K),W=m(K,"DIV",{class:!0});var be=T(W);P=m(be,"SPAN",{});var we=T(P);C=O(we,c),we.forEach(u),h=R(be),F=m(be,"SPAN",{class:!0,"data-svelte-h":!0}),ae(F)!=="svelte-wkbcib"&&(F.textContent=L),G=R(be),Q=m(be,"SPAN",{});var fe=T(Q);X=O(fe,V),fe.forEach(u),be.forEach(u),te=R(K),K.forEach(u),this.h()},h(){i(n,"class","phase-dot svelte-1wjip8p"),H(n,"background",t[3][t[11].name]),i(l,"class","tl-label-col svelte-1wjip8p"),i(A,"class","today-grid svelte-1wjip8p"),H(A,"left",t[2]+"%"),i(S,"class","bar-dates svelte-1wjip8p"),i(y,"class","phase-bar svelte-1wjip8p"),H(y,"left",t[12]+"%"),H(y,"width",t[13]+"%"),H(y,"background",t[3][t[11].name]),i(d,"class","tl-track svelte-1wjip8p"),i(F,"class","dates-sep svelte-1wjip8p"),i(W,"class","tl-dates-col svelte-1wjip8p"),i(e,"class","tl-row svelte-1wjip8p")},m($,K){k($,e,K),o(e,l),o(l,n),o(l,a),o(l,r),o(e,_),o(e,d);for(let Z=0;Z<U.length;Z+=1)U[Z]&&U[Z].m(d,null);o(d,f),o(d,A),o(d,D),o(d,y),o(y,S),o(S,g),o(S,I),o(S,z),o(e,b),o(e,W),o(W,P),o(P,C),o(W,h),o(W,F),o(W,G),o(W,Q),o(Q,X),o(e,te)},p($,K){if(K&1&&H(n,"background",$[3][$[11].name]),K&1&&s!==(s=$[11].name+"")&&Y(r,s),K&2){le=ie($[1]);let Z;for(Z=0;Z<le.length;Z+=1){const J=Er($,le,Z);U[Z]?U[Z].p(J,K):(U[Z]=Tr(J),U[Z].c(),U[Z].m(d,f))}for(;Z<U.length;Z+=1)U[Z].d(1);U.length=le.length}K&4&&H(A,"left",$[2]+"%"),K&1&&E!==(E=Tt($[11].start)+"")&&Y(g,E),K&1&&N!==(N=Tt($[11].end)+"")&&Y(z,N),K&1&&H(y,"left",$[12]+"%"),K&1&&H(y,"width",$[13]+"%"),K&1&&H(y,"background",$[3][$[11].name]),K&1&&c!==(c=Tt($[11].start)+"")&&Y(C,c),K&1&&V!==(V=Tt($[11].end)+"")&&Y(X,V)},d($){$&&u(e),Re(U,$)}}}function So(t){let e;function l(s,r){return s[0].length>0?To:Ao}let n=l(t),a=n(t);return{c(){a.c(),e=re()},l(s){a.l(s),e=re()},m(s,r){a.m(s,r),k(s,e,r)},p(s,[r]){n===(n=l(s))&&a?a.p(s,r):(a.d(1),a=n(s),a&&(a.c(),a.m(e.parentNode,e)))},i:Oe,o:Oe,d(s){s&&u(e),a.d(s)}}}function Tt(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function bo(t,e,l){let n,a,s,r,_,d,f,{data:A=[]}=e;const D={Procurement:"#7F77DD",Implementation:"#378ADD","O&M":"#639922"},y=new Date;function S(E){return Math.max(0,Math.min(100,(new Date(E)-s)/_*100))}return t.$$set=E=>{"data"in E&&l(5,A=E.data)},t.$$.update=()=>{var E,g;t.$$.dirty&32&&l(9,n=Array.from(A)[0]||{}),t.$$.dirty&512&&l(0,a=[n.proc_start&&n.proc_end?{name:"Procurement",start:new Date(n.proc_start),end:new Date(n.proc_end)}:null,n.impl_start&&n.impl_end?{name:"Implementation",start:new Date(n.impl_start),end:new Date(n.impl_end)}:null,n.om_start&&n.om_end?{name:"O&M",start:new Date(n.om_start),end:new Date(n.om_end)}:null].filter(Boolean)),t.$$.dirty&1&&l(7,s=a.reduce((I,N)=>N.start<I?N.start:I,((E=a[0])==null?void 0:E.start)||y)),t.$$.dirty&1&&l(8,r=a.reduce((I,N)=>N.end>I?N.end:I,((g=a[0])==null?void 0:g.end)||y)),t.$$.dirty&384&&l(6,_=Math.max(r-s,1)),t.$$.dirty&192&&l(2,d=Math.max(0,Math.min(100,(y-s)/_*100))),t.$$.dirty&448&&l(1,f=(()=>{const I=[];for(let N=s.getFullYear();N<=r.getFullYear()+1;N++){const z=Math.max(0,Math.min(100,(new Date(N,0,1)-s)/_*100));I.push({year:N,pct:z})}return I})())},[a,f,d,D,S,A,_,s,r,n]}class No extends Wa{constructor(e){super(),Pa(this,e,bo,So,za,{data:5})}}function br(t,e,l){const n=t.slice();return n[45]=e[l],n[47]=l,n}function La(t){const e=t.slice(),l=178;e[41]=l;const n=e[9].rows.length*18+28;e[42]=n;const a=Math.min(e[10]+10,Sl-e[41]-4);e[43]=a;const s=Math.max(e[11]-e[42]-10,_n);return e[44]=s,e}function Nr(t,e,l){const n=t.slice();return n[55]=e[l],n[50]=l,n}function Cr(t,e,l){const n=t.slice();return n[57]=e[l],n[50]=l,n}function Dr(t,e,l){const n=t.slice();return n[57]=e[l],n[50]=l,n}function Ir(t,e,l){const n=t.slice();return n[57]=e[l],n[50]=l,n}function Fr(t,e,l){const n=t.slice();return n[50]=e[l],n}function Rr(t,e,l){const n=t.slice();n[51]=e[l];const a=n[22](n[51],n[5]);return n[52]=a,n}function wr(t,e,l){const n=t.slice();return n[48]=e[l],n[50]=l,n}function kr(t,e,l){const n=t.slice();n[51]=e[l];const a=n[17](n[51],n[7]);return n[52]=a,n}function Co(t){let e,l='<span class="ln svelte-f0oho1" style="background:#7F77DD"></span>Cumul. appropriation',n,a,s='<span class="ln svelte-f0oho1" style="background:#1D9E75"></span>Cumul. actual spend',r,_,d='<span class="da svelte-f0oho1" style="border-color:#1D9E75"></span>Cumul. planned spend';return{c(){e=v("span"),e.innerHTML=l,n=w(),a=v("span"),a.innerHTML=s,r=w(),_=v("span"),_.innerHTML=d,this.h()},l(f){e=m(f,"SPAN",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1jiouxr"&&(e.innerHTML=l),n=R(f),a=m(f,"SPAN",{class:!0,"data-svelte-h":!0}),ae(a)!=="svelte-1vd8zs3"&&(a.innerHTML=s),r=R(f),_=m(f,"SPAN",{class:!0,"data-svelte-h":!0}),ae(_)!=="svelte-qvvm4o"&&(_.innerHTML=d),this.h()},h(){i(e,"class","leg svelte-f0oho1"),i(a,"class","leg svelte-f0oho1"),i(_,"class","leg svelte-f0oho1")},m(f,A){k(f,e,A),k(f,n,A),k(f,a,A),k(f,r,A),k(f,_,A)},d(f){f&&(u(e),u(n),u(a),u(r),u(_))}}}function Do(t){let e,l='<span class="sq svelte-f0oho1" style="background:#7F77DD"></span>Appropriation',n,a,s='<span class="sq svelte-f0oho1" style="background:#1D9E75"></span>Actual spend',r,_,d='<span class="sq svelte-f0oho1" style="background:rgba(29,158,117,0.35);border:1px solid #1D9E75"></span>Planned spend';return{c(){e=v("span"),e.innerHTML=l,n=w(),a=v("span"),a.innerHTML=s,r=w(),_=v("span"),_.innerHTML=d,this.h()},l(f){e=m(f,"SPAN",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-163mw0d"&&(e.innerHTML=l),n=R(f),a=m(f,"SPAN",{class:!0,"data-svelte-h":!0}),ae(a)!=="svelte-1ip8hdt"&&(a.innerHTML=s),r=R(f),_=m(f,"SPAN",{class:!0,"data-svelte-h":!0}),ae(_)!=="svelte-zbfzcb"&&(_.innerHTML=d),this.h()},h(){i(e,"class","leg svelte-f0oho1"),i(a,"class","leg svelte-f0oho1"),i(_,"class","leg svelte-f0oho1")},m(f,A){k(f,e,A),k(f,n,A),k(f,a,A),k(f,r,A),k(f,_,A)},d(f){f&&(u(e),u(n),u(a),u(r),u(_))}}}function Io(t){let e,l,n,a,s,r,_,d,f,A=ie(t[13]),D=[];for(let c=0;c<A.length;c+=1)D[c]=Mr(Rr(t,A,c));let y=ie([0,1]),S=[];for(let c=0;c<2;c+=1)S[c]=Or(Fr(t,y,c));let E=ie(t[2]),g=[];for(let c=0;c<E.length;c+=1)g[c]=jr(Ir(t,E,c));let I=ie(t[1]),N=[];for(let c=0;c<I.length;c+=1)N[c]=zr(Dr(t,I,c));let z=ie(t[0]),b=[];for(let c=0;c<z.length;c+=1)b[c]=Pr(Cr(t,z,c));let W=ie(t[16]),P=[];for(let c=0;c<W.length;c+=1)P[c]=Yr(Nr(t,W,c));return{c(){for(let c=0;c<D.length;c+=1)D[c].c();e=re();for(let c=0;c<2;c+=1)S[c].c();l=_e("polyline");for(let c=0;c<g.length;c+=1)g[c].c();a=_e("polyline");for(let c=0;c<N.length;c+=1)N[c].c();r=_e("polyline");for(let c=0;c<b.length;c+=1)b[c].c();d=re();for(let c=0;c<P.length;c+=1)P[c].c();f=re(),this.h()},l(c){for(let C=0;C<D.length;C+=1)D[C].l(c);e=re();for(let C=0;C<2;C+=1)S[C].l(c);l=se(c,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linejoin":!0}),T(l).forEach(u);for(let C=0;C<g.length;C+=1)g[C].l(c);a=se(c,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linejoin":!0}),T(a).forEach(u);for(let C=0;C<N.length;C+=1)N[C].l(c);r=se(c,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-dasharray":!0,"stroke-linejoin":!0,opacity:!0}),T(r).forEach(u);for(let C=0;C<b.length;C+=1)b[C].l(c);d=re();for(let C=0;C<P.length;C+=1)P[C].l(c);f=re(),this.h()},h(){i(l,"points",n=t[23](t[2],t[5])),i(l,"fill","none"),i(l,"stroke","#7F77DD"),i(l,"stroke-width","2.5"),i(l,"stroke-linejoin","round"),i(a,"points",s=t[23](t[1],t[5])),i(a,"fill","none"),i(a,"stroke","#1D9E75"),i(a,"stroke-width","2.5"),i(a,"stroke-linejoin","round"),i(r,"points",_=t[23](t[0],t[5])),i(r,"fill","none"),i(r,"stroke","#1D9E75"),i(r,"stroke-width","2"),i(r,"stroke-dasharray","6 4"),i(r,"stroke-linejoin","round"),i(r,"opacity","0.65")},m(c,C){for(let h=0;h<D.length;h+=1)D[h]&&D[h].m(c,C);k(c,e,C);for(let h=0;h<2;h+=1)S[h]&&S[h].m(c,C);k(c,l,C);for(let h=0;h<g.length;h+=1)g[h]&&g[h].m(c,C);k(c,a,C);for(let h=0;h<N.length;h+=1)N[h]&&N[h].m(c,C);k(c,r,C);for(let h=0;h<b.length;h+=1)b[h]&&b[h].m(c,C);k(c,d,C);for(let h=0;h<P.length;h+=1)P[h]&&P[h].m(c,C);k(c,f,C)},p(c,C){if(C[0]&4202528){A=ie(c[13]);let h;for(h=0;h<A.length;h+=1){const F=Rr(c,A,h);D[h]?D[h].p(F,C):(D[h]=Mr(F),D[h].c(),D[h].m(e.parentNode,e))}for(;h<D.length;h+=1)D[h].d(1);D.length=A.length}if(C[0]&6291494){y=ie([0,1]);let h;for(h=0;h<2;h+=1){const F=Fr(c,y,h);S[h]?S[h].p(F,C):(S[h]=Or(F),S[h].c(),S[h].m(l.parentNode,l))}for(;h<2;h+=1)S[h].d(1)}if(C[0]&36&&n!==(n=c[23](c[2],c[5]))&&i(l,"points",n),C[0]&106954788){E=ie(c[2]);let h;for(h=0;h<E.length;h+=1){const F=Ir(c,E,h);g[h]?g[h].p(F,C):(g[h]=jr(F),g[h].c(),g[h].m(a.parentNode,a))}for(;h<g.length;h+=1)g[h].d(1);g.length=E.length}if(C[0]&34&&s!==(s=c[23](c[1],c[5]))&&i(a,"points",s),C[0]&106954786){I=ie(c[1]);let h;for(h=0;h<I.length;h+=1){const F=Dr(c,I,h);N[h]?N[h].p(F,C):(N[h]=zr(F),N[h].c(),N[h].m(r.parentNode,r))}for(;h<N.length;h+=1)N[h].d(1);N.length=I.length}if(C[0]&33&&_!==(_=c[23](c[0],c[5]))&&i(r,"points",_),C[0]&106954785){z=ie(c[0]);let h;for(h=0;h<z.length;h+=1){const F=Cr(c,z,h);b[h]?b[h].p(F,C):(b[h]=Pr(F),b[h].c(),b[h].m(d.parentNode,d))}for(;h<b.length;h+=1)b[h].d(1);b.length=z.length}if(C[0]&2162688){W=ie(c[16]);let h;for(h=0;h<W.length;h+=1){const F=Nr(c,W,h);P[h]?P[h].p(F,C):(P[h]=Yr(F),P[h].c(),P[h].m(f.parentNode,f))}for(;h<P.length;h+=1)P[h].d(1);P.length=W.length}},d(c){c&&(u(e),u(l),u(a),u(r),u(d),u(f)),Re(D,c),Re(S,c),Re(g,c),Re(N,c),Re(b,c),Re(P,c)}}}function Fo(t){let e,l,n=ie(t[15]),a=[];for(let _=0;_<n.length;_+=1)a[_]=$r(kr(t,n,_));let s=ie(t[4]),r=[];for(let _=0;_<s.length;_+=1)r[_]=Br(wr(t,s,_));return{c(){for(let _=0;_<a.length;_+=1)a[_].c();e=re();for(let _=0;_<r.length;_+=1)r[_].c();l=re()},l(_){for(let d=0;d<a.length;d+=1)a[d].l(_);e=re();for(let d=0;d<r.length;d+=1)r[d].l(_);l=re()},m(_,d){for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(_,d);k(_,e,d);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(_,d);k(_,l,d)},p(_,d){if(d[0]&163968){n=ie(_[15]);let f;for(f=0;f<n.length;f+=1){const A=kr(_,n,f);a[f]?a[f].p(A,d):(a[f]=$r(A),a[f].c(),a[f].m(e.parentNode,e))}for(;f<a.length;f+=1)a[f].d(1);a.length=n.length}if(d[0]&85938392){s=ie(_[4]);let f;for(f=0;f<s.length;f+=1){const A=wr(_,s,f);r[f]?r[f].p(A,d):(r[f]=Br(A),r[f].c(),r[f].m(l.parentNode,l))}for(;f<r.length;f+=1)r[f].d(1);r.length=s.length}},d(_){_&&(u(e),u(l)),Re(a,_),Re(r,_)}}}function Mr(t){let e,l,n,a,s=Ln(t[51])+"",r,_;return{c(){e=_e("line"),a=_e("text"),r=j(s),this.h()},l(d){e=se(d,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),T(e).forEach(u),a=se(d,"text",{x:!0,y:!0,"text-anchor":!0,"font-size":!0,fill:!0});var f=T(a);r=O(f,s),f.forEach(u),this.h()},h(){i(e,"x1",ke),i(e,"y1",l=t[52]),i(e,"x2",Sl-zn),i(e,"y2",n=t[52]),i(e,"stroke","var(--grey-100,#eee)"),i(e,"stroke-width","0.5"),i(a,"x",ke-5),i(a,"y",_=t[52]+4),i(a,"text-anchor","end"),i(a,"font-size","10"),i(a,"fill","var(--grey-400,#aaa)")},m(d,f){k(d,e,f),k(d,a,f),o(a,r)},p(d,f){f[0]&8224&&l!==(l=d[52])&&i(e,"y1",l),f[0]&8224&&n!==(n=d[52])&&i(e,"y2",n),f[0]&8192&&s!==(s=Ln(d[51])+"")&&Y(r,s),f[0]&8224&&_!==(_=d[52]+4)&&i(a,"y",_)},d(d){d&&(u(e),u(a))}}}function Hr(t){let e,l,n;return{c(){e=_e("rect"),this.h()},l(a){e=se(a,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),T(e).forEach(u),this.h()},h(){i(e,"x",t[21](t[50])-1),i(e,"y",l=t[22](t[2][t[50]],t[5])),i(e,"width","2"),i(e,"height",n=t[22](t[1][t[50]],t[5])-t[22](t[2][t[50]],t[5])),i(e,"fill","rgba(127,119,221,0.15)")},m(a,s){k(a,e,s)},p(a,s){s[0]&36&&l!==(l=a[22](a[2][a[50]],a[5]))&&i(e,"y",l),s[0]&38&&n!==(n=a[22](a[1][a[50]],a[5])-a[22](a[2][a[50]],a[5]))&&i(e,"height",n)},d(a){a&&u(e)}}}function Or(t){let e,l=t[1][t[50]]&&Hr(t);return{c(){l&&l.c(),e=re()},l(n){l&&l.l(n),e=re()},m(n,a){l&&l.m(n,a),k(n,e,a)},p(n,a){n[1][n[50]]?l?l.p(n,a):(l=Hr(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){n&&u(e),l&&l.d(n)}}}function jr(t){let e,l,n,a;function s(...r){return t[34](t[50],...r)}return{c(){e=_e("circle"),this.h()},l(r){e=se(r,"circle",{cx:!0,cy:!0,r:!0,fill:!0,style:!0}),T(e).forEach(u),this.h()},h(){i(e,"cx",t[21](t[50])),i(e,"cy",l=t[22](t[57],t[5])),i(e,"r","5"),i(e,"fill","#7F77DD"),H(e,"cursor","pointer")},m(r,_){k(r,e,_),n||(a=[Me(e,"mouseenter",s),Me(e,"mouseleave",t[26])],n=!0)},p(r,_){t=r,_[0]&36&&l!==(l=t[22](t[57],t[5]))&&i(e,"cy",l)},d(r){r&&u(e),n=!1,bl(a)}}}function Lr(t){let e,l,n,a;function s(...r){return t[35](t[50],...r)}return{c(){e=_e("circle"),this.h()},l(r){e=se(r,"circle",{cx:!0,cy:!0,r:!0,fill:!0,style:!0}),T(e).forEach(u),this.h()},h(){i(e,"cx",t[21](t[50])),i(e,"cy",l=t[22](t[57],t[5])),i(e,"r","5"),i(e,"fill","#1D9E75"),H(e,"cursor","pointer")},m(r,_){k(r,e,_),n||(a=[Me(e,"mouseenter",s),Me(e,"mouseleave",t[26])],n=!0)},p(r,_){t=r,_[0]&34&&l!==(l=t[22](t[57],t[5]))&&i(e,"cy",l)},d(r){r&&u(e),n=!1,bl(a)}}}function zr(t){let e,l=t[57]!=null&&Lr(t);return{c(){l&&l.c(),e=re()},l(n){l&&l.l(n),e=re()},m(n,a){l&&l.m(n,a),k(n,e,a)},p(n,a){n[57]!=null?l?l.p(n,a):(l=Lr(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){n&&u(e),l&&l.d(n)}}}function Wr(t){let e,l,n,a;function s(...r){return t[36](t[50],...r)}return{c(){e=_e("circle"),this.h()},l(r){e=se(r,"circle",{cx:!0,cy:!0,r:!0,fill:!0,opacity:!0,style:!0}),T(e).forEach(u),this.h()},h(){i(e,"cx",t[21](t[50])),i(e,"cy",l=t[22](t[57],t[5])),i(e,"r","4"),i(e,"fill","#1D9E75"),i(e,"opacity","0.65"),H(e,"cursor","pointer")},m(r,_){k(r,e,_),n||(a=[Me(e,"mouseenter",s),Me(e,"mouseleave",t[26])],n=!0)},p(r,_){t=r,_[0]&33&&l!==(l=t[22](t[57],t[5]))&&i(e,"cy",l)},d(r){r&&u(e),n=!1,bl(a)}}}function Pr(t){let e,l=t[57]!=null&&Wr(t);return{c(){l&&l.c(),e=re()},l(n){l&&l.l(n),e=re()},m(n,a){l&&l.m(n,a),k(n,e,a)},p(n,a){n[57]!=null?l?l.p(n,a):(l=Wr(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){n&&u(e),l&&l.d(n)}}}function Yr(t){let e,l=t[55]+"",n;return{c(){e=_e("text"),n=j(l),this.h()},l(a){e=se(a,"text",{x:!0,y:!0,"text-anchor":!0,"font-size":!0,fill:!0});var s=T(e);n=O(s,l),s.forEach(u),this.h()},h(){i(e,"x",t[21](t[50])),i(e,"y",el-Tl+14),i(e,"text-anchor","middle"),i(e,"font-size","10"),i(e,"fill","var(--grey-400,#aaa)")},m(a,s){k(a,e,s),o(e,n)},p:Oe,d(a){a&&u(e)}}}function $r(t){let e,l,n,a,s=Ln(t[51])+"",r,_;return{c(){e=_e("line"),a=_e("text"),r=j(s),this.h()},l(d){e=se(d,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),T(e).forEach(u),a=se(d,"text",{x:!0,y:!0,"text-anchor":!0,"font-size":!0,fill:!0});var f=T(a);r=O(f,s),f.forEach(u),this.h()},h(){i(e,"x1",ke),i(e,"y1",l=t[52]),i(e,"x2",Sl-zn),i(e,"y2",n=t[52]),i(e,"stroke","var(--grey-100,#eee)"),i(e,"stroke-width","0.5"),i(a,"x",ke-5),i(a,"y",_=t[52]+4),i(a,"text-anchor","end"),i(a,"font-size","10"),i(a,"fill","var(--grey-400,#aaa)")},m(d,f){k(d,e,f),k(d,a,f),o(a,r)},p(d,f){f[0]&32896&&l!==(l=d[52])&&i(e,"y1",l),f[0]&32896&&n!==(n=d[52])&&i(e,"y2",n),f[0]&32768&&s!==(s=Ln(d[51])+"")&&Y(r,s),f[0]&32896&&_!==(_=d[52]+4)&&i(a,"y",_)},d(d){d&&(u(e),u(a))}}}function Vr(t){let e,l,n,a,s;function r(..._){return t[32](t[50],..._)}return{c(){e=_e("rect"),this.h()},l(_){e=se(_,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,rx:!0,style:!0}),T(e).forEach(u),this.h()},h(){i(e,"x",t[19](t[50])),i(e,"y",l=t[17](t[48],t[7])),i(e,"width",t[14]),i(e,"height",n=t[18](t[48],t[7])),i(e,"fill","#7F77DD"),i(e,"rx","2"),H(e,"cursor","pointer")},m(_,d){k(_,e,d),a||(s=[Me(e,"mouseenter",r),Me(e,"mouseleave",t[26])],a=!0)},p(_,d){t=_,d[0]&144&&l!==(l=t[17](t[48],t[7]))&&i(e,"y",l),d[0]&16384&&i(e,"width",t[14]),d[0]&144&&n!==(n=t[18](t[48],t[7]))&&i(e,"height",n)},d(_){_&&u(e),a=!1,bl(s)}}}function qr(t){let e,l,n,a,s,r,_;function d(...f){return t[33](t[50],...f)}return{c(){e=_e("rect"),this.h()},l(f){e=se(f,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,stroke:!0,"stroke-width":!0,rx:!0,style:!0}),T(e).forEach(u),this.h()},h(){i(e,"x",t[20](t[50])),i(e,"y",l=t[17](t[3][t[50]],t[7])),i(e,"width",t[14]),i(e,"height",n=t[18](t[3][t[50]],t[7])),i(e,"fill",a=t[12][t[50]]?"rgba(29,158,117,0.35)":"#1D9E75"),i(e,"stroke",s=t[12][t[50]]?"#1D9E75":"none"),i(e,"stroke-width","1"),i(e,"rx","2"),H(e,"cursor","pointer")},m(f,A){k(f,e,A),r||(_=[Me(e,"mouseenter",d),Me(e,"mouseleave",t[26])],r=!0)},p(f,A){t=f,A[0]&136&&l!==(l=t[17](t[3][t[50]],t[7]))&&i(e,"y",l),A[0]&16384&&i(e,"width",t[14]),A[0]&136&&n!==(n=t[18](t[3][t[50]],t[7]))&&i(e,"height",n),A[0]&4096&&a!==(a=t[12][t[50]]?"rgba(29,158,117,0.35)":"#1D9E75")&&i(e,"fill",a),A[0]&4096&&s!==(s=t[12][t[50]]?"#1D9E75":"none")&&i(e,"stroke",s)},d(f){f&&u(e),r=!1,bl(_)}}}function Br(t){let e,l,n=t[16][t[50]]+"",a,s,r=t[48]>0&&Vr(t),_=t[3][t[50]]>0&&qr(t);return{c(){r&&r.c(),e=re(),_&&_.c(),l=_e("text"),a=j(n),this.h()},l(d){r&&r.l(d),e=re(),_&&_.l(d),l=se(d,"text",{x:!0,y:!0,"text-anchor":!0,"font-size":!0,fill:!0});var f=T(l);a=O(f,n),f.forEach(u),this.h()},h(){i(l,"x",s=ke+t[6]*t[50]+t[6]/2),i(l,"y",el-Tl+14),i(l,"text-anchor","middle"),i(l,"font-size","10"),i(l,"fill","var(--grey-400,#aaa)")},m(d,f){r&&r.m(d,f),k(d,e,f),_&&_.m(d,f),k(d,l,f),o(l,a)},p(d,f){d[48]>0?r?r.p(d,f):(r=Vr(d),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),d[3][d[50]]>0?_?_.p(d,f):(_=qr(d),_.c(),_.m(l.parentNode,l)):_&&(_.d(1),_=null),f[0]&64&&s!==(s=ke+d[6]*d[50]+d[6]/2)&&i(l,"x",s)},d(d){d&&(u(e),u(l)),r&&r.d(d),_&&_.d(d)}}}function Ur(t){let e,l,n,a,s,r=t[9].title+"",_,d,f,A,D=ie(t[9].rows),y=[];for(let S=0;S<D.length;S+=1)y[S]=Xr(br(t,D,S));return{c(){e=_e("rect"),s=_e("text"),_=j(r);for(let S=0;S<y.length;S+=1)y[S].c();A=re(),this.h()},l(S){e=se(S,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0,opacity:!0}),T(e).forEach(u),s=se(S,"text",{x:!0,y:!0,"font-size":!0,"font-weight":!0,fill:!0});var E=T(s);_=O(E,r),E.forEach(u);for(let g=0;g<y.length;g+=1)y[g].l(S);A=re(),this.h()},h(){i(e,"x",l=t[43]),i(e,"y",n=t[44]),i(e,"width",t[41]),i(e,"height",a=t[42]),i(e,"rx","5"),i(e,"fill","var(--grey-800,#222)"),i(e,"opacity","0.92"),i(s,"x",d=t[43]+10),i(s,"y",f=t[44]+17),i(s,"font-size","11"),i(s,"font-weight","500"),i(s,"fill","white")},m(S,E){k(S,e,E),k(S,s,E),o(s,_);for(let g=0;g<y.length;g+=1)y[g]&&y[g].m(S,E);k(S,A,E)},p(S,E){if(E[0]&1024&&l!==(l=S[43])&&i(e,"x",l),E[0]&2560&&n!==(n=S[44])&&i(e,"y",n),E[0]&512&&a!==(a=S[42])&&i(e,"height",a),E[0]&512&&r!==(r=S[9].title+"")&&Y(_,r),E[0]&1024&&d!==(d=S[43]+10)&&i(s,"x",d),E[0]&2560&&f!==(f=S[44]+17)&&i(s,"y",f),E[0]&3584){D=ie(S[9].rows);let g;for(g=0;g<D.length;g+=1){const I=br(S,D,g);y[g]?y[g].p(I,E):(y[g]=Xr(I),y[g].c(),y[g].m(A.parentNode,A))}for(;g<y.length;g+=1)y[g].d(1);y.length=D.length}},d(S){S&&(u(e),u(s),u(A)),Re(y,S)}}}function Xr(t){let e,l,n,a,s,r=t[45].l+"",_,d,f,A,D=t[45].v+"",y,S,E;return{c(){e=_e("circle"),s=_e("text"),_=j(r),A=_e("text"),y=j(D),this.h()},l(g){e=se(g,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),T(e).forEach(u),s=se(g,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var I=T(s);_=O(I,r),I.forEach(u),A=se(g,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"font-weight":!0,"text-anchor":!0});var N=T(A);y=O(N,D),N.forEach(u),this.h()},h(){i(e,"cx",l=t[43]+10),i(e,"cy",n=t[44]+30+t[47]*18),i(e,"r","4"),i(e,"fill",a=t[45].c),i(s,"x",d=t[43]+20),i(s,"y",f=t[44]+34+t[47]*18),i(s,"font-size","10"),i(s,"fill","#ccc"),i(A,"x",S=t[43]+t[41]-8),i(A,"y",E=t[44]+34+t[47]*18),i(A,"font-size","10"),i(A,"fill","white"),i(A,"font-weight","500"),i(A,"text-anchor","end")},m(g,I){k(g,e,I),k(g,s,I),o(s,_),k(g,A,I),o(A,y)},p(g,I){I[0]&1024&&l!==(l=g[43]+10)&&i(e,"cx",l),I[0]&2560&&n!==(n=g[44]+30+g[47]*18)&&i(e,"cy",n),I[0]&512&&a!==(a=g[45].c)&&i(e,"fill",a),I[0]&512&&r!==(r=g[45].l+"")&&Y(_,r),I[0]&1024&&d!==(d=g[43]+20)&&i(s,"x",d),I[0]&2560&&f!==(f=g[44]+34+g[47]*18)&&i(s,"y",f),I[0]&512&&D!==(D=g[45].v+"")&&Y(y,D),I[0]&1024&&S!==(S=g[43]+g[41]-8)&&i(A,"x",S),I[0]&2560&&E!==(E=g[44]+34+g[47]*18)&&i(A,"y",E)},d(g){g&&(u(e),u(s),u(A))}}}function Ro(t){let e;return{c(){e=j("Dashed line = planned  ·  Hover points for details")},l(l){e=O(l,"Dashed line = planned  ·  Hover points for details")},m(l,n){k(l,e,n)},d(l){l&&u(e)}}}function wo(t){let e;return{c(){e=j("Faded bars = planned  ·  Hover for unspent balance")},l(l){e=O(l,"Faded bars = planned  ·  Hover for unspent balance")},m(l,n){k(l,e,n)},d(l){l&&u(e)}}}function ko(t){let e,l,n,a="By year",s,r,_="Cumulative",d,f,A,D,y,S,E,g,I,N,z;function b(V,X){return V[8]==="bar"?Do:Co}let W=b(t),P=W(t);function c(V,X){return V[8]==="bar"?Fo:Io}let C=c(t),h=C(t),F=t[9]&&Ur(La(t));function L(V,X){return V[8]==="bar"?wo:Ro}let G=L(t),Q=G(t);return{c(){e=v("div"),l=v("div"),n=v("button"),n.textContent=a,s=w(),r=v("button"),r.textContent=_,d=w(),f=v("div"),P.c(),A=w(),D=v("div"),y=_e("svg"),h.c(),S=_e("line"),E=_e("line"),F&&F.c(),g=w(),I=v("p"),Q.c(),this.h()},l(V){e=m(V,"DIV",{class:!0});var X=T(e);l=m(X,"DIV",{class:!0});var te=T(l);n=m(te,"BUTTON",{class:!0,"data-svelte-h":!0}),ae(n)!=="svelte-1xr1um5"&&(n.textContent=a),s=R(te),r=m(te,"BUTTON",{class:!0,"data-svelte-h":!0}),ae(r)!=="svelte-sv5ez4"&&(r.textContent=_),te.forEach(u),d=R(X),f=m(X,"DIV",{class:!0});var le=T(f);P.l(le),le.forEach(u),A=R(X),D=m(X,"DIV",{style:!0});var U=T(D);y=se(U,"svg",{viewBox:!0,width:!0,style:!0,role:!0,"aria-label":!0});var $=T(y);h.l($),S=se($,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),T(S).forEach(u),E=se($,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),T(E).forEach(u),F&&F.l($),$.forEach(u),U.forEach(u),g=R(X),I=m(X,"P",{class:!0});var K=T(I);Q.l(K),K.forEach(u),X.forEach(u),this.h()},h(){i(n,"class","svelte-f0oho1"),jn(n,"active",t[8]==="bar"),i(r,"class","svelte-f0oho1"),jn(r,"active",t[8]==="cumulative"),i(l,"class","btn-group svelte-f0oho1"),i(f,"class","legend svelte-f0oho1"),i(S,"x1",ke),i(S,"y1",_n),i(S,"x2",ke),i(S,"y2",el-Tl),i(S,"stroke","var(--grey-200,#ddd)"),i(S,"stroke-width","1"),i(E,"x1",ke),i(E,"y1",el-Tl),i(E,"x2",Sl-zn),i(E,"y2",el-Tl),i(E,"stroke","var(--grey-200,#ddd)"),i(E,"stroke-width","1"),i(y,"viewBox","0 0 "+Sl+" "+el),i(y,"width","100%"),H(y,"overflow","visible"),H(y,"display","block"),i(y,"role","img"),i(y,"aria-label","Appropriation vs spend by fiscal year"),H(D,"position","relative"),i(I,"class","note svelte-f0oho1"),i(e,"class","ac-wrap svelte-f0oho1")},m(V,X){k(V,e,X),o(e,l),o(l,n),o(l,s),o(l,r),o(e,d),o(e,f),P.m(f,null),o(e,A),o(e,D),o(D,y),h.m(y,null),o(y,S),o(y,E),F&&F.m(y,null),o(e,g),o(e,I),Q.m(I,null),N||(z=[Me(n,"click",t[30]),Me(r,"click",t[31]),Me(D,"mouseleave",t[26])],N=!0)},p(V,X){X[0]&256&&jn(n,"active",V[8]==="bar"),X[0]&256&&jn(r,"active",V[8]==="cumulative"),W!==(W=b(V))&&(P.d(1),P=W(V),P&&(P.c(),P.m(f,null))),C===(C=c(V))&&h?h.p(V,X):(h.d(1),h=C(V),h&&(h.c(),h.m(y,S))),V[9]?F?F.p(La(V),X):(F=Ur(La(V)),F.c(),F.m(y,null)):F&&(F.d(1),F=null),G!==(G=L(V))&&(Q.d(1),Q=G(V),Q&&(Q.c(),Q.m(I,null)))},i:Oe,o:Oe,d(V){V&&u(e),P.d(),h.d(),F&&F.d(),Q.d(),N=!1,bl(z)}}}const Sl=720,el=220,ke=54,zn=12,_n=14,Tl=38;function St(t,e){const l=Array.from(t||[])[0]||{};return Number(l[e])||0}function Mo(t){let e=0;return t.map(l=>(e+=l||0,e))}function Al(t){if(!t&&t!==0)return"—";const e=Math.abs(t);return e>=1e9?"$"+(t/1e9).toFixed(1)+"B":e>=1e6?"$"+(t/1e6).toFixed(1)+"M":e>=1e3?"$"+(t/1e3).toFixed(0)+"K":"$0"}function Ln(t){if(!t&&t!==0)return"";const e=Math.abs(t);if(e===0)return"$0";if(e>=1e9)return"$"+(t/1e9).toFixed(t%1e9===0?0:1)+"B";if(e>=1e6){const l=t/1e6;return"$"+(Number.isInteger(l)?l:l.toFixed(1))+"M"}return e>=1e3?"$"+(t/1e3).toFixed(0)+"K":"$0"}function Qr(t){const e=Math.max(...t.filter(a=>a!=null&&a>0),1),l=Math.pow(10,Math.floor(Math.log10(e))),n=Math.ceil(e/l/4)*l;return n*Math.ceil(e*1.15/n)}function Gr(t,e=4){const l=t/e;return Array.from({length:e+1},(n,a)=>a*l)}function Ho(t,e,l){let n,a,s,r,_,d,f,A,D,y,S,E,g,I,{fundingTotal:N=[]}=e,{costsTotal:z=[]}=e,b="bar";const W=["Prior FY2025","FY2025","FY2026","FY2027"],P=Sl-ke-zn,c=el-_n-Tl,C=(q,B)=>_n+c-q/B*c,h=(q,B)=>q/B*c,F=q=>ke+D*q+D/2-y-S/2,L=q=>ke+D*q+D/2+S/2,G=q=>ke+q/3*P,Q=(q,B)=>q==null?null:_n+c-q/B*c;function V(q,B){return q.map((ye,je)=>ye!=null?`${G(je)},${Q(ye,B)}`:null).filter(Boolean).join(" ")}let X=null,te=0,le=0;function U(q,B){const ye=n[B],je=a[B],Ue=ye-je;l(9,X={title:W[B],rows:[{c:"#7F77DD",l:"Appropriation",v:Al(ye)},{c:"#1D9E75",l:s[B]?"Planned spend":"Actual spend",v:Al(je)},{c:Ue>=0?"#888":"#E24B4A",l:Ue>=0?"Unspent":"Over-spent",v:Al(Math.abs(Ue))}]}),K(q)}function $(q,B){l(9,X={title:W[B],rows:[r[B]?{c:"#7F77DD",l:"Cumul. appropriation",v:Al(r[B])}:null,_[B]?{c:"#1D9E75",l:"Cumul. actual spend",v:Al(_[B])}:null,d[B]?{c:"rgba(29,158,117,0.7)",l:"Cumul. planned spend",v:Al(d[B])}:null].filter(Boolean)}),K(q)}function K(q){const B=q.currentTarget.closest("svg");if(!B)return;const ye=B.getBoundingClientRect();l(10,te=q.clientX-ye.left),l(11,le=q.clientY-ye.top)}function Z(){l(9,X=null)}const J=()=>l(8,b="bar"),Ee=()=>l(8,b="cumulative"),ge=(q,B)=>U(B,q),be=(q,B)=>U(B,q),we=(q,B)=>$(B,q),fe=(q,B)=>$(B,q),ne=(q,B)=>$(B,q);return t.$$set=q=>{"fundingTotal"in q&&l(27,N=q.fundingTotal),"costsTotal"in q&&l(28,z=q.costsTotal)},t.$$.update=()=>{t.$$.dirty[0]&134217728&&l(4,n=[St(N,"prior_to_fy2025"),St(N,"actual_fy2025"),St(N,"appropriation_fy2026"),St(N,"allowance_fy2027")]),t.$$.dirty[0]&268435456&&l(3,a=[St(z,"prior_to_fy2025"),St(z,"actual_fy2025"),St(z,"spend_plan_fy2026"),St(z,"spend_plan_fy2027")]),t.$$.dirty[0]&16&&l(2,r=Mo(n)),t.$$.dirty[0]&8&&l(1,_=[a[0]||null,(a[0]||0)+(a[1]||0)||null,null,null]),t.$$.dirty[0]&8&&l(0,d=(()=>{const q=(a[0]||0)+(a[1]||0);return[null,q||null,q+(a[2]||0)||null,q+(a[2]||0)+(a[3]||0)||null]})()),t.$$.dirty[0]&24&&l(7,f=Qr([...n,...a])),t.$$.dirty[0]&128&&l(15,A=Gr(f)),t.$$.dirty[0]&64&&l(14,y=D*.3),t.$$.dirty[0]&64&&(S=D*.03),t.$$.dirty[0]&7&&l(29,E=[...r,..._.filter(Boolean),...d.filter(Boolean)]),t.$$.dirty[0]&536870912&&l(5,g=Qr(E)),t.$$.dirty[0]&32&&l(13,I=Gr(g))},l(12,s=[!1,!1,!0,!0]),l(6,D=P/4),[d,_,r,a,n,g,D,f,b,X,te,le,s,I,y,A,W,C,h,F,L,G,Q,V,U,$,Z,N,z,E,J,Ee,ge,be,we,fe,ne]}class Oo extends Wa{constructor(e){super(),Pa(this,e,Ho,ko,za,{fundingTotal:27,costsTotal:28},null,[-1,-1,-1])}}function Kr(t,e,l){const n=t.slice();return n[42]=e[l],n}function Jr(t,e,l){const n=t.slice();return n[42]=e[l],n}function jo(t){var a;let e,l=((a=ee.og)==null?void 0:a.title)+"",n;return{c(){e=v("h1"),n=j(l),this.h()},l(s){e=m(s,"H1",{class:!0});var r=T(e);n=O(r,l),r.forEach(u),this.h()},h(){i(e,"class","title")},m(s,r){k(s,e,r),o(e,n)},p:Oe,d(s){s&&u(e)}}}function Lo(t){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:Oe,p:Oe,d:Oe}}function zo(t){var r;let e,l,n,a,s;return document.title=e=(r=ee.og)==null?void 0:r.title,{c(){l=w(),n=v("meta"),a=w(),s=v("meta"),this.h()},l(_){l=R(_),n=m(_,"META",{property:!0,content:!0}),a=R(_),s=m(_,"META",{name:!0,content:!0}),this.h()},h(){var _,d;i(n,"property","og:title"),i(n,"content",((_=ee.og)==null?void 0:_.title)??ee.title),i(s,"name","twitter:title"),i(s,"content",((d=ee.og)==null?void 0:d.title)??ee.title)},m(_,d){k(_,l,d),k(_,n,d),k(_,a,d),k(_,s,d)},p(_,d){var f;d&0&&e!==(e=(f=ee.og)==null?void 0:f.title)&&(document.title=e)},d(_){_&&(u(l),u(n),u(a),u(s))}}}function Wo(t){var s,r;let e,l,n=(ee.description||((s=ee.og)==null?void 0:s.description))&&Po(),a=((r=ee.og)==null?void 0:r.image)&&Yo();return{c(){n&&n.c(),e=w(),a&&a.c(),l=re()},l(_){n&&n.l(_),e=R(_),a&&a.l(_),l=re()},m(_,d){n&&n.m(_,d),k(_,e,d),a&&a.m(_,d),k(_,l,d)},p(_,d){var f,A;(ee.description||(f=ee.og)!=null&&f.description)&&n.p(_,d),(A=ee.og)!=null&&A.image&&a.p(_,d)},d(_){_&&(u(e),u(l)),n&&n.d(_),a&&a.d(_)}}}function Po(t){let e,l,n,a,s;return{c(){e=v("meta"),l=w(),n=v("meta"),a=w(),s=v("meta"),this.h()},l(r){e=m(r,"META",{name:!0,content:!0}),l=R(r),n=m(r,"META",{property:!0,content:!0}),a=R(r),s=m(r,"META",{name:!0,content:!0}),this.h()},h(){var r,_,d;i(e,"name","description"),i(e,"content",ee.description??((r=ee.og)==null?void 0:r.description)),i(n,"property","og:description"),i(n,"content",((_=ee.og)==null?void 0:_.description)??ee.description),i(s,"name","twitter:description"),i(s,"content",((d=ee.og)==null?void 0:d.description)??ee.description)},m(r,_){k(r,e,_),k(r,l,_),k(r,n,_),k(r,a,_),k(r,s,_)},p:Oe,d(r){r&&(u(e),u(l),u(n),u(a),u(s))}}}function Yo(t){let e,l,n;return{c(){e=v("meta"),l=w(),n=v("meta"),this.h()},l(a){e=m(a,"META",{property:!0,content:!0}),l=R(a),n=m(a,"META",{name:!0,content:!0}),this.h()},h(){var a,s;i(e,"property","og:image"),i(e,"content",mr((a=ee.og)==null?void 0:a.image)),i(n,"name","twitter:image"),i(n,"content",mr((s=ee.og)==null?void 0:s.image))},m(a,s){k(a,e,s),k(a,l,s),k(a,n,s)},p:Oe,d(a){a&&(u(e),u(l),u(n))}}}function Zr(t){let e,l;return e=new fn({props:{queryID:"project",queryResult:t[0]}}),{c(){al(e.$$.fragment)},l(n){nl(e.$$.fragment,n)},m(n,a){ll(e,n,a),l=!0},p(n,a){const s={};a[0]&1&&(s.queryResult=n[0]),e.$set(s)},i(n){l||(ue(e.$$.fragment,n),l=!0)},o(n){Se(e.$$.fragment,n),l=!1},d(n){tl(e,n)}}}function xr(t){let e,l;return e=new fn({props:{queryID:"funding",queryResult:t[1]}}),{c(){al(e.$$.fragment)},l(n){nl(e.$$.fragment,n)},m(n,a){ll(e,n,a),l=!0},p(n,a){const s={};a[0]&2&&(s.queryResult=n[1]),e.$set(s)},i(n){l||(ue(e.$$.fragment,n),l=!0)},o(n){Se(e.$$.fragment,n),l=!1},d(n){tl(e,n)}}}function eo(t){let e,l;return e=new fn({props:{queryID:"funding_total",queryResult:t[2]}}),{c(){al(e.$$.fragment)},l(n){nl(e.$$.fragment,n)},m(n,a){ll(e,n,a),l=!0},p(n,a){const s={};a[0]&4&&(s.queryResult=n[2]),e.$set(s)},i(n){l||(ue(e.$$.fragment,n),l=!0)},o(n){Se(e.$$.fragment,n),l=!1},d(n){tl(e,n)}}}function to(t){let e,l;return e=new fn({props:{queryID:"dev_costs",queryResult:t[3]}}),{c(){al(e.$$.fragment)},l(n){nl(e.$$.fragment,n)},m(n,a){ll(e,n,a),l=!0},p(n,a){const s={};a[0]&8&&(s.queryResult=n[3]),e.$set(s)},i(n){l||(ue(e.$$.fragment,n),l=!0)},o(n){Se(e.$$.fragment,n),l=!1},d(n){tl(e,n)}}}function lo(t){let e,l;return e=new fn({props:{queryID:"dev_costs_total",queryResult:t[4]}}),{c(){al(e.$$.fragment)},l(n){nl(e.$$.fragment,n)},m(n,a){ll(e,n,a),l=!0},p(n,a){const s={};a[0]&16&&(s.queryResult=n[4]),e.$set(s)},i(n){l||(ue(e.$$.fragment,n),l=!0)},o(n){Se(e.$$.fragment,n),l=!1},d(n){tl(e,n)}}}function no(t){var A,D,y,S;let e,l,n="Project Summary",a,s,r=((D=(A=t[0])==null?void 0:A[0])==null?void 0:D.project_summary)+"",_,d,f=((S=(y=t[0])==null?void 0:y[0])==null?void 0:S.appropriation_code)&&ao(t);return{c(){e=v("div"),l=v("div"),l.textContent=n,a=w(),s=v("p"),_=j(r),d=w(),f&&f.c(),this.h()},l(E){e=m(E,"DIV",{class:!0});var g=T(e);l=m(g,"DIV",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-1n9jely"&&(l.textContent=n),a=R(g),s=m(g,"P",{class:!0});var I=T(s);_=O(I,r),I.forEach(u),d=R(g),f&&f.l(g),g.forEach(u),this.h()},h(){i(l,"class","section-title svelte-1gu72pz"),i(s,"class","summary-text svelte-1gu72pz"),i(e,"class","section-card svelte-1gu72pz")},m(E,g){k(E,e,g),o(e,l),o(e,a),o(e,s),o(s,_),o(e,d),f&&f.m(e,null)},p(E,g){var I,N,z,b;g[0]&1&&r!==(r=((N=(I=E[0])==null?void 0:I[0])==null?void 0:N.project_summary)+"")&&Y(_,r),(b=(z=E[0])==null?void 0:z[0])!=null&&b.appropriation_code?f?f.p(E,g):(f=ao(E),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(E){E&&u(e),f&&f.d()}}}function ao(t){var r,_;let e,l,n,a=((_=(r=t[0])==null?void 0:r[0])==null?void 0:_.appropriation_code)+"",s;return{c(){e=v("div"),l=j("Appropriation code: "),n=v("strong"),s=j(a),this.h()},l(d){e=m(d,"DIV",{class:!0});var f=T(e);l=O(f,"Appropriation code: "),n=m(f,"STRONG",{});var A=T(n);s=O(A,a),A.forEach(u),f.forEach(u),this.h()},h(){i(e,"class","approp-code svelte-1gu72pz")},m(d,f){k(d,e,f),o(e,l),o(e,n),o(n,s)},p(d,f){var A,D;f[0]&1&&a!==(a=((D=(A=d[0])==null?void 0:A[0])==null?void 0:D.appropriation_code)+"")&&Y(s,a)},d(d){d&&u(e)}}}function $o(t){let e,l,n=t[42].funding_type+"",a,s,r,_=t[42].prior_to_fy2025?"$"+(t[42].prior_to_fy2025/1e6).toFixed(1)+"M":"—",d,f,A,D=t[42].actual_fy2025?"$"+(t[42].actual_fy2025/1e6).toFixed(1)+"M":"—",y,S,E,g=t[42].appropriation_fy2026?"$"+(t[42].appropriation_fy2026/1e6).toFixed(1)+"M":"—",I,N,z,b=t[42].allowance_fy2027?"$"+(t[42].allowance_fy2027/1e6).toFixed(1)+"M":"—",W,P,c,C=t[42].total_funding_to_date?"$"+(t[42].total_funding_to_date/1e6).toFixed(1)+"M":"—",h;return{c(){e=v("tr"),l=v("td"),a=j(n),s=w(),r=v("td"),d=j(_),f=w(),A=v("td"),y=j(D),S=w(),E=v("td"),I=j(g),N=w(),z=v("td"),W=j(b),P=w(),c=v("td"),h=j(C),this.h()},l(F){e=m(F,"TR",{class:!0});var L=T(e);l=m(L,"TD",{class:!0});var G=T(l);a=O(G,n),G.forEach(u),s=R(L),r=m(L,"TD",{class:!0});var Q=T(r);d=O(Q,_),Q.forEach(u),f=R(L),A=m(L,"TD",{class:!0});var V=T(A);y=O(V,D),V.forEach(u),S=R(L),E=m(L,"TD",{class:!0});var X=T(E);I=O(X,g),X.forEach(u),N=R(L),z=m(L,"TD",{class:!0});var te=T(z);W=O(te,b),te.forEach(u),P=R(L),c=m(L,"TD",{class:!0});var le=T(c);h=O(le,C),le.forEach(u),L.forEach(u),this.h()},h(){i(l,"class","sub-label svelte-1gu72pz"),i(r,"class","num svelte-1gu72pz"),i(A,"class","num svelte-1gu72pz"),i(E,"class","num svelte-1gu72pz"),i(z,"class","num svelte-1gu72pz"),i(c,"class","num total-col svelte-1gu72pz"),i(e,"class","sub-row svelte-1gu72pz")},m(F,L){k(F,e,L),o(e,l),o(l,a),o(e,s),o(e,r),o(r,d),o(e,f),o(e,A),o(A,y),o(e,S),o(e,E),o(E,I),o(e,N),o(e,z),o(z,W),o(e,P),o(e,c),o(c,h)},p(F,L){L[0]&2&&n!==(n=F[42].funding_type+"")&&Y(a,n),L[0]&2&&_!==(_=F[42].prior_to_fy2025?"$"+(F[42].prior_to_fy2025/1e6).toFixed(1)+"M":"—")&&Y(d,_),L[0]&2&&D!==(D=F[42].actual_fy2025?"$"+(F[42].actual_fy2025/1e6).toFixed(1)+"M":"—")&&Y(y,D),L[0]&2&&g!==(g=F[42].appropriation_fy2026?"$"+(F[42].appropriation_fy2026/1e6).toFixed(1)+"M":"—")&&Y(I,g),L[0]&2&&b!==(b=F[42].allowance_fy2027?"$"+(F[42].allowance_fy2027/1e6).toFixed(1)+"M":"—")&&Y(W,b),L[0]&2&&C!==(C=F[42].total_funding_to_date?"$"+(F[42].total_funding_to_date/1e6).toFixed(1)+"M":"—")&&Y(h,C)},d(F){F&&u(e)}}}function Vo(t){let e,l,n=t[42].funding_type+"",a;return{c(){e=v("tr"),l=v("td"),a=j(n),this.h()},l(s){e=m(s,"TR",{class:!0});var r=T(e);l=m(r,"TD",{colspan:!0,class:!0});var _=T(l);a=O(_,n),_.forEach(u),r.forEach(u),this.h()},h(){i(l,"colspan","6"),i(l,"class","section-label svelte-1gu72pz"),i(e,"class","section-row svelte-1gu72pz")},m(s,r){k(s,e,r),o(e,l),o(l,a)},p(s,r){r[0]&2&&n!==(n=s[42].funding_type+"")&&Y(a,n)},d(s){s&&u(e)}}}function io(t){let e;function l(s,r){return s[42].row_type==="header"?Vo:$o}let n=l(t),a=n(t);return{c(){a.c(),e=re()},l(s){a.l(s),e=re()},m(s,r){a.m(s,r),k(s,e,r)},p(s,r){n===(n=l(s))&&a?a.p(s,r):(a.d(1),a=n(s),a&&(a.c(),a.m(e.parentNode,e)))},d(s){s&&u(e),a.d(s)}}}function ro(t){let e,l,n=t[42].funding_type+"",a,s,r,_=t[42].prior_to_fy2025?"$"+(t[42].prior_to_fy2025/1e6).toFixed(1)+"M":"—",d,f,A,D=t[42].actual_fy2025?"$"+(t[42].actual_fy2025/1e6).toFixed(1)+"M":"—",y,S,E,g=t[42].spend_plan_fy2026?"$"+(t[42].spend_plan_fy2026/1e6).toFixed(1)+"M":"—",I,N,z,b=t[42].spend_plan_fy2027?"$"+(t[42].spend_plan_fy2027/1e6).toFixed(1)+"M":"—",W,P,c,C=t[42].projected_outyears?"$"+(t[42].projected_outyears/1e6).toFixed(1)+"M":"—",h;return{c(){e=v("tr"),l=v("td"),a=j(n),s=w(),r=v("td"),d=j(_),f=w(),A=v("td"),y=j(D),S=w(),E=v("td"),I=j(g),N=w(),z=v("td"),W=j(b),P=w(),c=v("td"),h=j(C),this.h()},l(F){e=m(F,"TR",{});var L=T(e);l=m(L,"TD",{class:!0});var G=T(l);a=O(G,n),G.forEach(u),s=R(L),r=m(L,"TD",{class:!0});var Q=T(r);d=O(Q,_),Q.forEach(u),f=R(L),A=m(L,"TD",{class:!0});var V=T(A);y=O(V,D),V.forEach(u),S=R(L),E=m(L,"TD",{class:!0});var X=T(E);I=O(X,g),X.forEach(u),N=R(L),z=m(L,"TD",{class:!0});var te=T(z);W=O(te,b),te.forEach(u),P=R(L),c=m(L,"TD",{class:!0});var le=T(c);h=O(le,C),le.forEach(u),L.forEach(u),this.h()},h(){i(l,"class","svelte-1gu72pz"),i(r,"class","num svelte-1gu72pz"),i(A,"class","num svelte-1gu72pz"),i(E,"class","num svelte-1gu72pz"),i(z,"class","num svelte-1gu72pz"),i(c,"class","num svelte-1gu72pz")},m(F,L){k(F,e,L),o(e,l),o(l,a),o(e,s),o(e,r),o(r,d),o(e,f),o(e,A),o(A,y),o(e,S),o(e,E),o(E,I),o(e,N),o(e,z),o(z,W),o(e,P),o(e,c),o(c,h)},p(F,L){L[0]&8&&n!==(n=F[42].funding_type+"")&&Y(a,n),L[0]&8&&_!==(_=F[42].prior_to_fy2025?"$"+(F[42].prior_to_fy2025/1e6).toFixed(1)+"M":"—")&&Y(d,_),L[0]&8&&D!==(D=F[42].actual_fy2025?"$"+(F[42].actual_fy2025/1e6).toFixed(1)+"M":"—")&&Y(y,D),L[0]&8&&g!==(g=F[42].spend_plan_fy2026?"$"+(F[42].spend_plan_fy2026/1e6).toFixed(1)+"M":"—")&&Y(I,g),L[0]&8&&b!==(b=F[42].spend_plan_fy2027?"$"+(F[42].spend_plan_fy2027/1e6).toFixed(1)+"M":"—")&&Y(W,b),L[0]&8&&C!==(C=F[42].projected_outyears?"$"+(F[42].projected_outyears/1e6).toFixed(1)+"M":"—")&&Y(h,C)},d(F){F&&u(e)}}}function qo(t){var li,ni,ai,ii,ri,oi,si,_i,fi,ui,di,pi,ci,hi,mi,vi,yi,Ei,gi,Ai,Ti,Si,bi,Ni,Ci,Di,Ii,Fi,Ri,wi,ki,Mi,Hi,Oi,ji,Li,zi,Wi,Pi,Yi,$i,Vi,qi,Bi,Ui,Xi,Qi,Gi,Ki,Ji,Zi,xi,er,tr,lr;let e,l,n,a,s,r,_,d,f,A,D,y,S,E,g,I=(((ni=(li=t[0])==null?void 0:li[0])==null?void 0:ni.project_title)??"")+"",N,z,b,W=(((ii=(ai=t[0])==null?void 0:ai[0])==null?void 0:ii.agency)??"")+"",P,c,C,h=(((oi=(ri=t[0])==null?void 0:ri[0])==null?void 0:oi.mitdp_id)??"")+"",F,L,G,Q,V=(((_i=(si=t[0])==null?void 0:si[0])==null?void 0:_i.phase)??"")+"",X,te,le,U,$=(((ui=(fi=t[0])==null?void 0:fi[0])==null?void 0:ui.project_length)??"")+"",K,Z,J,Ee=(((pi=(di=t[0])==null?void 0:di[0])==null?void 0:pi.time_remaining)??"")+"",ge,be,we,fe,ne="← Back to IT Portfolio",q,B,ye,je,Ue=((hi=(ci=t[0])==null?void 0:ci[0])==null?void 0:hi.eac_label)+"",un,Wn,bt,Ya="Est. Total Cost at Completion",Pn,Nt,Nl=((vi=(mi=t[0])==null?void 0:mi[0])==null?void 0:vi.remaining_label)+"",dn,Yn,$n,ze,rt,Vn,Cl=((((Ei=(yi=t[2])==null?void 0:yi[0])==null?void 0:Ei.total_funding_to_date)??0)/1e6).toFixed(1)+"",pn,qn,Bn,Ct,$a="Total Funding to Date",Un,We,Xn,Dl=((((Ai=(gi=t[2])==null?void 0:gi[0])==null?void 0:Ai.appropriation_fy2026)??0)/1e6).toFixed(1)+"",cn,Qn,Il=((((Si=(Ti=t[2])==null?void 0:Ti[0])==null?void 0:Si.allowance_fy2027)??0)/1e6).toFixed(1)+"",hn,Gn,Kn,Pe,ot,Jn,Fl=((((Ni=(bi=t[4])==null?void 0:bi[0])==null?void 0:Ni.actual_fy2025)??0)/1e6).toFixed(1)+"",mn,Zn,xn,Dt,Va="FY2025 Actual Spend",ea,st,ta,Rl=((((Di=(Ci=t[4])==null?void 0:Ci[0])==null?void 0:Di.spend_plan_fy2026)??0)/1e6).toFixed(1)+"",vn,la,na,Ye,_t,wl=((Fi=(Ii=t[0])==null?void 0:Ii[0])==null?void 0:Fi.start_year)+"",yn,aa,kl=((wi=(Ri=t[0])==null?void 0:Ri[0])==null?void 0:wi.end_year)+"",En,ia,It,qa="Project Timeline",ra,il,Ml=((Mi=(ki=t[0])==null?void 0:ki[0])==null?void 0:Mi.program_name)+"",gn,An,rl,Xe,Ft,Ba="Phase Timeline",oa,ft,Tn,He,Rt,Ua="Appropriation vs Spend",sa,wt,Xa="Funding authorized vs actual and planned development costs",_a,ut,Sn,Qe,$e,kt,Qa="Funding by Source",fa,Mt,Ga="Appropriations by fiscal year",ua,ol,dt,sl,Ka='<tr><th class="svelte-1gu72pz">Source</th> <th class="svelte-1gu72pz">Prior FY2025</th> <th class="svelte-1gu72pz">FY2025 Actual</th> <th class="svelte-1gu72pz">FY2026 Approp.</th> <th class="svelte-1gu72pz">FY2027 Allow.</th> <th class="svelte-1gu72pz">Total</th></tr>',da,pt,bn,Ne,Ht,Ja="Total",pa,_l,Hl=(Oi=(Hi=t[2])==null?void 0:Hi[0])!=null&&Oi.prior_to_fy2025?"$"+(t[2][0].prior_to_fy2025/1e6).toFixed(1)+"M":"—",Nn,ca,fl,Ol=(Li=(ji=t[2])==null?void 0:ji[0])!=null&&Li.actual_fy2025?"$"+(t[2][0].actual_fy2025/1e6).toFixed(1)+"M":"—",Cn,ha,ul,jl=(Wi=(zi=t[2])==null?void 0:zi[0])!=null&&Wi.appropriation_fy2026?"$"+(t[2][0].appropriation_fy2026/1e6).toFixed(1)+"M":"—",Dn,ma,dl,Ll=(Yi=(Pi=t[2])==null?void 0:Pi[0])!=null&&Yi.allowance_fy2027?"$"+(t[2][0].allowance_fy2027/1e6).toFixed(1)+"M":"—",In,va,pl,zl=(Vi=($i=t[2])==null?void 0:$i[0])!=null&&Vi.total_funding_to_date?"$"+(t[2][0].total_funding_to_date/1e6).toFixed(1)+"M":"—",Fn,ya,Ve,Ot,Za="Development Costs",Ea,jt,xa="Actual spend vs. plan by fiscal year",ga,cl,ct,hl,ei='<tr><th class="svelte-1gu72pz">Source</th> <th class="svelte-1gu72pz">Prior FY2025</th> <th class="svelte-1gu72pz">FY2025 Actual</th> <th class="svelte-1gu72pz">FY2026 Plan</th> <th class="svelte-1gu72pz">FY2027 Plan</th> <th class="svelte-1gu72pz">Outyears</th></tr>',Aa,ht,Rn,Ce,Lt,ti="Total",Ta,mt,Sa,Wl=(((Bi=(qi=t[4])==null?void 0:qi[0])==null?void 0:Bi.prior_to_fy2025)/1e6).toFixed(1)+"",wn,ba,Na,vt,Ca,Pl=(((Xi=(Ui=t[4])==null?void 0:Ui[0])==null?void 0:Xi.actual_fy2025)/1e6).toFixed(1)+"",kn,Da,Ia,yt,Fa,Yl=(((Gi=(Qi=t[4])==null?void 0:Qi[0])==null?void 0:Gi.spend_plan_fy2026)/1e6).toFixed(1)+"",Mn,Ra,wa,Et,ka,$l=(((Ji=(Ki=t[4])==null?void 0:Ki[0])==null?void 0:Ji.spend_plan_fy2027)/1e6).toFixed(1)+"",Hn,Ma,Ha,gt,Oa,Vl=(((xi=(Zi=t[4])==null?void 0:Zi[0])==null?void 0:xi.projected_outyears)/1e6).toFixed(1)+"",On,ja,x,Ge=typeof ee<"u"&&((er=ee.og)==null?void 0:er.title)&&ee.hide_title!==!0&&jo();function oo(p,M){var ve;return typeof ee<"u"&&((ve=ee.og)!=null&&ve.title)?zo:Lo}let ql=oo()(t),Ke=typeof ee=="object"&&Wo(),de=t[0]&&Zr(t),pe=t[1]&&xr(t),ce=t[2]&&eo(t),he=t[3]&&to(t),me=t[4]&&lo(t),De=((lr=(tr=t[0])==null?void 0:tr[0])==null?void 0:lr.project_summary)&&no(t);ft=new No({props:{data:t[0]}}),ut=new Oo({props:{fundingTotal:t[2],costsTotal:t[4]}});let ml=ie(t[1]),Ae=[];for(let p=0;p<ml.length;p+=1)Ae[p]=io(Jr(t,ml,p));let vl=ie(t[3]),Te=[];for(let p=0;p<vl.length;p+=1)Te[p]=ro(Kr(t,vl,p));return{c(){Ge&&Ge.c(),e=w(),ql.c(),l=v("meta"),n=v("meta"),Ke&&Ke.c(),a=re(),s=w(),de&&de.c(),r=w(),pe&&pe.c(),_=w(),ce&&ce.c(),d=w(),he&&he.c(),f=w(),me&&me.c(),A=w(),D=v("div"),y=v("div"),S=v("div"),E=v("h1"),g=j("🖥️ "),N=j(I),z=w(),b=v("p"),P=j(W),c=w(),C=v("span"),F=j(h),L=w(),G=v("div"),Q=v("span"),X=j(V),le=w(),U=v("span"),K=j($),Z=w(),J=v("span"),ge=j(Ee),be=j(" remaining"),we=w(),fe=v("a"),fe.textContent=ne,q=w(),B=v("div"),ye=v("div"),je=v("div"),un=j(Ue),Wn=w(),bt=v("div"),bt.textContent=Ya,Pn=w(),Nt=v("div"),dn=j(Nl),Yn=j(" remaining"),$n=w(),ze=v("div"),rt=v("div"),Vn=j("$"),pn=j(Cl),qn=j("M"),Bn=w(),Ct=v("div"),Ct.textContent=$a,Un=w(),We=v("div"),Xn=j("FY2026: $"),cn=j(Dl),Qn=j(`M ·
      FY2027: $`),hn=j(Il),Gn=j("M"),Kn=w(),Pe=v("div"),ot=v("div"),Jn=j("$"),mn=j(Fl),Zn=j("M"),xn=w(),Dt=v("div"),Dt.textContent=Va,ea=w(),st=v("div"),ta=j("FY2026 plan: $"),vn=j(Rl),la=j("M"),na=w(),Ye=v("div"),_t=v("div"),yn=j(wl),aa=j(" – "),En=j(kl),ia=w(),It=v("div"),It.textContent=qa,ra=w(),il=v("div"),gn=j(Ml),An=w(),De&&De.c(),rl=w(),Xe=v("div"),Ft=v("div"),Ft.textContent=Ba,oa=w(),al(ft.$$.fragment),Tn=w(),He=v("div"),Rt=v("div"),Rt.textContent=Ua,sa=w(),wt=v("div"),wt.textContent=Xa,_a=w(),al(ut.$$.fragment),Sn=w(),Qe=v("div"),$e=v("div"),kt=v("div"),kt.textContent=Qa,fa=w(),Mt=v("div"),Mt.textContent=Ga,ua=w(),ol=v("div"),dt=v("table"),sl=v("thead"),sl.innerHTML=Ka,da=w(),pt=v("tbody");for(let p=0;p<Ae.length;p+=1)Ae[p].c();bn=w(),Ne=v("tr"),Ht=v("td"),Ht.textContent=Ja,pa=w(),_l=v("td"),Nn=j(Hl),ca=w(),fl=v("td"),Cn=j(Ol),ha=w(),ul=v("td"),Dn=j(jl),ma=w(),dl=v("td"),In=j(Ll),va=w(),pl=v("td"),Fn=j(zl),ya=w(),Ve=v("div"),Ot=v("div"),Ot.textContent=Za,Ea=w(),jt=v("div"),jt.textContent=xa,ga=w(),cl=v("div"),ct=v("table"),hl=v("thead"),hl.innerHTML=ei,Aa=w(),ht=v("tbody");for(let p=0;p<Te.length;p+=1)Te[p].c();Rn=w(),Ce=v("tr"),Lt=v("td"),Lt.textContent=ti,Ta=w(),mt=v("td"),Sa=j("$"),wn=j(Wl),ba=j("M"),Na=w(),vt=v("td"),Ca=j("$"),kn=j(Pl),Da=j("M"),Ia=w(),yt=v("td"),Fa=j("$"),Mn=j(Yl),Ra=j("M"),wa=w(),Et=v("td"),ka=j("$"),Hn=j($l),Ma=j("M"),Ha=w(),gt=v("td"),Oa=j("$"),On=j(Vl),ja=j("M"),this.h()},l(p){Ge&&Ge.l(p),e=R(p);const M=so("svelte-2igo1p",document.head);ql.l(M),l=m(M,"META",{name:!0,content:!0}),n=m(M,"META",{name:!0,content:!0}),Ke&&Ke.l(M),a=re(),M.forEach(u),s=R(p),de&&de.l(p),r=R(p),pe&&pe.l(p),_=R(p),ce&&ce.l(p),d=R(p),he&&he.l(p),f=R(p),me&&me.l(p),A=R(p),D=m(p,"DIV",{style:!0});var ve=T(D);y=m(ve,"DIV",{style:!0});var At=T(y);S=m(At,"DIV",{});var zt=T(S);E=m(zt,"H1",{style:!0});var yl=T(E);g=O(yl,"🖥️ "),N=O(yl,I),yl.forEach(u),z=R(zt),b=m(zt,"P",{style:!0});var Bl=T(b);P=O(Bl,W),Bl.forEach(u),zt.forEach(u),c=R(At),C=m(At,"SPAN",{style:!0});var Ul=T(C);F=O(Ul,h),Ul.forEach(u),At.forEach(u),L=R(ve),G=m(ve,"DIV",{style:!0});var Je=T(G);Q=m(Je,"SPAN",{class:!0,style:!0});var Xl=T(Q);X=O(Xl,V),Xl.forEach(u),le=R(Je),U=m(Je,"SPAN",{style:!0});var Ql=T(U);K=O(Ql,$),Ql.forEach(u),Z=R(Je),J=m(Je,"SPAN",{style:!0});var El=T(J);ge=O(El,Ee),be=O(El," remaining"),El.forEach(u),Je.forEach(u),ve.forEach(u),we=R(p),fe=m(p,"A",{href:!0,style:!0,"data-svelte-h":!0}),ae(fe)!=="svelte-oj5dot"&&(fe.textContent=ne),q=R(p),B=m(p,"DIV",{class:!0});var Le=T(B);ye=m(Le,"DIV",{class:!0});var Ze=T(ye);je=m(Ze,"DIV",{class:!0});var Gl=T(je);un=O(Gl,Ue),Gl.forEach(u),Wn=R(Ze),bt=m(Ze,"DIV",{class:!0,"data-svelte-h":!0}),ae(bt)!=="svelte-psawjo"&&(bt.textContent=Ya),Pn=R(Ze),Nt=m(Ze,"DIV",{class:!0});var gl=T(Nt);dn=O(gl,Nl),Yn=O(gl," remaining"),gl.forEach(u),Ze.forEach(u),$n=R(Le),ze=m(Le,"DIV",{class:!0});var xe=T(ze);rt=m(xe,"DIV",{class:!0});var Wt=T(rt);Vn=O(Wt,"$"),pn=O(Wt,Cl),qn=O(Wt,"M"),Wt.forEach(u),Bn=R(xe),Ct=m(xe,"DIV",{class:!0,"data-svelte-h":!0}),ae(Ct)!=="svelte-1wwdyqo"&&(Ct.textContent=$a),Un=R(xe),We=m(xe,"DIV",{class:!0});var et=T(We);Xn=O(et,"FY2026: $"),cn=O(et,Dl),Qn=O(et,`M ·
      FY2027: $`),hn=O(et,Il),Gn=O(et,"M"),et.forEach(u),xe.forEach(u),Kn=R(Le),Pe=m(Le,"DIV",{class:!0});var tt=T(Pe);ot=m(tt,"DIV",{class:!0});var Pt=T(ot);Jn=O(Pt,"$"),mn=O(Pt,Fl),Zn=O(Pt,"M"),Pt.forEach(u),xn=R(tt),Dt=m(tt,"DIV",{class:!0,"data-svelte-h":!0}),ae(Dt)!=="svelte-1l52juc"&&(Dt.textContent=Va),ea=R(tt),st=m(tt,"DIV",{class:!0});var Yt=T(st);ta=O(Yt,"FY2026 plan: $"),vn=O(Yt,Rl),la=O(Yt,"M"),Yt.forEach(u),tt.forEach(u),na=R(Le),Ye=m(Le,"DIV",{class:!0});var lt=T(Ye);_t=m(lt,"DIV",{class:!0});var $t=T(_t);yn=O($t,wl),aa=O($t," – "),En=O($t,kl),$t.forEach(u),ia=R(lt),It=m(lt,"DIV",{class:!0,"data-svelte-h":!0}),ae(It)!=="svelte-1c8ompe"&&(It.textContent=qa),ra=R(lt),il=m(lt,"DIV",{class:!0});var Kl=T(il);gn=O(Kl,Ml),Kl.forEach(u),lt.forEach(u),Le.forEach(u),An=R(p),De&&De.l(p),rl=R(p),Xe=m(p,"DIV",{class:!0});var Vt=T(Xe);Ft=m(Vt,"DIV",{class:!0,"data-svelte-h":!0}),ae(Ft)!=="svelte-xo54en"&&(Ft.textContent=Ba),oa=R(Vt),nl(ft.$$.fragment,Vt),Vt.forEach(u),Tn=R(p),He=m(p,"DIV",{class:!0,style:!0});var nt=T(He);Rt=m(nt,"DIV",{class:!0,"data-svelte-h":!0}),ae(Rt)!=="svelte-1v44jiu"&&(Rt.textContent=Ua),sa=R(nt),wt=m(nt,"DIV",{class:!0,"data-svelte-h":!0}),ae(wt)!=="svelte-172rma"&&(wt.textContent=Xa),_a=R(nt),nl(ut.$$.fragment,nt),nt.forEach(u),Sn=R(p),Qe=m(p,"DIV",{class:!0});var qt=T(Qe);$e=m(qt,"DIV",{class:!0});var at=T($e);kt=m(at,"DIV",{class:!0,"data-svelte-h":!0}),ae(kt)!=="svelte-11ys750"&&(kt.textContent=Qa),fa=R(at),Mt=m(at,"DIV",{class:!0,"data-svelte-h":!0}),ae(Mt)!=="svelte-1oi4m4k"&&(Mt.textContent=Ga),ua=R(at),ol=m(at,"DIV",{class:!0});var Jl=T(ol);dt=m(Jl,"TABLE",{class:!0});var Bt=T(dt);sl=m(Bt,"THEAD",{"data-svelte-h":!0}),ae(sl)!=="svelte-1h4ii54"&&(sl.innerHTML=Ka),da=R(Bt),pt=m(Bt,"TBODY",{});var Ut=T(pt);for(let qe=0;qe<Ae.length;qe+=1)Ae[qe].l(Ut);bn=R(Ut),Ne=m(Ut,"TR",{class:!0});var Ie=T(Ne);Ht=m(Ie,"TD",{class:!0,"data-svelte-h":!0}),ae(Ht)!=="svelte-1u00c7s"&&(Ht.textContent=Ja),pa=R(Ie),_l=m(Ie,"TD",{class:!0});var Zl=T(_l);Nn=O(Zl,Hl),Zl.forEach(u),ca=R(Ie),fl=m(Ie,"TD",{class:!0});var xl=T(fl);Cn=O(xl,Ol),xl.forEach(u),ha=R(Ie),ul=m(Ie,"TD",{class:!0});var en=T(ul);Dn=O(en,jl),en.forEach(u),ma=R(Ie),dl=m(Ie,"TD",{class:!0});var tn=T(dl);In=O(tn,Ll),tn.forEach(u),va=R(Ie),pl=m(Ie,"TD",{class:!0});var ln=T(pl);Fn=O(ln,zl),ln.forEach(u),Ie.forEach(u),Ut.forEach(u),Bt.forEach(u),Jl.forEach(u),at.forEach(u),ya=R(qt),Ve=m(qt,"DIV",{class:!0});var it=T(Ve);Ot=m(it,"DIV",{class:!0,"data-svelte-h":!0}),ae(Ot)!=="svelte-1i1bln4"&&(Ot.textContent=Za),Ea=R(it),jt=m(it,"DIV",{class:!0,"data-svelte-h":!0}),ae(jt)!=="svelte-q9w9lz"&&(jt.textContent=xa),ga=R(it),cl=m(it,"DIV",{class:!0});var nn=T(cl);ct=m(nn,"TABLE",{class:!0});var Xt=T(ct);hl=m(Xt,"THEAD",{"data-svelte-h":!0}),ae(hl)!=="svelte-geav0b"&&(hl.innerHTML=ei),Aa=R(Xt),ht=m(Xt,"TBODY",{});var Qt=T(ht);for(let qe=0;qe<Te.length;qe+=1)Te[qe].l(Qt);Rn=R(Qt),Ce=m(Qt,"TR",{class:!0});var Fe=T(Ce);Lt=m(Fe,"TD",{class:!0,"data-svelte-h":!0}),ae(Lt)!=="svelte-1u00c7s"&&(Lt.textContent=ti),Ta=R(Fe),mt=m(Fe,"TD",{class:!0});var Gt=T(mt);Sa=O(Gt,"$"),wn=O(Gt,Wl),ba=O(Gt,"M"),Gt.forEach(u),Na=R(Fe),vt=m(Fe,"TD",{class:!0});var Kt=T(vt);Ca=O(Kt,"$"),kn=O(Kt,Pl),Da=O(Kt,"M"),Kt.forEach(u),Ia=R(Fe),yt=m(Fe,"TD",{class:!0});var Jt=T(yt);Fa=O(Jt,"$"),Mn=O(Jt,Yl),Ra=O(Jt,"M"),Jt.forEach(u),wa=R(Fe),Et=m(Fe,"TD",{class:!0});var Zt=T(Et);ka=O(Zt,"$"),Hn=O(Zt,$l),Ma=O(Zt,"M"),Zt.forEach(u),Ha=R(Fe),gt=m(Fe,"TD",{class:!0});var xt=T(gt);Oa=O(xt,"$"),On=O(xt,Vl),ja=O(xt,"M"),xt.forEach(u),Fe.forEach(u),Qt.forEach(u),Xt.forEach(u),nn.forEach(u),it.forEach(u),qt.forEach(u),this.h()},h(){var p,M;i(l,"name","twitter:card"),i(l,"content","summary_large_image"),i(n,"name","twitter:site"),i(n,"content","@evidence_dev"),H(E,"color","#211030"),H(E,"font-size","1.5rem"),H(E,"font-weight","700"),H(E,"margin","0 0 4px 0"),H(E,"line-height","1.3"),H(b,"color","#6321a5"),H(b,"font-size","0.9rem"),H(b,"margin","0"),H(C,"font-size","11px"),H(C,"font-family","monospace"),H(C,"background","#802cd7"),H(C,"border-radius","5px"),H(C,"padding","4px 12px"),H(C,"color","#fff"),H(C,"font-weight","700"),H(C,"letter-spacing","0.06em"),H(C,"white-space","nowrap"),H(C,"flex-shrink","0"),H(y,"display","flex"),H(y,"align-items","flex-start"),H(y,"justify-content","space-between"),H(y,"gap","16px"),H(y,"flex-wrap","wrap"),i(Q,"class",te="phase-badge phase-"+(((M=(p=t[0])==null?void 0:p[0])==null?void 0:M.phase)??"").toLowerCase().replace(/[^a-z]/g,"-")+" svelte-1gu72pz"),H(Q,"font-size","12px"),H(Q,"padding","4px 14px"),H(Q,"border-radius","20px"),H(Q,"font-weight","600"),H(Q,"white-space","nowrap"),H(U,"font-size","12px"),H(U,"padding","4px 12px"),H(U,"border-radius","20px"),H(U,"background","rgba(128,44,215,0.15)"),H(U,"border","1px solid #802cd7"),H(U,"color","#3C1473"),H(U,"font-weight","500"),H(U,"white-space","nowrap"),H(J,"font-size","12px"),H(J,"padding","4px 12px"),H(J,"border-radius","20px"),H(J,"background","rgba(128,44,215,0.15)"),H(J,"border","1px solid #802cd7"),H(J,"color","#3C1473"),H(J,"font-weight","500"),H(J,"white-space","nowrap"),H(G,"display","flex"),H(G,"gap","8px"),H(G,"margin-top","16px"),H(G,"flex-wrap","nowrap"),H(G,"align-items","center"),H(D,"background","linear-gradient(135deg, #ede5f8 0%, #d4bef0 100%)"),H(D,"padding","24px 32px"),H(D,"border-radius","12px"),H(D,"border-bottom","4px solid #802cd7"),H(D,"margin-bottom","0"),i(fe,"href","/deep-dive/it-projects"),H(fe,"display","inline-block"),H(fe,"margin","12px 0"),H(fe,"color","#6321a5"),H(fe,"font-size","0.9rem"),H(fe,"text-decoration","none"),i(je,"class","kpi-val svelte-1gu72pz"),i(bt,"class","kpi-lbl svelte-1gu72pz"),i(Nt,"class","kpi-sub svelte-1gu72pz"),i(ye,"class","kpi-card svelte-1gu72pz"),i(rt,"class","kpi-val svelte-1gu72pz"),i(Ct,"class","kpi-lbl svelte-1gu72pz"),i(We,"class","kpi-sub svelte-1gu72pz"),i(ze,"class","kpi-card svelte-1gu72pz"),i(ot,"class","kpi-val svelte-1gu72pz"),i(Dt,"class","kpi-lbl svelte-1gu72pz"),i(st,"class","kpi-sub svelte-1gu72pz"),i(Pe,"class","kpi-card svelte-1gu72pz"),i(_t,"class","kpi-val svelte-1gu72pz"),i(It,"class","kpi-lbl svelte-1gu72pz"),i(il,"class","kpi-sub svelte-1gu72pz"),i(Ye,"class","kpi-card svelte-1gu72pz"),i(B,"class","kpi-row svelte-1gu72pz"),i(Ft,"class","section-title svelte-1gu72pz"),i(Xe,"class","section-card svelte-1gu72pz"),i(Rt,"class","section-title svelte-1gu72pz"),i(wt,"class","section-sub svelte-1gu72pz"),i(He,"class","section-card svelte-1gu72pz"),H(He,"margin-bottom","12px"),i(kt,"class","section-title svelte-1gu72pz"),i(Mt,"class","section-sub svelte-1gu72pz"),i(Ht,"class","svelte-1gu72pz"),i(_l,"class","num svelte-1gu72pz"),i(fl,"class","num svelte-1gu72pz"),i(ul,"class","num svelte-1gu72pz"),i(dl,"class","num svelte-1gu72pz"),i(pl,"class","num total-col svelte-1gu72pz"),i(Ne,"class","grand-total-row svelte-1gu72pz"),i(dt,"class","data-table svelte-1gu72pz"),i(ol,"class","data-table-wrap svelte-1gu72pz"),i($e,"class","section-card svelte-1gu72pz"),i(Ot,"class","section-title svelte-1gu72pz"),i(jt,"class","section-sub svelte-1gu72pz"),i(Lt,"class","svelte-1gu72pz"),i(mt,"class","num svelte-1gu72pz"),i(vt,"class","num svelte-1gu72pz"),i(yt,"class","num svelte-1gu72pz"),i(Et,"class","num svelte-1gu72pz"),i(gt,"class","num svelte-1gu72pz"),i(Ce,"class","total-row svelte-1gu72pz"),i(ct,"class","data-table svelte-1gu72pz"),i(cl,"class","data-table-wrap svelte-1gu72pz"),i(Ve,"class","section-card svelte-1gu72pz"),i(Qe,"class","two-col svelte-1gu72pz")},m(p,M){Ge&&Ge.m(p,M),k(p,e,M),ql.m(document.head,null),o(document.head,l),o(document.head,n),Ke&&Ke.m(document.head,null),o(document.head,a),k(p,s,M),de&&de.m(p,M),k(p,r,M),pe&&pe.m(p,M),k(p,_,M),ce&&ce.m(p,M),k(p,d,M),he&&he.m(p,M),k(p,f,M),me&&me.m(p,M),k(p,A,M),k(p,D,M),o(D,y),o(y,S),o(S,E),o(E,g),o(E,N),o(S,z),o(S,b),o(b,P),o(y,c),o(y,C),o(C,F),o(D,L),o(D,G),o(G,Q),o(Q,X),o(G,le),o(G,U),o(U,K),o(G,Z),o(G,J),o(J,ge),o(J,be),k(p,we,M),k(p,fe,M),k(p,q,M),k(p,B,M),o(B,ye),o(ye,je),o(je,un),o(ye,Wn),o(ye,bt),o(ye,Pn),o(ye,Nt),o(Nt,dn),o(Nt,Yn),o(B,$n),o(B,ze),o(ze,rt),o(rt,Vn),o(rt,pn),o(rt,qn),o(ze,Bn),o(ze,Ct),o(ze,Un),o(ze,We),o(We,Xn),o(We,cn),o(We,Qn),o(We,hn),o(We,Gn),o(B,Kn),o(B,Pe),o(Pe,ot),o(ot,Jn),o(ot,mn),o(ot,Zn),o(Pe,xn),o(Pe,Dt),o(Pe,ea),o(Pe,st),o(st,ta),o(st,vn),o(st,la),o(B,na),o(B,Ye),o(Ye,_t),o(_t,yn),o(_t,aa),o(_t,En),o(Ye,ia),o(Ye,It),o(Ye,ra),o(Ye,il),o(il,gn),k(p,An,M),De&&De.m(p,M),k(p,rl,M),k(p,Xe,M),o(Xe,Ft),o(Xe,oa),ll(ft,Xe,null),k(p,Tn,M),k(p,He,M),o(He,Rt),o(He,sa),o(He,wt),o(He,_a),ll(ut,He,null),k(p,Sn,M),k(p,Qe,M),o(Qe,$e),o($e,kt),o($e,fa),o($e,Mt),o($e,ua),o($e,ol),o(ol,dt),o(dt,sl),o(dt,da),o(dt,pt);for(let ve=0;ve<Ae.length;ve+=1)Ae[ve]&&Ae[ve].m(pt,null);o(pt,bn),o(pt,Ne),o(Ne,Ht),o(Ne,pa),o(Ne,_l),o(_l,Nn),o(Ne,ca),o(Ne,fl),o(fl,Cn),o(Ne,ha),o(Ne,ul),o(ul,Dn),o(Ne,ma),o(Ne,dl),o(dl,In),o(Ne,va),o(Ne,pl),o(pl,Fn),o(Qe,ya),o(Qe,Ve),o(Ve,Ot),o(Ve,Ea),o(Ve,jt),o(Ve,ga),o(Ve,cl),o(cl,ct),o(ct,hl),o(ct,Aa),o(ct,ht);for(let ve=0;ve<Te.length;ve+=1)Te[ve]&&Te[ve].m(ht,null);o(ht,Rn),o(ht,Ce),o(Ce,Lt),o(Ce,Ta),o(Ce,mt),o(mt,Sa),o(mt,wn),o(mt,ba),o(Ce,Na),o(Ce,vt),o(vt,Ca),o(vt,kn),o(vt,Da),o(Ce,Ia),o(Ce,yt),o(yt,Fa),o(yt,Mn),o(yt,Ra),o(Ce,wa),o(Ce,Et),o(Et,ka),o(Et,Hn),o(Et,Ma),o(Ce,Ha),o(Ce,gt),o(gt,Oa),o(gt,On),o(gt,ja),x=!0},p(p,M){var zt,yl,Bl,Ul,Je,Xl,Ql,El,Le,Ze,Gl,gl,xe,Wt,et,tt,Pt,Yt,lt,$t,Kl,Vt,nt,qt,at,Jl,Bt,Ut,Ie,Zl,xl,en,tn,ln,it,nn,Xt,Qt,Fe,Gt,Kt,Jt,Zt,xt,qe,nr,ar,ir,rr,or,sr,_r,fr,ur,dr,pr,cr;typeof ee<"u"&&((zt=ee.og)!=null&&zt.title)&&ee.hide_title!==!0&&Ge.p(p,M),ql.p(p,M),typeof ee=="object"&&Ke.p(p,M),p[0]?de?(de.p(p,M),M[0]&1&&ue(de,1)):(de=Zr(p),de.c(),ue(de,1),de.m(r.parentNode,r)):de&&(on(),Se(de,1,1,()=>{de=null}),rn()),p[1]?pe?(pe.p(p,M),M[0]&2&&ue(pe,1)):(pe=xr(p),pe.c(),ue(pe,1),pe.m(_.parentNode,_)):pe&&(on(),Se(pe,1,1,()=>{pe=null}),rn()),p[2]?ce?(ce.p(p,M),M[0]&4&&ue(ce,1)):(ce=eo(p),ce.c(),ue(ce,1),ce.m(d.parentNode,d)):ce&&(on(),Se(ce,1,1,()=>{ce=null}),rn()),p[3]?he?(he.p(p,M),M[0]&8&&ue(he,1)):(he=to(p),he.c(),ue(he,1),he.m(f.parentNode,f)):he&&(on(),Se(he,1,1,()=>{he=null}),rn()),p[4]?me?(me.p(p,M),M[0]&16&&ue(me,1)):(me=lo(p),me.c(),ue(me,1),me.m(A.parentNode,A)):me&&(on(),Se(me,1,1,()=>{me=null}),rn()),(!x||M[0]&1)&&I!==(I=(((Bl=(yl=p[0])==null?void 0:yl[0])==null?void 0:Bl.project_title)??"")+"")&&Y(N,I),(!x||M[0]&1)&&W!==(W=(((Je=(Ul=p[0])==null?void 0:Ul[0])==null?void 0:Je.agency)??"")+"")&&Y(P,W),(!x||M[0]&1)&&h!==(h=(((Ql=(Xl=p[0])==null?void 0:Xl[0])==null?void 0:Ql.mitdp_id)??"")+"")&&Y(F,h),(!x||M[0]&1)&&V!==(V=(((Le=(El=p[0])==null?void 0:El[0])==null?void 0:Le.phase)??"")+"")&&Y(X,V),(!x||M[0]&1&&te!==(te="phase-badge phase-"+(((Gl=(Ze=p[0])==null?void 0:Ze[0])==null?void 0:Gl.phase)??"").toLowerCase().replace(/[^a-z]/g,"-")+" svelte-1gu72pz"))&&i(Q,"class",te),(!x||M[0]&1)&&$!==($=(((xe=(gl=p[0])==null?void 0:gl[0])==null?void 0:xe.project_length)??"")+"")&&Y(K,$),(!x||M[0]&1)&&Ee!==(Ee=(((et=(Wt=p[0])==null?void 0:Wt[0])==null?void 0:et.time_remaining)??"")+"")&&Y(ge,Ee),(!x||M[0]&1)&&Ue!==(Ue=((Pt=(tt=p[0])==null?void 0:tt[0])==null?void 0:Pt.eac_label)+"")&&Y(un,Ue),(!x||M[0]&1)&&Nl!==(Nl=((lt=(Yt=p[0])==null?void 0:Yt[0])==null?void 0:lt.remaining_label)+"")&&Y(dn,Nl),(!x||M[0]&4)&&Cl!==(Cl=((((Kl=($t=p[2])==null?void 0:$t[0])==null?void 0:Kl.total_funding_to_date)??0)/1e6).toFixed(1)+"")&&Y(pn,Cl),(!x||M[0]&4)&&Dl!==(Dl=((((nt=(Vt=p[2])==null?void 0:Vt[0])==null?void 0:nt.appropriation_fy2026)??0)/1e6).toFixed(1)+"")&&Y(cn,Dl),(!x||M[0]&4)&&Il!==(Il=((((at=(qt=p[2])==null?void 0:qt[0])==null?void 0:at.allowance_fy2027)??0)/1e6).toFixed(1)+"")&&Y(hn,Il),(!x||M[0]&16)&&Fl!==(Fl=((((Bt=(Jl=p[4])==null?void 0:Jl[0])==null?void 0:Bt.actual_fy2025)??0)/1e6).toFixed(1)+"")&&Y(mn,Fl),(!x||M[0]&16)&&Rl!==(Rl=((((Ie=(Ut=p[4])==null?void 0:Ut[0])==null?void 0:Ie.spend_plan_fy2026)??0)/1e6).toFixed(1)+"")&&Y(vn,Rl),(!x||M[0]&1)&&wl!==(wl=((xl=(Zl=p[0])==null?void 0:Zl[0])==null?void 0:xl.start_year)+"")&&Y(yn,wl),(!x||M[0]&1)&&kl!==(kl=((tn=(en=p[0])==null?void 0:en[0])==null?void 0:tn.end_year)+"")&&Y(En,kl),(!x||M[0]&1)&&Ml!==(Ml=((it=(ln=p[0])==null?void 0:ln[0])==null?void 0:it.program_name)+"")&&Y(gn,Ml),(Xt=(nn=p[0])==null?void 0:nn[0])!=null&&Xt.project_summary?De?De.p(p,M):(De=no(p),De.c(),De.m(rl.parentNode,rl)):De&&(De.d(1),De=null);const ve={};M[0]&1&&(ve.data=p[0]),ft.$set(ve);const At={};if(M[0]&4&&(At.fundingTotal=p[2]),M[0]&16&&(At.costsTotal=p[4]),ut.$set(At),M[0]&2){ml=ie(p[1]);let oe;for(oe=0;oe<ml.length;oe+=1){const an=Jr(p,ml,oe);Ae[oe]?Ae[oe].p(an,M):(Ae[oe]=io(an),Ae[oe].c(),Ae[oe].m(pt,bn))}for(;oe<Ae.length;oe+=1)Ae[oe].d(1);Ae.length=ml.length}if((!x||M[0]&4)&&Hl!==(Hl=(Fe=(Qt=p[2])==null?void 0:Qt[0])!=null&&Fe.prior_to_fy2025?"$"+(p[2][0].prior_to_fy2025/1e6).toFixed(1)+"M":"—")&&Y(Nn,Hl),(!x||M[0]&4)&&Ol!==(Ol=(Kt=(Gt=p[2])==null?void 0:Gt[0])!=null&&Kt.actual_fy2025?"$"+(p[2][0].actual_fy2025/1e6).toFixed(1)+"M":"—")&&Y(Cn,Ol),(!x||M[0]&4)&&jl!==(jl=(Zt=(Jt=p[2])==null?void 0:Jt[0])!=null&&Zt.appropriation_fy2026?"$"+(p[2][0].appropriation_fy2026/1e6).toFixed(1)+"M":"—")&&Y(Dn,jl),(!x||M[0]&4)&&Ll!==(Ll=(qe=(xt=p[2])==null?void 0:xt[0])!=null&&qe.allowance_fy2027?"$"+(p[2][0].allowance_fy2027/1e6).toFixed(1)+"M":"—")&&Y(In,Ll),(!x||M[0]&4)&&zl!==(zl=(ar=(nr=p[2])==null?void 0:nr[0])!=null&&ar.total_funding_to_date?"$"+(p[2][0].total_funding_to_date/1e6).toFixed(1)+"M":"—")&&Y(Fn,zl),M[0]&8){vl=ie(p[3]);let oe;for(oe=0;oe<vl.length;oe+=1){const an=Kr(p,vl,oe);Te[oe]?Te[oe].p(an,M):(Te[oe]=ro(an),Te[oe].c(),Te[oe].m(ht,Rn))}for(;oe<Te.length;oe+=1)Te[oe].d(1);Te.length=vl.length}(!x||M[0]&16)&&Wl!==(Wl=(((rr=(ir=p[4])==null?void 0:ir[0])==null?void 0:rr.prior_to_fy2025)/1e6).toFixed(1)+"")&&Y(wn,Wl),(!x||M[0]&16)&&Pl!==(Pl=(((sr=(or=p[4])==null?void 0:or[0])==null?void 0:sr.actual_fy2025)/1e6).toFixed(1)+"")&&Y(kn,Pl),(!x||M[0]&16)&&Yl!==(Yl=(((fr=(_r=p[4])==null?void 0:_r[0])==null?void 0:fr.spend_plan_fy2026)/1e6).toFixed(1)+"")&&Y(Mn,Yl),(!x||M[0]&16)&&$l!==($l=(((dr=(ur=p[4])==null?void 0:ur[0])==null?void 0:dr.spend_plan_fy2027)/1e6).toFixed(1)+"")&&Y(Hn,$l),(!x||M[0]&16)&&Vl!==(Vl=(((cr=(pr=p[4])==null?void 0:pr[0])==null?void 0:cr.projected_outyears)/1e6).toFixed(1)+"")&&Y(On,Vl)},i(p){x||(ue(de),ue(pe),ue(ce),ue(he),ue(me),ue(ft.$$.fragment,p),ue(ut.$$.fragment,p),x=!0)},o(p){Se(de),Se(pe),Se(ce),Se(he),Se(me),Se(ft.$$.fragment,p),Se(ut.$$.fragment,p),x=!1},d(p){p&&(u(e),u(s),u(r),u(_),u(d),u(f),u(A),u(D),u(we),u(fe),u(q),u(B),u(An),u(rl),u(Xe),u(Tn),u(He),u(Sn),u(Qe)),Ge&&Ge.d(p),ql.d(p),u(l),u(n),Ke&&Ke.d(p),u(a),de&&de.d(p),pe&&pe.d(p),ce&&ce.d(p),he&&he.d(p),me&&me.d(p),De&&De.d(p),tl(ft),tl(ut),Re(Ae,p),Re(Te,p)}}}const ee={title:null};function Bo(t,e,l){let n,a;hr(t,Eo,ne=>l(28,n=ne)),hr(t,vr,ne=>l(33,a=ne));let{data:s}=e,{data:r={},customFormattingSettings:_,__db:d,inputs:f}=s;_o(vr,a="9426d919032e95c49a893a185313f67c",a);let A=co(yo(f));fo(A.subscribe(ne=>f=ne)),uo(vo,{getCustomFormats:()=>_.customFormats||[]});const D=(ne,q)=>go(d.query,ne,{query_name:q});ho(D);let y=n.params;po(()=>!0);let S={initialData:void 0,initialError:void 0},E=Be`SELECT
    mitdp_id,
    project_title,
    "Agency"                        AS agency,
    "Phase"                         AS phase,
    project_summary,
    "Name"                          AS program_name,
    appropriation_code,
    est_total_cost_at_completion    AS eac_label,
    est_cost_remaining              AS remaining_label,
    "Project Time Remaining"        AS time_remaining,
    "Project Length"                AS project_length,
    "Start Year"                    AS start_year,
    "End Year"                      AS end_year,
    TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
    TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
    TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
    TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
    TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
    TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
FROM mbtsa.mitdp_projects
WHERE mitdp_id = '${y.mitdp_id}'`,g=`SELECT
    mitdp_id,
    project_title,
    "Agency"                        AS agency,
    "Phase"                         AS phase,
    project_summary,
    "Name"                          AS program_name,
    appropriation_code,
    est_total_cost_at_completion    AS eac_label,
    est_cost_remaining              AS remaining_label,
    "Project Time Remaining"        AS time_remaining,
    "Project Length"                AS project_length,
    "Start Year"                    AS start_year,
    "End Year"                      AS end_year,
    TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
    TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
    TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
    TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
    TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
    TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
FROM mbtsa.mitdp_projects
WHERE mitdp_id = '${y.mitdp_id}'`;r.project_data&&(r.project_data instanceof Error?S.initialError=r.project_data:S.initialData=r.project_data,r.project_columns&&(S.knownColumns=r.project_columns));let I,N=!1;const z=sn.createReactive({callback:ne=>{l(0,I=ne)},execFn:D},{id:"project",...S});z(g,{noResolve:E,...S}),globalThis[Symbol.for("project")]={get value(){return I}};let b={initialData:void 0,initialError:void 0},W=Be`WITH sub_rows AS (
    SELECT
        funding_type,
        prior_to_fy2025,
        actual_fy2025,
        appropriation_fy2026,
        allowance_fy2027,
        total_funding_to_date,
        CASE
            WHEN funding_type IN ('ITIF','Realigned ITIF','Agency Funds','Federal Funds','Reimbursable Funds')
                THEN 'Annual Appropriation'
            WHEN funding_type IN ('ITIF Realignment','Agency Funds Realignment','Agency Funds Realignmen')
                THEN 'Off-Cycle Adjustments'
        END AS parent_header
    FROM mbtsa.mitdp_funding
    WHERE mitdp_id = '${y.mitdp_id}'
      AND funding_type NOT IN ('Total','Annual Appropriation','Off-Cycle Adjustments')
      AND COALESCE(prior_to_fy2025, actual_fy2025, appropriation_fy2026, allowance_fy2027, total_funding_to_date) IS NOT NULL
),
headers_with_children AS (
    SELECT DISTINCT parent_header AS funding_type
    FROM sub_rows
    WHERE parent_header IS NOT NULL
)
SELECT
    f.funding_type,
    CASE f.funding_type
        WHEN 'Annual Appropriation'  THEN 'header'
        WHEN 'Off-Cycle Adjustments' THEN 'header'
        ELSE 'sub'
    END AS row_type,
    f.prior_to_fy2025,
    f.actual_fy2025,
    f.appropriation_fy2026,
    f.allowance_fy2027,
    f.total_funding_to_date
FROM mbtsa.mitdp_funding f
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type != 'Total'
  AND (
    -- only include header if it has at least one non-null child
    (f.funding_type = 'Annual Appropriation'  AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Annual Appropriation'))
    OR
    (f.funding_type = 'Off-Cycle Adjustments' AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Off-Cycle Adjustments'))
    -- include sub-rows that have values
    OR COALESCE(f.prior_to_fy2025, f.actual_fy2025, f.appropriation_fy2026, f.allowance_fy2027, f.total_funding_to_date) IS NOT NULL
  )
  AND f.funding_type NOT IN ('Annual Appropriation','Off-Cycle Adjustments')
  OR (
    f.funding_type IN ('Annual Appropriation','Off-Cycle Adjustments')
    AND f.funding_type IN (SELECT funding_type FROM headers_with_children)
    AND f.mitdp_id = '${y.mitdp_id}'
  )
ORDER BY
    CASE f.funding_type
        WHEN 'Annual Appropriation'     THEN 1
        WHEN 'ITIF'                     THEN 2
        WHEN 'Realigned ITIF'           THEN 3
        WHEN 'Agency Funds'             THEN 4
        WHEN 'Federal Funds'            THEN 5
        WHEN 'Reimbursable Funds'       THEN 6
        WHEN 'Off-Cycle Adjustments'    THEN 7
        WHEN 'ITIF Realignment'         THEN 8
        WHEN 'Agency Funds Realignment' THEN 9
        WHEN 'Agency Funds Realignmen'  THEN 9
        ELSE 10
    END`,P=`WITH sub_rows AS (
    SELECT
        funding_type,
        prior_to_fy2025,
        actual_fy2025,
        appropriation_fy2026,
        allowance_fy2027,
        total_funding_to_date,
        CASE
            WHEN funding_type IN ('ITIF','Realigned ITIF','Agency Funds','Federal Funds','Reimbursable Funds')
                THEN 'Annual Appropriation'
            WHEN funding_type IN ('ITIF Realignment','Agency Funds Realignment','Agency Funds Realignmen')
                THEN 'Off-Cycle Adjustments'
        END AS parent_header
    FROM mbtsa.mitdp_funding
    WHERE mitdp_id = '${y.mitdp_id}'
      AND funding_type NOT IN ('Total','Annual Appropriation','Off-Cycle Adjustments')
      AND COALESCE(prior_to_fy2025, actual_fy2025, appropriation_fy2026, allowance_fy2027, total_funding_to_date) IS NOT NULL
),
headers_with_children AS (
    SELECT DISTINCT parent_header AS funding_type
    FROM sub_rows
    WHERE parent_header IS NOT NULL
)
SELECT
    f.funding_type,
    CASE f.funding_type
        WHEN 'Annual Appropriation'  THEN 'header'
        WHEN 'Off-Cycle Adjustments' THEN 'header'
        ELSE 'sub'
    END AS row_type,
    f.prior_to_fy2025,
    f.actual_fy2025,
    f.appropriation_fy2026,
    f.allowance_fy2027,
    f.total_funding_to_date
FROM mbtsa.mitdp_funding f
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type != 'Total'
  AND (
    -- only include header if it has at least one non-null child
    (f.funding_type = 'Annual Appropriation'  AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Annual Appropriation'))
    OR
    (f.funding_type = 'Off-Cycle Adjustments' AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Off-Cycle Adjustments'))
    -- include sub-rows that have values
    OR COALESCE(f.prior_to_fy2025, f.actual_fy2025, f.appropriation_fy2026, f.allowance_fy2027, f.total_funding_to_date) IS NOT NULL
  )
  AND f.funding_type NOT IN ('Annual Appropriation','Off-Cycle Adjustments')
  OR (
    f.funding_type IN ('Annual Appropriation','Off-Cycle Adjustments')
    AND f.funding_type IN (SELECT funding_type FROM headers_with_children)
    AND f.mitdp_id = '${y.mitdp_id}'
  )
ORDER BY
    CASE f.funding_type
        WHEN 'Annual Appropriation'     THEN 1
        WHEN 'ITIF'                     THEN 2
        WHEN 'Realigned ITIF'           THEN 3
        WHEN 'Agency Funds'             THEN 4
        WHEN 'Federal Funds'            THEN 5
        WHEN 'Reimbursable Funds'       THEN 6
        WHEN 'Off-Cycle Adjustments'    THEN 7
        WHEN 'ITIF Realignment'         THEN 8
        WHEN 'Agency Funds Realignment' THEN 9
        WHEN 'Agency Funds Realignmen'  THEN 9
        ELSE 10
    END`;r.funding_data&&(r.funding_data instanceof Error?b.initialError=r.funding_data:b.initialData=r.funding_data,r.funding_columns&&(b.knownColumns=r.funding_columns));let c,C=!1;const h=sn.createReactive({callback:ne=>{l(1,c=ne)},execFn:D},{id:"funding",...b});h(P,{noResolve:W,...b}),globalThis[Symbol.for("funding")]={get value(){return c}};let F={initialData:void 0,initialError:void 0},L=Be`SELECT
    prior_to_fy2025,
    actual_fy2025,
    appropriation_fy2026,
    allowance_fy2027,
    total_funding_to_date
FROM mbtsa.mitdp_funding
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`,G=`SELECT
    prior_to_fy2025,
    actual_fy2025,
    appropriation_fy2026,
    allowance_fy2027,
    total_funding_to_date
FROM mbtsa.mitdp_funding
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`;r.funding_total_data&&(r.funding_total_data instanceof Error?F.initialError=r.funding_total_data:F.initialData=r.funding_total_data,r.funding_total_columns&&(F.knownColumns=r.funding_total_columns));let Q,V=!1;const X=sn.createReactive({callback:ne=>{l(2,Q=ne)},execFn:D},{id:"funding_total",...F});X(G,{noResolve:L,...F}),globalThis[Symbol.for("funding_total")]={get value(){return Q}};let te={initialData:void 0,initialError:void 0},le=Be`SELECT
    funding_type,
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type NOT IN ('Total', 'Project Costs, All Time')
  AND COALESCE(prior_to_fy2025, actual_fy2025, spend_plan_fy2026, spend_plan_fy2027, projected_outyears) IS NOT NULL
ORDER BY COALESCE(actual_fy2025, 0) DESC`,U=`SELECT
    funding_type,
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type NOT IN ('Total', 'Project Costs, All Time')
  AND COALESCE(prior_to_fy2025, actual_fy2025, spend_plan_fy2026, spend_plan_fy2027, projected_outyears) IS NOT NULL
ORDER BY COALESCE(actual_fy2025, 0) DESC`;r.dev_costs_data&&(r.dev_costs_data instanceof Error?te.initialError=r.dev_costs_data:te.initialData=r.dev_costs_data,r.dev_costs_columns&&(te.knownColumns=r.dev_costs_columns));let $,K=!1;const Z=sn.createReactive({callback:ne=>{l(3,$=ne)},execFn:D},{id:"dev_costs",...te});Z(U,{noResolve:le,...te}),globalThis[Symbol.for("dev_costs")]={get value(){return $}};let J={initialData:void 0,initialError:void 0},Ee=Be`SELECT
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`,ge=`SELECT
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`;r.dev_costs_total_data&&(r.dev_costs_total_data instanceof Error?J.initialError=r.dev_costs_total_data:J.initialData=r.dev_costs_total_data,r.dev_costs_total_columns&&(J.knownColumns=r.dev_costs_total_columns));let be,we=!1;const fe=sn.createReactive({callback:ne=>{l(4,be=ne)},execFn:D},{id:"dev_costs_total",...J});return fe(ge,{noResolve:Ee,...J}),globalThis[Symbol.for("dev_costs_total")]={get value(){return be}},t.$$set=ne=>{"data"in ne&&l(5,s=ne.data)},t.$$.update=()=>{t.$$.dirty[0]&32&&l(6,{data:r={},customFormattingSettings:_,__db:d}=s,r),t.$$.dirty[0]&64&&mo.set(Object.keys(r).length>0),t.$$.dirty[0]&268435456&&l(7,y=n.params),t.$$.dirty[0]&128&&l(9,E=Be`SELECT
    mitdp_id,
    project_title,
    "Agency"                        AS agency,
    "Phase"                         AS phase,
    project_summary,
    "Name"                          AS program_name,
    appropriation_code,
    est_total_cost_at_completion    AS eac_label,
    est_cost_remaining              AS remaining_label,
    "Project Time Remaining"        AS time_remaining,
    "Project Length"                AS project_length,
    "Start Year"                    AS start_year,
    "End Year"                      AS end_year,
    TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
    TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
    TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
    TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
    TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
    TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
FROM mbtsa.mitdp_projects
WHERE mitdp_id = '${y.mitdp_id}'`),t.$$.dirty[0]&128&&l(10,g=`SELECT
    mitdp_id,
    project_title,
    "Agency"                        AS agency,
    "Phase"                         AS phase,
    project_summary,
    "Name"                          AS program_name,
    appropriation_code,
    est_total_cost_at_completion    AS eac_label,
    est_cost_remaining              AS remaining_label,
    "Project Time Remaining"        AS time_remaining,
    "Project Length"                AS project_length,
    "Start Year"                    AS start_year,
    "End Year"                      AS end_year,
    TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
    TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
    TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
    TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
    TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
    TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
FROM mbtsa.mitdp_projects
WHERE mitdp_id = '${y.mitdp_id}'`),t.$$.dirty[0]&3840&&(E||!N?E||(z(g,{noResolve:E,...S}),l(11,N=!0)):z(g,{noResolve:E})),t.$$.dirty[0]&128&&l(13,W=Be`WITH sub_rows AS (
    SELECT
        funding_type,
        prior_to_fy2025,
        actual_fy2025,
        appropriation_fy2026,
        allowance_fy2027,
        total_funding_to_date,
        CASE
            WHEN funding_type IN ('ITIF','Realigned ITIF','Agency Funds','Federal Funds','Reimbursable Funds')
                THEN 'Annual Appropriation'
            WHEN funding_type IN ('ITIF Realignment','Agency Funds Realignment','Agency Funds Realignmen')
                THEN 'Off-Cycle Adjustments'
        END AS parent_header
    FROM mbtsa.mitdp_funding
    WHERE mitdp_id = '${y.mitdp_id}'
      AND funding_type NOT IN ('Total','Annual Appropriation','Off-Cycle Adjustments')
      AND COALESCE(prior_to_fy2025, actual_fy2025, appropriation_fy2026, allowance_fy2027, total_funding_to_date) IS NOT NULL
),
headers_with_children AS (
    SELECT DISTINCT parent_header AS funding_type
    FROM sub_rows
    WHERE parent_header IS NOT NULL
)
SELECT
    f.funding_type,
    CASE f.funding_type
        WHEN 'Annual Appropriation'  THEN 'header'
        WHEN 'Off-Cycle Adjustments' THEN 'header'
        ELSE 'sub'
    END AS row_type,
    f.prior_to_fy2025,
    f.actual_fy2025,
    f.appropriation_fy2026,
    f.allowance_fy2027,
    f.total_funding_to_date
FROM mbtsa.mitdp_funding f
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type != 'Total'
  AND (
    -- only include header if it has at least one non-null child
    (f.funding_type = 'Annual Appropriation'  AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Annual Appropriation'))
    OR
    (f.funding_type = 'Off-Cycle Adjustments' AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Off-Cycle Adjustments'))
    -- include sub-rows that have values
    OR COALESCE(f.prior_to_fy2025, f.actual_fy2025, f.appropriation_fy2026, f.allowance_fy2027, f.total_funding_to_date) IS NOT NULL
  )
  AND f.funding_type NOT IN ('Annual Appropriation','Off-Cycle Adjustments')
  OR (
    f.funding_type IN ('Annual Appropriation','Off-Cycle Adjustments')
    AND f.funding_type IN (SELECT funding_type FROM headers_with_children)
    AND f.mitdp_id = '${y.mitdp_id}'
  )
ORDER BY
    CASE f.funding_type
        WHEN 'Annual Appropriation'     THEN 1
        WHEN 'ITIF'                     THEN 2
        WHEN 'Realigned ITIF'           THEN 3
        WHEN 'Agency Funds'             THEN 4
        WHEN 'Federal Funds'            THEN 5
        WHEN 'Reimbursable Funds'       THEN 6
        WHEN 'Off-Cycle Adjustments'    THEN 7
        WHEN 'ITIF Realignment'         THEN 8
        WHEN 'Agency Funds Realignment' THEN 9
        WHEN 'Agency Funds Realignmen'  THEN 9
        ELSE 10
    END`),t.$$.dirty[0]&128&&l(14,P=`WITH sub_rows AS (
    SELECT
        funding_type,
        prior_to_fy2025,
        actual_fy2025,
        appropriation_fy2026,
        allowance_fy2027,
        total_funding_to_date,
        CASE
            WHEN funding_type IN ('ITIF','Realigned ITIF','Agency Funds','Federal Funds','Reimbursable Funds')
                THEN 'Annual Appropriation'
            WHEN funding_type IN ('ITIF Realignment','Agency Funds Realignment','Agency Funds Realignmen')
                THEN 'Off-Cycle Adjustments'
        END AS parent_header
    FROM mbtsa.mitdp_funding
    WHERE mitdp_id = '${y.mitdp_id}'
      AND funding_type NOT IN ('Total','Annual Appropriation','Off-Cycle Adjustments')
      AND COALESCE(prior_to_fy2025, actual_fy2025, appropriation_fy2026, allowance_fy2027, total_funding_to_date) IS NOT NULL
),
headers_with_children AS (
    SELECT DISTINCT parent_header AS funding_type
    FROM sub_rows
    WHERE parent_header IS NOT NULL
)
SELECT
    f.funding_type,
    CASE f.funding_type
        WHEN 'Annual Appropriation'  THEN 'header'
        WHEN 'Off-Cycle Adjustments' THEN 'header'
        ELSE 'sub'
    END AS row_type,
    f.prior_to_fy2025,
    f.actual_fy2025,
    f.appropriation_fy2026,
    f.allowance_fy2027,
    f.total_funding_to_date
FROM mbtsa.mitdp_funding f
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type != 'Total'
  AND (
    -- only include header if it has at least one non-null child
    (f.funding_type = 'Annual Appropriation'  AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Annual Appropriation'))
    OR
    (f.funding_type = 'Off-Cycle Adjustments' AND EXISTS (SELECT 1 FROM headers_with_children WHERE funding_type = 'Off-Cycle Adjustments'))
    -- include sub-rows that have values
    OR COALESCE(f.prior_to_fy2025, f.actual_fy2025, f.appropriation_fy2026, f.allowance_fy2027, f.total_funding_to_date) IS NOT NULL
  )
  AND f.funding_type NOT IN ('Annual Appropriation','Off-Cycle Adjustments')
  OR (
    f.funding_type IN ('Annual Appropriation','Off-Cycle Adjustments')
    AND f.funding_type IN (SELECT funding_type FROM headers_with_children)
    AND f.mitdp_id = '${y.mitdp_id}'
  )
ORDER BY
    CASE f.funding_type
        WHEN 'Annual Appropriation'     THEN 1
        WHEN 'ITIF'                     THEN 2
        WHEN 'Realigned ITIF'           THEN 3
        WHEN 'Agency Funds'             THEN 4
        WHEN 'Federal Funds'            THEN 5
        WHEN 'Reimbursable Funds'       THEN 6
        WHEN 'Off-Cycle Adjustments'    THEN 7
        WHEN 'ITIF Realignment'         THEN 8
        WHEN 'Agency Funds Realignment' THEN 9
        WHEN 'Agency Funds Realignmen'  THEN 9
        ELSE 10
    END`),t.$$.dirty[0]&61440&&(W||!C?W||(h(P,{noResolve:W,...b}),l(15,C=!0)):h(P,{noResolve:W})),t.$$.dirty[0]&128&&l(17,L=Be`SELECT
    prior_to_fy2025,
    actual_fy2025,
    appropriation_fy2026,
    allowance_fy2027,
    total_funding_to_date
FROM mbtsa.mitdp_funding
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`),t.$$.dirty[0]&128&&l(18,G=`SELECT
    prior_to_fy2025,
    actual_fy2025,
    appropriation_fy2026,
    allowance_fy2027,
    total_funding_to_date
FROM mbtsa.mitdp_funding
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`),t.$$.dirty[0]&983040&&(L||!V?L||(X(G,{noResolve:L,...F}),l(19,V=!0)):X(G,{noResolve:L})),t.$$.dirty[0]&128&&l(21,le=Be`SELECT
    funding_type,
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type NOT IN ('Total', 'Project Costs, All Time')
  AND COALESCE(prior_to_fy2025, actual_fy2025, spend_plan_fy2026, spend_plan_fy2027, projected_outyears) IS NOT NULL
ORDER BY COALESCE(actual_fy2025, 0) DESC`),t.$$.dirty[0]&128&&l(22,U=`SELECT
    funding_type,
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type NOT IN ('Total', 'Project Costs, All Time')
  AND COALESCE(prior_to_fy2025, actual_fy2025, spend_plan_fy2026, spend_plan_fy2027, projected_outyears) IS NOT NULL
ORDER BY COALESCE(actual_fy2025, 0) DESC`),t.$$.dirty[0]&15728640&&(le||!K?le||(Z(U,{noResolve:le,...te}),l(23,K=!0)):Z(U,{noResolve:le})),t.$$.dirty[0]&128&&l(25,Ee=Be`SELECT
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`),t.$$.dirty[0]&128&&l(26,ge=`SELECT
    prior_to_fy2025,
    actual_fy2025,
    spend_plan_fy2026,
    spend_plan_fy2027,
    projected_outyears
FROM mbtsa.mitdp_dev_costs
WHERE mitdp_id = '${y.mitdp_id}'
  AND funding_type = 'Total'`),t.$$.dirty[0]&251658240&&(Ee||!we?Ee||(fe(ge,{noResolve:Ee,...J}),l(27,we=!0)):fe(ge,{noResolve:Ee}))},[I,c,Q,$,be,s,r,y,S,E,g,N,b,W,P,C,F,L,G,V,te,le,U,K,J,Ee,ge,we,n]}class ts extends Wa{constructor(e){super(),Pa(this,e,Bo,qo,za,{data:5},null,[-1,-1])}}export{ts as component};
