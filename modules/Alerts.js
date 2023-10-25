
//kodi per me shfaq formen submit alertat
export function initForm(div){
    div.innerHTML = `
        <div class="col-xxl-6 col-lg-8 col-md-6 col-sm-12  mx-auto border shadow p-4 m-4">
        <h3 class="mb-4">Get notified when price drops:</h3>
        <form>
            <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="useremail" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We will notify you to this email when price drops to or below the desired price of the game</small>
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Desired price</label>
            <input type="number" class="form-control" id="price floatInput" name="floatInput" step="0.01" placeholder="Type here the desired price...">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
        </div>
    `
}
//kodi per me bo submit alertat
export function submitAlertToApi(email, price, id){
    const api_endpoint = `https://www.cheapshark.com/api/1.0/alerts?action=set&email=${email}&gameID=${id}&price=${price}`

    return  fetch(api_endpoint)
            .then(response => response.json())
            .then(data => {(data) ? alert(`You will be notified when price drops to ${price}$ or below!`): alert(`Something went wrong please check if email is valid!`);
            console.log(data)})
}

export function initCheckForm(div){
    div.innerHTML = `
        <div class="col-xxl-6 col-lg-4 col-md-6 col-sm-12  mx-auto border shadow p-4 m-4">
        <h3 class="mb-4">Get an email with games you are waiting for prices to drop:</h3>
        <form>
            <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="useremail" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">You will get an email for games that are assosiated with this email adress</small>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
        </div>
    `
}

export function getEmail(email){
    const api_endpoint = `https://www.cheapshark.com/api/1.0/alerts?action=manage&email=${email}`
    console.log(email)
    return fetch(api_endpoint)
            .then(response => response.text())
            .then(data => {
                (data === "Link was already sent recently") ? alert(`${data}. Please check earlier emails sent to the provided email!`) : alert(data)
            })
           
}
