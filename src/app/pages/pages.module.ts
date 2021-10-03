import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { SidenavComponent } from './share/sidenav/sidenav.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';





@NgModule({
  declarations: [DashboardComponent, PagenotfoundComponent, PagesComponent, HeaderComponent, FooterComponent, SidenavComponent, MainpanelComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
