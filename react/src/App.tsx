import 'styles/index.css';
import { Route, Routes } from 'react-router-dom';
import Web3Analytics from 'analytics-web3';

import { useWeb3AnalyticsReporter } from 'components/analytics';
import Approve from 'pages/approve';
import Transfer from 'pages/transfer';

const App = () => {
  useWeb3AnalyticsReporter();

  Web3Analytics.widgetOnClick(({ campaignId }) => {
    console.log('Active Camapign ID', campaignId);
  });

  return (
    <Routes>
      <Route path='approve' element={<Approve />} />
      <Route path='transfer' element={<Transfer />} />
      <Route path='*' element={<Approve />} />
    </Routes>
  );
};

export default App;
