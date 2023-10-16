import { helloWorld, isGetBar } from './service';

(() => {
  console.log('sample-app> helloWorld', helloWorld());
  console.log('sample-app> isGetBar', isGetBar());
})();
