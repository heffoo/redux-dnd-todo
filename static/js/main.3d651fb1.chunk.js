(this["webpackJsonpredux-dnd-todo-"]=this["webpackJsonpredux-dnd-todo-"]||[]).push([[0],{80:function(t,s,e){},83:function(t,s,e){},86:function(t,s,e){},87:function(t,s,e){},89:function(t,s,e){"use strict";e.r(s);var n=e(0),A=e(9),c=e.n(A),a=e(20),i=e(19),k="ADD_TASK",r="DEL_TASK",o="TOGGLE_TASK",l="EDIT_TASK",X="SET_TASKS",u="SET_FAVORITE",d="ADD_NEW_LIST",j="SET_ACTIVE_LIST",b=e(123),p=(e(80),e(8)),O=e(52),f=e(51),v=JSON.parse(localStorage.getItem("data"))||[];var m=e(25),g={activeList:null};var h=e(59),x=e(60),N=Object(m.combineReducers)({list:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case d:return[].concat(Object(O.a)(t),[{title:s.listTitle,id:Object(f.v4)(),tasks:[]}]);case k:return t.map((function(t){return t.id===s.listId&&t.tasks?Object(p.a)(Object(p.a)({},t),{},{tasks:[].concat(Object(O.a)(t.tasks),[{title:s.text,completed:!1,id:Object(f.v4)(),order:t.tasks.length+1,isFavorite:!1}])}):t}));case r:return t.map((function(t){return t.id===s.listId&&t.tasks?Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!==s.id}))}):t}));case o:return t.map((function(t){return t.id===s.listId&&t.tasks?Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===s.id?Object(p.a)(Object(p.a)({},t),{},{completed:!t.completed}):t}))}):t}));case l:return t.map((function(t){return t.id===s.listId&&t.tasks?Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===s.id?Object(p.a)(Object(p.a)({},t),{},{title:s.value}):t}))}):t}));case X:return t.map((function(t){return t.id===s.listId&&t.tasks?Object(p.a)(Object(p.a)({},t),{},{tasks:s.tasks}):t}));case u:return t.map((function(t){return t.id===s.listId&&t.tasks?Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===s.id?Object(p.a)(Object(p.a)({},t),{},{isFavorite:!t.isFavorite}):t}))}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case j:return Object(p.a)(Object(p.a)({},t),{},{activeList:s.listId});default:return t}}}),F=Object(m.createStore)(N,Object(x.composeWithDevTools)(Object(m.applyMiddleware)(h.a))),E=i.c,T=e(124),W=e(63),w=e.n(W),y=e(62),I=e.n(y),S=e(61),B=e.n(S),R=(e(83),e(4)),Y=null,C=function(t){var s=t.todo,e=t.todos,A=t.isFiltered,c=Object(n.useState)(!1),k=Object(a.a)(c,2),d=k[0],j=k[1],b=Object(i.b)(),O=E((function(t){return t.app.activeList})),f=function(t){b(function(t,s){return{type:r,id:t,listId:s}}(t,O))},v=function(t){b(function(t,s){return{type:o,id:t,listId:s}}(t,O))},m=function(t){b(function(t,s){return{type:u,id:t,listId:s}}(t,O))},g=function(t){var s=document.getElementsByClassName("editTaskInput")[0].value;s.length&&(b(function(t,s,e){return{type:l,id:t,value:s,listId:e}}(t,s,O)),j(!d))},h=function(t){t.target.style.transition="0.3s",t.target.style.background="white"},x=function(t,s){t.preventDefault();var n,A=e.map((function(t){var e,n;return t.id===s.id?Object(p.a)(Object(p.a)({},t),{},{order:null===(n=Y)||void 0===n?void 0:n.order}):t.id===(null===(e=Y)||void 0===e?void 0:e.id)?Object(p.a)(Object(p.a)({},t),{},{order:s.order}):t}));b((n=s.id,{type:X,id:n,listId:O,tasks:A})),t.target.style.background="white"};return Object(R.jsxs)("li",{className:"one-task",draggable:!A,onDragStart:function(t){return function(t,s){Y=s}(0,s)},onDragLeave:function(t){return h(t)},onDragEnd:function(t){return h(t)},onDragOver:function(t){return function(t){t.preventDefault(),t.target.style.background="lightgray"}(t)},onDrop:function(t){return x(t,s)},children:[Object(R.jsxs)("div",{className:"task-title",children:[Object(R.jsx)("button",{className:"like-button",children:Object(R.jsx)("img",{className:"button-star",alt:"img",src:s.isFavorite?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAsFQTFRFAAAA+skX+ckW+soX+skY+8kW+8oW+skW+8kX+cgW+8gX+8oX+cga+scX+sEX+Mce+cgb9ssX/8MX/8kR+MkZ+8gk/8wX/c0W+MgW+8oT+soW+sgX+soY+sgY+9EZ+88b+8kZ+ckX/MkX+8kY99AZ/c4X+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+soX+skX+skX+skX+skX+skW+sgW+skX+skX+skX+skX+sgY+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+coX+8kY+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+skX+cgY+skX+skX+skX+skX+skX+skX+skX////eQ4pAwAAAOl0Uk5TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUfnMf2Nd8/nAe03luHdLQHHdrG850/WkazHFnGMn8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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA9pJREFUaIHtmU1oFEkYhp/JjCYmqAdDokQ9rFHx55AcXJRVvEQ8BMGjgmIU/DuJB83Fo3p2s8IeFBEjssKKglfBH/AH1NO6YU+bBZVdQSVGjUmcdHv43tnpGXs60z3VjoIPFNP5qur93u6urq7qQLpkVVKjIU1xYLPKN8vvwJV6m0hKGzCu0pZWkjSH0A6gUWVHinlS4wngqzyps5fYrAU84E8VTzHnpDWE9gAZ4JxKRrFvghbgDTABtKtMKNZSR19V04eN++D0eUWxvjr4ic0dzGxvINar2J26OIrBMmAKeAbkAvEc8FR1y10mdP0Q75bmBSAfiOcVa1Cbr5Ic8By7yp0h9Z2qe07p3flq2IKN81sRbW6pzZYv4Cc2VzFzOyPa7FSba66SZmK2zwFNwBxgtn7nAK3AIPAe6ADGKvRvxoZQC3YyL4FRlbf6Haf0+ZnWUBbYCywIGCqU2WXHs4CZVD7xyxHmUd1lYD/wW0i9D0wCHwInNFp2XCj/Amdy2IN1F7utP1RI7GNX5l2E8FvgTIT5AqekE3WhmoG5VL5QfwNb5f1/5gE3ZHYKOIbNHO0STHVrWEZWOdvl4Zg8+fI4r1LHHPAztnrMA/1pO62CfsyLh3mragrejY1DD7iEXY0vzSzl9uQl9gtwHTZj+MAjYLFLd9OwWDl9eViXVKgDeCCh/4ANLtxNwwbl8pW7o1bBRuA8disnsCkwLfYrh6ecjS7FD2NztAf8ir0PXDFDmp5yHHaoXUIP9vb0gdu4+VzSJi0feAVscqAZyRLgDyX8B5hfg9Z8afjSXFKjt6ppBT5iS4NapthmaXyUZmySbmhWYC+U+0SvfaZjTBo5YGUSgaQn0KPfGwn7Bylo9ES2csxdbNz+6EBrDTb73HOgVRVzsanuNW4WeFlpTUo7FkmG0EZs3r5J2XK2jAywD3s5RW2cpqQ1Q9qpM4ANn4MRbZbKVOHj7k3FKnFQ7QYceYxkCBuzYYaywBFsa+kDf6n4ih0lfDm8VJpDKfgtoUOJhkPquoCHFLeFJ7H9c5OOJymubLtC+g9Lu+bFWxS7ZOJsINYEHMcWYT7wGOgO6dutOl9tT6hvgbOq2+XcdYBBJdmmv3/CbruPvZT6id4x5dRmTH2GgPWq26bYoHPXIoNtLvLYPvUXivvU29h30WpZRvEj1xRwWpp55Yj7uacqVmFjdJTiAmwEOECy6bhBfUcoLgxHlWN1zW5DOERxWvSA68AiB7oLpeUF9A850P2M6xJ/AWxPQX+7tH3lcspM7FZfJOGyt0palWMEtzs+Oin9j0va9BL+if4733HNJz1iBdU9GQFIAAAAAElFTkSuQmCC",onClick:function(){return m(s.id)}})}),Object(R.jsx)(T.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:s.completed,onChange:function(){return v(s.id)}}),d?Object(R.jsx)("input",{type:"text",className:"editTaskInput",defaultValue:s.title.trim(),onKeyPress:function(t){return"Enter"===t.key&&g(s.id)}}):Object(R.jsx)("p",{children:s.title})]}),Object(R.jsxs)("div",{className:"task-buttons",children:[d?Object(R.jsx)(I.a,{className:"task-button",onClick:function(){return g(s.id)}}):Object(R.jsx)(B.a,{className:"task-button",onClick:function(){return j(!d)}}),Object(R.jsx)(w.a,{className:"task-button",onClick:function(){return f(s.id)}})]})]})},D=(e(86),function(t){var s=t.setTaskState,e=t.setFiltered,n=function(t){s(t),e("allTasks"!==t)};return Object(R.jsxs)("div",{className:"upper-buttons",children:[Object(R.jsx)("button",{className:"upper-button",onClick:function(){return n("allTasks")},children:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(R.jsx)("button",{className:"upper-button",onClick:function(){return n("notCompleted")},children:"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"}),Object(R.jsx)("button",{className:"upper-button",onClick:function(){return n("Completed")},children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"}),Object(R.jsx)("button",{className:"upper-button",onClick:function(){return n("Favorite")},children:"\u0412\u0430\u0436\u043d\u043e\u0435"})]})}),H=(e(87),function(){var t=E((function(t){return t.list})),s=Object(i.b)(),e=Object(n.useState)(""),A=Object(a.a)(e,2),c=A[0],k=A[1],r=Object(n.useState)(!1),o=Object(a.a)(r,2),l=o[0],X=o[1],u=function(){X(!l),s({type:d,listTitle:c})};return Object(R.jsx)("div",{className:"side-panel",children:Object(R.jsxs)("div",{className:"buttons",children:[t.map((function(t){return Object(R.jsx)("div",{children:Object(R.jsx)("button",{className:"side-button-list",onClick:function(){return s((e=t.id,function(t,s){t({type:"SET_ACTIVE_LIST",listId:e})}));var e},children:t.title})},t.id)})),l?Object(R.jsx)("form",{onSubmit:function(){return u()},children:Object(R.jsx)("input",{onChange:function(t){return k(t.target.value.trim())}})}):Object(R.jsx)("button",{className:"side-add-list-button",onClick:function(){return X(!l)},children:"+"})]})})});var V=function(){var t,s,e=E((function(t){return t.list})),A=E((function(t){return t.app.activeList}));null===A&&(A=null===(s=e[0])||void 0===s?void 0:s.id);var c=(null===(t=e.find((function(t){return A===t.id})))||void 0===t?void 0:t.tasks)||[],r=Object(n.useState)(""),o=Object(a.a)(r,2),l=o[0],X=o[1],u=Object(n.useState)("allTasks"),d=Object(a.a)(u,2),j=d[0],p=d[1],O=Object(n.useState)(!1),f=Object(a.a)(O,2),v=f[0],m=f[1],g=Object(i.b)();Object(n.useEffect)((function(){localStorage.setItem("data",JSON.stringify(e))}),[e]);var h=c.filter((function(t){return!t.completed})),x=c.filter((function(t){return t.completed})),N=c.filter((function(t){return t.isFavorite})),F="allTasks"===j?c:"notCompleted"===j?h:"Favorite"===j?N:"Completed"===j&&x;return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(D,{todos:c,setFiltered:m,setTaskState:p}),Object(R.jsx)(H,{},A),Object(R.jsxs)("div",{className:"main-container",children:[Object(R.jsx)("form",{onSubmit:function(t){t.preventDefault(),g({type:k,listId:A,text:l}),X("")},children:Object(R.jsx)(b.a,{type:"text",className:"addtask-input",id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",value:l,onChange:function(t){return X(t.target.value.trim())}})}),Object(R.jsx)("div",{className:"modals",id:"modals"}),Object(R.jsx)("ul",{className:"todo-list",children:Object(R.jsx)("div",{className:"block-scroll-wrapper",children:Object(R.jsx)("div",{className:"block-scroll",children:F.sort((function(t,s){return t.order<s.order?1:-1})).map((function(t,s,e){return Object(R.jsx)(C,{index:s,isFiltered:v,todo:t,todos:e},t.id)}))})})})]})]})};c.a.render(Object(R.jsx)(i.a,{store:F,children:Object(R.jsx)(V,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.3d651fb1.chunk.js.map