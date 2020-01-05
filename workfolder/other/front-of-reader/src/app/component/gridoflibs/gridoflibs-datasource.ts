import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Lib } from 'src/app/entity/library/lib';

// TODO: Replace this with your own data model type
/*export interface GridoflibsItem {
  name: string;
  id: number;
}*/

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Lib[] = [
  { id: 1, libraryName: 'Hydrogen' },
  { id: 2, libraryName: 'Helium' },
  { id: 3, libraryName: 'Lithium' },
  { id: 4, libraryName: 'Beryllium' },
  { id: 5, libraryName: 'Boron' },
  { id: 6, libraryName: 'Carbon' },
  { id: 7, libraryName: 'Nitrogen' },
  { id: 8, libraryName: 'Oxygen' },
  { id: 9, libraryName: 'Fluorine' },
  { id: 10, libraryName: 'Neon' },
  { id: 11, libraryName: 'Sodium' },
  { id: 12, libraryName: 'Magnesium' },
  { id: 13, libraryName: 'Aluminum' },
  { id: 14, libraryName: 'Silicon' },
  { id: 15, libraryName: 'Phosphorus' },
  { id: 16, libraryName: 'Sulfur' },
  { id: 17, libraryName: 'Chlorine' },
  { id: 18, libraryName: 'Argon' },
  { id: 19, libraryName: 'Potassium' },
  { id: 20, libraryName: 'Calcium' },
];

/**
 * Data source for the Gridoflibs view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GridoflibsDataSource extends DataSource<Lib> {
  data: Lib[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Lib[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Lib[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Lib[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.libraryName, b.libraryName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
