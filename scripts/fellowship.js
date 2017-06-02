console.log("fellowship.js linked.");

// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector
var body = document.querySelector('body');



// Part 1
function makeMiddleEarth() {
  var $main = document.createElement('main');

  // create a section tag with an id of middle-earth
  var $section = document.createElement('section');
  $section.setAttribute("id", "Middle-Earth");

  var $article = document.createElement('article');
  var $shire = document.querySelectorAll('article')[0];

  $main.appendChild($section);

  // add each land as an article tag (add them one by one in a loop)
  for (var i = 0 ; i < lands.length ; i++) {
   var $article = document.createElement('article');
   // inside each article tag include an h1 with the name of the land
   var $h1 = document.createElement('h1');
   $h1.textContent = lands[i];
   // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
   var nameinArray = lands[i].toLowerCase().split(" ");
   console.log("nameinArray is ");
   console.log(nameinArray);
   var nameNoSpace = nameinArray.join("-");
   console.log("nameNoSpace is ");
   console.log(nameNoSpace);


   $article.setAttribute("class", nameNoSpace);
   $article.appendChild($h1);
   $section.appendChild($article);
  }

  // append middle-earth to your document body
  body.appendChild($main);
}

makeMiddleEarth();


// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var $theshireList = document.createElement('ul');
  $theshireList.setAttribute('id', 'hobbits');
  document.querySelector('.the-shire').appendChild($theshireList);
  // each hobbit should be a list item, with text showing their name
  for (var i in hobbits){
    var $elem = document.createElement('li');
    $elem.innerText = hobbits[i];
    // give each hobbit a class of hobbit
    $elem.setAttribute("class", "hobbit");
    $theshireList.appendChild($elem);
  }

}

makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var divRing = document.createElement('div');
  divRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  divRing.setAttribute('class', 'magic-imbued-jewelry');
  // add the ring as a child of Frodo
  var list = document.getElementById('hobbits').getElementsByTagName('li');
  for (var i=0; i<list.length; i++){
    // console.log(list[i]);
    if (list[i].innerHTML === 'Frodo Baggins'){
      list[i].appendChild(divRing);
    }
  }
}

keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
  // create an aside tag
  var $aside = document.createElement('aside');
  // insert your aside as a child element of rivendell
  document.querySelector('.rivendell').appendChild($aside);
  // attach an unordered list of each 'buddy' in the aside
  var $rivendellList = document.createElement('ul');
  $rivendellList.setAttribute('id', 'buddies');
  $aside.appendChild($rivendellList);
  for (var i in buddies){
    var $elem = document.createElement('li');
    $elem.innerText = buddies[i];
    $elem.setAttribute("class", "buddy");
    $rivendellList.appendChild($elem);
  }
}

makeBuddies();


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var list = document.getElementById('buddies').getElementsByTagName('li');
  for (var i in list){
    console.log(list[i]);
    if (list[i].innerHTML === 'Strider'){
      console.log('this is Strider: ');
      list[i].innerHTML = 'Aragorn';
    }
  }
}

 beautifulStranger();

// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  document.querySelector('.rivendell').appendChild(document.querySelector('#hobbits'));
  // how does appendChild work on an element that already exists on the page?
}

leaveTheShire();


// Part 7
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  var $newDiv = document.createElement('div');
  $newDiv.setAttribute('id','the-fellowship');

  var $listFellowship = document.createElement('ul');

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var newHobbits = document.getElementById('hobbits').getElementsByTagName('li');
    // for (var i=0; i<newHobbits.length; i++){
    //     console.log(newHobbits[i]);
    // }
  function moveHobbits(){
    for (var i=0; i<newHobbits.length; i++){
      console.log(newHobbits.length);
      $listFellowship.appendChild(newHobbits[i]);
      console.log(i);
      i = i-1; //always return to position newHobbits[0]
      }
  }
  moveHobbits();

  var buddies = document.getElementById('buddies').getElementsByTagName('li');
  function moveBuddies(){
    for (var i=0; i<buddies.length; i++){
      console.log(buddies.length);
      $listFellowship.appendChild(buddies[i]);
      console.log(i);
      i = i-1; //always return to position newHobbits[0]
      }
  }
  moveBuddies();


  $newDiv.appendChild($listFellowship);


  // append the fellowship div to rivendell
  document.querySelector('.rivendell').appendChild($newDiv);

  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
    var anchor = document.createElement('a');
    anchor.setAttribute('href','http://www.w3schools.com/jsref/met_win_alert.asp');
    anchor.innerText = 'alert';
    $listFellowship.appendChild(anchor);
}

