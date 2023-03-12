const form = document.querySelector("myForm");

form.addEventListener("submit", function(event) {
    const input =  document.querySelectorAll('input');
    const successMsg = document.getElementById("successMsg");
    

    //loop through the input elements

    for (let i = 0; i < input.length; i++) {
        //check if the input element is an empty string
        if (input[i].value === '') {
            // print an error message
            console.error('Please fill out all fields');
            
            //prevent form submission

            event.preventDefault();
        } else {
            // If the form is valid, show the success message
            successMsg.style.display = "block";
          }
    }

});
