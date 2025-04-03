import { helloWorld, isGetBar } from './service.js';

(() => {
  console.log('sample-app> helloWorld', helloWorld());
  console.log('sample-app> isGetBar', isGetBar());
})();
