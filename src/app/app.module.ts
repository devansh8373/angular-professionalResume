import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MatCardModule} from '@angular/material/card';
import { BannerComponent } from './components/banner/banner.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { QualitiesComponent } from './components/qualities/qualities.component';
import { ExperienceComponent } from './components/experience/experience.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    IntroComponent,
    AboutMeComponent,
    SkillsComponent,
    QualitiesComponent,
    ExperienceComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule, BrowserAnimationsModule, MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
