<template>
  <div class="nhsuk-card nhsuk-card--clickable">
    <div class="nhsuk-card__content">
      <h2 class="nhsuk-card__heading nhsuk-heading-m nhsuk-u-margin-bottom-2">
          <a class="nhsuk-card__link" :href="`/discussions/${slug}`">
            {{ title }}
            <span class="nhsuk-u-font-size-19">({{ postCount }} comments)</span>
          </a>
        </h2>
      <div class="discussion__info">
        <p class="nhsuk-body-s nhsuk-u-margin-bottom-2">Started on <b>{{ created }}</b></p>
        <p class="nhsuk-body-s nhsuk-u-margin-bottom-2">Participants: <b>{{ participantsList }}</b></p>
        <p class="nhsuk-u-margin-bottom-0">
          <span v-if="completed" class="nhsuk-tag nhsuk-tag--red">
            Closed at {{ completedAt }} by {{ completedBy }}
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
    },
    participants: Array,
    postCount: Number
  },
  computed: {
    participantsList() {
      if (this.participants && this.participants.length > 0)
      {
        return this.participants.join(', ')
      }
      else {
        return 'none'
      }
    }
  }
}
</script>
