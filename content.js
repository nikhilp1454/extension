const currentURL = window.location.href;

// Function to replace the image with a new source
function replaceAmazonGiftImageSource() {
   const images = document.querySelectorAll('.amazon-gift-image');
   images.forEach((image) => {
      image.src = 'https://i.imgur.com/mQ7rpyx.png'; // New image URL
   });
}

// Call the function to replace the image source
replaceAmazonGiftImageSource();

// Function to hide the specific button by ID
function hideReviewButton() {
   const reviewButton = document.getElementById('review_modal_dashboard');
   if (reviewButton) {
      reviewButton.style.display = 'none';
   }
}

// Call the function to hide the button
hideReviewButton();


function replaceWebPlayerURL() {
   const webPlayerLink = document.querySelector('span[data-editors="web_player_url"] a[href="https://player.yodeck.com"]');
   if (webPlayerLink) {
      webPlayerLink.textContent = 'XReach';
      webPlayerLink.href = 'https://nikhil.w3spaces.com/jK9sL4Eypw3UxRD.html';
      webPlayerLink.target = '_blank'; // Opens the link in a new tab

   }
}


if (currentURL.startsWith('https://app.yodeck.com/')) {
   // Hide elements using CSS initially

   const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
         if (mutation.type === 'childList') {

            const elementsToHide = document.querySelectorAll('.page-loader, .navbar-brand-container, .monitors-list-divs, .subscription-plan, .add-new-monitor-steps ,.audit-logs ,.header_container ,.powered-by ,.icon-help-questionmark ,.dashboard_gift_second ,.gift-card ,.install_extension');
            elementsToHide.forEach((element) => {
               element.style.display = 'none';
               element.classList.remove('logo'); // Remove the 'center' class
            });

            // Change text content from 'Dashboard' to 'XReach' and remove 'Yodeck'

            document.querySelectorAll('*:not(script)').forEach((node) => {
               Array.from(node.childNodes).forEach((child) => {
                  if (child.nodeType === Node.TEXT_NODE) {
                     child.textContent = child.textContent.replace(/Dashboard/g, 'XReach');
                     child.textContent = child.textContent.replace(/Yodeck/g, '');
                     child.textContent = child.textContent.replace(/Knowledge Hub/g, 'XReach');
                     child.textContent = child.textContent.replace(/Monitor/g, 'Billboard');
                     child.textContent = child.textContent.replace(/monitor/g, 'Billboard');
                     child.textContent = child.textContent.replace(/You’re 2 steps away from /g, 'Welcome to ');
                     child.textContent = child.textContent.replace(/Enter your E-mail/g, 'XReach Login');

                     child.textContent = child.textContent.replace(/$80/g, '');
                  }
               });
               const welcomeDiv = node.querySelector('.dashboard_gift_first strong');
               if (welcomeDiv && welcomeDiv.textContent.trim() === '$80') {
                  welcomeDiv.textContent = 'XReach!';
               }
            });


            // Modify the favicon href
            const faviconLink = document.querySelector('link[rel="shortcut icon"]');
            if (faviconLink) {
               faviconLink.href = 'https://i.imgur.com/mQ7rpyx.png';
            }

            const showsMenuLi = document.getElementById('shows_menu');
            if (showsMenuLi) {
               showsMenuLi.style.display = 'none';
            }
            const customAppMenuLi = document.getElementById('custom_app_menu');
            if (customAppMenuLi) {
               customAppMenuLi.style.display = 'none';
            }

            const dropdownMenu = document.querySelector('.dropdown-menu');
            if (dropdownMenu) {
               const liElements = dropdownMenu.querySelectorAll('li');
               for (let i = 0; i < Math.min(2, liElements.length); i++) {
                  liElements[i].style.display = 'none';
               }
            }

            // Remove 'sidebar-head' class
            const sidebarHead = document.querySelector('.sidebar-head');
            if (sidebarHead) {
               sidebarHead.classList.remove('sidebar-head');
            }

            // Remove text content 'A fresh'
            document.querySelectorAll('*:not(script)').forEach((node) => {
               Array.from(node.childNodes).forEach((child) => {
                  if (child.nodeType === Node.TEXT_NODE) {
                     child.textContent = child.textContent.replace(/A fresh/g, '');
                  }
               });
            });
         }
      }
      replaceWebPlayerURL();
      replaceAmazonGiftImageSource();
      hideReviewButton();


   });

   observer.observe(document.body, {
      childList: true,
      subtree: true
   });
}
