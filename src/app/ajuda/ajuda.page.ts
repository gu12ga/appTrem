import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  expanded1: boolean = false;
  expanded2: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  toggleExpand1() {
    this.expanded1 = !this.expanded1;
  }

  toggleExpand2() {
    this.expanded2 = !this.expanded2;
  }

  onAlertaClick(){
    this.navCtrl.navigateForward('/alerta');
  }

  toggleExpandTodas(){
    this.expanded1 = !this.expanded1;
    this.expanded2 = !this.expanded2;
  }

}
