(this["webpackJsonpmy-books"]=this["webpackJsonpmy-books"]||[]).push([[0],{105:function(e,t,a){e.exports={book:"Book_book__jtfLd",title:"Book_title__jGq6O",link_detail_title:"Book_link_detail_title__3HVKB",author:"Book_author__1oh1e",link_detail_author:"Book_link_detail_author__j_2dZ",created:"Book_created__2tKEJ",tooltips:"Book_tooltips__2fLvl",button_group:"Book_button_group__SlEv2",link_url:"Book_link_url__1mAc_",button_url:"Book_button_url__2mKTV",button_edit:"Book_button_edit__1XB2y"}},143:function(e,t,a){e.exports={button:"List_button__1OD2o",table:"List_table__Esp-V"}},208:function(e,t,a){e.exports={layout:"Layout_layout__1flcg"}},242:function(e,t,a){e.exports=a(428)},248:function(e,t,a){},41:function(e,t,a){e.exports={bg:"Add_bg__2Axqv",add:"Add_add__2jbiB",input_title:"Add_input_title__FgNI2",input_comment:"Add_input_comment__7VE0I",input_author:"Add_input_author__ARSur",input_url:"Add_input_url__3rTwD",required:"Add_required__ScS66",input_area:"Add_input_area__32fUU",input:"Add_input__1YkRE",button_area:"Add_button_area__K4Txl",back_button:"Add_back_button__1i065",button:"Add_button__gQfkH",button_logout:"Add_button_logout__2KChV"}},428:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),c=a.n(o),l=(a(247),a(248),a(135)),i=a(38);function u(){return Object(i.e)((function(e){return e.auth.token}))}var s=a(432),d=a(73),m=a(431),b=a(143),_=a.n(b),p=a(208),f=a.n(p),g=function(e){var t=e.children;return r.a.createElement("div",{className:f.a.layout},t)},v=a(238),E=a(105),k=a.n(E),h=r.a.memo((function(e){var t=e.goDetailPage,a=e.goEditPage,n=e.goUrlPage,o=e.deleteBook,c=Object(v.a)(e,["goDetailPage","goEditPage","goUrlPage","deleteBook"]),l=c.updatedAt?c.updatedAt?new Date(c.updatedAt):null:c.createdAt?new Date(c.createdAt):null,i=l?l.getMonth()+1+"-"+l.getDate()+"-"+l.getFullYear()+" "+l.getHours()%12+":"+l.getMinutes()+" "+(l.getHours()>12?"PM":"AM"):"";return r.a.createElement("div",{className:k.a.book},r.a.createElement("div",{className:k.a.title,onClick:function(){return t(c.bookId)}},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"book",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"})),c.title),r.a.createElement("div",{className:k.a.author,onClick:function(){return t(c.bookId)}},c.author),r.a.createElement("div",{className:k.a.created},i),r.a.createElement("div",{className:k.a.button_group},r.a.createElement("button",{type:"button",className:"ant-btn ant-btn-primary ant-btn-circle ant-btn-sm ant-btn-icon-only button_url",onClick:function(){return n(c.url)}},r.a.createElement("span",{role:"img","aria-label":"home",className:"anticon anticon-home"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"home",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"})))),r.a.createElement("button",{type:"button",className:"ant-btn ant-btn-circle ant-btn-sm ant-btn-icon-only button_edit",onClick:function(){return a(c.bookId)}},r.a.createElement("span",{role:"img","aria-label":"edit",className:"anticon anticon-edit"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",className:"","data-icon":"edit",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"})))),r.a.createElement("button",{type:"button",className:"ant-btn ant-btn-primary ant-btn-circle ant-btn-sm ant-btn-icon-only ant-btn-dangerous",onClick:function(){return o(c.bookId)}},r.a.createElement("span",{role:"img","aria-label":"delete",className:"anticon anticon-delete"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",className:"","data-icon":"delete",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}))))))})),O=function(e){var t=e.books,a=e.loading,n=e.goAddPage,o=e.logout,c=e.goDetailPage,l=e.goEditPage,i=e.goUrlPage,u=e.deleteBook;return r.a.createElement(g,null,r.a.createElement(s.a,{title:r.a.createElement("div",null,"Book List"),extra:[r.a.createElement(d.a,{key:"2",type:"primary",className:_.a.button,onClick:n},"Add Book"),r.a.createElement(d.a,{key:"1",type:"primary",className:_.a.button,onClick:o},"Logout")]}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/49259666/99894872-21fa4d80-2cca-11eb-8159-d8ca7ff2fd4d.png",style:{width:"100%"},alt:"books"}),r.a.createElement(m.a,{dataSource:t||[],columns:[{title:"Book",dataIndex:"book",key:"book",render:function(e,t){return r.a.createElement(h,Object.assign({},t,{key:"{record.bookId}",goDetailPage:c,goEditPage:l,goUrlPage:i,deleteBook:u}))}}],loading:null===t||a,showHeader:!1,className:_.a.table,rowKey:"bookId",pagination:!1}))},j=a(24),N=a.n(j),x=a(52),w=a(433),B=a(435),y=a(15),C=a(46);function A(e){return e.auth.token}var S=a(86),L=a(99),R=a(100),I=a(87),P=a.n(I),D=function(){function e(){Object(L.a)(this,e)}return Object(R.a)(e,null,[{key:"login",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var a,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.next=3,P.a.post("https://api.marktube.tv/v1/me",{email:a,password:n});case 3:return r=e.sent,e.abrupt("return",r.data.token);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(S.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.delete("https://api.marktube.tv/v1/me",{headers:{Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),H=function(){function e(){Object(L.a)(this,e)}return Object(R.a)(e,null,[{key:"get",value:function(){return localStorage.getItem("token")}},{key:"set",value:function(e){localStorage.setItem("token",e)}},{key:"remove",value:function(){localStorage.removeItem("token")}}]),e}(),U=N.a.mark(Q),T=N.a.mark(Z),z=N.a.mark(X),G={prefix:"my-books/auth"},V=Object(w.a)({SUCCESS:function(e){return{token:e}}},"PENDING","FAIL",G),K=V.success,q=V.pending,M=V.fail,F=Object(B.a)({PENDING:function(e){return Object(x.a)(Object(x.a)({},e),{},{loading:!0,error:null})},SUCCESS:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{token:t.payload.token,loading:!1,error:null})},FAIL:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.payload})}},{token:null,loading:!1,error:null},G),W=Object(w.a)({LOGIN:function(e){return{email:e.email,password:e.password}}},"LOGOUT",G),Y=W.login,J=W.logout;function Q(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)("".concat(G.prefix,"/LOGIN"),Z);case 2:return e.next=4,Object(y.e)("".concat(G.prefix,"/LOGOUT"),X);case 4:case"end":return e.stop()}}),U)}function Z(e){var t,a,n;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(y.c)(q());case 3:return r.next=5,Object(y.b)(D.login,e.payload);case 5:return t=r.sent,H.set(t),r.next=9,Object(y.c)(K(t));case 9:return r.next=11,Object(y.c)(Object(C.d)("/"));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,Object(y.c)(M(new Error((null===r.t0||void 0===r.t0||null===(a=r.t0.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.error)||"UNKNOWN_ERROR")));case 17:case"end":return r.stop()}}),T,null,[[0,13]])}function X(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.c)(q());case 3:return t.next=5,Object(y.d)(A);case 5:return e=t.sent,t.next=8,Object(y.b)(D.logout,e);case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:return t.prev=12,H.remove(),t.next=16,Object(y.c)(K(null));case 16:return t.finish(12);case 17:case"end":return t.stop()}}),z,null,[[0,10,12,17]])}var $="https://api.marktube.tv/v1/book",ee=function(){function e(){Object(L.a)(this,e)}return Object(R.a)(e,null,[{key:"getBooks",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get($,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"addBook",value:function(){var e=Object(S.a)(N.a.mark((function e(t,a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post($,a,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"editBook",value:function(){var e=Object(S.a)(N.a.mark((function e(t,a,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.patch("".concat($,"/").concat(a),n,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"deleteBook",value:function(){var e=Object(S.a)(N.a.mark((function e(t,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.delete("".concat($,"/").concat(a),{headers:{Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),te=N.a.mark(ge),ae=N.a.mark(ve),ne=N.a.mark(Ee),re=N.a.mark(ke),oe=N.a.mark(he),ce={prefix:"my-books/books"},le=Object(w.a)({SUCCESS:function(e){return{books:e}}},"PENDING","FAIL",ce),ie=le.success,ue=le.pending,se=le.fail,de=Object(B.a)({PENDING:function(e){return Object(x.a)(Object(x.a)({},e),{},{loading:!0,error:null})},SUCCESS:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{books:t.payload.books,loading:!1,error:null})},FAIL:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.payload})}},{books:null,loading:!1,error:null},ce),me=Object(w.a)({GET_BOOKS:function(){},ADD_BOOK:function(e){return{book:e}},EDIT_BOOK:function(e,t){return{book:e,bookId:t}},DELETE_BOOK:function(e){return{bookId:e}}},ce),be=me.getBooks,_e=me.addBook,pe=me.editBook,fe=me.deleteBook;function ge(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)("".concat(ce.prefix,"/GET_BOOKS"),ve);case 2:return e.next=4,Object(y.e)("".concat(ce.prefix,"/ADD_BOOK"),Ee);case 4:return e.next=6,Object(y.e)("".concat(ce.prefix,"/EDIT_BOOK"),ke);case 6:return e.next=8,Object(y.e)("".concat(ce.prefix,"/DELETE_BOOK"),he);case 8:case"end":return e.stop()}}),te)}function ve(){var e,t,a,n;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(y.c)(ue());case 3:return r.next=5,Object(y.d)(A);case 5:return e=r.sent,r.next=8,Object(y.b)(ee.getBooks,e);case 8:return t=r.sent,r.next=11,Object(y.c)(ie(t));case 11:return r.next=13,Object(y.c)(Object(C.d)("/"));case 13:r.next=19;break;case 15:return r.prev=15,r.t0=r.catch(0),r.next=19,Object(y.c)(se(new Error((null===r.t0||void 0===r.t0||null===(a=r.t0.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.error)||"UNKNOWN_ERROR")));case 19:case"end":return r.stop()}}),ae,null,[[0,15]])}function Ee(e){var t,a,n,r;return N.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(y.c)(ue());case 3:return o.next=5,Object(y.d)(A);case 5:return t=o.sent,o.next=8,Object(y.b)(ee.addBook,t,e.payload.book);case 8:return o.next=10,Object(y.b)(ee.getBooks,t);case 10:return a=o.sent,o.next=13,Object(y.c)(ie(a));case 13:return o.next=15,Object(y.c)(Object(C.d)("/"));case 15:o.next=21;break;case 17:return o.prev=17,o.t0=o.catch(0),o.next=21,Object(y.c)(se(new Error((null===o.t0||void 0===o.t0||null===(n=o.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.error)||"UNKNOWN_ERROR")));case 21:case"end":return o.stop()}}),ne,null,[[0,17]])}function ke(e){var t,a,n,r;return N.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(y.c)(ue());case 3:return o.next=5,Object(y.d)(A);case 5:return t=o.sent,o.next=8,Object(y.b)(ee.editBook,t,e.payload.bookId,e.payload.book);case 8:return o.next=10,Object(y.b)(ee.getBooks,t);case 10:return a=o.sent,o.next=13,Object(y.c)(ie(a));case 13:return o.next=15,Object(y.c)(Object(C.d)("/"));case 15:o.next=21;break;case 17:return o.prev=17,o.t0=o.catch(0),o.next=21,Object(y.c)(se(new Error((null===o.t0||void 0===o.t0||null===(n=o.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.error)||"UNKNOWN_ERROR")));case 21:case"end":return o.stop()}}),re,null,[[0,17]])}function he(e){var t,a,n,r;return N.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(y.c)(ue());case 3:return o.next=5,Object(y.d)(A);case 5:return t=o.sent,o.next=8,Object(y.b)(ee.deleteBook,t,e.payload.bookId);case 8:return o.next=10,Object(y.b)(ee.getBooks,t);case 10:return a=o.sent,o.next=13,Object(y.c)(ie(a));case 13:return o.next=15,Object(y.c)(Object(C.d)("/"));case 15:o.next=21;break;case 17:return o.prev=17,o.t0=o.catch(0),o.next=21,Object(y.c)(se(new Error((null===o.t0||void 0===o.t0||null===(n=o.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.error)||"UNKNOWN_ERROR")));case 21:case"end":return o.stop()}}),oe,null,[[0,17]])}var Oe=function(){var e=Object(i.e)((function(e){return e.auth.loading})),t=Object(i.d)(),a=Object(n.useCallback)((function(){t(Object(C.d)("/add"))}),[t]),o=Object(n.useCallback)((function(){t(J())}),[t]),c=Object(n.useCallback)((function(e){t(Object(C.d)("/book/".concat(e)))}),[t]),l=Object(n.useCallback)((function(e){t(Object(C.d)("/edit/".concat(e)))}),[t]);Object(n.useEffect)((function(){t(be())}),[t]);var u=Object(i.e)((function(e){return e.books.books})),s=Object(n.useCallback)((function(e){window.location.href=e.startsWith("http://")?e:"http://".concat(e)}),[]),d=Object(n.useCallback)((function(e){t(fe(e))}),[t]);return r.a.createElement(O,{books:u,loading:e,goAddPage:a,logout:o,goDetailPage:c,goEditPage:l,goUrlPage:s,deleteBook:d})},je=function(){return null===u()?r.a.createElement(l.a,{to:"/signin"}):r.a.createElement(Oe,null)},Ne=a(434),xe=a(439),we=a(136),Be=a.n(we),ye=a(436),Ce=a(41),Ae=a.n(Ce),Se=function(e){var t=e.loading,a=e.logout,n=e.onGoBack,o=e.addBook,c=r.a.useRef(null),l=r.a.useRef(null),i=r.a.useRef(null),u=r.a.useRef(null);return r.a.createElement(g,null,r.a.createElement(s.a,{title:r.a.createElement("div",null,r.a.createElement("button",{className:Ae.a.back_button,onClick:n},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",className:"","data-icon":"arrow-left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}))),r.a.createElement(ye.a,null)," Add Book"),subTitle:"Add Your Book",extra:[r.a.createElement(d.a,{key:"1",type:"primary",className:Ae.a.button_logout,onClick:a},"Logout")]}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/49259666/99894872-21fa4d80-2cca-11eb-8159-d8ca7ff2fd4d.png",className:Ae.a.bg,alt:"books"}),r.a.createElement("div",{className:Ae.a.add},r.a.createElement("div",{className:Ae.a.input_title},"Title",r.a.createElement("span",{className:Ae.a.required}," *")),r.a.createElement("div",{className:Ae.a.input_area},r.a.createElement(Ne.a,{placeholder:"Title",ref:c,className:Ae.a.input})),r.a.createElement("div",{className:Ae.a.input_comment},"Comment",r.a.createElement("span",{className:Ae.a.required}," *")),r.a.createElement("div",{className:Ae.a.input_area},r.a.createElement(Be.a,{rows:4,placeholder:"Comment",ref:l,className:Ae.a.input})),r.a.createElement("div",{className:Ae.a.input_author},"Author",r.a.createElement("span",{className:Ae.a.required}," *")),r.a.createElement("div",{className:Ae.a.input_area},r.a.createElement(Ne.a,{placeholder:"Author",ref:i,className:Ae.a.input})),r.a.createElement("div",{className:Ae.a.input_url},"URL",r.a.createElement("span",{className:Ae.a.required}," *")),r.a.createElement("div",{className:Ae.a.input_area},r.a.createElement(Ne.a,{placeholder:"URL",ref:u,className:Ae.a.input})),r.a.createElement("div",{className:Ae.a.button_area},r.a.createElement(d.a,{size:"large",loading:t,onClick:function(){var e=c.current.state.value,t=l.current.state.value,a=i.current.state.value,n=u.current.state.value;if(void 0===e||void 0===t||void 0===a||void 0===n)return void xe.b.error("Please fill out all inputs");o({title:e,message:t,author:a,url:n})},className:Ae.a.button},"Add"))))},Le=a(49),Re=a(230),Ie=a(69),Pe=a(205),De=a(237),He=a(76),Ue=function(e){return Object(Le.combineReducers)({books:de,auth:F,router:Object(He.b)(e)})},Te=N.a.mark(ze);function ze(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([Q(),ge()]);case 2:case"end":return e.stop()}}),Te)}var Ge=a(164),Ve=a(231),Ke=a.n(Ve),qe=Object(Ie.a)({basename:"/react-Book-Management-System"}),Me=Object(De.a)(),Fe=function(){var e=H.get(),t={key:"root",storage:Ke.a},a=Object(Ge.a)(t,Ue(qe)),n=Object(Le.createStore)(a,{auth:{token:e,loading:!1,error:null}},Object(Re.composeWithDevTools)(Object(Le.applyMiddleware)(Object(Pe.a)(qe),Me))),r=Object(Ge.b)(n);return Me.run(ze),{store:n,persistor:r}},We=function(){return qe.goBack()},Ye=function(){var e=Object(i.e)((function(e){return e.auth.loading})),t=Object(i.d)(),a=Object(n.useCallback)((function(){t(J())}),[t]),o=Object(n.useCallback)((function(e){t(_e(e))}),[t]);return r.a.createElement(Se,{loading:e,logout:a,onGoBack:We,addBook:o})},Je=function(){return null===u()?r.a.createElement(l.a,{to:"/signin"}):r.a.createElement(Ye,null)},Qe=a(438),Ze=a(440),Xe=a(45),$e=a.n(Xe),et=function(e){var t=e.loading,a=e.login,o=e.error,c=r.a.useRef(null),l=r.a.useRef(null);return Object(n.useEffect)((function(){if(null!==o)switch(o.message){case"USER_NOT_EXIST":xe.b.error("User not exist");break;case"PASSWORD_NOT_MATCH":xe.b.error("Wrong password");break;default:xe.b.error("Unknown error occured")}}),[o]),r.a.createElement("form",null,r.a.createElement(Qe.a,{align:"middle",className:$e.a.signin_row},r.a.createElement(Ze.a,{span:24},r.a.createElement(Qe.a,{className:$e.a.signin_contents},r.a.createElement(Ze.a,{span:12},r.a.createElement("img",{src:"https://user-images.githubusercontent.com/49259666/99894873-2292e400-2cca-11eb-8b40-9901fcbc16e9.png",alt:"Signin",className:$e.a.signin_bg})),r.a.createElement(Ze.a,{span:12},r.a.createElement("div",{className:$e.a.signin_title},"My Books"),r.a.createElement("div",{className:$e.a.signin_subtitle},"Please Note Your Opinion"),r.a.createElement("div",{className:$e.a.signin_underline}),r.a.createElement("div",{className:$e.a.email_title},"Email",r.a.createElement("span",{className:$e.a.required}," *")),r.a.createElement("div",{className:$e.a.input_area},r.a.createElement(Ne.a,{placeholder:"Email",autoComplete:"email",name:"email",ref:c,onPressEnter:u,className:$e.a.input})),r.a.createElement("div",{className:$e.a.password_title},"Password",r.a.createElement("span",{className:$e.a.required}," *")),r.a.createElement("div",{className:$e.a.input_area},r.a.createElement(Ne.a,{type:"password",autoComplete:"current-password",ref:l,onPressEnter:u,className:$e.a.input})),r.a.createElement("div",{className:$e.a.button_area},r.a.createElement(d.a,{size:"large",loading:t,onClick:i,className:$e.a.button},"Sign In")))))));function i(){var e,t,n=null===(e=c.current)||void 0===e?void 0:e.state.value,r=null===(t=l.current)||void 0===t?void 0:t.state.value;a({email:n,password:r})}function u(){i()}},tt=function(){var e=Object(i.e)((function(e){return e.auth.loading})),t=Object(i.e)((function(e){return e.auth.error})),a=Object(i.d)(),o=Object(n.useCallback)((function(e){var t=e.email,n=e.password;a(Y({email:t,password:n}))}),[a]);return r.a.createElement(et,{loading:e,error:t,login:o})},at=function(){return null!==u()?r.a.createElement(l.a,{to:"/"}):r.a.createElement(tt,null)},nt=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"NotFound ",qe.location))},rt=function(e){var t=e.error;return void 0===t?r.a.createElement("div",null,"Unknown Error"):r.a.createElement("div",null,t.message)},ot=a(232),ct=a.n(ot),lt=a(437),it=a(70),ut=a.n(it),st=Ne.a.TextArea,dt=function(e){var t=e.book,a=e.logout,n=e.onGoBack,o=e.goEditPage;return null===t?null:void 0===t?r.a.createElement("div",null,r.a.createElement("h1",null,"NotFound Book")):r.a.createElement(g,null,r.a.createElement(s.a,{title:r.a.createElement("div",null,r.a.createElement("button",{className:ut.a.back_button,onClick:n},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",className:"","data-icon":"arrow-left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}))),r.a.createElement(lt.a,null)," ",t.title),subTitle:t.author,extra:[r.a.createElement(d.a,{key:"2",type:"primary",onClick:o,className:ut.a.button},"Edit"),r.a.createElement(d.a,{key:"1",type:"primary",className:ut.a.button,onClick:a},"Logout")]}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/49259666/99894872-21fa4d80-2cca-11eb-8159-d8ca7ff2fd4d.png",className:ut.a.bg,alt:"books"}),r.a.createElement("div",{className:ut.a.detail},r.a.createElement("div",{className:ut.a.message_title}),r.a.createElement("div",{className:ut.a.message},r.a.createElement(st,{rows:4,value:t.message,readOnly:!0,className:ut.a.message_textarea})),r.a.createElement("div",{className:ut.a.button_area})))},mt=function(){var e=Object(i.d)(),t=Object(n.useCallback)((function(){e(J())}),[e]),a=Object(i.e)((function(e){return e.books.books})),o=Number(qe.location.pathname.split("/").pop()),c=null===a||void 0===a?void 0:a.filter((function(e){return e.bookId===o})).pop(),l=Object(n.useCallback)((function(){qe.push("/edit/".concat(o))}),[o]);return r.a.createElement(dt,{book:c,logout:t,onGoBack:We,goEditPage:l})},bt=function(){return null===u()?r.a.createElement(l.a,{to:"/signin"}):r.a.createElement(mt,null)},_t=a(44),pt=a.n(_t),ft=function(e){var t=e.book,a=e.loading,o=e.logout,c=e.onGoBack,l=e.editBook,i=Object(n.useRef)(null),u=Object(n.useRef)(null),m=Object(n.useRef)(null),b=Object(n.useRef)(null);return null===t?null:void 0===t?r.a.createElement("div",null,r.a.createElement("h1",null,"NotFound Book")):r.a.createElement(g,null,r.a.createElement(s.a,{title:r.a.createElement("div",null,r.a.createElement("button",{className:pt.a.back_button,onClick:c},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",className:"","data-icon":"arrow-left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}))),r.a.createElement(ye.a,null)," Edit Book"),subTitle:"Edit Your Book",extra:[r.a.createElement(d.a,{key:"1",type:"primary",className:pt.a.button_logout,onClick:o},"Logout")]}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/49259666/99894872-21fa4d80-2cca-11eb-8159-d8ca7ff2fd4d.png",className:pt.a.bg,alt:"books"}),r.a.createElement("div",{className:pt.a.edit},r.a.createElement("div",{className:pt.a.input_title},"Title",r.a.createElement("span",{className:pt.a.required}," *")),r.a.createElement("div",{className:pt.a.input_area},r.a.createElement(Ne.a,{placeholder:"Title",ref:i,defaultValue:t.title||"",className:pt.a.input})),r.a.createElement("div",{className:pt.a.input_comment},"Comment",r.a.createElement("span",{className:pt.a.required}," *")),r.a.createElement("div",{className:pt.a.input_area},r.a.createElement(Be.a,{rows:4,placeholder:"Comment",ref:u,defaultValue:t.message||"",className:pt.a.input,style:{minHeight:100}})),r.a.createElement("div",{className:pt.a.input_author},"Author"),r.a.createElement("div",{className:pt.a.input_area},r.a.createElement(Ne.a,{placeholder:"Author",ref:m,defaultValue:t.author||"",className:pt.a.input})),r.a.createElement("div",{className:pt.a.input_url},"URL"),r.a.createElement("div",{className:pt.a.input_area},r.a.createElement(Ne.a,{placeholder:"URL",ref:b,defaultValue:t.url||"",className:pt.a.input})),r.a.createElement("div",{className:pt.a.button_area},r.a.createElement(d.a,{size:"large",loading:a,onClick:function(){var e=i.current.state.value,t=u.current.state.value,a=m.current.state.value,n=b.current.state.value;if(void 0===e||void 0===t||void 0===a||void 0===n)return void xe.b.error("Please fill out all inputs");l({title:e,message:t,author:a,url:n})},className:pt.a.button},"Update"))))},gt=function(){var e=Object(i.e)((function(e){return e.auth.loading})),t=Object(i.d)(),a=Object(n.useCallback)((function(){t(J())}),[t]),o=Object(i.e)((function(e){return e.books.books})),c=Number(qe.location.pathname.split("/").pop()),l=null===o||void 0===o?void 0:o.filter((function(e){return e.bookId===c})).pop(),u=Object(n.useCallback)((function(e){t(pe(e,c))}),[c,t]);return r.a.createElement(ft,{book:l,loading:e,logout:a,onGoBack:We,editBook:u})},vt=function(){return null===u()?r.a.createElement(l.a,{to:"/signin"}):r.a.createElement(gt,null)},Et=function(){return r.a.createElement(ct.a,{FallbackComponent:rt},r.a.createElement(He.a,{history:qe},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/edit/:id",component:vt}),r.a.createElement(l.b,{exact:!0,path:"/book/:id",component:bt}),r.a.createElement(l.b,{exact:!0,path:"/signin",component:at}),r.a.createElement(l.b,{exact:!0,path:"/add",component:Je}),r.a.createElement(l.b,{exact:!0,path:"/",component:je}),r.a.createElement(l.b,{component:nt}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt=a(233),ht=Fe(),Ot=ht.store,jt=ht.persistor;c.a.render(r.a.createElement(i.a,{store:Ot},r.a.createElement(kt.a,{loading:null,persistor:jt},r.a.createElement(Et,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports={bg:"Edit_bg__2TS2z",edit:"Edit_edit__3cSYZ",input_title:"Edit_input_title__1k9S4",input_comment:"Edit_input_comment__3uLmE",input_author:"Edit_input_author__15_fF",input_url:"Edit_input_url__3CZK2",required:"Edit_required__1itsW",input_area:"Edit_input_area__2-GTq",input:"Edit_input__22_1w",button_area:"Edit_button_area__GO0si",button:"Edit_button__3NHV0",button_logout:"Edit_button_logout__3P9yA",back_button:"Edit_back_button__30F5r"}},45:function(e,t,a){e.exports={signin_row:"Signin_signin_row__aEbK8",signin_title:"Signin_signin_title__3aOnf",signin_subtitle:"Signin_signin_subtitle__yRQjV",signin_underline:"Signin_signin_underline__2NCQg",signin_contents:"Signin_signin_contents__eJxj4",signin_bg:"Signin_signin_bg__1d576",email_title:"Signin_email_title__2Gwr7",password_title:"Signin_password_title__1bH47",required:"Signin_required__1AQRP",input_area:"Signin_input_area__3Sa6j",input:"Signin_input__6Sgq7",button_area:"Signin_button_area__1rWa6",button:"Signin_button__tpV4j"}},70:function(e,t,a){e.exports={detail:"Detail_detail__1UEk9",bg:"Detail_bg__1r32a",message_title:"Detail_message_title__8RQ8a",message:"Detail_message__GrHxH",message_textarea:"Detail_message_textarea__2YZa5",button_area:"Detail_button_area__1Cxkg",button:"Detail_button__15bOa",back_button:"Detail_back_button__18GFJ"}}},[[242,1,2]]]);
//# sourceMappingURL=main.49234245.chunk.js.map