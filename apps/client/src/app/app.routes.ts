import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page';
import { ChatPage } from './features/chat/pages/chat-page/chat-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'chat',
        component: ChatPage,
    },

];
