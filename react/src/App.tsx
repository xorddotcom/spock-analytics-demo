import 'styles/index.css';

import { Route, Routes } from 'react-router-dom';
import { useWeb3AnalyticsReporter } from 'components/analytics';

import Approve from 'pages/approve';
import Transfer from 'pages/transfer';

const App = () => {
  useWeb3AnalyticsReporter();

  return (
    <Routes>
      <Route path='approve' element={<Approve />} />
      <Route path='transfer' element={<Transfer />} />
      <Route path='*' element={<Approve />} />
    </Routes>
  );
};

export default App;
