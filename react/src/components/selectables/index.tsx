interface SelectablesProps {
  title: string;
  stateKey: string;
  choices: string[];
  selectedChoices: string[];
  handleChange: (title: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Selectables: React.FC<SelectablesProps> = ({
  title,
  stateKey,
  choices,
  selectedChoices,
  handleChange,
}) => {
  const _choices = choices.map(choice => (
    <div style={{ margin: '5px 0' }}>
      <input
        type='checkbox'
        checked={selectedChoices.includes(choice)}
        name={choice}
        value={choice}
        onChange={e => handleChange(stateKey, e)}
      />
      <label>{choice}</label>
    </div>
  ));

  return (
    <div style={{ marginBottom: '20px' }}>
      <span style={{ display: 'block', fontSize: '18px', marginBottom: '5px' }}>{title}</span>
      {_choices}
    </div>
  );
};

export default Selectables;
