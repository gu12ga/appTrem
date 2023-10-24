import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-confi',
  templateUrl: './confi.page.html',
  styleUrls: ['./confi.page.scss'],
})
export class ConfiPage implements OnInit {

  nomePropriedade: string = ''
  estado: string = '';
  cidade: string = '';
  listRegiao: string[] = [];
  alertas: boolean = false;

  constructor(private navCtrl: NavController) { 
    this.updateData()
  }

  async updateData() {
    const nomePropriedade = await Storage.get({ key: 'nomePropriedade' });
    const estado = await Storage.get({ key: 'estado' });
    const cidade = await Storage.get({ key: 'cidade' });
    const regiao = await Storage.get({ key: 'regioes' });
  
    if (nomePropriedade && nomePropriedade.value !== null) {
      this.nomePropriedade = nomePropriedade.value;
    }
    if (estado && estado.value !== null) {
      this.estado = estado.value;
    }
    if (cidade && cidade.value !== null) {
      this.cidade = cidade.value;
    }
    if (regiao && regiao.value !== null) {
      this.listRegiao = JSON.parse(regiao.value);
    }

    const alertas = await Storage.get({ key: 'alertas' });
      
    if (alertas && alertas.value !== null) {

      this.alertas = JSON.parse(alertas.value.toLowerCase());
    }
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.updateData();
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
  

  onAlertaClick(){
    this.navCtrl.navigateForward('/alerta');

  }

  onAjudaClick(){
    this.navCtrl.navigateForward('/ajuda'); 
  }

  onManejoClick(){
    this.navCtrl.navigateForward('/manejo');
  }

  onEditarClick(){

    this.navCtrl.navigateForward('/confi-novo');

  }
  
  onSairClick(){

    (async () => {
      await Storage.remove({ key: 'nomePropriedade' });
      await Storage.remove({ key: 'estado' });
      await Storage.remove({ key: 'cidade' });
      await Storage.remove({ key: 'regiao' });
    })();

    this.navCtrl.navigateBack('/').then(() => {
      this.navCtrl.navigateForward('/');
    });

  }

}
