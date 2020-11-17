import React, {useState} from 'react';

type Value = any;

const useInput = (initialValue:Value) => {
	const [value, setValue] = useState(initialValue);
	
	const onChange = event: React.ChangeEvent<HTMLInputElement>   => {
		setValue(event.target.value);
	}
	return {value, setValue, onChange};
}

export default useInput;