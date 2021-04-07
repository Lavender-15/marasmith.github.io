const requestURL = 'https://lavender-15.github.io/marasmith.github.io/final.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const compaines =jsonObject['compaines'];
    
    for (let i = 0; i < compaines.length; i++ ) {
    let card = document.createElement('section');
    let titleDiv = document.createElement('Div');
    titleDiv.classList.add('card-title');
    let bodyDiv = document.createElement('Div');
    titleDiv.classList.add('card-title');

    //images
    let image = document.createElement('img');
    image.setAttribute("src", compaines[i].imageurl);
    image.setAttribute("loading","lazy");
    image.setAttribute("alt", compaines[i].name + ' ' + compaines[i].lastname + "-" + (i +1));

    card.appendChild(titleDiv);
    card.appendChild(image);
    card.appendChild(bodyDiv);

    //names
    let h2 = document.createElement('h2');
    h2.textContent = compaines[i].name + ' ' + compaines[i].lastname;
    titleDiv.appendChild(h2);
    //card.appendChild(h2);

    let sitelink = document.createElement('p');
    sitelink.textContent = "Website Link:\r\n" + compaines[i].link;
    titleDiv.appendChild(sitelink);

    // birthdays
    let placeAddress = document.createElement('p');
    placeAddress.textContent = "Address:\r\n" + compaines[i].address;
    bodyDiv.appendChild(placeAddress);

    //birthplace

    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone Number:\r\n' + compaines[i].phone;
    bodyDiv.appendChild(phoneNumber);
   
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

  