import { Settings, storedSettings } from 'constants/analytics';
import Button from 'components/button';
import Field from 'components/field';
import Modal from 'components/modal';
import Selectables from 'components/selectables';
import useObjectState from 'hooks/useObjectState';

interface DatapointsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DatapointsModal: React.FC<DatapointsModalProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useObjectState<Settings>(storedSettings);

  const handleChange = (_field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const field = _field as 'datapoints' | 'configuration';

    console.log({ value, field, settings });

    (field === 'datapoints' ? value !== 'web3' : true) &&
      setSettings(
        field as keyof Settings,
        settings[field].includes(value)
          ? settings[field].filter(dp => dp !== value)
          : [...settings[field], value]
      );
  };

  const handleSave = () => {
    localStorage.setItem('demo_settings', JSON.stringify(settings));
    onClose();
    window.location.reload();
  };

  return (
    <Modal isOpen={isOpen} label='Settings' onClose={onClose}>
      <div style={{ padding: '10px 0' }}>
        <Field
          title='AppKey'
          placeholder='Enter appkey'
          value={settings.appkey}
          stateKey='appkey'
          onChange={(field, value) => setSettings(field as keyof Settings, value)}
        />
        <Selectables
          title='Data Points'
          stateKey='datapoints'
          choices={['demographics', 'engage', 'web2', 'web3']}
          selectedChoices={settings.datapoints}
          handleChange={handleChange}
        />
        <Selectables
          title='Configuration'
          stateKey='configuration'
          choices={['debug', 'testENV', 'testMode']}
          selectedChoices={settings.configuration}
          handleChange={handleChange}
        />
        <Button onClick={handleSave} normal>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default DatapointsModal;
