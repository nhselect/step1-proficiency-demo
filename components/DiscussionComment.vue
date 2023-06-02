<template>
  <div class="comment">
    <div>
      <span class="nhsuk-tag nhsuk-tag--blue">Posted by {{ postedBy }} on {{ postedAt }}:</span>
    </div>
    <div class="comment__content">
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postedAt: String,
    postedBy: String,
    index: Number,
    comment: String
  }
}
</script>