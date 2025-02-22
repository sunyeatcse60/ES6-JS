const myLoder = () => {
    return new promise ((resolve, reject) => {
        const success = true;
        if(success <= 0.5){ 
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}