import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBilder />
      </Layout>
    </div>
  );
}

export default App;
