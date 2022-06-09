import React ,{  useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faAnchor, faComments } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import Popover from 'react-bootstrap/Popover';
//import {OverlayTrigger, Button} from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './iFrame.css';
import Button from 'react-bootstrap/Button';

 function IFrame(){
    const iframeRef = useRef(null);
    const [recievedMessage, setRecievedMessage] = useState("")
   /* useEffect(() => {
        window.addEventListener("message", function (e) {
          if (e.origin !== "https://test-client-highfi.herokuapp.com/") return;
          console.log(e.data);
          setRecievedMessage("Got this message from child: " + e.data);
               
        });
      }, []);*/
      const popover = (
        <Popover style={{ width:"200", height:"65%"}} id="popover-basic">
          <Popover.Header as="h3">CHAT</Popover.Header>
          <Popover.Body>
          <iframe ref={iframeRef}  width="100%" height="400" src="https://test-client-highfi.herokuapp.com/"></iframe>
          </Popover.Body>
        </Popover>
      );
      const Example = () => (
        <OverlayTrigger   trigger="click" placement="top" overlay={popover} >
          <button  class ="button" type="button" variant="success">
              <FontAwesomeIcon icon={faComments} color="black" />
            </button>
        </OverlayTrigger>
      );

      return (
        <div>
            <Example/>
        </div>
       
      );

}

export default IFrame;