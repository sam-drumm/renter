const connection = require('./connection')

function getAddresses (db = connection) {
  return db('reports')
    .select('address')
}

function getReportsByAddress (address, db = connection) {
  return db('reports')
    .where('address', address)
    .select()
}

function getReportsById (id, db = connection) {
  return db('reports')
    .where('report.id', id)
    .select(
      'reports.rooms_1 as rooms1',
      'reports.rooms_2 as rooms2',
      'reports.rent_total as rentTotal',
      'reports.rent_utilities as rentUtilities',
      'reports.year_1 as year1',
      'reports.year_2 as year2',
      'reports.property_managed_by as propertyManagedBy',
      'reports.rent_increase_frequency as rentIncreaseFrequency',
      'reports.ave_increase as aveIncrease',
      'reports.heat_pump as heatPump',
      'reports.insulation as insulation',
      'reports.fridge as fridge',
      'reports.curtains as curtains',
      'reports.oven as oven',
      'reports.smoke_alarm as smokeAlarm',
      'reports.fire_extinguisher as fireExtinguisher',
      'reports.pets_ok as petsOk',
      'reports.smoking_ok as smokingOk',
      'reports.subletting_allowed as sublettingAllowed',
      'reports.responsive_repairs as responsiveRepairs',
      'reports.repairs as repairs',
      'reports.sufficient_notice as sufficientNotice',
      'reports.rate_relationship as rateRelationship'
    )
    .first()
}

/// address from properties

function addReport (newReport, db = connection) {
  const { auth0Id, address, rooms1, rooms2, rentTotal, utilities, year1, year2, managedBy, rentIncrease, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, pets, smoking, subletting, repairsResponsive, repairs, notice, relationship } = newReport
  return db('reports')
    .insert({
      user_id: auth0Id,
      address: address,
      rooms_1: rooms1,
      rooms_2: rooms2,
      rent_total: rentTotal,
      utilities,
      year_1: year1,
      year_2: year2,
      property_managed_by: managedBy,
      rent_increase: rentIncrease,
      ave_increase: aveIncrease,
      heat_pump: heatPump,
      insulation,
      fridge,
      oven,
      smoke_alarm: smokeAlarm,
      fire_extinguisher: fireExtinguisher,
      curtains,
      pets_ok: pets,
      smoking_ok: smoking,
      subletting_allowed: subletting,
      responsive_repairs: repairsResponsive,
      repairs: repairs,
      sufficient_notice: notice,
      rate_relationship: relationship
    })
}

module.exports = {
  getReportsByAddress,
  getAddresses,
  getReportsById,
  addReport
}
