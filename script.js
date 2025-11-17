function toggleMode() {
    const html = document.documentElement;

    if(html.classList.contains('light')) {
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    }

    const img = document.querySelector("#profile img"); 
    img.setAttribute("src", html.classList.contains('light') ? "./assets/avatar-light.png" : "./assets/avatar.png");



}

