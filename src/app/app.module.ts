import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { FILE_UPLOAD_CONFIG } from './file-upload/settings';
import { CustomErrorHandler } from './core/error-handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, UiModule],
    providers: [
        { provide: FILE_UPLOAD_CONFIG, useValue: { multiple: false } },
        Title
        // { provide: ErrorHandler, useValue: CustomErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
