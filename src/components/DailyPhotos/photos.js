const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { id: require("../../assets/images/DailyPhotos/IMG_1191.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DailyPhotos/IMG_1258.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DailyPhotos/IMG_1282.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_1305.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_1441.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DailyPhotos/IMG_1444.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_1450.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_1455.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DailyPhotos/IMG_1456.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DailyPhotos/IMG_1467.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_1565.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_5794.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DailyPhotos/IMG_5795.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_5804.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_5865.png"), width: 4034, height: 3024 },
    { id: require("../../assets/images/DailyPhotos/IMG_5867.png"), width: 4034, height: 3024 },
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
