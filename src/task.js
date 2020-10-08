export class todolist {
    state = {
        text: undefined,
        complete: false,
        pomodoro: 0,
    };
    constructor(text) {
        this.state.text = text;
    };
    handleToggle(checkBox) {
        this.state.complete = checkBox.checked;
    };
    handleTextChange(event) {
        this.state.text = event.target.value;
    };

    handleTextEdit(event) {
        debugger
        const newName = prompt('Edit Task Name')
        this.state.text = newName;
        event.defaultValue = newName;
    };
    handleDelete () {
        console.log('perdeu playboy');
    }
    render() {

        const div = document.createElement('div');
        const container = document.createElement('button');
        container.addEventListener('click', this.workingOn.bind(this));
        container.className = 'btn bn col-sm-6 btn-light';


        const checkBoxEl = document.createElement('input');
        checkBoxEl.type = 'checkbox';
        checkBoxEl.className = 'checkbox';
        checkBoxEl.checked = this.state.complete;
        checkBoxEl.addEventListener('click', this.handleToggle.bind(this, checkBoxEl));
        container.appendChild(checkBoxEl);


        const textInputEl = document.createElement('input');
        textInputEl.type = 'button';
        textInputEl.className = 'input1';
        textInputEl.value = this.state.text;
        textInputEl.addEventListener('keyup', this.handleTextChange.bind(this));
        container.appendChild(textInputEl);

        const pomodoro1 = document.getElementById('pom-number').value;
        this.pomodoro = pomodoro1;
        const span1 = document.createElement('span');
        span1.innerHTML = '0/' + this.pomodoro +"&nbsp;&nbsp;";
        span1.className = 'span';
        container.appendChild(span1);
       
        const spanEdit = document.createElement('span');
        spanEdit.innerHTML = '<i class="fas fa-pen"></i>';
        spanEdit.className = 'span';
        spanEdit.addEventListener('click', this.handleTextEdit.bind(this, textInputEl))
        container.appendChild(spanEdit);
        container.insertBefore(spanEdit, span1);
        
        const spanDelete = document.createElement('span');
        spanDelete.innerHTML = '<i class="fas fa-trash"></i>';
        spanDelete.className = 'span';
        spanDelete.addEventListener('click', this.handleDelete.bind(this.container))
        container.appendChild(spanDelete);
        container.insertBefore(spanDelete, spanEdit);
        

        div.appendChild(container);
        document.getElementById('first').value = '';
        return div;


    };
    workingOn() {
        const text2 = document.getElementById('working-on');
        text2.innerHTML = '<div>working on</div>' + '        ' + this.state.text;

    }
   
};




const add = document.getElementById('add');
const cancel = document.getElementById('cancel');

const createtodolistHandler = (event) => {
    debugger;
    const saveTask = event.target
    const task = saveTask.offsetParent.children[0].children[1].value;
    const estPomodoro = document.getElementById('pom-number').value

    if (task === '' ||estPomodoro === '0' ) {
        document.getElementById('add').disabled = true;
        document.getElementById('add').disabled = false;
        return;
    }

    const localState = {
        text: task,
        complete: false,

    }
    window.localStorage.setItem('localState', JSON.stringify(localState.text));
    const value = JSON.parse(window.localStorage.getItem('localState'));
    const rendertodo = new todolist(value);
    const rendered = rendertodo.render();
    document.getElementById('root').appendChild(rendered);


};
function cancelHandler(event) {
    debugger;
    const closeCard = event.target.offsetParent.offsetParent.children[0];
    closeCard.className = 'multi-collapse collapse';

}

cancel.addEventListener('click', cancelHandler);
add.addEventListener('click', createtodolistHandler);