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
        let isEmpty = this.storage.getItem(this.key) ?? false
        if(isEmpty) {
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
    