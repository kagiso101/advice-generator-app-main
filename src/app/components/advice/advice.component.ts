import { Component } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent {
  advice$ :any
  adviceHeading = 'hello there'

 constructor(
  private advice : AdviceService,
  // private store : Store

 ){}

 generateRandomAdvice(){
  // this.store.dispatch(new generateRandomAdvice())
 }

}
