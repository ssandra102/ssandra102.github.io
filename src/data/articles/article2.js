import React from "react";
import "../styles/article.css";
import autoencoder from "../images/AutoEncoder.webp"

export function Article2() {
    return (

        <div className="article-content" id="content">
            <div className="paragraph">
                <p>
                    <h3>Encoder + Decoder</h3>
                    <p>
                        A neural network that has been trained to develop effective representations of the input data is an autoencoder (i.e., the features). These representations, known as codings, have a straightforward notion but have a wide range of applications in dimension reduction, including anomaly detection and generative modelling.
                    </p>
                    <p>
                        Simply put, autoencoders are employed to lessen data noise. Autoencoders enable you to reduce dimensionality and concentrate exclusively on areas of true value by compressing input data, encoding it, and then reconstructing it as an output. It is a feature extraction algorithm that helps us find a representation for our data and we can feed that representation to other algorithms.
                    </p>
                    <p>
                        The ‘bottleneck’ is the neural network’s most crucial and smallest component. Only the most important information can pass through the bottleneck, which limits the flow of data from the encoder to the decoder.
                        We may say that the bottleneck captures all of the information that an image possesses.
                    </p>

                    <div className="article-image-container">
                        <div className="article-image-wrapper">
                            <figure class="image-container">
                                <img src={autoencoder} alt="Autoencoder" class="image" />
                                <figcaption class="caption">An example of an Autoencoder with a three-node bottleneck (created in Canva)</figcaption>
                                {/* <blockquote class="blockquote">Abcvef few </blockquote> */}
                            </figure>

                        </div>
                    </div>
                    <p>
                        An neural network that has an input and output of same number of nodes, and a bottleneck (hidden layer) of 3 nodes.
                        image showing an AE, with a “bottleneck” of three nodes(made in canva)
                        The input and output nodes in the neural network can be the same or varied in number. In general, they are made to be equal such that the features of the input and output data are the same. The input is “encoded” using the bottleneck in such a way that it may be recovered.
                    </p>
                    <p>
                        Let’s say we have an input data of 100 features(dimension), we wish to pass it through a bottleneck of 20 dimensions. The AutoEncoder will encode the input by condensing the input to 20 dimensions. Since we have the number of output to be same as that of input, the AE will try to reconstruct the input i.e have 100 dimensions.
                    </p>
                    <h4>
                        AutoEncoder using R
                    </h4>
                    <p>
                        The following is the code snippet taken from article(For more information and detailed explanation of the code refer the article by Analytics Vidhya). It takes an input of 100 dimensions, encodes it into 20 dimension, and reconstructs the input.
                    </p>
                    <pre>
                        <code>
                        self.encoder = Sequential(<br></br>
                            [<br></br>
                            Dense(100, activation="relu"),<br></br>
                            Dense(20, activation="relu")<br></br>
                            ]<br></br>
                            )<br></br>
                            <br></br>
                            self.decoder = Sequential(<br></br>
                            [<br></br>
                            Dense(100, activation="relu"),<br></br>
                            Dense(output_units, activation="sigmoid")<br></br>
                            ]<br></br>
                            )<br></br>
                        </code>
                    </pre>
                </p>
            </div>

        </div>

    );
}