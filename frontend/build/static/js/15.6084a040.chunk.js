(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[15],{1076:function(t,e,i){"use strict";i.r(e);var n=i(63),s=i(64),a=i(66),o=i(65),c=i(1),r=i.n(c),d=i(415),l=i(1060),h=i(1112),p=i(110),j=i.n(p),b=i(107),m=i(68),u=i(488),g=i(517),f=i(109),x=i(420),O=i(9),y={actionPropertyList:x.c},v=Object(f.b)((function(t){return{propertyData:t.property.propertyData}}),y)(function(t){Object(a.a)(i,t);var e=Object(o.a)(i);function i(t){var s;return Object(n.a)(this,i),(s=e.call(this,t)).handleResize=function(t,e){s.setState({width:window.innerWidth}),window.innerWidth>s.state.marketCriticalWidth&&s.setState({houseImageHeight:s.myRef.current.offsetHeight})},s.myRef=r.a.createRef(),s.state={houseImageHeight:0,marketCriticalWidth:993,width:window.innerWidth,products:[]},s}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var t=this;window.scrollTo(0,0);this.setState({width:window.innerWidth}),window.addEventListener("resize",this.handleResize),this.props.actionPropertyList(20).then((function(){if(console.log("[res]",t.props.propertyData),t.setState({products:t.props.propertyData}),window.innerWidth>t.state.marketCriticalWidth){var e=t.myRef.current&&t.myRef.current.offsetHeight?t.myRef.current.offsetHeight:0;t.setState({houseImageHeight:e+0})}}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var t=this,e=this.state.products,i=(this.state.houseImageHeight,this.state.marketCriticalWidth),n=this.state.width;return Object(O.jsxs)("div",{style:{margin:"6% 12% 2% 12%"},children:[Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"d-highlight d-font-black d-text-90",style:{marginBottom:12},children:"Our Listings"}),Object(O.jsx)("div",{className:"d-white d-font-bold d-text-24",style:{marginBottom:24},children:"Become the landlord of the future"}),Object(O.jsx)("div",{className:"d-white d-font-book d-text-18",style:{marginBottom:48},children:"For the first time, investors around the globe can buy into the US real estate market through fully-compliant, fractional, tokenized ownership. Powered by blockchain."}),Object(O.jsx)("div",{className:"d-content-center",style:{marginBottom:60},children:Object(O.jsxs)("div",{className:"d-highlight d-font-bold d-text-24",style:{width:"fit-content",display:"inline-block"},children:["LOOKING FOR OUR OLDER OFFERINGS?",Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{className:"d-font-bold d-highlight-black-button d-text-24",style:{width:"100%"},children:"PREVIOUS PROPERTIES"})})]})}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)("div",{className:"d-white d-font-bold d-text-18",style:{marginRight:"auto"},children:"Showing all 10 results"}),Object(O.jsxs)(l.a,{children:[Object(O.jsx)(l.a.Toggle,{id:"dropdown-basic",className:"d-font-bold d-text-18",style:{borderRadius:8},children:"Default Sorting"}),Object(O.jsxs)(l.a.Menu,{children:[Object(O.jsx)(l.a.Item,{children:"Sort by 1"}),Object(O.jsx)(l.a.Item,{children:"Sort by 2"})]})]})]})]}),Object(O.jsx)("div",{style:{marginBottom:84}})]}),n<i?e&&e.length>0&&e.map((function(t){return Object(O.jsxs)("div",{className:"marketplace-desktop",style:{marginTop:30},children:[!t.soldOut&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{width:"100%",textAlign:"center",marginTop:-20},children:Object(O.jsx)(u.a,{})})}),Object(O.jsxs)(b.Layout.Row,{children:[Object(O.jsx)(b.Layout.Col,{span:"24",children:Object(O.jsx)("div",{className:"grid-content bg-purple",children:Object(O.jsx)(h.a,{indicators:!0,children:t.imageData.map((function(e){return Object(O.jsx)(h.a.Item,{interval:5e3,children:Object(O.jsx)(m.b,{to:"/detail/".concat(t.id),children:Object(O.jsx)("img",{id:"house-image-ref",width:"100%",style:{border:"1px solid #03ffa4",borderRight:"0 solid #03ffa4",borderTopLeftRadius:0,borderBottomLeftRadius:0},src:"".concat("https://dineli.com","/public/").concat(e),alt:""})})},e)}))})})}),Object(O.jsx)(g.a,{productData:t})]})]},t.id)})):e&&e.length>0&&e.map((function(e){return Object(O.jsx)("div",{className:"marketplace-desktop",style:{marginTop:30},children:Object(O.jsxs)(b.Layout.Row,{children:[Object(O.jsxs)(b.Layout.Col,{span:"16",children:[!e.soldOut&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(O.jsx)(u.a,{})})}),Object(O.jsx)("div",{className:"grid-content bg-purple",children:Object(O.jsx)(h.a,{children:e.imageData.map((function(t){return Object(O.jsx)(h.a.Item,{interval:5e3,children:Object(O.jsx)(m.b,{to:"/detail/".concat(e.id),children:Object(O.jsx)("img",{id:"house-image-ref",width:"100%",style:{border:"1px solid #03ffa4",borderRight:"0 solid #03ffa4",borderTopLeftRadius:0,borderBottomLeftRadius:0},height:"380",className:"marketplace-img",src:"".concat("https://dineli.com","/public/").concat(t),alt:""})})})}))})})]}),Object(O.jsx)(b.Layout.Col,{span:"8",children:Object(O.jsx)("div",{className:"grid-content bg-purple-light",ref:t.myRef,children:Object(O.jsx)(g.a,{productData:e})})})]})})}))]})}}]),i}(c.Component));e.default=v},420:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return d})),i.d(e,"b",(function(){return l}));var n=i(35),s=i(419),a=i(107),o=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,c=function(t){return function(e){Object(s.d)("/api/admin/property",t,o).then((function(i){a.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),e({type:n.a,payload:t})})).catch((function(t){console.log(t),a.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},r=function(t){return function(e){Object(s.d)("/api/admin/property/update",t,o).then((function(i){a.Notification.success({title:"Success",message:"House Properties Update Success!",type:"success"}),e({type:n.f,payload:t})})).catch((function(t){console.log(t),a.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},d=function(t){return function(e){return Object(s.c)("/api/property?count=".concat(t)).then((function(t){for(var i=t.data,s=0;s<i.length;s++)i[s].monthlyNetRent=i[s].monthlyGrossRent-i[s].monthlyCosts,i[s].yearlyNetRent=12*(i[s].monthlyGrossRent-i[s].monthlyCosts),i[s].totalInvestment=i[s].generatedToken*i[s].tokenValue,i[s].expectedYield=12*(i[s].monthlyGrossRent-i[s].monthlyCosts)/(i[s].generatedToken*i[s].tokenValue),i[s].imageData=i[s].imageData.split(",");e({type:n.d,payload:i})})).catch((function(t){e({type:n.e})}))}},l=function(t){return function(e){return Object(s.c)("/api/property/id?ID=".concat(t)).then((function(t){var i=t.data;return i.monthlyGrossRent=i.monthlyGrossRent,i.monthlyNetRent=i.monthlyGrossRent-i.monthlyCosts,i.yearlyNetRent=12*(i.monthlyGrossRent-i.monthlyCosts),i.totalInvestment=i.generatedToken*i.tokenValue,i.expectedYield=12*(i.monthlyGrossRent-i.monthlyCosts)/parseFloat(i.generatedToken*i.tokenValue),i.imageData=i.imageData.split(","),e({type:n.b,payload:i})})).catch((function(t){return e({type:n.c})}))}}},459:function(t,e,i){"use strict";var n=i(63),s=i(64),a=i(66),o=i(65),c=i(1),r=i(9),d=function(t){Object(a.a)(i,t);var e=Object(o.a)(i);function i(){return Object(n.a)(this,i),e.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){var t=void 0===this.props.className?"":this.props.className,e=this.props.img,i=void 0===this.props.color?"white":this.props.color,n=void 0===this.props.font?"book":this.props.font,s=this.props.fontSize,a=this.props.padding,o=this.props.label;return Object(r.jsxs)("div",{className:t,style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)("img",{className:"img-mobile",src:e,alt:""}),Object(r.jsx)("div",{style:{width:a}}),Object(r.jsx)("div",{className:"d-"+i+" d-font-"+n+" d-text-"+s,children:o})]})}}]),i}(c.Component);e.a=d},473:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i(63),s=i(64),a=i(66),o=i(65),c=i(1),r=i(1111),d=i(9),l=function(t){Object(a.a)(i,t);var e=Object(o.a)(i);function i(t){var s;return Object(n.a)(this,i),(s=e.call(this,t)).toggle=function(){return s.setState({tooltipOpen:!s.state.tooltipOpen})},s.state={tooltipOpen:!1},s}return Object(s.a)(i,[{key:"render",value:function(){var t=this.props.width,e=this.props.content,i=this.props.img;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{id:"DisabledAutoHideExample",children:Object(d.jsx)("img",{style:{pointerEvents:"none"},width:t,src:i,alt:""})}),Object(d.jsx)(r.a,{placement:"top",isOpen:this.state.tooltipOpen,autohide:!1,target:"DisabledAutoHideExample",toggle:this.toggle,id:"test",style:{color:"#000000",backgroundColor:"#ffffff",opacity:1},children:e})]})}}]),i}(c.Component)},488:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i(63),s=i(64),a=i(66),o=i(65),c=i(1),r=i(9),d=function(t){Object(a.a)(i,t);var e=Object(o.a)(i);function i(){var t;return Object(n.a)(this,i),(t=e.call(this)).handleTime=function(){t.setState({leftTime:t.state.leftTime-t.state.timeInterval})},t.state={leftTime:86399999,timeInterval:1e3},t}return Object(s.a)(i,[{key:"render",value:function(){return setTimeout(this.handleTime,this.state.timeInterval),this.state.leftTime>=0?Object(r.jsx)("div",{children:Object(r.jsx)("button",{style:{width:100,borderColor:"#03ffa4",backgroundColor:"#ffffff",color:"#03ffa4"},className:"d-font-bold d-text-24",children:new Date(this.state.leftTime).toISOString().substr(11,8)})}):Object(r.jsx)(r.Fragment,{})}}]),i}(c.Component)},517:function(t,e,i){"use strict";var n=i(63),s=i(64),a=i(66),o=i(65),c=i(1),r=i(415),d=i(459),l=i(116),h=i(583),p=(i(584),i(518),i(68)),j=i(473),b=i(488),m=i(9),u=function(t){Object(a.a)(i,t);var e=Object(o.a)(i);function i(t){var s;return Object(n.a)(this,i),(s=e.call(this,t)).toggle=function(){return s.setState({tooltipOpen:!s.state.tooltipOpen})},s.state={tooltipOpen:!1},s}return Object(s.a)(i,[{key:"render",value:function(){"".concat(this.props.productData.imageData[0]);var t=this.props.productData.address1,e=this.props.productData.address2,i=Number(this.props.productData.tokenValue).toFixed(2).toLocaleString(),n=Number(this.props.productData.tokenValue).toFixed(2).toLocaleString(),s=Number(12*this.props.productData.monthlyRentPerToken).toFixed(2).toLocaleString(),a=this.props.productData.generatedToken,o=this.props.productData.totalInvestment.toFixed(2).toLocaleString(),c=Number(this.props.productData.expectedYield).toFixed(2).toLocaleString();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.b,{to:"/detail/".concat(this.props.productData.id),children:Object(m.jsx)("div",{style:{width:"100%",textAlign:"center",marginBottom:-32},children:Object(m.jsx)(b.a,{})})}),Object(m.jsxs)("div",{style:{width:"100%",borderRadius:4,border:"2px solid",borderColor:"#03ffa4",marginTop:30,marginBottom:30},children:[Object(m.jsxs)("div",{style:{backgroundColor:"#323a45",padding:"6px 24px",display:"flex",alignItems:"center"},children:[Object(m.jsx)("img",{src:"imgs/home/3/address.png",alt:""}),"\xa0",Object(m.jsx)("span",{className:"d-white d-font-book d-text-24",children:t+","})," \xa0 \xa0",Object(m.jsx)("span",{className:"d-highlight d-font-book d-text-24",children:e})]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsxs)("div",{className:"col-7",style:{padding:12},children:[Object(m.jsx)(d.a,{img:"imgs/home/3/minInvestment.png",font:"bold",fontSize:18,padding:6,label:"Minimum Investment:"}),Object(m.jsx)("div",{className:"d-highlight d-font-book d-text-30",children:"$"+i}),Object(m.jsx)(l.a,{}),Object(m.jsx)(d.a,{img:"imgs/home/3/totalPrice.png",font:"bold",fontSize:18,padding:6,label:"TOTAL PRICE"}),Object(m.jsx)("div",{className:"d-highlight d-font-book d-text-30",children:"$"+o}),Object(m.jsx)(l.a,{}),Object(m.jsx)(d.a,{img:"imgs/home/3/tokenPrice.png",font:"bold",fontSize:18,padding:6,label:"TOKEN PRICE"}),Object(m.jsx)("div",{className:"d-white d-font-book d-text-36",children:"$"+n}),Object(m.jsx)(l.a,{}),Object(m.jsx)(d.a,{img:"imgs/home/3/rentPerToken.png",font:"bold",fontSize:18,padding:6,label:"RENT PER TOKEN"}),Object(m.jsx)("div",{className:"d-white d-font-book d-text-30",children:"$"+s+" / Year"})]}),Object(m.jsxs)("div",{className:"col-5",style:{backgroundColor:"#323a45",padding:6,marginLeft:"auto"},children:[Object(m.jsx)(d.a,{img:"imgs/home/3/expectedROI.png",font:"bold",fontSize:18,padding:6,label:"Expected Yield:"}),Object(m.jsxs)("div",{className:"d-content-center d-highlight d-font-book d-text-30",children:[c+"%","\xa0 \xa0",Object(m.jsx)(j.a,{width:15,content:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("strong",{children:"Expected yield"})," is expressed as the ",Object(m.jsx)("a",{href:"https://www.investopedia.com/terms/c/capitalizationrate.asp",children:"Cap Rate"})," (capitalization rate), the ratio of net operating income to the current value or sale price of a property. It determines the potential return on an investment."]}),img:"imgs/home/3/i_icon.png"})]}),Object(m.jsx)("div",{style:{backgroundColor:"white",borderRadius:9999,margin:12},className:"product-circular-value",children:Object(m.jsxs)(h.a,{value:79,styles:{width:"85%",height:"85%"},children:[Object(m.jsxs)("div",{className:"d-content-center d-black d-font-black d-text-32",children:[Object(m.jsx)("strong",{children:79}),"%"]}),Object(m.jsx)("div",{className:"d-content-center d-black d-font-bold d-text-10",children:"Invest"})]})}),Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(m.jsx)("div",{className:"col-7 product-tokens",children:Object(m.jsx)(d.a,{img:"imgs/home/3/totalTokens.png",fontSize:14,padding:6,label:"Total Tokens"})}),Object(m.jsx)("div",{className:"col-1 text-center",children:Object(m.jsx)("div",{className:"d-highlight d-font-book d-text-30",style:{marginRight:12},children:"|"})}),Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("div",{className:"d-highlight d-font-book d-text-30",children:a})})]}),Object(m.jsx)(l.a,{color:"#03ffa4"}),Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(m.jsx)("div",{className:"col-7 product-tokens",children:Object(m.jsx)(d.a,{className:"col-md-6",img:"imgs/home/3/tokensAvailable.png",fontSize:14,padding:6,label:"Tokens Available"})}),Object(m.jsx)("div",{className:"col-1 text-center",children:Object(m.jsx)("div",{className:"d-highlight d-font-book d-text-30",style:{marginRight:12},children:"|"})}),Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("div",{className:"col-md-6 d-white d-font-book d-text-30",children:1e3})})]})]})]}),Object(m.jsx)(p.b,{to:"/detail/".concat(this.props.productData.id),children:Object(m.jsx)(r.a,{className:"d-font-black d-square-black d-text-30",style:{width:"100%",height:60},children:"Start Now"})})]})]})}}]),i}(c.Component);e.a=u},518:function(t,e,i){}}]);
//# sourceMappingURL=15.6084a040.chunk.js.map