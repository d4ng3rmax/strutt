import { Component } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { faSave, faPlus, faPlusSquare, faFilter, faArrowsAlt } from '@fortawesome/fontawesome-free-solid';
import { faWhatsappSquare } from '@fortawesome/fontawesome-free-brands';
import { faFileAlt } from '@fortawesome/fontawesome-free-regular';
fontawesome.library.add( faSave, faPlus, faFileAlt, faPlusSquare, faFilter, faArrowsAlt );
fontawesome.library.add( faWhatsappSquare );

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'strut';
}
