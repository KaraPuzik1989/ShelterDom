const pets = [
  {
    id: 0,
    name: "Jennifer",
    img: "img/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 1,
    name: "Sophia",
    img: "img/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 2,
    name: "Woody",
    img: "img/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    id: 3,
    name: "Scarlett",
    img: "img/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 4,
    name: "Katrine",
    img: "img/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 5,
    name: "Timmy",
    img: "img/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    id: 6,
    name: "Freddie",
    img: "img/friedy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 7,
    name: "Charly",
    img: "img/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const mobMenu = document.querySelector(".mob-menu");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const navImg = document.querySelector(".to .qwe");
const img = document.querySelector(".mob-menu img");
const card = document.querySelector(".carusel");
const cards = document.querySelector(".caruselka");

mobMenu.addEventListener("click", () => {
  if (mobMenu.classList.contains("open")) {
    h1.style.display = "block";
    p.style.display = "block";
    img.style.display = "block";
    mobMenu.classList.remove("open");
    navImg.style.transform = "rotate(0deg)";
  } else {
    h1.style.display = "none";
    p.style.display = "none";
    img.style.display = "none";
    mobMenu.classList.add("open");
    navImg.style.transform = "rotate(90deg)";
  }
});

////
document.addEventListener("DOMContentLoaded", () => {
  window.renderCard = (pets) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("ca");
    cardElement.innerHTML = `
      <img src="${pets.img}" alt="${pets.name}" />
      <p>${pets.name}</p>
      <button id="${pets.name}" class="c" data-pet="${pets.id}">Learn more</button>
    `;
    return cardElement;
  };

  const threePets = [...pets].splice(0, 3);
  threePets.forEach((item) => {
    card.insertAdjacentElement("beforeend", window.renderCard(item));
  });
});

////

document.addEventListener("DOMContentLoaded", () => {
  window.renderCards = (pets) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("ca");
    cardElement.innerHTML = `
    <img src="${pets.img}" alt="${pets.name}" />
    <p>${pets.name}</p>
    <button id="${pets.name}" class="c" data-pet="${pets.id}">Learn more</button>
    
  `;
    return cardElement;
  };
  const eightPets = [...pets].splice(0, 8);
  eightPets.forEach((item) => {
    cards.insertAdjacentElement("beforeend", window.renderCard(item));
  });
});

////

const renderPopup = (pet) => {
  const {
    img,
    name,
    description,
    age,
    id,
    type,
    breed,
    inoculations,
    diseases,
    parasites,
    close
  } = pet;

  const inoculationsList = inoculations.join(", ") || "none";
  const diseasesList = diseases.join(", ") || "none";
  const parasitesList = parasites.join(", ") || "none";

  const popupHtml = `
        <div id="${name}" class="popup">
          <div class="popup_content">
            <div class="popup_dogjen"><img src="${img}" alt="${name}"></div>
            <div class="popup_dogcontent">
              <h3>${name}</h3>
              <h4>${type} ${breed}</h4>
              <p>${description}</p>
              <ul>
                <li><b>Age:</b> ${age}</li>
                <li><b>Inoculations:</b> ${inoculationsList}</li>
                <li><b>Diseases:</b> ${diseasesList}</li>
                <li><b>Parasites:</b> ${parasitesList}</li>
              </ul>
            </div>
            <button class="${close}"><img src="img/modal_close_button.png" alt="close"></button>
          </div>
        </div>
      `;
  return popupHtml;
};


const showPopup = (event) => {
  const petName = event.target.id;
  const pet = pets.find((item) => item.name === petName);
  if (pet) {
    const popupHtml = renderPopup(pet);
    const popupContainer = document.querySelector(".popupcont");
    popupContainer.innerHTML = popupHtml;
    popupContainer.style.display = "block";
  }
};

const closePopup = () => {
  const popupContainer = document.querySelector(".popupcont");
  popupContainer.style.display = "none";
};

const cardButtons = document.querySelectorAll(".c");
cardButtons.forEach((button) => {
  button.addEventListener("click", showPopup);
});

const closePopupButton = document.querySelector("body");
closePopupButton.addEventListener("click", closePopup);

/////

