'use strict';

console.log('App.js is running!!');

//JSX -JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};
var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        ' ',
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Alvaro',
    age: 33,
    location: 'tembleque'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoute = document.getElementById('app');
ReactDOM.render(templateTwo, appRoute);
