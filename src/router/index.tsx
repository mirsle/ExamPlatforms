/*
 * @Author: 马新杰 
 * @Date: 2019-12-02 11:50:13 
 * @Last Modified by: 马新杰
 * @Last Modified time: 2019-12-03 09:49:27
 */
import React from 'react';
import Routes from './routes';
import RouteMap from './map';
 
function RouterView(props: any) {
	const routes = props.routes === undefined ? Routes : props.routes;
	return <RouteMap routes={routes} {...props} />;
}
export default RouterView;
