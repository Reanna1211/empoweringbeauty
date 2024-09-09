// Show Navbar when bars icon is pressed

const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
toggle.onclick = function() {
    nav.classList.toggle('show-nav')
}

// Remove Navbar when a tab has been pressed

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Active Color in header

const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))


//popup text in services

// function myFunction(element) {
//     var popup = document.getElementByClass("popupClassic");
//     popup.querySelector('.popuptext').classList.toggle("show") // popup.classList.toggle("show")
// }



// function myFunction(element) {
//     element.classList.add('clicked'); //Add a class to the clicked box in css
//     element.querySelector('.popuptext').classList.toggle("show") // popup.classList.toggle("show")
// }

// Modify the JavaScript function to handle the mouseleave event
// function myFunction(element) {
//     element.classList.add('clicked'); // Add a class to the clicked box
//     element.querySelector('.popuptext').classList.add('show'); // Show the popup text
// }

// // Add this JavaScript to handle mouseleave event and fade out the popup box
// document.querySelectorAll('.popup').forEach(function(element) {
//     element.addEventListener('mouseleave', function() {
//         this.querySelector('.popuptext').classList.remove('show'); // Hide the popup text
//     });
// });


// Modify the JavaScript function to handle the click event
// function myFunction(element) {
//     element.classList.toggle('clicked'); // Toggle the class on click
//     var popupText = element.querySelector('.popuptext');
//     popupText.classList.toggle('show'); // Toggle the visibility of the popup text

//     // Add event listener for mouseleave to fade out the popup text
//     if (popupText.classList.contains('show')) {
//         element.addEventListener('mouseleave', function() {
//             element.classList.remove('clicked'); // Remove the class to hide the border line
//             popupText.classList.add('noshow'); // Hide the popup text
//         });
//     }
// }


// function myFunction(element) {
//     element.classList.toggle('clicked'); // Toggle the class on click
//     var popupText = element.querySelector('.popuptext');
//     popupText.classList.toggle('show'); // Toggle the visibility of the popup text

//     // Add event listener for mouseleave to fade out the popup text
//     if (popupText.classList.contains('show')) {
//         element.addEventListener('mouseleave', function() {
//             setTimeout(function() {
//                 popupText.classList.remove('show');
//             }, 500);
//         });
            
//     }
// }

//This one the popuptext stays there after mouseleaves
// function myFunction(element) {
//     element.classList.toggle('clicked'); // Toggle the class on click
//     var popupText = element.querySelector('.popuptext');

//     if (popupText.classList.contains('show')) {
//         // Smoothly fade out the popup text
//         popupText.style.opacity = '0'; // Set opacity to 0
//         popupText.addEventListener('transitionend', function() {
//             popupText.classList.remove('show'); // Remove the 'show' class after the transition ends
//         });
//     } else {
//         // Smoothly fade in the popup text
//         popupText.style.opacity = '1'; // Set opacity to 1
//         popupText.classList.add('show'); // Add the 'show' class to trigger the transition
//     }
// }


//This one works but can't click on it again

// function myFunction(element) {
//     element.classList.toggle('clicked'); // Toggle the class on click
//     var popupText = element.querySelector('.popuptext');

//     if (!popupText.classList.contains('show')) {
//         // Smoothly fade in the popup text
//         popupText.style.opacity = '1'; // Set opacity to 1
//         popupText.classList.add('show'); // Add the 'show' class to trigger the transition
//     }

//     // Add event listener for mouseleave to fade out the popup text
//     element.addEventListener('mouseleave', function() {
//         // Smoothly fade out the popup text
//         popupText.style.opacity = '0'; // Set opacity to 0
//         popupText.addEventListener('transitionend', function() {
//             popupText.classList.remove('show'); // Remove the 'show' class after the transition ends
//         });
//     });
// }

// simplified myself and it works!

function myFunction(element) {
    element.classList.toggle('show'); 
    var popupText = element.querySelector('.popuptext');

    if (!popupText.classList.contains('show')) {
        popupText.classList.add('show'); 
    }

    // Add event listener for mouseleave to fade out the popup text

    element.addEventListener('mouseleave', function() {
            setTimeout(function() {
                popupText.classList.remove('show')
            }, 300); // Remove the 'show' class after the transition ends
        });
    };


// Tried with fadeout function
// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');
//     popupText.classList.toggle('show'); 

//     // Add event listener for mouseleave to fade out the popup text
//     function fadeOut() {
//         var opacity = parseFloat(popupText.style.opacity) || 1;
//         var fadeOutInterval = setInterval(function() { 
//             if (opacity > 0) { // Change the condition to check if opacity is greater than 0
//                 opacity -= 0.1;
//                 popupText.style.opacity = opacity;
//             } else {
//                 clearInterval(fadeOutInterval);
//             }
//         }, 50);
//     }

//     popupText.addEventListener('mouseleave', fadeOut);
// }





// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     // Toggle the 'show' class to trigger the fade-in and fade-out effects
//     popupText.classList.toggle('show');

