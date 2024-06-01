# Smart Home Controller

This project is a smart home controller application designed to run on reclaimed outdated Android tablets and interface with an Arduino for home automation. The application is built using modern web technologies and frameworks to provide a robust and user-friendly experience.

## Technologies Used

- **Angular**: A platform for building mobile and desktop web applications. It provides a rich set of tools and features for creating high-performance apps.
- **NgRx**: A reactive state management library for Angular, used to manage the state of the application in a predictable way.
- **Apache Cordova**: A mobile application development framework that allows you to use standard web technologies to build cross-platform apps. The Angular app is wrapped in Cordova to run seamlessly on Android tablets.
- **PrimeNG**: A rich set of open-source UI components for Angular, providing a professional look and feel with customizable themes.
- **Arduino**: The microcontroller used for interfacing with various sensors and devices in the smart home system.

## Features

- **User-Friendly Interface**: Intuitive controls and layouts designed with PrimeNG components.
- **State Management**: Efficient and predictable state management using NgRx.
- **Cross-Platform**: Built with Cordova, the app runs smoothly on Android tablets.
- **Home Automation**: Control various smart home devices through an Arduino microcontroller.

## Run locally

Please have NVM cli installed.

- nvm use 12
- npm run serve

## Sidenote
Node 12 and Angular 10 are years outdated, just like the reclaimed tablet used for this project. However, the high-level Angular API hasn't changed much, which is (in my humble opinion) a good sign of the framework's maturity.