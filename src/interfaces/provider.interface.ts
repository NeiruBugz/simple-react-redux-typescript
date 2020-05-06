import React from "react";

export interface ProviderInterface {
  store: any;
  children: React.ReactNode
}

export interface ConnectedComponentInterface {
  mapStateToProps: any;
  mapDispatchToProps: any;
  component: any;
}
