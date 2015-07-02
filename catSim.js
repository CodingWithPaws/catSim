alert(catSim loaded. Click OK to start!)

var start = prompt("You yawn and stretch as you wake from your nap. Do you want to PLAY, get some food to EAT, get PETS from your human, or get into TROUBLE?").toUpperCase();

switch(start) {
  case 'PLAY':
    var energy = prompt("Do you feel full of energy (YES or NO)?").toUpperCase();
    var obnoxious = prompt("Do you want to be loud and obnoxious?").toUpperCase();
    if(obnoxious === 'YES' && energy === 'YES') {
      alert("You rip through the rooms and halls like a cat possessed. Be sure to run overtop of your human for not noticing how bored you are!");
    } else {
      alert("Go find an empty box or paper bag to make a fort out of.");
    }
    break;
  case 'EAT':
    var empty = prompt("Let's go check the bowl. Is your bowl empty (YES or NO)?").toUpperCase();
    var full = prompt("Is it full?").toUpperCase();
    if(empty === 'NO' && full === 'YES') {
      alert("Your human is well trained, and you feast away.");
    } else {
      alert("You wonder if your human will ever learn to keep the bowl filled. Meow loudly until this oversight is properly rectified.");
    }
    break;

  case 'PETS':
    var occupied = prompt("Time to go demand attention. Is your human busy with something (YES or NO)?").toUpperCase();
    var ignore = prompt("Is your human trying to ignore you?").toUpperCase();
    if(occupied === 'YES' || ignore === 'NO') {
      alert("Your human understands your whims always come first. Enjoy your pets!");
    } else {
      alert("Meow loudly and trample your human's workspace until they learn it's just easier to give you your pets the first time you ask.");
    }
    break;
  case 'TROUBLE':
    var destroy = prompt("Are you in the mood to destroy something beautiful (YES or NO)?").toUpperCase();
    var newCouch = prompt("Has your human replaced their couch recently?").toUpperCase();
    if(destroy === 'YES' && newCouch === 'YES') {
      alert("Shred that couch until your claws are like tiny razors and your heart is content.");
    } else {
      alert("You'll have to settle for knocking drinks off of tables and kicking litter everywhere.");
    }
    break;
  default:
    alert("Try again, choosing PLAY, EAT, PETS, or TROUBLE!");
}
////////////////////////////////////////////////////////

var second = prompt("Well, that was fun for a while. Now do you want to LOAF around, set a belly TRAP, LOOK out the window, or get into TROUBLE?").toUpperCase();

switch(second) {
  case 'LOAF':
    var sunny = prompt("Do you see a sunny place to loaf (YES or NO)?").toUpperCase();
    var bored = prompt("Are you bored?").toUpperCase();
    if(sunny === 'YES' || bored === 'YES') {
      alert("Time for a catnap. *zZzZzZz*");
    } else {
      alert("Find whatever your human is working on and loaf directly in the center of it.");
    }
    break;
  case 'TRAP':
    var wantPets = prompt("Strategically lay out in the middle of a walkway or in the place your human normally sits. Do you want your belly pet (YES or NO)?").toUpperCase();
    var sure = prompt("Are you *sure* you want pets?").toUpperCase();
    if(wantPets === 'YES' && sure === 'YES') {
      alert("You successfully manipulated your human into giving you exactly what you want. Sprawl and enjoy your bellyrubs!");
    } else {
      alert("Clamp down on that hand like a bear trap and don't give it back until it's bleeding.");
    }
    break;

  case 'LOOK':
    var beetles = prompt("Go perch on the windowsill. Do you see beetles doing bug stuff (YES or NO)?").toUpperCase();
    var birds = prompt("Are there any birds out there?").toUpperCase();
    if(beetles === 'YES' || birds === 'YES') {
      alert("Chirp and chirr and spaz out!");
    } else {
      alert("It must be a slow day. You might as well nap until something more fun happens.");
    }
    break;
  case 'TROUBLE':
    var shelves = prompt("Are there shelves you're not allowed on (YES or NO)?").toUpperCase();
    var fragile = prompt("Are there fragile things on these shelves?").toUpperCase();
    if(shelves === 'NO' || fragile === 'NO') {
      alert("I suppose you could go hack up a hairball up there, just because.");
    } else {
      alert("Make a point to knock off anything you physically can, just because.");
    }
    break;
  default:
    alert("Try again, choosing LOAF, TRAP, LOOK, or TROUBLE!");
}

/////////////////////////////

var third = prompt("So much time, so little to do. Do you want to PESTER your human, go find a TOY, find a SNACK, or get into TROUBLE?").toUpperCase();

switch(third) {
  case 'PESTER':
    var glued = prompt("Is your human glued to a screen (YES or NO)?").toUpperCase();
    var block = prompt("Can you physically block them?").toUpperCase();
    if(glued === 'YES' && block === 'YES') {
      alert("Be as cute as you can while you position yourself in the dead center of your human's way. Stay there as long as possible.");
    } else {
      alert("Meow as sadly as you can until they have to pay you attention.");
    }
    break;
  case 'TOY':
    var interest = prompt("Are any of the multitudes of expensive toys catching your interest (YES or NO)?").toUpperCase();
    var notYours = prompt("Can you find anything of your human's that looks like fun?").toUpperCase();
    if(interest === 'NO' && notYours === 'YES') {
      alert("Remind your human why they can't have nice things. Tear it up!");
    } else {
      alert("Play around for about five minutes. Then spend an hour in a cardboard box, because that's much more entertaining.");
    }
    break;

  case 'SNACK':
    var hunger = prompt("Are you actually hungry (YES or NO)?").toUpperCase();
    var fresh = prompt("Is the food in your bowl fresh?").toUpperCase();
    if(hunger === 'YES' && fresh === 'YES') {
      alert("Your human deserves a present, maybe you can leave one on their pillow (if you get around to it). Chow down!");
    } else {
      alert("Meow incessently until your human refills your bowl with fresh food. Eat approximately three pieces and walk away.");
    }
    break;
  case 'TROUBLE':
    var energy = prompt("Do you have too much energy (YES or NO)?").toUpperCase();
    var busy = prompt("Is your human busy?").toUpperCase();
    if(energy === 'NO' || busy === 'NO') {
      alert("Curl up in your human's clean laundry and pre-apply fur.");
    } else {
      alert("Make loud noises in other rooms and act innocent and confused when your human investigates.");
    }
    break;
  default:
    alert("Try again, choosing PESTER, TOY, SNACK, or TROUBLE!");
}
