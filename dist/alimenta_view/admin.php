<html ng-app="xapp">

<html lang="en">
<head>




    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"></script>
    <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script type="text/javascript" src="admin.js"></script>
</head>
<body ng-controller="xctrl">
    <div class="w3-sidebar w3-black w3-bar-block" style="width:15%">
        <img class="w3-bar-item" src="assets/alimenta.jpg" alt="" style="width: 50%; margin-left: 25%;">
        <p style="margin-bottom: -3%; margin-left: 30%;" >Alimenta</p>
        <a href="#" class="w3-bar-item w3-button w3-border-bottom w3-padding-large" style="margin-top: 15%;" ng-click="klik_akun()">Akun</a>
        <a href="#" class="w3-bar-item w3-button w3-border-bottom w3-padding-large" ng-init="clickAccount = false;" ng-click="klik_pr()">Produk</a>
        <a href="#" class="w3-bar-item w3-button w3-border-bottom w3-padding-large">Tentang Kami</a>
      </div>
      
      <div style="margin-left:15%">

        <div class="w3-container w3-dark-grey">
            <p>admin</p>
        </div>
        
        
        <div id="akun" class="w3-container" >
            <h3 style="color: red; font-weight: bolder;">AKUN</h3>
            <div class="w3-col l1">
                <p>Email    </p>
            </div>
            <div class="w3-col l11">
                <p>: Alimenta@gmail.com</p>

            </div>
            <div class="w3-col l1">
                <p>Password    </p>
            </div>
            <div class="w3-col l2">
                <p>: qwertyuiop</p>

            </div>

        </div>

        <div id="pr" class="w3-container" style="display: none;">
            <h3 style="color: red; font-weight: bolder;">Product</h3>
            <div class="w3-col l2">
                <h4 class=" w3-blue w3-center">Tabel Produk</h4>
            </div>
            <div class="w3-container" style="margin-top: 10%;" >
                <table class="w3-table-all w3-striped w3-center" >
                    <tr class="w3-border w3-center" >
                        <th class="w3-col l4 w3-center">Kategori Sarung</th>
                        <th class="w3-col l4 w3-center">gambar</th> 
                        <th class="w3-col l4 w3-center">Aksi</th>
                     </tr>
                     <tr ng-repeat="x in databarang">
                        <td class="w3-col l4 w3-center">{{x.jenis}} </td>
                        <td class="w3-col l4 w3-center"><img src="{{x.gambar}}" alt="" style="width: 50%;"></td>
                        <td class="w3-col l4 w3-center" >
                            <a class=" w3-button w3-blue" style="font-size: 10px;" ng-click="klik_tambah()">tambah </a>
                            <a class=" w3-button w3-blue" style="font-size: 10px;" ng-click="klik_edit()">edit </a>
                            <a class=" w3-button w3-blue" style="font-size: 10px;">hapus </a>
                        </td>
                     </tr>
                </table>

            </div>


        </div>
        <div id="tambah" class="w3-container" style="display: none;">
            <div class="w3-container">
                <h3 style="color: red; font-weight: bolder;">Tambah Sarung</h3>
            </div>
            <div class="w3-container">
                <div class="w3-card-4 ">
    
                    <div class="w3-container w3-green">
                      <h4>Masukkan data sarung</h4>
                    </div>
                    
                    <form class="w3-container w3-padding">
                    
                    <label>Jenis Sarung</label>
                    <input class="w3-input" type="text">
                    
                    <label>Gambar</label>
                    <input class="w3-input" type="file">
                    <div class="w3-container w3-padding">
                        <a class="w3-button w3-blue w3-right">Kirim</a>
    
                    </div>
                    </form>
                    
                    </div>
            </div>
        </div>

        <div id="edit" class="w3-container" style="display: none;">
            <div class="w3-container">
                <h3 style="color: red; font-weight: bolder;">Edit Sarung</h3>
            </div>
            <div class="w3-container">
                <div class="w3-card-4 ">
    
                    <div class="w3-container w3-green">
                      <h4>Masukkan data sarung</h4>
                    </div>
                    
                    <form class="w3-container w3-padding">
                    
                    <label>Jenis Sarung</label>
                    <input class="w3-input" type="text">
                    
                    <label>Gambar</label>
                    <input class="w3-input" type="file">
                    <div class="w3-container w3-padding">
                        <a class="w3-button w3-blue w3-right">Kirim</a>
    
                    </div>
                    </form>
                    
                    </div>
            </div>
        </div>
        
        </div>
</body>
</html>