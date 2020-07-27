import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Kontakt.css"
import kontakt_map from "../assets/Group_923.svg"

const kontakt = () => {
    return (
        <Container fluid >
            <Row>
                <Col sm={3}>
                    <h2>Kontakt:</h2>
                    <span>
                        <div>
                            Institut für Architektur <br />
                                Straße des 17. Juni 152 <br />
                                D-10623 Berlin <br /><br />
                                Raum A 001 <br />
                                Öffnungszeiten: <br />
                                Montag - Dienstag <br />
                                9:00 - 12:00 Uhr <br /><br />
                                T +49 (0)30 314-23615<br /><br />
                        </div>
                    </span>
                </Col>
                <Col sm={3}>
                    <h2>Standort:</h2>
                    <span>
                        <div> Hauptstandort des Instituts für <br />
                                Architektur ist das <br />
                                Architekturgebäude Ernst-Reuter- <br />
                                Platz in der Straße des 17. Juni <br />
                                152. <br /><br />
                                Einzelne Fachgebiete und <br />
                                Einrichtungen sind derzeit noch <br />
                                am Standort Ackerstraße 76 in <br />
                                Berlin-Wedding untergebracht. <br />
                                Näheres hierzu finden Sie in der <br />
                                Übersicht der Fachgebiete.<br /><br />
                                U-Bahn: U2 Ernst-Reuter-Platz<br /><br />
                                Bus: 245 Marchstraße / M45 Ernst-Reuter-Platz<br /><br />
                        </div>
                    </span>
                </Col>
                <Col>
                    <span>
                        <img src={kontakt_map} width="100%" height="100%" />
                    </span>
                </Col>
            </Row>
        </Container>
        // <Container>
        //     <div class="row">
        //         <div class="column">
        //             <h2>Kontakt:</h2>
        //             <ul>
        //                 <li>Institut für Architektur Straße des 17. Juni 152 D-10623 Berlin </li>
        //                 <li>Raum A 001 Öffnungszeiten: Montag - Dienstag 9:00 - 12:00 Uhr </li>
        //                 <li>T +49 (0)30 314-23615</li>                        
        //             </ul>
        //         </div>
        //         <div class="column">
        //             <h2>Standort:</h2>
        //             <ul>
        //                 <li>Hauptstandort des Instituts für Architektur ist das Architekturgebäude Ernst-Reuter- Platz in der Straße des 17. Juni 152. </li>
        //                 <li>Einzelne Fachgebiete und Einrichtungen sind derzeit noch am Standort Ackerstraße 76 in Berlin-Wedding untergebracht. Näheres hierzu finden Sie in der Übersicht der Fachgebiete. </li>
        //                 <li>U-Bahn: U2 Ernst-Reuter-Platz </li>
        //                 <li>Bus: 245 Marchstraße / M45 Ernst-Reuter-Platz</li>                        
        //             </ul>
        //         </div>
        //         <div class="column">
        //         <img src={kontakt_map} width="100%" height="100%"  />              
        //         </div>
        //     </div>            
        // </Container>
    );
};

export default kontakt;