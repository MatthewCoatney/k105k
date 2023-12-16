import { FormlyFieldConfig } from "@ngx-formly/core";

export class LeftMenu {
  hites: number;
  hitesSm: number;
  creek: number;
  creekSm: number;
  pilot: number;
  pilotSm: number;
  chinese: number;
  chineseSm: number;
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
}

export class CenterMenu {
  ponderosa: number;
  midpines: number;
  midpinesSm: number;
  captain: number;
  captainSm: number;
  bootjack: number;
  bootjackSm: number;
  fishcamp: number;
  fishcampSm: number;
  catheys: number;
  laurel: number;
  usona: number;
  grizzly: number;
  grizzlySm: number;
  riven: number;
  rivenSm: number;
  hornitos: number;
  totokon: number;
  portal: number;
  meadows: number;
  meadowsSm: number;
  market: number;
  mariposan: number;
  blt: number;
  bltSm: number;
  sourcream: number;
  hummus: number;
  avocado: number;
  pickles: number;
  bacon: number;
  fakin: number;
  extraveg: number;
  ciabatta: number;
  croissant: number;
  sliceChz: number;
}

export class RightMenu {
  mono: number;
  bagby: number;
  french: number;
  quiche: number;
  burritoMeat: number;
  burritoVeggie: number;
  bagel: number;
  creamChz: number;
  muffin: number;
  crumblePie: number;
  chocCake: number;
  carrotCake: number;
  brownies: number;
  cookies: number;
  juice: number;
  beetIt: number;
  carrotKale: number;
  carrot: number;
  citrus: number;
  pureGreens: number;
  smoothie: number;
  boost: number;
}

export class Menu {
  public static leftFields: FormlyFieldConfig[] = [
    {
      key: "hites",
      type: "input",
      templateOptions: {
        label: "Hites Sandwich",
        placeholder: "Enter Hites",
        required: true,
      },
    },
    {
      key: "hitesSm",
      type: "input",
      templateOptions: {
        label: "Hites Sm Sandwich",
        placeholder: "Enter Hites SM",
        required: true,
      },
    },
    {
      key: "creek",
      type: "input",
      templateOptions: {
        label: "Creek Sandwich",
        placeholder: "Enter Creek",
        required: true,
      },
    },
    {
      key: "creekSm",
      type: "input",
      templateOptions: {
        label: "Creek Sm Sandwich",
        placeholder: "Enter Creek SM",
        required: true,
      },
    },
    {
      key: "pilot",
      type: "input",
      templateOptions: {
        label: "Pilot Sandwich",
        placeholder: "Enter Pilot",
        required: true,
      },
    },
    {
      key: "pilotSm",
      type: "input",
      templateOptions: {
        label: "Pilot Sm Sandwich",
        placeholder: "Enter Pilot SM",
        required: true,
      },
    },
    {
      key: "chinese",
      type: "input",
      templateOptions: {
        label: "Chinese Chicken Salad",
        placeholder: "Enter Chinese",
        required: true,
      },
    },
    {
      key: "chineseSm",
      type: "input",
      templateOptions: {
        label: "Chinese SM Chicken Salad",
        placeholder: "Enter Chinese SM",
        required: true,
      },
    },
    {
      key: "southwest",
      type: "input",
      templateOptions: {
        label: "Southwest Salad",
        placeholder: "Enter Soutwest",
        required: true,
      },
    },
    {
      key: "southwestSm",
      type: "input",
      templateOptions: {
        label: "Southwest Sm Salad",
        placeholder: "Enter Southwest SM",
        required: true,
      },
    },
    {
      key: "green",
      type: "input",
      templateOptions: {
        label: "Green Sm Salad",
        placeholder: "Enter Green SM",
        required: true,
      },
    },
    {
      key: "greenSm",
      type: "input",
      templateOptions: {
        label: "Green Sm Salad",
        placeholder: "Enter Green SM",
        required: true,
      },
    },
    {
      key: "tuna",
      type: "input",
      templateOptions: {
        label: "Tuna Salad",
        placeholder: "Enter Tuna",
        required: true,
      },
    },
    {
      key: "tunaSm",
      type: "input",
      templateOptions: {
        label: "Tuna Sm Salad",
        placeholder: "Enter Tuna SM",
        required: true,
      },
    },
    {
      key: "waldorf",
      type: "input",
      templateOptions: {
        label: "Waldorf Salad",
        placeholder: "Enter Waldorf",
        required: true,
      },
    },
    {
      key: "waldorfSm",
      type: "input",
      templateOptions: {
        label: "Waldorf Sm Salad",
        placeholder: "Enter Waldorf SM",
        required: true,
      },
    },
    {
      key: "caesar",
      type: "input",
      templateOptions: {
        label: "Caesar Salad",
        placeholder: "Enter Caesar",
        required: true,
      },
    },
    {
      key: "caesarSm",
      type: "input",
      templateOptions: {
        label: "Caesar Sm Salad",
        placeholder: "Enter Caesar SM",
        required: true,
      },
    },
    {
      key: "cup",
      type: "input",
      templateOptions: {
        label: "Cup of Soup",
        placeholder: "Enter Cup",
        required: true,
      },
    },
    {
      key: "bowl",
      type: "input",
      templateOptions: {
        label: "Bowl of Soup",
        placeholder: "Enter Bowl",
        required: true,
      },
    },
    {
      key: "foccacia",
      type: "input",
      templateOptions: {
        label: "Foccacia Bread",
        placeholder: "Enter Foccacia",
        required: true,
      },
    },
    {
      key: "pbj",
      type: "input",
      templateOptions: {
        label: "PBJ",
        placeholder: "Enter PBJ",
        required: true,
      },
    },
    {
      key: "grilledChz",
      type: "input",
      templateOptions: {
        label: "Grilled Cheese",
        placeholder: "Enter Grilled Cheese",
        required: true,
      },
    },
    {
      key: "hamChz",
      type: "input",
      templateOptions: {
        label: "Ham & Cheddar",
        placeholder: "Enter Ham & Cheddar",
        required: true,
      },
    },
    {
      key: "coffee",
      type: "input",
      templateOptions: {
        label: "Coffee",
        placeholder: "Enter Coffee",
        required: true,
      },
    },
    {
      key: "tea",
      type: "input",
      templateOptions: {
        label: "Tea",
        placeholder: "Enter Tea",
        required: true,
      },
    },
    {
      key: "chai",
      type: "input",
      templateOptions: {
        label: "Chai",
        placeholder: "Enter Chai",
        required: true,
      },
    },
    {
      key: "soupSalad",
      type: "input",
      templateOptions: {
        label: "Soup & Salad",
        placeholder: "Enter Soup & Salad",
        required: true,
      },
    },
  ];

