//@flow
import type {ModelData} from './ModelDataTypes'

export type ModelConfiguratorState = {
  isLoading: boolean,
  modelData: ModelData,
  selected: {
    trimName: string,
    colorName: string
  }
}
