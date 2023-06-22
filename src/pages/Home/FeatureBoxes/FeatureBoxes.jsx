
const FeatureBoxes = () => {
    return (
        <div className="feature-boxes-container">
            <div className="row">
                <div
                    className="col-md-4 "
                    data-animation-name="fadeInRightShorter"
                    data-animation-delay={200}
                >
                    <div className="feature-box  feature-box-simple text-center">
                        <i className="fa-solid fa-headset"></i>
                        <div className="feature-box-content p-0">
                            <h3 className="mb-0 pb-1">Customer Support</h3>
                            <h5 className="mb-1 pb-1">Need Assistance?</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis nec vestibulum magna, et dapib.
                            </p>
                        </div>

                    </div>

                </div>

                <div
                    className="col-md-4 "
                    data-animation-name="fadeInRightShorter"
                    data-animation-delay={400}
                >
                    <div className="feature-box feature-box-simple text-center">
                        <i className="fa-solid fa-credit-card"></i>
                        <div className="feature-box-content p-0">
                            <h3 className="mb-0 pb-1">Secured Payment</h3>
                            <h5 className="mb-1 pb-1">Safe &amp; Fast</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis nec vestibulum magna, et dapib.
                            </p>
                        </div>

                    </div>

                </div>

                <div
                    className="col-md-4 "
                    data-animation-name="fadeInRightShorter"
                    data-animation-delay={600}
                >
                    <div className="feature-box feature-box-simple text-center">
                        <i className="fa-solid fa-rotate-left"></i>
                        <div className="feature-box-content p-0">
                            <h3 className="mb-0 pb-1">Returns</h3>
                            <h5 className="mb-1 pb-1">Easy &amp; Free</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis nec vestibulum magna, et dapib.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default FeatureBoxes;