<template>
  <div class="nhsuk-card nhsuk-card--clickable">
    <div class="nhsuk-card__content">
      <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" :href="`/discussions/${slug}`">
            {{ title }}
          </a>
        </h2>
      <div class="discussion__info">
        <p class="nhsuk-body-s">Started on <b>{{ created }}</b></p>
        <p>
          <span v-if="completed" class="nhsuk-tag nhsuk-tag--red">
            Completed at {{ completedAt }} by {{ completedBy }}
          </span>
          <span v-else class="nhsuk-tag nhsuk-tag--green">
            Open discussion
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slug: String,
    title: String,
    completed: Boolean,
    created: String,
    completedAt: {
      type: String,
      default: ''
    },
    completedBy: {
      type: String,
      default: ''
    }
  }
}
</script>
