import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css', '...'] pod ter mais de um (uma lista) arquivo css
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

 @Input('obj') funcionario: any;

  // getListaClassesCss(){
 //   return ['badge', 'badge-primary'];
 // }

  isAdmin() {
    return this.funcionario.nome.startsWith('M');
  }

 getEstilosCartao() {

    return {
      'border-width.px': this.funcionario.id,
      // 'background-color': 'red'
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }


}
