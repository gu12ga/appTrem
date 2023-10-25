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
  checkBoxValue2:boolean = false;
  isCheckboxDisabled:boolean = false;

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

    if(this.checkBoxValue){
      (async () => {
        await Storage.set({
          key: 'alertas',
          value: 'false',
        });
      })();
    } else{
      (async () => {
        await Storage.set({
          key: 'alertas',
          value: 'true',
        });
      })();
    }
  }

  onChangeCheckBoxValueAll(){
    if(this.checkBoxValue2){

      (async () => {
        await Storage.set({
          key: 'alertas',
          value: 'false',
        });
      })();
      this.checkBoxValue = true;
      this.isCheckboxDisabled = true;

    } else{

      (async () => {
        await Storage.set({
          key: 'alertas',
          value: 'true',
        });
      })();
      this.checkBoxValue = false
      this.isCheckboxDisabled = false

    }
  }

  ngOnInit() {
  }

  saibaMais(){
  }

  onAjudaClick(){
    (async () => {
      const alertas = await Storage.get({ key: 'alertas' });
      
      if (alertas && alertas.value !== null) {

        if(JSON.parse(alertas.value.toLowerCase()) == false){
          this.alertas = false
          this.checkBoxValue2 = false
          this.checkBoxValue = false
          this.isCheckboxDisabled = false
        }

      }
    })();
    this.navCtrl.navigateForward('/ajuda');
  }

  onManejoClick(){
    (async () => {
      const alertas = await Storage.get({ key: 'alertas' });
      
      if (alertas && alertas.value !== null) {

        if(JSON.parse(alertas.value.toLowerCase()) == false){
          this.alertas = false
          this.checkBoxValue2 = false
          this.checkBoxValue = false
          this.isCheckboxDisabled = false
        }

      }
    })();
    this.navCtrl.navigateForward('/manejo');
  }
  onConfiClick(){
    (async () => {
      const alertas = await Storage.get({ key: 'alertas' });
      
      if (alertas && alertas.value !== null) {

        if(JSON.parse(alertas.value.toLowerCase()) == false){
          this.alertas = false
          this.checkBoxValue2 = false
          this.checkBoxValue = false
          this.isCheckboxDisabled = false
        }

      }
    })();
    this.navCtrl.navigateForward('/confi');
  }

}
