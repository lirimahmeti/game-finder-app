export function getGame(id) {
    const api_endpoint = `https://www.cheapshark.com/api/1.0/games?id=${id}`;

    return fetch(api_endpoint)
        .then(response => response.json())
        .then(data => data)
}
export function initDeals(data){
    let html = `<ul class="list-group col-xxl-6 col-lg-4 col-md-6 col-sm-12">`;
    for(let info of data.deals){
        html += `
        <li class="mt-3 list-group-item">Store: <img src="https://www.cheapshark.com//img//stores//logos//${+info.storeID-1}.png" style="width:30px;">, Price: ${info.price}$ <a href="https://www.cheapshark.com/redirect?dealID=${info.dealID}" class="btn btn-success">Buy now</i> </a></li>
        `
    }
    html += `</ul>`
    return html
}
export function initGame(game){
    let html = `
        <div class="card mb-3 mt-3 col-xxl-3 col-lg-4 col-md-6 col-sm-12 g-4">
            <img src="${game.thumb}" class="card-img-top img-fluid" alt="${game.title}">
            <div class="card-body">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text">See all deals about:  <b>${game.title}</b>, from all over e-gameshops </p>
                <button class="btn btn-warning" id="add-to-favourites"><i class="bi bi-eye"></i> Add to watch list</i></button>
            </div>
        </div>
        `
    return html
}