
import '../styles/Content.css'

export default function About() {
    return (
        <>
            <section>
                <span className="focus-text grey"> Hi, I'm </span>
                <span className="focus-text white"> Sandra </span>
            </section>

            <section>

            {/* <span className="focus-text yellow"> skills: </span> */}
                {/* <div> <strong>Machine Learning</strong> – Sci-kit Learn, TensorFlow, and deep learning.</div>
                <div> <strong>Frontend Development</strong> – Skilled in React.js, modern UI/UX design, and interactive web applications.</div>
                <div> <strong>Data Science</strong> – Proficient in statistical modeling, deep learning, and real-world AI solutions.</div> */}

                <p style={{color:"#cacac8",fontSize:"20px"}}>I love building intelligent systems that enhance user experience and solve complex problems. </p>
                <p>Let's innovate!</p>

            </section >
        </>
    )
}