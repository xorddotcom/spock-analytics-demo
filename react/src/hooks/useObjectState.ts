import { useState, useCallback } from 'react';

//handle object state with prevState support
export default function useObjectState<T extends object>(initialState: T) {
  const [objectState, setObjectState] = useState<T>(initialState);

  const prevStateSetter = useCallback(
    (field: keyof T, value: string) => {
      setObjectState(prevState => ({ ...prevState, [field]: value }));
    },
    [setObjectState]
  );

  const resetState = useCallback(
    (optionalInitialState: T = initialState) => {
      setObjectState(optionalInitialState);
    },
    [setObjectState]
  );

  return [objectState, prevStateSetter, resetState] as const;
}
