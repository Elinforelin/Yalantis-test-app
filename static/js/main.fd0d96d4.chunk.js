(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,r){e.exports={page:"usersPage_page__3fwa8"}},12:function(e,t,r){e.exports={wrap:"emploeesBirthday_wrap__1TafP"}},19:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(10),s=r.n(a),i=(r(19),r(11)),u=r.n(i),o=r(6),l=r(7),d=r(4),j=r.n(d),b=r(0),h=function(e){var t=e.user,r=e.selectedArray,n=e.handlerRemove,c=e.handlerAdd,a=r.some((function(e){return e.id===t.id}));return Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:a?j.a.active:"",children:Object(b.jsxs)("h4",{children:[t.firstName," ",t.lastName]})}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"false",onChange:n,name:t.id,checked:a?"":"checked"}),"not active"]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"true",onChange:c,name:t.id,checked:a}),"active"]})]},t.id)},m=["users"],f=function(e){var t=e.users,r=Object(l.a)(e,m);return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)(h,Object(o.a)({user:e},r),e.id)}))})},p=["sortedUser"],O=function(e){var t=e.sortedUser,r=Object(l.a)(e,p);return Object(b.jsxs)("div",{className:j.a.wrap,children:[Object(b.jsx)("h2",{children:"Emploees"}),t.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.letter.toUpperCase()}),e.users.length?Object(b.jsx)(f,Object(o.a)({users:e.users},r)):"No emploees"]},e.letter)}))]})},v=function(e){var t=e.user;return Object(b.jsxs)("li",{children:[t.firstName," ",t.lastName," - ",new Date(t.dob).toDateString()]})},x=r(12),g=r.n(x),y=function(e){return Object(b.jsxs)("div",{className:g.a.wrap,children:[Object(b.jsx)("h2",{children:"Emploees Birthday"}),e.selectedArray.length?e.reorderedMonths.map((function(e){var t=e.month,r=e.users;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),r.length?Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)(v,{user:e},e.id)}))}):Object(b.jsx)("div",{children:"No emploees "})]},t)})):"Emploees List is empty"]})},N=r(14),w=r(3),A=r(9),_=r.n(A),S=r(13),M=function(){var e=Object(S.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],E=[{number:1,title:"January"},{number:2,title:"February"},{number:3,title:"March"},{number:4,title:"April"},{number:5,title:"May"},{number:6,title:"June"},{number:7,title:"July"},{number:8,title:"August"},{number:9,title:"September"},{number:10,title:"October"},{number:11,title:"November"},{number:12,title:"December"}];var J=function(){var e=function(){var e=Object(n.useState)(!0),t=Object(w.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),s=Object(w.a)(a,2),i=s[0],u=s[1],o=Object(n.useState)([]),l=Object(w.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)([]),h=Object(w.a)(b,2),m=h[0],f=h[1];Object(n.useEffect)((function(){var e=localStorage.getItem("selectedArray");e&&f(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("selectedArray",JSON.stringify(m))}),[m]);var p=Object(n.useMemo)((function(){var e=(new Date).getMonth();return E.slice(e).concat(E.slice(0,e)).map((function(e){var t=e.number;return{month:e.title,users:m.sort((function(e,t){return t.lastName<e.lastName?1:-1})).filter((function(e){return new Date(e.dob).getMonth()+1===t}))}}))}),[m]);return Object(n.useEffect)((function(){M().then((function(e){u(e),c(!1);var t=k.map((function(t){return{letter:t,users:e.filter((function(e){return e.firstName.charAt(0).toLowerCase()===t}))}}));j(t)}))}),[]),{loading:r,sortedUser:d,selectedArray:m,handlerAdd:function(e){var t=i.find((function(t){return t.id===e.target.name}));f([].concat(Object(N.a)(m),[t]))},handlerRemove:function(e){var t=i.find((function(t){return t.id===e.target.name}));f((function(e){return e.filter((function(e){return e.id!==t.id}))}))},reorderedMonths:p}}(),t=e.loading,r=e.sortedUser,c=e.selectedArray,a=e.handlerAdd,s=e.handlerRemove,i=e.reorderedMonths;return t?Object(b.jsx)("div",{children:"Loading..."}):Object(b.jsxs)("div",{className:u.a.page,children:[Object(b.jsx)(O,{sortedUser:r,selectedArray:c,handlerAdd:a,handlerRemove:s}),Object(b.jsx)(y,{selectedArray:c,reorderedMonths:i})]})};var U=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(J,{})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))},4:function(e,t,r){e.exports={wrap:"emploees_wrap__1gipq",active:"emploees_active__3hNdj"}}},[[22,1,2]]]);
//# sourceMappingURL=main.fd0d96d4.chunk.js.map