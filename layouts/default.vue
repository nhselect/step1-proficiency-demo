<template>
  <div class="pagewrapper">
    <div class="nhsuk-width-container-fluid">
      <div class="nhsuk-width-container">
        <div class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1"
          style="margin-top: 16px;margin-bottom: 16px;">
          <h2 class="nhsuk-error-summary__title" id="error-summary-title" style="margin: 0">
            Please note: 
            <span class="nhsuk-caption-l">
              This page is solely for demonstrating the appearance and content of the digitised Step 1 proficiencies. Your progress won't save and you won't be able to use all the functionality (i.e. certain buttons are disabled)
            </span>
          </h2>
        </div>
      </div>
    </div>

    <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>

    <header class="nhsuk-header nhsuk-header--transactional" role="banner">
      <div class="nhsuk-width-container nhsuk-header__container">
        <div class="nhsuk-header__logo nhsuk-header__logo--only">
          <a class="nhsuk-header__link" href="/" aria-label="Learning Portal homepage">
            <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false"
              viewBox="0 0 40 16">
              <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
              <path class="nhsuk-logo__text"
                d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6">
              </path>
              <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
            </svg>
          </a>
        </div>
        <div class="nhsuk-header__transactional-service-name">
          <span class="nhsuk-header__transactional-service-name--link">Step 1 Proficiencies - National Proficiency
            Framework for Registered Nurses in Adult Critical Care</span>
          <sup class="header-beta">Beta</sup>
        </div>
      </div>
    </header>

    <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
      <div class="nhsuk-width-container">
        <ol class="nhsuk-breadcrumb__list">
          <li class="nhsuk-breadcrumb__item">
            <a class="nhsuk-breadcrumb__link trigger-loader" href="#">Current activities</a>
          </li>
          <li class="nhsuk-breadcrumb__item">
            <a class="nhsuk-breadcrumb__link" href="#">Step 1 Proficiencies - National
              Proficiency Framework for Registered Nurses in Adult Critical Care introduction</a>
          </li>
          <li class="nhsuk-breadcrumb__item">
            Proficiencies home
          </li>
        </ol>
        <p class="nhsuk-breadcrumb__back">
          <a class="nhsuk-breadcrumb__backlink" href="#">
            Back to Step 1 Proficiencies - National Proficiency Framework for Registered Nurses in Adult Critical Care
          </a>
        </p>
      </div>
    </nav>

    <Nuxt keep-alive :keep-alive-props="{ max: 2 }" />

    <footer role="contentinfo">
      <div class="nhsuk-footer" id="nhsuk-footer">
        <div class="nhsuk-width-container">
          <h2 class="nhsuk-u-visually-hidden">Support links</h2>
          <ul class="nhsuk-footer__list">
            <li class="nhsuk-footer__list-item">
              <a class="nhsuk-footer__list-item-link" target="_blank" href="#">Contact us
                <span class="nhsuk-u-visually-hidden">(opens new browser window)</span></a>
            </li>
            <li class="nhsuk-footer__list-item">
              <a class="nhsuk-footer__list-item-link" target="_blank" href="#">Terms of use
                <span class="nhsuk-u-visually-hidden">(opens new browser window)</span></a>
            </li>
            <li class="nhsuk-footer__list-item">
              <a class="nhsuk-footer__list-item-link" target="_blank" href="#">Accessibility <span
                  class="nhsuk-u-visually-hidden">(opens new browser window)</span></a>
            </li>
            <li class="nhsuk-footer__list-item">
              <a class="nhsuk-footer__list-item-link" href="#">Privacy <span class="nhsuk-u-visually-hidden">(opens
                  new browser window)</span></a>
            </li>
          </ul>
          <p class="nhsuk-footer__copyright">© Digital Learning Solutions, Health Education England 2022</p>
        </div>
      </div>
    </footer>

  </div>
</template>