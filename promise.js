let myPromise = new Promise(function(resolve, reject) {
    let success = true; // Simulating success or failure
    if (success) {
        resolve("Successfully resolved!");
    } else {
        reject("failed to resolve.");
    }
})

    myPromise.then(res=> console.log(res))
    .catch(err => console.log(err))