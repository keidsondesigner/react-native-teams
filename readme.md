<a href="https://imgur.com/X1DnGdR"><img src="https://i.imgur.com/X1DnGdR.png" title="source: imgur.com" /></a>

# Appteams - React Native App

## Overview
Appteams is a mobile application developed using React Native, designed to enhance team collaboration and communication. This README provides information on setting up, running, and developing for the app.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Starting the App](#starting-the-app)
  - [Running on Android](#running-on-android)
  - [Running on iOS](#running-on-ios)
  - [Running on Web](#running-on-web)
- [Dependencies](#dependencies)
- [Development](#development)
  - [Running Locally](#running-locally)
  - [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Yarn](https://yarnpkg.com/) (optional, but recommended)

### Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd appteams`
3. Install dependencies: `yarn install` or `npm install`

## Usage

### Starting the App
Run the following command to start the app in development mode:
```bash
npx expo start
```

### Running on Android
```bash
npx expo start --android
```

### Running on iOS
```bash
npx expo start --ios
```

### Running on Web
```bash
npx expo start --web
```

## Dependencies
- [Node](https://nodejs.org/en): 20.11.0
- [@expo-google-fonts/roboto](https://github.com/expo/google-fonts): ^0.2.3
- [expo](https://docs.expo.dev/): ~50.0.5
- [expo-font](https://docs.expo.dev/): ~11.10.2
- [expo-status-bar](https://docs.expo.dev/): ~1.11.1
- [react](https://reactjs.org/): 18.2.0
- [react-native](https://reactnative.dev/): 0.73.2
- [styled-components](https://styled-components.com/): ^6.1.8
- [react-native-svg](https://github.com/react-native-svg/react-native-svg): 14.1.0

## Development

### Running Locally
Ensure you have the required dev dependencies installed:
```bash
npm install
```

Run the app in development mode:
```bash
npx expo start
```

### Code Structure
- `src/`: Contains the main source code of the application.
- `assets/`: Includes static assets such as images, fonts, etc.

## Contributing
Contributions are welcome! Please check the [contributing guidelines](CONTRIBUTING.md) for more details.

## License
This project is licensed under the [MIT License](LICENSE).
