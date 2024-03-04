# Digital Receipt Scanner

## Installation

To install the dependencies for the NativeScript project, please ensure you have Node.js v18.13.0 and yarn installed on your system. Then, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory using your terminal or command prompt.

3. Run the following command to install dependencies using yarn:

   ```
   yarn
   ```

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
 # System Functionality


* Dashboard
  * Users Total Spend
  * Add Receipt Button
  * Receipt Lists
* Add Receipt Screen
  * Receipt Form
* Camera
* Reports
  * Generate Receipt Report

***
 

 ### Dashboard
![Dashboard](/src//assets/app-screenshot//dashboard-ui.png)

***
**Users Total Spend** - This component shows the total spend of the users base on the its receipt, it dynamically total its sum everytime the user will add a receipt. 

**Add Receipt Button** - This component will redirect the user to add receipt screen

**Receipt List** - This component shows all the receipt that has been capture/add manualy from the user.

***

 ### Add Receipt Screen
![Dashboard](/src//assets/app-screenshot//add-receipt-ui.png)

*** 
**Receipt Form** - This screen shows all the required fields for the user to create an manually generated receipt. 
***


 ### Camera
![Dashboard](/src//assets/app-screenshot//camera-ui.png)

*** 
**Camera** - This screen will allow user to capture a receipt.
***

 ### Reports
![Dashboard](/src//assets/app-screenshot//report-ui.png)

*** 
**Camera** - This screen will allow the user to download its record depends on what kind of conversion will be done. It can be generated with the following choices CSV, WORD, and EXCEL.
***
