import React from 'react'; 
import renderer from "react-test-renderer";
import Login from './screens/Login';

test("Login component renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toBeTruthy();
});