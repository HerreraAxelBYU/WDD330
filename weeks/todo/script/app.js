const task_name = document.querySelector('#input_task');
const add_btn = document.querySelector('#button_add');
const ul = document.querySelector('.todo_ul');

const lista = ["Task", "Task", "Task"]


// EVENT LISTENERS ! ! !
add_btn.addEventListener( 'click', () => { 

    lista.push(task_name.value)

})

class Task {

    constructor(list) {
        this.tasks = list;
    }


    mostrar() {
        console.log(this.tasks)
    }

    mostrarLista() {

        this.tasks.forEach(tarea => {
            
            let li = document.createElement('li');
            let div = document.createElement('div');
            let input = document.createElement('input');
            let p = document.createElement('p');
            let px = document.createElement('p');
    
            input.type = "checkbox";
            p.textContent = tarea;
            px.textContent = "X";
    
    
            div.appendChild(input);
            div.appendChild(p);
            li.appendChild(div)
            li.appendChild(px);
            ul.appendChild(li)
        });
    
    }
}

const objeto = new Task(lista)

objeto.mostrarLista()






//objeto.mostrar()
