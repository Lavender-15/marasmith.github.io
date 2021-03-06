const requestURL = 'https://lavender-15.github.io/marasmith.github.io/final.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
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

    let sitelink = document.createElement('p');
    sitelink.textContent = "Website Link:\r\n" + prophets[i].link;
    titleDiv.appendChild(sitelink);


    // birthdays
    let dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = "Address:\r\n" + prophets[i].birthdate;
    bodyDiv.appendChild(dateOfBirth);

    //birthplace

    let placeOfBirth = document.createElement('p');
    placeOfBirth.textContent = 'Phone Number:\r\n' + prophets[i].birthplace;
    bodyDiv.appendChild(placeOfBirth);
   
    document.querySelector('div.cards').appendChild(card);
   } 

});


const imgHover = document.getElementsByTagName('img')[0];
const sect = document.getElementsByTagName('section')[0];

  



// const requestURL = 'https://github.com/Lavender-15/marasmith.github.io/blob/master/final/js/final.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const companies =jsonObject['companies'];
    
//     for (let i = 0; i < companies.length; i++ ) {
//     let card = document.createElement('section');
//     let titleDiv = document.createElement('Div');
//     titleDiv.classList.add('card-title');
//     let bodyDiv = document.createElement('Div');
//     titleDiv.classList.add('card-title');

//     //images
//     let image = document.createElement('img');
//     image.setAttribute("src", companies[i].imageurl);
//     image.setAttribute("loading","lazy");
//     image.setAttribute("alt", companies[i].name + "-" + (i +1));

//     card.appendChild(titleDiv);
//     card.appendChild(image);
//     card.appendChild(bodyDiv);

//     //names
//     let h2 = document.createElement('h2');
//     h2.textContent = companies[i].name;
//     titleDiv.appendChild(h2);
    
//     // address
//     let address = document.createElement('p');
//     address.textContent = "Address:\r\n" + companies[i].phone;
//     bodyDiv.appendChild(address);

//     // Phone
//     let phoneNumber = document.createElement('p');
//     phoneNumber.textContent = "Phone Number:\r\n" + companies[i].phone;
//     bodyDiv.appendChild(phoneNumber);

//     //Link

//     let companyLink = document.createElement('p');
//     companyLink.textContent = 'Website:\r\n' + companies[i].link;
//     bodyDiv.appendChild(companyLink);
   
//     document.querySelector('div.cards').appendChild(card);
//    } 

   

// });


// const imgHover = document.getElementsByTagName('img')[0];
// const sect = document.getElementsByTagName('section')[0];

  