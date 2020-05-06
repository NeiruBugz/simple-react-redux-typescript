import React, { FC, useEffect, useState } from 'react';
import { ConnectedComponentInterface, ProviderInterface } from "../interfaces";

// @ts-ignore
const Context = React.createContext();

export const Provider: FC<ProviderInterface> = ({ store, children }) => {
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}

export const connect = (mapStateToProps: any, mapDispatchToProps: any) => {
  return (Component: React.Component | React.ReactNode | any) => {
    return () => (
      <ConnectedComponent
        mapStateToProps={mapStateToProps}
        mapDispatchToProps={mapDispatchToProps}
        component={Component}
      />
    )
  }
}

const ConnectedComponent = ({
                              mapStateToProps,
                              mapDispatchToProps,
                              component
                            }: ConnectedComponentInterface) => {
  const { getState, dispatch, subscribe } = React.useContext(Context);
  const state = getState();
  let stateProps = {};
  if (mapStateToProps) {
    stateProps = mapStateToProps(state);
  }
  const props = {
    ...stateProps,
    ...(mapDispatchToProps && mapDispatchToProps(dispatch)),
  }

  const [currentProps, setCurrentProps] = useState(props);

  useEffect(() => {
    const updateProps = () => {
      if (mapStateToProps) {
        const newStateProps = mapStateToProps(getState());

        if (JSON.stringify(newStateProps) !== JSON.stringify(stateProps)) {
          setCurrentProps({
            ...currentProps,
            ...newStateProps
          });
        }
      }
    };

    return subscribe(updateProps);
  })
  return component(props);
}
