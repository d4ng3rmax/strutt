import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ContactService, IMessage } from '../_shared/services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  frmContact: FormGroup;
  arrMail = [];

  constructor(
    private contactService: ContactService,
    public _fb: FormBuilder,
    private http: Http,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.frmContact = this._fb.group({
      // hideRequired: false,
      // floatLabel: 'auto',
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    // alert( JSON.stringify(this.frmContact.value));

    this.contactService.sendEmail(this.frmContact.value).subscribe(res => {
      console.log('AppComponent Success', res);
      this.toastr.success('E-mail enviado com sucesso!', 'Contato');
      this.frmContact.reset();
    }, error => {
      console.log('AppComponent Error', error);
    });

  }

}
