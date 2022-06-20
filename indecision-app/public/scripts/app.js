console.log('App.js is running!!')


//JSX -JavaScript XML
//var template = < p > This is JSX from app.js!! < /p>;
//using babeljs the above code translate into the following
var template = /*#__PURE__*/ React.createElement("p", null, " This is JSX from app.js!! ");
var appRoute = document.getElementById('app')
ReactDOM.render(template, appRoute);