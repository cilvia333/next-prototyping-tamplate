import React from 'react';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro'

import AppStyles from '~/styles/global';

import 'ress';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyles />
      <Global styles={AppStyles}/>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
