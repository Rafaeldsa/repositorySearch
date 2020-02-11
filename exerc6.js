var div = document.querySelector('#app');
var list = document.querySelector('#lista');
var inp1 = document.querySelector('#inp1');
var btn1 = document.querySelector('#btn1');


function renderLoading() {
    list.innerHTML = '';
    var listElement = document.createElement("li");
    var textNode = document.createTextNode("Carregando...");

    listElement.appendChild(textNode);
    list.appendChild(listElement);
}

function render() {
    list.innerHTML = '';
    var user = inp1.value;
    renderLoading();
    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response){
        list.innerHTML = '';
        for(var i = 0; i < response.data.length; i++) {
            console.log(response.data[i].name);
            var listElement = document.createElement("li");
            var textNode = document.createTextNode(response.data[i].name);
            listElement.appendChild(textNode);
            list.appendChild(listElement);
        }
    inp1.value = '';
    })
    .catch(function(error){
        alert("Usuário não existe");
    })  
}
btn1.onclick = render;