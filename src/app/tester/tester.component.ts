import { Component, OnInit } from '@angular/core';
import { ComponentStillLoadingError } from '@angular/core/src/linker/compiler';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
varname = 'me@example.com';
funky = 'sampletext';
  onKeyUp() {
    console.log(this.varname);
  }


  constructor() { }

  ngOnInit() {
  }

}
