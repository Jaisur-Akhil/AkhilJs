var defaultState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
}

// GET OUR PDF FILE
pdfjsLib.getDocument('therect.pdf').then((pdf) => {

    defaultState.pdf = pdf;
    render();

});

// RENDER PDF DOCUMENT
function render() {
    defaultState.pdf.getPage(defaultState.currentPage).then((page) => {

        var canvas = document.getElementById("pdf_renderer");
        var ctx = canvas.getContext('2d');

        var viewport = page.getViewport(defaultState.zoom);

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });
}
