//用于存储全局通用配置例如{gird:{}//这是边距}
export interface BaseGrid{
    left:number,
    top: number,
    right:number,
    bottom:number
}

export interface BaseConfig{
    gird:BaseGrid
}