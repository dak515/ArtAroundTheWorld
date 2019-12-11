//declaring size of the arrays

let arraySize = 10;

//Initializing boolean variables as false for each button

let tokyoIsClicked = false;
let parisIsClicked = false;
let mumbaiIsClicked = false;
let panamaIsClicked = false;
let capeTownIsClicked = false;
let losAIsClicked = false;
let buenosIsClicked = false;
let nuukIsClicked = false;
let magadanIsClicked = false;

//Creating image arrays for each of the cities on the map

let tokyoPaintings = ['./Images/tokyo_0.png', './Images/tokyo_1.png', './Images/tokyo_2.png', './Images/tokyo_3.png'];
let parisPaintings = ['./Images/paris_0.png', './Images/paris_1.png', './Images/paris_2.png', './Images/paris_3.png'];
let mumbaiPaintings = ['./Images/mumbai_0.png', './Images/mumbai_1.png', './Images/mumbai_2.png', './Images/mumbai_3.png'];
let panamaPaintings = ['./Images/panama_0.png', './Images/panama_1.png', './Images/panama_2.png', './Images/panama_3.png'];
let capeTownPaintings = ['./Images/capeTown_0.png', './Images/capeTown_1.png', './Images/capeTown_2.png', './Images/capeTown_3.png'];
let losAPaintings = ['./Images/LosAngeles_0.png', './Images/LosAngeles_1.png', './Images/LosAngeles_2.png', './Images/LosAngeles_3.png'];
let buenosPaintings = ['./Images/BuenosAires_0.png', './Images/BuenosAires_1.png', './Images/BuenosAires_2.png', './Images/BuenosAires_3.png'];
let nuukPaintings = ['./Images/nuuk_0.png', './Images/nuuk_1.png', './Images/nuuk_2.png', './Images/nuuk_3.png'];
let magadanPaintings = ['./Images/magadan_0.png', './Images/magadan_1.png', './Images/magadan_2.png', './Images/magadan_3.png'];

//Declaring arrays that will contain loaded images of each of the above arrays

let tokyoArray = [];
let parisArray = [];
let mumbaiArray = [];
let panamaArray = [];
let capeTownArray = [];
let losAArray = [];
let buenosArray = [];
let nuukArray = [];
let magadanArray = [];

//Initializing object

let imageObjects = [];



var imageNumber;

//Preloading images

function preload() {

  whiteBoard = loadImage('./Images/PLS.png');


 for (var i = 0; i < tokyoPaintings.length; i++){
    tokyoArray[i] = loadImage(tokyoPaintings[i]);
    console.log(tokyoArray[i]);
   }
   for (var i = 0; i < parisPaintings.length; i++){
      parisArray[i] = loadImage(parisPaintings[i]);
      console.log(parisArray[i]);
     }

     for (var i = 0; i < mumbaiPaintings.length; i++){
        mumbaiArray[i] = loadImage(mumbaiPaintings[i]);
       }

       for (var i = 0; i < panamaPaintings.length; i++){
          panamaArray[i] = loadImage(panamaPaintings[i]);
         }

         for (var i = 0; i < capeTownPaintings.length; i++){
            capeTownArray[i] = loadImage(capeTownPaintings[i]);
           }
           for (var i = 0; i < losAPaintings.length; i++){
              losAArray[i] = loadImage(losAPaintings[i]);
             }
             for (var i = 0; i < buenosPaintings.length; i++){
                buenosArray[i] = loadImage(buenosPaintings[i]);
               }
               for (var i = 0; i < nuukPaintings.length; i++){
                  nuukArray[i] = loadImage(nuukPaintings[i]);
                 }
                 for (var i = 0; i < magadanPaintings.length; i++){
                    magadanArray[i] = loadImage(magadanPaintings[i]);
                   }

}

//Creating a variable called canvas for ease of changing the position of it on the screen

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 5;
  cnv.position(15, 50);
}

function setup() {

//Creating a reset button that cleans the whole canvas when clicked on

  var resetIt = createButton("Erase");
  resetIt.position(490, 696);
  resetIt.mousePressed(resetSketch);
  resetSketch();
}

