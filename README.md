# react-udemy

- Install node.js and npm
https://nodejs.org/en/download/

- Install yarn
npm install -g yarn

    if error 'cannot be loaded because running scripts is disable...'
    open powershell as adminstrator and type the following command
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned


- Install and start live-server
yarn global add live-server
or
npm install -g live-server

live-server public

- Install and start babel

yarn global add babel-cli
or
npm install -g babel-cli

yarn add babel-preset-env

yarn add babel-preset-react

babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch

-Run server with webpack in develompent

yarn run dev-server

- Run jest test in watch mode

yarn test -- --watch


use nvm (node version manager) to intall and use diferent versions of node, this course use depencencies that needs node v 14
Use node 14.17.3 for this course by instaling with the following command
Use powershell as an administrator
nvm install 14.17.3
nvm use 14.17.3
