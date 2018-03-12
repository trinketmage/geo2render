export function LatLng2Vec3(lat, lon, radius) {
  var phi = lat * Math.PI / 180
  var theta = (lon - 180) * Math.PI / 180

  var x = radius * Math.cos(phi) * Math.cos(theta)
  var y = radius * Math.sin(phi)
  var z = radius * Math.cos(phi) * Math.sin(theta)
  return { x, y, z }
}
