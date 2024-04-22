import { Injectable } from '@angular/core';

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root',
  useFactory: getWindow,
})
export class WindowRefService {
  get nativeWindow(): any {
    return getWindow();
  }

  constructor() {}
}
