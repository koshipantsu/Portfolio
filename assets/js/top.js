$(function(){

// スムーススクロール
  $('a').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 1000, "swing");
    return false;
  });
//

// コンテンツナビの固定
    //ページトップからの高さを取得
        var fixnav_top = $(".contents-nav").offset().top;
        var fixnav_bottom = $(".contents-nav").offset().bottom;
        var fixnav_height = $(".contents-nav").height();
    //コンテンツの高さを取得
        var content_height = $(".works").height();
        var footer_top = $(".profile").offset().top;
    // 読み込み時に開いたウィンドウの高さを取得
        var window_height = $(window).height();
    // ウィンドウのサイズを変えたときの高さを取得
        $(window).resize(function(){
            window_height = $(this).height();
        });
    // スクロールされるごとに現在の位置を計算し、Classを付与・除去する。
        $(window).scroll(function(){
            var scroll_height = $(this).scrollTop();
            if (scroll_height < fixnav_top) {
                $(".contents-nav").removeClass("c-nav__fixed");
                $(".contents-nav").removeClass("c-nav__fixed-bt");
                $(".contents-nav").addClass("fixed_not");
            } else if (scroll_height > fixnav_top && scroll_height < footer_top - fixnav_height) {
                $(".contents-nav").removeClass("fixed_not");
                $(".contents-nav").removeClass("c-nav__fixed-bt");
                $(".contents-nav").addClass("c-nav__fixed");
            } else {
                $(".contents-nav").removeClass("c-nav__fixed");
                $(".contents-nav").removeClass("c-nav__fixed-bt");
                $(".contents-nav").addClass("c-nav__fixed-bt");
            }
        });
//

// プロフィール背景の固定
$(document).ready(function(){

  var bg = $(".prof-bg").offset().top; // boxのページ上からの距離を取得
  var ds = 0;

  $(document).scroll(function(){ // スクロール発生時の処理の記述を開始
    ds = $(this).scrollTop(); // ユーザのスクロールした距離を取得

      if (bg <= ds) {  // スクロール距離がboxの位置を超えたら、
          $(".prof-bg").addClass('prof__fixed'); // 「follow」というclassを追加する
      } else { // スクロールがページ上まで戻ったら、
          $(".prof-bg").removeClass('prof__fixed'); // classを削除
      }
  });
});
//

// ホバーエフェクト
$(".photograph a").hover(function(){

});


// メニューに戻るボタンのアニメーション
  var topBtn = $('#menu');
    topBtn.hide();
    //スクロールが200に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);





})
