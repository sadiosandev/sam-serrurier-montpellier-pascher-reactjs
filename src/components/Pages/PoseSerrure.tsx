import React from 'react'
import AppHeader from '../Shared/AppHeader/AppHeader';
import AppFooter from '../Shared/AppFooter/AppFooter';
import PageCouverture from '../../assets/images/pose-serrure-page-cover.webp'
import { Button } from 'react-bootstrap';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import PoseSerrureImg1 from '../../assets/images/pose-serrure-img1.webp';
import PoseSerrureImg2 from '../../assets/images/pose-serrure-img2.jpeg';
import MapImage from '../../assets/images/carte-agglomeration-montpellier.jpeg';

const PoseSerrure = () => {
    return (
        <div className="page-component">
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
                                    <div className="col-lg-8 offset-lg-2 page-couv-col">
                                        <div className="page-couv-content-textual">
                                            <h1 className="site-title">Serrurier Montpellier pas cher : Pose Serrure</h1>
                                            <div className="page-couverture-textual-content">
                                                <p className="couv-intro">
                                                    Lorsqu'il s'agit de la sécurité de votre maison ou de votre entreprise, 
                                                    il est important de prendre toutes les précautions nécessaires. 
                                                    L'un des moyens les plus simples et les plus efficaces de renforcer la sécurité 
                                                    est de s'assurer que les serrures sont bien installées et fonctionnent correctement. 
                                                    C'est là que les serruriers professionnels entrent en jeu, 
                                                    et <strong>Serrurier Montpellier pas cher</strong>&nbsp; est l'entreprise de serrurerie qui peut vous aider 
                                                    à installer, réparer ou remplacer vos serrures en toute sécurité et à un prix 
                                                    abordable.
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="page-container">
                <div className="container image-and-text-section-container">
                    <div className="image-and-text-body-content">
                        <h2 className="section-title">Pose de serrure : pourquoi est-ce important ?</h2>
                        <div className="image-and-text-content">
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PoseSerrureImg1} alt="Serrurier pas cher Montpellier : Ouverture de portes claquées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            La pose de serrure est une tâche qui ne doit pas être négligée. 
                                            En effet, une serrure mal installée ou défectueuse peut compromettre 
                                            la sécurité de votre maison ou de votre entreprise. 
                                            C'est pourquoi il est important de faire appel à des serruriers 
                                            professionnels pour installer vos serrures.
                                        </p>
                                        <p>
                                            <strong>Serrurier Montpellier pas cher,</strong> &nbsp;
                                            nous sommes des experts en matière de pose de serrure. 
                                            Nous comprenons l'importance de la sécurité pour nos clients, 
                                            c'est pourquoi nous nous engageons à fournir un service de 
                                            qualité supérieure à un prix abordable.
                                        </p>
                                        <p>
                                            Pour tous vos besoin en matiére de serrurerie, vous pouvez faire appel à nous.
                                        </p>
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
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PoseSerrureImg2} alt="Serrurier pas cher Montpellier : Ouverture de portes claquées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            <strong>Serrurier Montpellier pas cher,</strong> met à votre disposition des professionnels expérimentés pour 
                                            installer une large gamme de serrures, qu'il s'agisse de serrures pour portes, 
                                            fenêtres, coffres-forts ou même de serrures électroniques. 
                                            Nous sommes également en mesure de vous conseiller sur le choix de la serrure la mieux 
                                            adaptée à vos besoins.
                                        </p>
                                        <p>
                                            Nous sommes fiers de notre réputation de fournir un 
                                            service de qualité supérieure à nos clients. 
                                            Nous sommes en mesure de fournir des références de 
                                            clients satisfaits qui ont utilisé nos services de 
                                            pose de serrure dans le passé.
                                        </p>
                                        <p>
                                            <strong>Serrurier Montpellier pas cher</strong> c'est une équipe de professionnels 
                                            accumulant plus 30 ans d'expériences.
                                        </p>
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
            <section id="location-price-section">
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
                                                <strong>Ouverture de portes claquées</strong>
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
                                    Notre équipe de <a target="_blank" rel="noreferrer" href="https://urgence-depannage-plomberie-montpellier.com/" className="seo-link">serruriers professionnels, pas cher basée sur Montpellier</a>&nbsp;
                                    est expérimentée et formée pour vous offrir des services de haute qualité à des 
                                    prix abordables. Nous travaillons avec des outils de pointe et 
                                    des techniques innovantes pour garantir des résultats rapides et 
                                    efficaces à chaque intervention.
                                </p>
                                <p>
                                    <strong>La pose d'une serrure</strong> &nbsp;nécessite une 
                                    expertise et une expérience pour être réalisée correctement. 
                                    Il est important de choisir la serrure adaptée à votre porte 
                                    et à vos besoins de sécurité. Un serrurier professionnel 
                                    peut vous aider à sélectionner la meilleure serrure pour 
                                    votre situation.
                                </p>
                                <p>
                                    Pour tout dépannage et urgence, l'équipe de <strong>Serrurier pas cher Montpellier</strong> &nbsp;reste mobilisée et 
                                    joignable tous les jours (dimanche inclus), 24h/24 au <a href="tel:0644962401" className="phone-link">06 44 96 24 01</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </div>
    )
}

export default PoseSerrure