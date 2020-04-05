export const getImgUrl = (options) => {
    const sizes = {
        small: 'standard_small',
        large: 'portrait_uncanny'
    };
    console.log(options);
    const baseImg = options.image?.path;
    const imgSize = sizes[options.size];
    const ext = options.image?.extension;

    return `${baseImg}/${imgSize}.${ext}`;
}