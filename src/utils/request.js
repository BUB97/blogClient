//包装服务端通信函数
function get(url){
    return fetch(url,{
        method: "GET",
        credentials: 'include'
    }).then(response => {
        return handleResponse(url,response);
    }).catch(err => {
        console.error('Request failed.');
        return {error: {message: "Request failed."}};
    })
}

function post(url,data){
    let arr = [];
    for(let key in data){
        arr.push(`${key}=${data[key]}`);
    }
    let bodyInfo=arr.join("&");
    return fetch(url,{
        method: "POST",
        credentials: 'include',
        headers: {
            "origin": "http://localhost:3000",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyInfo
    }).then(response => {
        return handleResponse(url,response);
    }).catch(err => {
        console.error('Request failed.');
        return {error: {message: "Request failed."}};
    })
}

function handleResponse(url,response){
    if(response.status===200){
        return response.json();
    }else{
        console.error(`Request response parse failed`);
        return {error: {message: "Request failed due to server error."}};
    }
}

export {get, post}