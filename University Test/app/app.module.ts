import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TestsService } from './services/tests.service';
import { UserService } from './services/user.service';
import { TestCardComponent } from './components/test-card/test-card.component';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
const appRoutes: Routes = [
    {
        path: 'app/test/:id',
        component: TestCardComponent,
    },
    {
        path: 'app/home',
        component: HomeComponent,
    },
    {
        path: 'app/settings',
        component: UserSettingsComponent,
    },
    {
        path: '**',
        redirectTo: 'app/home'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        TestCardComponent,
        HomeComponent,
        UserSettingsComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
    ],
    providers: [TestsService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
