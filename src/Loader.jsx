import { Vortex } from 'react-loader-spinner';
import React from 'react';
import css from './components/App.module.css';

const Loader = () => {
  return (
    <div className={css.spinner}>
      <div className="square">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    </div>
  );
};

export default Loader;
