@extends('main')

@section('title','| Homepage')

@section('content')



<div class="main-banner">
    <div class="container">
        <div class="mainer-left-grid">
            <div class="banner-right-txt bannersection">


                <h5 style="font-size:2.5rem;"> <span>A1Abilities</span> can help you because</h5>
                <div class="two-demo-button mt-lg-4 mt-md-3 mt-3">
                    <p class="mt-2" style="font-size:1.5rem !important;">
                        <span class="fa fa-arrow-right mr-2" aria-hidden="true"></span> We Understand our Customers...
                    </p>
                    <p class="mt-4" style="font-size:1.5rem !important;">
                        <span class="fa fa-arrow-right mr-2" aria-hidden="true"></span> We Believe in Quality...</p>
                    <p class="mt-4" style="font-size:1.5rem !important;">
                        <span class="fa fa-arrow-right mr-2" aria-hidden="true"></span> We Respect our People...</p>
                    <!-- <p class="mt-2" style="font-size:1.5rem !important;">
                <span class="fa fa-arrow-right mr-2" aria-hidden="true"></span> Mobile app development</p> -->
                </div>
                <!--<div class="view-buttn mt-lg-5 mt-md-4 mt-sm-4 mt-3">
              <a href="#blog" class="btn">Read More</a>-->
            </div>
        </div>
    </div>
</div>
</div>

<section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="services">
    <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span>Our</span> Services</h3>
        <div class="row">
            <div class="col-lg-12 about-grid-wthree">

                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-trophy" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null" src="{{URL::asset('images\do.png')}}"
                                    style="width: 49px;">
                            </div>
                            <h6>Software Product Development</h6>
                            <p class="text-dark text-justify pt-2">Product development requires meeting requirements
                                that are
                                constantly changing.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-clock-o" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null" src="{{URL::asset('images\images.png')}}"
                                    style="width: 45px;">
                            </div>
                            <h6>Web Application Development</h6>
                            <p class="text-dark text-justify pt-2">Web application development is the creation of
                                application
                                programs that reside on remote.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">

                                <img class="img-icon" alt="null" src="{{URL::asset('images\application.png')}}"
                                    style="width: 48px;">
                            </div>
                            <h6>Application Migration & Re-engineering</h6>
                            <p class="text-dark text-justify pt-2">Application migration is the process of moving an
                                application
                                program from one environment to another.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null" src="{{URL::asset('images\download (1).png')}}"
                                    style="width: 35px;">
                            </div>
                            <h6>Application Maintenance & Operation Support</h6>
                            <p class="text-dark text-justify pt-2">Application maintenance is the constant updating,
                                modifying and
                                re-assessing.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-trophy" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null" src="{{URL::asset('images\download.png')}}"
                                    style="width: 70px;">
                            </div>
                            <h6>Enterprise Application Integration</h6>
                            <p class="text-dark text-justify pt-2">Enterprise application integration is the process of
                                linking such
                                applications within a single organization together.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-clock-o" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null" src="{{URL::asset('images\client-server.png')}}"
                                    style="width: 70px;">
                            </div>
                            <h6>Client - Server Application Development</h6>
                            <p class="text-dark text-justify pt-2">The client-server model describes how a server
                                provides resources
                                and services.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">

                                <img class="img-icon" alt="null" src="{{URL::asset('images\download (3).png')}}"
                                    style="width: 50px;">
                            </div>
                            <h6>On-Premise and Cloud Application Development </h6>
                            <p class="text-dark text-justify pt-2">A web based app means that it uses web technologies
                                to interact with
                                the user.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null" src="{{URL::asset('images\Plan.png')}}">
                            </div>
                            <h6>Mobile Apps Development with iOS & Android </h6>
                            <p class="text-dark text-justify pt-2">Mobile application development is the process of
                                creating software
                                applications that run on a mobile.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>



