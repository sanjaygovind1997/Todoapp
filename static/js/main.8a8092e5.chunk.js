(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(3),s=n.n(c),r=n(6),o=n(4),u=n(5),l=n(8),d=n(7),j=(n(13),n(0)),h=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).handleChange=function(t){i.setState({input:t.target.value})},i.addItem=function(t){t.preventDefault();var e=i.state.input;i.setState({items:[].concat(Object(r.a)(i.state.items),[e]),input:""})},i.deleteItem=function(t){i.setState({items:i.state.items.filter((function(e,n){return t!==n}))})},i.editItem=function(t,e){var n=i.state.items;n.splice(t,1,e.target.value),i.setState({items:n})},i.state={input:"",items:[]},i}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.input,i=e.items;return Object(j.jsxs)("div",{className:"todo-container",children:[Object(j.jsxs)("form",{onSubmit:this.addItem,className:"input-section",children:[Object(j.jsx)("h1",{children:"Todo App"}),Object(j.jsx)("input",{value:n,onChange:this.handleChange,type:"text",placeholder:"Enter Todo..."})]}),Object(j.jsx)("ul",{children:i.map((function(e,n){return Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{value:e,onChange:function(e){return t.editItem(n,e)}}),Object(j.jsx)("i",{onClick:function(){return t.deleteItem(n)},className:"fas fa-trash-alt"})]},n)}))})]})}}]),n}(i.Component);function p(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})}var m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),c(t),s(t)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.8a8092e5.chunk.js.map