import { Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr-card-component',
  templateUrl: './qr-card-component.component.html',
  styleUrl: './qr-card-component.component.scss'
})
export class QrCardComponentComponent {

  @Input() qrData: string = 'www.facebook.com';
  @Input() logoUrl: string | ArrayBuffer | null | undefined = '';
  @Input() qrColor: string = '';
  public qrCodeDownloadLink: SafeUrl = "";

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  getUrlLogo():string{
    let algo=this.logoUrl?.toString();
    if (algo) {
      
    }
    return this.logoUrl?.toString()||"";
  }
  
}
