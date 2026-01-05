import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RightMenu } from "../../login/models/menu";
import { MenuService } from "../../services/menu.service";

@Component({
  selector: 'app-right-alt',
  templateUrl: './right-alt.page.html',
  styleUrls: ['./right-alt.page.scss'],
})
export class RightAltPage {
rightMenu: Observable<RightMenu> = this.menu.rightModel.asObservable();
  constructor(public menu: MenuService) { }

}
