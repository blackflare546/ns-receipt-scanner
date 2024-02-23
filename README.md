# Digital Receipt Scanner

## Installation

To install the dependencies for the NativeScript project, please ensure you have Node.js v18.13.0 and yarn installed on your system. Then, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory using your terminal or command prompt.

3. Run the following command to install dependencies using yarn:

   ```
   yarn
   ```

4. After installing yarn, run the command

   ```
   git apply --ignore-whitespace patches/nativescript-ocr+1.0.0.patch
   ```

## Package Patching

The `nativescript-ocr` module contains a deprecated package. To update the package, follow the steps below:

1. Open `node_modules/nativescript-ocr/platforms/android/include.gradle`.
2. Change all instances of `compile` to **`implementation`**.

After making these changes, run the following command:

```
patch-package nativescript-ocr
```

It will create a folder and file "patches/nativescript-ocr+1.0.0.patch"

`Only do the patch, if you receive a error on nativescript-ocr package`

## Running the App

To run the NativeScript app, follow the steps below:

### Android

Run the following command to start the app on an Android device or emulator:

```
ns run android
```

### iOS

Run the following command to start the app on an iOS device or simulator:

```
ns run ios
```

## Generating Components

To generate a new component in your NativeScript project, use the Angular CLI (assuming your project is using Angular). Run the following command:

```
ng g c <component-name>
```

Replace `<component-name>` with the name you want to give to your component.

## Generating Modules

To generate a new module in your NativeScript project, also use the Angular CLI. Run the following command:

```
ng g m <module-name>
```

Replace `<module-name>` with the name you want to give to your module.

ng g m <module-name>

```

Replace `<module-name>` with the name you want to give to your module.

## Additional Notes

- Make sure you have the necessary SDKs and emulators/simulators set up for Android and iOS development if you intend to run the app on those platforms.

- Ensure your development environment is properly configured according to the NativeScript documentation.

- For more detailed information on using NativeScript, refer to the official NativeScript documentation: [NativeScript Docs](https://docs.nativescript.org/).

Happy coding! 🚀📱
```
