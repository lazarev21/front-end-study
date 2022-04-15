class Storage {

    constructor(names, storage) {
        this.DEFAULT_STORAGE = 'localStorage'
        this.key = names
        this.storage = storage ?? this.DEFAULT_STORAGE;
    }
    
    set(value) {
        this.storage.setItem(this.key, value)
    }
    
    get() {
        console.log(this.storage.getItem(this.key))
    }
    
    clear() {
        this.storage.removeItem(this.key)
    }
    
    isEmpty() {
        let isFilled = this.storage.getItem(this.key) ?? false
        if(isFilled) {
            console.log(false)
        }
        else {
          console.log(true)
        }
    }
    }
    
    
    const names = new Storage ('gevar', sessionStorage)
    names.set('krasava')
    names.get()
    names.clear() 
    names.set('krasava2')
    names.isEmpty()
    names.clear() 
    names.isEmpty()
    