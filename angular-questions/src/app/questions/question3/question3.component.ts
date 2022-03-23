import { Component, OnInit } from '@angular/core';
import { AppInjector } from '../../app.module';
import { TestServiceService } from '../../services/test-service.service';


@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.sass']
})
export class Question3Component implements OnInit {
  constructor() {
    const myService = AppInjector.get(TestServiceService);
    console.log(myService.getRandomNumber());
  }

  ngOnInit(): void {
  }

}
