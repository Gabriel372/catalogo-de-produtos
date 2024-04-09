
export async function CheckFormatImgIsLandScape(url: string): Promise<boolean | undefined> {
    return new Promise((resolve, reject) => {
     const img = new Image();
    img.onload = () => {
     const isLandscape = img.width > img.height;
    resolve(isLandscape) };
    img.onerror = reject;
     img.src = url }) }
