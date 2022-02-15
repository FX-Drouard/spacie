
doc = document.write('\
   <div id="header"><div id = "logo" >\
    <img src="https://media.spacie.fr/default/pages/icon.png" alt="logo" width="128" height="128" /></div ><div id="title"><p>Spacie</p></div></div >'
);

doc2 = document.querySelector("header");
doc2.appendChild(doc)