//     // Add event listener for transitionend to remove the 'show' class after the fade-out effect
//     popupText.addEventListener('transitionend', function(event) {
//         if (!popupText.classList.contains('show')) {
//             popupText.style.opacity = '0'; // Ensure opacity is set to 0 after fade-out
//         }
//     });
// }



// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     if (!popupText.classList.contains('show')) {
//         popupText.classList.add('show'); // Show the popup text
//     }

//     // Toggle the class on click
//     element.classList.toggle('clicked');

//     // Add event listener for mouseleave to fade out the popup text
//     if (popupText.classList.contains('show')) {
//         element.addEventListener('mouseleave', function() {
//             popupText.classList.remove('show'); // Hide the popup text
//             popupText.classList.add('noshow'); // Trigger the fade-out animation
//         });
//     }
// }



// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     // Toggle the 'show' class to trigger the fade-in and fade-out effects
//     element.classList.toggle('show');

//     // Add event listener for mouseleave to fade out the popup text
//     element.addEventListener('mouseleave', function() {
//         // Remove the 'show' class after a delay to allow the fade-out effect to complete
//         setTimeout(function() {
//             element.classList.remove('show');
//         }, 500); // Adjust the delay to match the transition duration
//     });
// }


// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');
//     console.log(popupText); // Log the selected element

//     // Toggle the 'show' class to trigger the fade-in and fade-out effects
//     element.classList.toggle('show');

//     // Add event listener for mouseleave to fade out the popup text
//     if (popupText.classList.contains('show')) {
//         element.addEventListener('mouseleave', function() {
//             // Remove the 'show' class after a delay to allow the fade-out effect to complete
//             setTimeout(function() {
//                 element.classList.remove('show');
//             }, 500); // Adjust the delay to match the transition duration
//         });
//     }
// }


// function myFunction(element) {
//     element.classList.toggle('clicked'); // Toggle the class on click
//     var popupText = element.querySelector('.popuptext');

//     if (!popupText.classList.contains('show')) {
//         // Smoothly fade in the popup text
//         popupText.style.opacity = '1'; // Set opacity to 1
//         popupText.classList.add('show'); // Add the 'show' class to trigger the transition
//     } else {
//         // If popup text is already shown, remove the 'clicked' class to allow clicking again
//         element.classList.remove('clicked');

//         // Smoothly fade out the popup text
//         popupText.style.opacity = '0'; // Set opacity to 0
//         popupText.addEventListener('transitionend', function() {
//             popupText.classList.remove('show'); // Remove the 'show' class after the transition ends
//         });
//     }

//     // Add event listener for mouseleave to fade out the popup text
//     element.addEventListener('mouseleave', function() {
//         // Smoothly fade out the popup text
//         popupText.style.opacity = '0'; // Set opacity to 0
//         popupText.addEventListener('transitionend', function() {
//             popupText.classList.remove('show'); // Remove the 'show' class after the transition ends
//         });
//     });
// }

//This one also works even when clicked second time but popup text stays there after mouse leaves on second time 

// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     // Toggle the 'show' class to trigger the visibility of the popup text
//     popupText.classList.toggle('show');

//     // Check if popup text is currently visible
//     var isVisible = popupText.classList.contains('show');

//     // If popup text is not visible and the 'show' class is not present,
//     // add the 'clicked' class to allow clicking again
//     if (!isVisible && !element.classList.contains('show')) {
//         element.classList.add('clicked');
//     } else {
//         element.classList.remove('clicked');
//     }
// }


// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     // Toggle the 'show' class to trigger the visibility of the popup text
//     popupText.classList.toggle('show');

//     // Add event listener for mouseleave to fade out the popup text
//     element.addEventListener('mouseleave', function() {
//         // Smoothly fade out the popup text
//         popupText.style.opacity = '0'; // Set opacity to 0
//         popupText.addEventListener('transitionend', function() {
//             popupText.classList.remove('show'); // Remove the 'show' class after the transition ends
//         });
//     });
// }


// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     // Toggle the 'show' class to trigger the visibility of the popup text
//     popupText.classList.toggle('show');

//     // Smoothly fade out the popup text after a delay
//     if (!popupText.classList.contains('show')) {
//         setTimeout(function() {
//             popupText.style.opacity = '0'; // Set opacity to 0
//         }, 1500); // Adjust the delay to match the transition duration
//     }
// }


// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     // Toggle the 'show' class to trigger the visibility of the popup text
//     popupText.classList.toggle('show');
// }


// function myFunction(element) {
//     var popupText = element.querySelector('.popuptext');

//     // Toggle the 'show' class to trigger the visibility of the popup text
//     popupText.classList.toggle('show');

//     // Add event listener for mouseleave to fade out the popup text
//     element.addEventListener('mouseleave', function() {
//         // Smoothly fade out the popup text
//         popupText.style.opacity = '0'; // Set opacity to 0
//         popupText.addEventListener('transitionend', function() {
//             popupText.classList.remove('show'); // Remove the 'show' class after the transition ends
//         });
//     });
// }






//gallery image slider


var indexValue = 1;
showImg(indexValue);

function side_slide(e) {
    showImg(indexValue += e);
}

function showImg(e) {
    var i;
    const img = document.getElementsByClassName("gallery-img");
    if (e > img.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }

    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}

