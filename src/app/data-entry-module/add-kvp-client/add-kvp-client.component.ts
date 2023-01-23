import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-kvp-client',
  templateUrl: './add-kvp-client.component.html',
  styleUrls: ['./add-kvp-client.component.css']
})
export class AddKvpClientComponent implements OnInit {

  year: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
