const inpEl = document.querySelectorAll('.inps');
const passwordChecked = document.querySelector('#check');
const small = document.querySelectorAll('.con .c1 small');

inpEl.forEach(inp => {
  inp.addEventListener('input', handleInput);
});

function handleInput(e) {
  console.log(e.currentTarget.type);
  if (e.currentTarget.type === 'text' && e.currentTarget.value.length >= 5) {
    e.currentTarget.classList.remove('error');
    e.currentTarget.classList.add('success');
  } else if (
    e.currentTarget.type === 'text' &&
    e.currentTarget.value.length < 5
  ) {
    e.currentTarget.classList.remove('success');
    e.currentTarget.classList.add('error');
  }

  if (e.currentTarget.type === 'email' && e.currentTarget.value.includes('@')) {
    e.currentTarget.classList.remove('error');
    e.currentTarget.classList.add('success');
  } else if (
    e.currentTarget.type === 'email' &&
    !e.currentTarget.value.includes('@')
  ) {
    e.currentTarget.classList.remove('success');
    e.currentTarget.classList.add('error');
  }

  if (e.currentTarget.type === 'password' && e.currentTarget.value.length > 5) {
    e.currentTarget.classList.remove('error');
    e.currentTarget.classList.add('success');
  } else if (
    e.currentTarget.type === 'password' &&
    e.currentTarget.value.length < 6
  ) {
    e.currentTarget.classList.remove('success');
    e.currentTarget.classList.add('error');
  }

  if (
    e.currentTarget.id === 'con' &&
    e.currentTarget.value === passwordChecked.value
  ) {
    e.currentTarget.classList.remove('error');
    e.currentTarget.classList.add('success');
  } else if (
    e.currentTarget.id === 'con' &&
    e.currentTarget.value !== passwordChecked.value
  ) {
    e.currentTarget.classList.remove('success');
    e.currentTarget.classList.add('error');
  }
}
