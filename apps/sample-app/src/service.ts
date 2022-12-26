import { getBar, isBar } from 'sample-lib';

export function helloWorld(): string {
  return 'Hello World!';
}

export function isGetBar(): boolean {
  return isBar(getBar());
}
