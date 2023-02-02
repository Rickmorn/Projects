import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CreateComponent } from './admin/create/create.component';
import { ModifyComponent } from './admin/modify/modify.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "admin", component: AdminhomeComponent},
  {path: "note/:id", component: NoteComponent},
  {path: "admin/create", component: CreateComponent},
  {path: "admin/modify/:id", component: ModifyComponent},
  {path: "admin/info", component: InfoComponent},
  {path: "admin/categories", component: CategoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
