(this["webpackJsonprichard-portfolio"]=this["webpackJsonprichard-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(10),r=c.n(n),a=c(1),s=c(7),i=c(2),o=(c(16),c(0));var j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("label",{htmlFor:"btn-menu",children:Object(o.jsx)("i",{className:"fas fa-bars header__iconMenu"})}),Object(o.jsx)("input",{type:"checkbox",name:"btn-menu",id:"btn-menu"}),Object(o.jsx)("h1",{className:"header__developer",children:"Richard Aguilar"}),Object(o.jsx)("div",{className:"header__menu",children:Object(o.jsxs)("div",{className:"header__menu__container",children:[Object(o.jsx)("label",{htmlFor:"btn-menu",children:Object(o.jsx)("i",{className:"fas fa-bars header__iconMenu btn-icon2"})}),Object(o.jsx)(s.b,{to:"/",className:"header__menu__container--link",title:"Projects",children:"Projects"}),Object(o.jsx)(s.b,{to:"/about-me",className:"header__menu__container--link",title:"About me",children:"About me"}),Object(o.jsx)(s.b,{to:"/contact-me",className:"header__menu__container--link",title:"Contact",children:"Contact me"})]})})]})})},l=c(4),u=c.n(l),b=c(6),h=c(3),d=c(11),m=(c(19),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],r=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://richard-portfolio-api.herokuapp.com/projects");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)}))),[]);return Object(o.jsx)("div",{className:"projectsList",children:Object(o.jsx)(d.a,{breakpointCols:{default:5,1500:4,1100:3,800:2,550:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:c.map((function(e){return Object(o.jsx)("div",{className:"projectsList__item grid-item",children:Object(o.jsx)(s.b,{to:"/project/".concat(e.name),children:Object(o.jsx)("img",{src:e.images,alt:e.description})})},e._id)}))})})});c(20);var f=function(){return Object(o.jsx)("h2",{children:"Web developer"})};c(21);var O=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(f,{}),Object(o.jsx)("div",{className:"projects-page-container",children:Object(o.jsx)(m,{})})]})};c(22);var p=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],r=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://richard-portfolio-api.herokuapp.com/info");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(o.jsxs)("div",{className:"infoContainer",children:[Object(o.jsx)("img",{className:"image",src:c.image,alt:c.name}),Object(o.jsx)("h3",{className:"tittle",children:c.tittle}),Object(o.jsx)("p",{className:"description",children:c.description})]})};c(23);var x=function(){return Object(o.jsxs)("div",{className:"container-aboutme",children:[Object(o.jsx)(j,{}),Object(o.jsx)(p,{})]})};c(24);var v=function(e){var t=e.url,c=e.icon,n=e.color,r="".concat(c," ").concat(n);return Object(o.jsx)("div",{className:"containerSocialMedia",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:t,children:Object(o.jsx)("i",{className:r})})})};c(25);var N=function(){return Object(o.jsxs)("div",{className:"mySocialMedias",children:[Object(o.jsx)("h2",{children:"Follow me."}),Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{url:"https://www.facebook.com/profile.php?id=100044622940765",icon:"fab fa-facebook-square",color:"white"}),Object(o.jsx)(v,{url:"https://www.instagram.com/ridarlar/",icon:"fab fa-instagram-square",color:"white"}),Object(o.jsx)(v,{className:"icon icon3",url:"https://github.com/RamCode1621",icon:"fab fa-github-square",color:"white"})]})]})};c(26);var _=function(){return Object(o.jsxs)("div",{className:"container-contact",children:[Object(o.jsx)(j,{}),Object(o.jsx)(N,{})]})};c(27);var w=function(e){var t=e.item;return Object(o.jsx)("i",{className:"fab fa-".concat(t.name," icon ").concat(t.colorClass)},t.name)};var g=function(e){var t=e.list;return Object(o.jsx)("div",{children:t.map((function(e){return Object(o.jsx)(w,{item:e},e.name)}))})};c(28);var k=function(){var e=Object(i.g)().id,t=Object(a.useState)({technologies:[],links:[]}),c=Object(h.a)(t,2),n=c[0],r=c[1],s=function(){var t=Object(b.a)(u.a.mark((function t(){var c,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://richard-portfolio-api.herokuapp.com/project/".concat(e));case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(o.jsxs)("div",{className:"details-project",children:[Object(o.jsx)("h3",{children:n.name}),Object(o.jsx)("img",{className:"image-project",src:n.images,alt:n.description}),Object(o.jsxs)("div",{className:"description-project",children:[n.description,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"links-project",children:[Object(o.jsxs)("span",{children:["GitHub repository: ",Object(o.jsx)("a",{href:n.links[0],target:"_blank",rel:"noopener noreferrer",children:n.links[0]})]}),Object(o.jsxs)("span",{children:["View project: ",Object(o.jsx)("a",{href:n.links[1],target:"_blank",rel:"noopener noreferrer",children:n.links[1]})]})]}),Object(o.jsx)("span",{children:"This project has make with:"}),Object(o.jsx)(g,{list:n.technologies})]})]})},y=(c(29),function(){return Object(o.jsxs)("div",{className:"container-detailsProject",children:[Object(o.jsx)(j,{}),Object(o.jsx)(k,{})]})});c(30),c(31);var C=function(){var e=Object(a.useState)({views:0}),t=Object(h.a)(e,2),c=t[0],n=t[1],r=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://richard-portfolio-api.herokuapp.com/globalVules/numViews");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(o.jsx)("div",{className:"counter-views",children:Object(o.jsx)("i",{className:"fas fa-eye iconViews",children:Object(o.jsx)("span",{children:c.views})})})};c(32);var S=function(){return Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsx)("p",{className:"footer-p",children:"\xa9 2022 Richard Aguilar - BatCode "}),Object(o.jsx)(C,{})]})};var E=function(){return Object(o.jsxs)(s.a,{children:[Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(O,{}),exact:!0}),Object(o.jsx)(i.a,{path:"about-me",element:Object(o.jsx)(x,{})}),Object(o.jsx)(i.a,{path:"contact-me",element:Object(o.jsx)(_,{})}),Object(o.jsx)(i.a,{path:"/project/:id",element:Object(o.jsx)(y,{})})]}),Object(o.jsx)(S,{})]})},F=document.getElementById("root");r.a.render(Object(o.jsx)(E,{}),F)}],[[33,1,2]]]);
//# sourceMappingURL=main.1b40dfc5.chunk.js.map