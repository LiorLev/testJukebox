import { Component, OnInit } from '@angular/core';
// import { Globals } from 'src/app/wiki/Services/global.service';
// import { MessengerService } from 'src/app/wiki/Services/messenger.service';
// import { QueryService } from 'src/app/wiki/Services/query.service';


@Component({
  selector: 'app-choose-genre',
  templateUrl: './choose-genre.component.html'
//   styleUrls: ['./']
})

export class ChooseGenreComponent implements OnInit {
//   messengerSubscription: any;
//   vendorIndex: any;
//   constructor(
//     public messengerService: MessengerService,
//     public globals: Globals,
//     public queryService: QueryService,
//   ) { }


  ngOnInit() {
      console.log('hello');
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

