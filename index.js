document.addEventListener("DOMContentLoaded", function () {
  const navigationHeader = document.querySelector(".header");
  const issueImage = document.querySelector('.issue-image-container');
  let routes = document.querySelector(".routes");
  let downArrow = document.querySelector(".down-arrow");
  let isAnimating = false;
  let currentSection = 0; // 0 = top section, 1 = bottom section

  // Initial setup
  downArrow.style.opacity = "0";
  downArrow.style.transition = "opacity 1.5s ease-in-out";

  setTimeout(() => {
    if (currentSection === 0) {
      downArrow.style.opacity = "1";
    }
  }, 2300);

  // Define the content to replace on scroll
  const newHeaderContent = "site index";
  const newListedItemContent = `
    <div class="about-nav">
      <div class="route">
        <a class="route" href="/about">
          <h4 class="route-num">01 &nbsp; &nbsp; </h4>
          <h4 class="route-title"> On Narrow Margin</h4>
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
      <div class="route">
        <a class="route" href="/donate">
          <h4 class="route-num">04 &nbsp; &nbsp; </h4>
          <h4 class="route-title">Donate</h4>
        </a>
      </div>
    </div>
  `;

  function updateContent() {
    if (isAnimating) return;
    isAnimating = true;
    
    if (currentSection === 0) {
        // Scrolling down to show site index
        downArrow.style.opacity = "0";
        navigationHeader.classList.add("fade-out");
        issueImage.classList.add("fade-out");
        routes.classList.add("slide-out");
    
        setTimeout(() => {
            navigationHeader.textContent = newHeaderContent;
            routes.innerHTML = newListedItemContent;
            
            // Force reflow to ensure classes are applied
            void routes.offsetWidth;
            
            navigationHeader.classList.remove("fade-out");
            navigationHeader.classList.add("fade-in");
            routes.classList.remove("slide-out");
            routes.classList.add("slide-in");
            
            currentSection = 1;
            
            // Reset animation state after transition
            setTimeout(() => {
                navigationHeader.classList.remove("fade-in");
                routes.classList.remove("slide-in");
                isAnimating = false;
            }, 600);
        }, 600);
    } else {
        // Scrolling up to show quarterly issues
        setTimeout(() => {
            downArrow.style.opacity = "1";
        }, 2300);
        
        navigationHeader.classList.add("fade-out");
        routes.classList.add("slide-out");
        
        // Make sure the image is visible before starting fade-in
        issueImage.style.display = 'block';
        void issueImage.offsetWidth; // Force reflow
        issueImage.classList.remove("fade-out");
        issueImage.classList.add("fade-in");
    
        setTimeout(() => {
            navigationHeader.textContent = "";
            routes.innerHTML = `
                <a class="route" href="/01">
                    <h4 class="route-num"></h4>
                    <h4 class="route-title"></h4>
                </a>
            `;
            
            // Force reflow to ensure classes are applied
            void routes.offsetWidth;
            
            navigationHeader.classList.remove("fade-out");
            navigationHeader.classList.add("fade-in");
            routes.classList.remove("slide-out");
            routes.classList.add("slide-in");
            
            currentSection = 0;
            
            // Reset animation state after transition
            setTimeout(() => {
                navigationHeader.classList.remove("fade-in");
                routes.classList.remove("slide-in");
                isAnimating = false;
            }, 600);
        }, 600);
    }
}

  // Handle wheel event for smooth scrolling
  let isScrolling = false;
  window.addEventListener('wheel', (e) => {
    if (isScrolling || isAnimating) {
      e.preventDefault();
      return;
    }

    isScrolling = true;
    updateContent();
    
    // Prevent rapid firing
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }, { passive: false });

  // Handle touch events for mobile
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isScrolling || isAnimating) {
      e.preventDefault();
      return;
    }

    const touchY = e.touches[0].clientY;
    const diff = touchStartY - touchY;

    // Only trigger on significant vertical movement
    if (Math.abs(diff) > 50) {
      isScrolling = true;
      updateContent();
      
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }
  }, { passive: false });
});
