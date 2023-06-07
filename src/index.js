const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
//----IMAGES----\\
//Assign variables
const logoImg = document.querySelector('#logo-img');
const ctaImg = document.querySelector('#cta-img');
const accentImg = document.querySelector('#middle-img');
//Changes src of each img.
logoImg.src = siteContent['images']['logo-img'];
ctaImg.src = siteContent['images']['cta-img'];
accentImg.src = siteContent['images']['accent-img'];
//----END----\\



//----NAVBAR && CTA----\\
//Assign variables
const navBar = document.querySelector('nav');
const header = document.querySelector('h1');
const getStartedBtn = document.querySelector('button');

header.textContent = siteContent['cta']['h1'];
getStartedBtn.textContent = siteContent['cta']['button'];
//----END----\\



//----MAIN CONTENT----\\

//----END-----\\



//----FOOTER && CONTACT----\\
//--Contact
//Assign variables
const contactHeader = document.querySelector('.contact h4');
const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
//Change text content
contactHeader.textContent = siteContent['contact']['contact-h4'];
contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];
//--Footer
//Assign variables
const footer = document.querySelector('footer');
//Add class and textcontent
footer.classList.add('bold');
footer.textContent = siteContent['footer']['copyright'];
//----END----\\