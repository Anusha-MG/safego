const getLocationCoordinates = async (req, res) => {
    const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    //const mapboxUrl =`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${req.body.location}.json?access_token=sk.eyJ1IjoiYW51c2hhbWciLCJhIjoiY2xpNW1vYnB2MHp3ZTNrbWxpN3h4cG9mbSJ9.xla4NwpS34kaYZyoG2Ir8g`
    try {
      const response = await fetch(mapboxUrl)
      const data = await response.json()

      console.log(data.features[0].center)
  
      res.status(200).send({ message: 'success', data: data.features[0].center })
    } catch (error) {
      res.status(500).send({ message: 'error', data: error.message })
    }
}
  
export default getLocationCoordinates