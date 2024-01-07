import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import Item from '../interfaces/item.interface';
import { Observable } from 'rxjs';
import { collectionData } from 'rxfire/firestore';
import { updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private firestore: Firestore) {}

  addItem(item: Item) {
    const itemsRef = collection(this.firestore, 'items');
    return addDoc(itemsRef, item);
  }

  getItems(): Observable<Item[]> {
    const itemsRef = collection(this.firestore, 'items');
    return collectionData(itemsRef, { idField: 'id' }) as Observable<Item[]>;
  }

  deleteItem(item: Item) {
    const itemDocRef = doc(this.firestore, `items/${item.id}`);
    return deleteDoc(itemDocRef);
  }

  updateItem(item: Item, check: boolean) {
    const itemDocRef = doc(this.firestore, `items/${item.id}`);
    return updateDoc(itemDocRef, { check });
  }
}
