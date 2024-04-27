import PropTypes from 'prop-types';

export function MoviesList(props) {
  return (
    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>{props.titulo}</td>
        <td>{props.calificacion}</td>
        <td>{props.premios}</td>
        <td>{props.duracion}</td>
      </tr>
    </tbody>
  )
}

MoviesList.propTypes = {
  id : PropTypes.number.isRequired,
  titulo : PropTypes.string.isRequired,
  calificacion : PropTypes.number.isRequired,
  premios : PropTypes.number.isRequired,
  duracion : PropTypes.number
}