import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HillstationComponent } from './hillstation/hillstation.component';
import { SkandagiriComponent } from './hillstation/skandagiri/skandagiri.component';
import { DdComponent } from './dams/dd/dd.component';
import { MakaliComponent } from './dams/makali/makali.component';
import { NandihillsComponent } from './hillstation/nandihills/nandihills.component';
import { HomeComponent } from './home/home.component';
import { DamsComponent } from './dams/dams.component';


const routes: Routes = [

  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {path:'about',component:AboutComponent},
  
  {
    path:'hillstation',
    children:[
      {path:'',component:HillstationComponent},
      {path:'nandihills',component:NandihillsComponent},
      {path:'skandagiri',component:SkandagiriComponent},
      
    ]
    
  },
  {path:'dams',
  children:[
    {path:'',component:DamsComponent},
    {path:'dd',component:DdComponent},
    {path:'makali',component:MakaliComponent}
  ]
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
