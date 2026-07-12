window.addEventListener("DOMContentLoaded", () => {
    // 1. 모바일 여부 확인
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // 2. 모바일이면 PDF로 바로 이동
    if (isMobile) {
        window.location.href = "path/to/your-pdf-file.pdf"; // 여기에 PDF 경로를 넣어주세요
        return; // 아래 북클립 코드는 실행하지 않음
    }

    // 3. PC 전용 북클립 설정 (기존에 잘 나오던 값으로 복원)
    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        {
            width: 700,
            height: 990,
            size: "stretch", // PC에서는 화면 비율에 맞게 늘어나는 게 최고예요
            minWidth: 400,
            maxWidth: 700,
            minHeight: 500,
            maxHeight: 990,
            showCover: true,
            drawShadow: true,
            maxShadowOpacity: 0.4,
            usePortrait: false,
            mobileScrollSupport: false // PC니까 끕니다
        }
    );

    pageFlip.loadFromImages([
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

    // 이벤트 리스너들...
    document.getElementById("prevBtn").addEventListener("click", () => pageFlip.flipPrev());
    document.getElementById("nextBtn").addEventListener("click", () => pageFlip.flipNext());
});

    if (leftZone) {
        leftZone.addEventListener("click", () => pageFlip.flipPrev());
    }

    if (rightZone) {
        rightZone.addEventListener("click", () => pageFlip.flipNext());
    }
