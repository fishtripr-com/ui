<template>
  <transition name="basic-modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-body">
          <slot class="body-content" name="body" />
        </div>
        <button class="close-button" @click="$emit('close')">&#10005;</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'basic-modal',
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/main';

.modal-mask {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 90;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 70%;
  height: 70%;
  background-color: black;

  @media #{$large-and-down} {
    width: 70%;
    height: 70%;
  }
  @media #{$medium-and-down} {
    width: 70%;
    height: 70%;
  }
  @media #{$small-and-down} {
    width: 95%;
    height: 50%;
  }
}

.close-button {
  position: absolute;
  background: rgba(0, 0, 0, 0.005);
  color: white;
  top: 2%;
  right: 1%;
  border: 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
