(this["webpackJsonpadmin-ui"]=this["webpackJsonpadmin-ui"]||[]).push([[0],[,,,function(e,t,n){e.exports={"table-container":"Table_table-container__1uQNj",pagination:"Table_pagination__ydFcy",pageBtn:"Table_pageBtn__38jsH",btn:"Table_btn__2OnL_",btns:"Table_btns__2W1sm","btn-delete":"Table_btn-delete__ZETSS"}},,function(e,t,n){e.exports={btn:"TableBody_btn__1_DvX","btn-edit":"TableBody_btn-edit__3qKdt","btn-delete":"TableBody_btn-delete__noAGH"}},,,function(e,t,n){e.exports={"search-container":"SearchBar_search-container__1fq06","search-bar":"SearchBar_search-bar__1dJ2J"}},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),r=n.n(i),s=(n(15),n(2)),l=n(0),b=function(e){var t=e.editData,n=e.setTableData,a=e.tableData,i=e.setEditData,r=Object(c.useState)(t[0].name),b=Object(s.a)(r,2),o=b[0],u=b[1],j=Object(c.useState)(t[0].email),d=Object(s.a)(j,2),h=d[0],O=d[1];return Object(l.jsxs)("form",{type:"submit",children:[Object(l.jsx)("label",{children:"Name "}),Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){e.preventDefault(),u(e.target.value)}}),Object(l.jsx)("label",{children:"Email "}),Object(l.jsx)("input",{type:"text",value:h,onChange:function(e){e.preventDefault(),O(e.target.value)}}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault();var c=t[0];c.name=o,c.email=h;var r=a.map((function(e){return e.id!==c.id?e:c}));n(r),i([]),u(""),O("")},children:"Save"})]})},o=n(8),u=n.n(o),j=function(e){var t=e.searchFilter;return Object(l.jsx)("div",{className:u.a["search-container"],children:Object(l.jsx)("input",{className:u.a["search-bar"],type:"text",placeholder:"Type name to search",onChange:function(e){t(e.target.value)}})})},d=n(3),h=n.n(d),O=n(10),f=n(5),x=n.n(f),m=function(e){var t=e.setSelectedRows,n=e.deleteSelectedRow,c=e.selectedRows,i=e.editRowHandler;return Object(l.jsx)(a.a.Fragment,{children:e.tableData.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",onChange:function(){return n=e.name,void t((function(e){return[].concat(Object(O.a)(e),[n])}));var n},checked:c.includes(e.name)})}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.role}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{className:"".concat(x.a.btn," ").concat(x.a["btn-edit"]),onClick:function(){return i(e.id)},children:"Edit"}),Object(l.jsx)("button",{className:"".concat(x.a.btn," ").concat(x.a["btn-delete"]),onClick:function(){return n(e.id)},children:"Delete"})]})]},e.id)}))})},p=10,v=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),o=Object(s.a)(r,2),u=o[0],d=o[1],O=Object(c.useState)([]),f=Object(s.a)(O,2),x=f[0],v=f[1],_=Object(c.useState)(1),g=Object(s.a)(_,2),S=g[0],C=g[1],D=Object(c.useState)([]),y=Object(s.a)(D,2),N=y[0],T=y[1],k=Object(c.useState)(!1),w=Object(s.a)(k,2),B=w[0],F=w[1],R=Object(c.useState)([]),E=Object(s.a)(R,2),L=E[0],H=E[1];Object(c.useEffect)((function(){fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((function(e){return e.json()})).then((function(e){d(e),i(e),v(e.slice(0,p))}))}),[]);var J=u?Math.ceil(u.length/p):0,A=Array.from({length:J},(function(e,t){return t+1}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{searchFilter:function(e){console.log("start");var t=a.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));d(t);var n=10*(S-1);v(t.slice(n,n+p)),T([]),F(!1)}}),L.length>0?Object(l.jsx)(b,{editData:L,setTableData:d,tableData:u,setEditData:H}):"",Object(l.jsxs)("div",{className:h.a["table-container"],children:[Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:Object(l.jsx)("input",{type:"checkbox",onChange:function(){return e=x,void(B?(T([]),F(!1)):(T(e.map((function(e){return e.name}))),F(!0)));var e},checked:B})}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Email"}),Object(l.jsx)("th",{children:"Role"}),Object(l.jsx)("th",{children:"Actions"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsx)(m,{tableData:x,deleteSelectedRow:function(e){var t=u.filter((function(t){return e!==t.id}));d(t);var n=10*(S-1);v(t.slice(n,n+p))},setSelectedRows:T,selectedRows:N,editRowHandler:function(e){var t=u.filter((function(t){return t.id===e}));H(t)}})})]}),Object(l.jsxs)("div",{className:h.a.pagination,children:[Object(l.jsx)("button",{className:h.a["btn-delete"],onClick:function(){var e=u.filter((function(e){return!N.includes(e.name)}));d(e);var t=10*(S-1);v(e.slice(t,t+p)),T([]),F(!1)},children:"Delete Selected"}),Object(l.jsxs)("span",{className:h.a.pageBtn,children:[Object(l.jsx)("button",{className:h.a.btn,onClick:function(){if(S>1){C((function(e){return e-1}));var e=10*(S-2);v(u.slice(e,e+p)),N([])}},disabled:1===+S,children:"<<"}),A.map((function(e){return Object(l.jsx)("button",{className:"".concat(e===S?h.a.btns:h.a.btn),onClick:function(){return function(e){C(e);var t=10*(e-1);v(u.slice(t,t+p))}(e)},children:e},e)})),Object(l.jsx)("button",{className:h.a.btn,onClick:function(){if(S<J){C((function(e){return e+1}));var e=10*S;v(u.slice(e,e+p)),N([])}},disabled:+S===+J,children:">>"})]})]})]})]})};n(17);var _=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(v,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.681d0487.chunk.js.map