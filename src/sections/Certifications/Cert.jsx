import React from 'react';
import './Cert.css'
import certificateImage from "../../assets/Responnsivewebdesigncertificate.png";

function Cert() {
  return (
    <>
    <div className="headingBox"><h1 className="certHead">My Certifications</h1></div>
    	<div className="cardsOverlay"></div>
    	 <div className="certs-container">
    	 	<div className="cert">
    	 		<a href="https://www.freecodecamp.org/certification/techiedas/responsive-web-design-v9"><img src={certificateImage} alt="CertificateImage"/></a>
    	 	</div>
    	 </div>
    </>
  );
}

export default Cert;