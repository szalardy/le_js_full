function activateGallery() {
    
    //let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
    let thumbnails  = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage   = document.querySelector("#gallery-photo img");
    let galleryInfo = document.querySelector("#gallery-info");
    let title       = galleryInfo.querySelector(".title");
    let description = galleryInfo.querySelector(".description");
    
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set clicked image as main image
            let newImageSrc = thumbnail.dataset.largeVersion;
            let newImageAlt = thumbnail.alt;
            
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", newImageAlt);
            
            // Update the selection on the thumbnails.
            let currenClass = "current";
            // Remove the selection from the currently selected thumbnail
            document.querySelector(".current").classList.remove(currenClass);
            // Add the selection to the newly selected thumbnail.
            thumbnail.parentNode.classList.add(currenClass);
            
            // Update the image y info
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}