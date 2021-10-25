const fs = require('fs')
const path = require('path')

class Validator {
  #cekKodeWilayah() {
    let kode_wilayah = JSON.parse(fs.readFileSync(path.join(__dirname, '/kode_wilayah.json')))
    
    let prov = kode_wilayah.provinsi.includes(this.kode_prov)
    let kabkot = kode_wilayah.kabupaten.includes(this.kode_kabkot)
    let kec = kode_wilayah.kecamatan.includes(this.kode_kec)

    return prov && kabkot && kec
  }
  
  #cekTglLahir() {
    let [day, month, year] = [this.tgl_lahir.slice(0,2), this.tgl_lahir.slice(2,4), this.tgl_lahir.slice(4,6)]
    day = day > 40 ? (day - 40) : day
    year = (20 + year) > new Date().getFullYear() ? (19 + year) : (20 + year)
    
    return !!Date.parse(`${year} ${month} ${day}`)
  }
  
  check(nik) {
    this.kode_prov = nik.slice(0,2)
    this.kode_kabkot = nik.slice(0,4)
    this.kode_kec = nik.slice(0,6)
    this.tgl_lahir = nik.slice(6,12)
    
    return nik.length === 16 && this.#cekKodeWilayah() && this.#cekTglLahir()
  }
}

module.exports = Validator