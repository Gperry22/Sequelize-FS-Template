$("#submitOne").on("click", (event) => {
    event.preventDefault();
    if ($("#numberInput").val().length <= 0 && $("#nameInput").val().length <= 0) {
        alert("Please Enter your Name and your Favorite Number")
    }
    else{
        let user = {
            name: $("#nameInput").val().toLowerCase(),
            number: $("#numberInput").val().toLowerCase()
        }

        console.log(user)

        $.ajax("/api/users",{
            type: "POST",
            data: user
        }).then(
            alert(`"Name and Number added to the Database"`)
        )
        $("#nameInput").val("")
        $("#numberInput").val("")
    }

});


$("#submitTwo").on("click", (event) => {
    event.preventDefault();
    if ($("#nameInputTwo").val().length <= 0) {
        alert("Please Enter your Name")
    }
    else {
        let id = $("#nameInputTwo").val().toLowerCase();
        $.ajax("/api/users/" + id, {
            type: "GET",
            data: id
        }).then(response => {
            console.log(response)
            if(!response){
                alert("There is no user by this name")
            }
            else{
            alert(`${response.name} your favorite number is ${response.number}`)}
        })

        $("#nameInputTwo").val("")

    }
})