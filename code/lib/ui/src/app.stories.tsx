import React from 'react';

import { Provider as ManagerProvider } from '@storybook/api';
import { LocationProvider } from '@storybook/router';
import { HelmetProvider } from 'react-helmet-async';
import App from './app';
import { PrettyFakeProvider, FakeProvider } from './FakeProvider';

export default {
  title: 'UI/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (StoryFn) => (
      <HelmetProvider key="helmet.Provider">
        <LocationProvider>
          <StoryFn />
        </LocationProvider>
      </HelmetProvider>
    ),
  ],
};

export const Default = () => (
  <ManagerProvider
    key="manager"
    provider={new FakeProvider()}
    path="/story/ui-app--loading-state"
    storyId="ui-app--loading-state"
    location={{ search: '' }}
    navigate={() => {}}
    docsOptions={{ docsMode: false }}
  >
    <App
      key="app"
      viewMode="story"
      layout={{
        initialActive: 'addons',
        isFullscreen: false,
        showToolbar: true,
        panelPosition: 'right',
        showNav: true,
        showPanel: true,
        showTabs: true,
      }}
      panelCount={0}
    />
  </ManagerProvider>
);

export const LoadingState = () => (
  <ManagerProvider
    key="manager"
    provider={new PrettyFakeProvider()}
    path=""
    storyId="ui-app--loading-state"
    location={{ search: '' }}
    navigate={() => {}}
    docsOptions={{ docsMode: false }}
  >
    <App
      key="app"
      viewMode="story"
      layout={{
        initialActive: 'addons',
        isFullscreen: false,
        showToolbar: true,
        panelPosition: 'right',
        showNav: true,
        showPanel: true,
        showTabs: true,
      }}
      panelCount={0}
    />
  </ManagerProvider>
);
