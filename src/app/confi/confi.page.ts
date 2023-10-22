import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confi',
  templateUrl: './confi.page.html',
  styleUrls: ['./confi.page.scss'],
})
export class ConfiPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onAlertaClick(){
    this.navCtrl.navigateForward('/alerta');

  }

  onAjudaClick(){
    this.navCtrl.navigateForward('/ajuda'); 
  }

  onManejoClick(){
    this.navCtrl.navigateForward('/manejo');
  }


}
