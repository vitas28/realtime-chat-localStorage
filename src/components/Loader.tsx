import React, { FC } from 'react';
import { HashLoader } from 'react-spinners';

const Loader: FC = () => (
  <div className="loader-center">
    <HashLoader size={70} color={'blue'} />
  </div>
);

export default Loader;
