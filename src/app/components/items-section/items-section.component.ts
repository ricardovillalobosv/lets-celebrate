import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import Item from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrls: ['./items-section.component.scss'],
})
export class ItemsSectionComponent implements OnInit {
  loadingItems: boolean = false;
  loadingConfirmation: boolean = false;
  items: Item[] = [];
  itemsSelected: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.loadingItems = true;
    try {
      this.itemsService.getItems().subscribe((items) => {
        this.items = items.sort((a: Item, b: Item) => {
          if ((a?.name || '') < (b?.name || '')) {
            return -1;
          }
          if ((a?.name || '') > (b?.name || '')) {
            return 1;
          }
          return 0;
        });
        this.loadingItems = false;
      });
    } catch (error) {
      console.log(error);
      this.loadingItems = false;
    }
  }

  onSelection(event: Event, item: Item) {
    if (event) {
      this.itemsSelected.push(item);
    } else {
      this.itemsSelected = this.itemsSelected.filter((it) => it.id !== item.id);
    }
  }

  getCurrentSelectionLabel(item: Item) {
    const response = this.itemsSelected.find((it) => it.id === item.id);
    return !!response;
  }

  private openURL() {
    const url = `https://api.whatsapp.com/send?phone=+51972192608&text=Muchas%20gracias%20por%20la%20invitaci%C3%B3n.%20Estar%C3%A9%20presente%20%F0%9F%8E%82%F0%9F%A5%82`;
    const items = `${this.itemsSelected?.map((it) => it.name)?.join(',')}`;
    let fullUrl = '';
    if (this.itemsSelected.length !== 0)
      fullUrl = `${url},%20llevaré%20${items}`;
    else fullUrl = url;
    window.open(fullUrl, '_blank');
  }

  async sendConfirmation() {
    try {
      this.loadingConfirmation = true;
      if (this.itemsSelected.length !== 0) {
        this.itemsSelected.forEach(async (item) => {
          await this.itemsService.updateItem(item, true);
        });
      }
      this.openURL();
      this.itemsSelected = [];
      this.loadingConfirmation = false;
    } catch (error) {
      console.log(error);
      this.loadingConfirmation = false;
    }
  }
}
