(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{52:function(e,t,n){e.exports=n(71)},57:function(e,t,n){},62:function(e,t){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),r=n.n(i),c=(n(57),n(93)),l=n(97),m=n(11),s=n(18),d=n(95),u=n(32),p=n(12),f={itemList:[],active:null,newToDoId:0},h=function(e){return function(t,n){t({type:"ACTIVATE_TODO",payload:e})}},v=n(22),b={commentsArray:[],commentId:0},g=n(99),E=n(98),x=n(43),w=n.n(x),D=Object(s.b)((function(e){return{comments:e.comments.commentsArray,active:e.toDoList.active,newToDoId:e.toDoList.newToDoId}}),(function(e){return{activateToDo:function(t){e(h(t))},rmToDo:function(t,n){e(function(e,t){return function(n,a){n({type:"DELETE_TODO",payload:{list:e,id:t}})}}(t)),e(function(e){return function(t,n){t({type:"FILTER_COMMENTS",payload:e})}}(n))}}}))((function(e){var t=e.activateToDo,n=e.id,i=e.title,r=e.active,l=e.comments,s=Object(c.a)({toDoItemWrap:{justifyContent:"space-between",overflow:"hidden",display:"flex",width:"95%",marginLeft:"30px",paddingBottom:"10px",paddingTop:"10px"},todoListItem:{display:"flex",justifyContent:"space-between",cursor:"pointer","&.active":{display:"flex","&:before":{content:'" "',position:"static",width:"4px",height:"auto",background:"green"},"& $toDoItemWrap":{borderBottom:"1px solid lightgrey"}}},deleteBtn:{alignSelf:"center"},commentText:{width:"85%",display:"flex",justifyItems:"center",alignSelf:"center",overflow:"hidden"},innerTexts:{textOverflow:"ellipsis",maxWidth:"94%",overflow:"hidden",whiteSpace:"nowrap"},commentCounter:{marginLeft:"5px",alignSelf:"flex-start",marginRight:"10px",background:"blue",color:"white",borderRadius:"15px",padding:"1px 8px 1px 8px"},customWidth:{maxWidth:"none"},itemText:{display:"grid"},dots:{color:"blue",fontSize:"2rem"},title:{overflow:"hidden",textOverflow:"ellipsis"}}),d=Object(a.useRef)(null),u=Object(a.useState)(0),f=Object(v.a)(u,2),h=f[0],b=f[1];Object(a.useEffect)((function(){var e=d.current.scrollWidth>d.current.offsetWidth;b(e)}),[]);var x=s(),D=l.filter((function(e){return n===e.id})).length;return o.a.createElement("li",{className:w()(x.todoListItem,{active:n===r}),onClick:function(e){return function(n){t(e)}}(n)},o.a.createElement("div",{className:x.toDoItemWrap},o.a.createElement("div",{className:x.commentText},o.a.createElement("span",{className:x.innerTexts,ref:d},h?o.a.createElement(g.a,{title:i,className:x.customWidth},o.a.createElement("span",{className:x.itemText},o.a.createElement("span",{className:x.title},i),o.a.createElement("span",{className:x.dots},"...")," ")):o.a.createElement("span",null,i)),0!==D?o.a.createElement("span",{className:x.commentCounter},D):null),o.a.createElement(E.a,{variant:"outlined",color:"secondary",className:x.deleteBtn,onClick:function(t){return function(n){var a=e.toDoList,o=e.rmToDo,i=e.activateToDo;n.stopPropagation();var r=a.filter((function(e){return e.id!==t})),c=r.map((function(e,t){return Object(p.a)({},e,{ownId:t})}));o(c,t),r.length>0&&i(c[c.length-1].id)}}(n)},o.a.createElement(m.Translate,{value:"removeToDoItem"}))))})),O=function(e){var t=e.toDoList,n=Object(c.a)({toDoListWrapper:{maxHeight:"80%",overflowY:"scroll",overflowX:"hidden"},todoList:{listStyle:"none",margin:"0",paddingTop:"30px",padding:"0"}})();return o.a.createElement("div",{className:n.toDoListWrapper},o.a.createElement("ul",{className:n.todoList},t&&0!==t.length?t.map((function(e){return o.a.createElement(D,{key:e.id,id:e.id,title:e.title})})):null))},T=n(100),y=function(e){var t=e.addToDo,n=e.setIndex,i=e.index,r=Object(a.useState)(""),l=Object(v.a)(r,2),s=l[0],d=l[1],u=Object(a.useRef)(0),p=Object(c.a)({inputField:{paddingTop:"20px",paddingBottom:"10px",display:"flex",justifyContent:"space-between"},textField:{width:"77%"},input:{padding:"9.5px 14px!important"},btn:{backgroundColor:"#6AC5FE!important"}})();return o.a.createElement("div",null,o.a.createElement("div",{className:p.inputField},o.a.createElement(T.a,{label:"Type name here",className:p.textField,classes:{input:p.input},onChange:function(e){d(e.target.value)},ref:u}),o.a.createElement(E.a,{variant:"contained",color:"primary",size:"medium",onClick:function(e){if(""!==s){var a=new Date;t(s,i,a),n(),d(""),u.current.firstChild.value=""}},className:p.btn},o.a.createElement(m.Translate,{value:"addNew"}))))},j=Object(s.b)((function(e){return{toDoList:e.toDoList.itemList,comments:e.comments.commentsArray,index:e.toDoList.newToDoId,active:e.toDoList.active,newToDoId:e.toDoList.newToDoId}}),(function(e){return{addToDo:function(t,n,a){e(function(e,t,n){return function(a,o){a({type:"ADD_TODO",payload:{title:e,id:t,ownId:t,comments:[],createAt:n}})}}(t,n,a)),e(h(n))},setIndex:function(){e((function(e){e({type:"GET_INDEX"})}))}}}))((function(e){var t=e.toDoList,n=e.index,a=e.addToDo,i=e.setIndex,r=e.comments,l=e.active,s=e.rmToDo,u=e.activateToDo,p=e.newToDoId,f=Object(c.a)({itemList:{padding:"20px 20px 0 20px",height:"70vh",display:"flex",flexDirection:"column"},list:{display:"flex",flexDirection:"column",overflowY:"scroll",height:"70vh",padding:"30px 30px 30px 0"},toDoListHeader:{paddingLeft:"30px"},"@media(max-width:768px)":{list:{minHeight:"100vh"}}})();return o.a.createElement("div",{className:f.itemList},o.a.createElement(d.a,{className:f.list},o.a.createElement("div",{className:f.toDoListHeader},o.a.createElement("h2",null,o.a.createElement(m.Translate,{value:"toDoItems"})),o.a.createElement(y,{index:n,addToDo:a,setIndex:i})),o.a.createElement(O,{toDoList:t,comments:r,active:l,activateToDo:u,rmToDo:s,newToDoId:p})))})),L=n(101),I=n(96),N=function(e){var t=e.body,n=Object(c.a)({square:{color:"#ff",backgroundColor:I.a[500]},commentItem:{display:"flex",margin:"20px 0 0 0",paddingBottom:"20px",borderBottom:"1px solid lightgrey"},commentTextArea:{paddingLeft:"20px",wordWrap:"break-word",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},dots:{color:"blue",fontSize:"2rem"},wrapper:{display:"grid"},body:{overflow:"hidden",textOverflow:"ellipsis"}})(),i=Object(a.useRef)(null),r=Object(a.useState)(0),l=Object(v.a)(r,2),m=l[0],s=l[1];return Object(a.useEffect)((function(){var e=i.current.scrollWidth>i.current.offsetWidth;s(e)}),[]),o.a.createElement("li",{className:n.commentItem},o.a.createElement(L.a,{variant:"square",className:n.square}),o.a.createElement("span",{className:n.commentTextArea,ref:i},m?o.a.createElement(g.a,{title:t},o.a.createElement("span",{className:n.wrapper},o.a.createElement("span",{className:n.body},t),o.a.createElement("span",{className:n.dots},"...")," ")):o.a.createElement("span",null,t)))},C=function(e){var t=e.comments,n=e.active;return o.a.createElement("ul",null,void 0!==t?t.map((function(e){return e.id===n?o.a.createElement(N,{key:e.ownId,body:e.body}):null})):null)},S=Object(s.b)((function(e){return{comments:e.comments.commentsArray,itemList:e.toDoList.itemList,active:e.toDoList.active,ownId:e.comments.commentId}}),(function(e){return{addComment:function(t){e(function(e){return function(t,n){t({type:"ADD_COMMENT",payload:e})}}(t))}}}))((function(e){var t=e.ownId,n=e.comments,i=e.active,r=e.itemList,l=Object(a.useRef)(0),s=Object(a.useState)(""),u=Object(v.a)(s,2),p=u[0],f=u[1],h=function(n){null!==p&&0!==p.length&&(e.addComment({id:i,ownId:t,body:p}),l.current.firstChild.value="",f(""))},b=Object(c.a)({commentBlock:{padding:"20px 20px 0 20px",height:"100%"},comments:{padding:"30px",height:"82vh",display:"flex",flexDirection:"column"},commentsWrapper:{maxHeight:"75%",overflowY:"scroll",overflowX:"hidden"},commentFieldWrapper:{marginTop:"auto"},commentField:{display:"flex",justifyContent:"space-between",marginTop:"10px"},textField:{width:"77%"},btnWithLine:{alignSelf:"flex-end",marginTop:"20px",display:"flex"},lineForBtn:{alignSelf:"center",width:"80%",height:"1px",background:"lightgrey"},btn:{width:"20%",backgroundColor:"#6AC5FE!important"}})(),g=r.filter((function(e){return e.id===i}));return o.a.createElement("div",{className:b.commentBlock},o.a.createElement(d.a,{className:b.comments},o.a.createElement("h2",null,o.a.createElement(m.Translate,{value:"comments"}),null!==i?o.a.createElement("span",null,"#",g[0].ownId+1):null),null!==i?o.a.createElement("div",{className:b.commentsWrapper},o.a.createElement(C,{comments:n,active:i,addComment:h})):null,null!==i?o.a.createElement("div",{className:b.commentFieldWrapper},o.a.createElement("div",{className:b.commentField},o.a.createElement(L.a,{sizes:"medium",variant:"square"}),o.a.createElement(T.a,{multiline:!0,id:"outlined-basic",variant:"outlined",className:b.textField,size:"small",onChange:function(e){f(e.target.value)},ref:l,rowsMax:3})),o.a.createElement("div",{className:b.btnWithLine},o.a.createElement("div",{className:b.lineForBtn}),o.a.createElement(E.a,{variant:"contained",color:"primary",size:"medium",className:b.btn,onClick:h},o.a.createElement(m.Translate,{value:"addNew"})))):null))})),W=Object(c.a)({table:{height:"100%"},"@global":{body:{},"::-webkit-scrollbar":{display:"none"},h2:{fontSize:"40px",fontWeight:"100"}}}),A=function(){var e=W();return o.a.createElement("div",{className:e.table},o.a.createElement(l.a,{container:!0,justify:"center"},o.a.createElement(l.a,{item:!0,xs:12,md:6,style:{minHeight:600}},o.a.createElement(j,null)),o.a.createElement(l.a,{item:!0,xs:12,md:6},o.a.createElement(S,null))))},k=n(49),_=[{value:"en",label:"English"},{value:"ru",label:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}],F={option:function(e,t){return Object(p.a)({},e,{background:"none"})},menu:function(e,t){return Object(p.a)({},e,{backgroundColor:"#F7AE4C",color:"white"})},control:function(e,t){return Object(p.a)({},e,{background:"#22A8FE",border:"none"})},valueContainer:function(e,t){return Object(p.a)({},e,{justifyContent:"center"})},placeholder:function(e,t){return Object(p.a)({},e,{color:"white"})},singleValue:function(e,t){return Object(p.a)({},e,{color:"white"})}},B=Object(c.a)({basicSingle:{width:"30%",alignSelf:"center",marginBottom:"40%"},sidebar:{background:"#316A82",color:"white !important",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},h2:{padding:"40px 0 0 40px"},"@media(max-width: 768px)":{basicSingle:{marginBottom:"30%"},sidebar:{minHeight:"100vh"}}}),M=function(e){var t=e.changeLocale,n=B();return o.a.createElement("div",{className:n.sidebar},o.a.createElement("h2",{className:n.h2},o.a.createElement(m.Translate,{value:"toDo"})),o.a.createElement(k.a,{defaultValue:"en",className:n.basicSingle,classNamePrefix:"select",options:_,name:"color",styles:F,isSearchable:!1,components:{DropdownIndicator:function(){return null},IndicatorSeparator:function(){return null}},onChange:function(e){t(e.value)},placeholder:"Language"}))},R=Object(c.a)({mainWrapper:{height:" 100vh"}});var z=Object(s.b)(null,(function(e){return{changeLocale:function(t){e(Object(m.setLocale)(t))}}}))((function(e){var t=R(),n=e.changeLocale;return o.a.createElement(l.a,{display:"flex",container:!0,className:t.mainWrapper},o.a.createElement(l.a,{item:!0,xs:12,md:3,height:1},o.a.createElement(M,{changeLocale:n})),o.a.createElement(l.a,{item:!0,xs:12,md:9},o.a.createElement(A,null)))})),H=n(25),X=n(47),V=n(48),q="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,P=Object(V.createLogger)({}),Y=[X.a,P],G=Object(H.c)({i18n:m.i18nReducer,toDoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_TODO":return a.ownId=e.itemList.length,Object(p.a)({},e,{itemList:[].concat(Object(u.a)(e.itemList),[a])});case"GET_INDEX":return Object(p.a)({},e,{newToDoId:e.newToDoId+1});case"ACTIVATE_TODO":return Object(p.a)({},e,{active:a});case"DELETE_TODO":return Object(p.a)({},e,{itemList:a.list,active:null});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_COMMENT":return Object(p.a)({},e,{commentsArray:[].concat(Object(u.a)(e.commentsArray),[a]),commentId:e.commentId+1});case"FILTER_COMMENTS":var o=e.commentsArray.filter((function(e){return e.id!==a}));return Object(p.a)({},e,{commentsArray:o});default:return e}}}),J=Object(H.e)(G,q(H.a.apply(void 0,Y)));Object(m.syncTranslationWithStore)(J),J.dispatch(Object(m.loadTranslations)({en:{toDo:"TODO",languages:"Languages",toDoItems:"Items",removeToDoItem:"Delete",addNew:"Add new",comments:"Comments"},ru:{toDo:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b",languages:"\u042f\u0437\u044b\u043a\u0438",toDoItems:"\u0414\u0435\u043b\u0430",removeToDoItem:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",addNew:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",comments:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}})),J.dispatch(Object(m.setLocale)("en"));var $=J;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(s.a,{store:$},o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.8dbbcc0a.chunk.js.map