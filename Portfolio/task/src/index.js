document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".open-window");

    //Open popup, loop through each button
    openButtons.forEach( (button, index) => {
        button.addEventListener("click", function () {
            const popupId = index === 0? "popup-template-project-1" : "popup-template-project-2";
            const popup = document.getElementById(popupId)

            // show the popup
            popup.style.display = "block"

            // add click event listener to close the button
            const closeBtn = popup.querySelector("span");
            closeBtn.addEventListener("click", function () {
                popup.style.display = "none";
            })
        })
    })
})

