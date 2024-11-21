

window.addEventListener('DOMContentLoaded', event => {

    
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

   
    navbarShrink();

    
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
    
    
  
  function submitForm() {   
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");
  
    
    if (name.value.trim() === "") {
      
      showErrorMessage("name", "Se  requiere un nombre.");
  
      
      return false;
    }
  
    
    if (email.value.trim() === "") {
      showErrorMessage("email", "Se requiere un Email.");
  
      
      return false;
    }
  
    
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
      
      showErrorMessage("email", "Email no valido.");
  
      
      return false;
    }
  
    
    if (phone.value.trim() === "") {
      
      showErrorMessage("phone", "Se requiere numero el telefono.");
  
      
      return false;
    }
  
    
    if (message.value.trim() === "") {
      
      showErrorMessage("message", "Se requiere un mensaje.");
  
      
      return false;
    }
  
    
    return true; 
  }
  