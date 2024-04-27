import PropTypes from 'prop-types';


export function SmallCardRow(props) {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className={`card border-left-${props.colorBorde} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
              </div>
              <div className="col-auto">
                <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SmallCardRow.propTypes = {
  titulo : PropTypes.string.isRequired,

  colorBorde : PropTypes.string.isRequired,

  cifra : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  icono : PropTypes.oneOf(['fa-film','fa-award','fa-user']).isRequired,
}

SmallCardRow.defaultProps = {
  titulo : 'hola',
  colorBorde : 'primary',
  cifra : 21,
  icono : 'fa-film'
}