import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MenuService } from "../../services/menu.service";
import { LeftMenu } from "../../login/models/menu";
import { Observable } from "rxjs";

@Component({
  selector: "app-left",
  templateUrl: "./left.page.html",
  styleUrls: ["./left.page.scss"],
})
export class LeftPage implements OnInit {
  
  leftMenu: Observable<LeftMenu> = this.menu.leftModel.asObservable();

  constructor(public menu: MenuService) {}

  ngOnInit() {
    this.menu.initialize();
    
    
  }
}
