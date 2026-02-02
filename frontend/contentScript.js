const targetSelector = '#landingImage, #imgTagWrapperId img, .a-dynamic-image, .imgTagWrapper img';

document.body.addEventListener('click', (event) => {

    if (event.target.matches(targetSelector)) {

        console.log("Product Image Clicked!");

        event.preventDefault();
        event.stopPropagation();

        const highResUrl = event.target.getAttribute('data-old-hires');
        const standardUrl = event.target.src;
        const finalUrl = highResUrl || standardUrl;

        console.log("-----------------------------");
        console.log("Image Captured:", finalUrl);
        console.log("-----------------------------");
    }
})
