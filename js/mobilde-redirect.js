const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    window.location.href =
    "pdf-viewer/viewer.html?file=../issues/vol01.pdf";
}