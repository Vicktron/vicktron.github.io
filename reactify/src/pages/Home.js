import React from 'react'
import {NavLink} from 'react-router-dom'

import Logo from '../images/logo.png'
import Mail from '../images/icons/mail.png'
class Home extends React.Component {
  render() {
    return (
        <div>
            <div className="topbar d-none d-lg-block">
            <div className="container">
                <div className="topbar__area">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="topbar__left__content">
                        <p className="tertiary">
                        <a href="mailto:hello@stakecity.finance">
                            <img src={Mail} alt="Email Us" />
                        </a>
                        hello@stakecity.finance
                        </p>
                        <p className="tertiary">
                        <a href="tel:+17087362094">
                            <i className="fas fa-phone-alt"></i> </a
                        >+123456789009
                        </p>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="topbar__right__content">
                        <div className="social text-start text-lg-end">
                        <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-facebook-f"></i>
                        </NavLink>
                        <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-twitter"></i>
                        </NavLink>
                        <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-instagram"></i>
                        </NavLink>
                        <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-linkedin-in"></i>
                        </NavLink>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    
            <header>
            <nav class="navbar navbar-expand-xl">
                <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src={Logo} alt="Logo" class="logo" />
                </a>
                <div class="navbar__out order-2 order-xl-3">
                    <div class="nav__group__btn">
                      
                    <a
                        class="button"
                        href="../pages/DashboardLottery.js"
                        style= {{ marginRight: '10px' }} 
                    >
                        App
                    </a>
                    </div>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#primaryNav"
                    aria-controls="primaryNav"
                    aria-expanded="false"
                    aria-label="Toggle Primary Nav"
                    >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                    </button>
                </div>
                <div
                    className="collapse navbar-collapse justify-content-end order-3 order-xl-2"
                    id="primaryNav"
                >
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <NavLink
                        className="nav-link dropdown-toggle"
                        to="#" onClick={e => e.preventDefault()}
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        How it Works
                        </NavLink>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="#tokenomics">Tokenomics</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#features"
                            >Features</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="#friends">Friends</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#team">Team</a>
                        </li>
                        </ul>
                    </li>
                    <li class="nav-item d-block d-sm-none"></li>
                    </ul>
                </div>
                </div>
            </nav>
            </header>
        
            <section
            class="hero bg__img"
            data-background="../images/hero/hero-bg.png"
            >
            <div class="container">
                <div class="hero__area">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6 col-xl-6">
                    <div class="hero__content">
                        <h4 class="content__space--small">Stake tokens and Earn</h4>
                        <h1 class="mb-25">Passive Income With $TAKA</h1>
                        <p class="primary mb-38">
                        Mint tokens to earn passive income by staking them in
                        StakerCity decentralized ecosystem and earn through staking
                        rewards, NFTs, referrals and Lottery
                        </p>
                    </div>
                    <div class="col-lg-12">
                        <div class="affiliate__link column__space">
                        <div class="hero__cta">
    
                            <a href="dashboard.html" class="button">Buy</a>
    
                            <div class="video-btn">
                            <a
                                class="video-popup"
                                href="https://www.youtube.com"
                                target="_blank"
                                rel='noreferrer'
                                title="YouTube video player"
                            >
                                <img
                                src="assets/images/icons/play.png"
                                alt="Play Icon"
                                />
                            </a>
                            </div>
                        </div>
                        <div class="copy">
                            <p id="copy-el">
                            0x9C5A36A059F0D01D3dD5ffd0EdF3825633B84D0A
                            </p>
                            <button
                            id="el-copied"
                            class="button"
                            style={{ width: '50px' }}
                            >
                            <em class="fas fa-copy"></em>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 offset-xl-1">
                    <div class="hero__illustration d-none d-lg-block">
                        <img
                        src="assets/images/hero/moshed.png"
                        alt="Hero Illustration"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="hero__animation">
                <img src="assets/images/hero/staker.png" alt="Ethereum" class="eth" />
                <img
                src="assets/images/hero/eth-small.png"
                alt="Ethereum"
                class="eth--small"
                />
                <img src="assets/images/hero/staker.png" alt="Bitcoin" class="btc" />
            </div>
            </section>
    
            <section class="mission section__space over__hi">
            <div class="container">
                <div class="mission__area">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-5 col-xl-5">
                    <div class="mission__thumb thumb__rtl column__space">
                        <img src="assets/images/mission/globe.png" alt="Globe" />
                    </div>
                    </div>
                    <div class="col-lg-7 col-xl-6 offset-xl-1">
                    <div class="mission__content">
                        <div class="section__header mb-50">
                        <h5 class="mb-20">A new era of investments has arrived</h5>
                        <h2 class="mb-15">
                            We are on a mission to democratize investment
                        </h2>
                        <p>
                            StakerCity makes investing in cryptocurrency safer, quicker,
                            and simpler than ever before. Our one-of-a-kind staking
                            plans, vibrant community, and behaviorally-driven rewards
                            program provide an investment experience unlike any other.
                        </p>
                        </div>
                        <div class="row d-flex align-items-center">
                        <div class="col-md-6 col-lg-12 col-xxl-6">
                            <div class="mission__content__items">
                            <img
                                src="assets/images/mission/dollar-bag.png"
                                alt="Dollar"
                            />
                            <div class="ission__content__items--content">
                                <h3 class="mb-10">$3.6B</h3>
                                <p>Total Value Locked</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-12 col-xxl-6">
                            <div
                            class="mission__content__items mission__content__items--last"
                            >
                            <img
                                src="assets/images/mission/user.png"
                                alt="Verified User"
                            />
                            <div class="ission__content__items--content">
                                <h3 class="mb-10">100+</h3>
                                <p>New Addresses Created Daily</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <section
            class="feature-two section__space bg__img"
            data-background="../images/features/features-bg-two.png" id="tokenomics"
            >
            <div className="container">
                <div className="feature-two__wrapper">
                <div className="section__header section__header__space">
                    <h5 className="content__space">Tokenomics</h5>
                    <h2 className="content__space">a</h2>
                    <p>
                    StakerCity's tokenomics guarantee that holders are rewarded and
                    that the project's future is funded.
                    </p>
                </div>
                <div class="row content__space">
                    <div class="col-sm-6 col-xl-3">
                    <div
                        class="feature__item__content text-center column__space--secondary"
                    >
                        <h2 className="text-center" style={{ color: '#13d487'}}>3%</h2>
                        <p className="text-center secondary">BUSD Reflection</p>
                    </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                    <div
                        className="feature__item__content text-center column__space--secondary"
                    >
                        <h2 className="text-center" style={{ color: '#13d487'}}>2%</h2>
                        <p className="text-center secondary">Liquidity Pool</p>
                    </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                    <div
                        className="feature__item__content item__alt text-center column__space"
                    >
                        <h2 className="text-center" style={{ color: '#13d487'}}>2%</h2>
                        <p className="text-center secondary">Buy Back & Burn</p>
                    </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                    <div className="feature__item__content text-center">
                        <h2 className="text-center" style={{ color: '#13d487'}}>3%</h2>
                        <p className="text-center secondary">Marketing & Development</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <section
            class="feature section__space bg__img"
            data-background="../images/features/features-bg.png" id="features"
            >
            <div class="container">
                <div class="feature__area">
                <div class="row d-flex align-items-center">
                    <div class="col-xl-6">
                    <div class="feature__content column__space--secondary">
                        <h5 class="content__space">Effortless crypto investing</h5>
                        <h2 class="content__space--small">
                        We Offer You Decentralized Investments
                        </h2>
                        <p class="mb-38">
                        Remain in profit during the bear market without loosing your
                        capital
                        </p>
                        <a href="investment-plan.html" class="button">Enter App</a>
                    </div>
                    </div>
                    <div class="col-xl-6">
                    <div class="feature__item">
                        <div class="row">
                        <div class="col-sm-6">
                            <div
                            class="feature__item__content text-center content__space" 
                            ><a href="#staking">
                            <img
                                src="assets/images/features/simple.png"
                                alt="Simple"
                                class="content__space"
                            />
                            <p class="text-center secondary">Stake to Earn</p>
                            </a>
                            </div>
                            <div class="feature__item__content text-center">
                            <a href="#nft">
                            <img
                                src="assets/images/features/nft.png"
                                alt="Professional"
                                class="content__space"
                            />
                            <p class="text-center secondary">
                                NFT <br />
                                Powerups
                            </p>
                            <h6 class="text-center secondary" style={{ color : '#04dc60'}}>
                                Coming Soon
                            </h6>
                            </a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div
                            class="feature__item__content feature__item__content--alt text-center content__space"
                            >
                            <a href="#lottery">
                            <img
                                src="assets/images/lottery/58.png"
                                alt="Multi-Currency"
                                class="content__space"
                            />
                            <p class="text-center secondary">
                                Lottery
                            </p>
                            <h6 class="text-center secondary" style={{ color : '#04dc60'}}>
                                Coming Soon
                            </h6>
                            </a>
                            </div>
                            <div class="feature__item__content text-center">
                            <a href="#affiliates">
                            <img
                                src="assets/images/dive/referral.png"
                                alt="Referral"
                                class="content__space"
                            />
                            <p class="text-center secondary">
                                Affliation by Referral
                            </p>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        
            <section
            class="investment invest__alt section__space bg__img pos__rel over__hi"
            data-background="../images/investment/investment-bg.png" id="staking"
            >
            <div class="container">
                <div class="investment__area">
                <div class="section__header mb-50">
                    <h5 class="mb-23">Stake Offerings</h5>
                    <h2 class="mb-18">Our Staking Plans</h2>
                    <p>
                    Our specialists have thoughtfully designed these investment
                    programs to reduce your investment risk while maximizing your
                    return on investment.
                    </p>
                </div>
                <div class="investment__plan__slider">
                    <div class="investment__item">
                    <div class="investment__item__inner">
                        <img
                        src="assets/images/investment/StakerCity_Logo.png"
                        alt="$TAKA-10"
                        />
                        <div class="investment__item__content text-center">
                        <p class="secondary text-center">Builder</p>
                        <hr />
                        <h4 class="text-center content__space--small">5%</h4>
                        <p class="text-center">30 Days</p>
                        <hr />
                        <div class="invest__limit content__space--small">
                            <div
                            className="d-flex align-items-center justify-content-between"
                            >
                            <p>Min. Invest</p>
                            <p>$TAKA 5000</p>
                            </div>
                        </div>
                        <div class="invest__limit mb-35">
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p>Lock Time</p>
                            <p>30 Days</p>
                            </div>
                        </div>
                        <a href="deposit.html" class="button">Stake Now</a>
                        </div>
                    </div>
                    </div>
                    <div class="investment__item">
                    <div class="investment__item__inner">
                        <img
                        src="assets/images/investment/StakerCity_Logo.png"
                        alt="$TAKA-11"
                        />
                        <div class="investment__item__content text-center">
                        <p class="secondary text-center">Financier</p>
                        <hr />
                        <h4 class="text-center content__space--small">5%</h4>
                        <p class="text-center">Monthly</p>
                        <hr />
                        <div class="invest__limit content__space--small">
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p>Min. Invest</p>
                            <p>$TAKA 30,000</p>
                            </div>
                        </div>
                        <div class="invest__limit mb-35">
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p>Lock Time</p>
                            <p>30 Days</p>
                            </div>
                        </div>
                        <a href="investment-plan.html" class="button">Stake Now</a>
                        </div>
                    </div>
                    </div>
                    <div class="investment__item">
                    <div class="investment__item__inner">
                        <img
                        src="assets/images/investment/StakerCity_Logo.png"
                        alt="$TAKA-12"
                        />
                        <div class="investment__item__content text-center">
                        <p class="secondary text-center">Banker</p>
                        <hr />
                        <h4 class="text-center content__space--small">7%</h4>
                        <p class="text-center">Monthly</p>
                        <hr />
                        <div class="invest__limit content__space--small">
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p>Min. Invest</p>
                            <p>$TAKA 100,000</p>
                            </div>
                        </div>
                        <div class="invest__limit mb-35">
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p>Lock Time</p>
                            <p>3 Months</p>
                            </div>
                        </div>
                        <a href="deposit.html" class="button">Stake Now</a>
                        </div>
                    </div>
                    </div>
                    <div class="investment__item">
                    <div class="investment__item__inner">
                        <img
                        src="assets/images/investment/StakerCity_Logo.png"
                        alt="$TAKA-13"
                        />
                        <div class="investment__item__content text-center">
                        <p class="secondary text-center">Investor</p>
                        <hr />
                        <h4 class="text-center content__space--small">10%</h4>
                        <p class="text-center">Monthly</p>
                        <hr />
                        <div class="invest__limit content__space--small">
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p>Min. Invest</p>
                            <p>$TAKA 100,000</p>
                            </div>
                        </div>
                        <div class="invest__limit mb-35">
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p>Lock Time</p>
                            <p>6 Months</p>
                            </div>
                        </div>
                        <a href="investment-plan.html" class="button">Stake Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="section__cta text-center">
                    <a href="investment-plan.html" class="button">Enter App</a>
                </div>
                </div>
            </div>
            <div class="investment__animation">
                <img
                src="assets/images/investment/staker.png"
                alt="bitcoin"
                class="btc"
                />
                <img
                src="assets/images/investment/staker.png"
                alt="Ethereum"
                class="eth"
                />
                <img
                src="assets/images/investment/staker.png"
                alt="Litecoin"
                class="ltc"
                />
            </div>
            </section>
    
                <section class="earning section__space over__hi" id="affiliates">
                <div class="container">
                    <div class="earning__area">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-6 col-xl-5 d-none d-lg-block">
                        <div class="earning__illustration thumb__rtl column__space">
                            <img
                            src="assets/images/affiliate/partner.png"
                            alt="Stake and get Paid"
                            />
                        </div>
                        </div>
                        <div class="col-lg-6 col-xl-6 offset-xl-1">
                        <div class="earning__content">
                            <div class="section__header text-start section__header__space">
                            <h5 class="text-start mb-25">Get paid for referring</h5>
                            <h2 class="text-start content__space">
                                Start Earning in 3 Easy Steps
                            </h2>
                            <p class="text-start">
                                StakerCity encourages community activity. Get rewarded when
                                your wallet address is used as referral for consecutive
                                number of times plus 2% of your referee's staked coins
                            </p>
                            </div>
                            <div class="earning__items content__space">
                            <img src="assets/images/affiliate/join.png" alt="Join" />
                            <div class="earning__items__content">
                                <h4 class="content__space--extra--small">Stake</h4>
                                <p>Join the pool and get activated by staking your coins</p>
                            </div>
                            </div>
                            <div class="earning__items content__space">
                            <img
                                src="assets/images/affiliate/promote.png"
                                alt="Promote"
                            />
                            <div class="earning__items__content">
                                <h4 class="mb-8">Copy Link</h4>
                                <p>
                                A ref link is created for you when you stake, increase
                                your referrals by promoting your link
                                </p>
                            </div>
                            </div>
                            <div class="earning__items">
                            <img src="assets/images/affiliate/earn.png" alt="Earn" />
                            <div class="earning__items__content">
                                <h4 class="mb-8">Earn</h4>
                                <p>
                                Earn massively as you hit StakerCity referrals milestones,
                                ranging from 100-1000-10000 adresses plus 2% of your
                                referee staked coins
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
    
            <section class="win section__space pos__rel over__hi" id="lottery">
            <div class="container">
                <div class="win__area">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-5">
                    <div class="win__thumb thumb__rtl column__space">
                        <img
                        src="assets/images/win/illustration.png"
                        alt="Win Chance"
                        />
                    </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1">
                    <div class="win__content">
                        <div class="section__header text-start">
                        <h5 class="content__space--alt text-start">
                            (Coming Soon)<br />
                            Get Chance to Win
                        </h5>
                        <h2 class="content__space--alt text-start">
                            Win up to 10 Thousand $TAKA in the Weekly lottery
                        </h2>
                        <p class="mb-35 text-start">
                            For every active $ 500 investment you will receive a lottery
                            ticket to our weekly raffle every Monday. Pick your lucky
                            numbers and win up to 10 thousand $TAKA. The more numbers
                            you match, the more money you win!
                        </p>
                        <a href="investment-plan.html" class="button"
                            >Start Invest Now</a
                        >
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="step__animation">
                <img
                src="assets/images/lottery/58.png"
                alt="Lottery Number"
                class="lot58"
                />
                <img
                src="assets/images/lottery/45.png"
                alt="Lottery Number"
                class="lot45"
                />
                <img
                src="assets/images/lottery/25.png"
                alt="Lottery Number"
                class="lot25"
                />
                <img
                src="assets/images/lottery/10.png"
                alt="Lottery Number"
                class="lot10"
                />
                <img
                src="assets/images/lottery/58.png"
                alt="Lottery Number"
                class="lot582"
                />
                <img
                src="assets/images/lottery/17.png"
                alt="Lottery Number"
                class="lot17"
                />
            </div>
            </section>
            <section
            class="affiliate section__space bg__img"
            data-background="../images/affiliate/affiliate-bg.png"
            >
            <div class="container">
                <div class="affiliate__area">
                <div class="section__header section__header__space">
                    <h5 class="mb-25">What You Will Get As</h5>
                    <h2 class="mb-15">An Affiliate Partner</h2>
                    <p class="mb-35">
                    The affiliate program allows project participants to receive
                    additional profit based on the number of persons they referred
                    plus 2% of referee's staked coins 👇.
                    </p>
                    <a href="dashboard-affiliate.html" class="button">Join Us</a>
                </div>
                <div class="affiliate__commission">
                    <div class="row d-flex align-items-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="affiliate__items column__space">
                        <div class="affiliate__img__group">
                            <img
                            src="assets/images/affiliate/icon-bg.png"
                            alt="Spider Nest"
                            />
                            <img src="assets/images/affiliate/one.png" alt="Step" />
                        </div>
                        <div>
                            <h3 class="content__space--small">100 Accounts</h3>
                            <p>$TAKA 5000</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="affiliate__items column__space">
                        <div class="affiliate__img__group">
                            <img
                            src="assets/images/affiliate/icon-bg.png"
                            alt="Spider Nest"
                            />
                            <img src="assets/images/affiliate/two.png" alt="Step" />
                        </div>
                        <div>
                            <h3 class="content__space--small">1000 Accounts</h3>
                            <p>$TAKA 100,000</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="affiliate__items">
                        <div class="affiliate__img__group">
                            <img
                            src="assets/images/affiliate/icon-bg.png"
                            alt="Spider Nest"
                            />
                            <img src="assets/images/affiliate/three.png" alt="Step" />
                        </div>
                        <div>
                            <h3 class="content__space--small">10,000 Accounts</h3>
                            <p>$TAKA 500,000</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <section class="profit pos__rel" id="whitepaper">
            <div class="container">
                <div
                class="profit__area bg__img"
                data-background="../images/ready/line-bg.png"
                >
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6">
                    <div class="profit__content">
                        <h5 class="content__space">
                        Learn More! Get our whitepaper here
                        </h5>
                        <h3 class="mb-38">Roadmap, Tokenomics, etc</h3>
                        <div class="button__group">
                        <a href="register.html" class="button">whitepaper</a>
                        <a href="about-us.html" class="button">Community</a>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                    <div class="profit__illustration">
                        <img
                        src="assets/images/ready/ready-illustration.png"
                        alt="Illustration"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <section
            class="section__space transaction pos__rel bg__img"
            data-background="../images/transaction/transaction-bg.png" id="transactions"
            >
            <div class="container">
                <div class="transaction__area">
                <div class="section__header">
                    <h5 class="mb-23">Statistics</h5>
                    <h2 class="mb-15">Latest Transactions</h2>
                    <div class="button__group text-center cta__space">
                    <a
                        href="index.html#deposit"
                        class="button transaction__tab__btn transaction__tab__btn__active"
                        >Last Deposit</a
                    >
                    <a href="index.html#withdraw" class="button transaction__tab__btn"
                        >Last Withdraw</a
                    >
                    </div>
                </div>
                <div class="transaction__table__area">
                    <div class="transaction__data" id="deposit">
                    <div class="table__wrapper">
                        <table class="table">
                        <thead>
                            <tr>
                            <th>Address</th>
                            <th>Staked</th>
                            <th>To Earn</th>
                            <th>Plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <div class="transaction__author">
                                <span>0x7dcn...987gt</span>
                                </div>
                            </td>
                            <td>$TAKA 100,000</td>
                            <td>$TAKA 160,000</td>
                            <td>Investor</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        
            <section className="testimonial section__space pos__rel over__hi" id="friends">
                <div className="container"/>
                    <div className="testimonial__area">
                        <div className="section__header section__header__space">
                            <h5 className="content__space--alt">Meet Our Friends</h5>
                        </div>
                        <div className="testimonial__item__wrapper">
                            <div
                            className="testimonial__item bg__img"
                            data-background="../images/testimonial/large-circle.png"
                            >
                            <h5 className="cta__space">
                                Innovative web3 solution for the modern day
                            </h5>
                            <p class="primary cta__space">
                                We at
                                <a href="https://www.plabexpress.com" style={{ color : '#04dc60'}}
                                >PlanB</a
                                >
                                wish to show our immense support for StakerCity, a revolutionary
                                staking based cryptocurrency
                            </p>
                            <div class="testimonial__author">
                                <div class="testimonial__author__info">
                                <img
                                    src="assets/images/testimonial/jonathan.png"
                                    alt="jonathan"
                                />
                                <div>
                                    <h5 class="content__space--extra--small">
                                    Felix Jimoh
                                    </h5>
                                    <p>C.E.O, PlanB</p>
                                </div>
                                </div>
                                <div class="testimonial__author__ratings">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                </div>
                            </div>
                            </div>
                            <div
                            class="testimonial__item bg__img"
                            data-background="../images/testimonial/large-circle.png"
                            >
                            <h5 class="cta__space">
                            Innovative web3 solution for the modern day
                            </h5>
                            <p className="primary cta__space">
                            We at
                            <a href="https://www.plabexpress.com" style={{ color : '#04dc60'}}
                                >PlanB</a
                            >
                            wish to show our immense support for StakerCity, a revolutionary
                            staking based cryptocurrency
                            </p>
                            <div className="testimonial__author">
                            <div className="testimonial__author__info">
                                <img
                                src="assets/images/testimonial/jonathan.png"
                                alt="jonathan"
                                />
                                <div>
                                <h5 className="content__space--extra--small">
                                    Felix Jimoh
                                </h5>
                                <p>C.E.O, PlanB</p>
                                </div>
                                <div className="testimonial__author__ratings">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial__animation">
                    <img
                    src="assets/images/testimonial/sm-circle.png"
                    alt="Circle"
                    className="circle__sm"
                    />
                    <img
                    src="assets/images/testimonial/sm-circle.png"
                    alt="Circle"
                    className="circle__sm--two"
                    />
                    <img
                    src="assets/images/testimonial/large-circle.png"
                    alt="Circle"
                    className="circle__lg"
                    />
                    <img
                    src="assets/images/testimonial/large-circle.png"
                    alt="Circle"
                    className="circle__lg--two"
                    />
                </div>
            </section>
    
                <section
                className="team section__space bg__img"
                data-background="../images/team/team-bg.png" id="team"
            >
                <div className="container">
                <div className="team__area">
                    <div className="section__header section__header__space">
                    <h5 className="content__space--alt">Meet Our Team</h5>
                    <h2 className="content__space">Our Expert Member</h2>
                    <p>The amazing team behind our company</p>
                    </div>
                    <div className="row content__space">
                    <div className="col-sm-6 col-lg-3">
                        <div className="team__single column__space">
                        <img
                            src="assets/images/team/francis.png"
                            alt="Francis"
                            className="content__space"
                        />
                        <h5 className="content__space--small">Felix Jimoh</h5>
                        <p className="content__space">Adviser</p>
                        <div className="social">
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-linkedin-in"></i>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="team__single column__space">
                        <img
                            src="assets/images/team/francisco.png"
                            alt="Francisco"
                            className="content__space"
                        />
                        <h5 className="content__space--small">Kola Akintoye</h5>
                        <p className="content__space">Adviser</p>
                        <div className="social">
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-linkedin-in"></i>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="team__single team__single--third">
                        <img
                            src="assets/images/team/sarah.png"
                            alt="Sarah"
                            className="content__space"
                        />
                        <h5 className="content__space--small">Victor Isaac</h5>
                        <p className="content__space">Team Lead</p>
                        <div className="social">
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()} href="/">
                            <i className="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-linkedin-in"></i>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="team__single">
                        <img
                            src="assets/images/team/sheldon.png"
                            alt="Sheldon"
                            className="content__space"
                        />
                        <h5 className="content__space--small">Israel David</h5>
                        <p className="content__space">Frontend Developer</p>
                        <div className="social">
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink to="#" onClick={e => e.preventDefault()}>
                            <i className="fab fa-linkedin-in"></i>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    
            <section className="faq section__space over__hi" id="faq">
            <div className="container">
                <div className="faq__area">
                <div className="section__header section__header__space">
                    <h2 className="content__space">FAQ</h2>
                </div>
                <div className="faq__btn__wrapper text-center cta__space"></div>
                <div className="faq__tab__content__wrapper">
                    <div className="faq__tab__content" id="company">
                    <div className="faq__group">
                        <div className="accordion" id="accordionExampleCompany">
                        <div className="accordion-item content__space">
                            <h5 className="accordion-header" id="headingCompanyOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCompanyOne"
                                aria-expanded="true"
                                aria-controls="collapseCompanyOne"
                            >
                                Why do the top wallets take up a significant portion of
                                total supply
                            </button>
                            </h5>
                            <div
                            id="collapseCompanyOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingCompanyOne"
                            data-bs-parent="#accordionExampleCompany"
                            >
                            <div className="accordion-body">
                                <p>
                                StakerCity has designed a one-of-a-kind staking
                                platform that allows its users to earn passive income
                                from both staking incentives and dividends. The two
                                largest wallets now represent staking pools, which
                                have thousands of users staking their tokens and
                                earning rewards.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item content__space">
                            <h5 className="accordion-header" id="headingCompanyTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCompanyTwo"
                                aria-expanded="false"
                                aria-controls="collapseCompanyTwo"
                            >
                                Where do I buy $TAKA
                            </button>
                            </h5>
                            <div
                            id="collapseCompanyTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingCompanyTwo"
                            data-bs-parent="#accordionExampleCompany"
                            >
                            <div className="accordion-body">
                                <p>
                                $TAKA is currently listed on PancakeSwap DEX however
                                we are coming to your favourite CEXs following a poll
                                3 Months after TGE according to the project's roadmap
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item content__space">
                            <h5 className="accordion-header" id="headingCompanyThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCompanyThree"
                                aria-expanded="false"
                                aria-controls="collapseCompanyThree"
                            >
                                What are reflection/dividends and how do they work?
                            </button>
                            </h5>
                            <div
                            id="collapseCompanyThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingCompanyThree"
                            data-bs-parent="#accordionExampleCompany"
                            >
                            <div className="accordion-body">
                                <p>
                                The dividends on StakerCity are gathered from
                                transaction taxes inside the smart contract and then
                                dispersed proportionally to all $TAKA holders.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item content__space">
                            <h5 className="accordion-header" id="headingCompanyFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCompanyFour"
                                aria-expanded="false"
                                aria-controls="collapseCompanyFour"
                            >
                                Are your team doxxed?
                            </button>
                            </h5>
                            <div
                            id="collapseCompanyFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingCompanyFour"
                            data-bs-parent="#accordionExampleCompany"
                            >
                            <div className="accordion-body">
                                <p>Yes, you can go through the whitepaper</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="faq__animation">
                <img
                src="assets/images/faq/support.png"
                alt="Support"
                className="support"
                />
            </div>
            </section>
            <footer className="footer">
            <div className="container">
                <div className="footer__nav">
                <a href="index.html" class="logo">
                    <img src={Logo} alt="Logo" />
                </a>
                <ul>
                    <li>
                    <NavLink to="#" onClick={e => e.preventDefault()}>
                        <i className="fab fa-facebook-f"></i>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="#" onClick={e => e.preventDefault()}>
                        <i className="fab fa-twitter"></i>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="#" onClick={e => e.preventDefault()}>
                        <i className="fab fa-telegram"></i>
                    </NavLink>
                    </li>
                </ul>
                </div>
                <div className="footer__credit">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8">
                    <div className="footer__credit__left">
                        <p className="text-center text-lg-start">
                        Copyright © <a href="index.html#0">StakerCity Finance</a>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer__animation">
                <img
                src="assets/images/footer/footer-left-illustration.png"
                alt="Footer Illustration"
                className="left__illustration"
                />
                <img
                src="assets/images/footer/footer-right-illustration.png"
                alt="Footer Illustration"
                className="right__illustration"
                />
            </div>
            </footer>
    
            <NavLink to="#" onClick={e => e.preventDefault()} className="scrollToTop">
            <i className="fas fa-angle-double-up"></i>
            </NavLink>
    
    
    
    
        
    
        </div>
    )  
}  
  
}


export default Home