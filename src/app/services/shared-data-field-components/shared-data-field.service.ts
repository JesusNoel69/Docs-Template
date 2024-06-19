import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataFieldService {
  private dataSource = new BehaviorSubject<string>('');
  currentData = this.dataSource.asObservable();
  changeData(data: string) {
    this.dataSource.next(data);
  }
}