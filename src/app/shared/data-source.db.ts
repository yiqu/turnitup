import { DataSource } from '@angular/cdk/collections';
import { MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ResultDataStore } from './data-store.db';
import { UserResult } from './user-result.model';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ResultDataSource extends DataSource<any> {
  constructor(private _database: ResultDataStore, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserResult[]> {
    const displayDataChanges = [
      this._database.dataChange,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the datastore data. */
  getSortedData(): UserResult[] {
    const data = this._database.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'turn': [propertyA, propertyB] = [a.turn, b.turn]; break;
        case 'result': [propertyA, propertyB] = [a.result, b.result]; break;
        case 'difference': [propertyA, propertyB] = [a.difference, b.difference]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}