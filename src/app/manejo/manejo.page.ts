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

        if(dataPulverizacao != null && regiao != null){
          this.count += 1;
          const id = this.count;
          this.pulverizacoes.push({id, dataPulverizacao, dataArmadilha, quantP, produto, regiao });
        }
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

    let posi: number = -1;

    for(let i = 0; i<this.pulverizacoes.length; i++){
      
      if(this.pulverizacoes[i].id == id){
        posi = i
        break
      }
    }

    const navigationExtras: NavigationExtras = {
      queryParams: {
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

    this.pulverizacoes.splice(posi)
  }

}
