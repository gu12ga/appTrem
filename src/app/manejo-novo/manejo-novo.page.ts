import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-manejo-novo',
  templateUrl: './manejo-novo.page.html',
  styleUrls: ['./manejo-novo.page.scss'],
})
export class ManejoNovoPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      
      const dataPulverizacao = params['dataPulverizacao'];
      const dataArmadilha = params['dataArmadilha'];
      const quantP = params['quantP'];
      const produto = params['produto'];
      const regiao = params['regiao'];

      if(dataPulverizacao != null && regiao != null && dataArmadilha != null && quantP != null && produto != null && regiao != null)
        this.dataPulveriza = dataPulverizacao
        this.dataArmadilha = dataArmadilha
        this.quantP = quantP
        this.selectedProduto = produto
        this.selectedRegiao = regiao
    })}

  regioes = ['Região 1', 'Região 2'];

  produtos = ['XYZ', 'ABC', 'DEF'];

  selectedRegiao: string = '';
  selectedProduto: string = '';
  dataArmadilha: string = '';
  dataPulveriza: string = '';
  quantP: number = 0;

  ngOnInit() {
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

  onNovoClick(){
    this.navCtrl.navigateForward('/manejo'); 
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