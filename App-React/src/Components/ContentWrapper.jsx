import { TopBar } from './TopBar'
import { ContentRowTop } from './ContentRowTop'
import { Footer } from './Footer'
import { Movies } from './Movies'
import { LastMovieInDB } from './LastMovieInDB'
import { GenresInDB } from './GenresInDB'
import { Routes, Route } from 'react-router-dom'
import { Error404 } from './Error404'



export function ContentWrapper() {
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <TopBar />
                    {/* <!-- End of Topbar --> */}
                    <Routes>
                        <Route exact path='/' element={<ContentRowTop />} />
                        <Route path='/lastMovie' element={<LastMovieInDB />} />
                        <Route path='/allMovies' element={<Movies />} />
                        <Route path='/genres' element={<GenresInDB />} />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </div>
                {/* <!-- End of MainContent --> */}


                {/* <!-- Footer --> */}
                <Footer />
                {/* <!-- End of Footer --> */}

            </div>
        </>
    )
}