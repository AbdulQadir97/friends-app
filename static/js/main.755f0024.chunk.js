(this["webpackJsonpfriends-app"]=this["webpackJsonpfriends-app"]||[]).push([[0],{182:function(e,t,c){},183:function(e,t,c){},254:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(37),s=c.n(a),r=(c(182),c(183),c(184),c(22)),i=c(1),j=c.n(i),o=c(3),l=c(8),b=c(257),u=c(258),O=c(76),d=(c(73),c(58)),h=c(74),x=c(163),p=c(60),f=c(50),m=c(110),g=Object(x.a)({apiKey:"AIzaSyBgcAPFdONBNQzCFe6dOq-G_Be7TAip6qM",authDomain:"friends-app-41e9e.firebaseapp.com",projectId:"friends-app-41e9e",storageBucket:"friends-app-41e9e.appspot.com",messagingSenderId:"991430131094",appId:"1:991430131094:web:808d3c24387cbda3ebb1b7",measurementId:"G-JHD93FCCE0"}),v=Object(p.b)(g),y=Object(f.e)(g),w=Object(m.b)(g),C=c(59),I=c(72),N=c(12),S=function(){var e=Object(r.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),x=Object(l.a)(i,2),p=x[0],f=x[1],m=Object(n.useState)(""),g=Object(l.a)(m,2),S=g[0],P=g[1],k=Object(n.useState)(""),E=Object(l.a)(k,2),F=E[0],B=E[1],T=Object(n.useState)(""),L=Object(l.a)(T,2),q=L[0],U=L[1];console.log(q);var A=function(){var t=Object(o.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.a)(v,p,S);case 3:t.sent&&(Object(h.b)(v,(function(e){console.log(e.uid);var t=Object(I.a)(y,"users"),c=Object(C.b)(w,"userImages/".concat(q.name)),n=Object(C.c)(c,q);n.on("state_changed",(function(){Object(C.a)(n.snapshot.ref).then((function(c){Object(I.c)(Object(I.b)(t,e.uid),{id:e.uid,name:e.displayName=a,email:p,password:S,bio:F,profileUrl:c})}))}))})),e("../login")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(N.jsxs)(b.a,{className:"form-flex",children:[Object(N.jsx)("h1",{children:"Signup Now!"}),Object(N.jsx)(b.a.Item,{name:"username",rules:[{message:"Please input your name",required:!0}],children:Object(N.jsx)(u.a,{type:"text",placeholder:"Username",onChange:function(e){s(e.target.value)}})}),Object(N.jsx)(b.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(N.jsx)(u.a,{placeholder:"Please input your E-mail!",onChange:function(e){f(e.target.value)}})}),Object(N.jsx)(b.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(N.jsx)(u.a,{type:"password",placeholder:"Please input your password!",onChange:function(e){P(e.target.value)}})}),Object(N.jsx)(b.a.Item,{name:"bio",rules:[{required:!0,message:"Please input bio"}],children:Object(N.jsx)(u.a.TextArea,{showCount:!0,maxLength:50,placeholder:"Bio...",onChange:function(e){B(e.target.value)}})}),Object(N.jsx)(b.a.Item,{children:Object(N.jsx)(u.a,{className:"choose-file",type:"file",onChange:function(e){U(e.target.files[0])}})}),Object(N.jsx)(b.a.Item,{children:Object(N.jsxs)("div",{className:"btn-link",children:[Object(N.jsx)(O.a,{onClick:A,children:"SIGN UP"}),Object(N.jsx)("p",{children:"OR"}),Object(N.jsx)(d.b,{to:"/login",children:Object(N.jsx)("p",{children:"Login"})})]})})]})},P=c(255),k=P.a.Header,E=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(P.a,{children:Object(N.jsxs)(k,{children:["  ",Object(N.jsx)("h1",{className:"main-heading",children:"WELCOME TO FRIENDS APP"})," ",Object(N.jsx)("br",{})," "]})}),Object(N.jsx)(S,{})]})},F=c(261),B=c(262),T=function(){var e=Object(r.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),x=Object(l.a)(i,2),p=x[0],f=x[1],m=function(){var t=Object(o.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.c)(v,a,p);case 3:t.sent&&e("../home"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(N.jsxs)(b.a,{className:"form-flex",children:[Object(N.jsx)("h1",{children:"Login Now!"}),Object(N.jsx)(b.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:Object(N.jsx)(u.a,{prefix:Object(N.jsx)(F.a,{className:"site-form-item-icon"}),placeholder:"Email",onChange:function(e){s(e.target.value)}})}),Object(N.jsx)(b.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(N.jsx)(u.a,{prefix:Object(N.jsx)(B.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",onChange:function(e){f(e.target.value)}})}),Object(N.jsx)(b.a.Item,{children:Object(N.jsxs)("div",{className:"btn-link",children:[Object(N.jsx)(O.a,{onClick:m,children:"LOGIN"}),Object(N.jsx)("p",{children:"OR"}),Object(N.jsx)(d.b,{to:"/",children:Object(N.jsx)("p",{children:"Signup"})})]})})]})},L=P.a.Header,q=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(P.a,{children:Object(N.jsxs)(L,{children:["  ",Object(N.jsx)("h1",{className:"main-heading",children:"WELCOME TO FRIENDS APP"})," ",Object(N.jsx)("br",{})," "]})}),Object(N.jsx)(T,{})]})},U=c(6),A=c(94),D=c(62),H=function(){var e=Object(n.useState)([""]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([""]),r=Object(l.a)(s,2),i=r[0],b=r[1];return Object(n.useEffect)((function(){Object(p.c)(v,(function(e){var t=e.uid,c=Object(f.b)(y,"users",t),n=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)(c);case 2:(t=e.sent).exists&&a(t.data());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(f.a)(y,"posts"),r=function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(s);case 2:t=e.sent,console.log(t),c=t.docs.map((function(e){return Object(U.a)({},e.data())})),b(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(),r()}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"profile",children:Object(N.jsxs)("h1",{children:["Welcome: ",c.name]})}),Object(N.jsx)(A.a,{children:Object(N.jsx)(D.a,{className:"post-container",span:12,offset:6,children:Object(N.jsx)("div",{children:i.map((function(e){return Object(N.jsxs)("div",{className:"post-content",children:[Object(N.jsx)("div",{children:e.userpost}),Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:e.imageUrl,alt:"images"})})]})}))})})}),Object(N.jsx)("div",{})]})},z=function(){var e=Object(r.f)(),t=function(){var t=Object(o.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(p.e)(v)&&(alert("Signning OFF"),e("../login"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsx)("div",{children:Object(N.jsx)(O.a,{type:"primary",htmlType:"submit",className:"login-form-button  loginBtn",onClick:t,children:"Logout"})})},G=c(260),R=c(263),_=c(259),J=u.a.TextArea,K=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],j=r[1],o=Object(n.useState)(null),b=Object(l.a)(o,2),d=b[0],x=b[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)(O.a,{type:"primary",htmlType:"submit",className:"login-form-button  loginBtn",onClick:function(){a(!0)},children:"Create Post"}),Object(N.jsxs)(_.a,{title:"Create Post!",visible:c,onOk:function(){a(!1),Object(h.b)(v,(function(e){console.log(e.uid),console.log(e.displayName);var t=Object(I.a)(y,"posts"),c=Object(C.b)(w,"postImage/".concat(d.name)),n=Object(C.c)(c,d);n.on("state_changed",(function(){Object(C.a)(n.snapshot.ref).then((function(e){Object(I.c)(Object(I.b)(t),{userpost:i,imageUrl:e})}))}))}))},onCancel:function(){a(!1)},children:[Object(N.jsx)(J,{rows:4,onChange:function(e){j(e.target.value)}}),Object(N.jsx)(u.a,{type:"file",onChange:function(e){x(e.target.files[0])}})]})]})},M=P.a.Header,W=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(P.a,{children:Object(N.jsxs)(M,{children:[Object(N.jsx)("div",{className:"logo"}),Object(N.jsxs)(G.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(N.jsx)(G.a.Item,{children:"Profile"},"1"),Object(N.jsx)(G.a.Item,{children:Object(N.jsx)(d.b,{to:"./settings",children:Object(N.jsx)(R.a,{})})},"2"),Object(N.jsx)(G.a.Item,{children:Object(N.jsx)(z,{})},"3"),Object(N.jsxs)(G.a.Item,{children:[" ",Object(N.jsx)(K,{})]},"4")]})]})}),Object(N.jsx)(H,{})]})},Q=c(256),Y=P.a.Header,V=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(l.a)(s,2),i=r[0],b=r[1],h=Object(n.useState)(""),x=Object(l.a)(h,2),m=x[0],g=x[1],I=Object(n.useState)(""),S=Object(l.a)(I,2),k=S[0],E=S[1],F=Object(n.useState)(""),B=Object(l.a)(F,2),T=B[0],L=B[1],q=function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),e.next=3,Object(p.c)(v,(function(e){var t=Object(f.b)(y,"users",e.uid),c=Object(C.b)(w,"userImages/".concat(T.name)),n=Object(C.c)(c,T);n.on("state_changed",(function(){Object(C.a)(n.snapshot.ref).then((function(e){Object(f.g)(t,{bio:m,name:k,profileUrl:e})}))}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Object(p.c)(v,(function(e){var t=e.uid,c=Object(f.b)(y,"users",t),n=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)(c);case 2:(t=e.sent).exists&&a(t.data());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(P.a,{children:Object(N.jsxs)(Y,{children:[Object(N.jsx)("div",{className:"logo"}),Object(N.jsxs)(G.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(N.jsx)(G.a.Item,{children:Object(N.jsx)(d.b,{to:"../home",children:"Profile"})},"1"),Object(N.jsx)(G.a.Item,{children:Object(N.jsx)(d.b,{to:"./settings",children:Object(N.jsx)(R.a,{})})},"2")]})]})}),Object(N.jsxs)("div",{className:"card",children:[Object(N.jsxs)(Q.a,{children:[Object(N.jsx)("img",{src:c.profileUrl,alt:c.name}),Object(N.jsx)("p",{children:Object(N.jsx)(u.a,{value:c.bio,readOnly:!0})}),Object(N.jsx)("p",{children:Object(N.jsx)(u.a,{value:c.name,readOnly:!0})}),Object(N.jsx)("p",{children:Object(N.jsx)(u.a,{value:c.email,readOnly:!0})}),Object(N.jsx)("p",{children:Object(N.jsx)(O.a,{onClick:function(){b(!0)},children:"Edit Profile"})})]}),Object(N.jsxs)(_.a,{title:"Edit Your Profile!",visible:i,onOk:q,onCancel:function(){b(!1)},children:[Object(N.jsx)("p",{children:Object(N.jsx)(u.a,{placeholder:"Bio...",onChange:function(e){g(e.target.value)}})}),Object(N.jsx)("p",{children:Object(N.jsx)(u.a,{placeholder:"Username",onChange:function(e){E(e.target.value)}})}),Object(N.jsx)("p",{children:Object(N.jsx)(u.a,{className:"choose-file",type:"file",onChange:function(e){L(e.target.files[0])}})})]})]})]})},X=function(){return Object(N.jsxs)(r.c,{children:[Object(N.jsx)(r.a,{path:"/",element:Object(N.jsx)(E,{})}),Object(N.jsx)(r.a,{path:"/login",element:Object(N.jsx)(q,{})}),Object(N.jsx)(r.a,{path:"/home",element:Object(N.jsx)(W,{})}),Object(N.jsx)(r.a,{path:"/home/settings",element:Object(N.jsx)(V,{})})]})};var Z=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(X,{})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,264)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};s.a.render(Object(N.jsx)(d.a,{children:Object(N.jsx)(Z,{})}),document.getElementById("root")),$()},73:function(e,t,c){}},[[254,1,2]]]);
//# sourceMappingURL=main.755f0024.chunk.js.map