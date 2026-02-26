const button = document.querySelector("#switch button")
const html = document.documentElement
const profileImg = document.getElementById("imgProfile")

button.addEventListener("click", toggleMode)

function toggleMode() {
  html.classList.toggle("light")

  const isLight = html.classList.contains("light")

  profileImg.src = isLight
    ? "./assets/avatar-light.png"
    : "./assets/avatar-dark.png"
}
