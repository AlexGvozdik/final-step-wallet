import React from 'react';
import Media from 'react-media';
import HomeTabMobile from './HomeTabMobile';
import HomeTabDesktop from './HomeTabDesktop';

export default function HomeTab() {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {({ mobile }) => <>{mobile ? <HomeTabMobile /> : <HomeTabDesktop />}</>}
    </Media>
  );
}
