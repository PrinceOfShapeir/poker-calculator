(this["webpackJsonppoker-calculator"]=this["webpackJsonppoker-calculator"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(3),c=n.n(r),s=n(9),o=n.n(s),i=(n(19),n.p,n(20),n(10)),h=n(11),l=n(13),u=n(12),j=n(2),f=n(26),p=n(27),d=n(28),b=n(31),O=n(29),g=n(30);function x(t){var e=Object(j.a)(t).map((function(t){return y(t)})).sort((function(t,e){return t-e})),n=!1;for(var a in e)if(13===e[a]){n=!0;break}n&&e.unshift(0),console.log(e);var r=[e[0]];for(var c in e)if(e[c]!==r[r.length-1])if(e[c]===r[r.length-1]+1)r[r.length]=e[c];else{if(e.length-c+1<5)break;r.length<5&&(r=[e[c]])}return console.log(r),r.length>=5&&3500+k(r)}function v(t){for(var e=t.map((function(t){return y(t)})).sort().reverse(),n=0,a=0,r=0;r<e.length;r++)r<e.length&&(e[r]===e[r+1]?(n++,a=e[r]):n>0&&(r=e.length));switch(console.log(n),n){case 1:return a+2e3;case 2:return a+3e3;case 3:return a+6e3;default:return!1}return console.log(e+"is false??"),!1}function m(t){var e=[],n=Object(j.a)(t);if(e[0]=v(n)||0,!(e[0]>0))return!1;n=n.filter((function(t){return y(t)!=e[0]%1e3})),e[1]=v(n)||0,e[1]>0&&(n=n.filter((function(t){return y(t)!=e[1]%1e3})),e[2]=v(n)||0);var a=Math.max.apply(Math,Object(j.a)(e));if(a>6e3)return console.log("over 6k"),a-a%1e3+M(a%1e3+13)+M(Math.max.apply(Math,Object(j.a)(t.filter((function(t){return y(t!=y(a%1e3))})).map((function(t){return y(t)})))));if(a>3e3)return console.log(e),e=e.filter((function(t){return t!=a})),Math.max.apply(Math,Object(j.a)(e))>0?a-a%1e3+3*M(a%1e3+13)+Math.max.apply(Math,Object(j.a)(e))-Math.max.apply(Math,Object(j.a)(e))%1e3+2*M(Math.max.apply(Math,Object(j.a)(e))%1e3+13):a-a%1e3+M(a%1e3+13)+function(){n=Object(j.a)(t).filter((function(t){return y(t)!=a%1e3})).map((function(t){return y(t)}));for(var e=0,r=0;r<2;r++)e+=M(Math.max.apply(Math,Object(j.a)(n))),n=n.filter((function(t){return t!=Math.max.apply(Math,Object(j.a)(n))}));return e}();if(a>2e3){e=e.filter((function(t){return t!=a}));var r=0|Math.max.apply(Math,Object(j.a)(e));return r>0?a-a%1e3+r-r%1e3-1500+49*M(a%1e3)*28+49*M(r%1e3)*21+M(Math.max.apply(Math,Object(j.a)(Object(j.a)(t).map((function(t){return y(t)})).filter((function(t){return t!=a%1e3&&t!=r%1e3}))))):a-a%1e3+a%1e3*7+k([a%1e3,a%1e3].concat(Object(j.a)(function(t,e){var n=Object(j.a)(t).sort((function(t,e){return t-e}));for(;n.length>e;)n.shift();return n}(Object(j.a)(t).map((function(t){return y(t)})).filter((function(t){return t!=a%1e3})),3))))}return console.log("error no pair but still got here"),!1}function M(t){return y(t)*Math.pow(7,y(t)/3)/3e6}function y(t){return 0==t?0:t%13==0?13:t%13}function k(t){for(var e=Object(j.a)(t).map((function(t){return y(t)})).sort((function(t,e){return t-e}));e.length>5;)e.shift();return e.reduce((function(t,e){return t+M(e)}))}function w(t){var e=[];return e[e.length]=function(t){var e=t.slice();console.log(e);for(var n=[[],[],[],[]],a=[0,0,0,0],r=0;r<e.length;r++)e[r]<=13?(n[0].push(e[r]),a[0]++):e[r]>13&&e[r]<=26?(n[1].push(e[r]),a[1]++):e[r]>26&&e[r]<=39?(n[2].push(e[r]),a[2]++):e[r]>39&&e[r]<=52?(n[3].push(e[r]),a[3]++):console.log("couldn't catch  "+e[r]);var c=a.indexOf(Math.max.apply(Math,a));if(a[c]>=5){var s=x(n[c]);if(s)return 2*s;for(;n[c].length>5;)n[c].splice(n[c].indexOf(Math.min(n[c])),1);return 4e3+function(){var t=0;for(var e in n[c])t+=M(n[c][e]);return t}()}return!1}(t)||0,e[e.length]=x(t)||0,e[e.length]=m(t)||0,e[e.length]=k(t)||0,Math.max.apply(Math,e)}var B=[2,40,22,12,52,24,14];function C(t,e){return t===e?"Tied":t>e?"Wins":"Loses"}console.log("handevaluator: "+w(B)),console.log("handevaluator: "+w([6,4,40,12,52,24,14])),console.log("winner is "+(w(B)>w([6,43,40,12,52,24,14])));var A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).table=function(){var t=[];for(var e in r.state.tableCards)t.push(Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(p.a,{children:Object(a.jsx)(d.a,{src:"./images/".concat(r.state.tableCards[e],".svg")})}),Object(a.jsx)("p",{children:r.state.dealt?r.state.tableCards[e]:""})]})}));return Object(a.jsx)(a.Fragment,{children:t})},r.leftHand=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.a,{children:Object(a.jsx)(d.a,{src:"./images/".concat(r.state.handA[0],".svg")})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(d.a,{src:"./images/".concat(r.state.handA[1],".svg")})})]})},r.rightHand=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.a,{children:Object(a.jsx)(d.a,{src:"./images/".concat(r.state.handB[0],".svg")})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(d.a,{src:"./images/".concat(r.state.handB[1],".svg")})})]})},r.state={tableCards:[53,53,53,53,53],handA:[53,53],handB:[53,53],handsPlayed:0,leftWins:0,rightWins:0,ties:0,deck:new Array(52).fill(0).map((function(t,e){return e+1})),dealt:!1,handAValue:0,handBValue:0},r.showDebug=function(){r.setState({dealt:!r.state.dealt})},r.dealHand=function(){var t=[[],[],[],r.state.deck],e=t[0],n=t[1],a=t[2],c=t[3];c=function(t,e){for(var n=Object(j.a)(e),a=0;a<t;a++)for(var r in n){var c=Math.floor(Math.random()*Math.floor(52)),s=[n[c],n[r]];n[r]=s[0],n[c]=s[1]}return n}(5,c),e.push(c.pop()),n.push(c.pop()),e.push(c.pop()),n.push(c.pop()),c.pop(),a.push(c.pop()),a.push(c.pop()),a.push(c.pop()),c.pop(),a.push(c.pop()),c.pop(),a.push(c.pop()),console.log([].concat(Object(j.a)(e),Object(j.a)(a))),r.setState({handA:Object(j.a)(e),handB:Object(j.a)(n),tableCards:Object(j.a)(a),handAValue:w([].concat(Object(j.a)(e),Object(j.a)(a))),handBValue:w([].concat(Object(j.a)(n),Object(j.a)(a)))})},r}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{children:"Compare two Poker Hands"}),Object(a.jsx)("p",{children:"Deal two poker hands and then guess which one is the winner."}),Object(a.jsx)(b.a,{onClick:this.dealHand,children:"Shuffle and Deal."}),Object(a.jsxs)(O.a,{fluid:!0,children:[Object(a.jsxs)(g.a,{children:[Object(a.jsxs)(f.a,{children:[Object(a.jsx)(this.leftHand,{}),Object(a.jsx)("p",{children:this.state.dealt?this.state.handAValue:""}),Object(a.jsx)("p",{children:this.state.dealt?this.state.handA.toString():""}),Object(a.jsx)("p",{children:C(this.state.handAValue,this.state.handBValue)})]}),Object(a.jsx)(this.table,{}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(this.rightHand,{}),Object(a.jsx)("p",{children:this.state.dealt?this.state.handBValue:""}),Object(a.jsx)("p",{children:this.state.dealt?this.state.handB.toString():""}),Object(a.jsx)("p",{children:C(this.state.handBValue,this.state.handAValue)})]})]}),Object(a.jsxs)("p",{children:["See an error? Please copy the debug info, and file a report on our ",Object(a.jsx)("a",{href:"https://github.com/PrinceOfShapeir/poker-calculator",children:"Github page."})]}),Object(a.jsx)(b.a,{onClick:this.showDebug,children:"Show debug info"})]})]})}}]),n}(r.Component);n(23);var S=function(){return Object(a.jsx)(A,{})},V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),V()}},[[24,1,2]]]);
//# sourceMappingURL=main.685c545e.chunk.js.map