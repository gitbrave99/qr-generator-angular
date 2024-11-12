import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ColorPickerModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputSwitchModule,
    InputTextModule,
    SelectButtonModule,
    ButtonModule,
    SliderModule,
    IconFieldModule,
    InputIconModule,
    FileUploadModule,
    RadioButtonModule,
    TooltipModule,
    OverlayPanelModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimengmModule { }
