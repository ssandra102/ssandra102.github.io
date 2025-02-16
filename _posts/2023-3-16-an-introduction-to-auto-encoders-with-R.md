---
layout: post 
title: An introduction to auto encoders with R
---

<h3>Encoder + Decoder</h3>
<p>
    A neural network that has been trained to develop effective representations of the input data is an autoencoder (i.e., the features). These representations, known as codings, have a straightforward notion but have a wide range of applications in dimension reduction, including anomaly detection and generative modelling.
</p>
<p>
    Simply put, autoencoders are employed to lessen data noise. Autoencoders enable you to reduce dimensionality and concentrate exclusively on areas of true value by compressing input data, encoding it, and then reconstructing it as an output. It is a feature extraction algorithm that helps us find a representation for our data and we can feed that representation to other algorithms.
</p>
<p>
    The ‘bottleneck’ is the neural network’s most crucial and smallest component. Only the most important information can pass through the bottleneck, which limits the flow of data from the encoder to the decoder. We may say that the bottleneck captures all of the information that an image possesses.
</p>
<div className="article-image-container">
    <figure className="image-container">
        <img src={autoencoder} alt="Autoencoder" className="image" />
        <figcaption className="caption">An example of an Autoencoder with a three-node bottleneck (created in Canva)</figcaption>
    </figure>
</div>
<p>
    A neural network that has an input and output of the same number of nodes, and a bottleneck (hidden layer) of 3 nodes. The input and output nodes in the neural network can be the same or varied in number. In general, they are made to be equal such that the features of the input and output data are the same. The input is “encoded” using the bottleneck in such a way that it may be recovered.
</p>
<p>
    Let’s say we have input data of 100 features (dimensions), we wish to pass it through a bottleneck of 20 dimensions. The AutoEncoder will encode the input by condensing the input to 20 dimensions. Since we have the number of outputs to be the same as that of the input, the AE will try to reconstruct the input i.e have 100 dimensions.
</p>
<h4>AutoEncoder using R</h4>
<p>
    The following is the code snippet taken from an article (For more information and a detailed explanation of the code refer to the article by Analytics Vidhya). It takes an input of 100 dimensions, encodes it into 20 dimensions, and reconstructs the input.

    `
    self.encoder = Sequential(
                    [
                        Dense(100, activation="relu"),
                        Dense(20, activation="relu")
                    ]
                )

    self.decoder = Sequential(
                    [
                        Dense(100, activation="relu"),
                        Dense(output_units, activation="sigmoid")
                    ]
                )
    `
</p>