<section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="technology" style="color: #daf1f8;
    background: currentColor;">
    <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span>Our</span> Technology</h3>
        <div class="row">
            <div class="col-lg-12 about-grid-wthree">

                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-trophy" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null" src="{{URL::asset('images\download.jpg')}}"
                                    style="width: 49px;">
                            </div>
                            <h6 class="text-dark">Microsoft.Net</h6>
                            <p class="text-dark text-justify pt-2">.NET Framework is a software framework developed by
                                Microsoft that runs primarily on Microsoft.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-clock-o" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null"
                                    src="{{URL::asset('images\kisspng-java-computer-icons-spring-framework-computer-soft-shark-mascot-logo-5b4a5d52081d00.1583260315316002100333.png')}}"
                                    style="width: 45px;">
                            </div>
                            <h6 class="text-dark">Java</h6>
                            <p class="text-dark text-justify pt-2">Java is a general-purpose programming language that
                                is
                                class-based, object-oriented, and designed to have as few implementation. </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">

                                <img class="img-icon" alt="null"
                                    src="{{URL::asset('images\salesforce-transparent-logo-11552506344tevn8avgmo.png')}}"
                                    style="width: 50px;">
                            </div>
                            <h6 class="text-dark">Salesforce</h6>
                            <p class="text-dark text-justify pt-2">Salesforce is the primary enterprise offering within
                                the Salesforce platform.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null" src="{{URL::asset('images\php.png')}}"
                                    style="width: 35px;">
                            </div>
                            <h6 class="text-dark">PHP</h6>
                            <p class="text-dark text-justify pt-2">PHP is a general-purpose programming language
                                originally
                                designed for web development.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-trophy" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null" src="{{URL::asset('images\biz.png')}}"
                                    style="width: 70px;">
                            </div>
                            <h6 class="text-dark">Biztalk</h6>
                            <p class="text-dark text-justify pt-2">Microsoft BizTalk Server (or simply "BizTalk")
                                is an Inter-Organizational Middleware System (IOMS). </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <!-- <span class="fa fa-clock-o" aria-hidden="true"></span> -->
                                <img class="img-icon" alt="null" src="{{URL::asset('images\sale.png')}}"
                                    style="width: 55px;">
                            </div>
                            <h6 class="text-dark">Sharepoint</h6>
                            <p class="text-dark text-justify pt-2">SharePoint is primarily sold as a document management
                                and
                                storage system, but the product is highly configurable .</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">

                                <img class="img-icon" alt="null" src="{{URL::asset('images\download (4).png')}}"
                                    style="width: 50px;">
                            </div>
                            <h6 class="text-dark">ios </h6>
                            <p class="text-dark text-justify pt-2">Apple iOS was originally called the iPhone OS but was
                                renamed
                                2010 to reflect the operating system's evolving support.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null" src="{{URL::asset('images\and.png')}}"
                                    style="width: 50px; color:#101638;">
                            </div>
                            <h6 class="text-dark">Android </h6>
                            <p class="text-dark pt-2">Android is a mobile operating system based on a modified
                                version of the Linux kernel and other open source software,</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null"
                                    src="{{URL::asset('images\hitachi-rail-italy-business-rail-transport-ansaldo-sts-logonext.png')}}"
                                    style="width: 60px;">
                            </div>
                            <h6 class="text-dark">hitachivantara (pentaho) </h6>
                            <p class="text-dark pt-2">Hitachi Vantara mainly offers storage solutions for enterprises
                                and midsize organizations.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null" src="{{URL::asset('images\pyth.png')}}"
                                    style="width: 50px;">
                            </div>
                            <h6 class="text-dark">Python </h6>
                            <p class="text-dark pt-2">Python is an interpreted, high-level, general-purpose programming
                                language.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null" src="{{URL::asset('images\node.png')}}"
                                    style="width: 50px;">
                            </div>
                            <h6 class="text-dark">Nodejs </h6>
                            <p class="text-dark pt-2">Node.js is an open-source, cross-platform, JavaScript
                                runtime environment.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null"
                                    src="{{URL::asset('images\pngtree-tech-icon-decoration-illustration-image_1392857.png')}}"
                                    style="width: 50px; ">
                            </div>
                            <h6 class="text-dark">Other technology </h6>
                            <p class="text-dark pt-2">Technology is the sum of techniques, skills, methods,
                                and processes used in the production of goods. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
    <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span>About</span> Company</h3>
        <div class="row">
            <div class="col-lg-7 about-grid-wthree">
                <p class="mb-lg-5 mb-md-4 mb-3">A1 Abilities has been contrived with the main motto of
                    enhancing the quality of living and businesses. We consistently endeavor to develop software
                    which are tailored finely as per the needs of our client community.</p>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <span class="fa fa-trophy" aria-hidden="true"></span>
                                <!-- <img class="img-icon" alt="null" src="{{URL::asset('images\smk.png')}}"> -->
                            </div>
                            <h6>Quality is our top Priority</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">
                                <span class="fa fa-clock-o" aria-hidden="true"></span>
                            </div>
                            <h6>On-Time Delivery</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid ">
                            <div class="about-icon mb-3">

                                <img class="img-icon" alt="null" src="{{URL::asset('images\client.png')}}">
                            </div>
                            <h6>Customer-Oriented Approach </h6>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 about-grid-grids my-3">
                        <div class="about-fashion-grid">
                            <div class="about-icon mb-3">
                                <img class="img-icon" alt="null" src="{{URL::asset('images\Plan.png')}}">
                            </div>
                            <h6>Clear and Transparent Process </h6>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-5 text-center">
                <!-- <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span>About</span> Company</h3> -->
                <img src="images/Team31.jpg" alt="news image" class="img-fluid pt-2">
            </div>
        </div>
    </div>
