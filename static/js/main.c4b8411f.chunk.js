(window.webpackJsonpcheddar=window.webpackJsonpcheddar||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},25:function(e,t,n){e.exports=n(48)},30:function(e,t,n){},33:function(e,t,n){},43:function(e){e.exports=JSON.parse('{"editorVersion":null,"currentScene":"0","bookmarkedScenes":["0"],"scenes":{"0":{"id":"0","sceneName":"New Scene","topText":"foo","imageFile":"meme-image","bottomText":"bar","choices":[{"text":"foo","nextScene":"scene-a"},{"text":"bar","nextScene":"scene-b"},{"text":"baz","nextScene":"scene-c"}]}}}')},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),o=n.n(a),i=(n(30),n(3)),s=n.n(i),l=(n(33),n(4)),u=n(19),m=n(6),d=n(5),p=n(7),f=n(9),b=n(15);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}var v=n(3),g=n(43);function E(e){var t=v.get("scenes");if(console.log("scenes:",t),console.log("sceneId",e),!e)return g.scenes[0];if(t&&t[e])return t[e];throw new Error("Scene '".concat(e,"' not found!"))}var S={submitSceneForm:function(e){console.log("sceneFormInput",e);var t=e.id,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v.get("scenes"),Object(b.a)({},t,e));v.set("scenes",n),alert('Submitted scene "'.concat(e.sceneName,'"'))},getScene:E,loadScene:function(e){var t=E(e);return v.set("currentSceneId",t.id),t}},O=(n(44),function(e){function t(){var e,n;Object(l.a)(this,t);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).getFontWeight=function(){return 1===n.props.text.length?"bold":null},n.render=function(){return r.a.createElement("button",{type:n.props.type||"button",className:"button ".concat(n.getFontWeight()," ").concat(n.props.styles),onClick:n.props.onClick},n.props.text)},n}return Object(p.a)(t,e),t}(c.Component)),x=(n(45),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).render=function(){return r.a.createElement("div",{className:"ErrorBanner"},n.props.message)},n}return Object(p.a)(t,e),t}(c.Component)),y=(n(46),n(23)),N=n.n(y);function j(e){N.a.saveAs(function(e){var t=JSON.stringify(s.a.get(e),null,2);return new Blob([t],{type:"text/plain;charset=utf-8"})}("scenes"),e)}var w=function(e,t,n){return r.a.createElement("div",{className:"namedField"},r.a.createElement("div",null,"".concat(e,": ")),r.a.createElement(f.a,{className:"field",name:t,component:n?"textarea":"input"}))},k=function(){return r.a.createElement(f.b,{name:"choices",render:function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"choicesSectionHeader"},r.a.createElement("div",null,"Choices"),r.a.createElement(O,{onClick:function(){return e.push({text:"",nextScene:""})},text:"+"})),(e.form.values.choices||[]).map((function(t,n){return function(e,t,n){return r.a.createElement("div",{className:"choice",key:t},r.a.createElement("div",{className:"choiceHeader"},"Choice ".concat(t+1,": "),r.a.createElement(O,{styles:"red",onClick:function(){return e.remove(t)},text:"-"})),w("Text","".concat(n,".").concat(t,".text"),!0),w("Next Scene","".concat(n,".").concat(t,".nextScene")))}(e,n,"choices")})))}})},C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={currentSceneId:n.props.sceneId,initialValues:{},loaded:!1,error:void 0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){try{var e=S.loadScene(this.state.currentSceneId);return console.log("scene",e),this.setState({currentSceneId:e.id,initialValues:e,loaded:!0})}catch(t){return this.setState({error:t})}}},{key:"render",value:function(){return this.state.error?r.a.createElement(x,{message:this.state.error.message}):this.state.loaded?r.a.createElement("div",{className:"formContainer"},r.a.createElement(f.d,{initialValues:this.state.initialValues,onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){S.submitSceneForm(e),n(!1)}),400)}},(function(e){var t=e.isSubmitting;return r.a.createElement(f.c,{className:"form"},r.a.createElement("div",{className:"fieldSections"},r.a.createElement("div",{className:"column"},w("Scene Name","sceneName"),w("Top Text","topText",!0),w("Image","imageFile"),w("Bottom Text","bottomText",!0)),r.a.createElement("div",{className:"column"},k())),r.a.createElement("div",{className:"row-right"},r.a.createElement(O,{styles:"big",type:"submit",disabled:t,text:"Submit"}),r.a.createElement(O,{styles:"big",onClick:function(){return j("cyoa.json")},text:"Export"})))}))):null}}]),t}(c.Component),I=n(24),T=(n(47),function(){return r.a.createElement("div",{className:"footer"},I.a)});var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-h1"},"Cheddar"),r.a.createElement("p",{className:"App-p"},"Choose Your Own Adventure Editor")),r.a.createElement(C,{sceneId:s.a.get("currentSceneId")}),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c4b8411f.chunk.js.map