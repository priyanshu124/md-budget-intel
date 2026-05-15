import{s as nl,x as Fe,d as _,a as Pe,O as vt,a2 as Xt,c as Z,i as R,e as c,y as Le,f as r,z as Ht,M as dl,j as m,m as b,g as L,l as oe,k as Te,p as v,o as j,n as V,t as B,b as ne,V as sl,a3 as hl,a4 as we,a5 as Ye,h as Sa,q as ml,r as Aa,u as Ea,v as Ta,w as ya}from"../chunks/scheduler.CZBgomDe.js";import{S as il,i as rl,d as nt,t as ye,a as Se,c as Ot,m as it,b as rt,e as ot,g as It}from"../chunks/index.DQ4MBb5L.js";import{e as pe,D as ba,a as Ca,s as Ra,Q as Nt,p as Da,b as vl,r as gl,C as Ma}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.aiDgkADM.js";import{g as Sl,w as ka}from"../chunks/entry.BqLyO7mB.js";import{h as Qe}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Oa}from"../chunks/stores.R5GJ3d2-.js";import{Q as Lt}from"../chunks/QueryViewer._MZG-Fyv.js";import{p as Ia}from"../chunks/profile.BW8tN6E9.js";function Al(t,e,a){const l=t.slice();return l[41]=e[a],l[43]=a,l}function El(t,e,a){const l=t.slice();return l[44]=e[a],l[46]=a,l}function Tl(t,e,a){const l=t.slice();l[47]=e[a];const s=l[16](l[47].start);l[48]=s;const i=Math.max(l[16](l[47].end)-l[48],.3);return l[49]=i,l}function yl(t,e,a){const l=t.slice();return l[52]=e[a],l}function bl(t,e,a){const l=t.slice();return l[52]=e[a],l}function Cl(t,e,a){const l=t.slice();return l[52]=e[a],l}function Na(t,e,a){const l=t.slice();return l[59]=e[a],l}function Rl(t,e,a){const l=t.slice();return l[62]=e[a],l}function Dl(t,e,a){const l=t.slice();return l[65]=e[a][0],l[66]=e[a][1],l}function Ml(t){let e,a,l=t[65]+"",s;return{c(){e=v("span"),a=v("span"),s=B(l),this.h()},l(i){e=m(i,"SPAN",{class:!0});var n=b(e);a=m(n,"SPAN",{class:!0,style:!0}),b(a).forEach(_),s=V(n,l),n.forEach(_),this.h()},h(){r(a,"class","leg-dot svelte-r3t9il"),Z(a,"background",t[66]),r(e,"class","leg svelte-r3t9il")},m(i,n){R(i,e,n),c(e,a),c(e,s)},p:Fe,d(i){i&&_(e)}}}function kl(t){let e,a=t[62]+"",l,s;return{c(){e=v("option"),l=B(a),this.h()},l(i){e=m(i,"OPTION",{});var n=b(e);l=V(n,a),n.forEach(_),this.h()},h(){e.__value=s=t[62],Ht(e,e.__value)},m(i,n){R(i,e,n),c(e,l)},p(i,n){n[0]&128&&a!==(a=i[62]+"")&&ne(l,a),n[0]&128&&s!==(s=i[62])&&(e.__value=s,Ht(e,e.__value))},d(i){i&&_(e)}}}function La(t){let e,a;return{c(){e=v("option"),a=B(t[59]),this.h()},l(l){e=m(l,"OPTION",{});var s=b(e);a=V(s,t[59]),s.forEach(_),this.h()},h(){e.__value=t[59],Ht(e,e.__value)},m(l,s){R(l,e,s),c(e,a)},p:Fe,d(l){l&&_(e)}}}function Ol(t){let e,a=t[52].year+"",l,s,i,n;return{c(){e=v("div"),l=B(a),s=j(),i=v("div"),this.h()},l(o){e=m(o,"DIV",{class:!0,style:!0});var p=b(e);l=V(p,a),p.forEach(_),s=L(o),i=m(o,"DIV",{class:!0,style:!0}),b(i).forEach(_),this.h()},h(){r(e,"class","yr-label svelte-r3t9il"),Z(e,"left",t[52].pct+"%"),r(i,"class",n="yr-line "+(t[52].year===t[10].getFullYear()+(t[10].getMonth()>=0?0:-1),"")+" svelte-r3t9il"),Z(i,"left",t[52].pct+"%")},m(o,p){R(o,e,p),c(e,l),R(o,s,p),R(o,i,p)},p(o,p){p[0]&256&&a!==(a=o[52].year+"")&&ne(l,a),p[0]&256&&Z(e,"left",o[52].pct+"%"),p[0]&256&&n!==(n="yr-line "+(o[52].year===o[10].getFullYear()+(o[10].getMonth()>=0?0:-1),"")+" svelte-r3t9il")&&r(i,"class",n),p[0]&256&&Z(i,"left",o[52].pct+"%")},d(o){o&&(_(e),_(s),_(i))}}}function Il(t){let e;return{c(){e=v("div"),this.h()},l(a){e=m(a,"DIV",{class:!0,style:!0}),b(e).forEach(_),this.h()},h(){r(e,"class","yr-line svelte-r3t9il"),Z(e,"left",t[52].pct+"%")},m(a,l){R(a,e,l)},p(a,l){l[0]&256&&Z(e,"left",a[52].pct+"%")},d(a){a&&_(e)}}}function Nl(t){let e,a=pe(t[41].projects),l=[];for(let s=0;s<a.length;s+=1)l[s]=Pl(El(t,a,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=Te()},l(s){for(let i=0;i<l.length;i+=1)l[i].l(s);e=Te()},m(s,i){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(s,i);R(s,e,i)},p(s,i){if(i[0]&727816){a=pe(s[41].projects);let n;for(n=0;n<a.length;n+=1){const o=El(s,a,n);l[n]?l[n].p(o,i):(l[n]=Pl(o),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},d(s){s&&_(e),Pe(l,s)}}}function Ll(t){let e;return{c(){e=v("div"),this.h()},l(a){e=m(a,"DIV",{class:!0,style:!0}),b(e).forEach(_),this.h()},h(){r(e,"class","yr-line svelte-r3t9il"),Z(e,"left",t[52].pct+"%")},m(a,l){R(a,e,l)},p(a,l){l[0]&256&&Z(e,"left",a[52].pct+"%")},d(a){a&&_(e)}}}function jl(t){let e,a,l=mt(t[47].start)+"",s,i,n=mt(t[47].end)+"",o,p,g,S,T;function h(...d){return t[29](t[44],t[47],...d)}return{c(){e=v("div"),a=v("span"),s=B(l),i=B(" – "),o=B(n),p=j(),this.h()},l(d){e=m(d,"DIV",{class:!0,style:!0,role:!0,"aria-label":!0});var E=b(e);a=m(E,"SPAN",{class:!0});var u=b(a);s=V(u,l),i=V(u," – "),o=V(u,n),u.forEach(_),p=L(E),E.forEach(_),this.h()},h(){r(a,"class","bar-label svelte-r3t9il"),r(e,"class","phase-bar svelte-r3t9il"),Z(e,"left",t[48]+"%"),Z(e,"width",t[49]+"%"),Z(e,"background",t[11][t[47].name]||"#aaa"),Z(e,"opacity",t[12][t[47].name]??1),r(e,"role","img"),r(e,"aria-label",g=t[44].project_title+" — "+t[47].name)},m(d,E){R(d,e,E),c(e,a),c(a,s),c(a,i),c(a,o),c(e,p),S||(T=[Le(e,"mouseenter",h),Le(e,"mouseleave",t[19])],S=!0)},p(d,E){t=d,E[0]&8&&l!==(l=mt(t[47].start)+"")&&ne(s,l),E[0]&8&&n!==(n=mt(t[47].end)+"")&&ne(o,n),E[0]&8&&Z(e,"left",t[48]+"%"),E[0]&8&&Z(e,"width",t[49]+"%"),E[0]&8&&Z(e,"background",t[11][t[47].name]||"#aaa"),E[0]&8&&Z(e,"opacity",t[12][t[47].name]??1),E[0]&8&&g!==(g=t[44].project_title+" — "+t[47].name)&&r(e,"aria-label",g)},d(d){d&&_(e),S=!1,vt(T)}}}function Pl(t){let e,a,l,s=(t[44].project_title.length>36?t[44].project_title.slice(0,34)+"…":t[44].project_title)+"",i,n,o,p,g=t[44].mitdp_id+"",S,T,h,d,E,u,M,A,D,O=pe(t[8]),F=[];for(let U=0;U<O.length;U+=1)F[U]=Ll(yl(t,O,U));let Q=pe(t[44].phases),X=[];for(let U=0;U<Q.length;U+=1)X[U]=jl(Tl(t,Q,U));function ee(){return t[30](t[44])}function K(...U){return t[31](t[44],...U)}return{c(){e=v("div"),a=v("div"),l=v("div"),i=B(s),o=j(),p=v("div"),S=B(g),T=j(),h=v("div");for(let U=0;U<F.length;U+=1)F[U].c();d=j(),E=v("div"),u=j();for(let U=0;U<X.length;U+=1)X[U].c();M=j(),this.h()},l(U){e=m(U,"DIV",{class:!0,role:!0,tabindex:!0});var W=b(e);a=m(W,"DIV",{class:!0});var k=b(a);l=m(k,"DIV",{class:!0,title:!0});var re=b(l);i=V(re,s),re.forEach(_),o=L(k),p=m(k,"DIV",{class:!0});var te=b(p);S=V(te,g),te.forEach(_),k.forEach(_),T=L(W),h=m(W,"DIV",{class:!0});var w=b(h);for(let C=0;C<F.length;C+=1)F[C].l(w);d=L(w),E=m(w,"DIV",{class:!0,style:!0}),b(E).forEach(_),u=L(w);for(let C=0;C<X.length;C+=1)X[C].l(w);w.forEach(_),M=L(W),W.forEach(_),this.h()},h(){r(l,"class","proj-title svelte-r3t9il"),r(l,"title",n=t[44].project_title),r(p,"class","proj-id svelte-r3t9il"),r(a,"class","proj-label svelte-r3t9il"),r(E,"class","today-line svelte-r3t9il"),Z(E,"left",t[9]+"%"),r(h,"class","proj-track svelte-r3t9il"),r(e,"class","proj-row svelte-r3t9il"),r(e,"role","button"),r(e,"tabindex","0"),sl(e,"row-alt",t[46]%2===1)},m(U,W){R(U,e,W),c(e,a),c(a,l),c(l,i),c(a,o),c(a,p),c(p,S),c(e,T),c(e,h);for(let k=0;k<F.length;k+=1)F[k]&&F[k].m(h,null);c(h,d),c(h,E),c(h,u);for(let k=0;k<X.length;k+=1)X[k]&&X[k].m(h,null);c(e,M),A||(D=[Le(e,"click",ee),Le(e,"keydown",K)],A=!0)},p(U,W){if(t=U,W[0]&8&&s!==(s=(t[44].project_title.length>36?t[44].project_title.slice(0,34)+"…":t[44].project_title)+"")&&ne(i,s),W[0]&8&&n!==(n=t[44].project_title)&&r(l,"title",n),W[0]&8&&g!==(g=t[44].mitdp_id+"")&&ne(S,g),W[0]&256){O=pe(t[8]);let k;for(k=0;k<O.length;k+=1){const re=yl(t,O,k);F[k]?F[k].p(re,W):(F[k]=Ll(re),F[k].c(),F[k].m(h,d))}for(;k<F.length;k+=1)F[k].d(1);F.length=O.length}if(W[0]&512&&Z(E,"left",t[9]+"%"),W[0]&727048){Q=pe(t[44].phases);let k;for(k=0;k<Q.length;k+=1){const re=Tl(t,Q,k);X[k]?X[k].p(re,W):(X[k]=jl(re),X[k].c(),X[k].m(h,null))}for(;k<X.length;k+=1)X[k].d(1);X.length=Q.length}},d(U){U&&_(e),Pe(F,U),Pe(X,U),A=!1,vt(D)}}}function Fl(t){let e,a,l,s="▾",i,n,o=t[41].name+"",p,g,S,T=t[41].projects.length+"",h,d,E=t[41].eac.toLocaleString()+"",u,M,A,D,O,F,Q,X=!t[0].has(t[41].name),ee,K,U,W=pe(t[8]),k=[];for(let C=0;C<W.length;C+=1)k[C]=Il(bl(t,W,C));function re(){return t[27](t[41])}function te(...C){return t[28](t[41],...C)}let w=X&&Nl(t);return{c(){e=v("div"),a=v("div"),l=v("span"),l.textContent=s,i=j(),n=v("span"),p=B(o),g=j(),S=v("span"),h=B(T),d=B(" projects · $"),u=B(E),M=B("M"),A=j(),D=v("div");for(let C=0;C<k.length;C+=1)k[C].c();O=j(),F=v("div"),Q=j(),w&&w.c(),ee=Te(),this.h()},l(C){e=m(C,"DIV",{class:!0,role:!0,tabindex:!0});var y=b(e);a=m(y,"DIV",{class:!0});var q=b(a);l=m(q,"SPAN",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-1cajzje"&&(l.textContent=s),i=L(q),n=m(q,"SPAN",{class:!0});var J=b(n);p=V(J,o),J.forEach(_),g=L(q),S=m(q,"SPAN",{class:!0});var z=b(S);h=V(z,T),d=V(z," projects · $"),u=V(z,E),M=V(z,"M"),z.forEach(_),q.forEach(_),A=L(y),D=m(y,"DIV",{class:!0});var le=b(D);for(let ie=0;ie<k.length;ie+=1)k[ie].l(le);O=L(le),F=m(le,"DIV",{class:!0,style:!0}),b(F).forEach(_),le.forEach(_),y.forEach(_),Q=L(C),w&&w.l(C),ee=Te(),this.h()},h(){r(l,"class","chevron svelte-r3t9il"),sl(l,"closed",t[0].has(t[41].name)),r(n,"class","group-name svelte-r3t9il"),r(S,"class","group-meta svelte-r3t9il"),r(a,"class","group-label svelte-r3t9il"),r(F,"class","today-line svelte-r3t9il"),Z(F,"left",t[9]+"%"),r(D,"class","group-track svelte-r3t9il"),r(e,"class","group-row svelte-r3t9il"),r(e,"role","button"),r(e,"tabindex","0")},m(C,y){R(C,e,y),c(e,a),c(a,l),c(a,i),c(a,n),c(n,p),c(a,g),c(a,S),c(S,h),c(S,d),c(S,u),c(S,M),c(e,A),c(e,D);for(let q=0;q<k.length;q+=1)k[q]&&k[q].m(D,null);c(D,O),c(D,F),R(C,Q,y),w&&w.m(C,y),R(C,ee,y),K||(U=[Le(e,"click",re),Le(e,"keydown",te)],K=!0)},p(C,y){if(t=C,y[0]&9&&sl(l,"closed",t[0].has(t[41].name)),y[0]&8&&o!==(o=t[41].name+"")&&ne(p,o),y[0]&8&&T!==(T=t[41].projects.length+"")&&ne(h,T),y[0]&8&&E!==(E=t[41].eac.toLocaleString()+"")&&ne(u,E),y[0]&256){W=pe(t[8]);let q;for(q=0;q<W.length;q+=1){const J=bl(t,W,q);k[q]?k[q].p(J,y):(k[q]=Il(J),k[q].c(),k[q].m(D,O))}for(;q<k.length;q+=1)k[q].d(1);k.length=W.length}y[0]&512&&Z(F,"left",t[9]+"%"),y[0]&9&&(X=!t[0].has(t[41].name)),X?w?w.p(t,y):(w=Nl(t),w.c(),w.m(ee.parentNode,ee)):w&&(w.d(1),w=null)},d(C){C&&(_(e),_(Q),_(ee)),Pe(k,C),w&&w.d(C),K=!1,vt(U)}}}function wl(t){let e,a,l=t[4].project.project_title+"",s,i,n,o=t[4].project.mitdp_id+"",p,g,S,T,h,d="Agency",E,u=t[4].project.agency+"",M,A,D,O,F="Current phase",Q,X=t[4].project.current_phase+"",ee,K,U,W,k="Phase",re,te,w=t[4].phase.name+"",C,y,q,J,z="Start",le,ie=mt(t[4].phase.start)+"",me,ve,ae,P,H="End",$,x=mt(t[4].phase.end)+"",Ae,ue,se,G,fe="Total cost",N,ce=t[4].project.eac_label+"",I,ge,He,Ie,Xe="Remaining",Ue,Ve=t[4].project.remaining_label+"",Be,Ne,je,_e,gt="Time left",Ze,We=t[4].project.time_remaining+"",St;return{c(){e=v("div"),a=v("div"),s=B(l),i=j(),n=v("div"),p=B(o),g=j(),S=v("div"),T=v("div"),h=v("span"),h.textContent=d,E=v("span"),M=B(u),A=j(),D=v("div"),O=v("span"),O.textContent=F,Q=v("span"),ee=B(X),K=j(),U=v("div"),W=v("span"),W.textContent=k,re=j(),te=v("span"),C=B(w),y=j(),q=v("div"),J=v("span"),J.textContent=z,le=v("span"),me=B(ie),ve=j(),ae=v("div"),P=v("span"),P.textContent=H,$=v("span"),Ae=B(x),ue=j(),se=v("div"),G=v("span"),G.textContent=fe,N=v("span"),I=B(ce),ge=j(),He=v("div"),Ie=v("span"),Ie.textContent=Xe,Ue=v("span"),Be=B(Ve),Ne=j(),je=v("div"),_e=v("span"),_e.textContent=gt,Ze=v("span"),St=B(We),this.h()},l(Ee){e=m(Ee,"DIV",{class:!0,style:!0});var he=b(e);a=m(he,"DIV",{class:!0});var ct=b(a);s=V(ct,l),ct.forEach(_),i=L(he),n=m(he,"DIV",{class:!0});var At=b(n);p=V(At,o),At.forEach(_),g=L(he),S=m(he,"DIV",{class:!0});var be=b(S);T=m(be,"DIV",{class:!0});var _t=b(T);h=m(_t,"SPAN",{class:!0,"data-svelte-h":!0}),oe(h)!=="svelte-51ojfp"&&(h.textContent=d),E=m(_t,"SPAN",{class:!0});var pt=b(E);M=V(pt,u),pt.forEach(_),_t.forEach(_),A=L(be),D=m(be,"DIV",{class:!0});var ut=b(D);O=m(ut,"SPAN",{class:!0,"data-svelte-h":!0}),oe(O)!=="svelte-bjlu5g"&&(O.textContent=F),Q=m(ut,"SPAN",{class:!0});var Ge=b(Q);ee=V(Ge,X),Ge.forEach(_),ut.forEach(_),K=L(be),U=m(be,"DIV",{class:!0});var Et=b(U);W=m(Et,"SPAN",{class:!0,"data-svelte-h":!0}),oe(W)!=="svelte-1az4xe3"&&(W.textContent=k),re=L(Et),te=m(Et,"SPAN",{style:!0,class:!0});var Tt=b(te);C=V(Tt,w),Tt.forEach(_),Et.forEach(_),y=L(be),q=m(be,"DIV",{class:!0});var ze=b(q);J=m(ze,"SPAN",{class:!0,"data-svelte-h":!0}),oe(J)!=="svelte-1oo1guu"&&(J.textContent=z),le=m(ze,"SPAN",{class:!0});var yt=b(le);me=V(yt,ie),yt.forEach(_),ze.forEach(_),ve=L(be),ae=m(be,"DIV",{class:!0});var xe=b(ae);P=m(xe,"SPAN",{class:!0,"data-svelte-h":!0}),oe(P)!=="svelte-1nvf475"&&(P.textContent=H),$=m(xe,"SPAN",{class:!0});var bt=b($);Ae=V(bt,x),bt.forEach(_),xe.forEach(_),ue=L(be),se=m(be,"DIV",{class:!0});var qe=b(se);G=m(qe,"SPAN",{class:!0,"data-svelte-h":!0}),oe(G)!=="svelte-1pek0m1"&&(G.textContent=fe),N=m(qe,"SPAN",{class:!0});var jt=b(N);I=V(jt,ce),jt.forEach(_),qe.forEach(_),ge=L(be),He=m(be,"DIV",{class:!0});var ft=b(He);Ie=m(ft,"SPAN",{class:!0,"data-svelte-h":!0}),oe(Ie)!=="svelte-19f9h9q"&&(Ie.textContent=Xe),Ue=m(ft,"SPAN",{class:!0});var Ke=b(Ue);Be=V(Ke,Ve),Ke.forEach(_),ft.forEach(_),Ne=L(be),je=m(be,"DIV",{class:!0});var Rt=b(je);_e=m(Rt,"SPAN",{class:!0,"data-svelte-h":!0}),oe(_e)!=="svelte-csu1to"&&(_e.textContent=gt),Ze=m(Rt,"SPAN",{class:!0});var Ct=b(Ze);St=V(Ct,We),Ct.forEach(_),Rt.forEach(_),be.forEach(_),he.forEach(_),this.h()},h(){r(a,"class","tt-title svelte-r3t9il"),r(n,"class","tt-id svelte-r3t9il"),r(h,"class","svelte-r3t9il"),r(E,"class","svelte-r3t9il"),r(T,"class","tt-row svelte-r3t9il"),r(O,"class","svelte-r3t9il"),r(Q,"class","svelte-r3t9il"),r(D,"class","tt-row svelte-r3t9il"),r(W,"class","svelte-r3t9il"),Z(te,"color",t[11][t[4].phase.name]),Z(te,"font-weight","600"),r(te,"class","svelte-r3t9il"),r(U,"class","tt-row svelte-r3t9il"),r(J,"class","svelte-r3t9il"),r(le,"class","svelte-r3t9il"),r(q,"class","tt-row svelte-r3t9il"),r(P,"class","svelte-r3t9il"),r($,"class","svelte-r3t9il"),r(ae,"class","tt-row svelte-r3t9il"),r(G,"class","svelte-r3t9il"),r(N,"class","svelte-r3t9il"),r(se,"class","tt-row tt-sep svelte-r3t9il"),r(Ie,"class","svelte-r3t9il"),r(Ue,"class","svelte-r3t9il"),r(He,"class","tt-row svelte-r3t9il"),r(_e,"class","svelte-r3t9il"),r(Ze,"class","svelte-r3t9il"),r(je,"class","tt-row svelte-r3t9il"),r(S,"class","tt-body svelte-r3t9il"),r(e,"class","tooltip svelte-r3t9il"),Z(e,"left",t[5]+"px"),Z(e,"top",t[6]+"px")},m(Ee,he){R(Ee,e,he),c(e,a),c(a,s),c(e,i),c(e,n),c(n,p),c(e,g),c(e,S),c(S,T),c(T,h),c(T,E),c(E,M),c(S,A),c(S,D),c(D,O),c(D,Q),c(Q,ee),c(S,K),c(S,U),c(U,W),c(U,re),c(U,te),c(te,C),c(S,y),c(S,q),c(q,J),c(q,le),c(le,me),c(S,ve),c(S,ae),c(ae,P),c(ae,$),c($,Ae),c(S,ue),c(S,se),c(se,G),c(se,N),c(N,I),c(S,ge),c(S,He),c(He,Ie),c(He,Ue),c(Ue,Be),c(S,Ne),c(S,je),c(je,_e),c(je,Ze),c(Ze,St)},p(Ee,he){he[0]&16&&l!==(l=Ee[4].project.project_title+"")&&ne(s,l),he[0]&16&&o!==(o=Ee[4].project.mitdp_id+"")&&ne(p,o),he[0]&16&&u!==(u=Ee[4].project.agency+"")&&ne(M,u),he[0]&16&&X!==(X=Ee[4].project.current_phase+"")&&ne(ee,X),he[0]&16&&w!==(w=Ee[4].phase.name+"")&&ne(C,w),he[0]&16&&Z(te,"color",Ee[11][Ee[4].phase.name]),he[0]&16&&ie!==(ie=mt(Ee[4].phase.start)+"")&&ne(me,ie),he[0]&16&&x!==(x=mt(Ee[4].phase.end)+"")&&ne(Ae,x),he[0]&16&&ce!==(ce=Ee[4].project.eac_label+"")&&ne(I,ce),he[0]&16&&Ve!==(Ve=Ee[4].project.remaining_label+"")&&ne(Be,Ve),he[0]&16&&We!==(We=Ee[4].project.time_remaining+"")&&ne(St,We),he[0]&32&&Z(e,"left",Ee[5]+"px"),he[0]&64&&Z(e,"top",Ee[6]+"px")},d(Ee){Ee&&_(e)}}}function ja(t){let e,a,l,s,i='<span class="leg-dot today-marker svelte-r3t9il"></span>Today',n,o,p,g,S="All agencies",T,h,d,E="All phases",u,M,A="Expand all",D,O,F="Collapse all",Q,X,ee,K,U,W,k="Project",re,te,w,C,y,q="Today",J,z,le,ie,me,ve=pe(Object.entries(t[11])),ae=[];for(let N=0;N<ve.length;N+=1)ae[N]=Ml(Dl(t,ve,N));let P=pe(t[7]),H=[];for(let N=0;N<P.length;N+=1)H[N]=kl(Rl(t,P,N));let $=pe(["Implementation","Procurement","O&M","Planning","Not started","Closeout","Closed"]),x=[];for(let N=0;N<7;N+=1)x[N]=La(Na(t,$,N));let Ae=pe(t[8]),ue=[];for(let N=0;N<Ae.length;N+=1)ue[N]=Ol(Cl(t,Ae,N));let se=pe(t[3]),G=[];for(let N=0;N<se.length;N+=1)G[N]=Fl(Al(t,se,N));let fe=t[4]&&wl(t);return{c(){e=v("div"),a=v("div");for(let N=0;N<ae.length;N+=1)ae[N].c();l=j(),s=v("span"),s.innerHTML=i,n=j(),o=v("div"),p=v("select"),g=v("option"),g.textContent=S;for(let N=0;N<H.length;N+=1)H[N].c();T=j(),h=v("select"),d=v("option"),d.textContent=E;for(let N=0;N<7;N+=1)x[N].c();u=j(),M=v("button"),M.textContent=A,D=j(),O=v("button"),O.textContent=F,Q=j(),X=v("div"),ee=v("div"),K=v("div"),U=v("div"),W=v("div"),W.textContent=k,re=j(),te=v("div");for(let N=0;N<ue.length;N+=1)ue[N].c();w=j(),C=v("div"),y=v("div"),y.textContent=q,J=j();for(let N=0;N<G.length;N+=1)G[N].c();z=j(),fe&&fe.c(),le=Te(),this.h()},l(N){e=m(N,"DIV",{class:!0});var ce=b(e);a=m(ce,"DIV",{class:!0});var I=b(a);for(let _e=0;_e<ae.length;_e+=1)ae[_e].l(I);l=L(I),s=m(I,"SPAN",{class:!0,"data-svelte-h":!0}),oe(s)!=="svelte-1inb0pm"&&(s.innerHTML=i),I.forEach(_),n=L(ce),o=m(ce,"DIV",{class:!0});var ge=b(o);p=m(ge,"SELECT",{class:!0});var He=b(p);g=m(He,"OPTION",{"data-svelte-h":!0}),oe(g)!=="svelte-1tyy6q4"&&(g.textContent=S);for(let _e=0;_e<H.length;_e+=1)H[_e].l(He);He.forEach(_),T=L(ge),h=m(ge,"SELECT",{class:!0});var Ie=b(h);d=m(Ie,"OPTION",{"data-svelte-h":!0}),oe(d)!=="svelte-nqbxxl"&&(d.textContent=E);for(let _e=0;_e<7;_e+=1)x[_e].l(Ie);Ie.forEach(_),u=L(ge),M=m(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(M)!=="svelte-1y6y1ix"&&(M.textContent=A),D=L(ge),O=m(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(O)!=="svelte-fi1qv"&&(O.textContent=F),ge.forEach(_),ce.forEach(_),Q=L(N),X=m(N,"DIV",{class:!0});var Xe=b(X);ee=m(Xe,"DIV",{class:!0});var Ue=b(ee);K=m(Ue,"DIV",{class:!0,style:!0});var Ve=b(K);U=m(Ve,"DIV",{class:!0});var Be=b(U);W=m(Be,"DIV",{class:!0,"data-svelte-h":!0}),oe(W)!=="svelte-5wd58v"&&(W.textContent=k),re=L(Be),te=m(Be,"DIV",{class:!0});var Ne=b(te);for(let _e=0;_e<ue.length;_e+=1)ue[_e].l(Ne);w=L(Ne),C=m(Ne,"DIV",{class:!0,style:!0});var je=b(C);y=m(je,"DIV",{class:!0,"data-svelte-h":!0}),oe(y)!=="svelte-1t6vus8"&&(y.textContent=q),je.forEach(_),Ne.forEach(_),Be.forEach(_),J=L(Ve);for(let _e=0;_e<G.length;_e+=1)G[_e].l(Ve);Ve.forEach(_),Ue.forEach(_),Xe.forEach(_),z=L(N),fe&&fe.l(N),le=Te(),this.h()},h(){r(s,"class","leg svelte-r3t9il"),r(a,"class","legend svelte-r3t9il"),g.__value="",Ht(g,g.__value),r(p,"class","svelte-r3t9il"),t[2]===void 0&&dl(()=>t[25].call(p)),d.__value="",Ht(d,d.__value),r(h,"class","svelte-r3t9il"),t[1]===void 0&&dl(()=>t[26].call(h)),r(M,"class","btn svelte-r3t9il"),r(O,"class","btn svelte-r3t9il"),r(o,"class","ctrl-right svelte-r3t9il"),r(e,"class","controls svelte-r3t9il"),r(W,"class","head-label svelte-r3t9il"),r(y,"class","today-label svelte-r3t9il"),r(C,"class","today-line svelte-r3t9il"),Z(C,"left",t[9]+"%"),r(te,"class","head-track svelte-r3t9il"),r(U,"class","gantt-head svelte-r3t9il"),r(K,"class","gantt-container svelte-r3t9il"),Z(K,"min-width","900px"),r(ee,"class","gantt-scroll svelte-r3t9il"),r(X,"class","gantt-outer svelte-r3t9il")},m(N,ce){R(N,e,ce),c(e,a);for(let I=0;I<ae.length;I+=1)ae[I]&&ae[I].m(a,null);c(a,l),c(a,s),c(e,n),c(e,o),c(o,p),c(p,g);for(let I=0;I<H.length;I+=1)H[I]&&H[I].m(p,null);Xt(p,t[2],!0),c(o,T),c(o,h),c(h,d);for(let I=0;I<7;I+=1)x[I]&&x[I].m(h,null);Xt(h,t[1],!0),c(o,u),c(o,M),c(o,D),c(o,O),R(N,Q,ce),R(N,X,ce),c(X,ee),c(ee,K),c(K,U),c(U,W),c(U,re),c(U,te);for(let I=0;I<ue.length;I+=1)ue[I]&&ue[I].m(te,null);c(te,w),c(te,C),c(C,y),c(K,J);for(let I=0;I<G.length;I+=1)G[I]&&G[I].m(K,null);R(N,z,ce),fe&&fe.m(N,ce),R(N,le,ce),ie||(me=[Le(window,"mousemove",t[18]),Le(p,"change",t[25]),Le(h,"change",t[26]),Le(M,"click",t[15]),Le(O,"click",t[14])],ie=!0)},p(N,ce){if(ce[0]&2048){ve=pe(Object.entries(N[11]));let I;for(I=0;I<ve.length;I+=1){const ge=Dl(N,ve,I);ae[I]?ae[I].p(ge,ce):(ae[I]=Ml(ge),ae[I].c(),ae[I].m(a,l))}for(;I<ae.length;I+=1)ae[I].d(1);ae.length=ve.length}if(ce[0]&128){P=pe(N[7]);let I;for(I=0;I<P.length;I+=1){const ge=Rl(N,P,I);H[I]?H[I].p(ge,ce):(H[I]=kl(ge),H[I].c(),H[I].m(p,null))}for(;I<H.length;I+=1)H[I].d(1);H.length=P.length}if(ce[0]&132&&Xt(p,N[2]),ce[0]&2&&Xt(h,N[1]),ce[0]&1280){Ae=pe(N[8]);let I;for(I=0;I<Ae.length;I+=1){const ge=Cl(N,Ae,I);ue[I]?ue[I].p(ge,ce):(ue[I]=Ol(ge),ue[I].c(),ue[I].m(te,w))}for(;I<ue.length;I+=1)ue[I].d(1);ue.length=Ae.length}if(ce[0]&512&&Z(C,"left",N[9]+"%"),ce[0]&736009){se=pe(N[3]);let I;for(I=0;I<se.length;I+=1){const ge=Al(N,se,I);G[I]?G[I].p(ge,ce):(G[I]=Fl(ge),G[I].c(),G[I].m(K,null))}for(;I<G.length;I+=1)G[I].d(1);G.length=se.length}N[4]?fe?fe.p(N,ce):(fe=wl(N),fe.c(),fe.m(le.parentNode,le)):fe&&(fe.d(1),fe=null)},i:Fe,o:Fe,d(N){N&&(_(e),_(Q),_(X),_(z),_(le)),Pe(ae,N),Pe(H,N),Pe(x,N),Pe(ue,N),Pe(G,N),fe&&fe.d(N),ie=!1,vt(me)}}}const Pa=30,Fa=32,wa=44;function tl(t,e,a){return Math.max(e,Math.min(a,t))}function mt(t){return new Date(t).toLocaleDateString("en-US",{month:"short",year:"numeric"})}function Ya(t,e,a){let l,s,i,n,o,p,g,S,{data:T=[]}=e;const h=new Date,d={Procurement:"#7F77DD",Implementation:"#378ADD","O&M":"#639922"},E={Procurement:1,Implementation:1,"O&M":.75},u=["Procurement","Implementation","O&M"];let M=new Set;function A(P){const H=new Set(M);H.has(P)?H.delete(P):H.add(P),a(0,M=H)}function D(){a(0,M=new Set(s.map(P=>P.name)))}function O(){a(0,M=new Set)}let F="",Q="";function X(P){const H=new Map;for(const $ of P){H.has($.mitdp_id)||H.set($.mitdp_id,{mitdp_id:$.mitdp_id,project_title:$.project_title,agency:$.agency,current_phase:$.current_phase,eac_label:$.eac_label,remaining_label:$.remaining_label,time_remaining:$.time_remaining,eac_midpoint:$.eac_midpoint??null,phases:[]});const x=H.get($.mitdp_id);$.phase_start&&$.phase_end&&x.phases.push({name:$.phase_name,start:new Date($.phase_start),end:new Date($.phase_end)})}for(const $ of H.values())$.phases.sort((x,Ae)=>u.indexOf(x.name)-u.indexOf(Ae.name));return[...H.values()]}function ee(P,H,$){const x=P.filter(se=>(!H||se.current_phase===H)&&(!$||se.agency===$)),Ae=new Map;for(const se of x){Ae.has(se.agency)||Ae.set(se.agency,{name:se.agency,eac:0,projects:[]});const G=Ae.get(se.agency);se.eac_midpoint!=null&&(G.eac+=se.eac_midpoint),G.projects.push(se)}const ue=[...Ae.values()].sort((se,G)=>G.eac-se.eac);for(const se of ue)se.projects.sort((G,fe)=>G.eac_midpoint==null&&fe.eac_midpoint==null?0:G.eac_midpoint==null?1:fe.eac_midpoint==null?-1:fe.eac_midpoint-G.eac_midpoint);return ue}function K(P){let H=h;for(const $ of P)for(const x of $.phases)x.start<H&&(H=x.start);return H}function U(P){let H=new Date(0);for(const $ of P)for(const x of $.phases)x.end>H&&(H=x.end);return H}function W(P,H){const $=[];for(let x=P.getFullYear();x<=H.getFullYear()+1;x++)$.push({year:x,pct:tl((new Date(x,0,1)-P)/o*100,0,100)});return $}function k(P){return tl((new Date(P)-i)/o*100,0,100)}let re=null,te=0,w=0;function C(P,H,$){a(4,re={project:H,phase:$}),a(5,te=P.clientX+14),a(6,w=P.clientY+14)}function y(P){re&&(a(5,te=P.clientX+14),a(6,w=P.clientY+14))}function q(){a(4,re=null)}function J(){Q=hl(this),a(2,Q),a(7,S),a(20,T)}function z(){F=hl(this),a(1,F)}const le=P=>A(P.name),ie=(P,H)=>H.key==="Enter"&&A(P.name),me=(P,H,$)=>C($,P,H),ve=P=>Sl(`/it-projects/project-details/${P.mitdp_id}`),ae=(P,H)=>H.key==="Enter"&&Sl(`/it-projects/project-details/${P.mitdp_id}`);return t.$$set=P=>{"data"in P&&a(20,T=P.data)},t.$$.update=()=>{t.$$.dirty[0]&1048576&&a(24,l=X(T)),t.$$.dirty[0]&16777222&&a(3,s=ee(l,F,Q)),t.$$.dirty[0]&16777216&&a(22,i=K(l)),t.$$.dirty[0]&16777216&&a(23,n=U(l)),t.$$.dirty[0]&12582912&&a(21,o=Math.max(n-i,1)),t.$$.dirty[0]&6291456&&a(9,p=tl((h-i)/o*100,0,100)),t.$$.dirty[0]&12582912&&a(8,g=W(i,n)),t.$$.dirty[0]&1048576&&a(7,S=[...new Set(X(T).map(P=>P.agency))].sort()),t.$$.dirty[0]&9&&(()=>{let P=wa;for(const H of s)P+=Fa,M.has(H.name)||(P+=H.projects.length*Pa);return P+2})()},[M,F,Q,s,re,te,w,S,g,p,h,d,E,A,D,O,k,C,y,q,T,o,i,n,l,J,z,le,ie,me,ve,ae]}class Ha extends il{constructor(e){super(),rl(this,e,Ya,ja,nl,{data:20},null,[-1,-1,-1])}}function Yl(t,e,a){const l=t.slice();l[29]=e[a],l[35]=a;const s=l[11]>0?l[29].total_eac/l[11]*100:0;l[30]=s;const i=l[11]>0?l[29].remaining_eac/l[11]*100:0;l[31]=i;const n=l[29].total_eac-l[29].remaining_eac;l[32]=n;const o=l[29].total_eac>0?Math.round(l[32]/l[29].total_eac*100):0;return l[33]=o,l}function Hl(t,e,a){const l=t.slice();return l[36]=e[a],l}function Ul(t,e,a){const l=t.slice();l[29]=e[a],l[35]=a;const s=Vt+l[35]*((Bt-Vt-cl)/l[1].length);l[39]=s;const i=l[29].active_projects;l[40]=i;const n=l[29].year===2026;return l[41]=n,l}function Vl(t,e,a){const l=t.slice();return l[36]=e[a],l[48]=a,l}function ll(t){const e=t.slice(),a=108;e[43]=a;const l=e[12].filter(function(...o){return t[23](e[29],...o)}).length*13+20;e[44]=l;const s=Math.min(e[39],Bt-e[43]-4);e[45]=s;const i=Ut+e[9]-e[40]/e[0]*e[9];return e[46]=i,e}function Bl(t,e,a){const l=t.slice();return l[49]=e[a],l}function Wl(t,e,a){const l=t.slice();l[52]=e[a];const s=Ut+l[9]-l[52]/l[0]*l[9];return l[53]=s,l}function ql(t,e,a){const l=t.slice();return l[56]=e[a],l[35]=a,l}function $l(t,e,a){const l=t.slice();return l[56]=e[a],l[35]=a,l}function Ua(t){let e,a="No data";return{c(){e=v("div"),e.textContent=a,this.h()},l(l){e=m(l,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1aji39t"&&(e.textContent=a),this.h()},h(){r(e,"class","empty svelte-1fc19a1")},m(l,s){R(l,e,s)},p:Fe,d(l){l&&_(e)}}}function Va(t){let e,a,l,s,i,n=pe(t[10]),o=[];for(let d=0;d<n.length;d+=1)o[d]=Gl($l(t,n,d));function p(d,E){return d[4]!==null?Wa:Ba}let g=p(t),S=g(t),T=pe(t[10]),h=[];for(let d=0;d<T.length;d+=1)h[d]=zl(ql(t,T,d));return{c(){e=v("div"),a=Ye("svg");for(let d=0;d<o.length;d+=1)o[d].c();l=Te(),S.c(),s=j(),i=v("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=m(d,"DIV",{class:!0});var E=b(e);a=we(E,"svg",{viewBox:!0,width:!0,height:!0});var u=b(a);for(let A=0;A<o.length;A+=1)o[A].l(u);l=Te(),S.l(u),u.forEach(_),s=L(E),i=m(E,"DIV",{class:!0});var M=b(i);for(let A=0;A<h.length;A+=1)h[A].l(M);M.forEach(_),E.forEach(_),this.h()},h(){r(a,"viewBox","0 0 160 160"),r(a,"width","160"),r(a,"height","160"),r(i,"class","donut-legend svelte-1fc19a1"),r(e,"class","donut-wrap svelte-1fc19a1")},m(d,E){R(d,e,E),c(e,a);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(a,null);c(a,l),S.m(a,null),c(e,s),c(e,i);for(let u=0;u<h.length;u+=1)h[u]&&h[u].m(i,null)},p(d,E){if(E[0]&1040){n=pe(d[10]);let u;for(u=0;u<n.length;u+=1){const M=$l(d,n,u);o[u]?o[u].p(M,E):(o[u]=Gl(M),o[u].c(),o[u].m(a,l))}for(;u<o.length;u+=1)o[u].d(1);o.length=n.length}if(g===(g=p(d))&&S?S.p(d,E):(S.d(1),S=g(d),S&&(S.c(),S.m(a,null))),E[0]&1040){T=pe(d[10]);let u;for(u=0;u<T.length;u+=1){const M=ql(d,T,u);h[u]?h[u].p(M,E):(h[u]=zl(M),h[u].c(),h[u].m(i,null))}for(;u<h.length;u+=1)h[u].d(1);h.length=T.length}},d(d){d&&_(e),Pe(o,d),S.d(),Pe(h,d)}}}function Gl(t){let e,a,l,s,i,n;function o(){return t[16](t[35])}return{c(){e=Ye("path"),this.h()},l(p){e=we(p,"path",{d:!0,fill:!0,opacity:!0,stroke:!0,"stroke-width":!0,style:!0}),b(e).forEach(_),this.h()},h(){r(e,"d",a=t[56].path),r(e,"fill",l=t[56].color),r(e,"opacity",s=t[4]===t[35]?.75:1),r(e,"stroke","#fff"),r(e,"stroke-width","1.5"),Z(e,"cursor","pointer")},m(p,g){R(p,e,g),i||(n=[Le(e,"mouseenter",o),Le(e,"mouseleave",t[17])],i=!0)},p(p,g){t=p,g[0]&1024&&a!==(a=t[56].path)&&r(e,"d",a),g[0]&1024&&l!==(l=t[56].color)&&r(e,"fill",l),g[0]&16&&s!==(s=t[4]===t[35]?.75:1)&&r(e,"opacity",s)},d(p){p&&_(e),i=!1,vt(n)}}}function Ba(t){let e,a=t[2].reduce(ia,0)+"",l,s,i;return{c(){e=Ye("text"),l=B(a),s=Ye("text"),i=B("PROJECTS"),this.h()},l(n){e=we(n,"text",{x:!0,y:!0,"text-anchor":!0,class:!0});var o=b(e);l=V(o,a),o.forEach(_),s=we(n,"text",{x:!0,y:!0,"text-anchor":!0,class:!0});var p=b(s);i=V(p,"PROJECTS"),p.forEach(_),this.h()},h(){r(e,"x","80"),r(e,"y","76"),r(e,"text-anchor","middle"),r(e,"class","dc-val svelte-1fc19a1"),r(s,"x","80"),r(s,"y","91"),r(s,"text-anchor","middle"),r(s,"class","dc-lbl svelte-1fc19a1")},m(n,o){R(n,e,o),c(e,l),R(n,s,o),c(s,i)},p(n,o){o[0]&4&&a!==(a=n[2].reduce(ia,0)+"")&&ne(l,a)},d(n){n&&(_(e),_(s))}}}function Wa(t){let e,a=t[10][t[4]].count+"",l,s,i=t[10][t[4]].pct+"",n,o;return{c(){e=Ye("text"),l=B(a),s=Ye("text"),n=B(i),o=B("%"),this.h()},l(p){e=we(p,"text",{x:!0,y:!0,"text-anchor":!0,class:!0});var g=b(e);l=V(g,a),g.forEach(_),s=we(p,"text",{x:!0,y:!0,"text-anchor":!0,class:!0});var S=b(s);n=V(S,i),o=V(S,"%"),S.forEach(_),this.h()},h(){r(e,"x","80"),r(e,"y","76"),r(e,"text-anchor","middle"),r(e,"class","dc-val svelte-1fc19a1"),r(s,"x","80"),r(s,"y","91"),r(s,"text-anchor","middle"),r(s,"class","dc-lbl svelte-1fc19a1")},m(p,g){R(p,e,g),c(e,l),R(p,s,g),c(s,n),c(s,o)},p(p,g){g[0]&1040&&a!==(a=p[10][p[4]].count+"")&&ne(l,a),g[0]&1040&&i!==(i=p[10][p[4]].pct+"")&&ne(n,i)},d(p){p&&(_(e),_(s))}}}function zl(t){let e,a,l,s,i=t[56].label+"",n,o,p,g=t[56].count+"",S,T,h,d;function E(){return t[18](t[35])}return{c(){e=v("div"),a=v("span"),l=j(),s=v("span"),n=B(i),o=j(),p=v("span"),S=B(g),T=j(),this.h()},l(u){e=m(u,"DIV",{class:!0});var M=b(e);a=m(M,"SPAN",{class:!0,style:!0}),b(a).forEach(_),l=L(M),s=m(M,"SPAN",{class:!0});var A=b(s);n=V(A,i),A.forEach(_),o=L(M),p=m(M,"SPAN",{class:!0});var D=b(p);S=V(D,g),D.forEach(_),T=L(M),M.forEach(_),this.h()},h(){r(a,"class","dl-dot svelte-1fc19a1"),Z(a,"background",t[56].color),r(s,"class","dl-label svelte-1fc19a1"),r(p,"class","dl-count svelte-1fc19a1"),r(e,"class","dl-item svelte-1fc19a1")},m(u,M){R(u,e,M),c(e,a),c(e,l),c(e,s),c(s,n),c(e,o),c(e,p),c(p,S),c(e,T),h||(d=[Le(e,"mouseenter",E),Le(e,"mouseleave",t[19])],h=!0)},p(u,M){t=u,M[0]&1024&&Z(a,"background",t[56].color),M[0]&1024&&i!==(i=t[56].label+"")&&ne(n,i),M[0]&1024&&g!==(g=t[56].count+"")&&ne(S,g)},d(u){u&&_(e),h=!1,vt(d)}}}function qa(t){let e,a="No data";return{c(){e=v("div"),e.textContent=a,this.h()},l(l){e=m(l,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1aji39t"&&(e.textContent=a),this.h()},h(){r(e,"class","empty svelte-1fc19a1")},m(l,s){R(l,e,s)},p:Fe,d(l){l&&_(e)}}}function $a(t){let e,a,l,s,i,n,o,p="▌ 2026",g=pe(t[7]),S=[];for(let u=0;u<g.length;u+=1)S[u]=Jl(Wl(t,g,u));let T=pe(t[1]),h=[];for(let u=0;u<T.length;u+=1)h[u]=xl(Ul(t,T,u));let d=pe(t[12]),E=[];for(let u=0;u<d.length;u+=1)E[u]=ea(Hl(t,d,u));return{c(){e=Ye("svg");for(let u=0;u<S.length;u+=1)S[u].c();a=Te();for(let u=0;u<h.length;u+=1)h[u].c();l=j(),s=v("div"),i=v("div");for(let u=0;u<E.length;u+=1)E[u].c();n=j(),o=v("span"),o.textContent=p,this.h()},l(u){e=we(u,"svg",{viewBox:!0,class:!0});var M=b(e);for(let O=0;O<S.length;O+=1)S[O].l(M);a=Te();for(let O=0;O<h.length;O+=1)h[O].l(M);M.forEach(_),l=L(u),s=m(u,"DIV",{class:!0});var A=b(s);i=m(A,"DIV",{class:!0});var D=b(i);for(let O=0;O<E.length;O+=1)E[O].l(D);D.forEach(_),n=L(A),o=m(A,"SPAN",{style:!0,"data-svelte-h":!0}),oe(o)!=="svelte-1fht59h"&&(o.textContent=p),A.forEach(_),this.h()},h(){r(e,"viewBox","0 0 "+Bt+" "+Kt),r(e,"class","full-svg svelte-1fc19a1"),r(i,"class","stack-legend"),Z(o,"color","#E24B4A"),Z(o,"font-size","10px"),Z(o,"white-space","nowrap"),r(s,"class","active-meta svelte-1fc19a1")},m(u,M){R(u,e,M);for(let A=0;A<S.length;A+=1)S[A]&&S[A].m(e,null);c(e,a);for(let A=0;A<h.length;A+=1)h[A]&&h[A].m(e,null);R(u,l,M),R(u,s,M),c(s,i);for(let A=0;A<E.length;A+=1)E[A]&&E[A].m(i,null);c(s,n),c(s,o)},p(u,M){if(M[0]&641){g=pe(u[7]);let A;for(A=0;A<g.length;A+=1){const D=Wl(u,g,A);S[A]?S[A].p(D,M):(S[A]=Jl(D),S[A].c(),S[A].m(e,a))}for(;A<S.length;A+=1)S[A].d(1);S.length=g.length}if(M[0]&4931){T=pe(u[1]);let A;for(A=0;A<T.length;A+=1){const D=Ul(u,T,A);h[A]?h[A].p(D,M):(h[A]=xl(D),h[A].c(),h[A].m(e,null))}for(;A<h.length;A+=1)h[A].d(1);h.length=T.length}if(M[0]&4096){d=pe(u[12]);let A;for(A=0;A<d.length;A+=1){const D=Hl(u,d,A);E[A]?E[A].p(D,M):(E[A]=ea(D),E[A].c(),E[A].m(i,null))}for(;A<E.length;A+=1)E[A].d(1);E.length=d.length}},d(u){u&&(_(e),_(l),_(s)),Pe(S,u),Pe(h,u),Pe(E,u)}}}function Jl(t){let e,a,l,s,i=t[52]+"",n,o;return{c(){e=Ye("line"),s=Ye("text"),n=B(i),this.h()},l(p){e=we(p,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),b(e).forEach(_),s=we(p,"text",{x:!0,y:!0,"text-anchor":!0,"font-size":!0,fill:!0});var g=b(s);n=V(g,i),g.forEach(_),this.h()},h(){r(e,"x1",Vt),r(e,"y1",a=t[53]),r(e,"x2",Bt-cl),r(e,"y2",l=t[53]),r(e,"stroke","#eee"),r(e,"stroke-width","1"),r(s,"x",Vt-3),r(s,"y",o=t[53]+3),r(s,"text-anchor","end"),r(s,"font-size","8"),r(s,"fill","#bbb")},m(p,g){R(p,e,g),R(p,s,g),c(s,n)},p(p,g){g[0]&641&&a!==(a=p[53])&&r(e,"y1",a),g[0]&641&&l!==(l=p[53])&&r(e,"y2",l),g[0]&128&&i!==(i=p[52]+"")&&ne(n,i),g[0]&641&&o!==(o=p[53]+3)&&r(s,"y",o)},d(p){p&&(_(e),_(s))}}}function Ql(t){let e,a,l;return{c(){e=Ye("line"),this.h()},l(s){e=we(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0,"stroke-dasharray":!0}),b(e).forEach(_),this.h()},h(){r(e,"x1",a=t[39]+t[8]/2),r(e,"y1",Ut),r(e,"x2",l=t[39]+t[8]/2),r(e,"y2",Kt-ol),r(e,"stroke","#E24B4A"),r(e,"stroke-width","1.5"),r(e,"stroke-dasharray","3 2")},m(s,i){R(s,e,i)},p(s,i){i[0]&258&&a!==(a=s[39]+s[8]/2)&&r(e,"x1",a),i[0]&258&&l!==(l=s[39]+s[8]/2)&&r(e,"x2",l)},d(s){s&&_(e)}}}function Xl(t){let e,a,l,s,i,n,o,p;function g(){return t[21](t[35])}return{c(){e=Ye("rect"),this.h()},l(S){e=we(S,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,opacity:!0,style:!0}),b(e).forEach(_),this.h()},h(){r(e,"x",a=t[39]),r(e,"y",l=t[49].y),r(e,"width",t[8]),r(e,"height",s=t[49].h),r(e,"fill",i=t[49].color),r(e,"opacity",n=t[6]===t[35]?.75:.9),Z(e,"cursor","pointer")},m(S,T){R(S,e,T),o||(p=[Le(e,"mouseenter",g),Le(e,"mouseleave",t[22])],o=!0)},p(S,T){t=S,T[0]&2&&a!==(a=t[39])&&r(e,"x",a),T[0]&515&&l!==(l=t[49].y)&&r(e,"y",l),T[0]&256&&r(e,"width",t[8]),T[0]&515&&s!==(s=t[49].h)&&r(e,"height",s),T[0]&515&&i!==(i=t[49].color)&&r(e,"fill",i),T[0]&64&&n!==(n=t[6]===t[35]?.75:.9)&&r(e,"opacity",n)},d(S){S&&_(e),o=!1,vt(p)}}}function Kl(t){let e,a,l,s,i,n=t[29].year+"",o,p,g=t[40]+"",S,T,h,d,E;function u(...D){return t[24](t[29],...D)}let M=pe(t[12].filter(u)),A=[];for(let D=0;D<M.length;D+=1)A[D]=Zl(Vl(t,M,D));return{c(){e=Ye("rect"),i=Ye("text"),o=B(n),p=B(": "),S=B(g),T=B(` active\r
            `);for(let D=0;D<A.length;D+=1)A[D].c();E=Te(),this.h()},l(D){e=we(D,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0,opacity:!0}),b(e).forEach(_),i=we(D,"text",{x:!0,y:!0,"text-anchor":!0,"font-size":!0,fill:!0,"font-weight":!0});var O=b(i);o=V(O,n),p=V(O,": "),S=V(O,g),T=V(O,` active\r
            `),O.forEach(_);for(let F=0;F<A.length;F+=1)A[F].l(D);E=Te(),this.h()},h(){r(e,"x",a=t[45]),r(e,"y",l=t[46]-t[44]-4),r(e,"width",t[43]),r(e,"height",s=t[44]),r(e,"rx","4"),r(e,"fill","#1a1a18"),r(e,"opacity","0.9"),r(i,"x",h=t[45]+t[43]/2),r(i,"y",d=t[46]-t[44]+10),r(i,"text-anchor","middle"),r(i,"font-size","9"),r(i,"fill","white"),r(i,"font-weight","600")},m(D,O){R(D,e,O),R(D,i,O),c(i,o),c(i,p),c(i,S),c(i,T);for(let F=0;F<A.length;F+=1)A[F]&&A[F].m(D,O);R(D,E,O)},p(D,O){if(t=D,O[0]&2&&a!==(a=t[45])&&r(e,"x",a),O[0]&515&&l!==(l=t[46]-t[44]-4)&&r(e,"y",l),O[0]&2&&s!==(s=t[44])&&r(e,"height",s),O[0]&2&&n!==(n=t[29].year+"")&&ne(o,n),O[0]&2&&g!==(g=t[40]+"")&&ne(S,g),O[0]&2&&h!==(h=t[45]+t[43]/2)&&r(i,"x",h),O[0]&515&&d!==(d=t[46]-t[44]+10)&&r(i,"y",d),O[0]&4611){M=pe(t[12].filter(u));let F;for(F=0;F<M.length;F+=1){const Q=Vl(t,M,F);A[F]?A[F].p(Q,O):(A[F]=Zl(Q),A[F].c(),A[F].m(E.parentNode,E))}for(;F<A.length;F+=1)A[F].d(1);A.length=M.length}},d(D){D&&(_(e),_(i),_(E)),Pe(A,D)}}}function Zl(t){let e,a,l,s,i,n=t[36].label+"",o,p,g=t[29][t[36].key]+"",S,T,h;return{c(){e=Ye("rect"),i=Ye("text"),o=B(n),p=B(": "),S=B(g),this.h()},l(d){e=we(d,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0}),b(e).forEach(_),i=we(d,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var E=b(i);o=V(E,n),p=V(E,": "),S=V(E,g),E.forEach(_),this.h()},h(){r(e,"x",a=t[45]+6),r(e,"y",l=t[46]-t[44]+16+t[48]*13),r(e,"width",7),r(e,"height",7),r(e,"rx","1"),r(e,"fill",s=t[36].color),r(i,"x",T=t[45]+16),r(i,"y",h=t[46]-t[44]+23+t[48]*13),r(i,"font-size","8"),r(i,"fill","#ddd")},m(d,E){R(d,e,E),R(d,i,E),c(i,o),c(i,p),c(i,S)},p(d,E){E[0]&2&&a!==(a=d[45]+6)&&r(e,"x",a),E[0]&515&&l!==(l=d[46]-d[44]+16+d[48]*13)&&r(e,"y",l),E[0]&2&&s!==(s=d[36].color)&&r(e,"fill",s),E[0]&2&&n!==(n=d[36].label+"")&&ne(o,n),E[0]&2&&g!==(g=d[29][d[36].key]+"")&&ne(S,g),E[0]&2&&T!==(T=d[45]+16)&&r(i,"x",T),E[0]&515&&h!==(h=d[46]-d[44]+23+d[48]*13)&&r(i,"y",h)},d(d){d&&(_(e),_(i))}}}function Ga(t){let e,a=t[29].year+"",l,s;return{c(){e=Ye("text"),l=B(a),this.h()},l(i){e=we(i,"text",{x:!0,y:!0,"text-anchor":!0,"font-size":!0,fill:!0});var n=b(e);l=V(n,a),n.forEach(_),this.h()},h(){r(e,"x",s=t[39]+t[8]/2),r(e,"y",Kt-ol+11),r(e,"text-anchor","middle"),r(e,"font-size","8"),r(e,"fill","#aaa")},m(i,n){R(i,e,n),c(e,l)},p(i,n){n[0]&2&&a!==(a=i[29].year+"")&&ne(l,a),n[0]&258&&s!==(s=i[39]+i[8]/2)&&r(e,"x",s)},d(i){i&&_(e)}}}function xl(t){let e,a,l,s,i=t[41]&&Ql(t);function n(){return t[20](t[29])}let o=pe(n()),p=[];for(let T=0;T<o.length;T+=1)p[T]=Xl(Bl(t,o,T));let g=t[6]===t[35]&&t[40]>0&&Kl(ll(t)),S=t[35]%2===0&&Ga(t);return{c(){i&&i.c(),e=Te();for(let T=0;T<p.length;T+=1)p[T].c();a=Te(),g&&g.c(),l=Te(),S&&S.c(),s=Te()},l(T){i&&i.l(T),e=Te();for(let h=0;h<p.length;h+=1)p[h].l(T);a=Te(),g&&g.l(T),l=Te(),S&&S.l(T),s=Te()},m(T,h){i&&i.m(T,h),R(T,e,h);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(T,h);R(T,a,h),g&&g.m(T,h),R(T,l,h),S&&S.m(T,h),R(T,s,h)},p(T,h){if(t=T,t[41]?i?i.p(t,h):(i=Ql(t),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),h[0]&4931){o=pe(n());let d;for(d=0;d<o.length;d+=1){const E=Bl(t,o,d);p[d]?p[d].p(E,h):(p[d]=Xl(E),p[d].c(),p[d].m(a.parentNode,a))}for(;d<p.length;d+=1)p[d].d(1);p.length=o.length}t[6]===t[35]&&t[40]>0?g?g.p(ll(t),h):(g=Kl(ll(t)),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),t[35]%2===0&&S.p(t,h)},d(T){T&&(_(e),_(a),_(l),_(s)),i&&i.d(T),Pe(p,T),g&&g.d(T),S&&S.d(T)}}}function ea(t){let e,a,l=t[36].label+"",s,i;return{c(){e=v("span"),a=v("span"),s=B(l),i=j(),this.h()},l(n){e=m(n,"SPAN",{class:!0});var o=b(e);a=m(o,"SPAN",{class:!0,style:!0}),b(a).forEach(_),s=V(o,l),i=L(o),o.forEach(_),this.h()},h(){r(a,"class","sl-dot"),Z(a,"background",t[36].color),r(e,"class","sl-item")},m(n,o){R(n,e,o),c(e,a),c(e,s),c(e,i)},p:Fe,d(n){n&&_(e)}}}function za(t){let e,a="No data";return{c(){e=v("div"),e.textContent=a,this.h()},l(l){e=m(l,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1aji39t"&&(e.textContent=a),this.h()},h(){r(e,"class","empty svelte-1fc19a1")},m(l,s){R(l,e,s)},p:Fe,d(l){l&&_(e)}}}function Ja(t){let e,a=pe(t[3]),l=[];for(let s=0;s<a.length;s+=1)l[s]=sa(Yl(t,a,s));return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var i=b(e);for(let n=0;n<l.length;n+=1)l[n].l(i);i.forEach(_),this.h()},h(){r(e,"class","grouped-chart svelte-1fc19a1")},m(s,i){R(s,e,i);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null)},p(s,i){if(i[0]&2088){a=pe(s[3]);let n;for(n=0;n<a.length;n+=1){const o=Yl(s,a,n);l[n]?l[n].p(o,i):(l[n]=sa(o),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},d(s){s&&_(e),Pe(l,s)}}}function ta(t){let e,a,l=t[29].total_eac+"",s,i;return{c(){e=v("span"),a=B("$"),s=B(l),i=B("M total"),this.h()},l(n){e=m(n,"SPAN",{class:!0});var o=b(e);a=V(o,"$"),s=V(o,l),i=V(o,"M total"),o.forEach(_),this.h()},h(){r(e,"class","gbar-tip svelte-1fc19a1")},m(n,o){R(n,e,o),c(e,a),c(e,s),c(e,i)},p(n,o){o[0]&8&&l!==(l=n[29].total_eac+"")&&ne(s,l)},d(n){n&&_(e)}}}function la(t){let e,a,l=t[29].remaining_eac+"",s,i;return{c(){e=v("span"),a=B("$"),s=B(l),i=B("M remaining"),this.h()},l(n){e=m(n,"SPAN",{class:!0});var o=b(e);a=V(o,"$"),s=V(o,l),i=V(o,"M remaining"),o.forEach(_),this.h()},h(){r(e,"class","gbar-tip svelte-1fc19a1")},m(n,o){R(n,e,o),c(e,a),c(e,s),c(e,i)},p(n,o){o[0]&8&&l!==(l=n[29].remaining_eac+"")&&ne(s,l)},d(n){n&&_(e)}}}function aa(t){let e,a=t[33]+"",l,s;return{c(){e=v("div"),l=B(a),s=B("% spent"),this.h()},l(i){e=m(i,"DIV",{class:!0});var n=b(e);l=V(n,a),s=V(n,"% spent"),n.forEach(_),this.h()},h(){r(e,"class","spent-badge svelte-1fc19a1")},m(i,n){R(i,e,n),c(e,l),c(e,s)},p(i,n){n[0]&8&&a!==(a=i[33]+"")&&ne(l,a)},d(i){i&&_(e)}}}function sa(t){let e,a,l=na(t[29].agency)+"",s,i,n,o,p,g,S,T,h,d,E,u,M,A=t[29].total_eac+"",D,O,F,Q,X,ee=t[29].remaining_eac+"",K,U,W,k,re,te,w=t[5]===t[35]&&ta(t),C=t[5]===t[35]&&la(t),y=t[5]===t[35]&&aa(t);function q(){return t[25](t[35])}return{c(){e=v("div"),a=v("div"),s=B(l),n=j(),o=v("div"),p=v("div"),g=v("div"),w&&w.c(),S=j(),T=v("div"),h=v("div"),C&&C.c(),d=j(),E=v("div"),u=v("span"),M=B("$"),D=B(A),O=B("M"),F=j(),Q=v("span"),X=B("$"),K=B(ee),U=B("M"),W=j(),y&&y.c(),k=j(),this.h()},l(J){e=m(J,"DIV",{class:!0});var z=b(e);a=m(z,"DIV",{class:!0,title:!0});var le=b(a);s=V(le,l),le.forEach(_),n=L(z),o=m(z,"DIV",{class:!0});var ie=b(o);p=m(ie,"DIV",{class:!0});var me=b(p);g=m(me,"DIV",{class:!0,style:!0});var ve=b(g);w&&w.l(ve),ve.forEach(_),me.forEach(_),S=L(ie),T=m(ie,"DIV",{class:!0});var ae=b(T);h=m(ae,"DIV",{class:!0,style:!0});var P=b(h);C&&C.l(P),P.forEach(_),ae.forEach(_),ie.forEach(_),d=L(z),E=m(z,"DIV",{class:!0});var H=b(E);u=m(H,"SPAN",{class:!0});var $=b(u);M=V($,"$"),D=V($,A),O=V($,"M"),$.forEach(_),F=L(H),Q=m(H,"SPAN",{class:!0});var x=b(Q);X=V(x,"$"),K=V(x,ee),U=V(x,"M"),x.forEach(_),H.forEach(_),W=L(z),y&&y.l(z),k=L(z),z.forEach(_),this.h()},h(){r(a,"class","grouped-lbl svelte-1fc19a1"),r(a,"title",i=t[29].agency),r(g,"class","gbar svelte-1fc19a1"),Z(g,"width",t[30]+"%"),Z(g,"background","#7F77DD"),Z(g,"opacity",t[5]===t[35]?.75:1),r(p,"class","gbar-wrap svelte-1fc19a1"),r(h,"class","gbar svelte-1fc19a1"),Z(h,"width",t[31]+"%"),Z(h,"background","#E24B4A"),Z(h,"opacity",t[5]===t[35]?.75:1),r(T,"class","gbar-wrap svelte-1fc19a1"),r(o,"class","grouped-bars svelte-1fc19a1"),r(u,"class","gv-total svelte-1fc19a1"),r(Q,"class","gv-remain svelte-1fc19a1"),r(E,"class","grouped-vals svelte-1fc19a1"),r(e,"class","grouped-row svelte-1fc19a1")},m(J,z){R(J,e,z),c(e,a),c(a,s),c(e,n),c(e,o),c(o,p),c(p,g),w&&w.m(g,null),c(o,S),c(o,T),c(T,h),C&&C.m(h,null),c(e,d),c(e,E),c(E,u),c(u,M),c(u,D),c(u,O),c(E,F),c(E,Q),c(Q,X),c(Q,K),c(Q,U),c(e,W),y&&y.m(e,null),c(e,k),re||(te=[Le(e,"mouseenter",q),Le(e,"mouseleave",t[26])],re=!0)},p(J,z){t=J,z[0]&8&&l!==(l=na(t[29].agency)+"")&&ne(s,l),z[0]&8&&i!==(i=t[29].agency)&&r(a,"title",i),t[5]===t[35]?w?w.p(t,z):(w=ta(t),w.c(),w.m(g,null)):w&&(w.d(1),w=null),z[0]&2056&&Z(g,"width",t[30]+"%"),z[0]&32&&Z(g,"opacity",t[5]===t[35]?.75:1),t[5]===t[35]?C?C.p(t,z):(C=la(t),C.c(),C.m(h,null)):C&&(C.d(1),C=null),z[0]&2056&&Z(h,"width",t[31]+"%"),z[0]&32&&Z(h,"opacity",t[5]===t[35]?.75:1),z[0]&8&&A!==(A=t[29].total_eac+"")&&ne(D,A),z[0]&8&&ee!==(ee=t[29].remaining_eac+"")&&ne(K,ee),t[5]===t[35]?y?y.p(t,z):(y=aa(t),y.c(),y.m(e,k)):y&&(y.d(1),y=null)},d(J){J&&_(e),w&&w.d(),C&&C.d(),y&&y.d(),re=!1,vt(te)}}}function Qa(t){let e,a,l,s="Projects by Phase",i,n,o,p,g="Active Projects by Year",S,T,h="Simultaneous project load across the portfolio",d,E,u,M,A="Cost by Agency ($M) — Total vs. Remaining",D,O,F=`<span class="leg-inline svelte-1fc19a1" style="background:#7F77DD"></span> Total EAC  
      <span class="leg-inline svelte-1fc19a1" style="background:#E24B4A"></span> Remaining`,Q;function X(C,y){return C[10].length>0?Va:Ua}let ee=X(t),K=ee(t);function U(C,y){return C[1].length>0?$a:qa}let W=U(t),k=W(t);function re(C,y){return C[3].length>0?Ja:za}let te=re(t),w=te(t);return{c(){e=v("div"),a=v("div"),l=v("div"),l.textContent=s,i=j(),K.c(),n=j(),o=v("div"),p=v("div"),p.textContent=g,S=j(),T=v("div"),T.textContent=h,d=j(),k.c(),E=j(),u=v("div"),M=v("div"),M.textContent=A,D=j(),O=v("div"),O.innerHTML=F,Q=j(),w.c(),this.h()},l(C){e=m(C,"DIV",{class:!0});var y=b(e);a=m(y,"DIV",{class:!0});var q=b(a);l=m(q,"DIV",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-1qyyu1a"&&(l.textContent=s),i=L(q),K.l(q),q.forEach(_),n=L(y),o=m(y,"DIV",{class:!0});var J=b(o);p=m(J,"DIV",{class:!0,"data-svelte-h":!0}),oe(p)!=="svelte-pext1c"&&(p.textContent=g),S=L(J),T=m(J,"DIV",{class:!0,"data-svelte-h":!0}),oe(T)!=="svelte-hr564e"&&(T.textContent=h),d=L(J),k.l(J),J.forEach(_),E=L(y),u=m(y,"DIV",{class:!0});var z=b(u);M=m(z,"DIV",{class:!0,"data-svelte-h":!0}),oe(M)!=="svelte-108jnoe"&&(M.textContent=A),D=L(z),O=m(z,"DIV",{class:!0,"data-svelte-h":!0}),oe(O)!=="svelte-1d4l0ss"&&(O.innerHTML=F),Q=L(z),w.l(z),z.forEach(_),y.forEach(_),this.h()},h(){r(l,"class","chart-title svelte-1fc19a1"),r(a,"class","chart-card svelte-1fc19a1"),r(p,"class","chart-title svelte-1fc19a1"),r(T,"class","chart-sub svelte-1fc19a1"),r(o,"class","chart-card svelte-1fc19a1"),r(M,"class","chart-title svelte-1fc19a1"),r(O,"class","chart-sub svelte-1fc19a1"),r(u,"class","chart-card chart-wide svelte-1fc19a1"),r(e,"class","grid-2x2 svelte-1fc19a1")},m(C,y){R(C,e,y),c(e,a),c(a,l),c(a,i),K.m(a,null),c(e,n),c(e,o),c(o,p),c(o,S),c(o,T),c(o,d),k.m(o,null),c(e,E),c(e,u),c(u,M),c(u,D),c(u,O),c(u,Q),w.m(u,null)},p(C,y){ee===(ee=X(C))&&K?K.p(C,y):(K.d(1),K=ee(C),K&&(K.c(),K.m(a,null))),W===(W=U(C))&&k?k.p(C,y):(k.d(1),k=W(C),k&&(k.c(),k.m(o,null))),te===(te=re(C))&&w?w.p(C,y):(w.d(1),w=te(C),w&&(w.c(),w.m(u,null)))},i:Fe,o:Fe,d(C){C&&_(e),K.d(),k.d(),w.d()}}}const Bt=400,Kt=160,Ut=16,ol=28,Vt=28,cl=8;function al(t,...e){return Array.from(t||[]).map(a=>{const l={...a};for(const s of e)l[s]=Number(l[s])||0;return l})}function na(t){return(t||"").replace("Maryland Department of Health","MD Dept. Health").replace("Maryland State Board of Elections","MD Board of Elections").replace("Department of Information Technology","Dept. of IT").replace("Department of General Services","Dept. General Services").replace("Department of the Environment","Dept. Environment").replace("Department of Education","Dept. Education").replace("Maryland Higher Education Commission","MD Higher Ed Commission").replace("Department of Assessments and Taxation","Dept. Assessments & Tax").replace("Department of Labor","Dept. Labor").replace("Comptroller of Maryland","Comptroller")}const ia=(t,e)=>t+e.count;function Xa(t,e,a){let l,s,i,n,o,p,g,S,T,{phaseData:h=[]}=e,{agencyCosts:d=[]}=e,{activeByYear:E=[]}=e;const u={Implementation:"#378ADD",Procurement:"#7F77DD","O&M":"#639922",Planning:"#BA7517",Closeout:"#888780",Closed:"#888780","Not started":"#E24B4A"},M=[{key:"impl",color:"#378ADD",label:"Implementation"},{key:"proc",color:"#7F77DD",label:"Procurement"},{key:"om",color:"#639922",label:"O&M"},{key:"plan",color:"#BA7517",label:"Planning"},{key:"other",color:"#888780",label:"Other"}];function A(y){const q=y.reduce((ae,P)=>ae+P.count,0);if(!q)return[];const J=80,z=80,le=64,ie=38,me=[];let ve=-Math.PI/2;for(const ae of y){const P=ae.count/q*2*Math.PI;if(P===0)continue;const H=[Math.cos(ve),Math.sin(ve)],$=[Math.cos(ve+P),Math.sin(ve+P)],x=P>Math.PI?1:0;me.push({path:`M ${J+le*H[0]} ${z+le*H[1]} A ${le} ${le} 0 ${x} 1 ${J+le*$[0]} ${z+le*$[1]} L ${J+ie*$[0]} ${z+ie*$[1]} A ${ie} ${ie} 0 ${x} 0 ${J+ie*H[0]} ${z+ie*H[1]} Z`,color:u[ae.phase]||"#ccc",label:ae.phase,count:ae.count,pct:Math.round(ae.count/q*100)}),ve+=P}return me}let D=null,O=null,F=null;const Q=y=>a(4,D=y),X=()=>a(4,D=null),ee=y=>a(4,D=y),K=()=>a(4,D=null),U=y=>{const q=[];let J=Ut+g;for(const z of M){const le=y[z.key]||0;if(le===0)continue;const ie=le/o*g;J-=ie,q.push({...z,cnt:le,h:ie,y:J})}return q},W=y=>a(6,F=y),k=()=>a(6,F=null),re=(y,q)=>y[q.key]>0,te=(y,q)=>y[q.key]>0,w=y=>a(5,O=y),C=()=>a(5,O=null);return t.$$set=y=>{"phaseData"in y&&a(13,h=y.phaseData),"agencyCosts"in y&&a(14,d=y.agencyCosts),"activeByYear"in y&&a(15,E=y.activeByYear)},t.$$.update=()=>{t.$$.dirty[0]&8192&&a(2,l=al(h,"count")),t.$$.dirty[0]&16384&&a(3,s=al(d,"total_eac","remaining_eac","project_count")),t.$$.dirty[0]&32768&&a(1,i=al(E,"active_projects","year","impl","proc","om","plan","other")),t.$$.dirty[0]&8&&a(11,n=Math.max(...s.map(y=>y.total_eac),1)),t.$$.dirty[0]&2&&a(0,o=Math.max(...i.map(y=>y.active_projects),1)),t.$$.dirty[0]&4&&a(10,p=A(l)),t.$$.dirty[0]&2&&a(8,S=i.length>0?Math.max(1,(Bt-Vt-cl)/i.length-1):10),t.$$.dirty[0]&1&&a(7,T=(()=>{const y=o>40?20:o>20?10:5,q=[];for(let J=0;J<=o;J+=y)q.push(J);return q})())},a(9,g=Kt-Ut-ol),[o,i,l,s,D,O,F,T,S,g,p,n,M,h,d,E,Q,X,ee,K,U,W,k,re,te,w,C]}class Ka extends il{constructor(e){super(),rl(this,e,Xa,Qa,nl,{phaseData:13,agencyCosts:14,activeByYear:15},null,[-1,-1])}}function Za(t){let e,a=de.title+"",l;return{c(){e=v("h1"),l=B(a),this.h()},l(s){e=m(s,"H1",{class:!0});var i=b(e);l=V(i,a),i.forEach(_),this.h()},h(){r(e,"class","title")},m(s,i){R(s,e,i),c(e,l)},p:Fe,d(s){s&&_(e)}}}function xa(t){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:Fe,p:Fe,d:Fe}}function es(t){let e,a,l,s,i;return document.title=e=de.title,{c(){a=j(),l=v("meta"),s=j(),i=v("meta"),this.h()},l(n){a=L(n),l=m(n,"META",{property:!0,content:!0}),s=L(n),i=m(n,"META",{name:!0,content:!0}),this.h()},h(){var n,o;r(l,"property","og:title"),r(l,"content",((n=de.og)==null?void 0:n.title)??de.title),r(i,"name","twitter:title"),r(i,"content",((o=de.og)==null?void 0:o.title)??de.title)},m(n,o){R(n,a,o),R(n,l,o),R(n,s,o),R(n,i,o)},p(n,o){o&0&&e!==(e=de.title)&&(document.title=e)},d(n){n&&(_(a),_(l),_(s),_(i))}}}function ts(t){var i,n;let e,a,l=(de.description||((i=de.og)==null?void 0:i.description))&&ls(),s=((n=de.og)==null?void 0:n.image)&&as();return{c(){l&&l.c(),e=j(),s&&s.c(),a=Te()},l(o){l&&l.l(o),e=L(o),s&&s.l(o),a=Te()},m(o,p){l&&l.m(o,p),R(o,e,p),s&&s.m(o,p),R(o,a,p)},p(o,p){var g,S;(de.description||(g=de.og)!=null&&g.description)&&l.p(o,p),(S=de.og)!=null&&S.image&&s.p(o,p)},d(o){o&&(_(e),_(a)),l&&l.d(o),s&&s.d(o)}}}function ls(t){let e,a,l,s,i;return{c(){e=v("meta"),a=j(),l=v("meta"),s=j(),i=v("meta"),this.h()},l(n){e=m(n,"META",{name:!0,content:!0}),a=L(n),l=m(n,"META",{property:!0,content:!0}),s=L(n),i=m(n,"META",{name:!0,content:!0}),this.h()},h(){var n,o,p;r(e,"name","description"),r(e,"content",de.description??((n=de.og)==null?void 0:n.description)),r(l,"property","og:description"),r(l,"content",((o=de.og)==null?void 0:o.description)??de.description),r(i,"name","twitter:description"),r(i,"content",((p=de.og)==null?void 0:p.description)??de.description)},m(n,o){R(n,e,o),R(n,a,o),R(n,l,o),R(n,s,o),R(n,i,o)},p:Fe,d(n){n&&(_(e),_(a),_(l),_(s),_(i))}}}function as(t){let e,a,l;return{c(){e=v("meta"),a=j(),l=v("meta"),this.h()},l(s){e=m(s,"META",{property:!0,content:!0}),a=L(s),l=m(s,"META",{name:!0,content:!0}),this.h()},h(){var s,i;r(e,"property","og:image"),r(e,"content",vl((s=de.og)==null?void 0:s.image)),r(l,"name","twitter:image"),r(l,"content",vl((i=de.og)==null?void 0:i.image))},m(s,i){R(s,e,i),R(s,a,i),R(s,l,i)},p:Fe,d(s){s&&(_(e),_(a),_(l))}}}function ra(t){let e,a;return e=new Lt({props:{queryID:"all_projects",queryResult:t[0]}}),{c(){ot(e.$$.fragment)},l(l){rt(e.$$.fragment,l)},m(l,s){it(e,l,s),a=!0},p(l,s){const i={};s[0]&1&&(i.queryResult=l[0]),e.$set(i)},i(l){a||(Se(e.$$.fragment,l),a=!0)},o(l){ye(e.$$.fragment,l),a=!1},d(l){nt(e,l)}}}function oa(t){let e,a;return e=new Lt({props:{queryID:"portfolio_totals",queryResult:t[1]}}),{c(){ot(e.$$.fragment)},l(l){rt(e.$$.fragment,l)},m(l,s){it(e,l,s),a=!0},p(l,s){const i={};s[0]&2&&(i.queryResult=l[1]),e.$set(i)},i(l){a||(Se(e.$$.fragment,l),a=!0)},o(l){ye(e.$$.fragment,l),a=!1},d(l){nt(e,l)}}}function ca(t){let e,a;return e=new Lt({props:{queryID:"gantt_data",queryResult:t[2]}}),{c(){ot(e.$$.fragment)},l(l){rt(e.$$.fragment,l)},m(l,s){it(e,l,s),a=!0},p(l,s){const i={};s[0]&4&&(i.queryResult=l[2]),e.$set(i)},i(l){a||(Se(e.$$.fragment,l),a=!0)},o(l){ye(e.$$.fragment,l),a=!1},d(l){nt(e,l)}}}function _a(t){let e,a;return e=new Lt({props:{queryID:"phase_dist",queryResult:t[3]}}),{c(){ot(e.$$.fragment)},l(l){rt(e.$$.fragment,l)},m(l,s){it(e,l,s),a=!0},p(l,s){const i={};s[0]&8&&(i.queryResult=l[3]),e.$set(i)},i(l){a||(Se(e.$$.fragment,l),a=!0)},o(l){ye(e.$$.fragment,l),a=!1},d(l){nt(e,l)}}}function pa(t){let e,a;return e=new Lt({props:{queryID:"agency_costs",queryResult:t[4]}}),{c(){ot(e.$$.fragment)},l(l){rt(e.$$.fragment,l)},m(l,s){it(e,l,s),a=!0},p(l,s){const i={};s[0]&16&&(i.queryResult=l[4]),e.$set(i)},i(l){a||(Se(e.$$.fragment,l),a=!0)},o(l){ye(e.$$.fragment,l),a=!1},d(l){nt(e,l)}}}function ua(t){let e,a;return e=new Lt({props:{queryID:"active_by_year",queryResult:t[5]}}),{c(){ot(e.$$.fragment)},l(l){rt(e.$$.fragment,l)},m(l,s){it(e,l,s),a=!0},p(l,s){const i={};s[0]&32&&(i.queryResult=l[5]),e.$set(i)},i(l){a||(Se(e.$$.fragment,l),a=!0)},o(l){ye(e.$$.fragment,l),a=!1},d(l){nt(e,l)}}}function ss(t){let e,a,l,s,i,n,o,p,g,S,T,h,d,E,u='<a href="#it-portfolio-overview">IT Portfolio Overview</a>',M,A,D,O,F=t[0].length+"",Q,X,ee,K="Total IT Projects",U,W,k=new Set(t[0].map(fa)).size+"",re,te,w,C,y,q,J=(Math.round(t[1][0].total_eac/100)/10).toFixed(1)+"",z,le,ie,me,ve="Est. Total Portfolio Cost",ae,P,H,$=t[1][0].total_remaining>=1e3?(Math.round(t[1][0].total_remaining/100)/10).toFixed(1)+"B":Math.round(t[1][0].total_remaining)+"M",x,Ae,ue,se,G,fe=t[0].filter(da).length+"",N,ce,I,ge="In Implementation",He,Ie,Xe=Math.round(t[0].filter(ha).length/t[0].length*100)+"",Ue,Ve,Be,Ne,je,_e=t[0].filter(ma).length+"",gt,Ze,We,St="Closing Within 2 Years",Ee,he,ct=t[0].filter(va).length+"",At,be,_t,pt,ut,Ge,Et='<a href="#charts">Charts</a>',Tt,ze,yt,xe,bt,qe,jt='<a href="#attention-needed">Attention Needed</a>',ft,Ke,Rt='<div class="alert alert--red svelte-1oevd3k"><span class="adot adot--red svelte-1oevd3k"></span> <div><div class="alert-title svelte-1oevd3k">5 projects ending within 1 year</div> <div class="alert-sub svelte-1oevd3k">CBIS, OneStop Portal, EPHR, BHASO, UCA — closeout or O&amp;M transitions imminent</div></div></div> <div class="alert alert--red svelte-1oevd3k"><span class="adot adot--red svelte-1oevd3k"></span> <div><div class="alert-title svelte-1oevd3k">FMIS: $300M–$325M remaining</div> <div class="alert-sub svelte-1oevd3k">Largest single commitment — still in procurement, ends 2032</div></div></div> <div class="alert alert--amber svelte-1oevd3k"><span class="adot adot--amber svelte-1oevd3k"></span> <div><div class="alert-title svelte-1oevd3k">MDH holds 38% of all projects (23/60)</div> <div class="alert-sub svelte-1oevd3k">Concentrated risk — Medicaid Modernization alone has 14 sub-projects</div></div></div> <div class="alert alert--amber svelte-1oevd3k"><span class="adot adot--amber svelte-1oevd3k"></span> <div><div class="alert-title svelte-1oevd3k">1 project with TBD cost estimate</div> <div class="alert-sub svelte-1oevd3k">Statewide Permitting Platform (DPSCS-17-CCHII) — budget unresolved</div></div></div> <div class="alert alert--blue svelte-1oevd3k"><span class="adot adot--blue svelte-1oevd3k"></span> <div><div class="alert-title svelte-1oevd3k">11 projects in procurement</div> <div class="alert-sub svelte-1oevd3k">Vendor decisions approaching for FMIS, 2026 Voting System, VREAM</div></div></div> <div class="alert alert--blue svelte-1oevd3k"><span class="adot adot--blue svelte-1oevd3k"></span> <div><div class="alert-title svelte-1oevd3k">2029–2030 wave: 26 completions</div> <div class="alert-sub svelte-1oevd3k">Major O&amp;M transitions and budget reallocation upcoming simultaneously</div></div></div>',Ct,Pt,Wt,et,_l='<a href="#project-timeline">Project Timeline</a>',qt,dt,$t,Ft,Gt,tt,pl='<a href="#all-projects">All Projects</a>',zt,ht,Je,lt=typeof de<"u"&&de.title&&de.hide_title!==!0&&Za();function ga(f,Y){return typeof de<"u"&&de.title?es:xa}let wt=ga()(t),at=typeof de=="object"&&ts(),Ce=t[0]&&ra(t),Re=t[1]&&oa(t),De=t[2]&&ca(t),Me=t[3]&&_a(t),ke=t[4]&&pa(t),Oe=t[5]&&ua(t);return ze=new Ka({props:{phaseData:t[3],agencyCosts:t[4],activeByYear:t[5]}}),dt=new Ha({props:{data:t[2]}}),ht=new ba({props:{data:t[0],search:"true",rows:"15"}}),{c(){lt&&lt.c(),e=j(),wt.c(),a=v("meta"),l=v("meta"),at&&at.c(),s=Te(),i=j(),Ce&&Ce.c(),n=j(),Re&&Re.c(),o=j(),De&&De.c(),p=j(),Me&&Me.c(),g=j(),ke&&ke.c(),S=j(),Oe&&Oe.c(),T=j(),h=v("hr"),d=j(),E=v("h2"),E.innerHTML=u,M=j(),A=v("div"),D=v("div"),O=v("div"),Q=B(F),X=j(),ee=v("div"),ee.textContent=K,U=j(),W=v("div"),re=B(k),te=B(" agencies"),w=j(),C=v("div"),y=v("div"),q=B("$"),z=B(J),le=B("B"),ie=j(),me=v("div"),me.textContent=ve,ae=j(),P=v("div"),H=B("$"),x=B($),Ae=B(" remaining to spend"),ue=j(),se=v("div"),G=v("div"),N=B(fe),ce=j(),I=v("div"),I.textContent=ge,He=j(),Ie=v("div"),Ue=B(Xe),Ve=B("% of portfolio"),Be=j(),Ne=v("div"),je=v("div"),gt=B(_e),Ze=j(),We=v("div"),We.textContent=St,Ee=j(),he=v("div"),At=B(ct),be=B(" closing within 1 yr"),_t=j(),pt=v("hr"),ut=j(),Ge=v("h2"),Ge.innerHTML=Et,Tt=j(),ot(ze.$$.fragment),yt=j(),xe=v("hr"),bt=j(),qe=v("h2"),qe.innerHTML=jt,ft=j(),Ke=v("div"),Ke.innerHTML=Rt,Ct=j(),Pt=v("hr"),Wt=j(),et=v("h2"),et.innerHTML=_l,qt=j(),ot(dt.$$.fragment),$t=j(),Ft=v("hr"),Gt=j(),tt=v("h2"),tt.innerHTML=pl,zt=j(),ot(ht.$$.fragment),this.h()},l(f){lt&&lt.l(f),e=L(f);const Y=Sa("svelte-2igo1p",document.head);wt.l(Y),a=m(Y,"META",{name:!0,content:!0}),l=m(Y,"META",{name:!0,content:!0}),at&&at.l(Y),s=Te(),Y.forEach(_),i=L(f),Ce&&Ce.l(f),n=L(f),Re&&Re.l(f),o=L(f),De&&De.l(f),p=L(f),Me&&Me.l(f),g=L(f),ke&&ke.l(f),S=L(f),Oe&&Oe.l(f),T=L(f),h=m(f,"HR",{class:!0}),d=L(f),E=m(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(E)!=="svelte-luerm8"&&(E.innerHTML=u),M=L(f),A=m(f,"DIV",{class:!0});var $e=b(A);D=m($e,"DIV",{class:!0});var st=b(D);O=m(st,"DIV",{class:!0});var Yt=b(O);Q=V(Yt,F),Yt.forEach(_),X=L(st),ee=m(st,"DIV",{class:!0,"data-svelte-h":!0}),oe(ee)!=="svelte-6biqtz"&&(ee.textContent=K),U=L(st),W=m(st,"DIV",{class:!0});var Zt=b(W);re=V(Zt,k),te=V(Zt," agencies"),Zt.forEach(_),st.forEach(_),w=L($e),C=m($e,"DIV",{class:!0});var Dt=b(C);y=m(Dt,"DIV",{class:!0});var Jt=b(y);q=V(Jt,"$"),z=V(Jt,J),le=V(Jt,"B"),Jt.forEach(_),ie=L(Dt),me=m(Dt,"DIV",{class:!0,"data-svelte-h":!0}),oe(me)!=="svelte-va6gq5"&&(me.textContent=ve),ae=L(Dt),P=m(Dt,"DIV",{class:!0});var Qt=b(P);H=V(Qt,"$"),x=V(Qt,$),Ae=V(Qt," remaining to spend"),Qt.forEach(_),Dt.forEach(_),ue=L($e),se=m($e,"DIV",{class:!0});var Mt=b(se);G=m(Mt,"DIV",{class:!0});var ul=b(G);N=V(ul,fe),ul.forEach(_),ce=L(Mt),I=m(Mt,"DIV",{class:!0,"data-svelte-h":!0}),oe(I)!=="svelte-pakuk3"&&(I.textContent=ge),He=L(Mt),Ie=m(Mt,"DIV",{class:!0});var xt=b(Ie);Ue=V(xt,Xe),Ve=V(xt,"% of portfolio"),xt.forEach(_),Mt.forEach(_),Be=L($e),Ne=m($e,"DIV",{class:!0});var kt=b(Ne);je=m(kt,"DIV",{class:!0});var fl=b(je);gt=V(fl,_e),fl.forEach(_),Ze=L(kt),We=m(kt,"DIV",{class:!0,"data-svelte-h":!0}),oe(We)!=="svelte-j8j08o"&&(We.textContent=St),Ee=L(kt),he=m(kt,"DIV",{class:!0});var el=b(he);At=V(el,ct),be=V(el," closing within 1 yr"),el.forEach(_),kt.forEach(_),$e.forEach(_),_t=L(f),pt=m(f,"HR",{class:!0}),ut=L(f),Ge=m(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(Ge)!=="svelte-19bkvc7"&&(Ge.innerHTML=Et),Tt=L(f),rt(ze.$$.fragment,f),yt=L(f),xe=m(f,"HR",{class:!0}),bt=L(f),qe=m(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(qe)!=="svelte-eihg5t"&&(qe.innerHTML=jt),ft=L(f),Ke=m(f,"DIV",{class:!0,"data-svelte-h":!0}),oe(Ke)!=="svelte-pk6lm7"&&(Ke.innerHTML=Rt),Ct=L(f),Pt=m(f,"HR",{class:!0}),Wt=L(f),et=m(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(et)!=="svelte-ad8yl8"&&(et.innerHTML=_l),qt=L(f),rt(dt.$$.fragment,f),$t=L(f),Ft=m(f,"HR",{class:!0}),Gt=L(f),tt=m(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(tt)!=="svelte-tvvd0h"&&(tt.innerHTML=pl),zt=L(f),rt(ht.$$.fragment,f),this.h()},h(){r(a,"name","twitter:card"),r(a,"content","summary_large_image"),r(l,"name","twitter:site"),r(l,"content","@evidence_dev"),r(h,"class","markdown"),r(E,"class","markdown"),r(E,"id","it-portfolio-overview"),r(O,"class","kpi-val svelte-1oevd3k"),r(ee,"class","kpi-lbl svelte-1oevd3k"),r(W,"class","kpi-sub svelte-1oevd3k"),r(D,"class","kpi-card svelte-1oevd3k"),r(y,"class","kpi-val svelte-1oevd3k"),r(me,"class","kpi-lbl svelte-1oevd3k"),r(P,"class","kpi-sub svelte-1oevd3k"),r(C,"class","kpi-card svelte-1oevd3k"),r(G,"class","kpi-val svelte-1oevd3k"),r(I,"class","kpi-lbl svelte-1oevd3k"),r(Ie,"class","kpi-sub svelte-1oevd3k"),r(se,"class","kpi-card svelte-1oevd3k"),r(je,"class","kpi-val svelte-1oevd3k"),r(We,"class","kpi-lbl svelte-1oevd3k"),r(he,"class","kpi-sub svelte-1oevd3k"),r(Ne,"class","kpi-card kpi-card--alert svelte-1oevd3k"),r(A,"class","kpi-row svelte-1oevd3k"),r(pt,"class","markdown"),r(Ge,"class","markdown"),r(Ge,"id","charts"),r(xe,"class","markdown"),r(qe,"class","markdown"),r(qe,"id","attention-needed"),r(Ke,"class","alerts svelte-1oevd3k"),r(Pt,"class","markdown"),r(et,"class","markdown"),r(et,"id","project-timeline"),r(Ft,"class","markdown"),r(tt,"class","markdown"),r(tt,"id","all-projects")},m(f,Y){lt&&lt.m(f,Y),R(f,e,Y),wt.m(document.head,null),c(document.head,a),c(document.head,l),at&&at.m(document.head,null),c(document.head,s),R(f,i,Y),Ce&&Ce.m(f,Y),R(f,n,Y),Re&&Re.m(f,Y),R(f,o,Y),De&&De.m(f,Y),R(f,p,Y),Me&&Me.m(f,Y),R(f,g,Y),ke&&ke.m(f,Y),R(f,S,Y),Oe&&Oe.m(f,Y),R(f,T,Y),R(f,h,Y),R(f,d,Y),R(f,E,Y),R(f,M,Y),R(f,A,Y),c(A,D),c(D,O),c(O,Q),c(D,X),c(D,ee),c(D,U),c(D,W),c(W,re),c(W,te),c(A,w),c(A,C),c(C,y),c(y,q),c(y,z),c(y,le),c(C,ie),c(C,me),c(C,ae),c(C,P),c(P,H),c(P,x),c(P,Ae),c(A,ue),c(A,se),c(se,G),c(G,N),c(se,ce),c(se,I),c(se,He),c(se,Ie),c(Ie,Ue),c(Ie,Ve),c(A,Be),c(A,Ne),c(Ne,je),c(je,gt),c(Ne,Ze),c(Ne,We),c(Ne,Ee),c(Ne,he),c(he,At),c(he,be),R(f,_t,Y),R(f,pt,Y),R(f,ut,Y),R(f,Ge,Y),R(f,Tt,Y),it(ze,f,Y),R(f,yt,Y),R(f,xe,Y),R(f,bt,Y),R(f,qe,Y),R(f,ft,Y),R(f,Ke,Y),R(f,Ct,Y),R(f,Pt,Y),R(f,Wt,Y),R(f,et,Y),R(f,qt,Y),it(dt,f,Y),R(f,$t,Y),R(f,Ft,Y),R(f,Gt,Y),R(f,tt,Y),R(f,zt,Y),it(ht,f,Y),Je=!0},p(f,Y){typeof de<"u"&&de.title&&de.hide_title!==!0&&lt.p(f,Y),wt.p(f,Y),typeof de=="object"&&at.p(f,Y),f[0]?Ce?(Ce.p(f,Y),Y[0]&1&&Se(Ce,1)):(Ce=ra(f),Ce.c(),Se(Ce,1),Ce.m(n.parentNode,n)):Ce&&(It(),ye(Ce,1,1,()=>{Ce=null}),Ot()),f[1]?Re?(Re.p(f,Y),Y[0]&2&&Se(Re,1)):(Re=oa(f),Re.c(),Se(Re,1),Re.m(o.parentNode,o)):Re&&(It(),ye(Re,1,1,()=>{Re=null}),Ot()),f[2]?De?(De.p(f,Y),Y[0]&4&&Se(De,1)):(De=ca(f),De.c(),Se(De,1),De.m(p.parentNode,p)):De&&(It(),ye(De,1,1,()=>{De=null}),Ot()),f[3]?Me?(Me.p(f,Y),Y[0]&8&&Se(Me,1)):(Me=_a(f),Me.c(),Se(Me,1),Me.m(g.parentNode,g)):Me&&(It(),ye(Me,1,1,()=>{Me=null}),Ot()),f[4]?ke?(ke.p(f,Y),Y[0]&16&&Se(ke,1)):(ke=pa(f),ke.c(),Se(ke,1),ke.m(S.parentNode,S)):ke&&(It(),ye(ke,1,1,()=>{ke=null}),Ot()),f[5]?Oe?(Oe.p(f,Y),Y[0]&32&&Se(Oe,1)):(Oe=ua(f),Oe.c(),Se(Oe,1),Oe.m(T.parentNode,T)):Oe&&(It(),ye(Oe,1,1,()=>{Oe=null}),Ot()),(!Je||Y[0]&1)&&F!==(F=f[0].length+"")&&ne(Q,F),(!Je||Y[0]&1)&&k!==(k=new Set(f[0].map(fa)).size+"")&&ne(re,k),(!Je||Y[0]&2)&&J!==(J=(Math.round(f[1][0].total_eac/100)/10).toFixed(1)+"")&&ne(z,J),(!Je||Y[0]&2)&&$!==($=f[1][0].total_remaining>=1e3?(Math.round(f[1][0].total_remaining/100)/10).toFixed(1)+"B":Math.round(f[1][0].total_remaining)+"M")&&ne(x,$),(!Je||Y[0]&1)&&fe!==(fe=f[0].filter(da).length+"")&&ne(N,fe),(!Je||Y[0]&1)&&Xe!==(Xe=Math.round(f[0].filter(ha).length/f[0].length*100)+"")&&ne(Ue,Xe),(!Je||Y[0]&1)&&_e!==(_e=f[0].filter(ma).length+"")&&ne(gt,_e),(!Je||Y[0]&1)&&ct!==(ct=f[0].filter(va).length+"")&&ne(At,ct);const $e={};Y[0]&8&&($e.phaseData=f[3]),Y[0]&16&&($e.agencyCosts=f[4]),Y[0]&32&&($e.activeByYear=f[5]),ze.$set($e);const st={};Y[0]&4&&(st.data=f[2]),dt.$set(st);const Yt={};Y[0]&1&&(Yt.data=f[0]),ht.$set(Yt)},i(f){Je||(Se(Ce),Se(Re),Se(De),Se(Me),Se(ke),Se(Oe),Se(ze.$$.fragment,f),Se(dt.$$.fragment,f),Se(ht.$$.fragment,f),Je=!0)},o(f){ye(Ce),ye(Re),ye(De),ye(Me),ye(ke),ye(Oe),ye(ze.$$.fragment,f),ye(dt.$$.fragment,f),ye(ht.$$.fragment,f),Je=!1},d(f){f&&(_(e),_(i),_(n),_(o),_(p),_(g),_(S),_(T),_(h),_(d),_(E),_(M),_(A),_(_t),_(pt),_(ut),_(Ge),_(Tt),_(yt),_(xe),_(bt),_(qe),_(ft),_(Ke),_(Ct),_(Pt),_(Wt),_(et),_(qt),_($t),_(Ft),_(Gt),_(tt),_(zt)),lt&&lt.d(f),wt.d(f),_(a),_(l),at&&at.d(f),_(s),Ce&&Ce.d(f),Re&&Re.d(f),De&&De.d(f),Me&&Me.d(f),ke&&ke.d(f),Oe&&Oe.d(f),nt(ze,f),nt(dt,f),nt(ht,f)}}}const de={title:"IT Development Projects"},fa=t=>t.agency,da=t=>t.phase==="Implementation",ha=t=>t.phase==="Implementation",ma=t=>{var e,a;return((e=t.time_remaining)==null?void 0:e.startsWith("0 to 1"))||((a=t.time_remaining)==null?void 0:a.startsWith("0 to 2"))},va=t=>{var e;return(e=t.time_remaining)==null?void 0:e.startsWith("0 to 1")};function ns(t,e,a){let l,s;ml(t,Oa,G=>a(32,l=G)),ml(t,gl,G=>a(38,s=G));let{data:i}=e,{data:n={},customFormattingSettings:o,__db:p,inputs:g}=i;Aa(gl,s="fbdf3fd2cd8c95e4aa6d654d641f69ae",s);let S=Ca(ka(g));Ea(S.subscribe(G=>g=G)),Ta(Ma,{getCustomFormats:()=>o.customFormats||[]});const T=(G,fe)=>Ia(p.query,G,{query_name:fe});Ra(T),l.params,ya(()=>!0);let h={initialData:void 0,initialError:void 0},d=Qe`SELECT
    mitdp_id,
    project_title,
    "Agency"                     AS agency,
    "Phase"                      AS phase,
    "Start Year"                 AS start_year,
    "End Year"                   AS end_year,
    est_total_cost_at_completion AS eac_label,
    est_cost_remaining           AS remaining_label,
    "Project Time Remaining"     AS time_remaining,
    "Project Length"             AS project_length
