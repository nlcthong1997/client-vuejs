<template>
  <div class="chuyen-tien-noi-ngan-hang">
    <b-card title="Thông tin tài khoản">
      <div class="info">
        Kính chào quý khách <b class="info-name">Chí Thông</b>
        <br>
        <br>
      </div>
			<div class="content">
        <b-table hover :items="items"></b-table>
      </div>
		</b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { 'Thông tin': 'Tên tài khoản', 'Nội dung': 'Nguyen Lam Chi Thong' },
        { 'Thông tin': 'Số tài khoản', 'Nội dung': '333323235454' },
        { 'Thông tin': 'Số dư hiện tại', 'Nội dung': '0' },
        { 'Thông tin': 'Loại tiền tệ', 'Nội dung': 'VND' },
      ]
    }
  }
  
}
</script>

<style>
.info-name {
    color: green;
  }
</style>