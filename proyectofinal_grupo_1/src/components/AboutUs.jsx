import '../styles/AboutUs.css'
import Card from 'react-bootstrap/Card';

function AboutUs({ team }) {

    return (
        <section className='AboutUs'>
            <section className="seccion1">
                <h1>Conoce a Nuestro Equipo</h1>
                <h2>Colaboradores</h2>
            </section>
            <section className="team">
                {team.map((t, idx) => (
                    <>
                        <Card className="member" key={idx}>
                            <Card.Body>
                                <Card.Img variant="top" src={t.image} alt={t.name} />
                                <Card.Title>{t.name}</Card.Title>
                                <br />
                                <Card.Text>{t.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">GitHub</small>
                            </Card.Footer>
                        </Card>
                    </>
                ))}
            </section>
        </section>
    );
}
export default AboutUs;