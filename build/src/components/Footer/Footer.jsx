import './Footer.css'
const Footer = () => {
    return (
        <div id='footer'>
            <img src='./public/img/qr.png' className='overlay-image'   alt='qr'/>
            <img src='./public/img/FAKESTORE.png' className='logo'  alt='logo'/>
            <div className='redes-sociales'>
            <img src='./public/img/wsapp.png' className='wsapp'   alt='redes'/>
            <img src='./public/img/facebook.png' className='facebook' alt='redes' />
            <img src='./public/img/instagram.png' className='instagram' alt='redes' />
            </div>
        </div>
    )
}

export default Footer