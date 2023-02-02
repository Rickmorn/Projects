import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CreateComponent } from './admin/create/create.component';
import { ModifyComponent } from './admin/modify/modify.component';
import { NoteComponent } from './note/note.component';
import { InfoComponent } from './info/info.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './admin/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminhomeComponent,
    CreateComponent,
    ModifyComponent,
    NoteComponent,
    InfoComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
