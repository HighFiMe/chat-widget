import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './iFrame.scss';


 function IFrame(props){
      const popover = ( 
        
        <Popover className="popover" id="popover-basic">
          <Popover.Body className='popover-body'>
            <div className='iframe'>
               <iframe width="300" height="550px" src={"https://test-client-highfi.herokuapp.com?accessToken=" + props.accessToken}></iframe>
            </div>
          </Popover.Body>
        </Popover>
      );
      const Example = () => (
        console.log(props.accessToken),
        <OverlayTrigger   trigger="click" placement="top" overlay={popover} >
          <button  className ="button" type="button" variant="success">
              <FontAwesomeIcon icon={faComments} color="white" />
            </button>
        </OverlayTrigger>
      );

      return (
        <div>
            <Example />
        </div>
       
      );

}

export default IFrame;