import { Component } from '@angular/core';
import { DataStructure, Field } from '../../models/Infromation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'field-group',
  standalone: true,
  imports: [],
  templateUrl: './field-group.component.html',
  styles: `
    .field-group{
      border: solid 1px black;
      cursor:pointer;
    }
    .field-group li{
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center;
      padding:3px;
    }
    .rotation, svg{
      transform: rotate(180deg);
    }
  `
})
export class FieldGroupComponent {
  data: DataStructure = {
    Name: '',
    Logo: '',
    Field: []
  };
  fieldGroup: string[] = [];
  fieldData: { [key: string]: string }[] = [];

  constructor(private http: HttpClient) {
    this.http.get<DataStructure>('/assets/Mock/Information.json').subscribe(response => {
      this.data = response;
      this.processFields(this.data.Field);
      console.log(this.fieldGroup); // Para verificar los nombres de los campos
      console.log("------------");
      console.log(this.fieldData);  // Para verificar los datos de los campos
    });
  }

  private processFields(fields: Field[]): void {
    fields.forEach(field => {
      for (const key in field) {
        if (field.hasOwnProperty(key)) {
          this.fieldGroup.push(key);
          // field[key].forEach(dataObject => {
          //   this.fieldData.push(dataObject);
          // });
        }
      }
    });
  }
  public showData(field:string):void{
    this.data.Field.forEach((compareField)=>{
     

      if(Object.keys(compareField).join()==field){
        Object.values(compareField).forEach(e=>{
          Object.values(e).forEach(l=>{
            console.log(Object.values(l));
          })
        })
      }
    });

  }
}
