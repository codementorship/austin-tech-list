/* global test, expect */
const austinTechList = require('./index')

test('exports an array', () => {
  expect(Array.isArray(austinTechList)).toBeTruthy()
})

test('entries only contain required keys', () => {
  austinTechList.forEach(entry => {
    expect(typeof entry['name']).toBe('string')
    expect(typeof entry['homepage']).toBe('string')
    expect(typeof entry['careers']).toBe('string')
    expect(typeof entry['address']).toBe('string')
    expect(typeof entry['plusCode']).toBe('string')
    expect(Object.keys(entry).length).toBe(5)
  })
})

test('entries are in alphabetical order by name', () => {
  const sorted = [...austinTechList].sort(
    (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  )

  austinTechList.forEach((entry, index) => {
    expect(entry.name === sorted[index].name).toBe(true)
  })
})

test('addresses are in Austin with ZIP codes or Remote', () => {
  const regex = /(Austin, TX \d{5}$)|(^Remote$)/
  austinTechList.forEach(entry => {
    expect(regex.test(entry.address)).toBe(true)
  })
})

test('plus codes are valid', () => {
  const regex = /^[23456789CFGHJMPQRVWX]{4}\+[23456789CFGHJMPQRVWX]{2} Austin, Texas$/
  austinTechList.forEach(entry => {
    expect(regex.test(entry.plusCode) || (entry.plusCode === '' && entry.address === 'Remote')).toBe(true)
  })
})

test('urls are url-like', () => {
  const regex = /^https?:\/\//
  austinTechList.forEach(entry => {
    expect(regex.test(entry.homepage)).toBe(true)
    // Link to careers page is the only entry allowed to be empty
    expect(entry.careers === '' || regex.test(entry.careers))
      .toBe(true)
  })
})
