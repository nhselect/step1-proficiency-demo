<template>
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
              placeholder="Search" autocomplete="off" disabled="true">
            <button class="nhsuk-button search-submit" type="submit"
              formaction="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20"
                aria-hidden="true" focusable="false" disabled="true">
                <path
                  d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z">
                </path>
              </svg>
              <span class="nhsuk-u-visually-hidden">Search</span>
            </button>
          </div>
        </div>
        <div class="filter-value-container">
          <select aria-label="ResponseStatus filter" class="nhsuk-select filter-dropdown" data-val="true" disabled="true"
            data-val-required="The SelectedFilter field is required." id="SelectedFilter" name="SelectedFilter">
            <option value="-8">Requires self assessment</option>
            <option value="-7">Self-assessed (confirmation not yet requested)</option>
            <option value="-6">Confirmation requested</option>
            <option value="-5">Confirmed</option>
            <option value="-4">Confirmation rejected</option>
            <option value="1">Purple: Supernumerary</option>
          </select>
          <button type="submit" class="nhsuk-button filter-submit" style="width:20%;"
            formaction="" disabled="true">
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


      <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button" href="#" disabled="true"> 
        Manage optional proficiencies
      </a>
      <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button" href="#" disabled="true">
        Request proficiency confirmation
      </a>

      <a class="nhsuk-button nhsuk-button--secondary" role="button" href="#" disabled="true">
        Export to Excel
      </a>


      <p><span role="alert">{{ proficiencyCount }} matching proficiencies</span></p>

      <ProficiencyGroup v-for="group in proficiencyGroupArray" :group="group" :key="group['Competency group']" />

      <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button" href="#" disabled="true">
        Manage optional proficiencies
      </a>
      <a class="nhsuk-button nhsuk-button--secondary trigger-loader" role="button" href="#" disabled="true">
        Request proficiency confirmation
      </a>

      <a class="nhsuk-button nhsuk-button--secondary" role="button" href="#" disabled="true">
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

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProficiencyGroup from '~/components/ProficiencyGroup.vue'

export default Vue.extend({
  name: "IndexPage",
  computed: {
    proficiencyGroupArray() {
      const step1data = this.$store.state.proficiencies

      return step1data.reduce((r: any, c: any) => {
        r[c['Competency group']] = r[c['Competency group']] || []
        r[c['Competency group']].push(c)
        return r
      }, Object.create(null))
    },
    proficiencyCount() {
      return this.$store.state.proficiencies.length
    }
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

#maincontentwrapper {
  margin: 0 auto;
}
</style>
