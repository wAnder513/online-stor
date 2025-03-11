<template>
  <footer class="footer">
    <div class="container footer_content">
      <div class="footer_brand">Brand Name</div>
      <div class="footer_author">
        <span>Разработчик</span>
        <a
          class="footer_author-link"
          href="https://ekaterinburg.hh.ru/resume/8a94d42bff074927a10039ed1f73774b794845"
          target="_blank"
          >Задков Кирилл</a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.footer {
  background-color: $text-color;

  .footer_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer_author {
    display: flex;
    flex-direction: column;
  }

  .footer_brand {
    font-size: 32px;
    font-weight: 700;
    color: $text-color;
  }

  .footer_brand,
  .footer_author,
  .footer_author-link {
    color: $white;
  }
}
</style>
