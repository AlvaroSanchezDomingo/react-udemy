'use strict';

var show = false;
var toggle = function toggle() {
    show = !show;
    console.log(show);
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            ' Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            show ? 'Hide Details' : 'Show Details'
        ),
        show && React.createElement(
            'p',
            null,
            'Here are some details!!'
        )
    );
    ReactDOM.render(template, appRoute);
};

var appRoute = document.getElementById('app');

render();
