import { Dispatch, SetStateAction } from "react";

export type ModelSelectorContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  defaultModel: string;
  setDefaultModel: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export type modelsType = {
  chef: string;
  id: string;
  names: string[];
};

export interface ModelSelectorProps {
  children: React.ReactNode;
}
