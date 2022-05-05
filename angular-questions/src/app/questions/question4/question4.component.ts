/*
  title: Angular - ViewChild vs document.querySelector
  url: https://stackoverflow.com/questions/72075172/angular-viewchild-vs-document-queryselector
 */

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question4',
  template: `
    <p #idElem class="idElem my-query-class">question4 works!</p>
    <button (click)="onButtonClick()">Button</button>
  `,
  styleUrls: ['./question4.component.sass']
})
export class Question4Component implements AfterViewInit {

  myDOMelement?: HTMLElement;

  constructor() { }

  // @ViewChild('.my-query-class') myDOMElementRef?: ElementRef;

  @ViewChild('idElem') myDOMElementRef?:ElementRef;
  ngAfterViewInit() {
    this.myDOMelement = document.querySelector('.my-query-class') as HTMLElement;
    console.log("this.myDOMElementRef");
    console.log(this.myDOMelement);
    console.log(this.myDOMElementRef);
  }

  onButtonClick(): void {
    console.log("button clicked!!");
    console.log(this.myDOMelement);
    console.log(this.myDOMElementRef);
  }
}
