function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // Pegar a tag img utilizando um seletor mais específico
    const img = document.querySelector(".avatar img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "avatar-light.png");
    } else {
        img.setAttribute("src", "avatar.png");
    }
}

