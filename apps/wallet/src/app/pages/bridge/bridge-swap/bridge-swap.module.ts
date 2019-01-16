import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { QRCodeModule } from 'angularx-qrcode';
import { BridgeSwapComponent } from './bridge-swap.component';
import { InstructionsComponent } from './steps/instructions/instructions.component';
import { SwapTypeComponent } from './steps/swap-type/swap-type.component';
import { ExampleComponent } from './steps/example/example.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { DepositErcComponent } from './steps/deposit-erc/deposit-erc.component';
import { CopyableTextModule, LoadingSpinnerModule } from '../../../shared/components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgSuspenseModule } from 'ng-suspense';

@NgModule({
  declarations: [
    BridgeSwapComponent,
    InstructionsComponent,
    SwapTypeComponent,
    ExampleComponent,
    DepositErcComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    RecaptchaModule,
    QRCodeModule,
    CopyableTextModule,
    FlexLayoutModule,
    NgSuspenseModule,
    LoadingSpinnerModule
  ],
  exports: [BridgeSwapComponent],
  entryComponents: [BridgeSwapComponent]
})
export class BridgeSwapModule {}
