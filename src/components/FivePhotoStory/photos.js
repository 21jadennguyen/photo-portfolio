const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { id: require("../../assets/images/FivePhotoStory/IMG_1281.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/FivePhotoStory/IMG_1179.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/FivePhotoStory/IMG_1180.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/FivePhotoStory/IMG_1201.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/FivePhotoStory/IMG_1297.png"), width: 4034, height: 3024 },
]

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: photo.id,
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.id,
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
