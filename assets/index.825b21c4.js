import{_ as M,o as e,c as d,p as K,a as O,b as h,d as T,r as E,F as b,e as w,f as o,w as t,n as R,g as q,h as s,i as c,E as A,j as a}from"./index.7a6a41e1.js";const P={},Q=F=>(K("data-v-2791be44"),F=F(),O(),F),U={class:"sheep-header"},W=Q(()=>h("div",null,[h("span",{class:"l"},"\u7F8A\u4E86\u4E2A\u7F8A\u{1F411}vue3\u7248\u672C"),h("span",{style:{"font-size":"14px","font-family":"'Times New Roman', Times, serif'"}},"\uFF08KinHKin\uFF09")],-1)),X=[W];function Y(F,f){return e(),d("div",U,X)}const Z=M(P,[["render",Y],["__scopeId","data-v-2791be44"]]),ee=[{one:[{oneSub:[0,0,1,1],"full ":!0},{oneSub:[0,1]},{oneSub:[1]}]},{one:[{oneSub:[3,2]},{oneSub:[2,3]},{oneSub:[3]}]},{one:[{oneSub:[4,5]},{oneSub:[5,4]},{oneSub:[1,5]}]}],le=[{one:[{oneSub:[0,1,0,1],"full ":!0},{oneSub:[1,2,0,4]},{oneSub:[4,10,2,10],"full ":!0}]},{"one ":[{oneSub:[0,0,9,3]},{oneSub:[2,3,5,2,2]},{oneSub:[4,2,1,0]}]},{"one ":[{oneSub:[6,7,4,9]},{oneSub:[6,7,3,4]},{oneSub:[9,7,5,3]}]}],L={list1:ee,list2:le},oe={class:"sheep-main"},te={class:"sheep-main-wrap"},se={class:"pic-list"},ne=["onClick"],ce={class:"sheep-footer flex-center"},ue=T({__name:"Main",setup(F){const f=E(),n=E(["#008B8B","#00FFFF","#FFEBCD","#A52A2A","#7FFF00","#FF7F50","#DC143C","#00FFFF","#00008B","#00CED1","#FF1493"]),C=E();C.value=L.list1;function V(p,r,k,l,g,v){if(console.log(p,r,k,l,g,v,"\u6D4B\u8BD5"),v!==k.oneSub.length-1)return!1;if(f.value.length===7)return A.closeAll(),A.error("\u6311\u6218\u5931\u8D25\uFF01"),!1;const{value:D}=C;let i=JSON.parse(JSON.stringify(D));for(let m=0;m<i.length;m++){const y=i[r].one;for(let S=0;S<y.length;S++){const x=y[l];for(let z=0;z<x.oneSub.length;z++)if(v===z){x.oneSub.splice(v);break}}}f.value.push(g),C.value=i,f.value.length>2&&setTimeout(()=>{f.value=j(f.value),!f.value.length&&i.find(m=>m.one.find(y=>y.oneSub.length===0))&&(A.closeAll(),A.success("\u606D\u559C\u60A8\uFF0C\u6311\u6218\u6210\u529F\uFF01\u8FDB\u5165\u4E0B\u4E00\u5173"),C.value=L.list2,f.value=[])},100),console.log(f,i,"tempList")}function j(p){for(let r=0;r<p.length-2;r++){const l=p.slice(r,r+3);console.log(r,l),l[0]===l[1]&&l[1]===l[2]&&l[0]===l[2]&&(p.splice(r+2),p.splice(r+1),p.splice(r,1))}return p}return(p,r)=>{const k=a("StarFilled"),l=a("el-icon"),g=a("Aim"),v=a("Grid"),D=a("HelpFilled"),i=a("Star"),m=a("Menu"),y=a("Camera"),S=a("Bicycle"),x=a("IceTea"),z=a("ColdDrink"),N=a("CoffeeCup"),G=a("el-col"),J=a("el-row");return e(),d("div",oe,[h("div",te,[(e(!0),d(b,null,w(C.value,(u,$)=>(e(),d(b,{key:"i"+$},[u.one?(e(),o(J,{key:0},{default:t(()=>[(e(!0),d(b,null,w(u.one,(B,H)=>(e(),o(G,{span:8,key:"i"+H},{default:t(()=>[h("div",se,[(e(!0),d(b,null,w(B.oneSub,(_,I)=>(e(),d("div",{class:R(["pic-list-item",B.full&&B.oneSub.length>1?"true":""]),style:q(B.full?"--i:0":`--i:${I}`),key:"i"+I,onClick:de=>V(u,$,B,H,_,I)},[_===0?(e(),o(l,{key:0,class:"fz"},{default:t(()=>[s(k,{color:n.value[0]},null,8,["color"])]),_:1})):c("",!0),_===1?(e(),o(l,{key:1,class:"fz"},{default:t(()=>[s(g,{color:n.value[1]},null,8,["color"])]),_:1})):c("",!0),_===2?(e(),o(l,{key:2,class:"fz"},{default:t(()=>[s(v,{color:n.value[2]},null,8,["color"])]),_:1})):c("",!0),_===3?(e(),o(l,{key:3,class:"fz"},{default:t(()=>[s(D,{color:n.value[3]},null,8,["color"])]),_:1})):c("",!0),_===4?(e(),o(l,{key:4,class:"fz"},{default:t(()=>[s(i,{color:n.value[4]},null,8,["color"])]),_:1})):c("",!0),_===5?(e(),o(l,{key:5,class:"fz"},{default:t(()=>[s(m,{color:n.value[5]},null,8,["color"])]),_:1})):c("",!0),_===6?(e(),o(l,{key:6,class:"fz"},{default:t(()=>[s(y,{color:n.value[6]},null,8,["color"])]),_:1})):c("",!0),_===7?(e(),o(l,{key:7,class:"fz"},{default:t(()=>[s(S,{color:n.value[7]},null,8,["color"])]),_:1})):c("",!0),_===8?(e(),o(l,{key:8,class:"fz"},{default:t(()=>[s(x,{color:n.value[8]},null,8,["color"])]),_:1})):c("",!0),_===9?(e(),o(l,{key:9,class:"fz"},{default:t(()=>[s(z,{color:n.value[9]},null,8,["color"])]),_:1})):c("",!0),_===10?(e(),o(l,{key:10,class:"fz"},{default:t(()=>[s(N,{color:n.value[10]},null,8,["color"])]),_:1})):c("",!0)],14,ne))),128))])]),_:2},1024))),128))]),_:2},1024)):c("",!0)],64))),128))]),h("div",ce,[(e(!0),d(b,null,w(f.value,(u,$)=>(e(),d("div",{key:"ii"+$,class:"sheep-footer-items"},[u===0?(e(),o(l,{key:0,class:"fz"},{default:t(()=>[s(k,{color:n.value[0]},null,8,["color"])]),_:1})):c("",!0),u===1?(e(),o(l,{key:1,class:"fz"},{default:t(()=>[s(g,{color:n.value[1]},null,8,["color"])]),_:1})):c("",!0),u===2?(e(),o(l,{key:2,class:"fz"},{default:t(()=>[s(v,{color:n.value[2]},null,8,["color"])]),_:1})):c("",!0),u===3?(e(),o(l,{key:3,class:"fz"},{default:t(()=>[s(D,{color:n.value[3]},null,8,["color"])]),_:1})):c("",!0),u===4?(e(),o(l,{key:4,class:"fz"},{default:t(()=>[s(i,{color:n.value[4]},null,8,["color"])]),_:1})):c("",!0),u===5?(e(),o(l,{key:5,class:"fz"},{default:t(()=>[s(m,{color:n.value[5]},null,8,["color"])]),_:1})):c("",!0),u===6?(e(),o(l,{key:6,class:"fz"},{default:t(()=>[s(y,{color:n.value[6]},null,8,["color"])]),_:1})):c("",!0),u===7?(e(),o(l,{key:7,class:"fz"},{default:t(()=>[s(S,{color:n.value[7]},null,8,["color"])]),_:1})):c("",!0),u===8?(e(),o(l,{key:8,class:"fz"},{default:t(()=>[s(x,{color:n.value[8]},null,8,["color"])]),_:1})):c("",!0),u===9?(e(),o(l,{key:9,class:"fz"},{default:t(()=>[s(z,{color:n.value[9]},null,8,["color"])]),_:1})):c("",!0),u===10?(e(),o(l,{key:10,class:"fz"},{default:t(()=>[s(N,{color:n.value[10]},null,8,["color"])]),_:1})):c("",!0)]))),128))])])}}});const ae=M(ue,[["__scopeId","data-v-0457da84"]]),re={class:"sheep-wrap"},_e={class:"sheep"},fe=T({__name:"index",setup(F){return(f,n)=>(e(),d("div",re,[h("div",_e,[s(Z),s(ae)])]))}});const ie=M(fe,[["__scopeId","data-v-e55a108e"]]);export{ie as default};