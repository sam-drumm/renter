const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const reports = require('./reports')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('postReport', () => {
  it('posts a new report', () => {
    const newReport = {
      id: 3,
      user_id: 1,
      address: '528 Mount Eden Road, Mount Eden, Auckland',
      rooms_1: 1,
      rooms_2: 3,
      rent_total: 600,
      utilities: 'yes',
      year_1: 2020,
      year_2: 2021,
      property_managed_by: 'Landlord',
      rent_increase: 'Once a year',
      ave_increase: 20,
      heat_pump: true,
      insulation: false,
      fridge: true,
      curtains: false,
      oven: true,
      smoke_alarm: true,
      fire_extinguisher: false,
      pets_ok: true,
      smoking_ok: true,
      subletting_allowed: false,
      responsive_repairs: 'Very responsive',
      repairs: 'Landlord',
      sufficient_notice: 'Sometimes',
      rate_relationship: 'Neutral'

    }
    return reports.addReport(newReport, testDb)
      .then(report => {
        const id = report[0]
        return reports.getReportById(id, testDb)
      })
      .then(report => {
        expect(report.id).toBe(3)
        expect(report.repairs).toBe('Landlord')
        expect(report.address).toMatch('Mount Eden')
        return null
      })
  })
})

describe('getReportById', () => {
  it('returns the correct report', () => {
    return reports.getReportById('1', testDb)
      .then((report) => {
        expect(report.id).toBe(1)
        expect(report.repairs).toBe('Landlord')
        expect(report.address).toMatch('Mount Eden')
        return null
      })
  })
})
