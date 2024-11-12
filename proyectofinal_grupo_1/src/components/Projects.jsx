import { Card, Button } from 'react-bootstrap';

function Projects({ proyectos }) {

    return (
        <section className="team">
            {proyectos.map((r, idx) => (
                <Card className="member" key={idx}>
                    <Card.Body>
                        <Card.Title>{r.name}</Card.Title>
                        <Card.Text>{r.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant='outline-dark' onClick={() => window.open(r.url, '_blank')}>Ir a {r.name}</Button>
                    </Card.Footer>
                </Card>
            ))}
        </section>
    );
}

export default Projects;