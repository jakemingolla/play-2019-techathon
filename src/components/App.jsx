import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import './App.css';
import VideoIdDropdown from './VideoIdDropdown';
import AnalyticsFetcher from './AnalyticsFetcher';
import BrightcovePlayer from './BrightcovePlayer';
import VideoUploader from './VideoUploader';

const store = configureStore();

// This can be used to debug application state
// store.subscribe(() => console.log('store state', store.getState()));

export default function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <VideoIdDropdown />
        <BrightcovePlayer />
        <AnalyticsFetcher />
        <VideoUploader />
      </div>
    </Provider>
  );
}