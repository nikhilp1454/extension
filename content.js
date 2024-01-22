const currentURL = window.location.href;

const XREACH = 'XReach';
const BILLBOARD = 'Billboard';
function hideInitialElements() {
    const initialHiddenElements = document.createElement('style');
    initialHiddenElements.textContent = `
    /* CSS to hide elements */
    .page-loader,
    .navbar-brand-container,
    .monitors-list-divs,
    .center /* Add other classes you want to hide initially */ {
      display: none !important;
    }
  `;
    document.head.appendChild(initialHiddenElements);
}



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
    hideInitialElements();

    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {

                const elementsToHide = document.querySelectorAll('.page-loader, .navbar-brand-container, .monitors-list-divs, .subscription-plan, .add-new-monitor-steps ,.audit-logs ,.header_container ,.powered-by ,.icon-help-questionmark ,.dashboard_gift_second ,.gift-card ,.install_extension');
                elementsToHide.forEach((element) => {
                    element.style.display = 'none';
                    element.classList.remove('logo'); // Remove the 'center' class
                });

                // Change text content from 'Dashboard' to 'XReach' and remove 'Yodeck'
		
                document.querySelectorAll("*:not(script)").forEach((node) => {
          Array.from(node.childNodes).forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
              child.textContent = child.textContent
                .replace(/Dashboard/g, XREACH)
                .replace(/Yodeck/g, "")
                .replace(/Knowledge Hub/g, XREACH)
                .replace(/Monitor/g, BILLBOARD)
                .replace(/monitor/g, BILLBOARD)
                .replace(/You’re 2 steps away from /g, "Welcome to ")
                .replace(/Enter your E-mail/g, "XReach Login")
                .replace(/\$80/g, "");
            }
          });
          const welcomeDiv = node.querySelector(".dashboard_gift_first strong");
          if (welcomeDiv && welcomeDiv.textContent.trim() === "$80") {
            welcomeDiv.textContent = XREACH;
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

                // Find and replace the specific image source URL
                

                // Remove 'sidebar-head' class
                const sidebarHead = document.querySelector('.sidebar-head');
                if (sidebarHead) {
                    sidebarHead.classList.remove('sidebar-head');
                }

                
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
