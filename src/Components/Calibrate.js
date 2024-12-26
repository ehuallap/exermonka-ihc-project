import React, { Component } from 'react';
import styles from '../assets/StartScreen.module.css';
import { Link } from 'react-router-dom';
import hand from "../assets/Hand.png";
import doubleHand from "../assets/doubleHand.png"

class CalibrateScreen extends Component {

    componentDidMount() {
        var canPlayVideo = false;

        var video = document.querySelector("#videoElement");

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        if (video) {
            video.addEventListener('loadeddata', function () {
                canPlayVideo = true;
            }, false);
            video.width = 640;
            video.height = 480;
        }
    }
    render() {
        return (
            <div className={styles.calibratePage}>
                <div className={styles.css_typing_calib}>
                    <p>
                        Control your character with your body! (or with your keyboard, duh)
                    </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridGap: 0, textAlign: "center", alignItems: "flex-end" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0 }}>
                            <div><img src={hand} width="140px" style={{ transform: "scaleX(-1)" }} alt="Couldn't load."></img></div>
                            <div style={{color: "white", marginLeft: "-100px", padding: "50px" }}>: GIRARÁ HACIA LA "IZQUIERDA"</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0 }}>
                            <div><img src={hand} width="140px" alt="Couldn't load."></img></div>
                            <div style={{color: "white", marginLeft: "-100px", padding: "50px" }}>: GIRARÁ HACIA LA "DERECHA"</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0 }}>
                            <div><img src={doubleHand} width="130px" height="175px" style={{ transform: "scaleX(-1)" }} alt="Couldn't load."></img></div>
                            <div style={{color: "white", marginLeft: "-100px", padding: "60px" }}>: ACTIVARÁ "SALTO"</div>
                        </div>
                    </div>
                    <div style={{ color: "white", textAlign: "center" }}>
                        Aquí puedes ver tu cuerpo, posicionate alejado de la cámara para que se vea el cuerpo completo
                        <video className={styles.videoFlip} autoPlay={true} id="videoElement"></video>
                    </div>
                </div>
                <div className={styles.css_typing_calib}>
                    <p>
                        Una vez que te hayas alejado de la cámara
                    </p>
                </div>
                <div className={styles.css_typing_calib_small}>
                    <p>
                        (Y que el cuerpo es visible completamente)
                    </p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link to="/game" className={styles.fe_pulse}>CORRE!</Link>
                </div>
            </div>
        )
    }
}

export default CalibrateScreen;