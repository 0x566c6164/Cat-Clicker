/*
* GLOBALS
*/
var cats = [];
var selectedCat;

class Cat {
  constructor(name, image, buttonElement) {
    this.name = name;
    this.image = image;
    this.buttonElement = buttonElement;
    this.clicks = 0;
  }

    getElement() {
    let element = $(`<h1 id="cat-name" class="text-center">${this.name}</h1>
    <img id="cat-image" src="${this.image}" alt="Image of ${this.name}">
    <p id="cat-counter" class="text-center">Clicks: ${this.clicks}</p>`);
    return element;
  }

}

$(document).ready(function() {
    // Cat Settings
    const catNames = ['Picaso', 'Chewie', 'Ronald & Donald', 'Florenso', 'Julian', 'Francesco'];
    const catImages = ['images/picaso.jpg', 'images/chewie.jpg', 'images/ronaldNdonald.jpg', 'images/Florenso.jpeg', 'images/Julian.jpg', 'images/francesco.jpg'];
    // Creates the cats
    for(let i = 0; i < catNames.length; i++) {
      cats.push(new Cat(catNames[i], catImages[i], $('.list-group')[0].children[i]));
    }
    selectedCat = cats[0];
      // Loops through every cat, adds a listener on click
      for(let cat of cats) {
        $(cat.buttonElement).click(function () {
          // Removes previously activated buttons on sidebar
          disableActivatedLists();
          // Activates sidebar button to blue
          $(cat.buttonElement)[0].className = 'list-group-item active';
          // Appends the new cat image
          $('#cat-display').append(cat.getElement());
          selectedCat = cat;
        })
      }
      // Display the first cat for document initialization purposes
      $('#cat-display').append(cats[0].getElement());
});

function disableActivatedLists() {
  // Loops through every button on sidebar and closes it
  for(var i = 0; i < cats.length; i++) {
    $('.list-group')[0].children[i].className = "list-group-item";
  }
  // Clears the image of the current cat
  $('#cat-display')[0].innerHTML = '';
}

$('#cat-display').click(function(e) {
  selectedCat.clicks++;
  $('#cat-counter')[0].innerHTML = `Clicks: ${selectedCat.clicks}`
});
