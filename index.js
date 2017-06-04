import { NativeModules } from 'react-native';

export const {
    hasIrEmitter,
    getCarrierFrequencies,
    transmit,
    transmitProntoCode
} = NativeModules.RNIRManagerModule;

export default NativeModules.RNIRManagerModule;