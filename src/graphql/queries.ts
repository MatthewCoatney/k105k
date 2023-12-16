/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeftMenu = /* GraphQL */ `
  query GetLeftMenu($id: ID!) {
    getLeftMenu(id: $id) {
      id
      hites
      hitesSm
      creek
      creekSm
      pilot
      pilotSm
      chinese
      chineseSm
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
      __typename
    }
  }
`;
export const listLeftMenus = /* GraphQL */ `
  query ListLeftMenus(
    $filter: ModelLeftMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeftMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hites
        hitesSm
        creek
        creekSm
        pilot
        pilotSm
        chinese
        chineseSm
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCenterMenu = /* GraphQL */ `
  query GetCenterMenu($id: ID!) {
    getCenterMenu(id: $id) {
      id
      ponderosa
      midpines
      midpinesSm
      captain
      captainSm
      bootjack
      bootjackSm
      fishcamp
      fishcampSm
      catheys
      laurel
      usona
      grizzly
      grizzlySm
      riven
      rivenSm
      hornitos
      totokon
      portal
      meadows
      meadowsSm
      market
      mariposan
      blt
      bltSm
      sourcream
      hummus
      avocado
      pickles
      bacon
      fakin
      extraveg
      ciabatta
      croissant
      sliceChz
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCenterMenus = /* GraphQL */ `
  query ListCenterMenus(
    $filter: ModelCenterMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCenterMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ponderosa
        midpines
        midpinesSm
        captain
        captainSm
        bootjack
        bootjackSm
        fishcamp
        fishcampSm
        catheys
        laurel
        usona
        grizzly
        grizzlySm
        riven
        rivenSm
        hornitos
        totokon
        portal
        meadows
        meadowsSm
        market
        mariposan
        blt
        bltSm
        sourcream
        hummus
        avocado
        pickles
        bacon
        fakin
        extraveg
        ciabatta
        croissant
        sliceChz
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRightMenu = /* GraphQL */ `
  query GetRightMenu($id: ID!) {
    getRightMenu(id: $id) {
      id
      mono
      bagby
      french
      quiche
      burritoMeat
      burritoVeggie
      bagel
      creamChz
      muffin
      crumblePie
      chocCake
      carrotCake
      brownies
      cookies
      juice
      beetIt
      carrotKale
      carrot
      citrus
      pureGreens
      smoothie
      boost
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRightMenus = /* GraphQL */ `
  query ListRightMenus(
    $filter: ModelRightMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRightMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mono
        bagby
        french
        quiche
        burritoMeat
        burritoVeggie
        bagel
        creamChz
        muffin
        crumblePie
        chocCake
        carrotCake
        brownies
        cookies
        juice
        beetIt
        carrotKale
        carrot
        citrus
        pureGreens
        smoothie
        boost
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
