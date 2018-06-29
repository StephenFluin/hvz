import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { StatsComponent } from './stats/stats.component';
import { RulesComponent } from './rules/rules.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        ProfileComponent,
        ChatComponent,
        StatsComponent,
        RulesComponent,
        LogoutComponent,
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'stats', component: StatsComponent },
            { path: 'rules', component: RulesComponent },
            { path: 'logout', component: LogoutComponent },
        ]),
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
