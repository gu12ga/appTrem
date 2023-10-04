import { Component } from '@angular/core';

interface CidadesParaRegioes {
  [cidade: string]: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  estados = [
    { nome: 'Minas Gerais', cidades: ['Belo Horizonte', 'Uberlândia'], regioes: ['Região 1', 'Região 2'] },
    { nome: 'São Paulo', cidades: ['São Paulo', 'Campinas'], regioes: ['Região A', 'Região B'] },
  ];

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

  constructor() {}

  getTermos() {

  }

  ajudaRegiao() {
    
  }
}

