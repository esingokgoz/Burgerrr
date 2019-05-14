$(function () {

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      eaten: '0'
    };
    console.log("this is the new burger: " + newBurger);

    if (newBurger.name === "") {
      alert("Sorry! You can't add a burger without a burger!");
    }
    else {
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }


  });

  $(".eat").on("click", function (event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten") === false;

    var newEatenState = {
      eaten: newEaten
    };
    console.log('id:' + id)
    console.log('eaten:' + newEatenState.eaten)

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function () {
        console.log("changed eaten state to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})