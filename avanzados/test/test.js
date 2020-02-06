const assert = require('chai').assert;
const app = require('../main.js');


describe('App', function () {

    it('testing...',function () {
        assert.equal(app(2),3)
    })
    
})