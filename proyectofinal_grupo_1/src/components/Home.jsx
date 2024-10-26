import '../styles/home.css'
function Home(){
    
    return (
        <>
            <div className='video-container'>
                <video autoPlay muted loop className='background-video'>
                    <source src="/videos/video-fondo2.mp4" type="video/mp4"></source>
                </video>
                <div className="overlay"></div>
                <div className="content">
                    <h1 className="title">Bienvenido</h1>
                    <p className="description">Bienvenido/a a la página oficial del Grupo 1. Explora nuestro sitio para conocer más sobre nuestros trabajos y únete a nosotros en este emocionante viaje.</p>
                </div>
            </div>
        </>
    );
}
export default Home;