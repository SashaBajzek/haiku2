/*
Redux-Forms instruction:  Notice the reused stateless function component used to render each field. It is important that this not be defined inline (in the render() function), because it will be created anew on every render and trigger a rerender for the field, because the component prop will have changed.
*/

import React from 'react';


export const RenderField = ({input, label, type, meta: { touched, error } }) => (
	<div>
		<div>
			<input {...input} placeholder={label} type={type} />
			{touched && (error && <span className="error__submit">{error}</span> )}
		</div>
	</div>
)