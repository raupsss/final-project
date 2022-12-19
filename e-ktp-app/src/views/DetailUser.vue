<template>
  <div>
    <section class="content-header">
      <div class="container">
        <button
          type="button"
          class="btn btn-danger"
          data-toggle="modal"
          data-target="#form"
        >
          See Modal with Form
        </button>
      </div>
      <div
        class="modal fade"
        id="form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div class="form-group">
                  <label for="email1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >Your information is safe with us.</small
                  >
                </div>
                <div class="form-group">
                  <label for="password1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="password1">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password2"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div
                class="modal-footer border-top-0 d-flex justify-content-center"
              >
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataUser: {
        nama: null,
        email: null,
        password: null,
      },
      success: false,
      isDisabled: true,
    };
  },
};
</script>

<style lang="scss" scoped>
$grey: #f5f5f5;
$dark-grey: #323b40;

$light-blue: #e0f5ff;
$blue: #b9e5fe;
$dark-blue: #00a5fa;

$green: #b7e0dc;
$dark-green: #019888;

$lime: #c7e8c8;
$dark-lime: #42b045;

$yellow: #ffeeba;
$dark-yellow: #ff9901;

$pink: #fabad0;
$dark-pink: #ef075f;

$red: #fec9c6;
$dark-red: #fd3d08;

@mixin color-div($color1, $color2) {
  background-color: $color1;
  color: $color2;
}

.container {
  padding: 2rem 0rem;
}

h4 {
  margin: 2rem 0rem;
}

.panel {
  border-radius: 4px;
  padding: 1rem;
  margin-top: 0.2rem;

  @include color-div($grey, $dark-grey);

  &.panel-blue {
    @include color-div($light-blue, $dark-blue);
  }

  &.panel-big-height {
    min-height: 150px;
  }
}

.item {
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0.2rem;

  &.item-blue {
    @include color-div($blue, $dark-blue);
  }

  &.item-green {
    @include color-div($green, $dark-green);
  }

  &.item-lime {
    @include color-div($lime, $dark-lime);
  }

  &.item-yellow {
    @include color-div($yellow, $dark-yellow);
  }

  &.item-pink {
    @include color-div($pink, $dark-pink);
  }

  &.item-red {
    @include color-div($red, $dark-red);
  }

  &.item-big-width {
    min-width: 380px;
  }
}
</style>