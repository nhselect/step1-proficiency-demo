<template>
  <div class="nhsuk-panel competency-group-panel nhsuk-u-padding-0">
    <details class="nhsuk-details nhsuk-expander">
      <summary class="nhsuk-details__summary">
        <span class="competency-group-title nhsuk-details__summary-text">
          {{ group[0]['Competency group'] }}
        </span>
      </summary>
      <div class="nhsuk-details__text">

        <span class="score">
          Self assessed: 0 / {{ group.length }}
        </span>
        <span class="score">
          Confirmed: 0 / {{ group.length }}
        </span>
        <br>

        <table role="table" class="nhsuk-table-responsive nhsuk-u-margin-top-4">
          <thead role="rowgroup" class="nhsuk-table__head">
            <tr role="row">
              <th role="columnheader" class="" scope="col">
                Proficiency
              </th>
              <th role="columnheader" class="" scope="col">
                Question
              </th>
              <th role="columnheader" class="" scope="col">
                Self-assessment<br>status
              </th>
              <th role="columnheader" class="" scope="col">
                Confirmation<br>status
              </th>
              <th role="columnheader" class="" scope="col">
                <span class="nhsuk-u-visually-hidden">Actions</span>
              </th>
            </tr>
          </thead>

          <ProficiencyItem
            v-for="(proficiency, index) in group"
            :key="proficiency['ItemInternalId']"
            :proficiency="proficiency"
            :id="'comp-'+index"
          />
          
        </table>



      </div>
    </details>
    <div class="outer-score-container">

      <span class="score">
        Self assessed: 0 / {{ group.length }}
      </span>
      <span class="score">
        Confirmed: 0 / {{ group.length }}
      </span>
      <br>

    </div>
    <div class="outer-score-container nhsuk-u-padding-bottom-4">

    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: {
    group: Array
  }
}
</script>
