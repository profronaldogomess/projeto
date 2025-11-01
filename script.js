function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  updateProfileImage()
}

function updateProfileImage() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}

// Inicializar a imagem quando a página carregar
updateProfileImage()
