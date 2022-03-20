const HomeScreen = {
    after_render: () => {
      const arts = document.querySelector(".arts");
      const modalTitle = document.getElementById("modalTitle");
      const modalBody = document.getElementById("modalBody");
      arts.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "Your Arts";
          modalBody.innerHTML = `
          <div class="art-images">
           <ul class="art-list">
               <li>
                   <div class="art-container">
                       <img src="./img/1.jpg" alt="image1">
                   </div>
               </li>
               <li>
                <div class="art-container">
                    <img src="./img/2.jpg" alt="image2">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/3.jpg" alt="image3">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/4.jpg" alt="image4">
                </div>
            </li>
           </ul> 
    </div>
            `
      })

      const babies = document.querySelector(".babies");
      babies.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "Your Babies";
          modalBody.innerHTML = `
          <div class="art-images">
           <ul class="art-list">
               <li>
                   <div class="art-container">
                       <img src="./img/sheba.png" alt="sheba">
                   </div>
               </li>
               <li>
                <div class="art-container">
                    <img src="./img/tom.png" alt="tom">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/whitecat.png" alt="whitecat">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/3babies.png" alt="3babies">
                </div>
            </li>
           </ul> 
    </div>
          `;
      })

      const artists = document.querySelector(".artists");
      artists.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "Your Fav Artists";
          modalBody.innerHTML = "I love your Artists"
      })

      const songs = document.querySelector(".songs");
      songs.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "Your Fav Songs";
          modalBody.innerHTML = "I love your Songs"
      })

      const memories = document.querySelector(".memories");
      memories.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "Special Memories";
          modalBody.innerHTML = "I love our Memories"
      })
    
    },
    render: () => {
        return `
        <div class="birthday-container">
        <div class="birthday-contents">
            <ul class="contents-list">
                <li>
                    <h1>Happy Birthday</h1>
                    <h2>Ankita 😄</h2>
                </li>
                <li>
                    <h4>Have a great birthday</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, totam!</p>
                </li>
            </ul>
        </div>
        <div class="birthday-image">
            <div class="image-container">
                <img src="https://tlr.stripocdn.email/content/guids/CABINET_34e1c02696a90003bbf75ba3babc3517/images/87761531901462073.png" alt="birthday-image">
            </div>
        </div>
    </div>
    <div class="cards">
        <div class="arts" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>Your Arts</h4>
        </div>
        <div class="babies" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>Your Babies</h4>
        </div>
        <div class="artists" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>Your Fav Artists</h4>
        </div>
        <div class="songs" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>Your Fav Songs</h4>
        </div>
        <div class="memories" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>Special Memories</h4>
        </div>
    </div>
    `
    }
}
export default HomeScreen;