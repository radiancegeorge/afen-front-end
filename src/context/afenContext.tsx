import React, { useReducer } from "react";
const initialState = {
  whitepaper: "overview",
};

const PageContext: any = React.createContext(initialState);
const pageReducer = (state: any, action: any) => {
  switch (action.type) {
    case "headerActive":
      return { ...state, ...{ headerActive: action.payload } };
    case "whitepaper":
      return { ...state, ...{ whitepaper: action.payload } };
    default:
      return state;
  }
};

const PageContextProvider: any = (props: any) => {
  const [contextState, updateContext] = useReducer(pageReducer, initialState);
  return (
    <PageContext.Provider value={{ contextState, updateContext }}>
      {props.children}
    </PageContext.Provider>
  );
};
export { PageContext, PageContextProvider };
