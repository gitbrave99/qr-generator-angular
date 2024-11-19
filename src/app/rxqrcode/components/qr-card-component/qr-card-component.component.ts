import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeErrorCorrectionLevel } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-card-component',
  templateUrl: './qr-card-component.component.html',
  styleUrls: ['./qr-card-component.component.scss']
})
export class QrCardComponentComponent implements OnChanges {


  @Input() qrData: string = 'por default';
  @Input() logoUrl: string | ArrayBuffer | null | undefined = '';
  @Input() qrColor: string = '';
  @Input() errCorrLevel: QRCodeErrorCorrectionLevel = 'M';
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes: ",changes['errCorrLevel']);
    
  }

  
  
  
}
