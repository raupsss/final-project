import http from "@/http-common";

class ektpService {

    // ===== KARTU KELUARGA =====

    getAllKK() {
        return http.get("kartuKeluarga/getAllKK");
    }

    addKK(data) {
        return http.post("kartuKeluarga/addKK", data);

    }

    updateKK(id, data) {
        return http.put(`kartuKeluarga/updateKK/${id}`, data);

    }

    deleteKK(id) {
        return http.delete(`kartuKeluarga/deleteKK/${id}`);

    }

    getKK(id) {
        return http.get(`kartuKeluarga/getKK/${id}`);
    }




    // ===== LIST ANGGOTA KELUARGA =====

    getAllAnggota() {
        return http.get("anggotaKeluarga/getAllAnggota");
    }

    addAnggota(data) {
        return http.post("anggotaKeluarga/addAnggota", data);
    }

    updateAnggota(id, data) {
        return http.put(`anggotaKeluarga/updateAnggota/${id}`, data);
    }

    deleteAnggota(id) {
        return http.delete(`anggotaKeluarga/deleteAnggota/${id}`);
    }

    getAnggota(id) {
        return http.get(`anggotaKeluarga/getAnggota/${id}`);
    }

    getIdKK(id_kk) {
        return http.get(`anggotaKeluarga/getIdKK/${id_kk}`);
    }

    deleteAllAnggota(id_kk) {
        return http.delete(`anggotaKeluarga/deleteAllAnggota/${id_kk}`)
    }


    // ================== USER =================

    login(data) {
        return http.post("user/login", data);
    }

    addUser(data) {
        return http.post("user/addUser", data);
    }

    getAllUser() {
        return http.get("user/getAllUser");
    }

    getUser(id) {
        return http.get(`user/getUser/${id}`);
    }

    deleteUser(id) {
        return http.delete(`user/deleteUser/${id}`);
    }

    updateUser(id, data) {
        return http.put(`user/updateUser/${id}`, data);
    }

    cekEmail(data) {
        return http.post(`user/cekEmail`, data);
    }

}

export default new ektpService();