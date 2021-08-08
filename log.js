function showLog(log_array, comment) {
    let logArea = document.getElementById("log-area");

    if (logArea === null) { // log-area が無かったら body末尾に作成
        let body = document.getElementsByTagName('body')[0];
        body.insertAdjacentHTML('beforeend', '<div class="log" id="log-area"></div>');
        logArea = document.getElementById("log-area");
    }

    // ---- log 行作成
    logArea.insertAdjacentHTML('beforeend', '<ul></ul>');
    let logUl = document.querySelector('#log-area ul:last-child');
    // ---- show title
    let now = (new Date()).toLocaleTimeString();
    logUl.insertAdjacentHTML('beforeend', '<li class="title">' + now + '</li>');
    // ---- show each element
    log_array.forEach(element => {
        logUl.insertAdjacentHTML('beforeend', '<li class="element">' + element + '</li>');
    });
    // ---- show comment
    logUl.insertAdjacentHTML('beforeend', '<li class="title">' + comment + '</li>');

}