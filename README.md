# gemJam
## By Zoe McDaniel

*** 

A browser based game built using the Phaser.io framework and HTML5. Exploring a 2D platformer world, the player must locate gems without initiating a Game Over. The game features a timer as well as a score to compare previous attempts. I used the application Tiled to help me in generation a large 2D side scrolling world using an open source, small-sized spritesheet to allow for quick loading times. The game uses states to keep the code organzied and easy to use. All the assets are preloaded for quickness once the actual game has begun. 

*** 

##Assets used

* Tiled - http://www.mapeditor.org/ 
* Spritesheet assets by Kenney - http://kenney.nl/assets 
* Sound effects - http://opengameart.org/users/jalastram 
* Music - http://opengameart.org/users/lemon42 
* Bootstrap - http://getbootstrap.com/ 
* Phaser.io - http://phaser.io/ 
* jQuery - https://jquery.com/

***

##Demo

https://zmcdaniel.github.io/gemJam/

***

##Best Experiences

I enjoyed having a tangible result from a lot of work. The smallest game feature -- for example, having a platform on which your character can stand and not fall into eternity -- took a boatload of work. I can safely say that this was the most difficult but also the most rewarding task I've yet encountered. Learning a framework was an invaluable exercise that I'll be sure to use again.

***

##Worst Experiences

I vastly underestimated this undertaking. My original idea was far too ambitious and very heavy on the assets side. Perhaps I'll go back to it later, but I wish I realized the degree of difficulty sooner. I struggled alot with understanding how the game states worked and their relationship to each other. Although there is a lot of documentation out there for using Phaser, I found getting started and picking an approach extremely difficult. After several restarts, I decided to stick with the object literals approach, as that made more sense to me in terms of organization. Even though the game is a relatively simple side-scrolling platformer, I still found myself questioning where I put a certain variable or function. 

***

##If you had more time, what would you add?

A functioning HUD to display the score and time, as opposed to passing the info to the index
Make a high score logic function around whoever got to all the gems fastest (and store it in local storage for persistance)
Animations for walking, jumping, etc., as well as static animations for the environment (eg. bees flap their wings, water is animated, lavasnakes wiggle).
Change the water and lava to sprite layers, so contact would result in death (currently they are just non-collision layers, so the player falls through)
Music! Right now it's just gem, I want to to be Jam!


***

##Q&A
