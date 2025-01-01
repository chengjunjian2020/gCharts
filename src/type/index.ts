export type Callback<T=any>=(args?:T)=>void
export type PointerType=[[number,number],[number,number]]
export interface BaseData {
  labels: string[];
  datasets: Array<any>;
}