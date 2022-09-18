import Button from 'components/button';
import Layout from 'components/layout';
import Field from 'components/field';
import useTokenApprove from 'hooks/useTokenApprove';

const Approve = () => {
  const {
    state: { approveState, error, loading, isDisabled },
    actions: { handleChange, handleApprove },
  } = useTokenApprove();

  return (
    <Layout>
      <h1>Approve</h1>
      <Field
        title='Token Address'
        placeholder='Enter token address'
        value={approveState.tokenAddress}
        stateKey='tokenAddress'
        onChange={handleChange}
        error={error.tokenAddress}
      />
      <Field
        title='Contract Address'
        placeholder='Enter contract address'
        value={approveState.contractAddress}
        stateKey='contractAddress'
        onChange={handleChange}
        error={error.contractAddress}
      />
      <Button disabled={isDisabled} loading={loading} onClick={handleApprove}>
        Approve
      </Button>
    </Layout>
  );
};

export default Approve;
