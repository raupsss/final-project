<template>
  <div class="home">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </section>
    <app-success v-show="success" />
    <div v-show="!success">
      <section class="content-header">
        <div class="container-fluid px-lg-4">
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body border">
                  <h4 class="card-title">Jumlah Kartu Keluarga</h4>
                  <div class="d-flex justify-content-between mt-5">
                    <h1 class="card-text">
                      {{ dataKK.length }}
                    </h1>
                    <h1 class="fas fa-house-user"></h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body border">
                  <h4 class="card-title">Jumlah Seluruh Warga</h4>
                  <div class="d-flex justify-content-between mt-5">
                    <h1 class="card-text">{{ dataAnggota.length }}</h1>
                    <h1 class="fas fa-users"></h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body border">
                  <h4 class="card-title">Jumlah User</h4>
                  <div class="d-flex justify-content-between mt-5">
                    <h1 class="card-text">{{ dataUser.length }}</h1>
                    <h1 class="fas fa-user-cog"></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-header mt-5">
        <div class="container-fluid px-lg-4">
          <div class="d-flex justify-content-around">
            <h2 class="text-center mb-5">Data Kartu Keluarga</h2>
            <input
              v-model="search"
              class="form-control mr-sm-2 w-25"
              type="number"
              placeholder="Search"
            />
          </div>
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
                <th scope="col">Nomor KK</th>
                <th scope="col">Alamat</th>
                <th scope="col">Kota</th>
                <th scope="col">Kode Pos</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in cariNoKK"
                :key="index"
                class="text-center"
              >
                <th scope="row">{{ (index += 1) }}</th>
                <td>{{ item.nomor_kk }}</td>
                <td class="text-left">
                  {{
                    item.alamat +
                    ", " +
                    item.desa_kelurahan +
                    ", " +
                    item.kecamatan
                  }}
                </td>
                <td class="text-left">{{ item.kabupaten_kota }}</td>
                <td>{{ item.kode_pos }}</td>
                <td class="text-nowrap">
                  <router-link
                    :to="{ path: '/detailKK/' + item.id }"
                    type="submit"
                    class="btn btn-warning mr-1 text-white"
                  >
                    Detail
                  </router-link>
                  <button
                    type="submit"
                    class="btn btn-danger"
                    @click.prevent="deleteKK(item.id)"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="6" v-if="dataKK.length == 0">
                  <h1 class="text-center">Data Kosong</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import kartuKeluargaService from "@/services/ektpService";
import Swal from "sweetalert2";

export default {
  name: "HomeView",
  data() {
    return {
      dataKK: [],
      dataAnggota: [],
      dataUser: [],
      success: false,
      search: "",
    };
  },
  components: {},
  computed: {
    cariNoKK() {
      return this.dataKK.filter((item) =>
        String(item.nomor_kk).includes(this.search)
      );
    },
  },
  methods: {
    getAllKK() {
      kartuKeluargaService
        .getAllKK()
        .then((response) => {
          this.dataKK = response.data;
          console.log(this.dataKK);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getAllAnggota() {
      kartuKeluargaService.getAllAnggota().then((response) => {
        this.dataAnggota = response.data;
        console.log(this.dataAnggota);
      });
    },

    getAllUser() {
      kartuKeluargaService
        .getAllUser()
        .then((response) => {
          this.dataUser = response.data;
          console.log(this.dataUser);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteKK(id) {
      Swal.fire({
        icon: "error",
        title: `Hapus data KK ini beserta anggotanya ?`,
        text: "Klik Cancel untuk Batal",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus",
      }).then((result) => {
        if (result.isConfirmed) {
          kartuKeluargaService
            .deleteKK(id)
            .then((response) => {
              console.log(response.data);
              kartuKeluargaService
                .deleteAllAnggota(id)
                .then((response) => {
                  console.log(response.data);
                })
                .catch((e) => {
                  console.log(e);
                });
            })
            .catch((e) => {
              console.log(e);
            });
          Swal.fire(
            "Terhapus !",
            "Data KK dan Anggotanya telah terhapus",
            "success"
          ).then(() => {
            location.reload();
          });
        }
      });
    },
  },

  mounted() {
    this.getAllKK();
    this.getAllAnggota();
    this.getAllUser();
  },
};
</script>

<style lang="scss" scoped>
</style>
