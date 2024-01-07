import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Item from 'src/app/interfaces/item.interface';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-register-items',
  templateUrl: './register-items.component.html',
  styleUrls: ['./register-items.component.scss'],
})
export class RegisterItemsComponent implements OnInit {
  itemForm: FormGroup;
  loadingItems: boolean = false;
  loadingForm: boolean = false;
  items: Item[] = [];

  constructor(private itemsService: ItemsService) {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      check: new FormControl(false),
      loading: new FormControl(false),
    });
  }
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.loadingItems = true;
    try {
      this.itemsService.getItems().subscribe((items) => {
        this.items = items;
        this.loadingItems = false;
      });
    } catch (error) {
      console.log(error);
      this.loadingItems = false;
    }
  }

  async save() {
    this.loadingForm = true;
    try {
      this.itemForm.disable();
      await this.itemsService.addItem(this.itemForm.value);

      this.itemForm.enable();
      this.itemForm.reset();
      this.loadingForm = false;
    } catch (error) {
      console.log(error);
      this.loadingForm = false;
    }
  }

  async delete(item: Item) {
    item['loading'] = true;
    await this.itemsService.deleteItem(item);
  }
}
