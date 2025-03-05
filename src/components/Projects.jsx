
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
                    <h4 className="header-style"> (click on code to view Github repo)</h4>

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