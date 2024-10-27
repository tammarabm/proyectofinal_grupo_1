import '../styles/AboutUs.css'

function AboutUs({ team }) {

    return (
        <section className='AboutUs'>
            <section className="seccion1">
                <h1>Conoce a Nuestro Equipo</h1>
                <h2>Colaboradores</h2>
            </section>
            <section className="team">
                {team.map((t, id) => (
                    <div className="member" key={id}>
                        <img src={t.image} alt={t.name} />
                        <h2>{t.name}</h2>
                        <p>{t.description}</p>
                    </div>
                ))}
            </section>
        </section>
    );
}
export default AboutUs;