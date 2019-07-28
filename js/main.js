function toggleNavDropdown(){
  let navToggle = document.querySelector('.topnav');
  if(navToggle.className === 'topnav'){
    navToggle.className += ' responsive';
  }else{
    navToggle.className = 'topnav';
  }
}
