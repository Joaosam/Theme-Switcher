// Toda vez que a página for carregada essa função será chamada
window.onload = function verifyTheme() {
  // Verifico qual o tema existente no Local Storage
  const theme = localStorage.getItem('Theme')
  console.log(theme)
  if (theme == null) {
    localStorage.setItem('Theme', 'light')
    // Invoco a classe dark, marcando meu checkbox como true
  } else if (theme == 'dark') {
    document.body.classList.add('dark')
    document.getElementById('checkTheme').checked = true
  }
}

// Verifico se a classe dark está habilitada ou não, com isso, defino o valor do Local Storage
function dark() {
  const verifyTheme = document.body.classList.toggle('dark')
  if (verifyTheme == true) {
    localStorage.setItem('Theme', 'dark')
  } else {
    localStorage.setItem('Theme', 'light')
  }
}
