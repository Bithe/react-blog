import React from "react";
import "./Post.css";
import images from "../images/images.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={images} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">work</span>
          <span className="postCat">life</span>
        </div>

        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          similique accusamus consequatur sint nostrum porro!
        </span>
        <hr />
        <span className="postDate"></span>
      </div>

      <p className="postDec">
      life is not easy, after losing my parents i become so alone lonely, i missed them every single moment, every day.
i wished a lot of things, if they alived i have done lot of things with them, they were the most important thing in my life.
My life was beautiful, i was strong, i lost my streanth, i became weak. i had  everything, coz my parents gave me everything, i never had to beg for anything, my parents did a lot of struggle to make our life helathy & wealthy. They made my strong so that i would never become depended on any other person, but after losing them i changed, i lost my focus, my dream. I had big dream in my life, i wanted to achive lot of things in my life, its not about money, my parents saved enough for us, we had roof up our head, so that after them we can live well. Its about the passion, dream, myself my hapiness which has gone with them.

mom dad why you guys left me alone, why you didnt took me with you, you guys knows that i never had done anything alone by myself, i was so depended on them, after them i just lost in the dark day by day, i never know what i should do, what i was doing. when they were alive i had lot of wishes. i had goals in my life, i wanted to achive lot of things, coz i had them to show mama papa i achived this, coz i know they would be the most hapiest person of my achivements. but after them i had no wishes, no goals, lo just lost myself fully. i got no one to share my sorrwos, my pain, with whom i can share my pain, what i was going through, i cant show people my inside feelings, i cried every day, but no one knows that, coz i cant show my pains, whenever i am with poeple they will see my smilling happy, but inside its burning me, i knew that this pain will increase day by day, coz when i lost them i was able to see that still they was dead but was infront of me, but inside i know i this pain will burn me day by day, it will go on and its creased. when poeple lost their loved ones, they suddenly feels a lot pain, day by day it decrease, but i know myself very well, for me its just opposite. i became mad, inside i am little girl still, who have lot 
i am a very strong person, but this i was not able accept, still i cant accpet it, after my parents i become weak, i can fight with whole world, but i cant fight with my this pain still. i just need them, i dont want anything i just need my parents back or i need to go to them. im just waiting ofr that day, tahts why i dont have any wishes in my life anymore.

every day i cried, i cant cry infront of people to show that i am missing my parents, i will not show to anyone how much i loved them i am missing them, only ALLAH and i know, its my most private things. This is my secrate, i am having issues to accept this that they are not here with me anymore. 
mom dad why you left me alone, i used to fight with my mom, coz she was the only person with whom i can show my everything, whenever i am feeling bad, my angry everything. coz i told her, mom with whom i will argue, if i cant do this with you, i love you a lot, you the most close person to me, thats why i am showing my feelings, my angry with you. now i lost that, please come back. 
If i am with lot of people, if i am outside having fun, still in my mind i am thinking about them, inside im getting hurt, but no one will ever understand, coz i can hide my this most private feelings very well.
    </p>
    </div>
  );
}
