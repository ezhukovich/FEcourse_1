$('body').on('click', '.getData', () => {

    const URL = 'https://jsonplaceholder.typicode.com/todos';
    const URL1 = 'https://jsonplaceholder.typicode.com/comments';
    // РАЗ
    getData(URL)
    .then((response) => {
        console.log(JSON.parse(response))
        let parse = JSON.parse(response);
    });

    // ДВА
    getData(URL, 1)
    .then((response) => {
        console.log('detail', JSON.parse(response))
        let parse = JSON.parse(response);
    });

    getData(URL1, '', {postId: [1,2,3,4], commentId: 2})
    .then((response) => {
        console.log(JSON.parse(response))
        let parse = JSON.parse(response);
    });
});

let getData = (url, id, getParams) => {
    if(id) {
        url = `${url}/${id}`
    }
    if(getParams) {
        let getParamsString = [];
        $.each(getParams, (key, value) => {
            getParamsString.push(`${key}=${$.isArray(value) ? value.join(',') : value}`);
        })
        url = `${url}?${getParamsString.join('&')}`
    }
    console.log(url);
    return fetch(url)
    .then((response) => response.json())
    .then((json) => JSON.stringify(json))
    .catch((error) => console.log(error))
}

let postData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    .then(response => response.json())
    .then(json => JSON.stringify(json))
    .catch(error => console.log(error));
};