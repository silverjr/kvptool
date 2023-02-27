import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-indicator',
  templateUrl: './add-indicator.component.html',
  styleUrls: ['./add-indicator.component.css']
})
export class AddIndicatorComponent implements OnInit {

  year:any = new Date();

  addIndicatorForm = this.fb.group({
    ndicatorName:''
  })

  constructor(private fb:FormBuilder) { }



  ngOnInit(): void {
  }

}
