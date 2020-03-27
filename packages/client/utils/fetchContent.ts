import fetch from 'isomorphic-unfetch';

export function fetchContent<T = any>(key: string, host?: string): Promise<T> {
    return fetch(`https://${host || process.env.contentApi}/content/key/${key}?depth=all&format=inlined`)
            .then(resp => resp.json())
            .then(body => body.content);
}

export function fetchContentById<T = any>(id: string, host?: string): Promise<T> {
    return fetch(`https://${host || process.env.contentApi}/content/id/${id}?depth=all&format=inlined`)
            .then(resp => resp.json())
            .then(body => body.content);
}