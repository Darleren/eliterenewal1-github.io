$(function(){
      
    //각 style 스와이퍼 초기화 설정 
    function createSwiper(itemClass, mainClass) {
        var item_thumbnail = new Swiper(itemClass, {
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
        });

        var mainSwiper = new Swiper(mainClass, {
            effect: 'fade',
            loop: true,
            initialSlide: 0,
            navigation: {
                nextEl: '.swiper-gallery-next',
                prevEl: '.swiper-gallery-prev'
            },
            thumbs: {
                swiper: item_thumbnail
            }, 
        });
    }

    createSwiper('.item_thumbnail', '.item-main-swiper');
    createSwiper('.item_thumbnail-2', '.item-main-swiper-2');
    createSwiper('.item_thumbnail-3', '.item-main-swiper-3');
    createSwiper('.item_thumbnail-4', '.item-main-swiper-4');
    createSwiper('.item_thumbnail-5', '.item-main-swiper-5');
    createSwiper('.item_thumbnail-6', '.item-main-swiper-6');
    createSwiper('.item_thumbnail-7', '.item-main-swiper-7');
    createSwiper('.item_thumbnail-8', '.item-main-swiper-8');

    //동복 하복 tab
    $(".tab").hide().eq(0).show();

    $(".menu a").click(function () {
      var idx = $(this).index();

      $(".tab").hide().eq(idx).show();
      $(".menu a").removeClass("active");
      $(this).addClass("active");
      
      $(".tab .item_wrap ul li,.tab .tab_btn li" ).removeClass("on");
      $(".tab .item_wrap ul li:first-child,.tab .tab_btn li:first-child" ).addClass("on");
    
    });

    $('.tab .tab_btn li').click(function(){
        var onTab = $(this).attr('data-tab');

        // 모든 .swiper-slide에서 swiper-slide-thumb-active 클래스 제거
        setTimeout(function() {
            $('.swiper-wrapper .swiper-slide').removeClass('swiper-slide-thumb-active');
            $('.swiper-wrapper .swiper-slide:first-child').addClass('swiper-slide-thumb-active');
        }, 0);

        $('.tab_btn li, .item_wrap ul li').removeClass('on');
        $(this).addClass('on');
        $('#' + onTab).addClass('on');


    });
    
});