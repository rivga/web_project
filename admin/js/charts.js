/* global Chart */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v4.2.2): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

// random Numbers
const random = () => Math.round(Math.random() * 100);

// eslint-disable-next-line no-unused-vars
const lineChart = new Chart(document.getElementById('canvas-1'), {
  type: 'line',
  data: {
    labels: ['Ocak', 'Subat', 'Mart', 'Nisan', 'Mayis', 'Haziran', 'Temmuz'],
    datasets: [{
      label: '2022',
      backgroundColor: 'rgba(220, 220, 220, 0.2)',
      borderColor: 'rgba(220, 220, 220, 1)',
      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
      pointBorderColor: '#fff',
      data: [random(), random(), random(), random(), random(), random(), random()]
    }, {
      label: '2023',
      backgroundColor: 'rgba(151, 187, 205, 0.2)',
      borderColor: 'rgba(151, 187, 205, 1)',
      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
      pointBorderColor: '#fff',
      data: [random(), random(), random(), random(), random(), random(), random()]
    }]
  },
  options: {
    responsive: true
  }
});

// eslint-disable-next-line no-unused-vars
const barChart = new Chart(document.getElementById('canvas-2'), {
  type: 'bar',
  data: {
      labels: ['Ocak', 'Subat', 'Mart', 'Nisan', 'Mayis', 'Haziran', 'Temmuz'],
    datasets: [{
      label: '2022',
      backgroundColor: 'rgba(220, 220, 220, 0.5)',
      borderColor: 'rgba(220, 220, 220, 0.8)',
      highlightFill: 'rgba(220, 220, 220, 0.75)',
      highlightStroke: 'rgba(220, 220, 220, 1)',
      data: [random(), random(), random(), random(), random(), random(), random()]
    }, {
      label: '2023',
      backgroundColor: 'rgba(151, 187, 205, 0.5)',
      borderColor: 'rgba(151, 187, 205, 0.8)',
      highlightFill: 'rgba(151, 187, 205, 0.75)',
      highlightStroke: 'rgba(151, 187, 205, 1)',
      data: [random(), random(), random(), random(), random(), random(), random()]
    }]
  },
  options: {
    responsive: true
  }
});

// eslint-disable-next-line no-unused-vars
const doughnutChart = new Chart(document.getElementById('canvas-3'), {
  type: 'doughnut',
  data: {
    labels: ['Urun Geliri', 'Hizmet Geliri', 'Diger Gelirler'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  },
  options: {
    responsive: true
  }
});

// eslint-disable-next-line no-unused-vars
const radarChart = new Chart(document.getElementById('canvas-4'), {
  type: 'radar',
  data: {
    labels: ['Reklam Etkisi', 'Sezonluk Talep', 'Fiyat Rekabeti', 'Musteri Memnuniyeti', 'Pazarlama Stratejileri', 'Urun Kalitesi', 'Stok Yonetimi'],
    datasets: [{
      label: '2023',
      backgroundColor: 'rgba(220, 220, 220, 0.2)',
      borderColor: 'rgba(220, 220, 220, 1)',
      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
      pointBorderColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220, 220, 220, 1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    }, {
      label: '2022',
      backgroundColor: 'rgba(151, 187, 205, 0.2)',
      borderColor: 'rgba(151, 187, 205, 1)',
      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
      pointBorderColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151, 187, 205, 1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }]
  },
  options: {
    responsive: true
  }
});

// eslint-disable-next-line no-unused-vars
const pieChart = new Chart(document.getElementById('canvas-5'), {
  type: 'pie',
  data: {
    labels: ['Modern Avizeler', 'Antik Avizeler', 'Kristal Avizeler'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  },
  options: {
    responsive: true
  }
});

// eslint-disable-next-line no-unused-vars
const polarAreaChart = new Chart(document.getElementById('canvas-6'), {
  type: 'polarArea',
  data: {
    labels: ['Malzeme Kalitesi', 'Tasarim Estetigi', 'Isik Yayma Performansi', 'Enerji Verimliligi', 'Fonksiyonel Cesitlilik'],
    datasets: [{
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
    }]
  },
  options: {
    responsive: true
  }
});
//# sourceMappingURL=charts.js.map