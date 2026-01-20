// Import polyfills BEFORE any other imports
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

// TypeScript global augmentation
declare global {
    var crypto: {
        getRandomValues?: (array: Uint8Array) => Uint8Array;
    };
}

// Ensure crypto.getRandomValues is properly polyfilled
if (typeof globalThis.crypto === 'undefined') {
    (globalThis as any).crypto = {};
}

// Force override any existing getRandomValues implementation
const originalGetRandomValues = globalThis.crypto?.getRandomValues;
if (originalGetRandomValues) {
    console.log('react-native-get-random-values polyfill loaded and taking precedence');
}
