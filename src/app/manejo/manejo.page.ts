import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'
import { NavigationExtras } from '@angular/router';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-manejo',
  templateUrl: './manejo.page.html',
  styleUrls: ['./manejo.page.scss'],
})
export class ManejoPage implements OnInit {

  count = 0

  pulverizacoes = [{id: 0, dataPulverizacao: '18/Set', dataArmadilha: '18/Set', quantP: '10', produto: 'ABC', regiao: 'Região 2'}]
  alertas: boolean = false;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    (async () => {

      const alertas = await Storage.get({ key: 'alertas' });
      
      if (alertas && alertas.value !== null) {

        this.alertas = JSON.parse(alertas.value.toLowerCase());

      }
    })()
    this.route.queryParams.subscribe(params => {
      
      const id = params['id'];
      const dataPulverizacao = params['dataPulverizacao'];
      const dataArmadilha = params['dataArmadilha'];
      const quantP = params['quantP'];
      const produto = params['produto'];
      const regiao = params['regiao'];

      let test = true

      for(let p of this.pulverizacoes){
        
        if(p.id == id && dataArmadilha != null && dataPulverizacao != null && produto != null && quantP != null && regiao != null){
          test = false
          p.dataArmadilha = dataArmadilha;
          p.dataPulverizacao = dataPulverizacao;
          p.produto = produto;
          p.quantP = quantP;
          p.regiao = regiao;
        }

      }
      if(test){
      
        if(dataArmadilha != null && dataPulverizacao != null && produto != null && quantP != null && regiao != null){
          this.count += 1;
          const id = this.count;
          this.pulverizacoes.push({id, dataPulverizacao, dataArmadilha, quantP, produto, regiao });
        }
      }
    })
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

  onAlertaClick(){
    this.navCtrl.navigateForward('/alerta');

  }

  onAjudaClick(){
    this.navCtrl.navigateForward('/ajuda'); 
  }

  onNovoClick(){
    this.navCtrl.navigateForward('/manejo-novo');
  }

  onConfiClick(){
    this.navCtrl.navigateForward('/confi');
  }

  onEditarClick(id: number){

    let posi: number = -1;

    for(let i = 0; i<this.pulverizacoes.length; i++){
      
      if(this.pulverizacoes[i].id == id){
        posi = i
        break
      }
    }

    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        dataPulverizacao: this.pulverizacoes[posi].dataPulverizacao,
        dataArmadilha: this.pulverizacoes[posi].dataArmadilha,
        quantP: this.pulverizacoes[posi].quantP,
        produto: this.pulverizacoes[posi].produto,
        regiao: this.pulverizacoes[posi].regiao
      }
    };
    
    this.pulverizacoes.splice(posi)
    
    this.navCtrl.navigateForward('/manejo-novo', navigationExtras);

  }

  onRemoverClick(id: number){
    let posi: number = -1;

    for(let i = 0; i<this.pulverizacoes.length; i++){
      
      if(this.pulverizacoes[i].id == id){
        posi = i
        break
      }
    }

    this.pulverizacoes.splice(posi, 1)
  }

}
