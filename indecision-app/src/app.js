console.log('App.js is running!!')


//JSX -JavaScript XML
var app = {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}
var templateOne = (
    <div>
        <h2> {app.title}</h2> 
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div> 
)

var user = {
    name:'Alvaro',
    age: 33,
    location: 'tembleque'
}
var templateTwo =(
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoute = document.getElementById('app')
ReactDOM.render(templateTwo, appRoute);