FROM mbtsa.mitdp_projects
ORDER BY agency, project_title`,E=`SELECT
    mitdp_id,
    project_title,
    "Agency"                     AS agency,
    "Phase"                      AS phase,
    "Start Year"                 AS start_year,
    "End Year"                   AS end_year,
    est_total_cost_at_completion AS eac_label,
    est_cost_remaining           AS remaining_label,
    "Project Time Remaining"     AS time_remaining,
    "Project Length"             AS project_length
FROM mbtsa.mitdp_projects
ORDER BY agency, project_title`;n.all_projects_data&&(n.all_projects_data instanceof Error?h.initialError=n.all_projects_data:h.initialData=n.all_projects_data,n.all_projects_columns&&(h.knownColumns=n.all_projects_columns));let u,M=!1;const A=Nt.createReactive({callback:G=>{a(0,u=G)},execFn:T},{id:"all_projects",...h});A(E,{noResolve:d,...h}),globalThis[Symbol.for("all_projects")]={get value(){return u}};let D={initialData:void 0,initialError:void 0},O=Qe`SELECT
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_remaining
FROM mbtsa.mitdp_projects`,F=`SELECT
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_remaining
FROM mbtsa.mitdp_projects`;n.portfolio_totals_data&&(n.portfolio_totals_data instanceof Error?D.initialError=n.portfolio_totals_data:D.initialData=n.portfolio_totals_data,n.portfolio_totals_columns&&(D.knownColumns=n.portfolio_totals_columns));let Q,X=!1;const ee=Nt.createReactive({callback:G=>{a(1,Q=G)},execFn:T},{id:"portfolio_totals",...D});ee(F,{noResolve:O,...D}),globalThis[Symbol.for("portfolio_totals")]={get value(){return Q}};let K={initialData:void 0,initialError:void 0},U=Qe`WITH base AS (
    SELECT
        mitdp_id,
        project_title,
        "Agency"                     AS agency,
        "Phase"                      AS current_phase,
        est_total_cost_at_completion AS eac_label,
        est_cost_remaining           AS remaining_label,
        "Project Time Remaining"     AS time_remaining,
        CASE
            WHEN est_total_cost_at_completion = 'TBD' THEN NULL
            ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
            ) / 2.0
        END AS eac_midpoint,
        TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
        TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
        TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
        TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
        TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
        TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
    FROM mbtsa.mitdp_projects
)
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Procurement'    AS phase_name, proc_start AS phase_start, proc_end AS phase_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Implementation' AS phase_name, impl_start, impl_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'O&M'            AS phase_name, om_start, om_end
FROM base
ORDER BY agency, mitdp_id, phase_start`,W=`WITH base AS (
    SELECT
        mitdp_id,
        project_title,
        "Agency"                     AS agency,
        "Phase"                      AS current_phase,
        est_total_cost_at_completion AS eac_label,
        est_cost_remaining           AS remaining_label,
        "Project Time Remaining"     AS time_remaining,
        CASE
            WHEN est_total_cost_at_completion = 'TBD' THEN NULL
            ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
            ) / 2.0
        END AS eac_midpoint,
        TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
        TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
        TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
        TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
        TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
        TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
    FROM mbtsa.mitdp_projects
)
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Procurement'    AS phase_name, proc_start AS phase_start, proc_end AS phase_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Implementation' AS phase_name, impl_start, impl_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'O&M'            AS phase_name, om_start, om_end
FROM base
ORDER BY agency, mitdp_id, phase_start`;n.gantt_data_data&&(n.gantt_data_data instanceof Error?K.initialError=n.gantt_data_data:K.initialData=n.gantt_data_data,n.gantt_data_columns&&(K.knownColumns=n.gantt_data_columns));let k,re=!1;const te=Nt.createReactive({callback:G=>{a(2,k=G)},execFn:T},{id:"gantt_data",...K});te(W,{noResolve:U,...K}),globalThis[Symbol.for("gantt_data")]={get value(){return k}};let w={initialData:void 0,initialError:void 0},C=Qe`SELECT "Phase" AS phase, COUNT(*) AS count
FROM mbtsa.mitdp_projects
GROUP BY "Phase"
ORDER BY count DESC`,y=`SELECT "Phase" AS phase, COUNT(*) AS count
FROM mbtsa.mitdp_projects
GROUP BY "Phase"
ORDER BY count DESC`;n.phase_dist_data&&(n.phase_dist_data instanceof Error?w.initialError=n.phase_dist_data:w.initialData=n.phase_dist_data,n.phase_dist_columns&&(w.knownColumns=n.phase_dist_columns));let q,J=!1;const z=Nt.createReactive({callback:G=>{a(3,q=G)},execFn:T},{id:"phase_dist",...w});z(y,{noResolve:C,...w}),globalThis[Symbol.for("phase_dist")]={get value(){return q}};let le={initialData:void 0,initialError:void 0},ie=Qe`SELECT
    "Agency" AS agency,
    COUNT(*) AS project_count,
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS remaining_eac
FROM mbtsa.mitdp_projects
GROUP BY "Agency"
ORDER BY total_eac DESC
LIMIT 10`,me=`SELECT
    "Agency" AS agency,
    COUNT(*) AS project_count,
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS remaining_eac
FROM mbtsa.mitdp_projects
GROUP BY "Agency"
ORDER BY total_eac DESC
LIMIT 10`;n.agency_costs_data&&(n.agency_costs_data instanceof Error?le.initialError=n.agency_costs_data:le.initialData=n.agency_costs_data,n.agency_costs_columns&&(le.knownColumns=n.agency_costs_columns));let ve,ae=!1;const P=Nt.createReactive({callback:G=>{a(4,ve=G)},execFn:T},{id:"agency_costs",...le});P(me,{noResolve:ie,...le}),globalThis[Symbol.for("agency_costs")]={get value(){return ve}};let H={initialData:void 0,initialError:void 0},$=Qe`WITH years AS (
    SELECT unnest(range(2012, 2036)) AS yr
),
projects AS (
    SELECT "Start Year" AS start_yr, "End Year" AS end_yr, "Phase" AS phase
    FROM mbtsa.mitdp_projects
)
SELECT
    y.yr                                                                        AS year,
    COUNT(*)                                                                    AS active_projects,
    COUNT(*) FILTER (WHERE p.phase = 'Implementation')                         AS impl,
    COUNT(*) FILTER (WHERE p.phase = 'Procurement')                            AS proc,
    COUNT(*) FILTER (WHERE p.phase = 'O&M')                                    AS om,
    COUNT(*) FILTER (WHERE p.phase = 'Planning')                               AS plan,
    COUNT(*) FILTER (WHERE p.phase NOT IN ('Implementation','Procurement','O&M','Planning')) AS other