</section>
<!--//about -->
<!--Our Goals -->
<section class="our-goals" id="goals">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-5 service-grid-set text-center">
                <h3 class="title mb-lg-5 mb-sm-4 mb-4">
                    <span>Our</span> Goals</h3>
                <div class="row mb-lg-5 mb-sm-4 mb-3 my-3 ">
                    <div class="col-lg-2 col-md-3 col-sm-3">

                        <img class="img-icon" alt="null" src="{{URL::asset('images\46467.png')}}">

                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 goals-making-wthree">
                        <h4 class="Sub-txt-w3ls mb-2">To Excel our Technical Expertise</h4>
                        <p>We aim to be best in our technical knowledge and serve our clients with complete dedication.
                        </p>
                    </div>
                </div>
                <div class="row mb-lg-5 mb-sm-4 mb-3 my-3">
                    <div class="col-lg-2 col-md-3 col-sm-3">

                        <img class="img-icon" alt="null" src="{{URL::asset('images\challenge.png')}}">

                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 goals-making-wthree">
                        <h4 class="Sub-txt-w3ls mb-2">To Take Up Challenges</h4>
                        <p>We love to take difficult and challenging projects to test and prove our technical potential.
                        </p>
                    </div>
                </div>
                <div class="row mb-lg-5 mb-sm-4 mb-3 my-3">
                    <div class="col-lg-2 col-md-3 col-sm-3">

                        <img class="img-icon" alt="null" src="{{URL::asset('images\crowd.png')}}">

                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 goals-making-wthree">
                        <h4 class="Sub-txt-w3ls mb-2">To Stand Out of Croud</h4>
                        <p>We're different from our competitors and want our clients to be different from theirs.</p>
                    </div>
                </div>
                <div class="row mb-lg-5 mb-sm-4 mb-3 my-3">
                    <div class="col-lg-2 col-md-3 col-sm-3">

                        <img class="img-icon" alt="null" src="{{URL::asset('images\focus.png')}}">

                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 goals-making-wthree">
                        <h4 class="Sub-txt-w3ls mb-2">To Stay Client-Focused</h4>
                        <p>We strive to provide first-class service and bring a more personal approach to the project
                            development.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 w3layouts-make-goals">

            </div>
        </div>
    </div>
</section>


