/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Button } from 'react-bootstrap';

import { ConfirmDialog } from '../../src/confirm-dialog';

describe('ConfirmDialog component', () => {
  it('should render and function with two buttons', () => {
    const props = {
      titleText: 'Confirmation',
      bodyText: 'Are you certain?',
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
      okButtonText: 'Yes',
      cancelButtonText: 'No',
    };

    const wrapper = shallow(
      <ConfirmDialog {...props} />,
    );

    expect(wrapper.find('#oc-confirm-dialog-body').children().text()).to.eql(props.bodyText);
    expect(wrapper.find('#oc-confirm-dialog').length).to.eql(1);
    expect(wrapper.find(Button)).to.have.length(2);
    expect(wrapper.find('#confirm-button')).to.not.be.undefined;
    expect(wrapper.find('#cancel-button')).to.not.be.undefined;

    wrapper.find('#confirm-button').simulate('click');
    expect(props.confirmCallback).to.have.property('callCount', 1);
    wrapper.find('#cancel-button').simulate('click');
    expect(props.cancelCallback).to.have.property('callCount', 1);
  });

  it('should render function with three buttons', () => {
    const props = {
      titleText: 'Confirmation',
      bodyText: 'Are you certain?',
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
      thirdButtonCallback: sinon.spy(),
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      thirdButtonText: 'Maybe',
    };

    const wrapper = shallow(
      <ConfirmDialog {...props} />,
    );

    expect(wrapper.find('#oc-confirm-dialog-body').children().text()).to.eql(props.bodyText);
    expect(wrapper.find('#oc-confirm-dialog').length).to.eql(1);
    expect(wrapper.find(Button)).to.have.length(3);
    expect(wrapper.find('#confirm-button')).to.not.be.undefined;
    expect(wrapper.find('#cancel-button')).to.not.be.undefined;
    expect(wrapper.find('#third-button')).to.not.be.undefined;

    wrapper.find('#confirm-button').simulate('click');
    expect(props.confirmCallback).to.have.property('callCount', 1);
    wrapper.find('#cancel-button').simulate('click');
    expect(props.cancelCallback).to.have.property('callCount', 1);
    wrapper.find('#third-button').simulate('click');
    expect(props.thirdButtonCallback).to.have.property('callCount', 1);
  });
});
