import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ImageConverterService {
  constructor() {}

  convert(fileSelected: File) {
    // convert file to base64
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      let file;
      reader.onloadend = (e) => {
        file = reader.result;
        resolve(file);
      };
      reader.readAsDataURL(fileSelected);
    });
  }
}
