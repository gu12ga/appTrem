import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-manejo',
  templateUrl: './manejo.page.html',
  styleUrls: ['./manejo.page.scss'],
})
export class ManejoPage implements OnInit {

  count = 0

  pulverizacoes = [{id: 0, dataPulverizacao: '18/Set', dataArmadilha: '18/Set', quantP: '10', produto: 'ABC', regiao: 'Região 2'}]

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {

      const dataPulverizacao = params['dataPulverizacao'];
      const dataArmadilha = params['dataArmadilha'];
      const quantP = params['quantP'];
      const produto = params['produto'];
      const regiao = params['regiao'];

      let test = true

      for(let p of this.pulverizacoes){
        
        if(p.dataPulverizacao == dataPulverizacao && p.dataArmadilha == dataArmadilha && p.quantP == quantP && p.produto == produto && p.regiao == regiao){
          test = false
        }

      }
      if(test){
        this.count += 1;
        const id = this.count;

        if(dataPulverizacao != null && regiao != null)
          this.pulverizacoes.push({id, dataPulverizacao, dataArmadilha, quantP, produto, regiao });
      }
    })}
  

  ngOnInit() {
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
// manejo-novo/:dataPulverizacao/:dataArmadilha/:quantP/:produto/:regiao
    const navigationExtras: NavigationExtras = {
      queryParams: {
        dataPulverizacao: this.pulverizacoes[id].dataPulverizacao,
        dataArmadilha: this.pulverizacoes[id].dataArmadilha,
        quantP: this.pulverizacoes[id].quantP,
        produto: this.pulverizacoes[id].produto,
        regiao: this.pulverizacoes[id].regiao
      }
    };
    this.navCtrl.navigateForward('/manejo-novo', navigationExtras);

  }

  onRemoverClick(id: number){
    this.pulverizacoes.splice(id)
  }

}
