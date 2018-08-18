// write your code below!
describe('happyHolidays()', function () {
  it('returns "Happy holidays!"', function () {
    expect(happyHolidays('HAPPY HOLIDAYS')).toEqual('Happy holidays!')
  })
})
describe('happyHolidaysTo(name)', function () {
  it('returns "Happy holidays, ${name}!"', function () {
    expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
  })
})
  