FROM years y
JOIN projects p ON y.yr >= p.start_yr AND y.yr <= p.end_yr
GROUP BY y.yr
ORDER BY y.yr`,x=`WITH years AS (
    SELECT unnest(range(2012, 2036)) AS yr
),
projects AS (
    SELECT "Start Year" AS start_yr, "End Year" AS end_yr, "Phase" AS phase
    FROM mbtsa.mitdp_projects
)
SELECT
    y.yr                                                                        AS year,
    COUNT(*)                                                                    AS active_projects,
    COUNT(*) FILTER (WHERE p.phase = 'Implementation')                         AS impl,
    COUNT(*) FILTER (WHERE p.phase = 'Procurement')                            AS proc,
    COUNT(*) FILTER (WHERE p.phase = 'O&M')                                    AS om,
    COUNT(*) FILTER (WHERE p.phase = 'Planning')                               AS plan,
    COUNT(*) FILTER (WHERE p.phase NOT IN ('Implementation','Procurement','O&M','Planning')) AS other
FROM years y
JOIN projects p ON y.yr >= p.start_yr AND y.yr <= p.end_yr
GROUP BY y.yr
ORDER BY y.yr`;n.active_by_year_data&&(n.active_by_year_data instanceof Error?H.initialError=n.active_by_year_data:H.initialData=n.active_by_year_data,n.active_by_year_columns&&(H.knownColumns=n.active_by_year_columns));let Ae,ue=!1;const se=Nt.createReactive({callback:G=>{a(5,Ae=G)},execFn:T},{id:"active_by_year",...H});return se(x,{noResolve:$,...H}),globalThis[Symbol.for("active_by_year")]={get value(){return Ae}},t.$$set=G=>{"data"in G&&a(6,i=G.data)},t.$$.update=()=>{t.$$.dirty[0]&64&&a(7,{data:n={},customFormattingSettings:o,__db:p}=i,n),t.$$.dirty[0]&128&&Da.set(Object.keys(n).length>0),t.$$.dirty[1]&2&&l.params,t.$$.dirty[0]&3840&&(d||!M?d||(A(E,{noResolve:d,...h}),a(11,M=!0)):A(E,{noResolve:d})),t.$$.dirty[0]&61440&&(O||!X?O||(ee(F,{noResolve:O,...D}),a(15,X=!0)):ee(F,{noResolve:O})),t.$$.dirty[0]&983040&&(U||!re?U||(te(W,{noResolve:U,...K}),a(19,re=!0)):te(W,{noResolve:U})),t.$$.dirty[0]&15728640&&(C||!J?C||(z(y,{noResolve:C,...w}),a(23,J=!0)):z(y,{noResolve:C})),t.$$.dirty[0]&251658240&&(ie||!ae?ie||(P(me,{noResolve:ie,...le}),a(27,ae=!0)):P(me,{noResolve:ie})),t.$$.dirty[0]&1879048192|t.$$.dirty[1]&1&&($||!ue?$||(se(x,{noResolve:$,...H}),a(31,ue=!0)):se(x,{noResolve:$}))},a(9,d=Qe`SELECT
    mitdp_id,
    project_title,
    "Agency"                     AS agency,
    "Phase"                      AS phase,
    "Start Year"                 AS start_year,
    "End Year"                   AS end_year,
    est_total_cost_at_completion AS eac_label,
    est_cost_remaining           AS remaining_label,
    "Project Time Remaining"     AS time_remaining,
    "Project Length"             AS project_length
