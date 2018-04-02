import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './app/attr-directive/highlight.directive';
import { FileUploadComponent } from './app/file-upload/file-upload.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpserviceService } from './services/httpservice.service';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { MultiselectComponent } from './multiselect/multiselect/multiselect.component';
import { MultiSelectBodyComponent } from './multiselect/multiselect.component';
import { FilterItemPipe } from './multiselect/filter-item.pipe';
import { FormsModule } from '@angular/forms';
import { CloseMenuDirective } from './multiselect/close-menu.directive';
import { FormExampleModule } from './form-example/form-example.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FileUploadComponent,
    ServicesComponent,
    PostListComponent,
    PostDetailComponent,
    MultiSelectBodyComponent,
    MultiselectComponent,
    FilterItemPipe,
    CloseMenuDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FormExampleModule
  ],
  providers: [
    HttpserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
