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

