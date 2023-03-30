function AngleBetweenThreePoints(pos) {
    let a= Math.pow(pos[1].x - pos[0].x, 2)
          +Math.pow(pos[1].y - pos[0].y, 2);
    let b= Math.pow(pos[2].x - pos[2].x, 2)
          +Math.pow(pos[1].y - pos[2].y, 2);
    let c= Math.pow(pos[2].x - pos[0].x, 2)
          +Math.pow(pos[2].y - pos[0].y, 2);

      //     working on the formula of
      //     cos(C) = (a^2 + b^2 - c^2) / 2*a*b or here we can say cos(C) = (a + b - c) / Math.sqrt(4*a*b)
      //     but here we have already calculated the squares of the distances between points
    var result = (Math.acos((a+b-c) / Math.sqrt(4*a*b)) * 180) / Math.PI;

  return result;
}

export default AngleBetweenThreePoints