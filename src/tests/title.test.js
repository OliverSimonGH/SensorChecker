import React from 'react';
import ReactDOM from "react-dom";
import Title from '../components/Title';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Title Component', () => {
    it('check if component rendered', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Title />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('checks if title is rendered', () => {
        const wrapper = shallow(<Title title="Sensor Application"/>);
        const title = wrapper.find('h2').text();
        expect(title).toEqual('Sensor Application');
    })

    it('matches the snapshot', () => {
        const tree = renderer.create(<Title title="Sensor Application"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

