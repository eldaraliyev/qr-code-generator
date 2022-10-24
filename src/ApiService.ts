const URL = 'https://api.qrserver.com/v1/create-qr-code'

const SIZE = 150

async function fetchApi(payload: any): Promise<any> {
  const reader = new FileReader()
  try {
    const response = await fetch(`${URL}/?data=${payload};&amp;size=;${SIZE}x${SIZE}`)
    let result;
    const convertedImage = await response.blob()
    reader.readAsDataURL(convertedImage)
    reader.onloadend = () => {
      result = reader.result
      return result
    }
  } catch (error) {
    throw new Error(`Error has occured. ${error}`);
  }
}


export default fetchApi