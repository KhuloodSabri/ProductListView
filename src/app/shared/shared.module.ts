import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PopUpMessageComponent } from './pop-up-message/pop-up-message.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent, MainContentComponent, PopUpMessageComponent],
  exports: [HeaderComponent, MainContentComponent, PopUpMessageComponent],
  providers: [ApiService]
})
export class SharedModule { }
