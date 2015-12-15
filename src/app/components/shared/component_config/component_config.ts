import { Component, View } from 'angular2/core';
let template = require('./component_config.html');
let styles = require('./component_config.scss');

@Component({
	selector: 'component-config',
	inputs: ['data']
})
@View({
	template: template,
	styles: [styles],
})	    
export class ComponentConfig {
	
}