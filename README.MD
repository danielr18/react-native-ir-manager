# react-native-ir-manager

A react-native interface for using the Infrared (IR) transmitter in Android smartphones with [ConsumerIRManager](https://developer.android.com/reference/android/hardware/ConsumerIrManager.html). 

## Getting started

`$ npm install react-native-ir-manager --save`

### Automatic installation

`$ react-native link react-native-ir-manager`

or

`$ rnpm link react-native-ir-manager`

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.danielr18.irmanager.IRManagerReactPackage;` to the imports at the top of the file
  - Add `new IRManagerReactPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ir-manager'
    project(':react-native-ir-manager').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-ir-manager/android'))
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ir-manager')
  	```

## Supported Devices List

Most of the devices in this [list](https://en.wikipedia.org/wiki/List_of_devices_with_IR_blaster#Smartphones) should be supported.


## Usage

```jsx
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Button,
} from 'react-native';
import IRManager, { hasIrEmitter, transmitProntoCode } from 'react-native-ir-manager';


export default class RNIRTest extends Component {

  hasIrEmitter() {
    IRManager.hasIrEmitter()
      .then(hasIrEmitter => console.log(hasIrEmitter ? 'Device has IR emitter' : "Device doesn't have IR emitter"));
  }

  getCarrierFrequencies() {
    IRManager.getCarrierFrequencies()
      .then(console.log)
      .catch(console.log);
  }

  transmitProntoCode(prontoHexCode) {
    IRManager.transmitProntoCode(prontoHexCode)
      .then(console.log)
      .catch(console.log);
  }

  render() {
    const SAMSUNG_TURN_ON_PRONTO_CODE = '0000 006d 0022 0003 00a9 00a8 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0040 0015 0015 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 0702 00a9 00a8 0015 0015 0015 0e6e';

    return (
      <View>
        <Button onPress={this.hasIrEmitter} title="Has IR Emitter Support?" />
        <Button onPress={this.getCarrierFrequencies} title="Log Carrier Frequencies" />
        <Button onPress={() => this.transmitProntoCode(SAMSUNG_TURN_ON_PRONTO_CODE)} title="Turn on Samsung TV" />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNIRTest', () => RNIRTest);
```

### hasIrEmitter()
Check whether the device has an infrared emitter. Promise returns a boolean.

### getCarrierFrequencies()
Query the infrared transmitter's supported carrier frequencies. Returns an Array of Objects with the minimun and maximum frequency (inclusive) on which the infrared emitters can transmit  

### transmit(carrierFrequency : Number, pattern : [Number])
Transmit an infrared pattern. Promise returns a `true` value if it gets transmitter.

### transmitProntoCode(prontoHexCode : String)
Converts a Pronto Hex Code commonly found online to an infrared pattern, which is then transmitter. Promise returns a `true` value if it gets transmitter.

## Credits

This project used [react-native-module-boilerplate](https://github.com/tipsi/react-native-module-boilerplate) as a base and it was a helpful way to get started.
