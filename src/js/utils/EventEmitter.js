class EventEmitter {
    constructor() {
        this.events = {}
    }

    emit(eventName, data) {
        const events = this.events[eventName];
        if (events) {
            events.forEach(fn => {
                fn.call(null, data)
            })
        }
    }

    subscribe(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(fn)

        return () => {
            this.events[eventName] = this.events[eventName].filter(eventFn => {
                return fn !== eventFn
            })
        }
    }
}

export default EventEmitter; 