let icon = document.getElementsByClassName("icon")[0];
let nav = document.querySelectorAll("nav")[0];
const myList = document.getElementById("cv");
let footer = document.getElementsByClassName("footer")[0];
// const url = "./cv.json"
let btn = document.getElementById("scroll-btn");
const spinner = document.getElementById("spinner");
const cvTitle = document.getElementById("h1Title");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.name = "sunny"
    }
    else {
        icon.name = "moon"
    }
})

// Checking if the window is scrolling and if so we call function that checks how much we scrolled down
window.onscroll = () => {
    scrolling()
};

// If we scroll down for specific amount, the button shows up. Change the display to "block"
function scrolling() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// If the button is pressed this function gets called and it resets the scrolling to 0
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, IE, Firefox and Opera
}

// Rendering CV 
function render(a, b = '') {
    const myRenderedCvItem = document.createElement('section')
    myRenderedCvItem.innerHTML = `<strong class="heading-cv">${a}</strong><p class="describtion-cv">${b}</p>`;
    myList.appendChild(myRenderedCvItem);
}

// Rendering the Title of each section for exemple Employment, Education and Driver Licenses
function renderTitle(a) {
    const title = document.createElement('p')
    title.innerHTML = `<h2 class="title-cv">${a}</h2>`;
    myList.appendChild(title);
}

// API Function
const api = async () => {
    spinner.removeAttribute('hidden');
    const request = new Request("../cv.json");

    const response = await fetch(request);

    const cvObj = await response.json();

    const cvKeys = Object.keys(cvObj);

    cvTitle.removeAttribute('hidden');

    renderTitle(cvKeys[0])
    cvObj.Employment.forEach(obj => {
        render(obj.heading, obj.describtion)
    });

    renderTitle(cvKeys[1])
    cvObj.Education.forEach(obj => {
        render(obj.heading, obj.describtion)
    });

    renderTitle(cvKeys[2])
    cvObj.License.forEach(obj => {
        render(obj.heading, obj.describtion)
    });

    nav.removeAttribute("hidden")
    footer.removeAttribute('hidden');
    spinner.setAttribute('hidden', '');
    return cvObj;
}

api();
