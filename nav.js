function Nav() {
  let navigationSelect = document.querySelector('select');
  if (!navigationSelect) return;
  let selectedValue = navigationSelect.value;

  switch(selectedValue) {
    case 'about':
      window.location.href = 'about.html';
      break;
      case 'b737':
      window.location.href = 'b737.html';
      break;
      case 'b757':
      window.location.href = 'b757.html';
      break;
      case 'home':
      window.location.href = 'index.html';
      break;
      case 'reference':
      window.location.href = 'reference.html';
      break;
      case 'torque':
      window.location.href = 'torque.html';
      break;
  }
}
