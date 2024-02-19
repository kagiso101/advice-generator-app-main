import { Component, OnInit } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css'],
})
export class AdviceComponent implements OnInit {
  adviceId: any;
  adviceStr: any;
  constructor(private advice: AdviceService) {}
  ngOnInit(): void {
    this.advice.fetchData().subscribe((res) => {
      this.adviceStr = res.slip.advice;
      this.adviceId = res.slip.id;
    });
  }

  getAdvice() {
    this.advice.fetchData().subscribe((res) => {
      this.adviceStr = res.slip.advice;
      this.adviceId = res.slip.id;
    });
  }
}
