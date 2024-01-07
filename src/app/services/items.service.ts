import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import Item from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private firestore: Firestore) {}

  addItem(item: Item) {
    const itemsRef = collection(this.firestore, 'items');
    return addDoc(itemsRef, item);
  }
}