/*const closeKatrine = document.querySelector(".popup_closed_kat");
const butKatrine = document.querySelector("#Katrine");
const popupKat = document.querySelector("#popupKat");
const bodyKat = document.querySelector("body");

butKatrine.addEventListener("click", (event) => {
  if (popupKat.classList.contains("opened")) {
    bodyKat.style.overflow = "auto";
    butKatrine.classList.remove("open");
    popupKat.style.transform = "translateY(-100%)";
    popupKat.classList.remove("opened");
  } else {
    popupKat.classList.add("popup_opened");
    popupKat.style.transform = "translateY(0%)";
    butKatrine.classList.add("open");
    bodyKat.style.overflow = "hidden";
    popupKat.classList.add("opened");
  }
});

closeKatrine.addEventListener("click", () => {
  popupKat.style.transform = "translateY(-100%)";
  popupKat.classList.remove("opened");
  bodyKat.style.overflow = "auto";
  butKatrine.classList.remove("open");
});

popupKat.addEventListener("click", (event) => {
  if (!event.target.closest(".popup_content")) {
    popupKat.style.transform = "translateY(-100%)";
    popupKat.classList.remove("opened");
    bodyKat.style.overflow = "auto";
    butKatrine.classList.remove("open");
  }
});

////

const closeWoody = document.querySelector(".popup_closed_woo");
const butWoody = document.querySelector("#Woody");
const popupWoo = document.querySelector("#popupWoo");
const bodyWoo = document.querySelector("body");

butWoody.addEventListener("click", (event) => {
  if (popupWoo.classList.contains("opened")) {
    bodyWoo.style.overflow = "auto";
    butWoody.classList.remove("open");
    popupWoo.style.transform = "translateY(-100%)";
    popupWoo.classList.remove("opened");
  } else {
    popupWoo.classList.add("popup_opened");
    popupWoo.style.transform = "translateY(0%)";
    butWoody.classList.add("open");
    bodyWoo.style.overflow = "hidden";
    popupWoo.classList.add("opened");
  }
});

closeWoody.addEventListener("click", () => {
  popupWoo.style.transform = "translateY(-100%)";
  popupWoo.classList.remove("opened");
  bodyWoo.style.overflow = "auto";
  butWoody.classList.remove("open");
});

popupWoo.addEventListener("click", (event) => {
  if (!event.target.closest(".popup_content")) {
    popupWoo.style.transform = "translateY(-100%)";
    popupWoo.classList.remove("opened");
    bodyWoo.style.overflow = "auto";
    butWoody.classList.remove("open");
  }
});

////

const closeSophia = document.querySelector(".popup_closed_sop");
const butSophia = document.querySelector("#Sophia");
const popupSop = document.querySelector("#popupSop");
const bodySop = document.querySelector("body");

butSophia.addEventListener("click", (event) => {
  if (popupSop.classList.contains("opened")) {
    bodySop.style.overflow = "auto";
    butSophia.classList.remove("open");
    popupSop.style.transform = "translateY(-100%)";
    popupSop.classList.remove("opened");
  } else {
    popupSop.classList.add("popup_opened");
    popupSop.style.transform = "translateY(0%)";
    butSophia.classList.add("open");
    bodySop.style.overflow = "hidden";
    popupSop.classList.add("opened");
  }
});

closeSophia.addEventListener("click", () => {
  popupSop.style.transform = "translateY(-100%)";
  popupSop.classList.remove("opened");
  bodySop.style.overflow = "auto";
  butSophia.classList.remove("open");
});

popupSop.addEventListener("click", (event) => {
  if (!event.target.closest(".popup_content")) {
    popupSop.style.transform = "translateY(-100%)";
    popupSop.classList.remove("opened");
    bodySop.style.overflow = "auto";
    butSophia.classList.remove("open");
  }
});

////

const closeTimmy = document.querySelector(".popup_closed_tim");
const butTimmy = document.querySelector("#Timmy");
const popupTim = document.querySelector("#popupTim");
const bodyTim = document.querySelector("body");

butTimmy.addEventListener("click", (event) => {
  if (popupTim.classList.contains("opened")) {
    bodyTim.style.overflow = "auto";
    butTimmy.classList.remove("open");
    popupTim.style.transform = "translateY(-100%)";
    popupTim.classList.remove("opened");
  } else {
    popupTim.classList.add("popup_opened");
    popupTim.style.transform = "translateY(0%)";
    butTimmy.classList.add("open");
    bodyTim.style.overflow = "hidden";
    popupTim.classList.add("opened");
  }
});

closeTimmy.addEventListener("click", () => {
  popupTim.style.transform = "translateY(-100%)";
  popupTim.classList.remove("opened");
  bodyTim.style.overflow = "auto";
  butTimmy.classList.remove("open");
});

popupTim.addEventListener("click", (event) => {
  if (!event.target.closest(".popup_content")) {
    popupTim.style.transform = "translateY(-100%)";
    popupTim.classList.remove("opened");
    bodyTim.style.overflow = "auto";
    butTimmy.classList.remove("open");
  }
});

////

const closeCharly = document.querySelector(".popup_closed_cha");
const butCharly = document.querySelector("#Charly");
const popupCha = document.querySelector("#popupCha");
const bodyCha = document.querySelector("body");

butCharly.addEventListener("click", (event) => {
  if (popupCha.classList.contains("opened")) {
    bodyCha.style.overflow = "auto";
    butCharly.classList.remove("open");
    popupCha.style.transform = "translateY(-100%)";
    popupCha.classList.remove("opened");
  } else {
    popupCha.classList.add("popup_opened");
    popupCha.style.transform = "translateY(0%)";
    butCharly.classList.add("open");
    bodyCha.style.overflow = "hidden";
    popupCha.classList.add("opened");
  }
});

closeCharly.addEventListener("click", () => {
  popupCha.style.transform = "translateY(-100%)";
  popupCha.classList.remove("opened");
  bodyCha.style.overflow = "auto";
  butCharly.classList.remove("open");
});

popupCha.addEventListener("click", (event) => {
  if (!event.target.closest(".popup_content")) {
    popupCha.style.transform = "translateY(-100%)";
    popupCha.classList.remove("opened");
    bodyCha.style.overflow = "auto";
    butCharly.classList.remove("open");
  }
});

////

const closeScarlet = document.querySelector(".popup_closed_sca");
const butScarlet = document.querySelector("#Scarlet");
const popupSca = document.querySelector("#popupSca");
const bodySca = document.querySelector("body");

butScarlet.addEventListener("click", (event) => {
  if (popupSca.classList.contains("opened")) {
    bodySca.style.overflow = "auto";
    butScarlet.classList.remove("open");
    popupSca.style.transform = "translateY(-100%)";
    popupSca.classList.remove("opened");
  } else {
    popupSca.classList.add("popup_opened");
    popupSca.style.transform = "translateY(0%)";
    butScarlet.classList.add("open");
    bodySca.style.overflow = "hidden";
    popupSca.classList.add("opened");
  }
});

closeScarlet.addEventListener("click", () => {
  popupSca.style.transform = "translateY(-100%)";
  popupSca.classList.remove("opened");
  bodySca.style.overflow = "auto";
  butScarlet.classList.remove("open");
});

popupSca.addEventListener("click", (event) => {
  if (!event.target.closest(".popup_content")) {
    popupSca.style.transform = "translateY(-100%)";
    popupSca.classList.remove("opened");
    bodySca.style.overflow = "auto";
    butScarlet.classList.remove("open");
  }
});

////

const closeFreddie = document.querySelector(".popup_closed_fre");
const butFreddie = document.querySelector("#Freddie");
const popupFre = document.querySelector("#popupFre");
const bodyFre = document.querySelector("body");

butFreddie.addEventListener("click", (event) => {
  if (popupFre.classList.contains("opened")) {
    bodyFre.style.overflow = "auto";
    butFreddie.classList.remove("open");
    popupFre.style.transform = "translateY(-100%)";
    popupFre.classList.remove("opened");
  } else {
    popupFre.classList.add("popup_opened");
    popupFre.style.transform = "translateY(0%)";
    butFreddie.classList.add("open");
    bodyFre.style.overflow = "hidden";
    popupFre.classList.add("opened");
  }
});

closeFreddie.addEventListener("click", () => {
  popupFre.style.transform = "translateY(-100%)";
  popupFre.classList.remove("opened");
  bodyFre.style.overflow = "auto";
  butFreddie.classList.remove("open");
});

popupFre.addEventListener("click", (event) => {
  if (!event.target.closest(".popup_content")) {
    popupFre.style.transform = "translateY(-100%)";
    popupFre.classList.remove("opened");
    bodyFre.style.overflow = "auto";
    butFreddie.classList.remove("open");
  }
});

/*const carouselContainer = document.querySelector('.carusel');
const carouselSlides = document.querySelectorAll('.carusele-slide');
const prevBtn = document.querySelector('.arrowleft');
const nextBtn = document.querySelector('.arrowright');
let currentIndex = 0;
const pSophia = document.querySelector("#pSophia");
const slidesToShow = 3;


function moveCarousel(direction) {
  if (direction === 'prevBtn') {
    currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
  } else {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    pSophia.style.display = "block";
  }

  const slideWidth = carouselSlides[0].clientWidth;
  const translateXValue = -currentIndex * slideWidth;
  carouselContainer.style.transform = `translateX(${translateXValue}px)`;
}


prevBtn.addEventListener('click', () => moveCarousel('prev'));
nextBtn.addEventListener('click', () => moveCarousel('next')); */
