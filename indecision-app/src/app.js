console.log('App.js is running!!')


const app = {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}
const templateOne = (
    <div>
        <h2> {app.title}</h2> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div> 
)

const user = {
    name:'Alvaro',
    age: 33,
    location: 'tembleque'
}
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
const templateTwo =(
    <div>
        <h1>{user.name? user.name:'Anonymous'}</h1>
        {(user.age && user.age>= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoute = document.getElementById('app')
ReactDOM.render(templateOne, appRoute);