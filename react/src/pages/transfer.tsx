import Button from 'components/button';
import Layout from 'components/layout';
import Field from 'components/field';
import useTokenTransfer from 'hooks/useTokenTransfer';

const Transfer = () => {
  const {
    state: { transferState, error, loading, isDisabled },
    actions: { handleChange, handleTransfer },
  } = useTokenTransfer();

  return (
    <Layout>
      <h1>Transfer</h1>
      <Field
        title='Token Address'
        placeholder='Enter token address'
        value={transferState.tokenAddress}
        stateKey='tokenAddress'
        onChange={handleChange}
        error={error.tokenAddress}
      />
      <Field
        title='Receiver Address'
        placeholder='Enter receiver address'
        value={transferState.receiverAddress}
        stateKey='receiverAddress'
        onChange={handleChange}
        error={error.receiverAddress}
      />
      <Field
        title='Amount'
        placeholder='Enter amount'
        value={transferState.amount}
        stateKey='amount'
        onChange={handleChange}
        error={error.amount}
      />
      <Button disabled={isDisabled} loading={loading} onClick={handleTransfer}>
        Transfer
      </Button>
    </Layout>
  );
};

export default Transfer;
