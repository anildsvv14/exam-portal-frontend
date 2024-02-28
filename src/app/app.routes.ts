import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/dashboard/dashboard.component';
import { adminGuard } from './services/gaurd/admin.guard';
import {userGuard} from './services/gaurd/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ShowQuizessComponent } from './pages/admin/show-quizess/show-quizess.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {
        path:'admin',
        component:DashboardComponent,
        canActivate:[adminGuard],
        children:[
            {
                path:'',
                component:WelcomeComponent
            },
            {
                path:'profile',
                component:ProfileComponent
            },
            {
                path:'categories',
                component:ViewCategoriesComponent
            },
            {
                path:'add-category',
                component:AddCategoriesComponent
            },
            {
                path:'quizzes',
                component:ShowQuizessComponent
            },
            {
                path:'add-quiz',
                component:AddQuizComponent
            },
            {
                path:'quiz/:qid',
                component:UpdateQuizComponent
            },
            {
                path:'quiz/view-question/:qid/:title',
                component:ViewQuizQuestionsComponent
            }
        ]
    },
    {
        path:'user',
        component:UserDashboardComponent,
        canActivate:[userGuard],
        children:[
            {
                path:'profile',
                component:ProfileComponent
            }
        ]
    },
    {
        path:'profile',
        component:ProfileComponent,
       
    },
    
];