  public static centerFields: FormlyFieldConfig[] = [
    {
      key: "ponderosa",
      type: "input",
      templateOptions: {
        label: "Ponderosa",
        placeholder: "Enter Ponderosa",
        required: true,
      },
    },
    {
      key: "midpines",
      type: "input",
      templateOptions: {
        label: "Midpines",
        placeholder: "Enter Midpines",
        required: true,
      },
    },
    {
      key: "midpinesSm",
      type: "input",
      templateOptions: {
        label: "Midpines SM",
        placeholder: "Enter Midpines SM",
        required: true,
      },
    },
    {
      key: "captain",
      type: "input",
      templateOptions: {
        label: "Captain",
        placeholder: "Enter Captain",
        required: true,
      },
    },
    {
      key: "captainSm",
      type: "input",
      templateOptions: {
        label: "Captain SM",
        placeholder: "Enter Captain SM",
        required: true,
      },
    },
    {
      key: "bootjack",
      type: "input",
      templateOptions: {
        label: "Bootjack",
        placeholder: "Enter Bootjack",
        required: true,
      },
    },
    {
      key: "bootjackSm",
      type: "input",
      templateOptions: {
        label: "Bootjack SM",
        placeholder: "Enter Bootjack SM",
        required: true,
      },
    },
    {
      key: "fishcamp",
      type: "input",
      templateOptions: {
        label: "Fishcamp",
        placeholder: "Enter Fishcamp",
        required: true,
      },
    },
    {
      key: "fishcampSm",
      type: "input",
      templateOptions: {
        label: "Fishcamp SM",
        placeholder: "Enter Fishcamp SM",
        required: true,
      },
    },
    {
      key: "catheys",
      type: "input",
      templateOptions: {
        label: "Catheys",
        placeholder: "Enter Catheys",
        required: true,
      },
    },
    {
      key: "laurel",
      type: "input",
      templateOptions: {
        label: "Laurel",
        placeholder: "Enter Laurel",
        required: true,
      },
    },
    {
      key: "usona",
      type: "input",
      templateOptions: {
        label: "Usona",
        placeholder: "Enter Usona",
        required: true,
      },
    },
    {
      key: "grizzly",
      type: "input",
      templateOptions: {
        label: "Grizzly",
        placeholder: "Enter Grizzly",
        required: true,
      },
    },
    {
      key: "grizzlySm",
      type: "input",
      templateOptions: {
        label: "Grizzly SM",
        placeholder: "Enter Grizzly SM",
        required: true,
      },
    },
    {
      key: "riven",
      type: "input",
      templateOptions: {
        label: "Riven",
        placeholder: "Enter Riven",
        required: true,
      },
    },
    {
      key: "rivenSm",
      type: "input",
      templateOptions: {
        label: "Riven SM",
        placeholder: "Enter Riven SM",
        required: true,
      },
    },
    {
      key: "hornitos",
      type: "input",
      templateOptions: {
        label: "Hornitos",
        placeholder: "Enter Hornitos",
        required: true,
      },
    },
    {
      key: "totokon",
      type: "input",
      templateOptions: {
        label: "Totokon",
        placeholder: "Enter Totokon",
        required: true,
      },
    },
    {
      key: "portal",
      type: "input",
      templateOptions: {
        label: "Portal",
        placeholder: "Enter Portal",
        required: true,
      },
    },
    {
      key: "meadows",
      type: "input",
      templateOptions: {
        label: "Meadows",
        placeholder: "Enter Meadows",
        required: true,
      },
    },
    {
      key: "meadowsSm",
      type: "input",
      templateOptions: {
        label: "Meadows",
        placeholder: "Enter Meadows",
        required: true,
      },
    },
    {
      key: "market",
      type: "input",
      templateOptions: {
        label: "Market",
        placeholder: "Enter Market",
        required: true,
      },
    },
    {
      key: "mariposan",
      type: "input",
      templateOptions: {
        label: "Mariposan",
        placeholder: "Enter Mariposan",
        required: true,
      },
    },
    {
      key: "blt",
      type: "input",
      templateOptions: {
        label: "BLT",
        placeholder: "Enter BLT",
        required: true,
      },
    },
    {
      key: "bltSm",
      type: "input",
      templateOptions: {
        label: "BLT SM",
        placeholder: "Enter BLT SM",
        required: true,
      },
    },
    {
      key: "sourcream",
      type: "input",
      templateOptions: {
        label: "Sour Cream",
        placeholder: "Enter Sour Cream",
        required: true,
      },
    },
    {
      key: "hummus",
      type: "input",
      templateOptions: {
        label: "Avacado",
        placeholder: "Enter Avacado",
        required: true,
      },
    },
    {
      key: "pickles",
      type: "input",
      templateOptions: {
        label: "Pickles",
        placeholder: "Enter Pickles",
        required: true,
      },
    },
    {
      key: "bacon",
      type: "input",
      templateOptions: {
        label: "Bacon",
        placeholder: "Enter Bacon",
        required: true,
      },
    },
    {
      key: "fakin",
      type: "input",
      templateOptions: {
        label: "Fak'n Bac'n",
        placeholder: "Enter Fak'n Bac'n",
        required: true,
      },
    },
    {
      key: "extraveg",
      type: "input",
      templateOptions: {
        label: "Extra Veggies",
        placeholder: "Enter Extra Veggies",
        required: true,
      },
    },
    {
      key: "ciabatta",
      type: "input",
      templateOptions: {
        label: "Ciabatta",
        placeholder: "Enter Ciabatta",
        required: true,
      },
    },
    {
      key: "croissant",
      type: "input",
      templateOptions: {
        label: "Croissant",
        placeholder: "Enter Croissant",
        required: true,
      },
    },
    {
      key: "sliceChz",
      type: "input",
      templateOptions: {
        label: "Slice of Cheese",
        placeholder: "Enter Slice of Cheese",
        required: true,
      },
    },
  ];

