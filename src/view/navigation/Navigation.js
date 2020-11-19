import React, { useContext } from "react";
import { LoadScript } from '@react-google-maps/api';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Maps from "../../components/maps/Maps"
import {key} from "../../../env"
import { Context } from "../../context/context"

function Navigation(props) {
    const history = useHistory();
    const {
        user
    } = useContext(Context);
    const containerStyle = {
        container: {
            width: '400px',
            height: '400px'
        }
    };
    return (
      <div>
        <h1>
          Hola!
          {' '}
          {user}
          {' '}
          bienvenido al panel de Navegación
        </h1> 
        <Button
          onClick={()=>{
                history.push("/");
        }}
          variant="success"
        >
          Regresar
        </Button>
        <br />
        <LoadScript
          googleMapsApiKey={key.mapsKey}
        >
          <Maps styles={containerStyle} />
        </LoadScript>
      </div>
    )
}

export default Navigation