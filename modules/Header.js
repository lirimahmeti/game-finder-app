export function initHeader(div){
    const user_is_loggedin = localStorage.getItem('loggedin_user')
   
            console.log(localStorage.getItem('loggedin_user'))
            let links = ``

            if (user_is_loggedin != null){ 
                const name = user_is_loggedin.split('@')[0]
                links = `
                    <li><a class="dropdown-item" href="./dashboard.html"><b>${name}</b></a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" id="logout">Logout</a></li>
                    <li><a class="dropdown-item" href="./dashboard.html">Watch list <i class="bi bi-eye text-primary"></i></a></li>
                `
            } else{
                links = `
                    <li><a class="dropdown-item" href="./login.html">Login</a></li>
                    <li><a class="dropdown-item" href="./sign_up.html">Register</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="./login.html">Watch list <i class="bi bi-eye text-primary"></i></a></li>
                `
            }

    div.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="./index.html">GameSaver</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto me-5">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./games.html">Games</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User
                    </a>
                    <ul class="dropdown-menu">
                        ${links}
                    </ul>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    `
}
