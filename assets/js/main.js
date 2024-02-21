/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

let Somi = document.querySelector(".Somi");
let list = document.querySelector(".list");
let listcard = document.querySelector(".listcard");
let list2 = document.querySelector(".list2");

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SHOW CART ===============*/
const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let Manproduct = [
  {
    id: 1,
    name: "Spirit rose ",
    price: 12.9,
    products_ice: 333,

    image: "im1.png",
  },
  {
    id: 2,
    name: "Spirit tHES ",
    price: 90.23,
    products_ice: 333,

    image: "POEDAGAR.jpg_220x220.jpg_.png",
  },
  {
    id: 3,
    name: "Spirit Mw3 ",
    price: 23.43,
    products_ice: 333,

    image: "img2.png",
  },
  {
    id: 4,
    name: "Fosil adod",
    price: 66.99,
    products_ice: 333,

    image: "PAGANI.jpg_220x220.jpg_.png",
  },
  {
    id: 5,
    name: "Fosil me3",
    price: 55.43,
    products_ice: 333,

    image: "LIGE.jpg_220x220.jpg_ (2).png",
  },

  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "OLEVS.jpg_220x220.jpg_ (3).png",
  },

  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "LIGE-ECG-PPG-Bluetooth-Call-Smart-Watch-Men-2023-Sports-Bracelet-NFC-Waterproof-Custom-Watch-Face.jpg_220x220xz.jpg_.webp",
  },

  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "LIGE-2023-Smart-Watch-For-Men-Women-Gift-Full-Touch-Screen-Sports-Fitness-Watches-Bluetooth-Calls.jpg_220x220xz.jpg_.webp",
  },

  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "POEDAGAR.jpg_220x220.jpg_.webp",
  },
  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "LIGE-2023.jpg_220x220.jpg_.webp",
  },
  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "OLEVS-Men-s-Watches-Business-Dress-Automatic-Mechanical-Watch-for-Man-Tourbillon-Calendar-Moon-Phase-Waterpoorf.jpg_220x220xz.jpg_.webp",
  },
  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "Steel-1-39-Bluetooth-Call-Smart-Watch-Men-Sports-Fitness-Watches-IP68-Waterproof-Smartwatch-for-Xiaomi.jpg_220x220xz.jpg_.webp",
  },
  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "OLEVS-Men-s-Watches-Business-Dress-Automatic-Mechanical-Watch-for-Man-Tourbillon-Calendar-Moon-Phase-Waterpoorf.jpg_220x220xz.jpg_.webp",
  },



  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "For-CITIZEN-Luxury-Men-s-Watch-Quartz-Clock-Glow-Calendar-Waterproof-Multi-functional-Fancy-Automatic-Stainless.jpg_220x220xz.jpg_.webp",
  },
  



  {
    id: 1,
    name: "Spirit ",
    price: 123.99,
    products_ice: 343,

    image: "2023.jpg_220x220.jpg_.webp",
  },
  {
    id: 2,
    name: "Sprimto ",
    price: 72.99,
    products_ice: 122,

    image: "2023-NAVIFORCE.jpg_220x220.jpg_.webp",
  },
  {
    id: 3,
    name: "M3EPROM ",
    price: 154.99,
    products_ice: 435,

    image: "LIGE.jpg_220x220.jpg_.webp",
  },
  {
    id: 4,
    name: "SECORME",
    price: 56.99,
    products_ice: 343,

    image: "2022-WWOOR.jpg_220x220.jpg_.webp",
  },
  {
    id: 5,
    name: "cHOILKIMU",
    price: 80.23,
    products_ice: 232,

    image: "CRRJU.jpg_220x220.jpg_.webp",
  },

  {
    id: 5,
    name: "Duchen ",
    price: 121.43,
    products_ice: 333,
    image: "-.jpg_220x220.jpg_ (2).png",
  },

];

let listprodact = [];
function initApp() {
  Manproduct.forEach((value, key) => {
    let newdiv = document.createElement("div");
    newdiv.classList.add('item');
    newdiv.innerHTML = `
    
    <div class="container-man">
    <article class="products__card  ">

    <img src="assets/img/${value.image}" alt="" class="products__img">
    <h3 class="products__title">${value.name}</h3>
    <span class="products__price"> SAR ${value.price.toLocaleString()} </span>
    <del><span class="products_ice"> $${value.products_ice}</span></del>
    <br>
    <button onclick="addToCart(${key})" class="button new__button7">Add To Cart</button>
    
    </article>
    </div>

    `;
    list.appendChild(newdiv);
  });
}
initApp();

function addToCart(key) {
  if (listprodact[key] == null) {
    listprodact[key] = Manproduct[key];
    listprodact[key].Somi = 1;
  }

  reledcard();
}

function reledcard() {
  listcard.innerHTML = ``;
  let count = 0;
  let totalprice = 0;
  listprodact.forEach((value, key) => {
    totalprice = totalprice + value.price;
    count = count + value.Somi;

    if (value != null) {
      let newdiv = document.createElement("lt");
      newdiv.innerHTML = `
      <div> 
      
      <img src="assets/img/${value.image}" alt="" class="">    
      
  
      </div>

      <div class "titlenamestyle"> 
      
      ${value.name}      
  
      </div>

      
      <div class="somiuyrry"> ${value.price.toLocaleString()} SAR  </div>
  
        
      <button class="redoim" onclick="changethesomi(${key})"><i class="fa-solid fa-trash"></i></button>      
  
      


  

    

      
      `;
      listcard.appendChild(newdiv);
    }
  });

  Somi.innerText = count;
}

function changethesomi(key,){
    delete listprodact[key];
  


  reledcard();
};












