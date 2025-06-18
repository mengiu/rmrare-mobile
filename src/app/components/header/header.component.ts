import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Storage],
  imports: [IonHeader, IonToolbar, IonTitle]
})
export class HeaderComponent implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public storage: Storage,
  ) { }
  ngOnInit() { }
  Signin() {

    //this.route.navigateByUrl('/registration');

  }
  async openLanguagePopover(ev: any) {
  }
}
