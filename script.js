

function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const side_bar = document.querySelector('.side-bar');
  const buttons = document.querySelectorAll('.f_buttons');

  htmlElement.classList.toggle('dark');
  side_bar.classList.toggle('menu_dark');
  side_bar.classList.toggle('menu_bright');
  buttons.forEach((button) => {
    const icon = button.querySelector('i');
    if (htmlElement.classList.contains('dark')) {
      button.classList.add('dark_button');
      if (icon.classList.contains('bi-moon-stars-fill')) {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-brightness-high-fill');
      }
    } else {
      button.classList.remove('dark_button');
      if (icon.classList.contains('bi-brightness-high-fill')) {
        icon.classList.remove('bi-brightness-high-fill');
        icon.classList.add('bi-moon-stars-fill');
      }
    }
  });
}

function side_bar() {
  const side_bar = document.querySelector('.side-bar');
  side_bar.classList.toggle('hidden');
}

document.addEventListener("click", function (event) {
  
  const sidebar = document.querySelector('.side-bar');
  const button = document.querySelector('.side_bar_btn');
  if(!sidebar.classList.contains('hidden')){
    // console.log(`not hidden ---> ${sidebar.contains(event.target)}`);
    if (!sidebar.contains(event.target) && !button.contains(event.target)) {
      // console.log("it is not in the sidebar");
      
      sidebar.classList.add("hidden");
    }
  }else{
    sidebar.classList.add("hidden");
    // console.log('hidden');
  }
  
});

