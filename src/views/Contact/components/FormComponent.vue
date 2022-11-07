<script setup lang="ts">
import Btn from "@/components/BtnComponent.vue";
</script>

<template>
  <form class="form">
    <div class="form__item">
      <div class="form__title">
        お問い合わせ種別<span class="form__require">*必須</span>
      </div>
      <span class="form__radio">
        <input
          type="radio"
          id="type01"
          name="type"
          value="お仕事のご依頼・ご相談"
          checked
        />
        <label for="type01">お仕事のご依頼・ご相談</label>
      </span>
      <span class="form__radio">
        <input type="radio" id="type02" name="type" value="お見積りのご依頼" />
        <label for="type02">お見積りのご依頼</label>
      </span>
      <span class="form__radio">
        <input type="radio" id="type03" name="type" value="採用について">
        <label for="type03">採用について</label>
      </span>
      <span class="form__radio">
        <input type="radio" id="type04" name="type" value="その他">
        <label for="type04">その他</label>
      </span>
    </div>

    <div class="form__item">
      <label for="name" class="form__title">
        お名前<span class="form__require">*必須</span>
      </label>
      <input type="text" id="name" name="name" required class="form__input" />
    </div>

    <div class="form__item">
      <label for="company" class="form__title">
        会社名<span class="form__require">*必須</span>
      </label>
      <input
        type="text"
        id="company"
        name="company"
        required
        class="form__input"
      />
    </div>

    <div class="form__item">
      <label for="email" class="form__title">
        メールアドレス<span class="form__require">*必須</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        class="form__input"
      />
    </div>

    <div class="form__item">
      <label for="tel" class="form__title">
        電話番号<span class="form__note">（半角数字ハイフンなし）</span>
      </label>
      <input type="tel" id="tel" name="tel" class="form__input" />
    </div>

    <div class="form__item">
      <label for="comment" class="form__title">お問い合わせ内容</label>
      <textarea
        id="comment"
        name="comment"
        placeholder="お問い合わせ内容を具体的にご記入くださいませ。"
        class="form__textarea"
      ></textarea>
    </div>

    <div class="form__item">
      <label for="job" class="form__title">
        PON DESIGNをどちらでお知りになりましたか？
        <span class="form__require">*必須</span>
      </label>
      <select id="job" name="job" required class="form__select">
        <option value="">選択してください</option>
        <option value="Google/Yahoo検索">Google/Yahoo検索</option>
        <option value="SNS">SNS</option>
        <option value="ブログ">ブログ</option>
        <option value="友人や知人">友人や知人</option>
        <option value="その他">その他</option>
      </select>
    </div>

    <div class="form__btn">
      <Btn type="B">送信する</Btn>
    </div>
  </form>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.form {
  &__item {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  &__title {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  &__note {
    font-weight: normal;
    margin-left: 5px;

    @include font-size(12);
  }

  &__require {
    margin-left: 10px;
    color: $color-primary;

    @include font-size(12);
  }

  &__radio {
    // $break4: 768;
    @include mq(u-br4) {
      display: block;
    }
    &:not(:last-child) {
      margin-right: 35px;

      // $break4: 768;
      @include mq(u-br4) {
        margin-right: 0;
        margin-bottom: 5px;
      }
    }
  }

  input[type="radio"] {
    margin-right: 5px;
    border: 1px solid #333;
    border-radius: 50%;
  }

  &__input,
  &__select {
    width: 300px;
    padding: 8px;
    border: solid 1px #aaa;
    border-radius: 5px;
    background-color: #fff;

    // $break4: 768;
    @include mq(u-br4) {
      width: 100%;
    }
  }

  input[type="tel"] {
    width: 200px;

    // $break4: 768;
    @include mq(u-br4) {
      width: 100%;
    }
  }
  &__textarea {
    min-width: 600px;
    min-height: 200px;
    padding: 8px;
    resize: both;
    border: solid 1px #aaa;
    border-radius: 5px;
    background-color: #fff;

    // $break4: 768;
    @include mq(u-br4) {
      width: 100%;
      min-width: 100%;
    }
  }

  &__btn {
    margin-top: 50px;
    text-align: center;
  }
}
</style>
