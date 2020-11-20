import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api'

import { MapContainer, Button, MapSettings } from './styles'

const MapsPropTypes = {
  styles: PropTypes.shape({
    container: PropTypes.object.isRequired,
  }).isRequired,
}

const center = {
  lat: 19,
  lng: -99,
}

class Maps extends Component {
  static propTypes = MapsPropTypes

  state = {
    response: null,
    travelMode: 'DRIVING',
    origin: '',
    destination: '',
  }

  directionsCallback = (response) => {
    console.log("directionsCallback ",response)

    if (response !== null) {
      if (response.status === 'OK') {
        this.setState(() => ({
          response,
        }))
      } else {
        console.log('response: ', response)
      }
    }
  }

  checkDriving = ({ target: { checked } }) => {
    checked &&
      this.setState(() => ({
        travelMode: 'DRIVING',
      }))
  }

  checkBicycling = ({ target: { checked } }) => {
    checked &&
      this.setState(() => ({
        travelMode: 'BICYCLING',
      }))
  }

  checkTransit = ({ target: { checked } }) => {
    checked &&
      this.setState(() => ({
        travelMode: 'TRANSIT',
      }))
  }

  checkWalking = ({ target: { checked } }) => {
    checked &&
      this.setState(() => ({
        travelMode: 'WALKING',
      }))
  }

  getOrigin = (ref) => {
    this.origin = ref
  }

  getDestination = (ref) => {
    this.destination = ref
  }

  onClick = () => {
    if (this.origin.value !== '' && this.destination.value !== '') {
      this.setState(() => ({
        origin: this.origin.value,
        destination: this.destination.value,
      }))
    }
  }

  onMapClick = (...args) => {
    console.log('onClick args: ', args)
  }

  render = () => (
    <MapContainer>
    <div className='map'>
      <MapSettings className='map-settings'>
        <hr className='mt-0 mb-3' />

        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className='form-group'>
              <label htmlFor='ORIGIN'>Origen</label>
              <br />
              <input
                id='ORIGIN'
                className='form-control'
                type='text'
                ref={this.getOrigin}
              />
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <div className='form-group'>
              <label htmlFor='DESTINATION'>Destino</label>
              <br />
              <input
                id='DESTINATION'
                className='form-control'
                type='text'
                ref={this.getDestination}
              />
            </div>
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          <div className='form-group custom-control custom-radio mr-4'>
            <input
              id='DRIVING'
              className='custom-control-input'
              name='travelMode'
              type='radio'
              checked={this.state.travelMode === 'DRIVING'}
              onChange={this.checkDriving}
            />
            <label className='custom-control-label' htmlFor='DRIVING'>
              Conducir
            </label>
          </div>

          <div className='form-group custom-control custom-radio mr-4'>
            <input
              id='BICYCLING'
              className='custom-control-input'
              name='travelMode'
              type='radio'
              checked={this.state.travelMode === 'BICYCLING'}
              onChange={this.checkBicycling}
            />
            <label className='custom-control-label' htmlFor='BICYCLING'>
              	Ir en bicicleta
            </label>
          </div>

          <div className='form-group custom-control custom-radio mr-4'>
            <input
              id='TRANSIT'
              className='custom-control-input'
              name='travelMode'
              type='radio'
              checked={this.state.travelMode === 'TRANSIT'}
              onChange={this.checkTransit}
            />
            <label className='custom-control-label' htmlFor='TRANSIT'>
              Transporte
            </label>
          </div>

          <div className='form-group custom-control custom-radio mr-4'>
            <input
              id='WALKING'
              className='custom-control-input'
              name='travelMode'
              type='radio'
              checked={this.state.travelMode === 'WALKING'}
              onChange={this.checkWalking}
            />
            <label className='custom-control-label' htmlFor='WALKING'>
              Caminando
            </label>
          </div>
        </div>

        <Button
          className='btn btn-primary'
          type='button'
          onClick={this.onClick}
        >
          Buscar ruta
        </Button>
      </MapSettings>

      <div className='map-container '>
        <GoogleMap
          id='direction-example'
          mapContainerStyle={this.props.styles.container}
          zoom={2}
          center={center}
          onClick={this.onMapClick}
        >
          {this.state.destination !== '' && this.state.origin !== '' && (
            <DirectionsService
              // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
              options={{
                destination: this.state.destination,
                origin: this.state.origin,
                travelMode: this.state.travelMode,
              }}
              callback={this.directionsCallback}
            />
          )}

          {this.state.response !== null && (
            <DirectionsRenderer
              // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
              options={{
                directions: this.state.response,
              }}
            />
          )}
        </GoogleMap>
      </div>
    </div>
    </MapContainer>
  )
}

export default React.memo(Maps)