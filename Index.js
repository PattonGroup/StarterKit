const imageFrame = document.getElementById('imageFrame');
const factTextBox = document.getElementById('factTextBox');

const catButton = document.getElementById('catButton');
const dogButton = document.getElementById('dogButton');

const setImageInFrame = image => { imageFrame.src = image; }
const setTextInBox = text => { factTextBox.textContent = text; }

const getRandomCatOrDogImage = (url, isCat) => fetch(url)
.then(res => { return res.json(); })
.then(data => { 
    if (isCat) { setImageInFrame(data.file); } 
    else {
        let dog = data.url;
        let dogType = dog.substring(dog.length - 3); 

        if (dogType == 'mp4') { dogButton.onclick(); return; }

        setImageInFrame(dog);    
    }
})
.then(getRandomFactCatOrDog(isCat));

const getRandomFactCatOrDog = isCat => {
    let url;
    
    if (isCat) { url = 'https://alexwohlbruck.github.io/cat-facts/'; }
    else { url = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all'; }

    let text;

    fetch(url)
    .then(res => { return res.json(); })
    .then(data => { 
        if (isCat) { text = data.fact; }
        else { text = data.file; }
    })

    setTextInBox(text); 
}

catButton.onclick = () => { getRandomCatOrDogImage('https://aws.random.cat/meow', true); }
dogButton.onclick = () => { getRandomCatOrDogImage('https://random.dog/woof.json', false); }