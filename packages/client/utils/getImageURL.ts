export type CmsImage = {
    defaultHost: string;
    name: string;
    endpoint: string;
};


export enum ImageFormat {
    WEBP = 'webp',
    JPEG = 'jpeg',
    PNG = 'png',
    GIF = 'gif',
    DEFAULT = 'default'
}

export enum ImageScaleMode {
    ASPECT_RATIO = 'aspect',
    CROP = 'c',
    STRETCH = 's',

    TOP_LEFT = 'tl',
    TOP_CENTER = 'tc',
    TOP_RIGHT = 'tr',

    MIDDLE_LEFT = 'ml',
    MIDDLE_CENTER = 'mc',
    MIDDLE_RIGHT = 'mr',

    BOTTOM_LEFT = 'bl',
    BOTTOM_CENTER = 'bc',
    BOTTOM_RIGHT = 'br'
}

export enum ImageScaleFit {
    CENTER = 'center',
    POINT_OF_INTEREST = 'poi'
}

export type ImageTransformations = {
    format?: ImageFormat;
    seoFileName?: string;

    width?: number;
    height?: number;

    pointOfInterest?: { x: number, y: number };
    scaleMode?: ImageScaleMode;
    scaleFit?: ImageScaleFit;
    aspectRatio?: string;
    upscale?: boolean;
};

export function getImageURL(image: string | CmsImage, transformations: ImageTransformations = {}): string {

    const {
        seoFileName,
        format,
        width,
        height,
        pointOfInterest,
        scaleMode,
        scaleFit,
        aspectRatio,
        upscale
    } = transformations;

    let url = typeof image === 'string' ? image :
        `//${image.defaultHost}/i/${encodeURIComponent(image.endpoint)}/${encodeURIComponent(image.name)}`;

    if (seoFileName) {
        url += `/${encodeURIComponent(seoFileName)}`;
    }

    if (format && format !== ImageFormat.DEFAULT) {
        url += `.${format}`;
    }

    const query: string[] = [];

    const params = {
        'w': width,
        'h': height,
        'sm': scaleMode,
        'scaleFit': scaleFit,
        'aspect': aspectRatio,
        'upscale': upscale
    };

    for (let param of Object.keys(params)) {
        const value = params[param];
        if (value !== undefined && value !== null) {
            query.push(`${param}=${value}`);
        }
    }

    if (pointOfInterest) {
        query.push(`poi=${pointOfInterest.x},${pointOfInterest.y},0.01,0.01`);
    }

    if (query.length > 0) {
        url += `?${query.join('&')}`;
    }

    return url;
}