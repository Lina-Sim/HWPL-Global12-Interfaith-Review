const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    window.location.replace(
        "pdf-viewer/viewer.html?file=../issues/vol01.pdf"
    );
}