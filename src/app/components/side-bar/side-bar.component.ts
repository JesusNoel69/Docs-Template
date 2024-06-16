import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FieldComponent } from '../field/field.component';


@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [SearchComponent,FieldComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  
  
}
