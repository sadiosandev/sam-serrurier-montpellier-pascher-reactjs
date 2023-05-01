import { NavLink } from "react-router-dom";
import AppLogo from "../../../assets/images/logo.png";

const AppFooter = () => {
    const dt = new Date();
    const Year =  dt.getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-first-level-container">
                    <div className="row footer-first-level-row">
                        <div className="col-lg-4 footer-fl-col">
                            <div className="footer-fl-item-container">
                                <h5 className="footer-fl-item-section-title">Serrurier pas cher Montpellier</h5>
                                <div className="footer-section-container footer-brand-section">
                                    <NavLink to="/" className="footer_logo_link">
                                        <img src={AppLogo} alt="Serrurier Montpellier pas cher" className="app-footer-brand-img" />
                                    </NavLink>
                                    <p className="footer-brand-text">
                                        <strong>Serrurier Montpellier pas cher</strong> regroupe des professionnels qui peuvent intervenir trés vite chez vous pour différents services 24H/24, 7J/7.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 footer-fl-col">
                            <div className="footer-fl-item-container">
                                <h5 className="footer-fl-item-section-title">Nos Services</h5>
                                <div className="footer-section-container footer-brand-section">
                                    <ul className="footerapp-services-ul">
                                        <li>
                                            <NavLink to="/urgence-depannage-serrurier-montpellier" className="footer-service-item-link">Dépannage d'urgence</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/portes-blindees-serrurier-montpellier" className="footer-service-item-link">Portes blindées</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/protection-contre-le-vol-serrurier-montpellier" className="footer-service-item-link">Protection contre le vol</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/pose-serrure-serrurier-montpellier" className="footer-service-item-link">Pose Serrure</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/remplacement-cylindre-serrurier-montpellier" className="footer-service-item-link">Remplacement de cylindre</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/changement-serrure-3-points-serrurier-montpellier" className="footer-service-item-link">Changement de serrure 3 points</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 footer-fl-col">
                            <div className="footer-fl-item-container">
                                <h5 className="footer-fl-item-section-title">Nous contacter</h5>
                                <div className="footer-section-container footer-brand-section">
                                    <div className="footer-contact-item-container">
                                        <p className="footer-contact-item-title">Adresse</p>
                                        <p className="footer-contact-item-label">129 All. de Bon Accueil, 34090 Montpellier, France</p>
                                    </div>
                                    <div className="footer-contact-item-container">
                                        <p className="footer-contact-item-title">Téléphone</p>
                                        <p className="footer-contact-item-label"> <a href="tel:0644962401" className="footer-contact-cta">06 44 96 24 01</a> </p>
                                    </div>
                                    <div className="footer-contact-item-container">
                                        <p className="footer-contact-item-title">Email</p>
                                        <p className="footer-contact-item-label"> <a href="mailto:contact@serrurier-pas-cher-montpellier.com" className="footer-contact-cta">contact@serrurier-pas-cher-montpellier.com</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="second-level-container">
                    <div className="row footer-second-level-row">
                        <div className="col-lg-12 footer-sl-col">
                            <div className="footer-sl-body">
                                &copy; { Year } <span>Serrurier pas cher Montpellier</span> - &nbsp;
                                <span>Site web designé et conçu par <a href="mailto:sadio.sanghare@nahawa.click" className="author-link">Sadio Sangharé</a> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;