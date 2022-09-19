const info = 'js/semester.json'
const container = document.querySelector('#ol');


fetch(info)
.then(function ( response ) {
    return response.json();
})
.then( function ( jsonObject ) {
    
    const information = jsonObject;

    information.forEach(data => {
        
        createLi(data)

        console.log(data)
    });

})


function createLi(datos) {

    // C R E A T I N G  E L E M E N T S
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const a = document.createElement('a');
    const image = document.createElement('img');

    // G I V I N G  V A L U E
    h2.textContent = datos.title;
    image.src = '../assets/icons8-flecha-32.pn'

    if (datos.url === "") {
        a.classList.add('none_link')
        a.textContent = "We haven't reached that week yet"
    } else {
        a.classList.add('link');
        a.setAttribute('href', datos.url);
        a.appendChild(image);
    }

    // G I V I N G  S T Y L E
    ul.classList.add('card');
    li.classList.add('title')

    // A P P E N D I N G
    li.appendChild(h2);
    ul.appendChild(li);
    ul.appendChild(a);
    container.appendChild(ul);
    


}