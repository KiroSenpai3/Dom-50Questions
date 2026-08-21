function step1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step 1 completed")
            resolve()
        },1000)
    })
}

function step2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step 2 completed")
            resolve()
        },1000)
    })
}

function step3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step 3 completed")
            resolve()
        },1000)
    })
}

async function runSteps(){
    await step1()
    await step2()
    await step3()
}