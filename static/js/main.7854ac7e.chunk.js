(this.webpackJsonpassignments=this.webpackJsonpassignments||[]).push([[0],{12:function(t,a,e){},14:function(t,a,e){},15:function(t,a,e){"use strict";e.r(a);var n=e(1),r=e.n(n),o=e(7),i=e.n(o),s=(e(12),e(2)),c=e(0),l=function(t){return Object(c.jsx)("div",{children:t.result})},d=e(5);e(14);var b=function(t){var a="",e=Object(n.useState)(0),r=Object(s.a)(e,2),o=r[0],i=r[1],b=Object(n.useState)(""),u=Object(s.a)(b,2),j=u[0],g=u[1],p=Object(n.useState)(t.initialChartData),O=Object(s.a)(p,2),h=O[0],x=O[1],f=[{label:"Current Actual",data:h[0],backgroundColor:"#fff",borderColor:"rgba(255,0,0,0.5)",tension:.4},{label:"Previous Period",data:h[1],backgroundColor:"#fff",borderColor:"rgba(0,0,255,0.5)",tension:.4},{label:"Upcoming Period - No Bezier",data:h[2],backgroundColor:"#fff",borderColor:"rgba(255,255,0, 0.5)",tension:.4}],C=[{label:"Current Actual",data:h[0],backgroundColor:"rgba(255,0,0,0.5)"},{label:"Previous Period",data:h[1],backgroundColor:"rgba(0,0,255,0.5)"},{label:"Upcoming Period - No Bezier",data:h[2],backgroundColor:"rgba(255,255,0,0.5)"}],v=[{label:"Current Actual",data:h[0],backgroundColor:"rgba(255,0,0,0.5)"},{label:"Previous Period",data:h[1],backgroundColor:"rgba(0,0,255,0.5)"},{label:"Upcoming Period - No Bezier",data:h[2],backgroundColor:"rgba(255,255,0,0.5)"}],m=Object(n.useState)(t.initialOptions),k=Object(s.a)(m,2),y=k[0];return k[1],"line"===j?(t.data.datasets=[].concat(f),a=Object(c.jsx)(d.c,{data:t.data,options:y})):"bar"===j?(t.data.datasets=[].concat(C),a=Object(c.jsx)(d.a,{data:t.data,options:y})):"doughnut"===j?(t.data.datasets=[].concat(v),a=Object(c.jsx)(d.b,{data:t.data,options:y})):(t.data.datasets=[].concat(C),a=Object(c.jsx)(d.a,{data:t.data,options:y})),Object(c.jsxs)("section",{className:"App",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("select",{style:{padding:"5px"},name:"",id:"",value:j,onChange:function(t){return g(t.target.value)},children:[Object(c.jsx)("option",{value:"",children:"Select Chart Type"}),Object(c.jsx)("option",{value:"line",children:"Line"}),Object(c.jsx)("option",{value:"bar",children:"Bar"}),Object(c.jsx)("option",{value:"doughnut",children:"Doughnut"})]})}),Object(c.jsx)("article",{className:"chart",children:Object(c.jsx)(l,{result:a})}),Object(c.jsxs)("div",{className:"filters",children:[Object(c.jsx)("input",{type:"number",value:o,onChange:function(t){return i(t.target.value)}}),Object(c.jsxs)("div",{className:"filterButtons",children:[Object(c.jsxs)("button",{style:{marginRight:"5px"},onClick:function(){var t=h.map((function(t){return t.filter((function(t){return t>o}))}));x(t)},children:[" Greater than ",o," "]}),Object(c.jsx)("button",{onClick:function(){x(t.initialChartData),i(0)},children:"Reset"})]})]})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"],datasets:[]},initialChartData:[[65,50,83,75,45,40,30],[35,45,40,20,80,25,85],[45,20,40,60,35,15,75]],initialOptions:{responsive:!0,maintainAspectRatio:!0,aspectRatio:2,scales:{xAxes:{grid:{display:!1},title:{display:!0,text:"Months"}},yAxes:{beginAtZero:!0,grid:{display:!1},title:{display:!0,text:"Values"}}},plugins:{title:{display:!0,text:"Volume Trends",align:"center",padding:{top:20,bottom:30}},legend:{display:!0,position:"bottom"}}}})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7854ac7e.chunk.js.map