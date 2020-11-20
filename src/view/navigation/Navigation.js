import React, { useContext } from "react";
import { LoadScript } from '@react-google-maps/api';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Maps from "../../components/maps/Maps"
import {key} from "../../../env"
import { Context } from "../../context/context"
import {CustomSection} from '../../components/CustomSection/CustomSection';

function Navigation(props) {
    const history = useHistory();
    const {
        user
    } = useContext(Context);
    const containerStyle = {
        container: {
            width: '100%',
            height: '400px',
            padding: "30px 10px"            
        }
    };
    return (
      <CustomSection>
        <h1>
          Hola! {user} Te damos la bienvenida al panel de Navegación
        </h1> 
        <br />
        <LoadScript
          googleMapsApiKey={key.mapsKey}
        >
          <Maps styles={containerStyle} />
        </LoadScript>
      </CustomSection>
    )
}

export default Navigation