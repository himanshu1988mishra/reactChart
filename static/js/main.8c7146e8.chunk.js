(this.webpackJsonpassignments=this.webpackJsonpassignments||[]).push([[0],{12:function(t,a,e){},14:function(t,a,e){},15:function(t,a,e){"use strict";e.r(a);var n=e(1),o=e.n(n),i=e(7),r=e.n(i),s=(e(12),e(2)),l=e(0),c=function(t){return Object(l.jsx)("div",{children:t.result})},d=e(5);e(14);var b=function(t){var a="",e=Object(n.useState)(0),o=Object(s.a)(e,2),i=o[0],r=o[1],b=Object(n.useState)(""),u=Object(s.a)(b,2),j=u[0],g=u[1],p=Object(n.useState)(t.initialChartData),O=Object(s.a)(p,2),h=O[0],x=O[1],f=[{label:"Current Actual",data:h[0],backgroundColor:"#fff",borderColor:"rgba(255,0,0,0.5)",tension:.4},{label:"Previous Period",data:h[1],backgroundColor:"#fff",borderColor:"rgba(0,0,255,0.5)",tension:.4},{label:"Upcoming Period - No Bezier",data:h[2],backgroundColor:"#fff",borderColor:"rgba(255,255,0, 0.5)",tension:.4}],C=[{label:"Current Actual",data:h[0],backgroundColor:"rgba(255,0,0,0.5)"},{label:"Previous Period",data:h[1],backgroundColor:"rgba(0,0,255,0.5)"},{label:"Upcoming Period - No Bezier",data:h[2],backgroundColor:"rgba(255,255,0,0.5)"}],v=[{label:"Current Actual",data:h[0],backgroundColor:"rgba(255,0,0,0.5)"},{label:"Previous Period",data:h[1],backgroundColor:"rgba(0,0,255,0.5)"},{label:"Upcoming Period - No Bezier",data:h[2],backgroundColor:"rgba(255,255,0,0.5)"}],m=Object(n.useState)(t.initialOptions),y=Object(s.a)(m,2),k=y[0];return y[1],"line"===j?(t.data.datasets=[].concat(f),a=Object(l.jsx)(d.c,{data:t.data,options:k})):"bar"===j?(t.data.datasets=[].concat(C),a=Object(l.jsx)(d.a,{data:t.data,options:k})):"doughnut"===j?(t.data.datasets=[].concat(v),a=Object(l.jsx)(d.b,{data:t.data,options:k})):(t.data.datasets=[].concat(C),a=Object(l.jsx)(d.a,{data:t.data,options:k})),Object(l.jsxs)("section",{className:"App",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("select",{style:{padding:"5px"},name:"",id:"",value:j,onChange:function(t){return g(t.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Select Chart Type"}),Object(l.jsx)("option",{value:"line",children:"Line"}),Object(l.jsx)("option",{value:"bar",children:"Bar"}),Object(l.jsx)("option",{value:"doughnut",children:"Doughnut"})]})}),Object(l.jsx)("article",{className:"chart",children:Object(l.jsx)(c,{result:a})}),Object(l.jsxs)("div",{className:"filters",children:[Object(l.jsx)("input",{type:"number",value:i,onChange:function(t){return r(t.target.value)}}),Object(l.jsxs)("div",{className:"filterButtons",children:[Object(l.jsxs)("button",{style:{marginRight:"5px"},onClick:function(){var t=h.map((function(t){return t.filter((function(t){return t>i}))}));x(t)},children:[" Greater than ",i," "]}),Object(l.jsx)("button",{onClick:function(){x(t.initialChartData),r(0)},children:"Reset"})]})]})]})};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"],datasets:[]},initialChartData:[[65,50,83,75,45,40,30],[35,45,40,20,80,25,85],[45,20,40,60,35,15,75]],initialOptions:{responsive:!0,maintainAspectRatio:!0,aspectRatio:2,scales:{xAxes:{grid:{display:!1},title:{display:!0,text:"Months"}},yAxes:{beginAtZero:!0,grid:{display:!1},title:{display:!0,text:"Values"}}},plugins:{title:{display:!0,text:"Toyota Daily Retail Sale",align:"start",padding:{top:20,bottom:30}},legend:{display:!0,position:"bottom"}}}})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8c7146e8.chunk.js.map