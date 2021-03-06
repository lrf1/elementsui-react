import * as React from "react";
import Lookup from "elementsui-react/Pickers/Lookup";

class Query {
	take = () => this;
	skip = () => this;
	fetchRawCollection = () => Promise.resolve({ value: options });
}

const options = [
	{
		Id: 1,
		Title: "John"
	},
	{
		Id: 2,
		Title: "Marry"
	}
];

const queryProvider = () => new Query();

/** Lookup with multiple values */
export default class LookupMultiple extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: [
				{
					value: options[0].Id,
					label: options[0].Title
				}
			]
		};
	}

	renderOptionPopup = popupOptions => {
		return (
			<div style={{ width: 400, height: 200, padding: 20 }}>
				<h4>Label: {popupOptions.value.label}</h4>
				<span>Value: {popupOptions.value.value}</span>
			</div>
		);
	};

	render() {
		return (
			<Lookup
				value={this.state.values}
				queryProvider={queryProvider}
				renderOption={x => x.Title}
				onChange={values => this.setState({ values })}
				isMulti={true}
				popup={this.renderOptionPopup}
			/>
		);
	}
}
