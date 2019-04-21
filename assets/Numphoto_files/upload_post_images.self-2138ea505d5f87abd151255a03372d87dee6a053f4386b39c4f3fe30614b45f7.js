$(function(){
  $('#my-file').change(function(e){
    //ファイルオブジェクトを取得する
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#img1").attr("src", e.target.result);
        $("#img1").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);

  });
});

// $(function(){
//   //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
//   $('form').on('change', 'input[type="file"]', function(e) {
//     var file = e.target.files[0],
//         reader = new FileReader(),
//         $preview = $(".preview");
//         t = this;
//
//     // 画像ファイル以外の場合は何もしない
//     if(file.type.indexOf("image") < 0){
//       return false;
//     }
//
//     // ファイル読み込みが完了した際のイベント登録
//     reader.onload = (function(file) {
//       return function(e) {
//         //既存のプレビューを削除
//         $preview.empty();
//         // .prevewの領域の中にロードした画像を表示するimageタグを追加
//         $preview.append($('<img>').attr({
//                   src: e.target.result,
//                   width: "150px",
//                   class: "preview",
//                   title: file.name
//               }));
//       };
//     })(file);
//
//     reader.readAsDataURL(file);
//   });
// });
