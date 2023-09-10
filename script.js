// // SLIDE IN AND OTHER ANIMATIONS on page load
// // script.js

// document.addEventListener("DOMContentLoaded", function () {
//     // Get the login card element
//     var loginCard = document.querySelector(".wrapper");
  
//     var animationDuration = 800; 

//     // Function to animate the login card
//     function animateLoginCard(timestamp) {
//       // Calculate the progress of the animation (0 to 1)
//       var progress = Math.min(timestamp / animationDuration, 1); // 1000ms = 1s
  
//       // Apply the animation to the login card
//       loginCard.style.transform = `translateY(${(1 - progress) * -100}%)`;
//       loginCard.style.opacity = progress;
  
//       // Continue the animation until it's complete
//       if (progress < 1) {
//         requestAnimationFrame(animateLoginCard);
//       }
//     }
  
//     // Trigger the animation
//     requestAnimationFrame(animateLoginCard);
//   });
  