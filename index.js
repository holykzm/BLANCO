$(function () {
    // カレンダー
    $(function () {
      //デートピッカー用スクリプト
      $("#datepicker").pickadate({
      format: "yyyy年mm月dd日",
      // 良福寺なら１だけ
      disable: [7]
      });
      //タイムピッカー用スクリプト
      $("#timepicker").pickatime({
      format: "HH:i",
      interval: 5, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [19,00] //最大時間
      });
      //タイムピッカー用スクリプト2
      $("#timepicker2").pickatime({
      format: "HH:i",
      interval: 5, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [19,00] //最大時間
      });
    });

   
    
    // 送信
    $('form').submit(function () {
        var date = $('#datepicker').val();
        var time = $('#timepicker').val();
        var time2 = $('#timepicker2').val();
        var names = $('input[name="names"]').val();
        var staff = $('input[name="s-name"]:checked').val();

        var menu = $('input[name="menu"]:checked').map(function(){
          return $(this).val();
        }).get();

        var memo = $('input[name="memo"]').val();


        var msg = `希望日：${date}\n\n時間：${time}から${time2}までの間\n\n氏名：${names}様\n\nメニュー：${menu}\n\n概要：${memo}\n\n\n送信ありがとうございます！\n返信が来るまでしばらくお待ちください♪`;
        sendText(msg);

        return false;
    });
});
