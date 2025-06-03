document.addEventListener("DOMContentLoaded", function () {
  const navigationHeader = document.querySelector(".header");
  let routes = document.querySelector(".routes");
  let downArrow = document.querySelector(".down-arrow");
  let isAnimating = false; // Prevent multiple animations
  let lastScrollPosition = 0;

  // Show down arrow after 3 seconds
  setTimeout(() => {
    downArrow.style.opacity = "1";
    downArrow.style.transition = "opacity 1.5s ease-in-out";
  }, 3000);

  // Define the content to replace on scroll
  const newHeaderContent = "site index";
  const newListedItemContent = `
        <div class="about-nav">
        <div class="route">
          <a class="route" href="/about">
            <h4 class="route-num">01 &nbsp; &nbsp; </h4>
            <h4 class="route-title"> On &nbsp;Narrow &nbsp;Margin</h4>
          </a>
        </div>
        <div class="route">
          <a class="route" href="/contact">
            <h4 class="route-num">02 &nbsp; &nbsp; </h4>
            <h4 class="route-title">Contact</h4>
          </a>
        </div>
        <div class="route">
          <a class="route" href="/subscriptions">
            <h4 class="route-num">03 &nbsp; &nbsp; </h4>
            <h4 class="route-title">Subscriptions</h4>
          </a>
        </div>
      </div>
  `;

  function updateContentOnScroll() {
    const scrollPosition = window.scrollY;
    
    // Prevent animation if already animating
    if (isAnimating) return;
    
    // Only trigger if we've actually crossed the threshold
    if ((scrollPosition > 0 && lastScrollPosition === 0) || (scrollPosition === 0 && lastScrollPosition > 0)) {
      isAnimating = true;
      
      // Store current scroll position to restore it after content change
      const currentScroll = window.scrollY;

      if (scrollPosition > 0) {
        // Hide down arrow
        downArrow.style.opacity = "0";
        downArrow.style.transition = "opacity 0.6s ease-in-out";
        
        // Add slide-out class
        navigationHeader.classList.add("fade-out");
        routes.classList.add("slide-out");

        // Wait for slide-out to complete before updating content
        setTimeout(() => {
          navigationHeader.textContent = newHeaderContent;
          routes.innerHTML = newListedItemContent;

          // Re-select the updated routes element
          routes = document.querySelector(".routes");

          // Restore scroll position in case it changed
          window.scrollTo(0, currentScroll);

          // Add slide-in class after updating content
          navigationHeader.classList.remove("fade-out");
          navigationHeader.classList.add("fade-in");
          routes.classList.remove("slide-out");
          routes.classList.add("slide-in");

          // Remove slide-in class after animation completes
          setTimeout(() => {
            navigationHeader.classList.remove("fade-in");
            routes.classList.remove("slide-in");
            isAnimating = false;
          }, 600); // Match the CSS transition duration
        }, 600); // Match the CSS transition duration
      } else {
        // Show down arrow
        downArrow.style.opacity = "1";
        downArrow.style.transition = "opacity 2s ease-in-out";
        
        // Add slide-out class
        navigationHeader.classList.add("fade-out");
        routes.classList.add("slide-out");

        // Wait for slide-out to complete before resetting content
        setTimeout(() => {
          navigationHeader.textContent = "quarterly issues";
          const ogRoutes = `
            <div class="route">
              <h4 class="route-num">01 &nbsp; &nbsp; </h4>
              <h4 class="route-title">August, &nbsp;2025</h4>
            </div>
          `;
          routes.innerHTML = ogRoutes;

          // Re-select the updated routes element
          routes = document.querySelector(".routes");

          // Restore scroll position in case it changed
          window.scrollTo(0, currentScroll);

          // Add slide-in class after resetting content
          navigationHeader.classList.remove("fade-out");
          navigationHeader.classList.add("fade-in");
          routes.classList.remove("slide-out");
          routes.classList.add("slide-in");

          // Remove slide-in class after animation completes
          setTimeout(() => {
            navigationHeader.classList.remove("fade-in");
            routes.classList.remove("slide-in");
            isAnimating = false;
          }, 600); // Match the CSS transition duration
        }, 600); // Match the CSS transition duration
      }
    }
    
    lastScrollPosition = scrollPosition;
  }

  // Debounced scroll handler to prevent excessive calls
  let scrollTimeout;
  function handleScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateContentOnScroll, 10);
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
});
