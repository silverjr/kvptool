import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.css']
})
export class AddTargetComponent implements OnInit {

  year:any = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
