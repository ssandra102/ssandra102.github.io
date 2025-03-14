
import Header from "./Header.jsx"
import Card from '../Card/Card.jsx'
import '../styles/content.css'

export default function Projects(props) {

    const cardIds = props;

    return (

        <>
            <div id='projects'>
                <Header />
            </div>
            <section>
                <h1 id="projects-header">Projects</h1>
                <div className="p-10 text-white">
                    <h4 className="header-style"> (click on code to view Github repo)</h4>

                </div>
            </section>
            <section className='card-details-parent'>
                {cardIds.map(id => (
                    <Card key={id} id={id} page={"projects"}/>
                ))}
            </section>
        </>
    )
}