const requestURL = 'https://lavender-15.github.io/marasmith.github.io/final.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets =jsonObject['prophets'];
    
    for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let titleDiv = document.createElement('Div');
    titleDiv.classList.add('card-title');
    let bodyDiv = document.createElement('Div');
    titleDiv.classList.add('card-title');

    //images
    let image = document.createElement('img');
    image.setAttribute("src", prophets[i].imageurl);
    image.setAttribute("loading","lazy");
    image.setAttribute("alt", prophets[i].name + ' ' + prophets[i].lastname + "-" + (i +1));

    card.appendChild(titleDiv);
    card.appendChild(image);
    card.appendChild(bodyDiv);

    //names
    let h2 = document.createElement('h2');
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    titleDiv.appendChild(h2);
    //card.appendChild(h2);

    // birthdays
    let dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = "Date of Birth:\r\n" + prophets[i].birthdate;
    bodyDiv.appendChild(dateOfBirth);

    //birthplace

    let placeOfBirth = document.createElement('p');
    placeOfBirth.textContent = 'Place of Birth:\r\n' + prophets[i].birthplace;
    bodyDiv.appendChild(placeOfBirth);
   
    document.querySelector('div.cards').appendChild(card);
   } 

});


const imgHover = document.getElementsByTagName('img')[0];
const sect = document.getElementsByTagName('section')[0];

  