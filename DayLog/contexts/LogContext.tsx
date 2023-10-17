import { PropsWithChildren, createContext, useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type DayLogs = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type onCreateProps = {
  title: string;
  body: string;
  date: string;
};

type LogContextType = {
  logs: DayLogs[];
  onCreate: ({ title, body, date }: onCreateProps) => void;
};

const LogContext = createContext<LogContextType>({
  logs: [],
  onCreate: () => {},
});

export const LogContextProvider = ({ children }: PropsWithChildren) => {
  const [logs, setLogs] = useState<DayLogs[]>([]);

  const onCreate = ({ title, body, date }: onCreateProps) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
