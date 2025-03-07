  function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const buttons = document.querySelectorAll('.f_buttons');

    htmlElement.classList.toggle('dark');
    buttons.forEach(button => {
      const icon = button.querySelector('i');
      if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'enabled');
        button.classList.add('dark_button');
        if (icon.classList.contains('bi-moon-stars-fill')) {
          icon.classList.remove('bi-moon-stars-fill');
          icon.classList.add('bi-brightness-high-fill');
        }
      } else {
        localStorage.setItem('dark-mode', 'disabled');
        button.classList.remove('dark_button');
        if (icon.classList.contains('bi-brightness-high-fill')) {
          icon.classList.remove('bi-brightness-high-fill');
          icon.classList.add('bi-moon-stars-fill');
        }
      }
    });
  }
