let retry = async function (callback, attempts) {
    let lasterror
    for(let i = 0; i < attempts; i++){
        try{
            let result = await callback()
            return result
        }
        catch(error){
            lasterror = error
        }
    }
    throw lasterror
}