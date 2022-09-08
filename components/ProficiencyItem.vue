<template>
  <tbody class="nhsuk-table__body row-outer" :id="'comp-' + index">
    <tr role="row" class="nhsuk-table__row first-row">
      <td role="cell" rowspan="1" class="nhsuk-table__cell">

        <div v-if="proficiency['Purple (supernumerary competency)'] == 'Yes'" class="nhsuk-u-margin-bottom-3">
          <span class="nhsuk-u-padding-right-2 nhsuk-u-padding-left-4">
            <strong class="nhsuk-tag nhsuk-tag--purple">
              Supernumerary
            </strong>
          </span>
        </div>

        <details class="nhsuk-details">
          <summary class="nhsuk-details__summary">
            <p class="nhsuk-u-margin-bottom-0">
              <span class="nhsuk-table-responsive__heading">Proficiency </span>
              <span class="nhsuk-details__summary-text">
                {{ proficiency['Competency name'] }}
              </span>
            </p>
          </summary>
          <div class="nhsuk-details__text nhsuk-u-margin-left-6 nhsuk-u-margin-top-2"
            v-html="proficiency['Competency description']">
          </div>
        </details>
      </td>

      <td role="cell" class="nhsuk-table__cell nhsuk-u-font-size-16">
        <span class="nhsuk-table-responsive__heading">Questions </span>
        {{ getQuestion(proficiency['Competency description']) }}
      </td>
      <td role="cell" class="nhsuk-table__cell nhsuk-u-font-size-16">
        <span class="nhsuk-table-responsive__heading">Self-assessment status </span>

        <span class="nhsuk-u-font-weight-bold status-tag"></span>

      </td>
      <td role="cell" class="nhsuk-table__cell nhsuk-u-font-size-16">
        <span class="nhsuk-table-responsive__heading">Questions </span>
        <span class="status-tag">

        </span>


      </td>

      <td role="cell" rowspan="1" class="nhsuk-table__cell nhsuk-u-font-size-16">
        <span class="nhsuk-table-responsive__heading">Action </span>
        <NuxtLink :to="'review/' + proficiency.index">
          Review
        </NuxtLink>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: {
    proficiency: Object,
    index: Number
  },
  methods: {
    getQuestion(desc) {
      if (desc.indexOf('<p>As a ') !== -1) {
        return "Do you agree to responsibilities laid out?"
      }
      else if (desc.indexOf('<p>You must be able to demonstrate through discussion') !== -1) {
        return "Knowledge achieved?"
      }
      else {
        return "Skill achieved?"
      }
    }
  }
}
</script>
