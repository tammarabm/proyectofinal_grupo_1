import '../styles/Footer.css'

function Footer(){
    return(
        <>
            {/* Footer */}
			<footer className="sticky-footer bg-dark text-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span className='footer'>Copyright &copy; Grupo 1 {'- '}
						<a href="https://github.com/tammarabm/proyectofinal_grupo_1.git" className="linkk">proyectofinal_grupo_1</a>
						</span>
					</div>
				</div>
			</footer>
			{/* End of Footer */}
        </>
    )
}

export default Footer