function resetSketch() {

  cnv = createCanvas(1200, 700);
  centerCanvas();

  var resetIt = createButton("Erase");
  resetIt.position(490, 696);
  resetIt.mousePressed(resetSketch);

  //Reset button not only clears the canvas

  document.getElementsByClassName('adding-area')[0].innerHTML = "";

  //Setting color of the buttons

  let col = color(255, 255, 255);

  //Declaring a variable selecting a random picture from the array

  var tokyoNumber = int(random(tokyoPaintings.length));
  var parisNumber = int(random(parisPaintings.length));
  var mumbaiNumber = int(random(mumbaiPaintings.length));
  var panamaNumber = int(random(panamaPaintings.length));
  var capeTownNumber = int(random(capeTownPaintings.length));
  var losANumber = int(random(losAPaintings.length));
  var buenosNumber = int(random(buenosPaintings.length));
  var nuukNumber = int(random(nuukPaintings.length));
  var magadanNumber = int(random(magadanPaintings.length));

// Creating a button for each of the cities and seeting a condition for it when clicked on

  Tokyo = createButton('Tokyo');
  Tokyo.size(100,40);
  Tokyo.position(970,290);
  Tokyo.style('background-color', col);
  Tokyo.style("font-family", "Bodoni");
  Tokyo.style("font-size", "20px");
  Tokyo.mouseClicked( function(){tokyoIsClicked = true} );


  Paris = createButton('Paris');
  Paris.size(100,40);
  Paris.position(520,270);
  Paris.style('background-color', col);
  Paris.style("font-family", "Bodoni");
  Paris.style("font-size", "20px");
  Paris.mouseClicked( function(){parisIsClicked = true} );

  Mumbai = createButton('Mumbai');
  Mumbai.size(100,40);
  Mumbai.position(800,360);
  Mumbai.style('background-color', col);
  Mumbai.style("font-family", "Bodoni");
  Mumbai.style("font-size", "20px");
  Mumbai.mouseClicked( function(){mumbaiIsClicked = true} );


  Panama = createButton('Panama');
  Panama.size(100,40);
  Panama.position(270,370);
  Panama.style('background-color', col);
  Panama.style("font-family", "Bodoni");
  Panama.style("font-size", "20px");
  Panama.mouseClicked( function(){panamaIsClicked = true} );

  CapeTown = createButton('Cape Town');
  CapeTown.size(160,40);
  CapeTown.position(600,540);
  CapeTown.style('background-color', col);
  CapeTown.style("font-family", "Bodoni");
  CapeTown.style("font-size", "20px");
  CapeTown.mouseClicked( function(){capeTownIsClicked = true} );

  LosA = createButton('Los Angeles');
  LosA.size(160,40);
  LosA.position(120,275);
  LosA.style('background-color', col);
  LosA.style("font-family", "Bodoni");
  LosA.style("font-size", "20px");
  LosA.mouseClicked( function(){losAIsClicked = true} );

  Buenos = createButton('Buenos Aires');
  Buenos.size(160,40);
  Buenos.position(330,540);
  Buenos.style('background-color', col);
  Buenos.style("font-family", "Bodoni");
  Buenos.style("font-size", "20px");
  Buenos.mouseClicked( function(){buenosIsClicked = true} );

  Nuuk = createButton('Nuuk');
  Nuuk.size(160,40);
  Nuuk.position(390,100);
  Nuuk.style('background-color', col);
  Nuuk.style("font-family", "Bodoni");
  Nuuk.style("font-size", "20px");
  Nuuk.mouseClicked( function(){nuukIsClicked = true} );

  Magadan = createButton('Magadan');
  Magadan.size(160,50);
  Magadan.position(950,160);
  Magadan.style('background-color', col);
  Magadan.style("font-family", "Bodoni");
  Magadan.style("font-size", "20px");
  Magadan.mouseClicked( function(){magadanIsClicked = true} );

}



function draw() {
  background(whiteBoard);
  image(top, 0, 0);

  for (let i=0; i<imageObjects.length; i++){
    imageObjects[i].moveFunction();
    imageObjects[i].dispLosAyCircle();
    if (imageObjects[i].isDead()) {imageObjects.splice(i, 1);}
  }

  // If the city is clicked upon, call three functions and create a new instance of that class

     if(tokyoIsClicked === true) {


      let num = int(random(tokyoPaintings.length));
      let imageFilename = tokyoPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-5, 5), random(-5, 5), random(10, 100)));

