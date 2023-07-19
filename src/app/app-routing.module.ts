import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedComponent} from "./feed/feed.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {MessagesComponent} from "./messages/messages.component";
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'feed', component: FeedComponent},
  {path:'notifications', component: NotificationsComponent},
  {path:'messages', component: MessagesComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
