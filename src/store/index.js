/*
 * @Author: 马新杰 
 * @Date: 2019-12-02 11:50:43 
 * @Last Modified by: 马新杰
 * @Last Modified time: 2019-12-03 09:52:41
 */
const context = require.context("./model", false, /\.(js||tsx||ts)$/);
const getModel = context.keys().map((key) => context(key));
export function createModel(app) {
  return getModel.map((key) => app.model(key.default));
}
