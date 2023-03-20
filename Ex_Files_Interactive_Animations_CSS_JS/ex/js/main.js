// O evento DOMContentLoaded é acionado quando todo o HTML foi completamente carregado e analisado, sem aguardar pelo CSS, imagens, e subframes para encerrar o carregamento.
let presentation = document.querySelector('hp-presentation');
window.addEventListener('DOMContentLoaded', function (e) {
    presentation.onclick = handlePresentationClick;
    presentation.addEventListener('animationend', handleAnimationEnd);
});

function handlePresentationClick(e) {
    let current = document.querySelector('hp-slide.active');
    let next = current.nextElementSibling;

    while (next && next.tagName != 'HP-SLIDE') {
        next = next.nextElementSibling;
    }
    if (next) {
        current.classList.remove('active');
        next.classList.add('active');

        const aa = parseInt(next.getAttribute('data-autoadvance'));
        if (!isNaN(aa)) {
            setTimeout(() => {
                handlePresentationClick(e);
            }, aa);
        }
    }
}

function handleAnimationEnd(e) {
    let slide = e.target.closest("hp-slide");
    let aa = slide.getAttribute('data-autoadvance');

    if (aa == 'animationend' && slide.classList.contains('active')) {
        handlePresentationClick();
    }
}