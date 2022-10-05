import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
