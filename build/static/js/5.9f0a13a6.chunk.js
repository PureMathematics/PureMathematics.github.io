(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5,8],{157:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);n(0),n(89);var i=n(1);t.default=function(e){var t=e.title;return Object(i.jsx)("div",{className:"header",children:t})}},93:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(10),l=n(0),r=n(151),s=n(137),o=n(163),a=n(19),j=n(62),d=n.n(j),u=n(87),b=n(24),h=n(29),p=(n(157),n(1)),x={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:10,marginBottom:10},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{marginBottom:10}};t.default=function(e){var t=Object(l.useContext)(a.a),n=e.header,j=Object(l.useState)(null),O=Object(c.a)(j,2),f=O[0],y=O[1];return Object(l.useEffect)((function(){fetch(b.a.experiences,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return y(e.experiences)})).catch((function(e){return e}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.default,{title:n}),f?Object(p.jsx)("div",{className:"section-content-container",children:Object(p.jsx)(s.a,{children:Object(p.jsx)(r.Timeline,{lineColor:t.timelineLineColor,children:f.map((function(e){return Object(p.jsx)(d.a,{children:Object(p.jsxs)(r.TimelineItem,{dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:x.itemStyle,bodyContainerStyle:{color:t.color},children:[Object(p.jsx)("h2",{className:"item-title",children:e.title}),Object(p.jsxs)("div",{style:x.subtitleContainerStyle,children:[Object(p.jsx)("h4",{style:Object(i.a)(Object(i.a)({},x.subtitleStyle),{},{color:t.accentColor}),children:e.subtitle}),e.workType&&Object(p.jsxs)("h5",{style:x.inlineChild,children:["\xa0\xb7"," ",e.workType]})]}),Object(p.jsx)("ul",{style:x.ulStyle,children:e.workDescription.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.a,{children:e,components:{p:"span"}})}),Object(p.jsx)("br",{})]},e)}))})]},e.title+e.dateText)})}))})})}):Object(p.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=5.9f0a13a6.chunk.js.map