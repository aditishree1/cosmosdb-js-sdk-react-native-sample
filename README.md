# React Native Todo App with Azure Cosmos DB

A simple todo application demonstrating CRUD operations with Azure Cosmos DB JavaScript SDK in React Native.

## What This App Does

- ✅ Create, Read, Update, and Delete todos
- ☁️ Stores data in Azure Cosmos DB
- 📱 Works on Android devices


## Prerequisites

- Node.js >= 20
- Android Studio and React Native development environment
- Azure Cosmos DB account ([Create one](https://docs.microsoft.com/azure/cosmos-db/))

## Setup

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd TestRN2
npm install
```

### 2. Configure Azure Cosmos DB

Edit `services/cosmosService.ts` and replace with your credentials:

```typescript
const ACCOUNT_ENDPOINT = 'https://your-account.documents.azure.com:443/';
const ACCOUNT_KEY = 'your-cosmos-db-primary-key';
```

### 3. Run the App

```bash
npm start
npm run android
```

## Project Structure

```
TestRN2/
├── App.tsx                  # Main UI
├── shim.ts                  # Polyfills
├── metro.config.js          # Metro config for Node.js modules
├── services/
   └── cosmosService.ts     # Cosmos DB operations
```

## How It Works

This app uses Azure Cosmos DB's Node.js SDK in React Native by:

1. Loading polyfills for Node.js modules (`shim.ts`)
2. Mapping Node modules in Metro bundler (`metro.config.js`)


## Troubleshooting

**Metro errors:**
```bash
npm start -- --reset-cache
```

**Build errors:**
```bash
cd android && ./gradlew clean && cd ..
npm run android
```



# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
