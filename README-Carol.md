## Notes from Carol

This is a simple clone app of Lazada Mobile App built using

- [React Native v0.68.2](https://reactnative.dev/)

Together with some 3rd party libraries:

- [React Navigation v6](https://reactnavigation.org/docs/getting-started/) - for navigation
- [Masonry List](https://github.com/hyochan/react-native-masonry-list) - to render product listing
- [Axios](https://github.com/axios/axios) - for API calling
- [redux](https://redux.js.org/) - for state management
- [redux-saga](https://redux-saga.js.org/) - for side effect management
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - free icon sets

- Full detail from `package.json`:

```
    "@react-native-community/async-storage": "^1.12.1",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-native-seoul/masonry-list": "^1.3.0",
    "@react-navigation/bottom-tabs": "^6.3.1",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/stack": "^6.2.1",
    "axios": "^0.27.2",
    "moment": "^2.29.3",
    "qs": "^6.10.3",
    "react": "17.0.2",
    "react-native": "0.68.2",
    "react-native-fast-image": "^8.5.11",
    "react-native-gesture-handler": "^2.4.2",
    "react-native-get-random-values": "^1.8.0",
    "react-native-image-slider-box": "^1.1.23",
    "react-native-safe-area-context": "^4.2.5",
    "react-native-screens": "^3.13.1",
    "react-native-vector-icons": "^9.1.0",
    "react-redux": "^8.0.2",
    "redux": "^4.2.0",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-saga": "^1.1.3",
    "uuid": "^8.3.2"
```

## App Folder Structure

- `api` - for API related files
- `components` - the common components
- `navigator` - routes configuration
- `redux` - all redux related files
- `screens` - the screens itself
- `themes` - predefined colors
- `utils` - basic utils for alert, number & sizes

## Clone

```sh
git clone https://github.com/kyaroru/ReactJSTest.git
```

## Install

```sh
cd ReactJSTest && yarn install
cd ios && pod install (for iOS)
```

## Run

```sh
yarn ios or open ios/ReactNativeACNTest.xcworkspace
yarn android or use Android Studio to run
```

## Screenshots

- Screenshots can be found [here](https://drive.google.com/drive/folders/13WX9C4wRqWQ89BJdWoMKUwiGaM11XUJA?usp=sharing)

## Video Demo

- For full Demo video, refer to [here](https://recordit.co/5i7OJvH0hA)

![Demo](http://g.recordit.co/5i7OJvH0hA.gif)
