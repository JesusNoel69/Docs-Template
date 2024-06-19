import { Component } from '@angular/core';
import { SharedDataFieldService } from '../../services/shared-data-field-components/shared-data-field.service';

@Component({
  selector: 'information-field',
  standalone: true,
  imports: [],
  template: `
    @if (!this.data) {
      <p> Inicio</p>
    }@else {
      <p>
        {{this.data}}
      </p>
    }
    
  `,
  styleUrl: './information-field.component.css'
})
export class InformationFieldComponent {
  data: string="";

  constructor(private dataService: SharedDataFieldService) {

  }

  ngOnInit() {
    this.dataService.currentData.subscribe(data => this.data = data);
  }

}
