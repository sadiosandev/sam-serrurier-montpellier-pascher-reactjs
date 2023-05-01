import React from 'react'
import AppHeader from '../Shared/AppHeader/AppHeader';
import AppFooter from '../Shared/AppFooter/AppFooter';
import PageCouverture from '../../assets/images/changement-serrure-3points-page-cover.webp'
import { Button } from 'react-bootstrap';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import ChangementSerrure3PointsImg1 from '../../assets/images/serrure-serrure-3-points-changement-768x512.jpeg';
import ChangementSerrure3PointsImg2 from '../../assets/images/changement-serrure-3points-img2.jpeg';
import ChangementSerrure3PointsImg3 from '../../assets/images/porte-blindee-pose-737x485.jpeg';
import MapImage from '../../assets/images/carte-agglomeration-montpellier.jpeg';

const ChangementSerrure3Points = () => {
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
                                            <h1 className="site-title">Serrurier Montpellier pas cher : Changement de serrure 3 points</h1>
                                            <div className="page-couverture-textual-content">
                                                <p className="couv-intro">
                                                    Le changement de serrure 3 points est une opération courante dans le domaine de 
                                                    la serrurerie. Il peut être nécessaire pour des raisons de sécurité, 
                                                    de vétusté ou de perte de clés. Dans tous les cas, il est important de 
                                                    confier cette tâche à un serrurier professionnel pour garantir un travail 
                                                    de qualité et éviter les mauvaises surprises. <br /><br />
                                                    <strong>Serrurier Montpellier pas cher</strong> &nbsp;est une 
                                                    entreprise de serrurerie basée à Montpellier qui propose des 
                                                    services de qualité à des tarifs compétitifs. 
                                                    Nos artisans sont expérimentés et formés pour réaliser des 
                                                    changements de serrure 3 points en respectant les normes de 
                                                    sécurité en vigueur.
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
                        <h2 className="section-title">Serrurier Montpellier : Changement de serrure 3 points </h2>
                        <div className="image-and-text-content">
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={ChangementSerrure3PointsImg1} alt="Serrurier pas cher Montpellier : Ouverture de portes claquées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Lors d'un <strong>changement de serrure 3 points</strong>, le serrurier va retirer 
                                            l'ancienne serrure et installer une nouvelle serrure en respectant 
                                            les dimensions de l'ancienne. Il va également s'assurer que la nouvelle 
                                            serrure est compatible avec la porte et le cadre de la porte. 
                                            Enfin, il va régler la serrure pour garantir un fonctionnement optimal.
                                        </p>
                                        <p>
                                            Il est important de choisir une serrure 3 points de qualité pour 
                                            assurer la sécurité de votre domicile. 
                                            Les serrures 3 points sont plus résistantes aux effractions que 
                                            les serrures simples. 
                                            Il existe plusieurs types de serrures 3 points, comme <strong>les serrures 
                                            encastrées,</strong> &nbsp;<strong>les serrures en applique</strong> &nbsp;et les <strong>serrures carénées</strong>. 
                                            &nbsp;Le choix dépendra du type de porte et de l'esthétique souhaitée.
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
                                        <img src={ChangementSerrure3PointsImg2} alt="Serrurier pas cher Montpellier : Ouverture de portes claquées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Le changement de serrure 3 points est une opération courante pour 
                                            les serruriers professionnels. 
                                            Cette prestation est souvent sollicitée par les clients souhaitant renforcer 
                                            la sécurité de leur domicile. Dans cet article, nous allons vous expliquer les 
                                            différentes étapes à suivre pour effectuer un changement de serrure 3 points.
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
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={ChangementSerrure3PointsImg3} alt="Serrurier pas cher Montpellier : Ouverture de portes claquées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Le changement de serrure 3 points est une opération qui nécessite un 
                                            savoir-faire technique et une grande expérience en serrurerie. 
                                            Voici les différentes étapes à suivre pour changer une serrure 3 points :
                                            <ul className="page-listing">
                                                <li>Le démontage de la serrure existante : Pour changer une serrure 3 points, il est nécessaire de commencer par démonter la serrure existante. Cette opération consiste à retirer les vis de fixation et à déboîter la serrure de la porte.</li>
                                                <li>La mesure de la serrure : Après avoir démonté la serrure existante, il est important de mesurer les dimensions de la serrure pour choisir une serrure de remplacement adaptée.</li>
                                                <li>L'installation de la nouvelle serrure : Une fois la serrure de remplacement choisie, il convient de l'installer en suivant les instructions du fabricant. Cette étape peut nécessiter de percer de nouveaux trous dans la porte pour adapter la nouvelle serrure.</li>
                                                <li>Le réglage de la serrure : Après l'installation de la nouvelle serrure, il est nécessaire de la régler pour qu'elle fonctionne correctement. Cette étape consiste à ajuster les gâches et à vérifier que les points de fermeture sont bien enclenchés.</li>
                                            </ul>
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
                                    Le <strong>changement de serrure 3 points</strong> &nbsp;est une opération 
                                    technique qui nécessite l'intervention d'un serrurier professionnel. 
                                    <strong>Serrurier Montpellier pas cher</strong> &nbsp;est une entreprise spécialisée dans la 
                                    serrurerie qui intervient auprès des particuliers et des professionnels pour 
                                    tous types de travaux en serrurerie, y compris le changement de serrure 3 points. 
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

export default ChangementSerrure3Points