import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './iFrame.css';

 function IFrame(props){
      const popover = (
        <Popover class="popover" id="popover-basic">
          <Popover.Header as="h3">HighFi Chat</Popover.Header>
          <Popover.Body>
          <iframe width="100%" height="450" src={"https://test-client-highfi.herokuapp.com?accessToken=" + props.accessToken}></iframe>
          </Popover.Body>
        </Popover>
      );
      const Example = () => (
        console.log(props.accessToken),
        <OverlayTrigger   trigger="click" placement="top" overlay={popover} >
          <button  class ="button" type="button" variant="success">
              <FontAwesomeIcon icon={faComments} color="black" />
            </button>
        </OverlayTrigger>
      );

      return (
        <div style= {{ width: "120%", height:"70%"}}>
            <Example />
        </div>
       
      );

}

export default IFrame;