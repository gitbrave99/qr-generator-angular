import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCardComponentComponent } from './components/qr-card-component/qr-card-component.component';
import { PrimengmModule } from '../primengm/primengm.module';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    QrCardComponentComponent
  ],
  imports: [
    CommonModule,
    PrimengmModule,
    QRCodeModule
  ],
  exports: [
    QrCardComponentComponent
  ]
})
export class RxqrcodeModule { }
