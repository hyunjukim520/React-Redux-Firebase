(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(60),i=a.n(o),c=(a(73),a(13)),l=a(14),s=a(16),m=a(15),u=a(17),p=a(67),d=a.n(p),g=a(30),f=a.n(g),b=a(25),h=a.n(b),v=a(9),x=a.n(v),y=a(31),w=a.n(y),j=a(61),E=a.n(j),O=a(62),k=a.n(O),A=a(65),C=a.n(A),S=a(64),B=a.n(S),N=a(32),T=a.n(N),W=a(66),F=a.n(W),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){w.a.extend(E.a);var e=this.props,t=e.classes,a=e.scream,n=a.createdAt,o=a.userHandle,i=a.userImage,c=a.likeCount,l=a.commentCount;return r.a.createElement(k.a,{className:t.card},r.a.createElement(B.a,{image:i,title:"Profile image",className:t.image}),r.a.createElement(C.a,{className:t.content},r.a.createElement(T.a,{variant:"h5",color:"primary"},o),r.a.createElement(T.a,{variant:"body2",color:"textSecondary"},w()(n).fromNow()),r.a.createElement("span",null,c," Likes"),r.a.createElement(F.a,{color:"primary"}),r.a.createElement("span",null,l," Comments")))}}]),t}(n.Component),J=x()({card:{position:"relative",display:"flex",marginBottom:20},image:{minWidth:200},content:{padding:25,objectFit:"cover"}})(I),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={screams:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/screams").then(function(t){e.setState({screams:t.data})}).catch(function(t){console.log(t),e.setState({screams:null})})}},{key:"render",value:function(){var e=this.state.screams,t=e?e.map(function(e){return r.a.createElement(J,{key:e.screamId,scream:e})}):r.a.createElement("p",null,"There are no screams.");return r.a.createElement("div",null,t)}}]),t}(n.Component),R=f()({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}},typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{margin:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"},invisibleSeparator:{border:"none",margin:4},visibleSeparator:{width:"100%",borderBottom:"1px solid rgba(0,0,0,0.1)",marginBottom:20},paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},buttons:{textAlign:"center","& a":{margin:"20px 10px"}}});h.a.defaults.baseURL="https://us-central1-twitterape-da2b6.cloudfunctions.net/api";var z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{theme:R},r.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a(174)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.322d8669.chunk.js.map