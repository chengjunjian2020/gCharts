export const isNumber = function(n:any){
    return !isNaN(parseFloat(n)) && isFinite(n);
}