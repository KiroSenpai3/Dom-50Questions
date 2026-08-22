let sum = function(a,b){
    console.log('processing')
    return a+b
}

let memoization = function(callback){
    let cache = {}

    return function(...args){
        let key = [...args].join(",")
        if(key in cache){
            return cache[key]
        }
        let value = callback(...args)
        cache[key] = value
        return value
    }
}

let summ = memoization(sum)
console.log(summ(10,20))
console.log(summ(10,20))