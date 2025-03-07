// const light_dark = document.getElementById('light_dark');
// light_dark.addEventListener('click', () => {
//   const light_dark = document.getElementById('main_div');  
//   document.body.classList.toggle('dark');
// });
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  console.log(document.documentElement.classList);
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'enabled');
    console.log("dark mode enabled");
    document.querySelectorAll('button').forEach(button => {
      button.classList.add('dark');
    });
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    console.log("dark mode disabled");
  }
}


