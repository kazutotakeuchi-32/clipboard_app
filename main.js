 
const btn = document.querySelector('#btn')

const copy = async() => {
  try {
    await navigator.clipboard.writeText(document.querySelector('#text').textContent)
    alert('Copied!')
  } catch (error) {
    alert('Error')
    throw console.warn('Error')
  }
}

btn.addEventListener("click", ()=> copy())