(this.webpackJsonpdurka=this.webpackJsonpdurka||[]).push([[0],{162:function(e,a,t){e.exports=t(319)},306:function(e,a){},319:function(e,a,t){"use strict";t.r(a);t(163),t(189),t(191),t(192),t(194),t(195),t(196),t(197),t(198),t(199),t(200),t(201),t(203),t(204),t(205),t(206),t(207),t(208),t(209),t(210),t(211),t(212),t(214),t(215),t(216),t(217),t(218),t(219),t(220),t(221),t(222),t(223),t(224),t(225),t(226),t(227),t(228),t(229),t(230),t(231);var n=t(0),c=t.n(n),o=t(91),r=t.n(o),l=t(32),s=t.n(l),i=t(12),m=t(58),u=t.n(m),d=(t(255),t(94)),p=t.n(d),f=t(52),h=t.n(f),b=t(99),g=t.n(b),E=t(71),k=t.n(E),v=t(47),y=t.n(v),C=t(95),O=t.n(C),j=t(96),N=t.n(j),S=t(97),I=t.n(S),w=t(98),P=t.n(w),A=t(37),V=t.n(A),x=t(161),D=t.n(x),U=t(92),T=t.n(U),K=(t(257),t(152)),W=t.n(K),_=t(153),G=t.n(_),L=t(38),z=t.n(L),F=t(51),H=t.n(F),B=t(10),R=t.n(B),q=t(93),J=t.n(q),M=t(154),Q=t.n(M),Z=t(72),X=t.n(Z),Y=t(46),$=t.n(Y),ee=(t(258),t(149)),ae=t.n(ee),te=(t(85),t(259),t(150)),ne=t.n(te),ce=function(e){var a=e.id,t=e.firstName,n=e.lastName,o=e.rating,r=e.photoURL,l=e.amount,s="https://vk.com/id"+e.idVk;return c.a.createElement(R.a,{className:"card"},c.a.createElement("span",{className:"listNumber"},a),c.a.createElement($.a,{href:s,target:"_blank"},c.a.createElement(H.a,{className:"myItem",before:r?c.a.createElement(V.a,{src:r}):c.a.createElement(V.a,{src:"https://vk.com/images/camera_200.png"}),description:c.a.createElement(R.a,{className:"div"},c.a.createElement(R.a,{className:"div"},c.a.createElement(ne.a,{fill:"red"}),"       ".concat(o)),c.a.createElement(R.a,{className:"div"},"DurkaCoins: ",l))},t+" "+n)))},oe=(t(269),t(151)),re=t.n(oe),le=function(e){var a=e.id,t=e.name,n=(e.color,e.price),o=e.icon,r=e.openPay;return c.a.createElement(R.a,{className:"cardShop"},c.a.createElement(H.a,{className:"myItem",before:o,asideContent:c.a.createElement($.a,{id:a,onClick:r,mode:"tertiary"},"\u043a\u0443\u043f\u0438\u0442\u044c"),bottomContent:c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(z.a,{size:"l"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),c.a.createElement(z.a,{size:"l",mode:"secondary",style:{marginLeft:8}},"\u0421\u043a\u0440\u044b\u0442\u044c")),description:"".concat(n," DurkaCoins")},t),c.a.createElement(R.a,{className:"footer"}," ",c.a.createElement(re.a,{fill:"blue"})," "))},se=function(e){var a=e.id,t=(e.go,e.fetchedUser),n=e.tabShop,o=e.tabHome,r=e.tabTop,l=e.activeTab,s=e.dataUsers,i=(e.progressOnChange,e.dispatch,e.state,e.story,e.addGroup),m=(e.incDec,e.openBase),u=e.dataShop,d=e.openPay,p=e.inventoryOpen,f=e.inventory,h=e.dataInventory,b=(e.getUser,e.durkaCoins),g=e.shisoids,E=(e.transfer,e.targetId,e.onChangeHandlerId,e.onChangeHandlerAmount,e.amount,e.activeModal,e.openTransfer),k=e.snackbar,v=e.userPlace,y=e.rating,C=(e.scheme,s.map((function(e,a){return c.a.createElement(ce,{key:e.id,id:a+1,idVk:e.id,photoURL:e.photoURL,firstName:e.firstName,lastName:e.lastName,rating:e.rating,amount:e.durkaCoins})}))),O=u.map((function(e){return c.a.createElement(le,{key:e.id,id:e.id,name:e.name,price:e.price,icon:e.icon,openPay:d})})),j=h.map((function(e){return c.a.createElement(le,{key:e.id,id:e.id,name:e.name,price:e.price,icon:e.icon,openPay:d})}));return c.a.createElement(W.a,{id:a},c.a.createElement(G.a,null,"\u0414\u0423\u0420\u041a\u0410"),c.a.createElement(J.a,{vertical:"top"},c.a.createElement(Q.a,{className:"TabsDefaultUser"},c.a.createElement(X.a,{onClick:r,selected:"top"===l},"\u0422\u041e\u041f"),c.a.createElement(X.a,{onClick:o,selected:"home"===l},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),c.a.createElement(X.a,{onClick:n,selected:"shop"===l},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"))),"top"===l?c.a.createElement(c.a.Fragment,null,c.a.createElement(R.a,{className:"headerTop"},"\u0412\u0430\u0448\u0435 \u043c\u0435\u0441\u0442\u043e: ",v,c.a.createElement(c.a.Fragment,null,"   \u0412\u0430\u0448 \u0420\u0435\u0439\u0442\u0438\u043d\u0433:    ",c.a.createElement(ae.a,{fill:"red"}),y)),c.a.createElement(R.a,null,C)):"","home"===l?c.a.createElement(c.a.Fragment,null,c.a.createElement(R.a,{className:"main"},t&&c.a.createElement(R.a,null,c.a.createElement(H.a,{before:t.photo_200?c.a.createElement(V.a,{src:t.photo_200,size:120}):null}),c.a.createElement(R.a,{className:"divPadding"},"".concat(t.first_name," ").concat(t.last_name)))),c.a.createElement(R.a,{className:"mainLeft"},c.a.createElement(R.a,{className:"divPaddingLeft"},"\u0417\u0432\u0430\u043d\u0438\u0435: \u0428\u0438\u0437\u043e\u0438\u0434"),c.a.createElement(R.a,{className:"divPaddingLeft"},"\u041f\u0440\u0438\u0432\u043b\u0435\u0447\u0435\u043d\u043e \u0448\u0438\u0437\u043e\u0438\u0434\u043e\u0432: ",g),c.a.createElement(R.a,{className:"divPaddingLeft"},"DurkaCoins: ",b)),c.a.createElement(R.a,{className:"footer"},c.a.createElement(z.a,{mode:"commerce",size:"xl",stretched:!0,onClick:m},"\u041f\u0440\u0438\u0432\u043b\u0435\u0447\u044c \u0448\u0438\u0437\u043e\u0438\u0434\u043e\u0432"),c.a.createElement(z.a,{className:"buttonAddGroup",mode:"commerce",onClick:i,size:"xl",stretched:!0},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0448\u0443 \u0433\u0440\u0443\u043f\u043f\u0443"),c.a.createElement(z.a,{className:"buttonAddGroup",mode:"commerce",onClick:E,size:"xl",stretched:!0},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 DurkaCoins")),c.a.createElement(R.a,{className:"mainInventory"},f?c.a.createElement($.a,{className:"inventory",id:a,onClick:p,mode:"tertiary"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c"):c.a.createElement(c.a.Fragment,null,c.a.createElement($.a,{className:"inventory",id:a,onClick:p,mode:"tertiary"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c"),c.a.createElement(R.a,null,j)))):"","shop"===l?c.a.createElement(R.a,{className:"shop"},O):"",k)},ie=t(155),me=t.n(ie),ue=t(156),de=t.n(ue),pe=t(157),fe=t.n(pe),he=[{id:1,name:"Blue \u043f\u0438\u043b\u044e\u043b\u044f",price:50,icon:c.a.createElement(h.a,{fill:"blue"})},{id:2,name:"Red \u043f\u0438\u043b\u044e\u043b\u044f",price:500,icon:c.a.createElement(h.a,{fill:"red"})},{id:3,name:"Gold \u043f\u0438\u043b\u044e\u043b\u044f",price:5e3,icon:c.a.createElement(h.a,{fill:"orange"})},{id:4,name:"\u041e\u0442\u043f\u0443\u0441\u043a",price:50,icon:c.a.createElement(de.a,{fill:"black"})},{id:5,name:"\u0421\u043c\u0438\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0443\u0431\u0430\u0448\u043a\u0430",price:50,icon:c.a.createElement(fe.a,{fill:"black"})},{id:6,name:"\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430",price:500,icon:c.a.createElement(me.a,{fill:"black"})}],be=t(158),ge=t(159),Ee=function(){function e(a){Object(be.a)(this,e),this.loggerName=a}return Object(ge.a)(e,[{key:"log",value:function(){for(var e,a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];(e=console).log.apply(e,["[".concat(this.loggerName,"]")].concat(t))}}]),e}(),ke="https://digital-space74.tk/durka/",ve=t(160),ye=t.n(ve)()("https://digital-space74.tk",{path:"/durka/socket",query:document.location.search.slice(1)}),Ce=new Ee("VK"),Oe=new Ee("API"),je=new Ee("socket"),Ne=function(){var e=0,a=0,t=0,o=window.navigator.onLine,r=Object(n.useState)(),l=Object(i.a)(r,2),m=l[0],d=l[1],f=Object(n.useState)(0),b=Object(i.a)(f,2),E=b[0],v=b[1],C=Object(n.useState)(he),j=Object(i.a)(C,2),S=j[0],w=(j[1],Object(n.useState)()),A=Object(i.a)(w,2),x=A[0],U=(A[1],Object(n.useState)(0)),K=Object(i.a)(U,2),W=K[0],_=K[1],G=Object(n.useState)(null),L=Object(i.a)(G,2),z=L[0],F=L[1],H=Object(n.useState)(0),B=Object(i.a)(H,2),R=B[0],q=B[1],J=Object(n.useState)(null),M=Object(i.a)(J,2),Q=M[0],Z=M[1],X=Object(n.useState)([]),Y=Object(i.a)(X,2),$=Y[0],ee=Y[1],ae=Object(n.useState)(0),te=Object(i.a)(ae,2),ne=te[0],ce=te[1],oe=Object(n.useState)(!0),re=Object(i.a)(oe,2),le=re[0],ie=re[1],me=Object(n.useState)(!0),ue=Object(i.a)(me,2),de=(ue[0],ue[1],Object(n.useState)("home")),pe=Object(i.a)(de,2),fe=pe[0],be=pe[1],ge=Object(n.useState)(""),Ee=Object(i.a)(ge,2),ve=Ee[0],Ne=Ee[1],Se=Object(n.useState)(null),Ie=Object(i.a)(Se,2),we=Ie[0],Pe=Ie[1],Ae=Object(n.useState)("home"),Ve=Object(i.a)(Ae,2),xe=Ve[0],De=Ve[1],Ue=Object(n.useState)(!1),Te=Object(i.a)(Ue,2),Ke=(Te[0],Te[1],Object(n.useState)(!1)),We=Object(i.a)(Ke,2),_e=(We[0],We[1]),Ge=Object(n.useState)(""),Le=Object(i.a)(Ge,2),ze=Le[0],Fe=Le[1],He=Object(n.useState)([{id:1,name:"Blue \u043f\u0438\u043b\u044e\u043b\u044f",price:50,icon:c.a.createElement(h.a,{fill:"blue"})}]),Be=Object(i.a)(He,2),Re=Be[0];Be[1];function qe(){var e="https://vk.com/app7351258#".concat(Q.id);s.a.sendPromise("VKWebAppShowStoryBox",{background_type:"image",url:"https://sun1-89.userapi.com/HoZMa0ZNNFflt4SDnoomx0bNiCmRV-bOhbz3qw/hg7IHG1XIvg.jpg",attachment:{text:"game",type:"url",url:e}}).then((function(e){!0===e.data.result&&u.a.post("".concat(ke,"/story"),{search:document.location.search})})).catch((function(e){Ce.log("story error:",e)}))}function Je(e){e.preventDefault();var a="https://vk.com/app7351258#".concat(Q.id);s.a.send("VKWebAppShowWallPostBox",{message:"\u0410 \u0442\u044b \u0443\u0436\u0435 \u0431\u044b\u043b \u0432 \u0414\u0423\u0420\u041a\u0415? \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 - ".concat(a),attachments:"photo-192779261_457239018,https://vk.com/app7351258#".concat(Q.id)})}function Me(){u.a.post("".concat(ke,"/getUsers"),{search:document.location.search}).then((function(e){var a=e.data.message;Oe.log("users",a),ee(a)}))}function Qe(){var e="https://vk.com/app7351258#".concat(Q.id);s.a.sendPromise("VKWebAppGetClientVersion").then((function(a){Ce.log(a.platform),"web"===a.platform||"mobile-web"===a.platform?window.navigator.clipboard.writeText(e).then((function(){Ce.log("successfully set",e)}),(function(){Ce.log("write failed",e)})):s.a.send("VKWebAppCopyText",{text:e})})).catch((function(e){Ce.log(e)}))}function Ze(){}function Xe(e){var t=e.target.value.trim();a=t}function Ye(a){var t=a.target.value.trim();e=+t}function $e(){u.a.post("".concat(ke,"/sendDurkaCoins"),{search:document.location.search,targetId:a,amount:e}).then((function(t){var n=t.data,c=n.status,o=n.message;Oe.log("sendDurkaCoins",{status:c,message:o}),"success"===c&&(Me(),e=0,a=0,Pe(null))})).catch((function(e){Oe.log("transfer",e)}))}function ea(e){z||F(c.a.createElement(D.a,{layout:"vertical",onClose:function(){return F(null)},before:c.a.createElement(V.a,{size:24,style:{backgroundColor:"green"}},c.a.createElement(T.a,{fill:"#fff",width:14,height:14}))},e))}Object(n.useEffect)((function(){o?(_e(!1),console.log("checkNetworkStatus",o)):(_e(!0),console.log("checkNetworkStatus",o)),console.log("dataUsers:",$)}),[o]),Object(n.useEffect)((function(){s.a.subscribe((function(e){var a=e.detail,t=a.type,n=a.data;if("VKWebAppUpdateConfig"===t){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c),Fe(c)}console.log("scheme",ze)})),ye.on("user",(function(e){je.log("user:",e),ce(e.durkaCoins),_(e.shisoids.length),v(e.rating),Me(),function(){var e=window.location.hash;if(!e||Number.isNaN(+e.replace("#","")))return;var a=Number(e.replace("#",""));u.a.post("".concat(ke,"/addShisoid"),{referrerId:a,search:document.location.search}).then((function(e){Oe.log("addShisoid",e.data)})).catch((function(e){Oe.log("addShisoid",e)}))}()})),ye.on("users",ee),ye.on("userPlace",q),ye.on("payment",(function(e){var a=e.type,t=e.durkaCoins,n=e.amount,o=e.senderId,r=(e.targetId,e.senderName);je.log("payment",e),ce(t),"out"===a?ea("\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d!"):"in"===a&&ea(c.a.createElement("span",null,c.a.createElement("a",{href:"https://vk.com/id".concat(o),target:"_blank"},r)," \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0412\u0430\u043c ".concat(n," DurkaCoins")))})),s.a.send("VKWebAppGetUserInfo").then(Z),s.a.sendPromise("VKWebAppGetClientVersion").then((function(e){"ios"===e.platform&&Ne("ios")})).catch(Ce.log)}),[]),document.qiwiPay=function(){};return c.a.createElement(p.a,{activePanel:xe,popout:m,modal:we},c.a.createElement(se,{id:"home",fetchedUser:Q,go:function(e){De(e.currentTarget.dataset.to)},tabShop:function(){be("shop")},tabHome:function(){be("home")},tabTop:function(){be("top")},activeTab:fe,dataUsers:$,getPlatform:ve,story:qe,addGroup:function e(){s.a.send("VKWebAppJoinGroup",{group_id:192779261}),Ce.log("\u0432\u044b\u0437\u0432\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e.:",e)},openBase:function e(){console.log("\u0432\u044b\u0437\u0432\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e",e),d(c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{onClose:function(){return d(null)}},c.a.createElement(y.a,{autoclose:!0,onClick:Qe},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"),c.a.createElement(y.a,{autoclose:!0,onClick:qe},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),c.a.createElement(y.a,{autoclose:!0,onClick:Je},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435"))))},dataShop:S,openPay:function(e){t=e.currentTarget.id,console.log("VALUE targetIdShop",t);var a=.2*S[t-1].price;console.log("priceItem1",a),d(c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{onClose:function(){return d(null)}},c.a.createElement(y.a,{autoclose:!0},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c DurkaCoin"),c.a.createElement(y.a,{autoclose:!0,onClick:document.qiwiPay},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 QIWI"),c.a.createElement(y.a,{autoclose:!0,onClick:Ze},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 VK Pay"))))},inventoryOpen:function(){ie(!le)},inventory:le,dataInventory:Re,transfer:$e,targetId:a,targetIdShop:t,onChangeHandlerId:Xe,onChangeHandlerAmount:Ye,shisoids:W,durkaCoins:ne,amount:e,openTransfer:function(){Pe(c.a.createElement(O.a,{activeModal:"transfer"},c.a.createElement(N.a,{id:"transfer",onClose:function(){return Pe(null)},icon:c.a.createElement(V.a,{size:72,src:"https://sun9-50.userapi.com/c857036/v857036390/aa9a0/i-iQZ4973FQ.jpg"}),header:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 DurkaCoins",caption:c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,null,c.a.createElement(k.a,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f",placeholder:"https://vk.com/durkacoin",onChange:Xe,type:"text"}),c.a.createElement(P.a,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e DurkaCoins"},c.a.createElement(k.a,{onChange:Ye,placeholder:"10",type:"text"})))),actions:[{title:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",mode:"commerce",action:function(){$e()}}]})))},snackbar:z,userPlace:R,rating:E,shopInfo:x,scheme:ze}))};s.a.send("VKWebAppInit"),r.a.render(c.a.createElement(Ne,null),document.getElementById("root"))},85:function(e,a,t){}},[[162,1,2]]]);
//# sourceMappingURL=main.615aaaf7.chunk.js.map