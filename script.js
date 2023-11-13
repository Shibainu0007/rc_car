// script.js

// ドキュメントが読み込まれた後に実行される関数を定義します。
document.addEventListener('DOMContentLoaded', function() {

    // ボタン要素にイベントリスナーを設定します。
    document.querySelectorAll('.button').forEach(function(button) {
        button.addEventListener('click', function() {
            // ボタンのdata-command属性からコマンドを取得します。
            var command = button.getAttribute('data-command');
            
            // コマンドをサーバーに送信する関数を呼び出します。
            sendCommand(command);
        });
    });

});

// サーバーにコマンドを送信する関数を定義します。
function sendCommand(command) {
    // XMLHttpRequestオブジェクトを作成します。
    var xhr = new XMLHttpRequest();
    
    // POSTメソッドでAPIエンドポイントにリクエストを送信します。
    xhr.open('POST', '/api/motor/' + command, true);
    
    // リクエストが完了したときの処理を定義します。
    xhr.onload = function() {
        // リクエストが成功した場合の処理を記述します。
        if (xhr.status == 200) {
            // サーバーからのレスポンスを取得します。
            var response = JSON.parse(xhr.responseText);
            
            // 成功メッセージを表示します。
            console.log(response.message);
        } else {
            // エラーメッセージを表示します。
            console.error('Command failed', xhr.responseText);
        }
    };
    
    // リクエストを送信します。
    xhr.send();
}