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
  public birthdate : string;
  public todaydate : string;
  week: any;
  day: any;
  year: any;
  month: any;
  hour: any;
  minute: any;
  second: any;

  ngOnInit(): void {

  }

  onMoreClick() {
    this.more = !this.more
  }

  onSubmit(){
    this.diff_weeks(this.todaydate, this.birthdate)
  }

  diff_weeks(BirthDate, endDate) {
    var diff = Math.floor(BirthDate.getTime() - endDate.getTime())

    var days = 1000 * 60 * 60 * 24;

    this.day = Math.floor(diff / days);
    this.month = Math.floor(this.day / 30.5);
    this.year = Math.floor(this.month / 12);
    this.week = Math.floor(this.day / 7);
    this.hour = Math.floor(this.day * 24);
    this.minute = Math.floor(this.hour * 60);
    this.second = Math.floor(this.minute * 60);
  }

}
