const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchForm.elements.query.value

    // Looks up Tv Show
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
    makeImages(res.data);

})

const makeImages = async (shows) => {
    try {
        for (let result of shows) {
            if (result.show.image) {
                const img = document.createElement('img');
                img.src = result.show.image.medium;
                document.body.append(img);
            }
        }
    }
    catch (e) {
        console.log("Error: ", e);
    }
}
