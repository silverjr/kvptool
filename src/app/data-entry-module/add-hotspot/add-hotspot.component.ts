import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-hotspot',
  templateUrl: './add-hotspot.component.html',
  styleUrls: ['./add-hotspot.component.css']
})
export class AddHotspotComponent implements OnInit {

  year:any = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
