
import React from 'react';
import '../hojas-de-estilo/testimonio.css'


export default class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../imagenes/${this.props.item.imagen}.jpeg`)}
          alt={`Foto de ${this.props.item.nombre}`} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{this.props.item.nombre}</strong> en {this.props.item.pais}
          </p>
          <p className='cargo-testimonio'>
            {this.props.item.cargo} en <strong>{this.props.item.empresa}</strong>
          </p>
          <p className='texto-testimonio' dangerouslySetInnerHTML={{__html: this.props.item.testimonio}} ></p>
  
        </div>
      </div>
    );

  }
}


