(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[23],{1059:function(e,t,a){},1108:function(e,t,a){"use strict";a.r(t);var s=a(41),r=a(42),n=a(44),i=a(43),c=a(1),l=(a(1059),a(106)),o=a(468),d=a(9),j=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).handleReferralLink=function(){r.setState({referralLink:!r.state.referralLink})},r.handleGenerateURL=function(){r.setState({generateReferralURL:!0})},r.state={pageURL:"https://realt.co/",referralURL:"https://realt.co/ref/Facilitator/",referralLink:!1,generateReferralURL:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 15px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Affiliate URLs"})}),Object(d.jsxs)("div",{style:{margin:"90px 20px 20px 20px"},children:[Object(d.jsx)("span",{className:"d-font-book d-white",children:"Your affiliate username is: "}),Object(d.jsx)("span",{className:"d-font-bold d-highlight",children:"Facilitator"})]}),Object(d.jsxs)("div",{style:{margin:"0px 20px 10px 20px"},children:[Object(d.jsx)("span",{className:"d-font-book d-white",children:"Your referral URL is: "}),Object(d.jsx)("span",{className:"d-font-bold d-highlight",children:"https://realt.co/ref/Facilitator/"})]}),Object(d.jsxs)("div",{style:{margin:"0px 20px 10px 20px",border:"1px solid #03ffa4",padding:20},children:[Object(d.jsxs)("div",{onClick:this.handleReferralLink,className:"d-highlight d-text-28 d-font-bold",style:{margin:"0.5% 0"},children:["How Do Referral Links Work? \xa0",this.state.referralLink?Object(d.jsx)(o.b,{}):Object(d.jsx)(o.a,{})]}),this.state.referralLink&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"d-font-book d-white",children:"When you share an affiliate link to RealT, we track the visit and purchases of any user who clicks that link."})}),Object(d.jsxs)("div",{className:"d-white",children:[Object(d.jsx)("span",{children:"If that user buys in the same browser session after following your link, they are counted as your referral, and you earn a "}),Object(d.jsx)("span",{className:"d-font-bold",children:"2% commission "}),Object(d.jsx)("span",{children:"on their purchases... and all their purchases going forward!"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"d-font-book d-white",children:"(For more information about how long you earn commission on a referred user's purchases, please see Lifetime Customers.)"})}),Object(d.jsxs)("div",{className:"d-white",children:[Object(d.jsx)("span",{children:"The links above point to our homepage, but you can also create links to any page on RealT.co in"}),Object(d.jsx)("span",{className:"d-font-bold",children:"one of two ways: "})]}),Object(d.jsxs)("ul",{className:"d-white",children:[Object(d.jsxs)("li",{children:["Copy the RealT URL you want to link to, and simply replace ",Object(d.jsx)("span",{className:"d-font-bold",children:"realt.co"})," with the new URL in your affiliate link. Make sure to keep the ",Object(d.jsx)("span",{className:"d-font-bold",children:"/ref/etc"})," part \u2014 that's how we know the referral is yours!"]}),Object(d.jsx)("li",{children:"Copy the RealT URL you want to link to into our Referral URL Generator below, select a Campaign if you want to track that link's performance separately, and click 'Generate URL'. If you want to use a Custom Slug, just replace your username in the URL with your Custom Slug."})]}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"d-font-book d-white",children:"(For more about Custom Slugs, check out Settings.)"})}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"d-font-book d-white",children:"And if you're linking from your own website and don't want to bother with affiliate links at all, you should check out Direct Links!"})})]})]}),Object(d.jsx)("div",{style:{margin:"0px 20px 10px 20px"},children:Object(d.jsx)("span",{className:"d-font-bold d-highlight",children:"Referral URL Generator"})}),Object(d.jsx)("div",{style:{margin:"0px 20px 10px 20px"},children:Object(d.jsx)("span",{className:"d-font-bold d-white",children:"Enter any URL from this website in the form below to generate a referral link!                    "})}),Object(d.jsxs)(l.Layout.Row,{style:{margin:"0px 20px 10px 20px"},children:[Object(d.jsx)(l.Layout.Col,{span:"12",children:Object(d.jsxs)("div",{className:"grid-content",children:[Object(d.jsx)("div",{className:"d-font-book d-white d-text-24",children:"Page URL"}),Object(d.jsx)(l.Input,{value:this.state.pageURL,style:{width:"95%"}})]})}),Object(d.jsx)(l.Layout.Col,{span:"12",children:Object(d.jsxs)("div",{className:"grid-content",children:[Object(d.jsx)("div",{className:"d-font-book d-white d-text-24",children:"Campaign Name (optional)"}),Object(d.jsx)(l.Input,{style:{width:"95%"}})]})})]}),this.state.generateReferralURL&&Object(d.jsx)(l.Layout.Row,{style:{margin:"0px 20px 10px 20px"},children:Object(d.jsx)(l.Layout.Col,{span:"12",children:Object(d.jsxs)("div",{className:"grid-content",children:[Object(d.jsx)("div",{className:"d-font-book d-white d-text-24",children:"Referral URL"}),Object(d.jsx)(l.Input,{type:"text",value:this.state.referralURL,style:{width:"95%"},onChange:function(e){return e}}),Object(d.jsx)("div",{className:"d-font-book d-white d-text-20",children:"(now copy this referral link and share it anywhere)"})]})})}),Object(d.jsx)(l.Layout.Row,{children:Object(d.jsx)(l.Layout.Col,{span:"24",style:{textAlign:"center",marginBottom:30},children:Object(d.jsx)("div",{className:"grid-content",children:Object(d.jsx)(l.Button,{style:{background:"#03ffa4",color:"black"},className:"d-font-bold",type:"success",onClick:this.handleGenerateURL,children:"GENERATE URL"})})})})]})})}}]),a}(c.Component),h=a(433),b=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={table1:{data:[{unpaidReferrals:"0",paidReferrals:"0",visits:"3",conversionRate:"0%"}]},table2:{data:[{unpaidEarnings:"$0.00",paidEarnings:"$0.00",conversionRate:"2%"}]},table3:{data:[]}},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 15px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Statistics"})}),Object(d.jsx)("div",{children:Object(d.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,className:"affiliate-statistics-table1",children:[Object(d.jsx)("thead",{className:"d-font-book d-black",style:{background:"#d3fdee"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Unpaid Referrals"}),Object(d.jsx)("th",{children:"Paid Referrals"}),Object(d.jsx)("th",{children:"Visits"}),Object(d.jsx)("th",{children:"Conversion Rate"})]})}),Object(d.jsx)("tbody",{children:0===this.state.table1.data.length?Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:5,className:"d-font-book d-white",children:"You have not made any referrals yet."})}):this.state.table1.data.map((function(e){return Object(d.jsxs)("tr",{className:"d-white d-font-book",children:[Object(d.jsx)("td",{className:"d-font-bold d-white",children:e.unpaidReferrals}),Object(d.jsx)("td",{className:"d-font-bold d-white",children:e.paidReferrals}),Object(d.jsx)("td",{className:"d-font-bold d-white",children:e.visits}),Object(d.jsx)("td",{className:"d-font-bold d-white",children:e.conversionRate})]})}))})]})})]}),Object(d.jsx)("div",{style:{margin:"30px 0 30px 0"},children:Object(d.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,className:"affiliate-statistics-table1",children:[Object(d.jsx)("thead",{className:"d-font-book d-black",style:{background:"#d3fdee"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Unpaid Earnings"}),Object(d.jsx)("th",{children:"Paid Earnings"}),Object(d.jsx)("th",{children:"Commission Rate"})]})}),Object(d.jsx)("tbody",{children:0===this.state.table2.data.length?Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:5,className:"d-font-book d-white",children:"You have not made any referrals yet."})}):this.state.table2.data.map((function(e){return Object(d.jsxs)("tr",{className:"d-white d-font-book",children:[Object(d.jsx)("td",{className:"d-font-bold d-white",children:e.unpaidEarnings}),Object(d.jsx)("td",{className:"d-font-bold d-white",children:e.paidEarnings}),Object(d.jsx)("td",{className:"d-font-bold d-white",children:e.conversionRate})]})}))})]})}),Object(d.jsx)("div",{style:{margin:"30px 0 30px 0"},children:Object(d.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{className:"d-font-book d-black",style:{background:"#d3fdee"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Campaign"}),Object(d.jsx)("th",{children:"Visits"}),Object(d.jsx)("th",{children:"Unique Links"}),Object(d.jsx)("th",{children:"Converted"}),Object(d.jsx)("th",{children:"Conversion Rate"})]})}),Object(d.jsx)("tbody",{children:0===this.state.table3.data.length&&Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:5,className:"d-font-book d-white",children:"You have not made any referrals yet."})})})]})})]})}}]),a}(c.Component),x=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={table3:{data:[]}},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 0px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Referrals"})}),Object(d.jsxs)("div",{style:{width:"95%",padding:30,margin:"5% 0 0 2.5% ",border:"1px solid #03ffa4"},children:[Object(d.jsx)("span",{className:"d-font-bold d-white",children:"Notice"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"The Reference Column has been updated."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"You can only attribute referrals to a specific customer if the customer provides you with their Affiliate Customer ID, shown below in the 'Customer ID' column."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"Customers can find this Affiliate Customer ID in the \u201cAccount Details\u201d section of their \u201cMy Account\u201d area."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"Please reach out to your affiliate customers independently if you would like this information."}),Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{id:"affiliate-dashboard-referrals",style:{margin:"20px 0 0 0"},children:Object(d.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{className:"d-font-book d-black",style:{background:"#d3fdee"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Customer ID"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Status"}),Object(d.jsx)("th",{children:"Date"})]})}),Object(d.jsx)("tbody",{children:0===this.state.table3.data.length&&Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:5,className:"d-font-book d-white",children:"You have not made any referrals yet. "})})})]})})]})})}}]),a}(c.Component),u=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={table3:{data:[]}},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 0px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Referral Payouts"})}),Object(d.jsxs)("div",{style:{width:"95%",padding:30,margin:"5% 0 0 2.5% ",border:"1px solid #03ffa4"},children:[Object(d.jsx)("span",{className:"d-font-bold d-white",children:"Requesting a Payout"}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{className:"d-font-book d-white",children:["To request a payout of your accumulated Affiliate earnings, just email us at ",Object(d.jsx)("a",{href:"http://realt.co/",children:"affiliates@realt.co"}),"!"]}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"A RealT representative will respond shortly to finalize your request."}),Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{id:"affiliate-dashboard-payout",style:{margin:"20px 0 0 0"},children:Object(d.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{className:"d-font-book d-black",style:{background:"#d3fdee"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Date"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Payout Method"}),Object(d.jsx)("th",{children:"Status"})]})}),Object(d.jsx)("tbody",{children:0===this.state.table3.data.length&&Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:5,className:"d-font-book d-white",children:"You have not made any referrals yet. "})})})]})})]})})}}]),a}(c.Component),f=a(66),p=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={table3:{data:[{url:{address:"/home",label:"Dineli.com"},referringURL:"Direct traffic",converted:Object(d.jsx)(o.c,{}),date:"May 22, 2021 3:02 pm"},{url:{address:"/home",label:"Dineli.com"},referringURL:"Direct traffic",converted:Object(d.jsx)(o.c,{}),date:"May 22, 2021 3:02 pm"},{url:{address:"/home",label:"Dineli.com"},referringURL:"Direct traffic",converted:Object(d.jsx)(o.c,{}),date:"May 22, 2021 3:02 pm"}]}},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 0px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Referral URL Visits"})}),Object(d.jsx)("div",{id:"affiliate-dashboard-visits",style:{margin:"20px 0 0 0"},children:Object(d.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{className:"d-font-book d-black",style:{background:"#d3fdee"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"URL"}),Object(d.jsx)("th",{children:"Referral URL"}),Object(d.jsx)("th",{children:"Converted"}),Object(d.jsx)("th",{children:"Date"})]})}),Object(d.jsx)("tbody",{children:0===this.state.table3.data.length?Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:5,className:"d-font-book d-white",children:"You have not made any referrals yet."})}):this.state.table3.data.map((function(e){return Object(d.jsxs)("tr",{className:"d-white d-font-book",children:[Object(d.jsx)("td",{children:Object(d.jsx)(f.b,{to:e.url.address,children:e.url.label})}),Object(d.jsx)("td",{children:e.referringURL}),Object(d.jsx)("td",{style:{color:"red"},children:e.converted}),Object(d.jsx)("td",{children:e.date})]})}))})]})})]})})}}]),a}(c.Component),O=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).handleReferralLink=function(){r.setState({referralLink:!r.state.referralLink})},r.handleGenerateURL=function(){r.setState({generateReferralURL:!0})},r.handleCheck=function(){r.setState({checked:!r.state.checked})},r.state={checked:!0,pageURL:"https://realt.co/",referralURL:"https://realt.co/ref/Facilitator/",referralLink:!1,generateReferralURL:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 15px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Profile Settings"})}),Object(d.jsx)("div",{style:{margin:"90px 20px 20px 20px"},children:Object(d.jsx)("span",{className:"d-font-bold d-highlight d-text-28",children:"Notification Settings"})}),Object(d.jsxs)("div",{style:{margin:"10px 20px 20px 20px"},className:"d-white affiliate-settings-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",checked:this.state.checked,onClick:this.handleCheck}),"\xa0Enable New Referral Notifications"]}),Object(d.jsxs)("div",{style:{margin:"0px 20px 10px 20px",border:"1px solid #03ffa4",padding:20},children:[Object(d.jsxs)("div",{onClick:this.handleReferralLink,className:"d-highlight d-text-28 d-font-bold",style:{margin:"0.5% 0"},children:["What is a Custom Slug? \xa0",this.state.referralLink?Object(d.jsx)(o.b,{}):Object(d.jsx)(o.a,{})]}),this.state.referralLink&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"d-font-book d-white",children:"When you share an affiliate link to RealT, you'll see something like /ref/your_username at the end of the URL. The your_username part is your 'slug', the short name that tells realt.co to connect the link to your affiliate account."})}),Object(d.jsx)("div",{className:"d-white",children:Object(d.jsx)("span",{children:"If you don't want to use your username as part of your link URL, you can choose a Custom Slug here instead. This could be almost anything you want \u2014 your business name, a catchy phrase, or a call to action."})}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"d-font-bold d-white",children:"If you choose to use a Custom Slug, there are three things you have to keep in mind:"})}),Object(d.jsxs)("ul",{className:"d-white",children:[Object(d.jsx)("li",{children:"Your Custom Slug is directly associated with your account. Changing it will invalidate any links that use an old Custom Slug!"}),Object(d.jsx)("li",{children:"Your Custom Slug must be a single string of letters, numbers, and underscores. It must contain at least one letter. It cannot match another slug or username."}),Object(d.jsx)("li",{children:"The URL Generator in the Affiliate URLs tab will always use your username as the slug. Simply replace your username with your Custom Slug to use it in a generated URL."})]})]})]}),Object(d.jsx)("div",{style:{margin:"0px 20px 10px 20px"},children:Object(d.jsx)("span",{className:"d-font-bold d-highlight",children:"Custom Slug Settings"})}),Object(d.jsxs)(l.Layout.Row,{style:{margin:"0px 20px 10px 20px"},children:[Object(d.jsx)(l.Layout.Col,{span:"12",children:Object(d.jsxs)("div",{className:"grid-content",children:[Object(d.jsx)("div",{className:"d-font-book d-white d-text-24",children:"Custom Affiliate Slug"}),Object(d.jsx)(l.Input,{style:{width:"80%"}})]})}),Object(d.jsx)(l.Layout.Col,{span:"12",children:Object(d.jsxs)("div",{className:"grid-content",children:[Object(d.jsx)("div",{className:"d-font-book d-white d-text-24",children:"Custom Affiliate Slug"}),Object(d.jsx)("div",{style:{textAlign:"center"},children:Object(d.jsx)("input",{type:"checkbox"})}),Object(d.jsx)("div",{className:"d-font-book d-white d-text-24",children:"By removing your affiliate slug you acknowledge that any existing links using an older affiliate slug may no longer work."})]})})]}),Object(d.jsx)(l.Layout.Row,{children:Object(d.jsx)(l.Layout.Col,{span:"24",style:{textAlign:"center",marginBottom:30},children:Object(d.jsx)("div",{className:"grid-content",children:Object(d.jsx)(l.Button,{style:{background:"#03ffa4",color:"black"},className:"d-font-bold",type:"success",onClick:"",children:"SAVE PROFILE SETTINGS"})})})})]})})}}]),a}(c.Component),m=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).handleReferralLink=function(){r.setState({referralLink:!r.state.referralLink})},r.handleGenerateURL=function(){r.setState({generateReferralURL:!0})},r.handleCheck=function(){r.setState({checked:!r.state.checked})},r.state={checked:!0,pageURL:"https://realt.co/",referralURL:"https://realt.co/ref/Facilitator/",referralLink:!1,generateReferralURL:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 15px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Lifetime Customers"})}),Object(d.jsxs)("div",{style:{margin:"90px 20px 10px 20px",border:"1px solid #03ffa4",padding:20},children:[Object(d.jsxs)("div",{onClick:this.handleReferralLink,className:"d-highlight d-text-28 d-font-bold",style:{margin:"0.5% 0"},children:["How Do Lifetime Customers Work? \xa0",this.state.referralLink?Object(d.jsx)(o.b,{}):Object(d.jsx)(o.a,{})]}),this.state.referralLink&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"d-font-book d-white",children:"When someone follows your affiliate link and registers or makes a purchase in the same browser session, they become your Lifetime Customer."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"That means that all their purchases after their initial referral also earn you commission. These purchases do not have to use your affiliate link \u2014 they are automatically counted as referrals to your affiliate account!"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"Be aware: If you gain a Lifetime Customer during registration, they will only remain your Lifetime Customer if they make a purchase within the next 30 days. Similarly, if a Lifetime Customer makes no purchases on RealT.co for one year, they will cease to be your Lifetime Customer."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"To keep your Lifetime Customers active, make sure they know about new RealT offerings!"}),Object(d.jsx)("br",{})]})})]}),Object(d.jsx)("div",{className:"d-font-book d-white",style:{margin:"0px 20px 10px 20px"},children:"You don't have any lifetime customers yet."})]})})}}]),a}(c.Component),y=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(l.Layout.Row,{style:{border:"1px solid #03ffa4"},children:[Object(d.jsx)(l.Layout.Col,{className:"d-font-bold d-text-36",span:"24",style:{background:"#03ffa4",padding:"15px 0 15px 20px"},children:Object(d.jsx)("div",{className:"grid-content bg-purple-dark",children:"Direct Links"})}),Object(d.jsx)("div",{style:{margin:"90px 20px 20px 20px"},children:Object(d.jsx)("span",{className:"d-font-book d-white",children:"Direct links allow you to link directly to this site, from your own website, without an affiliate link. Submit your domain or individual domain path below for approval."})}),Object(d.jsx)(l.Layout.Row,{style:{margin:"0px 20px 10px 20px"},children:Object(d.jsx)(l.Layout.Col,{span:"24",children:Object(d.jsxs)("div",{className:"grid-content",children:[Object(d.jsx)("div",{className:"d-font-book d-white d-text-24",children:"Direct Link Domain"}),Object(d.jsx)(l.Input,{style:{width:"95%"}})]})})}),Object(d.jsx)(l.Layout.Row,{children:Object(d.jsx)(l.Layout.Col,{span:"24",style:{textAlign:"center",marginBottom:30},children:Object(d.jsx)("div",{className:"grid-content",children:Object(d.jsx)(l.Button,{style:{background:"#03ffa4",color:"black"},className:"d-font-bold",type:"success",onClick:"",children:"SAVE DIRECT LINKS"})})})}),Object(d.jsxs)("div",{style:{width:"95%",padding:30,margin:"0.5% 0 2% 2.5% ",border:"1px solid #03ffa4"},children:[Object(d.jsx)("span",{className:"d-font-bold d-highlight",children:"You must demonstrate your ownership of the website you want to register for a Direct Link."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"To do that, please add the following code inside your website's <head> tag:"}),Object(d.jsx)("br",{}),Object(d.jsx)(l.Layout.Col,{span:"24",children:Object(d.jsx)("div",{className:"grid-content",style:{textAlign:"center"},children:Object(d.jsx)(l.Input,{style:{width:"90%",background:"darkgray"},value:'<meta name="realt:direct_link" content="verified">',disabled:!0})})}),Object(d.jsx)("span",{className:"d-font-bold d-white",children:"To earn referrals from your Direct Link, you must ensure:"}),Object(d.jsx)("br",{}),Object(d.jsxs)("ul",{className:"d-white",children:[Object(d.jsx)("li",{children:"The Direct Link does not open a new tab. It must point to a realt.co URL directly."}),Object(d.jsx)("li",{children:"The Direct Link is not opened from a bookmark or other external source. It must come directly from the web domain you registered above."}),Object(d.jsx)("li",{children:"The Direct Link's HTML anchor tag doesn't use 'noopener' or 'noreferrer' in its 'rel' attribute."})]}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"If you're having trouble tracking Direct Link referrals from visitors who use Safari or iOS, try adding the following code to your site's HTML header:"}),Object(d.jsx)("br",{}),Object(d.jsx)(l.Layout.Col,{span:"24",children:Object(d.jsx)("div",{className:"grid-content",style:{textAlign:"center"},children:Object(d.jsx)(l.Input,{style:{width:"90%",background:"darkgray"},value:'<meta name="referrer" content="always">',disabled:!0})})}),Object(d.jsx)("span",{className:"d-font-book d-white",children:"And of course, for assistance, please contact us at help@realt.co!"}),Object(d.jsx)("br",{})]})]})}}]),a}(c.Component),g=["Affiliate URLs","Statistics","Referrals","Payouts","Visits","Settings","Lifetime Customers","Direct Links"],k=[Object(d.jsx)(j,{}),Object(d.jsx)(b,{}),Object(d.jsx)(x,{}),Object(d.jsx)(u,{}),Object(d.jsx)(p,{}),Object(d.jsx)(O,{}),Object(d.jsx)(m,{}),Object(d.jsx)(y,{})],v=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).handleTabNum=function(e){r.setState({tabNum:e.target.accessKey})},r.state={tabNum:0},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{style:{margin:"10% 12% 10% 12%"},children:[Object(d.jsx)("div",{id:"affiliate-menu",children:g.map((function(t,a){var s=Number(e.state.tabNum)===a?"active":"";return Object(d.jsx)("div",{className:"d-text-28 d-font-bold ".concat(s),onClick:e.handleTabNum,children:t},a)}))}),Object(d.jsx)("div",{style:{marginTop:50},children:g.map((function(t,a){return Number(e.state.tabNum)===a&&k[a]}))})]})}}]),a}(c.Component);t.default=v},433:function(e,t,a){"use strict";var s=a(10),r=a(14),n=a(65),i=a.n(n),c=a(1),l=a.n(c),o=a(107),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],j=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.striped,j=e.bordered,h=e.borderless,b=e.hover,x=e.size,u=e.variant,f=e.responsive,p=Object(r.a)(e,d),O=Object(o.a)(a,"table"),m=i()(n,O,u&&O+"-"+u,x&&O+"-"+x,c&&O+"-striped",j&&O+"-bordered",h&&O+"-borderless",b&&O+"-hover"),y=l.a.createElement("table",Object(s.a)({},p,{className:m,ref:t}));if(f){var g=O+"-responsive";return"string"===typeof f&&(g=g+"-"+f),l.a.createElement("div",{className:g},y)}return y}));t.a=j}}]);
//# sourceMappingURL=23.c67b6604.chunk.js.map