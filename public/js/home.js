//Submit button click that takes in the users name and favorite number and sends them to the DB.
$("#submitOne").on("click", (event) => {
    event.preventDefault();
    if ($("#numberInput").val().length <= 0 && $("#nameInput").val().length <= 0) {
        alert("Please Enter your Name and your Favorite Number")
    } else {
        let user = {
            name: $("#nameInput").val().toLowerCase(),
            number: $("#numberInput").val().toLowerCase()
        }
        $.ajax("/api/users", {
            type: "POST",
            data: user
        }).then(
            alert(`"Your Name and Number have been added to the Database"`)
        )
        $("#nameInput").val("")
        $("#numberInput").val("")
    }

});

//Submit button  that takes in the users name and sends ajax request to the DB to determine if there is a user
//and if there is a user the user's favorite number

$("#submitTwo").on("click", (event) => {
    event.preventDefault();
    if ($("#nameInputTwo").val().length <= 0) {
        alert("Please Enter your Name")
    } else {
        let id = $("#nameInputTwo").val().toLowerCase();
        $.ajax("/api/users/" + id, {
            type: "GET",
            data: id
        }).then(response => {
            // console.log(response)
            if (!response) {
                alert("There is no user by this name, please try again")
            } else {
                let responseName = response.name.toLowerCase();
                let userName = responseName.charAt(0).toUpperCase() + responseName.substr(1);
                alert(`${userName} your favorite number is ${response.number} !`)
            }
        })

        $("#nameInputTwo").val("")

    }
})
