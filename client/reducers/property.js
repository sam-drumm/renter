import { SET_PROPERTY, CLEAR_PROPERTY } from '../actions/property'

const emptyProperty = {
  id: null,
  addressAPI: null,
  rooms1: '',
  rooms2: '',
  rentTotal: '',
  utilities: '',
  years1: '',
  years2: '',
  managedBy: '',
  rentIncrease: '',
  aveIncrease: '',
  heatPump: false,
  insulation: false,
  fridge: false,
  oven: false,
  smokeAlarm: false,
  fireExtinguisher: false,
  curtains: false,
  pets: false,
  smoking: false,
  subletting: false,
  repairsConducted: '-1',
  repairsResponsive: '-1',
  notice: '-1',
  relationship: '-1'
}

export default function property (state = emptyProperty, action) {
  switch (action.type) {
    case SET_PROPERTY:
      return action.property

    case CLEAR_PROPERTY:
      return emptyProperty

    default:
      return state
  }
}