FROM mbtsa.mitdp_projects
ORDER BY agency, project_title`),a(10,E=`SELECT
    mitdp_id,
    project_title,
    "Agency"                     AS agency,
    "Phase"                      AS phase,
    "Start Year"                 AS start_year,
    "End Year"                   AS end_year,
    est_total_cost_at_completion AS eac_label,
    est_cost_remaining           AS remaining_label,
    "Project Time Remaining"     AS time_remaining,
    "Project Length"             AS project_length
FROM mbtsa.mitdp_projects
ORDER BY agency, project_title`),a(13,O=Qe`SELECT
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_remaining
FROM mbtsa.mitdp_projects`),a(14,F=`SELECT
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_remaining
FROM mbtsa.mitdp_projects`),a(17,U=Qe`WITH base AS (
    SELECT
        mitdp_id,
        project_title,
        "Agency"                     AS agency,
        "Phase"                      AS current_phase,
        est_total_cost_at_completion AS eac_label,
        est_cost_remaining           AS remaining_label,
        "Project Time Remaining"     AS time_remaining,
        CASE
            WHEN est_total_cost_at_completion = 'TBD' THEN NULL
            ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
            ) / 2.0
        END AS eac_midpoint,
        TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
        TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
        TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
        TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
        TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
        TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
    FROM mbtsa.mitdp_projects
)
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Procurement'    AS phase_name, proc_start AS phase_start, proc_end AS phase_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Implementation' AS phase_name, impl_start, impl_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'O&M'            AS phase_name, om_start, om_end
FROM base
ORDER BY agency, mitdp_id, phase_start`),a(18,W=`WITH base AS (
    SELECT
        mitdp_id,
        project_title,
        "Agency"                     AS agency,
        "Phase"                      AS current_phase,
        est_total_cost_at_completion AS eac_label,
        est_cost_remaining           AS remaining_label,
        "Project Time Remaining"     AS time_remaining,
        CASE
            WHEN est_total_cost_at_completion = 'TBD' THEN NULL
            ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
            ) / 2.0
        END AS eac_midpoint,
        TRY_CAST("Procurement Start - Current"    AS TIMESTAMP)::DATE AS proc_start,
        TRY_CAST("Procurement End - Current"      AS TIMESTAMP)::DATE AS proc_end,
        TRY_CAST("Implementation Start - Current" AS TIMESTAMP)::DATE AS impl_start,
        TRY_CAST("Implementation End - Current"   AS TIMESTAMP)::DATE AS impl_end,
        TRY_CAST("O&M Start - Current"            AS TIMESTAMP)::DATE AS om_start,
        TRY_CAST("O&M End - Current"              AS TIMESTAMP)::DATE AS om_end
    FROM mbtsa.mitdp_projects
)
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Procurement'    AS phase_name, proc_start AS phase_start, proc_end AS phase_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'Implementation' AS phase_name, impl_start, impl_end
FROM base
UNION ALL
SELECT mitdp_id, project_title, agency, current_phase,
       eac_label, remaining_label, time_remaining, eac_midpoint,
       'O&M'            AS phase_name, om_start, om_end
