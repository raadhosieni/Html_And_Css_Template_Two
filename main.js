const shuffles = document.querySelectorAll(".shuffle li");
const imagesContainer = document.querySelector(".imgs-container");
const images = document.querySelectorAll(".imgs-container .box");
const changeBgLeft = document.querySelector(".landing .left");
const changeBgRight = document.querySelector(".landing .right");
const landingBullets = document.querySelectorAll(".landing ul > li");

const landingBackgrouns = [
    {
        url: "images/mountains.jpg",
        title: "Good Morning <br> We Are Kasper We Make Art.",
        text: 
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, cumque! Cum, minima fugit nesciunt ullam doloribus expedita ipsam, impedit veniam aspernatur laudantium neque quis sed veritatis tempore officiis. Quae, alias?"
    },
    {
        url: "images/landing.jpg",
        title: "Hello World <br> We Are Kasper We Make Art.",
        text: 
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, cumque! Cum, minima fugit nesciunt ullam doloribus expedita ipsam, impedit veniam aspernatur laudantium neque quis sed veritatis tempore officiis. Quae, alias?"
    },
    {
        url: "images/features.jpg",
        title: "Good Evening <br> We Are Kasper We Make Art.",
        text: 
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, cumque! Cum, minima fugit nesciunt ullam doloribus expedita ipsam, impedit veniam aspernatur laudantium neque quis sed veritatis tempore officiis. Quae, alias?"
    }
];

let currentLandingBackground = 1;


// select images inside portfolio section
let imagesArr = Array.from(images);

shuffles.forEach(function(shuffle) {
    shuffle.onclick = function() {
        // remove active class from all shuffles
        shuffles.forEach(function(item) {
            item.classList.remove("active");
        })
        let cat = this.textContent.toLowerCase();
        console.log(cat);
        this.classList.add("active");

        imagesArr.forEach(function(item) {
            item.classList.remove('show');
        })

        if (cat !== 'all') {    
            imagesArr.forEach(function(item) {
                if (item.getAttribute("data-type") === cat) {
                    item.classList.add("show");
                }
            })
        } else {
            imagesArr.forEach(function(item) {
                item.classList.add('show');
            })
        }
    }
})


//change landing background functionality 
changeBgLeft.onclick = function() {
    if (currentLandingBackground > 0) {
        currentLandingBackground--;
        changeLandingBackground(currentLandingBackground);
        activateBullet(currentLandingBackground);
    }
}

changeBgRight.onclick = function() {
    if (currentLandingBackground < landingBackgrouns.length - 1) {
        currentLandingBackground++;
        changeLandingBackground(currentLandingBackground);
        activateBullet(currentLandingBackground);
    }
}


landingBullets.forEach(function(bullet, index) {
    bullet.onclick = function() {
        currentLandingBackground = index;
        changeLandingBackground(currentLandingBackground);
        activateBullet(currentLandingBackground);
    }
})

function activateBullet(bulletIndex) {
    landingBullets.forEach(function(bullet) {
        bullet.classList.remove("active");
    })

    landingBullets[bulletIndex].classList.add("active");
}

function changeLandingBackground(bgIndex) {
    const url = landingBackgrouns[bgIndex].url;
    const title = landingBackgrouns[bgIndex].title;
    const text = landingBackgrouns[bgIndex].text; 
    document.querySelector(".landing").style.backgroundImage = "url(" + url + ")";
    document.querySelector(".landing .content h2").innerHTML = title;
    document.querySelector(".landing .content p").textContent = text;

}