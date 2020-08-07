// resolve and reject are parameters, parameters are: (look this up)
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('You got it dude')
    } else {
        reject('Failed')
    }
})


p .then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) =>{
    console.log('This is in the catch ' + message)
})


/////////////

const userLeft = false
const userWatch = false

    function watchTutorialCallback(callback, errorCallback){
        if (userLeft){
            errorCallback({
                name: 'User Left',
                message: '>:('
            })
        } else if (userWatch){
                errorCallback({
                    name:'User watching',
                    message: 'WebDevSimplified'
                })
            } else {
                callback('Thumbs UP NOW')
            }
        }
    
        watchTutorialCallback((message) => {
            console.log('Success: ' + message)
        }, (error) => {
            console.log(error.name + ' ' + error.message)
        })
