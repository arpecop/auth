(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{174:function(e,t,a){e.exports=a(295)},205:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=a(53),s=a(8),u=a(6),i=a.n(u),m=a(18),p=a(11),d=a(62),f=a(25),b=a(304),g=a(306),h=a(101),E=a(301),v=a(141),w=(a(204),a(205),function(e){var t=e.children;e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"title",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))}),y=a(303),x=Object(l.atom)({key:"loggedInUser",default:{sub:null,email_verified:null,phone_number_verified:null,email:null,username:null,token:null}}),O=a(305),j={UserNotFoundException:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430",AuthError:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u0430 \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u043f\u0440\u0430\u0437\u043d\u0438",CodeMismatchException:"\u041d\u0435\u0432\u0430\u043b\u0438\u0434\u0435\u043d \u043a\u043e\u0434 , \u043c\u043e\u043b\u044f \u043e\u043f\u0438\u0442\u0430\u0439\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e",NotAuthorizedException:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u0430 \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u0438",UsernameExistsException:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430",PasswordNotMatch:"\u041f\u0430\u0440\u043e\u043b\u0438\u0442\u0435 \u043d\u0435 \u0441\u044a\u0432\u043f\u0430\u0434\u0430\u0442",InvalidParameterException:"\u041f\u0430\u0440\u043e\u043b\u0430\u0442\u0430 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0435 \u043f\u043e\u043d\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0430",Empty:""},k=function(e){return r.a.createElement("div",null,Object.entries(e).map((function(e){var t=Object(p.a)(e,2),a=(t[0],t[1]);return r.a.createElement(O.a,{description:j[a.name]?j[a.name]:"".concat(a.message,"-").concat(a.name),type:"error"})})))},C={Input:{height:40,margin:"10px 0px",padding:7,width:"100%"},formContainer:{display:"flex",flexDirection:"column"},button:{backgroundColor:"rebeccapurple",padding:"15px 7px",cursor:"pointer",textAlign:"center",marginBottom:10},buttonText:{color:"white"}},I=function(e){var t=e.type,a=Object(l.useRecoilState)(x),c=Object(p.a)(a,2),o=c[0],u=c[1],d=Object(n.useState)(""),f=Object(p.a)(d,2),b=f[0],g=f[1],h=Object(n.useState)(""),v=Object(p.a)(h,2),w=v[0],O=v[1],j=Object(n.useState)(null),I=Object(p.a)(j,2),S=I[0],T=I[1],_=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.signIn(b,w);case 3:return e.next=5,E.a.currentAuthenticatedUser();case 5:return t=e.sent,e.next=8,E.a.currentSession();case 8:a=e.sent,n=Object(s.a)(Object(s.a)({},t.attributes),{},{username:t.username,token:a.accessToken.jwtToken,refreshtoken:a.refreshToken.token}),u(n),localStorage.setItem("user",JSON.stringify(n)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),T(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,o.x&&r.a.createElement(k,{errorMessage:S}),S&&r.a.createElement(k,{errorMessage:S}),"compact"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onChange:function(e){return g(e.target.value)},placeholder:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b",name:"username",value:b,style:C.InputCompact}),r.a.createElement(y.a,{onChange:function(e){return O(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u0430",name:"password",value:w,type:"password",style:C.InputCompact}),r.a.createElement("div",{style:C.buttonCompact,onClick:_},r.a.createElement("span",{style:C.buttonCompact},"\u0412\u0445\u043e\u0434"))),"full"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onChange:function(e){return g(e.target.value)},placeholder:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b",name:"username",value:b,style:C.Input}),r.a.createElement(y.a,{onChange:function(e){return O(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u0430",name:"password",value:w,type:"password",style:C.Input}),r.a.createElement("div",{style:C.button,onClick:_},r.a.createElement("span",{style:C.buttonText},"\u0412\u0445\u043e\u0434"))))},S=a(35),T={Input:{height:40,margin:"10px 0px",padding:7},formContainer:{display:"flex",flexDirection:"column"},button:{backgroundColor:"rebeccapurple",padding:"15px 7px",cursor:"pointer",textAlign:"center",marginBottom:10},buttonText:{color:"white"}},_=function(){var e=Object(n.useState)({username:"",password:"",email:"",authCode:"",stage:0,error:""}),t=Object(p.a)(e,2),a=t[0],c=t[1],o=function(e){c(Object(s.a)(Object(s.a)({},a),{},Object(S.a)({},e.target.name,e.target.value)))},l=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,n=a.password,r=a.email,e.prev=1,e.next=4,E.a.signUp({username:t,password:n,attributes:{email:r}});case 4:c(Object(s.a)(Object(s.a)({},a),{},{stage:1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),c(Object(s.a)(Object(s.a)({},a),{},{error:e.t0})),console.log("error signing up...",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,n=a.authCode,e.prev=1,e.next=4,E.a.confirmSignUp(t,n);case 4:c(Object(s.a)(Object(s.a)({},a),{},{stage:2,error:{name:"Empty"}})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),c(Object(s.a)(Object(s.a)({},a),{},{error:e.t0})),console.log("error confirming signing up...",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,0===a.stage&&r.a.createElement("div",{style:T.formContainer},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),a.error&&r.a.createElement(k,{errorMessage:a.error}),r.a.createElement(y.a,{onChange:o,placeholder:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b",name:"username",value:a.username,style:T.Input}),r.a.createElement(y.a,{onChange:o,placeholder:"\u041f\u0430\u0440\u043e\u043b\u0430",name:"password",value:a.password,type:"password",style:T.Input}),r.a.createElement(y.a,{onChange:o,placeholder:"Email",name:"email",value:a.email,style:T.Input}),r.a.createElement("div",{style:T.button,onClick:l},r.a.createElement("span",{style:T.buttonText},"Sign Up"))),1===a.stage&&r.a.createElement("div",{style:T.formContainer},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),a.error&&r.a.createElement(k,{errorMessage:a.error}),r.a.createElement(y.a,{onChange:o,placeholder:"Authorization Code",name:"authCode",value:a.authCode,style:T.Input}),r.a.createElement("div",{style:T.button,onClick:u},r.a.createElement("span",{style:T.buttonText},"Confirm Sign Up"))),2===a.stage&&r.a.createElement(r.a.Fragment,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f\u0442\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430 ,",r.a.createElement("a",{href:"/app/login"},"\u0412\u0445\u043e\u0434")))},N={Input:{height:40,margin:"10px 0px",padding:7,width:"100%"},formContainer:{display:"flex",flexDirection:"column"},button:{backgroundColor:"rebeccapurple",padding:"15px 7px",cursor:"pointer",textAlign:"center",marginBottom:10},buttonText:{color:"white"}},F=function(){var e=Object(n.useState)({username:"",error:"",validation:"",password:"",confirmPassword:"",stage:0}),t=Object(p.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.forgotPassword(a.username);case 3:c(Object(s.a)(Object(s.a)({},a),{},{stage:1})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),c(Object(s.a)(Object(s.a)({},a),{},{error:e.t0}));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),l=function(){c(Object(s.a)(Object(s.a)({},a),{},{stage:2}))},u=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.password!==a.confirmPassword){e.next=7;break}return e.next=4,E.a.forgotPasswordSubmit(a.username,a.validation,a.password);case 4:c(Object(s.a)(Object(s.a)({},a),{},{stage:3,error:{name:"Empty"}})),e.next=8;break;case 7:c(Object(s.a)(Object(s.a)({},a),{},{error:{name:"PasswordNotMatch",message:"Passwords don't Match"}}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c(Object(s.a)(Object(s.a)({},a),{},{error:e.t0}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){c(Object(s.a)(Object(s.a)({},a),{},Object(S.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0417\u0430\u0431\u0432\u0430\u0432\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430"),a.error&&r.a.createElement(k,{errorMessage:a.error}),0===a.stage&&r.a.createElement("div",{style:N.formContainer},r.a.createElement(y.a,{onChange:d,placeholder:"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b",name:"username",value:a.username,style:N.Input}),r.a.createElement("div",{role:"button",tabIndex:0,style:N.button,onClick:o,onKeyDown:o},r.a.createElement("span",{style:N.buttonText},"\u041d\u0430\u0442\u0430\u0442\u044a\u043a"))),1===a.stage&&r.a.createElement("div",null,r.a.createElement("div",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u0438 \u0438\u043c\u0435\u0439\u043b\u0430 \u0441\u0438 \u0437\u0430 \u043f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u0449 \u043a\u043e\u0434"),r.a.createElement(y.a,{onChange:d,placeholder:"\u043f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u0449 \u043a\u043e\u0434",name:"validation",value:a.validation,style:N.Input}),r.a.createElement("div",{role:"button",tabIndex:0,style:N.button,onClick:l,onKeyDown:l},r.a.createElement("span",{style:N.buttonText},"\u041e\u041a"))),2===a.stage&&r.a.createElement("div",null,r.a.createElement(y.a,{type:"password",onChange:d,placeholder:"new password",name:"password",value:a.password,style:N.Input}),r.a.createElement("br",null),r.a.createElement(y.a,{type:"password",onChange:d,placeholder:"confirm password",name:"confirmPassword",value:a.confirmPassword,style:N.Input}),r.a.createElement("div",{role:"button",tabIndex:0,href:"/",style:N.button,onClick:u,onKeyDown:u},r.a.createElement("span",{style:N.buttonText},"\u0421\u043c\u0435\u043d\u0438"))),3===a.stage&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),r.a.createElement(I,{type:"full"})))},P=a(104),A=a.n(P),J={api:"https://47ruk9bopl.execute-api.eu-central-1.amazonaws.com/dev"},U=function(){var e=Object(m.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(J.api).concat(t),{headers:{test:"emperror",accesstoken:a,"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){e(n)})));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(m.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(J.api,"/db"),JSON.stringify(t),{headers:{test:"emperror",accesstoken:a,"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){e(n)})));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),z=function(e){var t=e.user,a=Object(n.useState)({Items:[]}),c=Object(p.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({collection:"newsbg",limit:1,descending:!1,fields:["title","image","vreme"]},t.token);case 2:a=e.sent,l(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.token]),r.a.createElement("div",null,r.a.createElement("h1",null,"\u041d\u0430\u0447\u0430\u043b\u043e"),r.a.createElement("h1",null,t.sub),r.a.createElement("hr",null),JSON.stringify(o))},q=a(171),D=function(){var e=Object(q.a)(),t=e.register,a=e.errors,n=e.handleSubmit;return r.a.createElement("form",{onSubmit:n((function(e){return console.log(e)}))},r.a.createElement("input",{id:"first-name",className:"ant-input",name:"firstName",placeholder:"first name",ref:t({required:!0,maxLength:20})}),a.firstName&&"First name is required",r.a.createElement("input",{className:"ant-input",placeholder:"email",name:"email",ref:t({required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i})}),a.email&&"not valid email adress",r.a.createElement("button",{type:"submit",className:"ant-btn ant-btn-primary ant-btn-lg"},"Add Record"))};function R(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(p.a)(a,2),c=r[0],o=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}h.a.configure({aws_project_region:"eu-west-1",aws_cognito_identity_pool_id:"eu-west-1:3f5f916d-2252-487f-99c0-7aa69115f973",aws_cognito_region:"eu-west-1",aws_user_pools_id:"eu-west-1_T6v05tjzh",aws_user_pools_web_client_id:"eqlretnsetkj5p57bqtandjqa",oauth:{}});var B=function(){var e=R("selected","home"),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(l.useRecoilState)(x),u=Object(p.a)(o,2),h=u[0],v=u[1],y=Object(n.useState)(!1),O=Object(p.a)(y,2),j=O[0],k=O[1],C=R("theme",!1),S=Object(p.a)(C,2),T=S[0],N=S[1],P=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("user",JSON.stringify({sub:null})),e.next=3,E.a.signOut();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{sub:null};v(e),k(!0)}),[v,j]),Object(n.useEffect)((function(){if(h.sub){var e=setInterval(Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/heartbeat",h.token);case 2:if("TokenExpiredError"!==e.sent.data.name){e.next=17;break}return e.prev=4,e.next=7,E.a.currentAuthenticatedUser();case 7:return t=e.sent,e.next=10,E.a.currentSession();case 10:a=e.sent,t.refreshSession(a.refreshToken,(function(e,t){var a=Object(s.a)(Object(s.a)({},h),{},{token:t.accessToken.jwtToken});v(h),localStorage.setItem("user",JSON.stringify(a))})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log("Unable to refresh Token",e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])}))),1e3);return function(){return clearInterval(e)}}}),[h,v]),r.a.createElement(d.a,null,j&&r.a.createElement("div",{className:T?"dark":"white"},r.a.createElement(b.a,{onClick:function(e){c(e.key)},selectedKeys:[a],mode:"horizontal"},r.a.createElement(b.a.Item,{key:"home"},r.a.createElement(d.b,{to:"/"},"\u041d\u0430\u0447\u0430\u043b\u043e")),null===h.sub?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Item,{key:"login"},r.a.createElement(d.b,{to:"/app/login"},"\u0412\u0445\u043e\u0434")),r.a.createElement(b.a.Item,{key:"signup"},r.a.createElement(d.b,{to:"/app/signup"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement(b.a.Item,{key:"forgot"},r.a.createElement(d.b,{to:"/app/forgot"},"\u0417\u0430\u0431\u0440\u0430\u0432\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Item,{key:"form"},r.a.createElement(d.b,{to:"/app/form"},"\u0414\u043e\u0431\u0430\u0432\u0438")),r.a.createElement(b.a.Item,{key:"logout"},r.a.createElement("a",{href:"/",onClick:function(){return E.a.signOut().then(P())}},"\u0418\u0437\u0445\u043e\u0434")))),r.a.createElement("div",{className:"switcher"},r.a.createElement(g.a,{defaultChecked:T,onChange:function(){return N(!T)}})),r.a.createElement(w,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/app/login"},null===h.sub?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),r.a.createElement(I,{type:"full"})):r.a.createElement(f.a,{to:"/"})),r.a.createElement(f.b,{path:"/app/forgot"},r.a.createElement(F,null)),r.a.createElement(f.b,{path:"/app/signup"},r.a.createElement(_,null)),r.a.createElement(f.b,{path:"/app/form"},r.a.createElement(D,{user:h})),r.a.createElement(f.b,{path:"/"},r.a.createElement(z,{user:h}))))))};o.a.render(r.a.createElement(l.RecoilRoot,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.ef9db674.chunk.js.map