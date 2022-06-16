/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

class dashboardLottery extends React.Component {
  render() {
    return (
      <div>
        <div class="topbar topbar__dashboard d-none d-lg-block">
        <div class="container">
            <div class="topbar__area">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="topbar__left__content">
                      <p class="tertiary">
                        <a href="mailto:hello@stakecity.finance">
                          <img src="../images/icons/mail.png" alt="Email Us" />
                        </a>
                        hello@stakecity.finance
                      </p>
                      <p class="tertiary">
                        <a href="tel:+17087362094">
                          <i class="fas fa-phone-alt"></i> </a
                        >+123456789009
                      </p>
                    </div>
                  </div>
                    <div class="col-lg-4">
                        <div class="topbar__right__content">
                            <div class="social text-start text-lg-end">
                                <a href="javascript:void(0)">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <header class="header__dashboard header__alt">
          <nav class="navbar navbar-expand-xl">
            <div class="container">
              <a class="navbar-brand" href="index.html">
                <img src="../images/logo.png" alt="Logo" class="logo" />
              </a>
              <div class="navbar__out order-2 order-xl-3">
                <div class="dashboard__nav">
                  <div class="notifications">
                    <a href="javascript:void(0)" class="icon__wrapper">
                      <i class="fas fa-bell"></i>
                      <span>03</span>
                    </a>
                    <div class="notification__wrapper">
                      <div class="notification__head">
                        <p class="text-center">3 New</p>
                        <p class="tertiary text-center">Notification</p>
                    </div>
                    <div class="notification__single">
                      <a href="dashboard.html#">
                        <h6>Welcome to StakerCity</h6>
                        <p class="tertiary">Succesfully Staked</p>
                      </a>
                      <p class="tertiary time">2 hours ago</p>
                    </div>
                  </div>
                </div>
                <select class="language-select"> Multi Language Support
                  <option value="english">En</option>
                  <option value="australia">Aus</option>
                  <option value="brazil">Bra</option>
                  <option value="argentina">Arg</option>
                </select>
                <div class="profile__meta">
                  <a href="javascript:void(0)" class="profile__small">
                    <img src="assets/images/avatar.png" alt="Profile Image" />
                  </a>
                  <div class="profile__info">
                    <div class="profile__info__head">
                      <div>
                        <img src="assets/images/avatar.png" alt="User" />
                      </div>
                      <div class="profile__head__content">
                        <a href="settings.html">0x745b...678n</a>
                      </div>
                    </div>
                    <a href="dashboard.html#">Disconnect</a>
                </div>
              </div>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNav"
              aria-controls="primaryNav" aria-expanded="false" aria-label="Toggle Primary Nav">
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
              </button>
          </div>
                  <div class="collapse navbar-collapse justify-content-end order-3 order-xl-2" id="primaryNav">
                  </div>
              </div>
          </nav>
        </header>
      </div>
    );
  }
  
}

export default dashboardLottery