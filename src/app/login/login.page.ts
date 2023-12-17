import { Component, OnInit } from "@angular/core";
import {
  Validators,
  UntypedFormGroup,
  UntypedFormControl,
  FormGroup,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { generateClient, type Client } from "aws-amplify/api";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { BehaviorSubject, Observable } from "rxjs";
import {
  Menu,
  LeftMenu,
  CenterMenu,
  RightMenu,
  modelDefaultCenter,
  modelDefaultLeft,
  modelDefaultRight,
} from "./models/menu";
import { MenuService } from "../services/menu.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./styles/login.page.scss"],
})
export class LoginPage {
  selectTabs = "left";
  form = new FormGroup({});

  leftFields: FormlyFieldConfig[] = Menu.leftFields;
  centerFields: FormlyFieldConfig[] = Menu.centerFields;
  rightFields: FormlyFieldConfig[] = Menu.rightFields;

  leftMenu: Observable<LeftMenu> = this.menu.leftModel.asObservable();
  centerMenu: Observable<CenterMenu> = this.menu.centerModel.asObservable();
  rightMenu: Observable<RightMenu> = this.menu.rightModel.asObservable();

  constructor(public menu: MenuService, public router: Router) {}

  public async onSubmitLeft(model) {
    if (model.id) {
      console.log("assume we want to update it");
      // assume we want to update it
      await this.menu.onUpdate(model, mutations.updateLeftMenu);
    } else if (!this.menu.leftModel.value) {
      console.log("assume we want to create it");
      // assume we want to create it
      await this.menu.onCreate(model, mutations.createLeftMenu);
    } else {
      console.log("assume we want to replace it");
      const id = this.menu.leftModel.value['id'];
      const createdAt = this.menu.leftModel.value['createdAt'];
      const updatedAt = this.menu.leftModel.value['updatedAt'];
      // assume we want to replace it
      await this.menu.onUpdate({id,createdAt,updatedAt,...model}, mutations.updateLeftMenu);
    }
  }

  public async onSubmitCenter(model) {
     if (model.id) {
       console.log("assume we want to update it");
       // assume we want to update it
       await this.menu.onUpdate(model, mutations.updateCenterMenu);
     } else if (!this.menu.centerModel.value) {
       console.log("assume we want to create it");
       // assume we want to create it
       await this.menu.onCreate(model, mutations.createCenterMenu);
     } else {
       console.log("assume we want to replace it");
       const id = this.menu.centerModel.value["id"];
       const createdAt = this.menu.centerModel.value["createdAt"];
       const updatedAt = this.menu.centerModel.value["updatedAt"];
       // assume we want to replace it
       await this.menu.onUpdate(
         { id, createdAt, updatedAt, ...model },
         mutations.updateCenterMenu
       );
     }
  }

  public async onSubmitRight(model) {
     if (model.id) {
       console.log("assume we want to update it");
       // assume we want to update it
       await this.menu.onUpdate(model, mutations.updateRightMenu);
     } else if (!this.menu.rightModel.value) {
       console.log("assume we want to create it");
       // assume we want to create it
       await this.menu.onCreate(model, mutations.createRightMenu);
     } else {
       console.log("assume we want to replace it");
       const id = this.menu.rightModel.value["id"];
       const createdAt = this.menu.rightModel.value["createdAt"];
       const updatedAt = this.menu.rightModel.value["updatedAt"];
       // assume we want to replace it
       await this.menu.onUpdate(
         { id, createdAt, updatedAt, ...model },
         mutations.updateRightMenu
       );
     }
  }
}
