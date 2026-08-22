let deepClone = function(obj){
    if(typeof obj !== "object" || obj === null) return obj
    let store = Array.isArray(obj)? [] : {}
    for(let key in obj){
        store[key] = deepClone(obj[key])
    }
    return store
}

let obj = {
    name: 'Kiro',
    grade: 'S-Rank',
    class: {
        first: 'undetected class',
        second: 'undetected class'
    },
    skills: ['crtical hits', 'life steal', 'super-dash']
}

let a = deepClone(obj)
console.log(a)