const REQ_INIT = "/api/init"

let socket = io()

socket.on('newConnection', msg => {
    console.log("server msg: ", msg);
})

//main
$(document).ready(() => {
    console.log('page ready');
    $.get(REQ_INIT, (res) => {
        if(res.statusCode != 200) 
            return null
        let result = res.result
        //$(#)
    })
    
})