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

  alert(message: string) {
    if (typeof window !== 'undefined' && window.alert) {
      window.alert(message);
    }
  }

  constructor() {}
}
