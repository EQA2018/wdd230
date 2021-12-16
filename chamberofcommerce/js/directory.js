const membership = "json/directory.json";

fetch(membership)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    directory.forEach((member) => {
      let card = document.createElement('section');
      let contactinfo = document.createElement('div');
      let logo = document.createElement('img');
      let h3 = document.createElement('h3');
      let phone = document.createElement('p');
      let websitediv = document.createElement('div');
      let website = document.createElement('a');

      logo.setAttribute('src', member.logo);
      logo.setAttribute('alt', `${member.name} Business Logo`);
      logo.setAttribute('loading', "lazy");
      contactinfo.setAttribute('class', "contactinfo");
      h3.textContent = `${member.name}`;
      phone.textContent = `${member.phone}`;

      
      website.setAttribute('href', member.website);
      website.textContent = `${member.websitename}`;
      website.setAttribute('target', "_target");
      card.appendChild(logo);
      card.appendChild(contactinfo);            
      contactinfo.appendChild(h3);
      contactinfo.appendChild(phone);
      contactinfo.appendChild(websitediv);
      websitediv.appendChild(website);
      
      document.querySelector('.directory').appendChild(card);
    });
  });