import DraggableImage from "./draggableImage";
const imagesLoaded = require('imagesloaded');

// Preload images
const preloadImages = () => {
    return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.img-drag, .img-trail'), {background: true}, resolve);
    });
};

// Preload fonts
const preloadFonts = () => {
    return new Promise((resolve, reject) => {
        WebFont.load({
            typekit: {
                id: 'wwn4ioo'
            },
            active: resolve
        });
    });
};

Promise.all([
    preloadImages(),
    preloadFonts()  
]).then(() => {
    [...document.querySelectorAll('.img-wrap')].forEach((element) => new DraggableImage(element));
    document.body.classList.remove('loading');
});


