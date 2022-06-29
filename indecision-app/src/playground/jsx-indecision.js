console.log('App.js is running!!')


const app = {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFromSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value

    if(option){
        app.options.push(option);
        e.target.elements.option.value = ''
        render();
    }
}

const onRemoveAll = () =>{
    app.options = []
    render();
}
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
    render();
}

const render = ()=>{
    const template = (
        <div>
            <h2> {app.title}</h2> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove</button>
            <ol>
                {
                    app.options .map((option)=><li key={option}>{option}</li>)
                }
            </ol>
            
            <form onSubmit={onFromSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div> 
    )
    ReactDOM.render(template, appRoute)
}



const appRoute = document.getElementById('app')

render();