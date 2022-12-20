<template>
  <section>
    <clViewWindow showBtnBox>
      <div class="content">这个是显示的内容</div>
      <template #hide>这个是隐藏的内容</template>
    </clViewWindow>
  </section>
</template>

<style>
.content {
  padding: 20px;
}
</style>
