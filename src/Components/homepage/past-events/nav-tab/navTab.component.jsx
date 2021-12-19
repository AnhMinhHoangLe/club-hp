import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



const NavTab = ({onRouteChange, activeTab}) => {
        return (
            
                <div>
                         <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="tab1" title="Industry Events" onClick={() => onRouteChange('tab1')}>
                                </Tab>
                                <Tab eventKey="tab2" title="Socials" onClick={() => onRouteChange('tab2')}>
                                        </Tab>
                                <Tab eventKey="tab3" title="Workshops" onClick={() => onRouteChange('tab3')}>
                                </Tab>
                                </Tabs>
       </div>


    )
}
export default NavTab;