import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetOperationMangComponent } from './asset-operation-mang/asset-operation-mang.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

const routes: Routes = [
  {path:'', component:HomepageComponent,pathMatch:'full'},
  {path:'offer-details',component:OfferDetailsComponent,pathMatch:'full'},
  {path:'gantt', component:GanttChartComponent,pathMatch:'full'},

  {path:'**', component:NotFoundComponent,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
