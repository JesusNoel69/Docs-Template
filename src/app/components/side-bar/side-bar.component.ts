import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FieldGroupComponent } from '../field-group/field-group.component';



@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [SearchComponent,FieldGroupComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  
}
