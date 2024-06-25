import { useNavigate } from 'react-router-dom'
import './pagenotfound.scss'



const PageNotFound = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/')
    }
    return (
        <div className='pageNotFound'>
            <div className='container'>
                <h1>404 Not Found</h1>
                <button onClick={handleRedirect}>Back to Home</button>
            </div>
        </div>
    )
}

export default PageNotFound