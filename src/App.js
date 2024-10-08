import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
    const [result, setResult] = useState("");
    const [resultImage, setResultImage] = useState("");

    const calculateResult = () => {
        const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
        const form = document.forms["quizForm"];

        // Recorre las preguntas y acumula las respuestas
        for (let i = 1; i <= 5; i++) {
            const selected = form["q" + i].value;
            if (selected) {
                answers[selected]++;
            }
        }

        // Encuentra la respuesta mayoritaria
        let maxAnswer = 'a';
        for (const key in answers) {
            if (answers[key] > answers[maxAnswer]) {
                maxAnswer = key;
            }
        }

        // Define los resultados según la respuesta mayoritaria
        let resultText = "";
        let resultImageUrl = "";
        switch (maxAnswer) {
            case 'a':
                resultText = "Empresario del año";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
                break;
            case 'b':
                resultText = "Sport";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
                break;
            case 'c':
                resultText = "Novio perfecto";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/novioperfecto.png";
                break;
            case 'd':
                resultText = "Nice man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
                break;
            case 'e':
                resultText = "Familiar";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/familiar.png";
                break;
            case 'f':
                resultText = "Party man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/fiestero.png";
                break;
        }

        // Actualiza el estado con el resultado y la imagen
        setResult(resultText);
        setResultImage(resultImageUrl);

        // Muestra el resultado en el pop-up
        document.getElementById("resultModal").style.display = "flex";
    };

    const closeModal = () => {
        document.getElementById("resultModal").style.display = "none";
    };

    return (
        <div className="quiz-container">
            <h1>¿Qué estilo buscas?</h1>
            <form id="quizForm">
                {/* Pregunta 1 */}
                <div className="question">
                    <p>1. ¿Cuál es tu actividad preferida durante el tiempo libre?</p>
                    <label><input type="radio" name="q1" value="a" /> Eventos profesionales.</label>
                    <label><input type="radio" name="q1" value="b" /> Practicar deportes o actividades al aire libre.</label>
                    <label><input type="radio" name="q1" value="c" /> Preparativos eventos especiales.</label>
                    <label><input type="radio" name="q1" value="d" /> Salir con amigos.</label>
                    <label><input type="radio" name="q1" value="e" /> Pasar tiempo con la familia.</label>
                    <label><input type="radio" name="q1" value="f" /> Asistir a fiestas.</label>
                </div>

                {/* Pregunta 2 */}
                <div className="question">
                    <p>2. ¿Cómo describirías tu enfoque hacia la moda?</p>
                    <label><input type="radio" name="q2" value="a" /> Elegante y profesional.</label>
                    <label><input type="radio" name="q2" value="b" /> Casual y cómodo.</label>
                    <label><input type="radio" name="q2" value="c" /> Refinado y sofisticado.</label>
                    <label><input type="radio" name="q2" value="d" /> Atractivo y versátil.</label>
                    <label><input type="radio" name="q2" value="e" /> Relajado y cómodo.</label>
                    <label><input type="radio" name="q2" value="f" /> Trendy.</label>
                </div>

                {/* Pregunta 3 */}
                <div className="question">
                    <p>3. ¿Qué tipo de eventos prefieres asistir?</p>
                    <label><input type="radio" name="q3" value="a" /> Eventos de empresa.</label>
                    <label><input type="radio" name="q3" value="b" /> Competencias deportivas.</label>
                    <label><input type="radio" name="q3" value="c" /> Bodas, cumpleaños y celebraciones personales.</label>
                    <label><input type="radio" name="q3" value="d" /> Reuniones sociales y cenas con amigos.</label>
                    <label><input type="radio" name="q3" value="e" /> Actividades familiares y cenas en casa.</label>
                    <label><input type="radio" name="q3" value="f" /> Conciertos, clubes y eventos nocturnos.</label>
                </div>

                {/* Pregunta 4 */}
                <div className="question">
                    <p>4. ¿Qué es lo más importante al elegir tu atuendo?</p>
                    <label><input type="radio" name="q4" value="a" /> Proyectar elegancia y profesionalismo.</label>
                    <label><input type="radio" name="q4" value="b" /> Comodidad y rendimiento.</label>
                    <label><input type="radio" name="q4" value="c" /> Estilo e impacto en ocasiones especiales.</label>
                    <label><input type="radio" name="q4" value="d" /> Adaptabilidad a diferentes situaciones sociales.</label>
                    <label><input type="radio" name="q4" value="e" /> Comodidad para el día a día.</label>
                    <label><input type="radio" name="q4" value="f" /> Destacar en eventos nocturnos.</label>
                </div>

                {/* Pregunta 5 */}
                <div className="question">
                    <p>5. ¿Con qué estilo te sientes más seguro?</p>
                    <label><input type="radio" name="q5" value="a" /> Un look profesional que proyecte confianza.</label>
                    <label><input type="radio" name="q5" value="b" /> Ropa que permita libertad de movimiento y funcionalidad.</label>
                    <label><input type="radio" name="q5" value="c" /> Un estilo refinado para destacar en eventos especiales.</label>
                    <label><input type="radio" name="q5" value="d" /> Una vestimenta que brille en reuniones sociales.</label>
                    <label><input type="radio" name="q5" value="e" /> Un estilo relajado y cómodo para pasar tiempo con la familia.</label>
                    <label><input type="radio" name="q5" value="f" /> Un look a la moda para brillar en eventos nocturnos.</label>
                </div>

                <button type="button" onClick={calculateResult}>Enviar</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText">Tu estilo es: {result}</p>
                    {resultImage && (
                        <div style={{ textAlign: 'center' }}>
                            <img src={resultImage} alt={result} style={{ width: '200px', height: 'auto', margin: '10px' }} />
                        </div>
                    )}
                    <button className="close-button" onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default App;
