let sectionTask = document.querySelector('.task');
let listaTask = document.querySelector('.lista-task');
let buttonAdd = document.querySelector('.button-add-task');
let inputTask = document.querySelector('.input-task');
let count = 0;

function createElementTask(element, params, className){
    element.appendChild(params);
    params.classList.add(className)
    params.setAttribute('id', `${count}`)
}

function createTask(){
    let liTask = document.querySelector('.item-lista-task');
    let listTask = document.createElement('li');
    createElementTask(listaTask, listTask, 'item-lista-task')

    let task = document.querySelector('.task-item');
    let itemTask = document.createElement('p');
    createElementTask(listTask, itemTask, 'task-item')

    let createButton = document.createElement('button');
    createElementTask(listTask, createButton, 'button-remove-task')
    createButton.onclick = (event) => {
        removeTask(event)
    };

    var imageButton = document.createElement('i');
    createElementTask(createButton, imageButton, 'fa-solid')
    imageButton.classList.add('fa-trash')
    //Codigo repetido, pois o icone que estava usando contem um nome separado por "espaço" e com isso o JS não aceitar a informação. Por isso a solução foi duplicar a classe adiciona em duas partes. nome original "fa-solid fa-trash"
    var userTask = inputTask.value;
    itemTask.innerHTML = userTask;
}

const buttonAddTask = () => {
    buttonAdd.addEventListener('click', () =>{  
        if(count < 6){
            count++
            validationTask();
        }else{
            alert('Lista Cheia!!')
            inputTask.value = '';
            }
        }    

    )
    
}

const removeTask  = (evento) => {
    const element = document.getElementById(evento.target.id)
    element.remove();
    count--;
}

const validationTask = () => {
    if(inputTask.value === ''){
        alert('Digite uma task!!')
    } else{
        createTask();
        inputTask.value = '';
    } 
}

buttonAddTask();



