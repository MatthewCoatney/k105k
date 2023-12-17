import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import * as queries from "../../graphql/queries";
import { onUpdateCenterMenu, onUpdateLeftMenu, onUpdateRightMenu } from "../../graphql/subscriptions";
import { GraphQLSubscription } from "@aws-amplify/api";
import { generateClient, type Client } from "aws-amplify/api";

import {
  LeftMenu,
  CenterMenu,
  RightMenu,
  modelDefaultCenter,
  modelDefaultLeft,
  modelDefaultRight,
} from "../login/models/menu";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  public client: Client;

  modelLeft: LeftMenu = modelDefaultLeft;
  modelCenter: CenterMenu = modelDefaultCenter;
  modelRight: RightMenu = modelDefaultRight;
  public leftModel: BehaviorSubject<LeftMenu> = new BehaviorSubject<LeftMenu>(
    null
  );
  public centerModel: BehaviorSubject<CenterMenu> =
    new BehaviorSubject<CenterMenu>(null);
  public rightModel: BehaviorSubject<RightMenu> =
    new BehaviorSubject<RightMenu>(this.modelRight);

  constructor(private toastController: ToastController) {
    this.client = generateClient();
    this.initialize();
  }

  async presentToast(msg: string, position: "top" | "middle" | "bottom") {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async initialize(): Promise<void> {
    await this.onList();
    await this.subscribe();
  }

  async subscribe() {
    // Subscribe to update of LeftMenu
    const updateLeftSub = (await this.client.graphql({
      query: onUpdateLeftMenu,
    })) as GraphQLSubscription<any>;

    updateLeftSub.subscribe({
      next: ({ data }) => {
        this.leftModel.next(data.onUpdateLeftMenu);
      },
      error: (error) => console.warn(error),
    });

    // Subscribe to update of CenterMenu
    const updateCenterSub = (await this.client.graphql({
      query: onUpdateCenterMenu,
    })) as GraphQLSubscription<any>;

    updateCenterSub.subscribe({
      next: ({ data }) => {
        this.centerModel.next(data.onUpdateCenterMenu);
      },
      error: (error) => console.warn(error),
    });

    // Subscribe to update of RightMenu
    const updateRightSub = (await this.client.graphql({
      query: onUpdateRightMenu,
    })) as GraphQLSubscription<any>;

    updateRightSub.subscribe({
      next: ({ data }) => {
        this.rightModel.next(data.onUpdateRightMenu);
      },
      error: (error) => console.warn(error),
    });
  }

  public async onUpdate(model: any, query: any) {
    // destructure obj to remove timestamps
    let { __typename, createdAt, updatedAt, ...remaining } = model;

    try {
      const response = await this.client.graphql({
        query: query,
        variables: {
          input: {
            ...remaining,
          },
        },
      });
      this.presentToast('Menu prices successfully updated.','top');
    } catch (e) {
      console.log("error updating menu...", e);
    }
  }

  public async onCreate(model: any, query: any) {
    try {
      const response = await this.client.graphql({
        query: query,
        variables: {
          input: { ...model },
        },
      });
      this.presentToast("Menu prices successfully created.", "top");
    } catch (e) {
      console.log("error creating menu...", e);
    }
  }

  public async onList() {
    /* fetch menus when app loads */
    try {
      let response = await this.client.graphql({
        query: queries.listLeftMenus,
      });
      this.leftModel.next(response["data"].listLeftMenus.items[0]);

      response = await this.client.graphql({
        query: queries.listCenterMenus,
      });
      this.centerModel.next(response["data"].listCenterMenus.items[0]);

      response = await this.client.graphql({
        query: queries.listRightMenus,
      });
      this.rightModel.next(response["data"].listRightMenus.items[0]);
    } catch (e) {
      console.log("error fetching menu", e);
    }
  }
}
function graphqlOperation(
  onCreateRestaurant: any
): import("@aws-amplify/api-graphql").GraphQLOptionsV6<unknown, string> {
  throw new Error("Function not implemented.");
}
