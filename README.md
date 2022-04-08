# 
This library lets you embed Power BI report, dashboard, dashboard tile, report visual, or Q&A in your React application.

## Quick Start

### Import

```jsx
import { PowerBIEmbed } from 'powerbi-client-react';
```

### Embed a Power BI report
```jsx
<PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual and qna
		id: '<Report Id>',
		embedUrl: '<Embed Url>',
		accessToken: '<Access Token>',
		tokenType: models.TokenType.Embed,
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = { 
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}]
		])
	}
		
	cssClassName = { "report-style-class" }

	getEmbeddedComponent = { (embeddedReport) => {
		this.report = embeddedReport as Report;
	}}
/>
```

### How to [bootstrap a PowerBI report](https://aka.ms/PbieBootstrap):
```jsx
<PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual and qna
		id: undefined, 
		embedUrl: undefined,
		accessToken: undefined,    // Keep as empty string, null or undefined
		tokenType: models.TokenType.Embed
	}}
/>
```
__Note__: To embed the report after bootstrap, update the props (with atleast accessToken).

### Demo

A React application that embeds a sample report using the _PowerBIEmbed_ component.<br/>
It demonstrates the complete flow from bootstrapping the report, to embedding and updating the embedded report.<br/>
It also demonstrates the usage of _powerbi report authoring_ library by deleting a visual from report on click of "Delete a Visual" button.

To run the demo on localhost, run the following commands:

```
npm run install:demo
npm run demo
```

Redirect to http://localhost:8080/ to view in the browser.


