(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[32],{1095:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(12),i=s(107),r=s(110),a=s.n(r),o=s(435),l=s(109),d=s(425),u=s(9),b=["NONE","BASIC","GOLD","PREMIUM"];t.default=function(e){var t=Object(l.c)(),s=Object(l.d)((function(e){return e.user.userData})),r=Object(n.g)();Object(c.useEffect)((function(){t(Object(d.b)())}),[]);return Object(u.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center overflow-hidden",children:Object(u.jsx)("div",{style:{width:"80%"},children:Object(u.jsxs)(a.a,{bottom:!0,delay:200,children:[Object(u.jsx)("h1",{style:{textAlign:"center"},className:"d-font-bold d-text-90 d-white",children:"Users"}),Object(u.jsxs)("div",{className:"login-ruleForm mt-4",labelposition:"top",style:{border:"2px solid #03ffa4",borderRadius:"10px 10px 0 0"},children:[Object(u.jsx)(i.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 0 0px"},children:Object(u.jsx)(i.Layout.Col,{span:"24",children:Object(u.jsxs)("div",{className:"grid-content d-content-highlight d-flex",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(u.jsx)("div",{className:"ms-3",children:"List"}),Object(u.jsx)("div",{className:"ms-auto me-3 d-flex align-items-center",children:Object(u.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px"}})})]})})}),Object(u.jsx)("div",{className:"w-100 overflow-auto",children:Object(u.jsxs)(o.a,{striped:!0,hover:!0,variant:"dark",style:{margin:0},className:"text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"bg-secondary",children:"#"}),Object(u.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Email"}),Object(u.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Wallet Address"}),Object(u.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Role"}),Object(u.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Type"})]})}),Object(u.jsx)("tbody",{children:s.map((function(e,c){return Object(u.jsxs)("tr",{onClick:function(e){return function(e,c){console.log("user click",c),t(Object(d.c)(s[c])),r.push("/admin/users/update")}(0,c)},style:{cursor:"pointer"},children:[Object(u.jsx)("td",{children:c+1}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.walletAddress}),Object(u.jsx)("td",{children:e.role[0]}),Object(u.jsx)("td",{children:b[e.type]})]},c)}))})]})})]})]})})})}},425:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return l})),s.d(t,"d",(function(){return d})),s.d(t,"e",(function(){return u})),s.d(t,"c",(function(){return b}));var c=s(43),n=s(421),i=s(419),r=s(107),a=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,o=function(e){return function(t){Object(i.d)("/api/admin/user",e,a).then((function(s){r.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:c.a,payload:e})})).catch((function(e){console.log(e),r.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},l=function(e){return function(t){return Object(i.c)("/api/user?count=".concat(e)).then((function(e){var s=e.data;t({type:c.b,payload:s})})).catch((function(e){t({type:c.c})}))}},d=function(e){return function(t){Object(i.d)("/api/admin/user/update",e,a).then((function(s){console.log("[res]",s),r.Notification.success({title:"Success",message:s.data.message,type:"success"}),t({type:c.e,payload:e})})).catch((function(e){console.log(e),r.Notification.error({title:"Failed",message:"Transaction update failed. Please try again.",type:"Warning"})}))}},u=function(e){return function(t){Object(i.d)("/api/admin/user/update/card",e,a).then((function(s){console.log("[res]",s),r.Notification.success({title:"Success",message:s.data.message,type:"success"}),t(Object(n.g)(e.card))})).catch((function(e){console.log(e),r.Notification.error({title:"Failed",message:"Transaction update failed. Please try again.",type:"Warning"})}))}},b=function(e){return function(t){t({type:c.d,payload:e})}}},435:function(e,t,s){"use strict";var c=s(10),n=s(14),i=s(65),r=s.n(i),a=s(1),o=s.n(a),l=s(108),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,a=e.striped,u=e.bordered,b=e.borderless,j=e.hover,f=e.size,h=e.variant,p=e.responsive,m=Object(n.a)(e,d),g=Object(l.a)(s,"table"),x=r()(i,g,h&&g+"-"+h,f&&g+"-"+f,a&&g+"-striped",u&&g+"-bordered",b&&g+"-borderless",j&&g+"-hover"),O=o.a.createElement("table",Object(c.a)({},m,{className:x,ref:t}));if(p){var y=g+"-responsive";return"string"===typeof p&&(y=y+"-"+p),o.a.createElement("div",{className:y},O)}return O}));t.a=u}}]);
//# sourceMappingURL=32.16be6f2d.chunk.js.map