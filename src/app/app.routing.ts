import { Routes, Route } from '@angular/router';
import { NowPlayingComponent } from './components/NowPlaying/now-playing.component';
import { ChooseGenreComponent } from './components/ChooseGenre/choose-genre.component';
import { ChooseSongComponent } from './components/ChooseSong/choose-song.component';

export const APP_ROUTES: Routes = [
    { path: '', component: NowPlayingComponent},
    { path: 'choose-genre', component: ChooseGenreComponent},
    { path: 'choose-song', component: ChooseSongComponent},
    { path: '**', component: NowPlayingComponent} // Fallback route

    // { path: 'unsupported', component: UnsupportedComponent },
    // { path: '401', component: UnauthorizedComponent },
    // {
    //     path: 'vendor',
    //     component: WikiComponent,
    //     canActivate: [WikiAttributeGuard],
    //     children: [
    //         // {path: '', component: HomeComponent},
    //         {
    //             path: '', redirectTo: '/vendor/home', pathMatch: 'full',
    //         },
    //         {path: 'home', component: HomeComponent},
    //         {
    //             path: ':vendor',
    //             component: VendorDetailComponent ,
    //             children:  [
    //                 { path: '',  redirectTo: 'home', pathMatch: 'full'},
    //                 { path: 'home', component: VendorHomeComponent},
    //                 { path: 'attachments', component: VendorAttachmentsComponent},
    //                 { path: 'company-details', component: VendorCompanyDetailComponent },
    //                 { path: 'contacts', component: VendorContactsComponent },
    //                 { path: 'contracts', component: VendorContractsComponent },
    //                 { path: 'feedback', component: VendorFeedbackComponent },
    //                 { path: 'news', component: VendorNewsComponent },
    //                 { path: 'spend-cube', component: VendorSpendCubeComponent },
    //                 { path: 'rapid-ratings', component: VendorRapidRatingsComponent}
    //             ]

    //         }
    //     ]
    // },

];

