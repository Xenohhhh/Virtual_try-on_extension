const targetSelector = '#landingImage, #imgTagWrapperId img, .a-dynamic-image, .imgTagWrapper img';

document.body.addEventListener('click', (event) => {

    if (event.target.matches(targetSelector)) {

        console.log("Product Image Clicked!");

        event.preventDefault();
        event.stopPropagation();

        const highResUrl = event.target.getAttribute('data-old-hires');
        const standardUrl = event.target.src;
        const finalUrl = highResUrl || standardUrl;

        console.log("Image Captured:", finalUrl);


        fetch('http://localhost:8000/api/try-on', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageUrl: finalUrl })
        })
        .then(res => res.json())
        .then(data => console.log("Response", data))
        .catch(err => console.error("Backend error:", err))
    }
})
