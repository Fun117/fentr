function startSc(){ // サイトのロード時に実行
    // クッキーを読み出す
    const obj = convertCookieToObject(document.cookie);
    let html_class = obj.html_class;
    document.getElementById('html').className = (html_class)
}


// クッキーの解析
function convertCookieToObject(cookies) {
    const cookieItem = cookies.split(';');
    const obj = {};
    cookieItem.forEach((item) => {
        // 「=」で分解
        const element = item.split('=');
        // キーを取得
        const key = element[0].trim();
        // バリューを取得
        const value = decodeURIComponent(element[1]);
        // 保存
        obj[key] = value;
    });
    return obj;
}