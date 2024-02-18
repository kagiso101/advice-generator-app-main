import { Component } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css'],
})
export class AdviceComponent {
  adviceId: number = 117;
  adviceStr: string =
    "It is easy to sit up and take notice, what's difficult is getting up and taking action";

  constructor(private advice: AdviceService) {}

  getAdvice() {
    this.advice.fetchData().subscribe((res) => {
      this.adviceStr = res.slip.advice;
      this.adviceId = res.slip.id;
    });
  }
}
