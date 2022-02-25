const connection = require('./connection')

function getReports (db = connection) {
  return db('reports')
    .select()
}

function getReportsById (id, db = connection) {
  return db('reports')
    .join('properties', 'reports.id', 'properties.id')
    .where('report.id', id)
    .select(
      'properties.id as propertyId',
      'properties.address as address',
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
      'reports.rental_management as rentalManagement',
      'reports.repairs as repairs',
      'reports.sufficient_notice as sufficientNotice',
      'reports.rate_relationship as rateRelationship'
    )
    .first()
}

/// address from properties

function addReport (newReport, db = connection) {
  const { propertyId, address, rooms1, rooms2, rentTotal, rentUtilities, year1, year2, propertyManagedBy, rentIncreaseFrequency, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, petsOk, smokingOk, sublettingAllowed, responsiveRepairs, rentalManagement, repairs, sufficientNotice, rateRelationship } = newReport
  return db('reports')
    .insert({
      id: 1,
      property_id: propertyId,
      address,
      rooms_1: rooms1,
      rooms_2: rooms2,
      rent_total: rentTotal,
      rent_utilities: rentUtilities,
      year_1: year1,
      year_2: year2,
      property_managed_by: propertyManagedBy,
      rent_increase_frequency: rentIncreaseFrequency,
      ave_increase: aveIncrease,
      heat_pump: heatPump,
      insulation,
      fridge,
      curtains,
      oven,
      smoke_alarm: smokeAlarm,
      fire_extinguisher: fireExtinguisher,
      pets_ok: petsOk,
      smoking_ok: smokingOk,
      subletting_allowed: sublettingAllowed,
      responsive_repairs: responsiveRepairs,
      rental_management: rentalManagement,
      repairs,
      sufficient_notice: sufficientNotice,
      rate_relationship: rateRelationship
    })
}

module.exports = {
  getReports,
  getReportsById,
  addReport
}
