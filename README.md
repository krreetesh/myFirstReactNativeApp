# myFirstReactNativeApp Guideline
1. First install Homebrew using the instructions on Home-brew website https://brew.sh/
2. Then install Node.js by executing the following in a Terminal window:
    brew install node
3. Next install watchman using brew, a file watcher from Facebook:
    brew install watchman
    watchman is used by React Native to figure out when our code changes and rebuild accordingly. 
4. Next use npm to install the React Native Command Line Interface (CLI) tool:
    npm install -g react-native-cli
    ,,npm uses Node Package Manager to fetch the CLI tool and install it globally, similar to CocoaPods.
5. Now navigate to folder where we would like to develop our app:
    react-native init ProjectName
    e.g.
    react-native init myFirstReactNativeApp
    this uses CLI tool to create a starter project containing everything you need to build and run a React Native app.
6. under project myFirstReactNativeApp, description of created folder and files:
    • node_modules - is a folder which contains the React Native framework
    • index.js - is the entry point created by the CLI tool
    • App.js - is the skeletal app created by CLI tool
    • iOS - is a folder containing an Xcode project and the code required to bootstrap our app
    • android - is a folder containing Android-related code
