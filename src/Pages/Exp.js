import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';



function Exp() {
  return (
    <div className='Exp'>
      <VerticalTimeline lineColor='#3e497a'>
        
        <VerticalTimelineElement
         className='vertical-timeline-element--education'

         date='2010-2012'
         iconStyle={{background:'#3e497a', color:'#fff'}}
         icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'>Sri mookambika temple high school mavinakatte</h3>
          <p>SSLC-80.6%</p>
  </VerticalTimelineElement> 

        <VerticalTimelineElement
        className='vertical-timeline-element--education'
         date='2012-2014'
         iconStyle={{background:'#3e497a', color:'#fff'}}
         icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'>Govt PUC college kundapura</h3>
          <p>PUC-78.5%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className='vertical-timeline-element--education'
         date='2014-2018'
         iconStyle={{background:'#3e497a', color:'#fff'}}
         icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'>Sahyadri college of engineering and mangement adyar mangalore</h3>
          <p>BE-Mechanical Engineering-76%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
         className='vertical-timeline-element--work'
         date='2019-2020'
         iconStyle={{background:'#e9d35b', color:'#fff'}}
         icon={<WorkIcon />}
         >
          <h3 className='vertical-timeline-element-title'>Operation executive-Blowhorn</h3>
          
          <h4 className="vertical-timeline-element-subtitle" >
            Bangalore, KA
          </h4>
          <p>*Handling day by day forward and reverse logistics operations.
*Invoicing procedures - MIS approval from the customer and sending invoices on the agreed date.</p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
         className='vertical-timeline-element--work'
         date='2021-2022'
         iconStyle={{background:'#e9d35b', color:'#fff'}}
         icon={<WorkIcon />}
         >
          <h3 className='vertical-timeline-element-title'>Operation executive-Omtrax packaging solutons ltd</h3>
          <h4 className="vertical-timeline-element-subtitle">
           Bangalore, KA
          </h4>
          <p>*Responsible for the entire operations and data Handling. 
           *Co-ordinate and communicate with different departments for smooth operations. 
            *Customer feedback, data analysis,problem solving, Costing, forward logistics and reverse logistics.  </p>
        </VerticalTimelineElement>


       

      </VerticalTimeline>
    </div>
  )
}

export default Exp