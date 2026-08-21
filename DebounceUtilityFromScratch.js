let debounce = (fn, time) => {
    let timer = null

    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        },time)
    }
}