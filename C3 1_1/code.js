var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["23e8096f-dcbf-40fc-bfa4-24f33b16acb6","a71a70da-3b87-4984-979e-ebafd076bec8"],"propsByKey":{"23e8096f-dcbf-40fc-bfa4-24f33b16acb6":{"name":"ghost_standing_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sGLFDy168GSBfI5ybuBb2KHSBqLUdc71/category_fantasy/ghost_standing.png","frameSize":{"x":72,"y":158},"frameCount":7,"looping":true,"frameDelay":2,"version":"sGLFDy168GSBfI5ybuBb2KHSBqLUdc71","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":158},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sGLFDy168GSBfI5ybuBb2KHSBqLUdc71/category_fantasy/ghost_standing.png"},"a71a70da-3b87-4984-979e-ebafd076bec8":{"name":"helicopter_1","sourceUrl":null,"frameSize":{"x":175,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"_uSVl_B_UiPWr72fMuH_fYwg4AkdXWLm","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":98},"rootRelativePath":"assets/a71a70da-3b87-4984-979e-ebafd076bec8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sprite = createSprite(100, 100, 20, 20);
sprite.setAnimation("ghost_standing_1");

var sprite2 = createSprite(200, 200, 20, 20);
sprite2.setAnimation("helicopter_1");

//cambiar dirección de las velocidades
sprite.velocityX=2; 
sprite.velocityY=-2;
createEdgeSprites();
function draw() {
 background("white");
 tamaño(sprite2);
 sprite.bounceOff(edges);
   
  moverse(sprite2);
  drawSprites();
}
function moverse(sprite){
 sprite.rotation = sprite.rotation +10;
}

function tamaño(sprite){
  sprite.scale=0.5;
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
