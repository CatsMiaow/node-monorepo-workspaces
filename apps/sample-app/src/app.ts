import { helloWorld, isGetBar } from './service';

(() => {
  console.log('> helloWorld', helloWorld());
  console.log('> isGetBar', isGetBar());
})();
