import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../components/App';
import Title from "../components/Title";
import renderer from 'react-test-renderer';

describe("App Component", () => {
    it('should count the correct amount of child components', function () {
        const wrapper = shallow(<App/>);
        const title = wrapper.find('Title');
        const search = wrapper.find('SensorSearch');
        const data = wrapper.find('SensorData');

        expect(title.length).toEqual(1);
        expect(search.length).toEqual(1);
        expect(data.length).toEqual(1);
    });

    it('matches the snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})