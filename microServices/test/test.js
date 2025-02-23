const autocannon = require('autocannon');

const urls = ['http://localhost:8000'];
const duration = 30;
// const instance = autocannon({url, duration}
//     ,(err,result) => {
//         if (err) {
//             console.error(err);
//         }else{
//             // console.log(result)
//             console.log("number of requests", result.requests.total);
//             console.log("duration in seconds", result.duration);
//         }
//     }
// );   

// autocannon.track(instance,{renderProgressbar: false, renderStats: false});
urls.forEach(url => {
    const instance = autocannon({url, duration}
        ,(err,result) => {
            if (err) {
                console.error(err);
            }else{
                // console.log(result)
                console.log("number of requests", result.requests.total);
                console.log("duration in seconds", result.duration);
            }
        }
    );   
    
    autocannon.track(instance,{renderProgressbar: false, renderStats: false});
})
