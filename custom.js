const imageContainer = document.querySelector('.image-container');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? -10 : 10;

      imageContainer.style.transform = `translateX(${scrollDirection}%)`;
      lastScrollY = currentScrollY;
    });