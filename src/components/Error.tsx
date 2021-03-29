import '../style/cssStyle/Error.css';

function ErrorPage() {
    return (
        <>
            <h1>404 Error Page</h1>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <a href="." className="more-link">Reload page!</a>
            </div>
        </>
    );
}

export default ErrorPage;