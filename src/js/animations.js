const content = document.querySelector('.content');
  const item = document.querySelector('.profile');
  
  content.onscroll = () => {myFunction()};

  function myFunction() {
    if (content.scrollTop > 135) {
      item.classList.add('scrolled');
    } else {
      item.classList.remove('scrolled');
    }
  }

  window.onscroll = () => {myFunction2()};

  const container = document.body;
  
  function myFunction2() {
    if (container.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      item.classList.add('scrolled2');
    } else {
      item.classList.remove('scrolled2');
    }
    
  }