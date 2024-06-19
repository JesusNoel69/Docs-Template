import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataStructure, Field } from '../../models/Infromation';
import { SharedDataFieldService } from '../../services/shared-data-field-components/shared-data-field.service';


@Component({
  selector: 'field-group',
  standalone:true,
  templateUrl: './field-group.component.html',
  imports: [],
  styles: [
    `
      .field-group {
        border: solid 1px black;
        cursor: pointer;
      }
      .field-group li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 3px;
      }
      .rotation, svg {
        transform: rotate(180deg);
      }
    `
  ]
})
export class FieldGroupComponent {
  data: DataStructure = { Name: '', Logo: '', Field: [] };
  fieldGroup: string[] = [];
  selectedField: string | null = null;
  fieldData: string[] = [];
  selectedData: string | null = null;
  dataInfo: string | null = null;
  // showField:boolean=true;

  constructor(private http: HttpClient,private dataService:SharedDataFieldService) {

    this.http.get<DataStructure>('/assets/Mock/Information.json').subscribe(response => {
      this.data = response;
      this.processFields(this.data.Field);
    });
    this.dataService.currentData.subscribe(data => this.dataInfo = data);
  }

  private processFields(fields: Field[]): void {
    fields.forEach(field => {
      for (const key in field) {
        if (field.hasOwnProperty(key)) {
          this.fieldGroup.push(key);
        }
      }
    });
  }

  public showData(field: string): void {
    this.selectedField = field;
    this.fieldData = [];
    this.selectedData = null;
    this.dataInfo = null;

    this.data.Field.forEach((compareField: { [x: string]: any; }) => {
      if (Object.keys(compareField).includes(field)) {
        const fieldEntries = compareField[field];
        fieldEntries.forEach((entry: { hasOwnProperty: (arg: string) => any; }) => {
          for (const key in entry) {
            if (entry.hasOwnProperty(key)) {
              this.fieldData.push(key);
            }
          }
        });
      }
    });
  }

  public showInfo(dataKey: string): void {
    this.selectedData = dataKey;
    this.dataInfo = null;
      this.data.Field.forEach((compareField: { [x: string]: any; }) => {
        if (Object.keys(compareField).includes(this.selectedField!)) {
          const fieldEntries = compareField[this.selectedField!];
          fieldEntries.forEach((entry: { [x: string]: string | null; }) => {
            if (entry.hasOwnProperty(dataKey)) {
              this.dataInfo = entry[dataKey];
            }
          });
        }
      });
    if(this.dataInfo!=null){
      // console.log(this.dataInfo);
      this.dataService.changeData(this.dataInfo);
    }
  }
}
