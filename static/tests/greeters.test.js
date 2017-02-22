// @flow

import {describe, it} from 'mocha';
import  {expect} from 'chai';

import {sayHello} from '../src/greeters';

describe('Greeters', function() {
  describe('#sayHello()', function() {
    it('says hello to Mathieu', function() {
      expect(sayHello('Mathieu')).to.equal('Hello Mathieu!')
    });
  });
});
