"use strict";(self.webpackChunkadvanced_charts=self.webpackChunkadvanced_charts||[]).push([[1904],{97056:function(f,a,e){e.r(a),e.d(a,{demos:function(){return g}});var p=e(75271),t=e(65121),g={}},98953:function(f,a,e){e.r(a),e.d(a,{demos:function(){return _}});var p=e(90228),t=e.n(p),g=e(26068),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(36073),o=e(85006),_={"docs-components-bounding-box-demo-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function u(){var s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return s=h.sent,d=s.Rect,l=s.Stage,n=s.Circle,m=function(){function R(A){return{x:A.x-A.radius,y:A.y-A.radius,width:A.radius*2,height:A.radius*2}}var O={x:100,y:100,radius:50,fillStyle:"pink"},j=R(O),C={x:400,y:150,radius:50,fillStyle:"purple"},D=R(C),B={x:150,y:260,radius:50,fillStyle:"blueviolet"},L=R(B),G={x:350,y:280,radius:50,fillStyle:"cadetblue"},M=R(G);return r.createElement(l,null,r.createElement(n,O),r.createElement(d,c()(c()({},j),{},{fillStyle:"transparent",strokeStyle:"red"})),r.createElement(n,C),r.createElement(d,c()(c()({},D),{},{fillStyle:"transparent",strokeStyle:"red"})),r.createElement(n,B),r.createElement(d,c()(c()({},L),{},{fillStyle:"transparent",strokeStyle:"red"})),r.createElement(n,G),r.createElement(d,c()(c()({},M),{},{fillStyle:"transparent",strokeStyle:"red"})))},h.abrupt("return",{default:m});case 8:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-bounding-box-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Stage, Circle } from 'advanced-charts';

const BoundingBoxDemo = () => {
  function getBoundingBox(circleData) {
    return {
      x: circleData.x - circleData.radius,
      y: circleData.y - circleData.radius,
      width: circleData.radius * 2,
      height: circleData.radius * 2,
    };
  }
  const circleData_1 = { x: 100, y: 100, radius: 50, fillStyle: 'pink' };
  const rectData_1 = getBoundingBox(circleData_1);

  const circleData_2 = { x: 400, y: 150, radius: 50, fillStyle: 'purple' };
  const rectData_2 = getBoundingBox(circleData_2);

  const circleData_3 = { x: 150, y: 260, radius: 50, fillStyle: 'blueviolet' };
  const rectData_3 = getBoundingBox(circleData_3);

  const circleData_4 = { x: 350, y: 280, radius: 50, fillStyle: 'cadetblue' };
  const rectData_4 = getBoundingBox(circleData_4);

  return (
    <Stage>
      <Circle {...circleData_1} />
      <Rect {...rectData_1} fillStyle="transparent" strokeStyle="red" />

      <Circle {...circleData_2} />
      <Rect {...rectData_2} fillStyle="transparent" strokeStyle="red" />

      <Circle {...circleData_3} />
      <Rect {...rectData_3} fillStyle="transparent" strokeStyle="red" />

      <Circle {...circleData_4} />
      <Rect {...rectData_4} fillStyle="transparent" strokeStyle="red" />
    </Stage>
  );
};

export default BoundingBoxDemo;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":o},renderOpts:{compile:function(){var u=I()(t()().mark(function d(){var l,n=arguments;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(2715).then(e.bind(e,52715));case 2:return E.abrupt("return",(l=E.sent).default.apply(l,n));case 3:case"end":return E.stop()}},d)}));function s(){return u.apply(this,arguments)}return s}()}}}},13862:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(49663),r=e(85006),y={"docs-components-text-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return i.createElement(u,null,i.createElement(s,{x:100,y:100,content:"hello inula"}),i.createElement(s,{x:100,y:140,content:"hello inula",textAlign:"center"}))},n.next=3,Promise.resolve().then(e.bind(e,85006));case 3:return _=n.sent,u=_.Stage,s=_.Text,n.abrupt("return",{default:d});case 7:case"end":return n.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-text-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stage, Text } from 'advanced-charts';

function App() {
  return (
    <Stage>
      <Text x={100} y={100} content="hello inula" />
      <Text x={100} y={140} content="hello inula" textAlign="center" />
    </Stage>
  );
}

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},61639:function(f,a,e){e.r(a),e.d(a,{demos:function(){return u}});var p=e(90228),t=e.n(p),g=e(26068),c=e.n(g),i=e(48305),I=e.n(i),r=e(87999),y=e.n(r),o=e(75271),_=e(80903),u={"docs-components-animate-demo-0":{component:o.memo(o.lazy(y()(t()().mark(function s(){var d,l,n,m,E,h,v,R,O;return t()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=C.sent,l=d.useEffect,n=d.useState,C.next=7,Promise.resolve().then(e.bind(e,85006));case 7:return m=C.sent,E=m.Rect,h=m.Stage,v={x:0,height:60,fillStyle:"purple"},R={x:200,height:200,fillStyle:"red"},O=function(){var B=n(v),L=I()(B,2),G=L[0],M=L[1];return l(function(){setTimeout(function(){G.x=200,M(c()({},G))},500),setTimeout(function(){G.height=200,G.fillStyle="red",M(c()({},G))},800)},[]),o.createElement(h,null,o.createElement(E,{x:G.x,y:50,width:100,height:G.height,fillStyle:G.fillStyle,shadowColor:"red",cursor:"pointer",animation:{duration:1e3,easing:"linear"},onclick:function(){var $;G.x==200?$={x:0,height:60,fillStyle:"purple"}:$={x:200,height:200,fillStyle:"red"},M($)}}))},C.abrupt("return",{default:O});case 14:case"end":return C.stop()}},s)})))),asset:null,context:void 0,renderOpts:void 0}}},50152:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(29299),r=e(85006),y={"docs-components-chart-1-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["a","b","c","d","e","f"]},series:[{data:[620,932,901,934,800,1001]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-1-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u6298\u7EBF\u56FE = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 1001]
      }
    ]
  }

  return (
    <LineChart option={\u6298\u7EBF\u56FE} containerStyle={{ border: '1px solid #eee' }} />
  )
}

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},61348:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(80582),r=e(85006),y={"docs-components-chart-10-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.BarChart,s=function(){var m={xAxis:{data:["2017-10-24","2017-10-25","2017-10-26","2017-10-27"]},series:[{showBackground:!0,data:[190,210,300,450]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-10-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { BarChart } from 'advanced-charts'

const App = () => {
  const \u5E95\u8272\u67F1\u72B6\u56FE = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    series: [
      {
        showBackground: true,
        data: [190, 210, 300, 450]
      }
    ]
  }

  return <BarChart option={\u5E95\u8272\u67F1\u72B6\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},65062:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(82907),r=e(85006),y={"docs-components-chart-11-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.PieChart,s=function(){var m={legend:{orient:"vertical",left:"left"},series:[{data:[{value:1,name:"pie-1"},{value:2,name:"pie-2"},{value:3,name:"pie-3"},{value:4,name:"pie-4"},{value:5,name:"pie-5"}]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-11-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { PieChart } from 'advanced-charts'

const App = () => {
  const \u997C\u56FE = {
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        data: [
          { value: 1, name: 'pie-1' },
          { value: 2, name: 'pie-2' },
          { value: 3, name: 'pie-3' },
          { value: 4, name: 'pie-4' },
          { value: 5, name: 'pie-5' }
        ]
      }
    ]
  }

  return <PieChart option={\u997C\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},31009:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(12076),r=e(85006),y={"docs-components-chart-12-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.PieChart,s=function(){var m={legend:{orient:"vertical",left:"left"},series:[{radius:["40%","70%"],data:[{value:1,name:"pie-1"},{value:2,name:"pie-2"},{value:3,name:"pie-3"},{value:4,name:"pie-4"},{value:5,name:"pie-5"}]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-12-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { PieChart } from 'advanced-charts'

const App = () => {
  const \u73AF\u5F62 = {
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        radius: ['40%', '70%'],
        data: [
          { value: 1, name: 'pie-1' },
          { value: 2, name: 'pie-2' },
          { value: 3, name: 'pie-3' },
          { value: 4, name: 'pie-4' },
          { value: 5, name: 'pie-5' }
        ]
      }
    ]
  }

  return <PieChart option={\u73AF\u5F62} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},51144:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(46908),r=e(85006),y={"docs-components-chart-13-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.KLineChart,s=function(){var m={xAxis:{data:["2017-10-24","2017-10-25","2017-10-26","2017-10-27"]},series:[{data:[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42]],animationDuration:300}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-13-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { KLineChart } from 'advanced-charts'

const App = () => {
  const K\u7EBF\u56FE = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    series: [
      {
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ],
        animationDuration: 300
      }
    ]
  }

  return <KLineChart option={K\u7EBF\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},18300:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(50369),r=e(85006),y={"docs-components-chart-14-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.KLineChart,s=function(){var m={grid:{left:"10%",right:"10%",bottom:"15%"},xAxis:{type:"category",data:["2013/1/24","2013/1/25","2013/1/28","2013/1/29","2013/1/30","2013/1/31","2013/2/1","2013/2/4","2013/2/5","2013/2/6","2013/2/7","2013/2/8","2013/2/18","2013/2/19","2013/2/20","2013/2/21","2013/2/22","2013/2/25","2013/2/26","2013/2/27","2013/2/28","2013/3/1","2013/3/4","2013/3/5","2013/3/6","2013/3/7","2013/3/8","2013/3/11","2013/3/12","2013/3/13","2013/3/14","2013/3/15","2013/3/18","2013/3/19","2013/3/20","2013/3/21","2013/3/22","2013/3/25","2013/3/26","2013/3/27","2013/3/28","2013/3/29","2013/4/1","2013/4/2","2013/4/3","2013/4/8","2013/4/9","2013/4/10","2013/4/11","2013/4/12","2013/4/15","2013/4/16","2013/4/17","2013/4/18","2013/4/19","2013/4/22","2013/4/23","2013/4/24","2013/4/25","2013/4/26","2013/5/2","2013/5/3","2013/5/6","2013/5/7","2013/5/8","2013/5/9","2013/5/10","2013/5/13","2013/5/14","2013/5/15","2013/5/16","2013/5/17","2013/5/20","2013/5/21","2013/5/22","2013/5/23","2013/5/24","2013/5/27","2013/5/28","2013/5/29","2013/5/30","2013/5/31","2013/6/3","2013/6/4","2013/6/5","2013/6/6","2013/6/7","2013/6/13"]},dataZoom:[{type:"slider",start:20,end:50}],series:[{name:"\u65E5K",data:[[2320.26,2320.26,2287.3,2362.94],[2300,2291.3,2288.26,2308.38],[2295.35,2346.5,2295.35,2346.92],[2347.22,2358.98,2337.35,2363.8],[2360.75,2382.48,2347.89,2383.76],[2383.43,2385.42,2371.23,2391.82],[2377.41,2419.02,2369.57,2421.15],[2425.92,2428.15,2417.58,2440.38],[2411,2433.13,2403.3,2437.42],[2432.68,2434.48,2427.7,2441.73],[2430.69,2418.53,2394.22,2433.89],[2416.62,2432.4,2414.4,2443.03],[2441.91,2421.56,2415.43,2444.8],[2420.26,2382.91,2373.53,2427.07],[2383.49,2397.18,2370.61,2397.94],[2378.82,2325.95,2309.17,2378.82],[2322.94,2314.16,2308.76,2330.88],[2320.62,2325.82,2315.01,2338.78],[2313.74,2293.34,2289.89,2340.71],[2297.77,2313.22,2292.03,2324.63],[2322.32,2365.59,2308.92,2366.16],[2364.54,2359.51,2330.86,2369.65],[2332.08,2273.4,2259.25,2333.54],[2274.81,2326.31,2270.1,2328.14],[2333.61,2347.18,2321.6,2351.44],[2340.44,2324.29,2304.27,2352.02],[2326.42,2318.61,2314.59,2333.67],[2314.68,2310.59,2296.58,2320.96],[2309.16,2286.6,2264.83,2333.29],[2282.17,2263.97,2253.25,2286.33],[2255.77,2270.28,2253.31,2276.22],[2269.31,2278.4,2250,2312.08],[2267.29,2240.02,2239.21,2276.05],[2244.26,2257.43,2232.02,2261.31],[2257.74,2317.37,2257.42,2317.86],[2318.21,2324.24,2311.6,2330.81],[2321.4,2328.28,2314.97,2332],[2334.74,2326.72,2319.91,2344.89],[2318.58,2297.67,2281.12,2319.99],[2299.38,2301.26,2289,2323.48],[2273.55,2236.3,2232.91,2273.55],[2238.49,2236.62,2228.81,2246.87],[2229.46,2234.4,2227.31,2243.95],[2234.9,2227.74,2220.44,2253.42],[2232.69,2225.29,2217.25,2241.34],[2196.24,2211.59,2180.67,2212.59],[2215.47,2225.77,2215.47,2234.73],[2224.93,2226.13,2212.56,2233.04],[2236.98,2219.55,2217.26,2242.48],[2218.09,2206.78,2204.44,2226.26],[2199.91,2181.94,2177.39,2204.99],[2169.63,2194.85,2165.78,2196.43],[2195.03,2193.8,2178.47,2197.51],[2181.82,2197.6,2175.44,2206.03],[2201.12,2244.64,2200.58,2250.11],[2236.4,2242.17,2232.26,2245.12],[2242.62,2184.54,2182.81,2242.62],[2187.35,2218.32,2184.11,2226.12],[2213.19,2199.31,2191.85,2224.63],[2203.89,2177.91,2173.86,2210.58],[2170.78,2174.12,2161.14,2179.65],[2179.05,2205.5,2179.05,2222.81],[2212.5,2231.17,2212.5,2236.07],[2227.86,2235.57,2219.44,2240.26],[2242.39,2246.3,2235.42,2255.21],[2246.96,2232.97,2221.38,2247.86],[2228.82,2246.83,2225.81,2247.67],[2247.68,2241.92,2231.36,2250.85],[2238.9,2217.01,2205.87,2239.93],[2217.09,2224.8,2213.58,2225.19],[2221.34,2251.81,2210.77,2252.87],[2249.81,2282.87,2248.41,2288.09],[2286.33,2299.99,2281.9,2309.39],[2297.11,2305.11,2290.12,2305.3],[2303.75,2302.4,2292.43,2314.18],[2293.81,2275.67,2274.1,2304.95],[2281.45,2288.53,2270.25,2292.59],[2286.66,2293.08,2283.94,2301.7],[2293.4,2321.32,2281.47,2322.1],[2323.54,2324.02,2321.17,2334.33],[2316.25,2317.75,2310.49,2325.72],[2320.74,2300.59,2299.37,2325.53],[2300.21,2299.25,2294.11,2313.43],[2297.1,2272.42,2264.76,2297.1],[2270.71,2270.93,2260.87,2276.86],[2264.43,2242.11,2240.07,2266.69],[2242.26,2210.9,2205.07,2250.63],[2190.1,2148.35,2126.22,2190.1]],animation:!1}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-14-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { KLineChart } from 'advanced-charts'

const App = () => {
  const \u62D6\u52A8K\u7EBF\u56FE = {
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: [
        '2013/1/24',
        '2013/1/25',
        '2013/1/28',
        '2013/1/29',
        '2013/1/30',
        '2013/1/31',
        '2013/2/1',
        '2013/2/4',
        '2013/2/5',
        '2013/2/6',
        '2013/2/7',
        '2013/2/8',
        '2013/2/18',
        '2013/2/19',
        '2013/2/20',
        '2013/2/21',
        '2013/2/22',
        '2013/2/25',
        '2013/2/26',
        '2013/2/27',
        '2013/2/28',
        '2013/3/1',
        '2013/3/4',
        '2013/3/5',
        '2013/3/6',
        '2013/3/7',
        '2013/3/8',
        '2013/3/11',
        '2013/3/12',
        '2013/3/13',
        '2013/3/14',
        '2013/3/15',
        '2013/3/18',
        '2013/3/19',
        '2013/3/20',
        '2013/3/21',
        '2013/3/22',
        '2013/3/25',
        '2013/3/26',
        '2013/3/27',
        '2013/3/28',
        '2013/3/29',
        '2013/4/1',
        '2013/4/2',
        '2013/4/3',
        '2013/4/8',
        '2013/4/9',
        '2013/4/10',
        '2013/4/11',
        '2013/4/12',
        '2013/4/15',
        '2013/4/16',
        '2013/4/17',
        '2013/4/18',
        '2013/4/19',
        '2013/4/22',
        '2013/4/23',
        '2013/4/24',
        '2013/4/25',
        '2013/4/26',
        '2013/5/2',
        '2013/5/3',
        '2013/5/6',
        '2013/5/7',
        '2013/5/8',
        '2013/5/9',
        '2013/5/10',
        '2013/5/13',
        '2013/5/14',
        '2013/5/15',
        '2013/5/16',
        '2013/5/17',
        '2013/5/20',
        '2013/5/21',
        '2013/5/22',
        '2013/5/23',
        '2013/5/24',
        '2013/5/27',
        '2013/5/28',
        '2013/5/29',
        '2013/5/30',
        '2013/5/31',
        '2013/6/3',
        '2013/6/4',
        '2013/6/5',
        '2013/6/6',
        '2013/6/7',
        '2013/6/13'
      ]
    },
    dataZoom: [
      {
        type: 'slider',
        start: 20,
        end: 50
      }
    ],
    series: [
      {
        name: '\u65E5K',
        data: [
          [2320.26, 2320.26, 2287.3, 2362.94],
          [2300, 2291.3, 2288.26, 2308.38],
          [2295.35, 2346.5, 2295.35, 2346.92],
          [2347.22, 2358.98, 2337.35, 2363.8],
          [2360.75, 2382.48, 2347.89, 2383.76],
          [2383.43, 2385.42, 2371.23, 2391.82],
          [2377.41, 2419.02, 2369.57, 2421.15],
          [2425.92, 2428.15, 2417.58, 2440.38],
          [2411, 2433.13, 2403.3, 2437.42],
          [2432.68, 2434.48, 2427.7, 2441.73],
          [2430.69, 2418.53, 2394.22, 2433.89],
          [2416.62, 2432.4, 2414.4, 2443.03],
          [2441.91, 2421.56, 2415.43, 2444.8],
          [2420.26, 2382.91, 2373.53, 2427.07],
          [2383.49, 2397.18, 2370.61, 2397.94],
          [2378.82, 2325.95, 2309.17, 2378.82],
          [2322.94, 2314.16, 2308.76, 2330.88],
          [2320.62, 2325.82, 2315.01, 2338.78],
          [2313.74, 2293.34, 2289.89, 2340.71],
          [2297.77, 2313.22, 2292.03, 2324.63],
          [2322.32, 2365.59, 2308.92, 2366.16],
          [2364.54, 2359.51, 2330.86, 2369.65],
          [2332.08, 2273.4, 2259.25, 2333.54],
          [2274.81, 2326.31, 2270.1, 2328.14],
          [2333.61, 2347.18, 2321.6, 2351.44],
          [2340.44, 2324.29, 2304.27, 2352.02],
          [2326.42, 2318.61, 2314.59, 2333.67],
          [2314.68, 2310.59, 2296.58, 2320.96],
          [2309.16, 2286.6, 2264.83, 2333.29],
          [2282.17, 2263.97, 2253.25, 2286.33],
          [2255.77, 2270.28, 2253.31, 2276.22],
          [2269.31, 2278.4, 2250, 2312.08],
          [2267.29, 2240.02, 2239.21, 2276.05],
          [2244.26, 2257.43, 2232.02, 2261.31],
          [2257.74, 2317.37, 2257.42, 2317.86],
          [2318.21, 2324.24, 2311.6, 2330.81],
          [2321.4, 2328.28, 2314.97, 2332],
          [2334.74, 2326.72, 2319.91, 2344.89],
          [2318.58, 2297.67, 2281.12, 2319.99],
          [2299.38, 2301.26, 2289, 2323.48],
          [2273.55, 2236.3, 2232.91, 2273.55],
          [2238.49, 2236.62, 2228.81, 2246.87],
          [2229.46, 2234.4, 2227.31, 2243.95],
          [2234.9, 2227.74, 2220.44, 2253.42],
          [2232.69, 2225.29, 2217.25, 2241.34],
          [2196.24, 2211.59, 2180.67, 2212.59],
          [2215.47, 2225.77, 2215.47, 2234.73],
          [2224.93, 2226.13, 2212.56, 2233.04],
          [2236.98, 2219.55, 2217.26, 2242.48],
          [2218.09, 2206.78, 2204.44, 2226.26],
          [2199.91, 2181.94, 2177.39, 2204.99],
          [2169.63, 2194.85, 2165.78, 2196.43],
          [2195.03, 2193.8, 2178.47, 2197.51],
          [2181.82, 2197.6, 2175.44, 2206.03],
          [2201.12, 2244.64, 2200.58, 2250.11],
          [2236.4, 2242.17, 2232.26, 2245.12],
          [2242.62, 2184.54, 2182.81, 2242.62],
          [2187.35, 2218.32, 2184.11, 2226.12],
          [2213.19, 2199.31, 2191.85, 2224.63],
          [2203.89, 2177.91, 2173.86, 2210.58],
          [2170.78, 2174.12, 2161.14, 2179.65],
          [2179.05, 2205.5, 2179.05, 2222.81],
          [2212.5, 2231.17, 2212.5, 2236.07],
          [2227.86, 2235.57, 2219.44, 2240.26],
          [2242.39, 2246.3, 2235.42, 2255.21],
          [2246.96, 2232.97, 2221.38, 2247.86],
          [2228.82, 2246.83, 2225.81, 2247.67],
          [2247.68, 2241.92, 2231.36, 2250.85],
          [2238.9, 2217.01, 2205.87, 2239.93],
          [2217.09, 2224.8, 2213.58, 2225.19],
          [2221.34, 2251.81, 2210.77, 2252.87],
          [2249.81, 2282.87, 2248.41, 2288.09],
          [2286.33, 2299.99, 2281.9, 2309.39],
          [2297.11, 2305.11, 2290.12, 2305.3],
          [2303.75, 2302.4, 2292.43, 2314.18],
          [2293.81, 2275.67, 2274.1, 2304.95],
          [2281.45, 2288.53, 2270.25, 2292.59],
          [2286.66, 2293.08, 2283.94, 2301.7],
          [2293.4, 2321.32, 2281.47, 2322.1],
          [2323.54, 2324.02, 2321.17, 2334.33],
          [2316.25, 2317.75, 2310.49, 2325.72],
          [2320.74, 2300.59, 2299.37, 2325.53],
          [2300.21, 2299.25, 2294.11, 2313.43],
          [2297.1, 2272.42, 2264.76, 2297.1],
          [2270.71, 2270.93, 2260.87, 2276.86],
          [2264.43, 2242.11, 2240.07, 2266.69],
          [2242.26, 2210.9, 2205.07, 2250.63],
          [2190.1, 2148.35, 2126.22, 2190.1]
        ],
        animation: false
      }
    ]
  }

  return <KLineChart option={\u62D6\u52A8K\u7EBF\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},89359:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(78533),r=e(85006),y={"docs-components-chart-2-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["a","b","c","d","e","f"]},series:[{data:[620,932,901,934,800,800],smooth:!0}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-2-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u66F2\u7EBF\u56FE = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 800],
        smooth: true
      }
    ]
  }

  return <LineChart option={\u66F2\u7EBF\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},47328:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(81200),r=e(85006),y={"docs-components-chart-3-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["a","b","c","d","e","f"],boundaryGap:!1},series:[{data:[620,932,901,934,800,800],areaStyle:{}}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-3-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u9762\u79EF\u56FE = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
      boundaryGap: false
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 800],
        areaStyle: {}
      }
    ]
  }

  return <LineChart option={\u9762\u79EF\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},4584:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(74640),r=e(85006),y={"docs-components-chart-4-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},series:[{name:"Email",stack:"sign",data:[120,132,101,134,90,230,210]},{name:"Union Ads",stack:"sign",data:[220,182,191,234,290,330,310]},{name:"Video Ads",stack:"sign",data:[150,232,201,154,190,330,410]},{name:"Direct",stack:"sign",data:[320,332,301,334,390,330,320]},{name:"Search Engine",stack:"sign",data:[820,932,901,600,500,400,500]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-4-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u805A\u5408\u56FE = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Email',
        stack: 'sign',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        stack: 'sign',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        stack: 'sign',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        stack: 'sign',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        stack: 'sign',
        data: [820, 932, 901, 600, 500, 400, 500]
      }
    ]
  }

  return <LineChart option={\u805A\u5408\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},1877:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(23910),r=e(85006),y={"docs-components-chart-5-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1},series:[{name:"Email",stack:"sign",areaStyle:{},data:[120,132,101,134,90,230,210],symbolSize:10},{name:"Union Ads",stack:"sign",areaStyle:{},data:[220,182,191,234,290,330,310],symbolSize:10},{name:"Video Ads",stack:"sign",areaStyle:{},data:[150,232,201,154,190,330,410],symbolSize:10},{name:"Direct",stack:"sign",areaStyle:{},data:[320,332,301,334,390,330,320],symbolSize:10},{name:"Search Engine",stack:"sign",areaStyle:{},data:[400,600,800,700,400,500,300],symbolSize:10}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-5-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u805A\u5408\u9762\u79EF\u56FE = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      boundaryGap: false
    },
    series: [
      {
        name: 'Email',
        stack: 'sign',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
        symbolSize: 10
      },
      {
        name: 'Union Ads',
        stack: 'sign',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310],
        symbolSize: 10
      },
      {
        name: 'Video Ads',
        stack: 'sign',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410],
        symbolSize: 10
      },
      {
        name: 'Direct',
        stack: 'sign',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320],
        symbolSize: 10
      },
      {
        name: 'Search Engine',
        stack: 'sign',
        areaStyle: {},
        data: [400, 600, 800, 700, 400, 500, 300],
        symbolSize: 10
      }
    ]
  }

  return <LineChart option={\u805A\u5408\u9762\u79EF\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},36353:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(91132),r=e(85006),y={"docs-components-chart-6-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["a","b","c","d","e","f","g"],boundaryGap:!1},series:[{name:"Line 1",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(128, 255, 15)"},{offset:1,color:"rgb(1, 191, 236)"}]},data:[140,232,101,264,90,340,250]},{name:"Line 2",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(0, 221, 25)"},{offset:1,color:"rgb(77, 119, 25)"}]},data:[120,282,111,234,220,340,310]},{name:"Line 3",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(55, 162, 25)"},{offset:1,color:"rgb(116, 21, 19)"}]},data:[320,132,201,334,190,130,220]},{name:"Line 4",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(25, 0, 13)"},{offset:1,color:"rgb(135, 0, 15)"}]},data:[220,402,231,134,190,230,120]},{name:"Line 5",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(255, 191, 0)"},{offset:1,color:"rgb(224, 62, 76)"}]},data:[220,302,181,234,210,290,150]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-6-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u6E10\u53D8\u56FE = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      boundaryGap: false
    },
    series: [
      {
        name: 'Line 1',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(128, 255, 15)' },
            { offset: 1, color: 'rgb(1, 191, 236)' }
          ]
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Line 2',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(0, 221, 25)' },
            { offset: 1, color: 'rgb(77, 119, 25)' }
          ]
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: 'Line 3',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(55, 162, 25)' },
            { offset: 1, color: 'rgb(116, 21, 19)' }
          ]
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: 'Line 4',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(25, 0, 13)' },
            { offset: 1, color: 'rgb(135, 0, 15)' }
          ]
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: 'Line 5',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(255, 191, 0)' },
            { offset: 1, color: 'rgb(224, 62, 76)' }
          ]
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  }

  return <LineChart option={\u6E10\u53D8\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},9163:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(57003),r=e(85006),y={"docs-components-chart-7-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["a","b","c","d","e","f"]},series:[{name:"Step Start",step:"start",data:[120,132,101,134,90,230]},{name:"Step Middle",step:"middle",data:[220,282,201,234,290,430]},{name:"Step End",step:"end",data:[450,432,401,454,590,530]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-7-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u62D0\u89D2\u56FE = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        name: 'Step Start',
        step: 'start',
        data: [120, 132, 101, 134, 90, 230]
      },
      {
        name: 'Step Middle',
        step: 'middle',
        data: [220, 282, 201, 234, 290, 430]
      },
      {
        name: 'Step End',
        step: 'end',
        data: [450, 432, 401, 454, 590, 530]
      }
    ]
  }

  return <LineChart option={\u62D0\u89D2\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},29142:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(75821),r=e(85006),y={"docs-components-chart-8-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.BarChart,s=function(){var m={xAxis:{data:["2017-10-24","2017-10-25","2017-10-26","2017-10-27"]},series:[{data:[190,210,300,450]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-8-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { BarChart } from 'advanced-charts'

const App = () => {
  const \u67F1\u72B6\u56FE = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    series: [
      {
        data: [190, 210, 300, 450]
      }
    ]
  }

  return <BarChart option={\u67F1\u72B6\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},45157:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(10971),r=e(85006),y={"docs-components-chart-9-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.BarChart,s=function(){var m={xAxis:{data:["a","b","c","d"]},series:[{data:[666,78,88,600],itemStyle:{shortLength:"70%"}}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-chart-9-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { BarChart } from 'advanced-charts'

const App = () => {
  const \u68AF\u5F62\u67F1\u72B6\u56FE = {
    xAxis: {
      data: ['a', 'b', 'c', 'd']
    },
    series: [
      {
        data: [666, 78, 88, 600],
        itemStyle: {
          shortLength: '70%'
        }
      }
    ]
  }

  return <BarChart option={\u68AF\u5F62\u67F1\u72B6\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},6490:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(91633),o={"docs-components-circile-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Circle,n=d.Stage,m=function(){var R=s(100),O=c()(R,2),j=O[0],C=O[1],D=s(100),B=c()(D,2),L=B[0],G=B[1],M=s(50),A=c()(M,2),$=A[0],z=A[1],Y=s(1),K=c()(Y,2),W=K[0],N=K[1],x=s("red"),b=c()(x,2),P=b[0],S=b[1],U=s("blue"),T=c()(U,2),X=T[0],J=T[1];return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("label",null," fillColor: "),r.createElement("input",{type:"color",onChange:function(F){return S(F.target.value)}})),r.createElement("div",null,r.createElement("label",null," strokeColor: "),r.createElement("input",{type:"color",onChange:function(F){return J(F.target.value)}})),r.createElement("div",null,r.createElement("label",null," x: "),r.createElement("input",{type:"range",value:j,min:100,max:400,onChange:function(F){return C(Number(F.target.value))}})),r.createElement("div",null,r.createElement("label",null," y: "),r.createElement("input",{type:"range",value:L,min:100,max:200,onChange:function(F){return G(Number(F.target.value))}})),r.createElement("div",null,r.createElement("label",null," radius: "),r.createElement("input",{type:"range",value:$,min:50,max:100,onChange:function(F){return z(Number(F.target.value))}})),r.createElement("div",null,r.createElement("label",null," strokeWidth: "),r.createElement("input",{type:"range",value:W,min:1,max:10,onChange:function(F){return N(Number(F.target.value))}})),r.createElement(n,null,r.createElement(l,{x:j,y:L,radius:$,fillStyle:P,strokeStyle:X,lineWidth:W})))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},77286:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(10772),o={"docs-components-curve-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Stage,n=d.Curve,m=function(){var R=s(100),O=c()(R,2),j=O[0],C=O[1],D=s(100),B=c()(D,2),L=B[0],G=B[1],M=s(300),A=c()(M,2),$=A[0],z=A[1],Y=s(150),K=c()(Y,2),W=K[0],N=K[1];return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("label",null," startX: "),r.createElement("input",{type:"range",value:j,min:100,max:150,onChange:function(b){return C(Number(b.target.value))}})),r.createElement("div",null,r.createElement("label",null," startY: "),r.createElement("input",{type:"range",value:L,min:100,max:350,onChange:function(b){return G(Number(b.target.value))}})),r.createElement("div",null,r.createElement("label",null," endX: "),r.createElement("input",{type:"range",value:$,min:300,max:450,onChange:function(b){return z(Number(b.target.value))}})),r.createElement("div",null,r.createElement("label",null," endY: "),r.createElement("input",{type:"range",value:W,min:150,max:350,onChange:function(b){return N(Number(b.target.value))}})),r.createElement(l,null,r.createElement(n,{points:[j,L,200,200,$,W],draggable:!0,lineWidth:2,strokeStyle:"blue"})))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},89998:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(53942),r=e(85006),y={"docs-components-draggable-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=n.sent,u=_.Circle,s=_.Stage,d=function(){return i.createElement(s,null,i.createElement(u,{x:300,y:200,radius:100,cursor:"pointer",fillStyle:"purple",draggable:!0}))},n.abrupt("return",{default:d});case 7:case"end":return n.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-draggable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Circle
        x={300}
        y={200}
        radius={100}
        cursor="pointer"
        fillStyle="purple"
        draggable
      />
    </Stage>
  );
};

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}},"docs-components-draggable-demo-1":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d,l;return t()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=m.sent,u=_.Rect,s=_.Circle,d=_.Stage,l=function(){return i.createElement(d,null,i.createElement(s,{x:200,y:200,radius:50,cursor:"pointer",fillStyle:"purple",draggable:"horizontal"}),i.createElement(u,{x:400,y:200,width:100,height:100,cursor:"move",fillStyle:"orange",draggable:"vertical"}))},m.abrupt("return",{default:l});case 8:case"end":return m.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-draggable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Circle, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Circle
        x={200}
        y={200}
        radius={50}
        cursor="pointer"
        fillStyle="purple"
        draggable="horizontal"
      />
      <Rect
        x={400}
        y={200}
        width={100}
        height={100}
        cursor="move"
        fillStyle="orange"
        draggable="vertical"
      />
    </Stage>
  );
};

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}},"docs-components-draggable-demo-2":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d,l,n;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=E.sent,u=_.Group,s=_.Rect,d=_.Circle,l=_.Stage,n=function(){return i.createElement(l,null,i.createElement(u,{draggable:!0},i.createElement(d,{x:200,y:200,radius:50,cursor:"pointer",fillStyle:"red"}),i.createElement(s,{x:400,y:200,width:100,height:100,cursor:"move",fillStyle:"blue"})))},E.abrupt("return",{default:n});case 9:case"end":return E.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-draggable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Group, Rect, Circle, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Group draggable>
        <Circle x={200} y={200} radius={50} cursor="pointer" fillStyle="red" />
        <Rect
          x={400}
          y={200}
          width={100}
          height={100}
          cursor="move"
          fillStyle="blue"
        />
      </Group>
    </Stage>
  );
};

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},5310:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(73354),o={"docs-components-event-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Circle,n=d.Stage,m=function(){var R=s(""),O=c()(R,2),j=O[0],C=O[1];return r.createElement(r.Fragment,null,r.createElement("div",{style:{height:20}},j),r.createElement(n,null,r.createElement(l,{x:350,y:260,radius:100,cursor:"pointer",fillStyle:"pink",onclick:function(){C("click")},onmouseenter:function(){C("mouseenter")},onmouseleave:function(){C("mouseleave")},onmousedown:function(){C("mousedown")}})))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},31342:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(13263),o={"docs-components-event-bubble-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m,E;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=v.sent,s=u.useState,v.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=v.sent,l=d.Circle,n=d.Group,m=d.Stage,E=function(){var O=s(""),j=c()(O,2),C=j[0],D=j[1],B=s(""),L=c()(B,2),G=L[0],M=L[1];return r.createElement(r.Fragment,null,r.createElement("div",{style:{height:20}},"group: ",C),r.createElement("div",{style:{height:20}},"circle: ",G),r.createElement(m,null,r.createElement(n,{onclick:function(){return D("group click")}},r.createElement(l,{x:350,y:260,radius:100,cursor:"pointer",fillStyle:"pink",onclick:function(){return M("circle click")}}))))},v.abrupt("return",{default:E});case 12:case"end":return v.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},59996:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(27735),o={"docs-components-event-hit-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m,E,h,v,R,O,j;return t()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=D.sent,s=u.useState,D.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=D.sent,l=d.BoxHidden,n=d.Circle,m=d.Group,E=d.Rect,h=d.Stage,v=d.Text,D.next=15,Promise.resolve().then(e.bind(e,16683));case 15:return R=D.sent,O=R.default,j=function(){var L=s("\u65E0"),G=c()(L,2),M=G[0],A=G[1];return r.createElement(r.Fragment,null,r.createElement("div",{style:{height:30,lineHeight:"30px"}},"\u70B9\u51FB\u4E86: ",M),r.createElement(h,null,r.createElement(n,{onclick:function(z){return A(z.target.data.name)},name:"\u68D5\u8272",x:230,y:300,radius:80,fillStyle:O("brown",.8),cursor:"e-resize"}),r.createElement(m,{onclick:function(z){return A(z.target.data.name)}},r.createElement(E,{name:"\u7C89\u8272",x:20,y:20,width:100,height:100,fillStyle:O("pink",.8),cursor:"pointer",zIndex:1}),r.createElement(E,{name:"\u7D2B\u8272",x:50,y:50,width:100,height:100,fillStyle:O("purple",.8),cursor:"move"}),r.createElement(m,{zIndex:4},r.createElement(n,{name:"\u84DD\u8272",x:170,y:100,radius:40,fillStyle:"blue",cursor:"s-resize"}),r.createElement(n,{name:"\u7EA2\u8272",x:220,y:100,radius:50,fillStyle:O("red",.8),cursor:"e-resize"}),r.createElement(v,{name:"\u6587\u5B57 qwer",x:220,y:100,content:"qwer",cursor:"text"}),r.createElement(m,{zIndex:4},r.createElement(n,{name:"\u7070\u8272",x:180,y:140,radius:40,fillStyle:O("gray",.8),cursor:"crosshair"}))),r.createElement(l,{name:"\u6A58\u8272",x:210,y:120,width:200,height:200,fillStyle:O("orange",.8),cursor:"help",zIndex:3},r.createElement(n,{name:"\u7EFF\u8272",x:300,y:110,radius:60,fillStyle:"greenyellow",cursor:"wait"})))))},D.abrupt("return",{default:j});case 19:case"end":return D.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},91218:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(93277),o={"docs-components-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Rect,n=d.Stage,m=function(){var R=s(200),O=c()(R,2),j=O[0],C=O[1],D=s(100),B=c()(D,2),L=B[0],G=B[1],M=s(300),A=c()(M,2),$=A[0],z=A[1],Y=s(300),K=c()(Y,2),W=K[0],N=K[1],x=s("red"),b=c()(x,2),P=b[0],S=b[1];return r.createElement(r.Fragment,null,r.createElement("div",{style:{marginTop:"30px"}},r.createElement("label",null," fillColor: "),r.createElement("input",{type:"color",onChange:function(T){return S(T.target.value)}})),r.createElement("div",null,r.createElement("label",null," x: "),r.createElement("input",{type:"range",value:j,min:100,max:200,onChange:function(T){return C(Number(T.target.value))}})),r.createElement("div",null,r.createElement("label",null," y: "),r.createElement("input",{type:"range",value:L,min:10,max:100,onChange:function(T){return G(Number(T.target.value))}})),r.createElement("div",null,r.createElement("label",null," width: "),r.createElement("input",{type:"range",value:$,min:100,max:300,onChange:function(T){return z(Number(T.target.value))}})),r.createElement("div",null,r.createElement("label",null," height: "),r.createElement("input",{type:"range",value:W,min:100,max:300,onChange:function(T){return N(Number(T.target.value))}})),r.createElement(n,null,r.createElement(l,{x:j,y:L,width:$,height:W,fillStyle:P})))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},41921:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(81287),o={"docs-components-line-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Stage,n=d.DraggableLine,m=function(){var R=s(2),O=c()(R,2),j=O[0],C=O[1],D=s("blue"),B=c()(D,2),L=B[0],G=B[1];return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("label",null," strokeColor: "),r.createElement("input",{type:"color",onChange:function(A){return G(A.target.value)}})),r.createElement("div",null,r.createElement("label",null," strokeWidth: "),r.createElement("input",{type:"range",value:j,min:1,max:10,onChange:function(A){return C(Number(A.target.value))}})),r.createElement(l,null,r.createElement(n,{type:"solid",start:{x:100,y:100},end:{x:300,y:300},lineWidth:j,strokeStyle:L})))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},29495:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(55028),r=e(85006),y={"docs-components-matrix-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=n.sent,u=_.Rect,s=_.Stage,d=function(){return i.createElement(s,null,i.createElement(u,{x:0,y:0,width:100,height:100,fillStyle:"red",translate:{x:200,y:0}}),i.createElement(u,{x:200,y:120,width:100,height:100,fillStyle:"blue",transform:[1,.2,.8,1,0,0]}))},n.abrupt("return",{default:d});case 7:case"end":return n.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-components-matrix-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rect, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Rect
        x={0}
        y={0}
        width={100}
        height={100}
        fillStyle="red"
        translate={{ x: 200, y: 0 }}
      />
      <Rect
        x={200}
        y={120}
        width={100}
        height={100}
        fillStyle="blue"
        transform={[1, 0.2, 0.8, 1, 0, 0]}
      />
    </Stage>
  );
};

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},18461:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(78665),o={"docs-components-sector-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Sector,n=d.Stage,m=function(){var R=s(200),O=c()(R,2),j=O[0],C=O[1],D=s(100),B=c()(D,2),L=B[0],G=B[1],M=s(100),A=c()(M,2),$=A[0],z=A[1],Y=s("red"),K=c()(Y,2),W=K[0],N=K[1];return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("label",null," fillColor: "),r.createElement("input",{type:"color",onChange:function(b){return N(b.target.value)}})),r.createElement("div",null,r.createElement("label",null," x: "),r.createElement("input",{type:"range",value:j,min:200,max:250,onChange:function(b){return C(Number(b.target.value))}})),r.createElement("div",null,r.createElement("label",null," y: "),r.createElement("input",{type:"range",value:L,min:100,max:150,onChange:function(b){return G(Number(b.target.value))}})),r.createElement("div",null,r.createElement("label",null," radius: "),r.createElement("input",{type:"range",value:$,min:100,max:150,onChange:function(b){return z(Number(b.target.value))}})),r.createElement(n,null,r.createElement(l,{x:j,y:L,radius:$,fillStyle:W})))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},37180:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(59823),o={"docs-components-trapezoid-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Stage,n=d.Trapezoid,m=function(){var R=s(250),O=c()(R,2),j=O[0],C=O[1],D=s(50),B=c()(D,2),L=B[0],G=B[1],M=s(100),A=c()(M,2),$=A[0],z=A[1],Y=s("red"),K=c()(Y,2),W=K[0],N=K[1];return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("label",null," fillColor: "),r.createElement("input",{type:"color",onChange:function(b){return N(b.target.value)}})),r.createElement("div",null,r.createElement("label",null," x: "),r.createElement("input",{type:"range",value:j,min:250,max:450,onChange:function(b){return C(Number(b.target.value))}})),r.createElement("div",null,r.createElement("label",null," y: "),r.createElement("input",{type:"range",value:L,min:50,max:180,onChange:function(b){return G(Number(b.target.value))}})),r.createElement("div",null,r.createElement("label",null," radius: "),r.createElement("input",{type:"range",value:$,min:100,max:150,onChange:function(b){return z(Number(b.target.value))}})),r.createElement(l,null,r.createElement(n,{x:j,y:L,width:200,height:400,shortLength:$,fillStyle:W})))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},43372:function(f,a,e){e.r(a),e.d(a,{demos:function(){return u}});var p=e(90228),t=e.n(p),g=e(335),c=e.n(g),i=e(48305),I=e.n(i),r=e(87999),y=e.n(r),o=e(75271),_=e(70502),u={"docs-design-chart-jsx-demo-0":{component:o.memo(o.lazy(y()(t()().mark(function s(){var d,l,n,m,E,h,v,R,O,j,C,D,B,L,G,M,A,$,z,Y,K,W;return t()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return W=function(){var P=h(!0);return E(function(){P.current=!1},[]),P.current},K=function(P){var S=n(B),U=S.updateLineMainData,T=W();return E(function(){T||U(P.data)},[P.data]),null},Y=function(P){var S=n(B),U=S.updateXAxisData,T=W();return E(function(){T||(console.log(P.data),U(P.data))},[P.data]),null},z=function(P){var S=h(),U=h(null),T=h({xAxis:{data:[]},series:[]});m(function(){var F=j.init(S.current);U.current=F;var V=c()(P.children||[]),Q;try{for(V.s();!(Q=V.n()).done;){var H=Q.value;if(H.type===Y){T.current.xAxis=H.props;continue}H.type===K&&(T.current.series=[{type:"line",data:H.props.data}])}}catch(k){V.e(k)}finally{V.f()}F.setOption(T.current)},[]);function X(F){T.current.xAxis.data=F,U.current.setOption(T.current)}function J(F){T.current.series=[{type:"line",data:F}],U.current.setOption(T.current)}var Z=R(function(){return{updateXAxisData:X,updateLineMainData:J}},[]);return D(S,function(){return U.current.refreshDraw()}),o.createElement(B.Provider,{value:Z},o.createElement("div",{ref:S,style:{width:"100%",height:500,border:"1px solid #aaa"}}),P.children)},x.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=x.sent,l=d.createContext,n=d.useContext,m=d.useEffect,E=d.useLayoutEffect,h=d.useRef,v=d.useState,R=d.useMemo,x.next=16,Promise.resolve().then(e.bind(e,83552));case 16:return O=x.sent,j=O.default,x.next=20,Promise.resolve().then(e.bind(e,95237));case 20:return C=x.sent,D=C.useResizeObserver,B=l(null),L=["a","b","c","d","e","f"],G=["g","h","i","j","k","l"],M=[620,932,901,934,800,1001],A=[680,232,401,934,300,101],$=function(){var P=v(L),S=I()(P,2),U=S[0],T=S[1],X=v(M),J=I()(X,2),Z=J[0],F=J[1];return o.createElement("div",null,o.createElement("button",{onClick:function(){return F(Z===M?A:M)}},"\u66F4\u65B0 data"),o.createElement(z,null,o.createElement(Y,{data:U}),o.createElement(K,{data:Z})))},x.abrupt("return",{default:$});case 29:case"end":return x.stop()}},s)})))),asset:null,context:void 0,renderOpts:void 0}}},30756:function(f,a,e){e.r(a),e.d(a,{demos:function(){return E}});var p=e(90228),t=e.n(p),g=e(335),c=e.n(g),i=e(26068),I=e.n(i),r=e(25298),y=e.n(r),o=e(17069),_=e.n(o),u=e(82092),s=e.n(u),d=e(87999),l=e.n(d),n=e(75271),m=e(29309),E={"docs-design-flow-chart-demo-0":{component:n.memo(n.lazy(l()(t()().mark(function h(){var v,R,O,j,C,D,B,L,G,M,A,$,z,Y;return t()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return Y=function(){var x=O(),b=O();return R(function(){var P=new C({container:x.current});b.current=P;var S=new z({x:100,y:50,width:100,height:100}),U=new z({x:400,y:50,width:100,height:100}),T=new z({x:250,y:160,width:100,height:100}),X=[S,U,T];P.append(X.map(function(H){return H.group})),X.forEach(function(H){H.onCircleMousedown=function(k){Z=H,F=k}}),J(X);function J(H){if(H.length<2){console.log("\u81F3\u5C11\u8981\u6709\u4E24\u4E2A");return}for(var k=0;k<H.length;k++)for(var w=k+1;w<H.length;w++)H[k].subscribe(H[w],!0)}var Z,F,V,Q;P.onmousemove=function(H){F&&(V?V.attr({points:[F.data.x,F.data.y,H.x,H.y]}):(V=new G({points:[F.data.x,F.data.y,H.x,H.y],strokeStyle:"#444",lineWidth:2}),Z.startLines.push(V),P.append(V)),Q=Z.detectOther(H.x,H.y),Q&&V.attr({points:[F.data.x,F.data.y,Q.collisionCircle.data.x,Q.collisionCircle.data.y]}))},P.onmouseup=function(){Q&&Q.otherRectWithCircle.endLines.push(V),Z=null,F=null,V=null,Q=null}},[]),$(x,function(){b.current.refreshDraw()}),n.createElement("div",{ref:x,style:{width:"100%",height:400}})},W.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return v=W.sent,R=v.useEffect,O=v.useRef,W.next=8,Promise.resolve().then(e.bind(e,70498));case 8:return j=W.sent,C=j.Stage,D=j.Rect,B=j.Circle,L=j.Group,G=j.Line,M=j.calcLineLength,W.next=17,Promise.resolve().then(e.bind(e,95237));case 17:return A=W.sent,$=A.useResizeObserver,z=function(){function N(x){var b=this;y()(this,N),s()(this,"group",void 0),s()(this,"rect",void 0),s()(this,"circles",void 0),s()(this,"startLines",[]),s()(this,"endLines",[]),s()(this,"subscribeOthers",[]),this.createRect(x),this.createCircles(),this.group=new L({zIndex:10,draggable:!0}),this.group.append(this.rect),this.group.onmouseenter=function(){b.showCircles()},this.group.onmouseleave=function(){b.hideCircles()},this.group.ondrag=function(P){b.startLines.forEach(function(S){var U=S.data.points,T=[U[0]+P.dx,U[1]+P.dy],X=[U[2],U[3]];S.attr({points:[].concat(T,X)})}),b.endLines.forEach(function(S){var U=S.data.points,T=[U[0],U[1]],X=[U[2]+P.dx,U[3]+P.dy];S.attr({points:[].concat(T,X)})})}}return _()(N,[{key:"showCircles",value:function(){this.group.append(this.circles)}},{key:"hideCircles",value:function(){this.circles.forEach(function(b){b.remove()})}},{key:"createRect",value:function(b){this.rect=new D(I()({fillStyle:"white",strokeStyle:"#444",lineWidth:2,cornerRadius:2},b))}},{key:"createCircles",value:function(){var b=this,P=this.rect,S={draggable:!1,radius:4,fillStyle:"white",strokeStyle:"blue",cursor:"crosshair"};this.circles=[new B(I()({x:P.data.x+P.data.width/2,y:P.data.y},S)),new B(I()({x:P.data.x+P.data.width,y:P.data.y+P.data.height/2},S)),new B(I()({x:P.data.x+P.data.width/2,y:P.data.y+P.data.height},S)),new B(I()({x:P.data.x,y:P.data.y+P.data.height/2},S))],this.circles.forEach(function(U){U.onmousedown=function(){b.onCircleMousedown(U)}})}},{key:"onCircleMousedown",value:function(b){}},{key:"detectOther",value:function(b,P){var S,U,T=c()(this.subscribeOthers),X;try{for(T.s();!(X=T.n()).done;){var J=X.value,Z=N.detectCircle(b,P,J.circles);if(Z)return U=Z,S=J,{collisionCircle:U,otherRectWithCircle:S}}}catch(F){T.e(F)}finally{T.f()}return null}},{key:"subscribe",value:function(b,P){this.subscribeOthers.push(b),P&&b.subscribe(this,!1)}}],[{key:"detectCircle",value:function(b,P,S){var U=c()(S),T;try{for(U.s();!(T=U.n()).done;){var X=T.value;if(M({x:b,y:P},{x:X.data.x,y:X.data.y})<=X.data.radius)return X}}catch(J){U.e(J)}finally{U.f()}return null}}]),N}(),W.abrupt("return",{default:Y});case 21:case"end":return W.stop()}},h)})))),asset:null,context:void 0,renderOpts:void 0}}},98647:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(56683),r=e(85006),y={"docs-design-group-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d,l;return t()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=m.sent,u=_.Stage,s=_.Group,d=_.Rect,l=function(){return i.createElement(u,{border:"1px solid orange"},i.createElement(d,null),i.createElement(d,{x:100,fillStyle:"red"}),i.createElement(s,{draggable:!0},i.createElement(d,{x:200,fillStyle:"pink"}),i.createElement(d,{x:200,y:120,fillStyle:"orange"})))},m.abrupt("return",{default:l});case 8:case"end":return m.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-design-group-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {Stage, Group, Rect} from 'advanced-charts'

 const App = () => {
  return (
    <Stage border="1px solid orange">
      <Rect />
      <Rect x={100} fillStyle="red" />
      <Group draggable>
        <Rect x={200} fillStyle="pink" />
        <Rect x={200} y={120} fillStyle="orange" />
      </Group>
    </Stage>
  )
};

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},56567:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(33886),r=e(85006),y={"docs-design-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return i.createElement(u,{height:150},i.createElement(s,{fillStyle:"orange"}))},n.next=3,Promise.resolve().then(e.bind(e,85006));case 3:return _=n.sent,u=_.Stage,s=_.Rect,n.abrupt("return",{default:d});case 7:case"end":return n.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-design-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {Stage, Rect} from 'advanced-charts'

function App() {
  return (
    <Stage height={150}>
      <Rect fillStyle="orange" />
    </Stage>
  )
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",title:"Stage \u7B80\u5355\u4F7F\u7528"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}},"docs-design-demo-1":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return i.createElement(u,null,i.createElement(s,null),i.createElement(s,{x:100,y:100,fillStyle:"red"}),i.createElement(s,{x:200,y:200,fillStyle:"pink"}),i.createElement(s,{x:300,y:300,fillStyle:"gray"}))},n.next=3,Promise.resolve().then(e.bind(e,85006));case 3:return _=n.sent,u=_.Stage,s=_.Rect,n.abrupt("return",{default:d});case 7:case"end":return n.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-design-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Stage, Rect} from 'advanced-charts'

function App() {
  return (
    <Stage>
      <Rect />
      <Rect x={100} y={100} fillStyle="red" />
      <Rect x={200} y={200} fillStyle="pink" />
      <Rect x={300} y={300} fillStyle="gray" />
    </Stage>
  )
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.jsx",title:"Stage \u591A\u4E2A\u5B57\u8282\u70B9"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},41556:function(f,a,e){e.r(a),e.d(a,{demos:function(){return o}});var p=e(90228),t=e.n(p),g=e(48305),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(85678),o={"docs-design-layer-demo-0":{component:r.memo(r.lazy(I()(t()().mark(function _(){var u,s,d,l,n,m;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return u=h.sent,s=u.useState,h.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return d=h.sent,l=d.Rect,n=d.Stage,m=function(){var R=s(2),O=c()(R,2),j=O[0],C=O[1];return r.createElement(n,{height:200,border:"1px solid orange",margin:"20px auto"},r.createElement(l,{x:130,y:10,fillStyle:"red",zIndex:1}),r.createElement(l,{x:170,y:50,fillStyle:"pink",zIndex:j,onclick:function(){C(j===2?4:2)}}),r.createElement(l,{x:210,y:90,fillStyle:"purple",zIndex:3}))},h.abrupt("return",{default:m});case 11:case"end":return h.stop()}},_)})))),asset:null,context:void 0,renderOpts:void 0}}},89283:function(f,a,e){e.r(a),e.d(a,{demos:function(){return r}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(76557),r={"docs-design-queue-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function y(){var o,_,u,s,d,l,n;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=E.sent,_=o.useEffect,u=o.useRef,E.next=7,Promise.resolve().then(e.bind(e,70498));case 7:return s=E.sent,d=s.Stage,l=s.Rect,n=function(){var v=u(null),R=u(null);_(function(){var j=new d({container:v.current});return R.current=j,O(),function(){R.current.dispose()}},[]);function O(){var j=R.current,C=5,D=5,B=5,L=17,G=L,M=L,A=0,$=0,z=document.querySelector(".\u6267\u884C"),Y=document.querySelector(".\u63D2\u961F");z.onclick=function(){z.innerText="\u5DF2\u70B9\u51FB\uFF0C\u63D2\u5165\u4E2D",requestIdleCallback(b)},Y.onclick=function(){W()};var K;function W(){for(var P=performance.now();performance.now()-P<1;);var S=new l({x:K.data.x,y:K.data.y,width:G,height:M,fillStyle:"red"});j.appendIncrement(S)}function N(){for(var P=performance.now();performance.now()-P<1;);var S=X();S+G>j.canvasSize.width&&(A+=1,$=0,S=X());var U=D+(M+B)*A;$+=1;var T=new l({x:S,y:U,width:G,height:M,fillStyle:"pink",cursor:"move",draggable:!0});j.appendIncrement(T),K=T;function X(){return C+(G+B)*$}}var x=Array.from({length:1e5},function(){return N});function b(){if(x.length===0){z.innerText="\u6267\u884C";return}requestIdleCallback(function(P){for(var S;(S=x.pop())&&!P.didTimeout&&P.timeRemaining()>0;)S();b()})}}return i.createElement("div",{style:{marginTop:10}},i.createElement("button",{className:"\u6267\u884C"},"\u6267\u884C"),i.createElement("button",{className:"\u63D2\u961F"},"\u63D2\u961F"),i.createElement("div",{className:"canvas-container",ref:v,style:{width:700,height:3e4}}))},E.abrupt("return",{default:n});case 12:case"end":return E.stop()}},y)})))),asset:null,context:void 0,renderOpts:void 0}}},72080:function(f,a,e){e.r(a),e.d(a,{demos:function(){return _}});var p=e(48305),t=e.n(p),g=e(90228),c=e.n(g),i=e(87999),I=e.n(i),r=e(75271),y=e(92421),o=e(85006),_={"docs-design-zindex-demo-0":{component:r.memo(r.lazy(I()(c()().mark(function u(){var s,d,l,n,m;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return s=h.sent,d=s.Stage,l=s.Group,n=s.Rect,m=function(){return r.createElement(d,{border:"1px solid orange"},r.createElement(l,{draggable:!0},r.createElement(n,null),r.createElement(n,{x:100,fillStyle:"red"})),r.createElement(l,{draggable:!0},r.createElement(n,{x:200,fillStyle:"pink"}),r.createElement(n,{x:200,y:120,fillStyle:"orange"})))},h.abrupt("return",{default:m});case 8:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-design-zindex-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {Stage, Group, Rect} from 'advanced-charts'

 const App = () => {
  return (
    <Stage border="1px solid orange">
      <Group draggable>
        <Rect />
        <Rect x={100} fillStyle="red" />
      </Group>
      
      <Group draggable>
        <Rect x={200} fillStyle="pink" />
        <Rect x={200} y={120} fillStyle="orange" />
      </Group>
    </Stage>
  )
};

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":o},renderOpts:{compile:function(){var u=I()(c()().mark(function d(){var l,n=arguments;return c()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(2715).then(e.bind(e,52715));case 2:return E.abrupt("return",(l=E.sent).default.apply(l,n));case 3:case"end":return E.stop()}},d)}));function s(){return u.apply(this,arguments)}return s}()}},"docs-design-zindex-demo-1":{component:r.memo(r.lazy(I()(c()().mark(function u(){var s,d,l,n,m,E;return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return s=v.sent,d=s.useState,v.next=6,Promise.resolve().then(e.bind(e,85006));case 6:return l=v.sent,n=l.Rect,m=l.Stage,E=function(){var O=d(2),j=t()(O,2),C=j[0],D=j[1];return r.createElement(m,{height:200,border:"1px solid orange",margin:"20px auto"},r.createElement(n,{x:130,y:10,fillStyle:"red",zIndex:1}),r.createElement(n,{x:170,y:50,fillStyle:"pink",zIndex:C,onclick:function(){D(C===2?4:2)}}),r.createElement(n,{x:210,y:90,fillStyle:"purple",zIndex:3}))},v.abrupt("return",{default:E});case 11:case"end":return v.stop()}},u)})))),asset:null,context:void 0,renderOpts:void 0}}},95368:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(26314),r=e(85006),y={"docs-guide-charts-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return _=l.sent,u=_.LineChart,s=function(){var m={xAxis:{data:["a","b","c","d","e","f","g"],boundaryGap:!1},series:[{name:"Line 1",type:"line",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(128, 255, 15)"},{offset:1,color:"rgb(1, 191, 236)"}]},data:[140,232,101,264,90,340,250]},{name:"Line 2",type:"line",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(0, 221, 25)"},{offset:1,color:"rgb(77, 119, 25)"}]},data:[120,282,111,234,220,340,310]},{name:"Line 3",type:"line",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(55, 162, 25)"},{offset:1,color:"rgb(116, 21, 19)"}]},data:[320,132,201,334,190,130,220]},{name:"Line 4",type:"line",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(25, 0, 13)"},{offset:1,color:"rgb(135, 0, 15)"}]},data:[220,402,231,134,190,230,120]},{name:"Line 5",type:"line",stack:"sign",smooth:!0,lineStyle:{width:0},symbol:"none",areaStyle:{opacity:.8,color:[{offset:0,color:"rgb(255, 191, 0)"},{offset:1,color:"rgb(224, 62, 76)"}]},data:[220,302,181,234,210,290,150]}]};return i.createElement(u,{option:m,containerStyle:{border:"1px solid #eee"}})},l.abrupt("return",{default:s});case 6:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-guide-charts-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { LineChart } from 'advanced-charts'

const App = () => {
  const \u6E10\u53D8\u56FE = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      boundaryGap: false
    },
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(128, 255, 15)' },
            { offset: 1, color: 'rgb(1, 191, 236)' }
          ]
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(0, 221, 25)' },
            { offset: 1, color: 'rgb(77, 119, 25)' }
          ]
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(55, 162, 25)' },
            { offset: 1, color: 'rgb(116, 21, 19)' }
          ]
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(25, 0, 13)' },
            { offset: 1, color: 'rgb(135, 0, 15)' }
          ]
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(255, 191, 0)' },
            { offset: 1, color: 'rgb(224, 62, 76)' }
          ]
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  }

  return <LineChart option={\u6E10\u53D8\u56FE} containerStyle={{ border: '1px solid #eee' }} />
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},23323:function(f,a,e){e.r(a),e.d(a,{demos:function(){return s}});var p=e(26068),t=e.n(p),g=e(48305),c=e.n(g),i=e(90228),I=e.n(i),r=e(87999),y=e.n(r),o=e(75271),_=e(18040),u=e(85006),s={"docs-guide-create-element-demo-0":{component:o.memo(o.lazy(y()(I()().mark(function d(){var l,n,m,E;return I()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return E=function(){return o.createElement(n,{height:250},o.createElement(m,{x:200,y:100,radius:50}))},v.next=3,Promise.resolve().then(e.bind(e,85006));case 3:return l=v.sent,n=l.Stage,m=l.Circle,v.abrupt("return",{default:E});case 7:case"end":return v.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-guide-create-element-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {Stage, Circle} from 'advanced-charts'

function App() {
  return (
    <Stage height={250}>
      <Circle x={200} y={100} radius={50} />
    </Stage>
  )
}

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":u},renderOpts:{compile:function(){var d=y()(I()().mark(function n(){var m,E=arguments;return I()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(2715).then(e.bind(e,52715));case 2:return v.abrupt("return",(m=v.sent).default.apply(m,E));case 3:case"end":return v.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"docs-guide-create-element-demo-1":{component:o.memo(o.lazy(y()(I()().mark(function d(){var l,n,m,E;return I()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return E=function(){return o.createElement(n,{height:250},o.createElement(m,{x:200,y:100,radius:50,fillStyle:"pink"}),o.createElement(m,{x:320,y:100,radius:50,strokeStyle:"red",lineWidth:10}))},v.next=3,Promise.resolve().then(e.bind(e,85006));case 3:return l=v.sent,n=l.Stage,m=l.Circle,v.abrupt("return",{default:E});case 7:case"end":return v.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-guide-create-element-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {Stage, Circle} from 'advanced-charts'

function App() {
  return (
    <Stage height={250}>
      <Circle x={200} y={100} radius={50} fillStyle="pink" />
      <Circle x={320} y={100} radius={50} strokeStyle="red" lineWidth={10} />
    </Stage>
  )
}

export default App;`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":u},renderOpts:{compile:function(){var d=y()(I()().mark(function n(){var m,E=arguments;return I()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(2715).then(e.bind(e,52715));case 2:return v.abrupt("return",(m=v.sent).default.apply(m,E));case 3:case"end":return v.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"docs-guide-create-element-demo-2":{component:o.memo(o.lazy(y()(I()().mark(function d(){var l,n,m,E;return I()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,85006));case 2:return l=v.sent,n=l.Circle,m=l.Stage,E=function(){return o.createElement(m,null,o.createElement(n,{x:250,y:160,radius:100,cursor:"pointer",fillStyle:"orange",onclick:function(){alert("\u70B9\u51FB\u4E8B\u4EF6")},onmouseenter:function(){alert("\u9F20\u6807\u79FB\u5165")}}))},v.abrupt("return",{default:E});case 7:case"end":return v.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-guide-create-element-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Circle, Stage } from 'advanced-charts'

const App = () => {
  return (
    <Stage>
      <Circle
        x={250}
        y={160}
        radius={100}
        cursor="pointer"
        fillStyle="orange"
        onclick={() => {
          alert('\u70B9\u51FB\u4E8B\u4EF6')
        }}
        onmouseenter={() => {
          alert('\u9F20\u6807\u79FB\u5165')
        }}
      />
    </Stage>
  )
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":u},renderOpts:{compile:function(){var d=y()(I()().mark(function n(){var m,E=arguments;return I()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(2715).then(e.bind(e,52715));case 2:return v.abrupt("return",(m=v.sent).default.apply(m,E));case 3:case"end":return v.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"docs-guide-create-element-demo-3":{component:o.memo(o.lazy(y()(I()().mark(function d(){var l,n,m,E,h,v,R,O,j;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=D.sent,n=l.useEffect,m=l.useState,D.next=7,Promise.resolve().then(e.bind(e,85006));case 7:return E=D.sent,h=E.Rect,v=E.Stage,R={x:0,height:60,fillStyle:"purple"},O={x:200,height:200,fillStyle:"red"},j=function(){var L=m(R),G=c()(L,2),M=G[0],A=G[1];return n(function(){setTimeout(function(){M.x=200,A(t()({},M))},500),setTimeout(function(){M.height=200,M.fillStyle="red",A(t()({},M))},800)},[]),o.createElement(v,null,o.createElement(h,{x:M.x,y:50,width:100,height:M.height,fillStyle:M.fillStyle,shadowColor:"red",cursor:"pointer",animation:{duration:1e3,easing:"linear"},onclick:function(){var z;M.x==200?z={x:0,height:60,fillStyle:"purple"}:z={x:200,height:200,fillStyle:"red"},A(z)}}))},D.abrupt("return",{default:j});case 14:case"end":return D.stop()}},d)})))),asset:null,context:void 0,renderOpts:void 0}}},7024:function(f,a,e){e.r(a),e.d(a,{demos:function(){return y}});var p=e(90228),t=e.n(p),g=e(87999),c=e.n(g),i=e(75271),I=e(17498),r=e(85006),y={"docs-guide-demo-0":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d,l,n;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return n=function(){return i.createElement("div",null,i.createElement(u,{height:200},i.createElement(s,null,i.createElement(d,{x:120,y:10,width:100,height:100,fillStyle:"blue"}),i.createElement(d,{x:180,y:10,width:100,height:100,fillStyle:"red"})),i.createElement(l,{x:0,y:36,radius:30,fillStyle:"red",cursor:"pointer",onclick:function(){console.log(1234)},onmouseenter:function(){console.log("enter")}})))},E.next=3,Promise.resolve().then(e.bind(e,85006));case 3:return _=E.sent,u=_.Stage,s=_.Group,d=_.Rect,l=_.Circle,E.abrupt("return",{default:n});case 9:case"end":return E.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-guide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stage, Group, Rect, Circle } from 'advanced-charts'

function App() {
  return (
    <div>
      <Stage height={200}>
        <Group>
          <Rect x={120} y={10} width={100} height={100} fillStyle="blue" />
          <Rect x={180} y={10} width={100} height={100} fillStyle="red" />
        </Group>

        <Circle
          x={0}
          y={36}
          radius={30}
          fillStyle="red"
          cursor="pointer"
          onclick={() => {
            console.log(1234)
          }}
          onmouseenter={() => {
            console.log('enter')
          }}
        />
      </Stage>
    </div>
  )
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}},"docs-guide-demo-1":{component:i.memo(i.lazy(c()(t()().mark(function o(){var _,u,s,d;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return i.createElement(u,{height:400,option:s})},n.next=3,Promise.resolve().then(e.bind(e,85006));case 3:return _=n.sent,u=_.LineChart,s={xAxis:{data:["a","b","c","d","e","f"]},series:[{type:"line",data:[620,932,901,934,800,1001]}]},n.abrupt("return",{default:d});case 7:case"end":return n.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-guide-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {LineChart} from 'advanced-charts'

const options = {
  xAxis: {
    data: ['a', 'b', 'c', 'd', 'e', 'f']
  },
  series: [
    {
      type: 'line',
      data: [620, 932, 901, 934, 800, 1001]
    }
  ]
}

function App() {
  return (
    <LineChart height={400} option={options} />
  )
}

export default App`},"advanced-charts":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"advanced-charts":r},renderOpts:{compile:function(){var o=c()(t()().mark(function u(){var s,d=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2715).then(e.bind(e,52715));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,d));case 3:case"end":return n.stop()}},u)}));function _(){return o.apply(this,arguments)}return _}()}}}},90637:function(f,a,e){e.r(a),e.d(a,{demos:function(){return g}});var p=e(75271),t=e(54576),g={}},6940:function(f,a,e){e.r(a),e.d(a,{demos:function(){return u}});var p=e(90228),t=e.n(p),g=e(15558),c=e.n(g),i=e(48305),I=e.n(i),r=e(87999),y=e.n(r),o=e(75271),_=e(20711),u={"docs-perfomance-demo-0":{component:o.memo(o.lazy(y()(t()().mark(function s(){var d,l,n,m,E,h,v,R,O,j,C,D,B,L;return t()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return B=function(){var $=Math.round(255*Math.random()),z=Math.round(255*Math.random()),Y=Math.round(255*Math.random());return"rgb(".concat($,", ").concat(z,", ").concat(Y,")")},D=function(){return j+Math.random()*(500-j*2)},C=function(){return j+Math.random()*(750-j*2)},M.next=5,Promise.resolve().then(e.t.bind(e,75271,19));case 5:return d=M.sent,l=d.useEffect,n=d.useState,M.next=10,Promise.resolve().then(e.bind(e,85006));case 10:return m=M.sent,E=m.Circle,h=m.Stage,M.next=15,Promise.resolve().then(e.bind(e,16683));case 15:return v=M.sent,R=v.default,O=25,j=50,L=function(){var $=n([]),z=I()($,2),Y=z[0],K=z[1];l(function(){var N=setInterval(function(){W()},100);return function(){clearInterval(N)}},[]);function W(){var N=25,x=50,b=B(),P=R(b,0),S={key:Math.random().toString(),x:C(),y:D(),fillStyle:B(),radius:N,animationEnd:function(){K(function(T){return T.filter(function(X){return X.key!==S.key})})}};K(function(U){return U.concat(S)}),setTimeout(function(){S.x=C(),S.y=D(),S.radius=x,S.fillStyle=P,K(function(U){return c()(U)})},10)}return o.createElement(o.Fragment,null,o.createElement(h,null,Y.map(function(N){return o.createElement(E,{key:N.key,x:N.x,y:N.y,radius:N.radius,fillStyle:N.fillStyle,animation:{duration:1e3,easing:"linear",animationEnd:N.animationEnd}})})))},M.abrupt("return",{default:L});case 21:case"end":return M.stop()}},s)})))),asset:null,context:void 0,renderOpts:void 0}}},2329:function(f,a,e){e.r(a),e.d(a,{demos:function(){return u}});var p=e(90228),t=e.n(p),g=e(26068),c=e.n(g),i=e(48305),I=e.n(i),r=e(87999),y=e.n(r),o=e(75271),_=e(45938),u={"docs-perfomance-many-demo-0":{component:o.memo(o.lazy(y()(t()().mark(function s(){var d,l,n,m,E,h,v,R,O,j,C,D;return t()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=L.sent,l=d.useEffect,n=d.useRef,m=d.useState,L.next=8,Promise.resolve().then(e.bind(e,85006));case 8:return E=L.sent,h=E.Rect,v=E.Stage,R=E.Animator,O=4e3,j=700,C=10700,D=function(){var M=17,A=m(function(){var K=M,W=M,N=0,x=0,b=5,P=5,S=5;return Array.from({length:O},function(U){var T=J();T+K>j&&(N+=1,x=0,T=J());var X=P+(W+S)*N;return x+=1,{x:T,y:X,width:K,height:W};function J(){return b+(K+S)*x}})}),$=I()(A,1),z=$[0],Y=n([]);return l(function(){var K=new R({a:0},{a:100},{iterationCount:1/0});K.start();var W=z.map(function(N){return c()(c()({},N),{},{dis:-10})});return K.onUpdate=function(N,x){for(var b=0;b<Y.current.length;b++){var P=Y.current[b],S=W[b].width+W[b].dis*x,U=W[b].height+W[b].dis*x;P==null||P.attr({width:S,height:U})}},function(){K.stop()}},[]),o.createElement(v,{width:j,height:C,border:"1px solid red"},z.map(function(K,W){return o.createElement(h,{ref:function(x){return Y.current[W]=x},x:K.x,y:K.y,width:K.width,height:K.height,fillStyle:"pink",draggable:!0})}))},L.abrupt("return",{default:D});case 17:case"end":return L.stop()}},s)})))),asset:null,context:void 0,renderOpts:void 0}}},62980:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(65121);const t=[{value:"\u5728\u6211\u4EEC\u7684\u9879\u76EE\u5185\u90E8\uFF0C\u4F7F\u7528\u4E86\u9762\u5411\u5BF9\u8C61\u7684\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u4F8B\u5982: \u521B\u5EFA\u4E00\u4E2A\u77E9\u5F62\u7684\u65B9\u5F0F\u662F",paraId:1,tocIndex:0},{value:"const rect = new Rect({ x: 0, y: 0, width: 100, height: 100 })",paraId:1,tocIndex:0},{value:"\u4FEE\u6539\u5C5E\u6027\uFF1A",paraId:2,tocIndex:0},{value:"rect.attr('width', 200)",paraId:2,tocIndex:0},{value:", \u4E4B\u540E",paraId:2,tocIndex:0},{value:"attr",paraId:2,tocIndex:0},{value:"\u65B9\u6CD5\u5185\u90E8\uFF0C\u4F1A\u6E05\u9664\u753B\u5E03\uFF0C\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:2,tocIndex:0},{value:"\u90A3\u4E48\u5982\u679C\u591A\u4E2A\u77E9\u5F62\u540C\u65F6\u6267\u884C\u52A8\u753B\uFF0C\u6D41\u7A0B\u5982\u4E0B",paraId:3,tocIndex:1},{value:"rect_1.attr('width', 200) -> \u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:4,tocIndex:1},{value:"rect_2.attr('width', 200) -> \u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:4,tocIndex:1},{value:"rect_3.attr('width', 200) -> \u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:4,tocIndex:1},{value:"rect_4.attr('width', 200) -> \u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:4,tocIndex:1},{value:"rect_5.attr('width', 200) -> \u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:4,tocIndex:1},{value:"...\u66F4\u591A\u77E9\u5F62",paraId:4,tocIndex:1},{value:"\u6BCF\u4E00\u4E2A\u77E9\u5F62\u7684\u5BBD\u5EA6\u53D8\u5316\uFF0C\u90FD\u91CD\u65B0\u7ED8\u5236\u4E00\u4E0B\uFF0C\u4F3C\u4E4E\u975E\u5E38\u5408\u7406",paraId:5,tocIndex:1},{value:"\u7136\u800C\u73B0\u5B9E\u662F\uFF0C\u5728\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236 \u4E0E UI \u89C6\u56FE\u7684\u66F4\u65B0\u673A\u5236\u4E0B\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u6B21 \u7684 '\u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001' \u662F\u6709\u6548\u64CD\u4F5C\uFF0C\u4E4B\u524D\u7684\u90FD\u662F\u65E0\u610F\u4E49\u7684\u6267\u884C\uFF0C\u5927\u5E45\u5360\u7528 js \u4E3B\u7EBF\u7A0B\u65F6\u95F4\uFF0C\u968F\u7740\u77E9\u5F62\u6570\u91CF\u53D8\u591A\uFF0C\u6027\u80FD\u95EE\u9898\u4F1A\u66F4\u52A0\u660E\u663E\u3002",paraId:6,tocIndex:1},{value:"\u90A3\u662F\u4E0D\u662F\u53EF\u4EE5\uFF0C\u8BA9\u524D\u9762\u7684\u77E9\u5F62 \u6267\u884C ",paraId:7,tocIndex:1},{value:"attr",paraId:7,tocIndex:1},{value:"\u65B9\u6CD5 \u4EC5\u4EC5\u4FEE\u6539\u5185\u5B58\u4E2D\u7684\u77E9\u5F62\u5BBD\u5EA6\u6570\u636E\uFF0C\u53EA\u6709\u5F53\u6700\u540E\u4E00\u4E2A\u77E9\u5F62\u6267\u884C\u5B8C ",paraId:7,tocIndex:1},{value:"attr",paraId:7,tocIndex:1},{value:"\u65B9\u6CD5\u540E\uFF0C\u624D\u8FDB\u884C\u7ED8\u5236\u5462\uFF1F",paraId:7,tocIndex:1},{value:"\u5E0C\u671B\u7684\u6267\u884C\u8FC7\u7A0B\u5E94\u8BE5\u662F\u8FD9\u6837\u7684",paraId:8,tocIndex:2},{value:"rect_1.attr('width', 200) -> ",paraId:9,tocIndex:2},{value:"\u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:9,tocIndex:2},{value:"rect_2.attr('width', 200) -> ",paraId:9,tocIndex:2},{value:"\u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:9,tocIndex:2},{value:"rect_3.attr('width', 200) -> ",paraId:9,tocIndex:2},{value:"\u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:9,tocIndex:2},{value:"rect_4.attr('width', 200) -> ",paraId:9,tocIndex:2},{value:"\u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:9,tocIndex:2},{value:"rect_5.attr('width', 200) -> ",paraId:9,tocIndex:2},{value:"\u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:9,tocIndex:2},{value:"...",paraId:9,tocIndex:2},{value:"rect_5.attr('width', 200) -> \u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001",paraId:9,tocIndex:2},{value:"\u4F46\u662F\uFF0C\u5185\u90E8\u5982\u4F55\u77E5\u9053\u662F\u6700\u540E\u4E00\u4E2A\u77E9\u5F62\u4FEE\u6539\u5B8C\u6BD5\u5462\uFF0C\u8FD9\u8981\u501F\u52A9\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF0C\u8BA9'\u7ED8\u5236'\u6210\u4E3A\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\u3002",paraId:10,tocIndex:2},{value:"\u9996\u5148\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u6807\u8BC6 ",paraId:11,tocIndex:2},{value:"isAsyncRenderTack",paraId:11,tocIndex:2},{value:"\uFF0C\u4EE3\u8868\u662F\u5426\u6D3E\u53D1\u4E86\u6E32\u67D3\u4EFB\u52A1\uFF0C\u521D\u59CB\u503C\u4E3A ",paraId:11,tocIndex:2},{value:"false",paraId:11,tocIndex:2},{value:"\u5728\u7B2C\u4E00\u6B21\u8C03\u7528 ",paraId:12,tocIndex:2},{value:"rect_1.attr('width', 200)",paraId:12,tocIndex:2},{value:" \u65B9\u6CD5\u65F6\uFF0C\u5C06 ",paraId:12,tocIndex:2},{value:"isAsyncRenderTack",paraId:12,tocIndex:2},{value:" \u6539\u4E3A ",paraId:12,tocIndex:2},{value:"true",paraId:12,tocIndex:2},{value:"\uFF0C\u5E76\u4F7F\u7528 ",paraId:12,tocIndex:2},{value:"requestAnimationFrame",paraId:12,tocIndex:2},{value:"\u6D3E\u53D1\u4E00\u4E2A\u5F02\u6B65\u7684\u6E32\u67D3\u4EFB\u52A1",paraId:12,tocIndex:2},{value:`let isAsyncRenderTack = false

function attr(property], value) {
  this[property] = value

  if (isAsyncRenderTack) {
    return
  }

  isAsyncRenderTack = true

  requestAnimationFrame(() => {
    \u6E05\u9664\u753B\u5E03_\u7ED8\u5236\u6700\u65B0\u72B6\u6001()

    isAsyncRenderTack = false
  })
}
`,paraId:13,tocIndex:2},{value:"\u8FD9\u6837\u5F53\u6240\u6709 attr \u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u51FD\u6570\u8C03\u7528\u6808\u4E3A\u7A7A\uFF0C\u63A5\u4E0B\u6765\u5F00\u59CB\u6267\u884C\u5F02\u6B65\u7684\u7ED8\u5236\u4EFB\u52A1\uFF0C\u5927\u91CF\u51CF\u5C11 js \u7684\u6267\u884C\u65F6\u95F4\u3002",paraId:14,tocIndex:2},{value:"\u57FA\u4E8E\u6B64 ",paraId:15,tocIndex:2},{value:"\u6279\u91CF\u66F4\u65B0",paraId:15,tocIndex:2},{value:"\u539F\u7406\uFF0C\u53EF\u4EE5\u505A\u5230\u540C\u65F6\u6267\u884C ",paraId:15,tocIndex:2},{value:"5000",paraId:15,tocIndex:2},{value:" \u4E2A\u77E9\u5F62\u6267\u884C\u52A8\u753B\u4E0D\u6389\u5E27",paraId:15,tocIndex:2},{value:"\u6BCF\u4E00\u4E2A\u77E9\u5F62\u5728\u52A8\u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u8BA1\u7B97\u51FA\u6BCF\u4E00\u5E27\u7684\u72B6\u6001\u7684\u600E\u6837\u7684\uFF08\u5BBD\u5EA6\uFF0C\u9AD8\u5EA6 \u7B49\uFF09\uFF0C\u9700\u8981\u901A\u8FC7",paraId:16,tocIndex:3},{value:"requestAnimationFrame",paraId:16,tocIndex:3},{value:"\u6D3E\u53D1\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\u6765\u8BA1\u7B97\uFF0C\u5982\u679C\u6709\u4E00\u4E07\u4E2A\u77E9\u5F62\uFF0C\u90A3\u4E48\u5728\u6BCF\u4E00\u5E27\u5C31\u9700\u8981\u6709\u6D3E\u53D1\u4E00\u4E07\u4E2A\u5F02\u6B65\u4EFB\u52A1\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u4E00\u5E27\u7684\u65F6\u95F4\u5185\u6709\u4E00\u4E07\u4E2A\u51FD\u6570\u9700\u8981\u6267\u884C\uFF0C\u53BB\u8BA1\u7B97\u51FA\u6BCF\u4E2A\u77E9\u5F62\u7684\u5F53\u524D\u5E27\u7684\u72B6\u6001\uFF0C\u8FD9\u4E00\u4E07\u4E2A\u51FD\u6570\u7684\u6267\u884C\u9700\u8981\u6D88\u8017\u4E00\u5B9A\u7684\u65F6\u95F4\uFF0C\u4E00\u65E6\u8D85\u8FC7 16.7 \u6BEB\u79D2\uFF08\u5047\u8BBE\u5C4F\u5E55\u5237\u65B0\u7387\u662F 60hz\uFF09\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6E32\u67D3\u5EF6\u540E\uFF0C\u51FA\u73B0\u6389\u5E27\u7684\u73B0\u8C61\u3002",paraId:16,tocIndex:3},{value:"\u5728\u6211\u4EEC\u7684\u6848\u4F8B\u91CC\u9762\uFF0C\u6240\u6709\u7684\u77E9\u5F62\u7684\u52A8\u753B\u51FD\u6570 \u548C \u52A8\u753B\u6301\u7EED\u65F6\u95F4\u662F\u4E00\u6837\u7684\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u5728\u6BCF\u4E00\u5E27\u53EA\u9700\u8981\u6D3E\u53D1\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\u5373\u53EF",paraId:17,tocIndex:3},{value:`const rects = [] // \u4E00\u4E07\u4E94\u5343\u4E2A\u77E9\u5F62
const startState = rects.map(item => ({ ...item }))
const dis = 50 // \u77E9\u5F62\u7684\u5BBD\u548C\u9AD8\u589E\u52A0\u91CF\u662F 50

const animator = new Animator({ duration: 1000 })
animator.start()

animator.onUpdate = (elapsedRatio) => {
  for (let index = 0; index < rects.length; index++) {
    const item = rects[index]
    const itemStartState = startState[index]

    const curWidth = itemStartState.width + dis * elapsedRatio
    const curHeight = itemStartState.height + dis * elapsedRatio

    item.attr({ width: curWidth, height: curHeight })
  }
}
`,paraId:18,tocIndex:3},{value:"\u540C\u65F6\u4E5F\u57FA\u4E8E ",paraId:19,tocIndex:3},{value:"\u6279\u91CF\u66F4\u65B0",paraId:19,tocIndex:3},{value:"\u539F\u7406 \u53EF\u4EE5\u8FBE\u5230\u4E00\u4E07\u4E94\u5343\u4E2A\u77E9\u5F62\u52A8\u753B\u7684\u6D41\u7545\u4F53\u9A8C",paraId:19,tocIndex:3},{value:"\u672A\u6765\u5C06\u5F15\u5165\u5E76\u53D1\u6A21\u5F0F\uFF0C\u8FBE\u5230\u652F\u6301\u5230 2 \u4E07\u4E2A\u4EE5\u4E0A\u7684\u6D41\u7545\u4F53\u9A8C",paraId:20,tocIndex:4}]},28017:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(36073);const t=[]},30205:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(49663);const t=[]},90446:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(80903);const t=[{value:"\u6BCF\u4E2A\u5143\u7D20\u90FD\u652F\u6301\u52A8\u753B\uFF0C\u6211\u4EEC\u901A\u8FC7 animation \u5C5E\u6027\u914D\u7F6E\u52A8\u753B\u7684\u53C2\u6570\uFF0C\u5E76\u901A\u8FC7\u4FEE\u6539\u5176\u4ED6\u6837\u5F0F\u5C5E\u6027\u7684\u65B9\u5F0F\u6765\u89E6\u53D1\u52A8\u753B\u3002",paraId:0,tocIndex:0},{value:`import { useEffect, useState } from 'openinula';
import { Rect, Stage } from 'advanced-charts';

const s = { x: 0, height: 60, fillStyle: 'purple' };
const e = { x: 200, height: 200, fillStyle: 'red' };

const App = () => {
  const [state, setState] = useState(s);

  useEffect(() => {
    setTimeout(() => {
      state.x = 200;
      setState({ ...state });
    }, 500);

    setTimeout(() => {
      state.height = 200;
      state.fillStyle = 'red';
      setState({ ...state });
    }, 800);
  }, []);

  return (
    <Stage>
      <Rect
        x={state.x}
        y={50}
        width={100}
        height={state.height}
        fillStyle={state.fillStyle}
        shadowColor="red"
        cursor="pointer"
        animation={{ duration: 1000, easing: 'linear' }}
        onclick={() => {
          let _state;
          if (state.x == 200) {
            _state = { x: 0, height: 60, fillStyle: 'purple' };
          } else {
            _state = { x: 200, height: 200, fillStyle: 'red' };
          }
          setState(_state);
        }}
      />
    </Stage>
  );
};

export default App;
`,paraId:1,tocIndex:0},{value:"\u6F14\u793A\u6548\u679C\u5982\u4E0B\uFF0C\u5982\u679C\u52A8\u753B\u5DF2\u7ECF\u7ED3\u675F\uFF0C\u53EF\u518D\u6B21\u70B9\u51FB\u77E9\u5F62\u89E6\u53D1\u52A8\u753B",paraId:2,tocIndex:0}]},49318:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(29299);const t=[{value:"LineChart \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:0},{value:"name",paraId:1},{value:"description",paraId:1},{value:"type",paraId:1},{value:"default",paraId:1},{value:"option",paraId:1},{value:"\u914D\u7F6E\u9879",paraId:1},{value:"Option",paraId:1},{value:"width",paraId:1},{value:"\u5BB9\u5668\u5BBD\u5EA6",paraId:1},{value:"number",paraId:1},{value:"height",paraId:1},{value:"\u5BB9\u5668\u9AD8\u5EA6",paraId:1},{value:"number",paraId:1},{value:"containerStyle",paraId:1},{value:"\u5176\u4ED6 css \u5C5E\u6027",paraId:1},{value:"name",paraId:2,tocIndex:1},{value:"description",paraId:2,tocIndex:1},{value:"type",paraId:2,tocIndex:1},{value:"default",paraId:2,tocIndex:1},{value:"xAxis",paraId:2,tocIndex:1},{value:"x \u8F74\u914D\u7F6E",paraId:2,tocIndex:1},{value:"xAxis",paraId:2,tocIndex:1},{value:"series",paraId:2,tocIndex:1},{value:"\u56FE\u8868\u914D\u7F6E",paraId:2,tocIndex:1},{value:"Series[]",paraId:2,tocIndex:1},{value:"animationDuration",paraId:2,tocIndex:1},{value:"\u52A8\u753B\u6301\u7EED\u65F6\u95F4",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:"1000",paraId:2,tocIndex:1},{value:"animation",paraId:2,tocIndex:1},{value:"\u662F\u5426\u5F00\u542F\u52A8\u753B",paraId:2,tocIndex:1},{value:"boolean",paraId:2,tocIndex:1},{value:"true",paraId:2,tocIndex:1},{value:"legend",paraId:2,tocIndex:1},{value:"\u56FE\u4F8B",paraId:2,tocIndex:1},{value:"legend",paraId:2,tocIndex:1},{value:"name",paraId:3,tocIndex:2},{value:"description",paraId:3,tocIndex:2},{value:"type",paraId:3,tocIndex:2},{value:"default",paraId:3,tocIndex:2},{value:"data",paraId:3,tocIndex:2},{value:"\u56FE\u8868\u6570\u636E",paraId:3,tocIndex:2},{value:"number[]",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"\u662F\u5426\u4F7F\u7528\u5E73\u6ED1\u66F2\u7EBF",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"step",paraId:3,tocIndex:2},{value:"\u9636\u68AF\u914D\u7F6E",paraId:3,tocIndex:2},{value:'"start" |"middle" | "end"',paraId:3,tocIndex:2},{value:"symbol",paraId:3,tocIndex:2},{value:"\u6307\u793A\u70B9",paraId:3,tocIndex:2},{value:'"circle"|"none"',paraId:3,tocIndex:2},{value:'"circle"',paraId:3,tocIndex:2},{value:"symbolSize",paraId:3,tocIndex:2},{value:"\u6307\u793A\u70B9\u5C3A\u5BF8",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"3",paraId:3,tocIndex:2},{value:"stack",paraId:3,tocIndex:2},{value:"\u5806\u53E0",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"areaStyle",paraId:3,tocIndex:2},{value:"\u9762\u79EF\u56FE\u914D\u7F6E",paraId:3,tocIndex:2},{value:"areaStyle",paraId:3,tocIndex:2},{value:"lineStyle",paraId:3,tocIndex:2},{value:"\u7EBF\u7684\u914D\u7F6E",paraId:3,tocIndex:2},{value:"lineStyle",paraId:3,tocIndex:2},{value:"name",paraId:4,tocIndex:3},{value:"description",paraId:4,tocIndex:3},{value:"type",paraId:4,tocIndex:3},{value:"default",paraId:4,tocIndex:3},{value:"width",paraId:4,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"join",paraId:4,tocIndex:3},{value:"CanvasLineJoin",paraId:4,tocIndex:3},{value:"'butt'",paraId:4,tocIndex:3},{value:"cap",paraId:4,tocIndex:3},{value:"CanvasLineCap",paraId:4,tocIndex:3},{value:"'bevel' ",paraId:4,tocIndex:3},{value:"name",paraId:5,tocIndex:4},{value:"description",paraId:5,tocIndex:4},{value:"type",paraId:5,tocIndex:4},{value:"default",paraId:5,tocIndex:4},{value:"opacity",paraId:5,tocIndex:4},{value:"\u9762\u79EF\u56FE\u900F\u660E\u5EA6",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"1",paraId:5,tocIndex:4},{value:"color",paraId:5,tocIndex:4},{value:"\u6E10\u53D8\u914D\u7F6E",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"name",paraId:6,tocIndex:5},{value:"description",paraId:6,tocIndex:5},{value:"type",paraId:6,tocIndex:5},{value:"default",paraId:6,tocIndex:5},{value:"data",paraId:6,tocIndex:5},{value:"x \u8F74\u523B\u5EA6\u6587\u5B57",paraId:6,tocIndex:5},{value:"string[]",paraId:6,tocIndex:5},{value:"boundaryGap",paraId:6,tocIndex:5},{value:"x \u8F74\u4E24\u4FA7\u5426\u6709\u5185\u95F4\u8DDD",paraId:6,tocIndex:5},{value:" boolean",paraId:6,tocIndex:5},{value:"true",paraId:6,tocIndex:5},{value:"name",paraId:7,tocIndex:6},{value:"description",paraId:7,tocIndex:6},{value:"type",paraId:7,tocIndex:6},{value:"default",paraId:7,tocIndex:6},{value:"orient",paraId:7,tocIndex:6},{value:"'vertical'",paraId:7,tocIndex:6},{value:" | ",paraId:7,tocIndex:6},{value:"'horizontal'",paraId:7,tocIndex:6},{value:"horizontal",paraId:7,tocIndex:6},{value:"left",paraId:7,tocIndex:6},{value:"'left'",paraId:7,tocIndex:6},{value:" |",paraId:7,tocIndex:6},{value:"'center'",paraId:7,tocIndex:6},{value:"| ",paraId:7,tocIndex:6},{value:"'right'",paraId:7,tocIndex:6},{value:"'center'",paraId:7,tocIndex:6}]},40308:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(80582);const t=[]},97076:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(82907);const t=[]},63637:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(12076);const t=[]},38166:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(46908);const t=[]},39875:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(50369);const t=[{value:"\u652F\u6301\u8D85\u5927\u6570\u636E\u7684\u5C55\u793A",paraId:0,tocIndex:0}]},60713:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(78533);const t=[]},89176:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(81200);const t=[]},84249:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(74640);const t=[]},36796:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(23910);const t=[]},64208:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(91132);const t=[]},75687:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(57003);const t=[]},45458:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(75821);const t=[]},44633:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(10971);const t=[]},49804:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(91633);const t=[{value:"\u4EE3\u7801\u5982\u4E0B",paraId:0},{value:`import { useState } from 'openinula'
import { Circle, Stage } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(100)
  const [y, setY] = useState(100)
  const [radius, setRadius] = useState(50)

  const [lineWidth, setLineWidth] = useState(1)

  const [fillStyle, setFillStyle] = useState('red')
  const [strokeStyle, setStrokeStyle] = useState('blue')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> strokeColor: </label>
        <input type="color" onChange={evt => setStrokeStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={100} max={400} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={100} max={200} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> radius: </label>
        <input type="range" value={radius} min={50} max={100} onChange={evt => setRadius(Number(evt.target.value))} />
      </div>

      <div>
        <label> strokeWidth: </label>
        <input
          type="range"
          value={lineWidth}
          min={1}
          max={10}
          onChange={evt => setLineWidth(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Circle x={x} y={y} radius={radius} fillStyle={fillStyle} strokeStyle={strokeStyle} lineWidth={lineWidth} />
      </Stage>
    </>
  )
}

export default App
`,paraId:1},{value:"Circle \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:2},{value:"name",paraId:3},{value:"description",paraId:3},{value:"type",paraId:3},{value:"default",paraId:3},{value:"x",paraId:3},{value:"\u5706\u5FC3\u5750\u6807",paraId:3},{value:"?: number",paraId:3},{value:"10",paraId:3},{value:"y",paraId:3},{value:"\u5706\u5FC3\u5750\u6807",paraId:3},{value:"?: number",paraId:3},{value:"10",paraId:3},{value:"radius",paraId:3},{value:"\u534A\u5F84",paraId:3},{value:"?: number",paraId:3},{value:"8",paraId:3},{value:"fillStyle",paraId:3},{value:"\u586B\u5145\u989C\u8272",paraId:3},{value:"?: string",paraId:3},{value:"black",paraId:3}]},831:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(10772);const t=[{value:`import { useState } from 'openinula'
import { Stage, Curve } from 'advanced-charts'

const App = () => {
  const [startX, setStartX] = useState(100)
  const [startY, setStartY] = useState(100)

  const [endX, setEndX] = useState(300)
  const [endY, setEndY] = useState(150)

  return (
    <>
      <div>
        <label> startX: </label>
        <input type="range" value={startX} min={100} max={150} onChange={evt => setStartX(Number(evt.target.value))} />
      </div>

      <div>
        <label> startY: </label>
        <input type="range" value={startY} min={100} max={350} onChange={evt => setStartY(Number(evt.target.value))} />
      </div>

      <div>
        <label> endX: </label>
        <input type="range" value={endX} min={300} max={450} onChange={evt => setEndX(Number(evt.target.value))} />
      </div>

      <div>
        <label> endY: </label>
        <input type="range" value={endY} min={150} max={350} onChange={evt => setEndY(Number(evt.target.value))} />
      </div>

      <Stage>
        <Curve points={[startX, startY, 200, 200, endX, endY]} draggable lineWidth={2} strokeStyle="blue" />
      </Stage>
    </>
  )
}

export default App
`,paraId:0},{value:"Curve \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:1},{value:"name",paraId:2},{value:"description",paraId:2},{value:"type",paraId:2},{value:"default",paraId:2},{value:"points",paraId:2},{value:"\u70B9\u7684\u6570\u7EC4",paraId:2},{value:"?: [x1, y1, x2, y2, x3, y3, x4, y4, ...]",paraId:2},{value:"[100, 100, 200, 200, 300, 150]",paraId:2},{value:"strokeStyle",paraId:2},{value:"\u586B\u5145\u989C\u8272",paraId:2},{value:"?: string",paraId:2},{value:"black",paraId:2}]},55339:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(53942);const t=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"draggable",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5373\u53EF\u62D6\u62FD",paraId:0,tocIndex:1},{value:"\u53EA\u53EF\u6A2A\u5411 \u6216 \u7EB5\u5411 \u62D6\u62FD",paraId:1,tocIndex:2}]},90589:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(73354);const t=[{value:`import { useState } from 'openinula'
import { Circle, Stage } from 'advanced-charts'

const App = () => {
  const [log, setLog] = useState('')

  return (
    <>
      <div style={{ height: 20 }}>{log}</div>

      <Stage>
        <Circle
          x={350}
          y={260}
          radius={100}
          cursor="pointer"
          fillStyle="pink"
          onclick={() => {
            setLog('click')
          }}
          onmouseenter={() => {
            setLog('mouseenter')
          }}
          onmouseleave={() => {
            setLog('mouseleave')
          }}
          onmousedown={() => {
            setLog('mousedown')
          }}
        />
      </Stage>
    </>
  )
}

export default App;
`,paraId:0},{value:"eventName",paraId:1,tocIndex:1},{value:"description",paraId:1,tocIndex:1},{value:"type",paraId:1,tocIndex:1},{value:"default",paraId:1,tocIndex:1},{value:"click",paraId:1,tocIndex:1},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"mouseenter",paraId:1,tocIndex:1},{value:"\u9F20\u6807\u79FB\u5165",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"mouseleave",paraId:1,tocIndex:1},{value:"\u9F20\u6807\u79FB\u51FA",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"mousemove",paraId:1,tocIndex:1},{value:"\u9F20\u6807\u79FB\u52A8",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"mousedown",paraId:1,tocIndex:1},{value:"\u9F20\u6807\u6309\u4E0B",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"mouseup",paraId:1,tocIndex:1},{value:"\u9F20\u6807\u62AC\u8D77",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"ondragstart",paraId:1,tocIndex:1},{value:"\u62D6\u62FD\u5F00\u59CB",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"ondrag",paraId:1,tocIndex:1},{value:"\u62D6\u62FD\u65F6\u6301\u7EED\u89E6\u53D1",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"ondragend",paraId:1,tocIndex:1},{value:"\u62D6\u62FD\u7ED3\u675F",paraId:1,tocIndex:1},{value:"(eventParameter: EventParameter) => void",paraId:1,tocIndex:1},{value:"undefined",paraId:1,tocIndex:1},{value:"\u76EE\u524D\u53EA\u6709 ",paraId:2},{value:"click",paraId:2},{value:" \u4E8B\u4EF6\u652F\u6301\u4E8B\u4EF6\u5192\u6CE1",paraId:2},{value:"\u8BBE\u7F6E\u4E86 ",paraId:2},{value:"draggable: true",paraId:2},{value:" \u7684\u56FE\u5F62\uFF0C\u624D\u4F1A\u89E6\u53D1 ",paraId:2},{value:"ondragstart",paraId:2},{value:" ",paraId:2},{value:"ondrag",paraId:2},{value:" ",paraId:2},{value:"ondragend",paraId:2},{value:" \u4E8B\u4EF6",paraId:2},{value:`type EventParameter = {
  target: IShape;
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  nativeEvent?: MouseEvent;
}
`,paraId:3,tocIndex:2}]},40101:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(13263);const t=[{value:"\u5F53 Group \u6709\u540E\u4EE3\u5143\u7D20\u65F6, \u652F\u6301\u4E8B\u4EF6\u5192\u6CE1\u5230 Group",paraId:0,tocIndex:0},{value:`import { useState } from 'openinula';
import { Circle, Group, Stage } from 'advanced-charts';

const App = () => {
  const [groupLog, setGroupLog] = useState('');
  const [log, setLog] = useState('');

  return (
    <>
      <div style={{ height: 20 }}>group: {groupLog}</div>
      <div style={{ height: 20 }}>circle: {log}</div>

      <Stage>
        <Group onclick={() => setGroupLog('group click')}>
          <Circle
            x={350}
            y={260}
            radius={100}
            cursor="pointer"
            fillStyle="pink"
            onclick={() => setLog('circle click')}
          />
        </Group>
      </Stage>
    </>
  );
};

export default App;
`,paraId:1}]},73075:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(27735);const t=[{value:"\u70B9\u51FB\u56FE\u5F62\u5373\u53EF\u770B\u5230\u62FE\u53D6\u6548\u679C",paraId:0,tocIndex:0},{value:"\u9F20\u6807 hover \u4E5F\u6709\u4E0D\u540C\u7684 UI \u8868\u73B0",paraId:0,tocIndex:0},{value:`import { useState } from 'openinula';
import { BoxHidden, Circle, Group, Rect, Stage, Text } from 'advanced-charts';
import colorAlpha from 'color-alpha';

const App = () => {
  const [log, setLog] = useState('\u65E0');

  return (
    <>
      <div style={{ height: 30, lineHeight: '30px' }}>\u70B9\u51FB\u4E86: {log}</div>

      <Stage>
        <Circle
          onclick={(evt) => setLog(evt.target.data.name)}
          {...{
            name: '\u68D5\u8272',
            x: 230,
            y: 300,
            radius: 80,
            fillStyle: colorAlpha('brown', 0.8),
            cursor: 'e-resize',
          }}
        />

        <Group onclick={(evt) => setLog(evt.target.data.name)}>
          <Rect
            {...{
              name: '\u7C89\u8272',
              x: 20,
              y: 20,
              width: 100,
              height: 100,
              fillStyle: colorAlpha('pink', 0.8),
              cursor: 'pointer',
              zIndex: 1,
            }}
          />
          <Rect
            {...{
              name: '\u7D2B\u8272',
              x: 50,
              y: 50,
              width: 100,
              height: 100,
              fillStyle: colorAlpha('purple', 0.8),
              cursor: 'move',
            }}
          />

          <Group zIndex={4}>
            <Circle
              {...{
                name: '\u84DD\u8272',
                x: 170,
                y: 100,
                radius: 40,
                fillStyle: 'blue',
                cursor: 's-resize',
              }}
            />
            <Circle
              {...{
                name: '\u7EA2\u8272',
                x: 220,
                y: 100,
                radius: 50,
                fillStyle: colorAlpha('red', 0.8),
                cursor: 'e-resize',
              }}
            />
            <Text
              {...{
                name: '\u6587\u5B57 qwer',
                x: 220,
                y: 100,
                content: 'qwer',
                cursor: 'text',
              }}
            />

            <Group zIndex={4}>
              <Circle
                {...{
                  name: '\u7070\u8272',
                  x: 180,
                  y: 140,
                  radius: 40,
                  fillStyle: colorAlpha('gray', 0.8),
                  cursor: 'crosshair',
                }}
              />
            </Group>
          </Group>

          <BoxHidden
            {...{
              name: '\u6A58\u8272',
              x: 210,
              y: 120,
              width: 200,
              height: 200,
              fillStyle: colorAlpha('orange', 0.8),
              cursor: 'help',
              zIndex: 3,
            }}
          >
            <Circle
              {...{
                name: '\u7EFF\u8272',
                x: 300,
                y: 110,
                radius: 60,
                fillStyle: 'greenyellow',
                cursor: 'wait',
              }}
            />
          </BoxHidden>
        </Group>
      </Stage>
    </>
  );
};

export default App;
`,paraId:1}]},33428:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(93277);const t=[{value:"\u4EE3\u7801\u5982\u4E0B",paraId:0},{value:`import { useState } from 'openinula'
import { Rect, Stage } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(200)
  const [y, setY] = useState(100)
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div style={{marginTop: '30px'}}>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={100} max={200} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={10} max={100} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> width: </label>
        <input type="range" value={width} min={100} max={300} onChange={evt => setWidth(Number(evt.target.value))} />
      </div>

      <div>
        <label> height: </label>
        <input type="range" value={height} min={100} max={300} onChange={evt => setHeight(Number(evt.target.value))} />
      </div>

      <Stage>
        <Rect x={x} y={y} width={width} height={height} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
`,paraId:1},{value:"Rect \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:2},{value:"name",paraId:3},{value:"description",paraId:3},{value:"type",paraId:3},{value:"default",paraId:3},{value:"x",paraId:3},{value:"\u5DE6\u4E0A\u89D2 x\u5750\u6807",paraId:3},{value:"?: number",paraId:3},{value:"0",paraId:3},{value:"y",paraId:3},{value:"\u5DE6\u4E0A\u89D2 y\u5750\u6807",paraId:3},{value:"?: number",paraId:3},{value:"0",paraId:3},{value:"width",paraId:3},{value:"\u5BBD",paraId:3},{value:"?: number",paraId:3},{value:"100",paraId:3},{value:"height",paraId:3},{value:"\u9AD8",paraId:3},{value:"?: number",paraId:3},{value:"100",paraId:3},{value:"fillStyle",paraId:3},{value:"\u586B\u5145\u989C\u8272",paraId:3},{value:"?: string",paraId:3},{value:"black",paraId:3},{value:"cornerRadius",paraId:3},{value:"\u5706\u89D2",paraId:3},{value:"?: number",paraId:3},{value:"0",paraId:3}]},54925:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(81287);const t=[{value:`import { useState } from 'openinula'
import { Stage, DraggableLine } from 'advanced-charts'

const App = () => {
  const [lineWidth, setLineWidth] = useState(2)

  const [strokeStyle, setStrokeStyle] = useState('blue')

  return (
    <>
      <div>
        <label> strokeColor: </label>
        <input type="color" onChange={evt => setStrokeStyle(evt.target.value)} />
      </div>

      <div>
        <label> strokeWidth: </label>
        <input
          type="range"
          value={lineWidth}
          min={1}
          max={10}
          onChange={evt => setLineWidth(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <DraggableLine
          type="solid"
          start={{ x: 100, y: 100 }}
          end={{ x: 300, y: 300 }}
          lineWidth={lineWidth}
          strokeStyle={strokeStyle}
        />
      </Stage>
    </>
  )
}

export default App
`,paraId:0},{value:"Line \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:1},{value:"name",paraId:2},{value:"description",paraId:2},{value:"type",paraId:2},{value:"default",paraId:2},{value:"start",paraId:2},{value:"\u8D77\u70B9\u5750\u6807",paraId:2},{value:"?: { x: number, y: number }",paraId:2},{value:"{ x: 0, y: 0 }",paraId:2},{value:"end",paraId:2},{value:"\u7EC8\u70B9\u5750\u6807",paraId:2},{value:"?: { x: number, y: number }",paraId:2},{value:"{ x: 100, y: 100 }",paraId:2},{value:"strokeStyle",paraId:2},{value:"\u63CF\u8FB9\u989C\u8272",paraId:2},{value:"?: string",paraId:2},{value:"black",paraId:2},{value:"lineWidth",paraId:2},{value:"\u63CF\u8FB9\u5BBD\u5EA6",paraId:2},{value:"?: number",paraId:2},{value:"1",paraId:2}]},79062:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(55028);const t=[]},64195:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(78665);const t=[{value:`import { useState } from 'openinula'
import { Sector, Stage } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(200)
  const [y, setY] = useState(100)

  const [radius, setRadius] = useState(100)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={200} max={250} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={100} max={150} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> radius: </label>
        <input type="range" value={radius} min={100} max={150} onChange={evt => setRadius(Number(evt.target.value))} />
      </div>

      <Stage>
        <Sector x={x} y={y} radius={radius} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
`,paraId:0},{value:"Sector \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:1},{value:"name",paraId:2},{value:"description",paraId:2},{value:"type",paraId:2},{value:"default",paraId:2},{value:"x",paraId:2},{value:"\u5706\u5FC3\u5750\u6807",paraId:2},{value:"?: number",paraId:2},{value:"10",paraId:2},{value:"y",paraId:2},{value:"\u5706\u5FC3\u5750\u6807",paraId:2},{value:"?: number",paraId:2},{value:"10",paraId:2},{value:"radius",paraId:2},{value:"\u534A\u5F84",paraId:2},{value:"?: number",paraId:2},{value:"8",paraId:2},{value:"fillStyle",paraId:2},{value:"\u586B\u5145\u989C\u8272",paraId:2},{value:"?: string",paraId:2},{value:"black",paraId:2},{value:"startAngle",paraId:2},{value:"\u5F00\u59CB\u89D2\u5EA6",paraId:2},{value:"?: number",paraId:2},{value:"30",paraId:2},{value:"endAngle",paraId:2},{value:"\u7ED3\u675F\u89D2\u5EA6",paraId:2},{value:"?: number",paraId:2},{value:"90",paraId:2}]},66194:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(59823);const t=[{value:`import { useState } from 'openinula'
import { Stage, Trapezoid } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(250)
  const [y, setY] = useState(50)

  const [shortLength, setShortLength] = useState(100)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={250} max={450} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={50} max={180} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> shortLength: </label>
        <input
          type="range"
          value={shortLength}
          min={100}
          max={150}
          onChange={evt => setShortLength(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Trapezoid x={x} y={y} width={200} height={400} shortLength={shortLength} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
`,paraId:0},{value:"Trapezoid \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:1},{value:"name",paraId:2},{value:"description",paraId:2},{value:"type",paraId:2},{value:"default",paraId:2},{value:"x",paraId:2},{value:"\u5DE6\u4E0A\u89D2 x \u5750\u6807",paraId:2},{value:"?: number",paraId:2},{value:"0",paraId:2},{value:"y",paraId:2},{value:"\u5DE6\u4E0A\u89D2 y \u5750\u6807",paraId:2},{value:"?: number",paraId:2},{value:"0",paraId:2},{value:"width",paraId:2},{value:"\u5BBD",paraId:2},{value:"?: number",paraId:2},{value:"100",paraId:2},{value:"height",paraId:2},{value:"\u9AD8",paraId:2},{value:"?: number",paraId:2},{value:"100",paraId:2},{value:"fillStyle",paraId:2},{value:"\u586B\u5145\u989C\u8272",paraId:2},{value:"?: string",paraId:2},{value:"black",paraId:2},{value:"shortLength",paraId:2},{value:"\u77ED\u8FB9\u957F\u5EA6",paraId:2},{value:"?: number",paraId:2},{value:"80",paraId:2}]},76514:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(70502);const t=[{value:"\u6211\u4EEC\u652F\u6301\u4EE5 jsx \u7684\u5F62\u5F0F\u4F7F\u7528\u56FE\u8868\u7EC4\u4EF6, \u5C55\u793A x \u8F74 y \u8F74 \u56FE\u8868\u4E3B\u4F53\u7B49",paraId:0,tocIndex:0},{value:"\u4E00\u822C Y \u8F74\u7684\u6570\u636E\u662F\u81EA\u52A8\u7B97\u7684, \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E0D\u5199 ",paraId:1,tocIndex:0},{value:"<YAxis /> ",paraId:1,tocIndex:0},{value:`import { ChartStage, XAxis, LineMain } from 'advanced-charts';

const mainData_1 = [620, 932, 901, 934, 800, 1001];
const mainData_2 = [680, 232, 401, 934, 300, 101];

const App = () => {
  const [xData] = useState(['a', 'b', 'c', 'd', 'e', 'f'];);
  const [mainData, setMainData] = useState(mainData_1);

  return (
    <div>
      <button
        onClick={() =>
          setMainData(mainData === mainData_1 ? mainData_2 : mainData_1)
        }
      >
        \u66F4\u65B0 data
      </button>

      <ChartStage>
        <XAxis data={xData} />
        <LineMain data={mainData} />
      </ChartStage>
    </div>
  );
};
`,paraId:2}]},13122:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(29309);const t=[]},99141:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(56683);const t=[{value:"\u539F\u5219\u4E0A\u6765\u8BF4\uFF0C\u56FE\u5F62\u8282\u70B9\u5728 ",paraId:0,tocIndex:0},{value:"Stage",paraId:0,tocIndex:0},{value:" \u4E2D\uFF0C\u662F\u4E00\u4E2A\u6241\u5E73\u7684\u7ED3\u6784\uFF0C\u6240\u6709\u7684\u56FE\u5F62\u8282\u70B9\u90FD\u662F\u5144\u5F1F\u8282\u70B9\u3002\u4F46\u662F\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u5BF9\u90E8\u5206\u5143\u7D20\u8FDB\u884C\u5206\u7EC4\u7BA1\u7406\uFF0C\u8FD9\u90E8\u5206\u5143\u7D20\u53EF\u4EE5\u5177\u5907\u5171\u540C\u7684\u53D8\u5316\u884C\u4E3A\uFF0C\u4F8B\u5982\u62D6\u62FD\u3002\u56E0\u6B64\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\u8282\u70B9 ",paraId:0,tocIndex:0},{value:"Group",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"Group",paraId:1,tocIndex:0},{value:" \u53EF\u4EE5\u5C06\u6240\u6709\u7684\u5B50\u5143\u7D20\u5F53\u6210\u662F\u4E00\u4E2A\u6574\u4F53\u8FDB\u884C\u64CD\u4F5C\u3002\u4F8B\u5982\u4E0B\u9762\u7684\u6848\u4F8B\u4E2D\uFF0C\u7C89\u8272\u4E0E\u6A58\u8272\u7684\u77E9\u5F62\u540C\u5C5E\u4E8E\u4E00\u4E2A Group\uFF0C\u5F53\u6211\u4EEC\u62D6\u62FD\u4ED6\u4EEC\u65F6\uFF0C\u6574\u4E2A Group \u4E2D\u7684\u5143\u7D20\u4F1A\u4E00\u8D77\u8DDF\u7740\u79FB\u52A8\u3002\u6F14\u793A\u6548\u679C\u5982\u4E0B",paraId:1,tocIndex:0}]},94085:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(33886);const t=[{value:"\u5728 ",paraId:0,tocIndex:0},{value:"advanced-charts",paraId:0,tocIndex:0},{value:" \u4E2D\uFF0C",paraId:0,tocIndex:0},{value:"Stage",paraId:0,tocIndex:0},{value:" \u5143\u7D20\u662F\u56FE\u5F62\u7ED8\u5236\u7684",paraId:0,tocIndex:0},{value:"\u5FC5\u5907\u9876\u5C42\u5BB9\u5668\u8282\u70B9",paraId:0,tocIndex:0},{value:"\uFF0C\u7528\u4E8E\u8868\u793A\u8BE5\u533A\u57DF\u4E3A\u56FE\u5F62\u7ED8\u5236\u533A\u57DF\u3002\u5176\u4ED6\u6240\u6709\u7684\u56FE\u5F62\u7EC4\u4EF6\u8282\u70B9\u90FD\u5FC5\u987B\u6302\u8F7D\u5728\u7EC4\u4EF6\u8282\u70B9\u4E4B\u4E0B\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"Stage",paraId:1},{value:" \u53EF\u4EE5\u652F\u6301\u591A\u4E2A\u5B50\u8282\u70B9\u3002",paraId:1},{value:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C",paraId:2},{value:"Stage",paraId:2},{value:" \u4E2D\uFF0C\u4E0D\u652F\u6301\u5176\u4ED6 React \u7EC4\u4EF6\u4F5C\u4E3A\u5B50\u8282\u70B9\u3002\u5982\u679C\u4F60\u5728 Stage \u7B49\u5BB9\u5668\u7EC4\u4EF6\u4E2D\u5199\u5165\u4E86\u5176\u4ED6 React \u8282\u70B9\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5728\u5185\u90E8\u5C06\u5176\u8FC7\u6EE4\u6389",paraId:2},{value:"Stage \u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B",paraId:3},{value:"name",paraId:4},{value:"description",paraId:4},{value:"type",paraId:4},{value:"default",paraId:4},{value:"width",paraId:4},{value:"\u5BBD",paraId:4},{value:"?: number",paraId:4},{value:"600",paraId:4},{value:"height",paraId:4},{value:"\u9AD8",paraId:4},{value:"?: number",paraId:4},{value:"400",paraId:4},{value:"background",paraId:4},{value:"\u80CC\u666F",paraId:4},{value:"?: string",paraId:4},{value:"#FFF",paraId:4},{value:"\u5176\u4ED6",paraId:4},{value:"\u5176\u4ED6 css \u5C5E\u6027",paraId:4}]},12042:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(85678);const t=[{value:"advanced-charts",paraId:0,tocIndex:0},{value:" \u8282\u70B9\u4E4B\u95F4\uFF0C\u6211\u4EEC\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"zIndex",paraId:0,tocIndex:0},{value:" \u6765\u7BA1\u7406\u5C42\u53E0\u987A\u5E8F\u3002\u6BCF\u4E2A\u5143\u7D20\u7EC4\u4EF6\u90FD\u652F\u6301\u57FA\u7840\u5C5E\u6027 ",paraId:0,tocIndex:0},{value:"zIndex",paraId:0,tocIndex:0},{value:`<Rect zIndex={9} />
`,paraId:1,tocIndex:0},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 ",paraId:2,tocIndex:0},{value:"zIndex",paraId:2,tocIndex:0},{value:" \u7684\u503C\u6765\u52A8\u6001\u8C03\u6574\u5143\u7D20\u4E4B\u95F4\u7684\u5C42\u53E0\u987A\u5E8F\u3002\u70B9\u51FB\u4E0B\u9762\u6848\u4F8B\u4E2D\uFF0C\u4E2D\u95F4\u7C89\u7EA2\u8272\u7684\u77E9\u5F62\u53EF\u4EE5\u67E5\u770B\u5C42\u53E0\u53D8\u5316\u7684\u6F14\u793A\u6548\u679C\u3002",paraId:2,tocIndex:0},{value:"\u4EE3\u7801\u4E3A",paraId:3},{value:`import { useState } from 'openinula'
import { Rect, Stage } from 'advanced-charts'
const ZIndexDemo = () => {
  const [zIndex, setZIndex] = useState(2)

  return (
    <Stage height={200} border="1px solid orange" margin="20px auto">
      <Rect x={130} y={10} fillStyle="red" zIndex={1} />
      <Rect x={170} y={50} fillStyle="pink" zIndex={zIndex} onclick={() => { setZIndex(zIndex === 2 ? 4 : 2) }} />
      <Rect x={210} y={90} fillStyle="purple" zIndex={3} />
    </Stage>
  )
}

export default ZIndexDemo
`,paraId:4}]},9494:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(76557);const t=[{value:"\u901A\u8FC7\u70B9\u51FB\u6267\u884C\u6309\u94AE\u540E, \u518D\u4E0D\u65AD\u5730\u70B9\u51FB\u63D2\u961F\u6309\u94AE, \u4EFB\u52A1\u5C06\u4F18\u5148\u6267\u884C",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u5728\u5185\u90E8\u7EF4\u62A4\u4E86\u4E00\u4E2A\u4F18\u5148\u7EA7\u961F\u5217, \u5F53\u6709\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u8FDB\u5165\u540E, \u5C06\u4F1A\u4F18\u5148\u6267\u884C\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1",paraId:1,tocIndex:0}]},61443:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(92421);const t=[{value:"\u548C DOM \u7ED3\u6784\u4E0D\u540C\uFF0C",paraId:0,tocIndex:0},{value:"advanced-charts",paraId:0,tocIndex:0},{value:" \u91C7\u7528\u4E86\u6241\u5E73\u7684\u65B9\u5F0F\u7BA1\u7406\u8282\u70B9\u3002\u56E0\u6B64\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u7684\u8282\u70B9\u90FD\u662F\u5144\u5F1F\u8282\u70B9\u7684\u5173\u7CFB\u3002\u5728\u6027\u80FD\u8868\u73B0\u4E0A\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F18\u52BF\u975E\u5E38\u5927\u3002\u9664\u4E86\u4E2A\u522B\u8282\u70B9\u4E4B\u5916\uFF0C\u4F8B\u5982 ",paraId:0,tocIndex:0},{value:"Stage",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Group",paraId:0,tocIndex:0},{value:"\uFF0C \u5176\u4ED6\u6BCF\u4E00\u4E2A\u56FE\u5F62\u90FD\u662F\u5143\u7D20\u8282\u70B9\uFF0C\u4E0D\u652F\u6301\u63A5\u6536\u5B50\u5143\u7D20\u3002",paraId:0,tocIndex:0},{value:"\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\u662F\u4E0D\u652F\u6301\u7684\u3002",paraId:1,tocIndex:0},{value:`function App() {
  return (
    <Stage>
      <Rect>
        <Rect />
      </Rect>
    </Stage>
  )
}
`,paraId:2,tocIndex:0},{value:"\u56E0\u6B64\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u65F6\uFF0C\u4E5F\u4E0D\u9700\u8981\u8003\u8651\u90A3\u4E48\u590D\u6742\u7684\u5E03\u5C40\u89C4\u5219\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6309\u7167\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u601D\u8DEF\u6765\u5E03\u5C40\u3002",paraId:3,tocIndex:0},{value:"\u5F53\u7136\uFF0C\u5176\u4ED6\u5F00\u53D1\u8005\u53EF\u4EE5\u57FA\u4E8E\u81EA\u5DF1\u7684\u57FA\u7840\u7EC4\u4EF6\u6269\u5C55\u5E03\u5C40\u65B9\u5F0F\u3002",paraId:4,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u5728\u67D0\u4E9B\u90E8\u5206\u590D\u6742\u7684\u573A\u666F\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86 ",paraId:5,tocIndex:0},{value:"Group",paraId:5,tocIndex:0},{value:" \u7684\u6982\u5FF5\u6765\u7BA1\u7406\u7EC4\u4EF6\u3002\u4F46\u662F\u4E00\u5B9A\u8981\u6CE8\u610F\u7684\u662F\uFF0C",paraId:5,tocIndex:0},{value:"Group",paraId:5,tocIndex:0},{value:" \u672C\u8EAB\u4E0D\u662F\u4E00\u4E2A\u5143\u7D20\u8282\u70B9\uFF0C\u4ED6\u53EA\u662F\u8D1F\u8D23\u7ED9\u5143\u7D20\u5206\u7EC4\u65B9\u4FBF\u7EDF\u4E00\u7BA1\u7406\u3002\u4F8B\u5982\u7EDF\u4E00\u62D6\u62FD\u3002",paraId:5,tocIndex:0},{value:"Group",paraId:6},{value:" \u7EC4\u4EF6\u4E0D\u5F71\u54CD\u7EC4\u4EF6\u7684\u5E03\u5C40\u3002\u4E0D\u53C2\u4E0E\u7EC4\u4EF6\u7684\u6E32\u67D3\u3002",paraId:6},{value:"\u8282\u70B9\u4E4B\u95F4\uFF0C\u6211\u4EEC\u8BBE\u8BA1\u4E86 ",paraId:7},{value:"zIndex",paraId:7},{value:" \u5C5E\u6027\u6765\u7BA1\u7406\u5C42\u7EA7\u5173\u7CFB\u3002\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u7B80\u5355\u7684\u901A\u8FC7\u4FEE\u6539 ",paraId:7},{value:"zIndex",paraId:7},{value:" \u7684\u503C\uFF0C\u6765\u4FEE\u6539\u5143\u7D20\u4E4B\u95F4\u7684\u906E\u6321\u5173\u7CFB\u3002\u7531\u4E8E\u6240\u6709\u7684\u53EF\u89C6\u8282\u70B9\u90FD\u662F\u6241\u5E73\u7684\uFF0C\u56E0\u6B64\u8282\u70B9\u7684\u5173\u7CFB\u5C31\u662F\u76F4\u63A5\u6BD4\u8F83\u5927\u5C0F\u5373\u53EF\u3002",paraId:7}]},99707:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(26314);const t=[{value:"\u56FE\u8868\u662F\u6211\u4EEC\u63D0\u4F9B\u7684\u5355\u72EC\u7684\u5E94\u7528\u7EC4\u4EF6\u3002\u4ED6\u4E0D\u80FD\u4E0E\u57FA\u7840\u56FE\u5F62\u6DF7\u7528\u3002\u6211\u4EEC\u53EA\u9700\u8981\u4F20\u5165\u53C2\u6570\u76F4\u63A5\u6E32\u67D3\u5373\u53EF\u3002",paraId:0,tocIndex:0}]},3088:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(18040);const t=[{value:"advanced-charts",paraId:0,tocIndex:0},{value:" \u4E2D\uFF0C\u6240\u6709\u7684\u56FE\u8868\u7ED3\u6784\uFF0C\u90FD\u662F\u901A\u8FC7\u7EC4\u5408\u4E0D\u540C\u7684\u56FE\u5F62\u8BED\u6CD5\u5143\u7D20\u5F97\u5230\u7684\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5BF9\u57FA\u7840\u56FE\u5F62\u6709\u4E00\u4E2A\u57FA\u672C\u4E86\u89E3\uFF0C\u4EE5\u4FBF\u4E8E\u4F7F\u7528\u8005\u57FA\u4E8E\u57FA\u7840\u56FE\u5F62\u53D1\u89C9\u66F4\u591A\u7684\u4F7F\u7528\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u8FD9\u91CC\u5C31\u4EE5 ",paraId:1,tocIndex:0},{value:"Circle",paraId:1,tocIndex:0},{value:" \u5706\u5F62\u4E3A\u4F8B\uFF0C\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u57FA\u7840\u56FE\u5F62\u7684\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u8BED\u6CD5\u521B\u5EFA\u4E00\u4E2A\u5706\u5F62",paraId:2,tocIndex:1},{value:"\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4EE3\u7801\u4E2D\u7B80\u5355\u770B\u51FA\uFF0CCircle \u7EC4\u4EF6\u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:2},{value:"x\u3001y",paraId:3,tocIndex:2},{value:" \u5C5E\u6027\uFF0C\u4ED6\u4EEC\u5171\u540C\u8868\u793A\u4E00\u4E2A\u5750\u6807\u70B9\u3002\u8BE5\u5750\u6807\u70B9\u662F\u4EE5 canvas \u5143\u7D20\u5DE6\u4E0A\u89D2\u4F5C\u4E3A\u5750\u6807\u539F\u70B9\u63CF\u8FF0\u51FA\u6765\u7684\u4F4D\u7F6E\u3002",paraId:3,tocIndex:2},{value:"\u5728\u56FE\u8868\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u8FD8\u4F1A\u6D89\u53CA\u5230\u5176\u4ED6\u7684\u5750\u6807\u70B9\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5728\u5B9E\u9645\u7684\u8FD0\u7528\u4E2D\uFF0C\u8FD8\u4F1A\u81EA\u5B9A\u4E49\u5750\u6807\u7CFB\uFF0C\u4F8B\u5982\u7B1B\u5361\u5C14\u5750\u6807\u7CFB\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u81EA\u5B9A\u4E49\u7684\u5750\u6807\u7CFB\u4E0E canvas \u9ED8\u8BA4\u652F\u6301\u7684\u5750\u6807\u7CFB\u4E0D\u4E00\u6837\u3002\u4F7F\u7528\u65F6\u4E00\u5B9A\u8981\u6CE8\u610F\u8FD9\u4E2A\u7EC6\u8282",paraId:4,tocIndex:2},{value:"\u6211\u4EEC\u4F7F\u7528 ",paraId:5,tocIndex:3},{value:"fillStyle",paraId:5,tocIndex:3},{value:" \u8868\u793A\u5185\u5BB9\u586B\u5145\uFF0C\u4F7F\u7528 ",paraId:5,tocIndex:3},{value:"strokeStyle",paraId:5,tocIndex:3},{value:" \u8868\u793A\u8FB9\u6846\u586B\u5145\uFF0C",paraId:5,tocIndex:3},{value:"lineWidth",paraId:5,tocIndex:3},{value:" \u8868\u793A\u8FB9\u6846\u7EBF\u7C97\u7EC6",paraId:5,tocIndex:3},{value:"\u8FD9\u4E9B\u8BCD\u6C47\u90FD\u6E90\u81EA\u4E8E canvas \u8BED\u6CD5\uFF0C\u6211\u4EEC\u5C3D\u91CF\u4E0E\u5176\u4FDD\u6301\u4E00\u81F4",paraId:6,tocIndex:3},{value:"\u6BCF\u4E2A\u57FA\u7840\u5143\u7D20\u90FD\u6709\u5E38\u7528\u7684\u4E8B\u4EF6\u652F\u6301",paraId:7,tocIndex:4},{value:"\u6BCF\u4E2A\u5143\u7D20\u90FD\u652F\u6301\u52A8\u753B\uFF0C\u6211\u4EEC\u901A\u8FC7 ",paraId:8,tocIndex:5},{value:"animation",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\u914D\u7F6E\u52A8\u753B\u7684\u53C2\u6570\uFF0C\u5E76\u901A\u8FC7\u4FEE\u6539\u5176\u4ED6\u6837\u5F0F\u5C5E\u6027\u7684\u65B9\u5F0F\u6765\u89E6\u53D1\u52A8\u753B\u3002",paraId:8,tocIndex:5},{value:`import { useEffect, useState } from 'openinula'
import { Rect, Stage } from 'advanced-charts'

const s = { x: 0, height: 60, fillStyle: 'purple' }
const e = { x: 200, height: 200, fillStyle: 'red' }

const App = () => {
  const [state, setState] = useState(s)

  useEffect(() => {
    setTimeout(() => {
      state.x = 200
      setState({ ...state })
    }, 500)

    setTimeout(() => {
      state.height = 200
      state.fillStyle = 'red'
      setState({ ...state })
    }, 800)
  }, [])

  return (
    <Stage>
      <Rect
        x={state.x}
        y={50}
        width={100}
        height={state.height}
        fillStyle={state.fillStyle}
        shadowColor="red"
        cursor="pointer"
        animation={{ duration: 1000, easing: 'linear' }}
        onclick={() => {
          let _state
          if (state.x == 200) {
            _state = { x: 0, height: 60, fillStyle: 'purple' }
          } else {
            _state = { x: 200, height: 200, fillStyle: 'red' }
          }
          setState(_state)
        }}
      />
    </Stage>
  )
}

export default App
`,paraId:9,tocIndex:5},{value:"\u6F14\u793A\u6548\u679C\u5982\u4E0B\uFF0C\u5982\u679C\u52A8\u753B\u5DF2\u7ECF\u7ED3\u675F\uFF0C\u53EF\u518D\u6B21\u70B9\u51FB\u77E9\u5F62\u89E6\u53D1\u52A8\u753B",paraId:10,tocIndex:5}]},85564:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(17498);const t=[{value:"advanced-charts",paraId:0,tocIndex:0},{value:" \u662F\u4E13\u95E8\u4E3A\u524D\u7AEF\u6846\u67B6 ",paraId:0,tocIndex:0},{value:"react",paraId:0,tocIndex:0},{value:" \u9AD8\u6027\u80FD\u56FE\u8868\u7EC4\u4EF6\u5E93\u3002\u6211\u4EEC\u652F\u6301\u4EE5 JSX \u7684\u65B9\u5F0F\u7B80\u5355\u521B\u5EFA\u56FE\u5F62\u5143\u7D20\u4E0E\u56FE\u8868\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:`<Stage border="1px solid orange">
  <Rect />
  <Rect x={100} fillStyle="red" />
  <Group draggable>
    <Rect x={200} fillStyle="red" />
    <Rect x={200} y={120} fillStyle="orange" />
  </Group>
</Stage>
`,paraId:1,tocIndex:0},{value:"  ",paraId:2,tocIndex:1},{value:"\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u6DFB\u52A0 ",paraId:3,tocIndex:1},{value:"advanced-charts",paraId:3,tocIndex:1},{value:" \u5230\u4F60\u7684\u9879\u76EE",paraId:3,tocIndex:1},{value:`yarn add advanced-charts

# or
npm i advanced-charts
`,paraId:4,tocIndex:1},{value:"\u5F15\u5165\u9879\u76EE\u4E4B\u540E\uFF0C\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u5728\u4EE3\u7801\u4E2D\u5F15\u5165",paraId:5,tocIndex:1},{value:`import { Stage, Group, Rect, Circle } from 'advanced-charts'
`,paraId:6,tocIndex:1},{value:"advanced-charts",paraId:7,tocIndex:2},{value:" \u7684\u4F7F\u7528\u4E0E\u5E38\u89C4\u7684\u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u521B\u5EFA\u4E00\u4E2A\u56FE\u5F62\u5143\u7D20\u3002\u5982\u4E0B\u6848\u4F8B\u6240\u793A",paraId:7,tocIndex:2},{value:"\u6211\u4EEC\u4E5F\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u56FE\u8868\u7EC4\u4EF6",paraId:8}]},17810:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(54576);const t=[]},26988:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(20711);const t=[{value:"\u6211\u4EEC\u5199\u4E86\u4E00\u4E2A demo \u6765\u6F14\u793A ",paraId:0,tocIndex:0},{value:"advanced-charts",paraId:0,tocIndex:0},{value:" \u5728\u6027\u80FD\u4E0A\u7684\u4F18\u79C0\u8868\u73B0\u3002",paraId:0,tocIndex:0},{value:"\u4EE3\u7801\u5982\u4E0B\u6240\u793A",paraId:1},{value:`import { useEffect, useState } from 'openinula'
import { Circle, Rect, Stage } from 'advanced-charts'
import colorAlpha from 'color-alpha'

const radius = 25
const maxRadius = 50

function randomX() {
  return maxRadius + Math.random() * (750 - maxRadius * 2)
}

function randomY() {
  return maxRadius + Math.random() * (500 - maxRadius * 2)
}

function randomColor() {
  const r = Math.round(255 * Math.random())
  const g = Math.round(255 * Math.random())
  const b = Math.round(255 * Math.random())

  return \`rgb(\${r}, \${g}, \${b})\`
}

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const timer = setInterval(() => {
      createBubble()
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function createBubble() {
    const radius = 25
    const maxRadius = 50

    const fillStyle = randomColor()
    const targetColor = colorAlpha(fillStyle, 0)

    const bubble = {
      key: Math.random().toString(),
      x: randomX(),
      y: randomY(),
      fillStyle: randomColor(),
      radius: radius,
      animationEnd: () => {
        setList(value => value.filter(item => item.key !== bubble.key))
      }
    }

    setList(value => value.concat(bubble))

    setTimeout(() => {
      bubble.x = randomX()
      bubble.y = randomY()
      bubble.radius = maxRadius
      bubble.fillStyle = targetColor

      setList(value => [...value])
    }, 10)
  }

  return (
    <>
      <Stage>
        {list.map(item => (
          <Circle
            key={item.key}
            x={item.x}
            y={item.y}
            radius={item.radius}
            fillStyle={item.fillStyle}
            animation={{ duration: 1000, easing: 'linear', animationEnd: item.animationEnd }}
          />
        ))}
      </Stage>
    </>
  )
}

export default App
`,paraId:2}]},53166:function(f,a,e){e.r(a),e.d(a,{texts:function(){return t}});var p=e(45938);const t=[{value:"advanced-charts",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u8F7B\u677E\u652F\u6301 10000+ \u5143\u7D20\u540C\u65F6\u52A8\u753B\u7684\u6D41\u7545\u6267\u884C\u3002\u6027\u80FD\u8868\u73B0\u4F18\u5F02\u3002",paraId:0,tocIndex:0}]}}]);
