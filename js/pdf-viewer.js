if (window.innerWidth <= 768) {

    const pdfUrl = "issues/vol01.pdf";

    const canvas = document.getElementById("pdf-canvas");
    const context = canvas.getContext("2d");


    pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {

        pdf.getPage(1).then(page => {

            const viewport = page.getViewport({
                scale: 2
            });


            canvas.width = viewport.width;
            canvas.height = viewport.height;


            page.render({
                canvasContext: context,
                viewport: viewport
            });

        });

    });

}