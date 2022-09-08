<template>
  <div class="nhsuk-width-container" id="maincontentwrapper">
    <main class="nhsuk-main-wrapper" id="maincontent" tabindex="-1">
      <h1 class="competency-group-header nhsuk-u-font-size-32">
        {{ proficiencyItem['Competency group'] }}
      </h1>
      <div class=" nhsuk-u-margin-top-8 nhsuk-u-margin-bottom-4">
        <h2 class="nhsuk-u-margin-bottom-0 nhsuk-u-font-size-24">
          {{ proficiencyItem['Competency name'] }}
        </h2>
        <p class="nhsuk-body-l"></p>
        <div v-html="proficiencyItem['Competency description']"></div>
        <p></p>
      </div>
      <div v-if="proficiencyItem['Purple (supernumerary competency)'] == 'Yes'" class="nhsuk-u-margin-bottom-3">
          <span class="nhsuk-u-padding-right-2">
            <strong class="nhsuk-tag nhsuk-tag--purple">
              Supernumerary
            </strong>
          </span>
        </div>

      <form>
        <div class="nhsuk-form-group">

          <h3 class="nhsuk-u-margin-bottom-1">{{ questionText }}</h3>
          <div v-if="proficiencyItem.index > 3" class="nhsuk-hint">
            <p>If you have selected `Ongoing assessment`, please include your action plan below</p>
          </div>
          <div class="nhsuk-radios nhsuk-u-margin-bottom-3 nhsuk-u-margin-top-3">
            <div
              v-for="option in questionOptions"
              :key="option"
              class="nhsuk-radios__item"
            >
              <input class="nhsuk-radios__input select-all-checkbox" name="[0].Result" id="radio-11-1"
                data-group="group11" type="radio" value="1" aria-describedby="radio-11-1-item-hint" disabled="true">
              <label class="nhsuk-label nhsuk-radios__label" for="radio-11-1">
                {{ option }}
              </label>
              <div class="nhsuk-hint nhsuk-radios__hint" id="radio-11-1-item-hint">

              </div>
            </div>
          </div>
          <div name="clearButton" class="js-only-inline nhsuk-u-margin-top-1 nhsuk-u-margin-bottom-3">
            <a class="deselect-all" href="javascript:void(0);" data-group="group11" name="selectAll" value="true">
              Clear selection
            </a>
          </div>
          <input hidden="" name="[0].Id" value="11">

        </div>
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="tb-supportingComments-11"><span class="nhsuk-u-visually-hidden">{{ questionText }}</span>
            Action Plan
          </label>
          <textarea class="nhsuk-input text-area-edit-90" placeholder="Optional" id="tb-supportingComments-11"
            name="[0].SupportingComments" type="text" disabled="true"></textarea>
        </div>

        <input type="hidden" name="competencyGroupId" value="36">
        <div class="nhsuk-u-margin-top-4">
          Question {{ proficiencyItem.index }} of {{ proficiencyCount }}
        </div>
        <NuxtLink class="nhsuk-button nhsuk-u-margin-top-1" :to="nextLink">
          Save and continue
        </NuxtLink>
      </form>
      <div class="nhsuk-grid-row">
        <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
          <div class="nhsuk-pagination__list">
            <div class="pagination-button-container">
              <div class="nhsuk-pagination-item--previous">
                <NuxtLink 
                  class="nhsuk-back-link__link" 
                  :to="prevLink"
                >
                  <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z">
                    </path>
                  </svg>
                  Previous proficiency
                </NuxtLink>
              </div>
            </div>
            <div class="page-indicator-container">
              <NuxtLink class="nhsuk-back-link__link" to="/">
                Return to Proficiencies home
              </NuxtLink>
            </div>
            <div class="pagination-button-container">
              <div class="nhsuk-pagination-item--next">
                <NuxtLink class="nhsuk-back-link__link skip-link" :to="nextLink">
                  Skip
                  <svg class="nhsuk-icon nhsuk-icon__chevron-left" id="skip-arrow" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z">
                    </path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    
    const slug = params.slug || "index";

    const proficiencyItem = await $content('step1').where(
      { index: parseInt(slug) }
    ).fetch().then((r) => r[0])

    const proficiencyCount = await $content('step1').fetch().then((r) => r.length)

    const desc = proficiencyItem['Competency description']

    const questionText = (desc.indexOf('<p>As a ') !== -1) ? "Do you agree to responsibilities laid out?" : (desc.indexOf('<p>You must be able to demonstrate through discussion') !== -1) ? "Knowledge achieved?" : "Skill achieved?"

    const questionOptions = questionText === "Do you agree to responsibilities laid out?" ? ['Disagree','Agree'] : ['Achieved','Ongoing assessment']

    return { 
      proficiencyItem,
      proficiencyCount,
      questionText,
      questionOptions,
      slug
    }
  },
  computed: {
    prevLink() {
      return Math.max(parseInt(this.slug) - 1, 1).toString()
    },
    nextLink() {
      return Math.min(parseInt(this.slug) + 1, this.proficiencyCount).toString()
    }
  }
}
</script>

<style>
@import 'assets/css/selfAssessment.css';
@import 'assets/css/pagination.css';

#maincontentwrapper {
  margin: 0 auto;
}
</style>