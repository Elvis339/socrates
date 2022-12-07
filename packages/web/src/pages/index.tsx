import React from 'react';
import { ConnectKitButton } from 'connectkit';
import { Account } from '../components/Account';

function Page() {
  return (
    <>
      <ConnectKitButton />
      <Account />
    </>
  );
}

export default Page;