  public static rightFields: FormlyFieldConfig[] = [
    {
      key: "mono",
      type: "input",
      templateOptions: {
        label: "Mono",
        placeholder: "Enter Mono",
        required: true,
      },
    },
    {
      key: "bagby",
      type: "input",
      templateOptions: {
        label: "Bagby",
        placeholder: "Enter Bagby",
        required: true,
      },
    },
    {
      key: "french",
      type: "input",
      templateOptions: {
        label: "French",
        placeholder: "Enter French",
        required: true,
      },
    },
    {
      key: "quiche",
      type: "input",
      templateOptions: {
        label: "Quiche",
        placeholder: "Enter Quiche",
        required: true,
      },
    },
    {
      key: "burritoMeat",
      type: "input",
      templateOptions: {
        label: "Burrito Meat",
        placeholder: "Enter Burrito Meat",
        required: true,
      },
    },
    {
      key: "burritoVeggie",
      type: "input",
      templateOptions: {
        label: "Burrito Veggie",
        placeholder: "Enter Burrito Veggie",
        required: true,
      },
    },
    {
      key: "bagel",
      type: "input",
      templateOptions: {
        label: "Bagel",
        placeholder: "Enter Bagel",
        required: true,
      },
    },
    {
      key: "creamChz",
      type: "input",
      templateOptions: {
        label: "Cream Cheese",
        placeholder: "Enter Cream Cheese",
        required: true,
      },
    },
    {
      key: "muffin",
      type: "input",
      templateOptions: {
        label: "Muffin",
        placeholder: "Enter Muffin",
        required: true,
      },
    },
    {
      key: "crumblePie",
      type: "input",
      templateOptions: {
        label: "Crumble Pie",
        placeholder: "Enter Crumble Pie",
        required: true,
      },
    },
    {
      key: "chocCake",
      type: "input",
      templateOptions: {
        label: "Chocolate Cake",
        placeholder: "Enter Chocolate Cake",
        required: true,
      },
    },
    {
      key: "carrotCake",
      type: "input",
      templateOptions: {
        label: "Carrot Cake",
        placeholder: "Enter Carrot Cake",
        required: true,
      },
    },
    {
      key: "brownies",
      type: "input",
      templateOptions: {
        label: "Brownies",
        placeholder: "Enter Brownies",
        required: true,
      },
    },
    {
      key: "cookies",
      type: "input",
      templateOptions: {
        label: "Cookies",
        placeholder: "Enter Cookies",
        required: true,
      },
    },
    {
      key: "juice",
      type: "input",
      templateOptions: {
        label: "Juice",
        placeholder: "Enter Juice",
        required: true,
      },
    },
    {
      key: "beetIt",
      type: "input",
      templateOptions: {
        label: "Beet It!",
        placeholder: "Enter Beet It!",
        required: true,
      },
    },
    {
      key: "carrotKale",
      type: "input",
      templateOptions: {
        label: "Carrot Kale",
        placeholder: "Enter Carrot Kale",
        required: true,
      },
    },
    {
      key: "carrot",
      type: "input",
      templateOptions: {
        label: "Carrot",
        placeholder: "Enter Carrot",
        required: true,
      },
    },
    {
      key: "citrus",
      type: "input",
      templateOptions: {
        label: "Citrus",
        placeholder: "Enter Citrus",
        required: true,
      },
    },
    {
      key: "pureGreens",
      type: "input",
      templateOptions: {
        label: "Pure Greens",
        placeholder: "Enter Pure Greens",
        required: true,
      },
    },
    {
      key: "smoothie",
      type: "input",
      templateOptions: {
        label: "Smoothie",
        placeholder: "Enter Smoothie",
        required: true,
      },
    },
    {
      key: "boost",
      type: "input",
      templateOptions: {
        label: "Boost",
        placeholder: "Enter Boost",
        required: true,
      },
    },
  ];
}

export const modelDefaultLeft: LeftMenu = {
  hites: 10.99,
  hitesSm: 7.99,
  creek: 12.99,
  creekSm: 7.99,
  pilot: 10.99,
  pilotSm: 6.29,
  chinese: 10.29,
  chineseSm: 5.29,
  southwest: 15.99,
  southwestSm: 9.99,
  green: 8.99,
  greenSm: 4.99,
  tuna: 8.99,
  tunaSm: 4.99,
  waldorf: 5.99,
  waldorfSm: 2.99,
  caesar: 11.99,
  caesarSm: 7.49,
  cup: 4.99,
  bowl: 9.99,
  foccacia: 1.99,
  pbj: 4.99,
  grilledChz: 4.99,
  hamChz: 7.49,
  coffee: 1.99,
  tea: 1.99,
  chai: 3.59,
  soupSalad: 9.49,
};

export const modelDefaultCenter: CenterMenu = {
  ponderosa: 9.99,
  midpines: 12.29,
  midpinesSm: 6.99,
  captain: 12.49,
  captainSm: 6.99,
  bootjack: 9.99,
  bootjackSm: 6.99,
  fishcamp: 10.99,
  fishcampSm: 6.99,
  catheys: 11.29,
  laurel: 14.99,
  usona: 10.29,
  grizzly: 9.99,
  grizzlySm: 6.99,
  riven: 12.99,
  rivenSm: 6.99,
  hornitos: 13.99,
  totokon: 16.99,
  portal: 9.99,
  meadows: 10.99,
  meadowsSm: 6.99,
  market: 11.99,
  mariposan: 10.99,
  blt: 10.99,
  bltSm: 6.99,
  sourcream: 0.99,
  hummus: 2.99,
  avocado: 3.29,
  pickles: 1.29,
  bacon: 1.59,
  fakin: 1.59,
  extraveg: 0.69,
  ciabatta: 1.49,
  croissant: 1.99,
  sliceChz: 0.99,
};

export const modelDefaultRight: RightMenu = {
  mono: 6.79,
  bagby: 6.29,
  french: 12.29,
  quiche: 10.99,
  burritoMeat: 16.99,
  burritoVeggie: 14.59,
  bagel: 1.99,
  creamChz: 1.29,
  muffin: 3.99,
  crumblePie: 4.99,
  chocCake: 3.99,
  carrotCake: 5.99,
  brownies: 3.99,
  cookies: 1.99,
  juice: 9.99,
  beetIt: 9.99,
  carrotKale: 9.99,
  carrot: 9.99,
  citrus: 9.99,
  pureGreens: 9.99,
  smoothie: 9.99,
  boost: 1.00,
};