// Animating the title of the description when city button is clicked

      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "Experience the Contrasting Art Styles Throughout Japan";
      setTimeout(function() {
      document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      // Erasing all text on page
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      // Displaying text relevant to the city
      element.innerHTML = "Japanese Art covers a wide range of art styles, including ink painting and calligraphy on silk and paper, ukiyo-e paintings and woodblock prints. The ancient style, Yamato-e, or Japanese painting, grew originally out of Chinese Tang dynasty styles which penetrated Japan and were assimilated in early medieval times. Its more formal, more decorative, more colourful aesthetic was entirely opposite to the spontaneity, intuition and personal expression - usually in monochrome - of Zen ink-paintings. More recently, manga which is modern Japanese cartoons and comics along with a myriad of other types, have become popular art styles in Japan";
      document.getElementsByClassName('adding-area')[0].appendChild(element);

      // Resetting to false so it does not keep revealing images even when the mouse is moved away

      tokyoIsClicked = false;


    }


    if(parisIsClicked === true) {
      let num = int(random(parisPaintings.length));
      let imageFilename = parisPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20, 20), mouseY+random(-20, 20), random(-5, 5), random(-5, 5), random(10, 20)));


      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "Get an Impression of French Art History";
      setTimeout(function() {
        document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      element.innerHTML = "It all began with Medieval manuscript illumination, notably Romanesque illuminated manuscripts (c.1000-1150), Gothic illuminated manuscripts (c.1150-1350), and finally International Gothic illuminations. Realist paintings led to Impressionism in the 19th century. Impressionism then is the final attempt of the nineteenth century to paint just what the eye sees. It constitutes the turning point in the whole direction of art at the end of the nineteenth century. Its virtues were that it enlarged visual experience, widened the bracket once more. Early twentieth century paintings in France then included fauvism, expressionism, Dadaism, and Cubism.";
      document.getElementsByClassName('adding-area')[0].appendChild(element);


      parisIsClicked = false;


    }

      if(mumbaiIsClicked === true) {
      let num = int(random(mumbaiPaintings.length));
      let imageFilename = mumbaiPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-5, 5), random(-5, 5), random(10, 100)));

      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "Mapping the Eclectic Influences of Indian Art";
      setTimeout(function() {
        document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      element.innerHTML = "Originally, painting in India typically concerned religious deities and kings and was influenced in style by Chinese painting as well as the art of Ancient Persia and other countries from middle and central Asia, as well as Greece. Painting in India encompasses Buddhist murals to mixed-media embellished works. Geography, climate, local cultural traditions, demographics all help to shape art along regional lines. Also, outside artistic influences are more strongly felt in border regions. Not surprisingly, therefore, Indian painting is a complex patchwork of differing styles, with different approaches to both figure drawing and figure painting.";
      document.getElementsByClassName('adding-area')[0].appendChild(element);

      mumbaiIsClicked = false;
    }

      if(panamaIsClicked === true) {
      let num = int(random(panamaPaintings.length));
      let imageFilename = panamaPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-10, 10), random(-10, 10), random(10, 100)));

      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "Panama as a Work of Art";
      setTimeout(function() {
        document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      element.innerHTML = "Panamanian art reflects the country's ethnic mix with indigenous, African and Latin influences. Even though there is almost no government support for museums or artistic training, graffiti murals, small-scale expositions, and cooperatives are prevalent. Panama is itself considered a work of art. The various examples of indigenous arts in Panama continue to be a symbol of national art and pride, furthering the use of color and the natural surroundings as inspiration. Today, much of the traditional art of Panama has been preserved, but there is also an emerging art scene in Panama City offering anything from modern art paintings to wood carvings and interior design.";
      document.getElementsByClassName('adding-area')[0].appendChild(element);

      panamaIsClicked = false;
    }

      if(capeTownIsClicked === true) {
      let num = int(random(capeTownPaintings.length));
      let imageFilename = capeTownPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-15, 15), random(-15, 15), random(10, 100)));

      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "South African Art: From Prehistoric to Political";
      setTimeout(function() {
        document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      element.innerHTML = "The oldest art objects in the world were discovered in a South African cave. No wonder so much South African art includes historical and African themes. Contemporary art in South Africa is diverse and vibrant. Much of South African art gives insight into the issues of South African society. In the present era, traditional tribal forms of art were scattered and re-melded by the policies of apartheid, and new forms of art evolved. There also is the Dutch-influenced folk art and the urban white artists earnestly following changing European traditions from the 1850s onwards, making for an eclectic mix that continues to evolve today.";
      document.getElementsByClassName('adding-area')[0].appendChild(element);


      capeTownIsClicked = false;
    }

      if(losAIsClicked === true) {
      let num = int(random(losAPaintings.length));
      let imageFilename = losAPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-15, 15), random(-15, 15), random(10, 100)));

      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "California’s Wild Western Landscape Art";
      setTimeout(function() {
        document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      element.innerHTML = "Most early California paintings included landscape art that realistically represented the “Wild West” to the government in the East. The early California artists helped shape and create California in culture and politics. They often captured scenes of San Francisco Bay where ships docked and large numbers of people unloaded to stake claims in the California Gold Rush. Those artists produced paintings depicting the people and the character of their local geography as both grew from the twentieth into the twenty-first century. Major post-war art movements associated with California include the Light and Space Movement and Bay Area Figurative art.";
      document.getElementsByClassName('adding-area')[0].appendChild(element);

      losAIsClicked = false;
    }

      if(buenosIsClicked === true) {
      let num = int(random(buenosPaintings.length));
      let imageFilename = buenosPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-15, 15), random(-15, 15), random(10, 100)));

      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "Argentine Art: European Techniques with Latin Vivacity";
      setTimeout(function() {
        document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      element.innerHTML = "Argentinian art was historically inspired by Europe, but the turbulence and complexity of Latin America were also expressed. During the Spanish colonial era, painting developed for religious purposes in churches to Christianize indigenous peoples. The great wave of European immigration (1870–1930) established a strong relationship to European painting, mainly through Italian painters. In the early 1900s, Impressionism was introduced to Argentinian art. New waves of Argentinian art began with attention to aesthetics, social issues, and Italian immigration. Later, Naive art and abstract art became popular. Modern trends include figurativism, pop art, surrealism, hyperrealism, abstract art, kinetic art, and ephemeral art.";
      document.getElementsByClassName('adding-area')[0].appendChild(element);

      buenosIsClicked = false;
    }

      if(nuukIsClicked === true) {
      let num = int(random(nuukPaintings.length));
      let imageFilename = nuukPaintings[num];
      imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-15, 15), random(-15, 15), random(10, 100)));

      document.getElementById('cities').className = "";
      document.getElementById('cities').children[0].innerHTML = "Greenlandic Art through Time, Culture through time";
      setTimeout(function() {
        document.getElementById('cities').className = "first-text";
      }, 10);

      let element = document.createElement('p');
      document.getElementsByClassName('adding-area')[0].innerHTML = "";
      element.innerHTML = "Historically speaking, the art of Greenland has gone from the sealer/whaler cultures’ traditions of decorating on skin, garments and tools to the modern contemporary art that we know today. The first things we began to see were small watercolors, drawings and figurines/sculptures made by Greenlanders. In the middle of the 19th century art depicted the ancient Greenlandic myths and legends in watercolours. From the 1940s visual art had two primary forms of expression: To provide information or to depict the landscape as accurately as possible. Greenlandic artists today are particularly inspired by culture, wildlife and the natural world.";
      document.getElementsByClassName('adding-area')[0].appendChild(element);

      nuukIsClicked = false;
    }

    if(magadanIsClicked === true) {
    let num = int(random(magadanPaintings.length));
    let imageFilename = magadanPaintings[num];
    imageObjects.push(new Imageez(imageFilename, mouseX+random(-20,20), mouseY+random(-20,20), random(-15, 15), random(-15, 15), random(10, 100)));

    document.getElementById('cities').className = "";
    document.getElementById('cities').children[0].innerHTML = "The Past and Future of Russian Art";
    setTimeout(function() {
      document.getElementById('cities').className = "first-text";
    }, 10);

    let element = document.createElement('p');
    document.getElementsByClassName('adding-area')[0].innerHTML = "";
    element.innerHTML = "Russian painting of the 18th century was dominated by portrait art and folk art, then the nineteenth century brought European Romanticism. Russian art then entered a period of turmoil and creativity as abstract art arose, but the majority of Russian painters remained naturalistic. Still life, which fitted well with the decorative and aesthetic philosophy of the World of Art movement, was also popular. In the modern era, with post-Impressionist influence, works became more colourful. Russian landscape art was also energized by French Impressionism. A number of abstract and semi-abstract movements sprang up in the second decade of the 20th century, including Russian Futurism.";
    document.getElementsByClassName('adding-area')[0].appendChild(element);

    magadanIsClicked = false;
  }


 }


function mouseAction(){

}

//Definition of the class Imageez
class Imageez{

  constructor(imagefile, x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.img = loadImage(imagefile);

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;

    this.lifeSpan = random(1);

  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Accelerate
    this.speedX *= 0.80;
    this.speedY *= 0.80;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //CLass function that displays the picture
  dispLosAyCircle(){
    push();
    noStroke();
    this.lifeSpan += 0.01;


    tint(255, 255-100*this.lifeSpan);
    let w = int(this.img.width*this.lifeSpan*0.5+1);
    let h = int(this.img.height*this.lifeSpan*0.5+1);
    let x = this.x - w/2;
    let y = this.y - h/2;
    image(this.img, x, y, w, h);
    pop();
  }

  isDead(){
    if (this.lifeSpan >= 2){
      return true;
    } else {
      return false;
    }
  }
}
