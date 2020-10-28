import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  constructor() { }
  picker1: any;
  picker2: any;
  public more: boolean = false;

  ngOnInit(): void {

  }

  onMoreClick() {
    this.more = !this.more
  }

}
