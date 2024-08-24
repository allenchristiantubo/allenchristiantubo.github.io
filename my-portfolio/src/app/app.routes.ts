import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { NotFoundScreenComponent } from './core/components/not-found-screen/not-found-screen.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { AboutComponent } from './core/pages/about/about.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        // children: [
        //     {
        //         path: "",
        //         component: 
        //     },
        // ]
    },
    {
        path: "**",
        component: NotFoundScreenComponent
    }
];
