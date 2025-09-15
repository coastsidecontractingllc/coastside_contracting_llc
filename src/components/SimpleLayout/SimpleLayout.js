import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import * as styles from './SimpleLayout.module.css';

// CSS not modular here to provide global styles
import '../Layout/Globals.css';

const SimpleLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Coastside Contracting LLC. All rights reserved.</p>
          <p>Licensed and Insured | Call (502) 823-9199</p>
        </div>
      </footer>
    </>
  );
};

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SimpleLayout;