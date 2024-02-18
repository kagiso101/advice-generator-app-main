import { Component } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css'],
})
export class AdviceComponent {

  constructor(
   private advice : AdviceService
  ) {}

getAdvice(){
  this.advice.fetchData().subscribe(res => {
    console.log(res);
  })
}

}


