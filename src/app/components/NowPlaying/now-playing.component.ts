import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, Params } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
// import { Globals } from 'src/app/wiki/Services/global.service';
// import { MessengerService } from 'src/app/wiki/Services/messenger.service';
// import { QueryService } from 'src/app/wiki/Services/query.service';


@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html'
  //   styleUrls: ['./']
})

export class NowPlayingComponent implements OnInit {
  x;
  constructor(private db: AngularFireDatabase) {
  }
  // items;
  // constructor(
  //   public firebaseService: FirebaseService,
  //   private router: Router
  // ) { }
  //   messengerSubscription: any;
  //   vendorIndex: any;
  //   constructor(
  //     public messengerService: MessengerService,
  //     public globals: Globals,
  //     public queryService: QueryService,
  //   ) { }


  // doSomething() {
    
  // }

  ngOnInit() {
    console.log('hello ');
    console.log(this.db.object('jukebox/received').set({userAccepted: 'truee'}));
    // this.firebaseService.getMessages().then(res => {
    //   console.log(res);
    // });

    // .subscribe(res => {
    //   console.log(res);
    // });
    // this.messengerSubscription = this.messengerService.message.subscribe((m) => {
    //   if (m.split(':').includes('set')) {
    //     const vendor = m.split(':')[1];
    //     try {
    //       this.vendorIndex = this.globals.Vendors.findIndex(v => v.friendly_name === vendor);
    //     } catch (ex) {
    //       console.log('company may not exist');
    //     }
    //   }
    // });
  }

}

