let fns = require('../utils/functions');

test('empty string fails username validation', () => {
    //arange/act
    let result = fns. validateUsername('');
    expect(result).toBeFalsy();
})