(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{44:function(e,t,n){e.exports=n(81)},49:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),i=n.n(r),c=(n(49),n(41)),s=n(3),l=n(16),u=n(17),h=n(21),m=n(19),d=n(15),f=n.n(d);n(67).config();var v=function(e,t){return f.a.get("https://www.googleapis.com/books/v1/volumes?q=$"+e+"&"+t)},g=function(){return f.a.get("/api/books")},k=function(e){return f.a.delete("/api/books/"+e)},p=function(e){return f.a.post("/api/books",e).then((function(e){return e.data}))};n(70);var b=function(e){return o.a.createElement("div",{className:"card",key:e.id},o.a.createElement("h4",null,e.title),o.a.createElement("p",null,o.a.createElement("strong",null,"By ",e.author)),o.a.createElement("img",{alt:e.title,className:"book-image",src:e.image}),o.a.createElement("p",null,e.description),o.a.createElement("a",{href:e.link}," Buy Book "))},E=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={savedBooks:[{title:"The Dead Zone",author:"Stephen King",description:'A number-one national best seller about a man who wakes up from a five-year coma able to see people\'s futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people\'s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fianc\xe9e married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight.',image:"https://example.com",link:"https://example.com"}]},e.deleteBook=function(t){k(t).then(console.log("book deleted")).catch((function(e){return console.log(e)})),g().then((function(t){e.setState({savedBooks:t.data}),console.log(t),console.log(e.state.savedBooks)})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.savedBooks),g().then((function(t){e.setState({savedBooks:t.data}),console.log(t),console.log(e.state.savedBooks)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"hero"},o.a.createElement("h1",null,"All Books From Mongo DB")),o.a.createElement("div",{className:"cardDeck"},this.state.savedBooks.map((function(t,n){return o.a.createElement("div",{key:n},o.a.createElement(b,{key:t._id,id:t._id,title:t.title,author:t.author,description:t.description,image:t.image,link:t.link}),o.a.createElement("button",{onClick:function(){return e.deleteBook(t._id)}},"Remove"))})))))}}]),n}(a.Component),w=n(38),y=n(18);var B=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},"Search:"),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a Gif",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))},S=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={searchResults:[],search:"",books:[],savedBooks:[]},a.searchForBooks=function(e){v(e).then((function(e){a.setState({searchResults:e.data.items}),console.log(e),console.log(a.state.searchResults)})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(w.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchForBooks(a.state.search)},a.saveThisBook=a.saveThisBook.bind(Object(y.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.searchForBooks("zebras")}},{key:"saveThisBook",value:function(e){console.log(e),e.preventDefault(),console.log(this.state.books);var t=this.state.books.filter((function(t){return t.id===e.target.id}));t=t[0],p(t).then(alert("Your book is saved")).catch((function(e){return console.log(e)})),console.log(this.state.books)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(B,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),this.state.searchResults.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement(b,{id:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.saleInfo.buyLink}),o.a.createElement("button",{id:t.id,onClick:function(t){return e.saveThisBook(t)}},"Save Book"))})))}}]),n}(a.Component),j=n(83),C=n(84);var N=function(){return o.a.createElement(j.a,{bg:"dark",variant:"dark"},o.a.createElement(j.a.Brand,{href:"/"},"Book IT"),o.a.createElement(C.a,{className:"mr-auto"},o.a.createElement(C.a.Link,{href:"/"},"Home/Search"),o.a.createElement(C.a.Link,{href:"/saved"},"Saved")))};n(76);var I=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:["/","/search"]},o.a.createElement(S,null)),o.a.createElement(s.a,{exact:!0,path:"/saved"},o.a.createElement(E,null)))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(80);i.a.render(o.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):T(e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.f6f98fce.chunk.js.map