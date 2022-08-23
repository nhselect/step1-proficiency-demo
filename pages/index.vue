<template>
  <div id="pagewrapper">

    <div class="nhsuk-width-container-fluid">
      <div class="nhsuk-width-container">
        <div class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" style="margin-top: 16px;margin-bottom: 16px;">
          <h2 class="nhsuk-error-summary__title" id="error-summary-title" style="margin: 0">
            Please note: <span class="nhsuk-caption-l">This page is solely for demonstrating the appearance of the digital Step 1 proficiencies platform during a temporary review process.</span>
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

    <div class="nhsuk-width-container" id="maincontentwrapper">
      <main class="nhsuk-main-wrapper" id="maincontent" tabindex="-1">
        <h1>Step 1 Proficiencies - National Proficiency Framework for Registered Nurses in Adult Critical Care -
          Proficiencies</h1>
        <form method="post" action="/v2/SelfAssessment/SelfAssessmentOverview">
          <div class="search-container">
            <div class="search-box-container" id="search">
              <label class="nhsuk-u-visually-hidden" for="search-field">Search</label>
              <input class="search-box nhsuk-input" id="search-field" name="searchText"
                style="border-bottom-right-radius: initial; border-top-right-radius: initial;" type="search"
                placeholder="Search" autocomplete="off">
              <button class="nhsuk-button search-submit" type="submit"
                formaction="/v2/LearningPortal/SearchInSelfAssessmentOverviewGroups">
                <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20"
                  aria-hidden="true" focusable="false">
                  <path
                    d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z">
                  </path>
                </svg>
                <span class="nhsuk-u-visually-hidden">Search</span>
              </button>
            </div>
          </div>
          <div class="filter-value-container">
            <select aria-label="ResponseStatus filter" class="nhsuk-select filter-dropdown" data-val="true"
              data-val-required="The SelectedFilter field is required." id="SelectedFilter" name="SelectedFilter">
              <option value="-8">Requires self assessment</option>
              <option value="-7">Self-assessed (confirmation not yet requested)</option>
              <option value="-6">Confirmation requested</option>
              <option value="-5">Confirmed</option>
              <option value="-4">Confirmation rejected</option>
              <option value="1">Purple: Supernumerary</option>
            </select>
            <button type="submit" class="nhsuk-button filter-submit" style="width:20%;"
              formaction="/v2/LearningPortal/AddSelfAssessmentOverviewFilter">
              Add filter
            </button>
          </div>
          <input data-val="true" data-val-required="The SelfAssessmentId field is required." id="SelfAssessmentId"
            name="SelfAssessmentId" type="hidden" value="7">
          <input data-val="true" data-val-required="The IsSupervisorResultsReviewed field is required."
            id="IsSupervisorResultsReviewed" name="IsSupervisorResultsReviewed" type="hidden" value="True">
          <input data-val="true" data-val-required="The IncludeRequirementsFilters field is required."
            id="IncludeRequirementsFilters" name="IncludeRequirementsFilters" type="hidden" value="False">
          <input data-val="true" data-val-required="The Vocabulary field is required." id="Vocabulary" name="Vocabulary"
            type="hidden" value="Proficiencies">
          <input class="input-validation-error" data-val="true" data-val-required="The SearchText field is required."
            id="SearchText" name="SearchText" type="hidden" value="">
          <input name="__RequestVerificationToken" type="hidden"
            value="CfDJ8A3c0HWg6QxOvuFSI0W6sHYKRT7zkZObR9SuB2Wwpw3bY3c5KqlZkOx6H-GIcowUzXWgbYAdG3wI0FDc3nNYaVvImnKD4TbQjVm00BcUNSgrg1tEGNx-LtnOkzmm15xQfw0I40KVf1HF3wlE7CTdMSzDlEWC5g51U9xAzOE3CzLa_M3NSxgvMZ7kmCk2ZDTKSA">
        </form>


        <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button"
          href="#">
          Manage optional proficiencies
        </a>
        <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button"
          href="#">
          Request proficiency confirmation
        </a>

        <a class="nhsuk-button nhsuk-button--secondary" role="button"
          href="#">
          Export to Excel
        </a>


        <p><span role="alert">{{ proficiencyCount }} matching proficiencies</span></p>

        <ProficiencyGroup v-for="group in proficiencyGroupArray" :group="group" :key="group['Competency group']" />

        <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button"
          href="#">
          Manage optional proficiencies
        </a>
        <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button"
          href="#">
          Request proficiency confirmation
        </a>

        <a class="nhsuk-button nhsuk-button--secondary" role="button"
          href="#">
          Export to Excel
        </a>



        <div class="nhsuk-panell competency-group-panel nhsuk-u-padding-4">
          <h2>Overall Progress</h2>
          <p class="nhsuk-body-l">
            <span class="score">Self assessed: 0 / {{ proficiencyCount }}</span>
            <span class="score">Confirmed: 0 / {{ proficiencyCount }}</span>
          </p>
          <h2>Educator/Manager Sign-off</h2>



          <p class="nhsuk-body-l">
            All required proficiency self-assessments must be completed and confirmed,
            before requesting Educator/Manager sign off of the Step 1 Proficiencies - National Proficiency Framework for
            Registered Nurses in Adult Critical Care.
          </p>
        </div>


      </main>
      <div v-if="!loaded" id="loading-spinner" class="loading-spinner" role="alert" aria-live="assertive">
        <p class="visually-hidden">Content is loading...</p>
        <div role="none" aria-hidden="true">
          <div class="center-this"></div>

          <div class="inner-spin">

            <div class="inner-arc inner-arc_start-a"></div>
            <div class="inner-arc inner-arc_end-a"></div>

            <div class="inner-arc inner-arc_start-b"></div>
            <div class="inner-arc inner-arc_end-b"></div>

            <div class="inner-moon-a"></div>
            <div class="inner-moon-b"></div>

          </div>

          <div class="outer-spin">

            <div class="outer-arc outer-arc_start-a"></div>
            <div class="outer-arc outer-arc_end-a"></div>

            <div class="outer-arc outer-arc_start-b"></div>
            <div class="outer-arc outer-arc_end-b"></div>

            <div class="outer-moon-a"></div>
            <div class="outer-moon-b"></div>

          </div>
        </div>
      </div>

    </div>
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
              <a class="nhsuk-footer__list-item-link" target="_blank"
                href="#">Accessibility <span
                  class="nhsuk-u-visually-hidden">(opens new browser window)</span></a>
            </li>
            <li class="nhsuk-footer__list-item">
              <a class="nhsuk-footer__list-item-link" href="#">Privacy <span
                  class="nhsuk-u-visually-hidden">(opens new browser window)</span></a>
            </li>
          </ul>
          <p class="nhsuk-footer__copyright">© Digital Learning Solutions, Health Education England 2022</p>
        </div>
      </div>
    </footer>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProficiencyGroup from '~/components/ProficiencyGroup.vue'

export default Vue.extend({
    name: "IndexPage",
    async asyncData({ params, $axios }) {
        const step1data = await $axios.$get(`https://www.dropbox.com/s/gxw234xoy8waeyq/step1-output.json?dl=1`);
        const loaded = true;

        const proficiencyGroupArray = step1data.reduce((r: any,c: any) => {
          r[c['Competency group']] = r[c['Competency group']] || []
          r[c['Competency group']].push(c)
          return r
        }, Object.create(null))

        const proficiencyCount = step1data.length

        return {
            proficiencyGroupArray,
            proficiencyCount,
            loaded
        };
    },
    components: { ProficiencyGroup }
})
</script>

<style>
@import 'assets/css/selfAssessment.css';

.nhsuk-expander[open] details.nhsuk-details[open] .nhsuk-details__summary-text::before {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
  border-width: 12.124px 7px 0 7px;
  border-top-color: inherit;
}

.nhsuk-details[open] .nhsuk-details .nhsuk-details__summary-text::before {
  bottom: 0;
  content: "";
  left: 0;
  margin: auto;
  position: absolute;
  top: 0;
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  border-width: 7px 0 7px 12.124px;
  border-left-color: inherit;
}
</style>
