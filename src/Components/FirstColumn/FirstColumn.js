import React from 'react';

import './FirstColumn.css';

const FirstColumn = () => (
    <div className="FirstColumn">
        <div className="FooterColumnWrapper">
            <div className="FooterColumn2x">
                <div className="container darkseagreen">
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="100" className="ColumnTitle aos-init aos-animate" >
                        <p>Studies</p>
                        <div className="FooterMobileWrapper" >
                            <div className="ColumnInfos MarginBottom" >
                                <p className="ColumnTxtStrong" >2017 - 2020</p>
                                <p className="ColumnTxtLight" >Web Bachelor’s degree / Hétic</p>
                            </div>
                            <div className="ColumnInfos MarginBottom">
                                <p className="ColumnTxtStrong" >2014 - 2017</p>
                                <p className="ColumnTxtLight" >Bac Graphic Production / Gobelins</p>
                            </div>
                            <div className="ColumnInfos">
                                <p className="ColumnTxtStrong" >1998 - 2014</p>
                                <p className="ColumnTxtLight" >Pro Rock–Paper–Scissors Player</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="300" className="ColumnTitle Experiences aos-init aos-animate" >
                        <p>Experiences</p>
                        <div className="FooterMobileWrapper" >
                            <div className="ColumnInfos MarginBottom" >
                                <p className="ColumnTxtStrong" >2019 - 2020</p>
                                <p className="ColumnTxtLight" >UI Designer / LaFusée</p>
                            </div>
                            <div className="ColumnInfos MarginBottom" >
                                <p className="ColumnTxtStrong" >2018 - 2019</p>
                                <p className="ColumnTxtLight">UI Designer / BlackPizza</p>
                            </div>
                            <div className="ColumnInfos">
                                <p className="ColumnTxtStrong">2014 - 2017</p>
                                <p className="ColumnTxtLight">Graphic Designer / GodSaveTheQueen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default FirstColumn;