// navbar darkness
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
      navbar.classList.add('navbar-dark');
  } else {
      navbar.classList.remove('navbar-dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.list-nav');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth', block: "center", inline: "nearest" });
});

// top button scroll
const btnTop = document.querySelector('.btn-top');
btnTop.addEventListener('click', (event) => {
  const scrollTo = document.querySelector('.home');
  scrollTo.scrollIntoView({ behavior: 'smooth', block: "center", inline: "nearest" });
});


// contact button - show contact
const btnContact = document.querySelector('.btn-contact');
const contactMe = document.querySelector('.btn-me');
btnContact.addEventListener('click', (event) => {
  contactMe.classList.toggle('blind');
});

// share twitter, facebook
const twitter = document.querySelector('.share-twitter');
const facebook = document.querySelector('.share-facebook');

twitter.addEventListener('click', (event) => {
  const sendText = "landing";
  const sendUrl = "https://jeong-ki.github.io/10000hoursRules/"; // URL 랜딩페이지로 수정
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
});
facebook.addEventListener('click', (event) => {
  const sendUrl = "https://jeong-ki.github.io/10000hoursRules/"; // URL 랜딩페이지로 수정
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
});

// press yes or no, open modal
const evaluateForm = document.querySelector('.inp-evaluate');
const evaluateInput = document.querySelector('.inp-evaluate input');
const btnInp = document.querySelector('.btn-inp');

const modalYes = document.querySelector('.modal-yes');
const modalNo = document.querySelector('.modal-no');
const yesBtnClose = document.querySelector('.yesBtn-close');
const noBtnClose = document.querySelector('.noBtn-close');

const openModalYes = () => {
  modalYes.classList.remove("hidden");
};
const openModalNo = () => {
  modalNo.classList.remove("hidden");
};

evaluateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = evaluateInput.value;
  console.log(value);
  if(value.match(/yes/gi) && value.match(/no/gi)) {
    alert("하나만 입력해주세요!");
  } else if(value.match(/yes/gi)) {
    openModalYes();
  } else if(value.match(/no/gi)) {
    openModalNo();
  } else {
    alert("yes 또는 no를 입력해주세요.");
  }
});

yesBtnClose.addEventListener('click', () => {
  modalYes.classList.add("hidden");
});
noBtnClose.addEventListener('click', () => {
  modalNo.classList.add("hidden");
});
