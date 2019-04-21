$(document).ready(function(){
  // is_publicアイコンを変更
  $("#public-button").click(function(){
    var post_id = $('#public-post-id').val();
    var url = "/posts/" + post_id + "/public";

    $.post(url, function(data, status){
      // ????
    });

    $(".public-icon").removeClass('fa-lock').addClass('fa-globe-americas');
    $(".public-text").text("公開中");
    // if ($(".public-icon").hasClass('fa-lock')) {
    //   $(".public-icon").removeClass('fa-lock').addClass('fa-globe-americas');
    //   $(".public-text").text("公開中");
    // } else {
    //   $(".public-icon").removeClass('fa-globe-americas').addClass('fa-lock');
    //   $(".public-text").text("非公開");
    // }
  });

  // like(aidane)createボタン
  // $("#like-button").click(function(){
  //   var post_id = $("#post-id").val();
  //
  //   if ($("#like-icon").hasClass("nonclicked-like-icon")) {
  //     var url = "/posts/" + post_id + "/likes";
  //     $.post(url, function(data, status){
  //       // ????
  //     });
  //     $(".nonclicked-like-icon").removeClass("nonclicked-like-icon").addClass("clicked-like-icon");
  //     $(".nonclicked-like-text").removeClass("nonclicked-like-text").addClass("clicked-like-text");
  //   } else {
      // var like_id = $('#like-id').val();
      // $.ajax({
      //   type: "DELETE",
      //   url: "/likes/" + like_id,
      //   data: {_method: 'delete'}
      // });
      // $(".clicked-like-icon").removeClass("clicked-like-icon").addClass("nonclicked-like-icon");
      // $(".clicked-like-text").removeClass("clicked-like-text").addClass(" nonclicked-like-text");
    // }
  // });

  // Bookmark(artdane)ボタン
  $("#bookmark-button").click(function(){
    var post_id = $("#post_id").val();
    var url = "/posts/" + post_id + "/bookmarks";
    // alert(url);
    $.post(url, function(data, status){
      // alert("Data: " + data + "\nStatus: " + status);
    });
    $(".nonclicked-art-icon").removeClass("nonclicked-art-icon").addClass("clicked-art-icon");
    $(".nonclicked-art-text").removeClass("nonclicked-art-text").addClass("clicked-art-text");
  });
});

// #### 自分用メモ↓ ####
//  <script>
// function loadDoc(post_id) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("POST", "/posts/" + post_id + "/bookmarks", true);
//   xhttp.send();
// }
// </script>
//
// <script>
// $(document).ready(function(){
//   $("button").click(function(){
//     var post_id = $("#post_id").val();
//     var url = "/posts/" + post_id + "/bookmarks";
//     alert(url);
//     $.post(url, function(data, status){
//       alert("Data: " + data + "\nStatus: " + status);
//     });
//   });
// });
// </script>
