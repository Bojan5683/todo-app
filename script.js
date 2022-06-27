let todoBtn = document.getElementById('todoBtn');
let inputField = document.getElementById('inputField');
let container = document.getElementById('container');
let deleteBtn = document.getElementById('deleteBtn');

todoBtn.addEventListener('click', function(){
    let paragraf = document.createElement('p' );
    container.appendChild(paragraf);
    paragraf.innerHTML = inputField.value;
    paragraf.classList.add('paragraf-styles');

    inputField.value = "";

    paragraf.addEventListener('click', function(){
        paragraf.style.textDecoration = "line-through";
    });

    paragraf.addEventListener('dblclick', function(){
        paragraf.remove();
    });

    deleteBtn.addEventListener('click', function(){
        paragraf.remove();
    });
});