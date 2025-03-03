
import Header from "./Header"
import Card from './Card/Card.jsx'
import './styles/content.css'

export default function Projects() {

    const cardIds = [1, 2, 3, 4, 5, 6];

    return (

        <>
            <div id='projects'>
                <Header />
            </div>
            <section>
                <h1 id="projects">Projects</h1>
                <div className="p-10 text-white">
                    <h3 className="header-style"> some of my Course Projects + hobby projects</h3>

                </div>
            </section>
            <section className='card-details-parent'>
                {cardIds.map(id => (
                    <Card key={id} id={id} />
                ))}
            </section>
        </>
    )
}