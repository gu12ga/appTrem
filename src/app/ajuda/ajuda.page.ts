import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  expanded1: boolean = false;
  expanded2: boolean = false;
  alertas : boolean = false;

  constructor(private navCtrl: NavController) {
    (async () => {

      const alertas = await Storage.get({ key: 'alertas' });
      
      if (alertas && alertas.value !== null) {

        this.alertas = JSON.parse(alertas.value.toLowerCase());

      }
    })()
  }

  ngOnInit() {
  }

  ionViewWillEnter() {

    const n = Math.random();

    const resul = Math.round(n);

    if (resul && !this.alertas) {
      
      this.alertas = true;
      
      (async () => {
        await Storage.set({
          key: 'alertas',
          value: 'true',
        });
      })();
    }
  }
  

  toggleExpand1() {
    this.expanded1 = !this.expanded1;
  }

  toggleExpand2() {
    this.expanded2 = !this.expanded2;
  }

  onAlertaClick(){
      this.navCtrl.navigateForward('/alerta');
  }

  toggleExpandTodas(){
    this.expanded1 = !this.expanded1;
    this.expanded2 = !this.expanded2;
  }

  onManejoClick(){
    this.navCtrl.navigateForward('/manejo');
  }

  onConfiClick(){
    this.navCtrl.navigateForward('/confi');
  }


}
