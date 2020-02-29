@include('partials._head')

<body>
  <div class="main-top" id="home">
    <!-- header -->

    <div class="headder-top fixed-top">
      <div id="logo">
        <h1>
          <a href="/"><img src="images/A1Abilities Logo Bha Sa12.png" alt="" width="220"></a>
        </h1>
      </div>
      <!-- nav -->
      <nav class="float-right">
        

        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop">
        <ul class="menu pt-4 pr-5">
          <li >
            <a href="#services">Services</a>
          </li>
           <li >
            <a href="#technology">Technology</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
         
            <a href="#goals">Goals</a>
          </li>
          <li>
            <!-- First Tier Drop Down -->
            <!--<label for="drop-2" class="toggle toogle-2">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span>
              </label>
              <a href="#">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
              <input type="checkbox" id="drop-2">
              <ul>
                <li><a href="gallery.html" class="drop-text">Gallery</a></li>
                <li><a href="menu.html" class="drop-text">Menu</a></li>
                <li><a href="recipe.html" class="drop-text">Recipes</a></li>
              </ul>
            </li>-->
          <li>
          <!-- <div id=portfolio> 
          <a name="portfolio">portfolio</a>-->
<!-- </div>  -->
            <a href="#portfolio">Portfolio</a>
          </li>
          <!-- <li>
            <a href="#blog">Blog</a>
          </li> -->
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      

       <div class="form-w3layouts-grid">
   
       <form action="#" method="post" class="newsletter">
          <div class="main-building" >
         
          </div>
          <div class="clearfix"></div>
        </form>
      </div> 
   
      
 

     </div>
      @yield('content')
   </div>

     
  <footer>
       @include('partials._footer')
  </footer>
</body>

</html>