<section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="portfolio">
    <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span></span> Portfolio
        </h3>
        <div class="row gallery-info" style="width:100%;">
            <div class="col-lg-6 col-md-6 gallery-img-grid my-3">
            <a href="http://nubeselite.com/" target="_blank">
                <div class="gallery-grids">

                    
                        <img src="images/Nubeselite.png" alt="news image" class="img-fluid">
                    
                    <div class="new-projects-us mt-lg-4 mt-3">
                        <h6>
                            Nubeselite
                        </h6>
                        <p class="mt-lg-3 mt-2">NubesElite is one of the best sales force consulting and training
                            solution in Bangalore, offering various software courses.</p>
                    </div>
                </div>
                </a>
            </div>
            <div class="col-lg-6 col-md-6 gallery-img-grid my-3">
            <a href=" http://www.millennialcare.org.au/" target="_blank">
                <div class="gallery-grids">
                    
                        <img src="images/MillennialCare.png" alt="news image" class="img-fluid">
                   
                    <div class="new-projects-us mt-lg-4 mt-3">
                        <h6>
                           MillennialCare
                        </h6>
                        <p class="mt-lg-3 mt-2">At Millennial Care, we provide quality, sustainable and flexible
                            services that uphold human rights
                            and create opportunities.</p>
                    </div>
                </div>
                </a>
            </div>
            <div class="col-lg-6 col-md-6 gallery-img-grid my-3">
            <a href="http://sheeranalyticsandinsights.com/" target="_blank">
                <div class="gallery-grids">
                    
                        <img src="images/SAINew.png" alt="news image" class="img-fluid">
                    
                    <div class="new-projects-us mt-lg-4 mt-3 ">
                        <h6>
                            Sheer Analytics and Insights
                        </h6>
                        <p class="mt-lg-3 mt-2">The global Market Research Industry over a period has
                            evolved from being value proposition driven to become client oriented and output driven.</p>
                    </div>
                </div>
                </a>
            </div>
            <div class="col-lg-6 col-md-6 gallery-img-grid my-3">
            <a href="https://www.hybridskill.com/" target="_blank">
                <div class="gallery-grids">
                    
                        <img src="images/HybridSkill.png" alt="news image" class="img-fluid">
                    
                    <div class="new-projects-us mt-lg-4 mt-3">
                        <h6>
                            HybridSkill
                        </h6>
                        <p class="mt-lg-3 mt-2"> We are on a mission to deliver cutting-edge consulting
                            and training solutions to the Information Technology.</p>
                    </div>
                </div>
                </a>
            </div>

            <div class="col-lg-6 col-md-6 gallery-img-grid my-3">
                <a href="http://rentronics.a1abilities.co.nz/" target="_blank">
                    <div class="gallery-grids">

                        <img src="images/Rentronics_Snapshot.png" alt="news image" class="img-fluid">

                        <div class="new-projects-us mt-lg-4 mt-3">
                            <h6>
                                Rentronics
                            </h6>
                            <p class="mt-lg-3 mt-2"> Web based solution for our customers based in New Zealand having multiple franchises across country for their rental business.</p>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    </div>

    </div>
</section>
<!--//gallery -->


