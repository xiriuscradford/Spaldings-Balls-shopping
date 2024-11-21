function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    if (name == "") {
      alert("Name must be filled out.");
      return false;
    }
  
    var email = document.forms["contactForm"]["email"].value;
    if (email == "") {
      alert("Email must be filled out.");
      return false;
    }
  
    var phone = document.forms["contactForm"]["phone"].value;
    if (phone == "") {
      alert("Phone number must be filled out.");
      return false;
    }
  
    var suggestions = document.forms["contactForm"]["suggestions"].value;
    if (suggestions == "") {
      alert("Suggestions must be filled out.");
      return false;
    }
  
    return true;
  }