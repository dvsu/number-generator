(this["webpackJsonpnumber-generator"]=this["webpackJsonpnumber-generator"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),i=n.n(c),s=(n(13),n(14),n(2)),u=n(3),o=n(4),l=n(6),b=n(5),m=(n(15),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Ball",children:this.props.number})}}]),n}(r.Component),j=(n(17),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={numbers:Array.from({length:r.props.maxBalls})},r.handleClick=r.handleClick.bind(Object(o.a)(r)),r}return Object(u.a)(n,[{key:"generateNumbers",value:function(){var e=this;this.setState((function(t){return{numbers:t.numbers.map((function(t){return Math.floor(Math.random()*e.props.maxNumber)+1}))}}))}},{key:"handleClick",value:function(e){this.generateNumbers()}},{key:"render",value:function(){return Object(m.jsxs)("section",{className:"NumberGenerator",children:[Object(m.jsx)("h1",{className:"NumberGenerator-title",children:this.props.title}),Object(m.jsx)("div",{children:this.state.numbers.map((function(e){return Object(m.jsx)(h,{number:e})}))}),Object(m.jsx)("button",{className:"NumberGenerator-button",onClick:this.handleClick,children:"Generate numbers"})]})}}]),n}(r.Component));j.defaultProps={title:"Main Number Generator",maxBalls:6,maxNumber:40};var d=j;var f=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d,{}),Object(m.jsx)(d,{title:"Mini Number Generator",maxBalls:3,maxNumber:18})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.0f6430fa.chunk.js.map