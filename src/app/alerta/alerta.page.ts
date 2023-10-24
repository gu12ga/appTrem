import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  alertas:boolean = true;
  checkBoxValue:boolean = false;

  constructor(private navCtrl: NavController) { 
  }

  ionViewWillEnter() {
    (async () => {
      const alertas = await Storage.get({ key: 'alertas' });
      
      if (alertas && alertas.value !== null) {

        this.alertas = JSON.parse(alertas.value.toLowerCase());

      }
    })();
  }

  onChangeCheckBoxValue(){

    this.alertas = false;
      
    (async () => {
      await Storage.set({
        key: 'alertas',
        value: 'false',
      });
    })();

    this.checkBoxValue = false;
  }
  ngOnInit() {
  }

  saibaMais(){
  }

  onAjudaClick(){
    this.navCtrl.navigateForward('/ajuda');
  }

  onManejoClick(){
    this.navCtrl.navigateForward('/manejo');
  }
  onConfiClick(){
    this.navCtrl.navigateForward('/confi');
  }

}
