const shuffles = document.querySelectorAll(".shuffle li");
const imagesContainer = document.querySelector(".imgs-container");
const images = document.querySelectorAll(".imgs-container .box");
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

    

        /*

        let filterImagesArr = imagesArr;

        if (cat !== 'all') {
            filterImagesArr = imagesArr.filter(function(image) {
                let imageCat = image.getAttribute("data-type");
                console.log(imageCat);
                if (imageCat === cat) {
                    return image;
                }
            })
        }
        
        if (filterImagesArr.length > 0) {
            imagesContainer.innerHTML = "";
            filterImagesArr.forEach(function(item) {
                imagesContainer.appendChild(item);
            })
        }
        */
    }
})
