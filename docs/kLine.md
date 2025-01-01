# k 线图

是一种以蜡烛状图形展示数据的图表类型。用于显示金融市场中股票、外汇、加密货币等资产的价格变动

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import GCharts from "../src/index.ts";
import {getRandomHexColor} from "../src/utils/color.ts"
import {getRandomInt} from "../src/utils/number.ts"
const data =[
    {
        "timestamp": "1483419600",
        "time": "2017-01-03",
        "open": "166.300",
        "close": "179.300",
        "volume": "2315363",
        "high": "180.660",
        "low": "160.820",
        "amount": "--",
        "range": "+3.89",
        "ratio": "+2.37",
        "turnoverratio": "0.67",
        "preClose": "164.410",
        "ma5avgprice": "--",
        "ma5volume": "--",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1483506000",
        "time": "2017-01-04",
        "open": "169.740",
        "close": "171.960",
        "volume": "2033163",
        "high": "173.260",
        "low": "168.300",
        "amount": "--",
        "range": "+3.66",
        "ratio": "+2.17",
        "turnoverratio": "0.59",
        "preClose": "168.300",
        "ma5avgprice": "--",
        "ma5volume": "--",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1483592400",
        "time": "2017-01-05",
        "open": "172.650",
        "close": "177.470",
        "volume": "2733032",
        "high": "177.840",
        "low": "172.500",
        "amount": "--",
        "range": "+5.51",
        "ratio": "+3.20",
        "turnoverratio": "0.79",
        "preClose": "171.960",
        "ma5avgprice": "--",
        "ma5volume": "--",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1483678800",
        "time": "2017-01-06",
        "open": "176.280",
        "close": "176.380",
        "volume": "2254733",
        "high": "177.280",
        "low": "173.250",
        "amount": "--",
        "range": "-1.09",
        "ratio": "-0.61",
        "turnoverratio": "0.65",
        "preClose": "177.470",
        "ma5avgprice": "--",
        "ma5volume": "--",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1483938000",
        "time": "2017-01-09",
        "open": "178.000",
        "close": "177.160",
        "volume": "1760353",
        "high": "179.720",
        "low": "176.820",
        "amount": "--",
        "range": "+0.78",
        "ratio": "+0.44",
        "turnoverratio": "0.51",
        "preClose": "176.380",
        "ma5avgprice": "174.254",
        "ma5volume": "2219329",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484024400",
        "time": "2017-01-10",
        "open": "179.830",
        "close": "180.310",
        "volume": "2922259",
        "high": "183.000",
        "low": "178.300",
        "amount": "--",
        "range": "+3.15",
        "ratio": "+1.78",
        "turnoverratio": "0.84",
        "preClose": "177.160",
        "ma5avgprice": "176.656",
        "ma5volume": "2340708",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484110800",
        "time": "2017-01-11",
        "open": "179.570",
        "close": "179.320",
        "volume": "1929935",
        "high": "180.180",
        "low": "176.800",
        "amount": "--",
        "range": "-0.99",
        "ratio": "-0.55",
        "turnoverratio": "0.56",
        "preClose": "180.310",
        "ma5avgprice": "178.128",
        "ma5volume": "2320062",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484197200",
        "time": "2017-01-12",
        "open": "178.800",
        "close": "177.570",
        "volume": "2680211",
        "high": "179.470",
        "low": "175.660",
        "amount": "--",
        "range": "-1.75",
        "ratio": "-0.98",
        "turnoverratio": "0.77",
        "preClose": "179.320",
        "ma5avgprice": "178.148",
        "ma5volume": "2309498",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484283600",
        "time": "2017-01-13",
        "open": "178.000",
        "close": "176.480",
        "volume": "1412152",
        "high": "178.710",
        "low": "176.360",
        "amount": "--",
        "range": "-1.09",
        "ratio": "-0.61",
        "turnoverratio": "0.41",
        "preClose": "177.570",
        "ma5avgprice": "178.168",
        "ma5volume": "2140982",
        "ma10avgprice": "--",
        "ma10volume": "--",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484629200",
        "time": "2017-01-17",
        "open": "175.580",
        "close": "176.960",
        "volume": "2073222",
        "high": "178.280",
        "low": "174.490",
        "amount": "--",
        "range": "+0.48",
        "ratio": "+0.27",
        "turnoverratio": "0.60",
        "preClose": "176.480",
        "ma5avgprice": "178.128",
        "ma5volume": "2203556",
        "ma10avgprice": "176.191",
        "ma10volume": "2211442",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484715600",
        "time": "2017-01-18",
        "open": "178.590",
        "close": "176.540",
        "volume": "2004995",
        "high": "180.780",
        "low": "174.730",
        "amount": "--",
        "range": "-0.42",
        "ratio": "-0.24",
        "turnoverratio": "0.58",
        "preClose": "176.960",
        "ma5avgprice": "177.374",
        "ma5volume": "2020103",
        "ma10avgprice": "177.015",
        "ma10volume": "2180406",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484802000",
        "time": "2017-01-19",
        "open": "176.840",
        "close": "176.090",
        "volume": "1430469",
        "high": "176.840",
        "low": "174.430",
        "amount": "--",
        "range": "-0.45",
        "ratio": "-0.25",
        "turnoverratio": "0.41",
        "preClose": "176.540",
        "ma5avgprice": "176.728",
        "ma5volume": "1920210",
        "ma10avgprice": "177.428",
        "ma10volume": "2120136",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1484888400",
        "time": "2017-01-20",
        "open": "175.300",
        "close": "173.440",
        "volume": "2049233",
        "high": "176.455",
        "low": "173.130",
        "amount": "--",
        "range": "-2.65",
        "ratio": "-1.50",
        "turnoverratio": "0.59",
        "preClose": "176.090",
        "ma5avgprice": "175.902",
        "ma5volume": "1794014",
        "ma10avgprice": "177.025",
        "ma10volume": "2051756",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1485147600",
        "time": "2017-01-23",
        "open": "173.940",
        "close": "175.970",
        "volume": "2100583",
        "high": "176.180",
        "low": "173.280",
        "amount": "--",
        "range": "+2.53",
        "ratio": "+1.46",
        "turnoverratio": "0.61",
        "preClose": "173.440",
        "ma5avgprice": "175.800",
        "ma5volume": "1931700",
        "ma10avgprice": "176.984",
        "ma10volume": "2036341",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1485234000",
        "time": "2017-01-24",
        "open": "177.700",
        "close": "176.050",
        "volume": "1600396",
        "high": "179.000",
        "low": "175.500",
        "amount": "--",
        "range": "+0.08",
        "ratio": "+0.05",
        "turnoverratio": "0.46",
        "preClose": "175.970",
        "ma5avgprice": "175.618",
        "ma5volume": "1837135",
        "ma10avgprice": "176.873",
        "ma10volume": "2020346",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1485320400",
        "time": "2017-01-25",
        "open": "177.400",
        "close": "176.610",
        "volume": "2123523",
        "high": "179.000",
        "low": "176.250",
        "amount": "--",
        "range": "+0.56",
        "ratio": "+0.32",
        "turnoverratio": "0.61",
        "preClose": "176.050",
        "ma5avgprice": "175.632",
        "ma5volume": "1860841",
        "ma10avgprice": "176.503",
        "ma10volume": "1940472",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1485406800",
        "time": "2017-01-26",
        "open": "177.650",
        "close": "174.950",
        "volume": "2194244",
        "high": "177.670",
        "low": "174.650",
        "amount": "--",
        "range": "-1.66",
        "ratio": "-0.94",
        "turnoverratio": "0.63",
        "preClose": "176.610",
        "ma5avgprice": "175.404",
        "ma5volume": "2013596",
        "ma10avgprice": "176.066",
        "ma10volume": "1966903",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1485493200",
        "time": "2017-01-27",
        "open": "175.000",
        "close": "174.100",
        "volume": "1575709",
        "high": "175.000",
        "low": "173.220",
        "amount": "--",
        "range": "-0.85",
        "ratio": "-0.49",
        "turnoverratio": "0.45",
        "preClose": "174.950",
        "ma5avgprice": "175.536",
        "ma5volume": "1918891",
        "ma10avgprice": "175.719",
        "ma10volume": "1856453",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1485752400",
        "time": "2017-01-30",
        "open": "173.160",
        "close": "174.720",
        "volume": "1358907",
        "high": "174.970",
        "low": "171.720",
        "amount": "--",
        "range": "+0.62",
        "ratio": "+0.36",
        "turnoverratio": "0.39",
        "preClose": "174.100",
        "ma5avgprice": "175.286",
        "ma5volume": "1770556",
        "ma10avgprice": "175.543",
        "ma10volume": "1851128",
        "ma20avgprice": "--",
        "ma20volume": "--"
    },
    {
        "timestamp": "1485838800",
        "time": "2017-01-31",
        "open": "173.680",
        "close": "175.070",
        "volume": "1325773",
        "high": "176.180",
        "low": "173.010",
        "amount": "--",
        "range": "+0.35",
        "ratio": "+0.20",
        "turnoverratio": "0.38",
        "preClose": "174.720",
        "ma5avgprice": "175.090",
        "ma5volume": "1715631",
        "ma10avgprice": "175.354",
        "ma10volume": "1776383",
        "ma20avgprice": "175.772",
        "ma20volume": "1993913"
    },
    {
        "timestamp": "1485925200",
        "time": "2017-02-01",
        "open": "176.730",
        "close": "173.820",
        "volume": "1216389",
        "high": "176.730",
        "low": "172.550",
        "amount": "--",
        "range": "-1.25",
        "ratio": "-0.71",
        "turnoverratio": "0.35",
        "preClose": "175.070",
        "ma5avgprice": "174.532",
        "ma5volume": "1534204",
        "ma10avgprice": "175.082",
        "ma10volume": "1697523",
        "ma20avgprice": "176.048",
        "ma20volume": "1938964"
    },
    {
        "timestamp": "1486011600",
        "time": "2017-02-02",
        "open": "173.510",
        "close": "173.400",
        "volume": "962577",
        "high": "175.180",
        "low": "172.460",
        "amount": "--",
        "range": "-0.42",
        "ratio": "-0.24",
        "turnoverratio": "0.28",
        "preClose": "173.820",
        "ma5avgprice": "174.222",
        "ma5volume": "1287871",
        "ma10avgprice": "174.813",
        "ma10volume": "1650733",
        "ma20avgprice": "176.120",
        "ma20volume": "1885435"
    },
    {
        "timestamp": "1486098000",
        "time": "2017-02-03",
        "open": "174.960",
        "close": "175.170",
        "volume": "1575247",
        "high": "176.590",
        "low": "173.560",
        "amount": "--",
        "range": "+1.77",
        "ratio": "+1.02",
        "turnoverratio": "--",
        "preClose": "173.400",
        "ma5avgprice": "174.436",
        "ma5volume": "1287779",
        "ma10avgprice": "174.986",
        "ma10volume": "1603335",
        "ma20avgprice": "176.006",
        "ma20volume": "1827546"
    },
    {
        "timestamp": "1486357200",
        "time": "2017-02-06",
        "open": "175.790",
        "close": "177.810",
        "volume": "2303594",
        "high": "179.080",
        "low": "175.150",
        "amount": "--",
        "range": "+2.64",
        "ratio": "+1.51",
        "turnoverratio": "--",
        "preClose": "175.170",
        "ma5avgprice": "175.054",
        "ma5volume": "1476716",
        "ma10avgprice": "175.170",
        "ma10volume": "1623636",
        "ma20avgprice": "176.077",
        "ma20volume": "1829989"
    },
    {
        "timestamp": "1486443600",
        "time": "2017-02-07",
        "open": "179.580",
        "close": "178.170",
        "volume": "1535153",
        "high": "179.600",
        "low": "176.750",
        "amount": "--",
        "range": "+4.77",
        "ratio": "+2.75",
        "turnoverratio": "0.44",
        "preClose": "173.400",
        "ma5avgprice": "175.674",
        "ma5volume": "1518592",
        "ma10avgprice": "175.382",
        "ma10volume": "1617112",
        "ma20avgprice": "176.127",
        "ma20volume": "1818729"
    },
    {
        "timestamp": "1486530000",
        "time": "2017-02-08",
        "open": "179.160",
        "close": "181.500",
        "volume": "2114234",
        "high": "182.410",
        "low": "177.530",
        "amount": "--",
        "range": "+3.33",
        "ratio": "+1.87",
        "turnoverratio": "0.61",
        "preClose": "178.170",
        "ma5avgprice": "177.210",
        "ma5volume": "1698161",
        "ma10avgprice": "175.871",
        "ma10volume": "1616183",
        "ma20avgprice": "176.187",
        "ma20volume": "1778327"
    },
    {
        "timestamp": "1486616400",
        "time": "2017-02-09",
        "open": "181.230",
        "close": "181.500",
        "volume": "1743656",
        "high": "183.460",
        "low": "181.060",
        "amount": "--",
        "range": "0.00",
        "ratio": "0.00",
        "turnoverratio": "0.50",
        "preClose": "181.500",
        "ma5avgprice": "178.830",
        "ma5volume": "1854377",
        "ma10avgprice": "176.526",
        "ma10volume": "1571124",
        "ma20avgprice": "176.296",
        "ma20volume": "1769013"
    },
    {
        "timestamp": "1486702800",
        "time": "2017-02-10",
        "open": "182.580",
        "close": "183.990",
        "volume": "2149763",
        "high": "184.160",
        "low": "181.210",
        "amount": "--",
        "range": "+2.49",
        "ratio": "+1.37",
        "turnoverratio": "0.62",
        "preClose": "181.500",
        "ma5avgprice": "180.594",
        "ma5volume": "1969280",
        "ma10avgprice": "177.515",
        "ma10volume": "1628529",
        "ma20avgprice": "176.617",
        "ma20volume": "1742491"
    },
    {
        "timestamp": "1486962000",
        "time": "2017-02-13",
        "open": "184.500",
        "close": "184.310",
        "volume": "2428530",
        "high": "185.440",
        "low": "183.330",
        "amount": "--",
        "range": "+0.32",
        "ratio": "+0.17",
        "turnoverratio": "0.70",
        "preClose": "183.990",
        "ma5avgprice": "181.894",
        "ma5volume": "1994267",
        "ma10avgprice": "178.474",
        "ma10volume": "1735492",
        "ma20avgprice": "177.008",
        "ma20volume": "1793310"
    },
    {
        "timestamp": "1487048400",
        "time": "2017-02-14",
        "open": "184.010",
        "close": "182.770",
        "volume": "1932010",
        "high": "185.660",
        "low": "182.280",
        "amount": "--",
        "range": "-1.54",
        "ratio": "-0.84",
        "turnoverratio": "0.56",
        "preClose": "184.310",
        "ma5avgprice": "182.814",
        "ma5volume": "2073639",
        "ma10avgprice": "179.244",
        "ma10volume": "1796115",
        "ma20avgprice": "177.299",
        "ma20volume": "1786249"
    }
]
const domRef = ref();
let kLine;
let dataRangeFlag=true;
onMounted(() => {
  const gcharts = new GCharts(domRef.value?.getContext("2d") as CanvasRenderingContext2D);
 
        dataRangeFlag=!dataRangeFlag;
      kLine = gcharts.kLine({
        labels:data.slice(0,10).map(item=>item.time),
        data: data.slice(0,10).map(item=>[item.open,item.close,item.high,item.low]),
      });
  
});

