/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-unused-expressions: "off" */

import React from 'react';
import { expect } from 'chai';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sum from '../src/utils/math';

configure({ adapter: new Adapter() });

describe('Utils', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('Function Sum must exist', () => {
      expect(sum).to.exist;
    });
  });

  describe('Tests to Utils functions', () => {
    it('Sum function: 1 + 2 must be equal to 3', () => {
      expect(sum(1, 2)).to.eql(3);
    });
  });

  describe('Tests to jsx functions', () => {
    it('Jsx <span> must contain text "test"', () => {
      const wrapper = render(<span>This is a test!</span>);
      expect(wrapper.text()).to.contain('test');
    });
  });
});
