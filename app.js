let counter = 0;
let data = [
    {
        url: "https://www.azquotes.com/vangogh-image-quotes/76/33/Quotation-William-Wilberforce-It-is-the-true-duty-of-every-man-to-promote-76-33-34.jpg",
        alt: "Hull is the home of William Wilberforce, a man widely considered to be the 'father' of the abolishment of slavery.",
        tags: ["historical figure", "abolishment of slavery"]
    },

    {
        url: "https://c2.staticflickr.com/2/1228/947875585_c23f6fae15_b.jpg",
        alt: "Built in th 1970's, the Humber Bridge was for many years the worlds largest 'single span' suspension bridge.",
        tags: ["bridges", "world famous"]
    },

    {
        url: "https://th.bing.com/th/id/OIP.fcnNq1UJ3GoBjaDd3lfaXAHaEK?rs=1&pid=ImgDetMain",
        alt: "In 2017, Hull acquired the title of 'City Of Culture'",
        tags: ["City of Culture 2017"]
    },

    {
        url: "https://th.bing.com/th/id/R.30f0073c6ce1b9c430814102542cf674?rik=3Juw3sNjh3kTPQ&riu=http%3a%2f%2fnews.bbcimg.co.uk%2fmedia%2fimages%2f52531000%2fjpg%2f_52531500_street-1.jpg&ehk=r89HcYP8QfDzPuPH1NhnIcG5C4TBa5Bu5shgFVfx50o%3d&risl=&pid=ImgRaw&r=0",
        alt: "Hull was the most severely damaged British city or town during the Second World War, with 95 percent of houses damaged.",
        tags: ["WW2", "Blitz", "Bombing"]
    },

    {
        url: "https://hullywoodicons.files.wordpress.com/2016/10/14606499_10154651769749319_5692162023101924320_n.jpg",
        alt: "Hull is a thriving location for film! With the likes of Enola Holmes, and The Crown being filmed here",
        tags: ["Hullywood", "Enola Holmes", "The Crown"]
    },

    {
        url: "https://www.visithull.org/wp-content/uploads/2018/08/Humber-Street-Sesh-2017_Humber-Street-Sesh-2017-103.jpg",
        alt: "Hull has a rich summer festival scene, with the likes of 'The Freedom Festival' and the 'Humber Street Sesh'",
        tags: ["Freedom Festival", "Humber Street Sesh", "Trib Fest"]
    },

    {
        url: "https://th.bing.com/th/id/OIP.2NwDGdl45cBIKTCBTvl7qAHaE8?rs=1&pid=ImgDetMain",
        alt: "Hull is a 'foodies' paradise! From the humble 'pattie', Michelin Guide quality, or vegetarian only, there is something for all tastes!",
        tags: ["Hearth", "Ambiente", "Humber Fish Co", "Tapasya@Marina", "Nibble"]
    },
    
    {
        url: "https://i.pinimg.com/originals/7c/fa/d2/7cfad2a9bde14ca62caf1d8fd3dbdad2.jpg",
        alt: "Andrew Lincoln, AKA Rick Grimes (Walking Dead), spent his early life here.",
        tags: ["Actors", "Walking Dead", "Cottingham"]
    }
]

function ShowThumbnails(dataToShow)
{
    let thumbnailSection = document.getElementById("thumbnailsBar");
    let navigationSection = document.getElementById("navigationBar");
    let mainSection = document.getElementById("mainBar");
    let extrasSection = document.getElementById("extrasBar");
    let descriptionSection = document.getElementById("descriptionBar");
    let tagsSection = document.getElementById("tagsBar");

    for(let i = 0; i < dataToShow.length; i++)
    {
        let createImg = document.createElement("img");

        createImg.classList.add("thumbnail");
        createImg.src = dataToShow[i].url;
        createImg.alt = dataToShow[i].alt;
        createImg.tabIndex = i+1;

        thumbnailSection.appendChild(createImg);

        createImg.addEventListener("click", function(){

            counter = i;
            
            navigationSection.style.visibility = "visible";
            extrasSection.style.visibility = "visible";

            mainSection.innerHTML = ``;
            let fullImage = document.createElement("img");
            fullImage.classList.add("properImage");
            fullImage.setAttribute("id", "image");
            fullImage.src = dataToShow[i].url;
            fullImage.alt = dataToShow[i].alt;
            mainSection.appendChild(fullImage); 

            descriptionSection.innerHTML = ``;
            let descriptionBox = document.createElement("div");
            descriptionBox.classList.add("description");
            descriptionBox.setAttribute("id", "description");
            descriptionBox.innerHTML = dataToShow[i].alt;
            descriptionSection.appendChild(descriptionBox);
            
            tagsSection.innerHTML = ``;
            let tagsBox = document.createElement("div");
            tagsBox.classList.add("tags");
            tagsBox.setAttribute("id", "tags");
            tagsBox.innerHTML = dataToShow[i].tags;
            tagsSection.appendChild(tagsBox);
        })
    }
}

let backButton = document.getElementById("backNavigationButton");
backButton.addEventListener("click", SkipBackward);

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
        SkipForward()}
})

let forwardButton = document.getElementById("forwardsNavigationButton");
forwardButton.addEventListener("click", SkipForward);

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowLeft"){
        SkipBackward()}
})

function SkipForward()
{
    counter++;

    if(counter >= data.length){ 
        counter = 0 }

    let img = document.getElementById("image");
    img.src = data[counter].url;

    let description = document.getElementById("description");
    description.innerHTML = data[counter].alt;

    let tags = document.getElementById("tags");
    tags.innerHTML = data[counter].tags;
}

function SkipBackward()
{
    counter--;

    if(counter < 0){ 
        counter = data.length - 1 }

    let img = document.getElementById("image");
    img.src = data[counter].url;

    let description = document.getElementById("description");
    description.innerHTML = data[counter].alt;

    let tags = document.getElementById("tags");
    tags.innerHTML = data[counter].tags;
}

let listenerDescriptionCheckbox = document.getElementById("descriptionCheckbox");
listenerDescriptionCheckbox.addEventListener("change", ToggleDescriptionView);

function ToggleDescriptionView()
{
let checkBox = document.getElementById("descriptionCheckbox");
let descriptionBox = document.getElementById("descriptionBar");

     if(checkBox.checked == true){
        descriptionBox.style.visibility = "visible";
    } else {
        descriptionBox.style.visibility = "hidden";
     }
}

let listenerTagsCheckbox = document.getElementById("tagsCheckbox");
listenerTagsCheckbox.addEventListener("change", ToggleTagsView);

function ToggleTagsView()
{
let checkBox = document.getElementById("tagsCheckbox");
let tagsBox = document.getElementById("tagsBar");

     if(checkBox.checked == true){
        tagsBox.style.visibility = "visible";
    } else {
        tagsBox.style.visibility = "hidden";
     }
}



ShowThumbnails(data);
