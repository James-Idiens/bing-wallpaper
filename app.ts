import axios, { AxiosError } from 'axios';
import wallpaper, { setWallpaper } from 'wallpaper'

async function getBingImageOfTheDay(): Promise<string> {
  try {
    const response = await axios.get('https://www.bing.com/HPImageArchive.aspx', {
      params: {
        format: 'js',
        idx: 0,
        n: 1,
      },
    });

    const imageUrlBase = response.data.images[0].urlbase;
    const imageUrl = `https://www.bing.com${imageUrlBase}_1920x1080.jpg`
    return imageUrl;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('An error occurred:', axiosError.message)
    } else {
      console.error('An error occurred:', error)
    }
    throw error; // Re-throw the error to propagate it if necessary
  }
}

async function main() {
  try {
    const imageUrl = await getBingImageOfTheDay()
    console.log('Bing image URL:', imageUrl)
    await setWallpaper(imageUrl)
    console.log('Wallpaper set successfully!')
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

main()