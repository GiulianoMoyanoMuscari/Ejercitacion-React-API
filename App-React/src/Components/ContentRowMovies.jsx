import { SmallCardRow } from "./SmallCardRow";


export function ContentRowMovies() {

  let data = [
    {
      titulo : 'Movies in Data Base',
      colorBorde : 'primary',
      cifra : 21,
      icono : 'fa-film'
    },
    {
      titulo : "Total Awards",
      colorBorde : 'success',
      cifra : 75,
      icono : 'fa-award'
    },
    {
      titulo : 'Actors quantity',
      colorBorde : 'warning',
      cifra : 60,
      icono : 'fa-user'
    }
  ]

  return (
    <>
      <div className="row">
      {data.map((element, i) => {
          return(
            <SmallCardRow
              key = {element.titulo + i}
              titulo = {element.titulo}
              cifra = {element.cifra}
              icono = {element.icono}
              colorBorde = {element.colorBorde}
              />
          )
        })}
      </div>
    </>
  )
}






