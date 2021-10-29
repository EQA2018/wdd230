const images2 = document.querySelector('img[data-src]');

const imageoptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
    const imgobserver = new IntersectionObserver((items, imgobserver) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgobserver.unobserve(item.target);
            }
        });
    }, imageoptions);
    images2.forEach((img) => {
        imgobserver.observer(img);
    });
} else {
    images2.forEach((img) => {
        loadImages(img);
    });
}