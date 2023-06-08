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
//==NavBar
//Assign variables
const navBar = document.querySelector('nav');
const navBarLinks = document.querySelectorAll('nav a');
const navBarText = Object.values(siteContent.nav);

navBarLinks.forEach((link, i) => {
  link.classList.add('italic')
  link.textContent = navBarText[i];
});
//--CTA
//Assign variables
const header = document.querySelector('.cta h1');
const getStartedBtn = document.querySelector('.cta button');
//Change text content
header.textContent = siteContent['cta']['h1'];
getStartedBtn.textContent = siteContent['cta']['button'];


//----END----\\



//----MAIN CONTENT----\\
//--Top Content
//Assign variables
const topContent = document.querySelector('.top-content')
const headersTop = topContent.querySelectorAll('h4');
const textTop = topContent.querySelectorAll('p');
//Change text content
headersTop[0].textContent = siteContent['main-content']['features-h4'];
textTop[0].textContent = siteContent['main-content']['features-content'];
headersTop[1].textContent = siteContent['main-content']['about-h4'];
textTop[1].textContent = siteContent['main-content']['about-content'];

//--Bottom Content
//Assign variables
const bottomContent = document.querySelector('.bottom-content');
const headersBottom = bottomContent.querySelectorAll('h4');
const textBottom = bottomContent.querySelectorAll('p');
//Change text content
headersBottom[0].textContent = siteContent['main-content']['services-h4'];
textBottom[0].textContent = siteContent['main-content']['services-content'];
headersBottom[1].textContent = siteContent['main-content']['product-h4'];
textBottom[1].textContent = siteContent['main-content']['product-content'];
headersBottom[2].textContent = siteContent['main-content']['vision-h4'];
textBottom[2].textContent = siteContent['main-content']['vision-content'];
//----END-----\\



//----CONTACT && FOOTER----\\
//--Contact
//Assign variables
const contactSection = document.querySelector('.contact');
const contactHeader = contactSection.querySelector('h4');
const contactAddress = contactSection.querySelector('p');
const contactPhone = contactSection.querySelector('p:nth-of-type(2)');
const contactEmail = contactSection.querySelector('p:nth-of-type(3)');
//Change text content
contactHeader.textContent = siteContent['contact']['contact-h4'];
contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];

//--Footer
//Assign variables
const footer = document.querySelector('footer a');
//Add class and textcontent
footer.classList.add('bold');
footer.textContent = siteContent['footer']['copyright'];
//----END----\\