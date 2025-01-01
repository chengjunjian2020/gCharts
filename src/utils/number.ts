export const isNumber = function(n:any){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export function getRandomInt(min:number, max:number) {
    // 确保 min 和 max 为整数
    min = Math.ceil(min);
    max = Math.floor(max);
    // 生成随机整数
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }