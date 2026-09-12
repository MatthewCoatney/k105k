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
  halfSandwich: number;
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
        label: "Moonlit Grove",
        placeholder: "Enter Moonlit Grove",
        required: true,
      },
    },
    {
      key: "hitesSm",
      type: "input",
      templateOptions: {
        label: "Moonlit Grove SM",
        placeholder: "Enter Moonlit Grove SM",
        required: true,
      },
    },
    {
      key: "creek",
      type: "input",
      templateOptions: {
        label: "Silver Current",
        placeholder: "Enter Silver Current",
        required: true,
      },
    },
    {
      key: "creekSm",
      type: "input",
      templateOptions: {
        label: "Silver Current SM",
        placeholder: "Enter Silver Current SM",
        required: true,
      },
    },
    {
      key: "pilot",
      type: "input",
      templateOptions: {
        label: "Starwatch Peak",
        placeholder: "Enter Starwatch Peak",
        required: true,
      },
    },
    {
      key: "pilotSm",
      type: "input",
      templateOptions: {
        label: "Starwatch Peak SM",
        placeholder: "Enter Starwatch Peak SM",
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
      key: "halfSandwich",
      type: "input",
      templateOptions: {
        label: "Half Sandwich",
        placeholder: "Enter Half Sandwich",
        required: true,
      },
    },
    {
      key: "ponderosa",
      type: "input",
      templateOptions: {
        label: "Orchard Keeper",
        placeholder: "Enter Orchard Keeper",
        required: true,
      },
    },
    {
      key: "midpines",
      type: "input",
      templateOptions: {
        label: "Ember Grove",
        placeholder: "Enter Ember Grove",
        required: true,
      },
    },
    {
      key: "midpinesSm",
      type: "input",
      templateOptions: {
        label: "Ember Grove SM",
        placeholder: "Enter Ember Grove SM",
        required: true,
      },
    },
    {
      key: "captain",
      type: "input",
      templateOptions: {
        label: "Green Knight",
        placeholder: "Enter Green Knight",
        required: true,
      },
    },
    {
      key: "captainSm",
      type: "input",
      templateOptions: {
        label: "Green Knight SM",
        placeholder: "Enter Green Knight SM",
        required: true,
      },
    },
    {
      key: "bootjack",
      type: "input",
      templateOptions: {
        label: "Wayfarer",
        placeholder: "Enter Wayfarer",
        required: true,
      },
    },
    {
      key: "bootjackSm",
      type: "input",
      templateOptions: {
        label: "Wayfarer SM",
        placeholder: "Enter Wayfarer SM",
        required: true,
      },
    },
    {
      key: "fishcamp",
      type: "input",
      templateOptions: {
        label: "Mariner",
        placeholder: "Enter Mariner",
        required: true,
      },
    },
    {
      key: "fishcampSm",
      type: "input",
      templateOptions: {
        label: "Mariner SM",
        placeholder: "Enter Mariner SM",
        required: true,
      },
    },
    {
      key: "catheys",
      type: "input",
      templateOptions: {
        label: "Centurion",
        placeholder: "Enter Centurion",
        required: true,
      },
    },
    {
      key: "laurel",
      type: "input",
      templateOptions: {
        label: "Winter Court",
        placeholder: "Enter Winter Court",
        required: true,
      },
    },
    {
      key: "usona",
      type: "input",
      templateOptions: {
        label: "Oracle",
        placeholder: "Enter Oracle",
        required: true,
      },
    },
    {
      key: "grizzly",
      type: "input",
      templateOptions: {
        label: "Warlock",
        placeholder: "Enter Warlock",
        required: true,
      },
    },
    {
      key: "grizzlySm",
      type: "input",
      templateOptions: {
        label: "Warlock SM",
        placeholder: "Enter Warlock SM",
        required: true,
      },
    },
    {
      key: "riven",
      type: "input",
      templateOptions: {
        label: "Alchemist",
        placeholder: "Enter Alchemist",
        required: true,
      },
    },
    {
      key: "rivenSm",
      type: "input",
      templateOptions: {
        label: "Alchemist SM",
        placeholder: "Enter Alchemist SM",
        required: true,
      },
    },
    {
      key: "hornitos",
      type: "input",
      templateOptions: {
        label: "Gunslinger",
        placeholder: "Enter Gunslinger",
        required: true,
      },
    },
    {
      key: "totokon",
      type: "input",
      templateOptions: {
        label: "Artificer",
        placeholder: "Enter Artificer",
        required: true,
      },
    },
    {
      key: "portal",
      type: "input",
      templateOptions: {
        label: "Wanderer",
        placeholder: "Enter Wanderer",
        required: true,
      },
    },
    {
      key: "meadows",
      type: "input",
      templateOptions: {
        label: "Faery Bargain",
        placeholder: "Enter Faery Bargain",
        required: true,
      },
    },
    {
      key: "meadowsSm",
      type: "input",
      templateOptions: {
        label: "Faery Bargain",
        placeholder: "Enter Faery Bargain",
        required: true,
      },
    },
    {
      key: "market",
      type: "input",
      templateOptions: {
        label: "Green Witch",
        placeholder: "Enter Green Witch",
        required: true,
      },
    },
    {
      key: "mariposan",
      type: "input",
      templateOptions: {
        label: "Spellbinder",
        placeholder: "Enter Spellbinder",
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
        label: "Hummus",
        placeholder: "Enter Hummus",
        required: true,
      },
    },
    {
      key: "avocado",
      type: "input",
      templateOptions: {
        label: "Avocado",
        placeholder: "Enter Avocado",
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
        label: "Soloist",
        placeholder: "Enter Soloist",
        required: true,
      },
    },
    {
      key: "bagby",
      type: "input",
      templateOptions: {
        label: "Dawnkeeper",
        placeholder: "Enter Dawnkeeper",
        required: true,
      },
    },
    {
      key: "french",
      type: "input",
      templateOptions: {
        label: "Sunforged",
        placeholder: "Enter Sunforged",
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
        label: "Crimson Current",
        placeholder: "Enter Crimson Current",
        required: true,
      },
    },
    {
      key: "carrotKale",
      type: "input",
      templateOptions: {
        label: "Green Circuit",
        placeholder: "Enter Green Circuit",
        required: true,
      },
    },
    {
      key: "carrot",
      type: "input",
      templateOptions: {
        label: "Orange Spell",
        placeholder: "Enter Orange Spell",
        required: true,
      },
    },
    {
      key: "citrus",
      type: "input",
      templateOptions: {
        label: "Sunward",
        placeholder: "Enter Sunward",
        required: true,
      },
    },
    {
      key: "pureGreens",
      type: "input",
      templateOptions: {
        label: "Verdant Hex",
        placeholder: "Enter Verdant Hex",
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
  hites: 12.99,
  hitesSm: 8.29,
  creek: 18.29,
  creekSm: 9.99,
  pilot: 12.29,
  pilotSm: 7.29,
  chinese: 10.09,
  chineseSm: 5.09,
  southwest: 14.99,
  southwestSm: 8.99,
  green: 12.99,
  greenSm: 7.99,
  tuna: 11.29,
  tunaSm: 5.69,
  waldorf: 5.89,
  waldorfSm: 2.99,
  caesar: 12.99,
  caesarSm: 7.99,
  cup: 3.99,
  bowl: 9.99,
  foccacia: 1.29,
  pbj: 5.99,
  grilledChz: 5.99,
  hamChz: 9.59,
  coffee: 3.99,
  tea: 2.99,
  chai: 3.99,
  soupSalad: 11.29,
};

export let modelDefaultCenter: CenterMenu = {
  halfSandwich: 7.49,
  ponderosa: 9.99,
  midpines: 11.69,
  midpinesSm: 0,
  captain: 12.49,
  captainSm: 0,
  bootjack: 9.99,
  bootjackSm: 0,
  fishcamp: 10.99,
  fishcampSm: 0,
  catheys: 11.29,
  laurel: 14.99,
  usona: 10.29,
  grizzly: 9.99,
  grizzlySm: 0,
  riven: 12.99,
  rivenSm: 0,
  hornitos: 13.99,
  totokon: 16.99,
  portal: 9.99,
  meadows: 10.99,
  meadowsSm: 0,
  market: 11.99,
  mariposan: 10.99,
  blt: 10.99,
  bltSm: 0,
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
modelDefaultCenter.bltSm = modelDefaultCenter.halfSandwich;
modelDefaultCenter.bootjackSm = modelDefaultCenter.halfSandwich;
modelDefaultCenter.captainSm = modelDefaultCenter.halfSandwich;
modelDefaultCenter.fishcampSm = modelDefaultCenter.halfSandwich;
modelDefaultCenter.grizzlySm = modelDefaultCenter.halfSandwich;
modelDefaultCenter.meadowsSm = modelDefaultCenter.halfSandwich;
modelDefaultCenter.midpinesSm = modelDefaultCenter.halfSandwich;
modelDefaultCenter.rivenSm = modelDefaultCenter.halfSandwich;

export let modelDefaultRight: RightMenu = {
  mono: 9.99,
  bagby: 7.99,
  french: 14.29,
  quiche: 10.99,
  burritoMeat: 14.99,
  burritoVeggie: 12.69,
  bagel: 1.99,
  creamChz: 1.29,
  muffin: 3.99,
  crumblePie: 4.99,
  chocCake: 3.99,
  carrotCake: 5.99,
  brownies: 3.99,
  cookies: 1.49,
  juice: 10.99,
  beetIt: 0,
  carrotKale: 0,
  carrot: 0,
  citrus: 0,
  pureGreens: 0,
  smoothie: 9.99,
  boost: 1.00,
};

modelDefaultRight.carrot = modelDefaultRight.juice;
modelDefaultRight.carrotKale = modelDefaultRight.juice;
modelDefaultRight.citrus = modelDefaultRight.juice;
modelDefaultRight.pureGreens = modelDefaultRight.juice;
modelDefaultRight.beetIt = modelDefaultRight.juice;
