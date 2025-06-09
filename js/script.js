// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// Ketika hamberger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar slidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Inisialisasi peta
    const map = L.map('map-container', {
      fullscreenControl: true // Aktifkan tombol fullscreen langsung di opsi map
    }).setView([-6.7321, 108.5523], 13);

// Simpan view awal untuk tombol home
const initialView = {
  center: [-6.7321, 108.5523],
  zoom: 13
};

// Tambahkan tombol Home
L.easyButton('<i class="fa fa-home"></i>', function(btn, map) {
  map.setView(initialView.center, initialView.zoom);
}, 'Kembali ke tampilan awal').addTo(map);

  // Basemap OSM
  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  });

  // Basemap Satelit (ESRI)
  const satelit = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles © Esri'
    }
  );

  // Tambahkan basemap default (OSM)
  osm.addTo(map);

  // Layer Control
  const baseMaps = {
    "OpenStreetMap": osm,
    "Satelit (ESRI)": satelit
  };
  L.control.layers(baseMaps).addTo(map);

 // Tambahkan kontrol lokasi (my location)
    L.control.locate({
      position: 'topleft',
      flyTo: true,
      strings: {
        title: "Tampilkan lokasi saya"
      },
      locateOptions: {
        enableHighAccuracy: true
      }
    }).addTo(map);
  // Marker dan Pop-up Informasi Keraton di Cirebon

// Keraton Kasepuhan
const keratonKasepuhan = L.marker([-6.7275, 108.5746]).addTo(map)
  .bindPopup(`
    <b>Keraton Kasepuhan</b><br>
    📍 Alamat: Jl. Kasepuhan No.43, Lemahwungkuk, Cirebon<br>
    🏰 Didirikan: Abad ke-15 oleh Pangeran Mas Mochammad Arifin II<br>
    📜 Asal Nama: "Kasepuhan" artinya yang tertua, karena ini adalah keraton tertua di Cirebon.
  `);

// Keraton Kanoman
const keratonKanoman = L.marker([-6.7272, 108.5765]).addTo(map)
  .bindPopup(`
    <b>Keraton Kanoman</b><br>
    📍 Alamat: Jl. Winaon, Kanoman, Cirebon<br>
    🏰 Didirikan: Tahun 1678 oleh Pangeran Mohamad Badridin (Sultan Anom I)<br>
    📜 Asal Nama: "Kanoman" berasal dari kata "Anom" yang berarti muda, sebagai pecahan dari Kasepuhan.
  `);

// Keraton Kacirebonan
const keratonKacirebonan = L.marker([-6.7246, 108.5751]).addTo(map)
  .bindPopup(`
    <b>Keraton Kacirebonan</b><br>
    📍 Alamat: Jl. Pulasaren, Pekalangan, Cirebon<br>
    🏰 Didirikan: Tahun 1807 oleh Pangeran Raja Kanoman<br>
    📜 Asal Nama: "Kacirebonan" karena letaknya dan garis keturunannya masih dari Cirebon. 
  `);

// Keraton Keprabonan
const keratonKeprabonan = L.marker([-6.7295, 108.5703]).addTo(map)
  .bindPopup(`
    <b>Keraton Keprabonan</b><br>
    📍 Alamat: Jl. Jagasatru, Keprabonan, Cirebon<br>
    🏰 Didirikan: Abad ke-17 oleh Pangeran Panembahan Carbon<br>
    📜 Asal Nama: "Keprabonan" berasal dari kata "prabu" atau raja, sebagai kediaman bangsawan keturunan Sunan Gunung Jati.
  `);
