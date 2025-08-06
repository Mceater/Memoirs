import React from 'react'; 
import renderer from "react-test-rendere";
import Login from './screens';




test("trivally true", () => {
    const json =renderer.create(<Login/>).toJSON();
    console.log(json.props.style)

});