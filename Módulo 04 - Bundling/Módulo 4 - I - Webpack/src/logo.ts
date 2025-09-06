export const printLogo = (logoImg: string) => {
    const img = document.createElement("img");
    img.src = logoImg;
    document.getElementById("imageContainer").appendChild(img);
}
