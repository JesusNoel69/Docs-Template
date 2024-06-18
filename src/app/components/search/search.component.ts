import { Component } from '@angular/core';

@Component({
  selector: 'search',
  standalone: true,
  imports: [],
  template: `
  <div class="container-search">
    <input id ="searchBar"/>
    <button>
      <svg 
        xmlns="http://www.w3.org/2000/svg"  
        width="20"  height="20"  viewBox="0 0 24 24"
        fill="none"  stroke="currentColor"  
        stroke-width="2"  stroke-linecap="round"  
        stroke-linejoin="round"  
        class="icon icon-tabler icons-tabler-outline icon-tabler-search">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </button>
  </div>
  `,
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
