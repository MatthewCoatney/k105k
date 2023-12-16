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
}
