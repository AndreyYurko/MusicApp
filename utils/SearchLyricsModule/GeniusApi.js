export const searchGenius = async (query) => {
  const url = "https://genius.p.rapidapi.com/search?q=" + encodeURIComponent(query)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d0c8dc11dmsh3c73bbef55d1600p1204a5jsn4c65a6eadf7f',
      'X-RapidAPI-Host': 'genius.p.rapidapi.com'
    }
  }
  try {
    const response = await fetch(url, options)
    const json = await response.json()
    return parseJsonGeniusSearch(json)
  } catch (error) {
    console.error(error);
  }
}

const parseJsonGeniusSearch = (json) => {
  //console.log(json)
  const hits = json.response.hits
  //console.log(hits)
  const songsList = []
  for (let i=0; i<hits.length; i++) {
    const result = hits[i].result
    //console.log(result)
    songsList.push({
      songName: result.title_with_featured,
      artistName: result.artist_names,
      id: result.id,
      lyrics: ''
    })
  }
  return songsList
}