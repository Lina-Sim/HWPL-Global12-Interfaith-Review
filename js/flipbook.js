window.addEventListener("DOMContentLoaded", () => {

    // 1. 플립북 기본 옵션 설정 (크기 및 화면 최적화)
    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        {
            width: 700,          // 책 한 페이지의 기본 가로 크기
            height: 990,         // 책 한 페이지의 기본 세로 크기
            size: "stretch",     // 화면 크기에 맞게 부드럽게 조절

            minWidth: 315,
            maxWidth: 700,
            minHeight: 450,
            maxHeight: 990,

            showCover: true,     // 첫 장을 표지(한 장)로 인식하게 함
            drawShadow: true,    // 책 넘어갈 때 입체적인 그림자 효과 ON
            maxShadowOpacity: 0.4,
            
            mobileScrollSupport: true
        }
    );

    // 2. viewer.html에 적어둔 실제 이미지들을 순서대로 로드 📚
    pageFlip.loadFromImages(
        "images/cover-vol01.png",
        "pages/vol01-page02.webp",
        "pages/vol01-page03.webp",
        "pages/vol01-page04.webp",
        "pages/vol01-page05.webp",
        "pages/vol01-page06.webp",
        "pages/vol01-page07.webp",
        "pages/vol01-page08.webp",
        "pages/vol01-page09.webp",
        "pages/vol01-page10.webp",
        "pages/vol01-page11.webp",
        "pages/vol01-page12.webp"
    ]);

    /* =================================================
       3. 하단 화살표 버튼 클릭 이벤트 연결
    ================================================= */
    document.getElementById("prevBtn").addEventListener("click", () => {
        pageFlip.flipPrev();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        pageFlip.flipNext();
    });

    /* =================================================
       4. 양옆 터치/호버 영역(hover-zone) 클릭 이벤트 연결 💡
       (화면 양옆 빈 공간을 눌러도 책이 슥 넘어가도록 만듭니다)
    ================================================= */
    const leftZone = document.querySelector(".left-zone");
    const rightZone = document.querySelector(".right-zone");

    if (leftZone) {
        leftZone.addEventListener("click", () => pageFlip.flipPrev());
    }
    if (rightZone) {
        rightZone.addEventListener("click", () => pageFlip.flipNext());
    }

});