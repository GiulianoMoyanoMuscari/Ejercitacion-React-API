import imagen from '../assets/images/404.jpg'

export  function Error404() {
  return (
    <>
      <div className='w-100'>
        <img className='w-100' src={imagen} alt="Error 404" />
      </div>
    </>
  )
}
