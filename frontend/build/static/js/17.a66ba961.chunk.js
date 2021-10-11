(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[17],{1093:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(107),a=n(110),r=n.n(a),i=n(435),o=n(68),l=n(524),d=n(109),u=n(420),f=n(425),p=n(9);t.default=function(e){var t=Object(d.c)(),n=Object(d.d)((function(e){return e.token.tokenData})),a=Object(d.d)((function(e){return e.property.propertyData})),h=Object(d.d)((function(e){return e.user.userData}));return Object(c.useEffect)((function(){t(Object(l.b)()),t(Object(u.c)()),t(Object(f.b)())}),[]),Object(p.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:Object(p.jsx)("div",{style:{width:"80%"},children:Object(p.jsxs)(r.a,{bottom:!0,delay:200,children:[Object(p.jsx)("h1",{style:{textAlign:"center"},className:"d-font-bold d-text-90 d-white",children:"Tokens"}),Object(p.jsx)("div",{className:"d-flex",children:Object(p.jsx)(o.b,{to:"/admin/tokens/new",className:"ms-auto",children:Object(p.jsx)(s.Button,{type:"outlined",children:"New Token"})})}),Object(p.jsxs)("div",{className:"login-ruleForm mt-4",labelPosition:"top",style:{border:"2px solid #03ffa4",borderRadius:"10px 10px 0 0"},children:[Object(p.jsx)(s.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 0 0px"},children:Object(p.jsx)(s.Layout.Col,{span:"24",children:Object(p.jsxs)("div",{className:"grid-content d-content-highlight d-flex",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(p.jsx)("div",{className:"ms-3",children:"List"}),Object(p.jsx)("div",{className:"ms-auto me-3 d-flex align-items-center",children:Object(p.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px"}})})]})})}),Object(p.jsx)("div",{className:"w-100 overflow-auto",children:Object(p.jsxs)(i.a,{striped:!0,hover:!0,variant:"dark",style:{margin:0},className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"bg-secondary",children:"#"}),Object(p.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Property"}),Object(p.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Token Name"}),Object(p.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"User"}),Object(p.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Purchase Price"}),Object(p.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Quantity"}),Object(p.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Sale Price"}),Object(p.jsx)("th",{className:"bg-secondary",children:"Token Address"})]})}),Object(p.jsx)("tbody",{children:n.map((function(e,t){var n,c;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:null===(n=a.find((function(t){return t.id===e.propertyId})))||void 0===n?void 0:n.address1}),Object(p.jsx)("td",{children:e.tokenSymbol}),Object(p.jsx)("td",{children:null===(c=h.find((function(t){return t.id===e.userId})))||void 0===c?void 0:c.username}),Object(p.jsx)("td",{children:e.purchasePrice}),Object(p.jsx)("td",{children:e.quantity}),Object(p.jsx)("td",{children:e.salePrice}),Object(p.jsx)("td",{children:e.tokenAddress})]},t)}))})]})})]})]})})})}},420:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var c=n(35),s=n(419),a=n(107),r=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,i=function(e){return function(t){Object(s.d)("/api/admin/property",e,r).then((function(n){a.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:c.a,payload:e})})).catch((function(e){console.log(e),a.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},o=function(e){return function(t){console.log("token",r),Object(s.d)("/api/admin/property/update",e,r).then((function(n){a.Notification.success({title:"Success",message:"House Properties Update Success!",type:"success"}),t({type:c.f,payload:e})})).catch((function(e){console.log(e),a.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},l=function(e){return function(t){return Object(s.c)("/api/property?count=".concat(e)).then((function(e){for(var n=e.data,s=0;s<n.length;s++)n[s].monthlyNetRent=n[s].monthlyGrossRent-n[s].monthlyCosts,n[s].yearlyNetRent=12*(n[s].monthlyGrossRent-n[s].monthlyCosts),n[s].fee=n[s].generatedToken*n[s].tokenValue*10/100,n[s].totalInvestment=n[s].generatedToken*n[s].tokenValue+n[s].initMaintainanceReserve+n[s].fee,n[s].expectedYield=12*(n[s].monthlyGrossRent-n[s].monthlyCosts)/(n[s].generatedToken*n[s].tokenValue)*100,n[s].imageData=n[s].imageData.split(",");t({type:c.d,payload:n})})).catch((function(e){t({type:c.e})}))}},d=function(e){return function(t){return Object(s.c)("/api/property/id?ID=".concat(e)).then((function(e){var n=e.data;return n.monthlyGrossRent=n.monthlyGrossRent,n.monthlyNetRent=n.monthlyGrossRent-n.monthlyCosts,n.yearlyNetRent=12*(n.monthlyGrossRent-n.monthlyCosts),n.fee=n.generatedToken*n.tokenValue*10/100,n.totalInvestment=n.generatedToken*n.tokenValue+n.initMaintainanceReserve+n.fee,n.expectedYield=12*(n.monthlyGrossRent-n.monthlyCosts)/parseFloat(n.generatedToken*n.tokenValue)*100,n.imageData=n.imageData.split(","),t({type:c.b,payload:n})})).catch((function(e){return t({type:c.c})}))}}},425:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return f}));var c=n(43),s=n(421),a=n(419),r=n(107),i=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,o=function(e){return function(t){Object(a.d)("/api/admin/user",e,i).then((function(n){r.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:c.a,payload:e})})).catch((function(e){console.log(e),r.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},l=function(e){return function(t){return Object(a.c)("/api/user?count=".concat(e)).then((function(e){var n=e.data;t({type:c.b,payload:n})})).catch((function(e){t({type:c.c})}))}},d=function(e){return function(t){Object(a.d)("/api/admin/user/update",e,i).then((function(n){console.log("[res]",n),r.Notification.success({title:"Success",message:n.data.message,type:"success"}),t({type:c.e,payload:e})})).catch((function(e){console.log(e),r.Notification.error({title:"Failed",message:"Transaction update failed. Please try again.",type:"Warning"})}))}},u=function(e){return function(t){Object(a.d)("/api/admin/user/update/card",e,i).then((function(n){console.log("[res]",n),r.Notification.success({title:"Success",message:n.data.message,type:"success"}),t(Object(s.g)(e.card))})).catch((function(e){console.log(e),r.Notification.error({title:"Failed",message:"Transaction update failed. Please try again.",type:"Warning"})}))}},f=function(e){return function(t){t({type:c.d,payload:e})}}},435:function(e,t,n){"use strict";var c=n(10),s=n(14),a=n(65),r=n.n(a),i=n(1),o=n.n(i),l=n(108),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.striped,u=e.bordered,f=e.borderless,p=e.hover,h=e.size,y=e.variant,m=e.responsive,b=Object(s.a)(e,d),j=Object(l.a)(n,"table"),g=r()(a,j,y&&j+"-"+y,h&&j+"-"+h,i&&j+"-striped",u&&j+"-bordered",f&&j+"-borderless",p&&j+"-hover"),O=o.a.createElement("table",Object(c.a)({},b,{className:g,ref:t}));if(m){var x=j+"-responsive";return"string"===typeof m&&(x=x+"-"+m),o.a.createElement("div",{className:x},O)}return O}));t.a=u},524:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var c=n(49),s=n(419),a=n(107),r=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,i=function(e){return function(t){Object(s.d)("/api/admin/token",e,r).then((function(n){a.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:c.a,payload:e})})).catch((function(e){console.log(e),a.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},o=function(e){return function(t){return Object(s.c)("/api/token?count=".concat(e)).then((function(e){var n=e.data;t({type:c.d,payload:n})})).catch((function(e){t({type:c.e})}))}}}}]);
//# sourceMappingURL=17.a66ba961.chunk.js.map