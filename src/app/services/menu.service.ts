import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { Observable as ZenObservable } from "zen-observable-ts";
import { onUpdateLeftMenu } from "../../graphql/subscriptions";
import * as subscriptions from "../../graphql/subscriptions";
import { GraphQLSubscription, GraphQLQuery } from "@aws-amplify/api";
import { generateClient, type Client } from "aws-amplify/api";

import {
  Menu,
  LeftMenu,
  CenterMenu,
  RightMenu,
  modelDefaultCenter,
  modelDefaultLeft,
  modelDefaultRight,
} from "../login/models/menu";
//import { OnUpdateLeftMenuSubscription } from "../API.service";

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
  rightModel: BehaviorSubject<RightMenu> = new BehaviorSubject<RightMenu>(null);

  constructor() {
    this.client = generateClient();
    this.initialize();
  }

  async initialize(): Promise<void> {
    await this.onList();
  }

  // async subscribe() {
  //   // Subscribe to update of Todo
  //   const updateSub = (await this.client.graphql({
  //     query: onUpdateLeftMenu,
  //   })) as GraphQLSubscription<any>;

  //   updateSub.subscribe({
  //     next: ({ data }) => console.log(data),
  //     error: (error) => console.warn(error),
  //   });

  //   //this.leftModel.next(newLeftMenu["data"].listLeftMenus.items[0]);
  // }

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
    } catch (e) {
      console.log("error creating todo...", e);
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
      console.log("error fetching left menu", e);
    }
  }
}
function graphqlOperation(
  onCreateRestaurant: any
): import("@aws-amplify/api-graphql").GraphQLOptionsV6<unknown, string> {
  throw new Error("Function not implemented.");
}
