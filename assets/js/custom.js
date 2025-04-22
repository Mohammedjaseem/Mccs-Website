(function ($) {
  "use strict";
  $(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });
  $(window).on("load", function () {
    $(".preloader-area").fadeOut();
  });
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  AOS.init({
    disable: function () {
      var maxWidth = 900;
      return window.innerWidth < maxWidth;
    },
  });
  $(".others-option-for-responsive .dot-menu").on("click", function () {
    $(".others-option-for-responsive .container .container").toggleClass(
      "active"
    );
  });
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    items: 1,
    thumbs: true,
    thumbsPrerendered: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
  });
  $(".hero-slider2").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    thumbs: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
  });
  $(".courses-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    thumbs: false,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".campus-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    thumbs: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
  $(".campus-slider2").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    thumbs: false,
    dots: false,
    center: true,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".events-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    thumbs: false,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".news-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    thumbs: false,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".health-care-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    thumbs: false,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(document).ready(function () {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 100,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        event.preventDefault();
      }
    });

  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }

  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter, #validator-newsletter-2").addClass("hide");
    }, 4000);
  }

  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }

  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter, #validator-newsletter-2")
      .removeClass()
      .addClass(msgClasses)
      .text(msg);
  }
  $(".input-counter").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find(".plus-btn"),
      btnDown = spinner.find(".minus-btn"),
      min = input.attr("min"),
      max = input.attr("max");
    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  function makeTimer() {
    var endTime = new Date("September 20, 2023 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 0);
  $(".newsletter-form").ajaxChimp({
    url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    callback: callbackFunction,
  });
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: "0",
      },
      500
    );
  });
  try {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  } catch (err) {}
})(jQuery);
try {
  function setTheme(themeName) {
    localStorage.setItem("sanu_theme", themeName);
    document.documentElement.className = themeName;
  }

  function toggleTheme() {
    if (localStorage.getItem("sanu_theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  }
  (function () {
    if (localStorage.getItem("sanu_theme") === "theme-dark") {
      setTheme("theme-dark");
      document.getElementById("slider").checked = false;
    } else {
      setTheme("theme-light");
      document.getElementById("slider").checked = true;
    }
  })();
} catch (err) {}

// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("globalSearch");
  const searchResults = document.getElementById("searchResults");

  // Define search index with all pages and keywords
  const searchIndex = [
    {
      title: "Home",
      url: "index.html",
      keywords: ["home", "main", "welcome", "mccs", "college"],
    },
    {
      title: "About Overview",
      url: "about-overview.html",
      keywords: ["about", "overview", "college info", "institution"],
    },
    {
      title: "Vision & Mission",
      url: "about-vision-mission.html",
      keywords: ["vision", "mission", "goals", "objectives"],
    },
    {
      title: "NAAC Qualitative",
      url: "naac-qualitative.html",
      keywords: ["naac", "qualitative", "accreditation", "quality"],
    },
    {
      title: "NAAC Quantitative",
      url: "naac-quantitative.html",
      keywords: ["naac", "quantitative", "metrics", "data"],
    },
    {
      title: "Principal",
      url: "about-principal.html",
      keywords: ["principal", "director", "head", "leadership"],
    },
    {
      title: "Board of Directors",
      url: "about-board.html",
      keywords: ["board", "directors", "management", "governance"],
    },
    {
      title: "Admission Process",
      url: "admission-process.html",
      keywords: ["admission", "process", "apply", "enroll", "join"],
    },
    {
      title: "Courses Offered",
      url: "courses.html",
      keywords: ["courses", "programs", "degrees", "bsc", "ba", "bca", "study"],
    },
    {
      title: "Academic Programmes",
      url: "academic-programmes.html",
      keywords: ["academic", "programmes", "curriculum", "syllabus"],
    },
    {
      title: "Food Technology",
      url: "food-technology.html",
      keywords: ["food", "technology", "bsc food", "nutrition", "food science"],
    },
    {
      title: "Biochemistry",
      url: "biochemistry.html",
      keywords: ["biochemistry", "bsc biochemistry", "molecular biology"],
    },
    {
      title: "BA English",
      url: "english.html",
      keywords: ["english", "ba english", "literature", "language"],
    },
    {
      title: "Computer Application",
      url: "computer-application.html",
      keywords: ["computer", "science", "bca", "programming", "software"],
    },
    {
      title: "Microbiology",
      url: "microbiology.html",
      keywords: ["microbiology", "bsc microbiology", "bacteria", "viruses"],
    },
    {
      title: "Psychology",
      url: "psychology.html",
      keywords: ["psychology", "bsc psychology", "mind", "behavior"],
    },
    {
      title: "Facilities",
      url: "facilities.html",
      keywords: ["facilities", "infrastructure", "labs", "library", "campus"],
    },
    {
      title: "Academic Calendar",
      url: "academic-calendar.html",
      keywords: ["calendar", "schedule", "dates", "academic year"],
    },
    {
      title: "Library",
      url: "library.html",
      keywords: ["library", "books", "resources", "study"],
    },
    {
      title: "Achievements",
      url: "achievements.html",
      keywords: ["achievements", "awards", "success", "recognition"],
    },
    {
      title: "MCCS News",
      url: "news-page.html",
      keywords: ["news", "updates", "announcements", "events"],
    },
    {
      title: "Events",
      url: "events.html",
      keywords: ["events", "programs", "functions", "activities"],
    },
    {
      title: "Clubs",
      url: "clubs.html",
      keywords: ["clubs", "associations", "groups", "student activities"],
    },
    {
      title: "Women Cell",
      url: "women-cell.html",
      keywords: ["women", "cell", "empowerment", "gender"],
    },
    {
      title: "Gallery",
      url: "gallery.html",
      keywords: ["gallery", "photos", "images", "pictures"],
    },
    {
      title: "Careers",
      url: "careers.html",
      keywords: ["careers", "jobs", "opportunities", "placements"],
    },
    {
      title: "Contact Us",
      url: "contact-us.html",
      keywords: ["contact", "address", "phone", "email", "location"],
    },
  ];

  // Search function
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.style.display = "none";
      return;
    }

    // Find matches in titles and keywords
    const results = searchIndex
      .filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const keywordMatch = item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || keywordMatch;
      })
      .slice(0, 8); // Limit to 8 results

    displayResults(results, query);
  });

  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML =
        '<div class="no-results">No results found</div>';
      searchResults.style.display = "block";
      return;
    }

    let html = "";
    results.forEach((result) => {
      // Highlight matching parts of the title
      const highlightedTitle = highlightMatches(result.title, query);
      html += `
                    <a href="${result.url}">
                        <h4>${highlightedTitle}</h4>
                        <p>${highlightMatches(
                          result.keywords.slice(0, 3).join(", "),
                          query
                        )}</p>

                    </a>
                `;
    });

    searchResults.innerHTML = html;
    searchResults.style.display = "block";
  }

  function highlightMatches(text, query) {
    if (!query) return text;

    const regex = new RegExp(query, "gi");
    return text.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
  }

  // Close results when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-container")) {
      searchResults.style.display = "none";
    }
  });

  // Show results when search input is focused
  searchInput.addEventListener("focus", function () {
    if (this.value.trim().length >= 2) {
      searchResults.style.display = "block";
    }
  });
});

