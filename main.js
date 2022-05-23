// Toda vez que a página for carregada essa função será chamada
window.onload = function verifyTheme() {
  // Verifico qual o tema existente no Local Storage
  const theme = localStorage.getItem('Theme')
  document.getElementById('ball').style.transition = '0.0s linear'
  if (theme == null) {
    localStorage.setItem('Theme', 'light')
    // Invoco a classe dark, marcando meu checkbox como true
  } else if (theme == 'dark') {
    document.body.classList.add('dark')
    document.getElementById('checkTheme').checked = true
  }
}

// Verifico se a classe dark está habilitada, com isso, defino o valor do Local Storage
function dark() {
  const verifyTheme = document.body.classList.toggle('dark')
  const ball = document.getElementById('ball')
  if (verifyTheme == true) {
    localStorage.setItem('Theme', 'dark')
    ball.style.transition = '0.3s linear'
  } else {
    localStorage.setItem('Theme', 'light')
    ball.style.transition = '0.3s linear'
  }
}
