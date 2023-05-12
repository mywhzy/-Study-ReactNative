import { PropsWithChildren, createContext, useState } from 'react';

interface LogContextType {
  text: string;
  setText: (text: string) => void;
}

const LogContext = createContext<LogContextType>({
  text: '',
  setText: () => {},
});

export const LogContextProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState('');

  return (
    <LogContext.Provider value={{ text, setText }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
