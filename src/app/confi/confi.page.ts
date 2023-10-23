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
  regiao: string = '';

  constructor(private navCtrl: NavController) { 
    this.updateData()
  }

  async updateData() {
    const nomePropriedade = await Storage.get({ key: 'nomePropriedade' });
    const estado = await Storage.get({ key: 'estado' });
    const cidade = await Storage.get({ key: 'cidade' });
    const regiao = await Storage.get({ key: 'regiao' });
  
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
      this.regiao = regiao.value;
    }
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.updateData();
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

    this.navCtrl.navigateForward('/');

  }

}
