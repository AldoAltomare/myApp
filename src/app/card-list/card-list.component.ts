import { Component } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  users:User[] = [
    {
      id:0, // id di solito viene dal backend, qua lo definiamo noi solo per semplicità
      nome:'Mario',
      cognome:'Rossi',
      foto:'https://picsum.photos/200/100?random=1'
    },
    {
      id:1,
      nome:'Marina',
      cognome:'Bianchi',
      foto:'https://picsum.photos/200/100?random=2'
    },
    {
      id:2,
      nome:'Raffaele',
      cognome:'Rossi',
      foto:'https://picsum.photos/200/100?random=3'
    }
  ]

  removeUser(id:number){
    this.users = this.users.filter(u => u.id != id)
  }
}
