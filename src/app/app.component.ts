import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  routerHidden = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.hideSplash();
    }, 5000);
  }

  async hideSplash() {
    this.routerHidden = false;
    
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.display = 'none';
    }
  }
}
