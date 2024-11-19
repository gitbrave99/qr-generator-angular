import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { QRCodeErrorCorrectionLevel } from 'angularx-qrcode';
import { MessageService, TooltipOptions } from 'primeng/api';
import { FileUpload, FileSelectEvent } from 'primeng/fileupload';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'generatroqrng';
  color: string | undefined;
  qrColor: string = "";
  qrData: string = 'https://www.google.com';
  qrErrLev: QRCodeErrorCorrectionLevel= "M";
  imageSrc: string | ArrayBuffer | null | undefined = "";
  imageTitle: string = "";
  myForm:FormGroup=new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private messageService: MessageService, 
    ) { 
      this.myForm= this.fb.group({
        data:[""],
        logo:[""],
        errCorrLevel:["M"],
        color:["#000000"],
      });
    }
    
  onUpload(event: FileSelectEvent, pfilup: FileUpload): void {
    const file = event.currentFiles[0];
    pfilup.clear();
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.myForm.get("logo")?.setValue(this.imageSrc);
        this.imageTitle = file.name;
      };
      reader.readAsDataURL(file);
    }
  }

  tooltipOptions: TooltipOptions = {
    showDelay: 150,
    tooltipEvent: 'hover',
    tooltipPosition: 'left'
  };

  onSubmit() {
    console.info("data: ", this.myForm);
    this.qrData=this.myForm.get("data")?.value;
    this.qrColor= this.myForm.get("color")?.value;
    this.qrErrLev = this.myForm.get("errCorrLevel")?.value;
  }

}
