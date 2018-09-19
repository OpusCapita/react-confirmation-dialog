/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

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
    expect(wrapper.find('Button')).to.have.length(2);
    expect(wrapper.find('#dialog-confirm-button')).to.not.be.undefined;
    expect(wrapper.find('#dialog-cancel-button')).to.not.be.undefined;

    wrapper.find('#dialog-confirm-button').simulate('click');
    expect(props.confirmCallback).to.have.property('callCount', 1);
    wrapper.find('#dialog-cancel-button').simulate('click');
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
    expect(wrapper.find('Button')).to.have.length(3);
    expect(wrapper.find('#dialog-confirm-button')).to.not.be.undefined;
    expect(wrapper.find('#dialog-cancel-button')).to.not.be.undefined;
    expect(wrapper.find('#dialog-third-button')).to.not.be.undefined;

    wrapper.find('#dialog-confirm-button').simulate('click');
    expect(props.confirmCallback).to.have.property('callCount', 1);
    wrapper.find('#dialog-cancel-button').simulate('click');
    expect(props.cancelCallback).to.have.property('callCount', 1);
    wrapper.find('#dialog-third-button').simulate('click');
    expect(props.thirdButtonCallback).to.have.property('callCount', 1);
  });

  it('should render function with three buttons, only the last two should be orange', () => {
    const props = {
      titleText: 'Confirmation',
      bodyText: 'Are you certain?',
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
      thirdButtonCallback: sinon.spy(),
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      thirdButtonText: 'Maybe',
      paintConfirmButtonOrange: false,
      paintThirdButtonOrange: true,
      paintCancelButtonOrange: true,
    };

    const wrapper = mount(
      <ConfirmDialog {...props} />,
    );

    expect(wrapper.prop('paintConfirmButtonOrange')).to.equal(false);
    expect(wrapper.prop('paintThirdButtonOrange')).to.equal(true);
    expect(wrapper.prop('paintCancelButtonOrange')).to.equal(true);

    wrapper.unmount();
  });
});
