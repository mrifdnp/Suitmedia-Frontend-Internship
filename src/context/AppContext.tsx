import { BaseResponse } from "@/types/Response";
import { IdeaResponse } from "@/types/response/IdeaResponse";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const AppContext = createContext({});
export function AppWrapper({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<BaseResponse<IdeaResponse> | null>(
    null
  );
  const contextValue = useMemo(() => {
    return [appState, setAppState];
  }, [appState, setAppState]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext) as [
    BaseResponse<IdeaResponse> | null,
    Dispatch<SetStateAction<BaseResponse<IdeaResponse> | null>>
  ];
}
