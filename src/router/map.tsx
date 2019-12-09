/*
 * @Author: 马新杰 
 * @Date: 2019-12-02 11:50:17 
 * @Last Modified by: 马新杰
 * @Last Modified time: 2019-12-02 15:17:51
 */
import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "dva/router";

interface IRoute {
  path: string;
  name: string;
  //TODO
  component: any;
  children?: Array<any>;
}
class RouterMap extends Component<any> {
  render() {
    const { routes, history } = this.props;
    const defaultRoute = (
      <Redirect from="/" to="/home" key={"default"} exact></Redirect>
    );
    return (
      <Router history={history}>
        <Switch>
          {routes
            .map((item: any, index: number) => {
              const children = item.children === undefined ? [] : item.children;
              const Comp = item.component;
              return (
                <Route
                  key={item.name}
                  path={item.path}
                  component={() => {
                    return <Comp routes={children} history={history}></Comp>;
                  }}
                />
              );
            })
            .concat([defaultRoute])}
        </Switch>
      </Router>
    );
  }
}

export default RouterMap;
