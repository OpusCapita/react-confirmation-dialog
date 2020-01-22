/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import ConfirmDialog from '../../src/index';

describe('ConfirmDialog component', () => {
  const translations = {
    title: 'Confirmation',
    body: 'Are you certain?',
    ok: 'Yes',
    cancel: 'No',
    thirdButton: 'Maybe',
  };

  it('should render and function with two buttons', () => {
    const props = {
      id: 'dialog1',
      translations,
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
    };

    const wrapper = shallow(<ConfirmDialog {...props} />);

    expect(wrapper.find('#dialog1-body').children().text()).to.eql(translations.body);
    expect(wrapper.find('#dialog1').length).to.eql(1);
    expect(wrapper.find('Button')).to.have.length(2);
    expect(wrapper.find('#dialog1-confirm-button')).to.not.be.undefined;
    expect(wrapper.find('#dialog1-cancel-button')).to.not.be.undefined;

    wrapper.find('#dialog1-confirm-button').simulate('click');
    expect(props.confirmCallback).to.have.property('callCount', 1);
    wrapper.find('#dialog1-cancel-button').simulate('click');
    expect(props.cancelCallback).to.have.property('callCount', 1);
  });

  it('should render function with three buttons', () => {
    const props = {
      id: 'dialog2',
      translations,
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
      thirdButtonCallback: sinon.spy(),
    };

    const wrapper = shallow(<ConfirmDialog {...props} />);

    expect(wrapper.find('#dialog2-body').children().text()).to.eql(translations.body);
    expect(wrapper.find('#dialog2').length).to.eql(1);
    expect(wrapper.find('Button')).to.have.length(3);
    expect(wrapper.find('#dialog2-confirm-button')).to.not.be.undefined;
    expect(wrapper.find('#dialog2-cancel-button')).to.not.be.undefined;
    expect(wrapper.find('#dialog2-third-button')).to.not.be.undefined;

    wrapper.find('#dialog2-confirm-button').simulate('click');
    expect(props.confirmCallback).to.have.property('callCount', 1);
    wrapper.find('#dialog2-cancel-button').simulate('click');
    expect(props.cancelCallback).to.have.property('callCount', 1);
    wrapper.find('#dialog2-third-button').simulate('click');
    expect(props.thirdButtonCallback).to.have.property('callCount', 1);
  });

  it('should render function with three buttons, only the last two should be orange', () => {
    const props = {
      translations,
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
      thirdButtonCallback: sinon.spy(),
      paintConfirmButtonOrange: false,
      paintThirdButtonOrange: true,
      paintCancelButtonOrange: true,
    };

    const wrapper = mount(<ConfirmDialog {...props} />);

    expect(wrapper.prop('paintConfirmButtonOrange')).to.equal(false);
    expect(wrapper.prop('paintThirdButtonOrange')).to.equal(true);
    expect(wrapper.prop('paintCancelButtonOrange')).to.equal(true);

    wrapper.unmount();
  });
});
