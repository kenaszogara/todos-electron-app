This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Note
I create this repo for myself, since I tends to forget how-i-do-stuff easily.

## References
[Building an Electron application with create-react-app](https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/)

## Getting Started 
Make sure your environment has NodeJS installed...
JUST INCASE I FORGOT HOW TO INSTALL NODE, AND I'M LAZY TO SEARCH IT UP

* WindowsOS: [download](https://nodejs.org) and install

* Ubuntu or other UNIX sys.
open terminal
```
$ sudo apt update
$ sudo apt install nodejs
```
check if it installs properly
```
$ nodejs --version
```
```
Output
vX.X.X
```

Then clone this repo or download it..
change directory to the cloned/downloaded directory
open terminal and install package dependencies using:
```
$ npm install
```
Then run the app using:
```
$ npm run dev
```

EZPZ!



## How To (JUST IN CASE I ALSO FORGOT HOW TO SETUP REACT/ELECTRON)
### 1. Setup ReactJS
```
$ npm install -g create-react-app
```

### 2. Setup ElectronJS
global setup(not recomended)
```
$ npm install -g electron
```
(save as dev) cd to project dir
```
$ npm install electron --save-dev
```
incase of error(permission denied, Ubuntu)
```
$ npm install -g electron --unsafe-perm --allow-root
```
