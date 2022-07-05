import { Component, OnInit } from '@angular/core';
import { ModulService } from '../../../services/modul.service';


@Component({
  templateUrl: './modulreport.html'
})
export class modulreportComponent implements OnInit {
  constructor(private modulSer: ModulService,

  ) { }
  ngOnInit(): void {
    this.showPDF("ff");
  }

  public showPDF(fileName: string): void {
    this.modulSer.getPdf()
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        var newBlob = new Blob([x], { type: "application/pdf" });

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        /*  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob, fileName);
            return;
          }*/

        // For other browsers: 
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = fileName;
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }



}
