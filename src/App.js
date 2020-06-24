import React from 'react';
import Layout from './component/Layout/Layout';
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
