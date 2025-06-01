 const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const icon = hamburger.querySelector('i');

    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('open');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
    document.querySelectorAll('.dropdown > a').forEach(dropLink => {
      dropLink.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = this.parentElement;
        const isOpen = parent.classList.contains('open');
        document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
        if (!isOpen) {
          parent.classList.add('open');
        }
      });
    });
    window.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
      }
    });
