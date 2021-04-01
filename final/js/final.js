const requestURL = 'https://github.com/Lavender-15/marasmith.github.io/blob/master/final/js/final.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies =jsonObject['companies'];
    
    for (let i = 0; i < companies.length; i++ ) {
    let card = document.createElement('section');
    let titleDiv = document.createElement('Div');
    titleDiv.classList.add('card-title');
    let bodyDiv = document.createElement('Div');
    titleDiv.classList.add('card-title');

    //images
    let image = document.createElement('img');
    image.setAttribute("src", companies[i].imageurl);
    image.setAttribute("loading","lazy");
    image.setAttribute("alt", companies[i].name + "-" + (i +1));

    card.appendChild(titleDiv);
    card.appendChild(image);
    card.appendChild(bodyDiv);

    //names
    let h2 = document.createElement('h2');
    h2.textContent = companies[i].name;
    titleDiv.appendChild(h2);
    
    // address
    let address = document.createElement('p');
    address.textContent = "Address:\r\n" + companies[i].address;
    bodyDiv.appendChild(address);

    // Phone
    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = "Phone Number:\r\n" + companies[i].phone;
    bodyDiv.appendChild(phoneNumber);

    //Link

    let companyLink = document.createElement('p');
    companyLink.textContent = 'Website:\r\n' + companies[i].link;
    bodyDiv.appendChild(companyLink);
   
    document.querySelector('div.cards').appendChild(card);
   } 

   

});


const imgHover = document.getElementsByTagName('img')[0];
const sect = document.getElementsByTagName('section')[0];

  