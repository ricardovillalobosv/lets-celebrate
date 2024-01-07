import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Item from 'src/app/interfaces/item.interface';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-register-items',
  templateUrl: './register-items.component.html',
  styleUrls: ['./register-items.component.scss'],
})
export class RegisterItemsComponent {
  itemForm: FormGroup;

  items: Item[] = [];

  constructor(private itemsService: ItemsService) {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      check: new FormControl(false),
    });

    this.items = [
      {
        id: '1',
        name: 'Test',
        check: false,
      },
    ];
  }

  async save() {
    console.log('save', this.itemForm.value);
    const response = await this.itemsService.addItem(this.itemForm.value);
    console.log('response:', response);
  }
}