FROM base
ORDER BY agency, mitdp_id, phase_start`),a(21,C=Qe`SELECT "Phase" AS phase, COUNT(*) AS count
FROM mbtsa.mitdp_projects
GROUP BY "Phase"
ORDER BY count DESC`),a(22,y=`SELECT "Phase" AS phase, COUNT(*) AS count
FROM mbtsa.mitdp_projects
GROUP BY "Phase"
ORDER BY count DESC`),a(25,ie=Qe`SELECT
    "Agency" AS agency,
    COUNT(*) AS project_count,
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS remaining_eac
FROM mbtsa.mitdp_projects
GROUP BY "Agency"
ORDER BY total_eac DESC
LIMIT 10`),a(26,me=`SELECT
    "Agency" AS agency,
    COUNT(*) AS project_count,
    ROUND(SUM(
        CASE WHEN est_total_cost_at_completion = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_total_cost_at_completion, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS total_eac,
    ROUND(SUM(
        CASE WHEN est_cost_remaining = 'TBD' THEN 0
             ELSE (
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[1], 'M', '') AS FLOAT) +
                TRY_CAST(replace(string_split(replace(est_cost_remaining, '$', ''), ' - ')[2], 'M', '') AS FLOAT)
             ) / 2.0
        END
    )) AS remaining_eac
