import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { LeftMenu } from "../../login/models/menu";
import { Observable } from "rxjs";
import { MenuService } from "../../services/menu.service";

@Component({
  selector: "app-left",
  templateUrl: "./left.page.html",
  styleUrls: ["./left.page.scss"],
})
export class LeftPage {
  leftMenu: Observable<LeftMenu> = this.menu.leftModel.asObservable();

  constructor(public menu: MenuService) {}

  ngOnInit() {
   
    // Subscribe to the observable to get the emitted value(s)
    this.leftMenu.subscribe({
      next: (menu: LeftMenu) => {
        console.log('Class objects received:', menu);
        // You can now interact with the data here
      },
      error: (err) => console.error('An error occurred:', err),
      complete: () => console.log('Observable complete')
    })
  }
}
