(this["webpackJsonppoker-calculator"]=this["webpackJsonppoker-calculator"]||[]).push([[0],{19:function(t,e,a){},20:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(3),s=a.n(r),i=a(9),c=a.n(i),l=(a(19),a.p,a(20),a(10)),o=a(11),h=a(13),u=a(12),d=a(2),f=a(26),j=a(27),p=a(28),b=a(31),g=a(29),v=a(30);function O(t){var e=Object(d.a)(t).map((function(t){return M(t)})).sort((function(t,e){return t-e})),a=!1;for(var n in e)if(13===e[n]){a=!0;break}a&&e.unshift(0),console.log(e);var r=[e[0]];for(var s in e)if(e[s]!==r[r.length-1])if(e[s]===r[r.length-1]+1)r[r.length]=e[s];else{if(e.length-s+1<5)break;r.length<5&&(r=[e[s]])}return console.log(r),r.length>=5&&3500+k(r)}function x(t){for(var e=t.map((function(t){return M(t)})).sort().reverse(),a=0,n=0,r=0;r<e.length;r++)r<e.length&&(e[r]===e[r+1]?(a++,n=e[r]):a>0&&(r=e.length));switch(console.log(a),a){case 1:return n+2e3;case 2:return n+3e3;case 3:return n+6e3;default:return!1}return console.log(e+"is false??"),!1}function m(t){var e=[],a=Object(d.a)(t);if(e[0]=x(a)||0,!(e[0]>0))return!1;a=a.filter((function(t){return M(t)!=e[0]%1e3})),e[1]=x(a)||0,e[1]>0&&(a=a.filter((function(t){return M(t)!=e[1]%1e3})),e[2]=x(a)||0);var n=Math.max.apply(Math,Object(d.a)(e));if(n>6e3)return console.log("over 6k"),n-n%1e3+C(n%1e3+13)+C(Math.max.apply(Math,Object(d.a)(t.filter((function(t){return M(t!=M(n%1e3))})).map((function(t){return M(t)})))));if(n>3e3)return console.log(e),e=e.filter((function(t){return t!=n})),Math.max.apply(Math,Object(d.a)(e))>0?n-n%1e3+3*C(n%1e3+13)+Math.max.apply(Math,Object(d.a)(e))-Math.max.apply(Math,Object(d.a)(e))%1e3+2*C(Math.max.apply(Math,Object(d.a)(e))%1e3+13)+(Math.max.apply(Math,Object(d.a)(e))>=3e3?-1e3:0):n-n%1e3+C(n%1e3+13)+function(){a=Object(d.a)(t).filter((function(t){return M(t)!=n%1e3})).map((function(t){return M(t)}));for(var e=0,r=0;r<2;r++)e+=C(Math.max.apply(Math,Object(d.a)(a))),a=a.filter((function(t){return t!=Math.max.apply(Math,Object(d.a)(a))}));return e}();if(n>2e3){e=e.filter((function(t){return t!=n}));var r=0|Math.max.apply(Math,Object(d.a)(e));return r>0?n-n%1e3+r-r%1e3-1500+49*C(n%1e3)*28+49*C(r%1e3)*21+C(Math.max.apply(Math,Object(d.a)(Object(d.a)(t).map((function(t){return M(t)})).filter((function(t){return t!=n%1e3&&t!=r%1e3}))))):n-n%1e3+n%1e3*7+k([n%1e3,n%1e3].concat(Object(d.a)(function(t,e){var a=Object(d.a)(t).sort((function(t,e){return t-e}));for(;a.length>e;)a.shift();return a}(Object(d.a)(t).map((function(t){return M(t)})).filter((function(t){return t!=n%1e3})),3))))}return console.log("error no pair but still got here"),!1}function C(t){return M(t)*Math.pow(7,M(t)/3)/3e6}function M(t){return 0==t?0:t%13==0?13:t%13}function k(t){for(var e=Object(d.a)(t).map((function(t){return M(t)})).sort((function(t,e){return t-e}));e.length>5;)e.shift();return e.reduce((function(t,e){return t+C(e)}))}function y(t){var e=[];return e[e.length]=function(t){var e=t.slice();console.log(e);for(var a=[[],[],[],[]],n=[0,0,0,0],r=0;r<e.length;r++)e[r]<=13?(a[0].push(e[r]),n[0]++):e[r]>13&&e[r]<=26?(a[1].push(e[r]),n[1]++):e[r]>26&&e[r]<=39?(a[2].push(e[r]),n[2]++):e[r]>39&&e[r]<=52?(a[3].push(e[r]),n[3]++):console.log("couldn't catch  "+e[r]);var s=n.indexOf(Math.max.apply(Math,n));if(n[s]>=5){var i=O(a[s]);if(i)return 2*i;for(;a[s].length>5;)a[s].splice(a[s].indexOf(Math.min(a[s])),1);return 4e3+function(){var t=0;for(var e in a[s])t+=C(a[s][e]);return t}()}return!1}(t)||0,e[e.length]=O(t)||0,e[e.length]=m(t)||0,e[e.length]=k(t)||0,Math.max.apply(Math,e)}var S=[17,22,43,35,23,30,34];function R(t,e){return t===e?"Tied":t>e?"Wins":"Loses"}console.log("handevaluator: "+y(S)),console.log("handevaluator: "+y([1,24,43,35,23,30,34])),console.log("pairevaluator: "+m(S)),console.log("winner is "+(y(S)>y([1,24,43,35,23,30,34])));var A=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).table=function(){var t=[];for(var e in r.state.tableCards)t.push(Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(j.a,{onClick:e<=2?r.flopCards:e<=3?r.turnCards:r.riverCards,className:"flipCard",children:Object(n.jsx)(p.a,{src:e<=2&&r.state.flop||e<=3&&r.state.turn||e<=4&&r.state.river?"./images/".concat(r.state.tableCards[e],".svg"):"./images/53.svg"})}),Object(n.jsx)("p",{children:r.state.debug?r.state.tableCards[e]+" ("+(M(r.state.tableCards[e])+1)+")":""})]})}));return Object(n.jsx)(n.Fragment,{children:t})},r.leftHand=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{onClick:r.revealLeft,className:"flipCard",children:Object(n.jsx)(p.a,{src:r.state.revealLeft?"./images/".concat(r.state.handA[0],".svg"):"./images/53.svg"})}),Object(n.jsx)(j.a,{onClick:r.revealLeft,className:"flipCard",children:Object(n.jsx)(p.a,{src:r.state.revealLeft?"./images/".concat(r.state.handA[1],".svg"):"./images/53.svg"})})]})},r.rightHand=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{onClick:r.revealRight,className:"flipCard",children:Object(n.jsx)(p.a,{src:r.state.revealRight?"./images/".concat(r.state.handB[0],".svg"):"./images/53.svg"})}),Object(n.jsx)(j.a,{onClick:r.revealRight,className:"flipCard",children:Object(n.jsx)(p.a,{src:r.state.revealRight?"./images/".concat(r.state.handB[1],".svg"):"./images/53.svg"})})]})},r.state={tableCards:[53,53,53,53,53],handA:[53,53],handB:[53,53],handsPlayed:0,leftWins:0,rightWins:0,ties:0,deck:new Array(52).fill(0).map((function(t,e){return e+1})),debug:!1,handAValue:0,handBValue:0,flop:!1,turn:!1,river:!1,displayCards:!1,dealt:!1,revealRight:!1,revealLeft:!1},r.showDebug=function(){r.setState({debug:!r.state.debug})},r.revealAll=function(){r.setState({revealLeft:!0,revealRight:!0,flop:!0,turn:!0,river:!0})},r.revealLeft=function(){r.setState({revealLeft:!r.state.revealLeft})},r.revealRight=function(){r.setState({revealRight:!r.state.revealRight})},r.flopCards=function(){r.setState({flop:!r.state.flop})},r.turnCards=function(){r.setState({turn:!r.state.turn})},r.riverCards=function(){r.setState({river:!r.state.river})},r.dealHand=function(){var t=[[],[],[],r.state.deck],e=t[0],a=t[1],n=t[2],s=t[3];s=function(t,e){for(var a=Object(d.a)(e),n=0;n<t;n++)for(var r in a){var s=Math.floor(Math.random()*Math.floor(52)),i=[a[s],a[r]];a[r]=i[0],a[s]=i[1]}return a}(5,s),e.push(s.pop()),a.push(s.pop()),e.push(s.pop()),a.push(s.pop()),s.pop(),n.push(s.pop()),n.push(s.pop()),n.push(s.pop()),s.pop(),n.push(s.pop()),s.pop(),n.push(s.pop()),console.log([].concat(Object(d.a)(e),Object(d.a)(n))),r.setState({handA:Object(d.a)(e),handB:Object(d.a)(a),tableCards:Object(d.a)(n),handAValue:y([].concat(Object(d.a)(e),Object(d.a)(n))),handBValue:y([].concat(Object(d.a)(a),Object(d.a)(n))),dealt:!0,flop:!1,river:!1,turn:!1,revealRight:!1,revealLeft:!1})},r}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"text-center",style:{backgroundColor:"#4caf50",border:"thick solid #A0522D",minHeight:"100vh",height:"100%"},children:[Object(n.jsx)("h1",{children:"Compare two Poker Hands"}),Object(n.jsx)("p",{children:"Deal two poker hands and then guess which one is the winner."}),Object(n.jsx)(b.a,{onClick:this.dealHand,children:"Shuffle and Deal."}),Object(n.jsx)(n.Fragment,{children:this.state.dealt&&!this.state.flop?Object(n.jsx)(b.a,{onClick:this.flopCards,children:"Reveal Flop"}):""}),Object(n.jsx)(n.Fragment,{children:this.state.dealt&&this.state.flop&&!this.state.turn?Object(n.jsx)(b.a,{onClick:this.turnCards,children:"Reveal Turn"}):""}),Object(n.jsx)(n.Fragment,{children:this.state.dealt&&this.state.turn&&!this.state.river?Object(n.jsx)(b.a,{onClick:this.riverCards,children:"Reveal River"}):""}),Object(n.jsxs)(g.a,{fluid:!0,children:[Object(n.jsxs)(v.a,{children:[Object(n.jsxs)(f.a,{children:[Object(n.jsx)(this.leftHand,{}),Object(n.jsx)(b.a,{onClick:this.revealLeft,children:"Reveal Hand"}),Object(n.jsx)("p",{children:this.state.debug?this.state.handAValue:""}),Object(n.jsx)("p",{children:this.state.debug?this.state.handA.toString()+" ("+this.state.handA.map((function(t){return M(t+1)})).toString()+")":""}),Object(n.jsx)("p",{children:this.state.river?R(this.state.handAValue,this.state.handBValue):""})]}),Object(n.jsx)(this.table,{}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(this.rightHand,{}),Object(n.jsx)(b.a,{onClick:this.revealRight,children:"Reveal Hand"}),Object(n.jsx)("p",{children:this.state.debug?this.state.handBValue:""}),Object(n.jsx)("p",{children:this.state.debug?this.state.handB.toString()+" ("+this.state.handB.map((function(t){return M(t+1)})).toString()+")":""}),Object(n.jsx)("p",{children:this.state.river?R(this.state.handBValue,this.state.handAValue):""})]})]}),Object(n.jsxs)("p",{children:["See an error? Please copy the debug info, and file a report on our ",Object(n.jsx)("a",{href:"https://github.com/PrinceOfShapeir/poker-calculator",children:"Github page."})]}),Object(n.jsx)(b.a,{onClick:this.showDebug,children:"Show debug info"}),Object(n.jsx)(n.Fragment,{children:this.state.debug?Object(n.jsx)(b.a,{onClick:navigator.clipboard.writeText(this.state.handA.toString()+","+this.state.tableCards.toString()+","+this.state.handB.toString()),children:"Copy Debug Info"}):""}),Object(n.jsx)(n.Fragment,{children:this.state.revealLeft&&this.state.revealRight&&this.state.flop&&this.state.turn&&this.state.river||!this.state.dealt?"":Object(n.jsx)(b.a,{onClick:this.revealAll,children:"Reveal All"})})]})]})}}]),a}(r.Component);a(23);var L=function(){return Object(n.jsx)(A,{})},w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),s(t),i(t)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),w()}},[[24,1,2]]]);
//# sourceMappingURL=main.c348663b.chunk.js.map