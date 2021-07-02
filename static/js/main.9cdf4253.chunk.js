(this["webpackJsonpredux-dnd-todo"]=this["webpackJsonpredux-dnd-todo"]||[]).push([[0],{85:function(t,s,e){},87:function(t,s,e){},88:function(t,s,e){},92:function(t,s,e){},93:function(t,s,e){},95:function(t,s,e){"use strict";e.r(s);var n=e(0),a=e.n(n),i=e(10),c=e.n(i),o=e(40),r=e(21),l=e(16),d=(e(85),e(4)),k=function(t){var s=t.setTaskState,e=t.setFiltered,n=t.taskState,a=function(t){s(t),e("allTasks"!==t)};return Object(d.jsxs)("div",{className:"upper-buttons",children:[Object(d.jsx)("button",{className:"allTasks"===n?"active-upper-button":"upper-button",onClick:function(){return a("allTasks")},children:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(d.jsx)("button",{className:"notCompleted"===n?"active-upper-button":"upper-button",onClick:function(){return a("notCompleted")},children:"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"}),Object(d.jsx)("button",{className:"Completed"===n?"active-upper-button":"upper-button",onClick:function(){return a("Completed")},children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"}),Object(d.jsx)("button",{className:"Favorite"===n?"active-upper-button":"upper-button",onClick:function(){return a("Favorite")},children:"\u0412\u0430\u0436\u043d\u043e\u0435"})]})},A=e(129),u=(e(87),e(59)),X=e(60),b=e(68),j=e(67),O=function(t){Object(b.a)(e,t);var s=Object(j.a)(e);function e(t){var n;return Object(u.a)(this,e),(n=s.call(this,t)).el=document.createElement("div"),n.modalRoot=document.getElementById("modals"),n}return Object(X.a)(e,[{key:"componentDidMount",value:function(){this.modalRoot.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.modalRoot.removeChild(this.el)}},{key:"render",value:function(){return c.a.createPortal(this.props.children,this.el)}}]),e}(a.a.Component),p=e(43),v=e.n(p),f=e(8),m=e(33),h=Object(m.b)({name:"activeList",initialState:{activeList:null},reducers:{setActiveList:function(t,s){return Object(f.a)(Object(f.a)({},t),{},{activeList:s.payload.listId})},deleteList:function(t,s){return Object(f.a)(Object(f.a)({},t),{},{activeList:null})}}}),g=h.actions,x=g.setActiveList,N=g.deleteList,y=h.reducer,F=(e(88),function(t){var s=t.setModalOpen,e=t.activeList,n=Object(l.b)(),a=function(){s(!1)};return Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsx)("p",{className:"modal-text",children:"are you sure you want to delete list? "}),Object(d.jsx)(v.a,{className:"close-modal-button task-button",onClick:a}),Object(d.jsxs)("div",{className:"modal-buttons",children:[Object(d.jsx)(A.a,{variant:"contained",color:"secondary",onClick:function(){return n(N({listId:e})),void a()},children:"Yes"}),Object(d.jsx)(A.a,{variant:"contained",onClick:a,children:"No"})]})]})}),w=e(18),W=e(53),T=JSON.parse(localStorage.getItem("data")||"[]"),E=Object(m.b)({name:"todos",initialState:T,reducers:{addNewList:function(t,s){return[].concat(Object(o.a)(t),[{title:s.payload.listTitle,id:Object(W.v4)(),tasks:[]}])},deleteList:function(t,s){return t.filter((function(t){return t.id!==s.payload.listId}))},addTask:function(t,s){return t.map((function(t){return t.id===s.payload.listId&&t.tasks?Object(f.a)(Object(f.a)({},t),{},{tasks:[].concat(Object(o.a)(t.tasks),[{title:s.payload.text,completed:!1,id:Object(W.v4)(),order:t.tasks.length+1,isFavorite:!1}])}):t}))},delTask:function(t,s){return t.map((function(t){return t.id===s.payload.listId&&t.tasks?Object(f.a)(Object(f.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!==s.payload.id}))}):t}))},toggleTask:function(t,s){return t.map((function(t){return t.id===s.payload.listId&&t.tasks?Object(f.a)(Object(f.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===s.payload.id?Object(f.a)(Object(f.a)({},t),{},{completed:!t.completed}):t}))}):t}))},setFavorite:function(t,s){return t.map((function(t){return t.id===s.payload.listId&&t.tasks?Object(f.a)(Object(f.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===s.payload.id?Object(f.a)(Object(f.a)({},t),{},{isFavorite:!t.isFavorite}):t}))}):t}))},setTasks:function(t,s){return t.map((function(t){return t.id===s.payload.listId&&t.tasks?Object(f.a)(Object(f.a)({},t),{},{tasks:s.payload.tasks}):t}))},editTask:function(t,s){return t.map((function(t){return t.id===s.payload.listId&&t.tasks?Object(f.a)(Object(f.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===s.payload.id?Object(f.a)(Object(f.a)({},t),{},{title:s.payload.value}):t}))}):t}))}}}),C=E.actions,I=C.addNewList,R=(C.deleteList,C.addTask),B=C.delTask,L=C.toggleTask,Y=C.setFavorite,H=C.setTasks,S=C.editTask,D=E.reducer,Z=Object(w.c)({list:y,todos:D}),V=Object(m.a)({reducer:Z}),G=l.c,M=function(t){var s=t.activeList,e=Object(n.useState)(!1),a=Object(r.a)(e,2),i=a[0],c=a[1],o=Object(n.useState)(""),k=Object(r.a)(o,2),u=k[0],X=k[1],b=Object(n.useState)(!1),j=Object(r.a)(b,2),p=j[0],v=j[1],f=G((function(t){return t.todos})),m=Object(l.b)();return Object(d.jsxs)("div",{className:"side-panel",children:[Object(d.jsx)("div",{className:"side-block-scroll-wrapper",children:Object(d.jsx)("div",{className:"side-block-scroll",children:Object(d.jsx)("div",{className:"side-lists",children:f.map((function(t){return Object(d.jsx)("div",{children:Object(d.jsx)("button",{id:t.id,className:s!==t.id?"side-button-list":"side-button-list button-active",onClick:function(){return m(x({listId:t.id}))},children:t.title})},t.id)}))})})}),Object(d.jsx)("div",{className:"side-add-button-container",children:i?Object(d.jsx)("form",{onSubmit:function(){return c(!i),void(u.length?m(I({listTitle:u})):alert("the field cannot be empty"))},children:Object(d.jsx)("input",{className:"new-list-input",onChange:function(t){return X(t.target.value.trim())}})}):Object(d.jsx)("button",{className:"side-add-list-button",onClick:function(){return c(!i)},children:"+"})}),s&&Object(d.jsx)(A.a,{className:"side-delete-list-button",variant:"contained",color:"secondary",onClick:function(){return v(!0)},children:"delete list"}),p&&Object(d.jsx)(O,{children:Object(d.jsx)(F,{setModalOpen:v,activeList:s})})]})},U=e(131),Q=e(66),J=e.n(Q),z=e(65),K=e.n(z),P=(e(92),null),q=function(t){var s=t.todo,e=t.todos,i=t.isFiltered,c=t.activeList,o=Object(n.useState)(!1),k=Object(r.a)(o,2),A=k[0],u=k[1],X=Object(l.b)(),b=a.a.useRef(null),j=function(t){var s,e;(null===(s=b.current)||void 0===s?void 0:s.value.length)&&(X(S({id:t,value:null===(e=b.current)||void 0===e?void 0:e.value,listId:c})),u(!A))},O=function(t){t.currentTarget.style.transition="0.3s",t.currentTarget.style.background="white"};return Object(d.jsxs)("li",{className:"one-task",draggable:!i,onDragStart:function(){return function(t){P=t}(s)},onDragLeave:function(t){return O(t)},onDragEnd:function(t){return O(t)},onDragOver:function(t){return function(t){t.preventDefault(),t.currentTarget.style.background="lightgray"}(t)},onDrop:function(t){return function(t,s){t.preventDefault();var n=e.map((function(t){var e,n,a;return t.id===s.id?Object(f.a)(Object(f.a)({},t),{},{order:null!==(n=null===(a=P)||void 0===a?void 0:a.order)&&void 0!==n?n:0}):t.id===(null===(e=P)||void 0===e?void 0:e.id)?Object(f.a)(Object(f.a)({},t),{},{order:s.order}):t}));X(H({id:s.id,tasks:n,listId:c})),t.currentTarget.style.background="white"}(t,s)},children:[Object(d.jsxs)("div",{className:"task-title",children:[Object(d.jsx)("button",{className:"like-button",children:Object(d.jsx)("img",{className:"button-star",alt:"img",src:s.isFavorite?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAsFQTFRFAAAA+skX+ckW+soX+skY+8kW+8oW+skW+8kX+cgW+8gX+8oX+cga+scX+sEX+Mce+cgb9ssX/8MX/8kR+MkZ+8gk/8wX/c0W+MgW+8oT+soW+sgX+soY+sgY+9EZ+88b+8kZ+ckX/MkX+8kY99AZ/c4X+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+soX+skX+skX+skX+skX+skW+sgW+skX+skX+skX+skX+sgY+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+coX+8kY+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+cgY+skX+skX+skX+skX+skX+skX+skX////eQ4pAwAAAOl0Uk5TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUfnMf2Nd8/nAe03luHdLQHHdrG850/WkazHFnGMn8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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA9pJREFUaIHtmU1oFEkYhp/JjCYmqAdDokQ9rFHx55AcXJRVvEQ8BMGjgmIU/DuJB83Fo3p2s8IeFBEjssKKglfBH/AH1NO6YU+bBZVdQSVGjUmcdHv43tnpGXs60z3VjoIPFNP5qur93u6urq7qQLpkVVKjIU1xYLPKN8vvwJV6m0hKGzCu0pZWkjSH0A6gUWVHinlS4wngqzyps5fYrAU84E8VTzHnpDWE9gAZ4JxKRrFvghbgDTABtKtMKNZSR19V04eN++D0eUWxvjr4ic0dzGxvINar2J26OIrBMmAKeAbkAvEc8FR1y10mdP0Q75bmBSAfiOcVa1Cbr5Ic8By7yp0h9Z2qe07p3flq2IKN81sRbW6pzZYv4Cc2VzFzOyPa7FSba66SZmK2zwFNwBxgtn7nAK3AIPAe6ADGKvRvxoZQC3YyL4FRlbf6Haf0+ZnWUBbYCywIGCqU2WXHs4CZVD7xyxHmUd1lYD/wW0i9D0wCHwInNFp2XCj/Amdy2IN1F7utP1RI7GNX5l2E8FvgTIT5AqekE3WhmoG5VL5QfwNb5f1/5gE3ZHYKOIbNHO0STHVrWEZWOdvl4Zg8+fI4r1LHHPAztnrMA/1pO62CfsyLh3mragrejY1DD7iEXY0vzSzl9uQl9gtwHTZj+MAjYLFLd9OwWDl9eViXVKgDeCCh/4ANLtxNwwbl8pW7o1bBRuA8disnsCkwLfYrh6ecjS7FD2NztAf8ir0PXDFDmp5yHHaoXUIP9vb0gdu4+VzSJi0feAVscqAZyRLgDyX8B5hfg9Z8afjSXFKjt6ppBT5iS4NapthmaXyUZmySbmhWYC+U+0SvfaZjTBo5YGUSgaQn0KPfGwn7Bylo9ES2csxdbNz+6EBrDTb73HOgVRVzsanuNW4WeFlpTUo7FkmG0EZs3r5J2XK2jAywD3s5RW2cpqQ1Q9qpM4ANn4MRbZbKVOHj7k3FKnFQ7QYceYxkCBuzYYaywBFsa+kDf6n4ih0lfDm8VJpDKfgtoUOJhkPquoCHFLeFJ7H9c5OOJymubLtC+g9Lu+bFWxS7ZOJsINYEHMcWYT7wGOgO6dutOl9tT6hvgbOq2+XcdYBBJdmmv3/CbruPvZT6id4x5dRmTH2GgPWq26bYoHPXIoNtLvLYPvUXivvU29h30WpZRvEj1xRwWpp55Yj7uacqVmFjdJTiAmwEOECy6bhBfUcoLgxHlWN1zW5DOERxWvSA68AiB7oLpeUF9A850P2M6xJ/AWxPQX+7tH3lcspM7FZfJOGyt0palWMEtzs+Oin9j0va9BL+if4733HNJz1iBdU9GQFIAAAAAElFTkSuQmCC",onClick:function(){return t=s.id,void X(Y({id:t,listId:c}));var t}})}),Object(d.jsx)(U.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:s.completed,onChange:function(){return t=s.id,void X(L({id:t,listId:c}));var t}}),A?Object(d.jsx)("input",{type:"text",className:"editTaskInput",defaultValue:s.title.trim(),ref:b,onKeyPress:function(t){return"Enter"===t.key&&j(s.id)}}):Object(d.jsx)("p",{onDoubleClick:function(){return u(!A)},children:s.title})]}),Object(d.jsxs)("div",{className:"task-buttons",children:[A?Object(d.jsx)(J.a,{className:"task-button",onClick:function(){return j(s.id)}}):Object(d.jsx)(K.a,{className:"task-button",onClick:function(){return u(!A)}}),Object(d.jsx)(v.a,{className:"task-button",onClick:function(){return t=s.id,void X(B({id:t,listId:c}));var t}})]})]})},$=e(130);e(93);var _=function(){var t,s,e=G((function(t){return t.todos})),a=G((function(t){return t.list.activeList}));null===a&&(a=null===(t=e[0])||void 0===t?void 0:t.id);var i=(null===(s=e.find((function(t){return a===t.id})))||void 0===s?void 0:s.tasks)||[],c=Object(n.useState)(""),A=Object(r.a)(c,2),u=A[0],X=A[1],b=Object(n.useState)("allTasks"),j=Object(r.a)(b,2),O=j[0],p=j[1],v=Object(n.useState)(!1),f=Object(r.a)(v,2),m=f[0],h=f[1],g=i.filter((function(t){return!t.completed})),x=i.filter((function(t){return t.completed})),N=i.filter((function(t){return t.isFavorite})),y=Object(l.b)();Object(n.useEffect)((function(){localStorage.setItem("data",JSON.stringify(e))}),[e]);var F="allTasks"===O?i:"notCompleted"===O?g:"Favorite"===O?N:"Completed"===O&&x,w=Object(o.a)(F);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(k,{setFiltered:h,setTaskState:p,taskState:O}),Object(d.jsx)(M,{activeList:a},a),Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)("form",{onSubmit:function(t){return function(t){t.preventDefault(),u.length?y(R({text:u,listId:a})):alert("the field cannot be empty"),X("")}(t)},children:Object(d.jsx)($.a,{type:"text",className:"addtask-input",id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",value:u,onChange:function(t){return X(t.target.value.trim())}})}),Object(d.jsx)("div",{className:"modals",id:"modals"}),Object(d.jsx)("ul",{className:"todo-list",children:Object(d.jsx)("div",{className:"block-scroll-wrapper",children:Object(d.jsx)("div",{className:"block-scroll",children:w.sort((function(t,s){return t.order<s.order?1:-1})).map((function(t,s,e){return Object(d.jsx)(q,{index:s,isFiltered:m,todo:t,todos:e,activeList:a},t.id)}))})})})]})]})};c.a.render(Object(d.jsx)(l.a,{store:V,children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.9cdf4253.chunk.js.map