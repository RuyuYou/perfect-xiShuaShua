const reducer = require('../../public/js/reducers/reducer');
const expect = require('chai').expect;

describe('reducer', function () {
  it('get', function () {
    const state = {value: ''};
    const action = {type: "SECTION", value: {name: 'liyan', password: '123456'}};
    expect(reducer(state, action)).to.be.deep.equal({value: {name: 'liyan', password: '123456'}});
  });
});
