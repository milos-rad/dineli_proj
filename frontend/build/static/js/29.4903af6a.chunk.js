(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[29],{1103:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(109),a=s(107),i=s(110),r=s.n(i),l=s(434),d=s(67),o=s(561),j=s(9);t.default=function(e){var t=Object(n.c)(),s=Object(n.d)((function(e){return e.team.teamData}));return console.log(s),Object(c.useEffect)((function(){t(Object(o.b)())}),[]),Object(j.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center overflow-hidden",children:Object(j.jsx)("div",{style:{width:"80%"},children:Object(j.jsxs)(r.a,{bottom:!0,delay:200,children:[Object(j.jsx)("h1",{style:{textAlign:"center"},className:"d-font-bold d-text-90 d-white",children:"Teams"}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)(d.b,{to:"/admin/teams/new",className:"ms-auto",children:Object(j.jsx)(a.Button,{type:"outlined",children:"New Team Member"})})}),Object(j.jsxs)("div",{className:"login-ruleForm mt-4",labelPosition:"top",style:{border:"2px solid #03ffa4",borderRadius:"10px 10px 0 0"},children:[Object(j.jsx)(a.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 0 0px"},children:Object(j.jsx)(a.Layout.Col,{span:"24",children:Object(j.jsxs)("div",{className:"grid-content d-content-highlight d-flex",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(j.jsx)("div",{className:"ms-3",children:"List"}),Object(j.jsx)("div",{className:"ms-auto me-3 d-flex align-items-center",children:Object(j.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px"}})})]})})}),Object(j.jsx)("div",{className:"w-100 overflow-auto",children:Object(j.jsxs)(l.a,{striped:!0,hover:!0,variant:"dark",style:{margin:0},className:"text-center",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"bg-secondary",children:"#"}),Object(j.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Name"}),Object(j.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Job"}),Object(j.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Social"}),Object(j.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Avatar"})]})}),Object(j.jsx)("tbody",{children:s.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t+1}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.job}),Object(j.jsx)("td",{children:e.content}),Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:"".concat("https://dineli.com","/public/").concat(e.avatar),alt:"img",width:"50"})})]},t)}))})]})})]})]})})})}},434:function(e,t,s){"use strict";var c=s(10),n=s(14),a=s(66),i=s.n(a),r=s(1),l=s.n(r),d=s(108),o=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],j=l.a.forwardRef((function(e,t){var s=e.bsPrefix,a=e.className,r=e.striped,j=e.bordered,b=e.borderless,h=e.hover,m=e.size,u=e.variant,x=e.responsive,f=Object(n.a)(e,o),p=Object(d.a)(s,"table"),O=i()(a,p,u&&p+"-"+u,m&&p+"-"+m,r&&p+"-striped",j&&p+"-bordered",b&&p+"-borderless",h&&p+"-hover"),g=l.a.createElement("table",Object(c.a)({},f,{className:O,ref:t}));if(x){var y=p+"-responsive";return"string"===typeof x&&(y=y+"-"+x),l.a.createElement("div",{className:y},g)}return g}));t.a=j},561:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return l}));var c=s(49),n=s(420),a=s(107),i=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,r=function(e){return function(t){Object(n.d)("/api/admin/team",e,i).then((function(s){a.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:c.a,payload:e})})).catch((function(e){console.log(e),a.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},l=function(e){return function(t){return Object(n.c)("/api/team?count=".concat(e)).then((function(e){var s=e.data;t({type:c.d,payload:s})})).catch((function(e){t({type:c.e})}))}}}}]);
//# sourceMappingURL=29.4903af6a.chunk.js.map