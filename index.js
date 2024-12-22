import {strList} from "./list.js"
import { writeFileSync } from 'fs';

const headers = [
    "时间戳",
    "时间",
    "开盘",
    "收盘",
    "成交量",
    "最高",
    "最低",
    "成交额",
    "涨跌额",
    "涨跌幅",
    "换手率",
    "昨收",
    "ma5均价",
    "ma5成交量",
    "ma10均价",
    "ma10成交量",
    "ma20均价",
    "ma20成交量"
  ];
const keys = [
    "timestamp",
    "time",
    "open",
    "close",
    "volume",
    "high",
    "low",
    "amount",
    "range",
    "ratio",
    "turnoverratio",
    "preClose",
    "ma5avgprice",
    "ma5volume",
    "ma10avgprice",
    "ma10volume",
    "ma20avgprice",
    "ma20volume"
]
const list = [];
strList.forEach(item=>{
    console.log(item);
    const obj = {};
    item.split(",").forEach((item,i)=>{
        obj[keys[i]] = item;
    })
    list.push(obj)
    console.log(obj)
})
const jsonData = JSON.stringify(list, null, 4);
writeFileSync('data.json', jsonData, 'utf8',);
// console.log(list)