const images2 = document.querySelectorAll('img[data-src]');

//for (let data of bigdata) {
  //  console.log(data)
//}



const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        })
    }, imageOptions);
    images2.forEach(img => {
        imgObserver.observe(img);
    });
} else {
    images2.forEach((img) => {
        loadImages(img);
    });
}