// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          // checkValidity(), Returns true if an input element contains valid data.
          if (form.checkValidity() === false) {
            //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
            event.preventDefault()
            //stopPropagation() method prevents propagation of the same event from being called
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())





































  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  //For example, this can be useful when:

//Clicking on a "Submit" button, prevent it from submitting a form


// filter() method creates a new array with all elements that pass the test implemented by the provided function.

//Prototypes are the mechanism by which JavaScript objects inherit features from one another

//The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

// was-validated class which would be added dynamically after validating the form via client-side JavaScript.