<!-- team -->
<section class="clents py-lg-4 py-md-3 py-sm-3 py-3" id="team" style="color: #daf1f8;
    background: currentColor;">
    <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span>Why</span> Us?</h3>
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class=" text-center">
                    <div class=" mb-3">
                        <span class="fa fa-users fa-3x " aria-hidden="true" style="color: black;"></span>
                    </div>
                    <h5 class="my-3 text-dark">Efficient Developers</h5>
                    <p class="pt-2 px-2 text-dark text-justify">Our expert developers build highly efficient web
                        solutions using a robust web development framework that meets all Client Business .</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class=" text-center">
                    <div class=" mb-3">
                        <span class="fa fa-comments-o fa-3x " aria-hidden="true" style="color: black;"></span>
                    </div>
                    <h5 class="my-3 text-dark">Management & Comm.</h5>
                    <p class=" pt-2 px-2 text-dark text-justify">Whether it is long term collaboration or
                        just a small project,communication and our project management .</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class=" text-center">
                    <div class=" mb-3">
                        <span class="fa fa-laptop fa-3x " aria-hidden="true" style="color: black;"></span>
                    </div>
                    <h5 class="my-3 text-dark">Trusted Web Solution</h5>
                    <p class=" pt-2 px-2 text-dark text-justify">Our pragmatic approach and proven
                        methodology in developing customized web pages have offered trusted web solutions
                    </p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class=" text-center">
                    <div class=" mb-3">
                        <span class="fa fa-check fa-3x " aria-hidden="true" style="color: black;"></span>
                    </div>
                    <h5 class="my-3 text-dark">100% Code Safe </h5>
                    <p class=" pt-2 text-dark text-justify">We guarantee the 100% legal protection of our
                        clients and for every project we sign a non-disclosure agreement before we start
                        initial analysis.
                    </p>
                </div>
            </div>


        </div>

    </div>
    </div>
    </div>
</section>
<!-- //team -->
<section class="pb-4">
    <div class="container  py-md-4 py-sm-4 py-3">
        <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span>Our</span> Partners</h3>

        <div class="row">
            <div class="col-md-6 text-center">
                <a href="http://sargatechnology.com/" target="_blank">
                    <img src="images/STLogo.png" style="max-height:116px" alt="news image" class="img-fluid">
                </a>
            </div>
            <div class="col-md-6 text-justify">
                <a href="https://www.rentronics.co.nz/" target="_blank">
                    <img src="images/rentronics_logo2.png" alt="news image" class="img-fluid"
                        style="margin-top: 1rem;max-height:64px;margin-left:1px;">
                </a>
            </div>
            <!-- <div class="col-md-4 text-center">
              <a href="http://nubeselite.com/"  target="_blank" >
           <img src="images/Nubeselite 01.jpg"  alt="news image" class="img-fluid" style="margin-top: 1.5rem;max-height:77px">
           </a>
            </div> -->
        </div>


    </div>
</section>
<!--//contact-map -->

<!--contact-map -->
<section class="footer-bottom" id="contact" style="background-color: #c5e4e7;">
    <div class="container py-lg-5 py-md-4 py-sm-4 py-3">

        @if (count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach

            </ul>
        </div>
        @endif
        @if(session('error'))
        <div class="alert alert-danger" style="padding:4px;">{{session('error')}}</div>
        @endif
        @if(session('success'))
        <div class="alert alert-success" style="padding:4px;">{{session('success')}}</div>
        @endif
        <h3 class="title text-center mb-lg-5 mb-sm-4 mb-4">
            <span>Get in</span> Touch
        </h3>
        <div class=" contact-form-txt">
            <form action="{{route('contact')}}" method="post">
                {{ csrf_field() }}
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-3">
                        <input type="text" class="form-control" placeholder="First Name" name="firstname" required="">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-2">
                        <input type="text" class="form-control" placeholder="Last Name" name="lname" required="">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-3">
                        <input type="email" class="form-control" placeholder="Email" name="email" required="">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 form-group contact-forms mb-3">
                        <input type="text" class="form-control" placeholder="Mobile" name="mobile" required="">
                    </div>
                </div>
                <div class="form-group contact-forms">
                    <textarea class="form-control" placeholder="Message" rows="3" name="message" required=""></textarea>
                </div>
                <button type="submit" class="btn sent-butnn">Send</button>
            </form>
        </div>
    </div>
    <div class="address_mail_footer_grids">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5555388050793!2d144.7516093153163!3d-37.73010927976772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f50fa340f24b%3A0x4011fcd161b135c9!2s53%20Inglewood%20Dr%2C%20Burnside%20Heights%20VIC%203023%2C%20Australia!5e0!3m2!1sen!2sin!4v1576227983267!5m2!1sen!2sin"></iframe>
    </div>
</section>

@endsection
<!--//contact -->