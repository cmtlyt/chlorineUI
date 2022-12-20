<template>
  <section>
    <clViewWindow showBtnBox>
      <div class="content">这个是显示的内容</div>
      <template #hide>这个是隐藏的内容</template>
      <template #btns>
        <div class="btns">自定义的<clButton @click.stop="clickHander">按钮</clButton>栏</div>
      </template>
    </clViewWindow>
  </section>
</template>

<script>
export default{
  methods:{
    clickHander(){
      alert('点击了按钮')
    }
  }
}
</script>

<style>
.content {
  padding: 20px;
}
.btns{
  box-sizing: border-box;
  padding: 10px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
