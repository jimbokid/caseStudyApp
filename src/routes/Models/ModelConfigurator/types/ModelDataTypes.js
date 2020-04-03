// @flow
export type ColorItem = {
  name: string,
  iconUrl: string,
  imageUrl: string,
  price: number,
}

export type Colors = {
  [colorName: string]: ColorItem
};

export type TrimsItem = {
  name: string,
  price: number,
  colors: Colors
}

export type Trims = {
  [trimName: string]: TrimsItem
};

export type ModelData = {
  code: string,
  name: string,
  trims: Trims,
};

export type SelectedModel = {
  trimName: string,
  colorName: string
};

export type ReformatModelData = {
  reformatResponse: ModelData,
  defaultTrim: string,
  defaultColor: string
};