forgeTheFellowShip();


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'

  var list = document.getElementById('the-fellowship').getElementsByTagName('li');
  for (var i in list){
    console.log(list[i]);
    if (list[i].innerHTML === 'Gandalf the Grey'){
      console.log('this is Gandalf the Grey');
      list[i].innerHTML = 'Gandalf the White';
      list[i].style.border = '3px solid gray';
    }
  }
  // apply style to the element
  // add a gray 3px border
  // use documentation if you're unsure how to add style with javascript!
}
theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("Boromir's been killed by the Uruk-hai!");
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  var list = document.getElementById('the-fellowship').getElementsByTagName('li');
  console.log(list);

  // var characters = [];
  // for (var i=0; i<list.length; i++){
  //   var createArray = list[i].innerHTML;
  //   characters.push(createArray);
  // }
  // console.log(characters);

  list[8].parentNode.removeChild(list[8]);
}
// hornOfGondor();


// Part 10
function itsDangerousToGoAlone(){

  var $mordorList = document.createElement ('ul');

  // add a div with an id of 'mount-doom' to Mordor
  var $newDiv = document.createElement('div');
  $newDiv.setAttribute('id','mount-doom');

  document.querySelector('.mordor').appendChild($newDiv);
  $newDiv.appendChild($mordorList);

  // take Frodo and Sam out of the fellowship and move them to Mordor
  var list = document.getElementById('the-fellowship').getElementsByTagName('li');
  console.log(list);

  function moveCharacters(){
    for (var i=0; i<list.length; i++){
      console.log(list[i].innerHTML);
      if (list[i].innerText === 'frodo baggins'){
        console.log(list[i].innerHTML);
        $mordorList.appendChild(list[i]);
      }
      if (list[i].innerHTML === "Samwise 'Sam' Gamgee"){
        console.log(list[i].innerHTML);
        $mordorList.appendChild(list[i]);
      }
    }
  }
  moveCharacters();
}
itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var $newDiv = document.createElement('div');
  $newDiv.setAttribute('id','gollum');
  document.querySelector('.mordor').appendChild($newDiv);
  // Remove the ring from Frodo and give it to Gollum
  $newDiv.appendChild(document.querySelector('#the-ring'));
  // Move Gollum into Mount Doom
  document.querySelector('#mount-doom').appendChild($newDiv);
}
weWantsIt();


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  document.querySelector('#gollum').parentNode.removeChild(document.querySelector('#gollum'));
  // Move all the hobbits back to the shire
  var moveHobbits1 = document.getElementById('mount-doom').getElementsByTagName('li');
  var moveHobbits2 = document.getElementById('the-fellowship').getElementsByTagName('li');
  var $backHomeList = document.createElement('ul');

 function moveCharacters(){
    for (var i=0; i<moveHobbits1.length; i++){
      $backHomeList.appendChild(moveHobbits1[i]);
      i=i-1;
      }
    for (var i=0; i<moveHobbits2.length; i++){
      if (moveHobbits2[i].innerHTML === "Meriadoc 'Merry' Brandybuck"){
        $backHomeList.appendChild(moveHobbits2[i]);
      }
      if (moveHobbits2[i].innerHTML === "Peregrin 'Pippin' Took"){
        $backHomeList.appendChild(moveHobbits2[i]);
      }
    }
  }

  moveCharacters();

  document.querySelector('.the-shire').appendChild($backHomeList);
}
thereAndBackAgain();
