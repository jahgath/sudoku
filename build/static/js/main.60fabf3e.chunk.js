(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(33),n=c.n(i),r=c(17),l=c(16),d=c(4),o=c(19),j=(c(39),c.p+"static/media/front.61624ccb.gif"),h=c.p+"static/media/back.48c39dfd.gif",u=null,b=function(e){u=e},m=function(){return u},O=function(){},x=function(e){O(e)},f=function(){},p=function(e){f(e)},v=c(2);function g(e,t,c){return e%9!==2&&e%9!==5||(c+=" border-right"),e%9!==3&&e%9!==6||(c+=" border-left"),e>=18&&e<=26&&(c+=" border-bottom"),e>=45&&e<=53&&(c+=" border-bottom"),e>=27&&e<=35&&(c+=" border-top"),e>=54&&e<=62&&(c+=" border-top"),t<0?c:e%9===t%9&&Math.floor(e/9)===Math.floor(t/9)%9?c+" selected":e%9===t%9||Math.floor(e/9)===Math.floor(t/9)%9?c+" highlighted":c}document.addEventListener("keydown",(function(e){var t=m();if(t)if("Backspace"===e.key)p((function(e){return e[t.index]=0,Object(o.a)(e)}));else{var c=1*e.key;if(!c)return;if(c<1||c>9)return;p((function(e){return e[t.index]=c,Object(o.a)(e)}))}}));var N=function(e){var t=e.number,c=e.index,a=e.editable,s=e.status,i=e.selection;return Object(v.jsx)("div",{className:g(c,i,a&&0!==t?s?"cell correct":"cell incorrect":"cell"),onClick:function(e){e.target.index=c,a?(b(e.target),x(c)):(b(null),x(-1))},children:0===t?"":t})},y=!1,C=function(e){var t=e.sudokuArray,c=e.editable,s=e.solutionArray,i=e.difficulty,n=e.setDifficulty,l=e.setGameCount,d=Object(a.useState)(t),u=Object(r.a)(d,2),b=u[0],x=u[1];if(Object(a.useEffect)((function(){x(t)})),b.length>10){var g=JSON.stringify(b)===JSON.stringify(s);g&&!y&&(i>0&&i<3?setTimeout((function(){alert("scroll for next level")}),100):5===i&&alert("You finished all levels")),y=g}var C=Object(a.useState)(0),w=Object(r.a)(C,2),k=w[0],A=w[1],I=Object(a.useState)([-1,-1]),E=Object(r.a)(I,2),S=E[0],G=E[1];f=x,function(e){O=e}(G);for(var X=[],Q=0;Q<b.length;Q++)X.push(Object(v.jsx)(N,{selection:S,number:b[Q],index:Q,setBoard:x,editable:c[Q],status:s[Q]===b[Q]},Q));var q=[];q.push(Object(v.jsx)("span",{className:"tooltiptext",children:"Hello"})),q.push(Object(v.jsx)("span",{className:"tooltiptext",children:"Neeche to Dekho !!!"})),q.push(Object(v.jsx)("span",{className:"tooltiptext",children:"Abe Gadhay !!"})),q.push(Object(v.jsx)("span",{className:"tooltiptext",children:"Scroll kar nallay !!!"}));return Object(v.jsxs)("div",{onWheel:function(){(y&&i<5||i<1)&&n(1+i)},children:[Object(v.jsx)("div",{id:"boardContainer",className:"boardContainer ".concat(["","xeasy","easy","medium","hard","done"][i]),children:Object(v.jsxs)("div",{className:"board",id:"board",children:[Object(v.jsx)("div",{className:"page top",id:"hard",children:X}),Object(v.jsx)("div",{className:"page bottom",id:"xeasy",children:X}),Object(v.jsx)("div",{className:"page left",id:"medium",children:X}),Object(v.jsx)("div",{className:"page right",id:"easy",children:X}),Object(v.jsx)("div",{onClick:function(){A(k+1)},className:"page front tooltip",style:{backgroundImage:"url(".concat(j,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:q[k]}),Object(v.jsx)("div",{className:"page back",id:"finalPage",style:{backgroundImage:"url(".concat(h,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},onClick:function(){document.getElementById("board").classList.add("animate"),setTimeout((function(){window.location="/#/credits"}),7e3)}})]})}),i>0&&i<5?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"controls ",children:[Object(v.jsxs)("div",{className:"auto-pilot",children:[Object(v.jsx)("input",{type:"checkbox",className:"switch3",id:"switch3",onInput:function(e){document.querySelector(".board").classList.toggle("suggestion")}}),Object(v.jsx)("label",{htmlFor:"switch3"})]}),Object(v.jsx)("div",{className:"hints",children:Object(v.jsx)("i",{className:"far fa-lightbulb-on",onClick:function(){for(var e in b)if(b[e]!==s[e]){b[e]=s[e];break}x(Object(o.a)(b))}})}),Object(v.jsx)("div",{className:"refresh",children:Object(v.jsx)("i",{className:"fas fa-repeat-alt",onClick:function(){l((function(e){return e+1}))}})}),Object(v.jsx)("div",{className:"lose",children:Object(v.jsx)("i",{className:"fas fa-heart-broken",onClick:function(){for(var e in b)b[e]!==s[e]&&(b[e]=s[e]);x(Object(o.a)(b))}})})]}),Object(v.jsx)("div",{className:"numpad ",children:Object(o.a)(Array(9)).map((function(e,t){return Object(v.jsx)("div",{className:"num",id:"num-"+(t+1),onClick:function(){p((function(e){var c;return e[null===(c=m())||void 0===c?void 0:c.index]=t+1,Object(o.a)(e)}))},children:t+1},t)}))})]}):""]})},w=(c(41),c(54)),k=function(e){var t=e.sudokuArrays,c=e.difficulty,s=e.setDifficulty,i=Object(a.useState)(0),n=Object(r.a)(i,2),l=(n[0],n[1]),d=Math.floor(5*Math.random()),o=t[0][0][d],j=t[0][0][d];c>0&&c<5&&(o=t[c-1][0][d],j=t[c-1][1][d]);var h=o.split("").map((function(e){return parseInt(e)})),u=j.split("").map((function(e){return parseInt(e)})),b=h.map((function(e){return 0===e}));return Object(v.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"gamePage",children:Object(v.jsx)(C,{sudokuArray:h,editable:b,solutionArray:u,difficulty:c,setDifficulty:s,setGameCount:l})})},A=(c(42),function(){return Object(v.jsxs)("div",{className:"home",children:[Object(v.jsxs)("div",{className:"homeContent",children:[Object(v.jsx)("div",{className:"homeTitle",children:"Untitled Sudoku"}),Object(v.jsx)(l.b,{to:"/step1",children:Object(v.jsx)("div",{className:"homePlayBtn",children:"Play"})})]}),Object(v.jsx)("div",{className:"homeFooter",children:"Made with \u2764 by @untitledTeam"})]})}),I=c.p+"static/media/reactlove.897a8c20.svg";c(48);var E=function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"overlay"}),Object(v.jsxs)("div",{className:"credits",children:[Object(v.jsxs)("div",{className:"heading",children:["Made With ",Object(v.jsx)("img",{src:I})]}),Object(v.jsxs)("div",{className:"sub-heading",children:["By \xa0",Object(v.jsx)("a",{href:"https://github.com/untitled-team-101",children:"@untitledteam"})]}),Object(v.jsx)("div",{className:"memberlist",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/Ayan-Dhara",children:"Ayan-Dhara"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/tanmayVaish",children:"Tanmay"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/dhruvgarg02",children:"Dhruv"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/sarveshspatil111",children:"Sarvesh"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/dpatel-8112",children:"Devarshi"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/anjaligoswami",children:"Anjali"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/grawish",children:"Goblin"})})]})})]})]})},S=[[["056080000900000300100600000009400810070000000308000009063010005500004203007060000","700004006000037010001260090900006000000000048680050000040900060000040003106000720","030056020000008701500020300601000003000602000200000809004090007102800000080370010","200004001010800270000010040000207085092060710730109000040000000025006030300900008","103800600000012005080500400002008090036000270040200100007005060300680000001007509"],["756389124984251376132647598629435817475198632318726459863912745591874263247563981","728194356469537812531268497974816235315729648682453179843972561257641983196385724","739156428426938751518427396651789243893642175247513869364291587172865934985374612","289674351413895276657312849164237985592468713738159462841523697925786134376941528","153849627674312985289576413512768394936154278748293156427935861395681742861427539"]],[["078000060005908104000000300700000000807210000061740000600070000500020006000000920","006010000480052000000000705040906307009000400702104060205000000000240036004090200","708010000002400006000305040500060020091000600000001090080000100000047060070500000","902000000000401600000207050830070000000600580200000470004020000007000201620030008","000020070670010050001800900000902500940000031003601000004008300090060018020090000"],["178432569325968174964157382743896251896215437251743698612579843589324716437681925","956417823487352691123869745548926317619573482732184569295638174871245936364791258","748916253352478916619325847534869721291734685867251394485693172923147568176582439","942563817753481692168297354835974126479612583216358479384129765597846231621735948","438529176679314852251876943716932584942785631583641729164258397395467218827193465"]],[["000009002000000014130050007005600000060297040000003600900070081480000000200900000","030010800604002103200000000000053200500000006001780000000000008106800907008090050","060804700000001063001000080005030000000050809007008500000302070900000004020060000","800500007010076002000000904008003000532000189000200300203000000700190060900002000","020090507809000000070400029004000006300004005000059410200007000007001032501320070"],["674139852598762314132854967325648179861297543749513628953476281486321795217985436","735419862684572193219368475867953241593124786421786539952647318146835927378291654","563824791289571463741693285815239647432756819697418532158342976976185324324967158","824519637319476852657328914178953426523647189496281375243865791785194263961732548","123698547849275361675413829954132786318764295762859413236947158497581632581326974"]],[["006700008050090040400001500300009100080060020005400003003100009060070080900008400","037506080060020007100003260000300610050000070081004000013800006800060090090002850","009806037200007000070000102002091083000000000810370900301000040080200006560108700","300052710000100000061800540040030000200708004000020080073005820000001000095280003","000001000000270003003000420010002008070050010200408060007000000009025070040600009"],["236754918751893642498621537347289165189365724625417893873146259564972381912538476","237546981568921347149783265974358612352619478681274539413895726825467193796132854","149826537235917468678543192752491683493685271816372954321769845987254316564138729","384952716752164938961873542847536291239718654516429387173645829628391475495287163","924831756651274863783569421316792548478356912295418367167943285839125674542687139"]]],G=c(55),X=(c(49),"data:image/png;base64,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"),Q=c.p+"static/media/step2.084dfa9e.jpg",q=(c(50),function(){return Object(v.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(v.jsx)("div",{className:"step1",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"step1Title",children:Object(v.jsx)("h1",{children:"How To Play"})}),Object(v.jsxs)("div",{className:"step1Containers",children:[Object(v.jsxs)("div",{className:"step1Container1",children:[Object(v.jsx)("div",{className:"step1Para1",children:Object(v.jsxs)("p",{className:"para",children:[Object(v.jsx)("div",{children:"\u2022Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 \u201csquares\u201d (made up of 3 x 3 spaces)."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Does it sound complicated? As you can see from the image below of an actual Sudoku grid, each Sudoku grid comes with a few spaces already filled in; the more spaces filled in, the easier the game \u2013 the more difficult Sudoku puzzles have very few spaces that are already filled in."})]})}),Object(v.jsx)("div",{className:"step1Image1",children:Object(v.jsx)("img",{className:"image",src:X,alt:"Failed to load image"})})]}),Object(v.jsxs)("div",{className:"step1Container2",children:[Object(v.jsx)("div",{className:"step1Image2",children:Object(v.jsx)("img",{className:"image",src:Q,alt:"Failed to load image"})}),Object(v.jsx)("div",{className:"step1Para2",children:Object(v.jsxs)("p",{className:"para",children:[Object(v.jsx)("div",{children:"\u2022Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 \u201csquares\u201d (made up of 3 x 3 spaces)."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Does it sound complicated? As you can see from the image below of an actual Sudoku grid, each Sudoku grid comes with a few spaces already filled in; the more spaces filled in, the easier the game \u2013 the more difficult Sudoku puzzles have very few spaces that are already filled in."})]})})]})]}),Object(v.jsxs)("div",{className:"step1Btns",children:[Object(v.jsx)(l.b,{to:"/step2",children:Object(v.jsx)("div",{className:"step1NextBtn",children:"Next"})}),Object(v.jsx)(l.b,{to:"/game",children:Object(v.jsx)("div",{className:"step1SkipBtn",children:"Skip"})})]})]})})})}),D=c.p+"static/media/step3.80bcf4ba.jpg",F=(c(51),function(){return Object(v.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(v.jsx)("div",{className:"step2",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"step2Title",children:Object(v.jsx)("h1",{children:"How To Play"})}),Object(v.jsxs)("div",{className:"step2Containers",children:[Object(v.jsxs)("div",{className:"step2Container1",children:[Object(v.jsx)("div",{className:"step2Para1",children:Object(v.jsxs)("p",{className:"para",children:[Object(v.jsx)("div",{children:"\u2022Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 \u201csquares\u201d (made up of 3 x 3 spaces)."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Does it sound complicated? As you can see from the image below of an actual Sudoku grid, each Sudoku grid comes with a few spaces already filled in; the more spaces filled in, the easier the game \u2013 the more difficult Sudoku puzzles have very few spaces that are already filled in."})]})}),Object(v.jsx)("div",{className:"step2Image1",children:Object(v.jsx)("img",{className:"image",src:X,alt:"Failed to load image"})})]}),Object(v.jsxs)("div",{className:"step2Container2",children:[Object(v.jsx)("div",{className:"step2Image2",children:Object(v.jsx)("img",{className:"image",src:D,alt:"Failed to load image"})}),Object(v.jsx)("div",{className:"step2Para2",children:Object(v.jsxs)("p",{className:"para",children:[Object(v.jsx)("div",{children:"\u2022Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 \u201csquares\u201d (made up of 3 x 3 spaces)."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square."}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"\u2022Does it sound complicated? As you can see from the image below of an actual Sudoku grid, each Sudoku grid comes with a few spaces already filled in; the more spaces filled in, the easier the game \u2013 the more difficult Sudoku puzzles have very few spaces that are already filled in."})]})})]})]}),Object(v.jsx)("div",{className:"step2Btns",children:Object(v.jsx)(l.b,{to:"/game",children:Object(v.jsx)("div",{className:"step2PlayBtn",children:"Play"})})})]})})})});var J=function(){var e=Object(a.useState)(-1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(G.a,{exitBeforeEnter:!0,children:Object(v.jsx)(l.a,{children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{exact:!0,path:"/",children:Object(v.jsx)(A,{})}),Object(v.jsx)(d.a,{exact:!0,path:"/step1",children:Object(v.jsx)(q,{})}),Object(v.jsx)(d.a,{exact:!0,path:"/step2",children:Object(v.jsx)(F,{})}),Object(v.jsx)(d.a,{exact:!0,path:"/credits",children:Object(v.jsx)(E,{})}),Object(v.jsx)(d.a,{exact:!0,path:"/game",children:Object(v.jsx)(k,{sudokuArrays:S,difficulty:c,setDifficulty:s})}),Object(v.jsxs)(d.a,{path:"/",children:[Object(v.jsx)("h1",{children:"404 Error"}),Object(v.jsx)("h2",{children:"Kat gya TERA!! Kuch ni hai idhar"})]})]})})})})};n.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root"))}},[[52,1,2]]]);