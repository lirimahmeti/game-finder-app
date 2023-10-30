// const slides = [
//     {
//         id: 1,
//         image: 'http://127.0.0.1:5500/assets/images/gtav-banner.jpg',
//         link: 'https://gjirafa50.com/iphone15?pagenumber=1&orderby=10&hls=false&is=false'
//     },
//     {
//         id: 2,
//         image: 'https://hhstsyoejx.gjirafa.net/gjirafa50core/images/df74e894-33de-4784-9b91-a22cce76a807/df74e894-33de-4784-9b91-a22cce76a807.webp?w=1920',
//         link: 'https://gjirafa50.com/apple-watch-ultra-2'
//     },
//     {
//         id: 3,
//         image: 'https://hhstsyoejx.gjirafa.net/gjirafa50core/images/c7619273-66eb-41e5-b65e-5c34d15de5a4/c7619273-66eb-41e5-b65e-5c34d15de5a4.webp?w=1920',
//         link: 'https://gjirafa50.com/apple-watch-series-9?pagenumber=1&orderby=10&hls=false&is=false'
//     },
//     {
//         id: 4,
//         image: 'https://hhstsyoejx.gjirafa.net/gjirafa50core/images/89e9e6a5-52e9-43f5-8ab3-28dee1312993/89e9e6a5-52e9-43f5-8ab3-28dee1312993.webp?w=1920',
//         link: 'https://gjirafa50.com/apple-airpods-pro-2-me-magsafe-case-usb-c?pagenumber=1&orderby=10&hls=false&is=false'
//     },
// ]

// function composeSlide(slide) {
//     return `
//         <a href="${slide.link}" target="_blank">
//             <div class="carousel-item ${(slide.id == 1) ? 'active' : ''}">
//                 <img src="${slide.image}" class="d-block w-70" style="" alt="Slide ${slide.id}">
//             </div>
//         </a>
//     `
// }

// function composeSlides(slides) {
//     let html = ''
//     for(let slide of slides) {
//         html += composeSlide(slide)
//     }
//     return html
// }

// export function initSlider(div) {
//     div.innerHTML = `
//     <div id="slider" class="carousel carousel-dark slide ">
//     <div class="carousel-inner">
//         ${composeSlides(slides)}
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//     </button>
//     </div>
//     `
// }
export function initHeadline(div){
    div.innerHTML = `
    <header class="bg-dark py-5">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <div class="my-5 text-center text-xl-start">
                        <h1 class="display-5 fw-bolder text-white mb-2">Never Overpay for Games Again: Your Game Deal Search Engine</h1>
                        <p class="lead fw-normal text-white-50 mb-4"> At GameSaver, we're all about helping you save money while indulging in your favorite online games. Our website is your ultimate destination for finding the cheapest deals on a wide range of games across various online game shops.!</p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="./games.html">Browse Deals</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="https://lirimahmeti.github.io/game-finder-app.github.io/assets/images/banner.jpg" alt="..." /></div>
            </div>
        </div>
    </header>
    `
}