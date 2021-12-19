import { React, useState } from 'react';
import IndustryTab from './industry-events-tab/industry-events.component'
import SocialsTab from './socials-tab/socials.component'
import WorkshopsTab from './workshops-tab/workshops.component'
import './past-events.styles.css'
import NavTab from './nav-tab/navTab.component'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';


const PastEvents = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const onRouteChange = (routeName) => {
      setActiveTab(routeName)
  }
  return (
    <div className='events-rectangle white'>
      <Nav tabs className="nav nav-tabs">
        <NavItem className="nav-item">
          <NavLink
            onClick={() => onRouteChange('tab1')}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className=""
            onClick={() => onRouteChange('tab2')}
          >
            Tab 2      
          </NavLink>
        </NavItem>
      </Nav>
      
      <TabContent activeTab="1">
        <TabPane tabId="1">
              <h4>
                Tab 1 Contents
              </h4>
          
        </TabPane>
        <TabPane tabId="2">
      
        </TabPane>
      </TabContent>
    </div>
  )
}
export default PastEvents;