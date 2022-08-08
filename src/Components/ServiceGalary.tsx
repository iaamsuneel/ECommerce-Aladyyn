const ServiceGalary = () => {
    return (<>
        <div className="tab-content">
            <div id="uncontrolled-tab-example-tabpane-description" aria-labelledby="uncontrolled-tab-example-tab-description"
                className="tab-pane">

            </div>
            <div id="uncontrolled-tab-example-tabpane-gallery" aria-labelledby="uncontrolled-tab-example-tab-gallery"
                className="tab-pane active">
                <div className="tab-wrapper">
                    <div className="portfolio-sliders entertainment-tab">
                        <div className="slick-slider slick-initialized" dir="ltr">
                            <button type="button" data-role="none" className="slick-arrow slick-prev slick-disabled"
                            > Previous</button>
                            <div className="slick-list">
                                <div className="slick-track"
                                >
                                    <div data-index="0" className="slick-slide slick-active slick-current"
                                        aria-hidden="false" >
                                        <div>
                                            <div className="slide"  >
                                                <div className="img-wrap contains-video">
                                                    <a href="/service-detail/626a75dd8befe7cc3580950b/620a38d001342d68491aed08">
                                                        <img src="https://css7941-api.thesst.com/uploads/service/1651144117673young-woman-3713108_640.jpg"
                                                            alt="service" />
                                                        <div className="video-wrapper"></div>
                                                    </a>
                                                </div>
                                                <div className="service-info">
                                                    <p>This is new service</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" data-role="none" className="slick-arrow slick-next" >
                                Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default ServiceGalary