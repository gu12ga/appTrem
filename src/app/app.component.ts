import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  routerHidden = true;

  constructor() {
  }
  
  ngOnInit() {

    setTimeout(() => {
      this.routerHidden = false;
    }, 0);
  }

  ionViewWillEnter() {
    (async () => {
      await SplashScreen.show({
        showDuration: 0,
        autoHide: true,
      })})()
  }
}
