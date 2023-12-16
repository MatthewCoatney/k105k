import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CenterMenu } from "../../login/models/menu";
import { MenuService } from "../../services/menu.service";

@Component({
  selector: "app-center",
  templateUrl: "./center.page.html",
  styleUrls: ["./center.page.scss"],
})
export class CenterPage {
  centerMenu: Observable<CenterMenu> = this.menu.centerModel.asObservable();

  constructor(public menu: MenuService) {}
}
