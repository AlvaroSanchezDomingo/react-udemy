let show = false
const toggle = () => {
    show = !show
    console.log(show)
    render();
}


const render = ()=>{
    const template = (
        <div>
            <h2> Visibility Toggle</h2> 
            <button onClick={toggle}>{show ? 'Hide Details': 'Show Details'}</button>
            {show && <p>Here are some details!!</p>}
        </div> 
    )
    ReactDOM.render(template, appRoute)
}



const appRoute = document.getElementById('app')

render();