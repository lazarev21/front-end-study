
class Storage {

    constructor(names) {
        this.key = names
    }
    
    set(value) {
        localStorage.setItem(this.key, value)
    }
    
    get() {
        console.log(localStorage.getItem(this.key))
    }
    
    clear() {
        localStorage.removeItem(this.key)
    }
    
    isEmpty() {
        let result = localStorage.getItem(this.key) ?? false
        if(result) {
            console.log(true)
        }
        else {
          console.log(false)
        }
    }
    }
    
    
    const names = new Storage ('gevar')
    names.set('krasava')
    names.get()
    names.clear() 
    names.set('krasava2')
    names.isEmpty()