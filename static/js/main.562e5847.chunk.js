(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c.n(n),s=c(38),A=c.n(s),r=c(13),j=c(27),i=c(0),d=c.n(i),l=c(1),u=c(11),b=c(22),O=c(39),o=c(15),m=c(24),g=(Object(O.a)({apiKey:"AIzaSyAAXDf6iSUR2A_ddLqsh8ulO9GG4tG2dTc",authDomain:"chat-347db.firebaseapp.com",projectId:"chat-347db",storageBucket:"chat-347db.appspot.com",messagingSenderId:"454696638541",appId:"1:454696638541:web:4f138342c55afd5e042404",measurementId:"G-1ZTH8JVJJB"}),Object(b.b)()),h=Object(o.g)(),v=Object(m.b)(),p=c(8),x=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(r.n)(),A=function(){var e=Object(l.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=t.target[0].value,n=t.target[1].value,e.prev=3,e.next=6,Object(b.d)(g,c,n);case 6:s("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),a(!0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"formContainer",children:Object(p.jsxs)("div",{className:"formWrapper",children:[Object(p.jsx)("span",{className:"logo",children:"UNCHAT"}),Object(p.jsx)("span",{className:"title",children:"Login"}),Object(p.jsxs)("form",{onSubmit:A,children:[Object(p.jsx)("input",{type:"email",placeholder:"Email"}),Object(p.jsx)("input",{type:"password",placeholder:"Password"}),Object(p.jsx)("button",{children:"Sign In"}),c&&Object(p.jsx)("span",{children:"Something went Wrong"})]}),Object(p.jsxs)("p",{children:["You don't have a account? ",Object(p.jsx)(j.b,{to:"/register",children:"REGISTER"})]})]})})},R=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),A=Object(u.a)(s,2),i=A[0],O=A[1],x=Object(r.n)(),R=function(){var e=Object(l.a)(d.a.mark((function e(t){var c,n,s,A,r,j,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=t.target[0].value,n=t.target[1].value,s=t.target[2].value,A=t.target[3].files[0],e.prev=5,e.next=8,Object(b.a)(g,n,s);case 8:return r=e.sent,j=(new Date).getTime(),i=Object(m.c)(v,"".concat(c+j)),e.next=13,Object(m.d)(i,A).then((function(){Object(m.a)(i).then(function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.f)(r.user,{displayName:c,photoURL:t});case 3:return e.next=5,Object(o.k)(Object(o.d)(h,"users",r.user.uid),{uid:r.user.uid,displayName:c,email:n,photoURL:t});case 5:return e.next=7,Object(o.k)(Object(o.d)(h,"userChats",r.user.uid),{});case 7:x("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),a(!0),O(!1);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}));case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),a(!0),O(!1);case 19:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"formContainer",children:Object(p.jsxs)("div",{className:"formWrapper",children:[Object(p.jsx)("span",{className:"logo",children:"UNCHAT"}),Object(p.jsx)("span",{className:"title",children:"Register"}),Object(p.jsxs)("form",{onSubmit:R,children:[Object(p.jsx)("input",{type:"text",placeholder:"Display Name"}),Object(p.jsx)("input",{type:"email",placeholder:"Email"}),Object(p.jsx)("input",{type:"password",placeholder:"Password"}),Object(p.jsx)("input",{style:{display:"none"},type:"file",id:"file"}),Object(p.jsxs)("label",{htmlFor:"file",children:[Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(p.jsx)("span",{children:"Add an Avatar"})]}),Object(p.jsx)("button",{children:"Sign Up"}),i&&"Uploading and compressing the image please wait...",c&&Object(p.jsx)("span",{children:"Something went Wrong"})]}),Object(p.jsxs)("p",{children:["You do have a account? ",Object(p.jsx)(j.b,{to:"/login",children:"LOGIN"})]})]})})},C=Object(n.createContext)(),G=function(e){var t=e.children,c=Object(n.useState)({}),a=Object(u.a)(c,2),s=a[0],A=a[1];return Object(n.useEffect)((function(){var e=Object(b.c)(g,(function(e){A(e)}));return function(){e()}}),[]),Object(p.jsx)(C.Provider,{value:{currentUser:s},children:t})},y=Object(n.createContext)(),I=function(e){var t=e.children,c=Object(n.useContext)(C).currentUser,a=Object(n.useReducer)((function(e,t){return"CHANGE_USER"===t.type?{user:t.payload,chatId:c.uid>t.payload.uid?c.uid+t.payload.uid:t.payload.uid+c.uid}:e}),{chatId:"null",user:{}}),s=Object(u.a)(a,2),A=s[0],r=s[1];return Object(p.jsx)(y.Provider,{value:{data:A,dispatch:r},children:t})},D=function(e){var t=e.message,c=Object(n.useContext)(C).currentUser,a=Object(n.useContext)(y).data,s=Object(n.useRef)();return Object(n.useEffect)((function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView({bevavior:"smooth"})}),[t]),Object(p.jsxs)("div",{ref:s,className:"message ".concat(t.senderId===c.uid&&"owner"),children:[Object(p.jsxs)("div",{className:"messageinfo",children:[Object(p.jsx)("img",{src:t.senderId===c.uid?c.photoURL:a.user.photoURL,alt:""}),Object(p.jsx)("span",{children:t.date.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]}),Object(p.jsxs)("div",{className:"messagecontent",children:[Object(p.jsx)("p",{children:t.text}),t.img&&Object(p.jsx)("img",{src:t.img,alt:""})]})]})},k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(y).data;return Object(n.useEffect)((function(){var e=Object(o.h)(Object(o.d)(h,"chats",s.chatId),(function(e){e.exists()&&a(e.data().messages)}));return function(){e()}}),[s.chatId]),Object(p.jsx)("div",{className:"messages",children:c.map((function(e){return Object(p.jsx)(D,{message:e},e.id)}))})},w=c(4),f=c(52),B=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),A=Object(u.a)(s,2),r=A[0],j=A[1],i=Object(n.useContext)(C).currentUser,b=Object(n.useContext)(y).data,O=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n,s,A;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}s=Object(m.c)(v,Object(f.a)()),(A=Object(m.d)(s,r)).on((function(e){}),(function(){Object(m.a)(A.snapshot.ref).then(function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.l)(Object(o.d)(h,"chats",b.chatId),{messages:Object(o.b)({id:Object(f.a)(),text:c,senderId:i.uid,date:o.a.now(),img:t})});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),e.next=8;break;case 6:return e.next=8,Object(o.l)(Object(o.d)(h,"chats",b.chatId),{messages:Object(o.b)({id:Object(f.a)(),text:c,senderId:i.uid,date:o.a.now()})});case 8:return e.next=10,Object(o.l)(Object(o.d)(h,"userChats",i.uid),(t={},Object(w.a)(t,b.chatId+".lastMessage",{text:c}),Object(w.a)(t,b.chatId+".date",Object(o.j)()),t));case 10:return e.next=12,Object(o.l)(Object(o.d)(h,"userChats",b.user.uid),(n={},Object(w.a)(n,b.chatId+".lastMessage",{text:c}),Object(w.a)(n,b.chatId+".date",Object(o.j)()),n));case 12:a(""),j(null);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("input",{type:"text",placeholder:"Type Something",onChange:function(e){return a(e.target.value)},value:c}),Object(p.jsxs)("div",{className:"send",children:[Object(p.jsx)("img",{src:r,alt:""}),Object(p.jsx)("input",{type:"file",style:{display:"none"},id:"file",onChange:function(e){return j(e.target.files[0])}}),Object(p.jsx)("label",{htmlFor:"file",children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RBhBiyiCSAAACDklEQVRYw+2XPUgbcRjGn0vtUj8mzRDBUSeXkkgbHCS4xWiV1FWQkqWEwkF7yQUUOoTGFheziDpEJzPce5JIN48YMgnRkg4NnbocItr6kaXX4e2QEEqwekkuXXrP+D7Pvff7P8v/DrDVhPa809OU1DTyVCrkqVQoqWmqOxBoZ6dgNkiH8TguotFbzUg8PluOxVoBcJg9OS6iUQwZhvAxEuEXLpfj/eAgHkkShgwD72SZRqam2mni7tMnNY2IWQ1JUqOnhiSJiJlGDg461gBSHg8AGJOpVKNVn4lud+cA5O5uAJifPz1ttOozZ29v5wAaROFCgc7y+Vb9P9XVCgB8Xi8KbfjtNmClbAAbwAawAWyA1u6Ckq5j1OVSvo+PAwBytdk/a+DDzg4ACLl8XshVbz3hy/Z25wDObm4AIL3b0wMAvzaWlrCQSKCk6yjpOhYSCWNmeRkA9ry174LaM5aINo+PiZiJJybuyyorPh8RMz0pFq1rYDKbBQC8EcV7F55UM0Iok7GsAWXF6aT162siZtUny3/NlWKxalOXl5nH/f1mdpv+L1APg0HeTKcxKwh4ms065lZXf746OgKArm9jY44TUeTnfj+ImV8Hg3OjimIpQB3i7dYWXvb13Rp4dnXFnxcXzb68aQAASO8ODDxcD4eFT34/fx0eBgDkymXhx/7+g+TaWqB4ft7szv9bvwGBKNSBpuqWcAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0zMVQxNzowNjoxNiswMDowMJSH2i8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMzFUMTc6MDY6MTYrMDA6MDDl2mKTAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA4LTMxVDE3OjA2OjE2KzAwOjAwss9DTAAAAABJRU5ErkJggg==",alt:""})}),Object(p.jsx)("button",{onClick:O,children:"Send"})]})]})},Y=function(){var e,t=Object(n.useContext)(y).data;return Object(p.jsxs)("div",{className:"chat",children:[Object(p.jsxs)("div",{className:"chatinfo",children:[Object(p.jsx)("span",{children:null===(e=t.user)||void 0===e?void 0:e.displayName}),Object(p.jsxs)("div",{className:"chaticons",children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmRjMjBmNTM2LTJhZjUtNGM3My05ZjZjLTAzMzkwY2JlN2VjMDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PvItxZYAAAKwSURBVFiF7Ze9bhNBFIW/M2s7JqJAUKdKpJS8AwXpkRANzxAJ0cIbREi8AAUSSqBFUNDxBrQoilLTUeQPxzuHYmYdx3Y2tpdYSPGRVusdz5355ufeuQNLLbXUUrdbGi04ODgd+isSggR4Ut0pZRvZOASQoN+HjY07swPaZn//BElIKAQszcs13G5q264GKyRPxFhf716ybY0RKz2AJboS3dTofJLARmXJEagPxh70gR2RiivtxwBDCAGIwOMYvQu0mwBm2xVbP4Et0C/JGU+2jaS7wNFUgDE6ADEEPbJ1HxyB0AAwz5YegreA90ArRp+HACEUOxA/A99zP3HYtq7jMzCS+pI87wOK1dKC2/ltSdi8Ab8En+byMYixGZwAr5H3jHK21aANyX3wjs2LBH+16gCH1cCVL5nG7CRvJbbTN6Gu/UZ7a1bZ/JF4BdpOMydxzeCnncGmKkhh6zWwmYqcw7azU0zmvHFAKcUSCYE2bZy9ugo11EWxG1/iBCTZsk3M3luF6WvtF7UHDdalT2Aa31vAElvpaFMEh6HfmgZwAUucArbtYOurpGPbIQXw/2eJI4DNO+BJ2ocuMmTtTC4IMKWTkh/Y/gY8T2mcA6i8OObGZ3QqQNsNspkq1zU5OGP7A/AsQ7byeT3Rus5JKqhSDbLWbFqCCqDIza7Y/iQpgHZTEgGTIOsAOwC2uzV1plXVz+8M0odY2OxdDCD1di2glCrb/ihpg3+TsHaAwxD0JSG4bLdXOTs7FoS9VqujTqeg1yvrAfNWqzbNjxjj00bbb0ijuyTGSKfT9fl5T1A6xsBgIq8CzMcQpINd6TYW48W5ObcsKdgMEoOyTGlgCIVjNL1eb/LARgsOD09ptUS7DScnxh69gc0qke8d9Ptn2GZ19R5ra81vi0sttdRSt0F/AbV4QUoZ1kOTAAAAAElFTkSuQmCC",alt:""}),Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQyOGI5NDkyLTJiMDAtNDVjZC1iNDc4LTNjODM4YzMxZTZhMzwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZh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",alt:""}),Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmNhNTE4ODMwLTBmMmYtNGY0NC1iYzQ2LWVlM2JlZmQ4MmIxNjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PlV4Lz0AAANzSURBVFiF7ZVNixxlFIWfc6u6pyYzi7iImkUWSXqT+Ilg/Fhkl1VcuAn+BUFw7Q/wX7gRQXAl/gIFQQ0EBKMizkdGgpBFxF07091V97iot+ejZ4xuhTrQ0FWc973nPee+t2DAgAEDBgwYMOD/DJ31cnf3L6qqQUq6bkEmIYGkvHx5jUzY25sBpqqEBF1nbEmyAEfgiI62rYiAtoVMqCqQUKltOyyBbSaT5t8F7u7ukwlSX6eqyK6DIhA7Q3LaM+BwwwDS7sVSKj98eD8nk9eYzw8AA2g6XXhzc3ysfBd2lWUVk8n6CT2xKtCmFLGAlKIBXgJekWIT1MvX6Pghs6rqAL0AvAo8BeSlS89rOv0D29i9YxsbNcA1iRvABZvMXCBVbG76lIOnBBbno5fql9u2+0nie+Be17W/2r5p23ZEWW+bK23b3gP/AHwHfiBxR5JHo3Mh9eYDT0v6CvjZ5lvbDyDei6ix29jfh+1tn1JzAjs7+yUOVeAfQdf6SJGEbB5H8JzNY0hltpbWvpH8Zh9z31+SZqAXwVtABe5sPgPe6VPwcj+AN0B3gZjPm7x+/UjWGQ6iovuqxESyj3pLC+BCJrf6jWtLzQsSr9skaNmrc9trkG/bJmLRAc8At0tvlx7XrJS8LRnJoRXL6lPqdGjxCIo6oBfppfjNY9z1k0lIJQFsn+vfrSHlOjByH8XyFqscaukk58+f1HPGJdHy98hm3jvCXGIB1OX5bj8aGiDu2/xeRscMPC/tAfA1QNe1MR4/+s32VilTeJTD8Es5nC9ePNmDZwm0lCH5T+ADG2yv2R73wvkwk/uZCA4C8kDi/eJYY2sMroCPwF9KliRms2eReFdiatPYjG2PJH2+sdF8urGxToS6EthRHqsCt7cPkGCxWFDXNRK3JG4CYXMvIr9o25qIJLNDCtF3/A2Jt3qet2x9EtHRFzSgoB9b14A7wBp4t6rWP27bg1w2x5UrTenPfxC4s3PQWxsiM8vuPqRXVarrwgBXrzZsbU2JiJCURzxYLMRoVOYvuQwrpEj7iFfXDW07Y7l2Mjn35IgnkwbJjMdJXduFU5dftVhUzuyX7e3NmM3MdDrPVd547MOi0hg76T926Div6+blsomqOnVnz/4WQz99V59PWF/+r/JOFTi25klcrc6XAQMGDBgwYMCA/4K/AR9NvILUl7eBAAAAAElFTkSuQmCC",alt:""})]})]}),Object(p.jsx)(k,{}),Object(p.jsx)(B,{})]})},U=function(){var e=Object(n.useContext)(C).currentUser;return Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)("span",{className:"logo",children:"UNCHAT"}),Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)("img",{src:e.photoURL,alt:""}),Object(p.jsx)("span",{children:e.displayName}),Object(p.jsx)("button",{onClick:function(){return Object(b.e)(g)},children:"Logout"})]})]})},Z=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),A=Object(u.a)(s,2),r=A[0],j=A[1],i=Object(n.useState)(!1),b=Object(u.a)(i,2),O=b[0],m=b[1],g=Object(n.useContext)(C).currentUser,v=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.i)(Object(o.c)(h,"users"),Object(o.m)("displayName","==",c)),e.prev=1,e.next=4,Object(o.f)(t);case 4:e.sent.forEach((function(e){j(e.data())})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(!0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(d.a.mark((function e(){var t,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.uid>r.uid?g.uid+r.uid:r.uid+g.uid,e.prev=1,e.next=4,Object(o.e)(Object(o.d)(h,"chats",t));case 4:if(e.sent.exists()){e.next=12;break}return e.next=8,Object(o.k)(Object(o.d)(h,"chats",t),{messages:[]});case 8:return e.next=10,Object(o.l)(Object(o.d)(h,"userChats",g.uid),(c={},Object(w.a)(c,t+".userInfo",{uid:r.uid,displayName:r.displayName,photoURL:r.photoURL}),Object(w.a)(c,t+".date",Object(o.j)()),c));case 10:return e.next=12,Object(o.l)(Object(o.d)(h,"userChats",r.uid),(n={},Object(w.a)(n,t+".userInfo",{uid:g.uid,displayName:g.displayName,photoURL:g.photoURL}),Object(w.a)(n,t+".date",Object(o.j)()),n));case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:j(null),a("");case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"search",children:[Object(p.jsx)("div",{className:"searchform",children:Object(p.jsx)("input",{type:"text",placeholder:"Find a user",onKeyDown:function(e){"Enter"===e.code&&v()},onChange:function(e){return a(e.target.value)},value:c})}),O&&Object(p.jsx)("span",{children:"User not Found"}),r&&Object(p.jsxs)("div",{className:"userchat",onClick:x,children:[Object(p.jsx)("img",{src:r.photoURL,alt:""}),Object(p.jsx)("div",{className:"userchatinfo",children:Object(p.jsx)("span",{children:r.displayName})})]})]})},M=function(){var e,t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],s=c[1],A=Object(n.useContext)(C).currentUser,r=Object(n.useContext)(y).dispatch;Object(n.useEffect)((function(){A.uid&&function(){var e=Object(o.h)(Object(o.d)(h,"userChats",A.uid),(function(e){s(e.data())}))}()}),[A.uid]);return Object(p.jsx)("div",{className:"chats",children:null===(e=Object.entries(a))||void 0===e?void 0:e.sort((function(e,t){return t[1].date-e[1].date})).map((function(e){var t;return Object(p.jsxs)("div",{className:"userchat",onClick:function(){return t=e[1].userInfo,void r({type:"CHANGE_USER",payload:t});var t},children:[Object(p.jsx)("img",{src:e[1].userInfo.photoURL,alt:""}),Object(p.jsxs)("div",{className:"userchatinfo",children:[Object(p.jsx)("span",{children:e[1].userInfo.displayName}),Object(p.jsx)("p",{children:null===(t=e[1].lastMessage)||void 0===t?void 0:t.text})]})]},e[0])}))})},N=function(){return Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsx)(U,{}),Object(p.jsx)(Z,{}),Object(p.jsx)(M,{})]})},P=function(){return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(N,{}),Object(p.jsx)(Y,{})]})})},J=(c(49),function(){var e=Object(n.useContext)(C).currentUser,t=function(t){var c=t.children;return e?c:Object(p.jsx)(r.a,{to:"/login"})};return Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{basename:"/unchat",children:Object(p.jsx)(r.d,{children:Object(p.jsxs)(r.b,{path:"/",children:[Object(p.jsx)(r.b,{index:!0,element:Object(p.jsx)(t,{children:Object(p.jsx)(P,{})})}),Object(p.jsx)(r.b,{path:"login",element:Object(p.jsx)(x,{})}),Object(p.jsx)(r.b,{path:"register",element:Object(p.jsx)(R,{})})]})})})})});A.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(G,{children:Object(p.jsx)(I,{children:Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(J,{})})})}))}},[[50,1,2]]]);
//# sourceMappingURL=main.562e5847.chunk.js.map