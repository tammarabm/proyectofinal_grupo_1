import Card from 'react-bootstrap/Card';
function ErrorPage(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card className="text-center" style={{ width: '24rem' }} bg="dark" text="white" key="Dark" >
                <Card.Body>
                    <Card.Title as ='h5'>
                        ERROR
                    </Card.Title>
                    <Card.Text as='h6'>
                        Ocurrió un error. Por favor asegurarse de ingresar correctamente 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div> 
    );
}
export default ErrorPage;