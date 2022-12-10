const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { id: require("../../assets/images/DayInTheLife/IMG_1330.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1331.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1335.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1336.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1337.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1338.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1339.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1341.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1344.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1345.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1348.png"), width: 3024, height: 4034 },
    { id: require("../../assets/images/DayInTheLife/IMG_1349.png"), width: 3024, height: 4034 },
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
