let miniStateStore = function(data){
    let state = {...data}
    let listeners = []

    let getState = function(){
        return(state)
    }

    let setState = function(change){
        state = {...state, ...change}

        listeners.forEach((listener) => listener())
    }

    let subscribe = function(...args){
        args.forEach((arg) => listeners.push(arg))
    }

    return {getState,setState,subscribe}
}