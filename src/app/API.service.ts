/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateLeftMenu: OnCreateLeftMenuSubscription;
  onUpdateLeftMenu: OnUpdateLeftMenuSubscription;
  onDeleteLeftMenu: OnDeleteLeftMenuSubscription;
};

export type CreateLeftMenuInput = {
  id?: string | null;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
};

export type ModelLeftMenuConditionInput = {
  hites?: ModelFloatInput | null;
  hitesSm?: ModelFloatInput | null;
  creek?: ModelFloatInput | null;
  creekSm?: ModelFloatInput | null;
  pilot?: ModelFloatInput | null;
  pilotSm?: ModelFloatInput | null;
  chinese?: ModelFloatInput | null;
  southwest?: ModelFloatInput | null;
  southwestSm?: ModelFloatInput | null;
  green?: ModelFloatInput | null;
  greenSm?: ModelFloatInput | null;
  tuna?: ModelFloatInput | null;
  tunaSm?: ModelFloatInput | null;
  waldorf?: ModelFloatInput | null;
  waldorfSm?: ModelFloatInput | null;
  caesar?: ModelFloatInput | null;
  caesarSm?: ModelFloatInput | null;
  cup?: ModelFloatInput | null;
  bowl?: ModelFloatInput | null;
  foccacia?: ModelFloatInput | null;
  pbj?: ModelFloatInput | null;
  grilledChz?: ModelFloatInput | null;
  hamChz?: ModelFloatInput | null;
  coffee?: ModelFloatInput | null;
  tea?: ModelFloatInput | null;
  chai?: ModelFloatInput | null;
  soupSalad?: ModelFloatInput | null;
  and?: Array<ModelLeftMenuConditionInput | null> | null;
  or?: Array<ModelLeftMenuConditionInput | null> | null;
  not?: ModelLeftMenuConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type LeftMenu = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLeftMenuInput = {
  id: string;
  hites?: number | null;
  hitesSm?: number | null;
  creek?: number | null;
  creekSm?: number | null;
  pilot?: number | null;
  pilotSm?: number | null;
  chinese?: number | null;
  southwest?: number | null;
  southwestSm?: number | null;
  green?: number | null;
  greenSm?: number | null;
  tuna?: number | null;
  tunaSm?: number | null;
  waldorf?: number | null;
  waldorfSm?: number | null;
  caesar?: number | null;
  caesarSm?: number | null;
  cup?: number | null;
  bowl?: number | null;
  foccacia?: number | null;
  pbj?: number | null;
  grilledChz?: number | null;
  hamChz?: number | null;
  coffee?: number | null;
  tea?: number | null;
  chai?: number | null;
  soupSalad?: number | null;
};

export type DeleteLeftMenuInput = {
  id: string;
};

export type ModelLeftMenuFilterInput = {
  id?: ModelIDInput | null;
  hites?: ModelFloatInput | null;
  hitesSm?: ModelFloatInput | null;
  creek?: ModelFloatInput | null;
  creekSm?: ModelFloatInput | null;
  pilot?: ModelFloatInput | null;
  pilotSm?: ModelFloatInput | null;
  chinese?: ModelFloatInput | null;
  southwest?: ModelFloatInput | null;
  southwestSm?: ModelFloatInput | null;
  green?: ModelFloatInput | null;
  greenSm?: ModelFloatInput | null;
  tuna?: ModelFloatInput | null;
  tunaSm?: ModelFloatInput | null;
  waldorf?: ModelFloatInput | null;
  waldorfSm?: ModelFloatInput | null;
  caesar?: ModelFloatInput | null;
  caesarSm?: ModelFloatInput | null;
  cup?: ModelFloatInput | null;
  bowl?: ModelFloatInput | null;
  foccacia?: ModelFloatInput | null;
  pbj?: ModelFloatInput | null;
  grilledChz?: ModelFloatInput | null;
  hamChz?: ModelFloatInput | null;
  coffee?: ModelFloatInput | null;
  tea?: ModelFloatInput | null;
  chai?: ModelFloatInput | null;
  soupSalad?: ModelFloatInput | null;
  and?: Array<ModelLeftMenuFilterInput | null> | null;
  or?: Array<ModelLeftMenuFilterInput | null> | null;
  not?: ModelLeftMenuFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelLeftMenuConnection = {
  __typename: "ModelLeftMenuConnection";
  items: Array<LeftMenu | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionLeftMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  hites?: ModelSubscriptionFloatInput | null;
  hitesSm?: ModelSubscriptionFloatInput | null;
  creek?: ModelSubscriptionFloatInput | null;
  creekSm?: ModelSubscriptionFloatInput | null;
  pilot?: ModelSubscriptionFloatInput | null;
  pilotSm?: ModelSubscriptionFloatInput | null;
  chinese?: ModelSubscriptionFloatInput | null;
  southwest?: ModelSubscriptionFloatInput | null;
  southwestSm?: ModelSubscriptionFloatInput | null;
  green?: ModelSubscriptionFloatInput | null;
  greenSm?: ModelSubscriptionFloatInput | null;
  tuna?: ModelSubscriptionFloatInput | null;
  tunaSm?: ModelSubscriptionFloatInput | null;
  waldorf?: ModelSubscriptionFloatInput | null;
  waldorfSm?: ModelSubscriptionFloatInput | null;
  caesar?: ModelSubscriptionFloatInput | null;
  caesarSm?: ModelSubscriptionFloatInput | null;
  cup?: ModelSubscriptionFloatInput | null;
  bowl?: ModelSubscriptionFloatInput | null;
  foccacia?: ModelSubscriptionFloatInput | null;
  pbj?: ModelSubscriptionFloatInput | null;
  grilledChz?: ModelSubscriptionFloatInput | null;
  hamChz?: ModelSubscriptionFloatInput | null;
  coffee?: ModelSubscriptionFloatInput | null;
  tea?: ModelSubscriptionFloatInput | null;
  chai?: ModelSubscriptionFloatInput | null;
  soupSalad?: ModelSubscriptionFloatInput | null;
  and?: Array<ModelSubscriptionLeftMenuFilterInput | null> | null;
  or?: Array<ModelSubscriptionLeftMenuFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateLeftMenuMutation = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLeftMenuMutation = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLeftMenuMutation = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

export type GetLeftMenuQuery = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

export type ListLeftMenusQuery = {
  __typename: "ModelLeftMenuConnection";
  items: Array<{
    __typename: "LeftMenu";
    id: string;
    hites: number;
    hitesSm: number;
    creek: number;
    creekSm: number;
    pilot: number;
    pilotSm: number;
    chinese: number;
    southwest: number;
    southwestSm: number;
    green: number;
    greenSm: number;
    tuna: number;
    tunaSm: number;
    waldorf: number;
    waldorfSm: number;
    caesar: number;
    caesarSm: number;
    cup: number;
    bowl: number;
    foccacia: number;
    pbj: number;
    grilledChz: number;
    hamChz: number;
    coffee: number;
    tea: number;
    chai: number;
    soupSalad: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateLeftMenuSubscription = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLeftMenuSubscription = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLeftMenuSubscription = {
  __typename: "LeftMenu";
  id: string;
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  southwest: number;
  southwestSm: number;
  green: number;
  greenSm: number;
  tuna: number;
  tunaSm: number;
  waldorf: number;
  waldorfSm: number;
  caesar: number;
  caesarSm: number;
  cup: number;
  bowl: number;
  foccacia: number;
  pbj: number;
  grilledChz: number;
  hamChz: number;
  coffee: number;
  tea: number;
  chai: number;
  soupSalad: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateLeftMenu(
    input: CreateLeftMenuInput,
    condition?: ModelLeftMenuConditionInput
  ): Promise<CreateLeftMenuMutation> {
    const statement = `mutation CreateLeftMenu($input: CreateLeftMenuInput!, $condition: ModelLeftMenuConditionInput) {
        createLeftMenu(input: $input, condition: $condition) {
          __typename
          id
          hites
          hitesSm
          creek
          creekSm
          pilot
          pilotSm
          chinese
          southwest
          southwestSm
          green
          greenSm
          tuna
          tunaSm
          waldorf
          waldorfSm
          caesar
          caesarSm
          cup
          bowl
          foccacia
          pbj
          grilledChz
          hamChz
          coffee
          tea
          chai
          soupSalad
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLeftMenuMutation>response.data.createLeftMenu;
  }
  async UpdateLeftMenu(
    input: UpdateLeftMenuInput,
    condition?: ModelLeftMenuConditionInput
  ): Promise<UpdateLeftMenuMutation> {
    const statement = `mutation UpdateLeftMenu($input: UpdateLeftMenuInput!, $condition: ModelLeftMenuConditionInput) {
        updateLeftMenu(input: $input, condition: $condition) {
          __typename
          id
          hites
          hitesSm
          creek
          creekSm
          pilot
          pilotSm
          chinese
          southwest
          southwestSm
          green
          greenSm
          tuna
          tunaSm
          waldorf
          waldorfSm
          caesar
          caesarSm
          cup
          bowl
          foccacia
          pbj
          grilledChz
          hamChz
          coffee
          tea
          chai
          soupSalad
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLeftMenuMutation>response.data.updateLeftMenu;
  }
  async DeleteLeftMenu(
    input: DeleteLeftMenuInput,
    condition?: ModelLeftMenuConditionInput
  ): Promise<DeleteLeftMenuMutation> {
    const statement = `mutation DeleteLeftMenu($input: DeleteLeftMenuInput!, $condition: ModelLeftMenuConditionInput) {
        deleteLeftMenu(input: $input, condition: $condition) {
          __typename
          id
          hites
          hitesSm
          creek
          creekSm
          pilot
          pilotSm
          chinese
          southwest
          southwestSm
          green
          greenSm
          tuna
          tunaSm
          waldorf
          waldorfSm
          caesar
          caesarSm
          cup
          bowl
          foccacia
          pbj
          grilledChz
          hamChz
          coffee
          tea
          chai
          soupSalad
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLeftMenuMutation>response.data.deleteLeftMenu;
  }
  async GetLeftMenu(id: string): Promise<GetLeftMenuQuery> {
    const statement = `query GetLeftMenu($id: ID!) {
        getLeftMenu(id: $id) {
          __typename
          id
          hites
          hitesSm
          creek
          creekSm
          pilot
          pilotSm
          chinese
          southwest
          southwestSm
          green
          greenSm
          tuna
          tunaSm
          waldorf
          waldorfSm
          caesar
          caesarSm
          cup
          bowl
          foccacia
          pbj
          grilledChz
          hamChz
          coffee
          tea
          chai
          soupSalad
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLeftMenuQuery>response.data.getLeftMenu;
  }
  async ListLeftMenus(
    filter?: ModelLeftMenuFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLeftMenusQuery> {
    const statement = `query ListLeftMenus($filter: ModelLeftMenuFilterInput, $limit: Int, $nextToken: String) {
        listLeftMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            hites
            hitesSm
            creek
            creekSm
            pilot
            pilotSm
            chinese
            southwest
            southwestSm
            green
            greenSm
            tuna
            tunaSm
            waldorf
            waldorfSm
            caesar
            caesarSm
            cup
            bowl
            foccacia
            pbj
            grilledChz
            hamChz
            coffee
            tea
            chai
            soupSalad
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLeftMenusQuery>response.data.listLeftMenus;
  }
  OnCreateLeftMenuListener(
    filter?: ModelSubscriptionLeftMenuFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLeftMenu">>
  > {
    const statement = `subscription OnCreateLeftMenu($filter: ModelSubscriptionLeftMenuFilterInput) {
        onCreateLeftMenu(filter: $filter) {
          __typename
          id
          hites
          hitesSm
          creek
          creekSm
          pilot
          pilotSm
          chinese
          southwest
          southwestSm
          green
          greenSm
          tuna
          tunaSm
          waldorf
          waldorfSm
          caesar
          caesarSm
          cup
          bowl
          foccacia
          pbj
          grilledChz
          hamChz
          coffee
          tea
          chai
          soupSalad
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLeftMenu">>
    >;
  }

  OnUpdateLeftMenuListener(
    filter?: ModelSubscriptionLeftMenuFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLeftMenu">>
  > {
    const statement = `subscription OnUpdateLeftMenu($filter: ModelSubscriptionLeftMenuFilterInput) {
        onUpdateLeftMenu(filter: $filter) {
          __typename
          id
          hites
          hitesSm
          creek
          creekSm
          pilot
          pilotSm
          chinese
          southwest
          southwestSm
          green
          greenSm
          tuna
          tunaSm
          waldorf
          waldorfSm
          caesar
          caesarSm
          cup
          bowl
          foccacia
          pbj
          grilledChz
          hamChz
          coffee
          tea
          chai
          soupSalad
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLeftMenu">>
    >;
  }

  OnDeleteLeftMenuListener(
    filter?: ModelSubscriptionLeftMenuFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLeftMenu">>
  > {
    const statement = `subscription OnDeleteLeftMenu($filter: ModelSubscriptionLeftMenuFilterInput) {
        onDeleteLeftMenu(filter: $filter) {
          __typename
          id
          hites
          hitesSm
          creek
          creekSm
          pilot
          pilotSm
          chinese
          southwest
          southwestSm
          green
          greenSm
          tuna
          tunaSm
          waldorf
          waldorfSm
          caesar
          caesarSm
          cup
          bowl
          foccacia
          pbj
          grilledChz
          hamChz
          coffee
          tea
          chai
          soupSalad
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLeftMenu">>
    >;
  }
}
