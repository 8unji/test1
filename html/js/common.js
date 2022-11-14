$(document).ready(function () { //문서준비이벤트 
    AOS.init();
    //popup

    $('.popup_close').click(function () {
        $('.popup').slideUp();
    });

    //sitemap
    $('.sitemap').hide();
    $('.util > li:nth-child(2)').click(function () {
        $('.sitemap').fadeIn();
        $('body').css({ 'overflow': 'hidden' })//스크롤바 제거
    });
    $('.sitemap_close').click(function () {
        $('.sitemap').fadeOut();
        $('body').css({ 'overflow': 'auto' })//스크롤바 생성

    });



    //depth2
    $('.depth2,.depth2_bg').hide();
    $('.gnb > li').hover(function () {
        $(this).children('.depth2').stop().fadeToggle();
        $('.depth2_bg').stop().fadeToggle();
    });
    $('.mgnb_wrap').hide();
    $('.ham').click(function () {
        $('.mgnb_wrap').show();
    });
        $('.mgnb_close').click(function () {
            $('.mgnb_wrap').hide();


        });

        //mdepth2
        $('.mdepth2').hide();
        $('.mgnb > li').click(function () {
            $(this).children('.mdepth2').slideDown();
            $(this).siblings().children('.mdepth2').slideUp();
        });




        //search
        $('.search').hide();
        $('.search_btn').click(function () {
            $('.search').fadeIn();
        });
        $('.search_close').click(function () {
            $('.search').fadeOut();
        });

        //language 
        $('.language > ul').hide();
        $('.language').click(function () {
            // $('.language').ToggleClass('active');
            $('.language > ul').slideToggle();
        });

        //



        // dafault
        const mb = new Swiper('.mb', {
            // 옵션
            autoplay: {
                delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
                disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
            },
            // 페이저 버튼 지정
            pagination: {
                el: '.swiper-pagination',  // 버튼 태그 설정
                type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
                clickable: true,  // 버튼 클릭 여부
            },
            speed: 1000, // 슬라이드 전환시간
            loop: true, // 슬라이드 반복여부
            // 방향 버튼 지정
            navigation: {
                nextEl: '.swiper-button-next',  // 다음 버튼
                prevEl: '.swiper-button-prev',  // 이전 버튼
            },
        });
        $('.mb_play').hide();

        $('.mb_pause').click(function () {
            mb.autoplay.stop();
            $('.mb_pause').hide()
            $('.mb_play').show()
        });
        $('.mb_play').click(function () {
            mb.autoplay.start();
            $('.mb_pause').show()
            $('.mb_play').hide()


        });
        // dafault
        const product_list = new Swiper('.product_list', {
            // 옵션
            // 자동 슬라이드 설정, 비활성화 false
            autoplay: {
                delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
                disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음\
                speed: 1000,
                loop:true,
            },
            breakpoints: {
                640: {  // 가로해상도가 640px 이상일 경우
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
                    loop: true, //슬라이드 반복
                },
                768: {  // 가로해상도가 768px 이상일 경우
                    slidesPerView: 4,
                    spaceBetween: 20,
                    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치\
                    loop: true, //슬라이드 반복

                },
                1024: {  // 가로해상도가 1024px 이상일 경우
                    slidesPerView: 6,
                    spaceBetween: 20,
                    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
                    loop: true, //슬라이드 반복

                },
            },
            // 스크롤바 여부
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false, //스크롤이 보이게
            },
        });

        //탭메뉴
        //  $('.img2,.img3,img4').hide(),
        //  $('.teaware_list li span').click(function(){
        //     $(this).siblings('.teaware_img').fadeIn();
        //     $(this).parent().siblings().find('.teaware_img').fadeOut();
        //  });
        $('.teaware_list li:first-child').addClass('active');

        $('.teaware_list li').click(function () {
            $(this).addClass('active'); //.active X 점을 넣으면 안된다!!
            // li에 클릭 한 요소에 active 클래스 요소를 추가해라
            $(this).siblings().removeClass('active');
        });

        //아코디언 배너(뮤지엄)
        $('.museum_list li:first-child').addClass('on');
        $('.museum_list li').mouseenter(function () {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');


        });
    }); //문서준비이벤트 종료