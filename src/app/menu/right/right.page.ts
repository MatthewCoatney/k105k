import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { RightMenu } from "../../login/models/menu";
import { MenuService } from "../../services/menu.service";

@Component({
  selector: "app-right",
  templateUrl: "./right.page.html",
  styleUrls: ["./right.page.scss"],
})
export class RightPage {
  rightMenu: Observable<RightMenu> = this.menu.rightModel.asObservable();

  constructor(public menu: MenuService) {}
}
