(this.webpackJsonpdummy2=this.webpackJsonpdummy2||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=(n(23),n(14)),l=n(15),u=n(17),m=n(16),s=n(2),h=n.n(s),p=n(3);n(41);var f=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),i=Object(p.a)(c,2),l=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"title",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"file",id:"image",name:"image",onChange:function(e){return u(e.target.files[0])}}),r.a.createElement("button",{onClick:function(){return function(){var e=new FormData;e.append("title",n),e.append("image",l,l.name),h.a.post("/",e).then((function(e){return console.log(e)}))}()}},"click me"))},g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={things:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:8000/api/").then((function(t){return e.setState({things:t.data})}))}},{key:"render",value:function(){var e=this.state.things.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h1",{key:t},e.title),r.a.createElement("img",{key:t,alt:"w",src:e.image}))}));return r.a.createElement("div",null,e,r.a.createElement(f,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.460cbcd3.chunk.js.map