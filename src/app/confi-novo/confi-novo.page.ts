import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';


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
      const regiao = await Storage.get({ key: 'regioes' });

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
          this.listRegiao = JSON.parse(regiao.value);
          this.selectedRegiao = this.listRegiao[0];
          this.listRegiao.splice(0,1);
      }

      const alertas = await Storage.get({ key: 'alertas' });
      
      if (alertas && alertas.value !== null) {

        this.alertas = JSON.parse(alertas.value.toLowerCase());
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
  listRegiao: string[] = [];
  alertas: boolean = false;

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

  onAddClick(){
    this.listRegiao.push("")
  }
  onRemoveClick(i: number){

    this.listRegiao.splice(i);

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

      const listRegiao: string[] = [];

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

        listRegiao.push(this.selectedRegiao);

        for(let r of this.listRegiao){
          listRegiao.push(r)
        }
        
        const listRAsString = JSON.stringify(listRegiao);
        
        await Storage.set({
          key: 'regioes',
          value: listRAsString,
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
