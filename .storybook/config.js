import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

withOptions({
  name: "OpusCapita react-wizard Storybook",
  addonPanelInRight: true,
  hiearchySeparator: /\//,
  hiearchyRootSeparator: /\|/,
});

// AddDecorator
addDecorator(withKnobs);

function loadStories() {
  require('../stories/index.story.jsx');
}

configure(loadStories, module);
