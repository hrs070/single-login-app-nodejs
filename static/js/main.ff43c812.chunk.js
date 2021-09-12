(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),s=n(27),i=n(10),o=function(){var e=Object(a.useRef)(!1),t=Object(a.useRef)(!1),n=Object(a.useRef)(null),r=Object(a.useState)(!0),c=Object(i.a)(r,2),o=c[0],u=c[1],l=function(){var e=window.localStorage.getItem("checkTab");return e?JSON.parse(e):[]},d=function(e){window.localStorage.setItem("checkTab",JSON.stringify(e))},j=function a(){var r=l();if(e.current)r.length<=1||(t.current?r[r.length-1]:r[0])===n.current?u(!0):u(!1);else{0===r.length?u(!0):u(!1);var c=[].concat(Object(s.a)(r),[n.current]);d(c)}setTimeout((function(){a()}),100)},b=function(){for(var e=l(),t=0,a=e.length;t<a;t++)if(e[t]===n.current){e.splice(t,1);break}d(e)};return Object(a.useEffect)((function(){return window.addEventListener("beforeunload",b),window.addEventListener("unload",b),t.current=!0,n.current=Date.now().toString(),j(),e.current=!0,function(){window.removeEventListener("beforeunload",b),window.removeEventListener("unload",b)}}),[]),o},u=n(1);function l(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{children:"Single Login App"})})}var d=n(23),j=n.n(d),b=n(3),f=n(4),m=n.n(f),p=n(11),g=n(25),O=n.n(g).a.create({baseURL:"https://single-login-app-nodejs.herokuapp.com/users"}),v=function(e){return O.post("/signin",e)},h=function(e){return O.post("/signout",e)},x=function(e){return O.post("/signoutothers",e)},N=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:a=t.sent,n({type:"SIGNIN",payload:a}),n({type:"SIGN_IN_STATE",payload:!0}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()};function S(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.authReducer}));console.log(t);var n=Object(a.useRef)(),r=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useState)(),o=Object(i.a)(s,2),l=o[0],d=o[1];return Object(a.useEffect)((function(){var e,a;200===(null===(e=t)||void 0===e?void 0:e.status)?(t.data.newUser?(n.current=t.data.newUser.name,r.current=t.data.newUser.email,c.current=t.data.newUser.token):t.data.existingUser&&(n.current=t.data.existingUser.name,r.current=t.data.existingUser.email,c.current=t.data.existingUser.token),d(!0)):201===(null===(a=t)||void 0===a?void 0:a.status)&&(t.data.existingUser&&(n.current=t.data.existingUser.name,r.current=t.data.existingUser.email,c.current=t.data.existingUser.token),d(!1))}),[t]),Object(u.jsx)("div",{className:"user",children:l?Object(u.jsxs)("div",{className:"authenticated-user",children:[Object(u.jsx)("p",{className:"login-success",children:"Signed In"}),Object(u.jsxs)("div",{className:"user-details",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"small-text",children:"Name"}),Object(u.jsx)("p",{className:"user-name",children:n.current})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"small-text",children:"Email"}),Object(u.jsx)("p",{className:"user-name",children:r.current})]})]}),Object(u.jsx)("button",{className:"button button-reject",onClick:function(){e(function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:n({type:"LOGOUT",payload:[]}),n({type:"SIGN_OUT_STATE",payload:!1});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({email:r.current}))},children:"Log Out"})]}):Object(u.jsxs)("div",{className:"authenticated-user",children:[Object(u.jsx)("p",{className:"login-success",children:"Can not Sign In"}),Object(u.jsx)("div",{className:"user-details",children:Object(u.jsxs)("p",{className:"confirm-signout-others-msg",children:[n.current,", you are logged in somewhere else. Log out and Sign In here instead ?"]})}),Object(u.jsx)("button",{className:"button button-reject",onClick:function(){t={name:n.current,email:r.current,token:c.current},e(function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:a=t.sent,n({type:"SIGNIN",payload:a}),n({type:"SIGN_IN_STATE",payload:!0}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},children:"Log Out"})]})})}function w(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.signinStateReducer}));return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("singleLoginSession")),n={};if(t){if(200===(null===t||void 0===t?void 0:t.status))if(t.data.newUser){var a=t.data.newUser;n={name:a.name,email:a.email,token:a.token}}else if(t.data.existingUser){var r=t.data.existingUser;n={name:r.name,email:r.email,token:r.token}}e(N(n))}}),[]),Object(u.jsx)("div",{className:"main",children:t?Object(u.jsx)(S,{}):Object(u.jsx)(j.a,{clientId:"580735389692-2mne57mpso945clqafp28j9g2828e0ir.apps.googleusercontent.com",render:function(e){return Object(u.jsx)("button",{className:"button googleButton",onClick:e.onClick,disabled:e.disabled,children:"Sign In with Google"})},onSuccess:function(t){var n=null===t||void 0===t?void 0:t.tokenId,a=null===t||void 0===t?void 0:t.profileObj,r=a.name,c=a.email;e(N({name:r,email:c,token:n}))},onFailure:function(e){console.log("Google Sign In failed"),console.log(e)},cookiePolicy:"single_host_origin"})})}function k(){return Object(u.jsxs)("div",{className:"confirm-is-main",children:[Object(u.jsx)("p",{className:"confirm-is-main-para",children:"This app can only be used in one Tab at a time. Would you like to use the current tab instead ?"}),Object(u.jsx)("div",{className:"confirm-is-main-buttondiv",children:Object(u.jsx)("button",{className:"button button-confirm",onClick:function(){window.location.reload()},children:"Yes"})})]})}function y(){var e=o();return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"container",children:e?Object(u.jsx)(w,{}):Object(u.jsx)(k,{})})]})}var I=n(5),U=n(7);var T=Object(I.b)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN":return localStorage.setItem("singleLoginSession",JSON.stringify(Object(U.a)({},null===t||void 0===t?void 0:t.payload))),t.payload;case"LOGOUT":return localStorage.removeItem("singleLoginSession"),t.payload;default:return e}},signinStateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN_STATE":case"SIGN_OUT_STATE":return t.payload;default:return e}}}),E=n(26),L=Object(I.d)(T,Object(I.c)(Object(I.a)(E.a)));c.a.render(Object(u.jsx)(b.a,{store:L,children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ff43c812.chunk.js.map