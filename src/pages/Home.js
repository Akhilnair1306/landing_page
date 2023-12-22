import Header from "../components/Header"


export default function Home()

   {
    
    return(
        
        <div>
         <Header/>
        <div className="myComponent">
        <div class="carousel relative overflow-hidden aspect-w-1 aspect-h-1">
  <div id="slide1" class="carousel-item relative aspect-w-1 aspect-h-1">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full h-full object-cover" alt="Slide 1" />
    <div class="absolute inset-0 flex flex-col justify-end p-5">
      <div class="flex justify-between">
        <a href="#slide4" class="btn btn-circle">❮</a> 
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</div>


<div class= "latest">
    <h2>Latest</h2>
</div>
<div class="Card">
  <div class="flex flex-col md:flex-row justify-center items-center">
    <div class="card w-full md:w-80 h-96 bg-base-100 shadow-xl m-5 md:ml-20">
      <figure class="px-50 pt-50">
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions"></div>
      </div>
    </div>

    <div class="card w-full md:w-80 h-96 bg-base-100 shadow-xl m-5 md:ml-20">
      <figure class="px-50 pt-50">
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions"></div>
      </div>
    </div>

    <div class="card w-full md:w-80 h-96 bg-base-100 shadow-xl m-5 md:ml-20">
      <figure class="px-50 pt-50">
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Decoding the Data Universe: A Voyage into the World of Data Science</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions"></div>
      </div>
    </div>
  </div>
</div>

<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-400 rounded-full p-2 sm:w-auto md:w-auto lg:w-auto">
  explore more
</button>
<div class= "Rectangle">
<div class= "topics">
    <h2>Topics</h2>
</div>
<div className="flex">
<div className="card w-full md:w-1/2 lg:w-1/4 bg-base-100 shadow-xl image-full flex flex-col mb-4 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4">
    <figure>
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div className="card-body mt-auto ml-4 m-20">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
  </div>
  <div className="card w-full md:w-1/2 lg:w-1/4 bg-base-100 shadow-xl image-full flex flex-col mb-4 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4">
    <figure>
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div className="card-body mt-auto ml-4 m-20">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
  </div>
  <div className="card w-full md:w-1/2 lg:w-1/4 bg-base-100 shadow-xl image-full flex flex-col mb-4 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4">
    <figure>
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div className="card-body mt-auto ml-4 m-20">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
  </div>

  <div className="card w-full md:w-1/2 lg:w-1/4 bg-base-100 shadow-xl image-full flex flex-col mb-4 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4">
    <figure>
      <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div className="card-body mt-auto ml-4 m-20">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
  </div>
</div>




</div>
<div class="cc">
    <h6>campus credential</h6>
</div>
</div>
</div>
        
    )

    }