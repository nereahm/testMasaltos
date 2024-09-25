import React from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
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
        let result;
        switch (maxAnswer) {
            case 'a':
                result = "Empresario del año";
                break;
            case 'b':
                result = "Sport";
                break;
            case 'c':
                result = "Novio perfecto";
                break;
            case 'd':
                result = "Nice man";
                break;
            case 'e':
                result = "Familiar";
                break;
            case 'f':
                result = "Party man";
                break;
        }

        // Muestra el resultado en el pop-up
        document.getElementById("resultText").textContent = "Tu estilo es: " + result;
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
                    <label><input type="radio" name="q3" value="a" /> Eventos corporativos.</label>
                    <label><input type="radio" name="q3" value="b" /> Competiciones deportivas.</label>
                    <label><input type="radio" name="q3" value="c" /> Bodas, aniversarios y celebraciones personales.</label>
                    <label><input type="radio" name="q3" value="d" /> Reuniones sociales, cenas y salidas con amigos.</label>
                    <label><input type="radio" name="q3" value="e" /> Actividades familiares, reuniones y cenas en casa.</label>
                    <label><input type="radio" name="q3" value="f" /> Conciertos, clubes y eventos nocturnos.</label>
                </div>

                {/* Pregunta 4 */}
                <div className="question">
                    <p>4. ¿Qué es lo más importante para ti al elegir un atuendo?</p>
                    <label><input type="radio" name="q4" value="a" /> La impresión profesional y la elegancia.</label>
                    <label><input type="radio" name="q4" value="b" /> La comodidad y el rendimiento en actividades.</label>
                    <label><input type="radio" name="q4" value="c" /> El estilo y el impacto en ocasiones especiales.</label>
                    <label><input type="radio" name="q4" value="d" /> La capacidad de adaptarse a diferentes situaciones sociales.</label>
                    <label><input type="radio" name="q4" value="e" /> La comodidad y el enfoque casual para la vida cotidiana.</label>
                    <label><input type="radio" name="q4" value="f" /> La capacidad de destacar.</label>
                </div>

                {/* Pregunta 5 */}
                <div className="question">
                    <p>5. ¿Cómo te sientes más seguro de ti mismo?</p>
                    <label><input type="radio" name="q5" value="a" /> Con un look pulido y profesional que proyecta confianza.</label>
                    <label><input type="radio" name="q5" value="b" /> Con ropa que permite libertad de movimiento y funcionalidad.</label>
                    <label><input type="radio" name="q5" value="c" /> Con un estilo refinado que resalta en eventos especiales.</label>
                    <label><input type="radio" name="q5" value="d" /> Con un atuendo que te hace destacar en reuniones sociales.</label>
                    <label><input type="radio" name="q5" value="e" /> Con un estilo relajado y cómodo para el tiempo en familia.</label>
                    <label><input type="radio" name="q5" value="f" /> Con un look a la moda que te hace brillar en eventos nocturnos.</label>
                </div>

                <button type="button" onClick={calculateResult}>Enviar</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText"></p>
                    <button className="close-button" onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default App;
