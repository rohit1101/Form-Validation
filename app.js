const iUser = document.querySelector('.uname input');
const iEm = document.querySelector('.em input');
const iPass = document.querySelector('.pa input');
const iCPass = document.querySelector('.cpa input');
const iPhone = document.querySelector('.phone input');
const iSubmit = document.querySelector('.phone input[type="submit"]');
const passwordChecked = document.querySelector('#check');
const sub = document.querySelector('#sub');
let smallOne = document.querySelector('.one');
let smallTwo = document.querySelector('.two');
let smallThree = document.querySelector('.three');
let smallFour = document.querySelector('.four');
let smallFive = document.querySelector('.five');

function success(e) {
  e.currentTarget.classList.remove('error');
  e.currentTarget.classList.add('success');
}

function fails(e) {
  e.currentTarget.classList.remove('success');
  e.currentTarget.classList.add('error');
}

iUser.addEventListener('input', e => {
  if (e.currentTarget.type === 'text' && e.currentTarget.value.length >= 5) {
    success(e);
    smallOne.innerHTML = '';
  } else if (
    e.currentTarget.type === 'text' &&
    e.currentTarget.value.length < 5
  ) {
    fails(e);
    smallOne.style.visibility = 'visible';
    smallOne.innerHTML = 'Minimum five letters required';
  }
});

iEm.addEventListener('input', e => {
  // let small = document.querySelector('.two');
  if (
    e.currentTarget.type === 'email' &&
    e.currentTarget.value.includes('@') &&
    (e.currentTarget.value.includes('gmail.com') ||
      e.currentTarget.value.includes('hotmail.com') ||
      e.currentTarget.value.includes('yahoo.com'))
  ) {
    success(e);
    smallTwo.innerHTML = '';
  } else if (
    e.currentTarget.type === 'email' &&
    !e.currentTarget.value.includes('@') &&
    (!e.currentTarget.value.includes('gmail.com') ||
      !e.currentTarget.value.includes('hotmail.com') ||
      !e.currentTarget.value.includes('yahoo.com'))
  ) {
    fails(e);
    smallTwo.style.visibility = 'visible';
    smallTwo.innerHTML = 'Enter a valid email id';
  }
});

iPass.addEventListener('input', e => {
  // let small = document.querySelector('.three');
  if (e.currentTarget.type === 'password' && e.currentTarget.value.length > 5) {
    success(e);
    smallThree.innerHTML = '';
  } else if (
    e.currentTarget.type === 'password' &&
    e.currentTarget.value.length < 6
  ) {
    fails(e);
    smallThree.style.visibility = 'visible';
    smallThree.innerHTML = 'Password should be atleast six letters';
  }
});

iCPass.addEventListener('input', e => {
  // let small = document.querySelector('.four');
  if (e.currentTarget.value === passwordChecked.value) {
    success(e);
    smallFour.innerHTML = '';
  } else if (e.currentTarget.value !== passwordChecked.value) {
    fails(e);
    smallFour.style.visibility = 'visible';
    smallFour.innerHTML = 'Password do not match';
  }
});

iPhone.addEventListener('input', e => {
  // let small = document.querySelector('.five');
  if (
    e.currentTarget.type === 'tel' &&
    e.currentTarget.value.match(/^[6-9]\d{9}/) &&
    e.currentTarget.value.length === 10
  ) {
    success(e);
    smallFive.innerHTML = '';
  } else if (
    e.currentTarget.type === 'tel' &&
    (!e.currentTarget.value.match(/^[6-9]\d{9}/) ||
      e.currentTarget.value.length > 10)
  ) {
    fails(e);
    smallFive.style.visibility = 'visible';
    smallFive.innerHTML = 'Enter a valid Mobile Number';
  }
});

console.log();

sub.addEventListener('click', e => {
  smallOne.style.visibility = 'visible';
  smallTwo.style.visibility = 'visible';
  smallThree.style.visibility = 'visible';
  smallFour.style.visibility = 'visible';
  smallFive.style.visibility = 'visible';
  smallOne.innerHTML = 'Minimum five letters required';
  smallTwo.innerHTML = 'Enter a valid email id';
  smallThree.innerHTML = 'Password should be atleast six letters';
  smallFour.innerHTML = 'Password do not match';
  smallFive.innerHTML = 'Enter a valid Mobile Number';
});
