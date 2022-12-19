<template>
  <div>
    <section class="content-header">
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-6">
            <h1>User</h1>
          </div>
        </div>
        <div class="container-fluid px-lg-4">
          <h2 class="text-center mb-5">Data User Aktif</h2>
          <table
            class="
              table table-striped table-hover
              bg-white
              border border-rounded
            "
          >
            <thead class="text-center text-nowrap">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in dataUser"
                :key="index"
                class="text-center"
              >
                <th scope="row">{{ (index += 1) }}</th>
                <td>{{ item.nama }}</td>
                <td class="text-center">
                  {{ item.email }}
                </td>
                <td class="text-nowrap">
                  <button
                    @click="getUser(item.id)"
                    type="button"
                    class="btn btn-warning mr-1 text-white"
                    data-toggle="modal"
                    data-target="#form"
                  >
                    Detail
                  </button>
                  <button
                    type="submit"
                    class="btn btn-danger"
                    @click.prevent="deleteUser(item.id, item.nama)"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="6" v-if="dataUser.length == 0">
                  <h1 class="text-center">Data Kosong</h1>
                </td>
              </tr>
            </tbody>
          </table>
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
                <h5 class="modal-title" id="exampleModalLabel">User Detail</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  @click="close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="nama">Nama</label>
                    <input
                      :disabled="isDisabled"
                      v-model="dataDetailUser.nama"
                      type="text"
                      class="form-control"
                      id="nama"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password1">Email</label>
                    <input
                      :disabled="isDisabled"
                      v-model="dataDetailUser.email"
                      type="email"
                      class="form-control"
                      id="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      :disabled="isDisabled"
                      v-model="dataDetailUser.password"
                      type="password"
                      class="form-control"
                      id="password"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-warning ml-3"
                  @click="updateButton"
                  v-show="!update"
                >
                  Update
                </button>
                <div
                  class="
                    modal-footer
                    border-top-0
                    d-flex
                    justify-content-center
                  "
                >
                  <button
                    type="submit"
                    class="btn btn-success"
                    @click.prevent="updateUser(dataDetailUser.id)"
                    v-show="update"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import userService from "@/services/ektpService";
export default {
  data() {
    return {
      dataUser: [],
      dataDetailUser: {
        nama: null,
        email: null,
        password: null,
      },
      success: false,
      isDisabled: true,
      update: false,
    };
  },
  methods: {
    getAllUser() {
      userService
        .getAllUser()
        .then((response) => {
          this.dataUser = response.data;
          console.log(this.dataUser);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteUser(id, nama) {
      this.$confirm(
        `Apakah Anda yakin ingin menghapus ${nama} dari User `
      ).then(() => {
        userService
          .deleteUser(id)
          .then((response) => {
            console.log(response.data);
            location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      });
    },

    getUser(id) {
      userService
        .getUser(id)
        .then((response) => {
          this.dataDetailUser = response.data;
          console.log(this.dataDetailUser);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateUser(id) {
      let data = this.dataDetailUser;
      userService
        .updateUser(id, data)
        .then((response) => {
          console.log(response.data);
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateButton() {
      this.update = true;
      this.isDisabled = false;
    },
    close() {
      this.update = false;
      this.isDisabled = true;
    },
  },

  mounted() {
    this.getAllUser();
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