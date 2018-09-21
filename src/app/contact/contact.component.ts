import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  frmContact: FormGroup;

  constructor(
    public _fb: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    this.frmContact = this._fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

}
