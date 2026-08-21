class EventEmitter {
    constructor(){
        this.events = {}
    }

    on(event, callback){
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(callback)
    }

    emit(event, data){
        if(!this.events[event]) return
        this.events[event].forEach(element => {
            element(data)
        });
    }

    off(event, callback){
        if(!this.events[event]) return
        this.events[event] = this.events[event].filter((eventName) => eventName !== event)
    }

}