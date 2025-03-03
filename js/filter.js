// Update your filter.js file with this code
document.addEventListener('DOMContentLoaded', function() {
  // Get both sidebar and mobile filter elements
  const sidebarLinks = document.querySelectorAll('.sidebar-submenu .tag-link');
  const mobileButtons = document.querySelectorAll('.tag-btn');
  const portfolioItems = document.querySelectorAll('.masonry-item');

  // Check if we're on a portfolio list page or single page
  const isPortfolioListPage = portfolioItems.length > 0;

  // Function to filter items (only works on portfolio list page)
  function filterItems(selectedTag) {
    console.log('Filtering by tag:', selectedTag);

    // Update active state for sidebar links
    sidebarLinks.forEach(link => {
      if (link.getAttribute('data-tag') === selectedTag) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update active state for mobile buttons
    mobileButtons.forEach(btn => {
      if (btn.getAttribute('data-tag') === selectedTag) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Filter the items
    portfolioItems.forEach(item => {
      if (selectedTag === 'all') {
        item.classList.remove('hidden-item');
      } else {
        const itemTags = item.getAttribute('data-tags');
        if (itemTags && itemTags.includes(selectedTag)) {
          item.classList.remove('hidden-item');
        } else {
          item.classList.add('hidden-item');
        }
      }
    });

    // Trigger relayout of masonry grid
    if (typeof $ !== 'undefined' && $('.grid').data('masonry')) {
      setTimeout(() => {
        $('.grid').masonry('layout');
      }, 300);
    }
  }

  // Function to redirect to the portfolio page with a tag parameter
  function redirectToPortfolioWithTag(tag) {
    // Get the base URL for the portfolio/media page
    // This assumes your portfolio is at /media/ - adjust if it's different
    const basePortfolioUrl = '/media/';

    // Redirect to the portfolio page with the tag as a hash parameter
    window.location.href = basePortfolioUrl + '#tag=' + tag;
  }

  // Check for tag parameter in URL when page loads
  function checkUrlForTagParameter() {
    if (isPortfolioListPage && window.location.hash) {
      const hashParams = window.location.hash.substring(1).split('&');
      for (let i = 0; i < hashParams.length; i++) {
        const pair = hashParams[i].split('=');
        if (pair[0] === 'tag' && pair[1]) {
          // Found a tag parameter, apply the filter
          console.log('Found tag in URL:', pair[1]);
          filterItems(decodeURIComponent(pair[1]));
          break;
        }
      }
    }
  }

  // Check for tag parameter when page loads
  checkUrlForTagParameter();

  // Click event for sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedTag = this.getAttribute('data-tag');
      console.log('Sidebar link clicked:', selectedTag);

      if (isPortfolioListPage) {
        // We're on the portfolio list page, filter directly
        filterItems(selectedTag);
        // Update URL hash without triggering a page reload
        history.replaceState(null, null, '#tag=' + selectedTag);
      } else {
        // We're on a single portfolio item page, redirect to the portfolio page with tag
        redirectToPortfolioWithTag(selectedTag);
      }
    });
  });

  // Click event for mobile buttons
  mobileButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');
      console.log('Mobile button clicked:', selectedTag);
      filterItems(selectedTag);
      // Update URL hash without triggering a page reload
      history.replaceState(null, null, '#tag=' + selectedTag);
    });
  });
});
