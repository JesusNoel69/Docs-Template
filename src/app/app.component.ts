import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchComponent } from './components/search/search.component';
import { InformationFieldComponent } from './components/information-field/information-field.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataStructure } from './models/Infromation';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    SideBarComponent,
    SearchComponent,
    InformationFieldComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'docs-template';
  data: DataStructure = {
    Name: '',
    Logo: '',
    Field: []
  };
  logo:string="hola";
  titleProject: string ="hola";
  constructor(private http: HttpClient){
    this.http.get<DataStructure>("/assets/Mock/Information.json")
    .subscribe(response=>{
      this.data=response;
      console.log(this.data.Name);
      this.logo=this.data.Logo;
      this.titleProject=this.data.Name;
    });
  }
}
