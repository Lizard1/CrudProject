import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { User } from 'src/app/entity/user/user';

// TODO: Replace this with your own data model type
/*export interface UsersItem {
  name: string;
  id: number;
}*/

// TODO: replace this with real data from your application
const EXAMPLE_DATA: User[] = [
  {id: 1, userName: 'Hydrogen', password: 'pass1', libsCount: 1, booksCount: 1},
  {id: 2, userName: 'Helium', password: 'pass2', libsCount: 2, booksCount: 1},
  {id: 3, userName: 'Lithium', password: 'pass3', libsCount: 1, booksCount: 1},
  {id: 4, userName: 'Beryllium', password: 'pass4', libsCount: 1, booksCount: 1},
  {id: 5, userName: 'Boron', password: 'pass5', libsCount: 2, booksCount: 1},
  {id: 6, userName: 'Carbon', password: 'pass6', libsCount: 1, booksCount: 1}
];

/**
 * Data source for the Users view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersDataSource extends DataSource<User> {
  data: User[] = EXAMPLE_DATA;
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
  connect(): Observable<User[]> {
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
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: User[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: User[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'booksCount': return compare(+a.booksCount, +b.booksCount, isAsc);
        case 'libsCount': return compare(+a.libsCount, +b.libsCount, isAsc);
        case 'password': return compare(a.password, b.password, isAsc);
        case 'name': return compare(a.userName, b.userName, isAsc);
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
