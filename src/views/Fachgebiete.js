import React from "react";
import { Container } from "react-bootstrap";
import "./Fachgebiete.css";

const fachgebiete = () => {
    return (
        <Container>
            <div class="row">
                <div class="column">
                    <h2>Fachgebiete Grundlagen</h2>
                    <ul>
                        <li>Architekturtheorie</li>
                        <li>Bau- und Stadtbaugeschichte</li>
                        <li>Bildende Kunst</li>
                        <li>CoLab Architekturdarstellung und Gestaltung</li>
                        <li>DAN Digitale Architektur und Nachhaltigkeit</li>
                        <li>Historische Bauforschung und Baudenkmalpflege</li>
                        <li>Planungs- und Bauökonomie</li>
                        <li>TEK Tragwerkslehre und Konstruktion</li>
                    </ul>
                </div>
                <div class="column">
                    <h2>Fachgebiete Hochbau</h2>
                    <ul>
                        <li>A13 Entwerfen und Baukonstruktion</li>
                        <li>adreizehn: Baukonstruktion und Entwerfen</li>
                        <li>CODE Entwerfen und Baukonstruktion</li>
                        <li>DE/CO Entwerfen und Baukonstruktion</li>
                        <li>FG Hehl Entwerfen und Baukonstruktion</li>
                        <li>FGvanR Entwerfen und Gebäudekunde</li>
                        <li>GTE Gebäudetechnik und Entwerfen</li>
                        <li>HealthCare Architecture for Health</li>
                        <li>LIA Entwerfen und Gebäudekunde</li>
                        <li>NBL Konstruktives Entwerfen und klimagerechte Architektur</li>
                    </ul>
                </div>
                <div class="column">
                    <h2>Fachgebiete Städtebau</h2>
                    <ul>
                        <li>CHORA Städtebau und nachhaltige Stadtentwicklung</li>
                        <li>CUD Städtebau und Urbanisierung</li>
                        <li>Habitat Unit Städtebau und internationale Urbanistik</li>
                    </ul>
                </div>
            </div>            
        </Container>
    );
};

export default fachgebiete;