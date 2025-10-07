document.querySelector('button').addEventListener('click', click)
let h = document.querySelector('h3')

async function click() {
    const res = await fetch('/movie')
    const data = await res.json()
    h.textContent = data.title
}