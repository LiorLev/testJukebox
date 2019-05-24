import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { NowPlayingComponent } from './components/NowPlaying/now-playing.component';
import { ChooseGenreComponent } from './components/ChooseGenre/choose-genre.component';
import { ChooseSongComponent } from './components/ChooseSong/choose-song.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    NowPlayingComponent,
    ChooseGenreComponent,
    ChooseSongComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
