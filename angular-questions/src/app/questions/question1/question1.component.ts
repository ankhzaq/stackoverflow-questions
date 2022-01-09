/*
Question: how to disable dropdown selection?
Url: https://stackoverflow.com/questions/70623164/how-to-disable-dropdown-selection/70623417#70623417
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: [
    './question1.component.sass'
  ]
})
export class Question1Component implements OnInit {

  BaseObjectTypeName: string = "BaseObjectTypeName";

  baseObjectTypes: any[] = [
    { BaseObjectTypeName: "tab1" },
    { BaseObjectTypeName: "tab2" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
