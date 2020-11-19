import React, { useState, useContext } from 'react';
import { Image } from 'react-bootstrap';
import banner from '../../assets/images/banner.jpg';
import { Context } from "../../context/context"
import { useHistory } from "react-router-dom";

function Home(props) {
  let history = useHistory();
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

  return (
    <section>
      <div className="layout-content">
        <div className="skewed">
          <figure>
            <Image fluid src={banner} />
          </figure>
          {
            user === "" ? (
              <h1 className="title">
                Bienvenido a tu ayudante de navegación
              </h1>
            ) 
          : (
            <h1 className="title">
              Bienvenido nuevamente
              {' '}
              {user}
              , a tu ayudante de navegación
            </h1>
            )}
        
        </div>
      </div>
      <div>
        <form onSubmit={handleButton}>
          <label>
            Personalizalo con tu nombre 
            <input type="text" value={input} onChange={handleInput} placeholder="Ejemplo: Joel :)" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Home;
