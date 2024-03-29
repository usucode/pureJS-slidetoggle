const Toggles = document.querySelectorAll(".toggle")
Toggles.forEach(toggle => {
  const contents = toggle.nextElementSibling
  const contentsHeight = contents.offsetHeight
  contents.style.height = "0"
  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("-open")) {
      toggle.classList.remove("-open")
      contents.classList.remove("-open")
      contents.style.height = "0"
    } else {
      toggle.classList.add("-open")
      contents.classList.add("-open")
      console.log(contentsHeight)
      contents.style.height = String(contentsHeight) + "px"
    }
  })
})
