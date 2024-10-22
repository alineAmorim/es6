let listElement = document.querySelector('#app');

let posts = [];

function nutriApp(){
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then((response) => response.json())
    .then((json) => {
        posts = json;

        posts.map((item) => {
            let liElement = document.createElement('li');
            let titleElement = document.createElement('strong');
            let imgElement = document.createElement('img');
            let descriptionElement = document.createElement('p');

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.append(titleElement);

            imgElement.src = item.capa;
            liElement.append(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.append(descriptionElement);

            listElement.append(liElement);
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}

nutriApp();