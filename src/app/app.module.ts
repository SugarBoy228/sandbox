import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { RouterModule } from '@angular/router';
import { AppService } from './shared/services/app.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/modules/material.module';
import { CrudModule } from './crud/crud.module';
import { SnackBarModule } from './shared/components/snack-bar/snack-bar.module';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MainModule,
    RouterModule,
    MaterialModule,
    CrudModule,
    SnackBarModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
