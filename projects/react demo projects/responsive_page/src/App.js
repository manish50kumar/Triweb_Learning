
import './App.css';

function App() {
  return (
    <div >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
             <a class="navbar-brand" href="#">Navbar</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                       <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
        
                  </div>
              </div>
          </div>
      </nav>

      <div class="main">
        <h1 class="h1-tag">This is a responsive page</h1> 
        <div class="grand-parent">
            <div class="parent">
                 <div class="child">
                      <img src='https://images.pexels.com/photos/2581917/pexels-photo-2581917.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                </div>
                <div class="child">
                     <p class="p1">Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragraph.Nature provides us with water to drink, air to breathe, food to eat, clothes to wear, and a shelter to live in. Imbalance in nature can be life-threatening to all. Many factors are disturbing the balance of nature, like industrialisation, technology, etc. Nature conservation is an important factor in saving nature</p>
                </div>
            </div>      
        
            <div class="parent">
                  
                   <div class="child">
                        <p class="p2">Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious and valuable gift to humans. It is the principal source of all essential nutrients for all living things on the planet. 'Nature' is one of the topics on which we might be asked to write a paragraph.Nature provides us with water to drink, air to breathe, food to eat, clothes to wear, and a shelter to live in. Imbalance in nature can be life-threatening to all. Many factors are disturbing the balance of nature, like industrialisation, technology, etc. Nature conservation is an important factor in saving nature</p>
                  </div>
                   <div class="child">
                        <img src='https://images.pexels.com/photos/2581917/pexels-photo-2581917.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                   </div>
             </div>
         </div>
      </div>
    </div>
  );
}

export default App;
