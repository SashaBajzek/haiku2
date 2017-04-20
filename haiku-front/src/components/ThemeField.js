/*
Redux-Forms instruction:  Notice the reused stateless function component used to render each field. It is important that this not be defined inline (in the render() function), because it will be created anew on every render and trigger a rerender for the field, because the component prop will have changed.
*/

import React from 'react';


export const ThemeField = ({input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div>
			<select {...input} placeholder={label} type={type} >
				<option value="">Please Choose...</option>
				<option value="beachTheme">Beach</option>
				<option value="careerTheme">Career</option>
				<option value="catTheme">Cat</option>
				<option value="cheersTheme">Cheers</option>
				<option value="childhoodTheme">Childhood</option>
				<option value="coffeeTheme">Coffee</option>
				<option value="dogTheme">Dog</option>
				<option value="fantasyTheme">Fantasy</option>
				<option value="fitnessTheme">Fitness</option>
				<option value="foodTheme">Food</option>
				<option value="happyTheme">Happy</option>
				<option value="musicTheme">Music</option>
				<option value="natureTheme">Nature</option>
				<option value="painTheme">Pain</option>
				<option value="romanceTheme">Romance</option>
				<option value="somberTheme">Somber</option>
				<option value="stormTheme">Storm</option>
				<option value="technologyTheme">Technology</option>
				<option value="travelTheme">Travel</option>
				<option value="whimsyTheme">Whimsy</option>
			</select>
			{touched && (error && <span className="error__submit">{error}</span> )}
		</div>
	</div>
)