const changeData = ()=>{
    
      kLine.setOption({
        labels:data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>item.time),
        data: data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>[item.open,item.close,item.high,item.low]),
      })
      dataRangeFlag=!dataRangeFlag
  }
  const changeStyle = ()=>{
    kLine.setOption({
         labels:data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>item.time),
        data: data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>[item.open,item.close,item.high,item.low]),
        riseColor:getRandomHexColor(),
        depreciateColor:getRandomHexColor()
    })
  }
</script>

<canvas class="container" ref="domRef" width="800" height="500"></canvas>

<div>
  <div @click="changeData" style="display:inline-block;margin: 10px 0px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;">更改数据</div>
  <div style="display:inline-block;margin: 10px 0px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;margin-left:10px" @click="changeStyle">更改样式</div>
</div>

示例用法

```typescript
const gcharts = new GCharts(
  domRef.value?.getContext("2d") as CanvasRenderingContext2D
);
gcharts.kLine(barChartData, options);
```

数据结构

```typescript
{
    "labels": [
        "2017-01-03",
    ],
    [最大值,最小值,最高值,最低值]
    "data": [
        [
            "166.300",
            "179.300",
            "180.660",
            "160.820"
        ],
    ]
}
```

配置项

```typescript
{
    //x轴数据
    labels:string[]
    //条形之间的间距
    barValueSpacing?: number;
    //涨价颜色
    riseColor?: string;
    //跌价颜色
    depreciateColor?: string;
    //坐标轴指示器
    axisPointer: AxisPointer
  }
  {
    show:boolean;
    color:string;
    fontSize:number;
    background:string;
    lineStyle:string
  }
```
