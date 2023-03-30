function Angle(pos) {
    let a= Math.pow(pos[1].x - pos[0].x, 2)
          +Math.pow(pos[1].y - pos[0].y, 2);
    let b= Math.pow(pos[2].x - pos[2].x, 2)
          +Math.pow(pos[1].y - pos[2].y, 2);
    let c= Math.pow(pos[2].x - pos[0].x, 2)
          +Math.pow(pos[2].y - pos[0].y, 2);

    var result = (Math.acos((a+b-c) / Math.sqrt(4*a*b)) * 180) / Math.PI;

  return result;
}

export default Angle