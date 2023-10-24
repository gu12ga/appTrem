import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-manejo-novo',
  templateUrl: './manejo-novo.page.html',
  styleUrls: ['./manejo-novo.page.scss'],
})
export class ManejoNovoPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    (async () => {
      const regioes = await Storage.get({ key: 'regioes' });

      if (regioes && regioes.value !== null) {
        const listR = JSON.parse(regioes.value);
        for (let r of listR) {
          this.regioes.push(r);
        }
      }

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

      if(dataPulverizacao != null && regiao != null && dataArmadilha != null && quantP != null && produto != null && regiao != null)
        this.id = id
        this.dataPulveriza = dataPulverizacao
        this.dataArmadilha = dataArmadilha
        this.quantP = quantP
        this.selectedProduto = produto
        this.selectedRegiao = regiao
    })
  }

  regioes: string[] = [];
  produtos = ['XYZ', 'ABC', 'DEF'];
  selectedRegiao: string = '';
  selectedProduto: string = '';
  dataArmadilha: string = '';
  dataPulveriza: string = '';
  quantP: number = 0;
  id: number = -1;
  alertas:boolean = false;

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

   onConfiClick(){
    this.navCtrl.navigateForward('/confi');
  }

  onNovoClick() {
    
    
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      const dataPulverizacao = params['dataPulverizacao'];
      const dataArmadilha = params['dataArmadilha'];
      const quantP = params['quantP'];
      const produto = params['produto'];
      const regiao = params['regiao'];
  
      
        const navigationExtras: NavigationExtras = {
          queryParams: {
            id: id,
            dataPulverizacao: dataPulverizacao,
            dataArmadilha: dataArmadilha,
            quantP: quantP,
            produto: produto,
            regiao: regiao
          }
        };
  
        this.navCtrl.navigateForward('/manejo', navigationExtras);
    });
    
    
  }
  
  onSalvarClick(){

    let aux = true;

    if(this.dataArmadilha.length == 0){
      alert("Data de armadilha não foi preenchido");
      aux = false;
    }
    if(this.dataPulveriza.length == 0){
      alert("Data de pulverização não foi preenchido");
      aux = false;
    }

     //'manejo/:dataPulverizacao/:dataArmadilha/:quantP/:produto/:regiao',
    if(aux){
      const navigationExtras: NavigationExtras = {
        queryParams: {
          id: this.id,
          dataPulverizacao: this.dataPulveriza,
          dataArmadilha: this.dataArmadilha,
          quantP: this.quantP,
          produto: this.selectedProduto,
          regiao: this.selectedRegiao
        }
      };
      this.navCtrl.navigateForward('/manejo', navigationExtras);

    }
  }
}