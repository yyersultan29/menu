export async function getBase64(docUrl: string): Promise<string> {
  try {
    const base64 = await fetch(docUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise((res) => {
          reader.onloadend = () => {
            res(reader.result);
          };
        });
      });

    return base64 + "";
  } catch (e) {
    console.log(e);
    return "Error";
  }
}
