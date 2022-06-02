## React Native Lazada Clone App

## Notes from Carol
I did this as part of a coding test from a company.
Initially I have informed them of my expected salary, & they had reviewed my CV and said approved to proceed to next stage. So they gave me this assessment :p 

It was very weird as I am applying for React Native developer position, but the test they provided is for React.js.
After consulting them, they say until the RN template is ready, candidate have to use the React.js template. 🎃

I also asked do I still need to clone the React.js one or I already can create a brand new RN app and commit to a new repository.
They replied no, I still need to clone the React.js template, then wipe out the codebase, and start committing my RN code. 🤯

Well, I already created an RN version in another new [repo](https://github.com/kyaroru/ReactNativeACNTest) since they only reply my question the next day after I ask the question. After that, I proceed with what they requested, forked their React.js repository into this repository, then migrate my old one from [here](https://github.com/kyaroru/ReactNativeACNTest)

It took me 3 days (midnight - after working hours & after dinner) to finish the requirement (4 tests in total).
When I finished and submitted to them, there is no reply from them until I follow up with them 4 days later.

It is only now they told me my assessment has passed but because my salary is little bit out of their budget, so they will not proceed interview with me 😢

They could've told me earlier before I start doing this assessment.

### Timeline of events
| Date | Time | Description |
| ---- | ---- | ----------- |
| 24th May 2022 | 5pm | Email of the assessment to me, and request the assessment to be completed by 26th May 2022 12pm (less than 48 hours to complete lazada clone app) |
| 24th May 2022 | 5:10pm | I asked the question above regarding react.js template |
| 24th May 2022 | Night | I created new repository and start working on it |
| 25th May 2022 | 10am | Reply from them - insist to forked the React.js one, then commit RN code into it |
| 25th May 2022 | 4pm | Well, migrate my new repo into the forked version of React.js repo |
| 25th May 2022 | Night | Continue working on it |
| 26th May 2022 | 4am in the MORNING | Told them cannot make it at 12pm for submission, as I tried my best only can finish 1st and 2nd test out of 4 tests |
| 26th May 2022 | 10am | Reply from them - allow me to extend the time until next day for submission |
| 26th May 2022 | Night | Continue working on it |
| 27th May 2022 | 3am in the MORNING | Finally finish everything & send email to respective person in charge |
| 27th May 2022 until 31st May 2022 | - | NO NEWS AT ALL |
| 31st May 2022 | 11am | Follow up with the person |
| 31st May 2022 | 3pm | Reply from them - Actually you already passed the test, but salary is a little bit over budget, so maybe no proceed to interview |

Programmer life is tough 🥲

But it's okay, now this can be part of my portfolio 😛

Btw, to prevent hurting anyone, I have detach my repository from the Parent repository 😛

Anyways, let's get to the intro!

----
## Introduction

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
git clone https://github.com/kyaroru/RNLazadaClone.git
```

## Install

```sh
cd RNLazadaClone && yarn install
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
