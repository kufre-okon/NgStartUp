import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { Observable, of } from "rxjs";

export class GenericDataSource<T> extends DataSource<T> {

    constructor(private items: T[]) {
        super();
    }
    connect(collectionViewer: CollectionViewer): Observable<T[]> {
        return of(this.items);
    }
    disconnect(collectionViewer: CollectionViewer): void {
      //  throw new Error("Method not implemented.");
    }
}