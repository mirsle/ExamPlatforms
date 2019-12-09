/*
 * @Author: 马新杰 
 * @Date: 2019-12-02 11:50:23 
 * @Last Modified by: 马新杰
 * @Last Modified time: 2019-12-04 11:01:10
 */

import dva from "dva";
import RouterView from "./router";
import createHistory from "history/createBrowserHistory";
import { createModel } from "./store";
import "./index.css";
const app = dva({
  history: createHistory()
});
createModel(app);
app.router(RouterView);
app.start("#root");
