import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      estrellas:[],
    });
  }

  onSubmit(){
    console.log(this.addForm.controls);
  }

}
