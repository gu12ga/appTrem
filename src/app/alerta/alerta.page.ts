import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  saibaMais(){}
  onAjudaClick(){
    this.navCtrl.navigateForward('/ajuda');
  }

}
