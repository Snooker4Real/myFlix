import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { FormCommentComponent } from './components/form-comment/form-comment.component';
import { FormSeriesComponent } from './components/form-series/form-series.component';
import { AddCommentComponent } from './views/add-comment/add-comment.component';
import { AddSeriesComponent } from './views/add-series/add-series.component';
import { EditSeriesComponent } from './views/edit-series/edit-series.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';
import { SeriesComponent } from './views/series/series.component';
import { SingleSeriesComponent } from './views/single-series/single-series.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorsFormComponent,
    FormCommentComponent,
    FormSeriesComponent,
    AddCommentComponent,
    AddSeriesComponent,
    EditSeriesComponent,
    ErrorComponent,
    LoginComponent,
    SeriesComponent,
    SingleSeriesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
