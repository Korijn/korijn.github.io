(function(e){function t(t){for(var d,l,r=t[0],s=t[1],a=t[2],u=0,p=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&p.push(c[l][0]),c[l]=0;for(d in s)Object.prototype.hasOwnProperty.call(s,d)&&(e[d]=s[d]);i&&i(t);while(p.length)p.shift()();return n.push.apply(n,a||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],d=!0,r=1;r<o.length;r++){var s=o[r];0!==c[s]&&(d=!1)}d&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var d={},c={app:0},n=[];function l(t){if(d[t])return d[t].exports;var o=d[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=d,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)l.d(o,d,function(t){return e[t]}.bind(null,d));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var i=s;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var d=o("7a23");const c={class:"app"},n=Object(d["createVNode"])("h1",null,"todos",-1),l={class:"column"},r={class:"row justify-center"},s={class:"row"},a={key:0,class:"row"},i={class:"third text-left"},u={class:"third justify-between row"},p={class:"third text-right"};function b(e,t,o,b,O,j){return Object(d["openBlock"])(),Object(d["createBlock"])("div",c,[n,Object(d["createVNode"])("div",l,[Object(d["createVNode"])("div",r,[Object(d["createVNode"])("button",{disabled:!b.canUndo,onClick:t[1]||(t[1]=(...e)=>b.undo&&b.undo(...e))},"⭯",8,["disabled"]),Object(d["createVNode"])("button",{disabled:!b.canRedo,onClick:t[2]||(t[2]=(...e)=>b.redo&&b.redo(...e))},"⭮",8,["disabled"])]),Object(d["createVNode"])("div",s,[Object(d["createVNode"])("div",null,[Object(d["createVNode"])("button",{onClick:t[3]||(t[3]=(...e)=>b.toggleAllTodos&&b.toggleAllTodos(...e))},Object(d["toDisplayString"])(b.filteredTodos.length>0&&!e.activeItems.length?"☑":"☐"),1)]),Object(d["withDirectives"])(Object(d["createVNode"])("input",{class:"grow",placeholder:"What needs to be done?","onUpdate:modelValue":t[4]||(t[4]=e=>b.inputTodo=e),onKeyup:t[5]||(t[5]=Object(d["withKeys"])((...e)=>b.addTodo&&b.addTodo(...e),["enter"]))},null,544),[[d["vModelText"],b.inputTodo]])]),(Object(d["openBlock"])(!0),Object(d["createBlock"])(d["Fragment"],null,Object(d["renderList"])(b.filteredTodos,e=>(Object(d["openBlock"])(),Object(d["createBlock"])("div",{class:"row",key:e.id},[Object(d["createVNode"])("div",null,[Object(d["createVNode"])("button",{onClick:t=>b.toggleTodo(e.id)},Object(d["toDisplayString"])("done"===e.status?"☑":"☐"),9,["onClick"])]),Object(d["createVNode"])("div",{class:["grow text-left",{strikethrough:"done"===e.status}]},Object(d["toDisplayString"])(e.text),3),Object(d["createVNode"])("div",null,[Object(d["createVNode"])("button",{onClick:t=>b.deleteTodo(e.id)}," 🗑 ",8,["onClick"])])]))),128)),b.state.todos.length>0?(Object(d["openBlock"])(),Object(d["createBlock"])("div",a,[Object(d["createVNode"])("div",i,[e.activeItems.length>0?(Object(d["openBlock"])(),Object(d["createBlock"])(d["Fragment"],{key:0},[Object(d["createTextVNode"])(Object(d["toDisplayString"])(e.activeItems.length)+" items left ",1)],64)):Object(d["createCommentVNode"])("",!0)]),Object(d["createVNode"])("div",u,[Object(d["createVNode"])("div",null,[Object(d["createVNode"])("button",{onClick:t[6]||(t[6]=e=>b.setFilter(void 0)),class:{active:void 0===b.todoFilter}}," All ",2)]),Object(d["createVNode"])("div",null,[Object(d["createVNode"])("button",{onClick:t[7]||(t[7]=e=>b.setFilter("open")),class:{active:"open"===b.todoFilter}}," Active ",2)]),Object(d["createVNode"])("div",null,[Object(d["createVNode"])("button",{onClick:t[8]||(t[8]=e=>b.setFilter("done")),class:{active:"done"===b.todoFilter}}," Completed ",2)])]),Object(d["createVNode"])("div",p,[e.completedItems.length>0?(Object(d["openBlock"])(),Object(d["createBlock"])("button",{key:0,onClick:t[9]||(t[9]=(...e)=>b.clearCompletedTodos&&b.clearCompletedTodos(...e))}," Clear completed ")):Object(d["createCommentVNode"])("",!0)])])):Object(d["createCommentVNode"])("",!0)])])}var O=o("e1a4"),j=o.n(O);const f={todos:[]};let v=0;const g={addTodo(e,{text:t}){e.todos.push({text:t,status:"open",id:v}),v+=1},deleteTodo(e,{id:t}){const o=e.todos.findIndex(e=>e.id===t);-1!==o&&e.todos.splice(o,1)},toggleTodo(e,{id:t}){const o=e.todos.findIndex(e=>e.id===t);if(-1!==o){const t=e.todos[o];t.status="open"===t.status?"done":"open"}},toggleAllTodos(e){let t="open";for(let o=0;o<e.todos.length;o+=1)if("open"===e.todos[o].status){t="done";break}for(let o=0;o<e.todos.length;o+=1)e.todos[o].status=t},clearCompletedTodos(e){const t=e.todos.filter(e=>"done"===e.status);for(let o=0;o<t.length;o+=1){const d=e.todos.indexOf(t[o]);e.todos.splice(d,1)}}},m=j()(f,g),h=Object(d["computed"])(()=>m.state.todos.filter(e=>"done"!==e.status)),T=Object(d["computed"])(()=>m.state.todos.filter(e=>"done"===e.status));var k={...m,computed:{activeItems:h,completedItems:T}},y={name:"App",setup(){const e=Object(d["ref"])(""),t=Object(d["ref"])(),o=Object(d["computed"])(()=>t.value?k.state.todos.filter(e=>e.status===t.value):k.state.todos);return{todoFilter:t,inputTodo:e,filteredTodos:o,state:k.state,undo:k.undo,canUndo:k.canUndo,redo:k.redo,canRedo:k.canRedo,...k.computed,addTodo(){k.addTodo({text:e.value}),e.value=""},deleteTodo(e){k.deleteTodo({id:e})},toggleTodo(e){k.toggleTodo({id:e})},toggleAllTodos:k.toggleAllTodos,clearCompletedTodos:k.clearCompletedTodos,setFilter(e){t.value=e}}}};o("620f");y.render=b;var V=y;Object(d["createApp"])(V).mount("#app")},"620f":function(e,t,o){"use strict";o("d315")},d315:function(e,t,o){}});
//# sourceMappingURL=app.03daf71f.js.map