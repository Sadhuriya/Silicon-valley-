function detectollision(lplayer, healthJunk) {
  if (healthJunk != null) {
    playerPosition = lplayer.body.position;
    healthJunkPosition = healthJunk.body.position;

    var distance = dist(
      playerPosition.x,
      playerPosition.y,
      healthJunkPosition.x,
      healthJunkPosition.y
    );
    if (distance <= lplayer.radius + healthJunk.radius) {
      return true;
    }
  }
}
