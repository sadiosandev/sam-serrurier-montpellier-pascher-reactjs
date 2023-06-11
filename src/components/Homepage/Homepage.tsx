import React from 'react';
import AppHeader from '../Shared/AppHeader/AppHeader';
import AppFooter from '../Shared/AppFooter/AppFooter';
import PageCouverture from '../../assets/images/homepage-couverture.jpg'
import { Button } from 'react-bootstrap';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import AppServiceIcon from '../../assets/images/icons/app-service-icon.svg';
import { Link } from 'react-router-dom';
import MapImage from '../../assets/images/carte-agglomeration-montpellier.jpeg';
import SeoDepanImg from '../../assets/images/seo/serrurier-pas-cher-montpellier.jpg';
import CouvDecoImg from '../../assets/images/homepage-couv-anim.png';
import PorteClaquee from '../../assets/images/porte-claquee.jpeg';
import ChangementCylindre from '../../assets/images/changement-cylindre.jpeg';
import PoseSerrure from '../../assets/images/pose-serrure.jpeg';
import PorteBlindee from '../../assets/images/porte-blindee.jpeg';
import Serrure3Points from '../../assets/images/serrure-3points.jpeg';
import Badge from '../../assets/images/badge_serrurier.png';

const Homepage = () => {
    return (
        <div className="homepage-component">
            <AppHeader />
            <div className="homepage-couverture">
                <div className="page-couverture-container">
                    <div 
                        className="page-couverture-image-bg-container"
                        style={{
                            background: `url(${PageCouverture}) no-repeat center center fixed`,
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="page-couverture-textual-container">
                            <div className="page-couv-textual-content container">
                                <div className="row page-couv-textual-row">
                                    <div className="col-lg-7 page-couv-col">
                                        <div className="page-couv-content-textual">
                                            <h1 className="site-title">Serrurier pas cher à Montpellier</h1>
                                            <div className="page-couverture-textual-content">
                                                <p className="couv-intro">
                                                    Serrurier Montpellier regroupe des professionnels qui 
                                                    peuvent intervenir trés vite chez vous pour différents services : dépannage d'urgence, 
                                                    installation de serrures et de systèmes de sécurité, réparation de 
                                                    portes endommagées.
                                                </p>
                                                <p className="couv-cta-intro">
                                                    Nous sommes disponible 7j/7 - 24H/24
                                                </p>
                                            </div>
                                            <div className="row cta-row">
                                                <div className="col-lg-6 cta-col">
                                                    <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                        <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                        <span className="phone-number">06 44 96 24 01</span>
                                                    </Button>
                                                </div>
                                                <div className="col-lg-6 cta-col">
                                                    <Button href="mailto:contact@serrurier-montpellier.com" variant="primary" className="app-cta-link phone-cta-btn">
                                                        <MdMarkEmailRead className="app-header-phone-icon" />
                                                        <span className="phone-number">Demandez un devis</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 page-couv-col special-page-couv-col">
                                        <div className="special-page-couv-container">
                                            <img src={CouvDecoImg} alt="Serrurier pas cher à Montpellier" className="special-page-couv-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="app-services">
                <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                <div className="app-services-container container">
                    <div className="app-services-body">
                        <h2 className="section-title">Urgence Dépannage Serrurier Montpellier pas cher</h2>
                        <div className="app-services-textual-intro">
                            <p>
                                Il n'y a rien de pire que de vous enfermer hors de votre maison ou de votre voiture 
                                au milieu de la nuit et de n'avoir nulle part où aller. 
                                C'est frustrant, stressant et parfois carrément dangereux. 
                                C'est pourquoi, chez <a href="https://www.serrurier-montpellier-express.com/" target="_blank" rel="noreferrer" className="seo-link">Serrurier Montpellier</a>, nous fournissons des services rapides et fiables 
                                24 heures sur 24, 7 jours sur 7, afin que vous ne vous sentiez jamais seul en cas de besoin. 
                                Nous voulons nous assurer que l'ensemble de votre processus est sans stress, simple et, plus 
                                important encore, abordable.
                            </p>
                        </div>
                        <div className="app-services-content-body">
                            <div className="row app-services-row">
                                <div className="col-lg-4 app-services-col">
                                    <Link to="/#" className="app-services-item-container">
                                        <img src={AppServiceIcon} alt="Ouverture de Porte Fermée ou avec serrure simple" className="app-services-icon-img" />
                                        <strong className="app-services-item-label">Ouverture de portes fermées</strong>
                                    </Link>
                                </div>
                                <div className="col-lg-4 app-services-col">
                                    <Link to="/pose-serrure-serrurier-montpellier" className="app-services-item-container">
                                        <img src={AppServiceIcon} alt="Ouverture de Porte Fermée ou avec serrure simple" className="app-services-icon-img" />
                                        <strong className="app-services-item-label">Pose Serrure</strong>
                                    </Link>
                                </div>
                                <div className="col-lg-4 app-services-col">
                                    <Link to="/remplacement-cylindre-serrurier-montpellier" className="app-services-item-container">
                                        <img src={AppServiceIcon} alt="Ouverture de Porte Fermée ou avec serrure simple" className="app-services-icon-img" />
                                        <strong className="app-services-item-label">Remplacement de cylindre</strong>
                                    </Link>
                                </div>
                                <div className="col-lg-4 app-services-col">
                                    <Link to="/protection-contre-le-vol-serrurier-montpellier" className="app-services-item-container">
                                        <img src={AppServiceIcon} alt="Ouverture de Porte Fermée ou avec serrure simple" className="app-services-icon-img" />
                                        <strong className="app-services-item-label">Protection contre le VOL</strong>
                                    </Link>
                                </div>
                                <div className="col-lg-4 app-services-col">
                                    <Link to="/portes-blindees-serrurier-montpellier" className="app-services-item-container">
                                        <img src={AppServiceIcon} alt="Ouverture de Porte Fermée ou avec serrure simple" className="app-services-icon-img" />
                                        <strong className="app-services-item-label">Ouverture de portes blindées</strong>
                                    </Link>
                                </div>
                                <div className="col-lg-4 app-services-col">
                                    <Link to="/changement-serrure-3-points-serrurier-montpellier" className="app-services-item-container">
                                        <img src={AppServiceIcon} alt="Ouverture de Porte Fermée ou avec serrure simple" className="app-services-icon-img" />
                                        <strong className="app-services-item-label">Changement de serrure 3 points</strong>
                                    </Link>
                                </div>
                                <div className="col-lg-4 app-services-col">
                                    <Link to="/urgence-depannage-serrurier-montpellier" className="app-services-item-container">
                                        <img src={AppServiceIcon} alt="Ouverture de Porte Fermée ou avec serrure simple" className="app-services-icon-img" />
                                        <strong className="app-services-item-label">Urgence Dépannage Serrurier</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="decoration-section-with-quotation-btn">
                <div className="container-fluid decoration-section-container">
                    <div className="decoration-section-body">
                        <div className="row decoration-section-row">
                            <div className="col-lg-12 decoration-textual-content-col">
                                <div className="decoration-textual-content">
                                    <h3 className="decoration-section-title">Dépannage Serrurier Montpellier pas cher</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-3 decoration-section-actions-btn-col">
                                <div className="row cta-row">
                                    <div className="col-lg-6 cta-col">
                                        <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                            <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                            <span className="phone-number">06 44 96 24 01</span>
                                        </Button>
                                    </div>
                                    <div className="col-lg-6 cta-col">
                                        <Button href="mailto:contact@serrurier-montpellier.com" variant="primary" className="app-cta-link phone-cta-btn">
                                            <MdMarkEmailRead className="app-header-phone-icon" />
                                            <span className="phone-number">Demandez un devis</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="location-price-section">
                <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                <div className="container location-price-section-container">
                    <div className="row location-price-section-row">
                        <div className="col-lg-6 location-map-col">
                            <div className="intervention-mapping-body-content">
                                <h4 className="location-pricing-title">Serrurier pas cher sur Montpellier</h4>
                                <p>Nous intervenons sur Montpellier et alentours</p>
                                <div className="map-container">
                                    <img src={MapImage} alt="Dépannage Serrurier Montpellier" title="Serrurier pas cher Montpellier" className="intervention-mapping-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pricing-col">
                            <div className="intervention-pricing-body-content">
                                <h4 className="location-pricing-title">Nos Prix</h4>
                                <div className="row pricing-tables-row">
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Ouverture de portes fermées</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">50 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">75 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Ouverture de portes blindées</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">100 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">150 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Changement de serrure</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">100 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">100 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Déplacement Montpellier et environs</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">40 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">60 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row seo-textual-row">
                        <div className="col-md-12 seo-textual-col">
                            <div className="seo-textual-content-body">
                                <p>
                                    Notre équipe de <a target="_blank" rel="noreferrer" href="https://urgence-depannage-plomberie-montpellier.com/" className="seo-link">serruriers professionnels, pas cher basée sur Montpellier</a> 
                                    est expérimentée et formée pour vous offrir des services de haute qualité à des 
                                    prix abordables. Nous travaillons avec des outils de pointe et 
                                    des techniques innovantes pour garantir des résultats rapides et 
                                    efficaces à chaque intervention.
                                </p>
                                <p>
                                    En plus de notre service rapide et fiable, nous offrons également 
                                    des <strong>devis gratuits</strong> &nbsp;pour tous nos services. Nous sommes transparents 
                                    sur nos prix et ne facturons jamais de frais cachés. Nous croyons 
                                    que tout le monde a droit à un service de <strong>serrurerie</strong> &nbsp;fiable et 
                                    abordable, c'est pourquoi nous nous efforçons d'offrir les meilleurs 
                                    prix possibles.
                                </p>
                                <p>
                                    Nous sommes fiers de notre excellent service à la clientèle et 
                                    de notre engagement envers la satisfaction de nos clients. 
                                    Nous avons une grande réputation à Montpellier pour notre travail 
                                    de qualité et notre professionnalisme. Contactez-nous dès 
                                    aujourd'hui pour obtenir un devis gratuit et découvrir comment 
                                    nous pouvons vous aider.
                                </p>
                                <p>
                                    Pour les dépannages et urgence, l'équipe de <strong>Serrurier pas cher Montpellier</strong> &nbsp;reste mobilisée et 
                                    joignable tous les jours (dimanche inclus), 24h/24 au <a href="tel:0644962401" className="phone-link">06 44 96 24 01</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="good-seo-section">
                <div className="container good-seo-section-container">
                    <h2 className="good-seo-section-title">Dépannage urgence pour Porte Fermée et clef à l'intérieur sur Montpellier</h2>
                    <p className="good-seo-intro">
                        Vous avez besoin d'un <strong>serrurier pas cher sur Montpellier</strong> &nbsp;
                        pour toute intervention à domicile, perte de clés, effraction ou une panne 
                        de serrure, nos artisans serruriers seront chez vous en moins de 30 minutes.
                    </p>
                    <div className="row good-seo-row">
                        <div className="col-lg-6 good-seo-image-col">
                            <div className="good-seo-image-container">
                                <img src={SeoDepanImg} title="Dépannage et Urgence Serrurier pas cher sur Montpellier" alt="Dépannage et Urgence Serrurier pas cher sur Montpellier" className="good-seo-image" />
                            </div>
                        </div>
                        <div className="col-lg-6 good-seo-textual-col">
                            <div className="good-seo-textual-container">
                                <p>
                                    Des professionnels qualifiés se rendront rapidement à votre domicile, 
                                    afin de déterminer avec vous le type de serrure correspondant le mieux 
                                    à vos besoins.
                                </p>
                                <p>
                                    <b>Votre serrure, votre verrou ou votre porte connaît des dysfonctionnements ?</b> <br />
                                    En tant que professionnel en serrurerie, <strong>Serrurier pas cher Montpellier</strong> &nbsp;effectue tous dépannages, petits et grands.
                                </p>
                                <p>
                                    Notre métier premier est l’assistance et le dépannage de serrures 
                                    sur Montpellier et ses alentours. Nous mettons à votre service 
                                    des professionnels, qui sauront répondre à vos besoins, en vous 
                                    proposant des produits de qualité. Votre sécurité et la protection 
                                    de vos biens est notre priorité, nous mettons notre savoir-faire 
                                    à votre disposition, pour vous dépanner et vous assister rapidement.
                                </p>
                            </div>
                            <div className="badge-container">
                                <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="image-and-text-section">
                <div className="container image-and-text-section-container">
                    <div className="image-and-text-body-content">
                        <h3 className="section-title">Pourquoi choisir Serrurier pas cher Montpellier ?</h3>
                        <div className="image-and-text-content">
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PorteClaquee} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Porte Fermée</h4>
                                        <p>
                                            Vous avez une <strong>Porte Fermée</strong> et cela peut être stressant. 
                                            Que vous soyez à la maison ou au bureau cela peut 
                                            perturber votre routine quotidienne. Heureusement, 
                                            vous pouvez compter sur <strong>Serrurier pas cher Montpellier</strong> &nbsp;
                                            pour vous aider à résoudre ce problème rapidement et efficacement.
                                        </p>
                                        <p>
                                            Ne laissez pas une Porte Fermée gâcher votre journée. 
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="badge-container">
                                            <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                                        </div>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Remplacement de cylindre</h4>
                                        <p>
                                            Vous avez des problèmes avec votre serrure ? 
                                            Il est peut-être temps de songer à <strong>remplacer le cylindre</strong>. &nbsp; 
                                            Un cylindre de serrure défectueux peut rendre votre maison 
                                            ou votre entreprise vulnérable aux intrusions, 
                                            alors n'attendez pas que cela arrive pour agir. 
                                            Avec <strong>Serrurier pas cher Montpellier</strong>, &nbsp; nous mettrons à votre
                                            disposition des <strong>serruriers qualifiés</strong>. 
                                        </p>
                                        <p>
                                            Ne laissez pas une serrure défectueuse vous gâcher votre journée. 
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="badge-container">
                                            <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                                        </div>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={ChangementCylindre} alt="Serrurier pas cher Montpellier : Changement de cylindre" title="Changement de cylindre" className="image-content-item" />
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PoseSerrure} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Pose Serrure</h4>
                                        <p>
                                            La <strong>pose d'une serrure</strong> est un élément crucial 
                                            de la sécurité de votre maison ou de votre entreprise. 
                                            Nous sommes spécialisés dans la pose de serrures de haute qualité 
                                            pour tout type de porte, qu'il s'agisse de portes d'entrée, 
                                            de portes de garage, de portes de sécurité ou de portes intérieures. 
                                            <strong>Serrurier pas cher Montpellier</strong> travaille avec les marques 
                                            les plus fiables et les plus reconnues de l'industrie pour garantir la 
                                            qualité et la fiabilité de nos interventions.
                                        </p>
                                        <p>
                                            Vous voulez renforcer la sécurité de vos portes ?
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="badge-container">
                                            <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                                        </div>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Installation de portes blindées</h4>
                                        <p>
                                            <strong>L'installation d'une porte blindée </strong> est l'un des moyens les plus efficaces 
                                            pour sécuriser votre maison ou votre entreprise contre les intrusions. 
                                            Chez <strong>Serrurier pas cher Montpellier</strong>, &nbsp; nous proposons une large gamme de portes 
                                            blindées de haute qualité, conçues pour offrir une protection maximale 
                                            contre les cambrioleurs et les voleurs.
                                        </p>
                                        <p>
                                            Vous voulez sécuriser votre maison ou entreprise ?
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="badge-container">
                                            <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                                        </div>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PorteBlindee} alt="Serrurier pas cher Montpellier : Installation de portes blindées" title="Installation de portes blindées" className="image-content-item" />
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={Serrure3Points} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Changement de serrure 3 points</h4>
                                        <p>
                                            <strong>L'installation d'une serrure 3 points</strong> est l'un des moyens 
                                            les plus efficaces de renforcer la <strong>sécurité</strong> de votre maison 
                                            ou de votre entreprise. Cette serrure offre une protection 
                                            supplémentaire contre les cambriolages et les intrusions, 
                                            car elle est beaucoup plus difficile à forcer que les 
                                            serrures traditionnelles.
                                        </p>
                                        <p>
                                            Vous voulez renforcer la sécurité de vos portes ?
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="badge-container">
                                            <img src={Badge} alt="Serrurier pas cher à Montpellier" className="badge-ouverture-porte" />
                                        </div>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </div>
    )
}

export default Homepage