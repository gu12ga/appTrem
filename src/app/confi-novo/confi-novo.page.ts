import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { NavigationExtras } from '@angular/router';


interface CidadesParaRegioes {
  [cidade: string]: string[];
}

@Component({
  selector: 'app-confi-novo',
  templateUrl: './confi-novo.page.html',
  styleUrls: ['./confi-novo.page.scss'],
})
export class ConfiNovoPage implements OnInit {

  constructor(private navCtrl: NavController) { 
    (async () => {
      const nomePropriedade = await Storage.get({ key: 'nomePropriedade' });
      const estado = await Storage.get({ key: 'estado' });
      const cidade = await Storage.get({ key: 'cidade' });
      const regiao = await Storage.get({ key: 'regiao' });

      if (nomePropriedade && nomePropriedade.value !== null) {
          this.nomePropriedade = nomePropriedade.value;
      }
      if (estado && estado.value !== null) {
          this.selectedEstado = estado.value;
      }
      if (cidade && cidade.value !== null) {
          this.selectedCidade = cidade.value;
      }
      if (regiao && regiao.value !== null) {
          this.selectedRegiao = regiao.value;
      }
  })();
  }

  estados = [
    { nome: 'Minas Gerais', cidades: ['Belo Horizonte', 'Uberlândia'], regioes: ['Região 1', 'Região 2'] },
    { nome: 'São Paulo', cidades: ['São Paulo', 'Campinas'], regioes: ['Região A', 'Região B'] },
  ];

  nomePropriedade: string = ''
  selectedEstado: string = '';
  selectedCidade: string = '';
  selectedRegiao: string = '';

  onEstadoChange() {
   
    this.selectedCidade = '';
    this.selectedRegiao = '';
  }

  onCidadeChange() {
    this.selectedRegiao = '';
  }

  getCidades(): string[] {

    const estadoSelecionado = this.estados.find(estado => estado.nome === this.selectedEstado);
    return estadoSelecionado ? estadoSelecionado.cidades : [];
  }

  getRegioes(): string[] {

    const estadoSelecionado = this.estados.find(estado => estado.nome === this.selectedEstado);
    if (!estadoSelecionado) {
      return [];
    }

    const cidadeSelecionada = this.selectedCidade;
    if (!cidadeSelecionada) {
      return [];
    }

    // Agora você pode usar a tipagem definida
    const regioesMapeadas: CidadesParaRegioes = {
      'Belo Horizonte': ['Região 1', 'Região 2'],
      'Uberlândia': ['Região 3', 'Região 4'],
      'São Paulo': ['Região A', 'Região B'],
      'Campinas': ['Região X', 'Região Y']
    };

    return regioesMapeadas[cidadeSelecionada] || [];
  }

  getTermos() {

  }

  ajudaRegiao() {
    
  }

  ngOnInit() {
  }

  onNovoClick(){
    this.navCtrl.navigateForward('/confi'); 
  }

  onSalvarClick(){

    let aux = true;

    if(this.nomePropriedade.length == 0){
      alert("Nome da Propriedade não foi preenchida");
      aux = false;
    }
    if(this.selectedEstado.length == 0){
      alert("Estado não foi preenchido");
      aux = false;
    }
    if(this.selectedCidade.length == 0){
      alert("Cidade não foi preenchida");
      aux = false;
    }
    if(this.selectedRegiao.length == 0){
      alert("Regiao não foi preenchido");
      aux = false;
    }

    if(aux){

      (async () => {
      
        await Storage.set({
          key: 'nomePropriedade',
          value: this.nomePropriedade,
        });
        await Storage.set({
          key: 'estado',
          value: this.selectedEstado,
        });
        await Storage.set({
          key: 'cidade',
          value: this.selectedCidade,
        });
        await Storage.set({
          key: 'regiao',
          value: this.selectedRegiao,
        });
      })();

      this.navCtrl.navigateBack('/confi').then(() => {
        this.navCtrl.navigateForward('/confi');
    })
  }
  }

  onAlertaClick(){
    this.navCtrl.navigateForward('/alerta');
  }

  onManejoClick(){
    this.navCtrl.navigateForward('/manejo');
  }

  onAjudaClick(){
    this.navCtrl.navigateForward('/ajuda');
  }

}
