// import './resources/js/app.js';
// import './resources/js/app.js';

myApp.controller('UserController',['$scope', function($scope) {
  // Logika controller
  
  
  console.log('haloo data terlihat')
  
  window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000);    
}
$scope.loadmore = function (data) {
  var pr = data+3;
  console.log(data)
  for (let i = data; i < $scope.databarang.length; i++){
    if ( pr ==i) {
      break;
    }
    $scope.barang.push($scope.databarang[i]);
  }
  console.log(data);
}

$scope.kategori = [
  {
    "kategori": "Al anbiya exclusive"
  },
  {
    "kategori": "Al anbiya gold"
    
  },
  {
    "kategori": "Ramadhan dos"
  },
  {
    "kategori": "Semua"
  },
  
]


$scope.filter = function(category){
  $scope.filterBarang = []
  for(let i = 0; i< $scope.databarang.length; i++){
    if($scope.databarang[i].jenis == category){
      $scope.filterBarang.push($scope.databarang[i]);

    }else if(category == "Semua"){
      $scope.filterBarang = $scope.barang
    }
  }
}

$scope.semuadata = function(semua){
semua = $scope.barang;
console.log(semua)

}

$scope.barang = [
  {
    "gambar": "assets/Alanbiya_gold/1.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]
  },
  {
    "gambar": "assets/Alanbiya_gold/2.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/Alanbiya_gold/3.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
]
$scope.databarang = [
  {
    "gambar": "assets/Alanbiya_gold/1.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/Alanbiya_gold/2.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]
    

  },
  {
    "gambar": "assets/Alanbiya_gold/3.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/Alanbiya_gold/4.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/Alanbiya_gold/5.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/Alanbiya_gold/6.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/Alanbiya_gold/7.jpg",
    "jenis": "Al anbiya exclusive",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/anbiya_exclusive/1.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/anbiya_exclusive/2.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/3.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/anbiya_exclusive/4.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/anbiya_exclusive/5.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/6.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/anbiya_exclusive/7.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/8.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/9.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/10.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]
  },
  {
    "gambar": "assets/anbiya_exclusive/11.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/12.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/13.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/14.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/15.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/16.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/17.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/18.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/19.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/20.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/21.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/22.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/23.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/24.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/anbiya_exclusive/25.jpg",
    "jenis": "Al anbiya gold",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/ramadhan/1.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/ramadhan/2.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/ramadhan/3.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/ramadhan/4.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/ramadhan/5.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]


  },
  {
    "gambar": "assets/ramadhan/6.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/ramadhan/7.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/ramadhan/8.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
  {
    "gambar": "assets/ramadhan/9.jpg",
    "jenis": "Ramadhan dos",
    "deskripsi": [
      {
        "lis": "sarung p: 200cm L:120",
        "lis": "box 30x15"
      }
    ]

  },
]
$scope.filterBarang = $scope.barang
}]);

