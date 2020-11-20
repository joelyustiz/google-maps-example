import React, { useState, useContext } from 'react';
import { Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import banner from '../../assets/images/banner.png';
import { Context } from "../../context/context"
import {CustomButton} from '../../components/CustomButton/CustomButton';
import {CustomLabel} from '../../components/CustomLabel/CustomLabel';
import {CustomSection} from '../../components/CustomSection/CustomSection';

function Home(props) {
  const history = useHistory();
  const [input, setInput] = useState("")
  const {
    user,
    handleUser
  } = useContext(Context);
  const handleInput = (event) => {
    event.preventDefault();
    setInput(event.target.value)
  }

  const handleButton = (event) => {
    event.preventDefault();    
    handleUser(input)
    history.push("/navigation");
  }

  const getTitle = () => {
    return  user === "" ?  "Bienvenido a tu ayudante de navegación" : ` Bienvenido nuevamente ${user}, a tu ayudante de navegación`
  }


  return (
    <CustomSection>
      <div>
        <div>
          <figure>
            <Image fluid src={banner} />
          </figure>
          <h1 className="title">
            {getTitle()}
          </h1>
        </div>
      </div>
      <div>
        <form onSubmit={handleButton}>
          <CustomLabel>
            Personalizalo con tu nombre             
            <input className="form-control" type="text" value={input} onChange={handleInput} placeholder="Ejemplo: Joel :)" />
          </CustomLabel>
          <CustomButton disabled={input.trim() === ""} type="submit" value="ingresar" />
        </form>
      </div>
    </CustomSection>
  );
}

export default Home;
