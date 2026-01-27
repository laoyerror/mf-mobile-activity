export function setRem() {
  const designWidth = 750
  const baseSize = 100

  const html = document.documentElement
  let width = html.clientWidth

  // PC / Pad 封顶
  if (width > designWidth) width = designWidth

  html.style.fontSize = (width / designWidth) * baseSize + 'px'
}

setRem()
window.addEventListener('resize', setRem)
