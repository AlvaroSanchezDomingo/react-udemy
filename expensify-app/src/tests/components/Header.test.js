import React from 'react'
import {shallow} from 'enzyme'
//import toJSON from 'enzyme-to-json'//Is in the config file
import Header from '../../components/Header'


test('should render Header correctly', () =>{
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // console.log(renderer.getRenderOutput())
    // expect(wrapper.find('h1').length.toBe(1))//we will conpare with snapshot
    // expect(toJSON(wrapper)).toMatchSnapshot()//is in the config file
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
   
})