const form = document.querySelector('form')
console.log(form)

const input = document.querySelector('.form-control')
console.log(input)

function handleSubmit(e) {
  e.preventDefault()

  console.log('click')
}

// // ************* EVENT LISTENER *************

form.addEventListener('submit', handleSubmit)
