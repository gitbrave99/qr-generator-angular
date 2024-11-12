import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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
  qrIcon: string = "";
  imageSrc: string | ArrayBuffer | null | undefined = "";
  imageTitle: string = "algo ok.png";
  ingredient!: string;


  constructor(private messageService: MessageService, private sanitizer: DomSanitizer) { }

  onUpload(event: FileSelectEvent, pfilup: FileUpload): void {
    const file = event.currentFiles[0];
    pfilup.clear();
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.imageTitle= file.name;
      };
      reader.readAsDataURL(file);
    }
  }

  tooltipOptions:TooltipOptions = {
    showDelay: 150,
    
    tooltipEvent: 'hover',
    tooltipPosition: 'left'
};
}
