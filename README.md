# R3 (React, React Native, Redux) Simple Starter for International Hybrid Application

## Get Started!

### Install packages

```
npm install
```

### Rename project name

```
export NEW_PROJECT_NAME=YOUR_PROJECT_NAME
sed -i "" -e "s/r3sample/${NEW_PROJECT_NAME}/" package.json
sed -i "" -e "s/r3sample/${NEW_PROJECT_NAME}/" index.ios.js
sed -i "" -e "s/r3sample/${NEW_PROJECT_NAME}/" index.android.js
react-native upgrade
```

and select like this

```
Do you want to replace .gitignore? Answer y to replace, n to keep your version:
n
Do you want to replace android/app/BUCK? Answer y to replace, n to keep your version:
y
Do you want to replace android/app/build.gradle? Answer y to replace, n to keep your version:
y
Do you want to replace android/app/src/main/AndroidManifest.xml? Answer y to replace, n to keep your version:
y
Do you want to replace android/app/src/main/res/values/strings.xml? Answer y to replace, n to keep your version:
y
Do you want to replace android/settings.gradle? Answer y to replace, n to keep your version:
y
Do you want to replace app.json? Answer y to replace, n to keep your version:
y
```

#### Notice!

**"NEW_PROJECT_NAME" should be alphanumeric**

### Delete r3 sample files

```
rm -rf android/app/src/main/java/com/r3sample/ \
ios/r3sample-tvOS/ \
ios/r3sample-tvOSTests/ \
ios/r3sample.xcodeproj/ \
ios/r3sample/ \
ios/r3sampleTests/
```

### Delete .git and init for your project

```
rm -rf .git
git init
git add -A
git commit -m "Initial Commit"
```

### Start Web

```
npm run start-web-dev
```

and access to localhost:2200

### Start Native (iOS)

```
react-native run-ios
```

### Set up for Android

Set your $ANDROID_HOME path

```
echo "sdk.dir=${ANDROID_HOME}" > android/local.properties
```

### Start Native (Android)

```
react-native run-android
```

### Test (Web & Native) by Jest

```
npm test
```

#### Note

if you got an error for testing, you have to install jest globally

```
npm install jest -g
```


### Build for Web

compile files for web production

```
npm run build-web
```

after this, www directory will be generated  
then upload www files to your production root

### Note

This package is depends on react-native-cli  
So you have to install react-native-cli globally

```
npm install react-native-cli -g
```

### This includes...

- react
- react-native
- redux
- react-intl
- react-router
- react-router-native

### FYI

if you want to set uikit, we highly recommends material-ui(for web) and NativeBase(for Native)

- material-ui
    - https://github.com/callemall/material-ui
- NativeBase
    - https://github.com/GeekyAnts/NativeBase
