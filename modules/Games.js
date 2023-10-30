export function getGames(page = 1, id = null) {
    const api_endpoint = `https://www.cheapshark.com/api/1.0/deals?${(page==null)?"":`pageNumber=${page}`}`;

    return fetch(api_endpoint)
        .then(response => response.json())
        .then(data => data);
     
}

export function getSearchRes(search) {
    const api_endpoint = `https://www.cheapshark.com/api/1.0/games?title=${search}`;

    return fetch(api_endpoint)
        .then(response => response.json())
        .then(data => data);

}

export function initGames(games, display_limit) {
        const data = games.slice(0,display_limit)
        let html = ``
        for(let game of data){
            console.log(game);
            html += `
            <div class="col-xxl-3 col-lg-3  col-md-4 col-sm-12 d-flex align-items-between justify-content-center">
                <div class="card mb-3 w-100">
                    <img src="${game.thumb}" class="card-img-top" alt="thumbnail of game: ${game.title}">
                    <div class="card-body card-body d-flex flex-column align-items-start justify-content-between">
                    <div class="mb-3">
                    <h5 class="card-title">${game.title}</h5>
                    <p>Steam rating: <span class="${(game.steamRatingText == "Very Positive" || game.steamRatingText == "Overwhelmingly Positive")? 'text-success': 'text-danger'}">${game.steamRatingText}</span></p>                    
                    <p class="m-0 text-danger ${(game.isOnSale == "1")? "d-flex": "d-none"}">${game.normalPrice}$</p>
                    <h3 class="text-success">${(game.salePrice == 0.00)?`Free!`: game.salePrice}$</h3>
                    </div>
                    <a href="./game.html?id=${game.gameID}" class="btn details btn-primary" id="${game.gameID}">Details</a>
                    </div>
                </div>
            </div>
            `
        }
        return html
}

export function initFavourites(games){
    let html = ``

    // nese kemi te shtuara ne watchlist ateher i marrim dhe i shfaqim ne nje card
    if(games.length > 0){
        let html = ``
        for(let game of games){

        html += `
        <div class="col-xxl-3 col-lg-3 col-md-4 col-sm-12 d-flex align-items-between justify-content-center">
            <div class="card mb-3 w-100">
                <img src="${game.info.thumb}" class="card-img-top img-fluid" alt="${game.info.title}">
                <div class="card-body d-flex flex-column align-items-start justify-content-between">
                    <div class="mb-3">
                    <h5 class="card-title">${game.info.title}</h5>
                    <p class="card-text">Cheapest price: <span class="text-success fs-4">${game.deals[0].price}$</span></p>
                    </div>
                    <div>
                    <button class="btn btn-danger btn-delete" id="${games.indexOf(game)}"><i class="bi bi-trash " ></i></button>
                    <a href="https://www.cheapshark.com/redirect?dealID=${game.deals[0].dealID}" class="btn details btn-success" target="_blank">Buy now</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    return html
    //perndryshe tregojm se nuk u gjet asnje rezultat per ate kerkim
    } else{
        let err = `
        <div class="w-90 text-center d-flex flex-column">
        <h1>You dont have any games added to your watch list.</h1>
        <i class="bi bi-emoji-frown center text-primary" style="font-size: 100px"></i>
        <a href="./index.html"> Go to the main page</a>
        </div>
        `
        return err
    }

    
}

export function initSearchRes(res) {
    let html = ``

    // nese kemi rezultat prej api ateher i marrim dhe i shfaqim ne nje card
    if(res.length > 0){
        for(let game of res){
        // console.log();
        html += `
        <div class="col-xxl-3 col-lg-3 col-md-4 col-sm-12 d-flex align-items-between justify-content-center">
            <div class="card  mb-3 w-100">
                <img src="${game.thumb}" class="card-img-top" alt="thumbnail of game: ${game.external}">
                <div class="card-body d-flex flex-column align-items-start justify-content-between">
                <div class="mb-3">
                <h5 class="card-title">${game.external}</h5>                  
                <p class="m-0 text-danger ${(game.isOnSale == "1")? "d-flex": "d-none"}">${game.normalPrice}$</p>
                <h3 class="text-success"><p class="text-dark fs-6 m-0 fw-light">Cheapest price:</p>${(game.cheapest == 0.00)?`It's Free!`: `${game.cheapest}$`}</h3>
                </div>
                <a href="./game.html?q=${game.gameID}" class="btn details btn-primary" id="${game.gameID}">View Deals</a>
                </div>
            </div>
        </div>
        `
    }
    //perndryshe tregojm se nuk u gjet asnje rezultat per ate kerkim
    } else{
        let err = `
        <div class="w-90 text-center d-flex flex-column">
        <h1>We could not find the game you are looking for.</h1>
        <i class="bi bi-emoji-frown center text-primary" style="font-size: 100px"></i>
        <a href="./index.html"> Go to the main page</a>
        </div>
        `
        return err
    }

    return html
}
