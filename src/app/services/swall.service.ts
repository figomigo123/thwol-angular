import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SwallService {

  constructor() { }

 async save(title:string) {
   await Swal.fire({
      icon: 'success',
      title: title,
      position: 'top',
      timer: 2000,
      showConfirmButton: false,
    })
  }

  async confirme(className: string, itemName: string): Promise<boolean> {
    let conf = false;
  await  Swal.fire({
      title: "Remove",
      icon: "error",
      text: 'Do you want to remove ' + className+' ' + itemName,
      showCancelButton: true,
      confirmButtonText: 'Remove',

    }).then((result) => {
      // Read more about isConfirmed, isDenied below      
        conf= result.isConfirmed;  
    })   
    return conf;
   
}

  faild(title: string,text:string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      position: 'top',
      timer: 3000,
      showConfirmButton: false,
    })
}

}
