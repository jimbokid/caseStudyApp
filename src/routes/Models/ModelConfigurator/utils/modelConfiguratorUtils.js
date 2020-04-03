// @flow
import _ from 'lodash'
import type {ModelData, ReformatModelData, SelectedModel, TrimsItem, ColorItem} from "../types/ModelDataTypes";

/**
 * Reformat models arrays(trims and colors) to associative arrays. Also add sorting by price (trims and colors).
 *
 * @param {object} model
 * @returns {object}
 */
export const reformatModelData = (model: ModelData): ReformatModelData => {
  let defaultTrim: string = '', defaultColor: string = '';
  const sortByPrice = {
    ...model,
    trims: _.sortBy(model.trims, 'price')
  }

  const reformatResponse = {
    ...sortByPrice,
    trims: sortByPrice.trims.reduce((prevTrim, trim: TrimsItem, trimIndex) => {
      if (trimIndex === 0) {
        defaultTrim = trim.name
      }
      return {
        ...prevTrim,
        [trim.name]: {
          ...trim,
          colors: _.sortBy(trim.colors, 'price').reduce((prevColor, color: ColorItem, colorIndex) => {
            if (colorIndex === 0) {
              defaultColor = color.name
            }
            return {
              ...prevColor,
              [color.name]: {
                ...color,
              }
            }
          }, {})
        }
      }
    }, {})
  }

  return {reformatResponse, defaultTrim, defaultColor}
}

/**
 * Calculate total price - based on selected trim and color
 *
 * @param {object} activeModel
 * @param {object} selected
 * @returns {number}
 */
export const calculateTotalPrice = (activeModel: TrimsItem, selected: SelectedModel) => {
  return activeModel.price + activeModel.colors[selected.colorName].price
}
