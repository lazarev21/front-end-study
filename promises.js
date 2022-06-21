/* let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);
    
let commits = await response.json();

console.log(commits[0].author.login) */



console.log('request data')

/* setTimeout( () => {
    console.log('preparing data')

    const backendData = {
        server: 'aws',
        port: '2000',
        status: 'working',
    }

    setTimeout(() => {
        backendData.modified = true;
        console.log('Data resieved', backendData)
    }, 2000)
}, 2000)

 */

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('preparing data')

    const backendData = {
        server: 'aws',
        port: '2000',
        status: 'working',
    }
    resolve(backendData)
    }, 2000)
})

promise.then(data => {
    const promise2 = new Promise((resolve, reject) => {
        data.modified = true;
    })
    
})