FROM mbtsa.mitdp_projects
GROUP BY "Agency"
ORDER BY total_eac DESC
LIMIT 10`),a(29,$=Qe`WITH years AS (
    SELECT unnest(range(2012, 2036)) AS yr
),
projects AS (
    SELECT "Start Year" AS start_yr, "End Year" AS end_yr, "Phase" AS phase
    FROM mbtsa.mitdp_projects
)
SELECT
    y.yr                                                                        AS year,
    COUNT(*)                                                                    AS active_projects,
    COUNT(*) FILTER (WHERE p.phase = 'Implementation')                         AS impl,
    COUNT(*) FILTER (WHERE p.phase = 'Procurement')                            AS proc,
    COUNT(*) FILTER (WHERE p.phase = 'O&M')                                    AS om,
    COUNT(*) FILTER (WHERE p.phase = 'Planning')                               AS plan,
    COUNT(*) FILTER (WHERE p.phase NOT IN ('Implementation','Procurement','O&M','Planning')) AS other
FROM years y
JOIN projects p ON y.yr >= p.start_yr AND y.yr <= p.end_yr
GROUP BY y.yr
ORDER BY y.yr`),a(30,x=`WITH years AS (
    SELECT unnest(range(2012, 2036)) AS yr
),
projects AS (
    SELECT "Start Year" AS start_yr, "End Year" AS end_yr, "Phase" AS phase
    FROM mbtsa.mitdp_projects
)
SELECT
    y.yr                                                                        AS year,
    COUNT(*)                                                                    AS active_projects,
    COUNT(*) FILTER (WHERE p.phase = 'Implementation')                         AS impl,
    COUNT(*) FILTER (WHERE p.phase = 'Procurement')                            AS proc,
    COUNT(*) FILTER (WHERE p.phase = 'O&M')                                    AS om,
    COUNT(*) FILTER (WHERE p.phase = 'Planning')                               AS plan,
    COUNT(*) FILTER (WHERE p.phase NOT IN ('Implementation','Procurement','O&M','Planning')) AS other
FROM years y
JOIN projects p ON y.yr >= p.start_yr AND y.yr <= p.end_yr
GROUP BY y.yr
ORDER BY y.yr`),[u,Q,k,q,ve,Ae,i,n,h,d,E,M,D,O,F,X,K,U,W,re,w,C,y,J,le,ie,me,ae,H,$,x,ue,l]}class hs extends il{constructor(e){super(),rl(this,e,ns,ss,nl,{data:6},null,[-1,-1])}}export{hs as component};
