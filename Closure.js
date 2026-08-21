let a = () => { 
    let count = 0

    return inner = function () {
        count++
        console.log(count)
    }
}

let b = a()
b()
b()