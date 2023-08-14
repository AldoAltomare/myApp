import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() id!:number;
  @Input() immagine!:string;
  @Input() nome!:string;
  @Input() cognome!:string;

  @Output() onDelete = new EventEmitter(); // stiamo creando così un evento custom

  delete(id:number){
    this.onDelete.emit(id)

  }
}
