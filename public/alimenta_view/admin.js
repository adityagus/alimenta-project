
var app = angular.module('xapp', []);
app.controller('xctrl', function ($scope) {
  
    $scope.klik_tambah =function(){
         document.getElementById("tambah").style.display="block";
         document.getElementById("pr").style.display="none";
         document.getElementById("akun").style.display="none";
         document.getElementById("edit").style.display="none";

    }
    $scope.klik_akun =function(){
        document.getElementById("akun").style.display="block";
        document.getElementById("pr").style.display="none";
        document.getElementById("tambah").style.display="none";
        document.getElementById("edit").style.display="none";

   }
   $scope.klik_pr =function(){
    document.getElementById("akun").style.display="none";
    document.getElementById("pr").style.display="block";
    document.getElementById("tambah").style.display="none";
    document.getElementById("edit").style.display="none";

}
$scope.klik_edit =function(){
    document.getElementById("akun").style.display="none";
    document.getElementById("pr").style.display="none";
    document.getElementById("tambah").style.display="none";
    document.getElementById("edit").style.display="block";

}
    console.log("hai")
    $scope.clickAccount = false;
    $scope.tesCsr = function(){
        $scope.clickAccount = true;
        console.log($scope.clickAccount);
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
});




