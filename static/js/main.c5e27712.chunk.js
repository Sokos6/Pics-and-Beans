(this.webpackJsonppicsandbeans=this.webpackJsonppicsandbeans||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),c=a(6),u=a.n(c),o=a(17),m=a(2),l=a(3),p=a(5),h=a(4),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(n.Component),v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(n.Component),d=(a(25),function(e){var t=e.images.map((function(e){return r.a.createElement(v,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)}),g=a(18),b=a.n(g).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID ".concat("dFAvRmXnIGlVc45JilFyjmy590ZPKms0jx0sWYPvHvE")}}),y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(f,{onSubmit:this.onSearchSubmit}),r.a.createElement(d,{images:this.state.images}),r.a.createElement("div",null,"Found: ",this.state.images.length," Images"))}}]),a}(n.Component);i.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c5e27712.chunk.js.map