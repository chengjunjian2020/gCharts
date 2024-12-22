let id=0;
export const uuid = ()=>{
    return "g-charts"+id++
}

// 设置比例
export const retinaScale = (ctx:CanvasRenderingContext2D)=>{
        const width = ctx.canvas.width
        const height = ctx.canvas.height;

    if (window.devicePixelRatio) {
        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.height = height * window.devicePixelRatio;
        ctx.canvas.width = width * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
}

//获取容器宽度
export const getMaximumWidth = (domNode:HTMLCanvasElement)=>{
    let container = domNode.parentNode as HTMLDivElement;
    return container?.clientWidth;
}
//获取容器高度
export const getMaximumHeight = function(domNode:HTMLCanvasElement){
    let container = domNode.parentNode as HTMLDivElement;
    return container.clientHeight;
}
//循环
export const each = function<T=any>(loopable:Array<T>|{[key in string]:T}, callback:(...args:any[])=>void, self?:any){
    let additionalArgs = Array.prototype.slice.call(arguments, 3);
    if (loopable){
        if (Array.isArray(loopable)){
            let i;
            for (i=0; i<loopable.length; i++){
                callback.apply(self, [loopable[i], i].concat(additionalArgs));
            }
        }
        else{
            for (let item in loopable){
                callback.apply(self, [loopable[item], item].concat(additionalArgs));
            }
        }
    }
}
//浅拷贝
export function clone<T>(obj:Array<T>|{[key in string]:T}){
    var objClone:{[key in string]:any} = {};
    each(obj,function(value,key){
        if (obj.hasOwnProperty(key)) objClone[key] = value;
    });
    return objClone;
}

export const extend = function(base:any){
    each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
        each(extensionObject,function(value,key){
            if (extensionObject.hasOwnProperty(key)) base[key] = value;
        });
    });
    return base;
}

